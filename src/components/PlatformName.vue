<template>
  <section>
    <h2>{{ platformName }}</h2>
    <div class="borderLine"></div>
  </section>
</template>
  
  <script>
export default {
  props: {
    platformName: String, // プラットフォーム名を受け取るプロパティ
  },
};
</script>
  