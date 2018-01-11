import Ember from 'ember';

let defaultId = "ldh";
let defaultPwd = "1234";

export default Ember.Route.extend({
  actions: {
    requestLogin() {
      let id = $(".userName").val();
      let pwd = $(".password").val();
      if (id === defaultId && pwd === defaultPwd) {
        this.replaceWith('index');
      } else {
        alert("아이디 또는 비밀번호가 맞지않습니다. ")
      }
    }
  }
});
