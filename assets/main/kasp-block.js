
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

window.addEventListener('online', function (e) {
    document.getElementById("kasp-noti").innerHTML = UIkit.notification({
        message:'<div class="uk-text-bold uk-text-small"><span uk-icon="warning"></span> KasidatePLUS NOTIFICATION</div>' +
                '<div class"uk-text-capitalize">Out of focus <code class="uk-label uk-label-warning">Ctrl</code> + <code class="uk-label uk-label-danger">C</code></div>',
        status: 'warning',
        pos: 'bottom-right',
        timeout: 100000
    });
    e.preventDefault();
}, false);
