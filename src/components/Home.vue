<template>
  <div class="home">
    <h1>Home</h1>
    <h2>{{ subtitle }}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos sapiente deserunt, quas labore quibusdam dolores dolor ducimus unde minima animi earum nobis facere nam fugiat temporibus itaque praesentium dolorem dolore.</p>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        subtitle: 'Página Principal'
      }
    }
  }
</script>