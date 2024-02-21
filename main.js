"use strict";
(self["webpackChunkpokedex"] = self["webpackChunkpokedex"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_auth_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/auth/login-page/login-page.component */ 9066);
/* harmony import */ var _components_auth_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/auth/signup-page/signup-page.component */ 4323);
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth-guard */ 4166);
/* harmony import */ var _components_pokemon_search_page_pokemon_search_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pokemon-search-page/pokemon-search-page.component */ 6263);
/* harmony import */ var _components_pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pokemon-detail/pokemon-detail.component */ 1384);
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ 9873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);









const redirectLoggedInToSite = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__.redirectLoggedInTo)(['']);
const redirectUnauthorizedToLogin = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__.redirectUnauthorizedTo)(['login']);
const routes = [{
  path: '',
  component: _components_pokemon_search_page_pokemon_search_page_component__WEBPACK_IMPORTED_MODULE_2__.PokemonSearchPageComponent,
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
  data: {
    authGuardPipe: redirectUnauthorizedToLogin
  }
}, {
  path: 'login',
  component: _components_auth_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__.LoginPageComponent,
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedInToSite
  }
}, {
  path: 'signup',
  component: _components_auth_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_1__.SignupPageComponent,
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
  data: {
    authGuardPipe: redirectLoggedInToSite
  }
}, {
  path: 'pokemon',
  component: _components_pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_3__.PokemonDetailComponent,
  canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
  data: {
    authGuardPipe: redirectUnauthorizedToLogin
  }
}, {
  path: '**',
  component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 6471);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 7913);




class AppComponent {
  constructor() {
    this.title = 'pokedex';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 7,
  vars: 0,
  consts: [[1, "flex", "flex-col", "h-full"], [1, "flex-none"], [1, "grow"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pokemon-list/pokemon-list.component */ 2661);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ 6471);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ 7913);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _components_pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pokemon-detail/pokemon-detail.component */ 1384);
/* harmony import */ var _components_pokemon_card_pokemon_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pokemon-card/pokemon-card.component */ 5124);
/* harmony import */ var _components_pokemon_search_criteria_pokemon_search_criteria_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pokemon-search-criteria/pokemon-search-criteria.component */ 2351);
/* harmony import */ var _components_pokemon_search_page_pokemon_search_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pokemon-search-page/pokemon-search-page.component */ 6263);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/app */ 6140);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/auth */ 4404);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/firestore */ 3285);
/* harmony import */ var _components_auth_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/auth/login-page/login-page.component */ 9066);
/* harmony import */ var _components_auth_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/auth/signup-page/signup-page.component */ 4323);
/* harmony import */ var _components_core_input_base_input_base_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/core/input-base/input-base.component */ 5207);
/* harmony import */ var _components_core_button_base_button_base_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/core/button-base/button-base.component */ 8702);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/compat */ 5281);
/* harmony import */ var _components_pokemon_type_img_pokemon_type_img_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pokemon-type-img/pokemon-type-img.component */ 800);
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ 9873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 1699);




























class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_fire_compat__WEBPACK_IMPORTED_MODULE_17__.FIREBASE_OPTIONS,
    useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.firebase
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule, (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_21__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_21__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.firebase)), (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__.getAuth)()), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__.getFirestore)())]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_2__.PokemonListComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _components_pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_5__.PokemonDetailComponent, _components_pokemon_card_pokemon_card_component__WEBPACK_IMPORTED_MODULE_6__.PokemonCardComponent, _components_pokemon_search_criteria_pokemon_search_criteria_component__WEBPACK_IMPORTED_MODULE_7__.PokemonSearchCriteriaComponent, _components_pokemon_search_page_pokemon_search_page_component__WEBPACK_IMPORTED_MODULE_8__.PokemonSearchPageComponent, _components_auth_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__.LoginPageComponent, _components_auth_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_11__.SignupPageComponent, _components_core_input_base_input_base_component__WEBPACK_IMPORTED_MODULE_12__.InputBaseComponent, _components_core_button_base_button_base_component__WEBPACK_IMPORTED_MODULE_13__.ButtonBaseComponent, _components_pokemon_type_img_pokemon_type_img_component__WEBPACK_IMPORTED_MODULE_14__.PokemonTypeImgComponent, _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__.PageNotFoundComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgOptimizedImage, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_21__.FirebaseAppModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__.AuthModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__.FirestoreModule]
  });
})();

/***/ }),

/***/ 6488:
/*!***********************************************!*\
  !*** ./src/app/components/auth/auth-utils.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ errorHandling)
/* harmony export */ });
function errorHandling(errorMessage) {
  switch (errorMessage) {
    case "auth/invalid-email":
    case "auth/wrong-password":
    case "auth/user-not-found":
      {
        return "Wrong email address or password.";
      }
    default:
      {
        return "Unexpected Error";
      }
  }
}

/***/ }),

/***/ 9066:
/*!********************************************************************!*\
  !*** ./src/app/components/auth/login-page/login-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageComponent: () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ 4404);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ 9193);
/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth-utils */ 6488);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _core_button_base_button_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/button-base/button-base.component */ 8702);







class LoginPageComponent {
  constructor(router) {
    this.router = router;
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.Auth);
    this.provider = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.GoogleAuthProvider();
    this.email = '';
    this.password = '';
    this.error = '';
  }
  signInWithEmailAndPassword() {
    (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(this.auth, this.email, this.password).then(userCredential => {
      this.redirectToSite();
    }).catch(error => {
      this.error = (0,_auth_utils__WEBPACK_IMPORTED_MODULE_0__["default"])(error.code);
    });
  }
  login() {
    (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(this.auth, this.provider).then(result => {
      this.redirectToSite();
    }).catch(error => {
      this.error = (0,_auth_utils__WEBPACK_IMPORTED_MODULE_0__["default"])(error.code);
    });
  }
  redirectToSite() {
    this.router.navigate(['/']);
  }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
  return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
LoginPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoginPageComponent,
  selectors: [["app-login-page"]],
  decls: 18,
  vars: 3,
  consts: [[1, "grid", "justify-items-center", "items-center", "h-full"], [1, "flex", "flex-col", "space-y-4", "rounded-2xl", "p-10", "border", "border-secondary"], [1, "text-3xl", "mb-10"], [1, "flex", "flex-col"], ["for", "email"], ["id", "email", "type", "text", 1, "w-[300px]", "shadow", "appearance-none", "border", "rounded", "py-2", "px-3", "text-gray-700", "leading-tight", "focus:outline-none", "focus:shadow-outline", 3, "ngModel", "ngModelChange"], ["for", "password"], ["id", "password", "type", "password", 1, "w-[300px]", "shadow", "appearance-none", "border", "rounded", "py-2", "px-3", "text-gray-700", "leading-tight", "focus:outline-none", "focus:shadow-outline", 3, "ngModel", "ngModelChange"], [1, "text-red-800"], [1, "flex", "flex-row", "justify-between", "items-baseline"], ["value", "Login", 3, "click"], ["routerLink", "/signup", "routerLinkActive", "active", 1, "text-sm", "underline"]],
  template: function LoginPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Login ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_7_listener($event) {
        return ctx.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3)(9, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9)(15, "app-button-base", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_Template_app_button_base_click_15_listener() {
        return ctx.signInWithEmailAndPassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Go to signup");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.error);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _core_button_base_button_base_component__WEBPACK_IMPORTED_MODULE_1__.ButtonBaseComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4323:
/*!**********************************************************************!*\
  !*** ./src/app/components/auth/signup-page/signup-page.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupPageComponent: () => (/* binding */ SignupPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ 4404);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _core_button_base_button_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/button-base/button-base.component */ 8702);






class SignupPageComponent {
  constructor(router) {
    this.router = router;
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.Auth);
    this.email = '';
    this.password = '';
  }
  createWithEmailAndPassword() {
    (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(this.auth, this.email, this.password).then(userCredential => {
      const user = userCredential.user;
      this.redirectToSite();
    }).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
  redirectToSite() {
    this.router.navigate(['/']);
  }
}
SignupPageComponent.ɵfac = function SignupPageComponent_Factory(t) {
  return new (t || SignupPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
SignupPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SignupPageComponent,
  selectors: [["app-signup-page"]],
  decls: 16,
  vars: 2,
  consts: [[1, "grid", "justify-items-center", "items-center", "h-full"], [1, "flex", "flex-col", "space-y-4", "rounded-2xl", "p-10", "border", "border-secondary"], [1, "text-3xl", "mb-10"], [1, "flex", "flex-col"], ["for", "email"], ["id", "email", "type", "text", 1, "w-[300px]", "shadow", "appearance-none", "border", "rounded", "py-2", "px-3", "text-gray-700", "leading-tight", "focus:outline-none", "focus:shadow-outline", 3, "ngModel", "ngModelChange"], ["for", "password"], ["id", "password", "type", "password", 1, "w-[300px]", "shadow", "appearance-none", "border", "rounded", "py-2", "px-3", "text-gray-700", "leading-tight", "focus:outline-none", "focus:shadow-outline", 3, "ngModel", "ngModelChange"], [1, "flex", "justify-between", "items-baseline"], ["value", "Signup", 3, "click"], ["routerLink", "/login", "routerLinkActive", "active", 1, "text-sm", "underline"]],
  template: function SignupPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Sign up ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupPageComponent_Template_input_ngModelChange_7_listener($event) {
        return ctx.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3)(9, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupPageComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8)(13, "app-button-base", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupPageComponent_Template_app_button_base_click_13_listener() {
        return ctx.createWithEmailAndPassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Go to login");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _core_button_base_button_base_component__WEBPACK_IMPORTED_MODULE_0__.ButtonBaseComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8702:
/*!**********************************************************************!*\
  !*** ./src/app/components/core/button-base/button-base.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonBaseComponent: () => (/* binding */ ButtonBaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ButtonBaseComponent {
  constructor() {
    this.value = '';
  }
}
ButtonBaseComponent.ɵfac = function ButtonBaseComponent_Factory(t) {
  return new (t || ButtonBaseComponent)();
};
ButtonBaseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ButtonBaseComponent,
  selectors: [["app-button-base"]],
  inputs: {
    value: "value"
  },
  decls: 2,
  vars: 1,
  consts: [["type", "button", 1, "bg-secondary", "hover:bg-secondaryDark", "active:bg-secondaryDarker", "text-white", "font-bold", "py-2", "px-4", "rounded", "focus:outline-none", "focus:shadow-outline"]],
  template: function ButtonBaseComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.value, "\n");
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5207:
/*!********************************************************************!*\
  !*** ./src/app/components/core/input-base/input-base.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputBaseComponent: () => (/* binding */ InputBaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);


class InputBaseComponent {
  constructor() {
    this.placeholder = '';
    this.value = '';
  }
}
InputBaseComponent.ɵfac = function InputBaseComponent_Factory(t) {
  return new (t || InputBaseComponent)();
};
InputBaseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: InputBaseComponent,
  selectors: [["app-input-base"]],
  inputs: {
    placeholder: "placeholder"
  },
  outputs: {
    value: "value"
  },
  decls: 1,
  vars: 2,
  consts: [["type", "text", 1, "shadow", "appearance-none", "border", "rounded", "py-2", "px-3", "text-gray-700", "leading-tight", "focus:outline-none", "focus:shadow-outline", 3, "ngModel", "placeholder", "ngModelChange"]],
  template: function InputBaseComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputBaseComponent_Template_input_ngModelChange_0_listener($event) {
        return ctx.value = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("placeholder", ctx.placeholder);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7913:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 3,
  vars: 0,
  consts: [[1, "bg-secondary", "p-10"], [1, "text-center", "text-tertiary"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " @ 2023. blbalba balbla balb alba blll ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6471:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ 4404);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _core_button_base_button_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/button-base/button-base.component */ 8702);






function HeaderComponent_app_button_base_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-button-base", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_app_button_base_8_Template_app_button_base_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class HeaderComponent {
  constructor() {
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.Auth);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
  }
  ngOnInit() {
    (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(this.auth, user => {
      if (user) {
        console.log(user.uid);
      } else {}
    });
  }
  logout() {
    (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(this.auth).then(result => {
      this.redirectToLogin();
    }).catch(error => {
      console.log(error);
    });
  }
  redirectToLogin() {
    this.router.navigate(['/login']);
  }
  redirectToRoot() {
    this.router.navigate([""]);
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 9,
  vars: 1,
  consts: [[1, "flex", "bg-secondary", "p-4", "items-center"], [1, "w-[200px]"], [3, "click"], ["ngSrc", "../../../assets/logos/pokeball-logo.png", "alt", "logo", "height", "60", "width", "60"], [1, "flex-grow", "text-center", "m-auto"], [1, "text-3xl", "text-white", "font-pokemon"], ["class", "text-white font-pokemon", "value", "Sign out", 3, "click", 4, "ngIf"], ["value", "Sign out", 1, "text-white", "font-pokemon", 3, "click"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() {
        return ctx.redirectToRoot();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "POKEDEX");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HeaderComponent_app_button_base_8_Template, 1, 0, "app-button-base", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auth.currentUser);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgOptimizedImage, _core_button_base_button_base_component__WEBPACK_IMPORTED_MODULE_0__.ButtonBaseComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9873:
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageNotFoundComponent: () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class PageNotFoundComponent {}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
  return new (t || PageNotFoundComponent)();
};
PageNotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageNotFoundComponent,
  selectors: [["app-page-not-found"]],
  decls: 4,
  vars: 0,
  consts: [[1, "w-full", "h-full", "flex", "justify-center"], [1, "inline", "self-center", "text-3xl"]],
  template: function PageNotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404 Page not found !");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5124:
/*!*******************************************************************!*\
  !*** ./src/app/components/pokemon-card/pokemon-card.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PokemonCardComponent: () => (/* binding */ PokemonCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_favorite_pokemons_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/favorite-pokemons.service */ 904);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _pokemon_type_img_pokemon_type_img_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pokemon-type-img/pokemon-type-img.component */ 800);






function PokemonCardComponent__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PokemonCardComponent__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PokemonCardComponent_app_pokemon_type_img_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-pokemon-type-img", 15);
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pokemonType", type_r3.type.name);
  }
}
class PokemonCardComponent {
  constructor() {
    this.favoritePokemons = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_favorite_pokemons_service__WEBPACK_IMPORTED_MODULE_0__.FavoritePokemonsService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.isFavorite = false;
  }
  ngOnInit() {
    this.favoritePokemons.getFavoritePokemon(this.pokemon.id).then(res => this.isFavorite = res);
  }
  goToPokemonDetail() {
    this.router.navigate(["/pokemon"], {
      queryParams: {
        id: this.pokemon.id
      }
    });
  }
  addToFavorite() {
    this.favoritePokemons.setFavoritePokemon(this.pokemon.id, !this.isFavorite).then(res => this.isFavorite = res);
  }
}
PokemonCardComponent.ɵfac = function PokemonCardComponent_Factory(t) {
  return new (t || PokemonCardComponent)();
};
PokemonCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PokemonCardComponent,
  selectors: [["app-pokemon-card"]],
  inputs: {
    pokemon: "pokemon"
  },
  decls: 16,
  vars: 6,
  consts: [[1, "flex", "flex-col", "w-[192px]"], [1, "relative"], ["height", "192", "width", "192", 1, "w-full", "border-2", "border-gray-600", "rounded-t-2xl", "text-center", 3, "ngSrc"], [1, "absolute", "top-2", "left-2", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", "class", "w-6 h-6", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "#fac814", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", "class", "w-6 h-6", 4, "ngIf"], [1, "group", "p-2", "h-[130px]", "flex", "flex-col", "border-2", "border-t-0", "border-gray-600", 3, "click"], [1, "text-sm"], [1, "mb-2", "flex-grow"], [1, "text-2xl", "capitalize", "group-hover:underline"], [1, "flex", "flex-row", "gap-1"], [3, "pokemonType", 4, "ngFor", "ngForOf"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "#fac814", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6"], [3, "pokemonType"]],
  template: function PokemonCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PokemonCardComponent_Template_button_click_4_listener() {
        return ctx.addToFavorite();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PokemonCardComponent__svg_svg_5_Template, 2, 0, "svg", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PokemonCardComponent__svg_svg_6_Template, 2, 0, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PokemonCardComponent_Template_button_click_7_listener() {
        return ctx.goToPokemonDetail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div")(9, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, PokemonCardComponent_app_pokemon_type_img_15_Template, 1, 1, "app-pokemon-type-img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSrc", ctx.pokemon.sprites.front_default);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isFavorite);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isFavorite);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("No. ", ctx.pokemon.id, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.pokemon.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.pokemon.types);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgOptimizedImage, _pokemon_type_img_pokemon_type_img_component__WEBPACK_IMPORTED_MODULE_1__.PokemonTypeImgComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1384:
/*!***********************************************************************!*\
  !*** ./src/app/components/pokemon-detail/pokemon-detail.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PokemonDetailComponent: () => (/* binding */ PokemonDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_local_pokemon_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/local-pokemon.service */ 2293);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);





function PokemonDetailComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.pokemon.name, " ");
  }
}
function PokemonDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PokemonDetailComponent_div_0_div_2_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.pokemon != undefined);
  }
}
function PokemonDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No id !\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class PokemonDetailComponent {
  constructor() {
    this.activatedroute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute);
    this.localPokemonService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_local_pokemon_service__WEBPACK_IMPORTED_MODULE_0__.LocalPokemonService);
    this.activatedroute.queryParamMap.subscribe(params => {
      let id = params.get('id');
      if (id != null) {
        this.id = parseInt(id);
        this.localPokemonService.getPokemon(this.id).subscribe(pokemon => {
          this.pokemon = pokemon;
        });
      }
    });
  }
}
PokemonDetailComponent.ɵfac = function PokemonDetailComponent_Factory(t) {
  return new (t || PokemonDetailComponent)();
};
PokemonDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PokemonDetailComponent,
  selectors: [["app-pokemon-detail"]],
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"]],
  template: function PokemonDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PokemonDetailComponent_div_0_Template, 3, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PokemonDetailComponent_div_1_Template, 2, 0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.id != undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.id == undefined);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2661:
/*!*******************************************************************!*\
  !*** ./src/app/components/pokemon-list/pokemon-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PokemonListComponent: () => (/* binding */ PokemonListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _pokemon_card_pokemon_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pokemon-card/pokemon-card.component */ 5124);



function PokemonListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-pokemon-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pokemon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pokemon", pokemon_r1);
  }
}
class PokemonListComponent {
  constructor() {
    this.pokemons = [];
  }
}
PokemonListComponent.ɵfac = function PokemonListComponent_Factory(t) {
  return new (t || PokemonListComponent)();
};
PokemonListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PokemonListComponent,
  selectors: [["app-pokemon-list"]],
  inputs: {
    pokemons: "pokemons"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "grid", "2xl:grid-cols-6", "lg:grid-cols-4", "md:grid-cols-3", "sm:grid-cols-2", "grid-cols-1", "gap-y-7"], ["class", "transition hover:scale-110", 4, "ngFor", "ngForOf"], [1, "transition", "hover:scale-110"], [3, "pokemon"]],
  template: function PokemonListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PokemonListComponent_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pokemons);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _pokemon_card_pokemon_card_component__WEBPACK_IMPORTED_MODULE_0__.PokemonCardComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2351:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/pokemon-search-criteria/pokemon-search-criteria.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PokemonSearchCriteriaComponent: () => (/* binding */ PokemonSearchCriteriaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);



class PokemonSearchCriteriaComponent {
  constructor() {
    this.criteriaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.criteria = {
      name: ''
    };
  }
  updateCriteria() {
    this.criteriaChange.emit(this.criteria);
  }
}
PokemonSearchCriteriaComponent.ɵfac = function PokemonSearchCriteriaComponent_Factory(t) {
  return new (t || PokemonSearchCriteriaComponent)();
};
PokemonSearchCriteriaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PokemonSearchCriteriaComponent,
  selectors: [["app-pokemon-search-criteria"]],
  outputs: {
    criteriaChange: "criteriaChange"
  },
  decls: 5,
  vars: 1,
  consts: [["for", "name", 1, "block", "text-gray-700", "font-bold", "mb-2"], ["id", "name", "type", "text", "placeholder", "Nom", 1, "shadow", "appearance-none", "border", "rounded", "py-2", "px-3", "text-gray-700", "leading-tight", "focus:outline-none", "focus:shadow-outline", 3, "ngModel", "ngModelChange", "input"]],
  template: function PokemonSearchCriteriaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div")(2, "label", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PokemonSearchCriteriaComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.criteria.name = $event;
      })("input", function PokemonSearchCriteriaComponent_Template_input_input_4_listener() {
        return ctx.updateCriteria();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.criteria.name);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6263:
/*!*********************************************************************************!*\
  !*** ./src/app/components/pokemon-search-page/pokemon-search-page.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PokemonSearchPageComponent: () => (/* binding */ PokemonSearchPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_local_pokemon_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/local-pokemon.service */ 2293);
/* harmony import */ var _pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pokemon-list/pokemon-list.component */ 2661);
/* harmony import */ var _pokemon_search_criteria_pokemon_search_criteria_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pokemon-search-criteria/pokemon-search-criteria.component */ 2351);




class PokemonSearchPageComponent {
  constructor(localPokemonService) {
    this.localPokemonService = localPokemonService;
    this.pokemons = [];
    this.paginatedPokemons = [];
    this.criteria = {};
    this.offset = 0;
    this.limit = 12;
    this.hasNextElements = false;
    this.hasPreviousElements = false;
    this.search();
  }
  precedent() {
    this.offset -= this.limit;
    this.updatePaginatedPokemons();
  }
  suivant() {
    this.offset += this.limit;
    this.updatePaginatedPokemons();
  }
  updatePaginatedPokemons() {
    if (this.offset > this.pokemons.length || this.offset < 0) {
      this.offset = 0;
    }
    let end = this.offset + this.limit;
    if (end > this.pokemons.length) {
      end = this.pokemons.length;
    }
    this.paginatedPokemons = this.pokemons.slice(this.offset, end);
    this.checkForPreviousAndNextElements();
  }
  checkForPreviousAndNextElements() {
    this.hasNextElements = this.offset + this.limit < this.pokemons.length;
    this.hasPreviousElements = this.offset != 0;
  }
  search() {
    this.localPokemonService.getPokemonsByCriteria(this.criteria).subscribe(pokemons => {
      this.offset = 0;
      this.pokemons = pokemons;
      this.updatePaginatedPokemons();
    });
  }
  updateCriteria(criteria) {
    this.criteria = criteria;
    this.search();
  }
}
PokemonSearchPageComponent.ɵfac = function PokemonSearchPageComponent_Factory(t) {
  return new (t || PokemonSearchPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_local_pokemon_service__WEBPACK_IMPORTED_MODULE_0__.LocalPokemonService));
};
PokemonSearchPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PokemonSearchPageComponent,
  selectors: [["app-pokemon-search-page"]],
  decls: 10,
  vars: 3,
  consts: [[1, "h-full", "flex", "flex-col", "m-auto", "justify-center", "2xl:w-[1300px]", "lg:w-[900px]", "md:w-[700px]", "sm:w-[450px]", "w-[200px]", "py-20"], [1, "space-y-3", "mb-10"], [3, "criteriaChange"], ["type", "button", 1, "mr-4", "disabled:bg-gray-500", "bg-secondary", "hover:bg-secondaryDark", "active:bg-secondaryDarker", "text-white", "font-bold", "py-2", "px-4", "rounded", "focus:outline-none", "focus:shadow-outline", 3, "disabled", "click"], ["type", "button", 1, "disabled:bg-gray-500", "bg-secondary", "hover:bg-secondaryDark", "active:bg-secondaryDarker", "text-white", "font-bold", "py-2", "px-4", "rounded", "focus:outline-none", "focus:shadow-outline", 3, "disabled", "click"], [3, "pokemons"]],
  template: function PokemonSearchPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-pokemon-search-criteria", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("criteriaChange", function PokemonSearchPageComponent_Template_app_pokemon_search_criteria_criteriaChange_2_listener($event) {
        return ctx.updateCriteria($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div")(4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PokemonSearchPageComponent_Template_button_click_4_listener() {
        return ctx.precedent();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PokemonSearchPageComponent_Template_button_click_6_listener() {
        return ctx.suivant();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Next ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "app-pokemon-list", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.hasPreviousElements);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.hasNextElements);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pokemons", ctx.paginatedPokemons);
    }
  },
  dependencies: [_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_1__.PokemonListComponent, _pokemon_search_criteria_pokemon_search_criteria_component__WEBPACK_IMPORTED_MODULE_2__.PokemonSearchCriteriaComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 800:
/*!***************************************************************************!*\
  !*** ./src/app/components/pokemon-type-img/pokemon-type-img.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PokemonTypeImgComponent: () => (/* binding */ PokemonTypeImgComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


function PokemonTypeImgComponent_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "BUG");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PokemonTypeImgComponent_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "DARK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PokemonTypeImgComponent_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "DRAGON");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PokemonTypeImgComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ELECT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PokemonTypeImgComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "FAIRY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PokemonTypeImgComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "FIGHT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PokemonTypeImgComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "FIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PokemonTypeImgComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "FLYING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PokemonTypeImgComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "GHOST");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PokemonTypeImgComponent_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "GROUND");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PokemonTypeImgComponent_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "GRASS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PokemonTypeImgComponent_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ICE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PokemonTypeImgComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NORMAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PokemonTypeImgComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "POISON");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PokemonTypeImgComponent_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "PSY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PokemonTypeImgComponent_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ROCK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PokemonTypeImgComponent_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "STEEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PokemonTypeImgComponent_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "WATER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class PokemonTypeImgComponent {
  constructor() {
    this.pokemonType = "";
  }
}
PokemonTypeImgComponent.ɵfac = function PokemonTypeImgComponent_Factory(t) {
  return new (t || PokemonTypeImgComponent)();
};
PokemonTypeImgComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PokemonTypeImgComponent,
  selectors: [["app-pokemon-type-img"]],
  inputs: {
    pokemonType: "pokemonType"
  },
  decls: 19,
  vars: 19,
  consts: [[1, "[&>p]:rounded-2xl", "[&>p]:border-black", "[&>p]:px-1", "[&>p]:border-2", "[&>p]:font-pokemon", "[&>p]:text-[0.65rem]", 3, "ngSwitch"], ["class", "bg-pokeBug", 4, "ngSwitchCase"], ["class", "bg-pokeDark", 4, "ngSwitchCase"], ["class", "bg-pokeDragon", 4, "ngSwitchCase"], ["class", "bg-pokeElectric", 4, "ngSwitchCase"], ["class", "bg-pokeFairy", 4, "ngSwitchCase"], ["class", "bg-pokeFighting", 4, "ngSwitchCase"], ["class", "bg-pokeFire", 4, "ngSwitchCase"], ["class", "bg-pokeFlying", 4, "ngSwitchCase"], ["class", "bg-pokeGhost", 4, "ngSwitchCase"], ["class", "bg-pokeGround", 4, "ngSwitchCase"], ["class", "bg-pokeGrass", 4, "ngSwitchCase"], ["class", "bg-pokeIce", 4, "ngSwitchCase"], ["class", "bg-pokeNormal", 4, "ngSwitchCase"], ["class", "bg-pokePoison", 4, "ngSwitchCase"], ["class", "bg-pokePsychic", 4, "ngSwitchCase"], ["class", "bg-pokeRock", 4, "ngSwitchCase"], ["class", "bg-pokeSteel", 4, "ngSwitchCase"], ["class", "bg-pokeWater", 4, "ngSwitchCase"], [1, "bg-pokeBug"], [1, "bg-pokeDark"], [1, "bg-pokeDragon"], [1, "bg-pokeElectric"], [1, "bg-pokeFairy"], [1, "bg-pokeFighting"], [1, "bg-pokeFire"], [1, "bg-pokeFlying"], [1, "bg-pokeGhost"], [1, "bg-pokeGround"], [1, "bg-pokeGrass"], [1, "bg-pokeIce"], [1, "bg-pokeNormal"], [1, "bg-pokePoison"], [1, "bg-pokePsychic"], [1, "bg-pokeRock"], [1, "bg-pokeSteel"], [1, "bg-pokeWater"]],
  template: function PokemonTypeImgComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonTypeImgComponent_p_1_Template, 2, 0, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PokemonTypeImgComponent_p_2_Template, 2, 0, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PokemonTypeImgComponent_p_3_Template, 2, 0, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PokemonTypeImgComponent_p_4_Template, 2, 0, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PokemonTypeImgComponent_p_5_Template, 2, 0, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PokemonTypeImgComponent_p_6_Template, 2, 0, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PokemonTypeImgComponent_p_7_Template, 2, 0, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PokemonTypeImgComponent_p_8_Template, 2, 0, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PokemonTypeImgComponent_p_9_Template, 2, 0, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PokemonTypeImgComponent_p_10_Template, 2, 0, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PokemonTypeImgComponent_p_11_Template, 2, 0, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PokemonTypeImgComponent_p_12_Template, 2, 0, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PokemonTypeImgComponent_p_13_Template, 2, 0, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PokemonTypeImgComponent_p_14_Template, 2, 0, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PokemonTypeImgComponent_p_15_Template, 2, 0, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PokemonTypeImgComponent_p_16_Template, 2, 0, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PokemonTypeImgComponent_p_17_Template, 2, 0, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PokemonTypeImgComponent_p_18_Template, 2, 0, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.pokemonType);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "bug");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "dragon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "electric");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "fairy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "fighting");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "fire");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "flying");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ghost");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ground");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "grass");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ice");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "normal");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "poison");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "psychic");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "rock");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "steel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "water");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchCase],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 904:
/*!*******************************************************!*\
  !*** ./src/app/services/favorite-pokemons.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FavoritePokemonsService: () => (/* binding */ FavoritePokemonsService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_esgi_cicd_exam_esgi_cicd_exam_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 3285);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ 4404);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 4080);






class FavoritePokemonsService {
  constructor() {
    this.firestore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore);
    this.angularFirestore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore);
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.Auth);
    this.serviceCollection = 'favoritePokemons';
    this.favoritePokemonRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.firestore, this.serviceCollection);
  }
  getFavoritePokemons() {
    var _this = this;
    return (0,_home_runner_work_esgi_cicd_exam_esgi_cicd_exam_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let userID = _this._getUserID();
      if (userID == undefined) return [];
      let query = yield _this.angularFirestore.firestore.collection(_this.serviceCollection).where('userId', '==', userID).get();
      let pokemons = [];
      query.docs.forEach(doc => pokemons.push(doc.data()));
      return pokemons;
    })();
  }
  getFavoritePokemon(pokemonID) {
    var _this2 = this;
    return (0,_home_runner_work_esgi_cicd_exam_esgi_cicd_exam_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let userID = _this2._getUserID();
      if (userID == undefined) return false;
      let query = yield _this2.angularFirestore.firestore.collection(_this2.serviceCollection).where('userId', '==', userID).where('pokemonId', '==', pokemonID).get();
      let docs = query.docs;
      return docs.length != 0;
    })();
  }
  setFavoritePokemon(pokemonID, value) {
    var _this3 = this;
    return (0,_home_runner_work_esgi_cicd_exam_esgi_cicd_exam_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let userID = _this3.auth.currentUser?.uid;
      if (userID == undefined) return false;
      let query = yield _this3.angularFirestore.firestore.collection(_this3.serviceCollection).where('userId', '==', userID).where('pokemonId', '==', pokemonID).get();
      let exist = query.docs.length != 0;
      if (value && !exist) {
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)(_this3.favoritePokemonRef, {
          userId: userID,
          pokemonId: pokemonID
        });
        return true;
      }
      if (!value && exist) {
        query.docs.forEach(doc => doc.ref.delete());
        return false;
      }
      return value && exist;
    })();
  }
  _getUserID() {
    return this.auth.currentUser?.uid;
  }
}
FavoritePokemonsService.ɵfac = function FavoritePokemonsService_Factory(t) {
  return new (t || FavoritePokemonsService)();
};
FavoritePokemonsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: FavoritePokemonsService,
  factory: FavoritePokemonsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2293:
/*!***************************************************!*\
  !*** ./src/app/services/local-pokemon.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalPokemonService: () => (/* binding */ LocalPokemonService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _poke_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./poke-api.service */ 4296);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9736);




/**
 * Service utilisé pour obtenir les pokemons, sauvegardés directement dans le stockage local
 */
class LocalPokemonService {
  constructor() {
    this.pokeApiService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_poke_api_service__WEBPACK_IMPORTED_MODULE_0__.PokeApiService);
    this.pokemons = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.pokeApiService.getAllPokemonDetails().subscribe(pokemons => this.pokemons.next(pokemons));
  }
  /**
   * Obtenir les pokemons par critères
   * @param criteria critères de selection
   * @param limit limite d'élements
   * @param offset offset de selection
   */
  getPokemonsByCriteria(criteria) {
    return this.pokemons.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(pokemons => pokemons.filter(pokemon => {
      if (criteria.name !== undefined && !pokemon.name.includes(criteria.name)) {
        return false;
      }
      return true;
    })));
  }
  getPokemon(id) {
    return this.pokemons.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(pokemons => pokemons.find(pokemon => pokemon.id == id)));
  }
}
LocalPokemonService.ɵfac = function LocalPokemonService_Factory(t) {
  return new (t || LocalPokemonService)();
};
LocalPokemonService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LocalPokemonService,
  factory: LocalPokemonService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4296:
/*!**********************************************!*\
  !*** ./src/app/services/poke-api.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PokeApiService: () => (/* binding */ PokeApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4300);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);




/**
 * Service permettant de récupérer les informations de la PokeAPI (https://pokeapi.co)
 */
class PokeApiService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
    this.pokemonUrl = 'https://pokeapi.co/api/v2/';
  }
  /**
   * Obtenir la liste de tout les pokemons
   */
  getAllPokemons() {
    return this.http.get(`${this.pokemonUrl}pokemon?limit=10000`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.results));
  }
  /**
   * Obtenir le détail de tout les pokemons
   */
  getAllPokemonDetails() {
    return this.getAllPokemons().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(pokemons => {
      const pokemonObservables = pokemons.map(pokemon => {
        return this.http.get(pokemon.url);
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)(pokemonObservables);
    }));
  }
  getPokemonCount() {
    return this.http.get(this.pokemonUrl + "pokemon?limit=1").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(apiRes => apiRes.count));
  }
}
PokeApiService.ɵfac = function PokeApiService_Factory(t) {
  return new (t || PokeApiService)();
};
PokeApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: PokeApiService,
  factory: PokeApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  firebase: {
    projectId: 'pokedexesgi',
    appId: '1:716410472706:web:50f30d652acf6efb8f5a1b',
    storageBucket: 'pokedexesgi.appspot.com',
    apiKey: 'AIzaSyDpEwMaowo1kWp0go96kf2AsBreVRY-M3M',
    authDomain: 'pokedexesgi.firebaseapp.com',
    messagingSenderId: '716410472706'
  }
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map