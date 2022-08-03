<template>
  <div class="slide col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="plant.imag"
        alt="Card image cap"
        width="286px"
        height="180px"
      />
      <div class="card-body">
        <p class="card-text title-wrap">
          <a href="#">
            {{ plant.name }}
          </a>
        </p>
        <span class="badge badge-secondary"
          >目前數量尚有：{{ plant.counts }}</span
        >
        <p class="card-text text-truncate">
          {{ plant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-outline-danger btn-sm ml-auto" @click="addToCart(plant.id)">
          加到購物車
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    initialPlant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      plant: this.initialPlant,
    };
  },
   methods: {
      showNext() {
        this.$refs.carousel.next()
      },
      addToCart() {
        this.plant = {
          ...this.plant,
          
        }
      }

    }
};
</script>
<style lang="scss" scoped>
.card {
  display: grid;
  align-items: center;
  background-color: #BAB6;
}
</style>