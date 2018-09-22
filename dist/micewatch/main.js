(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1> {{ title }}! </h1>\n</div>\n\n<div class=\"tile is-ancestor\">\n  <div class=\"tile is-parent is-6\">\n    <article class=\"tile is-child box\">\n      <div class=\"content\">\n          <app-stopwatch> Cronometro #1 </app-stopwatch>\n      </div>\n    </article>\n  </div>\n  <div class=\"tile is-parent is-6\">\n    <article class=\"tile is-child box\">\n      <div class=\"content\">\n          <app-stopwatch> Cronometro #2 </app-stopwatch>\n      </div>\n    </article>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'micewatch - Cronometro para teste de resistência';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stopwatch/stopwatch.component */ "./src/app/stopwatch/stopwatch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_3__["StopwatchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/stopwatch/stopwatch.component.css":
/*!***************************************************!*\
  !*** ./src/app/stopwatch/stopwatch.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stopwatch/stopwatch.component.html":
/*!****************************************************!*\
  !*** ./src/app/stopwatch/stopwatch.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n    <ng-content></ng-content>\n</h2>\n\n<div class=\"content\">\n<div><strong>Tempo: </strong>{{getElapsedMsFormated() }}</div>\n</div>\n<div class=\"content\">\n  <div class=\"card\">\n    <div *ngFor=\"let opt of getTurns()\" class=\"card-content\">\n      <p class=\"title\">\n          {{opt}}\n      </p>\n    </div>\n  </div>\n</div>\n<div class=\"content\">\n  <div class=\"buttons\">\n    <a class=\"button is-large is-link is-rounded \" (click)=\"start()\">Iniciar</a>\n    <a class=\"button is-large is-warning is-rounded\" (click)=\"turn()\">Volta</a>\n    <a class=\"button is-large is-danger is-rounded\" (click)=\"stop()\">Parar</a>\n    <a class=\"button is-large is-danger is-rounded\" (click)=\"reset()\">Zerar</a>\n    <a class=\"button is-large is-danger is-rounded\" (click)=\"clearAll()\">Limpar Resultados</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/stopwatch/stopwatch.component.ts":
/*!**************************************************!*\
  !*** ./src/app/stopwatch/stopwatch.component.ts ***!
  \**************************************************/
/*! exports provided: StopwatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopwatchComponent", function() { return StopwatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StopwatchComponent = /** @class */ (function () {
    function StopwatchComponent() {
        this.totalElapsedMs = 0;
        this.elapsedMs = 0;
        this.timesTurn = [];
        this.getTurns = function () {
            return this.timesTurn;
        };
        this.start = function () {
            var _this = this;
            if (!this.timerPromise) {
                this.startTime = new Date();
                this.timerPromise = setInterval(function () {
                    var now = new Date();
                    _this.elapsedMs = now.getTime() - _this.startTime.getTime();
                }, 31);
            }
        };
        this.clearAll = function () {
            this.stop();
            this.reset();
            this.timesTurn = [];
        };
        this.stop = function () {
            if (this.timerPromise) {
                clearInterval(this.timerPromise);
                this.timerPromise = undefined;
                this.totalElapsedMs += this.elapsedMs;
                this.elapsedMs = 0;
            }
        };
        this.reset = function () {
            this.startTime = new Date();
            this.totalElapsedMs = this.elapsedMs = 0;
        };
        this.turn = function () {
            this.timesTurn.push(this.getElapsedMsFormated());
            this.reset();
        };
        this.getTime = function () {
            return this.time;
        };
        this.getElapsedMs = function () {
            return this.totalElapsedMs + this.elapsedMs;
        };
        this.getElapsedMsFormated = function () {
            var milliseconds = this.totalElapsedMs + this.elapsedMs;
            var hours = Math.floor(milliseconds / 3600000);
            var minutes = Math.floor((milliseconds - (hours * 3600000)) / 60000);
            var seconds = Math.floor((milliseconds - (hours * 3600000) - (minutes * 60000)) / 1000);
            var milisec = Math.floor((milliseconds - (hours * 3600000) - (minutes * 60000) - seconds * 1000));
            milisec = this.completeWithZeros(milisec + "", 3);
            seconds = this.completeWithZeros(seconds + "", 2);
            minutes = this.completeWithZeros(minutes + "", 2);
            hours = this.completeWithZeros(hours + "", 2);
            return hours + ":" + minutes + ":" + seconds + " '" + milisec;
        };
        this.completeWithZeros = function (numberToZero, size) {
            var timeWithZero = numberToZero;
            while (timeWithZero.length < size)
                timeWithZero = "0" + timeWithZero;
            return timeWithZero;
        };
    }
    StopwatchComponent.prototype.ngOnInit = function () {
    };
    StopwatchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stopwatch',
            template: __webpack_require__(/*! ./stopwatch.component.html */ "./src/app/stopwatch/stopwatch.component.html"),
            styles: [__webpack_require__(/*! ./stopwatch.component.css */ "./src/app/stopwatch/stopwatch.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StopwatchComponent);
    return StopwatchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/celsoagra/ws-luana/micewatch/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map