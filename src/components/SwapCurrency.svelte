<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  const swapCurrency = () => {
    dispatch("swapCurrency");
  };
</script>

<style>
  button {
    align-self: center;
    display: block;
    margin-top: 30px;
    background: #444;
    text-transform: uppercase;
    border: none;
    padding: 10px 20px;
    color: white;
  }
</style>

<button on:click={swapCurrency}>SWAP</button>
