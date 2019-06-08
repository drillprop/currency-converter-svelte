<script>
  export let pickedCurrency;
  export let currencyArray;
</script>

<style>
  img {
    display: block;
    margin: 0;
    max-width: 100%;
    height: 100vh;
    object-fit: cover;
  }
</style>

<aside>
  <img src="/assets/{currencyArray[pickedCurrency]}.jpg" alt={pickedCurrency} />
</aside>
