<template>
  <div class="container">
    <div class="card">
      <div class="image loading"></div>
      <div class="text ">
        <div class="title loading"></div>
        <div class="description loading"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingComponent'
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;

  .card {
    width: 100%;
    margin: 1em 0;
    background-color: #212226;
    box-shadow: 0px 5px 15px 1px #222;
    height: 20em;
    position: relative;

    .image {
      height: 10em;
      background-color: #363940;
    }

    .text {
      padding: 1em;

      .title {
        background-color: #363940;
        height: 2em;
        width: 100%;
      }

      .description {
        background-color: #363940;
        margin-top: 1em;
        height: 5em;
      }
    }

    .loading {
      position: relative;
      overflow: hidden;

      &::after {
        display: block;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        transform: translateX(-100%);
        background: linear-gradient(
          90deg,
          transparent,
          rgba(0, 0, 0, 0.2),
          transparent
        );
        animation: loading 1.5s infinite;
      }
    }
  }

  @keyframes loading {
    100% {
      transform: translateX(100%);
    }
  }
}
</style>
