<template>
  <footer class="footer">
    Made with    
    <div class="heart" style="display:grid;grid-template-columns:repeat(5,3px);grid-template-rows:repeat(5,3px);"><div style="background:#f6757a;grid-area:1/2/2/3"></div><div style="background:#f6757a;grid-area:1/4/2/5"></div><div style="background:#f6757a;grid-area:2/1/3/6"></div><div style="background:#f6757a;grid-area:3/1/4/6"></div><div style="background:#f6757a;grid-area:4/2/5/5"></div><div style="background:#f6757a;grid-area:5/3/6/4"></div></div> 
    by <a href="https://github.com/jackiecard" target="_blank">jackiecard</a>
  </footer>
</template>

<style scoped>
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 0 40px;
    color: var(--grey);
  }

  .heart,
  a {
    margin: 0 5px;
  }
</style>
