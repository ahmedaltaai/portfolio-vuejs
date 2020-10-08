<template>
  <main class="scroller projects__view">
    <div class="image">
      <img src="../assets/Group 11-0.svg" alt="" />
      <h1>MY PROJECTS</h1>
    </div>
    <Project />
  </main>
</template>

<script>
//import Project from '@/components/Project'
import LoadingComponent from '@/components/LoadingComponent'
import ErrorComponent from '@/components/ErrorComponent'
const Project = () => ({
  component: import(/* webpackChunkName: "project" */ '@/components/Project'),
  loading: LoadingComponent,
  error: ErrorComponent,
  timeout: 3000
})

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
