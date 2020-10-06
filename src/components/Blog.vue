<template>
  <article class="publications__container">
    <section
      v-for="post in user.publication.posts"
      :key="post.cuid"
      class="card"
    >
      <div class="cover-image">
        <img :src="post.coverImage" />
      </div>
      <div class="text">
        <div class="title">
          <a :href="`https://ahmeds.tech/${post.slug}`">{{ post.title }}</a>
        </div>
        <div class="description">
          <p>{{ post.brief }}</p>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'blog',
  apollo: {
    user: gql`
      query {
        user(username: "ahmedaltaai") {
          publication {
            posts {
              coverImage
              title
              brief
              slug
              cuid
            }
          }
        }
      }
    `
  }
}
</script>

<style lang="scss" scoped>
.publications__container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 90%;

  .card {
    width: 100%;
    margin: 1em 0;
    background-color: #212226;
    box-shadow: 0px 5px 15px 1px #222;

    &:hover {
      transform: translateY(-2%);
      transition-duration: 300ms;
    }

    .cover-image {
      img {
        width: 100%;
        object-fit: fill;
      }
    }

    .text {
      padding: 1em;
      .title {
        a {
          text-decoration: none;
          color: #ddd;
          font-size: 1.2em;
        }
        font-weight: 600;
      }

      .description {
        margin-top: 1em;
        color: #aaa;
      }
    }
  }
}

@media (min-width: 46em) {
  .publications__container {
    flex-direction: row;
    flex-wrap: wrap;

    .card {
      width: 45%;
      margin: 2em 1em;
    }
  }
}

@media (min-width: 66em) {
  .publications__container {
    flex-direction: row !important;
    flex-wrap: wrap;

    .card {
      width: 30%;
      margin: 2em 1em;
    }
  }
}
</style>
