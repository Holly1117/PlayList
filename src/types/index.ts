export interface Platform {
  platformNo: number;
  platformName: string;
  platformImage: string;
  squareTypeFlag: boolean;
}

export interface Game {
  id: number;
  title: string;
  platformNo: number;
  image: string;
  releaseDate: string;
  purchaseFlag: boolean;
  packageFlag: boolean;
  rank: string;
}

export type PurchaseFilter = "purchased" | "unpurchased";
export type Rank = "SS" | "S" | "A" | "B" | "C" | "D" | "E";

/**
 * モード設定の型定義
 */
export interface Theme {
  bg: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  card: string;
  cardHover: string;
  input: string;
  button: string;
}

/**
 * ゲームフィルターのカスタムフック戻り値の型定義
 */
export interface GameFilters {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  purchaseFilter: PurchaseFilter[];
  togglePurchaseFilter: (filter: PurchaseFilter) => void;
  selectedRanks: Rank[];
  toggleRank: (rank: Rank) => void;
  filteredGames: Game[];
  gamesByPlatform: Record<number, Game[]>;
  purchasedCount: number;
  unpurchasedCount: number;
  rankList: Rank[];
}

/**
 * テーマフックの戻り値の型定義
 */
export interface ThemeHook {
  isDarkMode: boolean;
  theme: Theme;
  toggleTheme: () => void;
}
