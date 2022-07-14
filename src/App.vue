<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div>
    <router-view />
  </div>
</template>

<style>
@import './assets/_reset.css'; 
:root{
  --color-font-grey: #87888c;
  --color-light-grey: #dfe4f2;
  --color-highlight-grey: #F3F3F3;
  --color-brand-main: #041E42;
  --color-font-main: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-font-main);
}
h1{
  font-size: 1.8rem;
  font-weight: bold;
}

button{
  background-color: var(--color-brand-main);
  color: var(--color-light-grey);
  padding: 0.55rem 0.75rem;
  font-size: 0.95rem;
  font-weight: 550;
  border: none;
  border-radius: 0.15rem;
  transition: all 0.5s;
}

button:hover{
  cursor: pointer;
  filter: brightness(1.5);
}
</style>