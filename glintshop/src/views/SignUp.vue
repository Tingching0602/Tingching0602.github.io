<template>
<div id="signup">
  <div class="container py-5">
    <form class="signup-form" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h1 mb-3 font-weight-normal">建立你的會員帳號</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">姓名</label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="email">帳號</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">密碼</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">密碼確認</label>
        <input
          id="password-check"
          v-model="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password Check"
          autocomplete="new-password"
          required
        />
      </div>

      <button
        class="btnsignup btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        建立
      </button>

      <div class="btntosignin text-center mb-3">
        <p>
          <router-link to="/signin"> 登入會員帳號 </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2022</p>
    </form>
  </div>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (
          !this.name ||
          !this.email ||
          !this.password ||
          !this.passwordCheck
        ) {
          Toast.fire({
            icon: "warning",
            title: "請確認已填寫所有欄位",
          });
          return;
        }
        if (this.password !== this.passwordCheck) {
          Toast.fire({
            icon: "warning",
            title: "兩次輸入的密碼不同",
          });
          this.passwordCheck = "";
          return;
        }
        this.isProcessing = true;
        const { data } = await authorizationAPI.signUp({
          name: this.name,
          email: this.email,
          password: this.password,
          passwordCheck: this.passwordCheck,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: data.message,
        });
        // 成功登入後轉址到登入頁
        this.$router.push("/signin");
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法註冊會員，請稍後再試",
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>

#signup {
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-label-group {
  width: 540px;
  margin: 10px 0;
  position: relative;
}


h1 {
  margin-top: 25px;
  font-weight: bold;
  color: #728C37;
  font-size: 23px;
}

.form-label-group {
  width: 540px;
  margin: 10px 0;
  position: relative;
}

.btnsignup {
 color: #fff;
 background-color: #728C37;
 font-weight: 700;
 font-size: 24px;
 border-radius: 50px;
 width: 540px;
 height: 52px;
}

label {
  position: absolute;
  padding-left: 11px;
  color: #657786;
  font-size: 15px;
  display: block;
  width: 100%;
}

input {
  width: 540px;
  height: 52px;
  border-radius: 4px;
  font-size: 19px;
  font-weight: 500;
  background-color: #F5F8FA;
  padding: 1.3em 0 0 1em;
  border: none;
  border-bottom: 2px solid #657786;
  &:focus,
  &:hover {
    border-bottom: 2px solid #BAB649;
  }
}

.btntosignin {
  text-decoration: underline;
  font-size: 18px;
  font-weight: 700;
}

</style>