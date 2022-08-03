<template>
  <div class="container">
   <h2>Panel Heading</h2>
  <div class="panel1 panel-default">
    <div class="panel-heading">Panel Heading</div>
    <div class="panel-body">Panel Content</div>
  </div>
    <div class="panel2 panel-default">
    <div class="panel-heading">Panel Heading</div>
    <div class="panel-body">Panel Content</div>
  </div>
    <div class="text-center mb-3">
    <p>
    <router-link to="/">返回首頁</router-link>
    </p>
  </div>
  </div>
</template>
<style scoped>
.panel1 {
text-align: start;

}
.panel2 {
text-align: end;

}
</style>