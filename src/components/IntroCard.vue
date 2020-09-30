<template>
  <article class="card">
    <section class="intro">
      <h1>
        Hi, I'm Ahmed
      </h1>
      <p>
        I am a keyboard warrior and in love with the wide range of possibilites
        and oppertunities in tech. <br />
        From software to hardware.
      </p>
    </section>
    <section class="links">
      <a href="#">
        <i class="fab fa-github"></i>
      </a>
      <a href="#">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#">
        <i class="fas fa-envelope"></i>
      </a>
    </section>
  </article>
</template>

<script>
export default {
  name: 'IntroCard'
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  // background-color: #212226;
  // box-shadow: 0 0 5px 5px #31333a;
  // box-shadow: 5px 5px 10px #31343a, -5px -5px 10px #3b3e46;
  background: linear-gradient(145deg, #31333a, #3a3d44);
  box-shadow: 10px 10px 20px #31343a, -10px -10px 20px #3b3e46;
  padding: 2em;
  width: 80%;
  height: 20em;
  color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .intro {
    h1 {
      font-size: 1.8em;
    }

    p {
      margin-top: 0.5em;
      color: #eee;
    }
  }

  .links {
    display: flex;
    justify-content: space-evenly;

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

  button {
    width: 50%;
    height: 100%;
    border: 1px solid #42b983;
    color: #ddd;
    background-color: transparent;
    padding: 0.5em 1em;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.2em;

    &:hover {
      background-color: #42b983;
      transition-duration: 300ms;
    }

    i {
      margin-right: 0.5em;
    }
  }
}

@media (min-width: 64em) {
  .card {
    width: 40%;
  }
}
</style>
