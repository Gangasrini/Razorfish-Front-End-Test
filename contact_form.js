/*function setfocus(){
    document.getElementById("email").focus();
    
}*/

/*function checkEmail(email) {
var regExp = /(^[a-z]([a-z_\.]*)@([a-z_\.]*)([.][a-z]{3})$)|(^[a-z]([a-z_\.]*)@([a-z_\.]*)(\.[a-z]{3})(\.[a-z]{2})*$)/i;
return regExp.test(email);
}*/

var emailArray = new Array();

function validateemail(email)
{
    if (email.length != 0)
    {
        var regExp = /(^[a-z]([a-z_\.]*)@([a-z_\.]*)([.][a-z]{3})$)|(^[a-z]([a-z_\.]*)@([a-z_\.]*)(\.[a-z]{3})(\.[a-z]{2})*$)/i;
        var result = regExp.test(email);
        if (result) {emailArray.push(email+'; ');}
        return result;
	}
}


$(function()
  {
     $('#email_contact input').on({focusout: function()
                                   {
                                       var txt = $.trim( this.value.replace(',', '') );
                                       var mail = validateemail(txt);
                                       if(mail)
                                       {
                                           $(this).before('<span class="tag">'+txt+'</span>');
                                           this.value = "";
                                       } 
                                       else if (txt.length != 0)
                                       {
                                           $('#email_contact input').focus();
                                       }
                                   }, keyup : function(ev)
                                   {
                                       // if: comma|enter (delimit more keyCodes with | pipe)
                                       if(/(188|13)/.test(ev.which)) $(this).focusout(); 
                                   }
                                  });
     $('#email_contact').on('click', 'span', function(){
         if(confirm("Remove "+ $(this).text() +"?")) $(this).remove();
     });
});

function sendmail()
{
    if (emailArray.length != 0)
        {
            var ssvemails = emailArray.join("");
            var subject = document.getElementById("subject").value;
            var body = document.getElementById("message").value;
            var check = document.getElementById("copy").checked;
            var bcc = "";
            if (check)
            {
                bcc = "gangasrinivasan2011@gmail.com";
            }
            if (bcc.length > 0)
                {
                    window.open('mailto:'+ssvemails+'?bcc='+bcc+'&subject='+subject+'&body='+body);
                }
            else
                {
                    window.open('mailto:'+ssvemails+'?subject='+subject+'&body='+body);
                }
        }
    else
        {
            alert("Please add an email");
            document.getElementById("email").focus();
            
        }
}