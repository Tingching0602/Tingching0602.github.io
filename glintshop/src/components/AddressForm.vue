<template>
  <form id="form-address">
    <!--綁最後確認-->
    <div class="section address-info">
      <h2 class="form-title">寄送地址</h2>
      <div class="form-wrap mt-6">
        <div class="form-col d-flex justify-content-between">
          <div class="form-row d-flex flex-column gender">
            <label for="title">稱謂</label>
            <div class="select-wrap">
              <select v-model="addressInfo.gender" name="" id="title" required>
                <option value="mister" selected>先生</option>
                <option value="miss">小姐</option>
                <option value="other">其他</option>
              </select>
            </div>
          </div>
          <div class="form-row d-flex flex-column name">
            <label for="name">姓名</label
            ><input
              v-model="addressInfo.name"
              type="text"
              id="name"
              placeholder="請輸入姓名"
            />
          </div>
        </div>
        <div class="form-col-screen">
          <div class="form-row d-flex flex-column tel">
            <label for="">電話</label>
            <input
              v-model="addressInfo.tel"
              type="text"
              placeholder="請輸入行動電話"
            />
          </div>
          <div class="form-row d-flex flex-column email">
            <label for="">Email</label>
            <input
              v-model="addressInfo.email"
              type="text"
              placeholder="請輸入電子郵件"
            />
          </div>
        </div>
        <div class="form-col-screen">
          <div class="form-row d-flex flex-column city">
            <label for="">縣市</label>
            <div class="select-wrap">
              <select v-model="addressInfo.city" name="" id="" required>
                <option value="" selected disabled>請選擇縣市</option>
                <option value="Taipei">台北市</option>
                <option value="NewTaipei">新北市</option>
                <option value="TaiChung">台中市</option>
                <option value="TaiNan">台南市</option>
                <option value="Kaohsiung">高雄市</option>
                <option value="EastTaiwan">東部地區</option>
              </select>
            </div>
          </div>
          <div class="form-row d-flex flex-column address">
            <label for="">地址</label>
            <input
              v-model="addressInfo.address"
              type="text"
              placeholder="請輸入地址"
            />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
/*eslint-disable*/
export default {
  name: 'Address',
  data() {
    return {
      addressInfo: {
        gender: "",
        name: "",
        tel: "",
        email: "",
        city: "",
        address: "",
      },
    };
  },
  // computed: {
  //   addressFormSaved() {
  //     const addressData = {
  //       gender: this.addressInfo.gender,
  //       name: this.addressInfo.name,
  //       tel: this.addressInfo.tel,
  //       email: this.addressInfo.email,
  //       city: this.addressInfo.city,
  //       address: this.addressInfo.address
  //     }
  //     this.$emit('addressForm-saved', addressData)
  //   }
  // }
};
</script>