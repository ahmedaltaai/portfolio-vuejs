<template>
<<<<<<< HEAD
  <main class="scroller projects__view">
    <div class="image">
      <img src="../assets/Group 11-0.svg" alt="" />
      <h1>MY PROJECTS</h1>
    </div>
    <Project />
  </main>
</template>

<script>
import Project from '@/components/Project'

export default {
  components: { Project }
}
</script>

<style lang="scss" scoped>
.image {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0em auto;
  width: 90%;

  img {
    margin-top: 2em;
  }

  h1 {
    margin-top: 1em;
    text-align: center;
    color: #ddd;
  }
}

@media (min-width: 43em) {
  .image {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0em auto;
    padding: 2em;
    width: 80%;

    img {
      margin-top: 2em;
    }

    h1 {
      margin-top: 2em;
      text-align: center;
      color: #ddd;
    }
  }
}

@media (min-width: 62em) {
  .image {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0em auto;
    padding: 2em;
    width: 50%;

    img {
      margin-top: 2em;
    }

    h1 {
      margin-top: 2em;
      text-align: center;
      color: #ddd;
    }
  }
}
</style>
=======
  <div class="projects">
    <h1>This is projects page</h1>
  </div>
</template>
>>>>>>> f512a6d1e4cbf7d5ea6f6ae9ffce11962668cb28
