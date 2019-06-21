<script>
  import { currency, amount, rate, convertValue } from "./stores";
  import { onMount, afterUpdate } from "svelte";

  let currentCurrency;

  const fetchRates = async () => {
    try {
      const url = await fetch(
        `http://api.nbp.pl/api/exchangerates/rates/a/${$currency}/`
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
    if (currentCurrency !== $currency) {
      fetchRates();
      currentCurrency = $currency;
    }
  });
  $: convertValue.set(($rate * $amount).toFixed(2) || 0);
</script>

{$convertValue}
