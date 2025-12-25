import json
import requests
import random
import string
import os

# ランダムな文字列を生成
def generate_random_string(length):
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))

# Content-Typeから拡張子を決定（劣化なし）
def get_extension_from_content_type(content_type):
    if "image/jpeg" in content_type:
        return "jpg"
    if "image/png" in content_type:
        return "png"
    if "image/webp" in content_type:
        return "webp"
    return None  # 未対応形式

# 画像処理（劣化ゼロ）
def process_item(item, count):
    product_image_url = item.get('image', '')
    item['id'] = count

    if not product_image_url.startswith("http"):
        return

    try:
        response = requests.get(product_image_url, timeout=10)
        response.raise_for_status()
    except Exception as e:
        print(f"画像ダウンロード失敗: {product_image_url} / {e}")
        return

    content_type = response.headers.get("Content-Type", "")
    ext = get_extension_from_content_type(content_type)

    if not ext:
        print(f"未対応形式スキップ: {content_type}")
        return

    random_filename = generate_random_string(10)
    output_image_path = f'../public/img/{random_filename}.{ext}'
    with_image_path = f'./img/{random_filename}.{ext}'

    # 🔒 バイナリをそのまま保存（再生成なし）
    with open(output_image_path, "wb") as f:
        f.write(response.content)

    item['image'] = with_image_path
    print(f"保存完了: {item.get('title', 'Unknown')}")

# メイン処理
def convert_images():
    with open('../src/data/games.json', 'r', encoding='utf-8') as json_file:
        data = json.load(json_file)

    for count, item in enumerate(data, start=1):
        process_item(item, count)

    with open('../src/data/games.json', 'w', encoding='utf-8') as output_file:
        json.dump(data, output_file, ensure_ascii=False, indent=4)

# 未使用画像削除
def remove_unused_images():
    json_file_path = '../src/data/games.json'
    image_dir = '../public/img/'

    with open(json_file_path, 'r', encoding='utf-8') as json_file:
        data = json.load(json_file)

    used_images = set(item.get('image', '') for item in data)

    for file_name in os.listdir(image_dir):
        if f'./img/{file_name}' not in used_images:
            os.remove(os.path.join(image_dir, file_name))
            print(f"未使用画像削除: {file_name}")

# 実行
convert_images()
remove_unused_images()
