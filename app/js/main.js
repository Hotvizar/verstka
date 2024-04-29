$(function () {

    $("#group-search").on("click", function () {
        $(this).addClass("active");
    });

    $(document).on("mouseup", function (e) { // событие клика по веб-документу
        var div = $("#group-search"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass("active");
        }
    });

});
