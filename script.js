$(document).ready(function () {
    // when icon is clicked. either turn open on or off
    $(".drop-icon").on("click", function () {
        $("header nav ul").toggleClass("open");
    });
});

$(document).ready(function () {

    $("#archive2023").on("click", function () {
        $(".archive-covers2023").toggleClass("open");
    });
});

$(document).ready(function () {

    $("#archive2022").on("click", function () {
        $(".archive-covers2022").toggleClass("open");
    });
});

$(document).ready(function () {

    $("#archive2021").on("click", function () {
        $(".archive-covers2021").toggleClass("open");
    });
});