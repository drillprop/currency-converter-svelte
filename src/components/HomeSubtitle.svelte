<script>
  export let swapped;
  export let pickedCurrency;
</script>

<style>
  h3 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 400;
    color: #555;
  }
</style>

{#if swapped}
  <h3>Convert PLN to {pickedCurrency}</h3>
{:else}
  <h3>Convert {pickedCurrency} to PLN</h3>
{/if}
