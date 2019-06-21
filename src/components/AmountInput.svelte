<script>
  import { amount } from "./stores";

  const changeAmount = e => {
    const { value, style } = e.target;
    amount.set(value);
    const { length } = value.toString();
    if (length >= 4) {
      style.width = 20 + value.length * 10 + "px";
    }
    if (!value) {
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

<input
  type="number"
  placeholder="0"
  min={0}
  max={100}
  bind:value={$amount}
  on:input={changeAmount} />
