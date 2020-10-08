<template>
  <main class="articles__view">
    <!-- connecting dynamic classes to move the buttons up and down -->
    <!-- when the side nav slides open/back -->
    <div class="buttons" :class="{ down: margin, up: !margin }">
      <button @click="blog" class="blog">
        <i class="fab fa-blogger-b"></i>
        BLOGS
      </button>
      <button @click="youtube" class="youtube">
        <i class="fab fa-youtube"></i>
        VIDEOS
      </button>
    </div>
    <component v-bind:is="component"></component>
  </main>
</template>

<script>
// @ is an alias to /src
import LoadingComponent from '@/components/LoadingComponent'
import ErrorComponent from '@/components/ErrorComponent'
// import YOUTUBE from '@/components/Youtube'
import { bus } from '../main'

const BLOG = () => ({
  component: import(/* webpackChunkName: "Blog" */ '@/components/Blog'),
  loading: LoadingComponent,
  error: ErrorComponent,
  timeout: 3000
})

const YOUTUBE = () => ({
  component: import(/* webpackChunkName: "Youtube" */ '@/components/Youtube'),
  loading: LoadingComponent,
  error: ErrorComponent,
  timeout: 3000
})

export default {
  name: 'Home',
  components: {
    BLOG,
    YOUTUBE
  },
  data() {
    return {
      component: 'BLOG',
      margin: false
    }
  },
  beforeCreate() {
    // created an event bus to grab the boolean
    // value from the navbar component
    bus.$on('opened', data => {
      this.margin = data
    })
  },
  mounted() {
    if (this.component === 'BLOG') {
      document.querySelector('.blog').classList.add('active')
    }
  },
  methods: {
    blog() {
      this.component = 'BLOG'
      document.querySelector('.youtube').classList.remove('active')
      document.querySelector('.blog').classList.add('active')
    },
    youtube() {
      this.component = 'YOUTUBE'
      document.querySelector('.blog').classList.remove('active')
      document.querySelector('.youtube').classList.add('active')
    }
  }
}
</script>

<style lang="scss" scoped>
.down {
  margin-top: 13.3vh;
  transition-duration: 100ms;
}

.up {
  margin-top: 0;
  transition-duration: 1000ms;
}

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
