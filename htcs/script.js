// select which you are going perform i am using const insted of var let
    const form       = document.getElementById('login-form');
    const username   = document.getElementById('username');
    const password   = document.getElementById('password');
    const forgotLink = document.getElementById('forgot-link');

    //  Form submission handler
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // prevent actual form submission

      const userVal = username.value;
      const passVal = password.value;

      if (userVal.length <= 8 || userVal.length >= 16) {
        alert('Username must be at least 8 characters and less than 16 character long.');
        username.focus();
        return;
      }
      if (passVal.length < 6) {
        alert('Password must be at least 6 characters long.');
        password.focus();
        return;
      }
      
      if (!/[A-Z]/.test(passVal)){
        alert('password must contain at least one uppercase letter.');
        password.focus();
        return;
      }
      
      if (!/[a-z]/.test(passVal)){
        alert('password must contain at least one lowercase letter.');
        password.focus();
        return;
      }
       
      if (!/[0-9]/.test(passVal)){
        alert('password must contain at least one numerical number.');
        password.focus();
        return;
      }
      
      if (!/[!@#$%^&*()<>,./?"{}]/.test(passVal)){
        alert('password must contain at leat one special character letter.');
        password.focus();
        return;
      }

    
      window.location.href='train.html';
    });
    
    forgotLink.addEventListener('click', function(e) {
      e.preventDefault();
      const email = prompt('Enter your email to reset password:');
      if (email) {
    
        alert('If an account with ' + email + ' exists, a reset link has been sent.');
      }
    });
  