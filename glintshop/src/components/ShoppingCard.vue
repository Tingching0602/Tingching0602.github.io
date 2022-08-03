<template>
  <div class="shopping-lists-wrapper">
    <div class="shopping-content">
      <p class="shopping-lists-title">購物籃</p>
      <ul class="shopping-lists">
        <li class="product" v-for="product in products" :key="product.id">
          <img :src="product.image" alt="" />
          <div class="product-content d-flex flex-column">
            <span class="title">{{ product.name }}</span>
            <div class="amount-control">
              <div class="minus" @click.stop.prevent="minusAmount(product.id)">
                －
              </div>
              <span class="amount">{{ product.amount }}</span>
              <div class="plus" @click.stop.prevent="plusAmount(product.id)">
                ＋
              </div>
            </div>
            <div class="price">{{ product.price }}</div>
          </div>
        </li>
      </ul>
      <div
        class="price-outline d-flex justify-content-between align-items-center"
      >
        運費
        <div class="delivery-fee">{{ deliveryFee | presentDeliveryFee }}</div>
      </div>
      <div
        class="price-outline d-flex justify-content-between align-items-center"
      >
        小計
        <div class="total-amount">${{ renewTotalPrice }}</div>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import image1 from "../assets/image/plant1.png";
import image2 from "../assets/image/plant2.png";
const dummyData = {
  products: [
    {
      id: 123,
      name: "斑葉姑婆芋",
      image: image1,
      price: "$2,580",
      priceNumber: 2580,
      amount: 1,
    },
    {
      id: 126,
      name: "凹突觀音蓮",
      image: image2,
      price: "$1,200",
      priceNumber: 1200,
      amount: 1,
    },
  ],
};
export default {
  props: {
    deliveryFee: {
      type: Number,
      required: true,
    },
    shoppingList: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      products: [],
      totalPrice: 0,
    };
  },
  created() {
    this.fetchProducts();
    // this.fetchTotalPrice()
  },
  methods: {
    fetchProducts() {
      this.products = dummyData.products;
    },
    fetchTotalPrice() {
      this.products.forEach((product) => {
        this.totalPrice += product.priceNumber * product.amount;
      });
      this.totalPrice += this.deliveryFee;
    },
    minusAmount(productId) {
      this.products = this.products.map((product) => {
        if (product.id === productId && product.amount !== 0) {
          return {
            ...product,
            amount: product.amount - 1,
          };
        }
        return product;
      });
    },
    plusAmount(productId) {
      this.products = this.products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            amount: product.amount + 1,
          };
        }
        return product;
      });
    },
  },
  computed: {
    renewTotalPrice() {
      this.totalPrice = 0;
      this.products.forEach((product) => {
        this.totalPrice += product.amount * product.priceNumber;
      });
      this.totalPrice += this.deliveryFee;
      return this.totalPrice;
    },
  },
  filters: {
    presentDeliveryFee(fee) {
      if (fee === 0) {
        return "免費";
      }
      return "$" + fee;
    },
  },
};
</script>