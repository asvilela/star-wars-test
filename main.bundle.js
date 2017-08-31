webpackJsonp([1,5],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(170),
        styles: [__webpack_require__(163)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_details_details_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_people_people_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routing_app_routing__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_swapi_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__component_people_people_component__["a" /* PeopleComponent */],
            __WEBPACK_IMPORTED_MODULE_5__component_details_details_component__["a" /* DetailsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_8__routing_app_routing__["a" /* routing */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_swapi_service__["a" /* SwapiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Person; });
var Person = (function () {
    function Person() {
        this.id = '';
        this.birth_year = '';
        this.created = '';
        this.edited = '';
        this.eye_color = '';
        this.films = [];
        this.gender = '';
        this.hair_color = '';
        this.height = '';
        this.homeworld = '';
        this.mass = '';
        this.name = '';
        this.skin_color = '';
        this.species = [];
        this.starships = [];
        this.url = '';
    }
    return Person;
}());

//# sourceMappingURL=person.model.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_details_details_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_people_people_component__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
// import { Component } from '@angular/core';



var appRoutes = [
    { path: 'details/:id', component: __WEBPACK_IMPORTED_MODULE_1__component_details_details_component__["a" /* DetailsComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__component_people_people_component__["a" /* PeopleComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });




var BaseService = (function () {
    function BaseService() {
    }
    BaseService.prototype.extractData = function (res) {
        return res.json();
    };
    BaseService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return BaseService;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "form {\n  margin-top: 10px;\n}\n\nth {\n  cursor:pointer;\n}\n\na {\n  cursor:pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a [routerLink]=\"['/']\" class=\"navbar-brand\"><span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span></a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a [routerLink]=\"['/']\" >People<span class=\"sr-only\">(current)</span></a></li>\n      </ul>\n\n\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n<div class=\"col-md-12\">\n  <h1>Star Wars Test</h1>\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <!-- Default panel contents -->\n  <div class=\"panel-heading\">Details</div>\n  <div class=\"panel-body\">\n\n<!--Row 1-->\n    <div class=\"col-md-4\">\n      <label>name:</label><br>\n      <h4>{{person.name}}</h4>\n    </div>\n\n    <div class=\"col-md-4\">\n      <label>birth_year:</label><br>\n      <h4>{{person.birth_year}}</h4>\n    </div>\n    \n    <div class=\"col-md-4\">\n      <label>eye_color:</label><br>\n      <h4>{{person.eye_color}}</h4>\n    </div>\n\n    <div class=\"col-md-12\"><hr></div>\n\n<!--Row 2-->\n    <div class=\"col-md-4\">\n      <label>hair_color:</label><br>\n      <h4>{{person.hair_color}}</h4>\n    </div>\n\n    <div class=\"col-md-4\">\n      <label>gender:</label><br>\n      <h4>{{person.gender}}</h4>\n    </div>\n    \n    <div class=\"col-md-4\">\n      <label>height:</label><br>\n      <h4>{{person.height}}</h4>\n    </div>\n\n    <div class=\"col-md-12\"><hr></div>\n\n<!--Row 2-->\n    <div class=\"col-md-4\">\n      <label>mass:</label><br>\n      <h4>{{person.mass}}</h4>\n    </div>\n\n    <div class=\"col-md-4\">\n      <label>skin_color:</label><br>\n      <h4>{{person.skin_color}}</h4>\n    </div>\n    \n    <div class=\"col-md-4\"></div>\n\n  </div>\n\n</div>\n\n\n<div class=\"list-group\">\n  <a href=\"#\" class=\"list-group-item active\">\n      People at the same planet\n    </a>\n  <a *ngFor=\"let person of residents\" [routerLink]=\"['/details', person.id]\"  class=\"list-group-item\">{{person.url}}</a>\n</div>"

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"form-group col-md-2\">\n      <label for=\"exampleInputName2\">Filter</label>\n      \n      <div class=\"dropdown\">\n        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n          {{form.get('filter').value}}\n          <span class=\"caret\"></span>\n        </button>\n\n        <div *ngIf=\"!form.get('filter').valid\" style=\"color: red;\">\n          Obrigatório para filtrar\n        </div>\n        \n        <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n          <li><a (click)=\"form.get('filter').setValue('Name')\">Name</a></li>\n          <!--<li><a (click)=\"form.get('filter').setValue('Gender')\">Gender</a></li>\n          <li><a (click)=\"form.get('filter').setValue('Birth Year')\">Birth Year</a></li>\n          <li><a (click)=\"form.get('filter').setValue('Planet')\">Planet</a></li>-->\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"form-group col-md-6\" [ngClass]=\"applyCssError('text')\" >\n      <label for=\"exampleInputName2\">Text</label>\n      <input type=\"text\" formControlName=\"text\" class=\"form-control\" placeholder=\"Description\">\n      <div *ngIf=\"!form.get('text').valid\" style=\"color: red;\">\n        Obrigatório para filtrar\n      </div>\n    </div>\n\n    <div class=\"form-group col-md-4 text-right\">\n      <br>\n      <button type=\"button\" (click)=\"onClean()\" class=\"btn btn-danger\">Clean</button>\n      <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary\">Search</button>\n    </div>\n\n  </form>\n\n</nav>\n\n\n<table class=\"table table-striped\">\n\n  <thead style=\"font-size: 12px;\">\n\n    <tr style=\"background-color: #F4F4F4;\">\n      <th (click)=\"orderBy('name')\">name</th>\n      <th (click)=\"orderBy('eye_color')\">eye_color</th>\n      <th (click)=\"orderBy('hair_color')\">hair_color</th>\n      <th (click)=\"orderBy('gender')\">gender</th>\n      <th (click)=\"orderBy('birth_year')\">Birth Year</th>\n      <th></th>\n    </tr>\n\n  </thead>\n\n  <tbody>\n\n    <tr *ngFor=\"let item of list\">\n      <td>{{item.name}}</td>\n      <td>{{item.eye_color}}</td>\n      <td>{{item.hair_color}}</td>\n      <td>{{item.gender}}</td>\n      <td>{{item.birth_year}}</td>\n      <td class=\"text-right\">\n          <button [routerLink]=\"['/details', item.id]\" type=\"button\" class=\"btn btn-default btn-sm\">\n            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></span>\n          </button>\n      </td>\n    </tr>\n\n  </tbody>\n\n</table>\n\n<div class=\"text-center\">\n  <nav aria-label=\"Page navigation\">\n    <ul class=\"pagination\">\n      <!--<li>\n        <a href=\"#\" aria-label=\"Previous\">\n          <span aria-hidden=\"true\">&laquo;</span>\n        </a>\n      </li>-->\n      <li *ngFor=\"let page of pagination\"><a href=\"#\" (click)=\"onSearch('/?page=' + page)\">{{page}}</a></li>\n      <!--<li>\n        <a href=\"#\" aria-label=\"Next\">\n          <span aria-hidden=\"true\">&raquo;</span>\n        </a>\n      </li>-->\n    </ul>\n  </nav>\n</div>"

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(94);


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwapiService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SwapiService = (function (_super) {
    __extends(SwapiService, _super);
    function SwapiService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.people = [];
        return _this;
    }
    SwapiService.prototype.getPeople = function (filter) {
        var url = (filter != null ? 'https://swapi.co/api/people' + filter : 'https://swapi.co/api/people');
        // console.log(url)
        return this.http.get(url, {})
            .map(this.extractData)
            .catch(this.handleError);
    };
    SwapiService.prototype.getResidents = function (filter) {
        var url = (filter != null ? 'https://swapi.co/api/planets' + filter : 'https://swapi.co/api/planets');
        console.log(url);
        return this.http.get(url, {})
            .map(this.extractData)
            .catch(this.handleError);
    };
    return SwapiService;
}(__WEBPACK_IMPORTED_MODULE_2__base_service__["a" /* BaseService */]));
SwapiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SwapiService);

var _a;
//# sourceMappingURL=swapi.service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_person_model__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_swapi_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsComponent = (function () {
    function DetailsComponent(route, swapi) {
        this.route = route;
        this.swapi = swapi;
        this.person = new __WEBPACK_IMPORTED_MODULE_2__models_person_model__["a" /* Person */]();
        this.residents = [];
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var filter, id;
        this.inscription = this.route.params.subscribe(function (params) {
            // Load Params
            id = params['id'];
            // Get Person Details
            filter = '/' + id + '/';
            _this.swapi.getPeople(filter)
                .subscribe(function (res) {
                _this.person = res;
                // Get people at the same planet
                filter = '/' + _this.person.homeworld.split('/')[5] + '/';
                _this.swapi.getResidents(filter)
                    .subscribe(function (res) {
                    _this.residents = res['residents'].map(function (x) {
                        return { id: x.split('/')[5], url: x };
                    });
                });
            });
        });
    };
    DetailsComponent.prototype.ngOnDestroy = function () {
        this.inscription.unsubscribe();
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-details',
        template: __webpack_require__(171),
        styles: [__webpack_require__(164)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_swapi_service__["a" /* SwapiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_swapi_service__["a" /* SwapiService */]) === "function" && _b || Object])
], DetailsComponent);

var _a, _b;
//# sourceMappingURL=details.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_swapi_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeopleComponent = (function () {
    function PeopleComponent(formBuilder, swapi) {
        this.formBuilder = formBuilder;
        this.swapi = swapi;
        this.list = [];
        this.pagination = [];
        this.form = this.formBuilder.group({
            filter: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            text: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)]]
        });
    }
    PeopleComponent.prototype.ngOnInit = function () {
        this.onSearch(null);
    };
    PeopleComponent.prototype.onClean = function () {
        this.form.reset();
        this.onSearch(null);
    };
    PeopleComponent.prototype.onSubmit = function () {
        var filter = '/?search=' + this.form.get('text').value;
        this.onSearch(filter);
    };
    PeopleComponent.prototype.applyCssError = function (field) {
        return {
            'has-error': !this.form.get(field).valid,
            'has-feedback': !this.form.get(field).valid
        };
    };
    PeopleComponent.prototype.onSearch = function (filter) {
        var _this = this;
        this.swapi.getPeople(filter)
            .subscribe(function (res) {
            res['results'].map(function (x) { return x.id = x.url.split('/')[5]; });
            _this.pagination = Array.apply(null, { length: Math.ceil(res.count / 10) }).map(function (x, y) { return y + 1; });
            _this.list = res['results'];
        });
    };
    PeopleComponent.prototype.orderBy = function (field) {
        this.list = alasql('SELECT * FROM ? ORDER BY ' + field, [this.list]);
    };
    return PeopleComponent;
}());
PeopleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-people',
        template: __webpack_require__(172),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_swapi_service__["a" /* SwapiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_swapi_service__["a" /* SwapiService */]) === "function" && _b || Object])
], PeopleComponent);

var _a, _b;
//# sourceMappingURL=people.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 93;


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(108);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.bundle.js.map