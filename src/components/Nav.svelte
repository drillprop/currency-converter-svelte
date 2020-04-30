<script>
  import { link } from "svelte-spa-router";
</script>

<style>
  nav {
    color: #444;
    position: absolute;
    width: calc(100vw / 3 * 2);
    top: 0;
    right: 0;
    text-transform: uppercase;
    background: #f1f1f1;
  }
  ul {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
  }

  li {
    list-style: none;
    font-size: 12px;
  }
  a {
    text-decoration: none;
    color: #444;
  }
</style>

<nav>
  <ul>
    <li>
      <a href="/" use:link>Curency Converter</a>
    </li>
    <li>
      <a href="/rates" use:link>Today's Exchange Rates</a>
    </li>
    <li>
      <a href="/chart" use:link>Exchange Rates Chart</a>
    </li>
  </ul>
</nav>
