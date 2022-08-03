<template>
  <div class="stepper d-flex align-items-center">
    <div
      class="step"
      :class="[{ active: nowStep === 1 }, { checked: nowStep > 1 }]"
    >
      <div class="circle-container"></div>
      <div class="label-container">寄送地址</div>
      <div class="connect-line"></div>
    </div>

    <div
      class="step"
      :class="[{ active: nowStep === 2 }, { checked: nowStep > 2 }]"
    >
      <div class="circle-container"></div>
      <div class="label-container">運送方式</div>
      <div class="connect-line"></div>
    </div>

    <div
      class="step"
      :class="[{ active: nowStep === 3 }, { checked: formCompleted }]"
    >
      <div class="circle-container"></div>
      <div class="label-container">付款資訊</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nowStep: {
      type: Number,
      required: true,
    },
    formCompleted: {
      type: Boolean,
      required: true,
    },
  },
};
</script>