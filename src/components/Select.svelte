<script>
  import { createEventDispatcher } from "svelte";
  const currencyArray = ["usd", "eur", "czk"];
  const dispatch = createEventDispatcher();
  const dispatchChange = e => {
    dispatch("changeCurrency", {
      selected: e.target.value
    });
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

<select name="currency" id="currency" on:change={dispatchChange}>
  {#each currencyArray as currency}
    <option value={currency.toUpperCase()}>{currency.toUpperCase()}</option>
  {/each}
</select>
