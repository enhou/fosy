
function sitePopupAjaxShowProgress (messageHolderId) {
    $('#'+messageHolderId)[0].innerHTML='<img valign="absmiddle" src="/image/loadingAnimation.gif"><div class="vspace10"></div><div class="vspace10"></div>';
}

function sitePopupAjaxFormSubmit(formId, url, messageHolderId, next) {
    sitePopupAjaxShowProgress(messageHolderId);
    $.post(
        url,
        $("#"+formId).serialize(),
        function(data){
            var jsonResult=eval("(" + data + ")");

            if (jsonResult.status==1) {
                //succeed
                $('#'+messageHolderId).html(jsonResult.messageHtml);
                //$('#'+formId).hide();
                if (jsonResult.next) {
                    next=jsonResult.next;
                }
                if (next) {
                    window.setTimeout(function() {
                        self.location=next;
                    }, 300);
                }
                

            }
            else {
                //direct print error message
                $('#'+messageHolderId).html(jsonResult.messageHtml);
            }

        }
    );
}

function sitePopupAjaxLoadLoginForm () {
    var url="/popup/login-form";
    $.ajax({
      url: url,
      success: function( data ) {
          $('#fancybox-content').children(':first-child').html(data);
      }
    });
}


function sitePopupAjaxLoadRegisterForm () {
    var url="/popup/register-form";
    $.ajax({
      url: url,
      success: function( data ) {
          $('#fancybox-content').children(':first-child').html(data);
      }
    });

}

function sitePopupAjaxLoadForgotPasswordForm () {
    var url="/popup/forgot-password-form";
    $.ajax({
      url: url,
      success: function( data ) {
          $('#fancybox-content').children(':first-child').html(data);
      }
    });

}
