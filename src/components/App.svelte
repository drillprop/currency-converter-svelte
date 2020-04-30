<script>
  import Nav from "./Nav.svelte";
  import Router from "svelte-spa-router";
  import HomeContainer from "./HomeContainer.svelte";
  const routes = {
    "/": HomeContainer,
    "/rates": HomeContainer,
    "/chart": HomeContainer
  };
</script>

<style>
  :global(body) {
    padding: 0;
    font-family: "Poppins", sans-serif;
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Poppins:400,500,700|Ubuntu:500" />
</svelte:head>

<Router {routes} />
<Nav />
<HomeContainer />
