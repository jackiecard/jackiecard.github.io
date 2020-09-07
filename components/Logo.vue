<template>
  <div>
    <div class="logo">
      <LazyImage src="itsme.svg" alt="it's me, Jackie"/>
    </div>
    <div class="cat">
      <div class="cat-image">
        <Salem />
      </div>
      <LazyImage src="poleiro3.svg" alt="cat bed" classes="poleiro"/>
    </div>
  </div>
</template>

<style>
.logo {
  text-align: center;
  margin: 20px auto 0;
  width: 300px;
  height: 256px;
}

.logo img {
  height: 256px;
  width: auto;
}

.cat {
  text-align: center;
  margin: 20px auto 0;
  width: 128px;
}

.cat .poleiro {
  display: none;
}

.cat .cat-image {
  position: absolute;
  bottom: -50px;
  right: 20px;
  width: 128px;
  height: 128px;
}

@media screen and (min-width: 1024px) {
  .logo {
    position: relative;
    height: auto;
  }

  .logo img {
    position: absolute;
    left: -480px;
    top: 20px;
  }

  .cat .cat-image {
    height: 128px;
    z-index: 2;
    top: calc(100vh - 310px);
    right: -199px;
    bottom: inherit;
  }

  .cat .poleiro {
    display: block;
    position: absolute;
    right: -190px;
    height: 208px;
    width: auto;
    top: calc(100vh - 246px);
  }
}
</style>
