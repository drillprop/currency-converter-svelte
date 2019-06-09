<script>
  import HomeHeader from "./HomeHeader.svelte";
  import HomeSubtitle from "./HomeSubtitle.svelte";
  import SelectCurrency from "./SelectCurrency.svelte";
  import SwapCurrency from "./SwapCurrency.svelte";
  import AmountOfCurrency from "./AmountOfCurrency.svelte";
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
  <p>
    {#if !swapped}
      <AmountOfCurrency />
      <SelectCurrency on:changeCurrency />
      equals PLN
    {:else}
      <AmountOfCurrency />
      PLN equals
      <SelectCurrency on:changeCurrency />
    {/if}
  </p>
  <SwapCurrency on:swapCurrency />
</main>
