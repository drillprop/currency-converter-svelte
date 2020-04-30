<script>
  import { currency } from "./stores.js";
  export let title;
</script>

<style>
  h3 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 400;
    color: #555;
  }
</style>

<h3>{title || ''}</h3>
