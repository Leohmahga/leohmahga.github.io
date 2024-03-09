(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    496: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, {
            __N_SSP: function() {
                return I
            },
            default: function() {
                return F
            }
        });
        var r = t(5893)
          , o = t(3282)
          , s = t.n(o)
          , i = t(1163)
          , a = t(7294)
          , u = t(4865)
          , c = t.n(u)
          , f = t(6410)
          , l = t.n(f)
          , d = function() {
            return c().start()
        }
          , m = function() {
            return c().done()
        }
          , p = function() {
            var e = (0,
            i.useRouter)();
            return (0,
            a.useEffect)((function() {
                return e.events.on("routeChangeStart", d),
                e.events.on("routeChangeComplete", m),
                e.events.on("routeChangeError", m),
                function() {
                    e.events.off("routeChangeStart", d),
                    e.events.off("routeChangeComplete", m),
                    e.events.off("routeChangeError", m)
                }
            }
            )),
            (0,
            r.jsx)("div", {
                className: l().container,
                children: (0,
                r.jsx)("button", {
                    className: l().refreshButton,
                    onClick: function() {
                        return e.replace("/".concat(window.location.search))
                    },
                    children: "\ud83d\udc49 Refresh content \ud83d\udc48"
                })
            })
        }
          , h = t(5486)
          , v = t.n(h)
          , g = function(e) {
            var n = e.url;
            return (0,
            r.jsx)("li", {
                className: v().feedError,
                children: (0,
                r.jsxs)("p", {
                    children: ["Could not fetch RSS feed from url ", (0,
                    r.jsx)("span", {
                        children: n
                    })]
                })
            })
        }
          , _ = t(7001)
          , y = t.n(_)
          , x = t(6729)
          , S = t.n(x)
          , b = t(1538)
          , j = t.n(b)
          , E = function(e) {
            var n = e.item;
            return (0,
            r.jsxs)("li", {
                className: j().feedItem,
                children: [(0,
                r.jsx)("p", {
                    children: n.title
                }), (0,
                r.jsx)("a", {
                    href: n.link,
                    target: "_blank"
                }), (0,
                r.jsx)("time", {
                    children: n.publicationDate
                })]
            })
        }
          , C = function(e) {
            var n = e.feed;
            return (0,
            r.jsx)("ol", {
                className: S().feedItems,
                children: n.items.map((function(e) {
                    return (0,
                    r.jsx)(E, {
                        item: e
                    }, e.link)
                }
                ))
            })
        }
          , N = t(8153)
          , k = t.n(N)
          , w = function() {
            return (0,
            r.jsx)("p", {
                className: k().emptyFeed,
                children: "Nothing new!"
            })
        }
          , T = function(e) {
            var n = e.feed;
            return (0,
            r.jsxs)("li", {
                className: y().feed,
                children: [(0,
                r.jsx)("h2", {
                    children: n.title
                }), n.items.length > 0 ? (0,
                r.jsx)(C, {
                    feed: n
                }) : (0,
                r.jsx)(w, {})]
            })
        }
          , I = !0
          , F = function(e) {
            var n = e.content
              , t = e.fontClass
              , o = e.themeClass;
            return (0,
            r.jsxs)("main", {
                className: "".concat(s().feedsWidget, " ").concat(t, " ").concat(o),
                children: [(0,
                r.jsx)(p, {}), (0,
                r.jsx)("ul", {
                    children: n.map((function(e) {
                        return "success" === e.type ? (0,
                        r.jsx)(T, {
                            feed: e.data.feed
                        }, e.data.forUrl) : (0,
                        r.jsx)(g, {
                            url: e.error.forUrl
                        }, e.error.forUrl)
                    }
                    ))
                })]
            })
        }
    },
    9225: function(e, n, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return t(496)
        }
        ])
    },
    8153: function(e) {
        e.exports = {
            emptyFeed: "EmptyFeed_emptyFeed__1KQoJ"
        }
    },
    7001: function(e) {
        e.exports = {
            feed: "Feed_feed__2AZsj"
        }
    },
    5486: function(e) {
        e.exports = {
            feedError: "FeedError_feedError__2g6eb"
        }
    },
    1538: function(e) {
        e.exports = {
            feedItem: "FeedItem_feedItem__37JEo"
        }
    },
    6729: function(e) {
        e.exports = {
            feedItems: "FeedItems_feedItems__vZ4_T"
        }
    },
    3282: function(e) {
        e.exports = {
            feedsWidget: "FeedsWidget_feedsWidget__2E6dM"
        }
    },
    6410: function(e) {
        e.exports = {
            container: "RefreshButton_container__SycaW",
            refreshButton: "RefreshButton_refreshButton__2F2eY"
        }
    },
    1163: function(e, n, t) {
        e.exports = t(2441)
    },
    4865: function(e, n, t) {
        var r, o;
        void 0 === (o = "function" === typeof (r = function() {
            var e = {
                version: "0.2.0"
            }
              , n = e.settings = {
                minimum: .08,
                easing: "ease",
                positionUsing: "",
                speed: 200,
                trickle: !0,
                trickleRate: .02,
                trickleSpeed: 800,
                showSpinner: !0,
                barSelector: '[role="bar"]',
                spinnerSelector: '[role="spinner"]',
                parent: "body",
                template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            };
            function t(e, n, t) {
                return e < n ? n : e > t ? t : e
            }
            function r(e) {
                return 100 * (-1 + e)
            }
            function o(e, t, o) {
                var s;
                return (s = "translate3d" === n.positionUsing ? {
                    transform: "translate3d(" + r(e) + "%,0,0)"
                } : "translate" === n.positionUsing ? {
                    transform: "translate(" + r(e) + "%,0)"
                } : {
                    "margin-left": r(e) + "%"
                }).transition = "all " + t + "ms " + o,
                s
            }
            e.configure = function(e) {
                var t, r;
                for (t in e)
                    void 0 !== (r = e[t]) && e.hasOwnProperty(t) && (n[t] = r);
                return this
            }
            ,
            e.status = null,
            e.set = function(r) {
                var a = e.isStarted();
                r = t(r, n.minimum, 1),
                e.status = 1 === r ? null : r;
                var u = e.render(!a)
                  , c = u.querySelector(n.barSelector)
                  , f = n.speed
                  , l = n.easing;
                return u.offsetWidth,
                s((function(t) {
                    "" === n.positionUsing && (n.positionUsing = e.getPositioningCSS()),
                    i(c, o(r, f, l)),
                    1 === r ? (i(u, {
                        transition: "none",
                        opacity: 1
                    }),
                    u.offsetWidth,
                    setTimeout((function() {
                        i(u, {
                            transition: "all " + f + "ms linear",
                            opacity: 0
                        }),
                        setTimeout((function() {
                            e.remove(),
                            t()
                        }
                        ), f)
                    }
                    ), f)) : setTimeout(t, f)
                }
                )),
                this
            }
            ,
            e.isStarted = function() {
                return "number" === typeof e.status
            }
            ,
            e.start = function() {
                e.status || e.set(0);
                var t = function() {
                    setTimeout((function() {
                        e.status && (e.trickle(),
                        t())
                    }
                    ), n.trickleSpeed)
                };
                return n.trickle && t(),
                this
            }
            ,
            e.done = function(n) {
                return n || e.status ? e.inc(.3 + .5 * Math.random()).set(1) : this
            }
            ,
            e.inc = function(n) {
                var r = e.status;
                return r ? ("number" !== typeof n && (n = (1 - r) * t(Math.random() * r, .1, .95)),
                r = t(r + n, 0, .994),
                e.set(r)) : e.start()
            }
            ,
            e.trickle = function() {
                return e.inc(Math.random() * n.trickleRate)
            }
            ,
            function() {
                var n = 0
                  , t = 0;
                e.promise = function(r) {
                    return r && "resolved" !== r.state() ? (0 === t && e.start(),
                    n++,
                    t++,
                    r.always((function() {
                        0 === --t ? (n = 0,
                        e.done()) : e.set((n - t) / n)
                    }
                    )),
                    this) : this
                }
            }(),
            e.render = function(t) {
                if (e.isRendered())
                    return document.getElementById("nprogress");
                u(document.documentElement, "nprogress-busy");
                var o = document.createElement("div");
                o.id = "nprogress",
                o.innerHTML = n.template;
                var s, a = o.querySelector(n.barSelector), c = t ? "-100" : r(e.status || 0), f = document.querySelector(n.parent);
                return i(a, {
                    transition: "all 0 linear",
                    transform: "translate3d(" + c + "%,0,0)"
                }),
                n.showSpinner || (s = o.querySelector(n.spinnerSelector)) && l(s),
                f != document.body && u(f, "nprogress-custom-parent"),
                f.appendChild(o),
                o
            }
            ,
            e.remove = function() {
                c(document.documentElement, "nprogress-busy"),
                c(document.querySelector(n.parent), "nprogress-custom-parent");
                var e = document.getElementById("nprogress");
                e && l(e)
            }
            ,
            e.isRendered = function() {
                return !!document.getElementById("nprogress")
            }
            ,
            e.getPositioningCSS = function() {
                var e = document.body.style
                  , n = "WebkitTransform"in e ? "Webkit" : "MozTransform"in e ? "Moz" : "msTransform"in e ? "ms" : "OTransform"in e ? "O" : "";
                return n + "Perspective"in e ? "translate3d" : n + "Transform"in e ? "translate" : "margin"
            }
            ;
            var s = function() {
                var e = [];
                function n() {
                    var t = e.shift();
                    t && t(n)
                }
                return function(t) {
                    e.push(t),
                    1 == e.length && n()
                }
            }()
              , i = function() {
                var e = ["Webkit", "O", "Moz", "ms"]
                  , n = {};
                function t(e) {
                    return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, (function(e, n) {
                        return n.toUpperCase()
                    }
                    ))
                }
                function r(n) {
                    var t = document.body.style;
                    if (n in t)
                        return n;
                    for (var r, o = e.length, s = n.charAt(0).toUpperCase() + n.slice(1); o--; )
                        if ((r = e[o] + s)in t)
                            return r;
                    return n
                }
                function o(e) {
                    return e = t(e),
                    n[e] || (n[e] = r(e))
                }
                function s(e, n, t) {
                    n = o(n),
                    e.style[n] = t
                }
                return function(e, n) {
                    var t, r, o = arguments;
                    if (2 == o.length)
                        for (t in n)
                            void 0 !== (r = n[t]) && n.hasOwnProperty(t) && s(e, t, r);
                    else
                        s(e, o[1], o[2])
                }
            }();
            function a(e, n) {
                return ("string" == typeof e ? e : f(e)).indexOf(" " + n + " ") >= 0
            }
            function u(e, n) {
                var t = f(e)
                  , r = t + n;
                a(t, n) || (e.className = r.substring(1))
            }
            function c(e, n) {
                var t, r = f(e);
                a(e, n) && (t = r.replace(" " + n + " ", " "),
                e.className = t.substring(1, t.length - 1))
            }
            function f(e) {
                return (" " + (e.className || "") + " ").replace(/\s+/gi, " ")
            }
            function l(e) {
                e && e.parentNode && e.parentNode.removeChild(e)
            }
            return e
        }
        ) ? r.call(n, t, n, e) : r) || (e.exports = o)
    }
}, function(e) {
    e.O(0, [774, 351], (function() {
        return n = 9225,
        e(e.s = n);
        var n
    }
    ));
    var n = e.O();
    _N_E = n
}
]);
