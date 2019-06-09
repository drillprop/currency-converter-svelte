<script>
  import { currency } from "./stores.js";
  export let swapped;
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
  <h3>Convert PLN to {$currency}</h3>
{:else}
  <h3>Convert {$currency} to PLN</h3>
{/if}
