<template>
<<<<<<< HEAD
  <div id="app" class="scroller">
    <Navbar />
=======
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/projects">Projects</router-link>
    </div>
>>>>>>> f512a6d1e4cbf7d5ea6f6ae9ffce11962668cb28
    <router-view />
  </div>
</template>

<<<<<<< HEAD
<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: #212226;
  height: 100%;
}

main {
  background-color: #363940;
  margin-top: 7vh;
}

::-webkit-scrollbar {
  display: none;
  scrollbar-width: none;
}

::-webkit-scrollbar-thumb {
  display: none;
}

button:focus {
  outline: none;
}

a:focus {
  outline: none;
}

.home__view {
  height: 93vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.projects__view {
  height: 100%;
}

.articles__view {
  height: 93vh;
}

@media (min-width: 43em) {
  .home__view {
    height: 93vh;
  }
  .projects__view {
    height: 93vh;
=======
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
>>>>>>> f512a6d1e4cbf7d5ea6f6ae9ffce11962668cb28
  }
}
</style>
