let ui = {
    title: $("#movietitle"),
    picture: $("#divImg"),
    description: $("#movieDes"),    
    actor: $("#actor")    
}

function renderMovie(movie) {
    ui.title.text(movie.title);
    ui.picture.attr("src", movie.picture);
    ui.description.text(movie.description);


    for (let index = 0; index < movie.actorsList.length; index++) {
        ui.actor.append("<li>" + movie.actorsList[index] + "</li>");
    }

}   
let movieData = require("./data");

renderMovie(movieData);
    
function changeStarRating(rating) {
    for (let i = 1; i <= 5; i++) {
        let star = $("#star" + i);
        if (i <= rating) {
            star.addClass("filled");
        } else {
            star.removeClass("filled");
        }
    }
}

$(".stars").on("click", "span", function (e) {
    let star = $(e.target);
    let opt = star.attr("id");
    if (star.hasClass("filled")) {
        changeStarRating(0);
    }
    else {
        changeStarRating(+opt[4]);
    }
});