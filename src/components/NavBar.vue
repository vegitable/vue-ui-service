<template>
  <nav :class="background" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a id="navbar-logo" class="navbar-item" href="/">
        <Logo :passClass="logoPassClass" />
      </a>

      <a id="navbar-menu">
        <span :class="menuClass">
          <i class="fa fa-lg fa-bars"></i>
        </span>
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
  margin-left: auto;
  padding: 20px 20px 0 0;
}
</style>
