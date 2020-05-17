<script>
  import MainTitle from "../components/MainTitle.svelte";
  import SubTitle from "../components/SubTitle.svelte";
  import AmountInput from "../components/AmountInput.svelte";
  import SelectCurrency from "../components/SelectCurrency.svelte";
  import ConvertedAmount from "../components/ConvertedAmount.svelte";
  import SwapCurrency from "../components/SwapCurrency.svelte";
  import { currency } from "../components/stores.js";

  let swapped = false;

  const swapCurrency = e => {
    swapped = !swapped;
  };
</script>

<style>
  main {
    margin: 0 auto;
    margin-top: 8rem;
  }
</style>

<!-- <Aside /> -->
<main>
  <MainTitle title="Currency Converter" />
  {#if swapped}
    <SubTitle title={`Convert PLN to ${$currency}`} />
  {:else}
    <SubTitle title={`Convert ${$currency} to PLN`} />
  {/if}

  <p>
    {#if !swapped}
      <AmountInput />
      <SelectCurrency />
      equals
      <ConvertedAmount {swapped} />
      PLN
    {:else}
      <AmountInput />
      PLN equals
      <ConvertedAmount {swapped} />
      <SelectCurrency />
    {/if}
  </p>
  <SwapCurrency on:swapCurrency={swapCurrency} />
</main>
