const $ = Dom7;

// Login Screen Demo
$('#my-login-screen .login-button').on('click', function () {
  var username = $('#my-login-screen [name="username"]').val();
  var password = $('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br/>Password: ' + password);
});

const event = window.cordova ? 'deviceready' : 'DOMContentLoaded';
document.addEventListener(event, async (e) => {
  pdfMake.fonts = {
    ipa: {
      normal: 'ipagp.ttf',
      bold: 'ipagp.ttf',
    }
  };
  window.app = new Framework7({
    name: 'My App', // App name
    theme: 'auto', // Automatic theme detection
    el: '#app', // App root element
    // App store
    store: store,
    // App routes
    routes: routes,
  });
});
