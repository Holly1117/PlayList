import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import type { Game, Platform } from "./types";
import gamesData from "./data/games.json";
import platformsData from "./data/platforms.json";
import { ACCENT, THEME } from "./constants";
import { useGameFilters } from "./hooks/useGameFilters";
import { FilterPanel } from "./components/FilterPanel";
import { StatisticsPanel } from "./components/StatisticsPanel";
import { GameCard } from "./components/GameCard";
import { SCROLL_THRESHOLD, TOAST_DURATION } from "./constants";

const games = gamesData as Game[];
const platforms = platformsData as Platform[];

function App() {
  // ダークモード固定
  const isDarkMode = true;
  const theme = THEME.dark;
  const {
    searchQuery,
    setSearchQuery,
    purchaseFilter,
    togglePurchaseFilter,
    selectedRanks,
    toggleRank,
    gamesByPlatform,
    purchasedCount,
    unpurchasedCount,
    rankList,
  } = useGameFilters(games);

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // スクロールトップボタンの表示制御
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // トップへスクロール
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ゲームタイトルのコピー
  const copyGameTitle = async (title: string) => {
    try {
      await navigator.clipboard.writeText(title);
      setShowToast(true);
      setTimeout(() => setShowToast(false), TOAST_DURATION);
    } catch (err) {
      console.error("コピーに失敗しました", err);
    }
  };

  // プラットフォーム名の取得
  const getPlatformName = (platformNo: number) => {
    return (
      platforms.find((p) => p.platformNo === platformNo)?.platformName || "未定"
    );
  };

  // 発売日をソート可能な数値に変換 (未定や不正な日付は末尾に)
  const parseReleaseDateValue = (date?: string) => {
    if (!date || date === "9999-99-99" || date === "")
      return Number.POSITIVE_INFINITY;
    const t = Date.parse(date);
    return Number.isNaN(t) ? Number.POSITIVE_INFINITY : t;
  };

  return (
    <div className={`min-h-screen ${theme.bg} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto p-6">
        {/* ヘッダー */}
        <header className="mb-8 flex justify-center items-center">
          <h1
            className={`text-5xl md:text-6xl font-bold ${theme.text} mb-2 text-center`}
          >
            PlayList
          </h1>
        </header>

        {/* 購入済/未購入数 */}
        <StatisticsPanel
          purchasedCount={purchasedCount}
          unpurchasedCount={unpurchasedCount}
        />

        {/* フィルター機能 */}
        <FilterPanel
          theme={theme}
          isDarkMode={isDarkMode}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          purchaseFilter={purchaseFilter}
          onPurchaseFilterToggle={togglePurchaseFilter}
          selectedRanks={selectedRanks}
          onRankToggle={toggleRank}
          rankList={[...rankList]}
        />

        {/* ゲームリスト */}
        {Object.keys(gamesByPlatform).length > 0 ? (
          Object.keys(gamesByPlatform)
            .sort((a, b) => Number(a) - Number(b))
            .map((platformNo) => (
              <div key={platformNo} className="mb-8">
                <h2
                  className={`text-3xl font-bold ${theme.text} mb-6 flex items-center gap-3 py-2`}
                >
                  <span className={`${ACCENT.bg} w-2 h-10 rounded`}></span>
                  {getPlatformName(Number(platformNo))}
                  <span className={`text-xl ${theme.textMuted}`}>
                    ({gamesByPlatform[Number(platformNo)].length})
                  </span>
                </h2>
                <div className="game-grid">
                  {[...gamesByPlatform[Number(platformNo)]]
                    .sort(
                      (a, b) =>
                        parseReleaseDateValue(a.releaseDate) -
                        parseReleaseDateValue(b.releaseDate)
                    )
                    .map((game) => (
                      <GameCard
                        key={game.id}
                        game={game}
                        isDarkMode={isDarkMode}
                        theme={theme}
                        onGameClick={copyGameTitle}
                      />
                    ))}
                </div>
              </div>
            ))
        ) : (
          <div className="text-center py-12">
            <p
              className={`${
                isDarkMode ? "text-white/60" : "text-gray-500"
              } text-lg`}
            >
              該当するゲームが見つかりません
            </p>
          </div>
        )}

        {/* フッター */}
        <footer className={`mt-12 text-center ${theme.textSecondary} text-sm`}>
          <p>
            © PlayList 2026 -{" "}
            <a
              href="https://playlist.hiiragi.dev"
              className="no-underline hover:opacity-90"
            >
              playlist.hiiragi.dev
            </a>
          </p>
        </footer>
      </div>

      {/* スクロールトップボタン */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`${ACCENT.bg} fixed bottom-6 right-6 p-4 text-white rounded-md shadow-2xl transition transform hover:scale-110`}
          aria-label="トップへ戻る"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* トースト通知 */}
      {showToast && (
        <div
          className={`${ACCENT.bg} fixed top-6 left-1/2 transform -translate-x-1/2 text-white px-6 py-3 rounded-lg shadow-2xl z-50`}
        >
          ゲームタイトルをコピーしました。
        </div>
      )}
    </div>
  );
}

export default App;
