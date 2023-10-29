<template>
  <div class="purchaseStatusCount">
    <div class="statusCount">
      <div class="statusLabel">未購入</div>
      <div class="statusValue">{{ notPurchasedCount }}</div>
    </div>
    <div class="statusCount">
      <div class="statusLabel">購入済</div>
      <div class="statusValue">{{ purchasedCount }}</div>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    games: Array, // ゲーム情報の配列を受け取るプロパティ
  },
  computed: {
    notPurchasedCount() {
      return this.games.filter((game) => game.purchaseStatus === 0).length;
    },
    purchasedCount() {
      return this.games.filter((game) => game.purchaseStatus === 1).length;
    },
  },
};
</script>

<style scoped>
.purchaseStatusCount {
  margin: 10px auto;
  text-align: center;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.statusCount {
  font-size: 1.2rem;
  text-align: center;
  padding: 3px;
}

.statusLabel {
  margin: 20px;
}
</style>
