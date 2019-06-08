<script>
  import Aside from "./Aside.svelte";
  import Main from "./Main.svelte";
  const currencyArray = ["usd", "eur", "czk"];
  let pickedCurrency = "usd";
  const changeCurrency = e => {
    pickedCurrency = e.detail.selected;
  };

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
  <Aside {pickedCurrency} />
  <Main
    {currencyArray}
    {swapped}
    {pickedCurrency}
    on:changeCurrency={changeCurrency} />
</div>
