<template>
  <span>
    <NavBar
      background="navbar"
      logoPassClass="title is-3 has-text-primary"
      menuClass="has-text-primary"
    />
    <div class="hero is-large">
      <div class="hero-body">
        <h1 class="title is-4 has-text-grey">What are you looking for?</h1>
      </div>
    </div>
    <div id="restaurant-list" class="section">
      <RestaurantCard />
      <RestaurantCard />
    </div>
  </span>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import RestaurantCard from '../components/RestaurantCard.vue';

export default {
  name: 'searchPage',
  components: {
    NavBar,
    RestaurantCard,
  },
};
</script>

<style scoped>
#restaurant-list {
  padding-top: 0px;
}
</style>
