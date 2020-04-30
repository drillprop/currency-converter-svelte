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
  }
</style>

<Router {routes} />
<Nav />
<HomeContainer />
