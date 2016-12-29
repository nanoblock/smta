function showModal(type) {
    closeNav();
    styleType(type);
    $("#userModal").modal();
  }

  $(".userModal").click(function(e){
    e.preventDefault();
    closeNav();
    styleType($(this).attr('id'));
    $("#userModal").modal();
  });

  $('.regist').on('click', function(e) {
    styleType('regist');
  });

  $('.login').on('click', function(e) {
    styleType('login');
  });

  function styleType(id) {
    if(id === 'regist') {
      styleRegistTitle();
      $('.modal-regist').css('display', 'block');
      $('.modal-login').css('display', 'none');
      $('.submit-regist-btn').css('display', 'block');
      $('.submit-login-btn').css('display', 'none');
    } else if(id === 'login') {
      styleLoginTitle();
      $('.modal-regist').css('display','none');
      $('.modal-login').css('display', 'block');
      $('.submit-regist-btn').css('display', 'none');
      $('.submit-login-btn').css('display', 'block');
    }
    setTimeout(function() {
        $("[autofocus]").focus(); 
      }, 500);
  }

  function styleRegistTitle() {
    $('.regist').css({
        'border-color': '#ffac48',
        'color': '#ffac48',
        'background-color': '#FFFFFF'
      });
      $('.login').css({
        'border-color': 'transparent',
        'color': '#FFFFFF',
        'background-color': '#D8D8D8'
      });
      $('#regist-image').attr('src', '/assets/landing/usermodal/regist_on.svg');
      $('#login-image').attr('src', '/assets/landing/usermodal/login.svg');
  }

  function styleLoginTitle() {
    $('.regist').css({
        'border-color': 'transparent',
        'color': '#FFFFFF',
        'background-color': '#D8D8D8'
      });
      $('.login').css({
        'border-color': '#ffac48',
        'color': '#ffac48',
        'background-color': '#FFFFFF'
      });
      $('#regist-image').attr('src', '/assets/landing/usermodal/regist.svg');
      $('#login-image').attr('src', '/assets/landing/usermodal/login_on.svg');
  }

  $('#userModal').on('show.bs.modal', function(){
      $(".email-form-error").css('visibility', 'hidden');
      $(".pw-form-error").css('visibility', 'hidden');

      $('.regist-email').val('');
      $('.regist-pw').val('');
      $('.regist-email-img').attr('src', '/assets/landing/usermodal/email.svg');
      $('.regist-pw-img').attr('src', '/assets/landing/usermodal/password.svg');

      $('.login-email').val('');
      $('.login-pw').val('');
      $('.login-email-img').attr('src', '/assets/landing/usermodal/email.svg');
      $('.login-pw-img').attr('src', '/assets/landing/usermodal/password.svg');
    });

  

  $(document).ready(function(){
    var RegexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i; //이메일 요휴성검사
    var RegexPw = /^[a-zA-Z0-9._-]{4,30}$/;

    $('.submit-regist-btn').on('click', function(event) {
      if ( !RegexEmail.test($.trim($(".modal-regist .regist-email").val())) && !RegexPw.test($.trim($(".regist-pw").val())) ) {
        $(".modal-regist .email-form-error").css('visibility', 'visible');
        $(".modal-regist .pw-form-error").css('visibility', 'visible');
        // $(".modal-regist .email-form-error").effect( 'highlight', {color: 'rgba(245, 133, 31, 0.3)'}, 500, null );
        // $(".modal-regist .pw-form-error").effect( 'highlight', {color: 'rgba(245, 133, 31, 0.3)'}, 500, null );
        $('.modal-regist .regist-email-img').attr('src', '/assets/landing/usermodal/email_error.svg');
        $('.modal-regist .regist-pw-img').attr('src', '/assets/landing/usermodal/password_error.svg');
        $(".modal-regist .regist-email").focus();
        return false;
      } else if(!RegexEmail.test($.trim($(".modal-regist .regist-email").val()))) {
        $(".modal-regist .email-form-error").css('visibility', 'visible');
        $(".modal-regist .pw-form-error").css('visibility', 'hidden');
        // $(".modal-regist .email-form-error").effect( 'highlight', {color: 'rgba(245, 133, 31, 0.3)'}, 500, null );
        $('.modal-regist .regist-email-img').attr('src', '/assets/landing/usermodal/email_error.svg');
        $('.modal-regist .regist-email-img').attr('src', '/assets/landing/usermodal/password.svg');
        $(".modal-regist .regist-email").focus();
        return false;      
      } else if(!RegexPw.test($.trim($(".modal-regist .regist-pw").val()))) {
        $(".modal-regist .email-form-error").css('visibility', 'hidden');
        $(".modal-regist .pw-form-error").css('visibility', 'visible');
        // $(".modal-regist .pw-form-error").effect( 'highlight', {color: 'rgba(245, 133, 31, 0.3)'}, 500, null );
        $('.modal-regist .regist-email-img').attr('src', '/assets/landing/usermodal/email.svg');
        $('.modal-regist .regist-pw-img').attr('src', '/assets/landing/usermodal/password_error.svg');
        $(".modal-regist .regist-pw").focus();
        return false;
      }
    });

    $('.submit-login-btn').on('click', function(event) {
      // if(!RegexEmail.test($.trim($('modal-login .login-email').val()))) {
      //   $('.modal-login .email-form-error').text('이메일을 정확히 입력해 주세요.').css('visibility', 'visible');
      //   $('.modal-login .pw-form-error').css('visibility', 'hidden');
      //   // $(".modal-login .pw-form-error").effect( 'highlight', {color: 'rgba(245, 133, 31, 0.3)'}, 500, null );
      //   $('.modal-login .login-email-img').attr('src', '/assets/landing/usermodal/email_error.svg');
      //   $('.modal-login .login-pw-img').attr('src', '/assets/landing/usermodal/password.svg');
      //   $('.modal-login .login-email').val('').focus();
      //   return false
      // }

      if(!RegexPw.test($.trim($('.modal-login .login-pw').val()))) {
        $('.modal-login .email-form-error').css('visibility', 'hidden');
        $('.modal-login .pw-form-error').text('비밀번호는 4글자 이상, 숫자를 포함하여 만들어주세요.').css('visibility', 'visible');
        // $(".modal-login .pw-form-error").effect( 'highlight', {color: 'rgba(245, 133, 31, 0.3)'}, 500, null );
        $('.modal-login .login-email-img').attr('src', '/assets/landing/usermodal/email.svg');
        $('.modal-login .login-pw-img').attr('src', '/assets/landing/usermodal/password_error.svg');
        $('.modal-login .login-pw').focus();
        return false; 
      }

      $(document).bind('ajax:success', function(e, data, status, xhr) {
          window.location = '/';
        })
      .bind("ajax:error", function(e, xhr, status, error) {
        if(xhr.responseText === 'Not exist email.') {
          $('.modal-login .email-form-error').text('존재하지 않는 이메일입니다.').css('visibility', 'visible');
          $('.modal-login .pw-form-error').css('visibility', 'hidden');
          $('.modal-login .login-email-img').attr('src', '/assets/landing/usermodal/email_error.svg');
          $('.modal-login .login-pw-img').attr('src', '/assets/landing/usermodal/password.svg');
          $(".modal-login .login-email").val('').focus(); 
          
          return false;
        } else if(xhr.responseText === 'Invalid password.') {
          $('.modal-login .email-form-error').css('visibility', 'hidden');
          $('.modal-login .pw-form-error').text('비밀번호가 틀렸습니다. 다시 입력해주세요.').css('visibility', 'visible');
          $('.modal-login .login-email-img').attr('src', '/assets/landing/usermodal/email.svg');
          $('.modal-login .login-pw-img').attr('src', '/assets/landing/usermodal/password_error.svg');
          $(".modal-login .login-pw").val('').focus(); 
          return false;
        }
        });
    });

  });