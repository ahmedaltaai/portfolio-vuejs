<template>
  <header id="header">
    <nav class="navbar">
      <figure>
        <router-link to="/">
          <img src="@/assets/logo.png" alt />
        </router-link>
      </figure>
      <i class="fas fa-bars" @click="showNav = !showNav"></i>
      <ul>
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
            Publications
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      showNav: false
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7vh;
  background-color: #2a2b2f;
  padding: 0 1em;

  .fa-bars {
    font-size: 2em;
    color: #ddd;
    cursor: pointer;
  }

  figure {
    cursor: pointer;

    img {
      width: 32px;
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    height: 20vh;
    width: 50%;

    position: absolute;

    top: 10vh;
    right: 1em;

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
}
</style>
