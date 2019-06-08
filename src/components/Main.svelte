<script>
  import HomeHeader from "./HomeHeader.svelte";
  import HomeSubtitle from "./HomeSubtitle.svelte";
  export let swapped;
  export let currency;
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
  <HomeSubtitle {swapped} {currency} />

</main>
