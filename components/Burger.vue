<template>
  <div class="burger">
    <div :class="['burger-icon', { 'burger-icon--open': open }]">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    open: { type: Boolean, required: false, default: false }
  }
}
</script>


<style>
.burger {
  height: 45px;
  width: 50px;
}

.burger-icon {
  width: 26px;
  height: 30px;
  position: relative;
  margin: 6px auto 0;
  transform: rotate(0deg);
  cursor: pointer;
}

.burger-icon span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: var(--white);
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  box-shadow: 0px 2px 0 0 #0000002c;
}

/* Icon 3 */

.burger-icon span:nth-child(1) {
  top: 24%;
}

.burger-icon span:nth-child(2),.burger-icon span:nth-child(3) {
  top: 54%;
}

.burger-icon span:nth-child(4) {
  top: 84%;
}

.burger-icon.burger-icon--open span:nth-child(1) {
  top: 54%;
  width: 0%;
  left: 54%;
}

.burger-icon.burger-icon--open span:nth-child(2) {
  transform: rotate(45deg);
}

.burger-icon.burger-icon--open span:nth-child(3) {
  transform: rotate(-45deg);
}

.burger-icon.burger-icon--open span:nth-child(4) {
  top: 54%;
  width: 0%;
  left: 54%;
}
</style>
