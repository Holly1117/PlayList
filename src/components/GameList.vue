<template>
  <div class="gameList">
    <!-- プラットフォーム名をキーとして繰り返し処理 -->
    <div v-for="(platformName, platformIndex) in platformNames" :key="platformIndex">
      <PlatformName :platformName="platformName" />
      <div class="gameInfoList">
        <!-- 各プラットフォームごとのゲーム情報を繰り返し処理 -->
        <GameCard
          v-for="(gameInfo, gameIndex) in platformData[platformName]"
          :key="gameIndex"
          :gameInfo="gameInfo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PlatformName from "./PlatformName.vue";
import GameCard from "./GameCard.vue";

export default {
  props: {
    filteredGames: Array, // フィルタリングされたゲーム情報の配列を受け取るプロパティ
  },
  data() {
    return {
      // プラットフォーム別のデータを格納するオブジェクト
      platformData: {
        "PlayStation5": [],
        "Nintendo Switch": [],
        "PlayStation4": [],
        "PlayStation Vita": [],
        "Nintendo 3DS": [],
        "PlayStation3": [],
        "Nintendo Wii": [],
        "Xbox 360": [],
        "PlayStation Portable": [],
        "Nintendo DS": [],
        "Nintendo GAMECUBE": [],
        "Nintendo Game Boy Advance": [],
        "PlayStation2": [],
        "PC": [],
        "ADULTGAME": [],
      },
    };
  },
  computed: {
  platformNames() {
    // プラットフォーム名の配列を取得し、空のキーを削除
    return Object.keys(this.platformData).filter((key) => this.platformData[key].length > 0);
  },
},
  watch: {
    filteredGames: {
      immediate: true, // コンポーネントがマウントされるときにも実行
      handler: function (newFilteredGames) {
        // プラットフォームデータをリセット
        for (const platform in this.platformData) {
          this.platformData[platform] = [];
        }
        // 新しい filteredGames を使って platformData を再構築する
        newFilteredGames.forEach((game) => {
          const platform = game.platform;
          this.platformData[platform].push(game);
        });
      },
    },
  },
  components: {
    PlatformName,
    GameCard,
  },
};
</script>

<style scoped>
.gameList {
  margin: 0 auto;
  max-width: 1400px;
  width: 95%;
}

.gameInfoList {
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
  justify-content: space-around;
}
</style>
  