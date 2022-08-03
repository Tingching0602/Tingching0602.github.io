<template>
<div id="signin">
  <div class="container py-5">
      <h1 class="h3 mb-3 font-weight-normal">登入會員</h1>
    <form class="signin-form" @submit.prevent.stop="handleSubmit">

      <div class="form-label-group mb-2">
        <label for="email">帳號</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
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
          autocomplete="current-password"
          required
        />
      </div>

      <button
        class="btnSignin btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        登入
      </button>

      <div class="btnSignup text-center mb-3">
        <p>
          <router-link to="/signup">註冊會員</router-link>
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
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
      isAuthenticated:true
    };
  },
  methods: {
    async handleSubmit() {
      try {
        //先透過前段做帳號密碼的第一道防線
        if (!this.email || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請輸入您的帳號密碼",
          });
          return;
        }
        this.isProcessing = true;
        // 原本的.then start--
        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password,
        });
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // 將 token 放到 localStorage
        localStorage.setItem("token", data.token);
        //將資料傳到 vuex 中
        this.$store.commit("setCurrentUser", data.user);
        // 成功登入後轉址到餐廳首頁
        this.$router.push("/HomeMain");
        // 原本的.then end--
      } catch (error) {
        this.isProcessing = false;
        this.password = "";
        Toast.fire({
          icon: "warning",
          title: "輸入的帳號密碼有誤",
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../styles/variables.scss";
#signin {
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin-top: 25px;
  font-weight: bold;
  color: #728C37;
  font-size: 23px;
}

label {
  position: absolute;
  color: $secondaryTextColor;
  font-size: 15px;
  font-weight: 500;
  display: block;
  width: 100%;
  padding-left: 11px;
}

.placeholder {
  position: absolute;
  left: 0.625rem;
  top: 0.313rem;
  color: $secondaryTextColor;
  font-size: 15px;
  font-weight: 500;
  line-height: 15px;
}

.invalid {
  border-bottom: 2px solid #fc5a5a;
}

input {
  width: 540px;
  height: 52px;
  border-radius: 4px;
  background-color: $formBgColor;
  margin-bottom: 2em;
  padding: 1.3em 0 0 1em;
  font-size: 19px;
  font-weight: 500;
  border: none;
  border-bottom: 2px solid $secondaryTextColor;
  &:focus,
  &:hover {
    border-bottom: 2px solid #BAB649;
  }
}

.form-label-group {
  position: relative;
}
.btnSignin {
  width: 540px;
  height: 50px;
  border-radius: 50px;
  background-color: #728C37;
  font-size: 18px;
  font-weight: 700;
  color: $white;
  margin-top: 2em;
  padding: 0.625rem 2.5rem;
  border: none;
  &:disabled {
    opacity: 0.7;
  }
}

.btnSignup {
  text-decoration-line: underline;
  color: $blue;
  font-weight: 700;
}
</style>