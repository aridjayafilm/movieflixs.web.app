(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,function(n,e,r){"use strict";r.d(e,"f",(function(){return c})),r.d(e,"d",(function(){return i})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return p})),r.d(e,"h",(function(){return a})),r.d(e,"a",(function(){return o})),r.d(e,"j",(function(){return l})),r.d(e,"e",(function(){return s}));var t=r(0),i=function(n,e){var r=new Date(n.release_date);return'\n  <div class="banner-movie" style="background-image: linear-gradient(to right, hsla(222, 25%, 10%, 0.6), hsla(219, 32%, 10%, 0.6)), url('.concat(t.a.ORIGINAL_IMAGE_URL+n.backdrop_path,'">\n    \n  </div>\n  <div class="movie-content">\n    <div class="movie-content-poster">\n      <img class="movie-poster" src="').concat(t.a.BASE_IMAGE_URL+n.poster_path,'" alt="').concat(n.title,'" />\n    </div>\n    <div class="movie-content-info">\n      <h2 class="movie-title">').concat(n.title,'</h2>\n      <div class="movie-genres">\n        ').concat(function(n){var r=[];e.forEach((function(e){n.forEach((function(n){n.id==e.id&&r.push(n.name)}))}));var t="";return r.forEach((function(n){t+='\n        <div class="movie-genre-item">'.concat(n,"</div>\n      ")})),t}(n.genres),'\n      </div>\n      <div class="movie-overview">\n        <h3>Overview</h3>\n        <p>').concat(n.overview,'</p>\n      </div>\n      <div class="movie-info">\n        <div class="movie-info-item">\n          <span class="material-icons-sharp">event</span>\n          <p>').concat(r.getFullYear(),'</p>\n        </div>\n        <div class="movie-info-item">\n          <span class="material-icons-sharp">timer</span>\n          <p>').concat(n.runtime,'m</p>\n        </div>\n        <div class="movie-info-item">\n          <span class="material-icons-sharp">star</span>\n          <p>').concat(n.vote_average,"</p>\n        </div>\n      </div>\n    </div>\n  </div>\n")},a=function(){return'\n    <div class="banner-img skeleton"></div>\n    <div class="card-content">\n        <div class="card-info">\n            <div class="skeleton skeleton-text"></div>\n            <div class="skeleton skeleton-text"></div>\n        </div>\n        <h2 class="skeleton skeleton-text-heading"></h2>\n    </div>\n  '},o=function(){return'<div class="skeleton skeleton-filter"></div>'},s=function(n){for(var e="",r=0;r<n;r+=1)e+='\n    <div class="movie-item-card">\n      <div class="card-header">\n          <div class="card-img skeleton"></div>\n      </div>\n      <div class="card-body">\n          <div class="skeleton skeleton-card-text"></div>\n          <div class="skeleton skeleton-card-text"></div>\n      </div>\n    </div>\n    ';return e},c=function(n){return'\n    <div class="movie-item-card">\n      <div class="card-header">\n          <img class="card-img" src="'.concat(t.a.BASE_IMAGE_URL+n.poster_path,'" alt="movie">\n          <div class="card-overlay">\n              <div class="bookmark">\n                  <span class="material-icons-round">bookmark_border</span>\n              </div>\n              <div class="rating">\n                  <span class="material-icons-sharp">star</span>\n                  <span>').concat(n.vote_average,'</span>\n              </div>\n              <div class="play">\n                  <span class="material-icons-sharp">play_circle</span>\n              </div>\n          </div>\n      </div>\n      <div class="card-body">\n          <h3 class="card-title"><a href="/#/detail/').concat(n.id,'">').concat(n.title,"</a></h3>\n      </div>\n    </div>\n  ")},l=function(n){var e="";return n.forEach((function(n){e+='\n      <div class="genre" id="'.concat(n.id,'">').concat(n.name,"</div>\n    ")})),e},d=function(){return'\n  <button aria-label="like this movie" id="likeButton" class="like">\n     <i class="fa fa-heart-o" aria-hidden="true"></i>\n  </button>\n'},p=function(){return'\n  <button aria-label="unlike this movie" id="likeButton" class="like">\n    <i class="fa fa-heart" aria-hidden="true"></i>\n  </button>\n'}},,,,,,,,,,function(n,e,r){"use strict";var t=r(12),i=r(13),a=r(4),o=r(14);function s(n,e,r,t,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void r(n)}s.done?e(c):Promise.resolve(c).then(t,i)}function c(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var l=function(){function n(e){var r=e.DrawerComponent,t=e.FormSearchComponent;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._button=r.button,this._drawer=r.drawer,this._navbarContainer=r.navbarContainer,this._content=r.content,this._openFormBtn=t.openFormBtn,this._form=t.form,this._closeFormBtn=t.closeFormBtn,this._initialAppShell()}var e,r,l,d,p;return e=n,(r=[{key:"_initialAppShell",value:function(){t.a.init({button:this._button,drawer:this._drawer,navbarContainer:this._navbarContainer,content:this._content}),i.a.init({openFormBtn:this._openFormBtn,form:this._form,closeFormBtn:this._closeFormBtn,mainContent:this._content})}},{key:"renderPage",value:(d=regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.a.parseActiveUrlWithCombiner(),r=o.a[e],n.next=4,r.render();case 4:return this._content.innerHTML=n.sent,n.next=7,r.afterRender();case 7:case"end":return n.stop()}}),n,this)})),p=function(){var n=this,e=arguments;return new Promise((function(r,t){var i=d.apply(n,e);function a(n){s(i,r,t,a,o,"next",n)}function o(n){s(i,r,t,a,o,"throw",n)}a(void 0)}))},function(){return p.apply(this,arguments)})}])&&c(e.prototype,r),l&&c(e,l),n}();e.a=l},,,,function(n,e,r){"use strict";r(8);var t=r(2),i=r(1),a=r(5);function o(n,e,r,t,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void r(n)}s.done?e(c):Promise.resolve(c).then(t,i)}function s(n){return function(){var e=this,r=arguments;return new Promise((function(t,i){var a=n.apply(e,r);function s(n){o(a,t,i,s,c,"next",n)}function c(n){o(a,t,i,s,c,"throw",n)}s(void 0)}))}}var c={render:function(){return s(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n        <section class="banner">\n            <div class="banner-card">\n                '.concat(Object(i.h)(),'\n            </div>\n        </section>\n        <section class="movies">\n            <div class="filter">\n                ').concat(Object(i.a)(),'\n            </div>\n            <div class="movies-list">\n                ').concat(Object(i.e)(20),"\n            </div>\n        </section>\n        "));case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return s(regeneratorRuntime.mark((function n(){var e,r,o,c,l,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=document.querySelector(".banner-card"),r=document.querySelector(".movies-list"),n.next=4,t.a.discoverMovies();case 4:o=n.sent,c=document.querySelector(".filter"),e.innerHTML="",c.innerHTML="",e.innerHTML+='\n            <img src="./images/John-Wick-3.jpg" alt="banner" class="banner-img">\n            <div class="card-content">\n                <div class="card-info">\n                    <div class="genre">\n                        <span class="material-icons-sharp">movie</span>\n                        <span>Action/Thriller</span>\n                    </div>\n                    <div class="year">\n                        <span class="material-icons-sharp">calendar_month</span>\n                        <span>2019</span>\n                    </div>\n                    <div class="duration">\n                        <span class="material-icons-sharp">timer</span>\n                        <span>2h 11m</span>\n                    </div>\n                    <div class="quality">4K</div>\n                </div>\n                <h2 class="card-title">John Wick: Chapter 3 - Parabellum</h2>\n            </div>\n        ',c.innerHTML+='\n            <div class="filter-bar">\n                <div class="filter-year">\n                    <select name="year" id="year">\n                        <option value="year">All year</option>\n                        <option value="year">2022 - 2019</option>\n                        <option value="year">2018 - 2015</option>\n                        <option value="year">2014 - 2011</option>\n                        <option value="year">2010 - 2007</option>\n                        <option value="year">2006 - 2003</option>\n                        <option value="year">2002 - 2001</option>\n                    </select>\n                </div>\n                <div class="filter-genres">\n                    <div class="genres">\n                        '.concat(Object(i.j)(a.a),"\n                    </div>\n                </div>\n            </div>\n        "),r.innerHTML="",o.forEach((function(n){r.innerHTML+=Object(i.f)(n)})),l=document.querySelectorAll(".genre"),d=[],l.forEach((function(n){n.addEventListener("click",s(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 0==d.length?d.push(n.id):d.includes(n.id)?d.forEach((function(e,r){e==n.id&&d.splice(r,1)})):d.push(n.id),r.innerHTML="",n.classList.toggle("highlight"),e.next=5,t.a.filterWithGenres(d);case 5:e.sent.forEach((function(n){r.innerHTML+=Object(i.f)(n)})),console.log(d);case 8:case"end":return e.stop()}}),e)}))))})),o.forEach((function(n){r.innerHTML+=Object(i.f)(n)}));case 16:case"end":return n.stop()}}),n)})))()}};e.a=c},function(n,e,r){"use strict";var t=r(2),i=r(1);function a(n,e,r,t,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void r(n)}s.done?e(c):Promise.resolve(c).then(t,i)}function o(n){return function(){var e=this,r=arguments;return new Promise((function(t,i){var o=n.apply(e,r);function s(n){a(o,t,i,s,c,"next",n)}function c(n){a(o,t,i,s,c,"throw",n)}s(void 0)}))}}var s={render:function(){return o(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div class="content">\n        <h2 class="content__heading">Now Playing in Cinema</h2>\n        <div id="movies" class="movies">\n            '.concat(Object(i.createSkeletonMovieTemplate)(20),"\n        </div>\n      </div>\n    "));case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return o(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.a.nowPlayingMovies();case 2:e=n.sent,(r=document.querySelector("#movies")).innerHTML="",e.forEach((function(n){r.innerHTML+=Object(i.createMovieItemTemplate)(n)}));case 6:case"end":return n.stop()}}),n)})))()}};e.a=s},function(n,e,r){"use strict";var t=r(2),i=r(1);function a(n,e,r,t,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void r(n)}s.done?e(c):Promise.resolve(c).then(t,i)}function o(n){return function(){var e=this,r=arguments;return new Promise((function(t,i){var o=n.apply(e,r);function s(n){a(o,t,i,s,c,"next",n)}function c(n){a(o,t,i,s,c,"throw",n)}s(void 0)}))}}var s={render:function(){return o(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div class="content">\n        <h2 class="content__heading">Upcoming in Cinema</h2>\n        <div id="movies" class="movies">\n            '.concat(Object(i.createSkeletonMovieTemplate)(20),"\n        </div>\n      </div>\n    "));case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return o(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.a.upcomingMovies();case 2:e=n.sent,(r=document.querySelector("#movies")).innerHTML="",e.forEach((function(n){r.innerHTML+=Object(i.createMovieItemTemplate)(n)}));case 6:case"end":return n.stop()}}),n)})))()}};e.a=s},function(n,e,r){"use strict";var t=r(4),i=r(2),a=r(1),o=(r(27),r(5));function s(n,e,r,t,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void r(n)}s.done?e(c):Promise.resolve(c).then(t,i)}function c(n){return function(){var e=this,r=arguments;return new Promise((function(t,i){var a=n.apply(e,r);function o(n){s(a,t,i,o,c,"next",n)}function c(n){s(a,t,i,o,c,"throw",n)}o(void 0)}))}}var l={render:function(){return c(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div id="movie" class="movie"></div>\n      <div id="likeButtonContainer"></div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return c(regeneratorRuntime.mark((function n(){var e,r,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(e=document.querySelector('script[src="https://use.fontawesome.com/b070c8f1df.js"]'))||((e=document.createElement("script")).src="https://use.fontawesome.com/b070c8f1df.js",document.body.appendChild(e)),r=t.a.parseActiveUrlWithoutCombiner(),n.next=5,i.a.detailMovie(r.id);case 5:s=n.sent,document.querySelector("#movie").innerHTML=Object(a.d)(s,o.a);case 8:case"end":return n.stop()}}),n)})))()}};e.a=l},function(n,e,r){"use strict";var t=r(3),i=r(1);function a(n,e,r,t,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void r(n)}s.done?e(c):Promise.resolve(c).then(t,i)}function o(n){return function(){var e=this,r=arguments;return new Promise((function(t,i){var o=n.apply(e,r);function s(n){a(o,t,i,s,c,"next",n)}function c(n){a(o,t,i,s,c,"throw",n)}s(void 0)}))}}var s={render:function(){return o(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div class="content">\n        <h2 class="content__heading">Your Liked Movie</h2>\n        <div id="movies" class="movies">\n\n        </div>\n      </div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return o(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.a.getAllMovies();case 2:e=n.sent,r=document.querySelector("#movies"),e.forEach((function(n){r.innerHTML+=Object(i.createMovieItemTemplate)(n)}));case 5:case"end":return n.stop()}}),n)})))()}};e.a=s},,,,function(n,e,r){var t=r(9),i=r(24);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1};t(i,a);n.exports=i.locals||{}},function(n,e,r){(e=r(10)(!1)).push([n.i,':root {\n    --live-indicator-shadow: hsla(0, 79%, 63%, 0.5);\n    --rich-black-fogra-30:   hsl(219, 32%, 10%);\n    --rich-black-fogra-29:   hsl(222, 25%, 10%);\n    --live-indicator:        hsl(0, 79%, 63%);\n    --oxford-blue-50:        hsla(218, 39%, 14%, 0.8);\n    --oxford-blue:           hsl(218, 39%, 14%);\n    --light-azure:           hsl(214, 84%, 56%);\n    --off-white:             hsl(0, 0%, 88%);\n    --yellow:                hsl(45, 100%, 54%);\n    --white:                 hsl(0, 0%, 100%);\n    --azure:                 hsl(211, 100%, 50%);\n  \n    --ff-font : \'Montserrat\', sans-serif;\n  \n    --section-heading: 40px;\n    --fs-lg:           22px;\n    --fs-md:           17px;\n    --fs-sm:           14px;\n    --fs-x-sm:         12px;\n    \n    --fw-7: 700;\n    --fw-6: 600;\n    --fw-5: 500;\n  \n    --px: 20px;\n  \n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nhtml, body {\n    font-family: var(--ff-font);\n}\n\nbody {\n    background-color: var(--rich-black-fogra-29);\n    color: var(--off-white);\n    max-width: 1366px;\n    margin: auto;\n    overflow-x: hidden;\n}\n\nmain {\n    min-height: 100vh;\n}\n\ninput, button, select{\n    color: inherit;\n    background: none;\n    border: none;\n    outline: none;\n}\n\nli {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\n.navbar,\n.banner,\n.movies {\n  padding: 0 var(--px);\n}\n\n.navbar-container, nav, header {\n    background-color: var(--rich-black-fogra-29);\n}\n\nbutton {\n    cursor: pointer;\n}\n\n/* Navbar */\n.navbar-container {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    overflow: hidden;\n    z-index: 50;\n}\n\n.navbar-container.navOpen {\n    top: 250px;\n}\n\n.navbar {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 100px;\n    padding: 0 var(--px);\n    position: relative;\n}\n\n.navbar-hamburger-btn {\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: var(--px);\n    transform: translateY(-50%);\n}\n\n.navbar-hamburger-btn span {\n    display: block;\n    width: 25px;\n    height: 2px;\n    margin: 8px;\n    background-color: var(--off-white);\n    transition: all ease;\n}\n\n.navbar-hamburger-btn .two {\n    width: 20px;\n}\n\n.navbar-hamburger-btn .three {\n    width: 15px;\n}\n\n.navbar-hamburger-btn.navOpen span {\n    background-color: var(--light-azure);\n}\n\n.navbar-hamburger-btn.navOpen .one {\n    transform: rotate(45deg) translateY(14px);\n}\n\n.navbar-hamburger-btn.navOpen .two {\n    width: 0;\n}\n\n.navbar-hamburger-btn.navOpen .three {\n    width: 25px;\n    transform: rotate(-45deg) translateY(-14px);\n}\n\n.navbar-brand {\n    margin-left: 50px;\n}\n\nh1.logo {\n    font-size: 1.45rem;\n    cursor: pointer;\n}\n\nh1.logo span {\n    color: var(--light-azure);\n}\n\nnav {\n    position: fixed;\n    top: -250px;\n    left: 0;\n    padding: 0 var(--px);\n    width: 100%;\n    z-index: 100;\n}\n\nnav.navOpen {\n    top: 0;\n}\n\nnav ul.navbar-nav {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    height: 250px;\n    border-bottom: 1px solid var(--oxford-blue);\n}\n\nnav ul.navbar-nav li {\n    width: 100%;\n}\n\na.navbar-nav-link {\n    text-decoration: none;\n    font-size: var(--fs-sm);\n    color: inherit;\n    display: block;\n    width: 100%;\n    padding: 15px 20px;\n    /* background-color: var(--off-white); */\n}\n\na.navbar-nav-link:hover, a.navbar-nav-link.active {\n    color: var(--light-azure);\n}\n\n.navbar-actions {\n    display: flex;\n    align-items: center;\n}\n\n.navbar-form {\n    position: absolute;\n    top: -400px;\n}\n\n.navbar-form.active {\n    display: flex;\n    gap: 20px;\n    position: absolute;\n    top: 0;\n    right: 20px;\n    left: 20px;\n    height: 100%;\n    background-color: var(--rich-black-fogra-29);\n    align-items: center;\n    justify-content: space-between;\n    z-index: 100;\n}\n\n.navbar-form-search {\n    width: 100%;\n    background-color: var(--oxford-blue);\n    padding: 12px 20px;\n    border-radius: 15px;\n}\n\n.navbar-form-close {\n    color: var(--light-azure);\n    padding-top: 4px;\n}\n\n.navbar-search-button {\n    display: block;\n    padding-top: 4px;\n    margin-right: 20px;\n}\n\n.navbar-search-button span {\n    font-size: 30px;\n    padding: 6px;\n    color: var(--light-azure);\n}\n\n.navbar-signin {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    font-size: var(--fs-sm);\n}\n\n.navbar-signin span:last-child {\n    font-size: 22px;\n    margin-left: 5px;\n    color: var(--light-azure)\n}\n\n.banner {\n    display: none;\n}\n\n/* Movies section */\n.movies {\n    padding : 0 var(--px);\n    margin-top: 120px;\n}\n\n.filter {\n    min-height: 45px;\n    width: 100%;\n    border-radius: 20px;\n    margin-bottom: 30px;\n    overflow: hidden;\n}\n\n.filter-bar {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    row-gap: 12px;\n    padding: 10px;\n    background-color: var(--oxford-blue);\n}\n\n.filter-year select {\n    color: var(--white);\n    font-size: var(--fs-sm);\n    cursor: pointer;\n    padding: 15px;\n}\n\n.filter-year select > option {\n    background: var(--oxford-blue);\n}\n\n.filter-genres {\n    width: 100%;\n}\n\n.filter-genres .genres{\n    width: 100%;\n    overflow-x: auto;\n    overflow-y: hidden;\n    white-space: nowrap;\n    font-size: var(--fs-sm);\n    border-radius: 15px;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none; \n}\n\n.filter-genres .genres::-webkit-scrollbar {\n    display: none;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n}\n\n.genres .genre {\n    display: inline-block;\n    background-color: var(--rich-black-fogra-29);\n    border-radius: 15px;\n    padding: 10px 25px;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none; \n}\n\n.genre.highlight {\n    background-color: var(--light-azure);\n}\n\n\n.movies-list {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n    column-gap: 20px;\n    row-gap: 20px;\n    margin-bottom: 60px;\n    align-items: center;\n    min-height: 100vh;\n}\n\n.movies-list .movie-item-card { \n    cursor: pointer;\n    height: 350px;\n}\n\n.movie-item-card .card-header {\n    position: relative;\n    width: 100%;\n    height: 250px;\n    margin-bottom: 15px;\n    border-radius: 15px;\n    overflow: hidden;\n}\n\n.card-header .card-img {\n    display: block;\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    object-position: top;\n}\n\n.card-header .card-overlay {\n    position: absolute;\n    inset: 0;\n    backdrop-filter: blur(5px);\n    opacity: 0;\n    transition: 0.5s all ease-in-out;\n}\n\n.movie-item-card:hover .card-overlay {\n    opacity: 1;\n}\n\n.card-overlay .bookmark, .card-overlay .rating {\n    position: absolute;\n    top: 15px;\n    border-radius: 5px;\n    color: var(--light-azure);\n    background-color: var(--oxford-blue);\n    transform: scale(.97);\n}\n\n.card-overlay .bookmark span,\n.card-overlay .rating span {\n    font-size: 16px;\n}\n\n.card-overlay .bookmark {\n    left: 15px;\n    padding: 2px 5px;\n}\n\n.card-overlay .rating {\n    padding: 5px;\n    display: flex;\n    right: 15px;\n    align-items: center;\n    justify-content: center;\n}\n\n.card-overlay .rating span:last-child {\n    font-size: 13px;\n    color: var(--white);\n    margin-left: 3px;\n}\n\n.card-overlay .play {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0.97);\n}\n\n.card-overlay .play span {\n    font-size: 50px;\n    color: hsl(0deg 0% 88% / 58%);\n}\n\n.card-body {\n    align-self: flex-start;\n}\n\n.card-body .card-title {\n    font-size: var(--fs-md);\n    font-weight: var(--fw-5);\n    transition: 0.5s ease;\n}\n\n.card-body .card-title a {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;  \n}\n.movie-item-card:hover .card-title {\n    color: var(--light-azure);\n}\n\nfooter {\n    margin-top: 60px;\n    padding: 80px var(--px) 40px;\n    background-color: var(--rich-black-fogra-30);\n}\n\n.footer-content {\n    display: flex;\n    flex-direction: column;\n    padding-bottom : 60px;\n    row-gap: 60px;\n    border-bottom: 1px solid var(--oxford-blue-50);\n}\n\n.footer-brand {\n    max-width: 250px;\n}\n\n.footer-brand .logo {\n    margin-bottom: 30px;\n}\n\n.slogan {\n    font-size: var(--fs-sm);\n    line-height: 20px;\n    margin-bottom: 20px;\n}\n\n.social-links a {\n    display: inline-block;\n    color: var(--white);\n}\n\n.social-links a i {\n    font-size: 25px;\n    margin-right: 20px;\n}\n\n.footer-links {\n    display: grid;\n    align-items: flex-end;\n    grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));\n    gap: 50px;\n    width: 100%;\n    font-size: var(--fs-sm);\n}\n\n.link-heading {\n    margin-bottom: 20px;\n}\n\nul .link-item:not(:last-child) {\n    margin-bottom: 10px;\n}\n\n.footer-copyright {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 40px;\n}\n\n.terms-privacy {\n    margin-bottom: 20px;\n    display: flex;\n    gap: 20px;\n}\n\n.terms-privacy a, .copyright p {\n    font-size: var(--fs-sm);\n}\n\n.skeleton {\n    animation: skeleton-loading .75s linear infinite alternate;\n}\n\n.skeleton-text-heading {\n    background-color: var(--rich-black-fogra-30) !important;\n    width: 100%;\n    height: 2rem;\n    border-radius: .25rem;\n}\n\n.skeleton-text {\n    background-color: var(--rich-black-fogra-30) !important;\n    width: 100%;\n    height: 1rem;\n    margin-bottom: .5rem;\n    border-radius: .25rem;\n}\n\n.skeleton-text:last-child, \n.skeleton-card-text:last-child {\n    margin-bottom: 0;\n    width: 80%;\n}\n\n.skeleton-filter {\n    width: 100%;\n    height: 120px;\n    border-radius: 1rem;\n}\n\n.skeleton-card-text {\n    width: 100%;\n    height: .8rem;\n    margin-bottom: .5rem;\n    border-radius: .25rem;\n}\n\n\n@keyframes skeleton-loading {\n    0% {\n        background-color: var(--oxford-blue);\n    }\n\n    100% {\n        background-color: var(--rich-black-fogra-30);\n    }\n}\n\n/* ===============\n    Detail\n==================*/\n\n#movie {\n    margin-top: 120px;\n}\n\n.banner-movie {\n    height: 50vh;\n    width: 100%;\n    position: relative;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    z-index: -1;\n}\n\n.banner-movie::before {\n    content: "";\n    position: absolute;\n    top: -2px;\n    left: 0;\n    width: 100%;\n    height: 200px;\n    background: linear-gradient(to bottom, hsl(222, 25%, 10%), transparent);\n}\n\n.banner-movie::after {\n    content: "";\n    position: absolute;\n    bottom: -5px;\n    left: 0;\n    width: 100%;\n    height: 200px;\n    background: linear-gradient(to top, hsl(222, 25%, 10%), transparent);\n}\n\n.movie-content {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    margin-top: -250px;\n    row-gap: 30px;\n    padding: 0 var(--px);\n}\n.movie-content-poster {\n   display: flex;\n   align-self: center;\n   align-items: flex-start;\n}\n\n.movie-content-poster .movie-poster {\n    height: 400px;\n    border-radius: 20px;\n}\n\n.movie-content-info .movie-title {\n    font-size: 2rem;\n    font-weight: 600;\n    margin-bottom: 20px;\n}\n\n.movie-content-info .movie-genres {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 15px 8px;\n    margin-bottom: 40px;\n}\n\n.movie-genre-item {\n    padding: 0.5rem 1.2rem;\n    border: 2px solid white;\n    border-radius: 15px;\n    font-weight: 600;\n    background: transparent;\n}\n\n.movie-overview {\n    text-align: justify;\n    margin-bottom: 45px;\n}\n\n.movie-info {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    max-width: 350px;\n}\n\n.movie-info .movie-info-item {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    row-gap: 15px;\n}\n\n.movie-info .movie-info-item span{\n    padding: 0.8rem;\n    border-radius: 50%;\n    font-size: 1.8rem;\n    background-color: var(--oxford-blue);\n}\n\n.movie-info .movie-info-item p{\n    font-weight: 600;\n    font-size: 1.2rem;\n}\n\n\n\n\n\n',""]),n.exports=e},function(n,e,r){var t=r(9),i=r(26);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1};t(i,a);n.exports=i.locals||{}},function(n,e,r){(e=r(10)(!1)).push([n.i,"@media screen and (min-width: 576px) {\n    :root {\n        --px: 40px;\n    }\n\n    .footer-copyright { \n        flex-direction: row-reverse; \n        justify-content: space-between;\n        align-items: center;\n    }\n\n    .terms-privacy {\n        margin-bottom: 0;\n    }\n    \n    /* == Detail == */\n    .movie-content-poster {\n        align-self: flex-start;\n    }\n    \n    /* .movie-content {\n        margin-top: -400px;\n    } */\n}\n\n@media screen and (min-width: 769px) {\n    :root {\n        --px: 60px;\n    }\n\n    .banner {\n        display: block;\n        margin-top: 120px;\n    }\n\n    .banner-card {\n        position: relative;\n        border-radius: 20px;\n        overflow: hidden;\n        cursor: pointer;\n    }\n    \n    .banner-card .banner-img {\n        min-height: 400px;\n        width: 100%;\n        border-radius: 20px;\n        object-fit: cover;\n        object-position: center;\n    }\n\n    .banner-card .card-content {\n        position: absolute;\n        bottom: 40px;\n        left: 60px;\n        right: 60px;\n    }\n\n    .banner-card .card-content .card-info {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        margin-bottom: 20px;\n    }\n\n    .banner-card .card-content .card-info > div {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: 20px;\n        column-gap: 5px;\n    }\n\n    .banner-card .card-content .card-info > div > span:first-child {\n        font-size: 20px;\n        color: var(--light-azure);\n        line-height: 20px;\n    }\n\n    .banner-card .card-content .card-info > div > span:last-child {\n        font-weight: var(--fw-5);\n    }\n\n    .banner-card .card-content .card-info .quality {\n        background-color: var(--light-azure);\n        padding: 2px 5px;\n        border-radius: 5px;\n        font-weight: var(--fw-7);\n    }\n\n    .banner-card .card-content .card-title {\n        font-size: 2.5em;\n        color: var(--white);\n        text-shadow: 2px 0 2px #0007;\n    }\n\n    .movies {\n        margin-top: 40px;\n    }\n\n    .movies-list {\n        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    }\n\n    .filter-bar {\n        overflow: hidden;\n        flex-direction: row;\n        align-items: center;\n        padding: 12px;\n        border-radius: 20px;\n    }\n\n    .filter-year {\n        flex-grow: 1;\n    }\n\n    .filter-genres {\n        flex-grow: 3;\n        width: 50%;\n    }\n\n    /* Skeleton loading */\n    .skeleton-filter {\n        height: 55px;\n    }\n}\n\n@media screen and (min-width: 1025px) {\n    :root {\n        --px: 80px;\n    }\n}\n\n@media screen and (min-width: 1201px) {\n    :root {\n        --px: 120px;\n    }\n\n    .navbar-container {\n        max-width: 1366px;\n        left: calc(0 + var(--px));\n    }\n\n    .navbar-hamburger-btn,\n    .navbar-search-button {\n        display: none;\n    }\n\n    .navbar-brand {\n        margin-left: 0;\n    }\n\n    nav {\n        position: static;\n        width: fit-content;\n        margin-right: 200px;\n        padding: 0;\n    }\n\n    nav ul.navbar-nav {\n        flex-direction: row;\n        height: fit-content;\n        border: none;\n    }\n    nav ul.navbar-nav li {\n        width: fit-content;\n    }\n\n    .navbar-form {\n        display: block;\n        position: relative;\n        display: flex;\n        top: 0;\n        margin-right: 50px;\n    }\n\n    .navbar-form-search-btn {\n        position: absolute;\n        top: calc(50% - 10px);\n        right: 10px;\n        color: var(--light-azure);\n    }\n\n    .navbar-form-close {\n        display: none;\n    }\n\n    .movie-content {\n        flex-direction: row;\n        column-gap: 30px;\n        margin-top: -150px;\n    }\n\n}\n\n",""]),n.exports=e}]]);