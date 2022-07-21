(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/storage2/Downloads/bookStorecode-main/BookStoreFrontend/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2HCW":
    /*!**************************************************!*\
      !*** ./src/app/Component/wish/wish.component.ts ***!
      \**************************************************/

    /*! exports provided: WishComponent */

    /***/
    function HCW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WishComponent", function () {
        return WishComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Service_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/Service/cart.service */
      "QiK6");
      /* harmony import */


      var src_app_Service_wishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/Service/wishlist.service */
      "rbIm");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../toolbar/toolbar.component */
      "DHZB");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../footer/footer.component */
      "PyQ/");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function WishComponent_div_9_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets\\bookimage\\", book_r1.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r1.bookName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r1.authorName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Rs. ", book_r1.price, " ");
        }
      }

      function WishComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WishComponent_div_9_div_1_Template, 10, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WishComponent_div_9_Template_button_click_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var book_r1 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.addtobag(book_r1.bookId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " AddTocart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WishComponent_div_9_Template_button_click_5_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var book_r1 = restoredCtx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.remoiveFromWish(book_r1.bookId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Remove ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", book_r1 != null);
        }
      }

      var WishComponent = /*#__PURE__*/function () {
        function WishComponent(cartService, wishlistService, route, matSnackBar) {
          _classCallCheck(this, WishComponent);

          this.cartService = cartService;
          this.wishlistService = wishlistService;
          this.route = route;
          this.matSnackBar = matSnackBar;
          this.books = [];
          this.WishListdetails = new Array();
        }

        _createClass(WishComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.booksFromWishList();
            this.BookCount();
          }
        }, {
          key: "booksFromWishList",
          value: function booksFromWishList() {
            var _this = this;

            this.wishlistService.getWishllistBooks().subscribe(function (Response) {
              console.log('no of books in array ' + Response.obj.length);
              _this.countbook = Response.obj.length;
              console.log('wishlist books', Response.obj);
              console.log('---response', Response);
              _this.books = Response.obj; // tslint:disable-next-line: prefer-for-of

              for (var i = 0; i < Response.obj.length; i++) {
                console.log('bookName : ' + Response.obj[0].booksList[0].bookName);
                console.log('bookDetails : ' + Response.obj[0].booksList[0].bookDetails);
                console.log('authorName : ' + Response.obj[0].booksList[0].authorName);
                console.log('noOfBooks : ' + Response.obj[0].booksList[0].noOfBooks);
                console.log('image : ' + Response.obj[0].booksList[0].image);
                console.log('price : ' + Response.obj[0].booksList[0].price);
                console.log('bookId : ' + Response.obj[0].booksList[0].bookId);
                console.log('books are ' + _this.books);
                var p = {
                  bookName: Response.obj[i].booksList[0].bookName,
                  bookDetails: Response.obj[i].bookDetails,
                  authorName: Response.obj[i].booksList[0].authorName,
                  noOfBooks: Response.obj[i].booksList[0].noOfBooks,
                  image: Response.obj[i].booksList[0].image,
                  price: Response.obj[i].booksList[0].price,
                  bookId: Response.obj[i].booksList[0].bookId
                };

                _this.WishListdetails.push(p);

                console.log('after push ', _this.WishListdetails);
              }
            });
          }
        }, {
          key: "BookCount",
          value: function BookCount() {
            var _this2 = this;

            this.wishlistService.getWishlistCount().subscribe(function (Response) {
              console.log('book count = ' + Response.obj);
              _this2.bookcount = Response.obj;

              _this2.matSnackBar.open(Response.message, 'undo', {
                duration: 2500
              });
            }, function (error) {
              console.error(error);
              console.log(error.error.message);

              _this2.matSnackBar.open(error.error.message, 'undo', {
                duration: 2500
              });
            });
          }
        }, {
          key: "remoiveFromWish",
          value: function remoiveFromWish(BookId) {
            var _this3 = this;

            console.log('removeing bookId ' + BookId);
            this.wishlistService.removeFromWishList(BookId).subscribe(function (response) {
              _this3.matSnackBar.open('Book removed from wish list', 'success', {
                duration: 5000
              });

              window.location.reload();
              sessionStorage.removeItem(BookId);
            }, function (error) {
              _this3.matSnackBar.open(error.error.message, 'failed', {
                duration: 5000
              });
            });
          }
        }, {
          key: "addToWish",
          value: function addToWish(orderId) {
            var _this4 = this;

            console.log('removeing bookId ' + orderId);
            this.wishlistService.addToWishlist(orderId).subscribe(function (response) {
              _this4.matSnackBar.open('Book removed from wish list', 'success', {
                duration: 5000
              });
            }, function (error) {
              _this4.matSnackBar.open(error.error.message, 'failed', {
                duration: 5000
              });
            });
          }
        }, {
          key: "addtobag",
          value: function addtobag(bookId) {
            var _this5 = this;

            if (localStorage.getItem('token') === null) {
              this.matSnackBar.open('Please Login first', 'ok', {
                duration: 5000
              });
              sessionStorage.setItem(bookId, bookId);
              this.route.navigateByUrl('login');
            }

            sessionStorage.setItem(bookId, bookId);
            this.cartService.addToCart(bookId).subscribe(function (data) {
              return _this5.handleResponse(data);
            }, function (error) {
              return _this5.handleError(error);
            });
          }
        }, {
          key: "handleResponse",
          value: function handleResponse(data) {
            console.log(data);
            window.location.reload();
            this.matSnackBar.open('Book added successfully Into Cart', 'ok', {
              duration: 5000
            });
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            this.error = error.error.message;
            console.log(error);
            window.location.reload();
            this.matSnackBar.open(this.error, 'ok', {
              duration: 5000
            });
          }
        }]);

        return WishComponent;
      }();

      WishComponent.ɵfac = function WishComponent_Factory(t) {
        return new (t || WishComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
      };

      WishComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WishComponent,
        selectors: [["app-wish"]],
        decls: 14,
        vars: 2,
        consts: [["role", "combobox", "flex", "column", 2, "margin-left", "16%"], [1, "matcard2"], [4, "ngFor", "ngForOf"], [2, "margin-top", "330px"], [4, "ngIf"], ["fxLayoutAlign", "start end", "fxLayout", "row wrap", 2, "margin-left", "12%", "margin-bottom", "2%"], ["mat-raised-button", "", 1, "button2", 3, "click"], ["mat-raised-button", "", 1, "button", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start start", 1, "cartdetails", 2, "margin-left", "2%"], [1, "bookimg", 3, "src"], [1, "bookdetails"], [1, "booktitle", 2, "word-wrap", "break-word"], [1, "sub", 2, "word-wrap", "break-word"], [1, "price", 2, "word-wrap", "break-word"]],
        template: function WishComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WishComponent_div_9_Template, 7, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("My WishList book\xA0(", ctx.countbook, ") ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.WishListdetails);
          }
        },
        directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]],
        styles: [".cartdetails[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 5%;\n  position: relative;\n}\n\n.bookdetails[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-left: 65px;\n}\n\n.mycart[_ngcontent-%COMP%] {\n  top: 135px;\n  left: 213px;\n  width: 65%;\n  height: 62px;\n  font-size: larger;\n  font: bold;\n}\n\n.booktitle[_ngcontent-%COMP%] {\n  width: 90%;\n  text-align: left;\n  letter-spacing: 0px;\n  color: #0a0102;\n  opacity: 1;\n  display: flex;\n  margin-left: -46px;\n}\n\n.sub[_ngcontent-%COMP%] {\n  color: #9d9d9d;\n  opacity: 1;\n  margin-bottom: 15%;\n  margin-top: 5%;\n  margin-left: -46px;\n}\n\n.matcard2[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  padding-bottom: 4.2%;\n  border: 1px solid #9d9d9d;\n  border-radius: 3px;\n}\n\n.button[_ngcontent-%COMP%] {\n  font-size: 17px;\n  margin-left: 74%;\n  margin-left: auto;\n  margin-bottom: 6%;\n  margin-top: -49px;\n  text-align: center;\n  color: white;\n  background-color: #a03037;\n}\n\n.button2[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-left: 62%;\n  margin-bottom: 6%;\n  margin-top: -49px;\n  text-align: center;\n  color: white;\n  background-color: #a03037;\n}\n\n.bookimg[_ngcontent-%COMP%] {\n  top: 192px;\n  left: 213px;\n  width: 65px;\n  height: 90px;\n}\n\n.price[_ngcontent-%COMP%] {\n  font: Bold 18px/15px Lato;\n  margin-bottom: 30px;\n  margin-left: -46px;\n}\n\n@media (min-width: 728px) {\n  .footer[_ngcontent-%COMP%] {\n    margin-right: 13%;\n    margin-top: 272px;\n  }\n\n  .foot[_ngcontent-%COMP%] {\n    margin-top: 760px;\n    margin-right: 13%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .footer[_ngcontent-%COMP%] {\n    margin-right: 13%;\n    margin-top: 600px;\n  }\n\n  .foot[_ngcontent-%COMP%] {\n    margin-top: 1100px;\n    margin-right: 13%;\n  }\n}\n\n@media (max-width: 414px) {\n  .footer[_ngcontent-%COMP%] {\n    margin-right: 12%;\n  }\n\n  .foot[_ngcontent-%COMP%] {\n    margin-top: 450px;\n    margin-right: 8%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3dpc2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksK0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBREo7O0FBS0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtFQUZOOztFQUlFO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtFQUROO0FBQ0Y7O0FBSUE7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsaUJBQUE7RUFGTjs7RUFJRTtJQUNJLGtCQUFBO0lBQ0EsaUJBQUE7RUFETjtBQUNGOztBQUlBO0VBQ0k7SUFDSSxpQkFBQTtFQUZOOztFQUlFO0lBQ0ksaUJBQUE7SUFDQSxnQkFBQTtFQUROO0FBQ0YiLCJmaWxlIjoid2lzaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0ZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvL21hcmdpbi1sZWZ0OiAzNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib29rZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1sZWZ0OiA2NXB4O1xufVxuXG4ubXljYXJ0IHtcbiAgICB0b3A6IDEzNXB4O1xuICAgIGxlZnQ6IDIxM3B4O1xuICAgIHdpZHRoOiA2NSU7XG4gICAgaGVpZ2h0OiA2MnB4O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgIGZvbnQ6IGJvbGQ7XG59XG5cbi5ib29rdGl0bGUge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIGNvbG9yOiAjMGEwMTAyO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogLTQ2cHg7XG59XG5cbi5zdWIge1xuICAgIGNvbG9yOiAjOWQ5ZDlkO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUlO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNDZweDtcbn1cblxuLm1hdGNhcmQyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDYwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNC4yJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWQ5ZDlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiA3NCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogNiU7XG4gICAgbWFyZ2luLXRvcDogLTQ5cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTAzMDM3O1xuICAgIC8vbWFyZ2luLWxlZnQ6IDE4NXB4O1xufVxuXG4uYnV0dG9uMiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA2MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogNiU7XG4gICAgbWFyZ2luLXRvcDogLTQ5cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTAzMDM3O1xuICAgIC8vbWFyZ2luLWxlZnQ6IDE4NXB4O1xufVxuXG4uYm9va2ltZyB7XG4gICAgdG9wOiAxOTJweDtcbiAgICBsZWZ0OiAyMTNweDtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDkwcHg7XG59XG5cbi5wcmljZSB7XG4gICAgZm9udDogQm9sZCAxOHB4LzE1cHggTGF0bztcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNDZweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcyOHB4KSB7XG4gICAgLmZvb3RlciB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTMlO1xuICAgICAgICBtYXJnaW4tdG9wOiAyNzJweDtcbiAgICB9XG4gICAgLmZvb3Qge1xuICAgICAgICBtYXJnaW4tdG9wOiA3NjBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMyU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmZvb3RlciB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTMlO1xuICAgICAgICBtYXJnaW4tdG9wOiA2MDBweDtcbiAgICB9XG4gICAgLmZvb3Qge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMTAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTMlO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gICAgLmZvb3RlciB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTIlO1xuICAgIH1cbiAgICAuZm9vdCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQ1MHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDglO1xuICAgIH1cbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "3nxd":
    /*!****************************************************************!*\
      !*** ./src/app/Component/displaybook/displaybook.component.ts ***!
      \****************************************************************/

    /*! exports provided: DisplaybookComponent */

    /***/
    function nxd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisplaybookComponent", function () {
        return DisplaybookComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Model_book_book_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/Model/book/book.module */
      "WeDW");
      /* harmony import */


      var src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/Service/book.service */
      "upCK");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_Service_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/Service/cart.service */
      "QiK6");
      /* harmony import */


      var src_app_Service_wishlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/Service/wishlist.service */
      "rbIm");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _Pipe_booksearchpipe_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../Pipe/booksearchpipe.pipe */
      "5s37");

      function DisplaybookComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Books ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DisplaybookComponent_div_2_Template_select_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sort by relevance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Price: High to low");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Price: Low to High");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Newest: Arrival");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx_r0.size, " \xA0Items) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectedValue);
        }
      }

      function DisplaybookComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "There is not any books to display please add some book and approved it");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DisplaybookComponent_div_6_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Out Of stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DisplaybookComponent_div_6_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Only ", book_r6.noOfBooks, " left hurry up ");
        }
      }

      function DisplaybookComponent_div_6_ng_template_17_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Available Books: ", book_r6.noOfBooks, " ");
        }
      }

      function DisplaybookComponent_div_6_ng_template_17_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 36);
        }
      }

      function DisplaybookComponent_div_6_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DisplaybookComponent_div_6_ng_template_17_div_0_Template, 2, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DisplaybookComponent_div_6_ng_template_17_div_1_Template, 1, 0, "div", 34);
        }

        if (rf & 2) {
          var book_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", book_r6.noOfBooks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !book_r6.noOfBooks);
        }
      }

      function DisplaybookComponent_div_6_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 38, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("output", function DisplaybookComponent_div_6_div_19_Template_button_output_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.getUpdatedNotes($event);
          })("click", function DisplaybookComponent_div_6_div_19_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var book_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.addtobag(book_r6.bookId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ADD TO BAG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplaybookComponent_div_6_div_19_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var book_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.addtoWish(book_r6.bookId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "WISHLIST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DisplaybookComponent_div_6_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " ADDED TO BAG ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DisplaybookComponent_div_6_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplaybookComponent_div_6_div_21_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var book_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.addtoWish(book_r6.bookId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "WISHLIS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DisplaybookComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplaybookComponent_div_6_Template_mat_card_title_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var book_r6 = restoredCtx.$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.Deatails(book_r6.bookId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DisplaybookComponent_div_6_div_5_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DisplaybookComponent_div_6_div_16_Template, 2, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DisplaybookComponent_div_6_ng_template_17_Template, 2, 2, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DisplaybookComponent_div_6_div_19_Template, 8, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DisplaybookComponent_div_6_div_20_Template, 3, 0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DisplaybookComponent_div_6_div_21_Template, 3, 0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r6 = ctx.$implicit;

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets\\bookimage\\", book_r6.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !book_r6.noOfBooks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r6.bookName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r6.bookDetails, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("by ", book_r6.authorName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", book_r6.price, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", book_r6.noOfBooks < 5 && book_r6.noOfBooks)("ngIfElse", _r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", book_r6.noOfBooks && ctx_r2.value[book_r6.bookId] != book_r6.bookId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", book_r6.noOfBooks && ctx_r2.value[book_r6.bookId] == book_r6.bookId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !book_r6.noOfBooks);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function DisplaybookComponent_div_9_a_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplaybookComponent_div_9_a_3_Template_a_click_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var i_r33 = restoredCtx.index;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r34.SetPage(i_r33, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r33 = ctx.index;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r33 == ctx_r31.page));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r33 + 1);
        }
      }

      function DisplaybookComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplaybookComponent_div_9_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.previos($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " < ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DisplaybookComponent_div_9_a_3_Template, 2, 4, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplaybookComponent_div_9_Template_a_click_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r38.next($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ">");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.totalPage);
        }
      }

      var DisplaybookComponent = /*#__PURE__*/function () {
        function DisplaybookComponent(service, matSnackBar, route, cartService, wishlistService) {
          _classCallCheck(this, DisplaybookComponent);

          this.service = service;
          this.matSnackBar = matSnackBar;
          this.route = route;
          this.cartService = cartService;
          this.wishlistService = wishlistService;
          this.selectedValue = 'relevance';
          this.orderBy = 'asc';
          this.error = null;
          this.bookList = Array();
          this.book = new src_app_Model_book_book_module__WEBPACK_IMPORTED_MODULE_1__["BookModule"]();
          this.items = [];
          this.pageofItems = new Array();
          this.page = 0;
          this.length = sessionStorage.length;
          this.lengths = 0;
          this.value = [];
          this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(DisplaybookComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getallApprovedBooks();
            this.getSearchBookData();
            this.leng = sessionStorage.length;

            for (var i = 0; i < sessionStorage.length; i++) {
              var key = sessionStorage.key(i);
              this.value[sessionStorage.getItem(key)] = sessionStorage.getItem(key);
              console.log('key ::' + key);
            }

            console.log(this.value);
          }
        }, {
          key: "onChange",
          value: function onChange(deviceValue) {
            this.selectedValue = deviceValue;
            console.log(' this is tha value of drope down ' + deviceValue);

            switch (this.selectedValue) {
              case 'mod1':
                console.log('vikash kumar1');
                this.approvedBookServiceMethod(this.page, 'price', 'des');
                console.log('Books are from 1  ', this.bookList);
                break;

              case 'mod2':
                this.approvedBookServiceMethod(this.page, 'price', 'asc');
                console.log('Books are from 2  ', this.bookList);
                break;

              case 'mod3':
                this.approvedBookServiceMethod(this.page, 'created_date_and_time', 'asc');
                console.log('Books are from 3  ', this.bookList);
                break;
            }
          }
        }, {
          key: "getallApprovedBooks",
          value: function getallApprovedBooks() {
            this.approvedBookServiceMethod(this.page, 'book_id', 'asc');
          }
        }, {
          key: "approvedBookServiceMethod",
          value: function approvedBookServiceMethod(page, order, sortby) {
            var _this6 = this;

            this.service.getAllApprovedBookByPage(page, order, sortby).subscribe(function (response) {
              console.log(response);
              console.log('Books are the' + response.obj);
              _this6.bookList = response.obj.content;
              _this6.size = response.obj.totalElements;
              _this6.CurrentPageNo = response.obj.pageable.pageNumber;
              _this6.totalPage = new Array(response.obj.totalPages);
              console.log('Total pages is: ' + _this6.totalPage);
              console.log('total books are ' + _this6.size);
              console.log('curret page number is ' + _this6.CurrentPageNo);
              console.log('Books are  ', _this6.bookList.length);
            });
          }
        }, {
          key: "getSearchBookData",
          value: function getSearchBookData() {
            var _this7 = this;

            this.service.getSearchBookData().subscribe(function (message) {
              console.log('search data', message.books);
              _this7.bookSearch = message.books;
            });
          }
        }, {
          key: "SetPage",
          value: function SetPage(i, event) {
            event.preventDefault();
            this.page = i;
            console.log('page number you want is' + i);
            this.getallApprovedBooks();
          }
        }, {
          key: "previos",
          value: function previos(event) {
            event.preventDefault();
            this.page = this.page - 1;
            console.log('current page from previous' + 'next' + this.page);
            this.getallApprovedBooks();
          }
        }, {
          key: "next",
          value: function next(event) {
            event.preventDefault();
            this.page = this.page + 1;
            console.log('current page from next ' + 'next' + this.page);
            this.getallApprovedBooks();
          }
        }, {
          key: "addtobag",
          value: function addtobag(bookId) {
            var _this8 = this;

            if (localStorage.getItem('token') === null) {
              this.matSnackBar.open('Please Login first', 'ok', {
                duration: 5000
              });
              this.route.navigateByUrl('login');
              return;
            }

            sessionStorage.setItem(bookId, bookId);
            this.ngOnInit();
            this.cartService.addToCart(bookId).subscribe(function (data) {
              return _this8.handleResponse(data);
            }, function (error) {
              return _this8.handleError(error);
            });
          }
        }, {
          key: "handleResponse",
          value: function handleResponse(data) {
            console.log(data);
            this.matSnackBar.open('Book added successfully Into Cart', 'ok', {
              duration: 5000
            });
          }
        }, {
          key: "handleWishResponse",
          value: function handleWishResponse(wishdata) {
            console.log(wishdata);
            this.matSnackBar.open('Book is added successfully to wishlist', 'ok', {
              duration: 5000
            });
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            this.error = error.error.message;
            console.log(error);
            this.matSnackBar.open(this.error, 'ok', {
              duration: 5000
            });
          }
        }, {
          key: "getOutput",
          value: function getOutput() {}
        }, {
          key: "Deatails",
          value: function Deatails(bookId) {
            console.log('Redirected to page no ' + bookId);
            this.route.navigateByUrl('books/info/' + bookId);
          }
        }, {
          key: "getUpdatedNotes",
          value: function getUpdatedNotes(event) {
            this.ngOnInit();
          }
        }, {
          key: "addtoWish",
          value: function addtoWish(bookId) {
            var _this9 = this;

            if (localStorage.getItem('token') === null) {
              this.matSnackBar.open('Please Login first', 'ok', {
                duration: 5000
              });
              this.route.navigateByUrl('login');
            }

            this.wishlistService.addToWishlist(bookId).subscribe(function (wishdata) {
              return _this9.handleWishResponse(wishdata);
            }, function (error) {
              return _this9.handleError(error);
            });
          }
        }]);

        return DisplaybookComponent;
      }();

      DisplaybookComponent.ɵfac = function DisplaybookComponent_Factory(t) {
        return new (t || DisplaybookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_wishlist_service__WEBPACK_IMPORTED_MODULE_6__["WishlistService"]));
      };

      DisplaybookComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DisplaybookComponent,
        selectors: [["app-displaybook"]],
        outputs: {
          output: "output"
        },
        decls: 10,
        vars: 7,
        consts: [[1, "main-container"], [1, "container"], [4, "ngIf"], ["class", "alert alert-danger text-justify", 4, "ngIf"], [1, "list-books"], [4, "ngFor", "ngForOf"], [1, "container", "text-center"], ["class", "pagination", 4, "ngIf"], [1, "title"], [2, "font-size", "15px", "font-family", "Lato, Regular", "color", "rgb(139, 136, 136)"], ["id", "sort", "fxFlexAlign", "end", 2, "float", "right", "height", "30px", "width", "161px", "padding-top", "0px", "margin-top", "-24px", "padding", "5px", "display", "flex", "margin-right", "74px", "border", "1px solid #e0d6d6", "outline", "none", "background-color", "white", "border-radius", "3px", 3, "ngModel", "ngModelChange"], ["value", "relevance"], ["value", "mod1"], ["value", "mod2"], ["value", "mod3"], [1, "alert", "alert-danger", "text-justify"], [1, "tooltip1", 2, "height", "22.5em", "width", "220px", "margin-right", "40px"], ["matTooltip", "Book Image", 3, "click"], [2, "height", "150px", "width", "90px", "margin-left", "55px", "margin-right", "55px", "padding-top", "20px", "padding-bottom", "20px", 3, "src"], [2, "width", "16em"], ["class", "out-of-stock ", 4, "ngIf"], [1, "bookname"], [1, "tooltiptext"], [2, "text-align", "left", "padding-left", "10px"], [1, "authorname"], [1, "price"], ["class", "availablity ", "style", "color: rgb(163, 43, 6); ", 4, "ngIf", "ngIfElse"], ["elsecondition", ""], ["class", "cart-buttons ", 4, "ngIf"], ["class", "addedbtn ", 4, "ngIf"], ["class", "addedbtn ", 3, "click", 4, "ngIf"], [1, "out-of-stock"], [1, "availablity", 2, "color", "rgb(163, 43, 6)"], ["class", "availablity ", "style", "color: rgb(2, 110, 2); ", 4, "ngIf"], ["style", "height: 26px; ", 4, "ngIf"], [1, "availablity", 2, "color", "rgb(2, 110, 2)"], [2, "height", "26px"], [1, "cart-buttons"], ["mat-button", "", 1, "addtobag", 3, "output", "click"], ["clickState", ""], [2, "border", "1px solid #e0d6d6", "outline", "none", "width", "83px", "height", "35px", "background-color", "white", "border-radius", "3px", 3, "click"], [1, "addedbtn"], ["mat-button", "", 2, "height", "32px", "width", "191px", "background-color", "#3371b5", "border-radius", "2px", "color", "whitesmoke", "text-align", "center"], [1, "addedbtn", 3, "click"], ["mat-button", "", 2, "height", "34px", "width", "191px", "border-radius", "0px", "display", "flex", "align-items", "center", "justify-content", "center", "border", "1px solid #e0d6d6", "outline", "none", "border-radius", "2px", "opacity", "1"], [1, "pagination"], ["href", "#", "href", "#", 2, "margin-right", "12px", "border-radius", "40px", "border", "1px solid  #e0d6d6", "padding-right", "10px", 3, "click"], ["href", "", "fxFlexAlign", "center", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["href", "#", "href", "#", 2, "margin-right", "12px", "border-radius", "40px", "border", "1px solid #e0d6d6", "padding-right", "10px", 3, "click"], ["href", "", "fxFlexAlign", "center", 3, "ngClass", "click"]],
        template: function DisplaybookComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DisplaybookComponent_div_2_Template, 15, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DisplaybookComponent_div_4_Template, 2, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DisplaybookComponent_div_6_Template, 22, 11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "booksearchpipe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DisplaybookComponent_div_9_Template, 6, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bookList.length != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bookList.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, ctx.bookList, ctx.bookSearch));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bookList.length != 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_z"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultClassDirective"]],
        pipes: [_Pipe_booksearchpipe_pipe__WEBPACK_IMPORTED_MODULE_14__["BooksearchpipePipe"]],
        styles: [".bottom[_ngcontent-%COMP%] {\n  background-color: black;\n  padding: 20px;\n  text-align: center;\n  color: white;\n  bottom: 0px;\n  width: 100%;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: bolder;\n  font-family: Lato, Regular;\n  align-items: flex-start;\n  margin-top: 20px;\n}\n\n.sort-choice[_ngcontent-%COMP%] {\n  align-content: flex-end;\n  align-items: flex-end;\n  z-index: 3001;\n}\n\n.list-books[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 14.4rem;\n  padding-right: 2em;\n  border: 1px solid;\n  border-color: #f0eeee;\n  margin-bottom: 20px;\n}\n\n.mat-card.mat-card[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n  background: #f5f5f5 0% 0% no-repeat padding-box;\n}\n\n.mat-card-title.mat-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  height: 171px auto;\n  width: 219px;\n  align-items: center;\n  align-content: center;\n}\n\n.bookname[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 7px;\n  font-size: large;\n  font-weight: bolder;\n  font-size: 14px;\n  font-family: Lato, Regular;\n}\n\n.authorname[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 7px;\n  font-size: 12px;\n  font-family: Lato, Regular;\n  color: gray;\n}\n\n.price[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 5px;\n  font-size: 14px;\n  font-family: Lato, Regular;\n  font-weight: bolder;\n  color: #080808;\n}\n\n.availablity[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 12px;\n  font-size: 13px;\n  font-family: Lato;\n  color: rgba(87, 25, 25, 0.904);\n}\n\n.cart-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: 15px;\n  margin-right: 20px;\n  padding-bottom: 20px;\n  justify-content: space-between;\n}\n\n.btn-addbook[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #a03037;\n  height: 30px;\n  width: 81px;\n  padding: 0px;\n  border-radius: 3px;\n  font-size: small;\n  border: none;\n  cursor: pointer;\n}\n\n.addtobag[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #a03037;\n  height: 35px;\n  width: 93px;\n  padding: 0px;\n  border-radius: 0px;\n  font-size: small;\n  border: none;\n  cursor: pointer;\n}\n\n.wishlist[_ngcontent-%COMP%] {\n  height: 35px;\n  margin-left: 10px;\n  width: auto;\n  background-color: white;\n  cursor: pointer;\n  border-radius: 0px;\n}\n\n.update[_ngcontent-%COMP%] {\n  height: 35px;\n  margin-left: 10px;\n  width: 83px;\n  background-color: white;\n  cursor: pointer;\n  border-radius: 0px;\n}\n\n.addedbtn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ngx-pagination[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  padding: 0.1875rem 0.625rem;\n  background: #8f2b2f !important;\n  color: #fefefe;\n  cursor: default;\n}\n\n.out-of-stock[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  text-align: center;\n  padding: 8px 0px;\n  font-size: medium;\n  position: absolute;\n  font-family: Lato;\n  font-weight: bold;\n  top: 100px;\n  left: 30px;\n  right: 30px;\n  box-shadow: 0px 3px 8px #00000029;\n  border-radius: 2px;\n  opacity: 0.9;\n  text-transform: uppercase;\n}\n\n.out-of-stock[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  text-align: center;\n  padding: 8px 0px;\n  font-size: medium;\n  position: absolute;\n  top: 100px;\n  left: 30px;\n  right: 30px;\n  box-shadow: 0px 3px 8px #00000029;\n  border-radius: 2px;\n  opacity: 0.9;\n  text-transform: uppercase;\n}\n\n.ngx-pagination[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  padding: 0.1875rem 0.625rem;\n  background: #8f2b2f !important;\n  color: #fefefe;\n  cursor: default;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: inline-block;\n  align-items: center;\n  padding-bottom: 20px;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font: Medium Lato;\n  letter-spacing: 0px;\n  color: #707070;\n  opacity: 1;\n  font-size: 9px/11px;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n}\n\nmat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;\n  color: none;\n}\n\n.pagination[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: #8F2B2F;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: #d4d5d2;\n}\n\n.pbtn[_ngcontent-%COMP%] {\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border: 1px solid #E2E2E2;\n  opacity: 1;\n}\n\n.tooltip1[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip1[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 300px;\n  background-color: #faf6f6;\n  color: #b6a5a5;\n  text-align: center;\n  border-radius: 6px;\n  padding: 2px 0;\n  padding-left: 10px;\n  position: absolute;\n  z-index: 1;\n  top: -5px;\n  left: 110%;\n  padding-bottom: 20%;\n  padding-left: 20%;\n  padding-right: 20%;\n  padding-top: 10%;\n}\n\n.tooltip1[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  right: 100%;\n  margin-top: -5px;\n}\n\n.tooltip1[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Rpc3BsYXlib29rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUdBO0VBQ0ksK0NBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFNQTtFQUNJLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUhKOztBQU1BO0VBQ0ksK0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBSEo7O0FBTUE7RUFDSSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUhKOztBQVNBO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBTko7O0FBU0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFOSjs7QUFTQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFOSjs7QUFTQTtFQUNJLDREQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVNBO0VBQ0kseUJBQUE7QUFOSjs7QUFTQTtFQUNJLHlCQUFBO0FBTko7O0FBU0E7RUFDSSwrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQU5KOztBQVNBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQU5KOztBQVNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFOSjs7QUFTQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFOSjs7QUFTQTtFQUNJLG1CQUFBO0FBTkoiLCJmaWxlIjoiZGlzcGxheWJvb2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LWZhbWlseTogTGF0bywgUmVndWxhcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc29ydC1jaG9pY2Uge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB6LWluZGV4OiAzMDAxO1xufVxuXG4ubGlzdC1ib29rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gei1pbmRleDogMzAwMTtcbn1cblxubWF0LWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiAxNC40cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHJnYigyNDAsIDIzOCwgMjM4KTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubWF0LWNhcmQubWF0LWNhcmQge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxubWF0LWNhcmQtdGl0bGUge1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xufVxuXG4ubWF0LWNhcmQtdGl0bGUubWF0LWNhcmQtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxNzFweCBhdXRvO1xuICAgIHdpZHRoOiAyMTlweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJvb2tuYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogTGF0bywgUmVndWxhcjtcbn1cblxuLmF1dGhvcm5hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6IExhdG8sIFJlZ3VsYXI7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbi5wcmljZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogTGF0bywgUmVndWxhcjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yOiByZ2IoOCwgOCwgOCk7XG59XG5cbi5hdmFpbGFibGl0eSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IExhdG87XG4gICAgY29sb3I6IHJnYmEoODcsIDI1LCAyNSwgMC45MDQpO1xufVxuXG4uY2FydC1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmJ0bi1hZGRib29rIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwMzAzNztcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDgxcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGR0b2JhZyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMDMwMzc7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiA5M3B4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud2lzaGxpc3Qge1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4udXBkYXRlIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IDgzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLmFkZGVkYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8vIHBhZ2luYXRpb24tY29udHJvbHMgbGkuY3VycmVudCB7XG4vLyAgIGJhY2tncm91bmQ6IGdyYXk7XG4vLyB9XG4ubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xuICAgIHBhZGRpbmc6IDAuMTg3NXJlbSAwLjYyNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0MywgNDMsIDQ3LCAxKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmVmZWZlO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLm91dC1vZi1zdG9jayB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRvcDogMTAwcHg7XG4gICAgbGVmdDogMzBweDtcbiAgICByaWdodDogMzBweDtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDhweCAjMDAwMDAwMjk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ub3V0LW9mLXN0b2NrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4IDBweDtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDBweDtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggOHB4ICMwMDAwMDAyOTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8vIHBhZ2luYXRpb24tY29udHJvbHMgbGkuY3VycmVudCB7XG4vLyAgIGJhY2tncm91bmQ6IGdyYXk7XG4vLyB9XG4ubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xuICAgIHBhZGRpbmc6IDAuMTg3NXJlbSAwLjYyNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0MywgNDMsIDQ3LCAxKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmVmZWZlO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLnBhZ2luYXRpb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4ucGFnaW5hdGlvbiBhIHtcbiAgICBmb250OiBNZWRpdW0gTGF0bztcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC1zaXplOiA5cHgvMTFweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbm1hdC1jYXJkOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IG5vbmU7XG59XG5cbi5wYWdpbmF0aW9uIGEuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEYyQjJGO1xufVxuXG4ucGFnaW5hdGlvbiBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDVkMjtcbn1cblxuLnBidG4ge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMkUyRTI7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnRvb2x0aXAxIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9vbHRpcDEgLnRvb2x0aXB0ZXh0IHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI0NiwgMjQ2KTtcbiAgICBjb2xvcjogcmdiKDE4MiwgMTY1LCAxNjUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZzogMnB4IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogLTVweDtcbiAgICBsZWZ0OiAxMTAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMCU7XG4gICAgcGFkZGluZy1yaWdodDogMjAlO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbi50b29sdGlwMSAudG9vbHRpcHRleHQ6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4udG9vbHRpcDE6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "4B9C":
    /*!***************************************************************************!*\
      !*** ./src/app/Component/auth/reset-password/reset-password.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ResetPasswordComponent */

    /***/
    function B9C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
        return ResetPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/Service/user.service */
      "BE6J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _spineer_spineer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../spineer/spineer.component */
      "OLkV");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function ResetPasswordComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spineer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResetPasswordComponent_div_1_div_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Password must contain 6 character.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResetPasswordComponent_div_1_div_13_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "must contain at least one letter, at least one number, and be longer than six charaters.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResetPasswordComponent_div_1_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_div_1_div_13_div_1_Template, 4, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetPasswordComponent_div_1_div_13_div_2_Template, 4, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.pattern);
        }
      }

      function ResetPasswordComponent_div_1_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Password must contain 6 character.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResetPasswordComponent_div_1_div_14_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Password & Confirm Password does not match.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResetPasswordComponent_div_1_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_div_1_div_14_div_1_Template, 4, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetPasswordComponent_div_1_div_14_div_2_Template, 4, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.pattern);
        }
      }

      function ResetPasswordComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bookstore");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Update Your Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_div_1_Template_form_ngSubmit_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResetPasswordComponent_div_1_div_13_Template, 3, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ResetPasswordComponent_div_1_div_14_Template, 3, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Enter your Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_div_1_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.form.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Enter Valid Email Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Enter password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_div_1_Template_input_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.form.newPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Please Enter Strong Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Confirm password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_div_1_Template_input_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.form.confirmPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Please Enter valid Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.touched && !_r5.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.touched && !_r7.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r1.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.form.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.form.newPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", _r5.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.form.confirmPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r2.valid);
        }
      }

      var ResetPasswordComponent = /*#__PURE__*/function () {
        function ResetPasswordComponent(user, route, matSnakeBar, activatedRoute) {
          _classCallCheck(this, ResetPasswordComponent);

          this.user = user;
          this.route = route;
          this.matSnakeBar = matSnakeBar;
          this.activatedRoute = activatedRoute;
          this.error = null;
          this.isLoading = false;
          this.form = {
            email: null,
            newPassword: null,
            confirmPassword: null
          };
        }

        _createClass(ResetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.activatedRoute.paramMap.subscribe(function (parameters) {
              _this10.token = parameters.get('token');
              console.log(_this10.token);
            });
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            this.isLoading = false;
            this.error = error.error.message;
            console.log(error);
            this.matSnakeBar.open(this.error, 'ok', {
              duration: 5000
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this11 = this;

            this.isLoading = true;
            this.user.updatePassword(this.form, this.token).subscribe(function (data) {
              return _this11.handleResponse(data);
            }, function (error) {
              return _this11.handleError(error);
            });
          }
        }, {
          key: "handleResponse",
          value: function handleResponse(data) {
            this.isLoading = false;
            this.matSnakeBar.open('Sucessfull Update Password ', 'ok', {
              duration: 5000
            });
            this.route.navigateByUrl('\login');
          }
        }]);

        return ResetPasswordComponent;
      }();

      ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
        return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      ResetPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ResetPasswordComponent,
        selectors: [["app-reset-password"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], ["fxLayoutAlign", "center center", "fxFlexFill", "", 4, "ngIf"], ["fxLayoutAlign", "center center", "fxFlexFill", ""], ["fxFlex", "35", 2, "background-color", "rgb(252, 252, 252)"], ["fxLayout", "row wrap", "fxLayoutGap", "10px", "fxLayoutAlign", "flex-start", 2, "background-color", "#A03037", "padding-top", "16px"], [1, "imgLogo"], ["src", "assets\\education.svg", "alt", ""], [1, "title"], [2, "text-align", "left"], [3, "ngSubmit"], ["regForm", "ngForm"], [1, "example-container"], [1, "alert", "alert-danger", "text-justify", 3, "hidden"], ["appearance", "outline", "fxLayout", "column", 2, "width", "100%"], ["email", "", "required", "", "matInput", "", "type", "email", "placeholder", "Email", "name", "email", 3, "ngModel", "ngModelChange"], ["matSuffix", ""], ["appearance", "outline", 2, "width", "220px"], ["matInput", "", "required", "", "type", "password", "minlength", "5", "name", "newPassword", "pattern", "^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["appearance", "outline", 2, "width", "220px", "padding-left", "4px"], ["name", "confirmPassword", "matInput", "", "required", "", "type", "password", 3, "ngModel", "pattern", "ngModelChange"], ["pasword", "ngModel", "confirmpassword", "ngModel"], ["required", ""], [1, "text-right"], ["type", "submit", "id", "registrationBtn", "mat-raised-button", "", "color", "primary", 2, "background-color", "#a03037", "border-radius", "5px", "text-decoration-color", "#FFFFFF", "font-size", "20px", "font-weight", "500", "color", "whitesmoke", "width", "106px", "height", "40px", 3, "disabled"]],
        template: function ResetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResetPasswordComponent_div_0_Template, 2, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_div_1_Template, 45, 9, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _spineer_spineer_component__WEBPACK_IMPORTED_MODULE_5__["SpineerComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexFillDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["PatternValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]],
        styles: [".title[_ngcontent-%COMP%] {\n  text-align: left;\n  font: Regular 20px/26px Roboto;\n  letter-spacing: 0px;\n  color: #FFFFFF;\n  text-transform: capitalize;\n  opacity: 1;\n}\n\n.imgLogo[_ngcontent-%COMP%] {\n  margin-left: 35%;\n  width: 31px;\n  height: 24px;\n  opacity: 1;\n}\n\n.mat-error[_ngcontent-%COMP%] {\n  color: #a03037;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250OiBSZWd1bGFyIDIwcHgvMjZweCBSb2JvdG87XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uaW1nTG9nbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgICB3aWR0aDogMzFweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLm1hdC1lcnJvciB7XG4gICAgY29sb3I6ICNhMDMwMzc7XG59Il19 */"]
      });
      /***/
    },

    /***/
    "5s37":
    /*!*********************************************!*\
      !*** ./src/app/Pipe/booksearchpipe.pipe.ts ***!
      \*********************************************/

    /*! exports provided: BooksearchpipePipe */

    /***/
    function s37(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BooksearchpipePipe", function () {
        return BooksearchpipePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BooksearchpipePipe = /*#__PURE__*/function () {
        function BooksearchpipePipe() {
          _classCallCheck(this, BooksearchpipePipe);
        }

        _createClass(BooksearchpipePipe, [{
          key: "transform",
          value: function transform(book, searchTerm) {
            if (!book || !searchTerm) {
              console.log('searching the ' + searchTerm);
              return book;
            } else {
              // tslint:disable-next-line: no-shadowed-variable
              return book.filter(function (book) {
                if (searchTerm && book.bookName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                  return true;
                }

                if (searchTerm && book.authorName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                  return true;
                }

                if (searchTerm && book.status.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                  return true;
                }

                return false;
              });
            }
          }
        }]);

        return BooksearchpipePipe;
      }();

      BooksearchpipePipe.ɵfac = function BooksearchpipePipe_Factory(t) {
        return new (t || BooksearchpipePipe)();
      };

      BooksearchpipePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "booksearchpipe",
        type: BooksearchpipePipe,
        pure: true
      });
      /***/
    },

    /***/
    "9v7S":
    /*!****************************************************************!*\
      !*** ./src/app/Component/update-book/update-book.component.ts ***!
      \****************************************************************/

    /*! exports provided: UpdateBookComponent */

    /***/
    function v7S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateBookComponent", function () {
        return UpdateBookComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_Model_book_book_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/Model/book/book.module */
      "WeDW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Service/book.service */
      "upCK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var UpdateBookComponent = /*#__PURE__*/function () {
        function UpdateBookComponent(data, bookservice, activedRoute, router, matSnackBar, http, dialogRef) {
          _classCallCheck(this, UpdateBookComponent);

          this.data = data;
          this.bookservice = bookservice;
          this.activedRoute = activedRoute;
          this.router = router;
          this.matSnackBar = matSnackBar;
          this.http = http;
          this.dialogRef = dialogRef;
          this.bookName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.bookName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.authorName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.authorName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.price = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.noOfBooks = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.noOfBooks, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.bookDetails = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.bookDetails, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.updatebook = new src_app_Model_book_book_module__WEBPACK_IMPORTED_MODULE_2__["BookModule"]();
        }

        _createClass(UpdateBookComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSelectedImage",
          value: function onSelectedImage(event) {
            if (event.target.files.length > 0) {
              var image = event.target.files[0];
              this.imageFile = image.name;
            }
          }
        }, {
          key: "updateBook",
          value: function updateBook() {
            var _this12 = this;

            this.updatebook.bookName = this.data.bookName;
            this.updatebook.authorName = this.data.authorName;
            this.updatebook.price = this.data.price;
            this.updatebook.noOfBooks = this.data.noOfBooks;
            this.updatebook.bookDetails = this.data.bookDetails; // this.dialogRef.close();

            setTimeout(function () {
              _this12.bookservice.updateBook(_this12.data.bookId, _this12.updatebook).subscribe(function (response) {
                if (response.statusCode === 200) {
                  _this12.dialogRef.close({
                    data: _this12.updatebook
                  });

                  _this12.matSnackBar.open(response.response, 'undo', {
                    duration: 3000
                  });
                } else {
                  _this12.dialogRef.close();

                  _this12.matSnackBar.open('Book not updated...try again', 'undo', {
                    duration: 2500
                  });
                }
              }, function (error) {
                _this12.dialogRef.close();

                _this12.matSnackBar.open('something went wrong.....!', 'undo', {
                  duration: 2500
                });
              });
            }, 3000); // spinner
          }
        }]);

        return UpdateBookComponent;
      }();

      UpdateBookComponent.ɵfac = function UpdateBookComponent_Factory(t) {
        return new (t || UpdateBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]));
      };

      UpdateBookComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: UpdateBookComponent,
        selectors: [["app-update-book"]],
        decls: 40,
        vars: 11,
        consts: [[1, "container"], [2, "background-color", "#A03037", "width", "100%", "margin-bottom", "10px"], [2, "color", "white", "text-align", "center", "padding-top", "10px"], [2, "display", "flex", "flex-direction", "column", "margin-bottom", "0px"], ["appearance", "outline", 1, "example-full-width2", 2, "margin-bottom", "-1.25em"], ["type", "name", "id", "bookName", "matInput", "", "placeholder", "Enter your Bookname", "autocomplete", "off", "required", "", 3, "formControl", "ngModel", "ngModelChange"], ["matSuffix", "", 2, "color", "grey"], ["type", "name", "id", "bookAuthor", "matInput", "", "placeholder", "Enter your Bookauthour", "autocomplete", "off", "required", "", 3, "ngModel", "formControl", "ngModelChange"], ["appearance", "outline", 1, "example-full-width3", 2, "margin-bottom", "-1.25em"], ["type", "number", "id", "price", "matInput", "", "placeholder", " price", "required", "", 3, "ngModel", "formControl", "ngModelChange"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M8,3H18L17,5H13.74C14.22,5.58 14.58,6.26 14.79,7H18L17,9H15C14.75,11.57 12.74,13.63 10.2,13.96V14H9.5L15.5,21H13L7,14V12H9.5V12C11.26,12 12.72,10.7 12.96,9H7L8,7H12.66C12.1,5.82 10.9,5 9.5,5H7L8,3Z"], ["appearance", "outline", 1, "example-full-width4", 2, "margin-bottom", "-1.25em"], ["type", "text", "id", "qty", "matInput", "", "placeholder", "Enter your noofBooks", "autocomplete", "off", "required", "", 3, "ngModel", "formControl", "ngModelChange"], ["appearance", "outline", 1, "example-full-width5"], ["type", "text", "id", "desc", "matInput", "", "placeholder", "Enter your book details", "autocomplete", "off", "required", "", 3, "ngModel", "formControl", "ngModelChange"], [1, "submit"], ["id", "submit", "mat-button", "", 3, "disabled", "click"]],
        template: function UpdateBookComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Update Book");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "BOOK NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UpdateBookComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.data.bookName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "book");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "AUTHOR");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UpdateBookComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.data.authorName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "person");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "PRICE");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UpdateBookComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.data.price = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "svg", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "path", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "BOOK QUANTITY");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UpdateBookComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.data.noOfBooks = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "pets");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-form-field", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "DESCRIPTION");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UpdateBookComponent_Template_input_ngModelChange_34_listener($event) {
              return ctx.data.bookDetails = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateBookComponent_Template_button_click_38_listener() {
              return ctx.updateBook();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "UPDATE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.bookName)("ngModel", ctx.data.bookName);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.data.authorName)("formControl", ctx.authorName);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.data.price)("formControl", ctx.price);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.data.noOfBooks)("formControl", ctx.noOfBooks);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.data.bookDetails)("formControl", ctx.bookDetails);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.data.bookDetails);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]],
        styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  margin-top: 5%;\n  padding-bottom: 5%;\n  display: flex;\n  flex-direction: column;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: rgba(131, 4, 4, 0.8);\n  font-size: 1rem;\n  color: white;\n  height: auto;\n  width: auto;\n  border-radius: 0px;\n  margin: 0px;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 50%;\n  margin: 0;\n  padding: 0;\n}\n\n.login-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.box[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  opacity: 1;\n  float: left;\n  padding: 60px 50px 40px 50px;\n  width: 83%;\n  border-radius: 20px;\n  transform: translate(50%, 50%);\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  z-index: 5;\n  max-width: 330px;\n  margin: -24px;\n}\n\n.mat-form-field-infix[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  flex: auto;\n  min-width: 0;\n  width: 15px;\n}\n\n.submit[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 30px;\n  margin: 0px;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .btn-block3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #a03037;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .btn-block1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 100%;\n  font-size: 18px;\n  text-align: center;\n  color: white;\n  background-color: #a03037;\n  border-radius: 3px;\n  border: none;\n  opacity: 1;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .btn-block2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 100%;\n  font-size: 18px;\n  text-align: center;\n  color: white;\n  background-color: #a03037;\n  border-radius: 3px;\n  border: none;\n  opacity: 1;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  display: block;\n  font-weight: 700;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 0;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  padding: 30px 50px 30px;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  border: 1px solid currentColor;\n  line-height: 54px;\n  background: #fff7fa;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  flex: auto;\n  min-width: 0;\n  width: 50%;\n}\n\n.login-wrapper[_ngcontent-%COMP%] {\n  background-image: url(/assets/images/blur.jpg);\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-position: center;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  min-height: 70vh;\n}\n\n  .mat-step-header .mat-step-icon-selected,   .mat-step-header .mat-step-icon-state-done,   .mat-step-header .mat-step-icon-state-edit {\n  background-color: #a03037 !important;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #9fa19f !important;\n}\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #a03037 !important;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: red !important;\n  opacity: 0.8 !important;\n}\n\n  .mat-input-element {\n  caret-color: red !important;\n}\n\n  .mat-form-field-invalid .mat-input-element,   .mat-warn .mat-input-element {\n  caret-color: red !important;\n}\n\n  .mat-form-field-label {\n  color: #6e726e !important;\n}\n\n  .mat-form-field.mat-focused .mat-form-field-label {\n  color: #0a0102 !important;\n}\n\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: red !important;\n}\n\n.grab[_ngcontent-%COMP%] {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.example-radio-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: row;\n}\n\n.popup[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 70%;\n  border: none;\n  outline: none;\n  float: left;\n}\n\n.matcard[_ngcontent-%COMP%] {\n  \n  display: flex;\n  width: 36%;\n  border-radius: 12px;\n  height: 3%;\n  background-color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VwZGF0ZS1ib29rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBR0Esa0JBQUE7RUFHQSxhQUFBO0VBQ0Esc0JBQUE7QUFISjs7QUFLRTtFQUNFLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUZKOztBQUtFOztFQUVFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUlFO0VBQ0UsWUFBQTtBQURKOztBQUtFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFHQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFKSjs7QUFTRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVNFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBR0EsaUJBQUE7RUFDQSxXQUFBO0FBUko7O0FBV0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQVJKOztBQVVFO0VBQ0UsZUFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBUko7O0FBWUU7RUFDRSxlQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFWSjs7QUFlRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVpKOztBQWNFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7QUFYSjs7QUFhRTtFQUNFLHVCQUFBO0FBVko7O0FBWUU7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFlRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQVpKOztBQWNFO0VBQ0UsOENBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBRUEsMkJBQUE7QUFaSjs7QUFjRTtFQUNFLGdCQUFBO0FBWEo7O0FBa0JJOzs7RUFHRSxvQ0FBQTtBQWZOOztBQW1CSTtFQUNFLHlCQUFBO0FBakJOOztBQXFCSTtFQUNFLHlCQUFBO0FBbkJOOztBQXVCSTtFQUVFLHFCQUFBO0VBQ0EsdUJBQUE7QUF0Qk47O0FBMEJJO0VBQ0UsMkJBQUE7QUF4Qk47O0FBNEJJOztFQUVFLDJCQUFBO0FBMUJOOztBQThCSTtFQUNFLHlCQUFBO0FBNUJOOztBQWdDSTtFQUNFLHlCQUFBO0FBOUJOOztBQWtDSTtFQUNFLHFCQUFBO0FBaENOOztBQW1DRTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQWhDSjs7QUFrQ0U7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBL0JKOztBQWlDRTtFQUVJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBL0JOOztBQWlDRTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUVBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtBQS9CSiIsImZpbGUiOiJ1cGRhdGUtYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICAvLyBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xuICAgIC8vIG1hcmdpbjogMHJlbTtcbiAgICAvLyBwYWRkaW5nOiAwcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMxLCA0LCA0LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuICBcbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLmxvZ2luLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAvLyAucG9zaXRyb254XG4gIC8vIHt0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjojZmZmZmZmO31cbiAgLmJveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDYwcHggNTBweCA0MHB4IDUwcHg7XG4gICAgd2lkdGg6IDgzJTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYW1tLmpwZyk7XG4gICAgLy8gY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgei1pbmRleDogNTtcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xuICAgIG1hcmdpbjogLTI0cHg7XG4gIH1cbiAgXG5cbiBcbiAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleDogYXV0bztcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd2lkdGg6IDE1cHg7XG59XG4gXG4gIC5zdWJtaXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBtYXJnaW46IDBweCA7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIH1cbiAgLmxvZ2luLXdyYXBwZXIgLmJ0bi1ibG9jazMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogI2EwMzAzNztcbiAgfVxuICAubG9naW4td3JhcHBlciAuYnRuLWJsb2NrMSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIC8vICBjb2xvcjogZ3JlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwMzAzNztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG9wYWNpdHk6IDE7XG4gIFxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9ib29rc3RvcmUuanBnKTtcbiAgfVxuICAubG9naW4td3JhcHBlciAuYnRuLWJsb2NrMiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIC8vICBjb2xvcjogZ3JlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwMzAzNztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG9wYWNpdHk6IDE7XG4gIFxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9ib29rc3RvcmUuanBnKTtcbiAgfVxuICBcbiAgLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICAubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIgbWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmxvZ2luLXdyYXBwZXIgLm1hdC1jYXJkIHtcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHggMzBweDtcbiAgfVxuICAubG9naW4td3JhcHBlciAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gICAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjdmYTtcbiAgfVxuICAvLyAubG9naW4td3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgLy8gICBwYWRkaW5nOiAwLjgzNzVlbSAwO1xuICAvLyAgIHdpZHRoOjUwJTtcbiAgLy8gfVxuICAubG9naW4td3JhcHBlciAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4OiBhdXRvO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICB3aWR0aDogNTAlO1xufVxuICAubG9naW4td3JhcHBlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2JsdXIuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB9XG4gIC5sb2dpbi13cmFwcGVyIC5sb2dpbiB7XG4gICAgbWluLWhlaWdodDogNzB2aDtcbiAgfVxuICA6Om5nLWRlZXAge1xuICAgICRjdXN0b20tbWFpbi1jb2xvcjogcmVkO1xuICAgICRjdXN0b20tbGFiZWwtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgXG4gICAgLy8gbWF0LWljb24tc3RlcHBlciBzZWxlY3RlZCBjb2xvciBjaGFuZ2VcbiAgICAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxuICAgIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcbiAgICAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EwMzAzNyAhaW1wb3J0YW50O1xuICAgIH1cbiAgXG4gICAgLy8gaW5wdXQgb3V0bGluZSBjb2xvclxuICAgIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgY29sb3I6IHJnYigxNTksIDE2MSwgMTU5KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgXG4gICAgLy8gbWF0LWlucHV0IGZvY3VzZWQgY29sb3JcbiAgICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgIGNvbG9yOiAjYTAzMDM3ICFpbXBvcnRhbnQ7XG4gICAgfVxuICBcbiAgICAvLyBtYXQtaW5wdXQgZXJyb3Igb3V0bGluZSBjb2xvclxuICAgIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkXG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICBjb2xvcjogJGN1c3RvbS1tYWluLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICBvcGFjaXR5OiAwLjggIWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgIC8vIG1hdC1pbnB1dCBjYXJldCBjb2xvclxuICAgIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgICBjYXJldC1jb2xvcjogJGN1c3RvbS1tYWluLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgfVxuICBcbiAgICAvLyBtYXQtaW5wdXQgZXJyb3IgY2FyZXQgY29sb3JcbiAgICAubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQsXG4gICAgLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgICBjYXJldC1jb2xvcjogJGN1c3RvbS1tYWluLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgfVxuICBcbiAgICAvLyBtYXQtbGFiZWwgbm9ybWFsIHN0YXRlIHN0eWxlXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiByZ2IoMTEwLCAxMTQsIDExMCkgIWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgIC8vIG1hdC1sYWJlbCBmb2N1c2VkIHN0eWxlXG4gICAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogIzBhMDEwMiAhaW1wb3J0YW50O1xuICAgIH1cbiAgXG4gICAgLy8gbWF0LWxhYmVsIGVycm9yIHN0eWxlXG4gICAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkY3VzdG9tLW1haW4tY29sb3IgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLmdyYWIge1xuICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICAgIGN1cnNvcjogZ3JhYjtcbiAgfVxuICAuZXhhbXBsZS1yYWRpby1ncm91cCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAucG9wdXBcbiAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIGJvcmRlcjpub25lO1xuICAgICAgb3V0bGluZTpub25lO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLm1hdGNhcmR7XG4gICAgLyogbWFyZ2luLXRvcDogMTAwcHg7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMzYlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgaGVpZ2h0OiAzJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XG59Il19 */"]
      });
      /***/
    },

    /***/
    "Ac6Z":
    /*!************************************************************!*\
      !*** ./src/app/Component/dashboard/dashboard.component.ts ***!
      \************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function Ac6Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../toolbar/toolbar.component */
      "DHZB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../footer/footer.component */
      "PyQ/");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _sidenavbar_sidenavbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../sidenavbar/sidenavbar.component */
      "C2gm");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../admin/admin/admin.component */
      "VcT6");
      /* harmony import */


      var _seller_seller_seller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../seller/seller/seller.component */
      "DTTJ");
      /* harmony import */


      var _displaybook_displaybook_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../displaybook/displaybook.component */
      "3nxd");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function DashboardComponent_div_3_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_div_3_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-seller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function DashboardComponent_div_3_Template_mat_sidenav_openedChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.opened2 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidenavbar", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav-content", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_3_div_5_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_3_div_6_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx_r0.opened2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSeller);
        }
      }

      function DashboardComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-displaybook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(titleService) {
          _classCallCheck(this, DashboardComponent);

          this.titleService = titleService;
          this.opened = true;
          this.opened2 = false;
          this.isUser = false;
          this.isSeller = false;
          this.isAdmin = false;
          this.isLogin = false;
        }

        _createClass(DashboardComponent, [{
          key: "nameEventHander",
          value: function nameEventHander($event) {
            this.opened2 = $event;
            console.log('2', this.opened2);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.role = localStorage.getItem('role');
            this.setTitle('Bookstore');
            console.log('role check toolbar', this.role);

            if (this.role === 'admin') {
              this.isAdmin = true;
              this.isLogin = true;
            }

            if (this.role === 'seller') {
              this.isSeller = true;
              this.isLogin = true;
            }

            if (this.role === 'user') {
              this.isUser = true;
              this.isLogin = true;
              console.log('is user ', this.isUser);
            }
          }
        }, {
          key: "setTitle",
          value: function setTitle(dashboard) {
            this.titleService.setTitle(dashboard);
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]));
      };

      DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 6,
        vars: 2,
        consts: [[2, "height", "11%"], ["flexLayout", "row", 3, "toggleEvent"], [1, "dashboard-content", 2, "height", "84%", "margin-left", "0%", "padding-left", "0%"], ["class", "sidenav-div", 4, "ngIf"], [4, "ngIf"], [1, "sidenav-div"], [1, "sidenav-container"], ["mode", "side", 1, "matSidenav", 3, "opened", "openedChange"], ["fxFlex", "", 1, "app-sidenavbar"], [1, "sidenav-content"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleEvent", function DashboardComponent_Template_app_toolbar_toggleEvent_1_listener($event) {
              return ctx.nameEventHander($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_div_3_Template, 7, 3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_4_Template, 3, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin || ctx.isSeller);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSeller && !ctx.isAdmin);
          }
        },
        directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _sidenavbar_sidenavbar_component__WEBPACK_IMPORTED_MODULE_6__["SidenavbarComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"], _seller_seller_seller_component__WEBPACK_IMPORTED_MODULE_9__["SellerComponent"], _displaybook_displaybook_component__WEBPACK_IMPORTED_MODULE_10__["DisplaybookComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterOutlet"]],
        styles: [".dashboard-content[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.container[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  overflow-y: hidden;\n  height: 100%;\n  width: 100%;\n}\n\n.bottom[_ngcontent-%COMP%] {\n  background-color: #2E1D1E;\n  padding: 10px;\n  font-family: Lato;\n  padding-left: 100px;\n  color: white;\n  bottom: 0px;\n  width: 100%;\n}\n\n.mat-title[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 0;\n  padding-top: 5px;\n}\n\n.search[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 3px;\n  padding-left: 15px;\n  width: 100%;\n  border-radius: 5px;\n  border: none;\n}\n\ninput.input[_ngcontent-%COMP%]:focus {\n  outline-width: 0;\n}\n\nsidenav-div[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  border: none;\n  border-color: whitesmoke;\n  background-color: white;\n}\n\n.sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  border-color: whitesmoke;\n  background-color: white;\n}\n\n.matSidenav[_ngcontent-%COMP%] {\n  font-size: smaller;\n  font-family: monospace;\n  width: 10%;\n  height: 100%;\n  margin: 0;\n  top: 0;\n  overflow: hidden;\n  justify-content: center !important;\n  background-color: white;\n  border: none;\n  margin-top: 10px;\n}\n\n.sidenav-content[_ngcontent-%COMP%] {\n  justify-content: center;\n  width: 100%;\n  align-content: center;\n  height: 100%;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBRTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNOOztBQUVFO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ047O0FBRUU7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ047O0FBRUU7RUFDSSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQ047O0FBRUU7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDTjs7QUFFRTtFQUNJLGdCQUFBO0FBQ047O0FBR0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUdFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsdUJBQUE7RUFHQSxZQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFJRTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBREoiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuZGFzaGJvYXJkLWNvbnRlbnQge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5ib3R0b20ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJFMUQxRTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBmb250LWZhbWlseTogTGF0bztcbiAgICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3R0b206IDBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm1hdC10aXRsZSB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gIH1cblxuICAuc2VhcmNoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuXG4gIGlucHV0LmlucHV0OmZvY3VzIHtcbiAgICAgIG91dGxpbmUtd2lkdGg6IDA7XG4gIH1cblxuXG4gIHNpZGVuYXYtZGl2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlc21va2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5tYXRTaWRlbmF2IHtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICB3aWR0aDogMTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgdG9wOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAvLyBib3JkZXItY29sb3I6IDFweCB3aGl0ZXNtb2tlO1xuICAgIGJvcmRlcjpub25lO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH0gIFxuICAuc2lkZW5hdi1jb250ZW50IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: true,
        // BASE_URL: 'http://localhost:8081/',
        // BookUrl: 'http://localhost:8081/',
        // getallbooksurl: '',
        BASE_URL: 'http://localhost:8080',
        BookUrl: 'http://localhost:8080',
        getallbooksurl: 'books/',
        // BASE_URL: 'http://localhost:8080',
        // BookUrl: 'http://localhost:8080',
        // getallbooksurl: '',
        // BASE_URL: 'http://localhost:8080',
        // BookUrl: 'http://localhost:8080',
        // getallbooksurl: 'books/getAllBooks',
        getbookbyIdurl: 'books/',
        addandupdatecartUrl: 'books/addandupdatecart',
        sorting: 'books/sorting',
        SortNewestArrival: 'books/unsorting',
        cusUrl: 'books/pagewise',
        addbooks: 'books',
        deleteBook: 'books',
        editBook: 'books',
        verifyBook: 'books',
        addBookImage: 'books/bookimage',
        CartUrl: 'http://localhost:8080/',
        addUrl: 'customers/addcustomer',
        addtocart: 'carts/addcart',
        getbookprice: 'getbookprice',
        getReview: 'books/getratereviews',
        quantity: 'http://localhost:8080/',
        addbooksquantity: 'addbooksquantity',
        USER_REGISTRATION: 'registration',
        USER_LOGIN: 'login',
        USER_FORGET_PASSWORD: 'forgotpassword',
        USER_RESETPASSWORD: 'update',
        ADDCART: '/bookstore/v3/cart/addbookCart/',
        COUNT_BOOKS_IN_CART: '/bookstore/v3/cart/bookCount',
        DEC_BOOKS_QUANTITY: '/bookstore/v3/cart/decreaseQuantityPrice?bookId=',
        INC_BOOKS_QUANTITY: '/bookstore/v3/cart/increasebooksquantity?bookId=',
        REMOVE_BOOKS_FROM_CART: '/bookstore/v3/cart/removeCartBooks',
        GET_BOOKS_FROM_CART: '/bookstore/v3/cart/getcartbooks',
        GET_ADDRESS_BY_ADDRES: '/address/users',
        UPDATE_ADDRESS: '/address/updateAddress',
        ADD_ADDRESS: '/address/add',
        PLACE_ORDER: '/bookstore/placeOrder?addressId=',
        WRITE_REVIEW: 'books/ratingreview?bookId=',
        GET_REVIEWS: 'books/ratingreviews/?bookId=',
        ratereview: 'books/getratereviews/?bookId=',
        adminUrl: 'http://localhost:8080/',
        approveBook: 'admin/update/',
        rejectBook: 'admin/update/',
        unVerifiedBooks: 'admin/books',
        rejectedBooks: 'admin/books',
        approvedBooks: 'admin/books',
        avgrateofbook: 'books/avgrate?bookId=',
        getallOrderedBooks: 'bookstore/getOrdersByAdmin',
        changeOrderstatus: 'bookstore/orderStatusByAdmin',
        getOrdersByseller: 'bookstore/getOrdersByseller',
        getSortedBookByRate: 'books/sortbyrate',
        WISHLIST_ADD: 'bookstore/v3/wishlist/addbookWishlist',
        WISHLIST_GET: 'bookstore/v3/wishlist/getwishbooks',
        WISHLIST_COUNT: 'bookstore/v3/wishlist/wishlistcount',
        WISHLIST_REMOVE: 'bookstore/v3/wishlist/removeWishlist/'
      };
      /***/
    },

    /***/
    "BE6J":
    /*!*****************************************!*\
      !*** ./src/app/Service/user.service.ts ***!
      \*****************************************/

    /*! exports provided: UserService */

    /***/
    function BE6J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserService = /*#__PURE__*/function () {
        function UserService(http) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL;
          this.httpOtions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'content-type': 'application/json'
            })
          };
        }

        _createClass(UserService, [{
          key: "signUp",
          value: function signUp(data) {
            return this.http.post("".concat(this.baseUrl, "/registration"), data);
          }
        }, {
          key: "signIn",
          value: function signIn(data) {
            return this.http.post("".concat(this.baseUrl, "/user/login"), data);
          }
        }, {
          key: "verifyUserByToken",
          value: function verifyUserByToken(token) {
            return this.http.post("".concat(this.baseUrl, "/user/verify/"), token);
          }
        }, {
          key: "forgetPassword",
          value: function forgetPassword(data) {
            return this.http.post("".concat(this.baseUrl, "/user/forgotpassword"), data);
          }
        }, {
          key: "updatePassword",
          value: function updatePassword(_updatePassword, token) {
            return this.http.put("".concat(this.baseUrl, "/user/update/").concat(token), _updatePassword);
          }
        }, {
          key: "getAdress",
          value: function getAdress() {
            return this.http.get("".concat(this.baseUrl, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].GET_ADDRESS_BY_ADDRES), {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                token: localStorage.token
              })
            });
          }
        }, {
          key: "addAdress",
          value: function addAdress(address) {
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ADD_ADDRESS), address, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                token: localStorage.token
              })
            });
          }
        }, {
          key: "updateAdress",
          value: function updateAdress(address) {
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].UPDATE_ADDRESS), address, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                token: localStorage.token
              })
            });
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "C2gm":
    /*!**************************************************************!*\
      !*** ./src/app/Component/sidenavbar/sidenavbar.component.ts ***!
      \**************************************************************/

    /*! exports provided: SidenavbarComponent */

    /***/
    function C2gm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidenavbarComponent", function () {
        return SidenavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var _c0 = ["sidenav"];

      function SidenavbarComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavbarComponent_div_0_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.books();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavbarComponent_div_0_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.sellerBooks();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Seller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavbarComponent_div_0_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.orders();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SidenavbarComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavbarComponent_div_1_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.sellerBook();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Books");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavbarComponent_div_1_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.orderStatus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SidenavbarComponent = /*#__PURE__*/function () {
        function SidenavbarComponent(router, route) {
          _classCallCheck(this, SidenavbarComponent);

          this.router = router;
          this.route = route;
          this.isSeller = false;
          this.isAdmin = false;
        }

        _createClass(SidenavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.role = localStorage.getItem('role');
            console.log('role check sidenav', this.role);

            if (this.role === 'admin') {
              this.isAdmin = true;
            }

            if (this.role === 'seller') {
              this.isSeller = true;
            }
          }
        }, {
          key: "sellerBooks",
          value: function sellerBooks() {
            this.router.navigate(['books'], {
              queryParams: {
                book: 'unverified'
              }
            });
          }
        }, {
          key: "orders",
          value: function orders() {
            this.router.navigate(['books'], {
              queryParams: {
                book: 'order'
              }
            });
          }
        }, {
          key: "reviews",
          value: function reviews() {
            this.router.navigate(['books'], {
              queryParams: {
                book: 'review'
              }
            });
          }
        }, {
          key: "books",
          value: function books() {
            this.router.navigate(['books'], {
              queryParams: {
                book: 'books'
              }
            });
          }
        }, {
          key: "sellerBook",
          value: function sellerBook() {
            this.router.navigate(['books'], {
              queryParams: {
                book: 'sellerbook'
              }
            });
          }
        }, {
          key: "orderStatus",
          value: function orderStatus() {
            this.router.navigate(['books'], {
              queryParams: {
                book: 'order'
              }
            });
          }
        }]);

        return SidenavbarComponent;
      }();

      SidenavbarComponent.ɵfac = function SidenavbarComponent_Factory(t) {
        return new (t || SidenavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      SidenavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidenavbarComponent,
        selectors: [["app-sidenavbar"]],
        viewQuery: function SidenavbarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
          }
        },
        decls: 2,
        vars: 2,
        consts: [["class", "container", 4, "ngIf"], [1, "container"], ["id", "adminBookBtn", "mat-button", "", 1, "navbutton", 3, "click"], [1, "icon-label"], ["id", "sellerBookBtn", "mat-button", "", 1, "navbutton", 3, "click"], ["id", "orderStatusBookBtn", "mat-button", "", 1, "navbutton", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "navButton", 3, "click"]],
        template: function SidenavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidenavbarComponent_div_0_Template, 11, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavbarComponent_div_1_Template, 7, 0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSeller);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-left: 0px;\n}\n\n.navButton[_ngcontent-%COMP%] {\n  background-color: Transparent;\n  background-color: rgba(131, 4, 4, 0.3);\n  width: 90%;\n  text-align: left;\n  margin-top: 0.5rem;\n  margin-left: 0px;\n  box-shadow: none;\n  font-family: Roboto, Arial, sans-serif;\n  font-weight: 500;\n  font-size: medium;\n  text-transform: uppercase;\n}\n\n.navbuttons[_ngcontent-%COMP%]:hover {\n  background-color: rgba(131, 4, 4, 0.3);\n  border-top-right-radius: 2em;\n  border-bottom-right-radius: 2em;\n}\n\n.navbuttons[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  margin-left: 0px;\n  outline: none;\n  background: none;\n  border-bottom: none;\n  border: none;\n  border-style: none;\n  border-bottom-style: hidden;\n}\n\n.icon-label[_ngcontent-%COMP%] {\n  margin-right: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZGVuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdFO0VBQ0UsNkJBQUE7RUFDQSxzQ0FBQTtFQUVBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBRko7O0FBU0U7RUFDRSxzQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUFOSjs7QUFTRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBTko7O0FBYUU7RUFDRSxpQkFBQTtBQVZKIiwiZmlsZSI6InNpZGVuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gXG4gIH1cblxuICAubmF2QnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IFRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMxLCA0LCA0LCAwLjMpO1xuICAgIC8vIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDkwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAvLyBib3JkZXItY29sb3I6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sQXJpYWwsc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgXG4gIH1cblxuICAvLyAubmF2QnV0dG9uOmhvdmVye1xuICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMxLCA0LCA0LCAwLjgpO1xuICAvLyB9XG4gIC5uYXZidXR0b25zOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMSwgNCwgNCwgMC4zKTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyZW07XG4gIH1cblxuICAubmF2YnV0dG9ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6aGlkZGVuO1xuICAgIFxuICAgIFxuICB9XG4gIFxuICBcbiAgXG4gIC5pY29uLWxhYmVsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDYwJTtcbiAgfSJdfQ== */"]
      });
      /***/
    },

    /***/
    "DHZB":
    /*!********************************************************!*\
      !*** ./src/app/Component/toolbar/toolbar.component.ts ***!
      \********************************************************/

    /*! exports provided: ToolbarComponent */

    /***/
    function DHZB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
        return ToolbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/Service/book.service */
      "upCK");
      /* harmony import */


      var src_app_Service_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/Service/token.service */
      "zPJE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_Service_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Service/cart.service */
      "QiK6");
      /* harmony import */


      var src_app_Service_wishlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/Service/wishlist.service */
      "rbIm");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");

      function ToolbarComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_span_1_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.ontoggel(ctx_r7.opened);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ToolbarComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "favorite_border");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx_r1.wishlistLength);
        }
      }

      function ToolbarComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add_shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx_r2.length);
        }
      }

      function ToolbarComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.name);
        }
      }

      var _c0 = function _c0() {
        return [""];
      };

      function ToolbarComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_div_27_Template_button_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.logout($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Signout ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      }

      var _c1 = function _c1() {
        return ["/login"];
      };

      function ToolbarComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
        }
      }

      var ToolbarComponent = /*#__PURE__*/function () {
        function ToolbarComponent(service, token, route, cartService, wishlistService, matSnackBar) {
          _classCallCheck(this, ToolbarComponent);

          this.service = service;
          this.token = token;
          this.route = route;
          this.cartService = cartService;
          this.wishlistService = wishlistService;
          this.matSnackBar = matSnackBar;
          this.toggleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.opened = false;
          this.isUser = false;
          this.isSeller = false;
          this.isAdmin = false;
          this.isbudget = false;
          this.isLogin = false;
        }

        _createClass(ToolbarComponent, [{
          key: "ontoggel",
          value: function ontoggel(input) {
            console.log('input' + input);
            this.toggleEvent.emit(input);
            this.opened = !this.opened;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.wishlistService.autoRefresh$.subscribe(function () {
              _this13.getWishlistCount();
            });
            this.getWishlistCount();
            this.cartService.autoRefresh$.subscribe(function () {
              _this13.getCartItemCount();
            });
            this.getCartItemCount();
            this.name = localStorage.getItem('Name');
            this.role = localStorage.getItem('role');
            console.log('role check toolbar', this.role);

            if (this.role === 'admin') {
              this.isAdmin = true;
              this.isLogin = true;
            }

            if (this.role === 'seller') {
              this.isSeller = true;
              this.isLogin = true;
            }

            if (this.role === 'user') {
              this.isUser = true;
              this.isLogin = true;
              console.log('is user ', this.isUser);
            }
          }
        }, {
          key: "getCartItemCount",
          value: function getCartItemCount() {
            var _this14 = this;

            this.cartService.getCartItemCount().subscribe(function (response) {
              _this14.length = response.obj;
              console.log('total number of itemes are' + response.obj);
            });
          }
        }, {
          key: "bookSearch",
          value: function bookSearch() {
            // console.log(this.bookName);
            this.service.setSearchBookData(this.bookName);
          }
        }, {
          key: "logout",
          value: function logout(event) {
            console.log('loggout function called');
            event.preventDefault();
            this.token.remove();
            this.token.logedIn(false);
            this.route.navigateByUrl('/login');
          }
        }, {
          key: "getUpdatedNotes",
          value: function getUpdatedNotes(event) {
            this.ngOnInit();
          }
        }, {
          key: "getWishlistCount",
          value: function getWishlistCount() {
            var _this15 = this;

            this.wishlistService.getWishlistCount().subscribe(function (response) {
              _this15.wishlistLength = response.obj;
              console.log('total number wishBook are' + response.obj);
            });
          }
        }]);

        return ToolbarComponent;
      }();

      ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
        return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_wishlist_service__WEBPACK_IMPORTED_MODULE_5__["WishlistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]));
      };

      ToolbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToolbarComponent,
        selectors: [["app-toolbar"]],
        inputs: {
          output: "output",
          "function": "function"
        },
        outputs: {
          toggleEvent: "toggleEvent"
        },
        decls: 29,
        vars: 10,
        consts: [["fxLayout", "row", "xLayoutAlign", "space-between center", "fullscreen", "", 2, "background-color", "rgba(131, 4, 4, 0.829)"], [4, "ngIf"], ["fxFlex", "10", "fxLayoutGap", "5%", 1, "home"], ["fxFlex", "15", 1, "logo-name"], [1, "image", 2, "display", "flex", "justify-content", "flex-start"], ["src", ".\\assets\\education.png", "alt", "open book", 2, "height", "35px", 3, "routerLink"], ["fxHide.xs", "true", 1, "mat-title"], ["fxFlex", "60", "fxLayout", "row", "fxLayout-align", "center center", "fxFlex.sm", "70", 1, "search"], ["mat-icon-button", "", "fxHide.xs", "true"], [2, "color", "#9D9D9D", "transform", "scale(1.25)"], ["type", "text", "id", "search", "placeholder", "Search", 1, "input", 3, "ngModel", "ngModelChange", "input"], ["class", "wish-list", "align", "center", 4, "ngIf"], ["class", "cart", "align", "center", 4, "ngIf"], ["fxFlex", "5", "align", "center", 1, "profile"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [2, "transform", "scale(1.7)"], ["menu", "matMenu"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "center center", 2, "width", "15em", "height", "15em", "position", "initial", "z-index", "3100"], [2, "overflow", "hidden", "height", "12em"], [2, "margin-left", "6px"], ["mat-card-avatar", "", "src", "assets\\profilePic.jpg", 1, "topic-avatar", 2, "height", "60px", "width", "60px", "padding", "0px", "margin", "0px"], ["style", "width: 100%;", 4, "ngIf"], ["class", "div-profile", 4, "ngIf"], ["id", "menuBtn", "mat-icon-button", "", 1, "menu", 3, "click"], ["matTooltip", "Main menu"], ["align", "center", 1, "wish-list"], [2, "color", "#fff", "font-size", "small"], ["mat-icon-button", "", "routerLink", "/wish", "matTooltip", "Wishlist"], ["matBadgeSize", "small", 3, "matBadge"], ["align", "center", 1, "cart"], ["mat-icon-button", "", "routerLink", "/cart", "matTooltip", "Cart"], [2, "width", "100%"], [1, "div-profile"], [1, "div-signout"], ["mat-button", "", 1, "signout-button", 2, "background-color", "whitesmoke", 3, "routerLink", "click"], [1, "div-signout", 2, "margin-top", "60px", "margin-left", "5px"], ["mat-button", "", 1, "signout-button", 2, "background-color", "whitesmoke", 3, "routerLink"]],
        template: function ToolbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToolbarComponent_span_1_Template, 4, 0, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xA0\xA0\xA0Bookstore");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToolbarComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.bookName = $event;
            })("input", function ToolbarComponent_Template_input_input_12_listener() {
              return ctx.bookSearch();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ToolbarComponent_div_13_Template, 5, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ToolbarComponent_div_14_Template, 6, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-menu", null, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ToolbarComponent_div_26_Template, 3, 1, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ToolbarComponent_div_27_Template, 4, 2, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ToolbarComponent_div_28_Template, 4, 2, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin || ctx.isSeller);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAdmin && !ctx.isSeller);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAdmin && !ctx.isSeller);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogin);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenu"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardAvatar"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__["MatBadge"]],
        styles: [".mat-title[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 0;\n  padding-top: 5px;\n}\n\n.search[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 3px;\n  padding-left: 15px;\n  width: 100%;\n  border-radius: 5px;\n  border: none;\n}\n\ninput.input[_ngcontent-%COMP%]:focus {\n  outline-width: 0;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #fff;\n  border: none;\n  border-color: #fff;\n  font-size: 16px;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: relative;\n  padding: 30px;\n  border-radius: 5px;\n}\n\n.cart[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n  box-sizing: border-box;\n  max-width: 7%;\n  margin-right: 0px;\n  margin-left: 230px;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nimg[_ngcontent-%COMP%] {\n  cursor: pointer;\n  outline: none;\n}\n\n.menu[_ngcontent-%COMP%] {\n  margin-left: -25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSx5REFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBSUE7RUFDSSxpQkFBQTtBQURKIiwiZmlsZSI6InRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRpdGxlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnNlYXJjaCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbmlucHV0LmlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lLXdpZHRoOiAwO1xufVxuXG5pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxubWF0LWljb24ge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LWNhcmQge1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jYXJ0IHtcbiAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1heC13aWR0aDogNyU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIzMHB4O1xufVxuXG5idXR0b246Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmltZyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cblxuXG4ubWVudXtcbiAgICBtYXJnaW4tbGVmdDogLTI1JTtcbn1cblxuIl19 */"]
      });
      /***/
    },

    /***/
    "DTTJ":
    /*!*************************************************************!*\
      !*** ./src/app/Component/seller/seller/seller.component.ts ***!
      \*************************************************************/

    /*! exports provided: SellerComponent */

    /***/
    function DTTJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerComponent", function () {
        return SellerComponent;
      });
      /* harmony import */


      var _addbook_addbook_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../addbook/addbook.component */
      "Mzk8");
      /* harmony import */


      var _update_book_update_book_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../update-book/update-book.component */
      "9v7S");
      /* harmony import */


      var _addbook_upload_book_image_upload_book_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../addbook/upload-book-image/upload-book-image.component */
      "Em1p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Service/book.service */
      "upCK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _orderstatus_orderstatus_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../orderstatus/orderstatus.component */
      "GLdz");
      /* harmony import */


      var _Pipe_booksearchpipe_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../Pipe/booksearchpipe.pipe */
      "5s37");

      function SellerComponent_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SellerComponent_div_0_div_3_Template_mat_icon_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r5.addBook();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function SellerComponent_div_0_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Nothing to display please add some books By clicking on Add button");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function SellerComponent_div_0_div_6_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Out Of stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function SellerComponent_div_0_div_6_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Status : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](book_r7.status);
        }
      }

      function SellerComponent_div_0_div_6_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Status : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](book_r7.status);
        }
      }

      function SellerComponent_div_0_div_6_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Status : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](book_r7.status);
        }
      }

      function SellerComponent_div_0_div_6_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SellerComponent_div_0_div_6_div_28_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);

            var book_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r16.verifyBook(book_r7.bookId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Verify ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function SellerComponent_div_0_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-title", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SellerComponent_div_0_div_6_Template_mat_card_title_click_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);

            var book_r7 = restoredCtx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r19.openImageDialog(book_r7.bookId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-content", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SellerComponent_div_0_div_6_div_7_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, SellerComponent_div_0_div_6_div_16_Template, 4, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, SellerComponent_div_0_div_6_div_17_Template, 4, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, SellerComponent_div_0_div_6_div_18_Template, 4, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SellerComponent_div_0_div_6_Template_button_click_23_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);

            var book_r7 = restoredCtx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r21.editBook(book_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SellerComponent_div_0_div_6_Template_button_click_26_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);

            var book_r7 = restoredCtx.$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r22.deleteBook(book_r7.bookId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " DELETE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, SellerComponent_div_0_div_6_div_28_Template, 3, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", book_r7.bookDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "assets\\bookimage\\", book_r7.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !book_r7.noOfBooks);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Book Name : ", book_r7.bookName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Author name : ", book_r7.authorName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Rs. ", book_r7.price, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("No of books : ", book_r7.noOfBooks, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", book_r7.status == "OnHold");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", book_r7.status == "approved");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", book_r7.status == "rejected");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Description : ", book_r7.bookDetails, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", book_r7.status != "approved" && book_r7.status != "OnHold");
        }
      }

      function SellerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SellerComponent_div_0_div_3_Template, 3, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SellerComponent_div_0_div_4_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SellerComponent_div_0_div_6_Template, 29, 12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "booksearchpipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.sellerBooks);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.books.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 3, ctx_r0.books, ctx_r0.bookSearch));
        }
      }

      function SellerComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-orderstatus");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var SellerComponent = /*#__PURE__*/function () {
        function SellerComponent(service, dialog, matSnackBar, _route) {
          _classCallCheck(this, SellerComponent);

          this.service = service;
          this.dialog = dialog;
          this.matSnackBar = matSnackBar;
          this._route = _route;
          this.name = null;
          this.sellerBooks = false;
          this.orderBooks = false;
        }

        _createClass(SellerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.service.autoRefresh$.subscribe(function () {
              _this16._route.queryParams.subscribe(function (params) {
                _this16.param = params['book'];

                if (_this16.param == "sellerbook") {
                  _this16.sellerBooks = true;
                  _this16.orderBooks = false;
                }

                if (_this16.param == "order") {
                  _this16.sellerBooks = false;
                  _this16.orderBooks = true;
                }
              });

              _this16.getallBooks();
            });

            this._route.queryParams.subscribe(function (params) {
              _this16.param = params['book'];

              if (_this16.param == "sellerbook") {
                _this16.sellerBooks = true;
                _this16.orderBooks = false;
              }

              if (_this16.param == "order") {
                _this16.sellerBooks = false;
                _this16.orderBooks = true;
              }
            });

            this.getUserName();
            this.getallBooks();
            this.getSearchBookData();
          }
        }, {
          key: "getallBooks",
          value: function getallBooks() {
            var _this17 = this;

            this.sellerBooks = true;
            this.orderBooks = false;
            console.log('inside seller book meth.....');
            this.service.getallBooks().subscribe(function (response) {
              _this17.books = response.obj;
              console.log('All books ', _this17.books);
            });
          }
        }, {
          key: "deleteBook",
          value: function deleteBook(bookId) {
            var _this18 = this;

            this.service.deleteBook(bookId).subscribe(function (message) {
              if (message.statusCode === 202) {
                _this18.matSnackBar.open('Book Deleted Successfully', 'OK', {
                  duration: 4000
                });
              } else {
                _this18.matSnackBar.open('Error in Book Deletion', 'ok', {
                  duration: 4000
                });
              }
            });
          }
        }, {
          key: "openImageDialog",
          value: function openImageDialog(bookId) {
            var dialogRef = this.dialog.open(_addbook_upload_book_image_upload_book_image_component__WEBPACK_IMPORTED_MODULE_2__["UploadBookImageComponent"], {
              width: '25rem',
              panelClass: 'custom-dialog-container',
              data: {
                bookId: bookId
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
            });
          }
        }, {
          key: "editBook",
          value: function editBook(book) {
            var dialogRef = this.dialog.open(_update_book_update_book_component__WEBPACK_IMPORTED_MODULE_1__["UpdateBookComponent"], {
              width: '25rem',
              height: 'auto',
              panelClass: 'custom-dialog-container',
              data: {
                bookName: book.bookName,
                authorName: book.authorName,
                price: book.price,
                noOfBooks: book.noOfBooks,
                bookDetails: book.bookDetails,
                bookId: book.bookId
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
            });
          }
        }, {
          key: "addBook",
          value: function addBook() {
            var dialogRef = this.dialog.open(_addbook_addbook_component__WEBPACK_IMPORTED_MODULE_0__["AddbookComponent"], {
              width: '25rem',
              panelClass: 'custom-dialog-container'
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
            });
          }
        }, {
          key: "verifyBook",
          value: function verifyBook(bookId) {
            var _this19 = this;

            this.status = 'OnHold';
            this.service.verifyBook(bookId, this.status).subscribe(function (message) {
              if (message.statusCode === 202) {
                _this19.matSnackBar.open('Request sent Successfully', 'OK', {
                  duration: 4000
                });
              } else {
                _this19.matSnackBar.open('Error in Book Deletion', 'ok', {
                  duration: 4000
                });
              }
            });
          }
        }, {
          key: "getUserName",
          value: function getUserName() {
            this.name = localStorage.getItem('Name');
          }
        }, {
          key: "getSearchBookData",
          value: function getSearchBookData() {
            var _this20 = this;

            this.service.getSearchBookData().subscribe(function (message) {
              console.log('search data', message.books);
              _this20.bookSearch = message.books;
            });
          }
        }]);

        return SellerComponent;
      }();

      SellerComponent.ɵfac = function SellerComponent_Factory(t) {
        return new (t || SellerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
      };

      SellerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: SellerComponent,
        selectors: [["app-seller"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], [1, "main-container"], [1, "container"], ["class", "addIcon", "style", "display: flex; justify-content: flex-end; margin: 2rem 0.5rem;", 4, "ngIf"], ["class", "alert alert-danger text-justify", 4, "ngIf"], [1, "list-books"], [4, "ngFor", "ngForOf"], [1, "addIcon", 2, "display", "flex", "justify-content", "flex-end", "margin", "2rem 0.5rem"], ["id", "addBtn", "matTooltip", "Add Book", 1, "icon-display", 3, "click"], [1, "alert", "alert-danger", "text-justify"], [2, "display", "flex", "flex-direction", "row", "width", "auto", "padding", "1rem", 3, "matTooltip"], ["matTooltip", "Update Image", 2, "padding", "1rem", 3, "click"], [2, "height", "13rem", "width", "10rem", "padding", "16px 0px 16px 16px", 3, "src"], [2, "display", "flex", "flex-direction", "column", "flex-wrap", "nowrap", "width", "25rem", "margin-top", "10px", "margin-bottom", "0px"], ["class", "out-of-stock", 4, "ngIf"], [1, "bookname"], [1, "authorname"], [1, "price"], [1, "noofbooks"], ["class", "status", 4, "ngIf"], [1, "description"], [2, "display", "flex", "justify-content", "flex-start", "margin-left", "10px"], [2, "margin-left", "10px"], ["id", "editBtn", "matTooltip", "Edit Book", "mat-button", "", 2, "width", "5rem", "outline", "none", "color", "white", "border-radius", "0px", "background-color", "rgba(131, 4, 4, 0.8)", 3, "click"], ["matTooltip", "Delete Book", "id", "deleteBtn", "mat-button", "", 2, "width", "5rem", "color", "white", "outline", "none", "border-radius", "0px", "background-color", "rgba(131, 4, 4, 0.8)", 3, "click"], ["style", "margin-left: 10px;", 4, "ngIf"], [1, "out-of-stock"], [1, "status"], [2, "color", "yellow"], [2, "color", "green"], [2, "color", "red"], ["matTooltip", "Verify Book", "id", "verifyBtn", "mat-button", "", 2, "width", "5rem", "color", "white", "outline", "none", "border-radius", "0px", "background-color", "rgba(131, 4, 4, 0.8)", 3, "click"]],
        template: function SellerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SellerComponent_div_0_Template, 8, 6, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SellerComponent_div_1_Template, 2, 0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.sellerBooks && !ctx.orderBooks);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.sellerBooks && ctx.orderBooks);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _orderstatus_orderstatus_component__WEBPACK_IMPORTED_MODULE_13__["OrderstatusComponent"]],
        pipes: [_Pipe_booksearchpipe_pipe__WEBPACK_IMPORTED_MODULE_14__["BooksearchpipePipe"]],
        styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1%;\n  margin-left: 10%;\n  height: auto;\n  margin-right: 10%;\n}\n\n.allBooks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.icon-display[_ngcontent-%COMP%] {\n  transform: scale(2);\n  color: white;\n  background-color: rgba(131, 4, 4, 0.8);\n  border-radius: 2rem;\n  cursor: pointer;\n}\n\n.plus[_ngcontent-%COMP%] {\n  background-color: rgba(131, 4, 4, 0.8);\n  border-radius: 3rem;\n}\n\n.list-books[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  width: auto;\n  padding-right: 2em;\n  border: 1px solid;\n  border-color: #f0eeee;\n  margin-bottom: 20px;\n}\n\n.mat-card.mat-card[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n  background: #f5f5f5 0% 0% no-repeat padding-box;\n}\n\n.mat-card-title.mat-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  height: 171px auto;\n  width: 233px;\n  align-items: center;\n  align-content: center;\n}\n\n.bookname[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 7px;\n  font-size: larger;\n  font-weight: bolder;\n  font-size: 1.5rem;\n  font-family: Lato, Regular;\n}\n\n.authorname[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 7px;\n  font-size: 1rem;\n  font-family: Lato, Regular;\n  color: gray;\n}\n\n.price[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 5px;\n  font-size: 1rem;\n  font-family: Lato, Regular;\n  color: #080808;\n}\n\n.noofbooks[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 10px;\n  font-size: 1rem;\n  font-family: Lato;\n}\n\n.status[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 10px;\n  font-size: 1rem;\n  font-family: Lato;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 10px;\n  font-size: 1rem;\n  font-family: Lato, Regular;\n}\n\n.btn-addbook[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 120px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  color: white;\n  background-color: rgba(87, 25, 25, 0.904);\n}\n\n.addedbtn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.out-of-stock[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  text-align: center;\n  padding: 8px 0px;\n  font-size: medium;\n  position: absolute;\n  font-family: Lato;\n  font-weight: bold;\n  top: 100px;\n  left: 30px;\n  right: 30px;\n  box-shadow: 0px 3px 8px #00000029;\n  border-radius: 2px;\n  opacity: 0.9;\n  text-transform: uppercase;\n}\n\n.out-of-stock[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  text-align: center;\n  padding: 8px 0px;\n  font-size: medium;\n  position: absolute;\n  top: 100px;\n  left: 30px;\n  right: 30px;\n  box-shadow: 0px 3px 8px #00000029;\n  border-radius: 2px;\n  opacity: 0.9;\n  text-transform: uppercase;\n}\n\nmat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;\n  color: none;\n}\n\n@media only screen and (max-width: 600px) {\n  .list-books[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NlbGxlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQ047O0FBRUU7RUFDRSxtQkFBQTtFQUNKLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNBOztBQUVBO0VBQ0ksc0NBQUE7RUFDQyxtQkFBQTtBQUNMOztBQUtFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBR0EsdUJBQUE7QUFKSjs7QUFPRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFNRTtFQUNFLFlBQUE7QUFISjs7QUFLRTtFQUNFLCtDQUFBO0FBRko7O0FBSUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQURKOztBQUdFO0VBRUUsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBREo7O0FBR0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUVBLGNBQUE7QUFBSjs7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFJRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQURKOztBQUtFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFGSjs7QUFPQTtFQUNJLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUpKOztBQU9FO0VBQ0UsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFKSjs7QUFPRTtFQUNFLDREQUFBO0VBQ0EsV0FBQTtBQUpKOztBQU9FO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7RUFKSjtBQUNGIiwiZmlsZSI6InNlbGxlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgfVxuXG4gIC5hbGxCb29rc3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgXG4gIH1cbiAgLmljb24tZGlzcGxheXtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuY29sb3I6IHdoaXRlO1xuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzEsIDQsIDQsIDAuOCk7XG5ib3JkZXItcmFkaXVzOiAycmVtO1xuY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuLnBsdXN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzEsIDQsIDQsIDAuOCk7XG4gICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gICAgXG4gICAgLy8gcGFkZGluZzogMTBweDtcbn1cbiAgXG4gIFxuICAubGlzdC1ib29rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAvLyB3aWR0aDogMjByZW07XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgLy8gei1pbmRleDogMzAwMTtcbiAgfVxuICBtYXQtY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQwLCAyMzgsIDIzOCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAubWF0LWNhcmQubWF0LWNhcmQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICBtYXQtY2FyZC10aXRsZSB7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIH1cbiAgLm1hdC1jYXJkLXRpdGxlLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTcxcHggYXV0bztcbiAgICB3aWR0aDogMjMzcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmJvb2tuYW1lIHtcbiAgICAgXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIGZvbnQtc2l6ZTpsYXJnZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LWZhbWlseTogTGF0bywgUmVndWxhcjtcbiAgfVxuICAuYXV0aG9ybmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LWZhbWlseTogTGF0bywgUmVndWxhcjtcbiAgICBjb2xvcjogZ3JheTtcbiAgfVxuICAucHJpY2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6IExhdG8sIFJlZ3VsYXI7XG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogcmdiKDgsIDgsIDgpO1xuICB9XG4gIC5ub29mYm9va3Mge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICAgIC8vIGNvbG9yOiByZ2JhKDg3LCAyNSwgMjUsIDAuOTA0KTtcbiAgfVxuXG4gIC5zdGF0dXN7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6IExhdG87XG4gIH1cbiAgLmRlc2NyaXB0aW9ue1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBSZWd1bGFyO1xuICAgIC8vIGNvbG9yOiBncmF5O1xuICB9XG4gXG4gIFxuICAuYnRuLWFkZGJvb2sge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NywgMjUsIDI1LCAwLjkwNCk7XG4gIH1cbiAgXG5cbiAgLmFkZGVkYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuXG5cbi5vdXQtb2Ytc3RvY2sge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LWZhbWlseTogTGF0bztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0b3A6IDEwMHB4O1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA4cHggIzAwMDAwMDI5O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgLm91dC1vZi1zdG9jayB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwcHg7XG4gICAgbGVmdDogMzBweDtcbiAgICByaWdodDogMzBweDtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDhweCAjMDAwMDAwMjk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgbWF0LWNhcmQ6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMjVweCA1MHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogbm9uZTtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAubGlzdC1ib29rcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIH0iXX0= */"]
      });
      /***/
    },

    /***/
    "DmK3":
    /*!*****************************************************************************!*\
      !*** ./src/app/Component/auth/login-component/login-component.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: LoginComponentComponent */

    /***/
    function DmK3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponentComponent", function () {
        return LoginComponentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/Service/user.service */
      "BE6J");
      /* harmony import */


      var src_app_Service_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/Service/token.service */
      "zPJE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _spineer_spineer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../spineer/spineer.component */
      "OLkV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");

      function LoginComponentComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spineer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["/forget-password"];
      };

      var _c1 = function _c1() {
        return ["/register"];
      };

      function LoginComponentComponent_mat_card_2_form_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponentComponent_mat_card_2_form_13_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter your Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponentComponent_mat_card_2_form_13_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.form.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Enter Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponentComponent_mat_card_2_form_13_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.form.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponentComponent_mat_card_2_form_13_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.hide = !ctx_r9.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Forget password ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Are you new User ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Login As");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-radio-group", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponentComponent_mat_card_2_form_13_Template_mat_radio_group_ngModelChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.form.role = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-radio-button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " User ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-radio-button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Seller ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-radio-button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Admin ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.form.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.form.password)("type", ctx_r2.hide ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r2.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.hide ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.form.role);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r3.valid);
        }
      }

      function LoginComponentComponent_mat_card_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bookstore");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Use your Bookstore Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponentComponent_mat_card_2_form_13_Template, 37, 12, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r1.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);
        }
      }

      var LoginComponentComponent = /*#__PURE__*/function () {
        function LoginComponentComponent(user, token, route, matSnackBar, titleService) {
          _classCallCheck(this, LoginComponentComponent);

          this.user = user;
          this.token = token;
          this.route = route;
          this.matSnackBar = matSnackBar;
          this.titleService = titleService;
          this.error = null;
          this.hide = true;
          this.valideUser = false;
          this.tokenValue = null;
          this.isLoading = false;
          this.form = {
            email: null,
            password: null,
            role: null
          };
          this.setTitle('Bookstore | Login');
        }

        _createClass(LoginComponentComponent, [{
          key: "handleError",
          value: function handleError(error) {
            this.isLoading = false;
            this.error = error.error.message;

            if (error.error.status === 0) {
              console.log('please connect database');
            }

            this.matSnackBar.open(this.error, 'ok', {
              duration: 5000
            });
            console.log(error);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this21 = this;

            this.isLoading = true;
            this.user.signIn(this.form).subscribe(function (data) {
              return _this21.handleResponse(data);
            }, function (error) {
              return _this21.handleError(error);
            });
          }
        }, {
          key: "handleResponse",
          value: function handleResponse(data) {
            this.token.handle(data);
            console.log(data);
            this.isLoading = false;
            this.token.logedIn(true);
            console.log('user is --->' + data);
            this.matSnackBar.open('Sucessfully Login', 'ok', {
              duration: 5000
            });

            if (this.form.role === 'admin') {
              localStorage.setItem('role', 'admin');
              this.route.navigateByUrl('books');
              return;
            }

            if (this.form.role === 'seller') {
              localStorage.setItem('role', 'seller');
              this.route.navigateByUrl('books');
              return;
            }

            if (this.form.role === 'user') {
              localStorage.setItem('role', 'user');
              this.route.navigateByUrl('books');
              return;
            }
          }
        }, {
          key: "setTitle",
          value: function setTitle(dashboard) {
            this.titleService.setTitle(dashboard);
          }
        }]);

        return LoginComponentComponent;
      }();

      LoginComponentComponent.ɵfac = function LoginComponentComponent_Factory(t) {
        return new (t || LoginComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]));
      };

      LoginComponentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponentComponent,
        selectors: [["app-login-component"]],
        decls: 3,
        vars: 2,
        consts: [["fxLayoutAlign", "center center", "fxFlexFill", "", 2, "display", "flex"], [4, "ngIf"], ["fxFlex", "28", 4, "ngIf"], ["fxFlex", "28"], [2, "text-align", "center"], ["fxLayout", "row wrap", "fxLayoutGap", "10px", "fxLayoutAlign", "flex-start", 2, "background-color", "#A03037", "padding-top", "16px"], [1, "imgLogo"], ["src", "assets\\education.svg", "alt", ""], [1, "title"], [1, "alert", "alert-danger", "text-justify", 3, "hidden"], ["action", "", "fxLayout", "column", "fxLayoutAlign", "start start", 3, "ngSubmit", 4, "ngIf"], ["action", "", "fxLayout", "column", "fxLayoutAlign", "start start", 3, "ngSubmit"], ["loginForm", "ngForm"], ["appearance", "outline", "fxLayout", "column", 2, "width", "100%"], ["id", "email", "email", "", "required", "", "matInput", "", "type", "email", "placeholder", "Email", "name", "email", 3, "ngModel", "ngModelChange"], ["emailId", "ngModel"], ["matSuffix", "", 2, "color", "#e1e4e4"], ["appearance", "outline", 2, "width", "100%"], ["id", "password", "minlength", "3", "required", "", "name", "password", "matInput", "", 3, "ngModel", "type", "ngModelChange"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [2, "color", "#e1e4e4"], ["fxFlexAlign", "end", 2, "color", "#e0e0e0", 3, "routerLink"], ["fxFlexAlign", "start", 2, "color", "#cab5b5", 3, "routerLink"], [1, "text-left"], ["aria-label", "Select an option", "name", "role", 3, "ngModel", "ngModelChange"], ["id", "userRadioBtn", "value", "user", "required", "required"], ["id", "sellerRadioBtn", "value", "seller", "required", "required"], ["id", "adminRadioBtn", "value", "admin", "required", "required"], ["fxFlexAlign", "end"], ["id", "submit", "mat-raised-buttontype", "submit", "id", "loginBtn", "type", "submit", 2, "background-color", "#a03037", "border-radius", "5px", "text-decoration-color", "#FFFFFF", "font-size", "20px", "font-weight", "500", "color", "whitesmoke", "width", "106px", "height", "40px", 3, "disabled"]],
        template: function LoginComponentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponentComponent_div_1_Template, 2, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponentComponent_mat_card_2_Template, 14, 3, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexFillDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _spineer_spineer_component__WEBPACK_IMPORTED_MODULE_8__["SpineerComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MinLengthValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexAlignDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioButton"]],
        styles: [".title[_ngcontent-%COMP%] {\n  text-align: left;\n  font: Regular 20px/26px Roboto;\n  letter-spacing: 0px;\n  color: #FFFFFF;\n  text-transform: capitalize;\n  opacity: 1;\n}\n\n.imgLogo[_ngcontent-%COMP%] {\n  margin-left: 110px;\n  width: 31px;\n  height: 24px;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xvZ2luLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4tY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQ6IFJlZ3VsYXIgMjBweC8yNnB4IFJvYm90bztcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5pbWdMb2dvIHtcbiAgICBtYXJnaW4tbGVmdDogMTEwcHg7XG4gICAgd2lkdGg6IDMxcHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIG9wYWNpdHk6IDE7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "Em1p":
    /*!************************************************************************************!*\
      !*** ./src/app/Component/addbook/upload-book-image/upload-book-image.component.ts ***!
      \************************************************************************************/

    /*! exports provided: UploadBookImageComponent */

    /***/
    function Em1p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploadBookImageComponent", function () {
        return UploadBookImageComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/Service/book.service */
      "upCK");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var UploadBookImageComponent = /*#__PURE__*/function () {
        function UploadBookImageComponent(dialogRef, data, bookService, snackbar, formBuilder) {
          _classCallCheck(this, UploadBookImageComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.bookService = bookService;
          this.snackbar = snackbar;
          this.formBuilder = formBuilder;
        }

        _createClass(UploadBookImageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.imageForm = this.formBuilder.group({
              name: [''],
              imageFile: ['']
            });
          }
        }, {
          key: "onSelectedFile",
          value: function onSelectedFile(event) {
            if (event.target.files.length > 0) {
              var imageFile = event.target.files[0];
              this.imageForm.get('imageFile').setValue(imageFile);
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this22 = this;

            this.dialogRef.close();
            var formData = new FormData();
            formData.append('imageFile', this.imageForm.get('imageFile').value);
            this.bookService.uploadBookImage(this.data.bookId, formData).subscribe(function (message) {
              _this22.snackbar.open(message.response, 'ok', {
                duration: 4000
              });

              _this22.dialogRef.close(1);
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return UploadBookImageComponent;
      }();

      UploadBookImageComponent.ɵfac = function UploadBookImageComponent_Factory(t) {
        return new (t || UploadBookImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]));
      };

      UploadBookImageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: UploadBookImageComponent,
        selectors: [["app-upload-book-image"]],
        decls: 11,
        vars: 1,
        consts: [["fxLayout", "column", 1, "container"], [2, "background-color", "#A03037", "width", "100%", "margin-bottom", "1rem"], [2, "color", "white", "text-align", "center", "padding", "10px"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "file", "name", "image", 3, "change"], [1, "submit"], ["mat-button", "", "type", "submit"]],
        template: function UploadBookImageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Upload Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UploadBookImageComponent_Template_form_ngSubmit_5_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UploadBookImageComponent_Template_input_change_7_listener($event) {
              return ctx.onSelectedFile($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.imageForm);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
        styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.submit[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\ninput[_ngcontent-%COMP%] {\n  font-size: large;\n  outline: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  outline: none;\n  height: auto;\n  width: 5rem;\n  background-color: rgba(131, 4, 4, 0.8);\n  color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3VwbG9hZC1ib29rLWltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0FBQ0g7O0FBQ0U7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFFTjs7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQUdKOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLGlCQUFBO0FBSUoiLCJmaWxlIjoidXBsb2FkLWJvb2staW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5zdWJtaXR7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICBpbnB1dCB7XG4gICAgZm9udC1zaXplOmxhcmdlO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzEsIDQsIDQsIDAuOCk7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gIH0iXX0= */"]
      });
      /***/
    },

    /***/
    "F4+c":
    /*!************************************************!*\
      !*** ./src/app/Service/httpservice.service.ts ***!
      \************************************************/

    /*! exports provided: HttpserviceService */

    /***/
    function F4C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpserviceService", function () {
        return HttpserviceService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var HttpserviceService = /*#__PURE__*/function () {
        function HttpserviceService(http) {
          _classCallCheck(this, HttpserviceService);

          this.http = http;
        }

        _createClass(HttpserviceService, [{
          key: "post",
          value: function post(url, data, head) {
            return this.http.post(url, data, head);
          }
        }, {
          key: "put",
          value: function put(url, data, head) {
            return this.http.put(url, data, head);
          }
        }, {
          key: "delete",
          value: function _delete(url, options) {
            return this.http["delete"](url, options);
          }
        }, {
          key: "get",
          value: function get(url, options) {
            return this.http.get(url, options);
          }
        }, {
          key: "getRequest",
          value: function getRequest(url) {
            return this.http.get(url);
          }
        }]);

        return HttpserviceService;
      }();

      HttpserviceService.ɵfac = function HttpserviceService_Factory(t) {
        return new (t || HttpserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      HttpserviceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HttpserviceService,
        factory: HttpserviceService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "GLdz":
    /*!****************************************************************!*\
      !*** ./src/app/Component/orderstatus/orderstatus.component.ts ***!
      \****************************************************************/

    /*! exports provided: OrderstatusComponent */

    /***/
    function GLdz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderstatusComponent", function () {
        return OrderstatusComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/Service/book.service */
      "upCK");
      /* harmony import */


      var src_app_Service_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/Service/admin.service */
      "UBdA");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _Pipe_booksearchpipe_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../Pipe/booksearchpipe.pipe */
      "5s37");

      function OrderstatusComponent_div_3_div_1_div_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderstatusComponent_div_3_div_1_div_24_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var book_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.updateOrderAdmin(book_r1.orderId, "in progress");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Update-Order ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", book_r1.orderStatus === "in shipment" || book_r1.orderStatus === "delivered" || book_r1.orderStatus === "in progress")("hidden", book_r1.orderStatus === "in shipment" || book_r1.orderStatus === "delivered" || book_r1.orderStatus === "in progress");
        }
      }

      function OrderstatusComponent_div_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Order Status : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, OrderstatusComponent_div_3_div_1_div_24_Template, 3, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", book_r1.bookDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets\\bookimage\\", book_r1.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Order Number : ", book_r1.orderId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Book Name : ", book_r1.bookName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Author name : ", book_r1.authorName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Description : ", book_r1.bookDetails, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Quantity of book : ", book_r1.quantityOfBook, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total Price : ", "\u20B9 " + book_r1.totalprice, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](book_r1.orderStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isAdmin);
        }
      }

      function OrderstatusComponent_div_3_div_2_mat_card_1_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Update Order Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderstatusComponent_div_3_div_2_mat_card_1_div_23_Template_mat_option_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var book_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r12.updateOrderSeller(book_r1.orderId, "in shipment");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "In Shipment");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderstatusComponent_div_3_div_2_mat_card_1_div_23_Template_mat_option_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var book_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r15.updateOrderSeller(book_r1.orderId, "delivered");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Delivered");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", book_r1.orderStatus === "in shipment" || book_r1.orderStatus === "delivered");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", book_r1.orderStatus === "in progress" || book_r1.orderStatus === "delivered");
        }
      }

      function OrderstatusComponent_div_3_div_2_mat_card_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Order Status : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, OrderstatusComponent_div_3_div_2_mat_card_1_div_23_Template, 9, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", book_r1.bookDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets\\bookimage\\", book_r1.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Order Number : ", book_r1.orderId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Book Name : ", book_r1.bookName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Author name : ", book_r1.authorName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Description : ", book_r1.bookDetails, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Quantity of book : ", book_r1.quantityOfBook, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total Price : ", "\u20B9 " + book_r1.totalprice, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](book_r1.orderStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", book_r1.orderStatus != "delivered");
        }
      }

      function OrderstatusComponent_div_3_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrderstatusComponent_div_3_div_2_mat_card_1_Template, 24, 10, "mat-card", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", book_r1.orderStatus != "delivered" && book_r1.orderStatus != "pending");
        }
      }

      function OrderstatusComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrderstatusComponent_div_3_div_1_Template, 25, 10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrderstatusComponent_div_3_div_2_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSeller);
        }
      }

      var OrderstatusComponent = /*#__PURE__*/function () {
        function OrderstatusComponent(service, adminservice, dialog, matSnackBar, sellerService) {
          _classCallCheck(this, OrderstatusComponent);

          this.service = service;
          this.adminservice = adminservice;
          this.dialog = dialog;
          this.matSnackBar = matSnackBar;
          this.sellerService = sellerService;
          this.name = null;
          this.orderdetails = new Array();
          this.animalControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
          this.selectFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
          this.isAdmin = false;
          this.isSeller = false;
        }

        _createClass(OrderstatusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            this.role = localStorage.getItem('role');

            if (this.role === 'admin') {
              this.isAdmin = true;
              this.isSeller = false;
              this.getallUserOrderedBooks();
            } else if (this.role === 'seller') {
              this.isAdmin = false;
              this.isSeller = true;
              this.getallUserOrderedBooks();
            }

            this.adminservice.autoRefresh$.subscribe(function () {
              if (_this23.role === 'admin') {
                _this23.getallUserOrderedBooks();
              } else if (_this23.role === 'seller') {
                _this23.getallUserOrderedBooks();
              }
            });
          }
        }, {
          key: "getallUserOrderedBooks",
          value: function getallUserOrderedBooks() {
            var _this24 = this;

            console.log('order status api called');
            this.adminservice.getAllOrderedBooks().subscribe(function (response) {
              _this24.orderedBooks = response.obj;
              console.log('All orderbooks for order status= :  ', _this24.orderedBooks);
              console.log("no of orders " + response.obj.length);

              for (var i = 0; i < response.obj.length; i++) {
                console.log("Block statement execution no." + i);
                console.log("orderId : " + response.obj[i].orderId);
                console.log("orderStatus : " + response.obj[i].orderStatus);
                console.log("bookName : " + response.obj[i].booksList[0].bookName);
                console.log("bookDetails : " + response.obj[i].booksList[0].bookDetails);
                console.log("authorName : " + response.obj[i].booksList[0].authorName);
                console.log("image : " + response.obj[i].booksList[0].image);
                console.log("bookprice : " + response.obj[i].booksList[0].price);
                console.log("totalprice : " + response.obj[i].quantityOfBooks[0].totalprice);
                console.log("quantityOfBook : " + response.obj[i].quantityOfBooks[0].quantityOfBook);
                var p = {
                  orderId: response.obj[i].orderId,
                  orderStatus: response.obj[i].orderStatus,
                  bookName: response.obj[i].booksList[0].bookName,
                  bookDetails: response.obj[i].booksList[0].bookDetails,
                  authorName: response.obj[i].booksList[0].authorName,
                  image: response.obj[i].booksList[0].image,
                  totalprice: response.obj[i].quantityOfBooks[0].totalprice,
                  quantityOfBook: response.obj[i].quantityOfBooks[0].quantityOfBook
                };

                _this24.orderdetails.push(p);

                console.log("after push ", _this24.orderdetails);
              }
            });
          }
        }, {
          key: "updateOrderAdmin",
          value: function updateOrderAdmin(orderId, status) {
            var _this25 = this;

            console.log('Order Id', orderId);
            console.log('Order status', status);
            this.adminservice.updateOrderStatus(orderId, status).subscribe(function (response) {
              _this25.matSnackBar.open("Order updated by Admin", 'success', {
                duration: 5000
              });
            }, function (error) {
              _this25.matSnackBar.open(error.error.message, 'failed', {
                duration: 5000
              });
            });
          }
        }, {
          key: "updateOrderSeller",
          value: function updateOrderSeller(orderId, status) {
            var _this26 = this;

            console.log('Order Id', orderId);
            console.log('Order status', status);
            this.adminservice.updateOrderStatus(orderId, status).subscribe(function (response) {
              _this26.matSnackBar.open("Order updated by Seller", 'success', {
                duration: 5000
              });
            }, function (error) {
              _this26.matSnackBar.open(error.error.message, 'failed', {
                duration: 5000
              });
            });
          }
        }]);

        return OrderstatusComponent;
      }();

      OrderstatusComponent.ɵfac = function OrderstatusComponent_Factory(t) {
        return new (t || OrderstatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Service_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]));
      };

      OrderstatusComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: OrderstatusComponent,
        selectors: [["app-orderstatus"]],
        decls: 5,
        vars: 4,
        consts: [[1, "main-container"], [1, "container"], [1, "list-books"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "display", "flex", "flex-direction", "row", "padding", "1rem", 3, "matTooltip"], ["matTooltip", "Update Image", 2, "padding", "1rem"], [2, "height", "13rem", "width", "10rem", "padding", "16px 0px 16px 16px", 3, "src"], [2, "width", "20rem"], [2, "display", "flex", "flex-direction", "column", "flex-wrap", "nowrap", "width", "auto", "margin-top", "10px", "margin-bottom", "0px"], [1, "noofbooks"], [1, "bookname"], [1, "authorname"], [1, "description"], [1, "price"], [1, "status"], [2, "color", "green"], [2, "display", "flex", "justify-content", "flex-start", "margin-left", "20px"], ["id", "updateOrderStatusBtn", "mat-button", "", 2, "width", "8rem", "margin-left", "0px", "margin-top", "auto", "color", "white", "outline", "none", "border-radius", "0px", "background-color", "rgba(131, 4, 4, 0.8)", 3, "disabled", "hidden", "click"], ["style", "display: flex;flex-direction: row;  padding: 1rem;", 3, "matTooltip", 4, "ngIf"], ["disableRipple", ""], [3, "disabled", "click"]],
        template: function OrderstatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OrderstatusComponent_div_3_Template, 3, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "booksearchpipe");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 1, ctx.orderdetails, ctx.bookSearch));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]],
        pipes: [_Pipe_booksearchpipe_pipe__WEBPACK_IMPORTED_MODULE_13__["BooksearchpipePipe"]],
        styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1%;\n  margin-left: 10%;\n  height: auto;\n  margin-right: 10%;\n}\n\n.allBooks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.icon-display[_ngcontent-%COMP%] {\n  transform: scale(2);\n  color: white;\n  background-color: rgba(131, 4, 4, 0.8);\n  border-radius: 2rem;\n  cursor: pointer;\n}\n\n.plus[_ngcontent-%COMP%] {\n  background-color: rgba(131, 4, 4, 0.8);\n  border-radius: 3rem;\n}\n\n.list-books[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  width: auto;\n  padding-right: 2em;\n  border: 1px solid;\n  border-color: #f0eeee;\n  margin-bottom: 20px;\n}\n\n.mat-card.mat-card[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n  background: #f5f5f5 0% 0% no-repeat padding-box;\n}\n\n.mat-card-title.mat-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  height: 171px auto;\n  width: 233px;\n  align-items: center;\n  align-content: center;\n}\n\n.bookname[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 7px;\n  font-size: larger;\n  font-weight: bolder;\n  font-size: 1.5rem;\n  font-family: Lato, Regular;\n}\n\n.authorname[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 7px;\n  font-size: 1rem;\n  font-family: Lato, Regular;\n  color: gray;\n}\n\n.price[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 5px;\n  font-size: 1rem;\n  font-family: Lato, Regular;\n  color: #080808;\n}\n\n.noofbooks[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 10px;\n  font-size: 1rem;\n  font-family: Lato;\n}\n\n.status[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  font-size: 1rem;\n  font-family: Lato;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 10px;\n  font-size: 1rem;\n  font-family: Lato, Regular;\n}\n\n.btn-addbook[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 120px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  color: white;\n  background-color: rgba(87, 25, 25, 0.904);\n}\n\n.addedbtn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.out-of-stock[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  text-align: center;\n  padding: 8px 0px;\n  font-size: medium;\n  position: absolute;\n  font-family: Lato;\n  font-weight: bold;\n  top: 100px;\n  left: 30px;\n  right: 30px;\n  box-shadow: 0px 3px 8px #00000029;\n  border-radius: 2px;\n  opacity: 0.9;\n  text-transform: uppercase;\n}\n\n.out-of-stock[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  text-align: center;\n  padding: 8px 0px;\n  font-size: medium;\n  position: absolute;\n  top: 100px;\n  left: 30px;\n  right: 30px;\n  box-shadow: 0px 3px 8px #00000029;\n  border-radius: 2px;\n  opacity: 0.9;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29yZGVyc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFDTjs7QUFFRTtFQUNFLG1CQUFBO0VBQ0osWUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0E7O0FBRUE7RUFDSSxzQ0FBQTtFQUNDLG1CQUFBO0FBQ0w7O0FBS0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFHQSx1QkFBQTtBQUpKOztBQU9FO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU1FO0VBQ0UsWUFBQTtBQUhKOztBQUtFO0VBQ0UsK0NBQUE7QUFGSjs7QUFJRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBREo7O0FBR0U7RUFFRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFESjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBRUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBRUEsY0FBQTtBQUFKOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUdFO0VBQ0UsaUJBQUE7RUFFQSxlQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFLRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQUZKOztBQU1FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFISjs7QUFRQTtFQUNJLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUxKOztBQVFFO0VBQ0UsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFMSiIsImZpbGUiOiJvcmRlcnN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgfVxuXG4gIC5hbGxCb29rc3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgXG4gIH1cbiAgLmljb24tZGlzcGxheXtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuY29sb3I6IHdoaXRlO1xuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzEsIDQsIDQsIDAuOCk7XG5ib3JkZXItcmFkaXVzOiAycmVtO1xuY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuLnBsdXN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzEsIDQsIDQsIDAuOCk7XG4gICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gICAgXG4gICAgLy8gcGFkZGluZzogMTBweDtcbn1cbiAgXG4gIFxuICAubGlzdC1ib29rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAvLyB3aWR0aDogMjByZW07XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgLy8gei1pbmRleDogMzAwMTtcbiAgfVxuICBtYXQtY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQwLCAyMzgsIDIzOCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAubWF0LWNhcmQubWF0LWNhcmQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICBtYXQtY2FyZC10aXRsZSB7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIH1cbiAgLm1hdC1jYXJkLXRpdGxlLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTcxcHggYXV0bztcbiAgICB3aWR0aDogMjMzcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmJvb2tuYW1lIHtcbiAgICAgXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIGZvbnQtc2l6ZTpsYXJnZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LWZhbWlseTogTGF0bywgUmVndWxhcjtcbiAgfVxuICAuYXV0aG9ybmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LWZhbWlseTogTGF0bywgUmVndWxhcjtcbiAgICBjb2xvcjogZ3JheTtcbiAgfVxuICAucHJpY2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6IExhdG8sIFJlZ3VsYXI7XG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogcmdiKDgsIDgsIDgpO1xuICB9XG4gIC5ub29mYm9va3Mge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICAgIC8vIGNvbG9yOiByZ2JhKDg3LCAyNSwgMjUsIDAuOTA0KTtcbiAgfVxuXG4gIC5zdGF0dXN7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6IExhdG87XG4gIH1cbiAgLmRlc2NyaXB0aW9ue1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBSZWd1bGFyO1xuICAgIC8vIGNvbG9yOiBncmF5O1xuICB9XG4gXG4gIFxuICAuYnRuLWFkZGJvb2sge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NywgMjUsIDI1LCAwLjkwNCk7XG4gIH1cbiAgXG5cbiAgLmFkZGVkYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuXG5cbi5vdXQtb2Ytc3RvY2sge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LWZhbWlseTogTGF0bztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0b3A6IDEwMHB4O1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA4cHggIzAwMDAwMDI5O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgLm91dC1vZi1zdG9jayB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwcHg7XG4gICAgbGVmdDogMzBweDtcbiAgICByaWdodDogMzBweDtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDhweCAjMDAwMDAwMjk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9Il19 */"]
      });
      /***/
    },

    /***/
    "HQEs":
    /*!**********************************************************************************!*\
      !*** ./src/app/Component/adminunverifiedbooks/adminunverifiedbooks.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: AdminunverifiedbooksComponent */

    /***/
    function HQEs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminunverifiedbooksComponent", function () {
        return AdminunverifiedbooksComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Service_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/Service/admin.service */
      "UBdA");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function AdminunverifiedbooksComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Description: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminunverifiedbooksComponent_div_1_Template_button_click_17_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var book_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.approveBooks(book_r1.bookId, "approved");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " APPROVE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminunverifiedbooksComponent_div_1_Template_button_click_19_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var book_r1 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.rejectBooks(book_r1.bookId, "rejected");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " REJECT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets\\bookimage\\", book_r1.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r1.bookName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r1.authorName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Rs. ", book_r1.price, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.bookDetails);
        }
      }

      var AdminunverifiedbooksComponent = /*#__PURE__*/function () {
        function AdminunverifiedbooksComponent(adminService, snakbar) {
          _classCallCheck(this, AdminunverifiedbooksComponent);

          this.adminService = adminService;
          this.snakbar = snakbar;
          this.book = [];
          this.books = new Array();
          this.noteId = 1;
        }

        _createClass(AdminunverifiedbooksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this27 = this;

            this.getUnApprovedBooks(status); // this.dataSource.paginator = this.paginator;

            console.log('books ', this.books);
            this.adminService.autoRefresh.subscribe(function () {
              _this27.getUnApprovedBooks(status);
            });
          }
        }, {
          key: "getUnApprovedBooks",
          value: function getUnApprovedBooks(status) {
            var _this28 = this;

            console.log('method called');
            this.adminService.getUnverifiedBooks('OnHold').subscribe(function (response) {
              console.log('response', response);
              console.log('books:', response.obj);
              _this28.books = response.obj;
            }, function (error) {
              _this28.snakbar.open(error.error.message, 'failed', {
                duration: 5000
              });
            });
          }
        }, {
          key: "approveBooks",
          value: function approveBooks(bookId, status) {
            var _this29 = this;

            console.log('bookId from approve button:', bookId);
            this.adminService.approveBooks(bookId, status).subscribe(function (response) {
              console.log('response', response);

              _this29.snakbar.open('book is approved', 'success', {
                duration: 4000
              });
            }, function (error) {
              _this29.snakbar.open(error.error.message, 'failed', {
                duration: 5000
              });
            });
          }
        }, {
          key: "rejectBooks",
          value: function rejectBooks(bookId, status) {
            var _this30 = this;

            console.log('bookId from reject button:', bookId);
            this.adminService.rejectBooks(bookId, status).subscribe(function (response) {
              console.log('response', response);
              console.log('notes:', response.obj);

              _this30.snakbar.open('book is rejected', 'success', {
                duration: 4000
              });
            }, function (error) {
              _this30.snakbar.open(error.error.message, 'failed', {
                duration: 5000
              });
            });
          }
        }]);

        return AdminunverifiedbooksComponent;
      }();

      AdminunverifiedbooksComponent.ɵfac = function AdminunverifiedbooksComponent_Factory(t) {
        return new (t || AdminunverifiedbooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]));
      };

      AdminunverifiedbooksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminunverifiedbooksComponent,
        selectors: [["app-adminunverifiedbooks"]],
        decls: 2,
        vars: 1,
        consts: [["role", "combobox", "flex", "column", 2, "margin-left", "23%"], [4, "ngFor", "ngForOf"], [1, "matcard2"], ["fxLayout", "row", "fxLayoutAlign", "start start", 1, "cartdetails"], [1, "bookimg", 3, "src"], [1, "bookdetails"], [1, "booktitle", 2, "word-wrap", "break-word"], [1, "sub", 2, "word-wrap", "break-word"], [2, "margin-bottom", "11%", "font", "Bold 18px/15px Lato", "margin-left", "-25px"], [2, "margin-bottom", "8px", "margin-left", "27px", "margin-top", "20px", "font", "Bold 18px/15px Lato"], [2, "margin-left", "27px"], ["fxLayout", "row wrap", "fxLayoutAlign", "end end"], ["id", "approveBtn", "mat-raised-button", "", 1, "button", 3, "click"], ["id", "rejectBtn", "mat-raised-button", "", 1, "button", 2, "background-color", "#f44336", 3, "click"]],
        template: function AdminunverifiedbooksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminunverifiedbooksComponent_div_1_Template, 22, 5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.books);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
        styles: [".cartdetails[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 4%;\n  position: relative;\n  padding-top: 25px;\n}\n\n.bookdetails[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-left: 45px;\n  margin-bottom: 30px;\n  width: 15%;\n}\n\nmat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;\n  color: none;\n}\n\n  .custom-tooltip {\n  width: 456px;\n  height: 250px;\n  text-align: left;\n  font: Regular 11px/13px Lato !important;\n  letter-spacing: 0px;\n  font-size: 15px;\n  text-align: center;\n  word-wrap: break-word;\n  border: #e2e2e2 !important;\n  border-radius: 3px;\n  background-color: #fff;\n  color: #9d9d9d !important;\n  box-shadow: 0px 3px 6px #00000029 !important;\n  opacity: 1;\n}\n\n.mycart[_ngcontent-%COMP%] {\n  top: 135px;\n  left: 213px;\n  width: 120px;\n  font-size: larger;\n  font: bold;\n}\n\n.mycart2[_ngcontent-%COMP%] {\n  height: 35px;\n  margin-top: 12px;\n}\n\n.booktitle[_ngcontent-%COMP%] {\n  width: 180%;\n  text-align: left;\n  letter-spacing: 0px;\n  color: #0a0102;\n  opacity: 1;\n  display: flex;\n  margin-left: -25px;\n}\n\n.sub[_ngcontent-%COMP%] {\n  color: #9d9d9d;\n  opacity: 1;\n  margin-bottom: 15%;\n  margin-top: 5%;\n  margin-left: -25px;\n}\n\n.matcard2[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n  border: 1px solid #9d9d9d;\n  border-radius: 3px;\n}\n\n.button[_ngcontent-%COMP%] {\n  font-size: 17px;\n  text-align: center;\n  color: white;\n  background-color: #4bb543;\n  margin-top: 32px;\n  margin-left: 10px;\n}\n\n.bookimg[_ngcontent-%COMP%] {\n  top: 192px;\n  left: 213px;\n  width: 95px;\n  height: 120px;\n}\n\n.totalprice[_ngcontent-%COMP%] {\n  font: Bold 18px/15px Lato;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FkbWludW52ZXJpZmllZGJvb2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUFFO0VBQ0UsNERBQUE7RUFDQSxXQUFBO0FBR0o7O0FBREU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBRUEsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLFVBQUE7QUFHSjs7QUFERTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUlKOztBQUZFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSkU7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBT0o7O0FBSkU7RUFFRSwrQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSkU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBT0o7O0FBTEU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBUUo7O0FBTkU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBU0oiLCJmaWxlIjoiYWRtaW51bnZlcmlmaWVkYm9va3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydGRldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgfVxuICAuYm9va2RldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHdpZHRoOiAxNSU7XG4gIH1cbiAgbWF0LWNhcmQ6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMjVweCA1MHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogbm9uZTtcbiAgfVxuICA6Om5nLWRlZXAgLmN1c3RvbS10b29sdGlwIHtcbiAgICB3aWR0aDogNDU2cHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQ6IFJlZ3VsYXIgMTFweC8xM3B4IExhdG8gIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIC8vZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGJvcmRlcjogI2UyZTJlMiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjOWQ5ZDlkICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5ICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAubXljYXJ0IHtcbiAgICB0b3A6IDEzNXB4O1xuICAgIGxlZnQ6IDIxM3B4O1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICBmb250OiBib2xkO1xuICB9XG4gIC5teWNhcnQyIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuICAuYm9va3RpdGxlIHtcbiAgICB3aWR0aDogMTgwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgY29sb3I6ICMwYTAxMDI7XG4gICAgb3BhY2l0eTogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgfVxuICAuc3ViIHtcbiAgICBjb2xvcjogIzlkOWQ5ZDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIG1hcmdpbi1ib3R0b206IDE1JTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gIH1cbiAgXG4gIC5tYXRjYXJkMiB7XG4gICAgLy9vcGFjaXR5OiAxLjE7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzlkOWQ5ZDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIH1cbiAgLmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjU0MztcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIC5ib29raW1nIHtcbiAgICB0b3A6IDE5MnB4O1xuICAgIGxlZnQ6IDIxM3B4O1xuICAgIHdpZHRoOiA5NXB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gIH1cbiAgLnRvdGFscHJpY2Uge1xuICAgIGZvbnQ6IEJvbGQgMThweC8xNXB4IExhdG87XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuIFxuICAiXX0= */"]
      });
      /***/
    },

    /***/
    "KIY2":
    /*!*****************************************************************************!*\
      !*** ./src/app/Component/auth/forget-password/forget-password.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ForgetPasswordComponent */

    /***/
    function KIY2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function () {
        return ForgetPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/Service/user.service */
      "BE6J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _spineer_spineer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../spineer/spineer.component */
      "OLkV");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function ForgetPasswordComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spineer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ForgetPasswordComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bookstore");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Forgot Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Please Enter your Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgetPasswordComponent_div_1_Template_form_ngSubmit_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Enter your Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgetPasswordComponent_div_1_Template_input_ngModelChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.form.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-error", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Valid Email require");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r1.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r1.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.form.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r2.valid);
        }
      }

      var ForgetPasswordComponent = /*#__PURE__*/function () {
        function ForgetPasswordComponent(user, route, matSnackBar) {
          _classCallCheck(this, ForgetPasswordComponent);

          this.user = user;
          this.route = route;
          this.matSnackBar = matSnackBar;
          this.isLoading = false;
          this.error = null;
          this.message = null;
          this.form = {
            email: null
          };
        }

        _createClass(ForgetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this31 = this;

            this.isLoading = true;
            this.user.forgetPassword(this.form).subscribe(function (data) {
              return _this31.handleResponse(data);
            }, function (error) {
              return _this31.handleError(error);
            });
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            this.isLoading = false;
            this.error = error.error.message;
            console.log(error);
            this.matSnackBar.open(this.error, 'ok', {
              duration: 5000
            });
          }
        }, {
          key: "handleResponse",
          value: function handleResponse(data) {
            this.isLoading = false;
            this.matSnackBar.open('Check Your Email Please ', 'ok', {
              duration: 5000
            });
            this.route.navigateByUrl('\login');
          }
        }]);

        return ForgetPasswordComponent;
      }();

      ForgetPasswordComponent.ɵfac = function ForgetPasswordComponent_Factory(t) {
        return new (t || ForgetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
      };

      ForgetPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForgetPasswordComponent,
        selectors: [["app-forget-password"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], ["fxLayoutAlign", "center center", "fxFlexFill", "", 4, "ngIf"], ["fxLayoutAlign", "center center", "fxFlexFill", ""], ["fxFlex", "28"], ["fxLayout", "row wrap", "fxLayoutGap", "10px", "fxLayoutAlign", "flex-start", 2, "background-color", "#A03037", "padding-top", "16px"], [1, "imgLogo"], ["src", "assets\\education.svg", "alt", ""], [1, "title"], [1, "alert", "alert-danger", "text-justify", 3, "hidden"], [1, "alert", "alert-success", "text-justify", 3, "hidden"], [1, "text-center"], ["action", "", "fxLayout", "column", "fxLayoutAlign", "start start", 3, "ngSubmit"], ["forgetPassword", "ngForm"], ["appearance", "outline", "fxLayout", "column", 2, "width", "100%"], ["email", "", "required", "", "matInput", "", "type", "email", "placeholder", "Email", "name", "email", 3, "ngModel", "ngModelChange"], ["matSuffix", "", 2, "color", "#e1e4e4"], [2, "color", "#A03037"], ["mat-raised-button", "", "type", "submit", "fxFlexAlign", "end", "color", "primary", 2, "background-color", "#a03037", "border-radius", "5px", "text-decoration-color", "#FFFFFF", "font-size", "20px", "font-weight", "500", "color", "whitesmoke", "width", "106px", "height", "40px", 3, "disabled"]],
        template: function ForgetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ForgetPasswordComponent_div_0_Template, 2, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgetPasswordComponent_div_1_Template, 30, 6, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _spineer_spineer_component__WEBPACK_IMPORTED_MODULE_5__["SpineerComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexFillDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexAlignDirective"]],
        styles: [".title[_ngcontent-%COMP%] {\n  text-align: left;\n  font: Regular 20px/26px Roboto;\n  letter-spacing: 0px;\n  color: #FFFFFF;\n  text-transform: capitalize;\n  opacity: 1;\n}\n\n.imgLogo[_ngcontent-%COMP%] {\n  margin-left: 110px;\n  width: 31px;\n  height: 24px;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ0oiLCJmaWxlIjoiZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQ6IFJlZ3VsYXIgMjBweC8yNnB4IFJvYm90bztcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5pbWdMb2dvIHtcbiAgICBtYXJnaW4tbGVmdDogMTEwcHg7XG4gICAgd2lkdGg6IDMxcHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIG9wYWNpdHk6IDE7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "Mzk8":
    /*!********************************************************!*\
      !*** ./src/app/Component/addbook/addbook.component.ts ***!
      \********************************************************/

    /*! exports provided: AddbookComponent */

    /***/
    function Mzk8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddbookComponent", function () {
        return AddbookComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_Model_book_book_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/Model/book/book.module */
      "WeDW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Service/book.service */
      "upCK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function AddbookComponent_mat_error_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.bookNameValidation(), "");
        }
      }

      function AddbookComponent_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.bookAuthorValidation(), "");
        }
      }

      function AddbookComponent_mat_error_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.bookPriceValidation(), "");
        }
      }

      function AddbookComponent_mat_error_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.noOfBooksValidation(), "");
        }
      }

      function AddbookComponent_mat_error_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.bookDescriptionValidation(), "");
        }
      }

      var AddbookComponent = /*#__PURE__*/function () {
        function AddbookComponent(matSnackBar, formBuilder, bookService, dialog, dialogRef) {
          _classCallCheck(this, AddbookComponent);

          this.matSnackBar = matSnackBar;
          this.formBuilder = formBuilder;
          this.bookService = bookService;
          this.dialog = dialog;
          this.dialogRef = dialogRef;
          this.addbooks = new src_app_Model_book_book_module__WEBPACK_IMPORTED_MODULE_1__["BookModule"]();
          this.bookName = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.addbooks.bookName, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("[a-zA-Z ]*")]);
          this.authorName = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.addbooks.authorName, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("[a-zA-Z ]*")]);
          this.price = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.addbooks.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("[0-9 ]*")]);
          this.noOfBooks = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.addbooks.noOfBooks, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("[0-9]*")]);
          this.bookDetails = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.addbooks.bookDetails, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("[a-zA-Z ]*")]);
        }

        _createClass(AddbookComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSelectedImage",
          value: function onSelectedImage(event) {
            if (event.target.files.length > 0) {
              var image = event.target.files[0];
              this.imageFile = image.name;
            }
          }
        }, {
          key: "onClickaddBook",
          value: function onClickaddBook() {
            var _this32 = this;

            this.bookService.addBook(this.addbooks, this.imageFile).subscribe(function (user) {
              if (user.statusCode === 200) {
                _this32.matSnackBar.open(user.response, 'ok', {
                  duration: 4000
                });

                _this32.dialogRef.close(1);
              }
            }, function (error) {
              _this32.matSnackBar.open(error.error, 'ok', {
                duration: 4000
              });

              console.log(error);
            });

            if (this.bookForm.invalid) {
              return;
            }
          }
        }, {
          key: "bookNameValidation",
          value: function bookNameValidation() {
            return this.bookName.hasError("required") ? "Book Name must be required" : this.bookName.hasError("minlength") ? "Minimum 3 character must be present" : this.bookName.hasError("maxlength") ? "Maximum 25 character allowed" : "";
          }
        }, {
          key: "bookAuthorValidation",
          value: function bookAuthorValidation() {
            return this.authorName.hasError("required") ? "Author name must be required" : this.authorName.hasError("minlength") ? "Minimum 5 character must be present" : this.authorName.hasError("maxlength") ? "Maximum 25 character allowed" : "";
          }
        }, {
          key: "bookPriceValidation",
          value: function bookPriceValidation() {
            return this.price.hasError("required") ? "Price must be required" : this.price.hasError('pattern') ? "Only numbers allowed" : this.price.hasError("minlength") ? "Minimum 1 digit must be there" : "";
          }
        }, {
          key: "noOfBooksValidation",
          value: function noOfBooksValidation() {
            return this.noOfBooks.hasError("required") ? "Total Number of must be required" : this.noOfBooks.hasError('pattern') ? "Only numbers allowed" : this.noOfBooks.hasError("minlength") ? "Minimum 1 digit must be there" : "";
          }
        }, {
          key: "bookDescriptionValidation",
          value: function bookDescriptionValidation() {
            return this.bookDetails.hasError("required") ? "Book Description must required" : this.bookDetails.hasError("minlength") ? "Minimum 20 characters  must be there" : "";
          }
        }]);

        return AddbookComponent;
      }();

      AddbookComponent.ɵfac = function AddbookComponent_Factory(t) {
        return new (t || AddbookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]));
      };

      AddbookComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: AddbookComponent,
        selectors: [["app-addbook"]],
        decls: 50,
        vars: 16,
        consts: [[1, "container"], [2, "background-color", "#A03037", "width", "100%", "margin-bottom", "10px"], [2, "color", "white", "text-align", "center", "padding-top", "10px"], [1, "book-details"], ["appearance", "outline"], [4, "ngIf"], ["type", "name", "matInput", "", "placeholder", "Enter your Bookname", "id", "bookName", "autocomplete", "off", "required", "", 3, "formControl", "ngModel", "ngModelChange"], ["matSuffix", "", 2, "color", "grey"], ["type", "name", "matInput", "", "placeholder", "Enter your Bookauthour", "id", "bookAuthor", "autocomplete", "off", "required", "", 3, "ngModel", "formControl", "ngModelChange"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "10px"], ["appearance", "outline", 1, "example-full-width3"], ["type", "number", "matInput", "", "placeholder", " price", "id", "price", "autocomplete", "off", "required", "", 3, "ngModel", "formControl", "ngModelChange"], ["viewBox", "0 0 24 24", 2, "width", "24px", "height", "24px"], ["fill", "currentColor", "d", "M8,3H18L17,5H13.74C14.22,5.58 14.58,6.26 14.79,7H18L17,9H15C14.75,11.57 12.74,13.63 10.2,13.96V14H9.5L15.5,21H13L7,14V12H9.5V12C11.26,12 12.72,10.7 12.96,9H7L8,7H12.66C12.1,5.82 10.9,5 9.5,5H7L8,3Z"], ["appearance", "outline", 1, "example-full-width4"], ["type", "text", "matInput", "", "placeholder", "No Of Books", "id", "qty", "autocomplete", "off", "required", "", 3, "ngModel", "formControl", "ngModelChange"], ["type", "text", "id", "desc", "matInput", "", "placeholder", "Enter your bookDescription", "autocomplete", "off", "required", "", 3, "ngModel", "formControl", "ngModelChange"], ["type", "file", "name", "image", 3, "change"], [1, "submit"], ["mat-button", "", "id", "submit", "type", "submit", 2, "border", "none", "border-radius", "0px", "outline", "none", 3, "disabled", "click"]],
        template: function AddbookComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Add Book");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Book Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AddbookComponent_mat_error_9_Template, 2, 1, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddbookComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.addbooks.bookName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "book");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Book Authour");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AddbookComponent_mat_error_17_Template, 2, 1, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddbookComponent_Template_input_ngModelChange_18_listener($event) {
              return ctx.addbooks.authorName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "person");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Book Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, AddbookComponent_mat_error_25_Template, 2, 1, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddbookComponent_Template_input_ngModelChange_26_listener($event) {
              return ctx.addbooks.price = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "svg", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "path", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-form-field", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Book Quantity");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, AddbookComponent_mat_error_33_Template, 2, 1, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddbookComponent_Template_input_ngModelChange_34_listener($event) {
              return ctx.addbooks.noOfBooks = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "pets");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Book Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, AddbookComponent_mat_error_41_Template, 2, 1, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AddbookComponent_Template_input_ngModelChange_42_listener($event) {
              return ctx.addbooks.bookDetails = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AddbookComponent_Template_input_change_46_listener($event) {
              return ctx.onSelectedImage($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddbookComponent_Template_button_click_48_listener() {
              return ctx.onClickaddBook();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " Add Book ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bookName.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.bookName)("ngModel", ctx.addbooks.bookName);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authorName.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.addbooks.authorName)("formControl", ctx.authorName);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.price.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.addbooks.price)("formControl", ctx.price);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.noOfBooks.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.addbooks.noOfBooks)("formControl", ctx.noOfBooks);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bookDetails.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.addbooks.bookDetails)("formControl", ctx.bookDetails);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.bookName.invalid || ctx.authorName.invalid || ctx.price.invalid || ctx.noOfBooks.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
        styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  margin-top: 5%;\n  padding-bottom: 5%;\n  display: flex;\n  flex-direction: column;\n}\n\n.names[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n}\n\n.price-qty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n#bookDetails[_ngcontent-%COMP%] {\n  height: 60px;\n  width: auto;\n}\n\n.book-details[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.book-details[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.bookcode[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 40px;\n  margin-right: 40px;\n}\n\n.bookcode[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#bookcode[_ngcontent-%COMP%] {\n  width: auto;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: rgba(131, 4, 4, 0.8);\n  font-size: 1rem;\n  color: white;\n  height: auto;\n  width: auto;\n}\n\n.submit[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 30px;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  \n  color: rgba(61, 60, 61, 0.692);\n  font-size: medium;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: pink;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: pink;\n}\n\n[_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: pink;\n}\n\n.example-full-width3[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  flex: auto;\n  min-width: 0;\n  width: 50%;\n}\n\n.example-full-width4[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  flex: auto;\n  min-width: 0;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FkZGJvb2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFHQSxrQkFBQTtFQUdBLGFBQUE7RUFDQSxzQkFBQTtBQUhKOztBQUtFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FBRko7O0FBSUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQURKOztBQUdFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFFRTtFQUNFLGFBQUE7QUFDSjs7QUFHRTtFQUNFLFdBQUE7QUFBSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUU7RUFDRSxXQUFBO0FBR0o7O0FBREU7RUFDRSxXQUFBO0FBSUo7O0FBRkU7RUFDRSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFLSjs7QUFIRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUdBLGlCQUFBO0FBSUo7O0FBREU7RUFDRSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFERTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUlKOztBQUZFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUFLSjs7QUFIRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQU1KOztBQUZFO0VBRUUsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBSUo7O0FBRkc7RUFFQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFJSiIsImZpbGUiOiJhZGRib29rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIC8vIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgLy8gbWFyZ2luOiAwcmVtO1xuICAgIC8vIHBhZGRpbmc6IDByZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5uYW1lcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wcmljZS1xdHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuICAjYm9va0RldGFpbHMge1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAuYm9vay1kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIC8vIG1hcmdpbi1yaWdodDogNDBweDtcbiAgfVxuICAuYm9vay1kZXRhaWxzIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBmb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuYm9va2NvZGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICB9XG4gIC5ib29rY29kZSBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI2Jvb2tjb2RlIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMxLCA0LCA0LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5zdWJtaXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAvLyBtYXJnaW4tbGVmdDogNDBweDtcbiAgfVxuICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cbiAgICBjb2xvcjogcmdiYSg2MSwgNjAsIDYxLCAwLjY5Mik7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgfVxuICA6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIC8qIEZpcmVmb3ggMTkrICovXG4gICAgY29sb3I6IHBpbms7XG4gIH1cbiAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgLyogSUUgMTArICovXG4gICAgY29sb3I6IHBpbms7XG4gIH1cbiAgOi1tb3otcGxhY2Vob2xkZXIge1xuICAgIC8qIEZpcmVmb3ggMTgtICovXG4gICAgY29sb3I6IHBpbms7XG4gIH1cblxuXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgzIHtcbiAgICAvLyB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleDogYXV0bztcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAgLmV4YW1wbGUtZnVsbC13aWR0aDQge1xuICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4OiBhdXRvO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIl19 */"]
      });
      /***/
    },

    /***/
    "OLkV":
    /*!********************************************************!*\
      !*** ./src/app/Component/spineer/spineer.component.ts ***!
      \********************************************************/

    /*! exports provided: SpineerComponent */

    /***/
    function OLkV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpineerComponent", function () {
        return SpineerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SpineerComponent = /*#__PURE__*/function () {
        function SpineerComponent() {
          _classCallCheck(this, SpineerComponent);
        }

        _createClass(SpineerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SpineerComponent;
      }();

      SpineerComponent.ɵfac = function SpineerComponent_Factory(t) {
        return new (t || SpineerComponent)();
      };

      SpineerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpineerComponent,
        selectors: [["app-spineer"]],
        decls: 12,
        vars: 0,
        consts: [[1, "container"], [1, "row"], ["id", "loader"], [1, "dot"], [1, "loading"]],
        template: function SpineerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n#loader[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 175px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 175px;\n}\n\n#loader[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 175px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 175px;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 87.5px;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]::before {\n  border-radius: 100%;\n  content: \"\";\n  height: 87.5px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: scale(0);\n  width: 87.5px;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+1) {\n  transform: rotate(45deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+1)::before {\n  -webkit-animation: 0.8s linear 0.1s normal none infinite running load;\n          animation: 0.8s linear 0.1s normal none infinite running load;\n  background: #00ff80 none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+2) {\n  transform: rotate(90deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+2)::before {\n  -webkit-animation: 0.8s linear 0.2s normal none infinite running load;\n          animation: 0.8s linear 0.2s normal none infinite running load;\n  background: #00ffea none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+3) {\n  transform: rotate(135deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+3)::before {\n  -webkit-animation: 0.8s linear 0.3s normal none infinite running load;\n          animation: 0.8s linear 0.3s normal none infinite running load;\n  background: #00aaff none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+4) {\n  transform: rotate(180deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+4)::before {\n  -webkit-animation: 0.8s linear 0.4s normal none infinite running load;\n          animation: 0.8s linear 0.4s normal none infinite running load;\n  background: #0040ff none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+5) {\n  transform: rotate(225deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+5)::before {\n  -webkit-animation: 0.8s linear 0.5s normal none infinite running load;\n          animation: 0.8s linear 0.5s normal none infinite running load;\n  background: #2a00ff none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+6) {\n  transform: rotate(270deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+6)::before {\n  -webkit-animation: 0.8s linear 0.6s normal none infinite running load;\n          animation: 0.8s linear 0.6s normal none infinite running load;\n  background: #9500ff none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+7) {\n  transform: rotate(315deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+7)::before {\n  -webkit-animation: 0.8s linear 0.7s normal none infinite running load;\n          animation: 0.8s linear 0.7s normal none infinite running load;\n  background: magenta none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+8) {\n  transform: rotate(360deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+8)::before {\n  -webkit-animation: 0.8s linear 0.8s normal none infinite running load;\n          animation: 0.8s linear 0.8s normal none infinite running load;\n  background: #ff0095 none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  bottom: -40px;\n  height: 20px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  width: 180px;\n}\n\n@-webkit-keyframes load {\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n}\n\n@keyframes load {\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n}\n\n@keyframes load {\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n}\n\n.spinner-message[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NwaW5lZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxRUFBQTtVQUFBLDZEQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxRUFBQTtVQUFBLDZEQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxRUFBQTtVQUFBLDZEQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxRUFBQTtVQUFBLDZEQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxRUFBQTtVQUFBLDZEQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxRUFBQTtVQUFBLDZEQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxRUFBQTtVQUFBLDZEQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxRUFBQTtVQUFBLDZEQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLFVBQUE7SUFDQSxtQkFBQTtFQUNOO0FBQ0Y7O0FBTEE7RUFDSTtJQUNJLFVBQUE7SUFDQSxtQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSTtJQUNJLFVBQUE7SUFDQSxtQkFBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSSxrQkFBQTtBQURKIiwiZmlsZSI6InNwaW5lZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBtYXJnaW46IDA7XG59XG5cbiNsb2FkZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDE3NXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDE3NXB4O1xufVxuXG4jbG9hZGVyIHtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAxNzVweDtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxNzVweDtcbn1cblxuI2xvYWRlciAuZG90IHtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDg3LjVweDtcbn1cblxuI2xvYWRlciAuZG90OjpiZWZvcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDg3LjVweDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB3aWR0aDogODcuNXB4O1xufVxuXG4jbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzEpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbiNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rMSk6OmJlZm9yZSB7XG4gICAgYW5pbWF0aW9uOiAwLjhzIGxpbmVhciAwLjFzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgbG9hZDtcbiAgICBiYWNrZ3JvdW5kOiAjMDBmZjgwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG59XG5cbiNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rMikge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bisyKTo6YmVmb3JlIHtcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuMnMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgIGJhY2tncm91bmQ6ICMwMGZmZWEgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3biszKSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3biszKTo6YmVmb3JlIHtcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuM3Mgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgIGJhY2tncm91bmQ6ICMwMGFhZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis0KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis0KTo6YmVmb3JlIHtcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNHMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgIGJhY2tncm91bmQ6ICMwMDQwZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis1KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis1KTo6YmVmb3JlIHtcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNXMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgIGJhY2tncm91bmQ6ICMyYTAwZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis2KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis2KTo6YmVmb3JlIHtcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNnMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgIGJhY2tncm91bmQ6ICM5NTAwZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis3KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis3KTo6YmVmb3JlIHtcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuN3Mgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgIGJhY2tncm91bmQ6IG1hZ2VudGEgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis4KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbn1cblxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis4KTo6YmVmb3JlIHtcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuOHMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xuICAgIGJhY2tncm91bmQ6ICNmZjAwOTUgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbn1cblxuI2xvYWRlciAubG9hZGluZyB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJvdHRvbTogLTQwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxODBweDtcbn1cblxuQGtleWZyYW1lcyBsb2FkIHtcbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgbG9hZCB7XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxufVxuXG4uc3Bpbm5lci1tZXNzYWdlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"]
      });
      /***/
    },

    /***/
    "PyQ/":
    /*!******************************************************!*\
      !*** ./src/app/Component/footer/footer.component.ts ***!
      \******************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function PyQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 2,
        vars: 0,
        consts: [[1, "bottom", 2, "height", "5%"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Copyright \xA9 2020, Bookstore All rights reserved\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".bottom[_ngcontent-%COMP%] {\n  background-color: #2E1D1E;\n  padding: 10px;\n  font-family: Lato;\n  padding-left: 90px;\n  color: white;\n  bottom: 0px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUxRDFFO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IExhdG87XG4gICAgcGFkZGluZy1sZWZ0OiA5MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "QiK6":
    /*!*****************************************!*\
      !*** ./src/app/Service/cart.service.ts ***!
      \*****************************************/

    /*! exports provided: CartService */

    /***/
    function QiK6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartService", function () {
        return CartService;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _httpservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./httpservice.service */
      "F4+c");

      var CartService = /*#__PURE__*/function () {
        function CartService(http, httpService) {
          _classCallCheck(this, CartService);

          this.http = http;
          this.httpService = httpService;
          this.bookApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BookUrl;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BASE_URL;
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'content-type': 'application/json'
            })
          }; // tslint:disable-next-line: variable-name

          this._autoRefresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.httpOtions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'content-type': 'application/json'
            })
          };
        }

        _createClass(CartService, [{
          key: "autoRefresh$",
          get: function get() {
            return this._autoRefresh$;
          }
        }, {
          key: "post",
          value: function post(arr) {
            console.log(arr, 'custmerdetails');
            return this.httpService.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].CartUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].addUrl, arr, '');
          }
        }, {
          key: "addToCart",
          value: function addToCart(bookId) {
            var _this33 = this;

            return this.httpService.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BookUrl, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ADDCART, "/").concat(bookId), {}, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                token: localStorage.token
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              _this33._autoRefresh$.next();
            }));
          }
        }, {
          key: "increaseBooksQuantity",
          value: function increaseBooksQuantity(bookId, CartInfo) {
            var _this34 = this;

            console.log('cart details are ', CartInfo);
            return this.httpService // tslint:disable-next-line: max-line-length
            .put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BookUrl, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].INC_BOOKS_QUANTITY).concat(bookId), CartInfo, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                token: localStorage.token
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              _this34._autoRefresh$.next();
            }));
          }
        }, {
          key: "decreaseBooksQuantity",
          value: function decreaseBooksQuantity(bookId, CartInfo) {
            var _this35 = this;

            console.log('cart details are ', CartInfo);
            return this.httpService // tslint:disable-next-line: max-line-length
            .put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BookUrl, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].DEC_BOOKS_QUANTITY).concat(bookId), CartInfo, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                token: localStorage.token
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              _this35._autoRefresh$.next();
            }));
          }
        }, {
          key: "removeIteamFromCart",
          value: function removeIteamFromCart(bookId) {
            var _this36 = this;

            return this.httpService // tslint:disable-next-line: max-line-length
            ["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BookUrl, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].REMOVE_BOOKS_FROM_CART, "/").concat(bookId), {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                token: localStorage.token
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              _this36._autoRefresh$.next();
            }));
          }
        }, {
          key: "getCartBooksFrom",
          value: function getCartBooksFrom() {
            // tslint:disable-next-line: max-line-length
            return this.httpService.get("".concat(this.baseUrl, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].GET_BOOKS_FROM_CART), {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                token: localStorage.token
              })
            });
          }
        }, {
          key: "getCartItemCount",
          value: function getCartItemCount() {
            console.log('get itmes from cart'); // tslint:disable-next-line: max-line-length

            return this.httpService.get("".concat(this.baseUrl, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].COUNT_BOOKS_IN_CART), {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                token: localStorage.token
              })
            });
          }
        }, {
          key: "addquantity",
          value: function addquantity(BookId, quantity) {
            return this.httpService.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].quantity + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].addbooksquantity + '/' + BookId + '/' + quantity, '', '');
          }
        }]);

        return CartService;
      }();

      CartService.ɵfac = function CartService_Factory(t) {
        return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_httpservice_service__WEBPACK_IMPORTED_MODULE_5__["HttpserviceService"]));
      };

      CartService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: CartService,
        factory: CartService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "S5Cc":
    /*!********************************************************************!*\
      !*** ./src/app/Component/ordergreeting/ordergreeting.component.ts ***!
      \********************************************************************/

    /*! exports provided: OrdergreetingComponent */

    /***/
    function S5Cc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdergreetingComponent", function () {
        return OrdergreetingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../toolbar/toolbar.component */
      "DHZB");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      var OrdergreetingComponent = /*#__PURE__*/function () {
        function OrdergreetingComponent() {
          _classCallCheck(this, OrdergreetingComponent);
        }

        _createClass(OrdergreetingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OrdergreetingComponent;
      }();

      OrdergreetingComponent.ɵfac = function OrdergreetingComponent_Factory(t) {
        return new (t || OrdergreetingComponent)();
      };

      OrdergreetingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrdergreetingComponent,
        selectors: [["app-ordergreeting"]],
        decls: 42,
        vars: 0,
        consts: [[2, "height", "100%", "width", "100%"], [1, "greeting1"], ["src", "assets\\greeting1.jpg", 2, "height", "15rem", "width", "15rem"], [1, "message"], [2, "color", "red"], [2, "color", "rgb(42, 42, 243)"], [1, "greeting2", 2, "margin-top", "10px"], [1, "greeting2"], [1, "contact-heading"], [1, "contactus"], [1, "card"], [1, "email"], [2, "display", "flex", "justify-content", "center", "align-items", "center", "background-color", "rgb(248, 195, 191)"], [2, "display", "flex", "justify-content", "center", "align-items", "center"]],
        template: function OrdergreetingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Order ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xA0 Placed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\xA0 Successfully");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "hurry!!!your order is confirmed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Please Check Your Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " For further Communication...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-title", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-content", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "bangalore.bridgelabz@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-title", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Contact us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-content", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "+91-0123456789");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card-title", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card-content", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Bridge Labz , HSR Layout , Bangalore");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"]],
        styles: ["body[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.greeting1[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  height: auto;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.message[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n  font-size: xx-large;\n  color: #698804;\n}\n\n.greeting2[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: large;\n}\n\n.contact-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: x-large;\n  font-weight: bolder;\n  color: #acaaaa;\n  padding: 30px;\n}\n\n.contactus[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  margin-right: 50px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  box-shadow: 1px 2px 2px 2px #04ffff;\n}\n\n.email[_ngcontent-%COMP%] {\n  height: 8rem;\n  width: 15rem;\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29yZGVyZ3JlZXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxtQ0FBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7QUFBSiIsImZpbGUiOiJvcmRlcmdyZWV0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2dyZWV0aW5nLnBuZ1wiKTtcbn1cblxuLmdyZWV0aW5nMSB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWVzc2FnZSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgY29sb3I6IHJnYigxMDUsIDEzNiwgNCk7XG59XG5cbi5ncmVldGluZzIge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmNvbnRhY3QtaGVhZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yOiByZ2IoMTcyLCAxNzAsIDE3MCk7XG4gICAgcGFkZGluZzogMzBweDtcbn1cblxuLmNvbnRhY3R1cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG4ubWF0LWNhcmQge1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggMnB4IDJweCAjMDRmZmZmO1xufVxuXG4uZW1haWwge1xuICAgIGhlaWdodDogOHJlbTtcbiAgICB3aWR0aDogMTVyZW07XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'BookStore';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".mat-step-header .mat-step-icon-selected, .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #a03037 !important;\n}\n\n*[_ngcontent-%COMP%]:focus {\n  outline: 0 !important;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #a03037 !important;\n}\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #a03037 !important;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #a03037 !important;\n  opacity: 0.8 !important;\n}\n\n  .mat-input-element {\n  caret-color: #a03037 !important;\n}\n\n  .mat-form-field-invalid .mat-input-element, .mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: #a03037 !important;\n}\n\n  .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.6) !important;\n}\n\n  .mat-form-field.mat-focused .mat-form-field-label {\n  color: #a03037 !important;\n}\n\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #a03037 !important;\n}\n\n  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  \n  background-color: #a03037 !important;\n}\n\n  .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #a03037 !important;\n  \n}\n\n .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #a03037 !important;\n  \n}\n\n.mat-error[_ngcontent-%COMP%] {\n  color: #a03037;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7O0VBR0ksb0NBQUE7QUFBSjs7QUFHQTtFQUNJLHFCQUFBO0FBQUo7O0FBSUE7RUFDSSx5QkFBQTtBQURKOztBQU1BO0VBQ0kseUJBQUE7QUFISjs7QUFPQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7QUFKSjs7QUFRQTtFQUNJLCtCQUFBO0FBTEo7O0FBU0E7O0VBRUksK0JBQUE7QUFOSjs7QUFVQTtFQUNJLG9DQUFBO0FBUEo7O0FBWUE7RUFDSSx5QkFBQTtBQVRKOztBQWFBO0VBQ0kseUJBQUE7QUFWSjs7QUFhQTtFQUNJLDRCQUFBO0VBQ0Esb0NBQUE7QUFWSjs7QUFhQTtFQUNJLG9DQUFBO0VBQ0EsNEJBQUE7QUFWSjs7QUFhQTtFQUNJLGdDQUFBO0VBQ0EsMEJBQUE7QUFWSjs7QUFhQTtFQUNJLGNBQUE7QUFWSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYXQtaWNvbi1zdGVwcGVyIHNlbGVjdGVkIGNvbG9yIGNoYW5nZVxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMDMwMzchaW1wb3J0YW50O1xufVxuXG4qOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG59XG5cbi8vaW5wdXQgb3V0bGluZSBjb2xvclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgIGNvbG9yOiAjYTAzMDM3IWltcG9ydGFudDtcbiAgICAvLyBvcGFjaXR5OiAxIWltcG9ydGFudDtcbn1cblxuLy9tYXQtaW5wdXQgZm9jdXNlZCBjb2xvclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgIGNvbG9yOiAjYTAzMDM3IWltcG9ydGFudDtcbn1cblxuLy8gbWF0LWlucHV0IGVycm9yIG91dGxpbmUgY29sb3Jcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgY29sb3I6ICNhMDMwMzchaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDAuOCFpbXBvcnRhbnQ7XG59XG5cbi8vIG1hdC1pbnB1dCBjYXJlbnQgY29sb3Jcbjo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiAjYTAzMDM3IWltcG9ydGFudDtcbn1cblxuLy8gbWF0LWlucHV0IGVycm9yIGNhcmVudCBjb2xvclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCxcbi5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiAjYTAzMDM3IWltcG9ydGFudDtcbn1cblxuLy8gbWF0LWxhYmVsIG5vcm1hbCBzdGF0ZSBzdHlsZVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpIWltcG9ydGFudDtcbiAgICAvLyBjb2xvcjogJG1haW5Db2xvciFpbXBvcnRhbnQ7XG59XG5cbi8vIG1hdC1sYWJlbCBmb2N1c2VkIHN0eWxlXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICNhMDMwMzchaW1wb3J0YW50O1xufVxuXG4vLyBtYXQtbGFiZWwgZXJyb3Igc3R5bGVcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAjYTAzMDM3IWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgLypjbGljayBlZmZlY3QgY29sb3IgY2hhbmdlKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTAzMDM3ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTAzMDM3IWltcG9ydGFudDtcbiAgICAvKmlubmVyIGNpcmNsZSBjb2xvciBjaGFuZ2UqL1xufVxuXG46Om5nLWRlZXAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6ICNhMDMwMzchaW1wb3J0YW50O1xuICAgIC8qb3V0ZXIgcmluZyBjb2xvciBjaGFuZ2UqL1xufVxuXG4ubWF0LWVycm9yIHtcbiAgICBjb2xvcjogI2EwMzAzNztcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "UBdA":
    /*!******************************************!*\
      !*** ./src/app/Service/admin.service.ts ***!
      \******************************************/

    /*! exports provided: AdminService */

    /***/
    function UBdA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminService", function () {
        return AdminService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _httpservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./httpservice.service */
      "F4+c");

      var AdminService = /*#__PURE__*/function () {
        function AdminService(http, httpService) {
          _classCallCheck(this, AdminService);

          this.http = http;
          this.httpService = httpService;
          this.adminUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].adminUrl;
          this.approveBook = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].approveBook;
          this.rejectBook = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].rejectBook;
          this.unVerifiedBooks = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].unVerifiedBooks;
          this.rejectedBooks = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].rejectedBooks;
          this.approvedBooks = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].approvedBooks;
          this.token = localStorage.getItem('token');
          this.getallOrderedBooks = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getallOrderedBooks;
          this.changeOrderstatus = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].changeOrderstatus; // tslint:disable-next-line: variable-name

          this._autoRefresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // private token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZCI6M30.rzol7EjZW2exz-O-d40T3FvIem3Lk8kYGTngic_YHHX2_T7c4zMCcjDfzMXtOHehZkP8cW7TDK_tWELwWkkryQ";

          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'content-type': 'application/json',
              token: this.token
            })
          };
        }

        _createClass(AdminService, [{
          key: "autoRefresh$",
          get: function get() {
            return this._autoRefresh$;
          }
        }, {
          key: "autoRefresh",
          get: function get() {
            return this.subject;
          }
        }, {
          key: "getUnverifiedBooks",
          value: function getUnverifiedBooks(status) {
            // status='Onhold';
            console.log('unverified books ' + this.adminUrl + this.unVerifiedBooks + '?status=' + status);
            return this.httpService.get(this.adminUrl + this.unVerifiedBooks + '?status=' + status, this.httpOptions);
          }
        }, {
          key: "getRejectedBooks",
          value: function getRejectedBooks() {
            return this.httpService.get(this.adminUrl + this.rejectedBooks, this.httpOptions);
          }
        }, {
          key: "getApprovedBooks",
          value: function getApprovedBooks(status) {
            return this.httpService.get(this.adminUrl + this.approvedBooks + '?status=' + status, this.httpOptions);
          }
        }, {
          key: "approveBooks",
          value: function approveBooks(noteId, status) {
            var _this37 = this;

            // tslint:disable-next-line: max-line-length
            return this.httpService.put(this.adminUrl + this.approveBook + noteId + '?' + 'status=' + status, '', this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              _this37.subject.next();
            }));
          }
        }, {
          key: "rejectBooks",
          value: function rejectBooks(noteId, status) {
            var _this38 = this;

            // tslint:disable-next-line: max-line-length
            return this.httpService.put(this.adminUrl + this.rejectBook + noteId + '?' + 'status=' + status, '', this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              _this38.subject.next();
            }));
          }
        }, {
          key: "getAllOrderedBooks",
          value: function getAllOrderedBooks() {
            console.log('order status url');
            console.log(this.httpService.get(this.adminUrl + this.getallOrderedBooks, this.httpOptions));
            return this.httpService.get(this.adminUrl + this.getallOrderedBooks, {});
          }
        }, {
          key: "updateOrderStatus",
          value: function updateOrderStatus(orderId, status) {
            //  var y:number =+orderId;
            console.log('url ' + this.adminUrl + this.changeOrderstatus + '?orderId=' + orderId + '&status=' + status); // return this.httpService.put(this.adminUrl+this.changeOrderstatus+"?orderId="+orderId+"&status="+status,"",this.httpOptions);

            return this.httpService // tslint:disable-next-line: max-line-length
            .put(this.adminUrl + this.changeOrderstatus + '?orderId=' + orderId + '&status=' + status, '', this.httpOptions); //  .pipe(
            //   tap(() => {
            //     this._autoRefresh$.next();
            //   })
            // );
            // http://localhost:8080/bookstore/orderStatusByAdmin?orderId=583785&status=in%20progress
          }
        }]);

        return AdminService;
      }();

      AdminService.ɵfac = function AdminService_Factory(t) {
        return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_httpservice_service__WEBPACK_IMPORTED_MODULE_5__["HttpserviceService"]));
      };

      AdminService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: AdminService,
        factory: AdminService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "UYkS":
    /*!****************************************!*\
      !*** ./src/app/Model/address.model.ts ***!
      \****************************************/

    /*! exports provided: Address */

    /***/
    function UYkS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Address", function () {
        return Address;
      });

      var Address = function Address() {
        _classCallCheck(this, Address);
      };
      /***/

    },

    /***/
    "VNSQ":
    /*!******************************************!*\
      !*** ./src/app/Service/order.service.ts ***!
      \******************************************/

    /*! exports provided: OrderService */

    /***/
    function VNSQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderService", function () {
        return OrderService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/internal/Subject */
      "ds6q");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _httpservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./httpservice.service */
      "F4+c");

      var OrderService = /*#__PURE__*/function () {
        function OrderService(http, httpService) {
          _classCallCheck(this, OrderService);

          this.http = http;
          this.httpService = httpService;
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'content-type': 'application/json'
            })
          }; // tslint:disable-next-line: variable-name

          this._autoRefresh$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.httpOtions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'content-type': 'application/json'
            })
          };
        }

        _createClass(OrderService, [{
          key: "autoRefresh$",
          get: function get() {
            return this._autoRefresh$;
          }
        }, {
          key: "placeOrder",
          value: function placeOrder(bookId, AddressId) {
            // tslint:disable-next-line: max-line-length
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].PLACE_ORDER).concat(AddressId, "&bookId=").concat(bookId), {}, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                token: localStorage.token
              })
            });
          }
        }]);

        return OrderService;
      }();

      OrderService.ɵfac = function OrderService_Factory(t) {
        return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_httpservice_service__WEBPACK_IMPORTED_MODULE_4__["HttpserviceService"]));
      };

      OrderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: OrderService,
        factory: OrderService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "VcT6":
    /*!**********************************************************!*\
      !*** ./src/app/Component/admin/admin/admin.component.ts ***!
      \**********************************************************/

    /*! exports provided: AdminComponent */

    /***/
    function VcT6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
        return AdminComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ratedbooks_ratedbooks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../ratedbooks/ratedbooks.component */
      "k7oA");
      /* harmony import */


      var _adminunverifiedbooks_adminunverifiedbooks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../adminunverifiedbooks/adminunverifiedbooks.component */
      "HQEs");
      /* harmony import */


      var _orderstatus_orderstatus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../orderstatus/orderstatus.component */
      "GLdz");

      function AdminComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ratedbooks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdminComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-adminunverifiedbooks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdminComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-orderstatus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdminComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dilbert cartoonist Adams, with his usual adroit touch and sense of humor, offers an enjoyably provocative guide to the art of persuasion. In 2016, Adams predicted that Donald Trump would win the presidency when few others considered him a serious contender. What did Adams see that experts missed? Declaring himself a \u201Clifelong student\u201D of the art of persuasion, Adams offers sharp insights into how Trump persuades people, keeps the spotlight on himself and the topics of his choice, and used these skills to talk his way into the White House.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AdminComponent = /*#__PURE__*/function () {
        function AdminComponent(router) {
          _classCallCheck(this, AdminComponent);

          this.router = router;
          this.name = null;
          this.unverified = false;
          this.orders = false;
          this.review = false;
        }

        _createClass(AdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this39 = this;

            // this.getUserName();
            this.router.queryParams.subscribe(function (params) {
              _this39.param = params.book;

              if (_this39.param === 'unverified') {
                _this39.unverified = true;
                _this39.orders = false;
                _this39.review = false;
                console.log('unverifed:', _this39.unverified);
              }

              if (_this39.param === 'order') {
                _this39.orders = true;
                _this39.unverified = false;
                _this39.review = false;
              }

              if (_this39.param === 'review') {
                _this39.review = true;
                _this39.orders = false;
                _this39.unverified = false;
              }

              if (_this39.param === 'books') {
                _this39.review = false;
                _this39.orders = false;
                _this39.unverified = false;
              }
            });
          }
        }]);

        return AdminComponent;
      }();

      AdminComponent.ɵfac = function AdminComponent_Factory(t) {
        return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      AdminComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminComponent,
        selectors: [["app-admin"]],
        decls: 4,
        vars: 4,
        consts: [[4, "ngIf"]],
        template: function AdminComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminComponent_div_0_Template, 2, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminComponent_div_1_Template, 2, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminComponent_div_2_Template, 2, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminComponent_div_3_Template, 5, 0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.unverified && !ctx.orders && !ctx.review);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unverified && !ctx.orders && !ctx.review);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.unverified && ctx.orders && !ctx.review);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.unverified && !ctx.orders && ctx.review);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ratedbooks_ratedbooks_component__WEBPACK_IMPORTED_MODULE_3__["RatedbooksComponent"], _adminunverifiedbooks_adminunverifiedbooks_component__WEBPACK_IMPORTED_MODULE_4__["AdminunverifiedbooksComponent"], _orderstatus_orderstatus_component__WEBPACK_IMPORTED_MODULE_5__["OrderstatusComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "WeDW":
    /*!*******************************************!*\
      !*** ./src/app/Model/book/book.module.ts ***!
      \*******************************************/

    /*! exports provided: BookModule */

    /***/
    function WeDW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookModule", function () {
        return BookModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BookModule = function BookModule() {
        _classCallCheck(this, BookModule);
      };

      BookModule.ɵfac = function BookModule_Factory(t) {
        return new (t || BookModule)();
      };

      BookModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: BookModule
      });
      BookModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BookModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _Component_wish_wish_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Component/wish/wish.component */
      "2HCW");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _Component_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./Component/toolbar/toolbar.component */
      "DHZB");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _Component_displaybook_displaybook_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./Component/displaybook/displaybook.component */
      "3nxd");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _Pipe_booksearchpipe_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./Pipe/booksearchpipe.pipe */
      "5s37");
      /* harmony import */


      var _Component_cart_cart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./Component/cart/cart.component */
      "vK3D");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _Component_ordergreeting_ordergreeting_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./Component/ordergreeting/ordergreeting.component */
      "S5Cc");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _Component_auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./Component/auth/forget-password/forget-password.component */
      "KIY2");
      /* harmony import */


      var _Component_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./Component/auth/reset-password/reset-password.component */
      "4B9C");
      /* harmony import */


      var _Component_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./Component/admin/admin/admin.component */
      "VcT6");
      /* harmony import */


      var _Component_spineer_spineer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./Component/spineer/spineer.component */
      "OLkV");
      /* harmony import */


      var _Component_auth_login_component_login_component_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./Component/auth/login-component/login-component.component */
      "DmK3");
      /* harmony import */


      var _Component_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./Component/auth/registration/registration.component */
      "vODe");
      /* harmony import */


      var _Component_seller_seller_seller_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./Component/seller/seller/seller.component */
      "DTTJ");
      /* harmony import */


      var _Component_footer_footer_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./Component/footer/footer.component */
      "PyQ/");
      /* harmony import */


      var _Component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./Component/dashboard/dashboard.component */
      "Ac6Z");
      /* harmony import */


      var _Component_sidenavbar_sidenavbar_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./Component/sidenavbar/sidenavbar.component */
      "C2gm");
      /* harmony import */


      var _Component_addbook_addbook_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./Component/addbook/addbook.component */
      "Mzk8");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _Component_update_book_update_book_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./Component/update-book/update-book.component */
      "9v7S");
      /* harmony import */


      var _Component_giverate_giverate_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./Component/giverate/giverate.component */
      "cM8b");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _Component_adminunverifiedbooks_adminunverifiedbooks_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./Component/adminunverifiedbooks/adminunverifiedbooks.component */
      "HQEs");
      /* harmony import */


      var _Component_ratereview_ratereview_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./Component/ratereview/ratereview.component */
      "i1kn");
      /* harmony import */


      var _Component_ratedbooks_ratedbooks_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./Component/ratedbooks/ratedbooks.component */
      "k7oA");
      /* harmony import */


      var _Component_bookreviews_bookreviews_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./Component/bookreviews/bookreviews.component */
      "sp3Q");
      /* harmony import */


      var _Component_orderstatus_orderstatus_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./Component/orderstatus/orderstatus.component */
      "GLdz");
      /* harmony import */


      var _Component_addbook_upload_book_image_upload_book_image_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./Component/addbook/upload-book-image/upload-book-image.component */
      "Em1p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); //import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_48__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_48__["ɵɵdefineInjector"]({
        providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]],
        imports: [[_angular_material_badge__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__["FlexLayoutModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_48__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _Component_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"], _Component_displaybook_displaybook_component__WEBPACK_IMPORTED_MODULE_12__["DisplaybookComponent"], _Pipe_booksearchpipe_pipe__WEBPACK_IMPORTED_MODULE_17__["BooksearchpipePipe"], _Component_cart_cart_component__WEBPACK_IMPORTED_MODULE_18__["CartComponent"], _Component_ordergreeting_ordergreeting_component__WEBPACK_IMPORTED_MODULE_22__["OrdergreetingComponent"], //PagenotfoundComponent,
          _Component_auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_27__["ForgetPasswordComponent"], _Component_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_28__["ResetPasswordComponent"], _Component_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_29__["AdminComponent"], _Component_spineer_spineer_component__WEBPACK_IMPORTED_MODULE_30__["SpineerComponent"], _Component_auth_login_component_login_component_component__WEBPACK_IMPORTED_MODULE_31__["LoginComponentComponent"], _Component_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_32__["RegistrationComponent"], _Component_seller_seller_seller_component__WEBPACK_IMPORTED_MODULE_33__["SellerComponent"], _Component_footer_footer_component__WEBPACK_IMPORTED_MODULE_34__["FooterComponent"], _Component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_35__["DashboardComponent"], _Component_sidenavbar_sidenavbar_component__WEBPACK_IMPORTED_MODULE_36__["SidenavbarComponent"], _Component_giverate_giverate_component__WEBPACK_IMPORTED_MODULE_40__["GiverateComponent"], _Component_adminunverifiedbooks_adminunverifiedbooks_component__WEBPACK_IMPORTED_MODULE_42__["AdminunverifiedbooksComponent"], _Component_ratereview_ratereview_component__WEBPACK_IMPORTED_MODULE_43__["RatereviewComponent"], _Component_addbook_addbook_component__WEBPACK_IMPORTED_MODULE_37__["AddbookComponent"], _Component_update_book_update_book_component__WEBPACK_IMPORTED_MODULE_39__["UpdateBookComponent"], _Component_addbook_upload_book_image_upload_book_image_component__WEBPACK_IMPORTED_MODULE_47__["UploadBookImageComponent"], _Component_bookreviews_bookreviews_component__WEBPACK_IMPORTED_MODULE_45__["BookreviewsComponent"], _Component_orderstatus_orderstatus_component__WEBPACK_IMPORTED_MODULE_46__["OrderstatusComponent"], _Component_ratedbooks_ratedbooks_component__WEBPACK_IMPORTED_MODULE_44__["RatedbooksComponent"], _Component_wish_wish_component__WEBPACK_IMPORTED_MODULE_0__["WishComponent"]],
          imports: [_angular_material_badge__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__["FlexLayoutModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogModule"]]
        });
      })();
      /***/

    },

    /***/
    "bomO":
    /*!*****************************************!*\
      !*** ./src/app/Model/customer.model.ts ***!
      \*****************************************/

    /*! exports provided: Customer */

    /***/
    function bomO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Customer", function () {
        return Customer;
      });

      var Customer = function Customer() {
        _classCallCheck(this, Customer);
      };
      /***/

    },

    /***/
    "cM8b":
    /*!**********************************************************!*\
      !*** ./src/app/Component/giverate/giverate.component.ts ***!
      \**********************************************************/

    /*! exports provided: GiverateComponent */

    /***/
    function cM8b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GiverateComponent", function () {
        return GiverateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/Service/book.service */
      "upCK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../toolbar/toolbar.component */
      "DHZB");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../footer/footer.component */
      "PyQ/");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      function GiverateComponent_button_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " star ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.color));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.totalRate, " ");
        }
      }

      function GiverateComponent_button_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GiverateComponent_button_24_Template_button_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var i_r4 = restoredCtx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onClick(i_r4 + 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ratingId_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r1.color)("id", "star_" + i_r4)("matTooltip", ratingId_r3 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.showIcon(i_r4), " ");
        }
      }

      function GiverateComponent_mat_error_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Star count is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " and cannot be zero ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var GiverateComponent = /*#__PURE__*/function () {
        function GiverateComponent(snackBar, bookService, route, router) {
          _classCallCheck(this, GiverateComponent);

          this.snackBar = snackBar;
          this.bookService = bookService;
          this.route = route;
          this.router = router; // tslint:disable-next-line: no-input-rename

          this.starCount = 5;
          this.snackBarDuration = 2000;
          this.ratingArr = [];
        }

        _createClass(GiverateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this40 = this;

            this.bookService.autoRefresh$.subscribe(function () {
              _this40.getRateOfBook(_this40.bookId);
            });
            this.bookId = this.route.snapshot.paramMap.get('bookId');
            console.log('bookId:', this.bookId);
            this.token = this.route.snapshot.paramMap.get('token');
            console.log('token:', this.token);
            this.getBookById();

            for (var index = 0; index < this.starCount; index++) {
              this.ratingArr.push(index);
            }

            this.getRateOfBook(this.bookId);
            this.getColor();
          }
        }, {
          key: "onClick",
          value: function onClick(rating) {
            this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
              duration: this.snackBarDuration
            });
            this.rating = rating;
            return false;
          }
        }, {
          key: "showIcon",
          value: function showIcon(index) {
            if (this.rating >= index + 1) {
              return 'star';
            } else {
              return 'star_border';
            }
          }
        }, {
          key: "getBookById",
          value: function getBookById() {
            var _this41 = this;

            console.log('get book called');
            this.bookService.getOneBook(this.bookId, this.token).subscribe(function (response) {
              if (response.obj != null) {
                _this41.book = response.obj;
                _this41.bookImage = response.obj.image;
                _this41.bookAuthor = response.obj.authorName;
                _this41.bookName = response.obj.bookName;
              }
            });
          }
        }, {
          key: "submitRate",
          value: function submitRate() {
            var _this42 = this;

            var data = {
              rating: this.rating,
              review: this.review
            };
            console.log('rating is', data.rating);
            console.log('review is ', data.review);
            this.bookService.ratingandreview(this.bookId, data, this.token).subscribe(function (response) {
              console.log('submit rate response:', response);

              _this42.snackBar.open(response.response, 'ok', {
                duration: 2000
              });

              _this42.router.navigateByUrl('books');
            }, function (error) {
              _this42.snackBar.open(error.error.message, 'ok', {
                duration: 2000
              });
            });
          }
        }, {
          key: "getColor",
          value: function getColor() {
            if (this.totalRate >= 3 || this.totalRate >= 2) {
              this.color = 'rgb(245,182,110)';
            }

            if (this.totalRate >= 4) {
              this.color = 'rgb(16,136,16)';
            }

            if (this.totalRate < 2) {
              this.color = 'rgb(250,0,0)';
            }
          }
        }, {
          key: "getRateOfBook",
          value: function getRateOfBook(bookId) {
            var _this43 = this;

            console.log('book id for avgrate:', bookId);
            this.bookService.getRateOfBookById(bookId).subscribe(function (response) {
              console.log('response', response);
              console.log('rate of books:', response.obj);
              _this43.totalRate = response.obj;
            });
          }
        }]);

        return GiverateComponent;
      }();

      GiverateComponent.ɵfac = function GiverateComponent_Factory(t) {
        return new (t || GiverateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      GiverateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GiverateComponent,
        selectors: [["app-giverate"]],
        inputs: {
          starCount: "starCount"
        },
        decls: 38,
        vars: 7,
        consts: [[2, "height", "11%"], ["flexLayout", "row"], ["role", "combobox", "flex", "column", 1, "rating-container"], ["fxLayout", "row", "fxLayoutAlign", "space-between stretch", 1, "giverating"], ["fxLayout", "row", 1, "twocards"], [1, "bookimg", 3, "src"], ["fxLayout", "column", 2, "margin-left", "20px"], [1, "booktitle", 2, "word-wrap", "break-word", "margin-bottom", "5%", "font-size", "20px"], [1, "sub", 2, "word-wrap", "break-word", "margin-bottom", "5%"], ["class", "single", "fxLayout", "row", 3, "ngStyle", 4, "ngIf"], [1, "twocards"], ["fxLayout", "row", 1, "rating"], ["mat-icon-button", "", "fxLayout", "row", "matTooltipPosition", "above", 3, "color", "id", "matTooltip", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["fxLayout", "column", 1, "singlecard"], [2, "margin-bottom", "2%"], [1, "reviewtext"], ["matTextareaAutosize", "", "placeholder", "Review here........", 1, "input", 3, "ngModel", "ngModelChange"], [2, "align-items", "flex-end"], ["mat-button", "", 1, "rate-submit", 3, "click"], [1, "footer", 2, "margin-top", "8%", "margin-right", "0"], ["fxLayout", "row", 1, "single", 3, "ngStyle"], [2, "font-size", "14px", "padding-top", "1.8px", "color", "white"], ["mat-icon-button", "", "fxLayout", "row", "matTooltipPosition", "above", 3, "color", "id", "matTooltip", "click"]],
        template: function GiverateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "Strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, GiverateComponent_button_17_Template, 5, 4, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Rate the Book");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, GiverateComponent_button_24_Template, 3, 4, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, GiverateComponent_mat_error_25_Template, 5, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Review the Book");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "textarea", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GiverateComponent_Template_textarea_ngModelChange_32_listener($event) {
              return ctx.review = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GiverateComponent_Template_button_click_34_listener() {
              return ctx.submitRate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets\\bookimage\\", ctx.bookImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bookName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" by ", ctx.bookAuthor, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalRate > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ratingArr);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.starCount == null || ctx.starCount == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.review);
          }
        },
        directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultStyleDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatError"]],
        styles: [".rating-container[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n@media (min-width: 728px) {\n  .footer[_ngcontent-%COMP%] {\n    margin-right: 13%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .footer[_ngcontent-%COMP%] {\n    margin-right: 13%;\n  }\n}\n\n@media (max-width: 414px) {\n  .footer[_ngcontent-%COMP%] {\n    margin-right: 8%;\n  }\n\n  .rate-submit[_ngcontent-%COMP%] {\n    margin-left: 50% !important;\n  }\n}\n\nbutton[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 25px;\n  line-height: 20px;\n}\n\nbutton[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ffc400;\n}\n\n.bookimg[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 150px;\n}\n\n.twocards[_ngcontent-%COMP%] {\n  width: 365px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  border: 1px solid #e2e2e2;\n  box-shadow: 0 0 8px 8px #fff inset !important;\n}\n\n.giverating[_ngcontent-%COMP%] {\n  position: relative;\n  flex-wrap: wrap;\n  display: block;\n  align-items: flex-start;\n  justify-content: center;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.rating[_ngcontent-%COMP%] {\n  margin-top: 4%;\n  margin-left: -1%;\n}\n\n.singlecard[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 2%;\n  width: 80%;\n}\n\n.reviewtext[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 99%;\n  min-height: 60px;\n  outline: none;\n}\n\n.rate-submit[_ngcontent-%COMP%] {\n  margin-left: 85%;\n  margin-top: 10px;\n  height: 40px;\n  width: 70px;\n  text-align: center;\n  padding-left: 12px;\n  background-color: #a03037;\n  color: white;\n}\n\n.single[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n  padding-top: 0px;\n  height: 20px;\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  padding-right: 1px;\n  border-radius: 3px;\n  border: none;\n  color: white !important;\n  margin-top: 5%;\n}\n\n.addtobag[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #a03037;\n  height: 35px;\n  width: 93px;\n  padding: 0px;\n  border-radius: 0px;\n  font-size: small;\n  border: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dpdmVyYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxpQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSTtJQUNJLGlCQUFBO0VBQU47QUFDRjs7QUFHQTtFQUNJO0lBQ0ksZ0JBQUE7RUFETjs7RUFHRTtJQUNJLDJCQUFBO0VBQU47QUFDRjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFFSTtFQUNJLGNBQUE7QUFBUjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0FBREo7O0FBSUE7RUFDSSx5QkFBQTtFQUNBLDZDQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBREo7O0FBS0k7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBRlI7O0FBTUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUFBLGtDQUFBO0VBQUEsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUhKOztBQU1BO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSEoiLCJmaWxlIjoiZ2l2ZXJhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0aW5nLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcyOHB4KSB7XG4gICAgLmZvb3RlciB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTMlO1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5mb290ZXIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEzJTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgIC5mb290ZXIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDglO1xuICAgIH1cbiAgICAucmF0ZS1zdWJtaXQge1xuICAgICAgICBtYXJnaW4tbGVmdDogNTAlICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5idXR0b24ge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBtYXQtaWNvbiB7XG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAxOTYsIDApO1xuICAgIH1cbn1cblxuLmJvb2tpbWcge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4udHdvY2FyZHMge1xuICAgIHdpZHRoOiAzNjVweDtcbn1cblxubWF0LWNhcmQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmUyZTI7XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCA4cHggI2ZmZiBpbnNldCAhaW1wb3J0YW50O1xufVxuXG4uZ2l2ZXJhdGluZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4ucmF0aW5nIHtcbiAgICBtYXJnaW4tdG9wOiA0JTtcbiAgICBtYXJnaW4tbGVmdDogLTElO1xufVxuXG4uc2luZ2xlY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICB3aWR0aDogODAlO1xufVxuXG4ucmV2aWV3dGV4dCB7XG4gICAgdGV4dGFyZWEge1xuICAgICAgICB3aWR0aDogOTklO1xuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbn1cblxuLnJhdGUtc3VibWl0IHtcbiAgICBtYXJnaW4tbGVmdDogODUlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwMzAzNztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5zaW5nbGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5hZGR0b2JhZyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMDMwMzc7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiA5M3B4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "i1kn":
    /*!**************************************************************!*\
      !*** ./src/app/Component/ratereview/ratereview.component.ts ***!
      \**************************************************************/

    /*! exports provided: RatereviewComponent */

    /***/
    function i1kn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RatereviewComponent", function () {
        return RatereviewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/Service/book.service */
      "upCK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../toolbar/toolbar.component */
      "DHZB");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../footer/footer.component */
      "PyQ/");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function RatereviewComponent_button_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatereviewComponent_button_35_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.addToCart(ctx_r6.book.bookId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ADD TO BAG ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RatereviewComponent_ng_template_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ADDED TO BAG ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RatereviewComponent_button_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatereviewComponent_button_38_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.addToWishlist();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " WISHLIST ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RatereviewComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " star ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var review_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", review_r10.rating, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r10.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r10.review);
        }
      }

      function RatereviewComponent_label_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Be the first to write review ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var RatereviewComponent = /*#__PURE__*/function () {
        function RatereviewComponent(bookService, router, data, dialog, matSnackBar, route) {
          _classCallCheck(this, RatereviewComponent);

          this.bookService = bookService;
          this.router = router;
          this.data = data;
          this.dialog = dialog;
          this.matSnackBar = matSnackBar;
          this.route = route;
          this.ratings = [];
          this.totalRate = 0;
          this.ratenumber = 0;
          this.reviewList = new Array();
          this.user = new Array();
        }

        _createClass(RatereviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.bookId = this.route.snapshot.paramMap.get('bookId');
            this.getBookById();
            this.getRatings();
            console.log('bookid ', this.bookId); // this.getRateOfBookById();
          }
        }, {
          key: "getBookById",
          value: function getBookById() {
            var _this44 = this;

            this.bookService.getOneBookById(this.bookId).subscribe(function (response) {
              console.log(response);
              _this44.book = response.obj;
              console.log("get book by id:", _this44.book);
              console.log(_this44.book, 'kkkkkkkk');
            });
          }
        }, {
          key: "getRateOfBookById",
          value: function getRateOfBookById() {
            var _this45 = this;

            this.bookService.getRateOfBookById(this.bookId).subscribe(function (response) {
              if (response.obj != null) {
                _this45.rate = response.obj;

                if (_this45.rate === undefined) {
                  console.log('book average rate ', _this45.rate);
                }
              }
            });
          }
        }, {
          key: "rateNow",
          value: function rateNow() {
            // if (this.visible) {
            // localStorage.setItem("totalRate", this.total);
            this.router.navigate(['books/ratingandreview/' + this.bookId]); // }
          }
        }, {
          key: "getRatings",
          value: function getRatings() {
            var _this46 = this;

            this.bookService.getReview(this.bookId).subscribe(function (response) {
              _this46.ratings = response.obj;
              console.log('rate and reviews for book ' + _this46.ratings); // tslint:disable-next-line: prefer-const
              // tslint:disable-next-line: forin

              for (var index in _this46.ratings) {
                _this46.rate = _this46.ratings[index];
                _this46.totalRate += _this46.rate.rating;
                _this46.ratenumber += 1;
                _this46.total = _this46.totalRate;
                _this46.rev = _this46.ratings[index].review;
                _this46.user = _this46.ratings[index].userName;
                console.log("user:", _this46.user);
                var p = {
                  name: _this46.user,
                  review: _this46.rev,
                  rating: _this46.ratings[index].rating
                };

                _this46.reviewList.push(p);

                console.log("after push:", _this46.reviewList);
              }

              if (_this46.ratenumber > 1) {
                _this46.totalRate = _this46.totalRate / _this46.ratenumber;
                _this46.total = Number.parseFloat(_this46.totalRate + '').toFixed(1);
              }

              if (_this46.totalRate >= 3 || _this46.totalRate >= 2) {
                _this46.color = 'rgb(245, 182, 110)';
              }

              if (_this46.totalRate >= 4) {
                _this46.color = 'rgb(16, 136, 16)';
              }

              if (_this46.totalRate < 2) {
                _this46.color = 'rgb(216, 69, 59)';
              }
            });
          }
        }, {
          key: "addToCart",
          value: function addToCart(bookId) {
            if (localStorage.getItem('token') === null) {
              this.matSnackBar.open('Please Login first', 'ok', {
                duration: 5000
              });
              sessionStorage.setItem(bookId, bookId);
              this.isAdded = true;
              this.router.navigateByUrl('login');
            }

            sessionStorage.setItem(bookId, bookId);
            this.ngOnInit(); // if (this.visible) {
            //   this.bookService.addToCart(this.bookId).subscribe((response: any) => {
            //     this.data.changeMessage("count");
            //     console.log(response["obj"]);
            //     this.isAdded = response.obj;
            //     this._matSnackBar.open("Book added to cart", "ok", {
            //       duration: 1000,
            //     });
            //   });
            // } else {
            //   const dialogRef = this.dialog.open(LoginComponent);
            //   dialogRef.afterClosed().subscribe((result) => {
            //     window.location.reload();
            //   });
            //   this._matSnackBar.open("please login", "ok", {
            //     duration: 1000,
            //   });
            // }
          } // adding book to wish list if user login

        }, {
          key: "addToWishlist",
          value: function addToWishlist() {// if (this.visible) {
            //   this.bookService.addToWishList(this.bookId).subscribe((response: any) => {
            //     console.log(response["obj"]);
            //     this.isListed = response["obj"];
            //     this._matSnackBar.open("Book added to wishlist", "ok", {
            //       duration: 1000,
            //     });
            //   });
            // } else {
            //   const dialogRef = this.dialog.open(LoginComponent);
            //   dialogRef.afterClosed().subscribe((result) => {
            //     window.location.reload();
            //   });
            //   this._matSnackBar.open("please login", "ok", {
            //     duration: 1000,
            //   });
            // }
          }
        }, {
          key: "isAddedToWishList",
          value: function isAddedToWishList() {// this.bookService
            //   .isAddedToWishList(this.bookId)
            //   .subscribe((response: any) => {
            //     this.isListed = response["obj"];
            //   });
          }
        }]);

        return RatereviewComponent;
      }();

      RatereviewComponent.ɵfac = function RatereviewComponent_Factory(t) {
        return new (t || RatereviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      RatereviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RatereviewComponent,
        selectors: [["app-ratereview"]],
        decls: 49,
        vars: 15,
        consts: [[2, "height", "11%"], ["flexLayout", "row"], ["role", "combobox", "flex", "column", 1, "display"], ["fxLayout", "row", 1, "matcard2"], ["fxLayout", "row", "fxLayoutAlign", "start stretch", 1, "cartdetails", 2, "margin-left", "2%"], ["fxLayoutAlign", "center fit-content", 1, "bookMatcard"], [1, "image"], [1, "bookimg", 3, "src"], [1, "bookdetails"], [1, "booktitle", 2, "word-wrap", "break-word", "margin-bottom", "2%", "font-size", "20px"], [1, "sub", 2, "word-wrap", "break-word", "margin-bottom", "4%"], [2, "margin-bottom", "4%", "font-size", "18px", "margin-left", "-25px"], [2, "margin-bottom", "5%", "font-size", "14px", "margin-left", "-25px"], ["fxLayout", "row", "fxLayoutAlign", "spacearound stretch", "fxLayoutGap", "35%", 2, "margin-bottom", "5%", "margin-left", "-25px"], ["fxLayout", "row", 1, "total", 2, "font-size", "14px", "text-align", "center", "padding-top", "9px", "height", "40px", "margin-bottom", "5px", "width", "fit-content !important", "padding-right", "1px", "border-radius", "3px", "color", "white", 3, "ngStyle"], [2, "font-size", "14px", "padding-top", "1.8px"], ["fxLayout", "row wrap"], ["fxLayout", "row", 2, "margin-bottom", "5%"], [2, "font-size", "18px", "margin-left", "-25px"], [2, "margin-left", "6px", "color", "#9d9d9d !important", "margin-top", "2px"], ["fxLayout", "row", 2, "margin-left", "-25px"], ["mat-button", "", "class", "add", "style", "color: white; background-color: #a03037;", 3, "click", 4, "ngIf", "ngIfElse"], ["added", ""], ["mat-button", "", "class", "add", "style", "color: #0a0102; background-color: white;", 3, "click", 4, "ngIf"], [1, "matcard2"], ["fxLayout", "column", 2, "margin-left", "2%", "margin-right", "2%"], [2, "font-size", "20px"], [4, "ngFor", "ngForOf"], ["class", "total", "style", "color: black; background-color: white;", 4, "ngIf"], [1, "foot", 2, "top", "720px", "margin-top", "5%", "margin-right", "0"], ["mat-button", "", 1, "add", 2, "color", "white", "background-color", "#a03037", 3, "click"], ["mat-button", "", 1, "add", 2, "color", "white", "background-color", "#3371b5"], ["mat-button", "", 1, "add", 2, "color", "#0a0102", "background-color", "white", 3, "click"], ["fxLayout", "row", 2, "margin-top", "4%"], ["fxLayout", "row", 1, "single", 2, "font-size", "14px", "text-align", "center", "padding-top", "0px", "height", "20px", "width", "fit-content !important", "padding-right", "1px", "border-radius", "3px", "color", "white", "background-color", "rgb(16, 136, 16)"], [2, "margin-left", "20px"], [1, "total", 2, "color", "black", "background-color", "white"]],
        template: function RatereviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "Strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "Strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Seller:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " star ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Description:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RatereviewComponent_button_35_Template, 2, 0, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RatereviewComponent_ng_template_36_Template, 2, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, RatereviewComponent_button_38_Template, 2, 0, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Ratings & Reviews");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, RatereviewComponent_div_44_Template, 13, 3, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, RatereviewComponent_label_46_Template, 2, 0, "label", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets\\bookimage\\", ctx.book.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.bookName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" by ", ctx.book.authorName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs.", ctx.book.price, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", " Dwayne Johnson", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.color));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.totalRate, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.book.bookDetails, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAdded)("ngIfElse", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isListed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviewList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalRate == 0);
          }
        },
        directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultStyleDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]],
        styles: [".display[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n\n.cartdetails[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: block;\n  position: relative;\n  align-items: flex-start;\n  padding-top: 25px;\n}\n\n.bookMatcard[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  padding-bottom: 2.5%;\n  padding-top: 2.5%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.bookdetails[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: block;\n  margin-left: 45px;\n  margin-bottom: 30px;\n  width: 50%;\n}\n\n.image[_ngcontent-%COMP%] {\n  display: inline-block;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.booktitle[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  letter-spacing: 0px;\n  color: #0a0102;\n  opacity: 1;\n  display: flex;\n  margin-left: -25px;\n}\n\n.sub[_ngcontent-%COMP%] {\n  color: #9d9d9d;\n  opacity: 1;\n  margin-left: -25px;\n}\n\n.matcard2[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  display: flex;\n  flex-direction: column;\n  width: 85%;\n  border: 1px solid #9d9d9d;\n  border-radius: 3px;\n}\n\n.bookimg[_ngcontent-%COMP%] {\n  top: 192px;\n  left: 213px;\n  width: 200px;\n  height: 312px;\n}\n\n.bookimg2[_ngcontent-%COMP%] {\n  top: 192px;\n  left: 213px;\n  width: 90px;\n  height: 218px;\n}\n\n.totalprice[_ngcontent-%COMP%] {\n  font: Bold 18px/15px Lato;\n  margin-bottom: 30px;\n}\n\n@media (min-width: 728px) {\n  .foot[_ngcontent-%COMP%] {\n    margin-right: 13%;\n    margin-top: 272px;\n  }\n}\n\n@media (min-width: 1024px) {\n  .foot[_ngcontent-%COMP%] {\n    margin-right: 13%;\n    margin-top: 600px;\n  }\n}\n\n@media (max-width: 414px) {\n  .foot[_ngcontent-%COMP%] {\n    margin-right: 8%;\n  }\n\n  .matcard2[_ngcontent-%COMP%] {\n    margin-left: -18%;\n    width: 120%;\n  }\n\n  .bookdetails[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    width: 85%;\n  }\n  .bookdetails[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\n    width: -webkit-fit-content !important;\n    width: -moz-fit-content !important;\n    width: fit-content !important;\n  }\n}\n\n.add[_ngcontent-%COMP%] {\n  width: 220px;\n  border: 1px solid #9d9d9d;\n  border-radius: 1px;\n  margin-right: 3%;\n}\n\n.rating[_ngcontent-%COMP%] {\n  border: 1px solid #d6d3d3;\n  border-radius: 2px;\n  margin-top: 5px;\n}\n\n.single[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.total[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 14px;\n  text-align: center;\n  padding-top: 9px;\n  height: 40px;\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  padding-right: 1px;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhdGVyZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBRTtFQUNFLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFERTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBRUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFHSjs7QUFERTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBSUo7O0FBRkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEU7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSEU7RUFDRSwrQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSkU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBT0o7O0FBTEU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBUUo7O0FBTEU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBUUo7O0FBTkU7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7RUFTSjtBQUNGOztBQVBFO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0VBU0o7QUFDRjs7QUFQRTtFQUNFO0lBQ0UsZ0JBQUE7RUFTSjs7RUFQRTtJQUNFLGlCQUFBO0lBQ0EsV0FBQTtFQVVKOztFQVJFO0lBQ0UsZUFBQTtJQUNBLFVBQUE7RUFXSjtFQVZJO0lBQ0UscUNBQUE7SUFBQSxrQ0FBQTtJQUFBLDZCQUFBO0VBWU47QUFDRjs7QUFURTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFXSjs7QUFURTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBWUo7O0FBVkU7RUFDRSxZQUFBO0FBYUo7O0FBWEU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFBQSxrQ0FBQTtFQUFBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWNKIiwiZmlsZSI6InJhdGVyZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgfVxuICAuY2FydGRldGFpbHMge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gIH1cbiAgLmJvb2tNYXRjYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjUlO1xuICAgIHBhZGRpbmctdG9wOiAyLjUlO1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgcGFkZGluZy1yaWdodDogNSU7XG4gIH1cbiAgLmJvb2tkZXRhaWxzIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmltYWdlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5ib29rdGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICBjb2xvcjogIzBhMDEwMjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICB9XG4gIC5zdWIge1xuICAgIGNvbG9yOiAjOWQ5ZDlkO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICB9XG4gIFxuICAubWF0Y2FyZDIge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogODUlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5ZDlkOWQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB9XG4gIC5ib29raW1nIHtcbiAgICB0b3A6IDE5MnB4O1xuICAgIGxlZnQ6IDIxM3B4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDMxMnB4O1xuICB9XG4gIC5ib29raW1nMiB7XG4gICAgdG9wOiAxOTJweDtcbiAgICBsZWZ0OiAyMTNweDtcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDIxOHB4O1xuICB9XG4gIFxuICAudG90YWxwcmljZSB7XG4gICAgZm9udDogQm9sZCAxOHB4LzE1cHggTGF0bztcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3MjhweCkge1xuICAgIC5mb290IHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTMlO1xuICAgICAgbWFyZ2luLXRvcDogMjcycHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuZm9vdCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEzJTtcbiAgICAgIG1hcmdpbi10b3A6IDYwMHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgICAuZm9vdCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDglO1xuICAgIH1cbiAgICAubWF0Y2FyZDIge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xOCU7XG4gICAgICB3aWR0aDogMTIwJTtcbiAgICB9XG4gICAgLmJvb2tkZXRhaWxzIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAuYWRkIHtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5hZGQge1xuICAgIHdpZHRoOiAyMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWQ5ZDlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xuICB9XG4gIC5yYXRpbmcge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmQzZDM7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuICAuc2luZ2xlIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgLnRvdGFsIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogOXB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB9Il19 */"]
      });
      /***/
    },

    /***/
    "k7oA":
    /*!**************************************************************!*\
      !*** ./src/app/Component/ratedbooks/ratedbooks.component.ts ***!
      \**************************************************************/

    /*! exports provided: RatedbooksComponent */

    /***/
    function k7oA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RatedbooksComponent", function () {
        return RatedbooksComponent;
      });
      /* harmony import */


      var _bookreviews_bookreviews_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../bookreviews/bookreviews.component */
      "sp3Q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/Service/book.service */
      "upCK");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _Pipe_booksearchpipe_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../Pipe/booksearchpipe.pipe */
      "5s37");

      function RatedbooksComponent_div_5_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Out Of stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      function RatedbooksComponent_div_5_button_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " star ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r3.color));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.totalRate, " ");
        }
      }

      function RatedbooksComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RatedbooksComponent_div_5_Template_mat_card_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var book_r1 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.getReviews(book_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RatedbooksComponent_div_5_div_5_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RatedbooksComponent_div_5_button_13_Template, 5, 4, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets\\bookimage\\", book_r1.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !book_r1.noOfBooks);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](book_r1.bookName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("by ", book_r1.authorName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rs. ", book_r1.price, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.totalRate > 0);
        }
      }

      var RatedbooksComponent = /*#__PURE__*/function () {
        function RatedbooksComponent(service, matSnackBar, dialog) {
          _classCallCheck(this, RatedbooksComponent);

          this.service = service;
          this.matSnackBar = matSnackBar;
          this.dialog = dialog;
          this.bookList = Array();
          this.rateList = Array();
        }

        _createClass(RatedbooksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.getallApprovedBooks();
            this.getBookByRating();
            this.totalRate = 0;
            this.getColor();
            this.getSearchBookData();
          }
        }, {
          key: "getBookByRating",
          value: function getBookByRating() {
            var _this47 = this;

            this.service.getSortedBookByRate().subscribe(function (response) {
              console.log('response', response);
              console.log('books:', response.obj);
              _this47.bookList = response.obj;
            }, function (error) {
              _this47.matSnackBar.open(error.error.message, 'failed', {
                duration: 5000
              });
            });
          }
        }, {
          key: "getRateOfBook",
          value: function getRateOfBook(bookId) {
            var _this48 = this;

            console.log('book id for avgrate:', bookId);
            this.service.getRateOfBookById(bookId).subscribe(function (response) {
              console.log('response', response);
              console.log('rate of books:', response.obj);
              _this48.totalRate = response.obj;
            }, function (error) {
              _this48.matSnackBar.open(error.error.message, 'failed', {
                duration: 5000
              });
            });
          }
        }, {
          key: "getallApprovedBooks",
          value: function getallApprovedBooks() {
            var _this49 = this;

            console.log('method called');
            this.service.getallBooks().subscribe(function (response) {
              console.log('response', response);
              console.log('books:', response.obj);
              _this49.bookList = response.obj;
            }, function (error) {
              _this49.matSnackBar.open(error.error.message, 'failed', {
                duration: 5000
              });
            });
          }
        }, {
          key: "getColor",
          value: function getColor() {
            if (this.totalRate >= 3 || this.totalRate >= 2) {
              this.color = 'rgb(245,182,110)';
            }

            if (this.totalRate >= 4) {
              this.color = 'rgb(16,136,16)';
            }

            if (this.totalRate < 2) {
              this.color = 'rgb(250,0,0)';
            }
          }
        }, {
          key: "getReviews",
          value: function getReviews(book) {
            var dialogRef = this.dialog.open(_bookreviews_bookreviews_component__WEBPACK_IMPORTED_MODULE_0__["BookreviewsComponent"], {
              // width: '25rem',
              // panelClass: 'custom-dialog-container',
              // height: '400px',
              // width: '600px',
              data: {
                bookId: book.bookId
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
            });
          }
        }, {
          key: "getSearchBookData",
          value: function getSearchBookData() {
            var _this50 = this;

            this.service.getSearchBookData().subscribe(function (message) {
              console.log('search data', message.books);
              _this50.bookSearch = message.books;
            });
          }
        }]);

        return RatedbooksComponent;
      }();

      RatedbooksComponent.ɵfac = function RatedbooksComponent_Factory(t) {
        return new (t || RatedbooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
      };

      RatedbooksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RatedbooksComponent,
        selectors: [["app-ratedbooks"]],
        decls: 7,
        vars: 4,
        consts: [[1, "main-container"], [1, "title"], [1, "list-books"], [4, "ngFor", "ngForOf"], [2, "height", "22.5em", "width", "220px", "margin-right", "40px", 3, "click"], [2, "height", "150px", "width", "90px", "margin-left", "55px", "margin-right", "55px", "padding-top", "20px", "padding-bottom", "20px", 3, "src"], [2, "width", "17em"], ["class", "out-of-stock ", 4, "ngIf"], [1, "bookname"], [1, "authorname"], [1, "price"], ["class", "single", "fxLayout", "row", 3, "ngStyle", 4, "ngIf"], [1, "out-of-stock"], ["fxLayout", "row", 1, "single", 3, "ngStyle"], [2, "font-size", "14px", "padding-top", "1.8px", "color", "white"]],
        template: function RatedbooksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Books ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RatedbooksComponent_div_5_Template, 14, 6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "booksearchpipe");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 1, ctx.bookList, ctx.bookSearch));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultStyleDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]],
        pipes: [_Pipe_booksearchpipe_pipe__WEBPACK_IMPORTED_MODULE_10__["BooksearchpipePipe"]],
        styles: [".bottom[_ngcontent-%COMP%] {\n  background-color: black;\n  padding: 20px;\n  text-align: center;\n  color: white;\n  bottom: 0px;\n  width: 100%;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-left: 5em;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: bolder;\n  font-family: Lato, Regular;\n  align-items: flex-start;\n  margin-top: 20px;\n}\n\n.sort-choice[_ngcontent-%COMP%] {\n  align-content: flex-end;\n  align-items: flex-end;\n  z-index: 3001;\n}\n\n.list-books[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 14.4rem;\n  padding-right: 2em;\n  border: 1px solid;\n  border-color: #f0eeee;\n  margin-bottom: 20px;\n}\n\n.mat-card.mat-card[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n  background: #f5f5f5 0% 0% no-repeat padding-box;\n}\n\n.mat-card-title.mat-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  height: 171px auto;\n  width: 233px;\n  align-items: center;\n  align-content: center;\n}\n\n.bookname[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 7px;\n  font-size: large;\n  font-weight: bolder;\n  font-size: 14px;\n  font-family: Lato, Regular;\n}\n\n.authorname[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 7px;\n  font-size: 12px;\n  font-family: Lato, Regular;\n  color: gray;\n}\n\n.price[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 5px;\n  font-size: 14px;\n  font-family: Lato, Regular;\n  font-weight: bolder;\n  color: #080808;\n}\n\n.availablity[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 12px;\n  font-size: 13px;\n  font-family: Lato;\n  color: rgba(87, 25, 25, 0.904);\n}\n\n.cart-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: 15px;\n  margin-right: 20px;\n  padding-bottom: 20px;\n  justify-content: space-between;\n}\n\n.btn-addbook[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #a03037;\n  height: 30px;\n  width: 81px;\n  padding: 0px;\n  border-radius: 3px;\n  font-size: small;\n  border: none;\n  cursor: pointer;\n}\n\n.addtobag[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #a03037;\n  height: 35px;\n  width: 93px;\n  padding: 0px;\n  border-radius: 0px;\n  font-size: small;\n  border: none;\n  cursor: pointer;\n}\n\n.wishlist[_ngcontent-%COMP%] {\n  height: 35px;\n  margin-left: 10px;\n  width: auto;\n  background-color: white;\n  cursor: pointer;\n  border-radius: 0px;\n}\n\n.update[_ngcontent-%COMP%] {\n  height: 35px;\n  margin-left: 10px;\n  width: 83px;\n  background-color: white;\n  cursor: pointer;\n  border-radius: 0px;\n}\n\n.addedbtn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ngx-pagination[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  padding: 0.1875rem 0.625rem;\n  background: #8f2b2f !important;\n  color: #fefefe;\n  cursor: default;\n}\n\n.out-of-stock[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  text-align: center;\n  padding: 8px 0px;\n  font-size: medium;\n  position: absolute;\n  font-family: Lato;\n  font-weight: bold;\n  top: 100px;\n  left: 30px;\n  right: 30px;\n  box-shadow: 0px 3px 8px #00000029;\n  border-radius: 2px;\n  opacity: 0.9;\n  text-transform: uppercase;\n}\n\n.out-of-stock[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  text-align: center;\n  padding: 8px 0px;\n  font-size: medium;\n  position: absolute;\n  top: 100px;\n  left: 30px;\n  right: 30px;\n  box-shadow: 0px 3px 8px #00000029;\n  border-radius: 2px;\n  opacity: 0.9;\n  text-transform: uppercase;\n}\n\n.ngx-pagination[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  padding: 0.1875rem 0.625rem;\n  background: #8f2b2f !important;\n  color: #fefefe;\n  cursor: default;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: inline-block;\n  align-items: center;\n  padding-bottom: 20px;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font: Medium Lato;\n  letter-spacing: 0px;\n  color: #707070;\n  opacity: 1;\n  font-size: 9px/11px;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n}\n\n.pagination[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: #8F2B2F;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: #d4d5d2;\n}\n\n.pbtn[_ngcontent-%COMP%] {\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border: 1px solid #E2E2E2;\n  opacity: 1;\n}\n\n.single[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n  padding-top: 0px;\n  height: 20px;\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  padding-right: 1px;\n  margin-left: 20px;\n  border-radius: 3px;\n  border: none;\n  color: white !important;\n  margin-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhdGVkYm9va3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFJQTtFQUNJLCtDQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBT0E7RUFDSSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFKSjs7QUFPQTtFQUNJLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUpKOztBQU9BO0VBQ0ksK0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFKSjs7QUFVQTtFQUNJLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVBKOztBQVVBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBUEo7O0FBVUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBUEo7O0FBVUE7RUFDSSx5QkFBQTtBQVBKOztBQVVBO0VBQ0kseUJBQUE7QUFQSjs7QUFVQTtFQUNJLCtDQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBUEo7O0FBVUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUFBLGtDQUFBO0VBQUEsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBUEoiLCJmaWxlIjoicmF0ZWRib29rcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0b20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1sZWZ0OiA1ZW07XG4gICAgXG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1mYW1pbHk6IExhdG8sIFJlZ3VsYXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnNvcnQtY2hvaWNlIHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgei1pbmRleDogMzAwMTtcbn1cblxuLmxpc3QtYm9va3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIHotaW5kZXg6IDMwMDE7XG59XG5cbm1hdC1jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB3aWR0aDogMTQuNHJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQwLCAyMzgsIDIzOCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1hdC1jYXJkLm1hdC1jYXJkIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbm1hdC1jYXJkLXRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbn1cblxuLm1hdC1jYXJkLXRpdGxlLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTcxcHggYXV0bztcbiAgICB3aWR0aDogMjMzcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ib29rbmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IExhdG8sIFJlZ3VsYXI7XG59XG5cbi5hdXRob3JuYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBSZWd1bGFyO1xuICAgIGNvbG9yOiBncmF5O1xufVxuXG4ucHJpY2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IExhdG8sIFJlZ3VsYXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogcmdiKDgsIDgsIDgpO1xufVxuXG4uYXZhaWxhYmxpdHkge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICAgIGNvbG9yOiByZ2JhKDg3LCAyNSwgMjUsIDAuOTA0KTtcbn1cblxuLmNhcnQtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5idG4tYWRkYm9vayB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMDMwMzc7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiA4MXB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkdG9iYWcge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTAzMDM3O1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogOTNweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLndpc2hsaXN0IHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLnVwZGF0ZSB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiA4M3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5hZGRlZGJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vLyBwYWdpbmF0aW9uLWNvbnRyb2xzIGxpLmN1cnJlbnQge1xuLy8gICBiYWNrZ3JvdW5kOiBncmF5O1xuLy8gfVxuLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcbiAgICBwYWRkaW5nOiAwLjE4NzVyZW0gMC42MjVyZW07XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNDMsIDQzLCA0NywgMSkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZlZmVmZTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5vdXQtb2Ytc3RvY2sge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LWZhbWlseTogTGF0bztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0b3A6IDEwMHB4O1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA4cHggIzAwMDAwMDI5O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm91dC1vZi1zdG9jayB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwcHg7XG4gICAgbGVmdDogMzBweDtcbiAgICByaWdodDogMzBweDtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDhweCAjMDAwMDAwMjk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vLyBwYWdpbmF0aW9uLWNvbnRyb2xzIGxpLmN1cnJlbnQge1xuLy8gICBiYWNrZ3JvdW5kOiBncmF5O1xuLy8gfVxuLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcbiAgICBwYWRkaW5nOiAwLjE4NzVyZW0gMC42MjVyZW07XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNDMsIDQzLCA0NywgMSkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZlZmVmZTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnBhZ2luYXRpb24gYSB7XG4gICAgZm9udDogTWVkaXVtIExhdG87XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtc2l6ZTogOXB4LzExcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucGFnaW5hdGlvbiBhLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhGMkIyRjtcbn1cblxuLnBhZ2luYXRpb24gYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQ1ZDI7XG59XG5cbi5wYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTJFMkUyO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5zaW5nbGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gIH0iXX0= */"]
      });
      /***/
    },

    /***/
    "rbIm":
    /*!*********************************************!*\
      !*** ./src/app/Service/wishlist.service.ts ***!
      \*********************************************/

    /*! exports provided: WishlistService */

    /***/
    function rbIm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WishlistService", function () {
        return WishlistService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _httpservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./httpservice.service */
      "F4+c");

      var WishlistService = /*#__PURE__*/function () {
        function WishlistService(http, httpService) {
          _classCallCheck(this, WishlistService);

          this.http = http;
          this.httpService = httpService; // tslint:disable-next-line: variable-name

          this._autoRefresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.addwhistlistUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].WISHLIST_ADD;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL;
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'content-type': 'application/json'
            })
          };
        }

        _createClass(WishlistService, [{
          key: "autoRefresh$",
          get: function get() {
            return this._autoRefresh$;
          }
        }, {
          key: "addToWishlist",
          value: function addToWishlist(bookId) {
            var _this51 = this;

            console.log('----------------bookid=  ', bookId);
            console.log('${this.baseUrl}/${this.addwhistlistUrl}/${bookId}' + '---------------wishlist url');
            return this.httpService.post("".concat(this.baseUrl, "/").concat(this.addwhistlistUrl, "/").concat(bookId), {}, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                token: localStorage.token
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              _this51._autoRefresh$.next();
            }));
          }
        }, {
          key: "getWishllistBooks",
          value: function getWishllistBooks() {
            // tslint:disable-next-line: max-line-length
            // console.log(`${this.baseUrl}/${environment.WISHLIST_GET}`);
            return this.httpService.get("".concat(this.baseUrl, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].WISHLIST_GET), {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                token: localStorage.token
              })
            });
          }
        }, {
          key: "getWishlistCount",
          value: function getWishlistCount() {
            console.log('get itmes from cart'); // tslint:disable-next-line: max-line-length

            return this.httpService.get("".concat(this.baseUrl, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].WISHLIST_COUNT), {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                token: localStorage.token
              })
            });
          }
        }, {
          key: "removeFromWishList",
          value: function removeFromWishList(orderId) {
            var _this52 = this;

            console.log('removeFromWishList');
            console.log("".concat(this.baseUrl, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].WISHLIST_REMOVE) + orderId); // tslint:disable-next-line: max-line-length

            return this.httpService["delete"]("".concat(this.baseUrl, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].WISHLIST_REMOVE) + orderId, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                token: localStorage.token
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              _this52._autoRefresh$.next();
            }));
          }
        }]);

        return WishlistService;
      }();

      WishlistService.ɵfac = function WishlistService_Factory(t) {
        return new (t || WishlistService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_httpservice_service__WEBPACK_IMPORTED_MODULE_5__["HttpserviceService"]));
      };

      WishlistService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: WishlistService,
        factory: WishlistService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "sp3Q":
    /*!****************************************************************!*\
      !*** ./src/app/Component/bookreviews/bookreviews.component.ts ***!
      \****************************************************************/

    /*! exports provided: BookreviewsComponent */

    /***/
    function sp3Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookreviewsComponent", function () {
        return BookreviewsComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/Service/book.service */
      "upCK");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function BookreviewsComponent_div_4_button_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " star ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.totalRate, " ");
        }
      }

      function BookreviewsComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Reviews: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BookreviewsComponent_div_4_button_2_Template, 5, 1, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.totalRate > 0);
        }
      }

      function BookreviewsComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Reviews: No reviews ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function BookreviewsComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](book_r4.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](book_r4.review);
        }
      }

      var BookreviewsComponent = /*#__PURE__*/function () {
        function BookreviewsComponent(data, bookService, snakbar) {
          _classCallCheck(this, BookreviewsComponent);

          this.data = data;
          this.bookService = bookService;
          this.snakbar = snakbar;
          this.reviews = new Array();
          this.reviewList = new Array();
          this.user = new Array();
          this.bookId = data.bookId;
          console.log("bookid for review:", this.bookId);
        }

        _createClass(BookreviewsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getReviews();
          }
        }, {
          key: "getReviews",
          value: function getReviews() {
            var _this53 = this;

            this.getRateOfBook(this.bookId);
            this.bookService.getReview(this.bookId).subscribe(function (response) {
              console.log("Review response:", response.obj);
              _this53.reviews = response.obj;
              console.log("Reviews stored:", response.obj['review']);

              for (var index in _this53.reviews) {
                _this53.rev = _this53.reviews[index].review;
                _this53.user = _this53.reviews[index].userName;
                console.log("user:", _this53.user);
                var p = {
                  name: _this53.user,
                  review: _this53.rev,
                  rating: _this53.reviews[index].rating
                };

                _this53.reviewList.push(p);

                console.log("after push:", _this53.reviewList);
              }
            });
          }
        }, {
          key: "getRateOfBook",
          value: function getRateOfBook(bookId) {
            var _this54 = this;

            console.log("book id for avgrate:", bookId);
            this.bookService.getRateOfBookById(bookId).subscribe(function (response) {
              console.log('response', response);
              console.log('rate of books:', response.obj);
              _this54.totalRate = response.obj;
            });
          }
        }]);

        return BookreviewsComponent;
      }();

      BookreviewsComponent.ɵfac = function BookreviewsComponent_Factory(t) {
        return new (t || BookreviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
      };

      BookreviewsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: BookreviewsComponent,
        selectors: [["app-bookreviews"]],
        decls: 7,
        vars: 3,
        consts: [["role", "combobox", "flex", "column"], [1, "matcard2"], ["style", "margin-bottom: 8px; margin-left: 27px; margin-top:20px; font: Bold 18px/15px Lato;", 4, "ngIf"], [4, "ngFor", "ngForOf"], [2, "margin-bottom", "8px", "margin-left", "27px", "margin-top", "20px", "font", "Bold 18px/15px Lato"], ["class", "single", "fxLayout", "row", "style", "background-color: rgb(16,136,16)", 4, "ngIf"], ["fxLayout", "row", 1, "single", 2, "background-color", "rgb(16,136,16)"], [2, "font-size", "14px", "padding-top", "1.8px", "color", "white"], [2, "margin-left", "27px", "font", "Bold 18px/15px Lato"], [2, "margin-left", "27px"]],
        template: function BookreviewsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BookreviewsComponent_div_4_Template, 3, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BookreviewsComponent_div_5_Template, 2, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BookreviewsComponent_div_6_Template, 6, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.reviewList.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.reviewList.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reviewList);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29rcmV2aWV3cy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "upCK":
    /*!*****************************************!*\
      !*** ./src/app/Service/book.service.ts ***!
      \*****************************************/

    /*! exports provided: BookService */

    /***/
    function upCK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookService", function () {
        return BookService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _httpservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./httpservice.service */
      "F4+c");

      var BookService = /*#__PURE__*/function () {
        function BookService(http, httpService) {
          _classCallCheck(this, BookService);

          this.http = http;
          this.httpService = httpService; // tslint:disable-next-line: variable-name

          this._autoRefresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.searchBookData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL;
          this.notesList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.getReviewUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getReview; // tslint:disable-next-line: variable-name
          // tslint:disable-next-line: variable-name

          this.httpOtions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'content-type': 'application/json'
            })
          };
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'content-type': 'application/json'
            })
          };
        }

        _createClass(BookService, [{
          key: "autoRefresh$",
          get: function get() {
            return this._autoRefresh$;
          }
        }, {
          key: "getAllApprovedBook",
          value: function getAllApprovedBook() {
            return this.http.get("".concat(this.baseUrl, "/books/approved?order=asc"));
          }
        }, {
          key: "getAllApprovedBookByPage",
          value: function getAllApprovedBookByPage(page, sortby, orderBy) {
            return this.http.get("".concat(this.baseUrl, "/books/approved?page=").concat(page, "&order=").concat(orderBy, "&sortBy=").concat(sortby));
          }
        }, {
          key: "getallBooks",
          value: function getallBooks() {
            console.log('getting all books'); // tslint:disable-next-line: max-line-length

            return this.httpService.get("".concat(this.baseUrl, "/books/"), {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                token: localStorage.token
              })
            });
          }
        }, {
          key: "addBook",
          value: function addBook(book, imageName) {
            var _this55 = this;

            return this.httpService.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BookUrl, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].addbooks, "/").concat(imageName), book, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                token: localStorage.token
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              _this55._autoRefresh$.next();
            }));
          }
        }, {
          key: "deleteBook",
          value: function deleteBook(bookId) {
            var _this56 = this;

            return this.httpService["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BookUrl, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].deleteBook, "/").concat(bookId), {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                token: localStorage.token
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              _this56._autoRefresh$.next();
            }));
          }
        }, {
          key: "updateBook",
          value: function updateBook(bookId, book) {
            var _this57 = this;

            return this.httpService // tslint:disable-next-line: max-line-length
            .put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BookUrl, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].editBook, "/").concat(bookId), book, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                token: localStorage.token
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              _this57._autoRefresh$.next();
            }));
          }
        }, {
          key: "verifyBook",
          value: function verifyBook(bookId, status) {
            var _this58 = this;

            console.log('url ', "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BookUrl, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].verifyBook, "/").concat(bookId, "/").concat(status));
            return this.httpService // tslint:disable-next-line: max-line-length
            .put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BookUrl, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].verifyBook, "/").concat(bookId, "/").concat(status), ' ', {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                token: localStorage.token
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              _this58._autoRefresh$.next();
            }));
          }
        }, {
          key: "uploadBookImage",
          value: function uploadBookImage(bookId, formData) {
            var _this59 = this;

            return this.httpService // tslint:disable-next-line: max-line-length
            .post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BookUrl, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].addBookImage, "/").concat(bookId), formData, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                token: localStorage.token
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              _this59._autoRefresh$.next();
            }));
          }
        }, {
          key: "getBokkByid",
          value: function getBokkByid(Bookid) {
            console.log('book service callerd', Bookid);
            console.log('book url', "".concat(this.baseUrl, "/books/getbook/").concat(Bookid));
            return this.http.get("".concat(this.baseUrl, "/books/getbook/").concat(Bookid), {});
          }
        }, {
          key: "setSearchBookData",
          value: function setSearchBookData(message) {
            console.log('set service', message);
            return this.searchBookData.next({
              books: message
            });
          }
        }, {
          key: "getSearchBookData",
          value: function getSearchBookData() {
            console.log('get service');
            return this.searchBookData.asObservable();
          }
        }, {
          key: "getRateOfBookById",
          value: function getRateOfBookById(bookId) {
            console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].avgrateofbook + bookId);
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].avgrateofbook + bookId, {});
          } // public getBookById(bookId: any): Observable<any> {
          //   console.log('writring review for bookid ', bookId);
          //   console.log( environment.BASE_URL + environment.getbookbyIdurl + bookId);
          //   return this.http.get(
          //     environment.BASE_URL + environment.getbookbyIdurl + bookId,
          //     {}
          //   );
          // }

        }, {
          key: "getBookById",
          value: function getBookById(bookId) {
            console.log('writring review for bookid ', bookId);
            console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getbookbyIdurl + bookId);
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getbookbyIdurl + bookId, {});
          }
        }, {
          key: "ratingandreview",
          value: function ratingandreview(bookId, data, token) {
            var _this60 = this;

            console.log('ratingandreview service method bookId :', bookId);
            console.log('ratingandreview service method rate& review dto :', data);
            console.log('token to give rate:', token);
            console.log('url ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].WRITE_REVIEW + bookId);
            var tokens = token;
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].WRITE_REVIEW + bookId, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                token: token
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              _this60.searchBookData.next();
            }));
          }
        }, {
          key: "getratingandreview",
          value: function getratingandreview(bookId) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ratereview + bookId, this.httpOptions);
          }
        }, {
          key: "getInProgressOrderedBooks",
          value: function getInProgressOrderedBooks() {
            console.log('order status url');
            console.log(this.httpService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].adminUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getOrdersByseller, this.httpOptions));
            return this.httpService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].adminUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getOrdersByseller, {});
          }
        }, {
          key: "getReview",
          value: function getReview(bookId) {
            console.log('get review url:', "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL, "/").concat(this.getReviewUrl, "?bookId=").concat(bookId));
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL, "/").concat(this.getReviewUrl, "?bookId=").concat(bookId), this.httpOptions);
          }
        }, {
          key: "getSortedBookByRate",
          value: function getSortedBookByRate() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL, "/").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getSortedBookByRate), this.httpOptions);
          }
        }, {
          key: "getOneBook",
          value: function getOneBook(bookId, token) {
            return this.http.get("".concat(this.baseUrl, "/books/getbook/").concat(bookId), {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                token: token
              })
            });
          }
        }, {
          key: "getOneBookById",
          value: function getOneBookById(bookId) {
            return this.http.get("".concat(this.baseUrl, "/books/getbook/").concat(bookId), this.httpOptions);
          }
        }]);

        return BookService;
      }();

      BookService.ɵfac = function BookService_Factory(t) {
        return new (t || BookService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_httpservice_service__WEBPACK_IMPORTED_MODULE_5__["HttpserviceService"]));
      };

      BookService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: BookService,
        factory: BookService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "vK3D":
    /*!**************************************************!*\
      !*** ./src/app/Component/cart/cart.component.ts ***!
      \**************************************************/

    /*! exports provided: CartComponent */

    /***/
    function vK3D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
        return CartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_Model_book_book_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/Model/book/book.module */
      "WeDW");
      /* harmony import */


      var src_app_Model_customer_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/Model/customer.model */
      "bomO");
      /* harmony import */


      var src_app_Model_address_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Model/address.model */
      "UYkS");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/Service/book.service */
      "upCK");
      /* harmony import */


      var src_app_Service_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/Service/cart.service */
      "QiK6");
      /* harmony import */


      var src_app_Service_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/Service/user.service */
      "BE6J");
      /* harmony import */


      var _Service_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../Service/order.service */
      "VNSQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _spineer_spineer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../spineer/spineer.component */
      "OLkV");
      /* harmony import */


      var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../toolbar/toolbar.component */
      "DHZB");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");

      function CartComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spineer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CartComponent_app_toolbar_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar", 4);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("output", ctx_r1.si);
        }
      }

      function CartComponent_div_3_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_div_6_Template_button_click_13_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var books_r7 = restoredCtx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.increaseQuantity(books_r7.booksList[0].bookId, books_r7.quantityOfBook[0]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " + ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_div_6_Template_button_click_18_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var books_r7 = restoredCtx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.DecreseQuantity(books_r7.booksList[0].bookId, books_r7.quantityOfBook[0]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_div_6_Template_button_click_21_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var books_r7 = restoredCtx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.Removecart(books_r7.booksList[0].bookId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Remove ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var books_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets\\bookimage\\", books_r7.booksList[0].image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](books_r7.booksList[0].bookName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("by:", books_r7.booksList[0].authorName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs.", books_r7.booksList[0].price, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", books_r7.quantityOfBook[0].quantityOfBook >= books_r7.booksList[0].noOfBooks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", books_r7.quantityOfBook[0].quantityOfBook, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", books_r7.quantityOfBook[0].quantityOfBook < 2);
        }
      }

      function CartComponent_div_3_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.Toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CONTINUE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CartComponent_div_3_div_13_div_68_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_div_13_div_68_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r18.tog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_div_13_div_68_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r20.OnRegisterSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CONTINUE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CartComponent_div_3_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-error", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Please enter valid name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-error", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Please enter valid number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Pincode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-error", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Please enter valid pincode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "locality");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-error", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Please enter valid locality ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-error", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Please enter valid Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-error", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Please enter valid City name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "land Mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-error", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Please enter valid land Mark ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Type:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-radio-group", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-radio-button", 48, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_div_13_Template_mat_radio_button_click_59_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r21.fun("home");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-radio-button", 50, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_div_13_Template_mat_radio_button_click_62_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r23.fun("work");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-radio-button", 51, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_div_13_Template_mat_radio_button_click_65_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r24.fun("other");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Other");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, CartComponent_div_3_div_13_div_68_Template, 3, 0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r5.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r5.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r5.pincode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r5.locality);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r5.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r5.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r5.landmark);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.selected);
        }
      }

      function CartComponent_div_3_div_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_div_19_div_1_Template_button_click_14_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var books_r26 = restoredCtx.$implicit;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r27.placeOrder(books_r26.booksList[0].bookId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "CHECKOUT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var books_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets\\bookimage\\", books_r26.booksList[0].image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](books_r26.booksList[0].bookName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("by: ", books_r26.booksList[0].authorName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Price Rs.", books_r26.quantityOfBook[0].totalprice, "");
        }
      }

      function CartComponent_div_3_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_div_3_div_19_div_1_Template, 16, 4, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.book);
        }
      }

      function CartComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CartComponent_div_3_div_6_Template, 23, 7, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CartComponent_div_3_button_7_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Customer Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CartComponent_div_3_div_13_Template, 69, 8, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Order Summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CartComponent_div_3_div_19_Template, 2, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Copyright \xA9 2020, Bookstore All rights reserved ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Mycart(", ctx_r2.length, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.book);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.select);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.select);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selected);
        }
      }

      var CartComponent = /*#__PURE__*/function () {
        function CartComponent(matSnackBar, formBuilder, route, service, cartService, userService, orderService) {
          _classCallCheck(this, CartComponent);

          this.matSnackBar = matSnackBar;
          this.formBuilder = formBuilder;
          this.route = route;
          this.service = service;
          this.cartService = cartService;
          this.userService = userService;
          this.orderService = orderService;
          this.selected = false;
          this.isLinear = false;
          this.book = [];
          this.books = new src_app_Model_book_book_module__WEBPACK_IMPORTED_MODULE_2__["BookModule"]();
          this.isLoading = false;
          this.items = [];
          this.valueChanged = false;
          this.length = sessionStorage.length;
          this.si = sessionStorage.length;
          this.value = [];
          this.objecrtArry = [];
          this.quantity = 1;
          this.customer = new src_app_Model_customer_model__WEBPACK_IMPORTED_MODULE_3__["Customer"]();
          this.userAdreessDetails = new src_app_Model_address_model__WEBPACK_IMPORTED_MODULE_4__["Address"]();
          this.type = 'home';
          this.num = 2;
          this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.select = false;
          this.addre = new src_app_Model_address_model__WEBPACK_IMPORTED_MODULE_4__["Address"]();
          this.phoneNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{10,10}')]);
          this.Name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.pincode = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.address = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.locality = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.city = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.landmark = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.Home = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.Work = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.Other = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.bookQuantityDetails = {
            eachPrice: null,
            quantityId: null,
            quantityOfBook: null
          };
        }

        _createClass(CartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this61 = this;

            this.getsession();
            this.cartService.autoRefresh$.subscribe(function () {
              _this61.getCartItemCount();

              _this61.booksFromCart();
            });
            this.fun(this.type);
            this.getCartItemCount();
            this.booksFromCart();
          }
        }, {
          key: "getCartItemCount",
          value: function getCartItemCount() {
            var _this62 = this;

            this.cartService.getCartItemCount().subscribe(function (response) {
              _this62.length = response.obj;
              console.log('total number of itemes are' + response.obj);
            });
          }
        }, {
          key: "booksFromCart",
          value: function booksFromCart() {
            var _this63 = this;

            this.cartService.getCartBooksFrom().subscribe(function (Response) {
              console.log('response of cart books', Response.obj);
              console.log('books are ', _this63.book);
              _this63.book = Response.obj;
              console.log('response from cat', Response.obj[0].quantityOfBook[0].quantityOfBook);

              var _iterator = _createForOfIteratorHelper(_this63.book),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var i = _step.value;
                  console.log('vikash', i.quantityOfBook[0].quantityOfBook);
                  _this63.quantity = i.quantityOfBook[0].quantityOfBook;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
          }
        }, {
          key: "increaseQuantity",
          value: function increaseQuantity(bookId, quantityDeatils) {
            var _this64 = this;

            console.log('increasing items ');
            console.log('Quatity Details', quantityDeatils);
            this.bookQuantityDetails.quantityId = quantityDeatils.quantity_id;
            this.bookQuantityDetails.eachPrice = quantityDeatils.totalprice / quantityDeatils.quantityOfBook;
            this.bookQuantityDetails.quantityOfBook = quantityDeatils.quantityOfBook;
            this.cartService.increaseBooksQuantity(bookId, this.bookQuantityDetails).subscribe(function (data) {
              return _this64.handleResponse(data);
            }, function (error) {
              return _this64.handleError(error);
            });
            console.log('Book id' + bookId);
          }
        }, {
          key: "DecreseQuantity",
          value: function DecreseQuantity(bookId, quantityDeatils) {
            var _this65 = this;

            console.log('increasing items ');
            console.log('Quatity Details', quantityDeatils);
            this.bookQuantityDetails.quantityId = quantityDeatils.quantity_id;
            this.bookQuantityDetails.eachPrice = quantityDeatils.totalprice / quantityDeatils.quantityOfBook;
            this.bookQuantityDetails.quantityOfBook = quantityDeatils.quantityOfBook;
            this.cartService.decreaseBooksQuantity(bookId, this.bookQuantityDetails).subscribe(function (data) {
              return _this65.handleResponse(data);
            }, function (error) {
              return _this65.handleError(error);
            });
            console.log('Book id' + bookId);
          }
        }, {
          key: "Removecart",
          value: function Removecart(key) {
            this.cartService.removeIteamFromCart(key).subscribe(function (Response) {
              console.log('removing book', Response);
            });
            sessionStorage.removeItem(key);
            console.log('removinf book id is: ', key);
          }
        }, {
          key: "handleResponse",
          value: function handleResponse(data) {
            this.isLoading = false;
            console.log(data);
            this.matSnackBar.open(data.message, 'ok', {
              duration: 5000
            });
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            this.isLoading = false;
            this.error = error.error.message;
            console.log(error);
            console.log('error', this.error);
            this.matSnackBar.open(this.error, 'ok', {
              duration: 5000
            });
          }
        }, {
          key: "getUserAdress",
          value: function getUserAdress() {
            var _this66 = this;

            this.userService.getAdress().subscribe(function (Response) {
              console.log('address', Response);

              var _iterator2 = _createForOfIteratorHelper(Response.obj),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var i = _step2.value;

                  if (i.addressType === 'home' && _this66.selectedtype === 'home') {
                    _this66.setAddresToInput(i);

                    console.log('user adress Of Home : ', i);
                    _this66.adressId = i.addressId;
                  } else if (i.addressType === 'work' && _this66.selectedtype === 'work') {
                    _this66.setAddresToInput(i);

                    console.log('user adress Of wokr : ', i);
                    _this66.adressId = i.addressId;
                  } else if (i.addressType === 'other' && _this66.selectedtype === 'other') {
                    _this66.setAddresToInput(i);

                    console.log('user adress Of wokr : ', i);
                    _this66.adressId = i.addressId;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            });
          }
        }, {
          key: "setAddresToInput",
          value: function setAddresToInput(adressuser) {
            this.Name.setValue(adressuser.name);
            this.phoneNumber.setValue(adressuser.phoneNumber);
            this.pincode.setValue(adressuser.pincode);
            this.locality.setValue(adressuser.locality);
            this.address.setValue(adressuser.address);
            this.city.setValue(adressuser.city);
            this.landmark.setValue(adressuser.landmark);
            this.phoneNumber.setValue(adressuser.phoneNumber);
          }
        }, {
          key: "addAdress",
          value: function addAdress() {
            this.addre.name = this.Name.value;
            console.log('adding adress is ', this.addre);
          }
        }, {
          key: "Toggle",
          value: function Toggle() {
            if (this.select === false) {
              this.select = true;
            } else if (this.select === true) {
              this.select = false;
            }
          }
        }, {
          key: "tog",
          value: function tog() {
            if (this.selected === false) {
              this.selected = true;
            } else if (this.selected === true) {
              this.selected = false;
            }
          }
        }, {
          key: "getsession",
          value: function getsession() {
            for (var i = 0; i < sessionStorage.length; i++) {
              var key = sessionStorage.key(i);
              this.value[i] = sessionStorage.getItem(key);
              console.log('key', key);
            }
          }
        }, {
          key: "fun",
          value: function fun(type) {
            this.selectedtype = type;
            this.addre.name = localStorage.getItem('Name');
            this.addre.phoneNumber = localStorage.getItem('phone');
            this.adressId = null;
            this.setAddresToInput(this.addre);
            this.getUserAdress();
            console.log('select item is ' + type);
          }
        }, {
          key: "addtcart",
          value: function addtcart(user) {
            for (var i = 0; i < sessionStorage.length; i++) {
              var key = sessionStorage.key(i);
              this.value[i] = sessionStorage.getItem(key);
              console.log('key', key);
              console.log('ghgvvb=====' + user);
              console.log('---' + this.bid);
            }
          }
        }, {
          key: "placeOrder",
          value: function placeOrder(bookId) {
            var _this67 = this;

            this.isLoading = true;
            console.log('place order', bookId);
            console.log('Address', this.address.value);
            this.orderService.placeOrder(bookId, this.adressId).subscribe(function (data) {
              return _this67.handleResponseOfPlaceOrder(data);
            }, function (error) {
              return _this67.handleError(error);
            });
          }
        }, {
          key: "handleResponseOfPlaceOrder",
          value: function handleResponseOfPlaceOrder(data) {
            this.isLoading = false;
            console.log('data', data);
            sessionStorage.removeItem(data.obj.booksList[0].bookId);
            this.matSnackBar.open(data.message, 'ok', {
              duration: 5000
            });
            this.route.navigateByUrl('greeting');
          }
        }, {
          key: "OnRegisterSubmit",
          value: function OnRegisterSubmit() {
            this.addre.name = this.Name.value;
            this.addre.locality = this.locality.value;
            this.addre.address = this.address.value;
            this.addre.pincode = this.pincode.value;
            this.addre.phoneNumber = this.phoneNumber.value;
            this.addre.city = this.city.value;
            this.addre.landmark = this.landmark.value;

            if (this.adressId === null || this.adressId === undefined) {
              this.addre.type = this.selectedtype;
              console.log('adress is going to upadted is ' + this.addre);
              this.userService.addAdress(this.addre).subscribe(function (Response) {
                console.log('adress address', Response);
                window.location.reload();
              });
            } else {
              this.addre.addressType = this.selectedtype;
              console.log('adress type is selected', this.addre.addressType);
              this.addre.addressId = this.adressId;
              console.log('adress is going to upadted is ', this.addre);
              this.userService.updateAdress(this.addre).subscribe(function (Response) {
                console.log('address updated', Response);
              });
            }
          }
        }]);

        return CartComponent;
      }();

      CartComponent.ɵfac = function CartComponent_Factory(t) {
        return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_book_service__WEBPACK_IMPORTED_MODULE_7__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Service_order_service__WEBPACK_IMPORTED_MODULE_10__["OrderService"]));
      };

      CartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CartComponent,
        selectors: [["app-cart"]],
        outputs: {
          output: "output"
        },
        decls: 4,
        vars: 3,
        consts: [[4, "ngIf"], [3, "output", 4, "ngIf"], ["href", "https://fonts.googleapis.com/css2?family=Lato&display=swap", "rel", "stylesheet"], ["class", "main-conatiner", 4, "ngIf"], [3, "output"], [1, "main-conatiner"], [1, "row"], [1, "column1"], [2, "display", "flex", "margin-left", "6%", "padding-top", "4%", "font-family", "'Lato', sans-serif", "font-size", "18px", "color", "black"], ["fxLayout", "row", 4, "ngFor", "ngForOf"], ["class", "button1", 3, "click", 4, "ngIf"], [1, "form-conatiner"], [2, "font-size", "15px", "margin-left", "40px", "margin-top", "6%", "font-family", "'Lato', sans-serif"], ["fxLayoutAlign", "center center", "fxLayout", "column", 4, "ngIf"], [1, "row2", 2, "padding", "10px"], [2, "font-size", "15px", "font-family", "'Lato', sans-serif", "margin-left", "18px", "margin-top", "2%", "padding", "20px"], ["class", "column", 4, "ngIf"], [1, "bottom", 2, "height", "10%"], ["fxLayout", "row"], [1, "bookimage", 2, "padding-top", "24px", "width", "71px", "height", "126px", "padding-left", "0px", "margin-left", "51px", 3, "src"], ["fxLayout", "row", 1, "details"], [2, "margin-left", "11%", "padding-top", "2em", "font-size", "14px"], [2, "margin-left", "-4em", "font-size", "10px", "color", "slategrey", "padding-top", "70px"], [2, "margin-left", "-2.3em", "padding-top", "90px", "font-size", "17px", "font-weight", "600"], [2, "display", "flex", "flex-direction", "row", "margin-left", "-2.0em", "margin-top", "10em", "border-radius", "2em"], [2, "display", "flex", "flex-direction", "row", "margin-bottom", "10px"], [2, "height", "20px", "width", "20px"], [2, "height", "25px", "width", "25px", "text-align", "center", "background-color", "#f9f9f9", "border-radius", "11em", "border-color", "#eee9e9", 3, "disabled", "click"], [2, "margin-left", "13px", "margin-right", "9px", "height", "23px", "width", "44px", "margin-top", "2px", "background", "#FFFFFF 0% 0% no-repeat padding-box", "border", "1px solid #DBDBDB", "border-radius", "1px", "opacity", "1", "text-align", "center"], [2, "height", "30px", "width", "60px", "font-size", "12px", "background-color", "white", "padding-top", "0em", "margin-left", "10px", "border", "transparent", 3, "click"], [1, "button1", 3, "click"], ["fxLayoutAlign", "center center", "fxLayout", "column"], [1, "name-contact"], ["fxFlex", "45"], ["appearance", "outline"], ["matInput", "", "placeholder", "Name", "matInput", "", "autocomplete", "off", "required", "", 2, "height", "20px", 3, "formControl"], ["required", ""], ["id", "contact", "maxlength", "10", "placeholder", "Phone number", "matInput", "", "required", "", 2, "height", "20px", 3, "formControl"], [1, "name-contact", 2, "margin-top", "10px"], ["id", "pinCode", "maxlength", "6", "placeholder", "Pincode", "matInput", "", "autocomplete", "off", "required", "", 2, "height", "20px", 3, "formControl"], ["id", "locality", "matInput", "", "placeholder", "Locality", "autocomplete", "off", "required", "", 2, "height", "20px", 3, "formControl"], [1, "address"], ["id", "address", "placeholder", "Address", "matInput", "", "autocomplete", "off", "required", "", 2, "height", "30px", 3, "formControl"], ["id", "city", "placeholder", "City", "matInput", "", "autocomplete", "off", "required", "", 2, "height", "20px", 3, "formControl"], ["id", "landMark", "placeholder", "Landmark", "matInput", "", "autocomplete", "off", "required", "", 2, "height", "20px", 3, "formControl"], [1, "example-section"], [1, "example-margin", 2, "margin-left", "-3em", "font-family", "'Lato', sans-serif"], [1, "example-margin", 2, "margin-top", "4em", "margin-left", "2em"], ["checked", "", "value", "Home", 2, "margin-left", "40%", "background-color", "white", 3, "click"], ["type", ""], ["value", "work", 2, "margin-left", "60%", 3, "click"], ["value", "other", 2, "margin-left", "60%", 3, "click"], ["class", "buttons", 3, "click", 4, "ngIf"], [1, "buttons", 3, "click"], [1, "button3", 2, "font-family", "'Lato', sans-serif", "margin-left", "75%", "margin-bottom", "0%", 3, "click"], [1, "column"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], [1, "bookimage", 2, "padding-top", "14px", "width", "81px", "height", "126px", "padding-left", "1px", "margin-left", "61px", 3, "src"], [1, "details"], [2, "margin-left", "1%", "padding-top", "0em", "font-size", "16px"], [2, "padding-top", "17px", "margin-left", "-69px"], [2, "font-size", "10px", "color", "slategrey"], [2, "margin-left", "-41px", "padding-top", "42PX", "font-size", "16px", "font-weight", "500"], [1, "button2", 3, "click"]],
        template: function CartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CartComponent_div_0_Template, 2, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_app_toolbar_1_Template, 1, 1, "app-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartComponent_div_3_Template, 22, 5, "div", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _spineer_spineer_component__WEBPACK_IMPORTED_MODULE_12__["SpineerComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioButton"]],
        styles: [".main-conatiner[_ngcontent-%COMP%] {\n  border-color: black;\n  margin-top: 0%;\n  width: 90%;\n  height: 50%;\n  margin-left: 8%;\n  border: slategrey 1px;\n  justify-content: center;\n}\n\n.form-conatiner[_ngcontent-%COMP%] {\n  margin: 20px;\n  padding: 10px;\n  border-color: black;\n  width: 55%;\n  margin-left: 14%;\n  border: slategrey 1px;\n  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.6);\n  height: auto;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin: 20px;\n  border-color: black;\n  width: 55%;\n  margin-left: 14%;\n  border: slategrey 1px;\n  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.6);\n  height: auto;\n}\n\n.row2[_ngcontent-%COMP%] {\n  border-color: black;\n  width: 55%;\n  margin-left: 14%;\n  border: slategrey 1px;\n  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.6);\n  height: auto;\n}\n\n.card2[_ngcontent-%COMP%] {\n  height: auto;\n  width: 240px;\n  align-items: center;\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);\n  align-content: center;\n}\n\n.column1[_ngcontent-%COMP%] {\n  float: left;\n  width: 35%;\n  padding: 0px;\n}\n\n.row1[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n  border: 1px solid gray;\n  height: auto;\n  width: 55%;\n  border: slategrey 1px;\n  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.6);\n  margin-left: 14%;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 40rem;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.name-contact[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-left: 0%;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.address[_ngcontent-%COMP%] {\n  width: 76%;\n  height: 82px;\n  margin-left: 2%;\n}\n\n#address[_ngcontent-%COMP%] {\n  width: 612px;\n  height: 82px;\n}\n\n.mat-input-element[_ngcontent-%COMP%] {\n  display: flex;\n  height: 40px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: left;\n  align-items: center;\n  height: auto;\n  width: 90%;\n  margin-left: 11%;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: left;\n  flex-direction: row;\n  padding-left: -1em;\n  justify-content: space-around;\n}\n\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  height: auto;\n  width: 240px;\n  background-color: white;\n  align-items: center;\n  align-content: center;\n}\n\n.card1[_ngcontent-%COMP%] {\n  height: auto;\n  display: flex;\n  width: 240px;\n  background-color: white;\n  align-items: center;\n  align-content: center;\n}\n\n.row1[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 50%;\n  margin-left: 1em;\n  margin-top: 0em;\n}\n\n.details1[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 50%;\n  margin-left: 1em;\n  margin-top: 0em;\n}\n\n.bookimage[_ngcontent-%COMP%] {\n  height: 60%;\n  width: 40%;\n  margin-left: 13%;\n  align-content: center;\n  box-shadow: 0 1 0 7px rgba(0, 0, 0, 0.6);\n}\n\n.author[_ngcontent-%COMP%] {\n  float: center;\n  margin-left: -4em;\n  font-size: 10px;\n  color: slategrey;\n  padding-top: 10px;\n}\n\n.bookname[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  padding-top: 0em;\n  font-size: 14px;\n  font-style: bold;\n}\n\n.price[_ngcontent-%COMP%] {\n  margin-left: -2.3em;\n  padding-top: 34PX;\n  font-size: 17px;\n}\n\n.author1[_ngcontent-%COMP%] {\n  float: center;\n  margin-left: -3em;\n  font-size: 10px;\n  color: slategrey;\n  padding-top: 10px;\n}\n\n.bookname1[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  padding-top: 0em;\n  font-size: 14px;\n  font-style: bold;\n}\n\n.price1[_ngcontent-%COMP%] {\n  margin-left: -4.34em;\n  padding-top: 20PX;\n  font-size: 15px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  background-color: transparent;\n  width: 100%;\n}\n\n.button3[_ngcontent-%COMP%] {\n  display: flexbox;\n  margin-left: 90%;\n  font-size: 14px;\n  width: 151px;\n  height: 35px;\n  background-color: #3371B5;\n  border-color: #3371B5;\n  color: white;\n  border-radius: 2px;\n  opacity: 1;\n}\n\n.button2[_ngcontent-%COMP%] {\n  margin-left: 0%;\n  display: flexbox;\n  border-radius: 2px;\n  opacity: 1;\n  margin-bottom: 7%;\n  font-size: 14px;\n  width: 151px;\n  margin-top: 100px;\n  height: 35px;\n  background-color: #3371B5;\n  border-color: #3371B5;\n  color: white;\n}\n\n.dobutton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n}\n\n.bottom[_ngcontent-%COMP%] {\n  background-color: #2E1D1E;\n  padding: 9px;\n  font-family: Lato;\n  margin-left: -126px;\n  padding-left: 117px;\n  color: white;\n  bottom: 0px;\n  width: 111%;\n  margin-top: 200px;\n}\n\n.button1[_ngcontent-%COMP%] {\n  margin-left: 37em;\n  margin-bottom: 7px;\n  margin-top: 6%;\n  font-size: 14px;\n  width: 131px;\n  height: 35px;\n  background-color: #3371B5;\n  color: white;\n}\n\n  .mat-form-field.mat-focused .mat-form-field-label {\n  color: #a03037 !important;\n}\n\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #a03037 !important;\n}\n\n  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  \n  background-color: #a03037 !important;\n}\n\n  .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #a03037 !important;\n  \n}\n\n .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #a03037 !important;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFFSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBRUEscUJBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFFQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUVBLHFCQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUE7RUFHSSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUVBLHFCQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0FBTko7O0FBU0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUVBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQkFBQTtBQVBKOztBQVVBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBUEo7O0FBV0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0FBUko7O0FBV0E7RUFDSSxZQUFBO0FBUko7O0FBV0E7RUFDSSxXQUFBO0FBUko7O0FBV0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFSSjs7QUFZQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBSUEsZUFBQTtBQVpKOztBQWlCQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBZEo7O0FBa0JBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFmSjs7QUFrQkE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFqQko7O0FBb0JBO0VBQ0ksYUFBQTtFQUVBLGdCQUFBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBbkJKOztBQXNCQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxxQkFBQTtBQXBCSjs7QUF1QkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEscUJBQUE7QUFyQko7O0FBd0JBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBckJKOztBQXdCQTtFQUVJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXRCSjs7QUF5QkE7RUFFSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUF2Qko7O0FBMEJBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7QUF2Qko7O0FBMEJBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF2Qko7O0FBMEJBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXZCSjs7QUEwQkE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQXZCSjs7QUEwQkE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXZCSjs7QUEwQkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBdkJKOztBQTBCQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBdkJKOztBQTBCQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtBQXZCSjs7QUEwQkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUF2Qko7O0FBMEJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBeEJKOztBQTJCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQXhCSjs7QUErQkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQTVCSjs7QUErQkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQTVCSjs7QUFnQ0E7RUFDSSx5QkFBQTtBQTdCSjs7QUFpQ0E7RUFDSSx5QkFBQTtBQTlCSjs7QUFpQ0E7RUFDSSw0QkFBQTtFQUNBLG9DQUFBO0FBOUJKOztBQWlDQTtFQUNJLG9DQUFBO0VBQ0EsNEJBQUE7QUE5Qko7O0FBaUNBO0VBQ0ksZ0NBQUE7RUFDQSwwQkFBQTtBQTlCSiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29uYXRpbmVyIHtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi10b3A6IDAlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDglO1xuICAgIGJvcmRlcjogc2xhdGVncmV5IDFweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvcm0tY29uYXRpbmVyIHtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDU1JTtcbiAgICBtYXJnaW4tbGVmdDogMTQlO1xuICAgIC8vIGJvcmRlcjogIDFweCAjNTU1O1xuICAgIGJvcmRlcjogc2xhdGVncmV5IDFweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLnJvdyB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIC8vcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiA1NSU7XG4gICAgbWFyZ2luLWxlZnQ6IDE0JTtcbiAgICAvLyBib3JkZXI6ICAxcHggIzU1NTtcbiAgICBib3JkZXI6IHNsYXRlZ3JleSAxcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAwIHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5yb3cyIHtcbiAgICAvL21hcmdpbjogMjBweDtcbiAgICAvL3BhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogNTUlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNCU7XG4gICAgLy8gYm9yZGVyOiAgMXB4ICM1NTU7XG4gICAgYm9yZGVyOiBzbGF0ZWdyZXkgMXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAycHggMCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY2FyZDIge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbHVtbjEge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAzNSU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIC8vIGhlaWdodDogYXV0bzsgLyogU2hvdWxkIGJlIHJlbW92ZWQuIE9ubHkgZm9yIGRlbW9uc3RyYXRpb24gKi9cbn1cblxuLnJvdzE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDU1JTtcbiAgICBib3JkZXI6IHNsYXRlZ3JleSAxcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAwIHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBtYXJnaW4tbGVmdDogMTQlO1xufVxuXG5mb3JtIHtcbiAgICB3aWR0aDogNDByZW07XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm5hbWUtY29udGFjdCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAvL2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmFkZHJlc3Mge1xuICAgIHdpZHRoOiA3NiU7XG4gICAgaGVpZ2h0OiA4MnB4O1xuICAgIC8vZGlzcGxheTogZmxleDtcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC8vanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIC8vIG1hcmdpbi1yaWdodDogMTNweDtcbiAgICAvL2hlaWdodDogMTAwcHg7XG59XG5cbiNhZGRyZXNzIHtcbiAgICB3aWR0aDogNjEycHg7XG4gICAgaGVpZ2h0OiA4MnB4O1xuICAgIDtcbn1cblxuLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLmV4YW1wbGUtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIC8vIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGZsb2F0OiBsZWZ0O1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMSU7XG59XG5cbi5leGFtcGxlLW1hcmdpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvLyBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAvLyBmbG9hdDogbGVmdDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmctbGVmdDogLTFlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsMCwwLDAuNik7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uY2FyZDEge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsMCwwLDAuNik7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4ucm93MTphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbn1cblxuLmRldGFpbHMge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI0LCAzNCwgMzQsIDAuODI5KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgbWFyZ2luLXRvcDogMGVtO1xufVxuXG4uZGV0YWlsczEge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI0LCAzNCwgMzQsIDAuODI5KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgbWFyZ2luLXRvcDogMGVtO1xufVxuXG4uYm9va2ltYWdlIHtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMyU7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMSAwIDdweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5hdXRob3Ige1xuICAgIGZsb2F0OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IC00ZW07XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiBzbGF0ZWdyZXk7XG4gICAgcGFkZGluZy10b3A6IDEwcHhcbn1cblxuLmJvb2tuYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIHBhZGRpbmctdG9wOiAwZW07XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG59XG5cbi5wcmljZSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0yLjNlbTtcbiAgICBwYWRkaW5nLXRvcDogMzRQWDtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5hdXRob3IxIHtcbiAgICBmbG9hdDogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAtM2VtO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogc2xhdGVncmV5O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4XG59XG5cbi5ib29rbmFtZTEge1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgcGFkZGluZy10b3A6IDBlbTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1zdHlsZTogYm9sZDtcbn1cblxuLnByaWNlMSB7XG4gICAgbWFyZ2luLWxlZnQ6IC00LjM0ZW07XG4gICAgcGFkZGluZy10b3A6IDIwUFg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uYnV0dG9ucyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b24zIHtcbiAgICBkaXNwbGF5OiBmbGV4Ym94O1xuICAgIG1hcmdpbi1sZWZ0OiA5MCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxNTFweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzNzFCNTtcbiAgICBib3JkZXItY29sb3I6ICMzMzcxQjU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uYnV0dG9uMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xuICAgIGRpc3BsYXk6IGZsZXhib3g7XG4gICAgLy9mbG9hdDogcmlnaHQ7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbWFyZ2luLWJvdHRvbTogNyU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxNTFweDtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzNzFCNTtcbiAgICBib3JkZXItY29sb3I6ICMzMzcxQjU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZG9idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgICAvLyBkaXNwbGF5OiBmbGV4Ym94O1xuICAgIC8vZmxvYXQ6IHJpZ2h0O1xuICAgIC8vbWFyZ2luLWJvdHRvbTogMyU7XG4gICAgLy9tYXJnaW4tcmlnaHQ6IDUuNmVtO1xufVxuXG4uYm90dG9tIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUxRDFFO1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICBmb250LWZhbWlseTogTGF0bztcbiAgICBtYXJnaW4tbGVmdDogLTEyNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTE3cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHdpZHRoOiAxMTElO1xuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xufVxuXG4uYnV0dG9uMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDM3ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIG1hcmdpbi10b3A6IDYlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTMxcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzcxQjU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vLyBtYXQtbGFiZWwgZm9jdXNlZCBzdHlsZVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAjYTAzMDM3IWltcG9ydGFudDtcbn1cblxuLy8gbWF0LWxhYmVsIGVycm9yIHN0eWxlXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogI2EwMzAzNyFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIC8qY2xpY2sgZWZmZWN0IGNvbG9yIGNoYW5nZSovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwMzAzNyAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwMzAzNyFpbXBvcnRhbnQ7XG4gICAgLyppbm5lciBjaXJjbGUgY29sb3IgY2hhbmdlKi9cbn1cblxuOjpuZy1kZWVwLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjYTAzMDM3IWltcG9ydGFudDtcbiAgICAvKm91dGVyIHJpbmcgY29sb3IgY2hhbmdlKi9cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "vODe":
    /*!***********************************************************************!*\
      !*** ./src/app/Component/auth/registration/registration.component.ts ***!
      \***********************************************************************/

    /*! exports provided: RegistrationComponent */

    /***/
    function vODe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
        return RegistrationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/Service/user.service */
      "BE6J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _spineer_spineer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../spineer/spineer.component */
      "OLkV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function RegistrationComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spineer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegistrationComponent_mat_card_2_form_10_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("First Name is minimum ", _r8.errors.minlength.requiredLength, " character.");
        }
      }

      function RegistrationComponent_mat_card_2_form_10_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_mat_card_2_form_10_div_2_div_1_Template, 4, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors.minlength);
        }
      }

      function RegistrationComponent_mat_card_2_form_10_div_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "last Name is maximum 10 character.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegistrationComponent_mat_card_2_form_10_div_3_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Must Be valid number start b/w 6-9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegistrationComponent_mat_card_2_form_10_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_mat_card_2_form_10_div_3_div_1_Template, 4, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_mat_card_2_form_10_div_3_div_2_Template, 4, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.errors.maxlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.errors.pattern);
        }
      }

      function RegistrationComponent_mat_card_2_form_10_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Password must contain 6 character.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegistrationComponent_mat_card_2_form_10_div_4_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "must contain at least one letter, at least one number, and be longer than six charaters.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegistrationComponent_mat_card_2_form_10_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_mat_card_2_form_10_div_4_div_1_Template, 4, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_mat_card_2_form_10_div_4_div_2_Template, 4, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.pattern);
        }
      }

      function RegistrationComponent_mat_card_2_form_10_div_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Password must contain 6 character.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegistrationComponent_mat_card_2_form_10_div_5_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Password & Confirm Password does not match.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegistrationComponent_mat_card_2_form_10_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_mat_card_2_form_10_div_5_div_1_Template, 4, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_mat_card_2_form_10_div_5_div_2_Template, 4, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.errors.pattern);
        }
      }

      function RegistrationComponent_mat_card_2_form_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_mat_card_2_form_10_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            ctx_r20.onSubmit();
            return _r3.resetForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_mat_card_2_form_10_div_2_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegistrationComponent_mat_card_2_form_10_div_3_Template, 3, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegistrationComponent_mat_card_2_form_10_div_4_Template, 3, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RegistrationComponent_mat_card_2_form_10_div_5_Template, 3, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Enter Your name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_mat_card_2_form_10_Template_input_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r22.form.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Please Enter valid Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Enter your Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_mat_card_2_form_10_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r23.form.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Please Enter valid email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Enter password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_mat_card_2_form_10_Template_input_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r24.form.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Please Enter Strong Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Confirm password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_mat_card_2_form_10_Template_input_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r25.form.confirmPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-error", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Please Enter valid Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Enter your Phone Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_mat_card_2_form_10_Template_input_ngModelChange_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r26.form.mobileNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Enter valid Phone number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Register as");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-radio-group", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_mat_card_2_form_10_Template_mat_radio_group_ngModelChange_53_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r27.form.role = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-radio-button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " User ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-radio-button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Seller ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.touched && !_r8.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.touched && !_r12.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.touched && !_r9.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.touched && !_r11.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r2.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r2.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.form.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.form.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.form.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", _r9.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.form.confirmPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.form.mobileNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.form.role);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r3.valid);
        }
      }

      function RegistrationComponent_mat_card_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bookstore");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Create Your Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RegistrationComponent_mat_card_2_form_10_Template, 65, 16, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isloading);
        }
      }

      var RegistrationComponent = /*#__PURE__*/function () {
        function RegistrationComponent(user, route, matSnakeBar) {
          _classCallCheck(this, RegistrationComponent);

          this.user = user;
          this.route = route;
          this.matSnakeBar = matSnakeBar;
          this.error = null;
          this.message = null;
          this.isloading = false;
          this.form = {
            name: null,
            email: null,
            password: null,
            confirmPassword: null,
            mobileNumber: null,
            role: null
          };
        }

        _createClass(RegistrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "handleError",
          value: function handleError(error) {
            this.isloading = false;
            this.error = error.error.message;
            console.log(error);
            this.matSnakeBar.open(this.error, 'ok', {
              duration: 5000
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this68 = this;

            this.isloading = true;
            this.user.signUp(this.form).subscribe(function (data) {
              return _this68.handleResponse(data);
            }, function (error) {
              return _this68.handleError(error);
            });
          }
        }, {
          key: "handleResponse",
          value: function handleResponse(data) {
            this.message = data.message;
            this.isloading = false;
            console.log(data);
            this.route.navigateByUrl('/login');
            this.matSnakeBar.open('Sucessfull Registration Done ', 'ok', {
              duration: 5000
            });
          }
        }]);

        return RegistrationComponent;
      }();

      RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
        return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
      };

      RegistrationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegistrationComponent,
        selectors: [["app-registration"]],
        decls: 3,
        vars: 2,
        consts: [["fxLayoutAlign", "center center", "fxFlexFill", ""], [4, "ngIf"], ["fxFlex", "35", 4, "ngIf"], ["fxFlex", "35"], [2, "text-align", "center"], ["fxLayout", "row wrap", "fxLayoutGap", "10px", "fxLayoutAlign", "flex-start", 2, "background-color", "#A03037", "padding-top", "16px"], [1, "imgLogo"], ["src", "assets\\education.svg", "alt", ""], [1, "title"], [3, "ngSubmit", 4, "ngIf"], [3, "ngSubmit"], ["regForm", "ngForm"], [1, "example-container"], [1, "alert", "alert-danger", "text-justify", 3, "hidden"], [1, "alert", "alert-success", "text-justify", 3, "hidden"], ["appearance", "outline", "fxLayout", "column", 2, "width", "100%"], ["matInput", "", "minlength", "3", "maxlength", "20", "required", "", "name", "name", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["email", "", "required", "", "matInput", "", "type", "email", "placeholder", "Email", "name", "email", 3, "ngModel", "ngModelChange"], ["matSuffix", "", 2, "color", "#e1e4e4"], ["appearance", "outline", 2, "width", "220px"], ["matInput", "", "required", "", "type", "password", "minlength", "5", "name", "password", "pattern", "^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["appearance", "outline", 2, "width", "220px", "padding-left", "6px"], ["name", "confirmPassword", "matInput", "", "required", "", "type", "password", 3, "ngModel", "pattern", "ngModelChange"], ["pasword", "ngModel", "confirmpassword", "ngModel"], ["required", ""], ["appearance", "outline", 2, "width", "100%"], ["pattern", "^[6-9]\\d{9}$", "minlength", "10", "maxlength", "10", "name", "mobileNumber", "matInput", "", "placeholder", "Placeholder", "required", "", 3, "ngModel", "ngModelChange"], ["phoneNumber", "ngModel"], [2, "margin-right", "130px"], ["aria-label", "Select an option", "name", "role", 3, "ngModel", "ngModelChange"], ["id", "userRadio", "value", "user", "required", "required"], ["id", "sellerRadio", "value", "seller", "required", "required"], [1, "text-right"], ["type", "submit", "id", "registrationBtn", "mat-raised-button", "", 2, "background-color", "#a03037", "border-radius", "5px", "text-decoration-color", "#FFFFFF", "font-size", "20px", "font-weight", "500", "color", "whitesmoke", "width", "106px", "height", "40px", 3, "disabled"]],
        template: function RegistrationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_1_Template, 2, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_mat_card_2_Template, 11, 1, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isloading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isloading);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _spineer_spineer_component__WEBPACK_IMPORTED_MODULE_6__["SpineerComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["EmailValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["PatternValidator"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"]],
        styles: [".title[_ngcontent-%COMP%] {\n  text-align: left;\n  font: Regular 20px/26px Roboto;\n  letter-spacing: 0px;\n  color: #FFFFFF;\n  text-transform: capitalize;\n  opacity: 1;\n}\n\n.imgLogo[_ngcontent-%COMP%] {\n  margin-left: 180px;\n  width: 31px;\n  height: 24px;\n  opacity: 1;\n}\n\n.mat-error[_ngcontent-%COMP%] {\n  color: #a03037;\n}\n\n  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  \n  background-color: #a03037 !important;\n}\n\n  .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #a03037 !important;\n  \n}\n\n .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #a03037 !important;\n  \n}\n\n.mat-error[_ngcontent-%COMP%] {\n  color: #a03037;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLG9DQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQ0FBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQ6IFJlZ3VsYXIgMjBweC8yNnB4IFJvYm90bztcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5pbWdMb2dvIHtcbiAgICBtYXJnaW4tbGVmdDogMTgwcHg7XG4gICAgd2lkdGg6IDMxcHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5tYXQtZXJyb3Ige1xuICAgIGNvbG9yOiAjYTAzMDM3O1xufVxuXG46Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAvKmNsaWNrIGVmZmVjdCBjb2xvciBjaGFuZ2UqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMDMwMzcgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMDMwMzchaW1wb3J0YW50O1xuICAgIC8qaW5uZXIgY2lyY2xlIGNvbG9yIGNoYW5nZSovXG59XG5cbjo6bmctZGVlcC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogI2EwMzAzNyFpbXBvcnRhbnQ7XG4gICAgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovXG59XG5cbi5tYXQtZXJyb3Ige1xuICAgIGNvbG9yOiAjYTAzMDM3O1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _Component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Component/dashboard/dashboard.component */
      "Ac6Z");
      /* harmony import */


      var _Component_seller_seller_seller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Component/seller/seller/seller.component */
      "DTTJ");
      /* harmony import */


      var _Component_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Component/admin/admin/admin.component */
      "VcT6");
      /* harmony import */


      var _Component_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Component/auth/registration/registration.component */
      "vODe");
      /* harmony import */


      var _Component_auth_login_component_login_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./Component/auth/login-component/login-component.component */
      "DmK3");
      /* harmony import */


      var _Component_auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./Component/auth/forget-password/forget-password.component */
      "KIY2");
      /* harmony import */


      var _Component_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./Component/auth/reset-password/reset-password.component */
      "4B9C");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _Component_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./Component/cart/cart.component */
      "vK3D");
      /* harmony import */


      var _Component_ordergreeting_ordergreeting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./Component/ordergreeting/ordergreeting.component */
      "S5Cc");
      /* harmony import */


      var _Component_giverate_giverate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./Component/giverate/giverate.component */
      "cM8b");
      /* harmony import */


      var _Component_adminunverifiedbooks_adminunverifiedbooks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./Component/adminunverifiedbooks/adminunverifiedbooks.component */
      "HQEs");
      /* harmony import */


      var _Component_ratereview_ratereview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./Component/ratereview/ratereview.component */
      "i1kn");
      /* harmony import */


      var _Component_orderstatus_orderstatus_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./Component/orderstatus/orderstatus.component */
      "GLdz");
      /* harmony import */


      var _Component_ratedbooks_ratedbooks_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./Component/ratedbooks/ratedbooks.component */
      "k7oA");
      /* harmony import */


      var _Component_bookreviews_bookreviews_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./Component/bookreviews/bookreviews.component */
      "sp3Q");
      /* harmony import */


      var _Component_wish_wish_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./Component/wish/wish.component */
      "2HCW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); //import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';


      var routes = [{
        path: '',
        redirectTo: 'books',
        pathMatch: 'full'
      }, {
        path: 'books',
        component: _Component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]
      }, {
        path: 'cart',
        component: _Component_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"]
      }, {
        path: 'greeting',
        component: _Component_ordergreeting_ordergreeting_component__WEBPACK_IMPORTED_MODULE_9__["OrdergreetingComponent"]
      }, {
        path: 'update-password/:token',
        component: _Component_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"]
      }, {
        path: 'forget-password',
        component: _Component_auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordComponent"]
      }, {
        path: 'login',
        component: _Component_auth_login_component_login_component_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponentComponent"]
      }, {
        path: 'seller',
        component: _Component_seller_seller_seller_component__WEBPACK_IMPORTED_MODULE_1__["SellerComponent"]
      }, {
        path: 'wish',
        component: _Component_wish_wish_component__WEBPACK_IMPORTED_MODULE_16__["WishComponent"]
      }, {
        path: 'register',
        component: _Component_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"]
      }, {
        path: 'books/rateandreview/:bookId',
        component: _Component_giverate_giverate_component__WEBPACK_IMPORTED_MODULE_10__["GiverateComponent"]
      }, {
        path: 'verifybook',
        component: _Component_adminunverifiedbooks_adminunverifiedbooks_component__WEBPACK_IMPORTED_MODULE_11__["AdminunverifiedbooksComponent"]
      }, {
        path: 'books/info/:bookId',
        component: _Component_ratereview_ratereview_component__WEBPACK_IMPORTED_MODULE_12__["RatereviewComponent"]
      }, {
        path: 'books/:book',
        component: _Component_seller_seller_seller_component__WEBPACK_IMPORTED_MODULE_1__["SellerComponent"]
      }, {
        path: 'admin',
        component: _Component_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"]
      }, {
        path: 'register',
        component: _Component_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"]
      }, {
        path: 'books/rateandreview/:bookId/:token',
        component: _Component_giverate_giverate_component__WEBPACK_IMPORTED_MODULE_10__["GiverateComponent"]
      }, {
        path: 'verifybook',
        component: _Component_adminunverifiedbooks_adminunverifiedbooks_component__WEBPACK_IMPORTED_MODULE_11__["AdminunverifiedbooksComponent"]
      }, {
        path: 'books/reviews/:bookId',
        component: _Component_ratereview_ratereview_component__WEBPACK_IMPORTED_MODULE_12__["RatereviewComponent"]
      }, {
        path: 'books/orders',
        component: _Component_orderstatus_orderstatus_component__WEBPACK_IMPORTED_MODULE_13__["OrderstatusComponent"]
      }, {
        path: 'ratedbooks',
        component: _Component_ratedbooks_ratedbooks_component__WEBPACK_IMPORTED_MODULE_14__["RatedbooksComponent"]
      }, {
        path: 'bookreviews',
        component: _Component_bookreviews_bookreviews_component__WEBPACK_IMPORTED_MODULE_15__["BookreviewsComponent"]
      } //{path: '**', component: PagenotfoundComponent},
      ];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zPJE":
    /*!******************************************!*\
      !*** ./src/app/Service/token.service.ts ***!
      \******************************************/

    /*! exports provided: TokenService */

    /***/
    function zPJE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenService", function () {
        return TokenService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TokenService = /*#__PURE__*/function () {
        function TokenService() {
          _classCallCheck(this, TokenService);

          this.valideUser = false;
          this.loggedIn = false;
        }

        _createClass(TokenService, [{
          key: "handle",
          value: function handle(data) {
            this.set(data);
          } // setting token in local

        }, {
          key: "set",
          value: function set(data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('email', data.obj.email);
            localStorage.setItem('Name', data.obj.name);
            localStorage.setItem('phone', data.obj.mobileNumber);
          } // getting token from the local storage

        }, {
          key: "get",
          value: function get() {
            return localStorage.getItem('token');
          } // Removing item from the local storage

        }, {
          key: "remove",
          value: function remove() {
            localStorage.removeItem('token');
            localStorage.removeItem('email');
            localStorage.removeItem('Name');
            localStorage.removeItem('role');
            localStorage.removeItem('phone');
            sessionStorage.clear();
          }
        }, {
          key: "logedIn",
          value: function logedIn(value) {
            if (this.get() != null) {
              return this.loggedIn = true;
            }
          }
        }, {
          key: "loggedStatus",
          value: function loggedStatus() {
            return this.logedIn(this.loggedIn);
          }
        }]);

        return TokenService;
      }();

      TokenService.ɵfac = function TokenService_Factory(t) {
        return new (t || TokenService)();
      };

      TokenService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TokenService,
        factory: TokenService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map