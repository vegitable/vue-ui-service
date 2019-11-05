<template>
  <div id="restaurant-card" class="card">
    <div class="card-image">
      <figure>
        <img src="https://via.placeholder.com/1280x640" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <span class="title is-4">Nandos</span>
        </div>
      </div>

      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris.
        <br />
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Meals</a>
      <a href="#" class="card-footer-item">Directions</a>
      <a href="#" class="card-footer-item">Website</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'restaurant-card',
};
</script>

<style scoped>
#restaurant-card {
  margin-bottom: 24px;
}
</style>
