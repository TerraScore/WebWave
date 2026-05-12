(self.webpackChunk = self.webpackChunk || []).push([
  ["412"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new V.Bare().init(e, t);
        }
        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function i(e, t, n) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
          );
        }
        function a() {}
        function r(e, t, n) {
          if ((void 0 !== t && (n = t), void 0 === e)) return n;
          var i = n;
          return (
            $.test(e) || !q.test(e)
              ? (i = parseInt(e, 10))
              : q.test(e) && (i = 1e3 * parseFloat(e)),
            0 > i && (i = 0),
            i == i ? i : n
          );
        }
        function o(e) {
          W.debug && window && window.console.warn(e);
        }
        var c,
          l,
          s,
          u = (function (e, t, n) {
            function i(e) {
              return "object" == typeof e;
            }
            function a(e) {
              return "function" == typeof e;
            }
            function r() {}
            return function o(c, l) {
              function s() {
                var e = new u();
                return a(e.init) && e.init.apply(e, arguments), e;
              }
              function u() {}
              l === n && ((l = c), (c = Object)), (s.Bare = u);
              var d,
                f = (r[e] = c[e]),
                p = (u[e] = s[e] = new r());
              return (
                (p.constructor = s),
                (s.mixin = function (t) {
                  return (u[e] = s[e] = o(s, t)[e]), s;
                }),
                (s.open = function (e) {
                  if (
                    ((d = {}),
                    a(e) ? (d = e.call(s, p, f, s, c)) : i(e) && (d = e),
                    i(d))
                  )
                    for (var n in d) t.call(d, n) && (p[n] = d[n]);
                  return a(p.init) || (p.init = c), s;
                }),
                s.open(l)
              );
            };
          })("prototype", {}.hasOwnProperty),
          d = {
            ease: [
              "ease",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return (
                  t +
                  n *
                    (-2.75 * r * a + 11 * a * a + -15.5 * r + 8 * a + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return t + n * (-1 * r * a + 3 * a * a + -3 * r + 2 * a);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return (
                  t +
                  n *
                    (0.3 * r * a + -1.6 * a * a + 2.2 * r + -1.8 * a + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return t + n * (2 * r * a + -5 * a * a + 2 * r + 2 * a);
              },
            ],
            linear: [
              "linear",
              function (e, t, n, i) {
                return (n * e) / i + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, n, i) {
                return n * (e /= i) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, n, i) {
                return -n * (e /= i) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, n, i) {
                return n * ((e = e / i - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, n, i) {
                return -n * ((e = e / i - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e * e + t
                  : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, n, i) {
                return n * ((e = e / i - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, n, i) {
                return -n * Math.cos((e / i) * (Math.PI / 2)) + n + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, n, i) {
                return n * Math.sin((e / i) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, n, i) {
                return (-n / 2) * (Math.cos((Math.PI * e) / i) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, n, i) {
                return 0 === e ? t : n * Math.pow(2, 10 * (e / i - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, n, i) {
                return e === i
                  ? t + n
                  : n * (-Math.pow(2, (-10 * e) / i) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, n, i) {
                return 0 === e
                  ? t
                  : e === i
                  ? t + n
                  : (e /= i / 2) < 1
                  ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, n, i) {
                return -n * (Math.sqrt(1 - (e /= i) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, n, i) {
                return n * Math.sqrt(1 - (e = e / i - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  n * (e /= i) * e * ((a + 1) * e - a) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  n * ((e = e / i - 1) * e * ((a + 1) * e + a) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  (e /= i / 2) < 1
                    ? (n / 2) * e * e * (((a *= 1.525) + 1) * e - a) + t
                    : (n / 2) *
                        ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          E = "bkwld-tram",
          I = /[\-\.0-9]/g,
          g = /[A-Z]/,
          T = "number",
          y = /^(rgb|#)/,
          m = /(em|cm|mm|in|pt|pc|px)$/,
          b = /(em|cm|mm|in|pt|pc|px|%)$/,
          O = /(deg|rad|turn)$/,
          h = "unitless",
          v = /(all|none) 0s ease 0s/,
          _ = /^(width|height)$/,
          L = document.createElement("a"),
          R = ["Webkit", "Moz", "O", "ms"],
          S = ["-webkit-", "-moz-", "-o-", "-ms-"],
          N = function (e) {
            if (e in L.style) return { dom: e, css: e };
            var t,
              n,
              i = "",
              a = e.split("-");
            for (t = 0; t < a.length; t++)
              i += a[t].charAt(0).toUpperCase() + a[t].slice(1);
            for (t = 0; t < R.length; t++)
              if ((n = R[t] + i) in L.style) return { dom: n, css: S[t] + e };
          },
          A = (t.support = {
            bind: Function.prototype.bind,
            transform: N("transform"),
            transition: N("transition"),
            backface: N("backface-visibility"),
            timing: N("transition-timing-function"),
          });
        if (A.transition) {
          var C = A.timing.dom;
          if (((L.style[C] = d["ease-in-back"][0]), !L.style[C]))
            for (var w in f) d[w][0] = f[w];
        }
        var M = (t.frame =
            (c =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && A.bind
              ? c.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          F = (t.now =
            (s =
              (l = p.performance) &&
              (l.now || l.webkitNow || l.msNow || l.mozNow)) && A.bind
              ? s.bind(l)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          P = u(function (t) {
            function n(e, t) {
              var n = (function (e) {
                  for (var t = -1, n = e ? e.length : 0, i = []; ++t < n; ) {
                    var a = e[t];
                    a && i.push(a);
                  }
                  return i;
                })(("" + e).split(" ")),
                i = n[0];
              t = t || {};
              var a = Y[i];
              if (!a) return o("Unsupported property: " + i);
              if (!t.weak || !this.props[i]) {
                var r = a[0],
                  c = this.props[i];
                return (
                  c || (c = this.props[i] = new r.Bare()),
                  c.init(this.$el, n, a, t),
                  c
                );
              }
            }
            function i(e, t, i) {
              if (e) {
                var o = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == o && t)
                )
                  return (
                    (this.timer = new B({
                      duration: e,
                      context: this,
                      complete: a,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == o && t) {
                  switch (e) {
                    case "hide":
                      l.call(this);
                      break;
                    case "stop":
                      c.call(this);
                      break;
                    case "redraw":
                      s.call(this);
                      break;
                    default:
                      n.call(this, e, i && i[1]);
                  }
                  return a.call(this);
                }
                if ("function" == o) return void e.call(this, this);
                if ("object" == o) {
                  var f = 0;
                  d.call(
                    this,
                    e,
                    function (e, t) {
                      e.span > f && (f = e.span), e.stop(), e.animate(t);
                    },
                    function (e) {
                      "wait" in e && (f = r(e.wait, 0));
                    }
                  ),
                    u.call(this),
                    f > 0 &&
                      ((this.timer = new B({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = a));
                  var p = this,
                    E = !1,
                    I = {};
                  M(function () {
                    d.call(p, e, function (e) {
                      e.active && ((E = !0), (I[e.name] = e.nextStyle));
                    }),
                      E && p.$el.css(I);
                  });
                }
              }
            }
            function a() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                i.call(this, e.options, !0, e.args);
              }
            }
            function c(e) {
              var t;
              this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                d.call(this, t, f),
                u.call(this);
            }
            function l() {
              c.call(this), (this.el.style.display = "none");
            }
            function s() {
              this.el.offsetHeight;
            }
            function u() {
              var e,
                t,
                n = [];
              for (e in (this.upstream && n.push(this.upstream), this.props))
                (t = this.props[e]).active && n.push(t.string);
              (n = n.join(",")),
                this.style !== n &&
                  ((this.style = n), (this.el.style[A.transition.dom] = n));
            }
            function d(e, t, i) {
              var a,
                r,
                o,
                c,
                l = t !== f,
                s = {};
              for (a in e)
                (o = e[a]),
                  a in Q
                    ? (s.transform || (s.transform = {}), (s.transform[a] = o))
                    : (g.test(a) &&
                        (a = a.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      a in Y ? (s[a] = o) : (c || (c = {}), (c[a] = o)));
              for (a in s) {
                if (((o = s[a]), !(r = this.props[a]))) {
                  if (!l) continue;
                  r = n.call(this, a);
                }
                t.call(this, r, o);
              }
              i && c && i.call(this, c);
            }
            function f(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function I(e) {
              this.$el.css(e);
            }
            function T(e, n) {
              t[e] = function () {
                return this.children
                  ? y.call(this, n, arguments)
                  : (this.el && n.apply(this, arguments), this);
              };
            }
            function y(e, t) {
              var n,
                i = this.children.length;
              for (n = 0; i > n; n++) e.apply(this.children[n], t);
              return this;
            }
            (t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                W.keepInherited && !W.fallback)
              ) {
                var n = H(this.el, "transition");
                n && !v.test(n) && (this.upstream = n);
              }
              A.backface &&
                W.hideBackface &&
                j(this.el, A.backface.css, "hidden");
            }),
              T("add", n),
              T("start", i),
              T("wait", function (e) {
                (e = r(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new B({
                        duration: e,
                        context: this,
                        complete: a,
                      })),
                      (this.active = !0));
              }),
              T("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = a))
                  : o(
                      "No active transition timer. Use start() or wait() before then()."
                    );
              }),
              T("next", a),
              T("stop", c),
              T("set", function (e) {
                c.call(this, e), d.call(this, e, p, I);
              }),
              T("show", function (e) {
                "string" != typeof e && (e = "block"),
                  (this.el.style.display = e);
              }),
              T("hide", l),
              T("redraw", s),
              T("destroy", function () {
                c.call(this),
                  e.removeData(this.el, E),
                  (this.$el = this.el = null);
              });
          }),
          V = u(P, function (t) {
            function n(t, n) {
              var i = e.data(t, E) || e.data(t, E, new P.Bare());
              return i.el || i.init(t), n ? i.start(n) : i;
            }
            t.init = function (t, i) {
              var a = e(t);
              if (!a.length) return this;
              if (1 === a.length) return n(a[0], i);
              var r = [];
              return (
                a.each(function (e, t) {
                  r.push(n(t, i));
                }),
                (this.children = r),
                this
              );
            };
          }),
          U = u(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return this.update(e), t;
            }
            (e.init = function (e, t, n, i) {
              (this.$el = e), (this.el = e[0]);
              var a,
                o,
                c,
                l = t[0];
              n[2] && (l = n[2]),
                z[l] && (l = z[l]),
                (this.name = l),
                (this.type = n[1]),
                (this.duration = r(t[1], this.duration, 500)),
                (this.ease =
                  ((a = t[2]),
                  (o = this.ease),
                  (c = "ease"),
                  void 0 !== o && (c = o),
                  a in d ? a : c)),
                (this.delay = r(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = _.test(this.name)),
                (this.unit = i.unit || this.unit || W.defaultUnit),
                (this.angle = i.angle || this.angle || W.defaultAngle),
                W.fallback || i.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + d[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : "")));
            }),
              (e.set = function (e) {
                (e = this.convert(e, this.type)), this.update(e), this.redraw();
              }),
              (e.transition = function (e) {
                (this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e);
              }),
              (e.fallback = function (e) {
                var n =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new k({
                    from: n,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  }));
              }),
              (e.get = function () {
                return H(this.el, this.name);
              }),
              (e.update = function (e) {
                j(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  j(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var n,
                  a,
                  r = "number" == typeof e,
                  c = "string" == typeof e;
                switch (t) {
                  case T:
                    if (r) return e;
                    if (c && "" === e.replace(I, "")) return +e;
                    a = "number(unitless)";
                    break;
                  case y:
                    if (c) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e))
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? i(n[1], n[2], n[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    a = "hex or rgb string";
                    break;
                  case m:
                    if (r) return e + this.unit;
                    if (c && t.test(e)) return e;
                    a = "number(px) or string(unit)";
                    break;
                  case b:
                    if (r) return e + this.unit;
                    if (c && t.test(e)) return e;
                    a = "number(px) or string(unit or %)";
                    break;
                  case O:
                    if (r) return e + this.angle;
                    if (c && t.test(e)) return e;
                    a = "number(deg) or string(angle)";
                    break;
                  case h:
                    if (r || (c && b.test(e))) return e;
                    a = "number(unitless) or string(unit or %)";
                }
                return (
                  o(
                    "Type warning: Expected: [" +
                      a +
                      "] Got: [" +
                      typeof e +
                      "] " +
                      e
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              });
          }),
          x = u(U, function (e, t) {
            e.init = function () {
              t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), y));
            };
          }),
          D = u(U, function (e, t) {
            (e.init = function () {
              t.init.apply(this, arguments), (this.animate = this.fallback);
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              });
          }),
          G = u(U, function (e, t) {
            function n(e, t) {
              var n, i, a, r, o;
              for (n in e)
                (a = (r = Q[n])[0]),
                  (i = r[1] || n),
                  (o = this.convert(e[n], a)),
                  t.call(this, i, o, a);
            }
            (e.init = function () {
              t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  Q.perspective &&
                    W.perspective &&
                    ((this.current.perspective = W.perspective),
                    j(this.el, this.name, this.style(this.current)),
                    this.redraw()));
            }),
              (e.set = function (e) {
                n.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  j(this.el, this.name, this.style(this.current)),
                  this.redraw();
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new X({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var n,
                  i = {};
                for (n in this.current) i[n] = n in t ? t[n] : this.current[n];
                (this.active = !0), (this.nextStyle = this.style(i));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new X({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                j(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  n = "";
                for (t in e) n += t + "(" + e[t] + ") ";
                return n;
              }),
              (e.values = function (e) {
                var t,
                  i = {};
                return (
                  n.call(this, e, function (e, n, a) {
                    (i[e] = n),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, a)));
                  }),
                  i
                );
              });
          }),
          k = u(function (t) {
            function r() {
              var e,
                t,
                n,
                i = l.length;
              if (i)
                for (M(r), t = F(), e = i; e--; ) (n = l[e]) && n.render(t);
            }
            var c = { ease: d.ease[1], from: 0, to: 1 };
            (t.init = function (e) {
              (this.duration = e.duration || 0), (this.delay = e.delay || 0);
              var t = e.ease || c.ease;
              d[t] && (t = d[t][1]),
                "function" != typeof t && (t = c.ease),
                (this.ease = t),
                (this.update = e.update || a),
                (this.complete = e.complete || a),
                (this.context = e.context || this),
                (this.name = e.name);
              var n = e.from,
                i = e.to;
              void 0 === n && (n = c.from),
                void 0 === i && (i = c.to),
                (this.unit = e.unit || ""),
                "number" == typeof n && "number" == typeof i
                  ? ((this.begin = n), (this.change = i - n))
                  : this.format(i, n),
                (this.value = this.begin + this.unit),
                (this.start = F()),
                !1 !== e.autoplay && this.play();
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = F()),
                  (this.active = !0),
                  1 === l.push(this) && M(r));
              }),
              (t.stop = function () {
                var t, n;
                this.active &&
                  ((this.active = !1),
                  (n = e.inArray(this, l)) >= 0 &&
                    ((t = l.slice(n + 1)),
                    (l.length = n),
                    t.length && (l = l.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  n = e - this.start;
                if (this.delay) {
                  if (n <= this.delay) return;
                  n -= this.delay;
                }
                if (n < this.duration) {
                  var a,
                    r,
                    o = this.ease(n, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((a = this.startRGB),
                        (r = this.endRGB),
                        i(
                          a[0] + o * (r[0] - a[0]),
                          a[1] + o * (r[1] - a[1]),
                          a[2] + o * (r[2] - a[2])
                        ))
                      : Math.round((this.begin + o * this.change) * s) / s),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                (t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy();
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = n(t)),
                    (this.endRGB = n(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var i = t.replace(I, "");
                  i !== e.replace(I, "") &&
                    o("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = i);
                }
                (t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t);
              }),
              (t.destroy = function () {
                this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = a);
              });
            var l = [],
              s = 1e3;
          }),
          B = u(k, function (e) {
            (e.init = function (e) {
              (this.duration = e.duration || 0),
                (this.complete = e.complete || a),
                (this.context = e.context),
                this.play();
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              });
          }),
          X = u(k, function (e, t) {
            (e.init = function (e) {
              var t, n;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                (n = e.values[t]),
                  this.current[t] !== n &&
                    this.tweens.push(
                      new k({
                        name: t,
                        from: this.current[t],
                        to: n,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      })
                    );
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  n,
                  i = this.tweens.length,
                  a = !1;
                for (t = i; t--; )
                  (n = this.tweens[t]).context &&
                    (n.render(e), (this.current[n.name] = n.value), (a = !0));
                return a
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  (this.tweens = null), (this.current = null);
                }
              });
          }),
          W = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !A.transition,
            agentTests: [],
          });
        (t.fallback = function (e) {
          if (!A.transition) return (W.fallback = !0);
          W.agentTests.push("(" + e + ")");
          var t = RegExp(W.agentTests.join("|"), "i");
          W.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new k(e);
          }),
          (t.delay = function (e, t, n) {
            return new B({ complete: t, duration: e, context: n });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          });
        var j = e.style,
          H = e.css,
          z = { transform: A.transform && A.transform.css },
          Y = {
            color: [x, y],
            background: [x, y, "background-color"],
            "outline-color": [x, y],
            "border-color": [x, y],
            "border-top-color": [x, y],
            "border-right-color": [x, y],
            "border-bottom-color": [x, y],
            "border-left-color": [x, y],
            "border-width": [U, m],
            "border-top-width": [U, m],
            "border-right-width": [U, m],
            "border-bottom-width": [U, m],
            "border-left-width": [U, m],
            "border-spacing": [U, m],
            "letter-spacing": [U, m],
            margin: [U, m],
            "margin-top": [U, m],
            "margin-right": [U, m],
            "margin-bottom": [U, m],
            "margin-left": [U, m],
            padding: [U, m],
            "padding-top": [U, m],
            "padding-right": [U, m],
            "padding-bottom": [U, m],
            "padding-left": [U, m],
            "outline-width": [U, m],
            opacity: [U, T],
            top: [U, b],
            right: [U, b],
            bottom: [U, b],
            left: [U, b],
            "font-size": [U, b],
            "text-indent": [U, b],
            "word-spacing": [U, b],
            width: [U, b],
            "min-width": [U, b],
            "max-width": [U, b],
            height: [U, b],
            "min-height": [U, b],
            "max-height": [U, b],
            "line-height": [U, h],
            "scroll-top": [D, T, "scrollTop"],
            "scroll-left": [D, T, "scrollLeft"],
          },
          Q = {};
        A.transform &&
          ((Y.transform = [G]),
          (Q = {
            x: [b, "translateX"],
            y: [b, "translateY"],
            rotate: [O],
            rotateX: [O],
            rotateY: [O],
            scale: [T],
            scaleX: [T],
            scaleY: [T],
            skew: [O],
            skewX: [O],
            skewY: [O],
          })),
          A.transform &&
            A.backface &&
            ((Q.z = [b, "translateZ"]),
            (Q.rotateZ = [O]),
            (Q.scaleZ = [T]),
            (Q.perspective = [m]));
        var $ = /ms/,
          q = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, n) {
      "use strict";
      var i,
        a,
        r,
        o,
        c,
        l,
        s,
        u,
        d,
        f,
        p,
        E,
        I,
        g,
        T,
        y,
        m,
        b,
        O,
        h,
        v = window.$,
        _ = n(5487) && v.tram;
      ((i = {}).VERSION = "1.6.0-Webflow"),
        (a = {}),
        (r = Array.prototype),
        (o = Object.prototype),
        (c = Function.prototype),
        r.push,
        (l = r.slice),
        r.concat,
        o.toString,
        (s = o.hasOwnProperty),
        (u = r.forEach),
        (d = r.map),
        r.reduce,
        r.reduceRight,
        (f = r.filter),
        r.every,
        (p = r.some),
        (E = r.indexOf),
        r.lastIndexOf,
        (I = Object.keys),
        c.bind,
        (g =
          i.each =
          i.forEach =
            function (e, t, n) {
              if (null == e) return e;
              if (u && e.forEach === u) e.forEach(t, n);
              else if (e.length === +e.length) {
                for (var r = 0, o = e.length; r < o; r++)
                  if (t.call(n, e[r], r, e) === a) return;
              } else
                for (var c = i.keys(e), r = 0, o = c.length; r < o; r++)
                  if (t.call(n, e[c[r]], c[r], e) === a) return;
              return e;
            }),
        (i.map = i.collect =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : d && e.map === d
              ? e.map(t, n)
              : (g(e, function (e, a, r) {
                  i.push(t.call(n, e, a, r));
                }),
                i);
          }),
        (i.find = i.detect =
          function (e, t, n) {
            var i;
            return (
              T(e, function (e, a, r) {
                if (t.call(n, e, a, r)) return (i = e), !0;
              }),
              i
            );
          }),
        (i.filter = i.select =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : f && e.filter === f
              ? e.filter(t, n)
              : (g(e, function (e, a, r) {
                  t.call(n, e, a, r) && i.push(e);
                }),
                i);
          }),
        (T =
          i.some =
          i.any =
            function (e, t, n) {
              t || (t = i.identity);
              var r = !1;
              return null == e
                ? r
                : p && e.some === p
                ? e.some(t, n)
                : (g(e, function (e, i, o) {
                    if (r || (r = t.call(n, e, i, o))) return a;
                  }),
                  !!r);
            }),
        (i.contains = i.include =
          function (e, t) {
            return (
              null != e &&
              (E && e.indexOf === E
                ? -1 != e.indexOf(t)
                : T(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (i.delay = function (e, t) {
          var n = l.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (i.defer = function (e) {
          return i.delay.apply(i, [e, 1].concat(l.call(arguments, 1)));
        }),
        (i.throttle = function (e) {
          var t, n, i;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (i = this),
              _.frame(function () {
                (t = !1), e.apply(i, n);
              }));
          };
        }),
        (i.debounce = function (e, t, n) {
          var a,
            r,
            o,
            c,
            l,
            s = function () {
              var u = i.now() - c;
              u < t
                ? (a = setTimeout(s, t - u))
                : ((a = null), n || ((l = e.apply(o, r)), (o = r = null)));
            };
          return function () {
            (o = this), (r = arguments), (c = i.now());
            var u = n && !a;
            return (
              a || (a = setTimeout(s, t)),
              u && ((l = e.apply(o, r)), (o = r = null)),
              l
            );
          };
        }),
        (i.defaults = function (e) {
          if (!i.isObject(e)) return e;
          for (var t = 1, n = arguments.length; t < n; t++) {
            var a = arguments[t];
            for (var r in a) void 0 === e[r] && (e[r] = a[r]);
          }
          return e;
        }),
        (i.keys = function (e) {
          if (!i.isObject(e)) return [];
          if (I) return I(e);
          var t = [];
          for (var n in e) i.has(e, n) && t.push(n);
          return t;
        }),
        (i.has = function (e, t) {
          return s.call(e, t);
        }),
        (i.isObject = function (e) {
          return e === Object(e);
        }),
        (i.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (i.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (y = /(.)^/),
        (m = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (b = /\\|'|\r|\n|\u2028|\u2029/g),
        (O = function (e) {
          return "\\" + m[e];
        }),
        (h = /^\s*(\w|\$)+\s*$/),
        (i.template = function (e, t, n) {
          !t && n && (t = n);
          var a,
            r = RegExp(
              [
                ((t = i.defaults({}, t, i.templateSettings)).escape || y)
                  .source,
                (t.interpolate || y).source,
                (t.evaluate || y).source,
              ].join("|") + "|$",
              "g"
            ),
            o = 0,
            c = "__p+='";
          e.replace(r, function (t, n, i, a, r) {
            return (
              (c += e.slice(o, r).replace(b, O)),
              (o = r + t.length),
              n
                ? (c += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : i
                ? (c += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                : a && (c += "';\n" + a + "\n__p+='"),
              t
            );
          }),
            (c += "';\n");
          var l = t.variable;
          if (l) {
            if (!h.test(l))
              throw Error("variable is not a bare identifier: " + l);
          } else (c = "with(obj||{}){\n" + c + "}\n"), (l = "obj");
          c =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            c +
            "return __p;\n";
          try {
            a = Function(t.variable || "obj", "_", c);
          } catch (e) {
            throw ((e.source = c), e);
          }
          var s = function (e) {
            return a.call(this, e, i);
          };
          return (s.source = "function(" + l + "){\n" + c + "}"), s;
        }),
        (e.exports = i);
    },
    9461: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "brand",
        (e.exports = function (e) {
          var t,
            n = {},
            a = document,
            r = e("html"),
            o = e("body"),
            c = window.location,
            l = /PhantomJS/i.test(navigator.userAgent),
            s =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function u() {
            var n =
              a.fullScreen ||
              a.mozFullScreen ||
              a.webkitIsFullScreen ||
              a.msFullscreenElement ||
              !!a.webkitFullscreenElement;
            e(t).attr("style", n ? "display: none !important;" : "");
          }
          function d() {
            var e = o.children(".w-webflow-badge");
            e.length && e.remove();
          }
          return (
            (n.ready = function () {
              var n,
                i,
                o,
                f = r.attr("data-wf-status"),
                p = r.attr("data-wf-domain") || "";
              /\.webflow\.io$/i.test(p) && c.hostname !== p && (f = !0),
                f &&
                  !l &&
                  ((t =
                    t ||
                    ((n = e('<a class="w-webflow-badge"></a>').attr(
                      "href",
                      "https://webflow.com?utm_campaign=brandjs"
                    )),
                    (i = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
                      )
                      .attr("alt", "")
                      .css({ marginRight: "4px", width: "26px" })),
                    (o = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
                      )
                      .attr("alt", "Mad in Webflow")),
                    n.append(i, o),
                    n[0])),
                  d(),
                  setTimeout(d, 500),
                  e(a).off(s, u).on(s, u));
            }),
            n
          );
        })
      );
    },
    322: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "edit",
        (e.exports = function (e, t, n) {
          if (
            ((n = n || {}),
            (i.env("test") || i.env("frame")) &&
              !n.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var a,
            r = e(window),
            o = e(document.documentElement),
            c = document.location,
            l = "hashchange",
            s =
              n.load ||
              function () {
                var t, n, i;
                (a = !0),
                  (window.WebflowEditor = !0),
                  r.off(l, d),
                  (t = function (t) {
                    var n;
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: o.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success:
                        ((n = t),
                        function (t) {
                          var i, a, r;
                          if (!t)
                            return void console.error(
                              "Could not load editor data"
                            );
                          (t.thirdPartyCookiesSupported = n),
                            (a =
                              (i = t.scriptPath).indexOf("//") >= 0
                                ? i
                                : p("https://editor-api.webflow.com" + i)),
                            (r = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({
                                type: "GET",
                                url: a,
                                dataType: "script",
                                cache: !0,
                              })
                              .then(r, f);
                        }),
                    });
                  }),
                  ((n = window.document.createElement("iframe")).src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                  (n.style.display = "none"),
                  (n.sandbox = "allow-scripts allow-same-origin"),
                  (i = function (e) {
                    "WF_third_party_cookies_unsupported" === e.data
                      ? (E(n, i), t(!1))
                      : "WF_third_party_cookies_supported" === e.data &&
                        (E(n, i), t(!0));
                  }),
                  (n.onerror = function () {
                    E(n, i), t(!1);
                  }),
                  window.addEventListener("message", i, !1),
                  window.document.body.appendChild(n);
              },
            u = !1;
          try {
            u =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function d() {
            !a && /\?edit/.test(c.hash) && s();
          }
          function f(e, t, n) {
            throw (console.error("Could not load editor script: " + t), n);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function E(e, t) {
            window.removeEventListener("message", t, !1), e.remove();
          }
          return (
            /[?&](update)(?:[=&?]|$)/.test(c.search) || /\?update$/.test(c.href)
              ? (function () {
                  var e = document.documentElement,
                    t = e.getAttribute("data-wf-site"),
                    n = e.getAttribute("data-wf-page"),
                    i = e.getAttribute("data-wf-item-slug"),
                    a = e.getAttribute("data-wf-collection"),
                    r = e.getAttribute("data-wf-domain");
                  if (t && n) {
                    var o = "pageId=" + n + "&mode=edit";
                    (o += "&simulateRole=editor&utm_source=legacy_editor"),
                      i &&
                        a &&
                        r &&
                        (o +=
                          "&domain=" +
                          encodeURIComponent(r) +
                          "&itemSlug=" +
                          encodeURIComponent(i) +
                          "&collectionId=" +
                          a),
                      (window.location.href =
                        "https://webflow.com/external/designer/" + t + "?" + o);
                  }
                })()
              : u
              ? s()
              : c.search
              ? (/[?&](edit)(?:[=&?]|$)/.test(c.search) ||
                  /\?edit$/.test(c.href)) &&
                s()
              : r.on(l, d).triggerHandler(l),
            {}
          );
        })
      );
    },
    2338: function (e, t, n) {
      "use strict";
      n(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      n = !1,
                      i = null,
                      a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function r(e) {
                      return (
                        !!e &&
                        e !== document &&
                        "HTML" !== e.nodeName &&
                        "BODY" !== e.nodeName &&
                        "classList" in e &&
                        "contains" in e.classList
                      );
                    }
                    function o(e) {
                      e.getAttribute("data-wf-focus-visible") ||
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function c() {
                      t = !1;
                    }
                    function l() {
                      document.addEventListener("mousemove", s),
                        document.addEventListener("mousedown", s),
                        document.addEventListener("mouseup", s),
                        document.addEventListener("pointermove", s),
                        document.addEventListener("pointerdown", s),
                        document.addEventListener("pointerup", s),
                        document.addEventListener("touchmove", s),
                        document.addEventListener("touchstart", s),
                        document.addEventListener("touchend", s);
                    }
                    function s(e) {
                      (e.target.nodeName &&
                        "html" === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener("mousemove", s),
                        document.removeEventListener("mousedown", s),
                        document.removeEventListener("mouseup", s),
                        document.removeEventListener("pointermove", s),
                        document.removeEventListener("pointerdown", s),
                        document.removeEventListener("pointerup", s),
                        document.removeEventListener("touchmove", s),
                        document.removeEventListener("touchstart", s),
                        document.removeEventListener("touchend", s));
                    }
                    document.addEventListener(
                      "keydown",
                      function (n) {
                        n.metaKey ||
                          n.altKey ||
                          n.ctrlKey ||
                          (r(e.activeElement) && o(e.activeElement), (t = !0));
                      },
                      !0
                    ),
                      document.addEventListener("mousedown", c, !0),
                      document.addEventListener("pointerdown", c, !0),
                      document.addEventListener("touchstart", c, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (n && (t = !0), l());
                        },
                        !0
                      ),
                      l(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          if (r(e.target)) {
                            var n, i, c;
                            (t ||
                              ((i = (n = e.target).type),
                              ("INPUT" === (c = n.tagName) &&
                                a[i] &&
                                !n.readOnly) ||
                                ("TEXTAREA" === c && !n.readOnly) ||
                                n.isContentEditable ||
                                0)) &&
                              o(e.target);
                          }
                        },
                        !0
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (
                            r(e.target) &&
                            e.target.hasAttribute("data-wf-focus-visible")
                          ) {
                            var t;
                            (n = !0),
                              window.clearTimeout(i),
                              (i = window.setTimeout(function () {
                                n = !1;
                              }, 100)),
                              (t = e.target).getAttribute(
                                "data-wf-focus-visible"
                              ) && t.removeAttribute("data-wf-focus-visible");
                          }
                        },
                        !0
                      );
                  })(document);
                }
            },
          };
        })
      );
    },
    8334: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function n(n) {
            t &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e.unshift(n));
          }
          function a(n) {
            var i, a;
            (a = (i = n.target).tagName),
              ((/^a$/i.test(a) && null != i.href) ||
                (/^(button|textarea)$/i.test(a) && !0 !== i.disabled) ||
                (/^input$/i.test(a) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(i.type) &&
                  !i.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(a) &&
                  !Number.isNaN(Number.parseFloat(i.tabIndex))) ||
                /^audio$/i.test(a) ||
                (/^video$/i.test(a) && !0 === i.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, n.target.focus(); e.length > 0; ) {
                    var i = e.pop();
                    i.target.dispatchEvent(new MouseEvent(i.type, i));
                  }
                }, 0));
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                i.env.safari &&
                (document.addEventListener("mousedown", a, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0));
            },
          };
        })
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        i = [],
        a = ".w-ix",
        r = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, i) {
            i.__wf_intro ||
              ((i.__wf_intro = !0), t(i).triggerHandler(n.types.INTRO));
          },
          outro: function (e, i) {
            i.__wf_intro &&
              ((i.__wf_intro = null), t(i).triggerHandler(n.types.OUTRO));
          },
        };
      (n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + a, OUTRO: "w-ix-outro" + a }),
        (n.init = function () {
          for (var e = i.length, a = 0; a < e; a++) {
            var o = i[a];
            o[0](0, o[1]);
          }
          (i = []), t.extend(n.triggers, r);
        }),
        (n.async = function () {
          for (var e in r) {
            var t = r[e];
            r.hasOwnProperty(e) &&
              (n.triggers[e] = function (e, n) {
                i.push([t, n]);
              });
          }
        }),
        n.async(),
        (e.exports = n);
    },
    5134: function (e, t, n) {
      "use strict";
      var i = n(7199);
      function a(e, t, n) {
        var i = document.createEvent("CustomEvent");
        i.initCustomEvent(t, !0, !0, n || null), e.dispatchEvent(i);
      }
      var r = window.jQuery,
        o = {},
        c = ".w-ix";
      (o.triggers = {}),
        (o.types = { INTRO: "w-ix-intro" + c, OUTRO: "w-ix-outro" + c }),
        r.extend(o.triggers, {
          reset: function (e, t) {
            i.triggers.reset(e, t);
          },
          intro: function (e, t) {
            i.triggers.intro(e, t), a(t, "COMPONENT_ACTIVE");
          },
          outro: function (e, t) {
            i.triggers.outro(e, t), a(t, "COMPONENT_INACTIVE");
          },
        }),
        (o.dispatchCustomEvent = a),
        (e.exports = o);
    },
    941: function (e, t, n) {
      "use strict";
      var i = n(3949),
        a = n(6011);
      a.setEnv(i.env),
        i.define(
          "ix2",
          (e.exports = function () {
            return a;
          })
        );
    },
    3949: function (e, t, n) {
      "use strict";
      var i,
        a,
        r = {},
        o = {},
        c = [],
        l = window.Webflow || [],
        s = window.jQuery,
        u = s(window),
        d = s(document),
        f = s.isFunction,
        p = (r._ = n(5756)),
        E = (r.tram = n(5487) && s.tram),
        I = !1,
        g = !1;
      function T(e) {
        r.env() &&
          (f(e.design) && u.on("__wf_design", e.design),
          f(e.preview) && u.on("__wf_preview", e.preview)),
          f(e.destroy) && u.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (I) return e.ready();
              p.contains(c, e.ready) || c.push(e.ready);
            })(e);
      }
      function y(e) {
        var t;
        f(e.design) && u.off("__wf_design", e.design),
          f(e.preview) && u.off("__wf_preview", e.preview),
          f(e.destroy) && u.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            ((t = e),
            (c = p.filter(c, function (e) {
              return e !== t.ready;
            })));
      }
      (E.config.hideBackface = !1),
        (E.config.keepInherited = !0),
        (r.define = function (e, t, n) {
          o[e] && y(o[e]);
          var i = (o[e] = t(s, p, n) || {});
          return T(i), i;
        }),
        (r.require = function (e) {
          return o[e];
        }),
        (r.push = function (e) {
          if (I) {
            f(e) && e();
            return;
          }
          l.push(e);
        }),
        (r.env = function (e) {
          var t = window.__wf_design,
            n = void 0 !== t;
          return e
            ? "design" === e
              ? n && t
              : "preview" === e
              ? n && !t
              : "slug" === e
              ? n && window.__wf_slug
              : "editor" === e
              ? window.WebflowEditor
              : "test" === e
              ? window.__wf_test
              : "frame" === e
              ? window !== window.top
              : void 0
            : n;
        });
      var m = navigator.userAgent.toLowerCase(),
        b = (r.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        O = (r.env.chrome =
          /chrome/.test(m) &&
          /Google/.test(navigator.vendor) &&
          parseInt(m.match(/chrome\/(\d+)\./)[1], 10)),
        h = (r.env.ios = /(ipod|iphone|ipad)/.test(m));
      (r.env.safari = /safari/.test(m) && !O && !h),
        b &&
          d.on("touchstart mousedown", function (e) {
            i = e.target;
          }),
        (r.validClick = b
          ? function (e) {
              return e === i || s.contains(e, i);
            }
          : function () {
              return !0;
            });
      var v = "resize.webflow orientationchange.webflow load.webflow",
        _ = "scroll.webflow " + v;
      function L(e, t) {
        var n = [],
          i = {};
        return (
          (i.up = p.throttle(function (e) {
            p.each(n, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, i.up),
          (i.on = function (e) {
            "function" == typeof e && (p.contains(n, e) || n.push(e));
          }),
          (i.off = function (e) {
            if (!arguments.length) {
              n = [];
              return;
            }
            n = p.filter(n, function (t) {
              return t !== e;
            });
          }),
          i
        );
      }
      function R(e) {
        f(e) && e();
      }
      function S() {
        a && (a.reject(), u.off("load", a.resolve)),
          (a = new s.Deferred()),
          u.on("load", a.resolve);
      }
      (r.resize = L(u, v)),
        (r.scroll = L(u, _)),
        (r.redraw = L()),
        (r.location = function (e) {
          window.location = e;
        }),
        r.env() && (r.location = function () {}),
        (r.ready = function () {
          (I = !0),
            g ? ((g = !1), p.each(o, T)) : p.each(c, R),
            p.each(l, R),
            r.resize.up();
        }),
        (r.load = function (e) {
          a.then(e);
        }),
        (r.destroy = function (e) {
          (e = e || {}),
            (g = !0),
            u.triggerHandler("__wf_destroy"),
            null != e.domready && (I = e.domready),
            p.each(o, y),
            r.resize.off(),
            r.scroll.off(),
            r.redraw.off(),
            (c = []),
            (l = []),
            "pending" === a.state() && S();
        }),
        s(r.ready),
        S(),
        (e.exports = window.Webflow = r);
    },
    7624: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "links",
        (e.exports = function (e, t) {
          var n,
            a,
            r,
            o = {},
            c = e(window),
            l = i.env(),
            s = window.location,
            u = document.createElement("a"),
            d = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;
          function E() {
            var e = c.scrollTop(),
              n = c.height();
            t.each(a, function (t) {
              if (!t.link.attr("hreflang")) {
                var i = t.link,
                  a = t.sec,
                  r = a.offset().top,
                  o = a.outerHeight(),
                  c = 0.5 * n,
                  l = a.is(":visible") && r + o - c >= e && r + c <= e + n;
                t.active !== l && ((t.active = l), I(i, d, l));
              }
            });
          }
          function I(e, t, n) {
            var i = e.hasClass(t);
            (!n || !i) && (n || i) && (n ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (o.ready =
              o.design =
              o.preview =
                function () {
                  (n = l && i.env("design")),
                    (r = i.env("slug") || s.pathname || ""),
                    i.scroll.off(E),
                    (a = []);
                  for (var t = document.links, o = 0; o < t.length; ++o)
                    !(function (t) {
                      if (!t.getAttribute("hreflang")) {
                        var i =
                          (n && t.getAttribute("href-disabled")) ||
                          t.getAttribute("href");
                        if (((u.href = i), !(i.indexOf(":") >= 0))) {
                          var o = e(t);
                          if (
                            u.hash.length > 1 &&
                            u.host + u.pathname === s.host + s.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
                            var c = e(u.hash);
                            c.length && a.push({ link: o, sec: c, active: !1 });
                            return;
                          }
                          "#" !== i &&
                            "" !== i &&
                            I(
                              o,
                              d,
                              (!l && u.href === s.href) ||
                                i === r ||
                                (f.test(i) && p.test(r))
                            );
                        }
                      }
                    })(t[o]);
                  a.length && (i.scroll.on(E), E());
                }),
            o
          );
        })
      );
    },
    286: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            n = window.location,
            a = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            r = e(window),
            o = e(document),
            c = e(document.body),
            l =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            s = i.env("editor") ? ".w-editor-body" : "body",
            u =
              "header, " +
              s +
              " > .header, " +
              s +
              " > .w-nav:not([data-no-scroll])",
            d = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + d + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            )
          );
          var E = /^#[a-zA-Z0-9][\w:.-]*$/;
          let I =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function g(e, t) {
            var n;
            switch (t) {
              case "add":
                (n = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (n = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function T(t) {
            var o = t.currentTarget;
            if (
              !(
                i.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(o.className))
              )
            ) {
              var s =
                E.test(o.hash) && o.host + o.pathname === n.host + n.pathname
                  ? o.hash
                  : "";
              if ("" !== s) {
                var d,
                  f = e(s);
                f.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (d = s),
                  n.hash !== d &&
                    a &&
                    a.pushState &&
                    !(i.env.chrome && "file:" === n.protocol) &&
                    (a.state && a.state.hash) !== d &&
                    a.pushState({ hash: d }, "", d),
                  window.setTimeout(function () {
                    !(function (t, n) {
                      var i = r.scrollTop(),
                        a = (function (t) {
                          var n = e(u),
                            i =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            a = t.offset().top - i;
                          if ("mid" === t.data("scroll")) {
                            var o = r.height() - i,
                              c = t.outerHeight();
                            c < o && (a -= Math.round((o - c) / 2));
                          }
                          return a;
                        })(t);
                      if (i !== a) {
                        var o = (function (e, t, n) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion"
                                ) ||
                              I.matches
                            )
                              return 0;
                            var i = 1;
                            return (
                              c.add(e).each(function (e, t) {
                                var n = parseFloat(
                                  t.getAttribute("data-scroll-time")
                                );
                                !isNaN(n) && n >= 0 && (i = n);
                              }),
                              (472.143 * Math.log(Math.abs(t - n) + 125) -
                                2e3) *
                                i
                            );
                          })(t, i, a),
                          s = Date.now(),
                          d = function () {
                            var e,
                              t,
                              r,
                              c,
                              u,
                              f = Date.now() - s;
                            window.scroll(
                              0,
                              ((e = i),
                              (t = a),
                              (r = f) > (c = o)
                                ? t
                                : e +
                                  (t - e) *
                                    ((u = r / c) < 0.5
                                      ? 4 * u * u * u
                                      : (u - 1) * (2 * u - 2) * (2 * u - 2) +
                                        1))
                            ),
                              f <= o ? l(d) : "function" == typeof n && n();
                          };
                        l(d);
                      }
                    })(f, function () {
                      g(f, "add"),
                        f.get(0).focus({ preventScroll: !0 }),
                        g(f, "remove");
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
              o.on(n, f, T),
                o.on(e, d, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild);
            },
          };
        })
      );
    },
    3695: function (e, t, n) {
      "use strict";
      n(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            n = window.getSelection;
          function i(t) {
            var i,
              a,
              r = !1,
              o = !1,
              c = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function l(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((r = !0),
                t ? ((o = !0), (i = t[0].clientX)) : (i = e.clientX),
                (a = i));
            }
            function s(t) {
              if (r) {
                if (o && "mousemove" === t.type) {
                  t.preventDefault(), t.stopPropagation();
                  return;
                }
                var i,
                  l,
                  s,
                  u,
                  f = t.touches,
                  p = f ? f[0].clientX : t.clientX,
                  E = p - a;
                (a = p),
                  Math.abs(E) > c &&
                    n &&
                    "" === String(n()) &&
                    ((i = "swipe"),
                    (l = t),
                    (s = { direction: E > 0 ? "right" : "left" }),
                    (u = e.Event(i, { originalEvent: l })),
                    e(l.target).trigger(u, s),
                    d());
              }
            }
            function u(e) {
              if (r && ((r = !1), o && "mouseup" === e.type)) {
                e.preventDefault(), e.stopPropagation(), (o = !1);
                return;
              }
            }
            function d() {
              r = !1;
            }
            t.addEventListener("touchstart", l, !1),
              t.addEventListener("touchmove", s, !1),
              t.addEventListener("touchend", u, !1),
              t.addEventListener("touchcancel", d, !1),
              t.addEventListener("mousedown", l, !1),
              t.addEventListener("mousemove", s, !1),
              t.addEventListener("mouseup", u, !1),
              t.addEventListener("mouseout", d, !1),
              (this.destroy = function () {
                t.removeEventListener("touchstart", l, !1),
                  t.removeEventListener("touchmove", s, !1),
                  t.removeEventListener("touchend", u, !1),
                  t.removeEventListener("touchcancel", d, !1),
                  t.removeEventListener("mousedown", l, !1),
                  t.removeEventListener("mousemove", s, !1),
                  t.removeEventListener("mouseup", u, !1),
                  t.removeEventListener("mouseout", d, !1),
                  (t = null);
              });
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new i(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        })
      );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        actionListPlaybackChanged: function () {
          return H;
        },
        animationFrameChanged: function () {
          return G;
        },
        clearRequested: function () {
          return V;
        },
        elementStateChanged: function () {
          return j;
        },
        eventListenerAdded: function () {
          return U;
        },
        eventStateChanged: function () {
          return D;
        },
        instanceAdded: function () {
          return B;
        },
        instanceRemoved: function () {
          return W;
        },
        instanceStarted: function () {
          return X;
        },
        mediaQueriesDefined: function () {
          return Y;
        },
        parameterChanged: function () {
          return k;
        },
        playbackRequested: function () {
          return F;
        },
        previewRequested: function () {
          return M;
        },
        rawDataImported: function () {
          return N;
        },
        sessionInitialized: function () {
          return A;
        },
        sessionStarted: function () {
          return C;
        },
        sessionStopped: function () {
          return w;
        },
        stopRequested: function () {
          return P;
        },
        testFrameRendered: function () {
          return x;
        },
        viewportWidthChanged: function () {
          return z;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(7087),
        o = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: c,
          IX2_SESSION_INITIALIZED: l,
          IX2_SESSION_STARTED: s,
          IX2_SESSION_STOPPED: u,
          IX2_PREVIEW_REQUESTED: d,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: E,
          IX2_EVENT_LISTENER_ADDED: I,
          IX2_TEST_FRAME_RENDERED: g,
          IX2_EVENT_STATE_CHANGED: T,
          IX2_ANIMATION_FRAME_CHANGED: y,
          IX2_PARAMETER_CHANGED: m,
          IX2_INSTANCE_ADDED: b,
          IX2_INSTANCE_STARTED: O,
          IX2_INSTANCE_REMOVED: h,
          IX2_ELEMENT_STATE_CHANGED: v,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: _,
          IX2_VIEWPORT_WIDTH_CHANGED: L,
          IX2_MEDIA_QUERIES_DEFINED: R,
        } = r.IX2EngineActionTypes,
        { reifyState: S } = o.IX2VanillaUtils,
        N = (e) => ({ type: c, payload: { ...S(e) } }),
        A = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: l,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        C = () => ({ type: s }),
        w = () => ({ type: u }),
        M = ({ rawData: e, defer: t }) => ({
          type: d,
          payload: { defer: t, rawData: e },
        }),
        F = ({
          actionTypeId: e = r.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: i,
          allowEvents: a,
          immediate: o,
          testManual: c,
          verbose: l,
          rawData: s,
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: c,
            eventId: i,
            allowEvents: a,
            immediate: o,
            verbose: l,
            rawData: s,
          },
        }),
        P = (e) => ({ type: p, payload: { actionListId: e } }),
        V = () => ({ type: E }),
        U = (e, t) => ({ type: I, payload: { target: e, listenerParams: t } }),
        x = (e = 1) => ({ type: g, payload: { step: e } }),
        D = (e, t) => ({ type: T, payload: { stateKey: e, newState: t } }),
        G = (e, t) => ({ type: y, payload: { now: e, parameters: t } }),
        k = (e, t) => ({ type: m, payload: { key: e, value: t } }),
        B = (e) => ({ type: b, payload: { ...e } }),
        X = (e, t) => ({ type: O, payload: { instanceId: e, time: t } }),
        W = (e) => ({ type: h, payload: { instanceId: e } }),
        j = (e, t, n, i) => ({
          type: v,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: i },
        }),
        H = ({ actionListId: e, isPlaying: t }) => ({
          type: _,
          payload: { actionListId: e, isPlaying: t },
        }),
        z = ({ width: e, mediaQueries: t }) => ({
          type: L,
          payload: { width: e, mediaQueries: t },
        }),
        Y = () => ({ type: R });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          actions: function () {
            return s;
          },
          destroy: function () {
            return E;
          },
          init: function () {
            return p;
          },
          setEnv: function () {
            return f;
          },
          store: function () {
            return d;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = n(9516),
        c = (i = n(7243)) && i.__esModule ? i : { default: i },
        l = n(1970),
        s = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = u(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(3946));
      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      let d = (0, o.createStore)(c.default);
      function f(e) {
        e() && (0, l.observeRequests)(d);
      }
      function p(e) {
        E(), (0, l.startEngine)({ store: d, rawData: e, allowEvents: !0 });
      }
      function E() {
        (0, l.stopEngine)(d);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        elementContains: function () {
          return m;
        },
        getChildElements: function () {
          return O;
        },
        getClosestElement: function () {
          return v;
        },
        getProperty: function () {
          return E;
        },
        getQuerySelector: function () {
          return g;
        },
        getRefType: function () {
          return _;
        },
        getSiblingElements: function () {
          return h;
        },
        getStyle: function () {
          return p;
        },
        getValidDocument: function () {
          return T;
        },
        isSiblingNode: function () {
          return b;
        },
        matchSelector: function () {
          return I;
        },
        queryDocument: function () {
          return y;
        },
        setStyle: function () {
          return f;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(9468),
        o = n(7087),
        { ELEMENT_MATCHES: c } = r.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: l,
          HTML_ELEMENT: s,
          PLAIN_OBJECT: u,
          WF_PAGE: d,
        } = o.IX2EngineConstants;
      function f(e, t, n) {
        e.style[t] = n;
      }
      function p(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }
      function E(e, t) {
        return e[t];
      }
      function I(e) {
        return (t) => t[c](e);
      }
      function g({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(l)) {
            let n = e.split(l),
              i = n[0];
            if (((t = n[1]), i !== document.documentElement.getAttribute(d)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function T(e) {
        return null == e || e === document.documentElement.getAttribute(d)
          ? document
          : null;
      }
      function y(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }
      function m(e, t) {
        return e.contains(t);
      }
      function b(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function O(e) {
        let t = [];
        for (let n = 0, { length: i } = e || []; n < i; n++) {
          let { children: i } = e[n],
            { length: a } = i;
          if (a) for (let e = 0; e < a; e++) t.push(i[e]);
        }
        return t;
      }
      function h(e = []) {
        let t = [],
          n = [];
        for (let i = 0, { length: a } = e; i < a; i++) {
          let { parentNode: a } = e[i];
          if (!a || !a.children || !a.children.length || -1 !== n.indexOf(a))
            continue;
          n.push(a);
          let r = a.firstElementChild;
          for (; null != r; )
            -1 === e.indexOf(r) && t.push(r), (r = r.nextElementSibling);
        }
        return t;
      }
      let v = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[c] && n[c](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function _(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? s
            : u
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        observeRequests: function () {
          return K;
        },
        startActionGroup: function () {
          return eE;
        },
        startEngine: function () {
          return ei;
        },
        stopActionGroup: function () {
          return ep;
        },
        stopAllActionGroups: function () {
          return ef;
        },
        stopEngine: function () {
          return ea;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = y(n(9777)),
        o = y(n(4738)),
        c = y(n(4659)),
        l = y(n(3452)),
        s = y(n(6633)),
        u = y(n(3729)),
        d = y(n(2397)),
        f = y(n(5082)),
        p = n(7087),
        E = n(9468),
        I = n(3946),
        g = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = m(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(5012)),
        T = y(n(8955));
      function y(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function m(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (m = function (e) {
          return e ? n : t;
        })(e);
      }
      let b = Object.keys(p.QuickEffectIds),
        O = (e) => b.includes(e),
        {
          COLON_DELIMITER: h,
          BOUNDARY_SELECTOR: v,
          HTML_ELEMENT: _,
          RENDER_GENERAL: L,
          W_MOD_IX: R,
        } = p.IX2EngineConstants,
        {
          getAffectedElements: S,
          getElementId: N,
          getDestinationValues: A,
          observeStore: C,
          getInstanceId: w,
          renderHTMLElement: M,
          clearAllStyles: F,
          getMaxDurationItemIndex: P,
          getComputedStyle: V,
          getInstanceOrigin: U,
          reduceListToGroup: x,
          shouldNamespaceEventParameter: D,
          getNamespacedParameterId: G,
          shouldAllowMediaQuery: k,
          cleanupHTMLElement: B,
          clearObjectCache: X,
          stringifyTarget: W,
          mediaQueriesEqual: j,
          shallowEqual: H,
        } = E.IX2VanillaUtils,
        {
          isPluginType: z,
          createPluginInstance: Y,
          getPluginDuration: Q,
        } = E.IX2VanillaPlugins,
        $ = navigator.userAgent,
        q = $.match(/iPad/i) || $.match(/iPhone/);
      function K(e) {
        C({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
          C({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee,
          }),
          C({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          C({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: en });
      }
      function Z({ rawData: e, defer: t }, n) {
        let i = () => {
          ei({ store: n, rawData: e, allowEvents: !0 }), J();
        };
        t ? setTimeout(i, 0) : i();
      }
      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function ee(e, t) {
        let {
            actionTypeId: n,
            actionListId: i,
            actionItemId: a,
            eventId: r,
            allowEvents: o,
            immediate: c,
            testManual: l,
            verbose: s = !0,
          } = e,
          { rawData: u } = e;
        if (i && a && u && c) {
          let e = u.actionLists[i];
          e && (u = x({ actionList: e, actionItemId: a, rawData: u }));
        }
        if (
          (ei({ store: t, rawData: u, allowEvents: o, testManual: l }),
          (i && n === p.ActionTypeConsts.GENERAL_START_ACTION) || O(n))
        ) {
          ep({ store: t, actionListId: i }),
            ed({ store: t, actionListId: i, eventId: r });
          let e = eE({
            store: t,
            eventId: r,
            actionListId: i,
            immediate: c,
            verbose: s,
          });
          s &&
            e &&
            t.dispatch(
              (0, I.actionListPlaybackChanged)({
                actionListId: i,
                isPlaying: !c,
              })
            );
        }
      }
      function et({ actionListId: e }, t) {
        e ? ep({ store: t, actionListId: e }) : ef({ store: t }), ea(t);
      }
      function en(e, t) {
        ea(t), F({ store: t, elementApi: g });
      }
      function ei({ store: e, rawData: t, allowEvents: n, testManual: i }) {
        let { ixSession: a } = e.getState();
        if ((t && e.dispatch((0, I.rawDataImported)(t)), !a.active)) {
          (e.dispatch(
            (0, I.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(v),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          n) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: n } = t;
              ec(e),
                (0, d.default)(n, (t, n) => {
                  let i = T.default[n];
                  if (!i)
                    return void console.warn(
                      `IX2 event type not configured: ${n}`
                    );
                  !(function ({ logic: e, store: t, events: n }) {
                    !(function (e) {
                      if (!q) return;
                      let t = {},
                        n = "";
                      for (let i in e) {
                        let { eventTypeId: a, target: r } = e[i],
                          o = g.getQuerySelector(r);
                        t[o] ||
                          ((a === p.EventTypeConsts.MOUSE_CLICK ||
                            a === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[o] = !0),
                            (n +=
                              o +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (n) {
                        let e = document.createElement("style");
                        (e.textContent = n), document.body.appendChild(e);
                      }
                    })(n);
                    let { types: i, handler: a } = e,
                      { ixData: l } = t.getState(),
                      { actionLists: s } = l,
                      u = el(n, eu);
                    if (!(0, c.default)(u)) return;
                    (0, d.default)(u, (e, i) => {
                      let a = n[i],
                        {
                          action: c,
                          id: u,
                          mediaQueries: d = l.mediaQueryKeys,
                        } = a,
                        { actionListId: f } = c.config;
                      j(d, l.mediaQueryKeys) ||
                        t.dispatch((0, I.mediaQueriesDefined)()),
                        c.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(a.config)
                            ? a.config
                            : [a.config]
                          ).forEach((n) => {
                            let { continuousParameterGroupId: i } = n,
                              a = (0, o.default)(
                                s,
                                `${f}.continuousParameterGroups`,
                                []
                              ),
                              c = (0, r.default)(a, ({ id: e }) => e === i),
                              l = (n.smoothing || 0) / 100,
                              d = (n.restingState || 0) / 100;
                            c &&
                              e.forEach((e, i) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: n,
                                  eventId: i,
                                  eventConfig: a,
                                  actionListId: r,
                                  parameterGroup: c,
                                  smoothing: l,
                                  restingValue: s,
                                }) {
                                  let { ixData: u, ixSession: d } =
                                      e.getState(),
                                    { events: f } = u,
                                    E = f[i],
                                    { eventTypeId: I } = E,
                                    T = {},
                                    y = {},
                                    m = [],
                                    { continuousActionGroups: b } = c,
                                    { id: O } = c;
                                  D(I, a) && (O = G(t, O));
                                  let _ =
                                    d.hasBoundaryNodes && n
                                      ? g.getClosestElement(n, v)
                                      : null;
                                  b.forEach((e) => {
                                    let { keyframe: t, actionItems: i } = e;
                                    i.forEach((e) => {
                                      let { actionTypeId: i } = e,
                                        { target: a } = e.config;
                                      if (!a) return;
                                      let r = a.boundaryMode ? _ : null,
                                        o = W(a) + h + i;
                                      if (
                                        ((y[o] = (function (e = [], t, n) {
                                          let i,
                                            a = [...e];
                                          return (
                                            a.some(
                                              (e, n) =>
                                                e.keyframe === t &&
                                                ((i = n), !0)
                                            ),
                                            null == i &&
                                              ((i = a.length),
                                              a.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            a[i].actionItems.push(n),
                                            a
                                          );
                                        })(y[o], t, e)),
                                        !T[o])
                                      ) {
                                        T[o] = !0;
                                        let { config: t } = e;
                                        S({
                                          config: t,
                                          event: E,
                                          eventTarget: n,
                                          elementRoot: r,
                                          elementApi: g,
                                        }).forEach((e) => {
                                          m.push({ element: e, key: o });
                                        });
                                      }
                                    });
                                  }),
                                    m.forEach(({ element: t, key: n }) => {
                                      let a = y[n],
                                        c = (0, o.default)(
                                          a,
                                          "[0].actionItems[0]",
                                          {}
                                        ),
                                        { actionTypeId: u } = c,
                                        d = (
                                          u === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                c.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : z(u)
                                        )
                                          ? Y(u)?.(t, c)
                                          : null,
                                        f = A(
                                          {
                                            element: t,
                                            actionItem: c,
                                            elementApi: g,
                                          },
                                          d
                                        );
                                      eI({
                                        store: e,
                                        element: t,
                                        eventId: i,
                                        actionListId: r,
                                        actionItem: c,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: O,
                                        actionGroups: a,
                                        smoothing: l,
                                        restingValue: s,
                                        pluginInstance: d,
                                      });
                                    });
                                })({
                                  store: t,
                                  eventStateKey: u + h + i,
                                  eventTarget: e,
                                  eventId: u,
                                  eventConfig: n,
                                  actionListId: f,
                                  parameterGroup: c,
                                  smoothing: l,
                                  restingValue: d,
                                });
                              });
                          }),
                        (c.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_START_ACTION ||
                          O(c.actionTypeId)) &&
                          ed({ store: t, actionListId: f, eventId: u });
                    });
                    let E = (e) => {
                        let { ixSession: i } = t.getState();
                        es(u, (r, o, c) => {
                          let s = n[o],
                            u = i.eventState[c],
                            { action: d, mediaQueries: f = l.mediaQueryKeys } =
                              s;
                          if (!k(f, i.mediaQueryKey)) return;
                          let E = (n = {}) => {
                            let i = a(
                              {
                                store: t,
                                element: r,
                                event: s,
                                eventConfig: n,
                                nativeEvent: e,
                                eventStateKey: c,
                              },
                              u
                            );
                            H(i, u) ||
                              t.dispatch((0, I.eventStateChanged)(c, i));
                          };
                          d.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(s.config)
                                ? s.config
                                : [s.config]
                              ).forEach(E)
                            : E();
                        });
                      },
                      T = (0, f.default)(E, 12),
                      y = ({ target: e = document, types: n, throttle: i }) => {
                        n.split(" ")
                          .filter(Boolean)
                          .forEach((n) => {
                            let a = i ? T : E;
                            e.addEventListener(n, a),
                              t.dispatch((0, I.eventListenerAdded)(e, [n, a]));
                          });
                      };
                    Array.isArray(i)
                      ? i.forEach(y)
                      : "string" == typeof i && y(e);
                  })({ logic: i, store: e, events: t });
                });
              let { ixSession: i } = e.getState();
              i.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    ec(e);
                  };
                  eo.forEach((n) => {
                    window.addEventListener(n, t),
                      e.dispatch((0, I.eventListenerAdded)(window, [n, t]));
                  }),
                    t();
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(R) && (e.className += ` ${R}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              C({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  ea(e),
                    F({ store: e, elementApi: g }),
                    ei({ store: e, allowEvents: !0 }),
                    J();
                },
              }));
          e.dispatch((0, I.sessionStarted)()),
            (function (e, t) {
              let n = (i) => {
                let { ixSession: a, ixParameters: r } = e.getState();
                if (a.active)
                  if ((e.dispatch((0, I.animationFrameChanged)(i, r)), t)) {
                    let t = C({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        n(e), t();
                      },
                    });
                  } else requestAnimationFrame(n);
              };
              n(window.performance.now());
            })(e, i);
        }
      }
      function ea(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          n.forEach(er), X(), e.dispatch((0, I.sessionStopped)());
        }
      }
      function er({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let eo = ["resize", "orientationchange"];
      function ec(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          i = window.innerWidth;
        if (i !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, I.viewportWidthChanged)({ width: i, mediaQueries: t })
          );
        }
      }
      let el = (e, t) => (0, l.default)((0, u.default)(e, t), s.default),
        es = (e, t) => {
          (0, d.default)(e, (e, n) => {
            e.forEach((e, i) => {
              t(e, n, n + h + i);
            });
          });
        },
        eu = (e) =>
          S({
            config: { target: e.target, targets: e.targets },
            elementApi: g,
          });
      function ed({ store: e, actionListId: t, eventId: n }) {
        let { ixData: i, ixSession: a } = e.getState(),
          { actionLists: r, events: c } = i,
          l = c[n],
          s = r[t];
        if (s && s.useFirstGroupAsInitialState) {
          let r = (0, o.default)(s, "actionItemGroups[0].actionItems", []);
          if (
            !k(
              (0, o.default)(l, "mediaQueries", i.mediaQueryKeys),
              a.mediaQueryKey
            )
          )
            return;
          r.forEach((i) => {
            let { config: a, actionTypeId: r } = i,
              o = S({
                config:
                  a?.target?.useEventTarget === !0 &&
                  a?.target?.objectId == null
                    ? { target: l.target, targets: l.targets }
                    : a,
                event: l,
                elementApi: g,
              }),
              c = z(r);
            o.forEach((a) => {
              let o = c ? Y(r)?.(a, i) : null;
              eI({
                destination: A({ element: a, actionItem: i, elementApi: g }, o),
                immediate: !0,
                store: e,
                element: a,
                eventId: n,
                actionItem: i,
                actionListId: t,
                pluginInstance: o,
              });
            });
          });
        }
      }
      function ef({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, d.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: i } = t;
            eg(t, e),
              i &&
                e.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function ep({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: a,
      }) {
        let { ixInstances: r, ixSession: c } = e.getState(),
          l = c.hasBoundaryNodes && n ? g.getClosestElement(n, v) : null;
        (0, d.default)(r, (n) => {
          let r = (0, o.default)(n, "actionItem.config.target.boundaryMode"),
            c = !i || n.eventStateKey === i;
          if (n.actionListId === a && n.eventId === t && c) {
            if (l && r && !g.elementContains(l, n.element)) return;
            eg(n, e),
              n.verbose &&
                e.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: a,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function eE({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: a,
        groupIndex: r = 0,
        immediate: c,
        verbose: l,
      }) {
        let { ixData: s, ixSession: u } = e.getState(),
          { events: d } = s,
          f = d[t] || {},
          { mediaQueries: p = s.mediaQueryKeys } = f,
          { actionItemGroups: E, useFirstGroupAsInitialState: I } = (0,
          o.default)(s, `actionLists.${a}`, {});
        if (!E || !E.length) return !1;
        r >= E.length && (0, o.default)(f, "config.loop") && (r = 0),
          0 === r && I && r++;
        let T =
            (0 === r || (1 === r && I)) && O(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          y = (0, o.default)(E, [r, "actionItems"], []);
        if (!y.length || !k(p, u.mediaQueryKey)) return !1;
        let m = u.hasBoundaryNodes && n ? g.getClosestElement(n, v) : null,
          b = P(y),
          h = !1;
        return (
          y.forEach((o, s) => {
            let { config: u, actionTypeId: d } = o,
              p = z(d),
              { target: E } = u;
            E &&
              S({
                config: u,
                event: f,
                eventTarget: n,
                elementRoot: E.boundaryMode ? m : null,
                elementApi: g,
              }).forEach((u, f) => {
                let E = p ? Y(d)?.(u, o) : null,
                  I = p ? Q(d)(u, o) : null;
                h = !0;
                let y = V({ element: u, actionItem: o }),
                  m = A({ element: u, actionItem: o, elementApi: g }, E);
                eI({
                  store: e,
                  element: u,
                  actionItem: o,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: i,
                  actionListId: a,
                  groupIndex: r,
                  isCarrier: b === s && 0 === f,
                  computedStyle: y,
                  destination: m,
                  immediate: c,
                  verbose: l,
                  pluginInstance: E,
                  pluginDuration: I,
                  instanceDelay: T,
                });
              });
          }),
          h
        );
      }
      function eI(e) {
        let t,
          { store: n, computedStyle: i, ...a } = e,
          {
            element: r,
            actionItem: o,
            immediate: c,
            pluginInstance: l,
            continuous: s,
            restingValue: u,
            eventId: d,
          } = a,
          f = w(),
          { ixElements: E, ixSession: T, ixData: y } = n.getState(),
          m = N(E, r),
          { refState: b } = E[m] || {},
          O = g.getRefType(r),
          h = T.reducedMotion && p.ReducedMotionTypes[o.actionTypeId];
        if (h && s)
          switch (y.events[d]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = u;
              break;
            default:
              t = 0.5;
          }
        let v = U(r, b, i, o, g, l);
        if (
          (n.dispatch(
            (0, I.instanceAdded)({
              instanceId: f,
              elementId: m,
              origin: v,
              refType: O,
              skipMotion: h,
              skipToValue: t,
              ...a,
            })
          ),
          eT(document.body, "ix2-animation-started", f),
          c)
        )
          return void (function (e, t) {
            let { ixParameters: n } = e.getState();
            e.dispatch((0, I.instanceStarted)(t, 0)),
              e.dispatch((0, I.animationFrameChanged)(performance.now(), n));
            let { ixInstances: i } = e.getState();
            ey(i[t], e);
          })(n, f);
        C({ store: n, select: ({ ixInstances: e }) => e[f], onChange: ey }),
          s || n.dispatch((0, I.instanceStarted)(f, T.tick));
      }
      function eg(e, t) {
        eT(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: i } = e,
          { ixElements: a } = t.getState(),
          { ref: r, refType: o } = a[n] || {};
        o === _ && B(r, i, g), t.dispatch((0, I.instanceRemoved)(e.id));
      }
      function eT(e, t, n) {
        let i = document.createEvent("CustomEvent");
        i.initCustomEvent(t, !0, !0, n), e.dispatchEvent(i);
      }
      function ey(e, t) {
        let {
            active: n,
            continuous: i,
            complete: a,
            elementId: r,
            actionItem: o,
            actionTypeId: c,
            renderType: l,
            current: s,
            groupIndex: u,
            eventId: d,
            eventTarget: f,
            eventStateKey: p,
            actionListId: E,
            isCarrier: T,
            styleProp: y,
            verbose: m,
            pluginInstance: b,
          } = e,
          { ixData: O, ixSession: h } = t.getState(),
          { events: v } = O,
          { mediaQueries: R = O.mediaQueryKeys } = v && v[d] ? v[d] : {};
        if (k(R, h.mediaQueryKey) && (i || n || a)) {
          if (s || (l === L && a)) {
            t.dispatch((0, I.elementStateChanged)(r, c, s, o));
            let { ixElements: e } = t.getState(),
              { ref: n, refType: i, refState: a } = e[r] || {},
              u = a && a[c];
            (i === _ || z(c)) && M(n, a, u, d, o, y, g, l, b);
          }
          if (a) {
            if (T) {
              let e = eE({
                store: t,
                eventId: d,
                eventTarget: f,
                eventStateKey: p,
                actionListId: E,
                groupIndex: u + 1,
                verbose: m,
              });
              m &&
                !e &&
                t.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: E,
                    isPlaying: !1,
                  })
                );
            }
            eg(e, t);
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let i;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return ep;
          },
        });
      let a = d(n(5801)),
        r = d(n(4738)),
        o = d(n(3789)),
        c = n(7087),
        l = n(1970),
        s = n(3946),
        u = n(9468);
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: f,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: E,
          MOUSE_UP: I,
          MOUSE_OVER: g,
          MOUSE_OUT: T,
          DROPDOWN_CLOSE: y,
          DROPDOWN_OPEN: m,
          SLIDER_ACTIVE: b,
          SLIDER_INACTIVE: O,
          TAB_ACTIVE: h,
          TAB_INACTIVE: v,
          NAVBAR_CLOSE: _,
          NAVBAR_OPEN: L,
          MOUSE_MOVE: R,
          PAGE_SCROLL_DOWN: S,
          SCROLL_INTO_VIEW: N,
          SCROLL_OUT_OF_VIEW: A,
          PAGE_SCROLL_UP: C,
          SCROLLING_IN_VIEW: w,
          PAGE_FINISH: M,
          ECOMMERCE_CART_CLOSE: F,
          ECOMMERCE_CART_OPEN: P,
          PAGE_START: V,
          PAGE_SCROLL: U,
        } = c.EventTypeConsts,
        x = "COMPONENT_ACTIVE",
        D = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: G } = c.IX2EngineConstants,
        { getNamespacedParameterId: k } = u.IX2VanillaUtils,
        B = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        X = B(({ element: e, nativeEvent: t }) => e === t.target),
        W = B(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        j = (0, a.default)([X, W]),
        H = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: i } = n,
              a = i[t];
            if (a && !ee[a.eventTypeId]) return a;
          }
          return null;
        },
        z = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: i } = n.config;
          return !!H(e, i);
        },
        Y = ({ store: e, event: t, element: n, eventStateKey: i }, a) => {
          let { action: o, id: c } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            d = H(e, u);
          return (
            d &&
              (0, l.stopActionGroup)({
                store: e,
                eventId: u,
                eventTarget: n,
                eventStateKey: u + G + i.split(G)[1],
                actionListId: (0, r.default)(d, "action.config.actionListId"),
              }),
            (0, l.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: n,
              eventStateKey: i,
              actionListId: s,
            }),
            (0, l.startActionGroup)({
              store: e,
              eventId: c,
              eventTarget: n,
              eventStateKey: i,
              actionListId: s,
            }),
            a
          );
        },
        Q = (e, t) => (n, i) => !0 === e(n, i) ? t(n, i) : i,
        $ = { handler: Q(j, Y) },
        q = { ...$, types: [x, D].join(" ") },
        K = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        Z = "mouseover mouseout",
        J = { types: K },
        ee = { PAGE_START: V, PAGE_FINISH: M },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, o.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        en = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        ei = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: i, relatedTarget: a } = t,
            r = e.contains(i);
          if ("mouseover" === n && r) return !0;
          let o = e.contains(a);
          return "mouseout" === n && !!r && !!o;
        },
        ea = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: i, clientHeight: a } = et(),
            r = n.scrollOffsetValue,
            o = "PX" === n.scrollOffsetUnit ? r : (a * (r || 0)) / 100;
          return en(t.getBoundingClientRect(), {
            left: 0,
            top: o,
            right: i,
            bottom: a - o,
          });
        },
        er = (e) => (t, n) => {
          let { type: i } = t.nativeEvent,
            a = -1 !== [x, D].indexOf(i) ? i === x : n.isActive,
            r = { ...n, isActive: a };
          return ((!n || r.isActive !== n.isActive) && e(t, r)) || r;
        },
        eo = (e) => (t, n) => {
          let i = { elementHovered: ei(t) };
          return (
            ((n ? i.elementHovered !== n.elementHovered : i.elementHovered) &&
              e(t, i)) ||
            i
          );
        },
        ec =
          (e) =>
          (t, n = {}) => {
            let i,
              a,
              { stiffScrollTop: r, scrollHeight: o, innerHeight: c } = et(),
              {
                event: { config: l, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: d } = l,
              f = o - c,
              p = Number((r / f).toFixed(2));
            if (n && n.percentTop === p) return n;
            let E = ("PX" === d ? u : (c * (u || 0)) / 100) / f,
              I = 0;
            n &&
              ((i = p > n.percentTop),
              (I = (a = n.scrollingDown !== i) ? p : n.anchorTop));
            let g = s === S ? p >= I + E : p <= I - E,
              T = {
                ...n,
                percentTop: p,
                inBounds: g,
                anchorTop: I,
                scrollingDown: i,
              };
            return (n && g && (a || T.inBounds !== n.inBounds) && e(t, T)) || T;
          },
        el = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        es =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let i = { clickCount: (n.clickCount % 2) + 1 };
            return (i.clickCount !== n.clickCount && e(t, i)) || i;
          },
        eu = (e = !0) => ({
          ...q,
          handler: Q(
            e ? j : X,
            er((e, t) => (t.isActive ? $.handler(e, t) : t))
          ),
        }),
        ed = (e = !0) => ({
          ...q,
          handler: Q(
            e ? j : X,
            er((e, t) => (t.isActive ? t : $.handler(e, t)))
          ),
        }),
        ef = {
          ...J,
          handler:
            ((i = (e, t) => {
              let { elementVisible: n } = t,
                { event: i, store: a } = e,
                { ixData: r } = a.getState(),
                { events: o } = r;
              return !o[i.action.config.autoStopEventId] && t.triggered
                ? t
                : (i.eventTypeId === N) === n
                ? (Y(e), { ...t, triggered: !0 })
                : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: ea(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  i(e, n)) ||
                n
              );
            }),
        },
        ep = {
          [b]: eu(),
          [O]: ed(),
          [m]: eu(),
          [y]: ed(),
          [L]: eu(!1),
          [_]: ed(!1),
          [h]: eu(),
          [v]: ed(),
          [P]: { types: "ecommerce-cart-open", handler: Q(j, Y) },
          [F]: { types: "ecommerce-cart-close", handler: Q(j, Y) },
          [f]: {
            types: "click",
            handler: Q(
              j,
              es((e, { clickCount: t }) => {
                z(e) ? 1 === t && Y(e) : Y(e);
              })
            ),
          },
          [p]: {
            types: "click",
            handler: Q(
              j,
              es((e, { clickCount: t }) => {
                2 === t && Y(e);
              })
            ),
          },
          [E]: { ...$, types: "mousedown" },
          [I]: { ...$, types: "mouseup" },
          [g]: {
            types: Z,
            handler: Q(
              j,
              eo((e, t) => {
                t.elementHovered && Y(e);
              })
            ),
          },
          [T]: {
            types: Z,
            handler: Q(
              j,
              eo((e, t) => {
                t.elementHovered || Y(e);
              })
            ),
          },
          [R]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: i,
                eventStateKey: a,
              },
              r = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: o,
                  selectedAxis: l,
                  continuousParameterGroupId: u,
                  reverse: d,
                  restingState: f = 0,
                } = n,
                {
                  clientX: p = r.clientX,
                  clientY: E = r.clientY,
                  pageX: I = r.pageX,
                  pageY: g = r.pageY,
                } = i,
                T = "X_AXIS" === l,
                y = "mouseout" === i.type,
                m = f / 100,
                b = u,
                O = !1;
              switch (o) {
                case c.EventBasedOn.VIEWPORT:
                  m = T
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(E, window.innerHeight) / window.innerHeight;
                  break;
                case c.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: i,
                  } = et();
                  m = T ? Math.min(e + I, n) / n : Math.min(t + g, i) / i;
                  break;
                }
                case c.EventBasedOn.ELEMENT:
                default: {
                  b = k(a, u);
                  let e = 0 === i.type.indexOf("mouse");
                  if (e && !0 !== j({ element: t, nativeEvent: i })) break;
                  let n = t.getBoundingClientRect(),
                    { left: r, top: o, width: c, height: l } = n;
                  if (!e && !el({ left: p, top: E }, n)) break;
                  (O = !0), (m = T ? (p - r) / c : (E - o) / l);
                }
              }
              return (
                y && (m > 0.95 || m < 0.05) && (m = Math.round(m)),
                (o !== c.EventBasedOn.ELEMENT || O || O !== r.elementHovered) &&
                  ((m = d ? 1 - m : m),
                  e.dispatch((0, s.parameterChanged)(b, m))),
                {
                  elementHovered: O,
                  clientX: p,
                  clientY: E,
                  pageX: I,
                  pageY: g,
                }
              );
            },
          },
          [U]: {
            types: K,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: i } = t,
                { scrollTop: a, scrollHeight: r, clientHeight: o } = et(),
                c = a / (r - o);
              (c = i ? 1 - c : c), e.dispatch((0, s.parameterChanged)(n, c));
            },
          },
          [w]: {
            types: K,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: i },
              a = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: r,
                  scrollTop: o,
                  scrollWidth: l,
                  scrollHeight: u,
                  clientHeight: d,
                } = et(),
                {
                  basedOn: f,
                  selectedAxis: p,
                  continuousParameterGroupId: E,
                  startsEntering: I,
                  startsExiting: g,
                  addEndOffset: T,
                  addStartOffset: y,
                  addOffsetValue: m = 0,
                  endOffsetValue: b = 0,
                } = n;
              if (f === c.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === p ? r / l : o / u;
                return (
                  e !== a.scrollPercent &&
                    t.dispatch((0, s.parameterChanged)(E, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = k(i, E),
                  r = e.getBoundingClientRect(),
                  o = (y ? m : 0) / 100,
                  c = (T ? b : 0) / 100;
                (o = I ? o : 1 - o), (c = g ? c : 1 - c);
                let l = r.top + Math.min(r.height * o, d),
                  f = Math.min(d + (r.top + r.height * c - l), u),
                  p = Math.min(Math.max(0, d - l), f) / f;
                return (
                  p !== a.scrollPercent &&
                    t.dispatch((0, s.parameterChanged)(n, p)),
                  { scrollPercent: p }
                );
              }
            },
          },
          [N]: ef,
          [A]: ef,
          [S]: {
            ...J,
            handler: ec((e, t) => {
              t.scrollingDown && Y(e);
            }),
          },
          [C]: {
            ...J,
            handler: ec((e, t) => {
              t.scrollingDown || Y(e);
            }),
          },
          [M]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Q(X, (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return n.finished && !(t && t.finshed) && Y(e), n;
            }),
          },
          [V]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Q(X, (e, t) => (t || Y(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: i } = n(7087).IX2EngineActionTypes,
        a = (e = Object.freeze({}), t) =>
          t.type === i ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return O;
          },
        });
      let i = n(7087),
        a = n(9468),
        r = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_STOPPED: c,
          IX2_INSTANCE_ADDED: l,
          IX2_INSTANCE_STARTED: s,
          IX2_INSTANCE_REMOVED: u,
          IX2_ANIMATION_FRAME_CHANGED: d,
        } = i.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: E,
        } = a.IX2EasingUtils,
        { RENDER_GENERAL: I } = i.IX2EngineConstants,
        {
          getItemConfigByKey: g,
          getRenderType: T,
          getStyleProp: y,
        } = a.IX2VanillaUtils,
        m = (e, t) => {
          let n,
            i,
            a,
            o,
            {
              position: c,
              parameterId: l,
              actionGroups: s,
              destinationKeys: u,
              smoothing: d,
              restingValue: E,
              actionTypeId: I,
              customEasingFn: T,
              skipMotion: y,
              skipToValue: m,
            } = e,
            { parameters: b } = t.payload,
            O = Math.max(1 - d, 0.01),
            h = b[l];
          null == h && ((O = 1), (h = E));
          let v = f((Math.max(h, 0) || 0) - c),
            _ = y ? m : f(c + v * O),
            L = 100 * _;
          if (_ === c && e.current) return e;
          for (let e = 0, { length: t } = s; e < t; e++) {
            let { keyframe: t, actionItems: r } = s[e];
            if ((0 === e && (n = r[0]), L >= t)) {
              n = r[0];
              let c = s[e + 1],
                l = c && L !== t;
              (i = l ? c.actionItems[0] : null),
                l && ((a = t / 100), (o = (c.keyframe - t) / 100));
            }
          }
          let R = {};
          if (n && !i)
            for (let e = 0, { length: t } = u; e < t; e++) {
              let t = u[e];
              R[t] = g(I, t, n.config);
            }
          else if (n && i && void 0 !== a && void 0 !== o) {
            let e = (_ - a) / o,
              t = p(n.config.easing, e, T);
            for (let e = 0, { length: a } = u; e < a; e++) {
              let a = u[e],
                r = g(I, a, n.config),
                o = (g(I, a, i.config) - r) * t + r;
              R[a] = o;
            }
          }
          return (0, r.merge)(e, { position: _, current: R });
        },
        b = (e, t) => {
          let {
              active: n,
              origin: i,
              start: a,
              immediate: o,
              renderType: c,
              verbose: l,
              actionItem: s,
              destination: u,
              destinationKeys: d,
              pluginDuration: E,
              instanceDelay: g,
              customEasingFn: T,
              skipMotion: y,
            } = e,
            m = s.config.easing,
            { duration: b, delay: O } = s.config;
          null != E && (b = E),
            (O = null != g ? g : O),
            c === I ? (b = 0) : (o || y) && (b = O = 0);
          let { now: h } = t.payload;
          if (n && i) {
            let t = h - (a + O);
            if (l) {
              let t = b + O,
                n = f(Math.min(Math.max(0, (h - a) / t), 1));
              e = (0, r.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / b), 1)),
              o = p(m, n, T),
              c = {},
              s = null;
            return (
              d.length &&
                (s = d.reduce((e, t) => {
                  let n = u[t],
                    a = parseFloat(i[t]) || 0,
                    r = parseFloat(n) - a;
                  return (e[t] = r * o + a), e;
                }, {})),
              (c.current = s),
              (c.position = n),
              1 === n && ((c.active = !1), (c.complete = !0)),
              (0, r.merge)(e, c)
            );
          }
          return e;
        },
        O = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case o:
              return t.payload.ixInstances || Object.freeze({});
            case c:
              return Object.freeze({});
            case l: {
              let {
                  instanceId: n,
                  elementId: i,
                  actionItem: a,
                  eventId: o,
                  eventTarget: c,
                  eventStateKey: l,
                  actionListId: s,
                  groupIndex: u,
                  isCarrier: d,
                  origin: f,
                  destination: p,
                  immediate: I,
                  verbose: g,
                  continuous: m,
                  parameterId: b,
                  actionGroups: O,
                  smoothing: h,
                  restingValue: v,
                  pluginInstance: _,
                  pluginDuration: L,
                  instanceDelay: R,
                  skipMotion: S,
                  skipToValue: N,
                } = t.payload,
                { actionTypeId: A } = a,
                C = T(A),
                w = y(C, A),
                M = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e]
                ),
                { easing: F } = a.config;
              return (0, r.set)(e, n, {
                id: n,
                elementId: i,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: M,
                immediate: I,
                verbose: g,
                current: null,
                actionItem: a,
                actionTypeId: A,
                eventId: o,
                eventTarget: c,
                eventStateKey: l,
                actionListId: s,
                groupIndex: u,
                renderType: C,
                isCarrier: d,
                styleProp: w,
                continuous: m,
                parameterId: b,
                actionGroups: O,
                smoothing: h,
                restingValue: v,
                pluginInstance: _,
                pluginDuration: L,
                instanceDelay: R,
                skipMotion: S,
                skipToValue: N,
                customEasingFn:
                  Array.isArray(F) && 4 === F.length ? E(F) : void 0,
              });
            }
            case s: {
              let { instanceId: n, time: i } = t.payload;
              return (0, r.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: i,
              });
            }
            case u: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let i = {},
                a = Object.keys(e),
                { length: r } = a;
              for (let t = 0; t < r; t++) {
                let r = a[t];
                r !== n && (i[r] = e[r]);
              }
              return i;
            }
            case d: {
              let n = e,
                i = Object.keys(e),
                { length: a } = i;
              for (let o = 0; o < a; o++) {
                let a = i[o],
                  c = e[a],
                  l = c.continuous ? m : b;
                n = (0, r.set)(n, a, l(c, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: i,
          IX2_SESSION_STOPPED: a,
          IX2_PARAMETER_CHANGED: r,
        } = n(7087).IX2EngineActionTypes,
        o = (e = {}, t) => {
          switch (t.type) {
            case i:
              return t.payload.ixParameters || {};
            case a:
              return {};
            case r: {
              let { key: n, value: i } = t.payload;
              return (e[n] = i), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let i = n(9516),
        a = n(4609),
        r = n(628),
        o = n(5862),
        c = n(9468),
        l = n(7718),
        s = n(1540),
        { ixElements: u } = c.IX2ElementsReducer,
        d = (0, i.combineReducers)({
          ixData: a.ixData,
          ixRequest: r.ixRequest,
          ixSession: o.ixSession,
          ixElements: u,
          ixInstances: l.ixInstances,
          ixParameters: s.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let i = n(7087),
        a = n(1185),
        {
          IX2_PREVIEW_REQUESTED: r,
          IX2_PLAYBACK_REQUESTED: o,
          IX2_STOP_REQUESTED: c,
          IX2_CLEAR_REQUESTED: l,
        } = i.IX2EngineActionTypes,
        s = { preview: {}, playback: {}, stop: {}, clear: {} },
        u = Object.create(null, {
          [r]: { value: "preview" },
          [o]: { value: "playback" },
          [c]: { value: "stop" },
          [l]: { value: "clear" },
        }),
        d = (e = s, t) => {
          if (t.type in u) {
            let n = [u[t.type]];
            return (0, a.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return g;
          },
        });
      let i = n(7087),
        a = n(1185),
        {
          IX2_SESSION_INITIALIZED: r,
          IX2_SESSION_STARTED: o,
          IX2_TEST_FRAME_RENDERED: c,
          IX2_SESSION_STOPPED: l,
          IX2_EVENT_LISTENER_ADDED: s,
          IX2_EVENT_STATE_CHANGED: u,
          IX2_ANIMATION_FRAME_CHANGED: d,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: E,
        } = i.IX2EngineActionTypes,
        I = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        g = (e = I, t) => {
          switch (t.type) {
            case r: {
              let { hasBoundaryNodes: n, reducedMotion: i } = t.payload;
              return (0, a.merge)(e, { hasBoundaryNodes: n, reducedMotion: i });
            }
            case o:
              return (0, a.set)(e, "active", !0);
            case c: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, a.set)(e, "tick", e.tick + n);
            }
            case l:
              return I;
            case d: {
              let {
                payload: { now: n },
              } = t;
              return (0, a.set)(e, "tick", n);
            }
            case s: {
              let n = (0, a.addLast)(e.eventListeners, t.payload);
              return (0, a.set)(e, "eventListeners", n);
            }
            case u: {
              let { stateKey: n, newState: i } = t.payload;
              return (0, a.setIn)(e, ["eventState", n], i);
            }
            case f: {
              let { actionListId: n, isPlaying: i } = t.payload;
              return (0, a.setIn)(e, ["playbackState", n], i);
            }
            case p: {
              let { width: n, mediaQueries: i } = t.payload,
                r = i.length,
                o = null;
              for (let e = 0; e < r; e++) {
                let { key: t, min: a, max: r } = i[e];
                if (n >= a && n <= r) {
                  o = t;
                  break;
                }
              }
              return (0, a.merge)(e, { viewportWidth: n, mediaQueryKey: o });
            }
            case E:
              return (0, a.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return u;
        },
        createPluginInstance: function () {
          return l;
        },
        getPluginConfig: function () {
          return a;
        },
        getPluginDestination: function () {
          return c;
        },
        getPluginDuration: function () {
          return r;
        },
        getPluginOrigin: function () {
          return o;
        },
        renderPlugin: function () {
          return s;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = (e) => e.value,
        r = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        o = (e) => e || { value: 0 },
        c = (e) => ({ value: e.value }),
        l = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return n.stop(), n.setSubframe(!0), n;
        },
        s = (e, t, n) => {
          if (!e) return;
          let i = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * i);
        },
        u = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return l;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return s;
        },
        getPluginOrigin: function () {
          return u;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "--wf-rive-fit",
        r = "--wf-rive-alignment",
        o = (e) => document.querySelector(`[data-w-id="${e}"]`),
        c = () => window.Webflow.require("rive"),
        l = (e, t) => e.value.inputs[t],
        s = () => null,
        u = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: i = {} } = t.config.value;
          for (let e in i) null == i[e] && (n[e] = 0);
          return n;
        },
        d = (e) => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? o(n) : null;
        },
        p = (e, { PLUGIN_RIVE: t }, n) => {
          let i = c();
          if (!i) return;
          let o = i.getInstance(e),
            l = i.rive.StateMachineInputType,
            { name: s, inputs: u = {} } = n.config.value || {};
          function d(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                n(), e?.off("load", t);
              };
              e?.on("load", t);
            }
            function n() {
              let n = e.stateMachineInputs(s);
              if (null != n) {
                if ((e.isPlaying || e.play(s, !1), a in u || r in u)) {
                  let t = e.layout,
                    n = u[a] ?? t.fit,
                    i = u[r] ?? t.alignment;
                  (n !== t.fit || i !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: n, alignment: i }));
                }
                for (let e in u) {
                  if (e === a || e === r) continue;
                  let i = n.find((t) => t.name === e);
                  if (null != i)
                    switch (i.type) {
                      case l.Boolean:
                        null != u[e] && (i.value = !!u[e]);
                        break;
                      case l.Number: {
                        let n = t[e];
                        null != n && (i.value = n);
                        break;
                      }
                      case l.Trigger:
                        u[e] && i.fire();
                    }
                }
              }
            }
          }
          o?.rive ? d(o.rive) : i.setLoadHandler(e, d);
        },
        E = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return u;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = (e) => document.querySelector(`[data-w-id="${e}"]`),
        r = () => window.Webflow.require("spline"),
        o = (e, t) => e.filter((e) => !t.includes(e)),
        c = (e, t) => e.value[t],
        l = () => null,
        s = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        u = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = o(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = s[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = s[t]), e), {});
        },
        d = (e) => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? a(n) : null;
        },
        p = (e, t, n) => {
          let i = r();
          if (!i) return;
          let a = i.getInstance(e),
            o = n.config.target.objectId,
            c = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = o && e.findObjectById(o);
              if (!n) return;
              let { PLUGIN_SPLINE: i } = t;
              null != i.positionX && (n.position.x = i.positionX),
                null != i.positionY && (n.position.y = i.positionY),
                null != i.positionZ && (n.position.z = i.positionZ),
                null != i.rotationX && (n.rotation.x = i.rotationX),
                null != i.rotationY && (n.rotation.y = i.rotationY),
                null != i.rotationZ && (n.rotation.z = i.rotationZ),
                null != i.scaleX && (n.scale.x = i.scaleX),
                null != i.scaleY && (n.scale.y = i.scaleY),
                null != i.scaleZ && (n.scale.z = i.scaleZ);
            };
          a ? c(a.spline) : i.setLoadHandler(e, c);
        },
        E = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return u;
        },
        getPluginConfig: function () {
          return o;
        },
        getPluginDestination: function () {
          return s;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return l;
        },
        renderPlugin: function () {
          return f;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(380),
        o = (e, t) => e.value[t],
        c = () => null,
        l = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            i = t.config.target.objectId,
            a = getComputedStyle(document.documentElement).getPropertyValue(i);
          return null != n.size
            ? { size: parseInt(a, 10) }
            : "%" === n.unit || "-" === n.unit
            ? { size: parseFloat(a) }
            : null != n.red && null != n.green && null != n.blue
            ? (0, r.normalizeColor)(a)
            : void 0;
        },
        s = (e) => e.value,
        u = () => null,
        d = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: i }) =>
              [e, t, n, i].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: i }) =>
              `rgba(${e}, ${t}, ${n}, ${i})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        f = (e, t, n) => {
          let {
              target: { objectId: i },
              value: { unit: a },
            } = n.config,
            r = t.PLUGIN_VARIABLE,
            o = Object.values(d).find((e) => e.match(r, a));
          o && document.documentElement.style.setProperty(i, o.getValue(r, a));
        },
        p = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let i = n(7087),
        a = s(n(7377)),
        r = s(n(2866)),
        o = s(n(2570)),
        c = s(n(1407));
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (l = function (e) {
          return e ? n : t;
        })(e);
      }
      function s(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = l(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
      let u = new Map([
        [i.ActionTypeConsts.PLUGIN_LOTTIE, { ...a }],
        [i.ActionTypeConsts.PLUGIN_SPLINE, { ...r }],
        [i.ActionTypeConsts.PLUGIN_RIVE, { ...o }],
        [i.ActionTypeConsts.PLUGIN_VARIABLE, { ...c }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return b;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return E;
        },
        IX2_CLEAR_REQUESTED: function () {
          return d;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return m;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return f;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_INSTANCE_ADDED: function () {
          return g;
        },
        IX2_INSTANCE_REMOVED: function () {
          return y;
        },
        IX2_INSTANCE_STARTED: function () {
          return T;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return h;
        },
        IX2_PARAMETER_CHANGED: function () {
          return I;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return s;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return l;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return a;
        },
        IX2_SESSION_INITIALIZED: function () {
          return r;
        },
        IX2_SESSION_STARTED: function () {
          return o;
        },
        IX2_SESSION_STOPPED: function () {
          return c;
        },
        IX2_STOP_REQUESTED: function () {
          return u;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return v;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return O;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "IX2_RAW_DATA_IMPORTED",
        r = "IX2_SESSION_INITIALIZED",
        o = "IX2_SESSION_STARTED",
        c = "IX2_SESSION_STOPPED",
        l = "IX2_PREVIEW_REQUESTED",
        s = "IX2_PLAYBACK_REQUESTED",
        u = "IX2_STOP_REQUESTED",
        d = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        E = "IX2_ANIMATION_FRAME_CHANGED",
        I = "IX2_PARAMETER_CHANGED",
        g = "IX2_INSTANCE_ADDED",
        T = "IX2_INSTANCE_STARTED",
        y = "IX2_INSTANCE_REMOVED",
        m = "IX2_ELEMENT_STATE_CHANGED",
        b = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        O = "IX2_VIEWPORT_WIDTH_CHANGED",
        h = "IX2_MEDIA_QUERIES_DEFINED",
        v = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ABSTRACT_NODE: function () {
          return et;
        },
        AUTO: function () {
          return j;
        },
        BACKGROUND: function () {
          return D;
        },
        BACKGROUND_COLOR: function () {
          return x;
        },
        BAR_DELIMITER: function () {
          return Y;
        },
        BORDER_COLOR: function () {
          return G;
        },
        BOUNDARY_SELECTOR: function () {
          return l;
        },
        CHILDREN: function () {
          return Q;
        },
        COLON_DELIMITER: function () {
          return z;
        },
        COLOR: function () {
          return k;
        },
        COMMA_DELIMITER: function () {
          return H;
        },
        CONFIG_UNIT: function () {
          return g;
        },
        CONFIG_VALUE: function () {
          return f;
        },
        CONFIG_X_UNIT: function () {
          return p;
        },
        CONFIG_X_VALUE: function () {
          return s;
        },
        CONFIG_Y_UNIT: function () {
          return E;
        },
        CONFIG_Y_VALUE: function () {
          return u;
        },
        CONFIG_Z_UNIT: function () {
          return I;
        },
        CONFIG_Z_VALUE: function () {
          return d;
        },
        DISPLAY: function () {
          return B;
        },
        FILTER: function () {
          return F;
        },
        FLEX: function () {
          return X;
        },
        FONT_VARIATION_SETTINGS: function () {
          return P;
        },
        HEIGHT: function () {
          return U;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return $;
        },
        IX2_ID_DELIMITER: function () {
          return a;
        },
        OPACITY: function () {
          return M;
        },
        PARENT: function () {
          return K;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return Z;
        },
        RENDER_GENERAL: function () {
          return ei;
        },
        RENDER_PLUGIN: function () {
          return er;
        },
        RENDER_STYLE: function () {
          return ea;
        },
        RENDER_TRANSFORM: function () {
          return en;
        },
        ROTATE_X: function () {
          return R;
        },
        ROTATE_Y: function () {
          return S;
        },
        ROTATE_Z: function () {
          return N;
        },
        SCALE_3D: function () {
          return L;
        },
        SCALE_X: function () {
          return h;
        },
        SCALE_Y: function () {
          return v;
        },
        SCALE_Z: function () {
          return _;
        },
        SIBLINGS: function () {
          return q;
        },
        SKEW: function () {
          return A;
        },
        SKEW_X: function () {
          return C;
        },
        SKEW_Y: function () {
          return w;
        },
        TRANSFORM: function () {
          return T;
        },
        TRANSLATE_3D: function () {
          return O;
        },
        TRANSLATE_X: function () {
          return y;
        },
        TRANSLATE_Y: function () {
          return m;
        },
        TRANSLATE_Z: function () {
          return b;
        },
        WF_PAGE: function () {
          return r;
        },
        WIDTH: function () {
          return V;
        },
        WILL_CHANGE: function () {
          return W;
        },
        W_MOD_IX: function () {
          return c;
        },
        W_MOD_JS: function () {
          return o;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "|",
        r = "data-wf-page",
        o = "w-mod-js",
        c = "w-mod-ix",
        l = ".w-dyn-item",
        s = "xValue",
        u = "yValue",
        d = "zValue",
        f = "value",
        p = "xUnit",
        E = "yUnit",
        I = "zUnit",
        g = "unit",
        T = "transform",
        y = "translateX",
        m = "translateY",
        b = "translateZ",
        O = "translate3d",
        h = "scaleX",
        v = "scaleY",
        _ = "scaleZ",
        L = "scale3d",
        R = "rotateX",
        S = "rotateY",
        N = "rotateZ",
        A = "skew",
        C = "skewX",
        w = "skewY",
        M = "opacity",
        F = "filter",
        P = "font-variation-settings",
        V = "width",
        U = "height",
        x = "backgroundColor",
        D = "background",
        G = "borderColor",
        k = "color",
        B = "display",
        X = "flex",
        W = "willChange",
        j = "AUTO",
        H = ",",
        z = ":",
        Y = "|",
        Q = "CHILDREN",
        $ = "IMMEDIATE_CHILDREN",
        q = "SIBLINGS",
        K = "PARENT",
        Z = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        en = "RENDER_TRANSFORM",
        ei = "RENDER_GENERAL",
        ea = "RENDER_STYLE",
        er = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionAppliesTo: function () {
          return r;
        },
        ActionTypeConsts: function () {
          return a;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        r = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        ActionTypeConsts: function () {
          return o.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return c;
        },
        IX2EngineConstants: function () {
          return l;
        },
        QuickEffectIds: function () {
          return r.QuickEffectIds;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = s(n(1833), t),
        o = s(n(262), t);
      s(n(8704), t), s(n(3213), t);
      let c = d(n(8023)),
        l = d(n(2686));
      function s(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function d(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
    },
    3213: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let {
          TRANSFORM_MOVE: i,
          TRANSFORM_SCALE: a,
          TRANSFORM_ROTATE: r,
          TRANSFORM_SKEW: o,
          STYLE_SIZE: c,
          STYLE_FILTER: l,
          STYLE_FONT_VARIATION: s,
        } = n(262).ActionTypeConsts,
        u = { [i]: !0, [a]: !0, [r]: !0, [o]: !0, [c]: !0, [l]: !0, [s]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        EventAppliesTo: function () {
          return r;
        },
        EventBasedOn: function () {
          return o;
        },
        EventContinuousMouseAxes: function () {
          return c;
        },
        EventLimitAffectedElements: function () {
          return l;
        },
        EventTypeConsts: function () {
          return a;
        },
        QuickEffectDirectionConsts: function () {
          return u;
        },
        QuickEffectIds: function () {
          return s;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        r = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        o = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        c = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        l = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        s = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        u = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function i(e) {
        let t,
          i,
          a,
          r = 1,
          o = e.replace(/\s/g, "").toLowerCase(),
          c = ("string" == typeof n[o] ? n[o].toLowerCase() : null) || o;
        if (c.startsWith("#")) {
          let e = c.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (i = parseInt(e[1] + e[1], 16)),
              (a = parseInt(e[2] + e[2], 16)),
              4 === e.length && (r = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (i = parseInt(e.substring(2, 4), 16)),
              (a = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (r = parseInt(e.substring(6, 8), 16) / 255));
        } else if (c.startsWith("rgba")) {
          let e = c.match(/rgba\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (i = parseInt(e[1], 10)),
            (a = parseInt(e[2], 10)),
            (r = parseFloat(e[3]));
        } else if (c.startsWith("rgb")) {
          let e = c.match(/rgb\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (i = parseInt(e[1], 10)),
            (a = parseInt(e[2], 10));
        } else if (c.startsWith("hsla")) {
          let e,
            n,
            o,
            l = c.match(/hsla\(([^)]+)\)/)[1].split(","),
            s = parseFloat(l[0]),
            u = parseFloat(l[1].replace("%", "")) / 100,
            d = parseFloat(l[2].replace("%", "")) / 100;
          r = parseFloat(l[3]);
          let f = (1 - Math.abs(2 * d - 1)) * u,
            p = f * (1 - Math.abs(((s / 60) % 2) - 1)),
            E = d - f / 2;
          s >= 0 && s < 60
            ? ((e = f), (n = p), (o = 0))
            : s >= 60 && s < 120
            ? ((e = p), (n = f), (o = 0))
            : s >= 120 && s < 180
            ? ((e = 0), (n = f), (o = p))
            : s >= 180 && s < 240
            ? ((e = 0), (n = p), (o = f))
            : s >= 240 && s < 300
            ? ((e = p), (n = 0), (o = f))
            : ((e = f), (n = 0), (o = p)),
            (t = Math.round((e + E) * 255)),
            (i = Math.round((n + E) * 255)),
            (a = Math.round((o + E) * 255));
        } else if (c.startsWith("hsl")) {
          let e,
            n,
            r,
            o = c.match(/hsl\(([^)]+)\)/)[1].split(","),
            l = parseFloat(o[0]),
            s = parseFloat(o[1].replace("%", "")) / 100,
            u = parseFloat(o[2].replace("%", "")) / 100,
            d = (1 - Math.abs(2 * u - 1)) * s,
            f = d * (1 - Math.abs(((l / 60) % 2) - 1)),
            p = u - d / 2;
          l >= 0 && l < 60
            ? ((e = d), (n = f), (r = 0))
            : l >= 60 && l < 120
            ? ((e = f), (n = d), (r = 0))
            : l >= 120 && l < 180
            ? ((e = 0), (n = d), (r = f))
            : l >= 180 && l < 240
            ? ((e = 0), (n = f), (r = d))
            : l >= 240 && l < 300
            ? ((e = f), (n = 0), (r = d))
            : ((e = d), (n = 0), (r = f)),
            (t = Math.round((e + p) * 255)),
            (i = Math.round((n + p) * 255)),
            (a = Math.round((r + p) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(i) || Number.isNaN(a))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          );
        return { red: t, green: i, blue: a, alpha: r };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        IX2BrowserSupport: function () {
          return r;
        },
        IX2EasingUtils: function () {
          return c;
        },
        IX2Easings: function () {
          return o;
        },
        IX2ElementsReducer: function () {
          return l;
        },
        IX2VanillaPlugins: function () {
          return s;
        },
        IX2VanillaUtils: function () {
          return u;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = f(n(2662)),
        o = f(n(8686)),
        c = f(n(3767)),
        l = f(n(5861)),
        s = f(n(1799)),
        u = f(n(4124));
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = d(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          ELEMENT_MATCHES: function () {
            return s;
          },
          FLEX_PREFIXED: function () {
            return u;
          },
          IS_BROWSER_ENV: function () {
            return c;
          },
          TRANSFORM_PREFIXED: function () {
            return d;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p;
          },
          withBrowser: function () {
            return l;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (i = n(9777)) && i.__esModule ? i : { default: i },
        c = "undefined" != typeof window,
        l = (e, t) => (c ? e() : t),
        s = l(() =>
          (0, o.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        ),
        u = l(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        d = l(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        f = d.split("transform")[0],
        p = f ? f + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          applyEasing: function () {
            return d;
          },
          createBezierEasing: function () {
            return u;
          },
          optimizeFloat: function () {
            return s;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = l(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(8686)),
        c = (i = n(1361)) && i.__esModule ? i : { default: i };
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (l = function (e) {
          return e ? n : t;
        })(e);
      }
      function s(e, t = 5, n = 10) {
        let i = Math.pow(n, t),
          a = Number(Math.round(e * i) / i);
        return Math.abs(a) > 1e-4 ? a : 0;
      }
      function u(e) {
        return (0, c.default)(...e);
      }
      function d(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : n
          ? s(t > 0 ? n(t) : t)
          : s(t > 0 && e && o[e] ? o[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          bounce: function () {
            return X;
          },
          bouncePast: function () {
            return W;
          },
          ease: function () {
            return c;
          },
          easeIn: function () {
            return l;
          },
          easeInOut: function () {
            return u;
          },
          easeOut: function () {
            return s;
          },
          inBack: function () {
            return F;
          },
          inCirc: function () {
            return A;
          },
          inCubic: function () {
            return E;
          },
          inElastic: function () {
            return U;
          },
          inExpo: function () {
            return R;
          },
          inOutBack: function () {
            return V;
          },
          inOutCirc: function () {
            return w;
          },
          inOutCubic: function () {
            return g;
          },
          inOutElastic: function () {
            return D;
          },
          inOutExpo: function () {
            return N;
          },
          inOutQuad: function () {
            return p;
          },
          inOutQuart: function () {
            return m;
          },
          inOutQuint: function () {
            return h;
          },
          inOutSine: function () {
            return L;
          },
          inQuad: function () {
            return d;
          },
          inQuart: function () {
            return T;
          },
          inQuint: function () {
            return b;
          },
          inSine: function () {
            return v;
          },
          outBack: function () {
            return P;
          },
          outBounce: function () {
            return M;
          },
          outCirc: function () {
            return C;
          },
          outCubic: function () {
            return I;
          },
          outElastic: function () {
            return x;
          },
          outExpo: function () {
            return S;
          },
          outQuad: function () {
            return f;
          },
          outQuart: function () {
            return y;
          },
          outQuint: function () {
            return O;
          },
          outSine: function () {
            return _;
          },
          swingFrom: function () {
            return k;
          },
          swingFromTo: function () {
            return G;
          },
          swingTo: function () {
            return B;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (i = n(1361)) && i.__esModule ? i : { default: i },
        c = (0, o.default)(0.25, 0.1, 0.25, 1),
        l = (0, o.default)(0.42, 0, 1, 1),
        s = (0, o.default)(0, 0, 0.58, 1),
        u = (0, o.default)(0.42, 0, 0.58, 1);
      function d(e) {
        return Math.pow(e, 2);
      }
      function f(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function E(e) {
        return Math.pow(e, 3);
      }
      function I(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function g(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function T(e) {
        return Math.pow(e, 4);
      }
      function y(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function m(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function b(e) {
        return Math.pow(e, 5);
      }
      function O(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function h(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function v(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function _(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function L(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function R(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function S(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function N(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function A(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function C(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function w(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function M(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function F(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function P(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function V(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function U(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            -(
              i *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n)
            ));
      }
      function x(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            i * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
              1);
      }
      function D(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (n || (n = 0.3 * 1.5),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            e < 1)
          ? -0.5 *
            (i *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n))
          : i *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n) *
              0.5 +
            1;
      }
      function G(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function k(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function B(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function X(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function W(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        clearPlugin: function () {
          return I;
        },
        createPluginInstance: function () {
          return p;
        },
        getPluginConfig: function () {
          return s;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return u;
        },
        isPluginType: function () {
          return c;
        },
        renderPlugin: function () {
          return E;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(2662),
        o = n(3690);
      function c(e) {
        return o.pluginMethodMap.has(e);
      }
      let l = (e) => (t) => {
          if (!r.IS_BROWSER_ENV) return () => null;
          let n = o.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let i = n[e];
          if (!i) throw Error(`IX2 invalid plugin method: ${e}`);
          return i;
        },
        s = l("getPluginConfig"),
        u = l("getPluginOrigin"),
        d = l("getPluginDuration"),
        f = l("getPluginDestination"),
        p = l("createPluginInstance"),
        E = l("renderPlugin"),
        I = l("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        cleanupHTMLElement: function () {
          return eH;
        },
        clearAllStyles: function () {
          return eX;
        },
        clearObjectCache: function () {
          return ed;
        },
        getActionListProgress: function () {
          return e$;
        },
        getAffectedElements: function () {
          return eb;
        },
        getComputedStyle: function () {
          return eO;
        },
        getDestinationValues: function () {
          return eA;
        },
        getElementId: function () {
          return eI;
        },
        getInstanceId: function () {
          return ep;
        },
        getInstanceOrigin: function () {
          return eL;
        },
        getItemConfigByKey: function () {
          return eN;
        },
        getMaxDurationItemIndex: function () {
          return eQ;
        },
        getNamespacedParameterId: function () {
          return eZ;
        },
        getRenderType: function () {
          return eC;
        },
        getStyleProp: function () {
          return ew;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return ey;
        },
        reduceListToGroup: function () {
          return eq;
        },
        reifyState: function () {
          return eg;
        },
        renderHTMLElement: function () {
          return eM;
        },
        shallowEqual: function () {
          return u.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eK;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = I(n(4075)),
        o = I(n(1455)),
        c = I(n(5720)),
        l = n(1185),
        s = n(7087),
        u = I(n(7164)),
        d = n(3767),
        f = n(380),
        p = n(1799),
        E = n(2662);
      function I(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: g,
          TRANSFORM: T,
          TRANSLATE_3D: y,
          SCALE_3D: m,
          ROTATE_X: b,
          ROTATE_Y: O,
          ROTATE_Z: h,
          SKEW: v,
          PRESERVE_3D: _,
          FLEX: L,
          OPACITY: R,
          FILTER: S,
          FONT_VARIATION_SETTINGS: N,
          WIDTH: A,
          HEIGHT: C,
          BACKGROUND_COLOR: w,
          BORDER_COLOR: M,
          COLOR: F,
          CHILDREN: P,
          IMMEDIATE_CHILDREN: V,
          SIBLINGS: U,
          PARENT: x,
          DISPLAY: D,
          WILL_CHANGE: G,
          AUTO: k,
          COMMA_DELIMITER: B,
          COLON_DELIMITER: X,
          BAR_DELIMITER: W,
          RENDER_TRANSFORM: j,
          RENDER_GENERAL: H,
          RENDER_STYLE: z,
          RENDER_PLUGIN: Y,
        } = s.IX2EngineConstants,
        {
          TRANSFORM_MOVE: Q,
          TRANSFORM_SCALE: $,
          TRANSFORM_ROTATE: q,
          TRANSFORM_SKEW: K,
          STYLE_OPACITY: Z,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: en,
          STYLE_BORDER: ei,
          STYLE_TEXT_COLOR: ea,
          GENERAL_DISPLAY: er,
          OBJECT_VALUE: eo,
        } = s.ActionTypeConsts,
        ec = (e) => e.trim(),
        el = Object.freeze({ [en]: w, [ei]: M, [ea]: F }),
        es = Object.freeze({
          [E.TRANSFORM_PREFIXED]: T,
          [w]: g,
          [R]: R,
          [S]: S,
          [A]: A,
          [C]: C,
          [N]: N,
        }),
        eu = new Map();
      function ed() {
        eu.clear();
      }
      let ef = 1;
      function ep() {
        return "i" + ef++;
      }
      let eE = 1;
      function eI(e, t) {
        for (let n in e) {
          let i = e[n];
          if (i && i.ref === t) return i.id;
        }
        return "e" + eE++;
      }
      function eg({ events: e, actionLists: t, site: n } = {}) {
        let i = (0, o.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return e[n] || (e[n] = {}), (e[n][t.id] = t), e;
            },
            {}
          ),
          a = n && n.mediaQueries,
          r = [];
        return (
          a
            ? (r = a.map((e) => e.key))
            : ((a = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: i,
              mediaQueries: a,
              mediaQueryKeys: r,
            },
          }
        );
      }
      let eT = (e, t) => e === t;
      function ey({ store: e, select: t, onChange: n, comparator: i = eT }) {
        let { getState: a, subscribe: r } = e,
          o = r(function () {
            let r = t(a());
            if (null == r) return void o();
            i(r, c) || n((c = r), e);
          }),
          c = t(a());
        return o;
      }
      function em(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: a,
            appliesTo: r,
            useEventTarget: o,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: a,
            appliesTo: r,
            useEventTarget: o,
          };
        }
        return {};
      }
      function eb({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: i,
        elementApi: a,
      }) {
        let r, o, c;
        if (!a) throw Error("IX2 missing elementApi");
        let { targets: l } = e;
        if (Array.isArray(l) && l.length > 0)
          return l.reduce(
            (e, r) =>
              e.concat(
                eb({
                  config: { target: r },
                  event: t,
                  eventTarget: n,
                  elementRoot: i,
                  elementApi: a,
                })
              ),
            []
          );
        let {
            getValidDocument: u,
            getQuerySelector: d,
            queryDocument: f,
            getChildElements: p,
            getSiblingElements: I,
            matchSelector: g,
            elementContains: T,
            isSiblingNode: y,
          } = a,
          { target: m } = e;
        if (!m) return [];
        let {
          id: b,
          objectId: O,
          selector: h,
          selectorGuids: v,
          appliesTo: _,
          useEventTarget: L,
        } = em(m);
        if (O) return [eu.has(O) ? eu.get(O) : eu.set(O, {}).get(O)];
        if (_ === s.EventAppliesTo.PAGE) {
          let e = u(b);
          return e ? [e] : [];
        }
        let R = (t?.action?.config?.affectedElements ?? {})[b || h] || {},
          S = !!(R.id || R.selector),
          N = t && d(em(t.target));
        if (
          (S
            ? ((r = R.limitAffectedElements), (o = N), (c = d(R)))
            : (o = c = d({ id: b, selector: h, selectorGuids: v })),
          t && L)
        ) {
          let e = n && (c || !0 === L) ? [n] : f(N);
          if (c) {
            if (L === x) return f(c).filter((t) => e.some((e) => T(t, e)));
            if (L === P) return f(c).filter((t) => e.some((e) => T(e, t)));
            if (L === U) return f(c).filter((t) => e.some((e) => y(e, t)));
          }
          return e;
        }
        return null == o || null == c
          ? []
          : E.IS_BROWSER_ENV && i
          ? f(c).filter((e) => i.contains(e))
          : r === P
          ? f(o, c)
          : r === V
          ? p(f(o)).filter(g(c))
          : r === U
          ? I(f(o)).filter(g(c))
          : f(c);
      }
      function eO({ element: e, actionItem: t }) {
        if (!E.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case et:
          case en:
          case ei:
          case ea:
          case er:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let eh = /px/,
        ev = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eP[t.type]), e),
            e || {}
          ),
        e_ = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eV[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          );
      function eL(e, t = {}, n = {}, i, a) {
        let { getStyle: o } = a,
          { actionTypeId: c } = i;
        if ((0, p.isPluginType)(c)) return (0, p.getPluginOrigin)(c)(t[c], i);
        switch (i.actionTypeId) {
          case Q:
          case $:
          case q:
          case K:
            return t[i.actionTypeId] || eF[i.actionTypeId];
          case J:
            return ev(t[i.actionTypeId], i.config.filters);
          case ee:
            return e_(t[i.actionTypeId], i.config.fontVariations);
          case Z:
            return { value: (0, r.default)(parseFloat(o(e, R)), 1) };
          case et: {
            let t,
              a = o(e, A),
              c = o(e, C);
            return {
              widthValue:
                i.config.widthUnit === k
                  ? eh.test(a)
                    ? parseFloat(a)
                    : parseFloat(n.width)
                  : (0, r.default)(parseFloat(a), parseFloat(n.width)),
              heightValue:
                i.config.heightUnit === k
                  ? eh.test(c)
                    ? parseFloat(c)
                    : parseFloat(n.height)
                  : (0, r.default)(parseFloat(c), parseFloat(n.height)),
            };
          }
          case en:
          case ei:
          case ea:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: i,
            }) {
              let a = el[t],
                o = i(e, a),
                c = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(eG, eD.test(o) ? o : n[a]).split(B);
              return {
                rValue: (0, r.default)(parseInt(c[0], 10), 255),
                gValue: (0, r.default)(parseInt(c[1], 10), 255),
                bValue: (0, r.default)(parseInt(c[2], 10), 255),
                aValue: (0, r.default)(parseFloat(c[3]), 1),
              };
            })({
              element: e,
              actionTypeId: i.actionTypeId,
              computedStyle: n,
              getStyle: o,
            });
          case er:
            return { value: (0, r.default)(o(e, D), n.display) };
          case eo:
            return t[i.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eR = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eN = (e, t, n) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
          switch (e) {
            case J: {
              let e = (0, c.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, c.default)(
                n.fontVariations,
                ({ type: e }) => e === t
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function eA({ element: e, actionItem: t, elementApi: n }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case Q:
          case $:
          case q:
          case K: {
            let { xValue: e, yValue: n, zValue: i } = t.config;
            return { xValue: e, yValue: n, zValue: i };
          }
          case et: {
            let { getStyle: i, setStyle: a, getProperty: r } = n,
              { widthUnit: o, heightUnit: c } = t.config,
              { widthValue: l, heightValue: s } = t.config;
            if (!E.IS_BROWSER_ENV) return { widthValue: l, heightValue: s };
            if (o === k) {
              let t = i(e, A);
              a(e, A, ""), (l = r(e, "offsetWidth")), a(e, A, t);
            }
            if (c === k) {
              let t = i(e, C);
              a(e, C, ""), (s = r(e, "offsetHeight")), a(e, C, t);
            }
            return { widthValue: l, heightValue: s };
          }
          case en:
          case ei:
          case ea: {
            let {
              rValue: i,
              gValue: a,
              bValue: r,
              aValue: o,
              globalSwatchId: c,
            } = t.config;
            if (c && c.startsWith("--")) {
              let { getStyle: t } = n,
                i = t(e, c),
                a = (0, f.normalizeColor)(i);
              return {
                rValue: a.red,
                gValue: a.green,
                bValue: a.blue,
                aValue: a.alpha,
              };
            }
            return { rValue: i, gValue: a, bValue: r, aValue: o };
          }
          case J:
            return t.config.filters.reduce(eR, {});
          case ee:
            return t.config.fontVariations.reduce(eS, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eC(e) {
        return /^TRANSFORM_/.test(e)
          ? j
          : /^STYLE_/.test(e)
          ? z
          : /^GENERAL_/.test(e)
          ? H
          : /^PLUGIN_/.test(e)
          ? Y
          : void 0;
      }
      function ew(e, t) {
        return e === z ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eM(e, t, n, i, a, r, c, l, s) {
        switch (l) {
          case j:
            var u = e,
              d = t,
              f = n,
              I = a,
              g = c;
            let T = ex
                .map((e) => {
                  let t = eF[e],
                    {
                      xValue: n = t.xValue,
                      yValue: i = t.yValue,
                      zValue: a = t.zValue,
                      xUnit: r = "",
                      yUnit: o = "",
                      zUnit: c = "",
                    } = d[e] || {};
                  switch (e) {
                    case Q:
                      return `${y}(${n}${r}, ${i}${o}, ${a}${c})`;
                    case $:
                      return `${m}(${n}${r}, ${i}${o}, ${a}${c})`;
                    case q:
                      return `${b}(${n}${r}) ${O}(${i}${o}) ${h}(${a}${c})`;
                    case K:
                      return `${v}(${n}${r}, ${i}${o})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: R } = g;
            ek(u, E.TRANSFORM_PREFIXED, g),
              R(u, E.TRANSFORM_PREFIXED, T),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: n, zValue: i }
              ) {
                return (
                  (e === Q && void 0 !== i) ||
                  (e === $ && void 0 !== i) ||
                  (e === q && (void 0 !== t || void 0 !== n))
                );
              })(I, f) && R(u, E.TRANSFORM_STYLE_PREFIXED, _);
            return;
          case z:
            return (function (e, t, n, i, a, r) {
              let { setStyle: c } = r;
              switch (i.actionTypeId) {
                case et: {
                  let { widthUnit: t = "", heightUnit: a = "" } = i.config,
                    { widthValue: o, heightValue: l } = n;
                  void 0 !== o &&
                    (t === k && (t = "px"), ek(e, A, r), c(e, A, o + t)),
                    void 0 !== l &&
                      (a === k && (a = "px"), ek(e, C, r), c(e, C, l + a));
                  break;
                }
                case J:
                  var l = i.config;
                  let s = (0, o.default)(
                      n,
                      (e, t, n) => `${e} ${n}(${t}${eU(n, l)})`,
                      ""
                    ),
                    { setStyle: u } = r;
                  ek(e, S, r), u(e, S, s);
                  break;
                case ee:
                  i.config;
                  let d = (0, o.default)(
                      n,
                      (e, t, n) => (e.push(`"${n}" ${t}`), e),
                      []
                    ).join(", "),
                    { setStyle: f } = r;
                  ek(e, N, r), f(e, N, d);
                  break;
                case en:
                case ei:
                case ea: {
                  let t = el[i.actionTypeId],
                    a = Math.round(n.rValue),
                    o = Math.round(n.gValue),
                    l = Math.round(n.bValue),
                    s = n.aValue;
                  ek(e, t, r),
                    c(
                      e,
                      t,
                      s >= 1
                        ? `rgb(${a},${o},${l})`
                        : `rgba(${a},${o},${l},${s})`
                    );
                  break;
                }
                default: {
                  let { unit: t = "" } = i.config;
                  ek(e, a, r), c(e, a, n.value + t);
                }
              }
            })(e, 0, n, a, r, c);
          case H:
            var w = e,
              M = a,
              F = c;
            let { setStyle: P } = F;
            if (M.actionTypeId === er) {
              let { value: e } = M.config;
              P(w, D, e === L && E.IS_BROWSER_ENV ? E.FLEX_PREFIXED : e);
            }
            return;
          case Y: {
            let { actionTypeId: e } = a;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(s, t, a);
          }
        }
      }
      let eF = {
          [Q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [$]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eP = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eV = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        eU = (e, t) => {
          let n = (0, c.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        ex = Object.keys(eF),
        eD = /^rgb/,
        eG = RegExp("rgba?\\(([^)]+)\\)");
      function ek(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let i = es[t];
        if (!i) return;
        let { getStyle: a, setStyle: r } = n,
          o = a(e, G);
        if (!o) return void r(e, G, i);
        let c = o.split(B).map(ec);
        -1 === c.indexOf(i) && r(e, G, c.concat(i).join(B));
      }
      function eB(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let i = es[t];
        if (!i) return;
        let { getStyle: a, setStyle: r } = n,
          o = a(e, G);
        o &&
          -1 !== o.indexOf(i) &&
          r(
            e,
            G,
            o
              .split(B)
              .map(ec)
              .filter((e) => e !== i)
              .join(B)
          );
      }
      function eX({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: i = {}, actionLists: a = {} } = n;
        Object.keys(i).forEach((e) => {
          let n = i[e],
            { config: r } = n.action,
            { actionListId: o } = r,
            c = a[o];
          c && eW({ actionList: c, event: n, elementApi: t });
        }),
          Object.keys(a).forEach((e) => {
            eW({ actionList: a[e], elementApi: t });
          });
      }
      function eW({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: i, continuousParameterGroups: a } = e;
        i &&
          i.forEach((e) => {
            ej({ actionGroup: e, event: t, elementApi: n });
          }),
          a &&
            a.forEach((e) => {
              let { continuousActionGroups: i } = e;
              i.forEach((e) => {
                ej({ actionGroup: e, event: t, elementApi: n });
              });
            });
      }
      function ej({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: i } = e;
        i.forEach((e) => {
          let i,
            { actionTypeId: a, config: r } = e;
          (i = (0, p.isPluginType)(a)
            ? (t) => (0, p.clearPlugin)(a)(t, e)
            : ez({ effect: eY, actionTypeId: a, elementApi: n })),
            eb({ config: r, event: t, elementApi: n }).forEach(i);
        });
      }
      function eH(e, t, n) {
        let { setStyle: i, getStyle: a } = n,
          { actionTypeId: r } = t;
        if (r === et) {
          let { config: n } = t;
          n.widthUnit === k && i(e, A, ""), n.heightUnit === k && i(e, C, "");
        }
        a(e, G) && ez({ effect: eB, actionTypeId: r, elementApi: n })(e);
      }
      let ez =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (i) => {
          switch (t) {
            case Q:
            case $:
            case q:
            case K:
              e(i, E.TRANSFORM_PREFIXED, n);
              break;
            case J:
              e(i, S, n);
              break;
            case ee:
              e(i, N, n);
              break;
            case Z:
              e(i, R, n);
              break;
            case et:
              e(i, A, n), e(i, C, n);
              break;
            case en:
            case ei:
            case ea:
              e(i, el[t], n);
              break;
            case er:
              e(i, D, n);
          }
        };
      function eY(e, t, n) {
        let { setStyle: i } = n;
        eB(e, t, n),
          i(e, t, ""),
          t === E.TRANSFORM_PREFIXED && i(e, E.TRANSFORM_STYLE_PREFIXED, "");
      }
      function eQ(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, i) => {
            let { config: a } = e,
              r = a.delay + a.duration;
            r >= t && ((t = r), (n = i));
          }),
          n
        );
      }
      function e$(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: i } = e,
          { actionItem: a, verboseTimeElapsed: r = 0 } = t,
          o = 0,
          c = 0;
        return (
          n.forEach((e, t) => {
            if (i && 0 === t) return;
            let { actionItems: n } = e,
              l = n[eQ(n)],
              { config: s, actionTypeId: u } = l;
            a.id === l.id && (c = o + r);
            let d = eC(u) === H ? 0 : s.duration;
            o += s.delay + d;
          }),
          o > 0 ? (0, d.optimizeFloat)(c / o) : 0
        );
      }
      function eq({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: i, continuousParameterGroups: a } = e,
          r = [],
          o = (e) => (
            r.push((0, l.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          i && i.some(({ actionItems: e }) => e.some(o)),
          a &&
            a.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(o));
            }),
          (0, l.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: r }] },
          })
        );
      }
      function eK(e, { basedOn: t }) {
        return (
          (e === s.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === s.EventBasedOn.ELEMENT || null == t)) ||
          (e === s.EventTypeConsts.MOUSE_MOVE && t === s.EventBasedOn.ELEMENT)
        );
      }
      function eZ(e, t) {
        return e + X + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, u.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + W + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: i = "" } = e;
        return t + W + n + W + i;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let i = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let i = Object.keys(e),
          a = Object.keys(t);
        if (i.length !== a.length) return !1;
        for (let a = 0; a < i.length; a++)
          if (!Object.hasOwn(t, i[a]) || !n(e[i[a]], t[i[a]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        createElementState: function () {
          return v;
        },
        ixElements: function () {
          return h;
        },
        mergeActionState: function () {
          return _;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(1185),
        o = n(7087),
        {
          HTML_ELEMENT: c,
          PLAIN_OBJECT: l,
          ABSTRACT_NODE: s,
          CONFIG_X_VALUE: u,
          CONFIG_Y_VALUE: d,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: E,
          CONFIG_Y_UNIT: I,
          CONFIG_Z_UNIT: g,
          CONFIG_UNIT: T,
        } = o.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: y,
          IX2_INSTANCE_ADDED: m,
          IX2_ELEMENT_STATE_CHANGED: b,
        } = o.IX2EngineActionTypes,
        O = {},
        h = (e = O, t = {}) => {
          switch (t.type) {
            case y:
              return O;
            case m: {
              let {
                  elementId: n,
                  element: i,
                  origin: a,
                  actionItem: o,
                  refType: c,
                } = t.payload,
                { actionTypeId: l } = o,
                s = e;
              return (
                (0, r.getIn)(s, [n, i]) !== i && (s = v(s, i, c, n, o)),
                _(s, n, l, a, o)
              );
            }
            case b: {
              let {
                elementId: n,
                actionTypeId: i,
                current: a,
                actionItem: r,
              } = t.payload;
              return _(e, n, i, a, r);
            }
            default:
              return e;
          }
        };
      function v(e, t, n, i, a) {
        let o =
          n === l ? (0, r.getIn)(a, ["config", "target", "objectId"]) : null;
        return (0, r.mergeIn)(e, [i], { id: i, ref: t, refId: o, refType: n });
      }
      function _(e, t, n, i, a) {
        let o = (function (e) {
          let { config: t } = e;
          return L.reduce((e, n) => {
            let i = n[0],
              a = n[1],
              r = t[i],
              o = t[a];
            return null != r && null != o && (e[a] = o), e;
          }, {});
        })(a);
        return (0, r.mergeIn)(e, [t, "refState", n], i, o);
      }
      let L = [
        [u, E],
        [d, I],
        [f, g],
        [p, T],
      ];
    },
    3662: function () {
      Webflow.require("ix2").init({
        events: {
          e: {
            id: "e",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".accordion-item",
              originalId:
                "69a1effbfc73428264c97a8d|16045bc6-13c5-d05c-2126-6445852866d6",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".accordion-item",
                originalId:
                  "69a1effbfc73428264c97a8d|16045bc6-13c5-d05c-2126-6445852866d6",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19975bbc387,
          },
          "e-2": {
            id: "e-2",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".accordion-item",
              originalId:
                "69a1effbfc73428264c97a8d|16045bc6-13c5-d05c-2126-6445852866d6",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".accordion-item",
                originalId:
                  "69a1effbfc73428264c97a8d|16045bc6-13c5-d05c-2126-6445852866d6",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19975bbc387,
          },
          "e-5": {
            id: "e-5",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-6",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".team-card",
              originalId:
                "69a1effbfc73428264c97a98|d1d2b75b-4e2a-4d74-3407-8142005bb6ac",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".team-card",
                originalId:
                  "69a1effbfc73428264c97a98|d1d2b75b-4e2a-4d74-3407-8142005bb6ac",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1998057cfbf,
          },
          "e-6": {
            id: "e-6",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-24",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-5",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".team-card",
              originalId:
                "69a1effbfc73428264c97a98|d1d2b75b-4e2a-4d74-3407-8142005bb6ac",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".team-card",
                originalId:
                  "69a1effbfc73428264c97a98|d1d2b75b-4e2a-4d74-3407-8142005bb6ac",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1998057cfc0,
          },
          "e-7": {
            id: "e-7",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-8",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".service-item",
              originalId:
                "69a1effbfc73428264c97a9a|b21cb6b2-d1b9-3702-3bec-daccec8767b6",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".service-item",
                originalId:
                  "69a1effbfc73428264c97a9a|b21cb6b2-d1b9-3702-3bec-daccec8767b6",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1998610c0a4,
          },
          "e-8": {
            id: "e-8",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-7",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".service-item",
              originalId:
                "69a1effbfc73428264c97a9a|b21cb6b2-d1b9-3702-3bec-daccec8767b6",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".service-item",
                originalId:
                  "69a1effbfc73428264c97a9a|b21cb6b2-d1b9-3702-3bec-daccec8767b6",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1998610c0a5,
          },
          "e-9": {
            id: "e-9",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-10",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".social-link",
              originalId:
                "69a1effbfc73428264c97a9c|f689fbe8-ffee-3aa3-e4e3-19b99dad309c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".social-link",
                originalId:
                  "69a1effbfc73428264c97a9c|f689fbe8-ffee-3aa3-e4e3-19b99dad309c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19994c87094,
          },
          "e-10": {
            id: "e-10",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-9",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".social-link",
              originalId:
                "69a1effbfc73428264c97a9c|f689fbe8-ffee-3aa3-e4e3-19b99dad309c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".social-link",
                originalId:
                  "69a1effbfc73428264c97a9c|f689fbe8-ffee-3aa3-e4e3-19b99dad309c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19994c87095,
          },
          "e-11": {
            id: "e-11",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-10",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-12",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".offcanvas-icon",
              originalId: "8b69e29b-dcbb-bf4e-b9fc-d0a8160966ca",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".offcanvas-icon",
                originalId: "8b69e29b-dcbb-bf4e-b9fc-d0a8160966ca",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19999e3cb7e,
          },
          "e-13": {
            id: "e-13",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-14",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "d796b440-c147-1529-3014-cb4222a1441c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "d796b440-c147-1529-3014-cb4222a1441c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19999e91179,
          },
          "e-21": {
            id: "e-21",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-22" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "9604495f-5cb4-d4c5-23c1-9ea99fc105fb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "9604495f-5cb4-d4c5-23c1-9ea99fc105fb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19999fc4d91,
          },
          "e-23": {
            id: "e-23",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-24" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "9604495f-5cb4-d4c5-23c1-9ea99fc105fd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "9604495f-5cb4-d4c5-23c1-9ea99fc105fd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 300,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19999fc7760,
          },
          "e-29": {
            id: "e-29",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-30" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1effbfc73428264c97a8d|76a0418e-c45f-a5b1-9843-df1504fa69f0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a8d|76a0418e-c45f-a5b1-9843-df1504fa69f0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19999fd7c68,
          },
          "e-31": {
            id: "e-31",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-12",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "69a1effbfc73428264c97a8d|41b5ef30-dbcc-0431-8ccd-4973b4ac3a55",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a8d|41b5ef30-dbcc-0431-8ccd-4973b4ac3a55",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-12-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !0,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1999a02899d,
          },
          "e-32": {
            id: "e-32",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".invert-wrap",
              originalId:
                "69a1effbfc73428264c97a8d|53406b00-c923-4ea7-5609-1c5c4fbcebc3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".invert-wrap",
                originalId:
                  "69a1effbfc73428264c97a8d|53406b00-c923-4ea7-5609-1c5c4fbcebc3",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 95,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1999a16d6a8,
          },
          "e-33": {
            id: "e-33",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: { actionListId: "slideInTop", autoStopEventId: "e-34" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1effbfc73428264c97a8d|dbdd18d1-d28e-77ac-b1d8-706e81bf030c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a8d|dbdd18d1-d28e-77ac-b1d8-706e81bf030c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "TOP",
              effectIn: !0,
            },
            createdOn: 0x1999a26c87c,
          },
          "e-35": {
            id: "e-35",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: { actionListId: "slideInTop", autoStopEventId: "e-36" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1effbfc73428264c97a8d|eaee1984-fe14-7288-1173-d39b43d97081",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a8d|eaee1984-fe14-7288-1173-d39b43d97081",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "TOP",
              effectIn: !0,
            },
            createdOn: 0x1999a26f5b9,
          },
          "e-37": {
            id: "e-37",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-38",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1effbfc73428264c97a8d|7e012075-d185-6958-b7d1-5576d5b36507",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a8d|7e012075-d185-6958-b7d1-5576d5b36507",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1999a27b86a,
          },
          "e-43": {
            id: "e-43",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-44",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".reveal-wrap",
              originalId:
                "69a1effbfc73428264c97a8d|048dd572-eca3-6b99-6747-452a52396cc4",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".reveal-wrap",
                originalId:
                  "69a1effbfc73428264c97a8d|048dd572-eca3-6b99-6747-452a52396cc4",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1999a543ff9,
          },
          "e-46": {
            id: "e-46",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-47" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1effbfc73428264c97a98|0e1455f2-2e64-fb89-49f5-7ae8c6e9f138",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a98|0e1455f2-2e64-fb89-49f5-7ae8c6e9f138",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1999a6b66a8,
          },
          "e-56": {
            id: "e-56",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-57" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "b06636fc-766b-824c-444b-3fb25ff3ec1f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "b06636fc-766b-824c-444b-3fb25ff3ec1f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1999a6cafa8,
          },
          "e-58": {
            id: "e-58",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-59" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "c8f3c719-28f8-6cb1-447f-83dd2ef807c8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "c8f3c719-28f8-6cb1-447f-83dd2ef807c8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1999a6ccbaf,
          },
          "e-60": {
            id: "e-60",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-61" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1effbfc73428264c97a9a|87bc9b4f-334b-b4cf-8b4d-2549725aa7d1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9a|87bc9b4f-334b-b4cf-8b4d-2549725aa7d1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1999a6e3d52,
          },
          "e-62": {
            id: "e-62",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-63" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1effbfc73428264c97a9a|15caccb5-fb48-b36c-4525-ad77b4d5a078",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9a|15caccb5-fb48-b36c-4525-ad77b4d5a078",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1999a6e7f4d,
          },
          "e-64": {
            id: "e-64",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-65",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1effbfc73428264c97a9c|5dcabf05-4b56-8628-c5d2-885290479c2e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9c|5dcabf05-4b56-8628-c5d2-885290479c2e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1999a72fd3d,
          },
          "e-66": {
            id: "e-66",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-67",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1effbfc73428264c97a9c|96e5bd87-d3c5-3b45-3e34-d55834deaff4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9c|96e5bd87-d3c5-3b45-3e34-d55834deaff4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1999a733e02,
          },
          "e-68": {
            id: "e-68",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-69",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1effbfc73428264c97a9c|ebb9fa87-2df6-997a-18d6-03fce54910e3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9c|ebb9fa87-2df6-997a-18d6-03fce54910e3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1999a7371a4,
          },
          "e-70": {
            id: "e-70",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-71",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1effbfc73428264c97a9c|3c92b487-cc72-eff5-d5d9-014ebc2178ec",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9c|3c92b487-cc72-eff5-d5d9-014ebc2178ec",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1999a738ebb,
          },
          "e-72": {
            id: "e-72",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-73",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1effbfc73428264c97a9c|d3ae84d8-4406-87e6-f0e6-88bd9cd9054c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9c|d3ae84d8-4406-87e6-f0e6-88bd9cd9054c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1999a73ab74,
          },
          "e-90": {
            id: "e-90",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-91",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".counter",
              originalId: "3443bbb7-beb5-4ab8-9a60-757ebff2499a",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".counter",
                originalId: "3443bbb7-beb5-4ab8-9a60-757ebff2499a",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1999a7b22ad,
          },
          "e-92": {
            id: "e-92",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-93",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".blog-item",
              originalId:
                "69a1effbfc73428264c97a8d|1a8cc17c-5a8e-18b8-695c-826e6b5e538e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".blog-item",
                originalId:
                  "69a1effbfc73428264c97a8d|1a8cc17c-5a8e-18b8-695c-826e6b5e538e",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1999e4cd5fa,
          },
          "e-93": {
            id: "e-93",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-92",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".blog-item",
              originalId:
                "69a1effbfc73428264c97a8d|1a8cc17c-5a8e-18b8-695c-826e6b5e538e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".blog-item",
                originalId:
                  "69a1effbfc73428264c97a8d|1a8cc17c-5a8e-18b8-695c-826e6b5e538e",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1999e4cd5fb,
          },
          "e-121": {
            id: "e-121",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-122",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1effbfc73428264c97a9a|b33fc85f-69fd-80b3-4caa-4eb8205f9eeb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9a|b33fc85f-69fd-80b3-4caa-4eb8205f9eeb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 20,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1999eb5b776,
          },
          "e-123": {
            id: "e-123",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-124",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1effbfc73428264c97a9a|9bba68d3-97fb-f8cf-9bf0-c82623a771a2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9a|9bba68d3-97fb-f8cf-9bf0-c82623a771a2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 400,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1999eb5daad,
          },
          "e-125": {
            id: "e-125",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-126",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1effbfc73428264c97a9a|ee3a80a7-bc85-14b2-5080-d77618e7e78a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9a|ee3a80a7-bc85-14b2-5080-d77618e7e78a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 500,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1999eb607e3,
          },
          "e-131": {
            id: "e-131",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-25",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-132",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".social-link-two",
              originalId:
                "69a1effbfc73428264c97a9c|f689fbe8-ffee-3aa3-e4e3-19b99dad309c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".social-link-two",
                originalId:
                  "69a1effbfc73428264c97a9c|f689fbe8-ffee-3aa3-e4e3-19b99dad309c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199a43925dc,
          },
          "e-132": {
            id: "e-132",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-131",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".social-link-two",
              originalId:
                "69a1effbfc73428264c97a9c|f689fbe8-ffee-3aa3-e4e3-19b99dad309c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".social-link-two",
                originalId:
                  "69a1effbfc73428264c97a9c|f689fbe8-ffee-3aa3-e4e3-19b99dad309c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199a43925dd,
          },
          "e-149": {
            id: "e-149",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-150",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "9604495f-5cb4-d4c5-23c1-9ea99fc10600",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "9604495f-5cb4-d4c5-23c1-9ea99fc10600",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19a01ad0abe,
          },
          "e-151": {
            id: "e-151",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-152",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "9604495f-5cb4-d4c5-23c1-9ea99fc1060a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "9604495f-5cb4-d4c5-23c1-9ea99fc1060a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19a01ad2ee2,
          },
          "e-153": {
            id: "e-153",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-154",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "9604495f-5cb4-d4c5-23c1-9ea99fc10614",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "9604495f-5cb4-d4c5-23c1-9ea99fc10614",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19a01ad5534,
          },
          "e-155": {
            id: "e-155",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-156",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "9604495f-5cb4-d4c5-23c1-9ea99fc1061e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "9604495f-5cb4-d4c5-23c1-9ea99fc1061e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19a01ad7cfc,
          },
          "e-157": {
            id: "e-157",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-158",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "9604495f-5cb4-d4c5-23c1-9ea99fc10628",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "9604495f-5cb4-d4c5-23c1-9ea99fc10628",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19a01ad9eb0,
          },
          "e-159": {
            id: "e-159",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-160",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1effbfc73428264c97a8d",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a8d",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19a064eb706,
          },
          "e-161": {
            id: "e-161",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-162",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".nav-item-two",
              originalId: "1895f6fc-4fe4-c341-3403-4c071874b925",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-item-two",
                originalId: "1895f6fc-4fe4-c341-3403-4c071874b925",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19a065a7994,
          },
          "e-162": {
            id: "e-162",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-161",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".nav-item-two",
              originalId: "1895f6fc-4fe4-c341-3403-4c071874b925",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-item-two",
                originalId: "1895f6fc-4fe4-c341-3403-4c071874b925",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19a065a7995,
          },
          "e-165": {
            id: "e-165",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-22",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-166",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".blog-item-box",
              originalId:
                "69a1effbfc73428264c97a8d|8acb99e0-e54a-5837-fcdc-107642048991",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".blog-item-box",
                originalId:
                  "69a1effbfc73428264c97a8d|8acb99e0-e54a-5837-fcdc-107642048991",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19a06bdde04,
          },
          "e-166": {
            id: "e-166",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-165",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".blog-item-box",
              originalId:
                "69a1effbfc73428264c97a8d|8acb99e0-e54a-5837-fcdc-107642048991",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".blog-item-box",
                originalId:
                  "69a1effbfc73428264c97a8d|8acb99e0-e54a-5837-fcdc-107642048991",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19a06bdde05,
          },
          "e-167": {
            id: "e-167",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-168",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1effbfc73428264c97a8d|099f9053-2d05-cb60-4d7d-d6161ef8d604",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a8d|099f9053-2d05-cb60-4d7d-d6161ef8d604",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19a0b3cbeec,
          },
          "e-171": {
            id: "e-171",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-172",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "ab93d299-3b29-96eb-810e-55a6992be544",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "ab93d299-3b29-96eb-810e-55a6992be544",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19a0b3def63,
          },
          "e-173": {
            id: "e-173",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-174",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "58deabdb-3fec-7b85-53d0-d7c9241abf0e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "58deabdb-3fec-7b85-53d0-d7c9241abf0e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 300,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19a0b3e2739,
          },
          "e-175": {
            id: "e-175",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-176",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6ebfc4ba-b4d8-a260-9886-80911291f833",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6ebfc4ba-b4d8-a260-9886-80911291f833",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19a0b3e84aa,
          },
          "e-177": {
            id: "e-177",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-178" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "ab93d299-3b29-96eb-810e-55a6992be547",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "ab93d299-3b29-96eb-810e-55a6992be547",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19a0b3ec4c9,
          },
          "e-179": {
            id: "e-179",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-180" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "ab93d299-3b29-96eb-810e-55a6992be548",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "ab93d299-3b29-96eb-810e-55a6992be548",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19a0b3ee046,
          },
          "e-181": {
            id: "e-181",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-182",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "ab93d299-3b29-96eb-810e-55a6992be549",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "ab93d299-3b29-96eb-810e-55a6992be549",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19a0b3f115e,
          },
          "e-183": {
            id: "e-183",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-184" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "cbb32482-8282-e6b9-8fab-3904d54f3c89",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "cbb32482-8282-e6b9-8fab-3904d54f3c89",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19a0b3fa825,
          },
          "e-187": {
            id: "e-187",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-188" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1effbfc73428264c97a96|3f4fb596-75aa-0d55-50dc-3294dacabd38",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a96|3f4fb596-75aa-0d55-50dc-3294dacabd38",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19caab021c4,
          },
          "e-189": {
            id: "e-189",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2387",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69a1effbfc73428264c97a9d|b53f4290-af7a-2f11-7df6-2a1c4f4949ab",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9d|b53f4290-af7a-2f11-7df6-2a1c4f4949ab",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192aea7debf,
          },
          "e-192": {
            id: "e-192",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInLeft",
                autoStopEventId: "e-2380",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942be",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942be",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 550,
              direction: "LEFT",
              effectIn: !0,
            },
            createdOn: 0x18b6f56a62f,
          },
          "e-194": {
            id: "e-194",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-33",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2144",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942c3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942c3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18b6f55b1e5,
          },
          "e-196": {
            id: "e-196",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-2242",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942ca",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942ca",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 350,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18b6f562cce,
          },
          "e-197": {
            id: "e-197",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-2158",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942cc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942cc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 450,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18b6f5664ef,
          },
          "e-200": {
            id: "e-200",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-2241",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942d3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942d3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 100,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18b6f592d78,
          },
          "e-202": {
            id: "e-202",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-33",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2369",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942d6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942d6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18b6f5752f0,
          },
          "e-204": {
            id: "e-204",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-2237",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942da",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942da",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 350,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18b6f579177,
          },
          "e-206": {
            id: "e-206",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-2243",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942de",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942de",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 450,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18b6f57d22e,
          },
          "e-207": {
            id: "e-207",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-2823",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942e1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942e1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 550,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18b6f580a81,
          },
          "e-210": {
            id: "e-210",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-2377",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942e2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942e2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 650,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18b6f58400e,
          },
          "e-212": {
            id: "e-212",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-2066",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942e3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69a1effbfc73428264c97a9d|90d9a012-5a79-4b64-4a98-5b21d3e942e3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 750,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18b6f58867e,
          },
        },
        actionLists: {
          a: {
            id: "a",
            title: "accordion-open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-body",
                        selectorGuids: ["25b2c5d1-40d5-da39-d21f-87f474f931c8"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-n-7",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus",
                        selectorGuids: ["3644a033-5204-b374-9ac5-4c61d31cda7c"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-8",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus",
                        selectorGuids: ["3644a033-5204-b374-9ac5-4c61d31cda7c"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-n-9",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-body",
                        selectorGuids: ["25b2c5d1-40d5-da39-d21f-87f474f931c8"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196a8f527db,
          },
          "a-2": {
            id: "a-2",
            title: "accordion-close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-2-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".accordion-body",
                        selectorGuids: ["25b2c5d1-40d5-da39-d21f-87f474f931c8"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-2-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".plus",
                        selectorGuids: ["3644a033-5204-b374-9ac5-4c61d31cda7c"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x196a8f527db,
          },
          "a-4": {
            id: "a-4",
            title: "team-card-hover",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-4-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-social",
                        selectorGuids: ["ad4fa045-c76f-7bd1-8c7e-0af7865422f8"],
                      },
                      xValue: null,
                      yValue: 65,
                      xUnit: "%",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-4-n-11",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-img",
                        selectorGuids: ["c6134e01-2a00-1e0f-64ee-d064ebd6b1ca"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-4-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-social",
                        selectorGuids: ["ad4fa045-c76f-7bd1-8c7e-0af7865422f8"],
                      },
                      xValue: null,
                      yValue: 0,
                      xUnit: "%",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-4-n-10",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-img",
                        selectorGuids: ["c6134e01-2a00-1e0f-64ee-d064ebd6b1ca"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1998057e64f,
          },
          "a-24": {
            id: "a-24",
            title: "team-card-hover-out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-24-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-social",
                        selectorGuids: ["ad4fa045-c76f-7bd1-8c7e-0af7865422f8"],
                      },
                      xValue: null,
                      yValue: 65,
                      xUnit: "%",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-24-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".team-img",
                        selectorGuids: ["c6134e01-2a00-1e0f-64ee-d064ebd6b1ca"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1998057e64f,
          },
          "a-6": {
            id: "a-6",
            title: "service-item-hover",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-coll-wrap",
                        selectorGuids: ["53a5f7df-86df-299c-b51a-a1cb3eb96123"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-6-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-info",
                        selectorGuids: ["42804548-3ab0-27c7-c488-d40dabd09b75"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-6-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-title",
                        selectorGuids: ["f717f6db-8e76-3cdb-3412-b39436f7af0d"],
                      },
                      globalSwatchId: "--gray--300",
                      rValue: 200,
                      bValue: 200,
                      gValue: 200,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-6-n-7",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-number",
                        selectorGuids: ["8b68ee16-1401-6992-e073-4ce933981fe9"],
                      },
                      globalSwatchId: "--gray--300",
                      rValue: 200,
                      bValue: 200,
                      gValue: 200,
                      aValue: 1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-6-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-coll-wrap",
                        selectorGuids: ["53a5f7df-86df-299c-b51a-a1cb3eb96123"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-6-n-6",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-title",
                        selectorGuids: ["f717f6db-8e76-3cdb-3412-b39436f7af0d"],
                      },
                      globalSwatchId: "--dark--100",
                      rValue: 1,
                      bValue: 1,
                      gValue: 1,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-6-n-5",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-info",
                        selectorGuids: ["42804548-3ab0-27c7-c488-d40dabd09b75"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-6-n-8",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-number",
                        selectorGuids: ["8b68ee16-1401-6992-e073-4ce933981fe9"],
                      },
                      globalSwatchId: "--dark--100",
                      rValue: 1,
                      bValue: 1,
                      gValue: 1,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19986112b7a,
          },
          "a-7": {
            id: "a-7",
            title: "service-item-hover-out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-7-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-coll-wrap",
                        selectorGuids: ["53a5f7df-86df-299c-b51a-a1cb3eb96123"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-7-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-info",
                        selectorGuids: ["42804548-3ab0-27c7-c488-d40dabd09b75"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-7-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-title",
                        selectorGuids: ["f717f6db-8e76-3cdb-3412-b39436f7af0d"],
                      },
                      globalSwatchId: "--gray--300",
                      rValue: 200,
                      bValue: 200,
                      gValue: 200,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-7-n-4",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-number",
                        selectorGuids: ["8b68ee16-1401-6992-e073-4ce933981fe9"],
                      },
                      globalSwatchId: "--gray--300",
                      rValue: 200,
                      bValue: 200,
                      gValue: 200,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19986112b7a,
          },
          "a-8": {
            id: "a-8",
            title: "social-link-hover",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-8-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-link",
                        selectorGuids: ["8e5b0d30-a977-7968-ac4e-2125c5fa4107"],
                      },
                      globalSwatchId: "--white--100",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-8-n-3",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-icon",
                        selectorGuids: ["4509d585-b929-6122-404e-f00136c135e9"],
                      },
                      filters: [
                        {
                          type: "brightness",
                          filterId: "3a3e",
                          value: 0,
                          unit: "%",
                        },
                        {
                          type: "invert",
                          filterId: "72df",
                          value: 0,
                          unit: "%",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-8-n-4",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-link",
                        selectorGuids: ["8e5b0d30-a977-7968-ac4e-2125c5fa4107"],
                      },
                      globalSwatchId: "--dark--100",
                      rValue: 1,
                      bValue: 1,
                      gValue: 1,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-8-n-2",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-icon",
                        selectorGuids: ["4509d585-b929-6122-404e-f00136c135e9"],
                      },
                      filters: [
                        {
                          type: "brightness",
                          filterId: "3a3e",
                          value: 0,
                          unit: "%",
                        },
                        {
                          type: "invert",
                          filterId: "72df",
                          value: 100,
                          unit: "%",
                        },
                      ],
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19994c882ce,
          },
          "a-9": {
            id: "a-9",
            title: "social-link-hover-out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-9-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-link",
                        selectorGuids: ["8e5b0d30-a977-7968-ac4e-2125c5fa4107"],
                      },
                      globalSwatchId: "--white--100",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-9-n-2",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-icon",
                        selectorGuids: ["4509d585-b929-6122-404e-f00136c135e9"],
                      },
                      filters: [
                        {
                          type: "brightness",
                          filterId: "3a3e",
                          value: 0,
                          unit: "%",
                        },
                        {
                          type: "invert",
                          filterId: "72df",
                          value: 0,
                          unit: "%",
                        },
                      ],
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19994c882ce,
          },
          "a-10": {
            id: "a-10",
            title: "offcanvas-open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-10-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".offcanvas-main",
                        selectorGuids: ["313c1d2f-162b-3a8e-36c6-ea1b964fd5bd"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-10-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".offcanvas-main",
                        selectorGuids: ["313c1d2f-162b-3a8e-36c6-ea1b964fd5bd"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-10-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".offcanvas-nav",
                        selectorGuids: ["5574f9c4-9d0b-682b-2af6-7de3f94c4bf3"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-10-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".offcanvas-nav",
                        selectorGuids: ["5574f9c4-9d0b-682b-2af6-7de3f94c4bf3"],
                      },
                      yValue: 50,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-10-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".offcanvas-main",
                        selectorGuids: ["313c1d2f-162b-3a8e-36c6-ea1b964fd5bd"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-10-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        selector: ".offcanvas-main",
                        selectorGuids: ["313c1d2f-162b-3a8e-36c6-ea1b964fd5bd"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-10-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "",
                      duration: 400,
                      target: {
                        selector: ".offcanvas-nav",
                        selectorGuids: ["5574f9c4-9d0b-682b-2af6-7de3f94c4bf3"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-10-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".offcanvas-nav",
                        selectorGuids: ["5574f9c4-9d0b-682b-2af6-7de3f94c4bf3"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19999e3f09d,
          },
          "a-11": {
            id: "a-11",
            title: "offcanvas-close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-11-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        selector: ".offcanvas-main",
                        selectorGuids: ["313c1d2f-162b-3a8e-36c6-ea1b964fd5bd"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-11-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        selector: ".offcanvas-nav",
                        selectorGuids: ["5574f9c4-9d0b-682b-2af6-7de3f94c4bf3"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-11-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        selector: ".offcanvas-nav",
                        selectorGuids: ["5574f9c4-9d0b-682b-2af6-7de3f94c4bf3"],
                      },
                      yValue: 50,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19999e3f09d,
          },
          "a-12": {
            id: "a-12",
            title: "solution-move-anim",
            continuousParameterGroups: [
              {
                id: "a-12-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 15,
                    actionItems: [
                      {
                        id: "a-12-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".solution-card._1st",
                            selectorGuids: [
                              "4d2f695a-114c-7b91-30b7-7fe72b61ff74",
                              "0682a5fb-7655-0913-cf34-c927fbbda7bb",
                            ],
                          },
                          xValue: 100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-12-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".solution-card.last",
                            selectorGuids: [
                              "4d2f695a-114c-7b91-30b7-7fe72b61ff74",
                              "0f1e90fe-7014-54e6-a7cb-bdf7365d96c0",
                            ],
                          },
                          xValue: -100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 60,
                    actionItems: [
                      {
                        id: "a-12-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".solution-card._1st",
                            selectorGuids: [
                              "4d2f695a-114c-7b91-30b7-7fe72b61ff74",
                              "0682a5fb-7655-0913-cf34-c927fbbda7bb",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-12-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".solution-card.last",
                            selectorGuids: [
                              "4d2f695a-114c-7b91-30b7-7fe72b61ff74",
                              "0f1e90fe-7014-54e6-a7cb-bdf7365d96c0",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1999a02d68d,
          },
          "a-13": {
            id: "a-13",
            title: "text-invert-animation",
            continuousParameterGroups: [
              {
                id: "a-13-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 13,
                    actionItems: [
                      {
                        id: "a-13-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".invert-line._1st",
                            selectorGuids: [
                              "3f9933c2-1496-664a-c1cf-439701d55b2d",
                              "6ef655f7-ccc1-84b4-87bf-f100548a71a1",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 16,
                    actionItems: [
                      {
                        id: "a-13-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".invert-line._1st",
                            selectorGuids: [
                              "3f9933c2-1496-664a-c1cf-439701d55b2d",
                              "6ef655f7-ccc1-84b4-87bf-f100548a71a1",
                            ],
                          },
                          xValue: 100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 19,
                    actionItems: [
                      {
                        id: "a-13-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".invert-line._2nd",
                            selectorGuids: [
                              "3f9933c2-1496-664a-c1cf-439701d55b2d",
                              "82800cdc-0720-2d50-27e7-e9b662f44589",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 22,
                    actionItems: [
                      {
                        id: "a-13-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".invert-line._2nd",
                            selectorGuids: [
                              "3f9933c2-1496-664a-c1cf-439701d55b2d",
                              "82800cdc-0720-2d50-27e7-e9b662f44589",
                            ],
                          },
                          xValue: 100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 25,
                    actionItems: [
                      {
                        id: "a-13-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".invert-line._3rd",
                            selectorGuids: [
                              "3f9933c2-1496-664a-c1cf-439701d55b2d",
                              "b028447f-2540-25d4-4624-f2c64a8bcc57",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 28,
                    actionItems: [
                      {
                        id: "a-13-n-8",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".invert-line._3rd",
                            selectorGuids: [
                              "3f9933c2-1496-664a-c1cf-439701d55b2d",
                              "b028447f-2540-25d4-4624-f2c64a8bcc57",
                            ],
                          },
                          xValue: 100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 31,
                    actionItems: [
                      {
                        id: "a-13-n-9",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".invert-line._4rd",
                            selectorGuids: [
                              "3f9933c2-1496-664a-c1cf-439701d55b2d",
                              "4b413ef6-89d3-4095-5cb3-ca758961e467",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 34,
                    actionItems: [
                      {
                        id: "a-13-n-10",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".invert-line._4rd",
                            selectorGuids: [
                              "3f9933c2-1496-664a-c1cf-439701d55b2d",
                              "4b413ef6-89d3-4095-5cb3-ca758961e467",
                            ],
                          },
                          xValue: 100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 37,
                    actionItems: [
                      {
                        id: "a-13-n-11",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".invert-line._5th",
                            selectorGuids: [
                              "3f9933c2-1496-664a-c1cf-439701d55b2d",
                              "9f27dc86-c93e-e676-dbc1-a63802219d8f",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 40,
                    actionItems: [
                      {
                        id: "a-13-n-12",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".invert-line._5th",
                            selectorGuids: [
                              "3f9933c2-1496-664a-c1cf-439701d55b2d",
                              "9f27dc86-c93e-e676-dbc1-a63802219d8f",
                            ],
                          },
                          xValue: 100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 43,
                    actionItems: [
                      {
                        id: "a-13-n-13",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".invert-line._6th",
                            selectorGuids: [
                              "3f9933c2-1496-664a-c1cf-439701d55b2d",
                              "cf920253-78f3-d63d-d857-c011fefbedb8",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 47,
                    actionItems: [
                      {
                        id: "a-13-n-14",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".invert-line._6th",
                            selectorGuids: [
                              "3f9933c2-1496-664a-c1cf-439701d55b2d",
                              "cf920253-78f3-d63d-d857-c011fefbedb8",
                            ],
                          },
                          xValue: 100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1999a172018,
          },
          "a-14": {
            id: "a-14",
            title: "reveal-animation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-14-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".reveal-frame",
                        selectorGuids: ["a7bfad1b-5683-c528-d423-3ecf9777323e"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-14-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".reveal-frame",
                        selectorGuids: ["a7bfad1b-5683-c528-d423-3ecf9777323e"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-14-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".reveal-wrap",
                        selectorGuids: ["3594e5d8-7fe8-5347-8d3e-94ebb3863877"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-14-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".reveal-frame",
                        selectorGuids: ["a7bfad1b-5683-c528-d423-3ecf9777323e"],
                      },
                      widthValue: 0,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-14-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 1300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".reveal-wrap",
                        selectorGuids: ["3594e5d8-7fe8-5347-8d3e-94ebb3863877"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1999a5450c5,
          },
          "a-16": {
            id: "a-16",
            title: "counter",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-16-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".counter-number._1st",
                        selectorGuids: [
                          "d46a19ff-0a5a-6921-c58c-82c74bd3eff2",
                          "2921a376-c8f2-aede-9f8e-934db10ca7ef",
                        ],
                      },
                      yValue: -150,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".counter-number._2nd",
                        selectorGuids: [
                          "d46a19ff-0a5a-6921-c58c-82c74bd3eff2",
                          "29a2ebb6-7da4-66e5-0cf8-8d1c20218943",
                        ],
                      },
                      yValue: -150,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".counter-number._3rd",
                        selectorGuids: [
                          "d46a19ff-0a5a-6921-c58c-82c74bd3eff2",
                          "94e4cb2b-bd8b-cce3-c0ff-a22beb74c83d",
                        ],
                      },
                      yValue: -150,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-16-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".counter-number._1st",
                        selectorGuids: [
                          "d46a19ff-0a5a-6921-c58c-82c74bd3eff2",
                          "2921a376-c8f2-aede-9f8e-934db10ca7ef",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".counter-number._2nd",
                        selectorGuids: [
                          "d46a19ff-0a5a-6921-c58c-82c74bd3eff2",
                          "29a2ebb6-7da4-66e5-0cf8-8d1c20218943",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".counter-number._3rd",
                        selectorGuids: [
                          "d46a19ff-0a5a-6921-c58c-82c74bd3eff2",
                          "94e4cb2b-bd8b-cce3-c0ff-a22beb74c83d",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1999a7b3a3d,
          },
          "a-17": {
            id: "a-17",
            title: "blog-item-hover",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-17-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blog-thumb",
                        selectorGuids: ["f9ac1c58-3533-ec16-be7c-2a64624b5f4e"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-17-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blog-thumb",
                        selectorGuids: ["f9ac1c58-3533-ec16-be7c-2a64624b5f4e"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1999e4cede4,
          },
          "a-18": {
            id: "a-18",
            title: "blog-item-hover-out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-18-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blog-thumb",
                        selectorGuids: ["f9ac1c58-3533-ec16-be7c-2a64624b5f4e"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1999e4cede4,
          },
          "a-25": {
            id: "a-25",
            title: "social-link-hover-two",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-25-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-link-two",
                        selectorGuids: ["f34e2900-919a-07bb-49e3-4c4344b94a10"],
                      },
                      globalSwatchId: "--white--200",
                      rValue: 245,
                      bValue: 245,
                      gValue: 245,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-25-n-2",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-icon",
                        selectorGuids: ["4509d585-b929-6122-404e-f00136c135e9"],
                      },
                      filters: [
                        {
                          type: "brightness",
                          filterId: "3a3e",
                          value: 0,
                          unit: "%",
                        },
                        {
                          type: "invert",
                          filterId: "72df",
                          value: 0,
                          unit: "%",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-25-n-3",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-link-two",
                        selectorGuids: ["f34e2900-919a-07bb-49e3-4c4344b94a10"],
                      },
                      globalSwatchId: "--dark--100",
                      rValue: 1,
                      bValue: 1,
                      gValue: 1,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-25-n-4",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-icon",
                        selectorGuids: ["4509d585-b929-6122-404e-f00136c135e9"],
                      },
                      filters: [
                        {
                          type: "brightness",
                          filterId: "3a3e",
                          value: 0,
                          unit: "%",
                        },
                        {
                          type: "invert",
                          filterId: "72df",
                          value: 100,
                          unit: "%",
                        },
                      ],
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19994c882ce,
          },
          "a-26": {
            id: "a-26",
            title: "social-link-hover-out-two",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-26-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-link-two",
                        selectorGuids: ["f34e2900-919a-07bb-49e3-4c4344b94a10"],
                      },
                      globalSwatchId: "--white--200",
                      rValue: 245,
                      bValue: 245,
                      gValue: 245,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-26-n-2",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".social-icon",
                        selectorGuids: ["4509d585-b929-6122-404e-f00136c135e9"],
                      },
                      filters: [
                        {
                          type: "brightness",
                          filterId: "3a3e",
                          value: 0,
                          unit: "%",
                        },
                        {
                          type: "invert",
                          filterId: "72df",
                          value: 0,
                          unit: "%",
                        },
                      ],
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19994c882ce,
          },
          "a-27": {
            id: "a-27",
            title: "avatar-circle",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-27-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".avatar-list",
                        selectorGuids: ["8d1f3942-0466-347d-5397-d40897096cef"],
                      },
                      xValue: null,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-27-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".story-img",
                        selectorGuids: ["16bbc90d-8720-6c67-c310-4b8d3406b740"],
                      },
                      xValue: null,
                      zValue: -360,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-27-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 5e4,
                      target: {
                        selector: ".avatar-list",
                        selectorGuids: ["8d1f3942-0466-347d-5397-d40897096cef"],
                      },
                      xValue: null,
                      zValue: 360,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-27-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".story-img",
                        selectorGuids: ["16bbc90d-8720-6c67-c310-4b8d3406b740"],
                      },
                      xValue: null,
                      zValue: -360,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19a06417a73,
          },
          "a-28": {
            id: "a-28",
            title: "footer-link-hover",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-28-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-link-two",
                        selectorGuids: ["90da5a62-10d5-8392-6812-b8aea3f2de83"],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow-right",
                        selectorGuids: ["512bd918-8260-82f1-0a06-662c45504666"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-28-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-link-two",
                        selectorGuids: ["90da5a62-10d5-8392-6812-b8aea3f2de83"],
                      },
                      xValue: 20,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow-right",
                        selectorGuids: ["512bd918-8260-82f1-0a06-662c45504666"],
                      },
                      zValue: -45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19a065ab9c6,
          },
          "a-29": {
            id: "a-29",
            title: "footer-link-hover-out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-29-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-link-two",
                        selectorGuids: ["90da5a62-10d5-8392-6812-b8aea3f2de83"],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-29-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow-right",
                        selectorGuids: ["512bd918-8260-82f1-0a06-662c45504666"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19a065ab9c6,
          },
          "a-22": {
            id: "a-22",
            title: "blog-two-hover",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-22-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "69a1effbfc73428264c97a8d|8acb99e0-e54a-5837-fcdc-107642048991",
                      },
                      widthValue: 630,
                      heightValue: 540,
                      widthUnit: "px",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-22-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: !0,
                        id: "69a1effbfc73428264c97a8d|8acb99e0-e54a-5837-fcdc-107642048991",
                      },
                      widthValue: 768,
                      heightValue: 540,
                      widthUnit: "px",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x199a3442862,
          },
          "a-23": {
            id: "a-23",
            title: "blog-two-hover-out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-23-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blog-item-box",
                        selectorGuids: ["9a7e2db6-069f-bf67-3aad-14ea424ce94f"],
                      },
                      widthValue: 630,
                      heightValue: 540,
                      widthUnit: "px",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x199a3442862,
          },
          "a-30": {
            id: "a-30",
            title: "Home Three Marquee Right Text",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-30-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rt-marque-text-two",
                        selectorGuids: ["886b460e-6a6d-7358-2af8-d9ce5660da3d"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-30-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 2e4,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rt-marque-text-two",
                        selectorGuids: ["886b460e-6a6d-7358-2af8-d9ce5660da3d"],
                      },
                      xValue: 100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-30-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rt-marque-text-two",
                        selectorGuids: ["886b460e-6a6d-7358-2af8-d9ce5660da3d"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x189d8c361d3,
          },
          "a-33": {
            id: "a-33",
            title: "Text Animation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-33-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "67161afc1ce764caff503795|82a0f478-b393-5af9-3ed2-167932f66c81",
                      },
                      yValue: 120,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-33-n-2",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "67161afc1ce764caff503795|82a0f478-b393-5af9-3ed2-167932f66c81",
                      },
                      xValue: -10,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-33-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "outCubic",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "67161afc1ce764caff503795|82a0f478-b393-5af9-3ed2-167932f66c81",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-33-n-4",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 200,
                      easing: "outCubic",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "67161afc1ce764caff503795|82a0f478-b393-5af9-3ed2-167932f66c81",
                      },
                      xValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18a974b77f5,
          },
          growIn: {
            id: "growIn",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0.7500000000000001,
                      yValue: 0.7500000000000001,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 1,
                      yValue: 1,
                    },
                  },
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
          slideInTop: {
            id: "slideInTop",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
          slideInBottom: {
            id: "slideInBottom",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
          slideInLeft: {
            id: "slideInLeft",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: -100,
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
