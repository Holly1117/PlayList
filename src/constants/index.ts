/**
 * 評価の定義
 */
export const RANK_LIST = ["SS", "S", "A", "B", "C", "D", "E"] as const;

/**
 * ダーク/ライトモードの色定義
 */
export const THEME = {
  dark: {
    // ダークモード
    bg: "bg-slate-900",
    text: "text-white",
    textSecondary: "text-slate-300",
    textMuted: "text-slate-400",
    card: "bg-slate-800/60",
    cardHover: "hover:bg-slate-700/50",
    input: "bg-slate-800 border-slate-700 text-white placeholder-slate-500",
    button: "bg-slate-700 text-white hover:bg-slate-600",
    accentBg: "bg-slate-600/30",
    accentText: "text-slate-200",
  },
};

/**
 * トースト表示時間
 */
export const TOAST_DURATION = 1000;

/**
 * スクロールトップボタン表示
 */
export const SCROLL_THRESHOLD = 300;

// カラー定数（クラス名）
export const ACCENT = {
  bg: "bg-[#2ecc71]",
  bgSoft: "bg-[#2ecc71]/30",
  ring: "focus:ring-[#2ecc71]",
  textOnAccent: "text-white",
};

export const PACKAGE_COLOR = {
  bgSoft: "bg-orange-400/30",
  text: "text-orange-200",
  lightBg: "bg-orange-600/30",
  lightText: "text-black",
};

export const DL_COLOR = {
  bgSoft: "bg-sky-400/30",
  text: "text-sky-200",
  lightBg: "bg-sky-600/30",
  lightText: "text-black",
};

/**
 * ランクごとの色クラス（緑以外を使用）
 * 背景とテキスト色を合わせて指定
 */
export const RANK_COLORS: Record<string, string> = {
  // 指定通り被らない色を設定
  SS: "bg-white text-black",
  S: "bg-amber-400 text-black", // 金色っぽく
  A: "bg-red-600 text-white",
  // 適当（被らない色）
  B: "bg-indigo-600 text-white",
  C: "bg-orange-500 text-white",
  D: "bg-pink-600 text-white",
  E: "bg-gray-400 text-black",
};
