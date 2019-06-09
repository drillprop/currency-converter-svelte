<script>
  import Aside from "./Aside.svelte";
  import Main from "./Main.svelte";

  let pickedCurrency = "usd";
  let swapped = false;

  const changeCurrency = e => {
    pickedCurrency = e.detail.selected;
  };
  const swapCurrency = e => {
    swapped = !swapped;
  };
</script>

<style>
  #container {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
</style>

<div id="container">
  <Aside {pickedCurrency} />
  <Main
    {swapped}
    {pickedCurrency}
    on:changeCurrency={changeCurrency}
    on:swapCurrency={swapCurrency} />
</div>
