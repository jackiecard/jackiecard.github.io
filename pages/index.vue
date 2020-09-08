<template>
  <div>
    <h1>Blog Posts</h1>
    <ul class="posts">
      <li v-for="article of articles" :key="article.slug" class="post">
        <div>
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="post__title">
            <h2 :id="article.slug">
              {{ article.title }}
              <span v-if="article.lang === 'pt-BR'" class="sr-only">- This article is written in Brazilian Portuguese.</span>
            </h2>
          </NuxtLink>
          <p class="post__description">
            <v-clamp autoresize :max-lines="2">
              {{ article.description }}
            </v-clamp>
          </p>
        </div>
        <div class="post__footer">
          <div class="post__season">
            <img :src="getPic(getSeason(article.createdAt))" :alt="getSeason(article.createdAt)" />
            {{timeSince(article.createdAt)}} ago
          </div>
          <NuxtLink 
            :aria-describedby="article.slug"
            :to="{ name: 'blog-slug', params: { slug: article.slug } }" 
            aria-label="Read more about:"
            class="btn">
            Read More
          </NuxtLink>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .where({ draft: false })
        .only(['title', 'slug', 'category', 'description', 'createdAt', 'lang'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    },
    methods: {
      getPic(name) {
        return require('~/assets/images/' + name + '.svg');
      },
      timeSince(date) {
        var seconds = Math.floor((new Date() - new Date(date)) / 1000);

        var interval = seconds / 31536000;

        if (interval > 1) {
          return Math.floor(interval) === 1 ? "a year" : "a few years";
        }
        interval = seconds / 2592000;

        if (interval > 1) {
          return Math.floor(interval) === 1 ? "a month" : "a few months";
        }
        interval = seconds / 86400;

        if (interval > 1) {
          return Math.floor(interval) === 1 ? "a day" : "a few days";
        }
        interval = seconds / 3600;

        if (interval > 1) {
          return Math.floor(interval) === 1 ? "a hour" : "a few hours";
        }
        interval = seconds / 60;

        if (interval > 1) {
          return Math.floor(interval) === 1 ? "a minute" : "a few minutes";
        }

        return Math.floor(seconds) + " seconds";
      },
      getSeason(date) {
        const month = new Date(date).getMonth();

        let season = '';
        switch(month) {
            case 12:
            case 1:
            case 2:
                season = 'summer';
            break;
            case 3:
            case 4:
            case 5:
                season = 'fall';
            break;
            case 6:
            case 7:
            case 8:
                season = 'winter';
            break;
            case 9:
            case 10: 
            case 11:
                season = 'spring';
            break;
        }
        return season;
      }
    }
  }
</script>


<style lang="scss">

body {
  color: var(--blue-darkest);
}

.posts {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.post {
  margin: 40px 0;
}

.post__title {
  text-decoration: none;
  color: var(--blue-darkest);
  border: 0;
}

.post__title:hover {
  text-decoration: underline;
  border: 0;
}

.post__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post__season {
  color: var(--grey);
  font-size: .9rem;
}

.post__season img {
  height: 15px;
  margin-right: 5px;
}

.post__description {
  margin: 10px 0;
}
</style>
