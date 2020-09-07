<template>
  <img v-lazy="getPic(src)" :alt="alt" :class="classes" />
</template>

<script>
export default {
  props:{
    src: { type: String, required: true },
    alt: { type: String, required: true },
    classes: { type: String, required: false, default: null }
  },
  methods: {
    getPic(name) {
      return require('~/assets/images/' + name);
    },
  }
}
</script>
