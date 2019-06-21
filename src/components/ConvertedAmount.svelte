<script>
  import { currency } from "./stores";
  import { amount } from "./stores";
  import { rate } from "./stores";
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
</script>

{($rate * $amount).toFixed(2) || 0}
