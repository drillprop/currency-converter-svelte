<script>
  import Aside from "./Aside.svelte";
  import Main from "./Main.svelte";
  const currencyArray = ["usd", "eur", "czk"];
  let pickedCurrency = 0;
  const changeCurrency = () => {
    pickedCurrency += 1;
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
  <Aside {pickedCurrency} {currencyArray} />
  <Main {currencyArray} {swapped} {pickedCurrency} />
</div>
