<template>
  <div>
    <header class="main-header">
      <input
        class="search-input"
        placeholder="请输入区域、板块或小区名开始找房"
      />
      <button>搜索</button>
    </header>

    <section class="hero">
      <div class="message">
        message
      </div>
      <div class="award">
        award
      </div>
    </section>

    <section class="blog-posts">
      blog-posts blog-posts blog-posts blog-posts blog-posts blog-posts
      blog-posts blog-posts blog-posts blog-posts blog-posts blog-posts
      blog-posts blog-posts blog-posts blog-posts blog-posts blog-posts
      blog-posts blog-posts blog-posts blog-posts blog-posts blog-posts
      blog-posts blog-posts blog-posts blog-posts blog-posts blog-posts
      blog-posts blog-posts blog-posts blog-posts blog-posts blog-posts
    </section>

    <section class="news">
      news news news news news news news news news news news news news news news
      news news news news news news news news news news news news news news news
      news news news news news news news news news news news news news news news
      news news news news news news news news news news news news news news news
      news news news news news news news news news news news news news news news
      news news news news news news
    </section>
    <footer class="main-footer">
      main-footer
    </footer>
  </div>
</template>

<script>
import searchBox from "./searchBox";
import TopBar from "./TopBar";

export default {
  name: "app",
  components: { searchBox, TopBar }
};
</script>

<style scoped>
#app {
  display: grid;
  grid-template-columns: 12vw auto 12vw;
  grid-template-rows: 4vh 15vh 51vh auto auto 4vh;
  grid-template-areas:
    "top-bar     top-bar        top-bar"
    "main-header  main-header   main-header"
    ".           hero            ."
    ".           blog-posts      ."
    ".           news            ."
    "main-footer main-footer  main-footer";
  margin: 0;
}

.top-bar {
  grid-area: top-bar;
  background: #ecf0f1;
  display: flex;
  justify-content: space-around;
}

.main-header {
  grid-area: main-header;
  background: #bdc3c7;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero {
  grid-area: hero;
  display: grid;
  grid-template-columns: 17vw auto;
  /*grid-template-rows: auto auto auto;*/
  grid-template-areas: "message  award";
}

.blog-posts {
  grid-area: blog-posts;
  background: #8af;
}

.news {
  grid-area: news;
  background: #1bd;
}

.main-footer {
  grid-area: main-footer;
  background: #033;
}

.message {
  grid-area: message;
  border: solid #616161;
}

.award {
  grid-area: award;
  border: solid #616161;
}
</style>
