<template>
  <article class="publications__container">
    <section v-for="(videos, i) in channelContent" :key="i" class="card">
      <div v-for="video in videos.items" :key="video.id">
        <div class="cover-image">
          <img :src="video.snippet.thumbnail.standard" />
        </div>
        <div class="title">
          <a
            :href="
              `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`
            "
            >{{ video.snippet.title }}
          </a>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Youtube',
  data() {
    return {
      channelContent: []
    }
  },
  beforeCreate() {
    fetch(
      'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUW5YeuERMmlnqo4oq8vwUpg&key=AIzaSyB217WFq3rtxL8q7BmHX0UA39yyvyt2qIM'
    )
      .then(res => res.json())
      .then(data => (this.channelContent = data))
  },
  created() {
    console.log(this.video)
  }
}
</script>

<style lang="scss" scoped>
.publications__container {
  display: flex;
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
      }
    }

    .title {
      padding: 1em;
      font-weight: 600;

      a {
        text-decoration: none;
        color: #ddd;
        font-size: 1.2em;

        &:hover {
          color: #42b983;
        }
      }
    }
  }
}

@media (min-width: 46em) {
  .publications__container {
    flex-direction: row !important;
    flex-wrap: wrap;

    .card {
      width: 45%;
      margin: 2em 1em;
    }
  }
}

@media (min-width: 66em) {
  .publications__container {
    .card {
      width: 30%;
      margin: 2em 1em;
    }
  }
}
</style>
