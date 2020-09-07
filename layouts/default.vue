<template>
  <div>
    <header>
      <Navigation/>
      <div class="container" role="banner">
        <Logo/>
      </div>
    </header>
    <div class="container">
      <main>
        <Nuxt />
      </main>
      <Footer/>
    </div>
  </div>
</template>
<style lang="scss">
html {
  font-family: var(--font-family);
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

main {
  margin-top: 40px;
}

.container {
  position: relative;
  max-width: 48em;
  margin: auto;
  padding: 0 .75rem;
  width: 100%;

  @media screen and (min-width: 769px) {
    padding: 0 .5rem;
  }

  &--max {
    max-width: 68em;
  }
}

.sr-only {
  border: 0 !important;
	clip: rect(1px, 1px, 1px, 1px) !important;
	-webkit-clip-path: inset(50%) !important;
	clip-path: inset(50%) !important; 
	height: 1px !important;
	margin: -1px !important;
	overflow: hidden !important;
	padding: 0 !important;
	position: absolute !important;
	width: 1px !important;
	white-space: nowrap !important;  
}

.image-auto {
  width: auto;
  margin: auto;
  max-width: 100%;
}

button {
  background: transparent;
  border: 0;
}

button:focus,
input:focus,
textarea:focus {
  outline: 2px dashed var(--black);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-headings);
  margin: 1rem 0;
  color: var(--blue-darkest);
}

p {
  line-height: 1.5rem;
  margin: 10px 0;
}

* {
  line-height: 1.5rem;
}

a,
a:active {
  color: var(--pink-dark);
  border: 2px solid transparent;
}

a:hover,
a:focus {
  text-decoration: none;
  border: 2px dashed var(--black);
  outline: none;
}

a[tabindex="-1"] {
  border: 0;
}

.btn {
  --border: var(--black);
  --bg: var(--purple);
  --topLeftBorder: var(--purple-light);
  --bottomRightBorder: var(--purple-dark);

  &:active {
    --topLeftBorder: var(--purple-dark);
    --bottomRightBorder: var(--bg);
    color: var(--white);
  }
  
  &:hover {
    --bg: var(--purple-mid);
    border: 0;
  }

  font-family: var(--font-headings);
  font-weight: 500;
  display: inline-block;
  position: relative;
  background-color: var(--bg);
  color: var(--white);
  text-decoration: none;
  padding: 3px 8px;
  margin: 10px;
  cursor: pointer;
  border: 0;
  
  box-shadow: 0px -3px 0 0px var(--topLeftBorder), -3px -0 0 0px var(--topLeftBorder), 3px -0 0 0px var(--bottomRightBorder),  0 3px 0 0px var(--bottomRightBorder);
 
  &:before {
    content: '';
    position: absolute;
    display: block;
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    top: -3px;
    left: -3px;
    box-shadow: 0px -6px 0 -3px var(--border), 0px 6px 0 -3px var(--border);
    z-index: -1;
    border: 3px solid #000;
  }
  
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: calc(100% + 12px);
    height: 100%;
    top: 0px;
    left: -6px;
    background: transparent;
    border-left: 3px solid var(--border);
    border-right: 3px solid var(--border);
    box-shadow: 0px -3px 0 -3px var(--border);
    z-index: 2;
  }
}
</style>
