UIkit.util.ready(function () {

    var bar = document.getElementById('js-progressbar-1000');

    var animate = setInterval(function () {

        bar.value += 1;

        if (bar.value >= bar.max) {
            clearInterval(animate);
        }

    }, 10);

});