from flask import Flask, render_template, request, session, redirect, url_for
import json
from convert_image import convert_images

app = Flask(__name__)

@app.route('/admin', methods=["GET", "POST"])
def admin():
    # JSONファイルからプラットフォームデータを読み込む
    with open("../src/data/platforms.json", "r", encoding="utf-8") as f:
        platform_data = json.load(f)

    if request.method == 'POST':
        game_title = request.form['game_title']
        game_platform = request.form['game_platform']
        game_image = request.form['game_image']
        game_date = request.form['game_date']
        game_status = request.form['game_status']
        game_format = request.form['game_format']
        game_rank = request.form['game_rank']
        if len(game_date) == 0:
            game_date = "9999-99-99"
        if game_title != '' and game_image != '':
            gameRegiter(game_title, game_platform,
                        game_image, game_date, game_status, game_format, game_rank)
            convert_images()
        return render_template('admin.html', platforms=platform_data)

    return render_template('admin.html', platforms=platform_data)

@app.route('/edit/<int:game_id>', methods=["GET"])
def get_game(game_id):
    with open("../src/data/games.json", "r", encoding="utf-8") as f:
        games = json.load(f)
    for game in games:
        if game["id"] == game_id:
            return game
    return {}, 404  # 該当するゲームが見つからない場合

@app.route('/edit', methods=["GET", "POST"])
def edit_game():
    if request.method == "POST":
        game_id = int(request.form['game_id'])
        with open("../src/data/games.json", "r", encoding="utf-8") as f:
            games = json.load(f)

        # 指定されたIDのゲーム情報を更新
        for game in games:
            if game["id"] == game_id:
                game["title"] = request.form['game_title']
                game["platformNo"] = int(request.form['game_platform'])
                game["image"] = request.form['game_image']
                game["releaseDate"] = request.form['game_date']
                
                # purchaseFlag: "購入済" -> True, "未購入" -> False
                game["purchaseFlag"] = request.form['game_status'] == "購入済"
                
                # packageFlag: "パッケージ版" -> True, "ダウンロード版" -> False
                game["packageFlag"] = request.form['game_format'] == "パッケージ版"
                
                game["rank"] = request.form['game_rank']
                break

        # 更新後のデータを保存
        with open("../src/data/games.json", "w", encoding="utf-8") as f:
            json.dump(games, f, indent=2, ensure_ascii=False)

        return redirect('/edit')

    # GETリクエストの場合、編集画面を表示
    with open("../src/data/platforms.json", "r", encoding="utf-8") as f:
        platform_data = json.load(f)
    return render_template('edit.html', platforms=platform_data)

@app.route('/search', methods=["GET"])
def search():
    query = request.args.get('q', '').lower()
    with open("../src/data/games.json", "r", encoding="utf-8") as f:
        games = json.load(f)
    results = [
        {"id": game["id"], "title": game["title"]}
        for game in games
        if query in game["title"].lower()
    ]
    return results

def gameRegiter(game_title, game_platform, game_image, game_date, game_status, game_format, game_rank):
    with open("../src/data/games.json", "r", encoding="utf-8") as j_r:
        j_show = json.load(j_r)
    platform_code = {"未購入": False, "購入済": True}
    format_code = {"パッケージ版": True, "ダウンロード版": False}
    gameInfo = {
        "title": game_title,
        "platformNo": int(game_platform),  # 数値に変換
        "image": game_image,
        "releaseDate": game_date,
        "purchaseFlag": platform_code[game_status],
        "packageFlag": format_code[game_format],
        "rank": game_rank,
    }
    j_show.append(gameInfo)
    with open("../src/data/games.json", "w", encoding="utf-8") as j_w:
        json.dump(j_show, j_w, indent=2, ensure_ascii=False)

if __name__ == '__main__':
    app.debug = True
    app.run()
