<template>
  <form id="a-form" @change="withFeeAmountChosen">
    <div class="section delivery-info">
      <h2 class="form-title">運送方式</h2>
      <div
        class="form-wrap mt-6"
        v-for="deliveryWay in delivery"
        :key="deliveryWay.id"
      >
        <div class="form-row d-flex">
          <input
            type="radio"
            name="delivery"
            :value="deliveryWay.feeAmount"
            v-model="feeAmountChosen"
          />
          <label for="">
            <div class="delivery-method">
              {{ deliveryWay.name
              }}<span class="fee">{{ deliveryWay.fee }}</span>
            </div>
            <div class="days">{{ deliveryWay.deliveryDays }}</div>
          </label>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
/*eslint-disable*/
const dummyData = {
  delivery: [
    {
      id: 1,
      name: "標準運送",
      fee: "免費",
      feeAmount: 0,
      deliveryDays: "約3~7個工作天",
    },
    {
      id: 2,
      name: "DHL貨運",
      fee: "$500",
      feeAmount: 500,
      deliveryDays: "48小時內送達",
    },
  ],
};
export default {
  name: "Delivery",
  data() {
    return {
      delivery: [],
      feeAmountChosen: 0, //預設選擇標準運送
    };
  },
  created() {
    this.fetchDelivery();
  },
  methods: {
    fetchDelivery() {
      this.delivery = dummyData.delivery;
    },
    withFeeAmountChosen() {
      this.$emit("feeAmount-chosen", this.feeAmountChosen);
    },
  },
};
</script>
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
