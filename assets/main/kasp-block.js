
window.addEventListener('contextmenu', function (e) {
    document.getElementById("kasp-noti").innerHTML = UIkit.notification({
        message:'<div class="uk-text-bold uk-text-small"><span uk-icon="warning"></span> KasidatePLUS NOTIFICATION</div>' +
                '<div class"uk-text-capitalize">Disable Right-Click</div>',
        status: 'warning',
        pos: 'bottom-right',
        timeout: 1000
    });
    e.preventDefault();
}, false);

window.addEventListener('copy', function (e) {
    document.getElementById("kasp-noti").innerHTML = UIkit.notification({
        message:'<div class="uk-text-bold uk-text-small"><span uk-icon="warning"></span> KasidatePLUS NOTIFICATION</div>' +
                '<div class"uk-text-capitalize">Copying of text is not allowed. <code class="uk-label uk-label-warning">Ctrl</code> + <code class="uk-label uk-label-warning">C</code></div>',
        status: 'warning',
        pos: 'bottom-right',
        timeout: 1000
    });
    e.preventDefault();
}, false);

window.addEventListener('keydown', function (e) {
    if(Event.keycode == 123){
        document.getElementById("kasp-noti").innerHTML = UIkit.notification({
            message:'<div class="uk-text-bold uk-text-small"><span uk-icon="warning"></span> KasidatePLUS NOTIFICATION</div>' +
                    '<div class"uk-text-capitalize">Copying of text is not allowed. <code class="uk-label uk-label-warning">Ctrl</code> + <code class="uk-label uk-label-warning">C</code></div>',
            status: 'warning',
            pos: 'bottom-right',
            timeout: 1000
        });
            return false
    }
  
}, false);