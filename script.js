// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("headhead").style.top = "0";
//     } else {
//         document.getElementById("headhead").style.top = "-80px";
//     }
//     prevScrollpos = currentScrollPos;
// }

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

$(document).ready(function () {

    $("main .game #spoiler1").on("click", function () {
        $("main .game .thoughts1").toggleClass("open");
    });
});

$(document).ready(function () {

    $("main .game #spoiler2").on("click", function () {
        $("main .game .thoughts2").toggleClass("open");
    });
});

$(document).ready(function () {

    $("main .game #spoiler3").on("click", function () {
        $("main .game .thoughts3").toggleClass("open");
    });
});

$(document).ready(function () {

    $("main .game #spoiler4").on("click", function () {
        $("main .game .thoughts4").toggleClass("open");
    });
});

$(document).ready(function () {

    $("main .game #spoiler5").on("click", function () {
        $("main .game .thoughts5").toggleClass("open");
    });
});

$(document).ready(function () {

    $("main .game #spoiler6").on("click", function () {
        $("main .game .thoughts6").toggleClass("open");
    });
});

$(document).ready(function () {

    $("main .game #spoiler7").on("click", function () {
        $("main .game .thoughts7").toggleClass("open");
    });
});