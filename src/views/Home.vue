<template>
  <main class="home__view">
    <IntroCard />
  </main>
</template>

<script>
// @ is an alias to /src
import IntroCard from '@/components/IntroCard'

export default {
  name: 'Home',
  components: { IntroCard }
}
</script>

<style lang="scss" scoped></style>
