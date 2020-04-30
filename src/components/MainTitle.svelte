<script>
  export let title;
</script>

<style>
  h1 {
    font-family: "Ubuntu", sans-serif;
    color: #444;
    margin: 0;
    margin-bottom: 15px;
    font-size: 40px;
    font-weight: 800;
  }
</style>

<h1>{title || ''}</h1>
