<script>
  import { rate, convertValue } from "./stores";
  import { onMount, afterUpdate } from "svelte";
  export let swapped;
  export let currency = "USD";
  export let amount = 0;
  let currentCurrency;

  const fetchRates = async () => {
    try {
      const url = await fetch(
        `http://api.nbp.pl/api/exchangerates/rates/a/${currency}/`
      );
      const json = await url.json();
      const rates = await json.rates[0].mid;
      rate.set(rates);
    } catch (error) {
      console.log(error);
    }
  };
  onMount(fetchRates);

  afterUpdate(() => {
    if (currentCurrency !== currency) {
      fetchRates();
      currentCurrency = currency;
    }
  });
  let convert;
  $: convert = swapped
    ? (amount / $rate).toFixed(2) || 0
    : ($rate * amount).toFixed(2) || 0;
  $: convertValue.set(convert);
</script>

{$convertValue}
