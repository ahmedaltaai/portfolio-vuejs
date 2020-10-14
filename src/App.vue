<template>
  <div id="app" class="scroller">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import navbar from '@/components/Navbar'

export default {
  components: {
    navbar
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
  background-color: #363940;
  height: 100%;
}

main {
  margin-top: 3.55em;
}

a:focus {
  outline: none;
}

a:active {
  outline: none;
}

::-webkit-scrollbar {
  display: none;
  scrollbar-width: none;
}

::-webkit-scrollbar-thumb {
  display: none;
}

.home__view {
  height: 93vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (min-width: 43em) {
  .home__view {
    height: 93vh;
  }
  .projects__view {
    height: 93vh;
  }
}
</style>
