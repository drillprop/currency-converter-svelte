<script>
  import HomeHeader from "./HomeHeader.svelte";
  import HomeSubtitle from "./HomeSubtitle.svelte";
  export let swapped;
  export let pickedCurrency;
  export let currencyArray;
</script>

<style>
  main {
    margin: 0 auto;
    margin-top: 8rem;
    width: 400px;
  }
  select {
    color: #666;
    margin: 0;
    border: none;
    height: 34px;
    font-size: 16px;
  }
</style>

<main>
  <HomeHeader />
  <HomeSubtitle {swapped} {pickedCurrency} />
  <select name="currency" id="currency">
    {#each currencyArray as currency}
      <option value={currency.toUpperCase()}>{currency.toUpperCase()}</option>
    {/each}
  </select>
</main>
