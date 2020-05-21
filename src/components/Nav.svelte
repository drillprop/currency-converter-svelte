<script>
  import { link } from "svelte-spa-router";
</script>

<style>
  .hamburger-container {
    display: none;
    cursor: pointer;
    margin-top: 20px;
    right: 40px;
    position: absolute;
    z-index: 5;
  }
  input {
    cursor: pointer;
    z-index: 10;
    margin: 0;
    padding: 0;
    border: none;
    width: 100%;
    height: 31px;
    position: absolute;
    opacity: 0;
  }
  input:checked ~ div:first-of-type {
    transform: rotate(45deg);
  }
  input:checked ~ div:nth-of-type(2) {
    transform: scaleX(0);
  }
  input:checked ~ div:last-of-type {
    transform: rotate(-45deg);
  }
  .hamburger-bar {
    width: 30px;
    height: 5px;
    background-color: black;
    margin-bottom: 6px;
    transform-origin: left;
    transition: 300ms;
  }
  nav {
    z-index: 4;
    color: #444;
    position: absolute;
    width: calc(100vw / 3 * 2);
    top: 0;
    right: 0;
    text-transform: uppercase;
    background: #f1f1f1;
  }
  ul {
    padding: 0;
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
  }

  li {
    list-style: none;
    font-size: 12px;
    margin-top: 10px;
  }
  a {
    text-decoration: none;
    color: #444;
  }
  @media (max-width: 800px) {
    .hamburger-container {
      display: block;
    }
    nav {
      width: 100%;
      opacity: 1;
      height: 100vh;
      transition: opacity 400ms 0ms;
    }
    ul {
      margin-top: 130px;
      justify-content: unset;
      flex-direction: column;
      align-items: center;
    }
    li {
      font-size: 16px;
      font-weight: bold;
      margin-top: 24px;
    }
  }
</style>

<div class="hamburger-container">
  <input type="checkbox" />
  <div class="hamburger-bar" />
  <div class="hamburger-bar" />
  <div class="hamburger-bar" />
</div>

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
