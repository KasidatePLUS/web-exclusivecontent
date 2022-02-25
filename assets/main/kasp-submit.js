document.getElementById("Flogin").addEventListener("submit", loginFS);
function loginFS() {
    document.getElementById("kasp-noti").innerHTML = UIkit.notification({
        message:'<div class="uk-text-bold uk-text-small"><span uk-icon="warning"></span> KasidatePLUS NOTIFICATION</div>' +
                '<div class"uk-text-capitalize">something is wrong Please check the username and password again or contact the administrator.</div>',
        status: 'warning',
        pos: 'bottom-right',
        timeout: 1000
    });
   
  }