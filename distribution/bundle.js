/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

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
let movieData = __webpack_require__(1);

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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
    title: "Inception", 
    picture: "https://www.warnerbros.com/sites/default/files/styles/key_art_270x400/public/inception_keyart.jpg?itok=7jXiglyb",
    description: "Inception �r en amerikansk thriller/sci-fi/action-l�ngfilm fr�n 2010 i regi av Christopher Nolan som ocks� har skrivit manus. Medverkar g�r bland andra Leonardo DiCaprio, Joseph Gordon- Levitt, Ellen Page, Cillian Murphy och Ken Watanabe.",
    actorsList: ["Leonardo DiCaprio", "Ellen Page", "Tom Hardy"]
};  

/***/ })
/******/ ]);