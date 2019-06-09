<script>
  import { currency } from "./stores.js";
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
  <img src="/assets/{$currency}.jpg" alt={$currency} />
</aside>
