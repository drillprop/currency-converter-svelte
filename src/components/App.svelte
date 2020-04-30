<script>
  import Nav from "./Nav.svelte";
  import Aside from "./Aside.svelte";
  import Router from "svelte-spa-router";
  import Home from "../pages/Home.svelte";
  const routes = {
    "/": Home,
    "/rates": Home,
    "/chart": Home
  };
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
  }
  #container {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  @media (max-width: 800px) {
    #container {
      grid-template-columns: 1fr;
    }
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Poppins:400,500,700|Ubuntu:500" />
</svelte:head>

<div id="container">
  <Aside />
  <Router {routes} />
</div>
<Nav />
