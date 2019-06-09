<script>
  import HomeHeader from "./HomeHeader.svelte";
  import HomeSubtitle from "./HomeSubtitle.svelte";
  import SelectCurrency from "./SelectCurrency.svelte";
  import SwapCurrency from "./SwapCurrency.svelte";
  export let swapped;
  export let pickedCurrency;
</script>

<style>
  main {
    margin: 0 auto;
    margin-top: 8rem;
    width: 400px;
  }
</style>

<main>
  <HomeHeader />
  <HomeSubtitle {swapped} {pickedCurrency} />
  <SelectCurrency on:changeCurrency />
  <SwapCurrency on:swapCurrency />
</main>
