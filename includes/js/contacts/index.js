(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["includes/js/contacts/index"],{

/***/ "./resources/assets/js/_models/index.js":
/*!**********************************************!*\
  !*** ./resources/assets/js/_models/index.js ***!
  \**********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./resources/assets/js/_models/user.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return _user__WEBPACK_IMPORTED_MODULE_0__[\"User\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2pzL19tb2RlbHMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL19tb2RlbHMvaW5kZXguanM/MDVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL3VzZXInOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/js/_models/index.js\n");

/***/ }),

/***/ "./resources/assets/js/_models/user.js":
/*!*********************************************!*\
  !*** ./resources/assets/js/_models/user.js ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return User; });\n// this is for demo only, not being used for now\nclass User {\n  constructor(username, token, permission) {\n    this.username = username;\n    this.token = token;\n    this.permission = permission;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2pzL19tb2RlbHMvdXNlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvX21vZGVscy91c2VyLmpzP2NlNzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBpcyBmb3IgZGVtbyBvbmx5LCBub3QgYmVpbmcgdXNlZCBmb3Igbm93XHJcbmV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICAgY29uc3RydWN0b3IodXNlcm5hbWUsIHRva2VuLCBwZXJtaXNzaW9uKSB7XHJcbiAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICB0aGlzLnRva2VuID0gdG9rZW47XHJcbiAgICB0aGlzLnBlcm1pc3Npb24gPSBwZXJtaXNzaW9uO1xyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/js/_models/user.js\n");

/***/ }),

/***/ "./resources/assets/js/_services/auth-header.js":
/*!******************************************************!*\
  !*** ./resources/assets/js/_services/auth-header.js ***!
  \******************************************************/
/*! exports provided: authHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authHeader\", function() { return authHeader; });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction authHeader() {\n  // return authorization header with jwt token\n  let token = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('CBSTORAGE_BEARER-TOKEN');\n\n  if (token) {\n    return {\n      'Authorization': 'Bearer ' + JSON.parse(token)\n    };\n  } else {\n    return {};\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2pzL19zZXJ2aWNlcy9hdXRoLWhlYWRlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvX3NlcnZpY2VzL2F1dGgtaGVhZGVyLmpzP2JiZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhdXRoSGVhZGVyKCkge1xyXG4gICAgLy8gcmV0dXJuIGF1dGhvcml6YXRpb24gaGVhZGVyIHdpdGggand0IHRva2VuXHJcbiAgICBsZXQgdG9rZW4gPSBDb29raWVzLmdldCgnQ0JTVE9SQUdFX0JFQVJFUi1UT0tFTicpO1xyXG5cclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHJldHVybiB7ICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgSlNPTi5wYXJzZSh0b2tlbikgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/js/_services/auth-header.js\n");

/***/ }),

/***/ "./resources/assets/js/_services/auth.service.js":
/*!*******************************************************!*\
  !*** ./resources/assets/js/_services/auth.service.js ***!
  \*******************************************************/
/*! exports provided: authService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authService\", function() { return authService; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models */ \"./resources/assets/js/_models/index.js\");\n// this is just sample code. this app doesn't use VUE for login auth\n\n\nconst authService = {\n  login: login,\n  logout: logout\n};\nconst API_URL = 'http://localhost/cbtest/api/v1/';\n\nfunction login(username, password) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(API_URL + 'login', {\n    username: username,\n    password: password\n  }).then(response => {\n    const user = new _models__WEBPACK_IMPORTED_MODULE_1__[\"User\"]('', '', []);\n\n    if (!response.data.error) {\n      user.username = username;\n      user.token = response.data.data;\n      user.permission = [];\n      localStorage.setItem('user', JSON.stringify(user));\n    }\n\n    return user;\n  });\n}\n\nfunction logout() {\n  localStorage.removeItem('user');\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2pzL19zZXJ2aWNlcy9hdXRoLnNlcnZpY2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL19zZXJ2aWNlcy9hdXRoLnNlcnZpY2UuanM/NmYyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGlzIGp1c3Qgc2FtcGxlIGNvZGUuIHRoaXMgYXBwIGRvZXNuJ3QgdXNlIFZVRSBmb3IgbG9naW4gYXV0aFxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vX21vZGVscyc7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aFNlcnZpY2UgPSB7XHJcbiAgICBsb2dpbixcclxuICAgIGxvZ291dFxyXG59O1xyXG5cclxuY29uc3QgQVBJX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0L2NidGVzdC9hcGkvdjEvJztcclxuXHJcblxyXG5mdW5jdGlvbiBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiBheGlvc1xyXG4gICAgICAucG9zdChBUElfVVJMICsgJ2xvZ2luJywge1xyXG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcignJywnJyxbXSk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5kYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgIHVzZXIudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgICAgICAgICAgdXNlci50b2tlbiA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgdXNlci5wZXJtaXNzaW9uID0gW107XHJcblxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG5mdW5jdGlvbiAgbG9nb3V0KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICB9XHJcblxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/js/_services/auth.service.js\n");

/***/ }),

/***/ "./resources/assets/js/_services/contacts.service.js":
/*!***********************************************************!*\
  !*** ./resources/assets/js/_services/contacts.service.js ***!
  \***********************************************************/
/*! exports provided: contactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactService\", function() { return contactService; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst contactService = {\n  getcontacts: getcontacts,\n  getcontact: getcontact,\n  createcontact: createcontact,\n  updatecontact: updatecontact,\n  deletecontact: deletecontact\n};\nconst client = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: 'http://localhost/cbtest/api/v1',\n  json: true\n});\n\nasync function execute(method, resource, data) {\n  // inject the accessToken for each request\n  //from helper\n  return client({\n    method: method,\n    url: resource,\n    data: data //headers: {\n    // Authorization: `Bearer ${accessToken}`\n    //}\n\n  }).then(req => {\n    return req.data;\n  });\n}\n\nfunction getcontacts() {\n  return execute('get', '/contacts');\n}\n\nfunction getcontact(id) {\n  return execute('get', `/contacts/${id}`);\n}\n\nfunction createcontact(data) {\n  return execute('post', '/contacts', data);\n}\n\nfunction updatecontact(id, data) {\n  return execute('put', `/contacts/${id}`, data);\n}\n\nfunction deletecontact(id) {\n  return execute('delete', `/contacts/${id}`);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2pzL19zZXJ2aWNlcy9jb250YWN0cy5zZXJ2aWNlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9fc2VydmljZXMvY29udGFjdHMuc2VydmljZS5qcz83OWYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3QgY29udGFjdFNlcnZpY2UgPSB7XHJcbiAgICBnZXRjb250YWN0cyxcclxuICAgIGdldGNvbnRhY3QsXHJcbiAgICBjcmVhdGVjb250YWN0LFxyXG4gICAgdXBkYXRlY29udGFjdCxcclxuICAgIGRlbGV0ZWNvbnRhY3RcclxufTtcclxuXHJcbmNvbnN0IGNsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdC9jYnRlc3QvYXBpL3YxJyxcclxuICAgIGpzb246IHRydWVcclxuICB9KVxyXG4gIFxyXG4gICAgIGFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGUgKG1ldGhvZCwgcmVzb3VyY2UsIGRhdGEpIHtcclxuICAgICAgLy8gaW5qZWN0IHRoZSBhY2Nlc3NUb2tlbiBmb3IgZWFjaCByZXF1ZXN0XHJcbiAgICAgIC8vZnJvbSBoZWxwZXJcclxuICAgICAgcmV0dXJuIGNsaWVudCh7XHJcbiAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgIHVybDogcmVzb3VyY2UsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICAvL2hlYWRlcnM6IHtcclxuICAgICAgICAgLy8gQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWBcclxuICAgICAgICAvL31cclxuICAgICAgfSkudGhlbihyZXEgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXEuZGF0YVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0Y29udGFjdHMgKCkge1xyXG4gICAgICByZXR1cm4gZXhlY3V0ZSgnZ2V0JywgJy9jb250YWN0cycpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRjb250YWN0IChpZCkge1xyXG4gICAgICByZXR1cm4gZXhlY3V0ZSgnZ2V0JywgYC9jb250YWN0cy8ke2lkfWApXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVjb250YWN0IChkYXRhKSB7XHJcbiAgICAgIHJldHVybiBleGVjdXRlKCdwb3N0JywgJy9jb250YWN0cycsIGRhdGEpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVjb250YWN0IChpZCwgZGF0YSkge1xyXG4gICAgICByZXR1cm4gZXhlY3V0ZSgncHV0JywgYC9jb250YWN0cy8ke2lkfWAsIGRhdGEpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkZWxldGVjb250YWN0IChpZCkge1xyXG4gICAgICByZXR1cm4gZXhlY3V0ZSgnZGVsZXRlJywgYC9jb250YWN0cy8ke2lkfWApXHJcbiAgICB9XHJcblxyXG5cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFQQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/js/_services/contacts.service.js\n");

/***/ }),

/***/ "./resources/assets/js/_services/index.js":
/*!************************************************!*\
  !*** ./resources/assets/js/_services/index.js ***!
  \************************************************/
/*! exports provided: userService, authService, authHeader, contactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ \"./resources/assets/js/_services/user.service.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"userService\", function() { return _user_service__WEBPACK_IMPORTED_MODULE_0__[\"userService\"]; });\n\n/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ \"./resources/assets/js/_services/auth.service.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authService\", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__[\"authService\"]; });\n\n/* harmony import */ var _auth_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-header */ \"./resources/assets/js/_services/auth-header.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"authHeader\", function() { return _auth_header__WEBPACK_IMPORTED_MODULE_2__[\"authHeader\"]; });\n\n/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts.service */ \"./resources/assets/js/_services/contacts.service.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"contactService\", function() { return _contacts_service__WEBPACK_IMPORTED_MODULE_3__[\"contactService\"]; });\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2pzL19zZXJ2aWNlcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvX3NlcnZpY2VzL2luZGV4LmpzP2Y0Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYXV0aC1oZWFkZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbnRhY3RzLnNlcnZpY2UnOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/js/_services/index.js\n");

/***/ }),

/***/ "./resources/assets/js/_services/user.service.js":
/*!*******************************************************!*\
  !*** ./resources/assets/js/_services/user.service.js ***!
  \*******************************************************/
/*! exports provided: userService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userService\", function() { return userService; });\n// this is for demo only, not being used for now\nconst userService = {\n  getAll: getAll\n};\n\nfunction getAll() {\n  const requestOptions = {\n    method: 'GET',\n    headers: authHeader()\n  };\n  return fetch(`http://localhost/cbtest/api/vi/users`, requestOptions).then(handleResponse);\n}\n\nfunction handleResponse(response) {\n  return response.text().then(text => {\n    const data = text && JSON.parse(text);\n\n    if (!response.ok) {\n      if (response.status === 401) {\n        // auto logout if 401 response returned from api\n        logout();\n        location.reload(true);\n      }\n\n      const error = data && data.message || response.statusText;\n      return Promise.reject(error);\n    }\n\n    return data;\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2pzL19zZXJ2aWNlcy91c2VyLnNlcnZpY2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL19zZXJ2aWNlcy91c2VyLnNlcnZpY2UuanM/NGVmYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGlzIGZvciBkZW1vIG9ubHksIG5vdCBiZWluZyB1c2VkIGZvciBub3dcclxuZXhwb3J0IGNvbnN0IHVzZXJTZXJ2aWNlID0ge1xyXG4gICAgZ2V0QWxsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRBbGwoKSB7XHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IGF1dGhIZWFkZXIoKVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3QvY2J0ZXN0L2FwaS92aS91c2Vyc2AsIHJlcXVlc3RPcHRpb25zKS50aGVuKGhhbmRsZVJlc3BvbnNlKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRleHQgJiYgSlNPTi5wYXJzZSh0ZXh0KTtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gYXV0byBsb2dvdXQgaWYgNDAxIHJlc3BvbnNlIHJldHVybmVkIGZyb20gYXBpXHJcbiAgICAgICAgICAgICAgICBsb2dvdXQoKTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSAoZGF0YSAmJiBkYXRhLm1lc3NhZ2UpIHx8IHJlc3BvbnNlLnN0YXR1c1RleHQ7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pO1xyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/js/_services/user.service.js\n");

/***/ }),

/***/ "./resources/assets/js/contacts/index.js":
/*!***********************************************!*\
  !*** ./resources/assets/js/contacts/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_Vue) {/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ \"./resources/assets/js/_services/index.js\");\n/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ \"./node_modules/bootstrap-vue/esm/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.css */ \"./node_modules/bootstrap-vue/dist/bootstrap-vue.css\");\n/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n__webpack_provided_window_dot_Vue = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  el: '#app',\n  data: function () {\n    return {\n      loading: false,\n      contacts: [],\n      model: {}\n    };\n  },\n  created: async function () {\n    this.refreshcontacts();\n  },\n  methods: {\n    refreshcontacts: async function () {\n      this.loading = true;\n      this.contacts = await _services__WEBPACK_IMPORTED_MODULE_1__[\"contactService\"].getcontacts();\n      this.contacts = this.contacts.data;\n      this.loading = false;\n    },\n    populatecontactToEdit: async function (contact) {\n      this.model = Object.assign({}, contact);\n    },\n    savecontact: async function () {\n      if (this.model.name) {\n        await _services__WEBPACK_IMPORTED_MODULE_1__[\"contactService\"].updatecontact(this.model.name, this.model);\n      } else {\n        await _services__WEBPACK_IMPORTED_MODULE_1__[\"contactService\"].createcontact(this.model);\n      }\n\n      this.model = {}; // reset form\n\n      await this.refreshcontacts();\n    },\n    deletecontact: async function (id) {\n      if (confirm('Are you sure you want to delete this contact?')) {\n        // if we are editing a contact we deleted, remove it from the form\n        if (this.model.id === id) {\n          this.model = {};\n        }\n\n        await _services__WEBPACK_IMPORTED_MODULE_1__[\"contactService\"].deletecontact(id);\n        await this.refreshcontacts();\n      }\n    }\n  },\n  mounted: function () {\n    this.refreshcontacts();\n\n    if (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.devtools && console.log) {\n      console.log('ColdBox, Vue and Vueify all set to go!');\n      console.log(\"Vue Version \" + vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].version);\n    }\n  }\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! vue/dist/vue.esm.js */ \"./node_modules/vue/dist/vue.esm.js\")[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbnRhY3RzL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb250YWN0cy9pbmRleC5qcz9jZWY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcclxuaW1wb3J0IHsgY29udGFjdFNlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZXMnO1xyXG5cclxuaW1wb3J0IEJvb3RzdHJhcFZ1ZSBmcm9tICdib290c3RyYXAtdnVlJ1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC12dWUvZGlzdC9ib290c3RyYXAtdnVlLmNzcydcclxuXHJcblZ1ZS51c2UoQm9vdHN0cmFwVnVlKVxyXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxyXG5cclxud2luZG93LlZ1ZSA9IHJlcXVpcmUoICd2dWUnICk7XHJcblxyXG5uZXcgVnVlKHtcclxuICAgIGVsICA6ICcjYXBwJyxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGNvbnRhY3RzOiBbXSxcclxuICAgICAgICAgIG1vZGVsOiB7fVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgY3JlYXRlZCAoKSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoY29udGFjdHMoKVxyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgYXN5bmMgcmVmcmVzaGNvbnRhY3RzICgpIHtcclxuICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcclxuICAgICAgICAgIHRoaXMuY29udGFjdHMgPSBhd2FpdCBjb250YWN0U2VydmljZS5nZXRjb250YWN0cygpXHJcbiAgICAgICAgICB0aGlzLmNvbnRhY3RzID0gdGhpcy5jb250YWN0cy5kYXRhXHJcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgcG9wdWxhdGVjb250YWN0VG9FZGl0IChjb250YWN0KSB7XHJcbiAgICAgICAgICB0aGlzLm1vZGVsID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGFjdClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIHNhdmVjb250YWN0ICgpIHtcclxuICAgICAgICAgIGlmICh0aGlzLm1vZGVsLm5hbWUpIHtcclxuICAgICAgICAgICAgYXdhaXQgY29udGFjdFNlcnZpY2UudXBkYXRlY29udGFjdCh0aGlzLm1vZGVsLm5hbWUsIHRoaXMubW9kZWwpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhd2FpdCBjb250YWN0U2VydmljZS5jcmVhdGVjb250YWN0KHRoaXMubW9kZWwpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLm1vZGVsID0ge30gLy8gcmVzZXQgZm9ybVxyXG4gICAgICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoY29udGFjdHMoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgZGVsZXRlY29udGFjdCAoaWQpIHtcclxuICAgICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY29udGFjdD8nKSkge1xyXG4gICAgICAgICAgICAvLyBpZiB3ZSBhcmUgZWRpdGluZyBhIGNvbnRhY3Qgd2UgZGVsZXRlZCwgcmVtb3ZlIGl0IGZyb20gdGhlIGZvcm1cclxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5tb2RlbCA9IHt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXdhaXQgY29udGFjdFNlcnZpY2UuZGVsZXRlY29udGFjdChpZClcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZWZyZXNoY29udGFjdHMoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hjb250YWN0cygpO1xyXG4gICAgICAgIGlmICggVnVlLmNvbmZpZy5kZXZ0b29scyAmJiBjb25zb2xlLmxvZyApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdDb2xkQm94LCBWdWUgYW5kIFZ1ZWlmeSBhbGwgc2V0IHRvIGdvIScgKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coIFwiVnVlIFZlcnNpb24gXCIgKyBWdWUudmVyc2lvbiApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG59KVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTVCQTtBQThCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaERBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/js/contacts/index.js\n");

/***/ })

},[["./resources/assets/js/contacts/index.js","includes/js/runtime","includes/js/vendor"]]]);