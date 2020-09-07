<template>
  <article class="article">
    <h1>{{ article.title }}</h1>
    <p class="article__date"><span class="sr-only">Post date:</span> {{ formatDate(article.createdAt) }}</p>
    <nav class="toc" v-if="article.toc.length > 0">
      <ul>
        <li v-for="link of article.toc" :key="link.id" :style="`margin-left: ${(link.depth - 1) * 20}px`">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <nuxt-content :document="article" />
  </article>
</template>
<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return {
        article
      }
    },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      }
    }
  }
</script>

<style>
  .article img {
    max-width: 100%;
  }

  .article__date {
    color: var(--grey);
    font-size: .9rem;
  }

  .toc {
    margin: 30px 0 50px;
  }

  .toc ul {
    position: relative;
    margin: 0;
    padding: 0;
    list-style: none;
    border-left: 3px solid var(--blue-darkest);
  }

  .toc ul::after {
    content: "";
    position: absolute;
    width: 0; 
    height: 0; 
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 10px solid var(--blue-darkest);
    left: -9px;
    bottom: -10px;
  }

  .toc li {
    margin: 5px 0;
    padding: 2px;
  }
</style>

