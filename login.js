function checkPasswordMatch() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var message = document.getElementById('message');
  
    if (password === confirmPassword) {
      message.style.color = 'green';
      message.innerHTML = 'Mật khẩu khớp!';
    } else {
      message.style.color = 'red';
      message.innerHTML = 'Mật khẩu không khớp!';
    }
  }