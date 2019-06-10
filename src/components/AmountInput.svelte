<script>
  import { amount } from "./stores";
  import { tick } from "svelte";

  const changeAmount = async e => {
    amount.set(e.target.value);
    await tick();
    if (!e.target.value) {
      amount.set(0);
    }
  };
</script>

<style>
  input {
    color: #666;
    padding: 4px 10px;
    margin: 0;
    font-size: 16px;
    border: none;
    width: 50px;
    height: 25px;
  }
  /* remove arrows from input */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>

<input
  type="number"
  placeholder="0"
  bind:value={$amount}
  on:change={changeAmount} />
