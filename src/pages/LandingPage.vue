<template>
  <span>
    <NavBar
      background="navbar is-primary"
      logoPassClass="title is-3 has-text-white-bis"
      menuClass="icon is-large has-text-white-bis"
    />
    <section id="primary-background" class="hero is-fullheight-with-navbar is-primary">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <h1
                id="title"
                class="title has-text-white-bis"
              >Find meat-free food, wherever you end up...</h1>
              <div class="box">
                <form>
                  <div class="field">
                    <div
                      id="landing-page-label"
                      class="has-text-grey-light"
                    >Enter a postcode to find vegetarian meals</div>
                    <div class="control has-icons-right">
                      <input class="input" type="postcode" placeholder="e.g. E147DX" required />
                      <span class="icon is-small has-text-link is-right">
                        <i class="fa fa-location-arrow"></i>
                      </span>
                    </div>
                  </div>
                  <div class="button is-fullwidth is-link">Search</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </span>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  name: 'landingPage',
  components: {
    NavBar,
  },
};
</script>

<style scoped>
#landing-page-label {
  padding-bottom: 6px !important;
}
</style>
