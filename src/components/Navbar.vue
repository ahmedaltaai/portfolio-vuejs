<template>
  <header id="header">
    <nav class="navbar">
      <figure>
        <router-link to="/">
          <img src="@/assets/logo.png" alt="LOGO" width="32px" height="32px" />
        </router-link>
      </figure>
      <i class="fas fa-bars" @click="openNav"></i>
      <ul :class="{ slideOpen: showNav, slideBack: !showNav }">
        <li>
          <router-link to="/">
            <i class="fas fa-home"></i>
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/projects">
            <i class="fas fa-code-branch"></i>
            Projects
          </router-link>
        </li>
        <li>
          <router-link to="/articles">
            <i class="fas fa-scroll"></i>
            Blogs
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
// import { bus } from '../main'
export default {
  name: 'Navbar',
  data() {
    return {
      showNav: false
    }
  },
  methods: {
    openNav() {
      this.showNav = !this.showNav
      // bus.$emit('opened', this.showNav)
    }
  },
  watch: {
    $route: function() {
      this.showNav = false
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.8em;
  background-color: #2a2b2f;
  padding: 0 1em;

  .fa-bars {
    font-size: 2em;
    color: #ddd;
    cursor: pointer;
  }

  figure {
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;

    position: absolute;

    top: 4.8em;
    right: -100%;

    li {
      a {
        text-decoration: none;
        color: #eee;
        padding: 1em;
        cursor: pointer;

        &.router-link-exact-active {
          color: #42b983;
          text-decoration: none;
          background-color: #3a3d44;
        }

        &:hover {
          background-color: #3a3d44;
          height: 100%;
          width: 100%;
        }

        i {
          margin-right: 0.5em;
        }
      }
    }
  }

  .slideOpen {
    transition-duration: 300ms;
    right: 0;
  }

  .slideBack {
    transition-duration: 300ms;
    right: -100%;
  }
}

@media (min-width: 43em) {
  .navbar {
    padding: 0 1em 0 2em;

    ul {
      list-style-type: none;
      justify-content: flex-end !important;

      position: relative !important;
      right: 0 !important;
      top: 0 !important;
    }

    .fa-bars {
      display: none;
    }
  }
}
</style>
