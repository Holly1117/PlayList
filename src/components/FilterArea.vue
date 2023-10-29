<template>
  <div class="filterArea">
    <select
      v-model="selectedPlatform"
      @change="emitPlatform"
      class="gameSelectBox"
    >
      <option value="all" selected>すべてのゲーム</option>
      <option value="0">未購入</option>
      <option value="1">購入済</option>
    </select>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      selectedPlatform: 'all',
    };
  },
  methods: {
    emitPlatform() {
      // カスタムイベントを発生させ、選択されたプラットフォームを親コンポーネントに送信
      this.$emit("platformSelected", this.selectedPlatform);
    },
  },
};
</script>

<style scoped>
.filterArea {
  margin-top: 10px;
  text-align: center;
}

.gameSelectBox {
  border: solid 1px #e6e6e6;
  padding-left: 1em;
  padding-right: 1em;
  width: 10%;
  max-width: 400px;
  min-width: 200px;
  font-size: 1rem;
  padding: 12px;
}

.gameSelectBox:focus {
  outline: none;
}
</style>