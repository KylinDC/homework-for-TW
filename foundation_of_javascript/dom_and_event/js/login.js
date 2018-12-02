let submit = document.getElementById('submit');

submit.addEventListener('click', showLoginResult);

function showLoginResult() {
  let account = document.getElementById('account');
  let password = document.getElementById('password');
  let status = document.getElementById('status');
  if (isLoginSuccess(account, password)) {
    status.innerHTML = '登陆成功，正在跳转...';
  }
  else {
    status.innerHTML = '账户或密码错误，请重新再试';
    resetInput(account, password)(account, password);
  }
}

function isLoginSuccess(account, password) {
  return account.value === '123' && password.value === '123';
}

function resetInput(account, password)(account, password) {
  account.value = '';
  password.value = '';
}
