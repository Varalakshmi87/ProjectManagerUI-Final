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

/***/ "./src/app/ErrorStateMatcher.ts":
/*!**************************************!*\
  !*** ./src/app/ErrorStateMatcher.ts ***!
  \**************************************/
/*! exports provided: MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/FilterPipe.ts":
/*!*******************************!*\
  !*** ./src/app/FilterPipe.ts ***!
  \*******************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, args) {
        if (!value) {
            return null;
        }
        if (!args) {
            return value;
        }
        args = args.toLowerCase();
        return value.filter(function (item) {
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'FilterPipe'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/ParentTaskDiaologData.ts":
/*!******************************************!*\
  !*** ./src/app/ParentTaskDiaologData.ts ***!
  \******************************************/
/*! exports provided: ParentTaskDialogData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentTaskDialogData", function() { return ParentTaskDialogData; });
var ParentTaskDialogData = /** @class */ (function () {
    function ParentTaskDialogData() {
    }
    return ParentTaskDialogData;
}());



/***/ }),

/***/ "./src/app/Project.ts":
/*!****************************!*\
  !*** ./src/app/Project.ts ***!
  \****************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
        this.IsCreate = false;
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/ProjectDialogData.ts":
/*!**************************************!*\
  !*** ./src/app/ProjectDialogData.ts ***!
  \**************************************/
/*! exports provided: ProjectDialodData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDialodData", function() { return ProjectDialodData; });
var ProjectDialodData = /** @class */ (function () {
    function ProjectDialodData() {
    }
    return ProjectDialodData;
}());



/***/ }),

/***/ "./src/app/Task.ts":
/*!*************************!*\
  !*** ./src/app/Task.ts ***!
  \*************************/
/*! exports provided: Task, SearchTask, ParentTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTask", function() { return SearchTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentTask", function() { return ParentTask; });
var Task = /** @class */ (function () {
    function Task() {
        this.IsCreate = false;
    }
    return Task;
}());

var SearchTask = /** @class */ (function () {
    function SearchTask() {
    }
    return SearchTask;
}());

var ParentTask = /** @class */ (function () {
    function ParentTask() {
    }
    return ParentTask;
}());



/***/ }),

/***/ "./src/app/User.ts":
/*!*************************!*\
  !*** ./src/app/User.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.IsCreate = false;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/UserDialogData.ts":
/*!***********************************!*\
  !*** ./src/app/UserDialogData.ts ***!
  \***********************************/
/*! exports provided: UserDialogData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDialogData", function() { return UserDialogData; });
var UserDialogData = /** @class */ (function () {
    function UserDialogData() {
    }
    return UserDialogData;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _task_manager_home_task_manager_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-manager-home/task-manager-home.component */ "./src/app/task-manager-home/task-manager-home.component.ts");




var routes = [
    { path: 'ProjectManager', component: _task_manager_home_task_manager_home_component__WEBPACK_IMPORTED_MODULE_3__["TaskManagerHomeComponent"] },
    { path: '', redirectTo: '/ProjectManager', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titleBar\r\n{\r\nbackground-color: #fff;\r\nfont-family: 'Quattrocento Sans',sans-serif;\r\nfont-size: 6mm;\r\nbackground: rgb(63, 180, 170);\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsdUJBQXVCO0FBQ3ZCLDRDQUE0QztBQUM1QyxlQUFlO0FBQ2YsOEJBQThCO0lBQzFCLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZUJhclxyXG57XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbmZvbnQtZmFtaWx5OiAnUXVhdHRyb2NlbnRvIFNhbnMnLHNhbnMtc2VyaWY7XHJcbmZvbnQtc2l6ZTogNm1tO1xyXG5iYWNrZ3JvdW5kOiByZ2IoNjMsIDE4MCwgMTcwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"titleBar\">{{ title }}</mat-toolbar>\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Project Manager - .Net Case Study';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _task_manager_home_task_manager_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task-manager-home/task-manager-home.component */ "./src/app/task-manager-home/task-manager-home.component.ts");
/* harmony import */ var _task_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task-service.service */ "./src/app/task-service.service.ts");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var _project_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./project-service.service */ "./src/app/project-service.service.ts");
/* harmony import */ var _user_manager_user_manager_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-manager/user-manager.component */ "./src/app/user-manager/user-manager.component.ts");
/* harmony import */ var _FilterPipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./FilterPipe */ "./src/app/FilterPipe.ts");
/* harmony import */ var _project_manager_project_manager_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./project-manager/project-manager.component */ "./src/app/project-manager/project-manager.component.ts");
/* harmony import */ var _user_search_user_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-search/user-search.component */ "./src/app/user-search/user-search.component.ts");
/* harmony import */ var _parenttask_search_parenttask_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./parenttask-search/parenttask-search.component */ "./src/app/parenttask-search/parenttask-search.component.ts");
/* harmony import */ var _project_search_project_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./project-search/project-search.component */ "./src/app/project-search/project-search.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _task_manager_home_task_manager_home_component__WEBPACK_IMPORTED_MODULE_10__["TaskManagerHomeComponent"],
                _user_manager_user_manager_component__WEBPACK_IMPORTED_MODULE_14__["UserManagerComponent"],
                _FilterPipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipe"],
                _project_manager_project_manager_component__WEBPACK_IMPORTED_MODULE_16__["ProjectManagerComponent"],
                _user_search_user_search_component__WEBPACK_IMPORTED_MODULE_17__["UserSearchComponent"],
                _parenttask_search_parenttask_search_component__WEBPACK_IMPORTED_MODULE_18__["ParenttaskSearchComponent"],
                _project_search_project_search_component__WEBPACK_IMPORTED_MODULE_19__["ProjectSearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
            ],
            providers: [_task_service_service__WEBPACK_IMPORTED_MODULE_11__["TaskServiceService"], _user_service_service__WEBPACK_IMPORTED_MODULE_12__["UserServiceService"], _project_service_service__WEBPACK_IMPORTED_MODULE_13__["ProjectServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_17__["UserSearchComponent"], _parenttask_search_parenttask_search_component__WEBPACK_IMPORTED_MODULE_18__["ParenttaskSearchComponent"], _project_search_project_search_component__WEBPACK_IMPORTED_MODULE_19__["ProjectSearchComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");














var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"]
            ],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/parenttask-search/parenttask-search.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/parenttask-search/parenttask-search.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 250px;\r\n    font-family: 'Quattrocento Sans',sans-serif !important;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 50px;\r\n    padding: 5px 18px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 10px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFyZW50dGFzay1zZWFyY2gvcGFyZW50dGFzay1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHVEQUF1RDtHQUN4RDs7RUFFRDtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7R0FDckI7O0VBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtHQUNiOztFQUVEO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtHQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhcmVudHRhc2stc2VhcmNoL3BhcmVudHRhc2stc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWF0dHJvY2VudG8gU2Fucycsc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXIge1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDVweCAxOHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC10YWJsZSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/parenttask-search/parenttask-search.component.html":
/*!********************************************************************!*\
  !*** ./src/app/parenttask-search/parenttask-search.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n    <mat-dialog-content>\n      <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter ParentTask\">\n      </mat-form-field>\n      <mat-table #table [dataSource]=\"dataSourceParent\">\n  \n        <ng-container matColumnDef=\"Parent_ID\">\n          <mat-header-cell *matHeaderCellDef> Parent_ID </mat-header-cell>\n          <mat-cell *matCellDef=\"let ParentTask\"> {{ParentTask.Parent_ID}} </mat-cell>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"Parent_Task\">\n          <mat-header-cell *matHeaderCellDef> Parent_Task </mat-header-cell>\n          <mat-cell *matCellDef=\"let ParentTask\"> {{ParentTask.Parent_Task}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"Action\">\n          <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n          <mat-cell *matCellDef=\"let ParentTask\">\n            <div>\n              <button mat-button mat-raised-button class=\"mr-2\" value=\"ParentTask.Parent_ID\" [mat-dialog-close]=\"ParentTask\" color=\"primary\">\n                Select</button>\n            </div>\n          </mat-cell>\n        </ng-container>\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n      <mat-paginator [pageSizeOptions]=\"[5]\" showFirstLastButtons></mat-paginator>\n    </mat-dialog-content>\n  </div>"

/***/ }),

/***/ "./src/app/parenttask-search/parenttask-search.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/parenttask-search/parenttask-search.component.ts ***!
  \******************************************************************/
/*! exports provided: ParenttaskSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParenttaskSearchComponent", function() { return ParenttaskSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _task_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task-service.service */ "./src/app/task-service.service.ts");
/* harmony import */ var _ParentTaskDiaologData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ParentTaskDiaologData */ "./src/app/ParentTaskDiaologData.ts");





var ParenttaskSearchComponent = /** @class */ (function () {
    function ParenttaskSearchComponent(taskService, dialogRef, data) {
        this.taskService = taskService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = ['Parent_ID', 'Parent_Task', 'Action'];
    }
    ParenttaskSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getParents().subscribe(function (a) { return _this.setData(a); });
    };
    ParenttaskSearchComponent.prototype.applyFilter = function (filterValue) {
        this.dataSourceParent.filter = filterValue.trim().toLowerCase();
    };
    ParenttaskSearchComponent.prototype.setData = function (data) {
        this.dataSourceParent = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
        this.dataSourceParent.paginator = this.paginator;
    };
    ParenttaskSearchComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ParenttaskSearchComponent.prototype, "paginator", void 0);
    ParenttaskSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parenttask-search',
            template: __webpack_require__(/*! ./parenttask-search.component.html */ "./src/app/parenttask-search/parenttask-search.component.html"),
            styles: [__webpack_require__(/*! ./parenttask-search.component.css */ "./src/app/parenttask-search/parenttask-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service_service__WEBPACK_IMPORTED_MODULE_3__["TaskServiceService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _ParentTaskDiaologData__WEBPACK_IMPORTED_MODULE_4__["ParentTaskDialogData"]])
    ], ParenttaskSearchComponent);
    return ParenttaskSearchComponent;
}());



/***/ }),

/***/ "./src/app/project-manager/project-manager.component.css":
/*!***************************************************************!*\
  !*** ./src/app/project-manager/project-manager.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 350px;\r\n    font-family: 'Quattrocento Sans',sans-serif !important;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 65px;\r\n    padding: 5px 18px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 18px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  \r\n  .customMatError{\r\n    position: absolute;\r\n    top: 32px;\r\n    font-size: 11px;\r\n    color: red;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1tYW5hZ2VyL3Byb2plY3QtbWFuYWdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsdURBQXVEO0dBQ3hEOztFQUVEO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0dBQ2I7O0VBRUQ7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0dBQ25COztFQUNEO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsV0FBVztHQUNaIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC1tYW5hZ2VyL3Byb2plY3QtbWFuYWdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLXdpZHRoOiAzNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVhdHRyb2NlbnRvIFNhbnMnLHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDY1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMThweCAwO1xyXG4gIH1cclxuICBcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtdGFibGUge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICB9XHJcbiAgLmN1c3RvbU1hdEVycm9ye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/project-manager/project-manager.component.html":
/*!****************************************************************!*\
  !*** ./src/app/project-manager/project-manager.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #contentCreateProject>\r\n  <button type=\"submit\" mat-button mat-raised-button class=\"mr-2\" value=\"creatingProjectForm.Project_ID\" color=\"primary\">\r\n    <mat-icon>{{'add'}}</mat-icon>Add Project</button>\r\n  <button type=\"button\" mat-button mat-raised-button value=\"creatingProjectForm.Project_ID\" (click)=\"cancelUpdateProject();CreatingProjectForm.resetForm()\"\r\n    color=\"accent\">\r\n    <mat-icon>{{'clear'}}</mat-icon>Reset</button>\r\n</ng-template>\r\n<ng-template #contentUpdateProject>\r\n  <button type=\"submit\" mat-button mat-raised-button class=\"mr-2\" value=\"creatingProjectForm.Project_ID\" color=\"primary\">\r\n    <mat-icon>{{'add'}}</mat-icon>Update Project</button>\r\n  <button type=\"button\" mat-button mat-raised-button value=\"creatingProjectForm.Project_ID\" (click)=\"cancelUpdateProject();CreatingProjectForm.resetForm()\"\r\n    color=\"warn\">\r\n    <mat-icon>{{'cancel'}}</mat-icon>Cancel</button>\r\n</ng-template>\r\n\r\n<div class=\"example-container col-md-4 offset-md-4 mt-4\">\r\n  <form #CreatingProjectForm=\"ngForm\" (ngSubmit)=\"OnProjectFormSubmit(CreatingProjectForm)\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Project Name\" required name=\"ProjectName\" [(ngModel)]=\"creatingProjectForm.ProjectName\" #ProjectName=\"ngModel\"\r\n      />\r\n      <input type=\"hidden\" [(ngModel)]=\"creatingProjectForm.Project_ID\" name=\"Project_ID\">\r\n      <mat-error>\r\n        Project Name is\r\n        <strong>required</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <div class=\"example-full-width\">\r\n      <mat-checkbox [(ngModel)]=\"disabled\" (change)=\"onSetDateChange($event)\" [ngModelOptions]=\"{standalone: true}\">Set Start and End Date</mat-checkbox>\r\n    </div>\r\n    <mat-form-field class=\"example-full-width col-md-6\">\r\n      <input (dateChange)=\"CompareDates()\" [disabled]=\"!(disabled)\"  matInput [matDatepicker]=\"picker1\"\r\n        name=\"StartDate\" placeholder=\"Start Date\" [(ngModel)]=\"creatingProjectForm.StartDate\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker1></mat-datepicker>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width col-md-6\">\r\n      <input (dateChange)=\"CompareDates()\" [disabled]=\"!(disabled)\"  matInput [matDatepicker]=\"picker2\"\r\n        name=\"EndDate\" placeholder=\"End Date\" [(ngModel)]=\"creatingProjectForm.EndDate\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker2></mat-datepicker>\r\n      <div class=\"customMatError mat-form-field-subscript-wrapper\" *ngIf=\"isProjectEndDateLess\">\r\n        End Date is lesser than start date\r\n      </div>\r\n    </mat-form-field>\r\n    <div>\r\n      <label style=\"color:rgba(0, 0, 0, 0.53);\">Priority</label>\r\n      <mat-slider placeholder=\"Priority\" style=\"width:90%;\" [max]=\"30\" [min]=\"0\" [step]=\"1\" [thumbLabel]=\"true\" [tickInterval]=\"1\"\r\n        [vertical]=\"false\" [(ngModel)]=\"creatingProjectForm.Priority\" name=\"Priority\">\r\n      </mat-slider>\r\n      <span class=\"text-small\">30</span>\r\n    </div>\r\n    <mat-form-field class=\"example-full-width col-md-9\">\r\n      <input matInput placeholder=\"Manager\" [disabled]=\"true\" name=\"ManagerName\" [(ngModel)]=\"creatingProjectForm.ManagerName\"\r\n        value=\"{{SelectedManagerName}}\" />\r\n      <input type=\"hidden\" [(ngModel)]=\"creatingProjectForm.UserId\" name=\"UserId\"  />\r\n    </mat-form-field>\r\n    <button type=\"button\" mat-button mat-raised-button (click)=\"openDialog()\" class=\"mr-2\" value=\"creatingProjectForm.Project_ID\"\r\n      color=\"primary\">\r\n      <mat-icon>{{'search'}}</mat-icon>\r\n    </button>\r\n\r\n    <div *ngIf=\"creatingProjectForm.IsCreate;then contentCreateProject else contentUpdateProject\" color=\"primary\">\r\n    </div>\r\n  </form>\r\n</div>\r\n<hr/>\r\n<div class=\"col-md-8 offset-md-2 mt-4\">\r\n  <mat-form-field class=\"col-md-3\">\r\n    <input matInput placeholder=\"Search\" name=\"projectSearchValue\" [(ngModel)]=\"projectSearchValue\">\r\n  </mat-form-field>\r\n  <label>Sort By</label>\r\n  <button type=\"button\" mat-button mat-raised-button class=\"mr-2 ml-2\" value=\"\" (click)=\"sort('StartDate')\" color=\"primary\">\r\n    StartDate</button>\r\n  <button type=\"button\" mat-button mat-raised-button class=\"mr-2\" value=\"\" (click)=\"sort('EndDate')\" color=\"primary\">\r\n    EndDate</button>\r\n  <button type=\"button\" mat-button mat-raised-button class=\"mr-2\" value=\"\" (click)=\"sort('Priority')\" color=\"primary\">\r\n    Priority</button>\r\n  <button type=\"button\" mat-button mat-raised-button class=\"mr-2\" value=\"\" (click)=\"sort('Completed')\" color=\"primary\">\r\n    Completed</button>\r\n</div>\r\n<div class=\"col-md-8 offset-md-2 mt-4\">\r\n  <ul class=\"list-group list-group-flush\">\r\n    <li *ngFor=\"let projectitem of projectDataSource | FilterPipe: projectSearchValue; let i=index\" class=\"list-group-item\">\r\n      <div class=\"row\">\r\n        <div class=\"col col-md-8\">\r\n          <p><strong>Project: </strong> {{ projectitem.ProjectName }} </p>\r\n          <div class=\"row\">\r\n            <div class=\"col col-md-6\">\r\n              <p><strong>No of Tasks: </strong><span class=\"badge badge-info\"> {{ projectitem.TotalTaskCount }}</span></p>\r\n              <p><strong>Start Date: </strong> {{ projectitem.StartDate| date: 'dd/MM/yyyy' }}</p>\r\n            </div>\r\n            <div class=\"col col-md-6\">\r\n              <p>\r\n                <strong>Completed: </strong>\r\n                <span class=\"badge badge-info\">{{ projectitem.CompletedTaskCount }}</span>\r\n              </p>\r\n              <p> <strong>End Date: </strong> {{ projectitem.EndDate | date: 'dd/MM/yyyy'}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col col-md-2\">\r\n          <p> <strong>Priority: </strong>\r\n            <span class=\"badge badge-info\">{{ projectitem.Priority }}</span></p>\r\n        </div>\r\n        <div class=\"col col-md-2\">\r\n          <div class=\"row\">\r\n            <div class=\"col col-12\">\r\n              <button mat-raised-button color=\"primary\" (click)=\"editProject(projectitem,projectitem.lstUsers[0])\">\r\n                <mat-icon>create</mat-icon> Update</button>\r\n              <br/>\r\n              <br/>\r\n              <button mat-raised-button color=\"warn\" (click)=\"deleteProject(projectitem)\">\r\n                <mat-icon item-width=\"20px\">delete</mat-icon> Suspend</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </li>\r\n\r\n    <li *ngIf=\"(projectDataSource| FilterPipe:projectSearchValue).length==0\" class=\"list-group-item\">\r\n      <div class=\"alert alert-info\">\r\n        There are no items to display.\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/project-manager/project-manager.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/project-manager/project-manager.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectManagerComponent", function() { return ProjectManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var _project_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project-service.service */ "./src/app/project-service.service.ts");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Project */ "./src/app/Project.ts");
/* harmony import */ var _user_search_user_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-search/user-search.component */ "./src/app/user-search/user-search.component.ts");







var ProjectManagerComponent = /** @class */ (function () {
    function ProjectManagerComponent(projectService, userService, dialog) {
        this.projectService = projectService;
        this.userService = userService;
        this.dialog = dialog;
        this.projectDataSource = [];
        this.disabled = false;
        this.isProjectEndDateLess = false;
        this.projStartDateSort = true;
        this.projEndDateSort = true;
        this.projPrioritySort = true;
        this.projCompletedSort = true;
    }
    ProjectManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit");
        this.creatingProjectForm = new _Project__WEBPACK_IMPORTED_MODULE_5__["Project"]();
        this.creatingProjectForm.IsCreate = true;
        this.projectService.getProjects().subscribe(function (a) { return _this.projectDataSource = a; });
        this.projectSortElement = 'ProjectName';
        this.disabled = false;
        console.log(this.projectDataSource);
    };
    ProjectManagerComponent.prototype.cancelUpdateProject = function () {
        this.creatingProjectForm = new _Project__WEBPACK_IMPORTED_MODULE_5__["Project"]();
        this.creatingProjectForm.IsCreate = true;
        this.disabled = false;
    };
    ProjectManagerComponent.prototype.onSetDateChange = function (event) {
        console.log(event.checked);
        if (event.checked) {
            console.log(new Date());
            console.log(new Date().setDate(new Date().getDate() + 1));
            //this.selectedStartDate = new Date();
            this.creatingProjectForm.StartDate = new Date();
            var enddate = new Date();
            enddate.setDate(enddate.getDate() + 1);
            this.creatingProjectForm.EndDate = enddate;
        }
        else {
            this.creatingProjectForm.StartDate = null;
            this.creatingProjectForm.EndDate = null;
        }
    };
    ProjectManagerComponent.prototype.OnProjectFormSubmit = function (creatingProjectForm) {
        var _this = this;
        console.log(creatingProjectForm.value);
        this.CompareDates();
        if (creatingProjectForm.valid && !this.isProjectEndDateLess) {
            this.isProjectEndDateLess = false;
            var localProject = new _Project__WEBPACK_IMPORTED_MODULE_5__["Project"]();
            localProject = creatingProjectForm.value;
            if (localProject.Project_ID != undefined && localProject.Project_ID > 0) {
                this.projectService.updateProject(creatingProjectForm.value, localProject.Project_ID).subscribe(function (g) { return _this.projectService.getProjects().subscribe(function (a) { return _this.projectDataSource = a; }); });
                this.creatingProjectForm = new _Project__WEBPACK_IMPORTED_MODULE_5__["Project"]();
                this.creatingProjectForm.IsCreate = true;
                console.log("project updated");
                creatingProjectForm.resetForm();
                this.disabled = false;
            }
            else {
                this.projectService.addProject(creatingProjectForm.value).subscribe(function (g) { return _this.projectService.getProjects().subscribe(function (a) { return _this.projectDataSource = a; }); });
                this.creatingProjectForm = new _Project__WEBPACK_IMPORTED_MODULE_5__["Project"]();
                this.creatingProjectForm.IsCreate = true;
                console.log("project added");
                creatingProjectForm.resetForm();
                this.disabled = false;
            }
        }
    };
    ProjectManagerComponent.prototype.sort = function (sortElement) {
        var _this = this;
        console.log('calling sort' + sortElement);
        this.projectSortElement = sortElement;
        if (sortElement == 'StartDate') {
            if (this.projStartDateSort) {
                this.projectDataSource = this.projectDataSource.sort(function (a, b) { return _this.getTime(a.StartDate) - _this.getTime(b.StartDate); });
            }
            else {
                this.projectDataSource = this.projectDataSource.sort(function (a, b) { return _this.getTime(a.StartDate) - _this.getTime(b.StartDate); }).reverse();
            }
            this.projStartDateSort = !this.projStartDateSort;
        }
        else if (sortElement == 'EndDate') {
            if (this.projEndDateSort) {
                this.projectDataSource = this.projectDataSource.sort(function (a, b) { return _this.getTime(a.EndDate) - _this.getTime(b.EndDate); });
            }
            else {
                this.projectDataSource = this.projectDataSource.sort(function (a, b) { return _this.getTime(a.EndDate) - _this.getTime(b.EndDate); }).reverse();
            }
            this.projEndDateSort = !this.projEndDateSort;
        }
        else if (sortElement == 'Priority') {
            if (this.projPrioritySort) {
                this.projectDataSource = this.projectDataSource.sort(function (a, b) { return a.Priority - b.Priority; });
            }
            else {
                this.projectDataSource = this.projectDataSource.sort(function (a, b) { return a.Priority - b.Priority; }).reverse();
            }
            this.projPrioritySort = !this.projPrioritySort;
        }
        else {
            if (this.projCompletedSort) {
                this.projectDataSource = this.projectDataSource.sort(function (a, b) { return a.CompletedTaskCount - b.CompletedTaskCount; });
            }
            else {
                this.projectDataSource = this.projectDataSource.sort(function (a, b) { return a.CompletedTaskCount - b.CompletedTaskCount; }).reverse();
            }
            this.projCompletedSort = !this.projCompletedSort;
        }
    };
    ProjectManagerComponent.prototype.getTime = function (date) {
        return date != null ? new Date(date).getTime() : 0;
    };
    ProjectManagerComponent.prototype.editProject = function (project, user) {
        // this.createUserForm = new User();
        console.log(user);
        var localProject = new _Project__WEBPACK_IMPORTED_MODULE_5__["Project"]();
        localProject.Project_ID = project.Project_ID;
        localProject.IsCreate = false;
        localProject.EndDate = project.EndDate;
        localProject.StartDate = project.StartDate;
        localProject.UserId = project.UserId;
        localProject.Priority = project.Priority;
        localProject.ProjectName = project.ProjectName;
        if (user != undefined && user != null) {
            localProject.ManagerName = user.FirstName + " " + user.LastName;
            localProject.UserId = user.User_ID;
        }
        if (localProject.StartDate != null && localProject.StartDate != undefined) {
            this.disabled = true;
        }
        console.log(localProject);
        this.creatingProjectForm = localProject;
    };
    ProjectManagerComponent.prototype.CompareDates = function () {
        console.log(this.creatingProjectForm.StartDate);
        console.log(this.creatingProjectForm.EndDate);
        if (this.creatingProjectForm.StartDate != null && this.creatingProjectForm.EndDate != null) {
            if (new Date(this.creatingProjectForm.EndDate) < new Date(this.creatingProjectForm.StartDate)) {
                console.log('isEndDateLess');
                this.isProjectEndDateLess = true;
            }
            else
                this.isProjectEndDateLess = false;
        }
    };
    ProjectManagerComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_6__["UserSearchComponent"], {
            width: '400px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            _this.dialogDataSelected = result;
            _this.SelectedManagerName = _this.dialogDataSelected.FirstName + " " + _this.dialogDataSelected.LastName;
            _this.creatingProjectForm.UserId = _this.dialogDataSelected.User_ID;
        });
    };
    ProjectManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-manager',
            template: __webpack_require__(/*! ./project-manager.component.html */ "./src/app/project-manager/project-manager.component.html"),
            styles: [__webpack_require__(/*! ./project-manager.component.css */ "./src/app/project-manager/project-manager.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_project_service_service__WEBPACK_IMPORTED_MODULE_4__["ProjectServiceService"], _user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ProjectManagerComponent);
    return ProjectManagerComponent;
}());



/***/ }),

/***/ "./src/app/project-search/project-search.component.css":
/*!*************************************************************!*\
  !*** ./src/app/project-search/project-search.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 350px;\r\n  font-family: 'Quattrocento Sans',sans-serif !important;\r\n}\r\n\r\n.example-header {\r\n  min-height: 65px;\r\n  padding: 5px 18px 0;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 18px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1zZWFyY2gvcHJvamVjdC1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLHVEQUF1RDtDQUN4RDs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtDQUNiOztBQUVDO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtHQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3Qtc2VhcmNoL3Byb2plY3Qtc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDM1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVhdHRyb2NlbnRvIFNhbnMnLHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyIHtcclxuICBtaW4taGVpZ2h0OiA2NXB4O1xyXG4gIHBhZGRpbmc6IDVweCAxOHB4IDA7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiAgXHJcbiAgLm1hdC10YWJsZSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/project-search/project-search.component.html":
/*!**************************************************************!*\
  !*** ./src/app/project-search/project-search.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <mat-dialog-content>\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter Projects\">\n    </mat-form-field>\n    <mat-table #table [dataSource]=\"dataSource\">\n      <ng-container matColumnDef=\"Project_ID\">\n        <mat-header-cell *matHeaderCellDef> Project_ID </mat-header-cell>\n        <mat-cell *matCellDef=\"let Project\"> {{Project.Project_ID}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"ProjectName\">\n        <mat-header-cell *matHeaderCellDef> ProjectName </mat-header-cell>\n        <mat-cell *matCellDef=\"let Project\"> {{Project.ProjectName}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"Action\">\n        <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n        <mat-cell *matCellDef=\"let Project\">\n          <div>\n            <button mat-button mat-raised-button class=\"mr-2\" value=\"Project.Project_ID\" [mat-dialog-close]=\"Project\" color=\"primary\">\n              Select</button>\n          </div>\n        </mat-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator [pageSizeOptions]=\"[5]\" showFirstLastButtons></mat-paginator>\n  </mat-dialog-content>\n</div>"

/***/ }),

/***/ "./src/app/project-search/project-search.component.ts":
/*!************************************************************!*\
  !*** ./src/app/project-search/project-search.component.ts ***!
  \************************************************************/
/*! exports provided: ProjectSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectSearchComponent", function() { return ProjectSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _project_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project-service.service */ "./src/app/project-service.service.ts");
/* harmony import */ var _ProjectDialogData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ProjectDialogData */ "./src/app/ProjectDialogData.ts");





var ProjectSearchComponent = /** @class */ (function () {
    function ProjectSearchComponent(projectService, dialogRef, data) {
        this.projectService = projectService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = ['Project_ID', 'ProjectName', 'Action'];
    }
    ProjectSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getProjects().subscribe(function (a) { return _this.setData(a); });
    };
    ProjectSearchComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ProjectSearchComponent.prototype.setData = function (data) {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
        this.dataSource.paginator = this.paginator;
    };
    ProjectSearchComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ProjectSearchComponent.prototype, "paginator", void 0);
    ProjectSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-search',
            template: __webpack_require__(/*! ./project-search.component.html */ "./src/app/project-search/project-search.component.html"),
            styles: [__webpack_require__(/*! ./project-search.component.css */ "./src/app/project-search/project-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_project_service_service__WEBPACK_IMPORTED_MODULE_3__["ProjectServiceService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _ProjectDialogData__WEBPACK_IMPORTED_MODULE_4__["ProjectDialodData"]])
    ], ProjectSearchComponent);
    return ProjectSearchComponent;
}());



/***/ }),

/***/ "./src/app/project-service.service.ts":
/*!********************************************!*\
  !*** ./src/app/project-service.service.ts ***!
  \********************************************/
/*! exports provided: ProjectServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectServiceService", function() { return ProjectServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ProjectServiceService = /** @class */ (function () {
    function ProjectServiceService(http) {
        this.http = http;
        this.ProjectsUrl = 'http://localhost/ProjectManagerAPI/api/Project';
        this.ProjectByProjectidUrl = 'http://localhost/ProjectManagerAPI/api/Project/';
        this.CreateProjectUrl = 'http://localhost/ProjectManagerAPI/api/Project';
        this.DeleteProjectUrl = 'http://localhost/ProjectManagerAPI/api/Project/';
        this.UpdateProjectUrl = 'http://localhost/ProjectManagerAPI/api/Project/';
    }
    ProjectServiceService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            console.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    ProjectServiceService.prototype.getProjects = function () {
        console.log('calling getProjects...');
        return this.http.get(this.ProjectsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getProjects', [])));
    };
    ProjectServiceService.prototype.addProject = function (project) {
        console.log('calling addProject...');
        return this.http.post(this.CreateProjectUrl, project).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addProject', [])));
    };
    ProjectServiceService.prototype.updateProject = function (project, Project_ID) {
        console.log('calling updateProject...');
        return this.http.put(this.UpdateProjectUrl + Project_ID, project).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateProject', [])));
    };
    ProjectServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProjectServiceService);
    return ProjectServiceService;
}());



/***/ }),

/***/ "./src/app/task-manager-home/task-manager-home.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/task-manager-home/task-manager-home.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .customMatError{\r\n    position: absolute;\r\n    top: 32px;\r\n    font-size: 11px;\r\n    color: red;\r\n  }\r\n\r\n  .example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 350px;\r\n    font-family: 'Quattrocento Sans',sans-serif !important;\r\n  }\r\n\r\n  .example-header {\r\n    min-height: 65px;\r\n    padding: 5px 18px 0;\r\n  }\r\n\r\n  .mat-form-field {\r\n    font-size: 18px;\r\n    width: 100%;\r\n  }\r\n\r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n\r\n  .passwordResetDiv{\r\n    width: 300px !important;\r\n    margin:0 auto;\r\n    margin-top:100px !important;\r\n    padding-bottom: 50px !important;\r\n\r\n  }\r\n\r\n  .mat-cell:nth-child(4),\r\n  .mat-header-cell:nth-child(4)\r\n  {\r\n  flex: 0 0 9%;\r\n  }\r\n\r\n  .mat-cell:nth-child(5),\r\n  .mat-header-cell:nth-child(5)\r\n  {\r\n  flex: 0 0 9%;\r\n  }\r\n\r\n  .mat-cell:nth-child(6),\r\n  .mat-header-cell:nth-child(6)\r\n  {\r\n  flex: 0 0 9%;\r\n  }\r\n\r\n  .mat-cell:nth-child(7),\r\n  .mat-header-cell:nth-child(7)\r\n  {\r\n  flex: 0 0 10%;\r\n  }\r\n\r\n  .mat-elevation-z2{\r\n    box-shadow: none !important;\r\n    padding-top:25px;\r\n  }\r\n\r\n  .mat-tab-label-active{\r\n    background-color: rgba(223, 197, 233, 0.397) !important;\r\n    \r\n    }\r\n\r\n  .mat-header-row {\r\n    background-color:rgba(128, 128, 128, 0.18)!important;\r\n    \r\n    }\r\n\r\n  .fontFamily{\r\n      font-family: 'Quattrocento Sans',sans-serif !important;\r\n    }\r\n\r\n  /* // mat-row:nth-child(even){\r\n    //   background-color:red;\r\n    //   } */\r\n\r\n  mat-row:nth-child(odd){\r\n      background-color:rgb(219, 222, 241);\r\n      }\r\n\r\n  .mat-header-cell{\r\n      font-size: 15px;\r\n      color: #000;\r\n      font-weight: bold;\r\n      }\r\n\r\n  .example-small-box, .example-large-box {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        margin: 16px;\r\n        padding: 16px;\r\n        border-radius: 8px;\r\n      }\r\n\r\n  .example-small-box {\r\n        height: 100px;\r\n        width: 100px;\r\n      }\r\n\r\n  .example-large-box {\r\n        height: 300px;\r\n        width: 300px;\r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay1tYW5hZ2VyLWhvbWUvdGFzay1tYW5hZ2VyLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFdBQVc7R0FDWjs7RUFFRDtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHVEQUF1RDtHQUN4RDs7RUFFRDtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7R0FDckI7O0VBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtHQUNiOztFQUNEO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtHQUNuQjs7RUFFRDtJQUNFLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLGdDQUFnQzs7R0FFakM7O0VBQ0Q7OztFQUdBLGFBQWE7R0FDWjs7RUFFRDs7O0VBR0EsYUFBYTtHQUNaOztFQUNEOzs7RUFHQSxhQUFhO0dBQ1o7O0VBQ0Q7OztFQUdBLGNBQWM7R0FDYjs7RUFFRDtJQUNFLDRCQUE0QjtJQUM1QixpQkFBaUI7R0FDbEI7O0VBQ0Q7SUFDRSx3REFBd0Q7O0tBRXZEOztFQUNEO0lBQ0EscURBQXFEOztLQUVwRDs7RUFFRDtNQUNFLHVEQUF1RDtLQUN4RDs7RUFDRDs7YUFFUzs7RUFFYjtNQUNNLG9DQUFvQztPQUNuQzs7RUFFRDtNQUNBLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osa0JBQWtCO09BQ2pCOztFQUVEO1FBQ0UsY0FBYztRQUNkLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsYUFBYTtRQUNiLGNBQWM7UUFDZCxtQkFBbUI7T0FDcEI7O0VBRUQ7UUFDRSxjQUFjO1FBQ2QsYUFBYTtPQUNkOztFQUVEO1FBQ0UsY0FBYztRQUNkLGFBQWE7T0FDZCIsImZpbGUiOiJzcmMvYXBwL3Rhc2stbWFuYWdlci1ob21lL3Rhc2stbWFuYWdlci1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5jdXN0b21NYXRFcnJvcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzJweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4td2lkdGg6IDM1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWF0dHJvY2VudG8gU2Fucycsc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXIge1xyXG4gICAgbWluLWhlaWdodDogNjVweDtcclxuICAgIHBhZGRpbmc6IDVweCAxOHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLm1hdC10YWJsZSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuXHJcbiAgLnBhc3N3b3JkUmVzZXREaXZ7XHJcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOjEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweCAhaW1wb3J0YW50O1xyXG5cclxuICB9XHJcbiAgLm1hdC1jZWxsOm50aC1jaGlsZCg0KSxcclxuICAubWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCg0KVxyXG4gIHtcclxuICBmbGV4OiAwIDAgOSU7XHJcbiAgfVxyXG5cclxuICAubWF0LWNlbGw6bnRoLWNoaWxkKDUpLFxyXG4gIC5tYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDUpXHJcbiAge1xyXG4gIGZsZXg6IDAgMCA5JTtcclxuICB9XHJcbiAgLm1hdC1jZWxsOm50aC1jaGlsZCg2KSxcclxuICAubWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCg2KVxyXG4gIHtcclxuICBmbGV4OiAwIDAgOSU7XHJcbiAgfVxyXG4gIC5tYXQtY2VsbDpudGgtY2hpbGQoNyksXHJcbiAgLm1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNylcclxuICB7XHJcbiAgZmxleDogMCAwIDEwJTtcclxuICB9XHJcblxyXG4gIC5tYXQtZWxldmF0aW9uLXoye1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6MjVweDtcclxuICB9XHJcbiAgLm1hdC10YWItbGFiZWwtYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDE5NywgMjMzLCAwLjM5NykgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLm1hdC1oZWFkZXItcm93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE4KSFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZvbnRGYW1pbHl7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnUXVhdHRyb2NlbnRvIFNhbnMnLHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC8qIC8vIG1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxuICAgIC8vICAgfSAqL1xyXG5cclxubWF0LXJvdzpudGgtY2hpbGQob2RkKXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjE5LCAyMjIsIDI0MSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZXhhbXBsZS1zbWFsbC1ib3gsIC5leGFtcGxlLWxhcmdlLWJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTZweDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmV4YW1wbGUtc21hbGwtYm94IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmV4YW1wbGUtbGFyZ2UtYm94IHtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/task-manager-home/task-manager-home.component.html":
/*!********************************************************************!*\
  !*** ./src/app/task-manager-home/task-manager-home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content>\r\n  <button type=\"submit\" mat-button mat-raised-button class=\"mr-2\" value=\"createTask.TaskId\" color=\"primary\">\r\n    <mat-icon>{{'add'}}</mat-icon>Add Task</button>\r\n  <button type=\"button\" mat-button mat-raised-button value=\"createTask.TaskId\" (click)=\"Reset();CreateTask.resetForm()\" color=\"accent\">\r\n    <mat-icon>{{'clear'}}</mat-icon>Reset</button>\r\n</ng-template>\r\n<ng-template #other_content>\r\n  <button type=\"submit\" mat-button mat-raised-button class=\"mr-2\" value=\"createTask.TaskId\" color=\"primary\">\r\n    <mat-icon>{{'add'}}</mat-icon>Update Task</button>\r\n  <button type=\"button\" mat-button mat-raised-button value=\"createTask.TaskId\" (click)=\"Reset();CreateTask.resetForm()\" color=\"warn\">\r\n    <mat-icon>{{'cancel'}}</mat-icon>Cancel</button>\r\n</ng-template>\r\n<div class=\"example-container\">\r\n  <mat-tab-group class=\"\" [(selectedIndex)]=\"selectedTab\" (selectedTabChange)=\"onTabClick($event)\">\r\n    <mat-tab label=\"Add Project\">\r\n      <app-project-manager></app-project-manager>\r\n    </mat-tab>\r\n    <mat-tab label=\"Add Task\">\r\n      <div class=\"col-md-4 offset-md-4 mt-4\">\r\n        <form #CreateTask=\"ngForm\" (ngSubmit)=\"onSubmit(CreateTask)\">\r\n          <mat-form-field class=\"example-full-width col-md-9 pl-0\">\r\n            <input required matInput #ProjectName=\"ngModel\" placeholder=\"Project\" [disabled]=\"true\" name=\"ProjectName\" [(ngModel)]=\"createTask.ProjectName\"\r\n              value=\"{{SelectedProjectName}}\" />\r\n            <input type=\"hidden\" [(ngModel)]=\"createTask.Project_ID\" name=\"Project_ID\" />\r\n            <div class=\"customMatError\" *ngIf=\"isProjectEmpty\">\r\n              Project is\r\n              <strong>required</strong>\r\n            </div>\r\n          </mat-form-field>\r\n          <button [disabled]=\"!createTask.IsCreate\" type=\"button\" mat-button mat-raised-button (click)=\"openProjectDialog()\" class=\"mr-2\" value=\"createTask.Project_ID\"\r\n            color=\"primary\">\r\n            <mat-icon>{{'search'}}</mat-icon>\r\n          </button>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input required matInput #Task=\"ngModel\" placeholder=\"Task Name\" name=\"Task\" [(ngModel)]=\"createTask.Task\">\r\n            <input type=\"hidden\" [(ngModel)]=\"createTask.TaskId\" name=\"TaskId\">\r\n            <mat-error>\r\n              Task Name is\r\n              <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <div class=\"example-full-width\">\r\n            <mat-checkbox [disabled]=\"!(createTask.IsCreate)\" (change)=\"onSetParentChange($event)\" [(ngModel)]=\"createTask.IsParentTask\" name=\"IsParentTask\">Parent Task</mat-checkbox>\r\n          </div>\r\n          <div>\r\n            <label style=\"color:rgba(0, 0, 0, 0.53);\">Priority</label>\r\n            <mat-slider [disabled]=\"createTask.IsParentTask\" placeholder=\"Priority\" style=\"width:90%;\" [max]=\"30\" [min]=\"0\" [step]=\"1\"\r\n              [thumbLabel]=\"true\" [tickInterval]=\"1\" [vertical]=\"false\" [(ngModel)]=\"createTask.Priority\" name=\"Priority\">\r\n            </mat-slider>\r\n            <span class=\"text-small\">30</span>\r\n          </div>\r\n          <mat-form-field class=\"example-full-width col-md-9 pl-0\">\r\n            <input matInput placeholder=\"Parent Task\" [disabled]=\"true\" name=\"ParentTaskName\" [(ngModel)]=\"createTask.ParentTaskName\"\r\n              value=\"{{SelectedParentName}}\" />\r\n            <input type=\"hidden\" [(ngModel)]=\"createTask.Parent_ID\" name=\"Parent_ID\" />\r\n          </mat-form-field>\r\n          <button [disabled]=\"createTask.IsParentTask\" type=\"button\" mat-button mat-raised-button (click)=\"openParentDialog()\" class=\"mr-2\"\r\n            value=\"createTask.Parent_ID\" color=\"primary\">\r\n            <mat-icon>{{'search'}}</mat-icon>\r\n          </button>\r\n          <div>\r\n            <mat-form-field class=\"example-full-width col-md-6 pl-0\">\r\n              <input (dateChange)=\"CompareDate()\" [disabled]=\"createTask.IsParentTask\" matInput [matDatepicker]=\"picker2\" name=\"StartDate\"\r\n                placeholder=\"Start Date\" [(ngModel)]=\"createTask.StartDate\" />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker2></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width col-md-6\">\r\n              <input (dateChange)=\"CompareDate()\" [disabled]=\"createTask.IsParentTask\" matInput [matDatepicker]=\"picker3\" name=\"EndDate\"\r\n                placeholder=\"End Date\" [(ngModel)]=\"createTask.EndDate\" />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker3></mat-datepicker>\r\n              <div class=\"customMatError mat-form-field-subscript-wrapper\" *ngIf=\"isEndDateLess\">\r\n                End Date is lesser than start date\r\n              </div>\r\n            </mat-form-field>\r\n          </div>\r\n          <mat-form-field class=\"example-full-width col-md-9 pl-0\">\r\n            <input matInput placeholder=\"User\" [disabled]=\"true\" name=\"TaskUserName\" [(ngModel)]=\"createTask.TaskUserName\"\r\n              value=\"{{SelectedUserName}}\" />\r\n            <input type=\"hidden\" [(ngModel)]=\"createTask.UserId\" name=\"UserId\" />\r\n          </mat-form-field>\r\n          <button [disabled]=\"createTask.IsParentTask || !(createTask.IsCreate)\" type=\"button\" mat-button mat-raised-button (click)=\"openUserDialog()\" class=\"mr-2\"\r\n            value=\"createTask.UserId\" color=\"primary\">\r\n            <mat-icon>{{'search'}}</mat-icon>\r\n          </button>\r\n          <div *ngIf=\"createTask.IsCreate;then content else other_content\" color=\"primary\">\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"View Task\">\r\n\r\n      <div class=\"col mt-3\">\r\n        <mat-form-field class=\"example-full-width col-md-4 pl-0\">\r\n          <input matInput placeholder=\"Project\" [disabled]=\"true\" name=\"CustomSearch\" [(ngModel)]=\"CustomSearch\" value=\"{{SelectedProjectName}}\"\r\n          />\r\n        </mat-form-field>\r\n        <button type=\"button\" mat-button mat-raised-button (click)=\"openProjectDialog()\" class=\"mr-2\" color=\"primary\">\r\n          <mat-icon>{{'search'}}</mat-icon>\r\n        </button>\r\n        <label>Sort By</label>\r\n        <button type=\"button\" mat-button mat-raised-button class=\"mr-2 ml-2\" value=\"\" (click)=\"sort('StartDate')\" color=\"primary\">\r\n          Start Date</button>\r\n        <button type=\"button\" mat-button mat-raised-button class=\"mr-2\" value=\"\" (click)=\"sort('EndDate')\" color=\"primary\">\r\n          End Date</button>\r\n        <button type=\"button\" mat-button mat-raised-button class=\"mr-2\" value=\"\" (click)=\"sort('Priority')\" color=\"primary\">\r\n          Priority</button>\r\n        <button type=\"button\" mat-button mat-raised-button class=\"mr-2\" value=\"\" (click)=\"sort('Completed')\" color=\"primary\">\r\n          Completed</button>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 mt-4\">\r\n        <ul class=\"list-group list-group-flush\">\r\n          <li *ngFor=\"let taskitem of TaskListSource | FilterPipe: CustomSearch; let i=index\" class=\"list-group-item\">\r\n            <div class=\"row\">\r\n              <div class=\"row col-md-8\">\r\n               <div class=\"col-md-2\">\r\n                  <strong> Task</strong>\r\n                  <br/> {{ taskitem.Task }} </div>\r\n                <div class=\"col-md-2\">\r\n                  <strong> Parent</strong>\r\n                  <br/> {{ taskitem.ParentDTOName }}</div>\r\n                <div class=\"col-md-2\">\r\n                  <strong> Priority</strong>\r\n                  <br/> {{ taskitem.Priority }}</div>\r\n                <div class=\"col-md-2\">\r\n                  <strong> Start</strong>\r\n                  <br/> {{ taskitem.StartDate| date: 'dd/MM/yyyy' }}</div>\r\n                <div class=\"col-md-2\">\r\n                  <strong> End</strong>\r\n                  <br/> {{ taskitem.EndDate| date: 'dd/MM/yyyy' }}</div>\r\n              </div>\r\n              <div class=\"col col-md-4\">\r\n                <div class=\"row\" *ngIf=\"!taskitem.IsTaskEnded\">\r\n                  <button mat-raised-button color=\"primary\" class=\"col-md-3\" (click)=\"editTask(taskitem,taskitem.ParentTask,taskitem.Project,taskitem.Users)\">\r\n                    <mat-icon>edit</mat-icon> Edit</button>\r\n                  <button mat-raised-button color=\"warn\" class=\"col-md-4 ml-1\" (click)=\"endTask(taskitem.TaskId)\">\r\n                    <mat-icon item-width=\"15px\">cancel</mat-icon> End Task</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </li>\r\n\r\n          <li *ngIf=\"(TaskListSource | FilterPipe:CustomSearch).length==0\" class=\"list-group-item\">\r\n            <div class=\"alert alert-info\">\r\n              There are no items to display.\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Add User\">\r\n      <app-user-manager></app-user-manager>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/task-manager-home/task-manager-home.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/task-manager-home/task-manager-home.component.ts ***!
  \******************************************************************/
/*! exports provided: TaskManagerHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskManagerHomeComponent", function() { return TaskManagerHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Task */ "./src/app/Task.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ErrorStateMatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ErrorStateMatcher */ "./src/app/ErrorStateMatcher.ts");
/* harmony import */ var _task_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../task-service.service */ "./src/app/task-service.service.ts");
/* harmony import */ var _project_search_project_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../project-search/project-search.component */ "./src/app/project-search/project-search.component.ts");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Project */ "./src/app/Project.ts");
/* harmony import */ var _parenttask_search_parenttask_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../parenttask-search/parenttask-search.component */ "./src/app/parenttask-search/parenttask-search.component.ts");
/* harmony import */ var _user_search_user_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../user-search/user-search.component */ "./src/app/user-search/user-search.component.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../User */ "./src/app/User.ts");
/* harmony import */ var _user_manager_user_manager_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../user-manager/user-manager.component */ "./src/app/user-manager/user-manager.component.ts");
/* harmony import */ var _project_manager_project_manager_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../project-manager/project-manager.component */ "./src/app/project-manager/project-manager.component.ts");














var TaskManagerHomeComponent = /** @class */ (function () {
    function TaskManagerHomeComponent(taskService, dialog) {
        this.taskService = taskService;
        this.dialog = dialog;
        this.displayedColumns = ['Task', 'ParentTask', 'Priority', 'Start Date', 'End Date', 'Action'];
        this.isProjectEmpty = false;
        this.isEndDateLess = false;
        this.TaskListSource = [];
        this.taskStartDateSort = true;
        this.taskEndDateSort = true;
        this.taskPrioritySort = true;
        this.taskCompletedSort = true;
        this.TaskFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
        ]);
        this.PriorityFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
        ]);
        this.StartFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
        ]);
        this.EndFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
        ]);
        this.matcher = new _ErrorStateMatcher__WEBPACK_IMPORTED_MODULE_5__["MyErrorStateMatcher"]();
        this.createTask = new _Task__WEBPACK_IMPORTED_MODULE_3__["Task"]();
        this.createTask.IsCreate = true;
        this.selectedTab = 0;
        this.searchTask = new _Task__WEBPACK_IMPORTED_MODULE_3__["SearchTask"]();
    }
    TaskManagerHomeComponent.prototype.ngAfterViewInit = function () {
        this.userManagerComp.createUserForm = new _User__WEBPACK_IMPORTED_MODULE_11__["User"]();
        this.userManagerComp.createUserForm.IsCreate = true;
        this.projManagerComp.creatingProjectForm = new _Project__WEBPACK_IMPORTED_MODULE_8__["Project"]();
        this.projManagerComp.creatingProjectForm.IsCreate = true;
    };
    TaskManagerHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.taskService.getParents().subscribe(a => this.parentTasks = a);
        this.taskService.getTasks().subscribe(function (a) { return _this.setData(a); });
    };
    TaskManagerHomeComponent.prototype.sort = function (sortElement) {
        var _this = this;
        console.log('calling sort' + sortElement);
        //this.projectSortElement = sortElement;
        if (sortElement == 'StartDate') {
            if (this.taskStartDateSort) {
                this.TaskListSource = this.TaskListSource.sort(function (a, b) { return _this.getTime(a.StartDate) - _this.getTime(b.StartDate); });
            }
            else {
                this.TaskListSource = this.TaskListSource.sort(function (a, b) { return _this.getTime(a.StartDate) - _this.getTime(b.StartDate); }).reverse();
            }
            this.taskStartDateSort = !this.taskStartDateSort;
        }
        else if (sortElement == 'EndDate') {
            if (this.taskEndDateSort) {
                this.TaskListSource = this.TaskListSource.sort(function (a, b) { return _this.getTime(a.EndDate) - _this.getTime(b.EndDate); });
            }
            else {
                this.TaskListSource = this.TaskListSource.sort(function (a, b) { return _this.getTime(a.EndDate) - _this.getTime(b.EndDate); }).reverse();
            }
            this.taskEndDateSort = !this.taskEndDateSort;
        }
        else if (sortElement == 'Priority') {
            if (this.taskPrioritySort) {
                this.TaskListSource = this.TaskListSource.sort(function (a, b) { return a.Priority - b.Priority; });
            }
            else {
                this.TaskListSource = this.TaskListSource.sort(function (a, b) { return a.Priority - b.Priority; }).reverse();
            }
            this.taskPrioritySort = !this.taskPrioritySort;
        }
        else {
            if (this.taskCompletedSort) {
                this.TaskListSource = this.TaskListSource.sort(function (a, b) { return a.Status.toLocaleString().localeCompare(b.Status.toLocaleString()); });
            }
            else {
                this.TaskListSource = this.TaskListSource.sort(function (a, b) { return a.Status.toLocaleString().localeCompare(b.Status.toLocaleString()); }).reverse();
            }
            this.taskCompletedSort = !this.taskCompletedSort;
        }
    };
    TaskManagerHomeComponent.prototype.getTime = function (date) {
        return date != null ? new Date(date).getTime() : 0;
    };
    TaskManagerHomeComponent.prototype.setData = function (a) {
        this.TaskListSource = a;
    };
    TaskManagerHomeComponent.prototype.editTask = function (task, parent, project, users) {
        this.selectedTab = 1;
        //this.taskService.getTasksById(taskId).subscribe(a => this.createTask = a);
        this.createTask.IsCreate = false;
        console.log('task');
        console.log(task);
        console.log('taparentsk');
        console.log(parent);
        console.log('Project');
        console.log(project);
        console.log('users');
        console.log(users);
        var localTask = new _Task__WEBPACK_IMPORTED_MODULE_3__["Task"]();
        localTask.TaskID = task.TaskID;
        localTask.IsCreate = false;
        localTask.EndDate = task.EndDate;
        localTask.StartDate = task.StartDate;
        localTask.Task = task.Task;
        localTask.Priority = task.Priority;
        localTask.Status = task.Status;
        if (parent != undefined && parent != null) {
            localTask.ParentTaskName = parent.Parent_Task;
            localTask.Parent_ID = parent.Parent_ID;
        }
        if (project != undefined && project != null) {
            localTask.ProjectName = project.ProjectName;
            localTask.Project_ID = project.Project_ID;
        }
        if (users != undefined && users != null && users.length > 0) {
            if (users[0] != undefined && users[0] != null) {
                localTask.UserId = users[0].User_ID;
                localTask.TaskUserName = users[0].FirstName + " " + users[0].LastName;
            }
        }
        console.log(localTask);
        this.createTask = localTask;
    };
    TaskManagerHomeComponent.prototype.endTask = function (taskId) {
        var _this = this;
        this.taskService.endTaskById(taskId).subscribe(function (g) { return _this.taskService.getTasks().subscribe(function (a) { return _this.setData(a); }); });
    };
    TaskManagerHomeComponent.prototype.Reset = function () {
        this.createTask = new _Task__WEBPACK_IMPORTED_MODULE_3__["Task"]();
        this.createTask.IsCreate = true;
        this.searchTask = new _Task__WEBPACK_IMPORTED_MODULE_3__["SearchTask"]();
        this.isProjectEmpty = false;
        this.isEndDateLess = false;
    };
    TaskManagerHomeComponent.prototype.onTabClick = function (event) {
        var _this = this;
        console.log('event => ', event);
        console.log('index => ', event.index);
        console.log('tab name=> ', event.tab.textLabel);
        this.userManagerComp.createUserForm = new _User__WEBPACK_IMPORTED_MODULE_11__["User"]();
        this.userManagerComp.createUserForm.IsCreate = true;
        this.projManagerComp.creatingProjectForm = new _Project__WEBPACK_IMPORTED_MODULE_8__["Project"]();
        this.projManagerComp.creatingProjectForm.IsCreate = true;
        this.CustomSearch = '';
        if (event.index == 2) {
            this.createTask = new _Task__WEBPACK_IMPORTED_MODULE_3__["Task"]();
            this.createTask.IsCreate = true;
            this.taskService.getTasks().subscribe(function (a) { return _this.setData(a); });
            this.searchTask = new _Task__WEBPACK_IMPORTED_MODULE_3__["SearchTask"]();
            this.isEndDateLess = false;
            this.isProjectEmpty = false;
        }
    };
    TaskManagerHomeComponent.prototype.onSubmit = function (CreateTask) {
        var _this = this;
        console.log(CreateTask.value);
        this.CompareDate();
        var localTask = new _Task__WEBPACK_IMPORTED_MODULE_3__["Task"]();
        localTask = CreateTask.value;
        if (CreateTask.valid) {
            if (localTask.Project_ID == null || localTask.Project_ID == undefined) {
                this.isProjectEmpty = true;
            }
            else if (!this.isEndDateLess) {
                this.isProjectEmpty = false;
                this.isEndDateLess = false;
                if (localTask.TaskID != undefined && localTask.TaskID > 0) {
                    this.taskService.updateTask(CreateTask.value, localTask.TaskID).subscribe(function (g) { return _this.taskService.getTasks().subscribe(function (a) { return _this.setData(a); }); });
                    this.selectedTab = 2;
                    this.createTask = new _Task__WEBPACK_IMPORTED_MODULE_3__["Task"]();
                    this.searchTask = new _Task__WEBPACK_IMPORTED_MODULE_3__["SearchTask"]();
                    this.createTask.IsCreate = true;
                    CreateTask.resetForm();
                }
                else {
                    this.taskService.addTask(CreateTask.value).subscribe(function (g) { return _this.taskService.getTasks().subscribe(function (a) { return _this.setData(a); }); });
                    this.selectedTab = 2;
                    this.createTask = new _Task__WEBPACK_IMPORTED_MODULE_3__["Task"]();
                    this.searchTask = new _Task__WEBPACK_IMPORTED_MODULE_3__["SearchTask"]();
                    this.createTask.IsCreate = true;
                    CreateTask.resetForm();
                }
            }
        }
    };
    TaskManagerHomeComponent.prototype.openProjectDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_project_search_project_search_component__WEBPACK_IMPORTED_MODULE_7__["ProjectSearchComponent"], {
            width: '400px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            if (result != null && result != undefined) {
                _this.isProjectEmpty = false;
            }
            _this.projectDialogDataSelected = result;
            _this.SelectedProjectName = _this.projectDialogDataSelected.ProjectName;
            _this.createTask.Project_ID = _this.projectDialogDataSelected.Project_ID;
            _this.CustomSearch = _this.projectDialogDataSelected.ProjectName;
        });
    };
    TaskManagerHomeComponent.prototype.openParentDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_parenttask_search_parenttask_search_component__WEBPACK_IMPORTED_MODULE_9__["ParenttaskSearchComponent"], {
            width: '400px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog ParenttaskSearchComponent was closed');
            console.log(result);
            _this.parentDialogSelectedData = result;
            _this.SelectedParentName = _this.parentDialogSelectedData.Parent_Task;
            _this.createTask.Parent_ID = _this.parentDialogSelectedData.Parent_ID;
        });
    };
    TaskManagerHomeComponent.prototype.openUserDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_10__["UserSearchComponent"], {
            width: '400px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog UserSearchComponent was closed');
            console.log(result);
            _this.userDialogSelectedData = result;
            _this.SelectedUserName = _this.userDialogSelectedData.FirstName + " " + _this.userDialogSelectedData.LastName;
            _this.createTask.UserId = _this.userDialogSelectedData.User_ID;
        });
    };
    TaskManagerHomeComponent.prototype.onSetParentChange = function (event) {
        this.createTask.Priority = 0;
        this.createTask.Parent_ID = null;
        this.createTask.ParentTaskName = null;
        this.createTask.StartDate = null;
        this.createTask.EndDate = null;
        this.createTask.UserId = null;
        this.createTask.TaskUserName = null;
    };
    TaskManagerHomeComponent.prototype.CompareDate = function () {
        console.log(this.createTask.StartDate);
        console.log(this.createTask.EndDate);
        if (this.createTask.StartDate != null && this.createTask.EndDate != null) {
            if (new Date(this.createTask.EndDate) < new Date(this.createTask.StartDate)) {
                console.log('isEndDateLess');
                this.isEndDateLess = true;
            }
            else
                this.isEndDateLess = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_user_manager_user_manager_component__WEBPACK_IMPORTED_MODULE_12__["UserManagerComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _user_manager_user_manager_component__WEBPACK_IMPORTED_MODULE_12__["UserManagerComponent"])
    ], TaskManagerHomeComponent.prototype, "userManagerComp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_project_manager_project_manager_component__WEBPACK_IMPORTED_MODULE_13__["ProjectManagerComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _project_manager_project_manager_component__WEBPACK_IMPORTED_MODULE_13__["ProjectManagerComponent"])
    ], TaskManagerHomeComponent.prototype, "projManagerComp", void 0);
    TaskManagerHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-manager-home',
            template: __webpack_require__(/*! ./task-manager-home.component.html */ "./src/app/task-manager-home/task-manager-home.component.html"),
            styles: [__webpack_require__(/*! ./task-manager-home.component.css */ "./src/app/task-manager-home/task-manager-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service_service__WEBPACK_IMPORTED_MODULE_6__["TaskServiceService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], TaskManagerHomeComponent);
    return TaskManagerHomeComponent;
}());



/***/ }),

/***/ "./src/app/task-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/task-service.service.ts ***!
  \*****************************************/
/*! exports provided: TaskServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskServiceService", function() { return TaskServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TaskServiceService = /** @class */ (function () {
    function TaskServiceService(http) {
        this.http = http;
        this.tasksUrl = 'http://localhost/ProjectManagerAPI/task/getAll';
        this.tasksByIdUrl = 'http://localhost/ProjectManagerAPI/task/get/';
        this.tasksCreateUrl = 'http://localhost/ProjectManagerAPI/task/create';
        this.tasksUpdateUrl = 'http://localhost/ProjectManagerAPI/task/update/';
        this.tasksEndUrl = 'http://localhost/ProjectManagerAPI/task/end/';
        this.parentTaskUrl = 'http://localhost/ProjectManagerAPI/task/getParents';
    }
    TaskServiceService.prototype.getTasks = function () {
        //return this.testData;
        console.log('calling...');
        return this.http.get(this.tasksUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTasks', [])));
        ;
    };
    TaskServiceService.prototype.getTasksById = function (task_Id) {
        console.log('calling...getTasksById');
        return this.http.get(this.tasksByIdUrl + task_Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (a) { return console.log('fetched heroes' + a); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTasksById')));
        ;
    };
    TaskServiceService.prototype.endTaskById = function (task_Id) {
        console.log('calling...endTaskById' + task_Id);
        return this.http.get(this.tasksEndUrl + task_Id);
    };
    TaskServiceService.prototype.addTask = function (task) {
        console.log("Create calling");
        console.log(task);
        return this.http.post(this.tasksCreateUrl, task);
    };
    TaskServiceService.prototype.updateTask = function (task, task_Id) {
        console.log("update calling");
        console.log(task);
        return this.http.post(this.tasksUpdateUrl + task_Id, task);
    };
    TaskServiceService.prototype.getParents = function () {
        return this.http.get(this.parentTaskUrl);
    };
    TaskServiceService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            console.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    TaskServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TaskServiceService);
    return TaskServiceService;
}());



/***/ }),

/***/ "./src/app/user-manager/user-manager.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-manager/user-manager.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 350px;\r\n  font-family: 'Quattrocento Sans',sans-serif !important;\r\n}\r\n\r\n.example-header {\r\n  min-height: 65px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 18px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tYW5hZ2VyL3VzZXItbWFuYWdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsdURBQXVEO0NBQ3hEOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0NBQ2I7O0FBQ0c7SUFDQSxlQUFlO0lBQ2Ysa0JBQWtCO0dBQ25CIiwiZmlsZSI6InNyYy9hcHAvdXNlci1tYW5hZ2VyL3VzZXItbWFuYWdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLXdpZHRoOiAzNTBweDtcclxuICBmb250LWZhbWlseTogJ1F1YXR0cm9jZW50byBTYW5zJyxzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlciB7XHJcbiAgbWluLWhlaWdodDogNjVweDtcclxuICBwYWRkaW5nOiA4cHggMjRweCAwO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4gICAgLm1hdC10YWJsZSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user-manager/user-manager.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-manager/user-manager.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #contentCreateUser>\r\n  <button type=\"submit\" mat-button mat-raised-button class=\"mr-2\" value=\"createUserForm.User_ID\" color=\"primary\">\r\n    <mat-icon>{{'add'}}</mat-icon>Add User</button>\r\n  <button type=\"button\" mat-button mat-raised-button value=\"createUserForm.User_ID\" (click)=\"cancelUpdateUser();CreatingUserForm.resetForm()\" color=\"accent\">\r\n    <mat-icon>{{'clear'}}</mat-icon>Reset</button>\r\n</ng-template>\r\n<ng-template #contentUpdateUser>\r\n  <button type=\"submit\" mat-button mat-raised-button class=\"mr-2\" value=\"createUserForm.User_ID\" color=\"primary\">\r\n    <mat-icon>{{'add'}}</mat-icon>Update User</button>\r\n  <button type=\"button\" mat-button mat-raised-button value=\"createUserForm.User_ID\" (click)=\"cancelUpdateUser();CreatingUserForm.resetForm()\" color=\"warn\">\r\n    <mat-icon>{{'cancel'}}</mat-icon>Cancel</button>\r\n</ng-template>\r\n<div class=\"example-container col-md-4 offset-md-4 mt-4\">\r\n  <form #CreatingUserForm=\"ngForm\" (ngSubmit)=\"OnUserFormSubmit(CreatingUserForm)\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"First Name\" required name=\"FirstName\" [(ngModel)]=\"createUserForm.FirstName\" #FirstName=\"ngModel\"\r\n      />\r\n      <input type=\"hidden\" [(ngModel)]=\"createUserForm.User_ID\" name=\"User_ID\">\r\n      <mat-error>\r\n        First Name is\r\n        <strong>required</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput required placeholder=\"Last Name\" name=\"LastName\" [(ngModel)]=\"createUserForm.LastName\" #LastName=\"ngModel\"\r\n      />\r\n      <mat-error>\r\n        Last Name is\r\n        <strong>required</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"number\" required placeholder=\"Employee Id\" name=\"Employee_ID\" [(ngModel)]=\"createUserForm.Employee_ID\" #Employee_ID=\"ngModel\"\r\n      />\r\n      <mat-error>\r\n        Employee Id is\r\n        <strong>required</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <div *ngIf=\"createUserForm.IsCreate;then contentCreateUser else contentUpdateUser\" color=\"primary\">\r\n    </div>\r\n  </form>\r\n</div>\r\n<hr/>\r\n<div class=\"col-md-8 offset-md-2 mt-4\">\r\n  <mat-form-field class=\"col-md-3\">\r\n    <input matInput placeholder=\"Search\" name=\"SearchValue\" [(ngModel)]=\"SearchValue\">\r\n  </mat-form-field>\r\n  <label>Sort By</label>\r\n  <button type=\"button\" mat-button mat-raised-button class=\"mr-2 ml-2\" value=\"\" (click)=\"sort('FirstName')\" color=\"primary\">\r\n    FirstName</button>\r\n  <button type=\"button\" mat-button mat-raised-button class=\"mr-2\" value=\"\" (click)=\"sort('LastName')\" color=\"primary\">\r\n    LastName</button>\r\n  <button type=\"button\" mat-button mat-raised-button class=\"mr-2\" value=\"\" (click)=\"sort('EmpId')\" color=\"primary\">\r\n    EmployeeID</button>\r\n</div>\r\n<div class=\"col-md-8 offset-md-2 mt-4\">\r\n  <ul class=\"list-group list-group-flush\">\r\n    <li *ngFor=\"let useritem of userDataSource | FilterPipe: SearchValue; let i=index\" class=\"list-group-item\">\r\n      <div class=\"row\">\r\n        <div class=\"col col-md-10\">\r\n          <p>\r\n            <strong> FirstName:</strong> {{ useritem.FirstName }} </p>\r\n          <p>\r\n            <strong>LastName:</strong> {{ useritem.LastName }}</p>\r\n          <p>\r\n            <strong>Employee_ID:</strong> {{ useritem.Employee_ID }}</p>\r\n        </div>\r\n        <div class=\"col col-md-2\">\r\n          <div class=\"row\">\r\n            <div class=\"col col-12\">\r\n              <button mat-raised-button color=\"primary\" (click)=\"editUser(useritem)\">\r\n                <mat-icon>create</mat-icon> Edit</button>\r\n              <br>\r\n              <br>\r\n              <button mat-raised-button color=\"warn\" (click)=\"deleteUser(useritem)\">\r\n                <mat-icon item-width=\"20px\">delete</mat-icon> Delete</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </li>\r\n    <li *ngIf=\"(userDataSource| FilterPipe:SearchValue).length==0\" class=\"list-group-item\">\r\n      <div class=\"alert alert-info\">\r\n        There are no items to display.\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-manager/user-manager.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-manager/user-manager.component.ts ***!
  \********************************************************/
/*! exports provided: UserManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagerComponent", function() { return UserManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ErrorStateMatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ErrorStateMatcher */ "./src/app/ErrorStateMatcher.ts");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../User */ "./src/app/User.ts");






var UserManagerComponent = /** @class */ (function () {
    function UserManagerComponent(userService) {
        this.userService = userService;
        this.userDataSource = [];
        this.userFirstNameSort = true;
        this.userLastNameSort = true;
        this.userEmpIdSort = true;
        this.FNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.EmpIdFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.LNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.matcher = new _ErrorStateMatcher__WEBPACK_IMPORTED_MODULE_3__["MyErrorStateMatcher"]();
        // this.createUserForm = new User();
        // this.createUserForm.IsCreate = true;
        console.log("constructor");
    }
    UserManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit");
        this.createUserForm = new _User__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.createUserForm.IsCreate = true;
        this.userService.getUsers().subscribe(function (a) { return _this.userDataSource = a; });
        this.SortElement = 'FirstName';
    };
    UserManagerComponent.prototype.sort = function (sortElement) {
        console.log('calling sort' + sortElement);
        this.SortElement = sortElement;
        if (sortElement == 'FirstName') {
            if (this.userFirstNameSort) {
                this.userDataSource = this.userDataSource.sort(function (a, b) { return a.FirstName.localeCompare(b.FirstName); });
            }
            else {
                this.userDataSource = this.userDataSource.sort(function (a, b) { return a.FirstName.localeCompare(b.FirstName); }).reverse();
            }
            this.userFirstNameSort = !this.userFirstNameSort;
        }
        else if (sortElement == 'LastName') {
            if (this.userLastNameSort) {
                this.userDataSource = this.userDataSource.sort(function (a, b) { return a.LastName.localeCompare(b.LastName); });
            }
            else {
                this.userDataSource = this.userDataSource.sort(function (a, b) { return a.LastName.localeCompare(b.LastName); }).reverse();
            }
            this.userLastNameSort = !this.userLastNameSort;
        }
        else {
            if (this.userEmpIdSort) {
                this.userDataSource = this.userDataSource.sort(function (a, b) { return a.Employee_ID - b.Employee_ID; });
            }
            else {
                this.userDataSource = this.userDataSource.sort(function (a, b) { return a.Employee_ID - b.Employee_ID; }).reverse();
            }
            this.userEmpIdSort = !this.userEmpIdSort;
        }
    };
    UserManagerComponent.prototype.editUser = function (user) {
        // this.createUserForm = new User();
        var localUser = new _User__WEBPACK_IMPORTED_MODULE_5__["User"]();
        localUser.Employee_ID = user.Employee_ID;
        localUser.IsCreate = false;
        localUser.FirstName = user.FirstName;
        localUser.LastName = user.LastName;
        localUser.User_ID = user.User_ID;
        console.log(user);
        this.createUserForm = localUser;
        //this.setTextValue = this.userDataSource[user].FirstName;
    };
    UserManagerComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.userService.deleteUser(user.User_ID).subscribe(function (g) { return _this.userService.getUsers().subscribe(function (a) { return _this.userDataSource = a; }); });
    };
    UserManagerComponent.prototype.cancelUpdateUser = function () {
        this.createUserForm = new _User__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.createUserForm.IsCreate = true;
    };
    UserManagerComponent.prototype.OnUserFormSubmit = function (CreateUserForm) {
        var _this = this;
        console.log(CreateUserForm.value);
        if (CreateUserForm.valid) {
            var localUser = new _User__WEBPACK_IMPORTED_MODULE_5__["User"]();
            localUser = CreateUserForm.value;
            if (localUser.User_ID != undefined && localUser.User_ID > 0) {
                this.userService.updateUser(CreateUserForm.value, localUser.User_ID).subscribe(function (g) { return _this.userService.getUsers().subscribe(function (a) { return _this.userDataSource = a; }); });
                this.createUserForm = new _User__WEBPACK_IMPORTED_MODULE_5__["User"]();
                this.createUserForm.IsCreate = true;
                console.log("user updated");
                CreateUserForm.resetForm();
            }
            else {
                this.userService.addUser(CreateUserForm.value).subscribe(function (g) { return _this.userService.getUsers().subscribe(function (a) { return _this.userDataSource = a; }); });
                this.createUserForm = new _User__WEBPACK_IMPORTED_MODULE_5__["User"]();
                this.createUserForm.IsCreate = true;
                console.log("user added");
                console.log(this.userDataSource);
                CreateUserForm.resetForm();
            }
        }
    };
    UserManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-manager',
            template: __webpack_require__(/*! ./user-manager.component.html */ "./src/app/user-manager/user-manager.component.html"),
            styles: [__webpack_require__(/*! ./user-manager.component.css */ "./src/app/user-manager/user-manager.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserServiceService"]])
    ], UserManagerComponent);
    return UserManagerComponent;
}());



/***/ }),

/***/ "./src/app/user-search/user-search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/user-search/user-search.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 350px;\r\n  font-family: 'Quattrocento Sans',sans-serif !important;\r\n}\r\n\r\n.example-header {\r\n  min-height: 65px;\r\n  padding: 5px 18px 0;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 18px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1zZWFyY2gvdXNlci1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLHVEQUF1RDtDQUN4RDs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtDQUNiOztBQUVDO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtHQUNuQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItc2VhcmNoL3VzZXItc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDM1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVhdHRyb2NlbnRvIFNhbnMnLHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyIHtcclxuICBtaW4taGVpZ2h0OiA2NXB4O1xyXG4gIHBhZGRpbmc6IDVweCAxOHB4IDA7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiAgXHJcbiAgLm1hdC10YWJsZSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user-search/user-search.component.html":
/*!********************************************************!*\
  !*** ./src/app/user-search/user-search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <mat-dialog-content>\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter Users\">\n    </mat-form-field>\n    <mat-table #table [dataSource]=\"dataSource\">\n      <ng-container matColumnDef=\"User_ID\">\n        <mat-header-cell *matHeaderCellDef> User_ID </mat-header-cell>\n        <mat-cell *matCellDef=\"let User\"> {{User.User_ID}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"FirstName\">\n        <mat-header-cell *matHeaderCellDef> FirstName </mat-header-cell>\n        <mat-cell *matCellDef=\"let User\"> {{User.FirstName}} </mat-cell>\n      </ng-container>\n      \n      <ng-container matColumnDef=\"LastName\">\n        <mat-header-cell *matHeaderCellDef> LastName </mat-header-cell>\n        <mat-cell *matCellDef=\"let User\"> {{User.LastName}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"Action\">\n        <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n        <mat-cell *matCellDef=\"let User\">\n          <div>\n            <button mat-button mat-raised-button class=\"mr-2\" value=\"User.User_ID\" [mat-dialog-close]=\"User\" color=\"primary\">\n              Select</button>\n          </div>\n        </mat-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator [pageSizeOptions]=\"[5]\" showFirstLastButtons></mat-paginator>\n  </mat-dialog-content>\n</div>"

/***/ }),

/***/ "./src/app/user-search/user-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-search/user-search.component.ts ***!
  \******************************************************/
/*! exports provided: UserSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchComponent", function() { return UserSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var _UserDialogData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UserDialogData */ "./src/app/UserDialogData.ts");





var UserSearchComponent = /** @class */ (function () {
    function UserSearchComponent(userService, dialogRef, data) {
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = ['User_ID', 'FirstName', 'LastName', 'Action'];
    }
    UserSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (a) { return _this.setData(a); });
    };
    UserSearchComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    UserSearchComponent.prototype.setData = function (data) {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
        this.dataSource.paginator = this.paginator;
    };
    UserSearchComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], UserSearchComponent.prototype, "paginator", void 0);
    UserSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-search',
            template: __webpack_require__(/*! ./user-search.component.html */ "./src/app/user-search/user-search.component.html"),
            styles: [__webpack_require__(/*! ./user-search.component.css */ "./src/app/user-search/user-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _UserDialogData__WEBPACK_IMPORTED_MODULE_4__["UserDialogData"]])
    ], UserSearchComponent);
    return UserSearchComponent;
}());



/***/ }),

/***/ "./src/app/user-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/user-service.service.ts ***!
  \*****************************************/
/*! exports provided: UserServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceService", function() { return UserServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserServiceService = /** @class */ (function () {
    function UserServiceService(http) {
        this.http = http;
        this.UsersUrl = 'http://localhost/ProjectManagerAPI/api/User';
        this.UserByUseridUrl = 'http://localhost/ProjectManagerAPI/api/User/';
        this.CreateUserUrl = 'http://localhost/ProjectManagerAPI/api/User';
        this.DeleteUserUrl = 'http://localhost/ProjectManagerAPI/api/User/';
        this.UpdateUserUrl = 'http://localhost/ProjectManagerAPI/api/User/';
    }
    UserServiceService.prototype.getUsers = function () {
        console.log('calling getUsers...');
        return this.http.get(this.UsersUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getUsers', [])));
    };
    UserServiceService.prototype.addUser = function (user) {
        console.log('calling addUser...');
        return this.http.post(this.CreateUserUrl, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addUser', [])));
    };
    UserServiceService.prototype.updateUser = function (user, user_id) {
        console.log('calling updateUser...');
        return this.http.put(this.UpdateUserUrl + user_id, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateUser', [])));
    };
    UserServiceService.prototype.deleteUser = function (user_id) {
        console.log('calling deleteUser...');
        return this.http.delete(this.DeleteUserUrl + user_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteUser', [])));
    };
    UserServiceService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            console.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    UserServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserServiceService);
    return UserServiceService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! C:\FSEAngular\ProjectManagerUI-Final\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map