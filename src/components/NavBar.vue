<template>
  <nav :class="background" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link id="navbar-logo" class="navbar-item" to="/">
        <Logo :passClass="logoPassClass" />
      </router-link>

      <a id="navbar-menu">
        <router-link :class="menuClass" to="/menu">
          <i class="fa fa-lg fa-bars"></i>
        </router-link>
      </a>
    </div>
  </nav>
</template>

<script>
import Logo from './Logo.vue';

export default {
  name: 'NavBar',
  components: {
    Logo,
  },
  props: {
    background: String,
    logoPassClass: String,
    menuClass: String,
  },
};
</script>

<style>
#navbar-logo {
  padding: 8px 0 0px 16px;
}

#navbar-menu {
  margin: 8px 8px 0 auto;
}
</style>
