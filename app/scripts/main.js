window.onload = function() {
    setTimeout(function () {
        document.getElementById('wrap').removeAttribute('class');
        setTimeout(function () {
            document.getElementById('links').removeAttribute('class');
        }, 800);
    }, 100);
    new Parallax(document.getElementById('parallax'));
    document.getElementById('plus').addEventListener('click', function (e) {
        this.className = this.className ? '' : 'open-about';
    });
};