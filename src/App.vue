<template>
  <div>
    <!-- Inicia a router-view estabelecida em rotas -->
    <router-view :key="$route.path" />

    <!-- Renderiza tal componente em toda a aplicação -->
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: { Footer }
}
</script>

<style>
/* As declarações e notações de escopo Global em CSS, devem entontrar-se e App mesmo,
garantindo que tais declarações sejam globais */
@import './assets/_reset.css';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

/* Variáveis utilizadas na aplicação */
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

.active-link {
  color: #041E42;
  background-color: rgba(255, 255, 255, 0.6);
}


h1 {
  color: var(--color-font-main);
  font-size: 2rem;
  font-weight: bold;
}

button {
  background-color: var(--color-brand-main);
  border-radius: 0.15rem;
  border: none;
  color: var(--color-light-grey);
  font-size: 0.95rem;
  font-weight: 550;
  padding: 0.55rem 0.75rem;
  transition: all 0.5s;
}

button:hover {
  cursor: pointer;
  filter: brightness(1.5);
}

a{
    color: var(--color-background);
    text-decoration: none;
}

.navBar {
  background-color: #041E42;
  color: #fff;
  display: flex;
  justify-content: center;
}

.navBar a {
  border-bottom: 2px solid aqua;
  color: white;
  font-weight: bold;
  margin: 0 4rem;
  padding: 2rem 1rem;
  text-decoration: none;
  transition: all 0.5s;
}

.navBar a:hover {
  background-color: rgba(255, 255, 255, 0.25);
  border-bottom: 2px solid white;
  color: aqua;
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