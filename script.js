$(document).ready(function () {
    // when icon is clicked. either turn open on or off
    $(".drop-icon").on("click", function () {
        $("header nav ul").toggleClass("open");
    });
});