parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"pSDe":[function(require,module,exports) {
(()=>{const t={openProduct1Btn:document.querySelector("[data-product-1-open]"),closeProduct1Btn:document.querySelector("[data-product-1-close]"),product1:document.querySelector("[data-product-1]"),openProduct2Btn:document.querySelector("[data-product-2-open]"),closeProduct2Btn:document.querySelector("[data-product-2-close]"),product2:document.querySelector("[data-product-2]"),openProduct3Btn:document.querySelector("[data-product-3-open]"),closeProduct3Btn:document.querySelector("[data-product-3-close]"),product3:document.querySelector("[data-product-3]")};function e(){t.product1.classList.toggle("is-product-hidden")}function c(){t.product2.classList.toggle("is-product-hidden")}function o(){t.product3.classList.toggle("is-product-hidden")}t.openProduct1Btn.addEventListener("click",e),t.closeProduct1Btn.addEventListener("click",e),t.openProduct2Btn.addEventListener("click",c),t.closeProduct2Btn.addEventListener("click",c),t.openProduct3Btn.addEventListener("click",o),t.closeProduct3Btn.addEventListener("click",o)})();
},{}]},{},["pSDe"], null)
//# sourceMappingURL=/Icecream/products.47605679.js.map