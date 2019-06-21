<script>
  import { createEventDispatcher } from "svelte";
  import { amount } from "./stores";
  const dispatch = createEventDispatcher();

  const swapCurrency = () => {
    dispatch("swapCurrency");
    amount.set(0)
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
