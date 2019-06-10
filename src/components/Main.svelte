<script>
  import HomeHeader from "./HomeHeader.svelte";
  import HomeSubtitle from "./HomeSubtitle.svelte";
  import SelectCurrency from "./SelectCurrency.svelte";
  import SwapCurrency from "./SwapCurrency.svelte";
  import AmountInput from "./AmountInput.svelte";
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
      equals PLN
    {:else}
      <AmountInput />
      PLN equals
      <SelectCurrency />
    {/if}
  </p>
  <SwapCurrency on:swapCurrency />
</main>
