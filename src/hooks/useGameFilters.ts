import { useState, useMemo } from "react";
import type { Game, PurchaseFilter, Rank } from "../types";
import { RANK_LIST } from "../constants";

/**
 * ゲームフィルタリング用のカスタムフック
 * @param games ゲームデータの配列
 * @returns フィルタリング関連の状態と関数
 */
export const useGameFilters = (games: Game[]) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [purchaseFilter, setPurchaseFilter] = useState<PurchaseFilter[]>([
    "purchased",
    "unpurchased",
  ]);
  const [selectedRanks, setSelectedRanks] = useState<Rank[]>([
    ...RANK_LIST,
  ] as Rank[]);

  const togglePurchaseFilter = (filter: PurchaseFilter) => {
    setPurchaseFilter((prev) => {
      if (prev.includes(filter)) {
        return prev.filter((f) => f !== filter);
      } else {
        return [...prev, filter];
      }
    });
  };

  const toggleRank = (rank: Rank) => {
    setSelectedRanks((prev) =>
      prev.includes(rank) ? prev.filter((r) => r !== rank) : [...prev, rank]
    );
  };

  const { filteredGames, purchasedCount, unpurchasedCount } = useMemo(() => {
    let filtered = games;

    // 購入状態でフィルタリング
    if (purchaseFilter.length === 0) {
      filtered = [];
    } else if (purchaseFilter.length === 1) {
      if (purchaseFilter.includes("purchased")) {
        filtered = filtered.filter((g) => g.purchaseFlag);
      } else if (purchaseFilter.includes("unpurchased")) {
        filtered = filtered.filter((g) => !g.purchaseFlag);
      }
    }

    // 評価でフィルタリング
    // すべてOFF（length === 0）の場合は何も表示しない
    if (selectedRanks.length === 0) {
      filtered = [];
    } else {
      filtered = filtered.filter((g) => selectedRanks.includes(g.rank as Rank));
    }

    // 検索クエリでフィルタリング
    if (searchQuery) {
      filtered = filtered.filter((g) =>
        g.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 購入済/未購入のカウント
    const purchased = games.filter((g) => g.purchaseFlag).length;
    const unpurchased = games.filter((g) => !g.purchaseFlag).length;

    return {
      filteredGames: filtered,
      purchasedCount: purchased,
      unpurchasedCount: unpurchased,
    };
  }, [searchQuery, purchaseFilter, selectedRanks, games]);

  // プラットフォームごとにゲームをグループ化
  const gamesByPlatform = useMemo(() => {
    const grouped: Record<number, Game[]> = {};
    filteredGames.forEach((game) => {
      if (!grouped[game.platformNo]) {
        grouped[game.platformNo] = [];
      }
      grouped[game.platformNo].push(game);
    });
    return grouped;
  }, [filteredGames]);

  return {
    searchQuery,
    setSearchQuery,
    purchaseFilter,
    togglePurchaseFilter,
    selectedRanks,
    toggleRank,
    filteredGames,
    gamesByPlatform,
    purchasedCount,
    unpurchasedCount,
    rankList: RANK_LIST,
  };
};
