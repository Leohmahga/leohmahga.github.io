(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[179], {
    1506: function(e) {
        e.exports = function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
    },
    7154: function(e) {
        function t() {
            return e.exports = t = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            t.apply(this, arguments)
        }
        e.exports = t
    },
    9754: function(e) {
        function t(n) {
            return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            t(n)
        }
        e.exports = t
    },
    2205: function(e, t, n) {
        var r = n(9489);
        e.exports = function(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && r(e, t)
        }
    },
    8585: function(e, t, n) {
        var r = n(8)
          , o = n(1506);
        e.exports = function(e, t) {
            return !t || "object" !== r(t) && "function" !== typeof t ? o(e) : t
        }
    },
    400: function() {
        "trimStart"in String.prototype || (String.prototype.trimStart = String.prototype.trimLeft),
        "trimEnd"in String.prototype || (String.prototype.trimEnd = String.prototype.trimRight),
        "description"in Symbol.prototype || Object.defineProperty(Symbol.prototype, "description", {
            configurable: !0,
            get: function() {
                var e = /\((.*)\)/.exec(this.toString());
                return e ? e[1] : void 0
            }
        }),
        Array.prototype.flat || (Array.prototype.flat = function(e, t) {
            return t = this.concat.apply([], this),
            e > 1 && t.some(Array.isArray) ? t.flat(e - 1) : t
        }
        ,
        Array.prototype.flatMap = function(e, t) {
            return this.map(e, t).flat()
        }
        ),
        Promise.prototype.finally || (Promise.prototype.finally = function(e) {
            if ("function" != typeof e)
                return this.then(e, e);
            var t = this.constructor || Promise;
            return this.then((function(n) {
                return t.resolve(e()).then((function() {
                    return n
                }
                ))
            }
            ), (function(n) {
                return t.resolve(e()).then((function() {
                    throw n
                }
                ))
            }
            ))
        }
        )
    },
    2771: function(e, t) {
        "use strict";
        t.__esModule = !0,
        t.default = function() {
            var e = null;
            return {
                mountedInstances: new Set,
                updateHead: function(t) {
                    var n = e = Promise.resolve().then((function() {
                        if (n === e) {
                            e = null;
                            var o = {};
                            t.forEach((function(e) {
                                var t = o[e.type] || [];
                                t.push(e),
                                o[e.type] = t
                            }
                            ));
                            var a = o.title ? o.title[0] : null
                              , i = "";
                            if (a) {
                                var u = a.props.children;
                                i = "string" === typeof u ? u : Array.isArray(u) ? u.join("") : ""
                            }
                            i !== document.title && (document.title = i),
                            ["meta", "base", "link", "style", "script"].forEach((function(e) {
                                !function(e, t) {
                                    var n = document.getElementsByTagName("head")[0]
                                      , o = n.querySelector("meta[name=next-head-count]");
                                    0;
                                    for (var a = Number(o.content), i = [], u = 0, c = o.previousElementSibling; u < a; u++,
                                    c = c.previousElementSibling)
                                        c.tagName.toLowerCase() === e && i.push(c);
                                    var s = t.map(r).filter((function(e) {
                                        for (var t = 0, n = i.length; t < n; t++) {
                                            if (i[t].isEqualNode(e))
                                                return i.splice(t, 1),
                                                !1
                                        }
                                        return !0
                                    }
                                    ));
                                    i.forEach((function(e) {
                                        return e.parentNode.removeChild(e)
                                    }
                                    )),
                                    s.forEach((function(e) {
                                        return n.insertBefore(e, o)
                                    }
                                    )),
                                    o.content = (a - i.length + s.length).toString()
                                }(e, o[e] || [])
                            }
                            ))
                        }
                    }
                    ))
                }
            }
        }
        ,
        t.DOMAttributeNames = void 0;
        var n = {
            acceptCharset: "accept-charset",
            className: "class",
            htmlFor: "for",
            httpEquiv: "http-equiv",
            noModule: "noModule"
        };
        function r(e) {
            var t = e.type
              , r = e.props
              , o = document.createElement(t);
            for (var a in r)
                if (r.hasOwnProperty(a) && "children" !== a && "dangerouslySetInnerHTML" !== a && void 0 !== r[a]) {
                    var i = n[a] || a.toLowerCase();
                    "script" !== t || "async" !== i && "defer" !== i && "noModule" !== i ? o.setAttribute(i, r[a]) : o[i] = !!r[a]
                }
            var u = r.children
              , c = r.dangerouslySetInnerHTML;
            return c ? o.innerHTML = c.__html || "" : u && (o.textContent = "string" === typeof u ? u : Array.isArray(u) ? u.join("") : ""),
            o
        }
        t.DOMAttributeNames = n
    },
    7403: function(e, t, n) {
        "use strict";
        var r = n(7757)
          , o = n(8926)
          , a = n(4575)
          , i = n(3913)
          , u = n(2205)
          , c = n(8585)
          , s = n(9754)
          , l = n(3038);
        function f(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = s(e);
                if (t) {
                    var o = s(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return c(this, n)
            }
        }
        var d = n(862)
          , p = n(5318);
        t.__esModule = !0,
        t.render = ue,
        t.renderError = se,
        t.default = t.emitter = t.router = t.version = void 0;
        var m = p(n(7154));
        n(400);
        var v = p(n(7294))
          , h = p(n(3935))
          , y = n(4287)
          , g = p(n(7332))
          , _ = n(1642)
          , S = n(1689)
          , b = n(3288)
          , w = d(n(4915))
          , E = d(n(9186))
          , x = n(3937)
          , P = n(1567)
          , T = p(n(2771))
          , C = p(n(7365))
          , A = p(n(4829))
          , k = n(6975)
          , N = n(2441)
          , R = JSON.parse(document.getElementById("__NEXT_DATA__").textContent);
        window.__NEXT_DATA__ = R;
        t.version = "10.2.0";
        var M = function(e) {
            return [].slice.call(e)
        }
          , L = R.props
          , F = R.err
          , D = R.page
          , O = R.query
          , B = R.buildId
          , I = R.assetPrefix
          , j = R.runtimeConfig
          , q = R.dynamicIds
          , H = R.isFallback
          , X = R.locale
          , U = R.locales
          , G = R.domainLocales
          , W = R.isPreview
          , V = R.defaultLocale
          , J = I || "";
        n.p = "".concat(J, "/_next/"),
        E.setConfig({
            serverRuntimeConfig: {},
            publicRuntimeConfig: j || {}
        });
        var Y = (0,
        x.getURL)();
        (0,
        S.hasBasePath)(Y) && (Y = (0,
        S.delBasePath)(Y));
        var z = new C.default(B,J)
          , K = function(e) {
            var t = l(e, 2)
              , n = t[0]
              , r = t[1];
            return z.routeLoader.onEntrypoint(n, r)
        };
        window.__NEXT_P && window.__NEXT_P.map((function(e) {
            return setTimeout((function() {
                return K(e)
            }
            ), 0)
        }
        )),
        window.__NEXT_P = [],
        window.__NEXT_P.push = K;
        var Q, $, Z, ee, te = (0,
        T.default)(), ne = document.getElementById("__next");
        t.router = $;
        var re, oe = function(e) {
            u(n, e);
            var t = f(n);
            function n() {
                return a(this, n),
                t.apply(this, arguments)
            }
            return i(n, [{
                key: "componentDidCatch",
                value: function(e, t) {
                    this.props.fn(e, t)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.scrollToHash(),
                    !$.isSsr || "/404" === D || "/_error" === D && L && L.pageProps && 404 === L.pageProps.statusCode || !(H || R.nextExport && ((0,
                    b.isDynamicRoute)($.pathname) || location.search) || L && L.__N_SSG && location.search) || $.replace($.pathname + "?" + String(w.assign(w.urlQueryToSearchParams($.query), new URLSearchParams(location.search))), Y, {
                        _h: 1,
                        shallow: !H
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.scrollToHash()
                }
            }, {
                key: "scrollToHash",
                value: function() {
                    var e = location.hash;
                    if (e = e && e.substring(1)) {
                        var t = document.getElementById(e);
                        t && setTimeout((function() {
                            return t.scrollIntoView()
                        }
                        ), 0)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return this.props.children
                }
            }]),
            n
        }(v.default.Component), ae = (0,
        g.default)();
        t.emitter = ae;
        var ie = function() {
            var e = o(r.mark((function e() {
                var n, o, a, i, u, c, s = arguments;
                return r.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return s.length > 0 && void 0 !== s[0] ? s[0] : {},
                            n = F,
                            e.prev = 3,
                            e.next = 6,
                            z.routeLoader.whenEntrypoint("/_app");
                        case 6:
                            if (!("error"in (o = e.sent))) {
                                e.next = 9;
                                break
                            }
                            throw o.error;
                        case 9:
                            a = o.component,
                            i = o.exports,
                            Z = a,
                            i && i.reportWebVitals && (ee = function(e) {
                                var t, n = e.id, r = e.name, o = e.startTime, a = e.value, u = e.duration, c = e.entryType, s = e.entries, l = "".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12);
                                s && s.length && (t = s[0].startTime),
                                i.reportWebVitals({
                                    id: n || l,
                                    name: r,
                                    startTime: o || t,
                                    value: null == a ? u : a,
                                    label: "mark" === c || "measure" === c ? "custom" : "web-vital"
                                })
                            }
                            ),
                            e.next = 16;
                            break;
                        case 16:
                            return e.next = 18,
                            z.routeLoader.whenEntrypoint(D);
                        case 18:
                            e.t0 = e.sent;
                        case 19:
                            if (!("error"in (u = e.t0))) {
                                e.next = 22;
                                break
                            }
                            throw u.error;
                        case 22:
                            re = u.component,
                            e.next = 27;
                            break;
                        case 27:
                            e.next = 32;
                            break;
                        case 29:
                            e.prev = 29,
                            e.t1 = e.catch(3),
                            n = e.t1;
                        case 32:
                            if (!window.__NEXT_PRELOADREADY) {
                                e.next = 36;
                                break
                            }
                            return e.next = 36,
                            window.__NEXT_PRELOADREADY(q);
                        case 36:
                            return t.router = $ = (0,
                            N.createRouter)(D, O, Y, {
                                initialProps: L,
                                pageLoader: z,
                                App: Z,
                                Component: re,
                                wrapApp: he,
                                err: n,
                                isFallback: Boolean(H),
                                subscription: function(e, t, n) {
                                    return ue(Object.assign({}, e, {
                                        App: t,
                                        scroll: n
                                    }))
                                },
                                locale: X,
                                locales: U,
                                defaultLocale: V,
                                domainLocales: G,
                                isPreview: W
                            }),
                            ue(c = {
                                App: Z,
                                initial: !0,
                                Component: re,
                                props: L,
                                err: n
                            }),
                            e.abrupt("return", ae);
                        case 43:
                            return e.abrupt("return", {
                                emitter: ae,
                                render: ue,
                                renderCtx: c
                            });
                        case 44:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[3, 29]])
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }();
        function ue(e) {
            return ce.apply(this, arguments)
        }
        function ce() {
            return (ce = o(r.mark((function e(t) {
                return r.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!t.err) {
                                e.next = 4;
                                break
                            }
                            return e.next = 3,
                            se(t);
                        case 3:
                            return e.abrupt("return");
                        case 4:
                            return e.prev = 4,
                            e.next = 7,
                            ye(t);
                        case 7:
                            e.next = 16;
                            break;
                        case 9:
                            if (e.prev = 9,
                            e.t0 = e.catch(4),
                            !e.t0.cancelled) {
                                e.next = 13;
                                break
                            }
                            throw e.t0;
                        case 13:
                            return e.next = 16,
                            se((0,
                            m.default)({}, t, {
                                err: e.t0
                            }));
                        case 16:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[4, 9]])
            }
            )))).apply(this, arguments)
        }
        function se(e) {
            var t = e.App
              , n = e.err;
            return console.error(n),
            z.loadPage("/_error").then((function(r) {
                var o = r.page
                  , a = r.styleSheets
                  , i = he(t)
                  , u = {
                    Component: o,
                    AppTree: i,
                    router: $,
                    ctx: {
                        err: n,
                        pathname: D,
                        query: O,
                        asPath: Y,
                        AppTree: i
                    }
                };
                return Promise.resolve(e.props ? e.props : (0,
                x.loadGetInitialProps)(t, u)).then((function(t) {
                    return ye((0,
                    m.default)({}, e, {
                        err: n,
                        Component: o,
                        styleSheets: a,
                        props: t
                    }))
                }
                ))
            }
            ))
        }
        t.default = ie;
        var le = "function" === typeof h.default.hydrate;
        function fe() {
            x.ST && (performance.mark("afterHydrate"),
            performance.measure("Next.js-before-hydration", "navigationStart", "beforeRender"),
            performance.measure("Next.js-hydration", "beforeRender", "afterHydrate"),
            ee && performance.getEntriesByName("Next.js-hydration").forEach(ee),
            pe())
        }
        function de() {
            if (x.ST) {
                performance.mark("afterRender");
                var e = performance.getEntriesByName("routeChange", "mark");
                e.length && (performance.measure("Next.js-route-change-to-render", e[0].name, "beforeRender"),
                performance.measure("Next.js-render", "beforeRender", "afterRender"),
                ee && (performance.getEntriesByName("Next.js-render").forEach(ee),
                performance.getEntriesByName("Next.js-route-change-to-render").forEach(ee)),
                pe(),
                ["Next.js-route-change-to-render", "Next.js-render"].forEach((function(e) {
                    return performance.clearMeasures(e)
                }
                )))
            }
        }
        function pe() {
            ["beforeRender", "afterHydrate", "afterRender", "routeChange"].forEach((function(e) {
                return performance.clearMarks(e)
            }
            ))
        }
        function me(e) {
            var t = e.children;
            return v.default.createElement(oe, {
                fn: function(e) {
                    return se({
                        App: Z,
                        err: e
                    }).catch((function(e) {
                        return console.error("Error rendering page: ", e)
                    }
                    ))
                }
            }, v.default.createElement(_.RouterContext.Provider, {
                value: (0,
                N.makePublicRouterInstance)($)
            }, v.default.createElement(y.HeadManagerContext.Provider, {
                value: te
            }, t)))
        }
        var ve, he = function(e) {
            return function(t) {
                var n = (0,
                m.default)({}, t, {
                    Component: re,
                    err: F,
                    router: $
                });
                return v.default.createElement(me, null, v.default.createElement(e, n))
            }
        };
        function ye(e) {
            var t = e.App
              , n = e.Component
              , r = e.props
              , o = e.err
              , a = "initial"in e ? void 0 : e.styleSheets;
            n = n || ve.Component,
            r = r || ve.props;
            var i = (0,
            m.default)({}, r, {
                Component: n,
                err: o,
                router: $
            });
            ve = i;
            var u, c = !1, s = new Promise((function(e, t) {
                Q && Q(),
                u = function() {
                    Q = null,
                    e()
                }
                ,
                Q = function() {
                    c = !0,
                    Q = null;
                    var e = new Error("Cancel rendering route");
                    e.cancelled = !0,
                    t(e)
                }
            }
            ));
            function l() {
                u()
            }
            !function() {
                if (!a)
                    return !1;
                var e = M(document.querySelectorAll("style[data-n-href]"))
                  , t = new Set(e.map((function(e) {
                    return e.getAttribute("data-n-href")
                }
                )))
                  , n = document.querySelector("noscript[data-n-css]")
                  , r = null == n ? void 0 : n.getAttribute("data-n-css");
                a.forEach((function(e) {
                    var n = e.href
                      , o = e.text;
                    if (!t.has(n)) {
                        var a = document.createElement("style");
                        a.setAttribute("data-n-href", n),
                        a.setAttribute("media", "x"),
                        r && a.setAttribute("nonce", r),
                        document.head.appendChild(a),
                        a.appendChild(document.createTextNode(o))
                    }
                }
                ))
            }();
            var f = v.default.createElement(v.default.Fragment, null, v.default.createElement(_e, {
                callback: function() {
                    if (a && !c) {
                        for (var t = new Set(a.map((function(e) {
                            return e.href
                        }
                        ))), n = M(document.querySelectorAll("style[data-n-href]")), r = n.map((function(e) {
                            return e.getAttribute("data-n-href")
                        }
                        )), o = 0; o < r.length; ++o)
                            t.has(r[o]) ? n[o].removeAttribute("media") : n[o].setAttribute("media", "x");
                        var i = document.querySelector("noscript[data-n-css]");
                        i && a.forEach((function(e) {
                            var t = e.href
                              , n = document.querySelector('style[data-n-href="'.concat(t, '"]'));
                            n && (i.parentNode.insertBefore(n, i.nextSibling),
                            i = n)
                        }
                        )),
                        M(document.querySelectorAll("link[data-n-p]")).forEach((function(e) {
                            e.parentNode.removeChild(e)
                        }
                        )),
                        getComputedStyle(document.body, "height")
                    }
                    e.scroll && window.scrollTo(e.scroll.x, e.scroll.y)
                }
            }), v.default.createElement(me, null, v.default.createElement(t, i), v.default.createElement(P.Portal, {
                type: "next-route-announcer"
            }, v.default.createElement(k.RouteAnnouncer, null))));
            return function(e, t) {
                x.ST && performance.mark("beforeRender");
                var n = t(le ? fe : de);
                le ? (h.default.hydrate(n, e),
                le = !1) : h.default.render(n, e)
            }(ne, (function(e) {
                return v.default.createElement(ge, {
                    callbacks: [e, l]
                }, f)
            }
            )),
            s
        }
        function ge(e) {
            var t = e.callbacks
              , n = e.children;
            return v.default.useLayoutEffect((function() {
                return t.forEach((function(e) {
                    return e()
                }
                ))
            }
            ), [t]),
            v.default.useEffect((function() {
                (0,
                A.default)(ee)
            }
            ), []),
            n
        }
        function _e(e) {
            var t = e.callback;
            return v.default.useLayoutEffect((function() {
                return t()
            }
            ), [t]),
            null
        }
    },
    5778: function(e, t, n) {
        "use strict";
        var r = n(862)(n(7403));
        window.next = r,
        (0,
        r.default)().catch(console.error)
    },
    7365: function(e, t, n) {
        "use strict";
        var r = n(4575)
          , o = n(3913)
          , a = n(862)
          , i = n(5318);
        t.__esModule = !0,
        t.default = void 0;
        var u = n(1689)
          , c = i(n(7892))
          , s = n(3288)
          , l = n(4436)
          , f = n(6528)
          , d = a(n(7599));
        var p = function() {
            function e(t, n) {
                r(this, e),
                this.buildId = void 0,
                this.assetPrefix = void 0,
                this.promisedSsgManifest = void 0,
                this.promisedDevPagesManifest = void 0,
                this.routeLoader = void 0,
                this.routeLoader = (0,
                d.default)(n),
                this.buildId = t,
                this.assetPrefix = n,
                this.promisedSsgManifest = new Promise((function(e) {
                    window.__SSG_MANIFEST ? e(window.__SSG_MANIFEST) : window.__SSG_MANIFEST_CB = function() {
                        e(window.__SSG_MANIFEST)
                    }
                }
                ))
            }
            return o(e, [{
                key: "getPageList",
                value: function() {
                    return (0,
                    d.getClientBuildManifest)().then((function(e) {
                        return e.sortedPages
                    }
                    ))
                }
            }, {
                key: "getDataHref",
                value: function(e, t, n, r) {
                    var o = this
                      , a = (0,
                    l.parseRelativeUrl)(e)
                      , i = a.pathname
                      , d = a.query
                      , p = a.search
                      , m = (0,
                    l.parseRelativeUrl)(t).pathname
                      , v = function(e) {
                        if ("/" !== e[0])
                            throw new Error('Route name should start with a "/", got "'.concat(e, '"'));
                        return "/" === e ? e : e.replace(/\/$/, "")
                    }(i)
                      , h = function(e) {
                        var t = (0,
                        c.default)((0,
                        f.removePathTrailingSlash)((0,
                        u.addLocale)(e, r)), ".json");
                        return (0,
                        u.addBasePath)("/_next/data/".concat(o.buildId).concat(t).concat(n ? "" : p))
                    }
                      , y = (0,
                    s.isDynamicRoute)(v)
                      , g = y ? (0,
                    u.interpolateAs)(i, m, d).result : "";
                    return y ? g && h(g) : h(v)
                }
            }, {
                key: "_isSsg",
                value: function(e) {
                    return this.promisedSsgManifest.then((function(t) {
                        return t.has(e)
                    }
                    ))
                }
            }, {
                key: "loadPage",
                value: function(e) {
                    return this.routeLoader.loadRoute(e).then((function(e) {
                        if ("component"in e)
                            return {
                                page: e.component,
                                mod: e.exports,
                                styleSheets: e.styles.map((function(e) {
                                    return {
                                        href: e.href,
                                        text: e.content
                                    }
                                }
                                ))
                            };
                        throw e.error
                    }
                    ))
                }
            }, {
                key: "prefetch",
                value: function(e) {
                    return this.routeLoader.prefetch(e)
                }
            }]),
            e
        }();
        t.default = p
    },
    4829: function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.default = void 0;
        var r, o = n(5866), a = location.href, i = !1;
        function u(e) {
            r && r(e);
            var t = {
                dsn: "iVBtk9eugWohzwFFche1iWohJKl",
                id: e.id,
                page: window.__NEXT_DATA__.page,
                href: a,
                event_name: e.name,
                value: e.value.toString(),
                speed: "connection"in navigator && navigator.connection && "effectiveType"in navigator.connection ? navigator.connection.effectiveType : ""
            }
              , n = new Blob([new URLSearchParams(t).toString()],{
                type: "application/x-www-form-urlencoded"
            })
              , o = "https://vitals.vercel-insights.com/v1/vitals";
            navigator.sendBeacon && navigator.sendBeacon(o, n) || fetch(o, {
                body: n,
                method: "POST",
                credentials: "omit",
                keepalive: !0
            })
        }
        t.default = function(e) {
            r = e,
            i || (i = !0,
            (0,
            o.getCLS)(u),
            (0,
            o.getFID)(u),
            (0,
            o.getFCP)(u),
            (0,
            o.getLCP)(u),
            (0,
            o.getTTFB)(u))
        }
    },
    1567: function(e, t, n) {
        "use strict";
        var r = n(3038)
          , o = n(862);
        t.__esModule = !0,
        t.Portal = void 0;
        var a = o(n(7294))
          , i = n(3935);
        t.Portal = function(e) {
            var t = e.children
              , n = e.type
              , o = a.useRef(null)
              , u = a.useState()
              , c = r(u, 2)[1];
            return a.useEffect((function() {
                return o.current = document.createElement(n),
                document.body.appendChild(o.current),
                c({}),
                function() {
                    o.current && document.body.removeChild(o.current)
                }
            }
            ), [n]),
            o.current ? (0,
            i.createPortal)(t, o.current) : null
        }
    },
    6975: function(e, t, n) {
        "use strict";
        var r = n(3038)
          , o = n(862);
        t.__esModule = !0,
        t.RouteAnnouncer = u,
        t.default = void 0;
        var a = o(n(7294))
          , i = n(2441);
        function u() {
            var e = (0,
            i.useRouter)().asPath
              , t = (0,
            a.useState)("")
              , n = r(t, 2)
              , o = n[0]
              , u = n[1]
              , c = (0,
            a.useRef)(!1);
            return (0,
            a.useEffect)((function() {
                if (c.current) {
                    var t, n = document.querySelector("h1");
                    n && (t = n.innerText || n.textContent),
                    t || (t = document.title ? document.title : e),
                    u(t)
                } else
                    c.current = !0
            }
            ), [e]),
            a.default.createElement("p", {
                "aria-live": "assertive",
                id: "__next-route-announcer__",
                role: "alert",
                style: {
                    border: 0,
                    clip: "rect(0 0 0 0)",
                    height: "1px",
                    margin: "-1px",
                    overflow: "hidden",
                    padding: 0,
                    position: "absolute",
                    width: "1px",
                    whiteSpace: "nowrap",
                    wordWrap: "normal"
                }
            }, o)
        }
        var c = u;
        t.default = c
    },
    4287: function(e, t, n) {
        "use strict";
        var r;
        t.__esModule = !0,
        t.HeadManagerContext = void 0;
        var o = ((r = n(7294)) && r.__esModule ? r : {
            default: r
        }).default.createContext({});
        t.HeadManagerContext = o
    },
    9186: function(e, t) {
        "use strict";
        var n;
        t.__esModule = !0,
        t.setConfig = function(e) {
            n = e
        }
        ,
        t.default = void 0;
        t.default = function() {
            return n
        }
    },
    5866: function(e) {
        e.exports = function() {
            var e = {
                599: function(e, t) {
                    !function(e) {
                        "use strict";
                        var t, n, r = function() {
                            return "".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
                        }, o = function(e) {
                            return {
                                name: e,
                                value: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                                delta: 0,
                                entries: [],
                                id: r(),
                                isFinal: !1
                            }
                        }, a = function(e, t) {
                            try {
                                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                                    var n = new PerformanceObserver((function(e) {
                                        return e.getEntries().map(t)
                                    }
                                    ));
                                    return n.observe({
                                        type: e,
                                        buffered: !0
                                    }),
                                    n
                                }
                            } catch (e) {}
                        }, i = !1, u = !1, c = function(e) {
                            i = !e.persisted
                        }, s = function() {
                            addEventListener("pagehide", c),
                            addEventListener("beforeunload", (function() {}
                            ))
                        }, l = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            u || (s(),
                            u = !0),
                            addEventListener("visibilitychange", (function(t) {
                                var n = t.timeStamp;
                                "hidden" === document.visibilityState && e({
                                    timeStamp: n,
                                    isUnloading: i
                                })
                            }
                            ), {
                                capture: !0,
                                once: t
                            })
                        }, f = function(e, t, n, r) {
                            var o;
                            return function() {
                                n && t.isFinal && n.disconnect(),
                                t.value >= 0 && (r || t.isFinal || "hidden" === document.visibilityState) && (t.delta = t.value - (o || 0),
                                (t.delta || t.isFinal || void 0 === o) && (e(t),
                                o = t.value))
                            }
                        }, d = function() {
                            return void 0 === t && (t = "hidden" === document.visibilityState ? 0 : 1 / 0,
                            l((function(e) {
                                var n = e.timeStamp;
                                return t = n
                            }
                            ), !0)),
                            {
                                get timeStamp() {
                                    return t
                                }
                            }
                        }, p = function() {
                            return n || (n = new Promise((function(e) {
                                return ["scroll", "keydown", "pointerdown"].map((function(t) {
                                    addEventListener(t, e, {
                                        once: !0,
                                        passive: !0,
                                        capture: !0
                                    })
                                }
                                ))
                            }
                            ))),
                            n
                        };
                        e.getCLS = function(e) {
                            var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = o("CLS", 0), i = function(e) {
                                e.hadRecentInput || (r.value += e.value,
                                r.entries.push(e),
                                t())
                            }, u = a("layout-shift", i);
                            u && (t = f(e, r, u, n),
                            l((function(e) {
                                var n = e.isUnloading;
                                u.takeRecords().map(i),
                                n && (r.isFinal = !0),
                                t()
                            }
                            )))
                        }
                        ,
                        e.getFCP = function(e) {
                            var t, n = o("FCP"), r = d(), i = a("paint", (function(e) {
                                "first-contentful-paint" === e.name && e.startTime < r.timeStamp && (n.value = e.startTime,
                                n.isFinal = !0,
                                n.entries.push(e),
                                t())
                            }
                            ));
                            i && (t = f(e, n, i))
                        }
                        ,
                        e.getFID = function(e) {
                            var t = o("FID")
                              , n = d()
                              , r = function(e) {
                                e.startTime < n.timeStamp && (t.value = e.processingStart - e.startTime,
                                t.entries.push(e),
                                t.isFinal = !0,
                                u())
                            }
                              , i = a("first-input", r)
                              , u = f(e, t, i);
                            i ? l((function() {
                                i.takeRecords().map(r),
                                i.disconnect()
                            }
                            ), !0) : window.perfMetrics && window.perfMetrics.onFirstInputDelay && window.perfMetrics.onFirstInputDelay((function(e, r) {
                                r.timeStamp < n.timeStamp && (t.value = e,
                                t.isFinal = !0,
                                t.entries = [{
                                    entryType: "first-input",
                                    name: r.type,
                                    target: r.target,
                                    cancelable: r.cancelable,
                                    startTime: r.timeStamp,
                                    processingStart: r.timeStamp + e
                                }],
                                u())
                            }
                            ))
                        }
                        ,
                        e.getLCP = function(e) {
                            var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = o("LCP"), i = d(), u = function(e) {
                                var n = e.startTime;
                                n < i.timeStamp ? (r.value = n,
                                r.entries.push(e)) : r.isFinal = !0,
                                t()
                            }, c = a("largest-contentful-paint", u);
                            if (c) {
                                t = f(e, r, c, n);
                                var s = function() {
                                    r.isFinal || (c.takeRecords().map(u),
                                    r.isFinal = !0,
                                    t())
                                };
                                p().then(s),
                                l(s, !0)
                            }
                        }
                        ,
                        e.getTTFB = function(e) {
                            var t, n = o("TTFB");
                            t = function() {
                                try {
                                    var t = performance.getEntriesByType("navigation")[0] || function() {
                                        var e = performance.timing
                                          , t = {
                                            entryType: "navigation",
                                            startTime: 0
                                        };
                                        for (var n in e)
                                            "navigationStart" !== n && "toJSON" !== n && (t[n] = Math.max(e[n] - e.navigationStart, 0));
                                        return t
                                    }();
                                    n.value = n.delta = t.responseStart,
                                    n.entries = [t],
                                    n.isFinal = !0,
                                    e(n)
                                } catch (e) {}
                            }
                            ,
                            "complete" === document.readyState ? setTimeout(t, 0) : addEventListener("pageshow", t)
                        }
                        ,
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }(t)
                }
            }
              , t = {};
            function n(r) {
                if (t[r])
                    return t[r].exports;
                var o = t[r] = {
                    exports: {}
                }
                  , a = !0;
                try {
                    e[r].call(o.exports, o, o.exports, n),
                    a = !1
                } finally {
                    a && delete t[r]
                }
                return o.exports
            }
            return n.ab = "//",
            n(599)
        }()
    }
}, function(e) {
    e.O(0, [774, 351], (function() {
        return t = 5778,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
