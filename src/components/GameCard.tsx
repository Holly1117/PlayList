import { Box, Download } from "lucide-react";
import { PACKAGE_COLOR, DL_COLOR, RANK_COLORS } from "../constants";
import type { Game } from "../types";

interface GameCardProps {
  game: Game;
  isDarkMode: boolean;
  theme: {
    text: string;
  };
  onGameClick: (title: string) => void;
}

/**
 * ゲームカード
 */
export const GameCard = ({
  game,
  isDarkMode,
  theme,
  onGameClick,
}: GameCardProps) => {
  // パッケージ／DLタグ用のタグ
  const packageClasses = isDarkMode
    ? `${PACKAGE_COLOR.bgSoft} ${PACKAGE_COLOR.text}`
    : `${PACKAGE_COLOR.lightBg} ${PACKAGE_COLOR.lightText}`;

  const dlClasses = isDarkMode
    ? `${DL_COLOR.bgSoft} ${DL_COLOR.text}`
    : `${DL_COLOR.lightBg} ${DL_COLOR.lightText}`;

  // 未購入の場合はタグを表示しない

  // リリース日表示形式を決定
  const releaseDateClass = !game.purchaseFlag
    ? "text-gray-500"
    : isDarkMode
    ? "text-gray-300"
    : "text-gray-700";
  return (
    <div
      onClick={() => onGameClick(game.title)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onGameClick(game.title);
        }
      }}
      role="button"
      tabIndex={0}
      className="overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-slate-300"
    >
      <div className="relative">
        <div
          className={`h-[150px] ${
            isDarkMode ? "bg-slate-800" : "bg-gray-100"
          } flex items-center justify-center overflow-hidden mx-auto`}
        >
          <img
            src={game.image}
            alt={game.title}
            className={`w-full h-full object-cover ${
              !game.purchaseFlag ? "grayscale" : ""
            }`}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>
      </div>
      <div className="p-3 flex gap-3">
        <div className="w-[180px]">
          {/* タイトル */}
          <h3
            className={`${
              !game.purchaseFlag ? "text-gray-500" : theme.text
            } font-semibold text-sm mb-1 truncate`}
            title={game.title}
          >
            {game.title}
          </h3>
          <p className={`${releaseDateClass} text-xs`}>
            {!game.releaseDate ||
            game.releaseDate === "9999-99-99" ||
            game.releaseDate === ""
              ? "発売日未定"
              : game.releaseDate}
          </p>
          <div className="flex gap-2 mt-3 mb-2 items-center">
            {game.purchaseFlag && game.packageFlag && (
              <span
                className={`${packageClasses} text-xs px-3 py-1.5 rounded inline-flex items-center gap-1.5`}
              >
                <Box className="w-3.5 h-3.5" />
                パッケージ
              </span>
            )}
            {game.purchaseFlag && !game.packageFlag && (
              <span
                className={`${dlClasses} text-xs px-3 py-1.5 rounded inline-flex items-center gap-1.5`}
              >
                <Download className="w-3.5 h-3.5" />
                DL版
              </span>
            )}
          </div>
        </div>
        {game.rank && (
          <div className="flex items-center">
            <div
              className={`text-2xl font-bold px-4 py-2 rounded min-w-[3rem] flex items-center justify-center ${
                RANK_COLORS[game.rank as keyof typeof RANK_COLORS] ||
                "bg-slate-600 text-white"
              }`}
            >
              {game.rank}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
