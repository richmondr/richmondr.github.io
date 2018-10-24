$(".nav-link").click(function() {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");

    var navItems = ["home", "education", "skills", "experience", "projects"];

    for (i = 0; i < navItems.length; i++) {
        $("#" + navItems[i]).css("display", "none");
    }

    $("#" + $(this).text().toLowerCase()).css("display", "block");

});
