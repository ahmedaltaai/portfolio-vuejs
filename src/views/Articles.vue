<template>
  <main class="articles__view">
    <div class="buttons">
      <button @click="mediumActive" class="medium">
        <i class="fab fa-blogger-b"></i>
        BLOGS
      </button>
      <button @click="youtubeActive" class="youtube">
        <i class="fab fa-youtube"></i>
        VIDEOS
      </button>
    </div>
    <component v-bind:is="component"></component>
  </main>
</template>

<script>
// @ is an alias to /src
import Youtube from '@/components/Youtube'
import Medium from '@/components/Medium'

export default {
  name: 'Home',
  components: {
    Youtube,
    Medium
  },
  data() {
    return {
      component: 'Medium'
    }
  },
  methods: {
    // to be continued... I will use computed rather than methods
    mediumActive() {
      if (this.component === 'Youtube') {
        this.component = 'Medium'
        document.querySelector('.youtube').classList.remove('active')
        document.querySelector('.medium').classList.add('active')
      }
    },
    youtubeActive() {
      if (this.component === 'Medium') {
        this.component = 'Youtube'
        document.querySelector('.medium').classList.remove('active')
        document.querySelector('.youtube').classList.add('active')
      }
    }
  },
  created() {
    if (this.component === 'Medium') {
      document.querySelector('.medium').classList.add('active')
    }
    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=UCM9Bztd3u_y5Nyqbmg9d4Ow&key=AIzaSyB217WFq3rtxL8q7BmHX0UA39yyvyt2qIM'
    )
      .then(res => res.JSON())
      .then(data => console.log(data))
  }
}
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  width: 100%;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 1em;
    background-color: transparent;
    border: none;
    color: #ddd;
    font-weight: 600;
    font-size: 1em;

    &.router-link-exact-active {
      color: #42b983;
      text-decoration: none;
    }

    &:hover {
      background-color: #212226;
      cursor: pointer;
      color: #42b983;
      transition-duration: 300ms;
    }

    &.active {
      background-color: #212226;
      color: #42b983;
    }

    i {
      margin-right: 0.5em;
    }
  }
}

@media (min-width: 43em) {
  .buttons {
    button {
      font-size: 1.5em;
    }
  }
}

@media (min-width: 64em) {
  .buttons {
    button {
      font-size: 2em;
    }
  }
}
</style>
