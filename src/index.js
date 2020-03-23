!function(e, n) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = n();
    else if ("function" == typeof define && define.amd)
        define([], n);
    else {
        var t = n();
        for (var r in t)
            ("object" == typeof exports ? exports : e)[r] = t[r]
    }
}(window, (function() {
    return function(e) {
        var n = {};
        function t(r) {
            if (n[r])
                return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, t),
            o.l = !0,
            o.exports
        }
        return t.m = e,
        t.c = n,
        t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: r
            })
        }
        ,
        t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        t.t = function(e, n) {
            if (1 & n && (e = t(e)),
            8 & n)
                return e;
            if (4 & n && "object" == typeof e && e && e.__esModule)
                return e;
            var r = Object.create(null);
            if (t.r(r),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }),
            2 & n && "string" != typeof e)
                for (var o in e)
                    t.d(r, o, function(n) {
                        return e[n]
                    }
                    .bind(null, o));
            return r
        }
        ,
        t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return t.d(n, "a", n),
            n
        }
        ,
        t.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }
        ,
        t.p = "",
        t(t.s = 674)
    }({
        674: function(e, n, t) {
            "use strict";
            t.r(n),
            t.d(n, "DappBirdsEngin", (function() {
                return a
            }
            ));
            var r = /mobile|android|iphone|ipad|phone/i.test((navigator && navigator.userAgent || "").toLowerCase());
            function o(e, n) {
                var t, r, o, i = n || {}, c = i.libraryName, a = i.addTimestamp ? (t = "lt",
                r = (new Date).getTime() / 1e3 | 0,
                o = e || window.location.href,
                o += "".concat(o.indexOf("?") >= 0 ? "&" : "?").concat(encodeURIComponent(t), "=").concat(encodeURIComponent(r))) : e;
                return new Promise((function(e, n) {
                    var t = window
                      , r = t.document
                      , o = r.getElementsByTagName("script")[0]
                      , i = r.createElement("script");
                    i.async = !0,
                    i.charset = "UTF-8",
                    i.src = a,
                    i.onload = function() {
                        c ? void 0 !== t[c] ? e(t[c]) : n(new Error("init resource error：".concat(a, "，variable 'window.").concat(c, "' was not found！"))) : e({
                            success: !0,
                            loadUrl: a
                        })
                    }
                    ,
                    i.onerror = function() {
                        n(new Error("load resource error：".concat(a, " ")))
                    }
                    ,
                    o.parentNode.insertBefore(i, o)
                }
                ))
            }
            var i = {
                "2_index": "eos_index",
                "5_index": "neo_index",
                "7_web": "ont_web",
                "7_mobile": "ont_mobile",
                "9_index": "bos_index",
                "10_index": "iost_index",
                "12_index": "wicc_index",
                "14_index": "eosc_index",
                "16_index": "thundercore_index",
                "18_index": "nuls_index"
            }
              , c = ["//dapp.cdn.static.mmzhuli.com/static/dappbirds-js-sdk/", "//dapp.superlikeapp.com/static/dappbirds-js-sdk/"];
            var a = {
                init: function(e) {
                    var n = e && e.chain_type || 7
                      , t = !0;
                    e && void 0 !== e.test_mode && (t = e.test_mode);
                    var a = function(e, n) {
                        var t = i["".concat(n, "_index")];
                        if (t || (t = i["".concat(n, "_").concat(r ? "mobile" : "web")]),
                        t)
                            return c[e ? 1 : 0] + "chunk_tag.min.js?t=1584800641".replace("chunk_tag", t)
                    }(t, n);
                    if (!a)
                        throw new Error("init resource error，chain_type: ".concat(n, " was not found！"));
                    return o(a, {
                        libraryName: "DappBirdsSDK",
                        addTimestamp: !0
                    })
                }
            }
        }
    })
}
));

