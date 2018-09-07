$(function () {
    $('#abc').click(function () {
        console.log(document.querySelector('#menu-placeholder').childElementCount);
        // console.log($('menu-placeholder').target.childElementCount);
    });
});