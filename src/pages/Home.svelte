<script>
  import MainTitle from "../components/MainTitle.svelte";
  import SubTitle from "../components/SubTitle.svelte";
  import SelectCurrency from "../components/SelectCurrency.svelte";
  import ConvertedAmount from "../components/ConvertedAmount.svelte";
  import SwapCurrency from "../components/SwapCurrency.svelte";
  import { currency } from "../components/stores.js";

  let swapped = false;
  let amount = 0;

  const swapCurrency = e => {
    swapped = !swapped;
  };

  const changeAmount = e => {
    const { value, style } = e.target;
    const { length } = value.toString();
    amount = value;
    if (length >= 4) {
      style.width = 20 + value.length * 10 + "px";
    }
    if (!value) {
      amount = 0;
    }
  };
</script>

<style>
  main {
    margin: 0 auto;
    margin-top: 8rem;
  }
  input {
    color: #666;
    padding: 4px 10px;
    margin: 0;
    font-size: 16px;
    border: none;
    width: 50px;
    text-indent: 5px;
    height: 40px;
  }
  /* remove arrows from input */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>

<main>
  <MainTitle title="Currency Converter" />
  {#if swapped}
    <SubTitle title={`Convert PLN to ${$currency.toString().toUpperCase()}`} />
  {:else}
    <SubTitle title={`Convert ${$currency.toString().toUpperCase()} to PLN`} />
  {/if}

  <p>
    {#if !swapped}
      <input
        type="number"
        bind:value={amount}
        on:input={changeAmount}
        min={0} />
      <SelectCurrency />
      equals
      <ConvertedAmount {swapped} {amount} currency={$currency} />
      PLN
    {:else}
      <input
        type="number"
        bind:value={amount}
        on:input={changeAmount}
        min={0} />
      PLN equals
      <ConvertedAmount {swapped} {amount} currency={$currency} />
      <SelectCurrency />
    {/if}
  </p>
  <SwapCurrency on:swapCurrency={swapCurrency} />
</main>
