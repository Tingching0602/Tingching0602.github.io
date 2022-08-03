
<script>
export default {
  props: {
    nowStep: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      step: this.nowStep,
    };
  },
  methods: {
    nextStep(step) {
      this.step = step + 1;
      console.log(this.step);
      this.$emit("toNextStep", step);
    },
  },
};
</script>
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
