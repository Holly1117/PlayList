import { Package, ShoppingCart } from "lucide-react";
import { ACCENT } from "../constants";

interface StatisticsPanelProps {
  purchasedCount: number;
  unpurchasedCount: number;
}

/**
 * 購入済/未購入数
 */
export const StatisticsPanel = ({
  purchasedCount,
  unpurchasedCount,
}: StatisticsPanelProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className={`${ACCENT.bg} rounded-lg p-6 text-white`}>
        <div className="flex items-center gap-3">
          <Package className="w-8 h-8" />
          <div>
            <p className="text-sm opacity-90">購入済</p>
            <p className="text-3xl font-bold">{purchasedCount}</p>
          </div>
        </div>
      </div>
      <div className="bg-slate-500 rounded-lg p-6 text-white ">
        <div className="flex items-center gap-3">
          <ShoppingCart className="w-8 h-8" />
          <div>
            <p className="text-sm opacity-90">未購入</p>
            <p className="text-3xl font-bold">{unpurchasedCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
