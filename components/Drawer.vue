<template>
  <div :class="['drawer', { 'drawer--open': open }]" id="navigation-menulist" :aria-expanded="open ? 'true' : 'false'">
    <ul ref="menuList">
      <li>
        <NuxtLink 
          to="/" 
          class="drawer__link" 
          @keyup.up.prevent.native="focusPrev($event, 0)"
          @keyup.down.prevent.native="focusNext($event, 0)"
          data-index="0">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink 
          to="/page/about" 
          class="drawer__link" 
          @keyup.up.prevent.native="focusPrev($event, 1)"
          @keyup.down.prevent.native="focusNext($event, 1)"
          data-index="1">
          About
        </NuxtLink>
      </li>
      <li>
        <NuxtLink 
          to="/page/projects" 
          class="drawer__link"
          @keyup.up.prevent.native="focusPrev($event, 2)"
          @keyup.down.prevent.native="focusNext($event, 2)"
          data-index="2">
          Projects
        </NuxtLink>
      </li>
      <li>
        <NuxtLink 
          to="/page/contact" 
          class="drawer__link"
          @keyup.up.prevent.native="focusPrev($event, 3)"
          @keyup.down.prevent.native="focusNext($event, 3)"
          data-index="3">
          Contact
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    open: { type: Boolean, required: false, default: false }
  },
  methods: {
    focusCloseButton() {
      document.getElementById('closeMenuBtn').focus();
    },
    focusPrev($event, index) {
      $event.preventDefault();

      const prev = this.$refs.menuList.querySelector(`[data-index="${index - 1}"]`);

      if (!prev) {
        this.focusCloseButton();
        return;
      }

      prev.focus();
    },
    focusNext($event, index) {
      $event.preventDefault();

      const next = this.$refs.menuList.querySelector(`[data-index="${index + 1}"]`);

      if (!next) {
        this.focusCloseButton();
        return;
      }

      next.focus();
    }
  }
}
</script>


<style lang="scss">
.drawer {
  font-family: var(--font-headings);
  display: none;
  position: absolute;
  top: 48px;
  left: 0;
  background: var(--white);
  min-width: 200px;
  min-height: 100px;
  border: 2px solid var(--blue-darkest);
  box-shadow: 0px 2px 0 0 #0000001c;
}

.drawer--open {
  display: block;
}

.drawer ul {
  --topLeftBorder: var(--blue-darkest);
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    border-bottom: 2px solid var(--blue-darkest);

    &:last-child {
      border-bottom: 0;
    }
  }

  .drawer__link {
    padding: 10px;
    text-decoration: none;
    display: block;
    color: var(--blue-darkest);
    font-size: 1.25rem;
    border: 0;

    &:hover,
    &:focus, {
      background-color: var(--blue-dark);
      color: var(--white);
      box-shadow: inset 0px 1px 0 0px var(--topLeftBorder), inset 1px 0 0 0px var(--topLeftBorder);
      outline: none;
    }

    &.nuxt-link-exact-active {
      --topLeftBorder: var(--blue-dark);

      background: var(--purple);
      color: var(--white);

      &:hover,
      &:focus, {
        background-color: var(--blue-dark);
        color: var(--white);
        box-shadow: inset 0px 1px 0 0px var(--topLeftBorder), inset 1px 0 0 0px var(--topLeftBorder);
      }
    }
  }
}
</style>
