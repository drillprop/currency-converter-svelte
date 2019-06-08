<script>
  import Aside from "./Aside.svelte";
  import Main from "./Main.svelte";
  const currencyArray = ["usd", "eur", "czk"];
  const swapped = false;
</script>

<style>
  #container {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
</style>

<div id="container">
  <Aside currency={currencyArray[0]} />
  <Main {currencyArray} {swapped} currency={currencyArray[0].toUpperCase()} />
</div>
