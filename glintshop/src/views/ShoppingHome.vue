<template>
  <div class="home">
    <NavbarHome />
    <main>
      <div class="container">
        <h2 class="checkout-title">結帳</h2>
      </div>

      <div class="container">
        <!-- checkout stepper (Left)-->
        <div class="checkout-wrapper">
          <!-- step controller -->
          <StepController :now-step="step" :form-completed="isFormCompleted" />

          <!-- form panel -->
          <div class="form-panel">
            <!-- 用v-if呈現 -->
            <AddressFrom v-if="step === 1" />
            <DeliveryForm v-if="step === 2" @feeAmount-chosen="handleFeeAmount" />
            <PaymentForm v-if="step === 3"/>

            <!-- 用router-view -->
            <!-- <router-view
              @feeAmount-chosen="handleFeeAmount"
              @addressForm-saved="getAddress"      
              
            /> -->
          </div>

          <!-- Step control button -->
          <div class="btn-control d-flex justify-content-between">
            <button
              class="btn btn-outline"
              v-if="step > 1"
              @click.stop.prevent="preStep(step)"
            >
              &larr; 上一步
            </button>
            <button
              class="btn btn-primary"
              v-if="step === 3"
              @click.stop.prevent="confirmAccount"
            >
              確認訂單
            </button>
            <button
              class="btn btn-primary"
              v-else
              @click.stop.prevent="nextStep(step)"
            >
              下一步 &rarr;
            </button>
          </div>
        </div>

        <!-- shopping Cart (Right)-->
        <ShoppingCart :delivery-fee="deliveryFee" />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
/*eslint-disable*/
import NavbarHome from "../components/NavbarHome.vue";
import FooterButtom from "../components/FooterButtom.vue";
import StepController from "../components/StepController.vue";
import AddressFrom from "../components/AddressForm.vue";
import DeliveryForm from "../components/DeliveryForm.vue";
import PaymentForm from "../components/PaymentForm.vue";
import ShoppingCart from "../components/ShoppingCart.vue";
export default {
  name: 'shopping-home',
  components: {
    NavbarHome,
    FooterButtom,
    StepController,
    AddressFrom,
    DeliveryForm,
    PaymentForm,
    ShoppingCart,
  },
  data() {
    return {
      step: 1,
      formStep: ["Address", "Delivery", "Payment"],
      isFormCompleted: false,
      deliveryFee: 0,
      addressData: {},
      deliveryData: '',
      PaymentData: {},
    };
  },
  methods: {
    nextStep(step) {
      this.step = step + 1;
      // this.$router.push({ name: this.formStep[this.step - 1] });
    },
    preStep(step) {
      this.step = step - 1;
      // this.$router.push({ name: this.formStep[this.step - 1] });
    },
    confirmAccount() {
      this.isFormCompleted = true;
      //待完善：顯示確認訂單頁面
    },
    handleFeeAmount(feeAmount) {
      this.deliveryFee = feeAmount;
    },
    getAddress(address) {
      this.AddressData = address;
    },
    getDelivery(delivery) {
      this.deliveryData = delivery
      console.log(this.deliveryData)
    }
  },
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
</style>