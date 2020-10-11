<template>
  <!-- projects container -->
  <article class="projects__container">
    <!-- card container -->
    <section class="card" v-for="(repo, i) in wantedRepos" :key="i">
      <div>
        <!-- card header -->
        <header class="header">
          <div class="repo-name">
            <a :href="repo.svn_url">
              {{ repo.name }}
            </a>
          </div>
          <div class="lang">
            <span></span>
            <div>
              {{ repo.language }}
            </div>
          </div>
        </header>
        <!-- card body -->
        <div class="description">
          {{ repo.description }}
        </div>
        <!-- links / buttons -->
        <footer class="buttons">
          <a :href="repo.svn_url">
            <i class="fab fa-github"></i>
            CODE
          </a>
          <a :href="repo.homepage">
            <i class="fas fa-play-circle"></i>
            DEMO
          </a>
        </footer>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'project',
  data() {
    return {
      // empty array to store the data
      // coming from the api
      repos: []
    }
  },
  computed: {
    // this function is made to filter every public
    // repo and return only the ones with a homepage
    // in it. to overcome empty divs
    wantedRepos: function() {
      return this.repos.filter(repo => {
        return repo.homepage || repo.stargazers_count > 0
      })
    }
  },
  // requesting the repos from the GitHub API at creation
  // with the JavaScript fetch API
  beforeCreate() {
    fetch('https://api.github.com/users/ahmedaltaai/repos?type=public')
      .then(res => res.json())
      .then(data => {
        this.repos = data
      })
  },
  // while mounted update the tag color of the displayed language
  updated() {
    // grab the all element of the language tag
    let lang = document.querySelectorAll('.lang')

    // and cycle through them
    // with a for-of loop then use if and else if statements
    // to decide which language gets which color
    // with 'tag' you can access the individual nodes
    // within the grabed element
    for (let tag of lang) {
      if (tag.innerText === 'PHP') {
        tag.firstChild.style.backgroundColor = '#4F5D95'
      } else if (tag.innerText === 'HTML') {
        tag.firstChild.style.backgroundColor = '#e34c26'
      } else if (tag.innerText === 'JavaScript') {
        tag.firstChild.style.backgroundColor = '#f1e05a'
      } else if (tag.innerText === 'CSS') {
        tag.firstChild.style.backgroundColor = '#563d7c'
      } else if (tag.innerText === 'C') {
        tag.firstChild.style.backgroundColor = '#f34b7d'
      } else if (tag.innerText === 'C++') {
        tag.firstChild.style.backgroundColor = '#b07219'
      } else if (tag.innerText === 'Java') {
        tag.firstChild.style.backgroundColor = '#b07219'
      } else if (tag.innerText === 'Python') {
        tag.firstChild.style.backgroundColor = '#3572A5'
      } else if (tag.innerText === 'Vue') {
        tag.firstChild.style.backgroundColor = '#2c3e50'
      } else if (tag.innerText === 'TypeScript') {
        tag.firstChild.style.backgroundColor = '#2b7489'
      }
    }
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
    box-shadow: 0px 5px 15px 1px #222;

    &:hover {
      transform: translateY(-5%);
      transition-duration: 300ms;

      .repo-name a {
        color: #42b983 !important;
      }
    }

    .header {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #777;
      padding-bottom: 0.5em;

      a {
        text-decoration: none;
        color: #ddd;
      }

      .lang {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          width: 0.8em;
          height: 0.8em;
          border-radius: 50%;
          margin-right: 0.5em;
        }
      }
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
