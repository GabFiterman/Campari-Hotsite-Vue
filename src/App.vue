<template>
  <!-- <nav class="navBar">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/product-demo">Product Page</router-link>
  </nav> -->
  <div>
    <router-view :key="$route.path"/>
  </div>
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue'
export default{
  name: 'App',
  components: {Footer}
}
</script>

<style>
@import './assets/_reset.css';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

:root {
  --color-font-main: #2c3e50;
  --color-font-grey: #87888c;
  --color-light-grey: #dfe4f2;
  --color-highlight-grey: #F3F3F3;
  --color-brand-main: #041E42;
  --color-background: #fff;

  --padding-section: 6vh 8vw;
  --margin-H-main: 4vh 0;
  --margin-H2-main: 8vh 0;

  --border-main: solid 1px var(--color-light-grey);

  --font-family: 'Open Sans', sans-serif;

  --shadow-box-main: 0px 0px 9px 0px rgba(0, 0, 0, 0.2);
}

#app {
  font-family: var(--font-family);
  color: var(--color-font-grey);
  background-color: var(--color-background);

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

.active-link{
  color: #041E42;
  background-color: rgba(255,255,255,0.6);
}

.navBar{
  background-color: #041E42;
  color: #fff;
  display: flex;
  justify-content: center;
}

.navBar a{
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin: 0 4rem;
  border-bottom: 2px solid aqua;
  padding: 2rem 1rem;
  transition: all 0.5s;
}

.navBar a:hover{
  color: aqua;
  border-bottom: 2px solid white;
  background-color: rgba(255,255,255, 0.25);
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-font-main);
}

button {
  background-color: var(--color-brand-main);
  color: var(--color-light-grey);
  padding: 0.55rem 0.75rem;
  font-size: 0.95rem;
  font-weight: 550;
  border: none;
  border-radius: 0.15rem;
  transition: all 0.5s;
}

button:hover {
  cursor: pointer;
  filter: brightness(1.5);
}

.horizontal-divider {
    border-top: var(--border-main);
    width: 100%;
}

.vertical-divider {
    border-left: var(--border-main);
    min-height: 3rem;
}
</style>