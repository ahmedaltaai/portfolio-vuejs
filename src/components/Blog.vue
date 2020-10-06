<template>
  <article class="projects__container">
    <h1>MEDIUM</h1>
  </article>
</template>

<script>
export default {
  name: 'blog',
  data() {
    return {
      blogs: []
    }
  },
  created() {
    fetch('https://api.hashnode.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query:
          '{ user(username: "titanium"){publication{posts {title cuid coverImage brief} }}}'
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // this.blogs = data
      })
    console.log(this.blogs)
  },
  mounted() {
    console.log(this.blogs)
  }
}
</script>

<style lang="scss" scoped>
.projects__container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
}
</style>
