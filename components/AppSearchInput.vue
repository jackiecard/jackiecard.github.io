<template>
  <div class="search" v-clickout="close">
    <focus-trap v-model="open">
      <div class="search__control">
        <label for="search-field" class="sr-only">
          Search Articles
        </label>
        <input
          v-show="searchBoxVisible"
          v-model="searchQuery"
          type="search"
          id="search-field"
          autocomplete="off"
          placeholder="Search"
          ref="searchInput"
          @keyup.right="focusCloseButton"
          @keyup.down="focusFirstItem"
        />
        <div class="search__control__action">
          <button 
            v-if="!searchBoxVisible"
            ref="searchBtn"
            aria-label="open search box"
            aria-expanded="false"
            aria-controls="search-field"
            @click.prevent="showSearchBox"
            >
            <img src="~/assets/images/search.svg" alt="search"/>
          </button>
          <button 
            v-if="searchBoxVisible"
            ref="closeBtn" 
            @keyup.left="focusInput"
            @keyup.down="focusFirstItem"
            @click.prevent="close"
            aria-expanded="true"
            aria-controls="search-field"
            aria-label="close search box"
            >
              <img src="~/assets/images/close-3.svg" alt="close"/>
            </button>
        </div>
        <ul v-if="articles.length" class="search__list" ref="list">
          <li v-for="(article, i) of articles" :key="article.slug">
            <NuxtLink 
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              :data-index="i"
              @keyup.up.prevent.native="focusPrev($event, i)"
              @keyup.down.prevent.native="focusNext($event, i)">
              {{ article.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </focus-trap>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchQuery: '',
        articles: [],
        open: false,
        searchBoxVisible: false
      }
    },
    watch: {
      async searchQuery(searchQuery) {
        if (!searchQuery || searchQuery.length < 3) {
          this.articles = []
          return
        }
        this.articles = await this.$content('articles')
          .limit(6)
          .search(searchQuery)
          .fetch()

        this.open = this.articles.length > 0;
      }
    },
    methods: {
      showSearchBox() {
        setTimeout(() => {
          this.searchBoxVisible = true;
        }, 200)
        setTimeout(() => {
          this.focusInput();
        }, 300)
      },
      close() {
        this.articles = [];
        this.open = false;
        this.searchBoxVisible = false;
      },
      focusInput() {
        this.$refs.searchInput.focus();
      },
      focusCloseButton() {
        this.$refs.closeBtn.focus();
      },
      focusFirstItem($event) {
        if (this.articles.length < 1) {
          return;
        } 

        const firstOnTheList = this.$refs.list.querySelectorAll('a')[0];

        firstOnTheList.focus();
      },
      focusPrev($event, index) {
        $event.preventDefault();

        const prev = this.$refs.list.querySelector(`a[data-index="${index - 1}"]`);

        if (!prev) {
          this.focusInput();
          return;
        }

        prev.focus();
      },
      focusNext($event, index) {
        $event.preventDefault();

        const next = this.$refs.list.querySelector(`a[data-index="${index + 1}"]`);

        if (!next) {
          this.focusCloseButton();
          return;
        }

        next.focus();
      }
    }
  }
</script>

<style>
.search {
  position: relative;
  top: 0;
  right: 10px;
  height: 100%; 
}

.search__control {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  margin-left: -40px;
}

.search__control__action {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
}

.search__control label {
  color: var(--white);
}

@media screen and (min-width: 769px) {
  .search__control {
    margin-left: 0;
  }
}

.search input {
  font-family: var(--font-headings);
  height: 35px;
  border: 2px solid #000;
  padding: 10px;
}

.search input::placeholder {
  color: var(--blue-darkest);
  opacity: .9;
}

.search__list {
  position: absolute;
  font-family: var(--font-headings);
  background: var(--white);
  list-style-type: none;
  margin: 0;
  padding: 0;
  box-shadow: -1px 1px 0 2px #0000001c;
  width: 90vw;
  right: 0;
  top: 40px;
}

@media screen and (min-width: 769px) {
  .search__list {
    width: 50vw; 
  }
}

.search button {
  cursor: pointer;
}

.search__list li a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: var(--blue-darkest);
  font-weight: 500;
}

.search__list li a:hover,
.search__list li a:focus {
  background-color: var(--purple);
  color: var(--white);
}
</style>

