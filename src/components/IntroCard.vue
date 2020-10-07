<template>
  <article class="card">
    <section class="intro">
      <h1>
        Hi, <br />
        I'm Ahmed, <br />
        Keyboard Warrior.
      </h1>
      <router-link to="/projects" class="link-to-projects">
        PROJECTS
      </router-link>
    </section>
    <section class="links">
      <a href="#">
        <i class="fab fa-github"></i>
      </a>
      <a href="#">
        <i class="fab fa-twitter"></i>
      </a>
      <button
        type="button"
        href="#"
        @click="showModal"
        class="fas fa-envelope"
      ></button>
    </section>
    <modal v-show="isModalVisible" @close="closeModal" />
  </article>
</template>

<script>
import modal from '@/components/Modal'

export default {
  name: 'IntroCard',
  components: {
    modal
  },
  data() {
    return {
      isModalVisible: false
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background: linear-gradient(145deg, #31333a, #3a3d44);
  box-shadow: 10px 10px 20px #31343a, -10px -10px 20px #3b3e46;
  padding: 2em;
  width: 80%;
  color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    border: none;
    background-color: transparent;

    font-size: 2em;
    cursor: pointer;
    color: #ddd;

    &:hover {
      color: #ffc558;
      transition-duration: 250ms;
    }
  }

  .intro {
    h1 {
      font-size: 1.8em;
      margin-bottom: 1em;
    }
  }

  .links {
    display: flex;
    justify-content: space-evenly;
    margin-top: 3em;

    a {
      text-decoration: none;
      color: #ddd;

      .fa-github:hover {
        color: #777777;
        transition-duration: 250ms;
      }

      .fa-twitter:hover {
        color: #1da1f2;
        transition-duration: 250ms;
      }

      .fa-envelope:hover {
        color: #ffc558;
        transition-duration: 250ms;
      }

      i {
        font-size: 2em;
        cursor: pointer;
      }
    }
  }

  .link-to-projects {
    border: 1px solid #42b983;
    color: #42b983;
    background-color: transparent;
    padding: 0.5em 1em;
    font-weight: 600;
    font-size: 1.2em;
    text-decoration: none;

    &:hover {
      background-color: #42b983;
      color: #363940;
      transition-duration: 300ms;
    }

    i {
      margin-right: 0.5em;
    }
  }
}

@media (min-width: 43em) {
  .card {
    max-width: 60%;
    flex-direction: row;

    .intro {
      height: 100%;
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 2em;
      }
    }

    .links {
      flex-direction: column;
      margin-top: 0;
    }

    .link-to-projects {
      width: 50%;
    }
  }
}

@media (min-width: 64em) {
  .card {
    max-width: 50%;
    flex-direction: row;
    padding: 6em;

    .intro {
      height: 100%;
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 2em;
      }
    }

    .links {
      flex-direction: column;
    }
  }
}
</style>
