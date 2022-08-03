<template>
  <form id="a-form">
    <div class="section payment-info">
      <h2 class="form-title">付款資訊</h2>
      <div class="form-wrap mt-6">
        <div class="form-row d-flex flex-column">
          <label for="">持卡人姓名</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div class="form-row d-flex flex-column">
          <label for="">卡號</label>
          <input type="number" placeholder="1111 2222 3333 4444" />
        </div>
        <div class="form-col d-flex justify-content-between">
          <div class="end-time form-row d-flex flex-column">
            <label for="">有效期限</label>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div class="cvc-ccv form-row d-flex flex-column">
            <label for="">CVC/CCV</label
            ><input type="number" placeholder="123" />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>