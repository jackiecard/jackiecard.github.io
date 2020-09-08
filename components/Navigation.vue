<template>
  <nav class="navigation">
    <div class="container container--max navigation__wrapper">
      <focus-trap v-model="open">
        <div v-clickout="clickout" ref="navigationMenu">
          <button 
            @click="toggle"
            :aria-label="open ? 'close menu' : 'open menu'"
            class="navigation__trigger"
            @keyup.up.prevent="focusMenuItem($event, 3)"
            @keyup.down.prevent="focusMenuItem($event, 0)"
            :aria-expanded="open ? 'true' : 'false'"
            aria-controls="navigation-menulist"
            id="closeMenuBtn">
            <Burger :open="open"/>
          </button>
          <Drawer :open="open" />
        </div>
      </focus-trap>
      <AppSearchInput />
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
    clickout() {
      return this.open = false;
    },
    focusMenuItem($event, index) {
      const firstOnTheList = this.$refs.navigationMenu.querySelector(`[data-index="${index}"]`);

      if (!firstOnTheList) {
        return;
      }

      firstOnTheList.focus();
    }
  }
}
</script>


<style>
.navigation {
  background-color: var(--blue-dark);
  height: 50px;
  border-bottom: 2px solid var(--blue-darkest);
  box-shadow: 0px 2px 0 0 #0000001c;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.navigation--trigger {
  height: 60px;
  color: var(--white);
}

.navigation__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  padding: 0;
}
</style>
