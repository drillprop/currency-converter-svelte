<script>
  import Aside from "./Aside.svelte";
  import Main from "./Main.svelte";
</script>

<style>
  #container {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
</style>

<div id="container">
  <Aside />
  <Main />
</div>
