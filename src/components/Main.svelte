<script>
  import HomeHeader from "./HomeHeader.svelte";
  import HomeSubtitle from "./HomeSubtitle.svelte";
  import Select from "./Select.svelte";
  export let swapped;
  export let pickedCurrency;
</script>

<style>
  main {
    margin: 0 auto;
    margin-top: 8rem;
    width: 400px;
  }
</style>

<main>
  <HomeHeader />
  <HomeSubtitle {swapped} {pickedCurrency} />
  <Select on:changeCurrency />
</main>
