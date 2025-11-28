import { Search } from "lucide-react";
import type { PurchaseFilter, Rank } from "../types";
import { ACCENT } from "../constants";

interface FilterPanelProps {
  theme: {
    card: string;
    text: string;
    input: string;
    button: string;
  };
  // ダーク/ライトモード
  isDarkMode: boolean;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  purchaseFilter: PurchaseFilter[];
  onPurchaseFilterToggle: (filter: PurchaseFilter) => void;
  selectedRanks: Rank[];
  onRankToggle: (rank: Rank) => void;
  rankList: Rank[];
}

/**
 * フィルター機能
 */
export const FilterPanel = ({
  theme,
  isDarkMode,
  searchQuery,
  onSearchChange,
  purchaseFilter,
  onPurchaseFilterToggle,
  selectedRanks,
  onRankToggle,
  rankList,
}: FilterPanelProps) => {
  void isDarkMode;
  const panelClass = `${theme.card} backdrop-blur-md rounded-lg p-6 mb-6`;
  return (
    <div className={panelClass}>
      {/* 検索ボックス */}
      <div className="mb-4">
        <div className="relative">
          <Search
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400`}
          />
          <input
            type="text"
            placeholder="ゲームタイトルを検索..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`w-full pl-10 pr-4 py-3 ${theme.input} border rounded-lg focus:outline-none focus:ring-2 ${ACCENT.ring}`}
          />
        </div>
      </div>

      {/* 購入状態フィルター */}
      <div className="mb-4">
        <label className={`block ${theme.text} text-sm font-semibold mb-2`}>
          購入状態
        </label>
        <div className="flex gap-2">
          <button
            onClick={() => onPurchaseFilterToggle("purchased")}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-slate-300 ${
              purchaseFilter.includes("purchased")
                ? `${ACCENT.bg} ${ACCENT.textOnAccent}`
                : theme.button
            }`}
            aria-pressed={purchaseFilter.includes("purchased")}
          >
            購入済
          </button>
          <button
            onClick={() => onPurchaseFilterToggle("unpurchased")}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-slate-300 ${
              purchaseFilter.includes("unpurchased")
                ? `${ACCENT.bg} ${ACCENT.textOnAccent}`
                : theme.button
            }`}
            aria-pressed={purchaseFilter.includes("unpurchased")}
          >
            未購入
          </button>
        </div>
      </div>

      {/* 評価フィルター */}
      <div>
        <label className={`block ${theme.text} text-sm font-semibold mb-2`}>
          評価
        </label>
        <div className="flex flex-wrap gap-2">
          {rankList.map((rank) => (
            <button
              key={rank}
              onClick={() => onRankToggle(rank)}
              className={`py-1.5 px-4 rounded-lg text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-slate-300 ${
                selectedRanks.includes(rank)
                  ? `${ACCENT.bg} ${ACCENT.textOnAccent}`
                  : theme.button
              }`}
              aria-pressed={selectedRanks.includes(rank)}
            >
              {rank}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
