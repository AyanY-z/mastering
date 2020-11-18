<template>
<div class="app">
<div class="container">
  <form v-show="step === 1">
    <div class="form-group">
      <h2>Hello!</h2>
      <br>
      <label for="login">Type your login</label>
      <input type="text" class="form-control" id="login" >
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="password">
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="checkBox1">
      <label class="form-check-label" for="checkBox1">Remember me</label>
    </div>
    <div class="btnSignIn">
      <button type="send" class="btn btn-primary btn-lg btn-block">Sign In</button>
    </div>
<div class="areYaNewUser">
    Are you here for the first time?
      <a @click="nextStep" class="registerLink">Check in</a>
</div>
  </form>
  <form v-show="step === 2">
    <div class="form-group">
      <label for="exampleInput">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Ivan">
    </div>
    <div class="form-group">
      <label for="exampleInput">Surname</label>
      <input type="text" class="form-control" id="surname" placeholder="Ivanov">
    </div>
    <div class="form-group">
      <label for="exampleInput">Pick a login</label>
      <input type="text" class="form-control" id="surname" placeholder="Login" lang="en">
    </div>
    <div class="form-group">
      <label for="login">Type your email</label>
      <input type="email" class="form-control" id="login" placeholder="example@example.ru">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Pick a password</label>
      <input type="password" class="form-control" id="password">
    </div>
    <div class="btnSignIn">
      <button @click="backStep" type="button" class="btn btn-outline-secondary">Назад</button>
      <div class="btnInRegistration">
      <button type="send" class="btn btn-primary">Зарегистрироваться</button>
      </div>
    </div>
  </form>
</div>
</div>
</template>

<script>
  export default {
    data(){
      return {
        step: 1
      }
    },
    methods: {
      nextStep() {
        this.step++
      },
      backStep() {
        this.step--
      }
    }
  }
</script>

<style>
.container{
  position: absolute;
  top: 20%;
  width: 20%;
  left: 40%;
}
.btnInRegistration {
  margin-left: 2%;
  display: inline;
}
.btnSignIn {
  display:inline;
}
.btnRegister {
  display:inline;
  margin-left: 2%;
}
.registerLink {
  color: grey;
}
.areYaNewUser {
  margin-top: 2%;
  text-align: right;
}
h2 {
  text-align: center;
}
</style>