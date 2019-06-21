<script>
  import HomeHeader from "./HomeHeader.svelte";
  import HomeSubtitle from "./HomeSubtitle.svelte";
  import SelectCurrency from "./SelectCurrency.svelte";
  import SwapCurrency from "./SwapCurrency.svelte";
  import AmountInput from "./AmountInput.svelte";
  import ConvertedAmount from "./ConvertedAmount.svelte";
  export let swapped;
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
  <HomeSubtitle {swapped} />
  <p>
    {#if !swapped}
      <AmountInput />
      <SelectCurrency />
      equals
      <ConvertedAmount />
      PLN
    {:else}
      <AmountInput />
      PLN equals
      <ConvertedAmount />
      <SelectCurrency />
    {/if}
  </p>
  <SwapCurrency on:swapCurrency />
</main>
