<template>
  <span id="link-background">
    <NavBar
      background="navbar is-link"
      logoPassClass="title is-3 has-text-white-bis"
      menuClass="icon is-large has-text-white-bis"
    />
  </span>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  name: 'menuPage',
  components: {
    NavBar,
  },
};
</script>
