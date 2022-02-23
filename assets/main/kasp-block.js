window.addEventListener('contextmenu', function (e) {
    document.getElementById("rc-noti").innerHTML = UIkit.notification({
        message:'<div class="uk-text-bold uk-text-small"><span uk-icon="warning"></span> KasidatePLUS NOTIFICATION</div>' +
                '<div class"uk-text-capitalize">Disable Right-Click</div>',
        status: 'warning',
        pos: 'bottom-right',
        timeout: 1000
    });
    e.preventDefault();
}, false);

function killcopy(e) {
    return false
}
function reEnable() {
    return true
}
document.onselectstart = new function () {
    if (window.sldebar) {
        document.onmousedown = killcopy
        document.onclick = reEnable
    }
}