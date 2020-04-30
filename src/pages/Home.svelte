<script>
  import Aside from "../components/Aside.svelte";
  import Main from "../components/Main.svelte";

  let swapped = false;

  const swapCurrency = e => {
    swapped = !swapped;
  };
</script>

<!-- <Aside /> -->
<Main {swapped} on:swapCurrency={swapCurrency} />
