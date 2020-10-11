<template>
  <article class="card">
    <section class="intro">
      <h1>
        <span>Hi,</span>
        <span>I'm Ahmed,</span>
        <span>Web Developer.</span>
      </h1>
      <div class="links">
        <a href="https://github.com/ahmedaltaai">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/realAhmedAltaai">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://ahmeds.tech/">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 337 337"
            style="enable-background:new 0 0 337 337;"
            xml:space="preserve"
          >
            <path
              class="st0"
              d="M168.5,113L168.5,113c30.7,0,55.5,24.8,55.5,55.5l0,0c0,30.7-24.8,55.5-55.5,55.5l0,0
	c-30.7,0-55.5-24.8-55.5-55.5l0,0C113,137.8,137.8,113,168.5,113z"
            />
            <path
              class="st1"
              d="M23.2,112.6c-30.9,30.9-30.9,80.9,0,111.8l89.4,89.4c30.9,30.9,80.9,30.9,111.8,0l89.4-89.4
	c30.9-30.9,30.9-80.9,0-111.8l-89.4-89.4c-30.9-30.9-80.9-30.9-111.8,0C112.6,23.2,23.2,112.6,23.2,112.6z M207.6,207.6
	c21.6-21.6,21.6-56.7,0-78.3c-21.6-21.6-56.7-21.6-78.3,0c-21.6,21.6-21.6,56.7,0,78.3C151,229.2,186,229.2,207.6,207.6L207.6,207.6
	z"
            />
          </svg>
        </a>
      </div>
    </section>

    <router-link to="/projects" class="link-to-projects">
      PROJECTS
    </router-link>
  </article>
</template>

<script>
export default {
  name: 'IntroCard'
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

  .intro {
    h1 {
      font-size: 1.8em;
      display: flex;
      flex-direction: column;
    }
  }

  .links {
    display: flex;
    justify-content: space-evenly;
    margin: 2em 0;

    a {
      text-decoration: none;
      color: #ddd;

      // hashnode icon
      svg {
        width: 2em;

        .st0 {
          fill: none;
        }

        .st1 {
          fill-rule: evenodd;
          clip-rule: evenodd;
          fill: #dddddd;

          &:hover {
            fill: #2962ff;
            transition-duration: 250ms;
          }
        }
      }

      .fa-github:hover {
        color: #777777;
        transition-duration: 250ms;
      }

      .fa-twitter:hover {
        color: #1da1f2;
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
    font-size: 1em;
    text-decoration: none;
    width: 100%;
    text-align: center;

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
    max-width: 70%;
    padding: 6em;

    .intro {
      height: 70%;
      width: 100%;
      display: flex;
      justify-content: space-between;

      h1 {
        height: 100%;
        font-size: 2em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }

    .links {
      justify-content: space-between;
      flex-direction: column;
      margin-top: 0;
      margin-right: 0.5em;
      height: 100%;
    }

    .link-to-projects {
      width: 100%;
      margin-top: 2em;
    }
  }
}

@media (min-width: 64em) {
  .card {
    max-width: 45%;
  }
}
</style>
