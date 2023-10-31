<template>
  <div>
    <header>
      <h1>PlayList</h1>
    </header>
    <PurchaseStatusArea :games="filteredGames" />
    <div class="customFilterArea">
      <SearchArea v-model="searchQuery" />
      <FilterArea @platformSelected="handlePlatformSelected" />
    </div>
    <GameList :filteredGames="filteredGames" />
    <div class="pageTop" v-show="scrollButtonActive" @click="pageTop">▲</div>
    <footer>
      <p>&copy; PlayList 2023 - <a href="adult">hiiragi.dev</a></p>
    </footer>
  </div>
</template>

<script>
import PurchaseStatusArea from "./components/PurchaseStatusCount.vue";
import SearchArea from "./components/SearchArea.vue";
import FilterArea from "./components/FilterArea.vue";
import GameList from "./components/GameList.vue";

export default {
  data() {
    return {
      games: [],
      filteredGames: [],
      searchQuery: "",
      selectedPlatform: "",
      scrollButtonActive: false,
      scrollSize: 0,
    };
  },
  created() {
    this.loadGameData();
  },
  mounted() {
    window.addEventListener("scroll", this.scrollWindow);
  },
  methods: {
    pageTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    scrollWindow() {
      const top = 100; //topから100pxスクロールしたらボタン登場
      this.scrollSize = window.scrollY; //垂直方向
      if (top <= this.scrollSize) {
        this.scrollButtonActive = true;
      } else {
        this.scrollButtonActive = false;
      }
    },
    loadGameData() {
      fetch("./json/game.json")
        .then((response) => response.json())
        .then((data) => {
          // ゲームデータの初期化
          this.games = data.sort(
            (a, b) =>
              this.parseDate(a.releaseDate) - this.parseDate(b.releaseDate)
          );
          this.filterGames();
        });
    },
    parseDate(dateString) {
      const parts = dateString.split("-");
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10) - 1;
      return new Date(year, month, day);
    },
    filterGames() {
      // 初期状態でフィルタリングなしの games のコピーを filteredGames にセット
      this.filteredGames = [...this.games];
      const filters = [];

      if (this.searchQuery) {
        // 検索クエリが存在する場合、ゲーム名でフィルタリング
        filters.push((game) =>
          game.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      if (this.selectedPlatform) {
        // 購入状態が選択されている場合、購入状態でフィルタリング
        filters.push(
          (game) =>
            this.selectedPlatform == "all" ||
            game.purchaseStatus == this.selectedPlatform
        );
      }

      // その他の条件に基づくフィルタリング関数

      // フィルタリング関数をすべて組み合わせて最終的なフィルタリング結果を抽出
      this.filteredGames = this.filteredGames.filter((game) =>
        filters.every((filter) => filter(game))
      );
    },
    handlePlatformSelected(selectedPlatform) {
      this.selectedPlatform = selectedPlatform;
    },
  },
  computed: {
    platformNames() {
      // 配列を持たないキーを除去
      return Object.keys(this.platformData).filter(
        (key) => this.platformData[key].length > 0
      );
    },
  },
  watch: {
    searchQuery: "filterGames",
    selectedPlatform: "filterGames",
  },
  components: {
    PurchaseStatusArea,
    SearchArea,
    FilterArea,
    GameList,
  },
};
</script>

<style scoped>
.customFilterArea {
  margin-top: 3%;
}

.pageTop {
  background-color: #2ecc71;
  color: #e6e6e6;
  display: block;
  text-align: center;
  border-radius: 5px;
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 60px;
  height: 60px;
  font-size: 2rem;
  line-height: 60px;
  transition: opacity 0.4s ease-in;
}

footer {
  margin-top: 5%;
  text-align: center;
  padding: 1px 0;
}

footer p {
  color: #3c3c3c;
  font-size: 0.75rem;
}

footer a {
  color: #3c3c3c;
}

@media screen and (max-width: 480px) {
  .customFilterArea {
    margin-top: 5%;
  }
}
</style>