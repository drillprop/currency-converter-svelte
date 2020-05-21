<script>
  import { onMount, onDestroy } from "svelte";

  import { currency } from "../components/stores";
  import MainTitle from "../components/MainTitle.svelte";
  import ConvertedAmount from "../components/ConvertedAmount.svelte";

  const currencies = ["usd", "eur", "czk"];

  onMount(() => {
    currency.set("chart");
  });

  onDestroy(() => {
    currency.set("usd");
  });
</script>

<style>
  main {
    margin: 0 auto;
    margin-top: 8rem;
  }
</style>

<main>
  <MainTitle title="Current Exchange Rates" />

  <p>Based on NBP API</p>
  <table>
    <tbody>

      {#each currencies as currency (currency)}
        <tr>
          <td>{currency}</td>
          <td>
            <ConvertedAmount amount={1} {currency} swapped={false} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</main>
