<template>
  <article class="projects__container">
    <section class="card" v-for="(repo, i) in wantedRepos" :key="i">
      <div>
        <header class="header">
          <div>
            {{ repo.name }}
          </div>
          <div>
            {{ repo.language }}
          </div>
        </header>
        <div class="description">
          {{ repo.description }}
        </div>
        <div class="buttons">
          <a :href="repo.svn_url"> <i class="fab fa-github"></i>CODE </a>
          <a :href="repo.homepage" v-if="!repo.hompage">
            <i class="fas fa-play-circle"></i>DEMO
          </a>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'project',
  data() {
    return {
      repos: []
    }
  },
  computed: {
    wantedRepos: function() {
      return this.repos.filter(repo => {
        return repo.homepage
      })
    }
  },
  created() {
    fetch('https://api.github.com/users/ahmedaltaai/repos')
      .then(res => res.json())
      .then(data => {
        this.repos = data
      })
  }
}
</script>

<style lang="scss" scoped>
.projects__container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;

  .card {
    padding: 1em;
    background-color: #212226;
    color: #eee;
    margin: 1em 0;

    .header {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #777;
      padding-bottom: 0.5em;
    }

    .description {
      margin: 1em 0;
      color: #bbb;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      margin: 2em auto 0 auto;
      width: 100%;

      a {
        display: flex;
        align-items: center;
        padding: 0.75em 1.5em;
        border: none;
        background-color: #303136;
        color: #eee;
        font-weight: 500;
        cursor: pointer;
        border-radius: 10px;
        text-decoration: none;

        &:hover {
          transition: 300ms;
          background-color: #26272c;
          color: #42b983;
        }

        i {
          font-size: 1em;
          margin-right: 0.5em;
        }
      }
    }
  }
}

@media (min-width: 46em) {
  .projects__container {
    flex-direction: row;
    flex-wrap: wrap;

    .card {
      width: 45%;
      margin: 1em;

      .buttons {
        width: 100%;
      }
    }
  }
}

@media (min-width: 66em) {
  .projects__container {
    flex-direction: row !important;
    flex-wrap: wrap;

    .card {
      width: 30%;
      margin: 1em;

      .buttons {
        width: 100%;
      }
    }
  }
}
</style>
