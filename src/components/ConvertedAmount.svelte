<script>
  import { onMount, afterUpdate } from "svelte";
  export let swapped;
  export let currency = "USD";
  export let amount;
  let currentCurrency;
  let rate = 1;
  let convert;

  const fetchRates = async () => {
    try {
      const url = await fetch(
        `http://api.nbp.pl/api/exchangerates/rates/a/${currency}/`
      );
      const json = await url.json();
      rate = await json.rates[0].mid;
    } catch (error) {
      console.log(error);
    }
  };
  onMount(fetchRates);

  $: convert = swapped
    ? (amount / rate).toFixed(2) || 0
    : (rate * amount).toFixed(2) || 0;

  afterUpdate(() => {
    if (currentCurrency !== currency) {
      fetchRates();
      currentCurrency = currency;
    }
  });
</script>

{convert}
