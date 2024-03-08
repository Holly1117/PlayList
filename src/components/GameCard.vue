<template>
  <div class="gameCard">
    <a :href="gameInfo.url" target="_blank">
      <img
        :class="{ gameImg: true, gameImgFilter: gameInfo.purchaseStatus === 0 }"
        :src="gameInfo.image"
        :title="gameInfo.title"
      />
    </a>
    <div class="gameName" ref="elementToCopy" @click="copyToClipboard">
      {{ gameInfo.title }}
    </div>
    <div
      :class="[
        'gameInfoBox',
        'gameStatusColor' + (gameInfo.purchaseStatus === 0 ? 'Off' : 'On'),
      ]"
    >
      <div class="gameInfoBoxLeft">
        <div class="gameInfo">
          {{
            gameInfo.releaseDate === "9999-99-99"
              ? "未定"
              : gameInfo.releaseDate
          }}
        </div>
        <div class="gameInfo">
          {{ gameInfo.packageType === 0 ? "パッケージ版" : "ダウンロード版" }}
        </div>
        <div class="gameInfo">
          {{ gameInfo.purchaseStatus === 0 ? "未購入" : "購入済" }}
        </div>
      </div>
      <div class="gameRank">{{ gameInfo.rank }}</div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      copiedText: "",
    };
  },
  props: {
    gameInfo: Object, // ゲーム情報を受け取るプロパティ
  },
  methods: {
    copyToClipboard() {
      const textToCopy = this.$refs.elementToCopy.innerText;

      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          this.copiedText = textToCopy;
        })
        .catch((err) => {
          console.error("Error copying to clipboard:", err);
        });
    },
  },
};
</script>

<style scoped>
.gameCard {
  width: 240px;
  margin: 22px 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.gameName {
  text-align: left;
  color: #3c3c3c;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 5px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  flex-grow: 1;
}

.gameImg {
  max-width: 240px;
  height: 150px;
}

.gameImg:hover {
  opacity: 0.5;
  transition: 0.3s;
}

.gameImgFilter {
  filter: grayscale(1);
}

.gameInfoBox {
  text-align: left;
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.gameInfoBoxLeft {
  flex: 1;
  width: 50%;
}

.gameStatusColorOn {
  border-left: 3px solid #2ecc71;
}

.gameStatusColorOff {
  border-left: 3px solid #8c8c8c;
}

.gameInfo {
  font-size: 0.75rem;
  color: #8c8c8c;
  font-weight: bold;
}

@media screen and (max-width: 480px) {
  .gameCard {
    width: 160px;
  }

  .gameName {
    font-size: 0.75rem;
  }

  .gameImg {
    max-width: 160px;
    max-height: 100px;
  }
}
</style>
  