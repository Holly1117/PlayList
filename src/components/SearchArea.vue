<template>
  <div class="searchArea">
    <input
      class="searchBox"
      type="text"
      :value="searchQuery"
      @input="updateSearchQuery"
      placeholder="キーワードを入力してください"
    />
  </div>
</template>
  
<script>
export default {
  props: {
    modelValue: String,
  },
  data() {
    return {
      searchQuery: this.modelValue,
    };
  },
  methods: {
    updateSearchQuery(event) {
      this.searchQuery = event.target.value;
      this.$emit("update:modelValue", this.searchQuery);
    },
  },
};
</script>

<style scoped>
.searchArea {
  margin-top: 10px;
  text-align: center;
}

.searchBox {
  width: 70%;
  height: 2rem;
  font-size: 1rem;
  max-width: 500px;
  padding: 10px;
  border: solid 1px #e6e6e6;
}

.searchBox:focus {
  outline: none;
}

@media screen and (max-width: 480px) {
  .searchBox {
    width: 80%;
    height: 1rem;
  }
}
</style>
  