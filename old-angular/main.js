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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <!-- About -->\r\n    <section id=\"about\" class=\"about\">\r\n        <div class=\"container\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 text-center\">\r\n                    <h2>O Amor</h2>\r\n                    <p class=\"lead\">O amor é o valor mais forte que nos une aos nossos semelhantes.<br>\r\n                    O amor é capaz de nos elevar e dar sentido à nossa vida.<br>\r\n                    Só por amor somos capazes de grandes gestos.<br>\r\n                    Só por amor somos capazes de perdoar o que for preciso.<br>\r\n                    <em>Anderson Cavalcante</em></p>\r\n                    <br/>\r\n                    <h2>Nossos Rituais</h2>\r\n                    <p class=\"lead\">Desenvolvemos os rituais com o auxílio da ferramenta espiritual ayahuasca.<br/>\r\n                    Nosso compromisso é com a seriedade e a evolução.<br/>\r\n                        Praticamos a meditação e nossos rituais tem duração 4 horas.<br/>\r\n                        A ayahuasca que utilizamos é pura e sem qualquer tipo de mistura, aditivos ou drogas.</p>\r\n                    <p>&nbsp;</p>\r\n                </div>\r\n            </div>\r\n            <!-- /.row -->\r\n        </div>\r\n        <!-- /.container -->\r\n    </section>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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

module.exports = "<app-navbar></app-navbar>\r\n<app-header></app-header>\r\n<app-about></app-about>\r\n<app-inscrever></app-inscrever>\r\n<app-proximos-rituais></app-proximos-rituais>\r\n<app-normas></app-normas>\r\n<app-fotos></app-fotos>\r\n<app-contato></app-contato>"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        window.addEventListener('scroll', function () {
            var sobre = document.getElementById("about");
            var nabvar = document.getElementById("navbar-div");
            var headerpos = sobre.offsetTop;
            ; // - 65;
            // console.log(headerpos);
            // console.log(window.pageYOffset);
            if (window.pageYOffset > headerpos) {
                nabvar.classList.remove('position-absolute');
                nabvar.classList.add('position-fixed');
                nabvar.classList.remove('navbar-dark');
                nabvar.classList.add('navbar-light');
                nabvar.classList.add('bg-light');
            }
            else {
                nabvar.classList.add('position-absolute');
                nabvar.classList.remove('position-fixed');
                nabvar.classList.add('navbar-dark');
                nabvar.classList.remove('navbar-light');
                nabvar.classList.remove('bg-light');
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _inscrever_inscrever_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inscrever/inscrever.component */ "./src/app/inscrever/inscrever.component.ts");
/* harmony import */ var _proximos_rituais_proximos_rituais_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./proximos-rituais/proximos-rituais.component */ "./src/app/proximos-rituais/proximos-rituais.component.ts");
/* harmony import */ var _normas_normas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./normas/normas.component */ "./src/app/normas/normas.component.ts");
/* harmony import */ var _fotos_fotos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fotos/fotos.component */ "./src/app/fotos/fotos.component.ts");
/* harmony import */ var _contato_contato_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contato/contato.component */ "./src/app/contato/contato.component.ts");
/* harmony import */ var _service_contentful_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/contentful.service */ "./src/app/service/contentful.service.ts");
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
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _inscrever_inscrever_component__WEBPACK_IMPORTED_MODULE_6__["InscreverComponent"],
                _proximos_rituais_proximos_rituais_component__WEBPACK_IMPORTED_MODULE_7__["ProximosRituaisComponent"],
                _normas_normas_component__WEBPACK_IMPORTED_MODULE_8__["NormasComponent"],
                _fotos_fotos_component__WEBPACK_IMPORTED_MODULE_9__["FotosComponent"],
                _contato_contato_component__WEBPACK_IMPORTED_MODULE_10__["ContatoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [_service_contentful_service__WEBPACK_IMPORTED_MODULE_11__["ContentfulService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contato/contato.component.css":
/*!***********************************************!*\
  !*** ./src/app/contato/contato.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contato/contato.component.html":
/*!************************************************!*\
  !*** ./src/app/contato/contato.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <!-- Map -->\r\n    <section id=\"contact\" class=\"map\">\r\n        <div class=\"row\">\r\n            <iframe class=\"w-100\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.844580864672!2d-46.512607390310116!3d-23.581500031519766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce677f5527434f%3A0x35bfeed6b8ec4c2e!2sRua+Senador+Henrique+Novaes%2C+163+-+Jardim+Caguassu%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1474144714509\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>\r\n                <br />\r\n                <small>\r\n                    <a title=\"Mapa do Local\" href=\"https://www.google.com.br/maps/place/Rua+Senador+Henrique+Novaes,+163+-+Jardim+Caguassu,+S%C3%A3o+Paulo+-+SP/@-23.5815,-46.5126074,17.64z/data=!4m5!3m4!1s0x94ce677f5527434f:0x35bfeed6b8ec4c2e!8m2!3d-23.5815865!4d-46.5115014\"></a>\r\n                </small>\r\n            </iframe>\r\n        </div>\r\n    </section>\r\n\r\n    <!-- Footer -->\r\n    <footer>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 text-center\">\r\n                    <h3><strong>Instituto Servidores da Luz</strong>\r\n                    </h3>\r\n                    <p class=\"text-medium\">Rua Senador Henrique Novaes, 163\r\n                        <br>Jd. Caguassu - São Paulo - SP</p>\r\n                    <ul class=\"list-unstyled text-medium\">\r\n                        <li><a target=\"_blank\" href=\"https://api.whatsapp.com/send?phone=5511994778572&text=Ola,%20encontrei%20seu%20site%20e%20gostaria%20de%20mais%20informações\"><i class=\"fa fa-whatsapp fa-fw\"></i>Claudião: 11 99477-8572</a></li>\r\n                        <li><a target=\"_blank\" href=\"https://api.whatsapp.com/send?phone=5511958617962&text=Ola,%20encontrei%20seu%20site%20e%20gostaria%20de%20mais%20informações\"><i class=\"fa fa-whatsapp fa-fw\"></i>Nete: 11 95861-7962</a></li>\r\n                        <li><a target=\"_blank\" href=\"https://api.whatsapp.com/send?phone=5511940243676&text=Ola,%20encontrei%20seu%20site%20e%20gostaria%20de%20mais%20informações\"><i class=\"fa fa-whatsapp fa-fw\"></i>Alex: 11 94024-3676</a></li>\r\n                        <li><i class=\"fa fa-envelope-o fa-fw\"></i> <a href=\"mailto:servidoresdaluz@outlook.com\" title=\"Contato via e-mail\">servidoresdaluz@outlook.com</a>\r\n                        </li>\r\n                    </ul>\r\n                    <br>\r\n                    <ul class=\"list-inline\">\r\n                        <li>\r\n                            <a href=\"https://www.facebook.com/institutoservidoresdaluz/\" title=\"Link para o Facebook\"><i class=\"fa fa-facebook fa-fw fa-3x\"></i></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <a id=\"to-top\" href=\"#top\" class=\"btn btn-dark btn-lg\"><i class=\"fa fa-chevron-up fa-fw fa-1x\"></i></a>\r\n    </footer>"

/***/ }),

/***/ "./src/app/contato/contato.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contato/contato.component.ts ***!
  \**********************************************/
/*! exports provided: ContatoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoComponent", function() { return ContatoComponent; });
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

var ContatoComponent = /** @class */ (function () {
    function ContatoComponent() {
    }
    ContatoComponent.prototype.ngOnInit = function () {
    };
    ContatoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contato',
            template: __webpack_require__(/*! ./contato.component.html */ "./src/app/contato/contato.component.html"),
            styles: [__webpack_require__(/*! ./contato.component.css */ "./src/app/contato/contato.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContatoComponent);
    return ContatoComponent;
}());



/***/ }),

/***/ "./src/app/fotos/fotos.component.css":
/*!*******************************************!*\
  !*** ./src/app/fotos/fotos.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fotos/fotos.component.html":
/*!********************************************!*\
  !*** ./src/app/fotos/fotos.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <!-- Portfolio -->\r\n    <section id=\"fotos\" class=\"portfolio\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 text-center\">\r\n                    <h2>Nossas Fotos</h2>\r\n                    <hr class=\"small\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"portfolio-item\">\r\n                                    <img class=\"img-portfolio img-responsive\" src=\"assets/img/ritual-1.jpeg\" alt=\"O querido Alex conduzindo a palestra\" title=\"O querido Alex conduzindo a palestra\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"portfolio-item\">\r\n                                    <img class=\"img-portfolio img-responsive\" src=\"assets/img/ritual-2.jpeg\" alt=\"Nete e os queridos fiscais\" title=\"Nete e os queridos fiscais\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"portfolio-item\">\r\n                                    <img class=\"img-portfolio img-responsive\" src=\"assets/img/ritual-3.jpeg\" alt=\"O pessoal observando a palestra\" title=\"O pessoal observando a palestra\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"portfolio-item\">\r\n                                    <img class=\"img-portfolio img-responsive\" src=\"assets/img/ritual-4.jpeg\" alt=\"O pessoal sentindo a energia das músicas\" title=\"O pessoal sentindo a energia das músicas\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /.col-lg-10 -->\r\n            </div>\r\n            <!-- /.row -->\r\n        </div>\r\n        <!-- /.container -->\r\n    </section>\r\n"

/***/ }),

/***/ "./src/app/fotos/fotos.component.ts":
/*!******************************************!*\
  !*** ./src/app/fotos/fotos.component.ts ***!
  \******************************************/
/*! exports provided: FotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotosComponent", function() { return FotosComponent; });
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

var FotosComponent = /** @class */ (function () {
    function FotosComponent() {
    }
    FotosComponent.prototype.ngOnInit = function () {
    };
    FotosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fotos',
            template: __webpack_require__(/*! ./fotos.component.html */ "./src/app/fotos/fotos.component.html"),
            styles: [__webpack_require__(/*! ./fotos.component.css */ "./src/app/fotos/fotos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FotosComponent);
    return FotosComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <!-- Header -->\r\n    <header id=\"top\" class=\"header\">\r\n        <div id=\"header-div\" class=\"text-vertical-center\">\r\n            <img class=\"logo\" src=\"assets/img/logo.png\" alt=\"Logotipo Instituto Servidores da Luz\" title=\"Logotipo Instituto Servidores da Luz\">\r\n            <h1 class=\"text-white\">Instituto Servidores da Luz</h1>\r\n            <h3 class=\"text-white\">Sejam Todos Muito Bem-vindos!</h3>\r\n            <br>\r\n            <a href=\"#proximosRituais\" class=\"btn btn-lg btn-white\" title=\"Próximos Rituais\">Próximos Rituais</a>\r\n            <br>\r\n            <br>\r\n            <a href=\"https://www.facebook.com/institutoservidoresdaluz/\" title=\"Link para o Facebook\"><i class=\"fa fa-facebook fa-fw fa-3x\"></i></a>\r\n        </div>\r\n    </header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/inscrever/inscrever.component.css":
/*!***************************************************!*\
  !*** ./src/app/inscrever/inscrever.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inscrever/inscrever.component.html":
/*!****************************************************!*\
  !*** ./src/app/inscrever/inscrever.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <!-- About -->\r\n    <section id=\"inscrever\" class=\"about\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 text-center\">\r\n<!-- Begin MailChimp Signup Form -->\r\n<link href=\"//cdn-images.mailchimp.com/embedcode/classic-10_7.css\" rel=\"stylesheet\" type=\"text/css\">\r\n<style type=\"text/css\">\r\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\r\n\t/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.\r\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\r\n</style>\r\n<div id=\"mc_embed_signup\">\r\n<form action=\"//isdl.us15.list-manage.com/subscribe/post?u=14801be1dede137ac60fb5e75&amp;id=6677976919\" method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" novalidate>\r\n    <div id=\"mc_embed_signup_scroll\">\r\n\t<h2>Se inscreva em nossa lista de e-mails para ser avisado quando tiver ritual</h2>\r\n<div class=\"indicates-required\"><span class=\"asterisk\">*</span> indicates required</div>\r\n<div class=\"mc-field-group\">\r\n\t<label for=\"mce-EMAIL\">Email  <span class=\"asterisk\">*</span>\r\n</label>\r\n\t<input type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\">\r\n</div>\r\n\t<div id=\"mce-responses\" class=\"clear\">\r\n\t\t<div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\r\n\t\t<div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\r\n\t</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\r\n    <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\" name=\"b_14801be1dede137ac60fb5e75_6677976919\" tabindex=\"-1\" value=\"\"></div>\r\n    <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>\r\n    </div>\r\n</form>\r\n</div>\r\n<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email'; /**\r\n * Translated default messages for the $ validation plugin.\r\n * Locale: PT_PT\r\n */\r\n$.extend($.validator.messages, {\r\n\trequired: \"Campo de preenchimento obrigat&oacute;rio.\",\r\n\tremote: \"Por favor, corrija este campo.\",\r\n\temail: \"Por favor, introduza um endere&ccedil;o eletr&oacute;nico v&aacute;lido.\",\r\n\turl: \"Por favor, introduza um URL v&aacute;lido.\",\r\n\tdate: \"Por favor, introduza uma data v&aacute;lida.\",\r\n\tdateISO: \"Por favor, introduza uma data v&aacute;lida (ISO).\",\r\n\tnumber: \"Por favor, introduza um n&uacute;mero v&aacute;lido.\",\r\n\tdigits: \"Por favor, introduza apenas d&iacute;gitos.\",\r\n\tcreditcard: \"Por favor, introduza um n&uacute;mero de cart&atilde;o de cr&eacute;dito v&aacute;lido.\",\r\n\tequalTo: \"Por favor, introduza de novo o mesmo valor.\",\r\n\taccept: \"Por favor, introduza um ficheiro com uma extens&atilde;o v&aacute;lida.\",\r\n\tmaxlength: $.validator.format(\"Por favor, n&atilde;o introduza mais do que {0} caracteres.\"),\r\n\tminlength: $.validator.format(\"Por favor, introduza pelo menos {0} caracteres.\"),\r\n\trangelength: $.validator.format(\"Por favor, introduza entre {0} e {1} caracteres.\"),\r\n\trange: $.validator.format(\"Por favor, introduza um valor entre {0} e {1}.\"),\r\n\tmax: $.validator.format(\"Por favor, introduza um valor menor ou igual a {0}.\"),\r\n\tmin: $.validator.format(\"Por favor, introduza um valor maior ou igual a {0}.\")\r\n});}(jQuery));var $mcj = jQuery.noConflict(true);</script>\r\n<!--End mc_embed_signup-->\r\n                </div>\r\n            </div>\r\n            <!-- /.row -->\r\n        </div>\r\n        <!-- /.container -->\r\n    </section>\r\n"

/***/ }),

/***/ "./src/app/inscrever/inscrever.component.ts":
/*!**************************************************!*\
  !*** ./src/app/inscrever/inscrever.component.ts ***!
  \**************************************************/
/*! exports provided: InscreverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscreverComponent", function() { return InscreverComponent; });
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

var InscreverComponent = /** @class */ (function () {
    function InscreverComponent() {
    }
    InscreverComponent.prototype.ngOnInit = function () {
    };
    InscreverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inscrever',
            template: __webpack_require__(/*! ./inscrever.component.html */ "./src/app/inscrever/inscrever.component.html"),
            styles: [__webpack_require__(/*! ./inscrever.component.css */ "./src/app/inscrever/inscrever.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InscreverComponent);
    return InscreverComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-right {\r\n    right: 0px;\r\n}\r\n.z1 {\r\n    z-index: 1;\r\n}\r\n.menu-lista {\r\n    min-width: 100px;\r\n    text-align: right;\r\n    padding-right: 15px;\r\n}\r\n.sticky {\r\n    position: fixed;\r\n    top: 0;\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar-div\" class=\"navbar navbar-expand-xg navbar-dark w-100 position-absolute z1\">\r\n    <a class=\"navbar-brand\" href=\"\">Instituto Servidores da Luz</a>\r\n    <button class=\"navbar-toggler float-right my-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar1\" aria-controls=\"navbar1\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbar1\">\r\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0 float-right my-right menu-lista\">\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" href=\"#about\">Sobre</a>\r\n            </li>\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" href=\"#inscrever\">Inscrever</a>\r\n            </li>\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" href=\"#proximosRituais\">Próximos Rituais</a>\r\n            </li>\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" href=\"#normas\">Normas</a>\r\n            </li>\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" href=\"#fotos\">Fotos</a>\r\n            </li>\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" href=\"#contact\">Contato</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/normas/normas.component.css":
/*!*********************************************!*\
  !*** ./src/app/normas/normas.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/normas/normas.component.html":
/*!**********************************************!*\
  !*** ./src/app/normas/normas.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"normas\" class=\"about\">\r\n    <!-- Callout -->\r\n    <aside class=\"callout\">\r\n        <div class=\"text-vertical-center text-black\">\r\n            <p>&nbsp;</p>\r\n            <h2>Normas e Condições para Participação em Nossos Rituais</h2>\r\n              <div>\r\n                <p class=\"text-medium\">\r\n                  Aqui Neste INSTITUTO Espiritual é expressamente PROIBIDO portar qualquer \r\n                  droga, cigarro ou álcool. Nunca esquecer que é um trabalho espiritual, \r\n                  O SILÊNCIO É FUNDAMENTAL. Traga Seriedade, Respeito e Disciplina! <br>\r\n                  - Todos são obrigados a apresentar documento com foto (RG, carteira \r\n                  trabalho ou de motorista) Menores devem estar acompanhados por um dos \r\n                  responsáveis legais ou com autorização por escrito com firma reconhecida \r\n                  em Cartório. <br><a href=\"assets/docs/at.doc\" target=\"_blank\" title=\"Documento para menor de idade poder participar sem os responsáveis\">( clique aqui para imprimir \r\n                  o modelo )</a> <br>\r\n                  </p>\r\n                <p class=\"text-medium\">- \r\n                  Trazer colchonete e cobertor <br>\r\n                  <br>\r\n                  Mulheres vestidas discretamente com blusa sem \r\n                  decote e saia longa (pode-se usar por cima de calça comprida ou shorts) \r\n                  <br>\r\n                  Homens vestidos com calça comprida e camiseta \r\n                  de manga (não é permitido bermudas nem regatas). Roupas de cores claras \r\n                  <br>\r\n                  <br>\r\n                  Restrições à participação nos trabalhos c/Ayahuasca: <br>\r\n                  <br>\r\n                  - Pessoas que tomam remédio tarja preta , caso não haja restrição médica \r\n                  entrar em contato para mais informações. <br>\r\n                  <br>\r\n                  - Não é permitido às pessoas com problemas cardíacos, inclusive as que \r\n                  utilizem marca-passo. <br>\r\n                  <br>\r\n                  - Não é permitido às pessoas com problemas psiquiátricos. <br>\r\n                  <br>\r\n                  - Dentro do Instituto é proibido FUMAR cigarro, USAR O RAPÉ - Sugerimos \r\n                  que se abstenham de álcool 03 dias antes do trabalho para um melhor \r\n                  aproveitamento do mesmo. <br>\r\n                  <br>\r\n                  O que levar para o ritual: rolos de papel higiênico, velas de sete dias, \r\n                  incensos Nag Champa Alimentos para o final como: Pães, Bolos, tortas, \r\n                  frutas e sucos... Traga para você e para seu irmão!!!</p>\r\n              </div>\r\n\r\n        </div>\r\n    </aside>\r\n    </section>"

/***/ }),

/***/ "./src/app/normas/normas.component.ts":
/*!********************************************!*\
  !*** ./src/app/normas/normas.component.ts ***!
  \********************************************/
/*! exports provided: NormasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormasComponent", function() { return NormasComponent; });
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

var NormasComponent = /** @class */ (function () {
    function NormasComponent() {
    }
    NormasComponent.prototype.ngOnInit = function () {
    };
    NormasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-normas',
            template: __webpack_require__(/*! ./normas.component.html */ "./src/app/normas/normas.component.html"),
            styles: [__webpack_require__(/*! ./normas.component.css */ "./src/app/normas/normas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NormasComponent);
    return NormasComponent;
}());



/***/ }),

/***/ "./src/app/proximos-rituais/proximos-rituais.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/proximos-rituais/proximos-rituais.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirmar-presenca {\r\n    margin-top: 20px;\r\n    font-size: 1.3rem;\r\n}\r\n.normas-procedimentos {    \r\n    max-width: 850px;\r\n    width: 100%;\r\n}\r\n.calendario-anual {\r\n    max-width: 550px;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/proximos-rituais/proximos-rituais.component.html":
/*!******************************************************************!*\
  !*** ./src/app/proximos-rituais/proximos-rituais.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"proximosRituais\" class=\"services\">\r\n    <div class=\"container\" *ngIf=\"rituais.length > 0\">\r\n        <div class=\"text-center\">\r\n            <h2>Próximos Rituais - Ayahuasca</h2>\r\n            <hr class=\"small\">\r\n            <div class=\"ritual\" *ngFor=\"let ritual of rituais\">\r\n                <h3>{{ritual.dataTexto}}</h3>\r\n                <p [innerHTML]=\"ritual.eventoFaceEmbedly\"></p>\r\n                <a [href]=\"ritual.eventoFace\" target=\"blank\"><img class=\"img-ritual\" alt=\"Meditação com Ayahuasc aem São Paulo dia {{ritual.dataTexto}}\" title=\"Meditação com Ayahuasca em São Paulo dia {{ritual.dataTexto}}\"\r\n                    src=\"{{ritual.imagem.fields.file.url}}\"></a>\r\n                <p class=\"confirmar-presenca\"><a target=\"_blank\" href=\"https://wa.me/5511994778572?text=Olá, tenho interesse em participar do ritual do dia {{ritual.dataTexto}}\">Confirmar presença via Whatsapp</a></p>\r\n                <p>&nbsp;</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container\" *ngIf=\"rituais.length == 0\">\r\n        <div class=\"text-center\">\r\n            <h2>Próximos Rituais - Ainda não temos uma data definida</h2>\r\n            <p>Mas se quiser ser avisado, você pode se inscrever na nossa lista de e-mails acima ou nos seguir no Facebook:</p>\r\n            <ul class=\"list-inline\">\r\n                <li>\r\n                    <a href=\"https://www.facebook.com/institutoservidoresdaluz/\" title=\"Link para o Facebook\"><i class=\"fa fa-facebook fa-fw fa-3x\"></i></a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n        <div class=\"text-center\">\r\n            <img class=\"normas-procedimentos\" src=\"assets/img/normas-procedimentos-covid.jpeg\" alt=\"Normas e Procedimentos Covid\">\r\n        </div>\r\n        <p>&nbsp;</p>\r\n        <div class=\"text-center\">\r\n            <img class=\"calendario-anual\" src=\"assets/img/calendario-anual.jpeg\" alt=\"Calendário Anual\">\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/proximos-rituais/proximos-rituais.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/proximos-rituais/proximos-rituais.component.ts ***!
  \****************************************************************/
/*! exports provided: ProximosRituaisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProximosRituaisComponent", function() { return ProximosRituaisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_contentful_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/contentful.service */ "./src/app/service/contentful.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var util = {
    nomeDia: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    nomeMes: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
};
var ProximosRituaisComponent = /** @class */ (function () {
    function ProximosRituaisComponent(contentfulService, sanitizer) {
        this.contentfulService = contentfulService;
        this.sanitizer = sanitizer;
        this.rituais = [];
        this.protocol = 'http';
        this.protocol = window.location.href.split(":")[0];
        if (this.protocol == "file") {
            this.protocol = "http";
        }
        this.protocol = this.protocol + ":";
    }
    ProximosRituaisComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ontem = new Date();
        ontem.setDate(ontem.getDate() - 1);
        var query = { content_type: 'rituais', order: 'fields.data', 'fields.exibir': true, 'fields.data[gte]': ontem };
        this.contentfulService.getProducts(query).then(function (contentRituais) {
            console.log(contentRituais);
            var rituais = [];
            contentRituais.forEach(function (entries) {
                var entry = entries.fields;
                entry.eventoFaceEmbedly = _this.sanitizer.bypassSecurityTrustHtml(entry.eventoFaceEmbedly);
                var dataRitual = new Date(Date.parse(entry.data));
                var dataExtenso = dataRitual.getDate() + " de " + util.nomeMes[dataRitual.getMonth()] + " de " + dataRitual.getFullYear();
                var dataTexto = dataExtenso + " às " + dataRitual.getHours() + "h";
                entry.dataTexto = dataTexto;
                var titulo = "Meditação com Ayahuasca dia " + dataExtenso;
                entry.titulo = titulo;
                entry.imagem.fields.file.url = _this.protocol + entry.imagem.fields.file.url;
                rituais.push(entry);
            });
            _this.rituais = rituais;
        });
    };
    ProximosRituaisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-proximos-rituais',
            template: __webpack_require__(/*! ./proximos-rituais.component.html */ "./src/app/proximos-rituais/proximos-rituais.component.html"),
            styles: [__webpack_require__(/*! ./proximos-rituais.component.css */ "./src/app/proximos-rituais/proximos-rituais.component.css")]
        }),
        __metadata("design:paramtypes", [_service_contentful_service__WEBPACK_IMPORTED_MODULE_1__["ContentfulService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], ProximosRituaisComponent);
    return ProximosRituaisComponent;
}());



/***/ }),

/***/ "./src/app/service/contentful.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/contentful.service.ts ***!
  \***********************************************/
/*! exports provided: ContentfulService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentfulService", function() { return ContentfulService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/contentful.browser.js");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CONFIG = {
    space: 'ln55wc4ax9u5',
    accessToken: '2461fa325882304971d276a20a19bb95d23f58b4957751075d952c52be5214e8',
    contentTypeIds: {
        rituais: 'rituais'
    }
};
var ContentfulService = /** @class */ (function () {
    function ContentfulService() {
        this.cdaClient = Object(contentful__WEBPACK_IMPORTED_MODULE_1__["createClient"])({
            space: CONFIG.space,
            accessToken: CONFIG.accessToken
        });
    }
    ContentfulService.prototype.getProducts = function (query) {
        return this.cdaClient.getEntries(Object.assign({
            content_type: CONFIG.contentTypeIds.rituais
        }, query))
            .then(function (res) { return res.items; });
    };
    ContentfulService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ContentfulService);
    return ContentfulService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\area-de-trabalho\workspace-lucas\ng6-isdl\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map