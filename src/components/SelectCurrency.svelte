<script>
  import { createEventDispatcher } from "svelte";
  import { currency } from "./stores.js";
  const currencyArray = ["usd", "eur", "czk"];
  const changeCurrency = e => {
    currency.set(e.target.value);
  };
</script>

<style>
  select {
    color: #666;
    margin: 0;
    border: none;
    height: 34px;
    font-size: 16px;
  }
</style>

<select
  name="currency"
  id="currency"
  bind:value={$currency}
  on:change={changeCurrency}>
  {#each currencyArray as currency}
    <option value={currency.toUpperCase()}>{currency.toUpperCase()}</option>
  {/each}
</select>
