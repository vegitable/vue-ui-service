<template id="link-background">
  <section class="hero is-fullheight is-link">
    <nav :class="background" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link id="navbar-logo" class="navbar-item" to="/">
          <Logo passClass="title is-3 has-text-white-bis" />
        </router-link>

        <a id="navbar-menu">
          <router-link
            id="menu-left-arrow"
            class="icon is-large has-text-white-bis is-pulled-right"
            to="/"
          >
            <i class="fa fa-lg fa-chevron-left"></i>
          </router-link>
        </a>
      </div>
    </nav>
    <div class="hero-body">
      <div>
        <h1 class="title has-text-white-bis is-4">Add to home screen</h1>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '../components/Logo.vue';

export default {
  name: 'menuPage',
  components: {
    Logo,
  },
};
</script>

<style scoped>
#menu-left-arrow {
  padding: 4px 4px 0 0;
}
</style>
