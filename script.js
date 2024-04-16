// LOGO STUFF

const logo = document.querySelector(".logo");

logo.addEventListener("click", function () {

    window.location.href = "index.html"
});

$(document).ready(function () {
    // when icon is clicked. either turn open on or off
    $(".drop-icon").on("click", function () {
        $("header nav ul").toggleClass("open");
    });
});

//
// ARCHIVE YEARS
//

$(document).ready(function () {

    $("#archive2024").on("click", function () {
        $(".archive-covers2024").toggleClass("open");
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

// 
// SPOILER EXPAND STUFF
// 

$(document).ready(function () {

    $(".spoilerMsg:eq(0)").on("click", function () {
        $(".gameThoughts:eq(0)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerMsg:eq(1)").on("click", function () {
        $(".gameThoughts:eq(1)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerMsg:eq(2)").on("click", function () {
        $(".gameThoughts:eq(2)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerMsg:eq(3)").on("click", function () {
        $(".gameThoughts:eq(3)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerMsg:eq(4)").on("click", function () {
        $(".gameThoughts:eq(4)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerMsg:eq(5)").on("click", function () {
        $(".gameThoughts:eq(5)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerMsg:eq(6)").on("click", function () {
        $(".gameThoughts:eq(6)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerMsg:eq(7)").on("click", function () {
        $(".gameThoughts:eq(7)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerMsg:eq(8)").on("click", function () {
        $(".gameThoughts:eq(8)").toggleClass("open");
    });
});

$(document).ready(function () {

    $(".spoilerMsg:eq(9)").on("click", function () {
        $(".gameThoughts:eq(9)").toggleClass("open");
    });
});


var a = document.getElementsByClassName("order");
for (let i = 0; i < a.length; i++) {
    a[i].innerHTML = (i + 1) + ".";
}