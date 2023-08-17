/*! For license information please see browserviewer.js.LICENSE.txt */
import * as __WEBPACK_EXTERNAL_MODULE__customize_js_4be904b8__ from'./customize.js';
var __webpack_modules__ = {
  452: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      s(8269),
      s(8214),
      s(888),
      s(5109),
      function () {
        var t = e,
        i = t.R._,
        s = t.I,
        n = [],
        o = [],
        r = [],
        h = [],
        a = [],
        c = [],
        l = [],
        _ = [],
        u = [],
        d = [];
        !function () {
          for (var t = [], i = 0; i < 256; i++) t[i] = i < 128 ? i << 1 : i << 1 ^ 283;
          var s = 0,
          e = 0;
          for (i = 0; i < 256; i++) {
            var f = e ^ e << 1 ^ e << 2 ^ e << 3 ^ e << 4;
            f = f >>> 8 ^ 255 & f ^ 99,
            n[s] = f,
            o[f] = s;
            var E = t[s],
            R = t[E],
            I = t[R],
            g = 257 * t[f] ^ 16843008 * f;
            r[s] = g << 24 | g >>> 8,
            h[s] = g << 16 | g >>> 16,
            a[s] = g << 8 | g >>> 24,
            c[s] = g,
            g = 16843009 * I ^ 65537 * R ^ 257 * E ^ 16843008 * s,
            l[f] = g << 24 | g >>> 8,
            _[f] = g << 16 | g >>> 16,
            u[f] = g << 8 | g >>> 24,
            d[f] = g,
            s ? (s = E ^ t[t[t[I ^ E]]], e ^= t[t[e]]) : s = e = 1
          }
        }();
        var f = [
          0,
          1,
          2,
          4,
          8,
          16,
          32,
          64,
          128,
          27,
          54
        ],
        E = s.g = i.extend({
          O: function () {
            if (!this.P || this.D !== this.T) {
              for (
                var t = this.D = this.T,
                i = t.L,
                s = t.A / 4,
                e = 4 * ((this.P = s + 6) + 1),
                o = this.C = [],
                r = 0;
                r < e;
                r++
              ) r < s ? o[r] = i[r] : (
                c = o[r - 1],
                r % s ? s > 6 &&
                r % s == 4 &&
                (c = n[c >>> 24] << 24 | n[c >>> 16 & 255] << 16 | n[c >>> 8 & 255] << 8 | n[255 & c]) : (
                  c = n[(c = c << 8 | c >>> 24) >>> 24] << 24 | n[c >>> 16 & 255] << 16 | n[c >>> 8 & 255] << 8 | n[255 & c],
                  c ^= f[r / s | 0] << 24
                ),
                o[r] = o[r - s] ^ c
              );
              for (var h = this.B = [], a = 0; a < e; a++) {
                if (r = e - a, a % 4) var c = o[r];
                 else c = o[r - 4];
                h[a] = a < 4 ||
                r <= 4 ? c : l[n[c >>> 24]] ^ _[n[c >>> 16 & 255]] ^ u[n[c >>> 8 & 255]] ^ d[n[255 & c]]
              }
            }
          },
          S: function (t, i) {
            this.N(t, i, this.C, r, h, a, c, n)
          },
          M: function (t, i) {
            var s = t[i + 1];
            t[i + 1] = t[i + 3],
            t[i + 3] = s,
            this.N(t, i, this.B, l, _, u, d, o),
            s = t[i + 1],
            t[i + 1] = t[i + 3],
            t[i + 3] = s
          },
          N: function (t, i, s, e, n, o, r, h) {
            for (
              var a = this.P,
              c = t[i] ^ s[0],
              l = t[i + 1] ^ s[1],
              _ = t[i + 2] ^ s[2],
              u = t[i + 3] ^ s[3],
              d = 4,
              f = 1;
              f < a;
              f++
            ) {
              var E = e[c >>> 24] ^ n[l >>> 16 & 255] ^ o[_ >>> 8 & 255] ^ r[255 & u] ^ s[d++],
              R = e[l >>> 24] ^ n[_ >>> 16 & 255] ^ o[u >>> 8 & 255] ^ r[255 & c] ^ s[d++],
              I = e[_ >>> 24] ^ n[u >>> 16 & 255] ^ o[c >>> 8 & 255] ^ r[255 & l] ^ s[d++],
              g = e[u >>> 24] ^ n[c >>> 16 & 255] ^ o[l >>> 8 & 255] ^ r[255 & _] ^ s[d++];
              c = E,
              l = R,
              _ = I,
              u = g
            }
            E = (h[c >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[_ >>> 8 & 255] << 8 | h[255 & u]) ^ s[d++],
            R = (h[l >>> 24] << 24 | h[_ >>> 16 & 255] << 16 | h[u >>> 8 & 255] << 8 | h[255 & c]) ^ s[d++],
            I = (h[_ >>> 24] << 24 | h[u >>> 16 & 255] << 16 | h[c >>> 8 & 255] << 8 | h[255 & l]) ^ s[d++],
            g = (h[u >>> 24] << 24 | h[c >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & _]) ^ s[d++],
            t[i] = E,
            t[i + 1] = R,
            t[i + 2] = I,
            t[i + 3] = g
          },
          G: 8
        });
        t.g = i.V(E)
      }(),
      e.g
    )
  },
  5109: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      s(888),
      void (
        e.R.W ||
        function (t) {
          var i = e,
          s = i.R,
          n = s.$,
          o = s.K,
          r = s.U,
          h = i.F,
          a = (h.X, h.H),
          c = i.I.j,
          l = s.W = r.extend({
            q: n.extend(),
            J: function (t, i) {
              return this.create(this.Y, t, i)
            },
            Z: function (t, i) {
              return this.create(this.tt, t, i)
            },
            init: function (t, i, s) {
              this.q = this.q.extend(s),
              this.it = t,
              this.T = i,
              this.reset()
            },
            reset: function () {
              r.reset.call(this),
              this.O()
            },
            process: function (t) {
              return this.st(t),
              this.et()
            },
            nt: function (t) {
              return t &&
              this.st(t),
              this.ot()
            },
            G: 4,
            rt: 4,
            Y: 1,
            tt: 2,
            V: function () {
              function t(t) {
                return 'string' == typeof t ? O : I
              }
              return function (i) {
                return {
                  encrypt: function (s, e, n) {
                    return t(e).encrypt(i, s, e, n)
                  },
                  decrypt: function (s, e, n) {
                    return t(e).decrypt(i, s, e, n)
                  }
                }
              }
            }()
          }),
          _ = (
            s.ht = l.extend({
              ot: function () {
                return this.et(!0)
              },
              blockSize: 1
            }),
            i.mode = {}
          ),
          u = s.ct = n.extend({
            J: function (t, i) {
              return this.lt.create(t, i)
            },
            Z: function (t, i) {
              return this._t.create(t, i)
            },
            init: function (t, i) {
              this.ut = t,
              this.dt = i
            }
          }),
          d = _.ft = function () {
            var i = u.extend();
            function s(i, s, e) {
              var n,
              o = this.dt;
              o ? (n = o, this.dt = t) : n = this.Et;
              for (var r = 0; r < e; r++) i[s + r] ^= n[r]
            }
            return i.lt = i.extend({
              Rt: function (t, i) {
                var e = this.ut,
                n = e.blockSize;
                s.call(this, t, i, n),
                e.S(t, i),
                this.Et = t.slice(i, i + n)
              }
            }),
            i._t = i.extend({
              Rt: function (t, i) {
                var e = this.ut,
                n = e.blockSize,
                o = t.slice(i, i + n);
                e.M(t, i),
                s.call(this, t, i, n),
                this.Et = o
              }
            }),
            i
          }(),
          f = (i.pad = {}).It = {
            pad: function (t, i) {
              for (var s = 4 * i, e = s - t.A % s, n = e << 24 | e << 16 | e << 8 | e, r = [], h = 0; h < e; h += 4) r.push(n);
              var a = o.create(r, e);
              t.concat(a)
            },
            gt: function (t) {
              var i = 255 & t.L[t.A - 1 >>> 2];
              t.A -= i
            }
          },
          E = (
            s._ = l.extend({
              q: l.q.extend({
                mode: d,
                padding: f
              }),
              reset: function () {
                var t;
                l.reset.call(this);
                var i = this.q,
                s = i.iv,
                e = i.mode;
                this.it == this.Y ? t = e.J : (t = e.Z, this.Ot = 1),
                this.wt &&
                this.wt.vt == t ? this.wt.init(this, s && s.L) : (this.wt = t.call(e, this, s && s.L), this.wt.vt = t)
              },
              Pt: function (t, i) {
                this.wt.Rt(t, i)
              },
              ot: function () {
                var t,
                i = this.q.padding;
                return this.it == this.Y ? (i.pad(this.Dt, this.blockSize), t = this.et(!0)) : (t = this.et(!0), i.gt(t)),
                t
              },
              blockSize: 4
            }),
            s.Tt = n.extend({
              init: function (t) {
                this.bt(t)
              },
              toString: function (t) {
                return (t || this.yt).stringify(this)
              }
            })
          ),
          R = (i.format = {}).Lt = {
            stringify: function (t) {
              var i = t.ciphertext,
              s = t.At;
              return (s ? o.create([1398893684,
              1701076831]).concat(s).concat(i) : i).toString(a)
            },
            parse: function (t) {
              var i,
              s = a.parse(t),
              e = s.L;
              return 1398893684 == e[0] &&
              1701076831 == e[1] &&
              (i = o.create(e.slice(2, 4)), e.splice(0, 4), s.A -= 16),
              E.create({
                ciphertext: s,
                At: i
              })
            }
          },
          I = s.Ct = n.extend({
            q: n.extend({
              format: R
            }),
            encrypt: function (t, i, s, e) {
              e = this.q.extend(e);
              var n = t.J(s, e),
              o = n.nt(i),
              r = n.q;
              return E.create({
                ciphertext: o,
                key: s,
                iv: r.iv,
                algorithm: t,
                mode: r.mode,
                padding: r.padding,
                blockSize: t.blockSize,
                yt: e.format
              })
            },
            decrypt: function (t, i, s, e) {
              return e = this.q.extend(e),
              i = this.kt(i, e.format),
              t.Z(s, e).nt(i.ciphertext)
            },
            kt: function (t, i) {
              return 'string' == typeof t ? i.parse(t, this) : t
            }
          }),
          g = (i.Bt = {}).Lt = {
            St: function (t, i, s, e) {
              e ||
              (e = o.random(8));
              var n = c.create({
                G: i + s
              }).Nt(t, e),
              r = o.create(n.L.slice(i), 4 * s);
              return n.A = 4 * i,
              E.create({
                key: n,
                iv: r,
                At: e
              })
            }
          },
          O = s.Mt = I.extend({
            q: I.q.extend({
              Bt: g
            }),
            encrypt: function (t, i, s, e) {
              var n = (e = this.q.extend(e)).Bt.St(s, t.G, t.rt);
              e.iv = n.iv;
              var o = I.encrypt.call(this, t, i, n.key, e);
              return o.bt(n),
              o
            },
            decrypt: function (t, i, s, e) {
              e = this.q.extend(e),
              i = this.kt(i, e.format);
              var n = e.Bt.St(s, t.G, t.rt, i.At);
              return e.iv = n.iv,
              I.decrypt.call(this, t, i, n.key, e)
            }
          })
        }()
      )
    )
  },
  8249: function (t, i, s) {
    var e;
    t.exports = e = e ||
    function (t, i) {
      var e;
      if (
        'undefined' != typeof window &&
        window.crypto &&
        (e = window.crypto),
        'undefined' != typeof self &&
        self.crypto &&
        (e = self.crypto),
        'undefined' != typeof globalThis &&
        globalThis.crypto &&
        (e = globalThis.crypto),
        !e &&
        'undefined' != typeof window &&
        window.msCrypto &&
        (e = window.msCrypto),
        !e &&
        void 0 !== s.xt &&
        s.xt.crypto &&
        (e = s.xt.crypto),
        !e
      ) try {
        e = s(2480)
      } catch (t) {
      }
      var n = function () {
        if (e) {
          if ('function' == typeof e.getRandomValues) try {
            return e.getRandomValues(new Uint32Array(1)) [0]
          } catch (t) {
          }
          if ('function' == typeof e.Gt) try {
            return e.Gt(4).Vt()
          } catch (t) {
          }
        }
        throw new Error(
          'Native crypto module could not be used to get secure random number.'
        )
      },
      o = Object.create ||
      function () {
        function t() {
        }
        return function (i) {
          var s;
          return t.prototype = i,
          s = new t,
          t.prototype = null,
          s
        }
      }(),
      r = {},
      h = r.R = {},
      a = h.$ = {
        extend: function (t) {
          var i = o(this);
          return t &&
          i.bt(t),
          i.hasOwnProperty('init') &&
          this.init !== i.init ||
          (i.init = function () {
            i.Wt.init.apply(this, arguments)
          }),
          i.init.prototype = i,
          i.Wt = this,
          i
        },
        create: function () {
          var t = this.extend();
          return t.init.apply(t, arguments),
          t
        },
        init: function () {
        },
        bt: function (t) {
          for (var i in t) t.hasOwnProperty(i) &&
          (this[i] = t[i]);
          t.hasOwnProperty('toString') &&
          (this.toString = t.toString)
        },
        clone: function () {
          return this.init.prototype.extend(this)
        }
      },
      c = h.K = a.extend({
        init: function (t, s) {
          t = this.L = t ||
          [],
          this.A = s != i ? s : 4 * t.length
        },
        toString: function (t) {
          return (t || _).stringify(this)
        },
        concat: function (t) {
          var i = this.L,
          s = t.L,
          e = this.A,
          n = t.A;
          if (this.$t(), e % 4) for (var o = 0; o < n; o++) {
            var r = s[o >>> 2] >>> 24 - o % 4 * 8 & 255;
            i[e + o >>> 2] |= r << 24 - (e + o) % 4 * 8
          } else for (var h = 0; h < n; h += 4) i[e + h >>> 2] = s[h >>> 2];
          return this.A += n,
          this
        },
        $t: function () {
          var i = this.L,
          s = this.A;
          i[s >>> 2] &= 4294967295 << 32 - s % 4 * 8,
          i.length = t.ceil(s / 4)
        },
        clone: function () {
          var t = a.clone.call(this);
          return t.L = this.L.slice(0),
          t
        },
        random: function (t) {
          for (var i = [], s = 0; s < t; s += 4) i.push(n());
          return new c.init(i, t)
        }
      }),
      l = r.F = {},
      _ = l.Kt = {
        stringify: function (t) {
          for (var i = t.L, s = t.A, e = [], n = 0; n < s; n++) {
            var o = i[n >>> 2] >>> 24 - n % 4 * 8 & 255;
            e.push((o >>> 4).toString(16)),
            e.push((15 & o).toString(16))
          }
          return e.join('')
        },
        parse: function (t) {
          for (var i = t.length, s = [], e = 0; e < i; e += 2) s[e >>> 3] |= parseInt(t.substr(e, 2), 16) << 24 - e % 8 * 4;
          return new c.init(s, i / 2)
        }
      },
      u = l.Ut = {
        stringify: function (t) {
          for (var i = t.L, s = t.A, e = [], n = 0; n < s; n++) {
            var o = i[n >>> 2] >>> 24 - n % 4 * 8 & 255;
            e.push(String.fromCharCode(o))
          }
          return e.join('')
        },
        parse: function (t) {
          for (var i = t.length, s = [], e = 0; e < i; e++) s[e >>> 2] |= (255 & t.charCodeAt(e)) << 24 - e % 4 * 8;
          return new c.init(s, i)
        }
      },
      d = l.X = {
        stringify: function (t) {
          try {
            return decodeURIComponent(escape(u.stringify(t)))
          } catch (t) {
            throw new Error('Malformed UTF-8 data')
          }
        },
        parse: function (t) {
          return u.parse(unescape(encodeURIComponent(t)))
        }
      },
      f = h.U = a.extend({
        reset: function () {
          this.Dt = new c.init,
          this.Ft = 0
        },
        st: function (t) {
          'string' == typeof t &&
          (t = d.parse(t)),
          this.Dt.concat(t),
          this.Ft += t.A
        },
        et: function (i) {
          var s,
          e = this.Dt,
          n = e.L,
          o = e.A,
          r = this.blockSize,
          h = o / (4 * r),
          a = (h = i ? t.ceil(h) : t.max((0 | h) - this.Ot, 0)) * r,
          l = t.min(4 * a, o);
          if (a) {
            for (var _ = 0; _ < a; _ += r) this.Pt(n, _);
            s = n.splice(0, a),
            e.A -= l
          }
          return new c.init(s, l)
        },
        clone: function () {
          var t = a.clone.call(this);
          return t.Dt = this.Dt.clone(),
          t
        },
        Ot: 0
      }),
      E = (
        h.Xt = f.extend({
          q: a.extend(),
          init: function (t) {
            this.q = this.q.extend(t),
            this.reset()
          },
          reset: function () {
            f.reset.call(this),
            this.O()
          },
          update: function (t) {
            return this.st(t),
            this.et(),
            this
          },
          nt: function (t) {
            return t &&
            this.st(t),
            this.ot()
          },
          blockSize: 16,
          V: function (t) {
            return function (i, s) {
              return new t.init(s).nt(i)
            }
          },
          zt: function (t) {
            return function (i, s) {
              return new E.Ht.init(t, s).nt(i)
            }
          }
        }),
        r.I = {}
      );
      return r
    }(Math)
  },
  8269: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      function () {
        var t = e,
        i = t.R.K;
        function s(t, s, e) {
          for (var n = [], o = 0, r = 0; r < s; r++) if (r % 4) {
            var h = e[t.charCodeAt(r - 1)] << r % 4 * 2 | e[t.charCodeAt(r)] >>> 6 - r % 4 * 2;
            n[o >>> 2] |= h << 24 - o % 4 * 8,
            o++
          }
          return i.create(n, o)
        }
        t.F.H = {
          stringify: function (t) {
            var i = t.L,
            s = t.A,
            e = this.jt;
            t.$t();
            for (var n = [], o = 0; o < s; o += 3) for (
              var r = (i[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (i[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | i[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255,
              h = 0;
              h < 4 &&
              o + 0.75 * h < s;
              h++
            ) n.push(e.charAt(r >>> 6 * (3 - h) & 63));
            var a = e.charAt(64);
            if (a) for (; n.length % 4; ) n.push(a);
            return n.join('')
          },
          parse: function (t) {
            var i = t.length,
            e = this.jt,
            n = this.qt;
            if (!n) {
              n = this.qt = [];
              for (var o = 0; o < e.length; o++) n[e.charCodeAt(o)] = o
            }
            var r = e.charAt(64);
            if (r) {
              var h = t.indexOf(r);
              - 1 !== h &&
              (i = h)
            }
            return s(t, i, n)
          },
          jt: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
        }
      }(),
      e.F.H
    )
  },
  3786: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      function () {
        var t = e,
        i = t.R.K;
        function s(t, s, e) {
          for (var n = [], o = 0, r = 0; r < s; r++) if (r % 4) {
            var h = e[t.charCodeAt(r - 1)] << r % 4 * 2 | e[t.charCodeAt(r)] >>> 6 - r % 4 * 2;
            n[o >>> 2] |= h << 24 - o % 4 * 8,
            o++
          }
          return i.create(n, o)
        }
        t.F.Jt = {
          stringify: function (t, i = !0) {
            var s = t.L,
            e = t.A,
            n = i ? this.Yt : this.jt;
            t.$t();
            for (var o = [], r = 0; r < e; r += 3) for (
              var h = (s[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (s[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | s[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255,
              a = 0;
              a < 4 &&
              r + 0.75 * a < e;
              a++
            ) o.push(n.charAt(h >>> 6 * (3 - a) & 63));
            var c = n.charAt(64);
            if (c) for (; o.length % 4; ) o.push(c);
            return o.join('')
          },
          parse: function (t, i = !0) {
            var e = t.length,
            n = i ? this.Yt : this.jt,
            o = this.qt;
            if (!o) {
              o = this.qt = [];
              for (var r = 0; r < n.length; r++) o[n.charCodeAt(r)] = r
            }
            var h = n.charAt(64);
            if (h) {
              var a = t.indexOf(h);
              - 1 !== a &&
              (e = a)
            }
            return s(t, e, o)
          },
          jt: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          Yt: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
        }
      }(),
      e.F.Jt
    )
  },
  298: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      function () {
        var t = e,
        i = t.R.K,
        s = t.F;
        function n(t) {
          return t << 8 & 4278255360 | t >>> 8 & 16711935
        }
        s.Zt = s.Qt = {
          stringify: function (t) {
            for (var i = t.L, s = t.A, e = [], n = 0; n < s; n += 2) {
              var o = i[n >>> 2] >>> 16 - n % 4 * 8 & 65535;
              e.push(String.fromCharCode(o))
            }
            return e.join('')
          },
          parse: function (t) {
            for (var s = t.length, e = [], n = 0; n < s; n++) e[n >>> 1] |= t.charCodeAt(n) << 16 - n % 2 * 16;
            return i.create(e, 2 * s)
          }
        },
        s.ti = {
          stringify: function (t) {
            for (var i = t.L, s = t.A, e = [], o = 0; o < s; o += 2) {
              var r = n(i[o >>> 2] >>> 16 - o % 4 * 8 & 65535);
              e.push(String.fromCharCode(r))
            }
            return e.join('')
          },
          parse: function (t) {
            for (var s = t.length, e = [], o = 0; o < s; o++) e[o >>> 1] |= n(t.charCodeAt(o) << 16 - o % 2 * 16);
            return i.create(e, 2 * s)
          }
        }
      }(),
      e.F.Zt
    )
  },
  888: function (t, i, s) {
    var e,
    n,
    o,
    r,
    h,
    a,
    c,
    l;
    t.exports = (
      l = s(8249),
      s(2783),
      s(9824),
      o = (n = (e = l).R).$,
      r = n.K,
      a = (h = e.I).ii,
      c = h.j = o.extend({
        q: o.extend({
          G: 4,
          si: a,
          ei: 1
        }),
        init: function (t) {
          this.q = this.q.extend(t)
        },
        Nt: function (t, i) {
          for (
            var s,
            e = this.q,
            n = e.si.create(),
            o = r.create(),
            h = o.L,
            a = e.G,
            c = e.ei;
            h.length < a;
          ) {
            s &&
            n.update(s),
            s = n.update(t).nt(i),
            n.reset();
            for (var l = 1; l < c; l++) s = n.nt(s),
            n.reset();
            o.concat(s)
          }
          return o.A = 4 * a,
          o
        }
      }),
      e.j = function (t, i, s) {
        return c.create(s).Nt(t, i)
      },
      l.j
    )
  },
  2209: function (t, i, s) {
    var e,
    n,
    o,
    r;
    t.exports = (
      r = s(8249),
      s(5109),
      n = (e = r).R.Tt,
      o = e.F.Kt,
      e.format.Kt = {
        stringify: function (t) {
          return t.ciphertext.toString(o)
        },
        parse: function (t) {
          var i = o.parse(t);
          return n.create({
            ciphertext: i
          })
        }
      },
      r.format.Kt
    )
  },
  9824: function (t, i, s) {
    var e,
    n,
    o,
    r;
    t.exports = (
      o = (n = e = s(8249)).R.$,
      r = n.F.X,
      void (
        n.I.Ht = o.extend({
          init: function (t, i) {
            t = this.ni = new t.init,
            'string' == typeof i &&
            (i = r.parse(i));
            var s = t.blockSize,
            e = 4 * s;
            i.A > e &&
            (i = t.nt(i)),
            i.$t();
            for (
              var n = this.oi = i.clone(),
              o = this.ri = i.clone(),
              h = n.L,
              a = o.L,
              c = 0;
              c < s;
              c++
            ) h[c] ^= 1549556828,
            a[c] ^= 909522486;
            n.A = o.A = e,
            this.reset()
          },
          reset: function () {
            var t = this.ni;
            t.reset(),
            t.update(this.ri)
          },
          update: function (t) {
            return this.ni.update(t),
            this
          },
          nt: function (t) {
            var i = this.ni,
            s = i.nt(t);
            return i.reset(),
            i.nt(this.oi.clone().concat(s))
          }
        })
      )
    )
  },
  1354: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      s(4938),
      s(4433),
      s(298),
      s(8269),
      s(3786),
      s(8214),
      s(2783),
      s(2153),
      s(7792),
      s(34),
      s(7460),
      s(3327),
      s(706),
      s(9824),
      s(2112),
      s(888),
      s(5109),
      s(8568),
      s(4242),
      s(9968),
      s(7660),
      s(1148),
      s(3615),
      s(2807),
      s(1077),
      s(6475),
      s(6991),
      s(2209),
      s(452),
      s(4253),
      s(1857),
      s(4454),
      s(3974),
      e
    )
  },
  4433: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      function () {
        if ('function' == typeof ArrayBuffer) {
          var t = e.R.K,
          i = t.init,
          s;
          (
            t.init = function (t) {
              if (
                t instanceof ArrayBuffer &&
                (t = new Uint8Array(t)),
                (
                  t instanceof Int8Array ||
                  'undefined' != typeof Uint8ClampedArray &&
                  t instanceof Uint8ClampedArray ||
                  t instanceof Int16Array ||
                  t instanceof Uint16Array ||
                  t instanceof Int32Array ||
                  t instanceof Uint32Array ||
                  t instanceof Float32Array ||
                  t instanceof Float64Array
                ) &&
                (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)),
                t instanceof Uint8Array
              ) {
                for (var s = t.byteLength, e = [], n = 0; n < s; n++) e[n >>> 2] |= t[n] << 24 - n % 4 * 8;
                i.call(this, e, s)
              } else i.apply(this, arguments)
            }
          ).prototype = t
        }
      }(),
      e.R.K
    )
  },
  8214: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      function (t) {
        var i = e,
        s = i.R,
        n = s.K,
        o = s.Xt,
        r = i.I,
        h = [];
        !function () {
          for (var i = 0; i < 64; i++) h[i] = 4294967296 * t.abs(t.sin(i + 1)) | 0
        }();
        var a = r.ii = o.extend({
          O: function () {
            this.hi = new n.init([1732584193,
            4023233417,
            2562383102,
            271733878])
          },
          Pt: function (t, i) {
            for (var s = 0; s < 16; s++) {
              var e = i + s,
              n = t[e];
              t[e] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8)
            }
            var o = this.hi.L,
            r = t[i + 0],
            a = t[i + 1],
            d = t[i + 2],
            f = t[i + 3],
            E = t[i + 4],
            R = t[i + 5],
            I = t[i + 6],
            g = t[i + 7],
            O = t[i + 8],
            w = t[i + 9],
            p = t[i + 10],
            m = t[i + 11],
            v = t[i + 12],
            P = t[i + 13],
            D = t[i + 14],
            T = t[i + 15],
            b = o[0],
            y = o[1],
            L = o[2],
            A = o[3];
            b = c(b, y, L, A, r, 7, h[0]),
            A = c(A, b, y, L, a, 12, h[1]),
            L = c(L, A, b, y, d, 17, h[2]),
            y = c(y, L, A, b, f, 22, h[3]),
            b = c(b, y, L, A, E, 7, h[4]),
            A = c(A, b, y, L, R, 12, h[5]),
            L = c(L, A, b, y, I, 17, h[6]),
            y = c(y, L, A, b, g, 22, h[7]),
            b = c(b, y, L, A, O, 7, h[8]),
            A = c(A, b, y, L, w, 12, h[9]),
            L = c(L, A, b, y, p, 17, h[10]),
            y = c(y, L, A, b, m, 22, h[11]),
            b = c(b, y, L, A, v, 7, h[12]),
            A = c(A, b, y, L, P, 12, h[13]),
            L = c(L, A, b, y, D, 17, h[14]),
            b = l(b, y = c(y, L, A, b, T, 22, h[15]), L, A, a, 5, h[16]),
            A = l(A, b, y, L, I, 9, h[17]),
            L = l(L, A, b, y, m, 14, h[18]),
            y = l(y, L, A, b, r, 20, h[19]),
            b = l(b, y, L, A, R, 5, h[20]),
            A = l(A, b, y, L, p, 9, h[21]),
            L = l(L, A, b, y, T, 14, h[22]),
            y = l(y, L, A, b, E, 20, h[23]),
            b = l(b, y, L, A, w, 5, h[24]),
            A = l(A, b, y, L, D, 9, h[25]),
            L = l(L, A, b, y, f, 14, h[26]),
            y = l(y, L, A, b, O, 20, h[27]),
            b = l(b, y, L, A, P, 5, h[28]),
            A = l(A, b, y, L, d, 9, h[29]),
            L = l(L, A, b, y, g, 14, h[30]),
            b = _(b, y = l(y, L, A, b, v, 20, h[31]), L, A, R, 4, h[32]),
            A = _(A, b, y, L, O, 11, h[33]),
            L = _(L, A, b, y, m, 16, h[34]),
            y = _(y, L, A, b, D, 23, h[35]),
            b = _(b, y, L, A, a, 4, h[36]),
            A = _(A, b, y, L, E, 11, h[37]),
            L = _(L, A, b, y, g, 16, h[38]),
            y = _(y, L, A, b, p, 23, h[39]),
            b = _(b, y, L, A, P, 4, h[40]),
            A = _(A, b, y, L, r, 11, h[41]),
            L = _(L, A, b, y, f, 16, h[42]),
            y = _(y, L, A, b, I, 23, h[43]),
            b = _(b, y, L, A, w, 4, h[44]),
            A = _(A, b, y, L, v, 11, h[45]),
            L = _(L, A, b, y, T, 16, h[46]),
            b = u(b, y = _(y, L, A, b, d, 23, h[47]), L, A, r, 6, h[48]),
            A = u(A, b, y, L, g, 10, h[49]),
            L = u(L, A, b, y, D, 15, h[50]),
            y = u(y, L, A, b, R, 21, h[51]),
            b = u(b, y, L, A, v, 6, h[52]),
            A = u(A, b, y, L, f, 10, h[53]),
            L = u(L, A, b, y, p, 15, h[54]),
            y = u(y, L, A, b, a, 21, h[55]),
            b = u(b, y, L, A, O, 6, h[56]),
            A = u(A, b, y, L, T, 10, h[57]),
            L = u(L, A, b, y, I, 15, h[58]),
            y = u(y, L, A, b, P, 21, h[59]),
            b = u(b, y, L, A, E, 6, h[60]),
            A = u(A, b, y, L, m, 10, h[61]),
            L = u(L, A, b, y, d, 15, h[62]),
            y = u(y, L, A, b, w, 21, h[63]),
            o[0] = o[0] + b | 0,
            o[1] = o[1] + y | 0,
            o[2] = o[2] + L | 0,
            o[3] = o[3] + A | 0
          },
          ot: function () {
            var i = this.Dt,
            s = i.L,
            e = 8 * this.Ft,
            n = 8 * i.A;
            s[n >>> 5] |= 128 << 24 - n % 32;
            var o = t.floor(e / 4294967296),
            r = e;
            s[15 + (n + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
            s[14 + (n + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8),
            i.A = 4 * (s.length + 1),
            this.et();
            for (var h = this.hi, a = h.L, c = 0; c < 4; c++) {
              var l = a[c];
              a[c] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
            }
            return h
          },
          clone: function () {
            var t = o.clone.call(this);
            return t.hi = this.hi.clone(),
            t
          }
        });
        function c(t, i, s, e, n, o, r) {
          var h = t + (i & s | ~i & e) + n + r;
          return (h << o | h >>> 32 - o) + i
        }
        function l(t, i, s, e, n, o, r) {
          var h = t + (i & e | s & ~e) + n + r;
          return (h << o | h >>> 32 - o) + i
        }
        function _(t, i, s, e, n, o, r) {
          var h = t + (i ^ s ^ e) + n + r;
          return (h << o | h >>> 32 - o) + i
        }
        function u(t, i, s, e, n, o, r) {
          var h = t + (s ^ (i | ~e)) + n + r;
          return (h << o | h >>> 32 - o) + i
        }
        i.ii = o.V(a),
        i.ai = o.zt(a)
      }(Math),
      e.ii
    )
  },
  8568: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      s(5109),
      e.mode.ci = function () {
        var t = e.R.ct.extend();
        function i(t, i, s, e) {
          var n,
          o = this.dt;
          o ? (n = o.slice(0), this.dt = void 0) : n = this.Et,
          e.S(n, 0);
          for (var r = 0; r < s; r++) t[i + r] ^= n[r]
        }
        return t.lt = t.extend({
          Rt: function (t, s) {
            var e = this.ut,
            n = e.blockSize;
            i.call(this, t, s, n, e),
            this.Et = t.slice(s, s + n)
          }
        }),
        t._t = t.extend({
          Rt: function (t, s) {
            var e = this.ut,
            n = e.blockSize,
            o = t.slice(s, s + n);
            i.call(this, t, s, n, e),
            this.Et = o
          }
        }),
        t
      }(),
      e.mode.ci
    )
  },
  9968: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      s(5109),
      e.mode.li = function () {
        var t = e.R.ct.extend();
        function i(t) {
          if (255 == (t >> 24 & 255)) {
            var i = t >> 16 & 255,
            s = t >> 8 & 255,
            e = 255 & t;
            255 === i ? (i = 0, 255 === s ? (s = 0, 255 === e ? e = 0 : ++e) : ++s) : ++i,
            t = 0,
            t += i << 16,
            t += s << 8,
            t += e
          } else t += 1 << 24;
          return t
        }
        function s(t) {
          return 0 === (t[0] = i(t[0])) &&
          (t[1] = i(t[1])),
          t
        }
        var n = t.lt = t.extend({
          Rt: function (t, i) {
            var e = this.ut,
            n = e.blockSize,
            o = this.dt,
            r = this._i;
            o &&
            (r = this._i = o.slice(0), this.dt = void 0),
            s(r);
            var h = r.slice(0);
            e.S(h, 0);
            for (var a = 0; a < n; a++) t[i + a] ^= h[a]
          }
        });
        return t._t = n,
        t
      }(),
      e.mode.li
    )
  },
  4242: function (t, i, s) {
    var e,
    n,
    o;
    t.exports = (
      o = s(8249),
      s(5109),
      o.mode.ui = (
        n = (e = o.R.ct.extend()).lt = e.extend({
          Rt: function (t, i) {
            var s = this.ut,
            e = s.blockSize,
            n = this.dt,
            o = this._i;
            n &&
            (o = this._i = n.slice(0), this.dt = void 0);
            var r = o.slice(0);
            s.S(r, 0),
            o[e - 1] = o[e - 1] + 1 | 0;
            for (var h = 0; h < e; h++) t[i + h] ^= r[h]
          }
        }),
        e._t = n,
        e
      ),
      o.mode.ui
    )
  },
  1148: function (t, i, s) {
    var e,
    n;
    t.exports = (
      n = s(8249),
      s(5109),
      n.mode.di = (
        (e = n.R.ct.extend()).lt = e.extend({
          Rt: function (t, i) {
            this.ut.S(t, i)
          }
        }),
        e._t = e.extend({
          Rt: function (t, i) {
            this.ut.M(t, i)
          }
        }),
        e
      ),
      n.mode.di
    )
  },
  7660: function (t, i, s) {
    var e,
    n,
    o;
    t.exports = (
      o = s(8249),
      s(5109),
      o.mode.fi = (
        n = (e = o.R.ct.extend()).lt = e.extend({
          Rt: function (t, i) {
            var s = this.ut,
            e = s.blockSize,
            n = this.dt,
            o = this.Ei;
            n &&
            (o = this.Ei = n.slice(0), this.dt = void 0),
            s.S(o, 0);
            for (var r = 0; r < e; r++) t[i + r] ^= o[r]
          }
        }),
        e._t = n,
        e
      ),
      o.mode.fi
    )
  },
  3615: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      s(5109),
      e.pad.Ri = {
        pad: function (t, i) {
          var s = t.A,
          e = 4 * i,
          n = e - s % e,
          o = s + n - 1;
          t.$t(),
          t.L[o >>> 2] |= n << 24 - o % 4 * 8,
          t.A += n
        },
        gt: function (t) {
          var i = 255 & t.L[t.A - 1 >>> 2];
          t.A -= i
        }
      },
      e.pad.Ii
    )
  },
  2807: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      s(5109),
      e.pad.gi = {
        pad: function (t, i) {
          var s = 4 * i,
          n = s - t.A % s;
          t.concat(e.R.K.random(n - 1)).concat(e.R.K.create([n << 24], 1))
        },
        gt: function (t) {
          var i = 255 & t.L[t.A - 1 >>> 2];
          t.A -= i
        }
      },
      e.pad.gi
    )
  },
  1077: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      s(5109),
      e.pad.Oi = {
        pad: function (t, i) {
          t.concat(e.R.K.create([2147483648], 1)),
          e.pad.wi.pad(t, i)
        },
        gt: function (t) {
          e.pad.wi.gt(t),
          t.A--
        }
      },
      e.pad.Oi
    )
  },
  6991: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      s(5109),
      e.pad.pi = {
        pad: function () {
        },
        gt: function () {
        }
      },
      e.pad.pi
    )
  },
  6475: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      s(5109),
      e.pad.wi = {
        pad: function (t, i) {
          var s = 4 * i;
          t.$t(),
          t.A += s - (t.A % s || s)
        },
        gt: function (t) {
          var i = t.L,
          s = t.A - 1;
          for (s = t.A - 1; s >= 0; s--) if (i[s >>> 2] >>> 24 - s % 4 * 8 & 255) {
            t.A = s + 1;
            break
          }
        }
      },
      e.pad.wi
    )
  },
  2112: function (t, i, s) {
    var e,
    n,
    o,
    r,
    h,
    a,
    c,
    l,
    _;
    t.exports = (
      _ = s(8249),
      s(2783),
      s(9824),
      o = (n = (e = _).R).$,
      r = n.K,
      a = (h = e.I).mi,
      c = h.Ht,
      l = h.vi = o.extend({
        q: o.extend({
          G: 4,
          si: a,
          ei: 1
        }),
        init: function (t) {
          this.q = this.q.extend(t)
        },
        Nt: function (t, i) {
          for (
            var s = this.q,
            e = c.create(s.si, t),
            n = r.create(),
            o = r.create([1]),
            h = n.L,
            a = o.L,
            l = s.G,
            _ = s.ei;
            h.length < l;
          ) {
            var u = e.update(i).nt(o);
            e.reset();
            for (var d = u.L, f = d.length, E = u, R = 1; R < _; R++) {
              E = e.nt(E),
              e.reset();
              for (var I = E.L, g = 0; g < f; g++) d[g] ^= I[g]
            }
            n.concat(u),
            a[0]++
          }
          return n.A = 4 * l,
          n
        }
      }),
      e.vi = function (t, i, s) {
        return l.create(s).Nt(t, i)
      },
      _.vi
    )
  },
  3974: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      s(8269),
      s(8214),
      s(888),
      s(5109),
      function () {
        var t = e,
        i = t.R.ht,
        s = t.I,
        n = [],
        o = [],
        r = [],
        h = s.Pi = i.extend({
          O: function () {
            var t = this.T.L,
            i = this.q.iv,
            s = this.Di = [
              t[0],
              t[3] << 16 | t[2] >>> 16,
              t[1],
              t[0] << 16 | t[3] >>> 16,
              t[2],
              t[1] << 16 | t[0] >>> 16,
              t[3],
              t[2] << 16 | t[1] >>> 16
            ],
            e = this.Ti = [
              t[2] << 16 | t[2] >>> 16,
              4294901760 & t[0] | 65535 & t[1],
              t[3] << 16 | t[3] >>> 16,
              4294901760 & t[1] | 65535 & t[2],
              t[0] << 16 | t[0] >>> 16,
              4294901760 & t[2] | 65535 & t[3],
              t[1] << 16 | t[1] >>> 16,
              4294901760 & t[3] | 65535 & t[0]
            ];
            this.bi = 0;
            for (var n = 0; n < 4; n++) a.call(this);
            for (n = 0; n < 8; n++) e[n] ^= s[n + 4 & 7];
            if (i) {
              var o = i.L,
              r = o[0],
              h = o[1],
              c = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8),
              l = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8),
              _ = c >>> 16 | 4294901760 & l,
              u = l << 16 | 65535 & c;
              for (
                e[0] ^= c,
                e[1] ^= _,
                e[2] ^= l,
                e[3] ^= u,
                e[4] ^= c,
                e[5] ^= _,
                e[6] ^= l,
                e[7] ^= u,
                n = 0;
                n < 4;
                n++
              ) a.call(this)
            }
          },
          Pt: function (t, i) {
            var s = this.Di;
            a.call(this),
            n[0] = s[0] ^ s[5] >>> 16 ^ s[3] << 16,
            n[1] = s[2] ^ s[7] >>> 16 ^ s[5] << 16,
            n[2] = s[4] ^ s[1] >>> 16 ^ s[7] << 16,
            n[3] = s[6] ^ s[3] >>> 16 ^ s[1] << 16;
            for (var e = 0; e < 4; e++) n[e] = 16711935 & (n[e] << 8 | n[e] >>> 24) | 4278255360 & (n[e] << 24 | n[e] >>> 8),
            t[i + e] ^= n[e]
          },
          blockSize: 4,
          rt: 2
        });
        function a() {
          for (var t = this.Di, i = this.Ti, s = 0; s < 8; s++) o[s] = i[s];
          for (
            i[0] = i[0] + 1295307597 + this.bi | 0,
            i[1] = i[1] + 3545052371 + (i[0] >>> 0 < o[0] >>> 0 ? 1 : 0) | 0,
            i[2] = i[2] + 886263092 + (i[1] >>> 0 < o[1] >>> 0 ? 1 : 0) | 0,
            i[3] = i[3] + 1295307597 + (i[2] >>> 0 < o[2] >>> 0 ? 1 : 0) | 0,
            i[4] = i[4] + 3545052371 + (i[3] >>> 0 < o[3] >>> 0 ? 1 : 0) | 0,
            i[5] = i[5] + 886263092 + (i[4] >>> 0 < o[4] >>> 0 ? 1 : 0) | 0,
            i[6] = i[6] + 1295307597 + (i[5] >>> 0 < o[5] >>> 0 ? 1 : 0) | 0,
            i[7] = i[7] + 3545052371 + (i[6] >>> 0 < o[6] >>> 0 ? 1 : 0) | 0,
            this.bi = i[7] >>> 0 < o[7] >>> 0 ? 1 : 0,
            s = 0;
            s < 8;
            s++
          ) {
            var e = t[s] + i[s],
            n = 65535 & e,
            h = e >>> 16,
            a = ((n * n >>> 17) + n * h >>> 15) + h * h,
            c = ((4294901760 & e) * e | 0) + ((65535 & e) * e | 0);
            r[s] = a ^ c
          }
          t[0] = r[0] + (r[7] << 16 | r[7] >>> 16) + (r[6] << 16 | r[6] >>> 16) | 0,
          t[1] = r[1] + (r[0] << 8 | r[0] >>> 24) + r[7] | 0,
          t[2] = r[2] + (r[1] << 16 | r[1] >>> 16) + (r[0] << 16 | r[0] >>> 16) | 0,
          t[3] = r[3] + (r[2] << 8 | r[2] >>> 24) + r[1] | 0,
          t[4] = r[4] + (r[3] << 16 | r[3] >>> 16) + (r[2] << 16 | r[2] >>> 16) | 0,
          t[5] = r[5] + (r[4] << 8 | r[4] >>> 24) + r[3] | 0,
          t[6] = r[6] + (r[5] << 16 | r[5] >>> 16) + (r[4] << 16 | r[4] >>> 16) | 0,
          t[7] = r[7] + (r[6] << 8 | r[6] >>> 24) + r[5] | 0
        }
        t.Pi = i.V(h)
      }(),
      e.Pi
    )
  },
  4454: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      s(8269),
      s(8214),
      s(888),
      s(5109),
      function () {
        var t = e,
        i = t.R.ht,
        s = t.I,
        n = [],
        o = [],
        r = [],
        h = s.yi = i.extend({
          O: function () {
            for (var t = this.T.L, i = this.q.iv, s = 0; s < 4; s++) t[s] = 16711935 & (t[s] << 8 | t[s] >>> 24) | 4278255360 & (t[s] << 24 | t[s] >>> 8);
            var e = this.Di = [
              t[0],
              t[3] << 16 | t[2] >>> 16,
              t[1],
              t[0] << 16 | t[3] >>> 16,
              t[2],
              t[1] << 16 | t[0] >>> 16,
              t[3],
              t[2] << 16 | t[1] >>> 16
            ],
            n = this.Ti = [
              t[2] << 16 | t[2] >>> 16,
              4294901760 & t[0] | 65535 & t[1],
              t[3] << 16 | t[3] >>> 16,
              4294901760 & t[1] | 65535 & t[2],
              t[0] << 16 | t[0] >>> 16,
              4294901760 & t[2] | 65535 & t[3],
              t[1] << 16 | t[1] >>> 16,
              4294901760 & t[3] | 65535 & t[0]
            ];
            for (this.bi = 0, s = 0; s < 4; s++) a.call(this);
            for (s = 0; s < 8; s++) n[s] ^= e[s + 4 & 7];
            if (i) {
              var o = i.L,
              r = o[0],
              h = o[1],
              c = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8),
              l = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8),
              _ = c >>> 16 | 4294901760 & l,
              u = l << 16 | 65535 & c;
              for (
                n[0] ^= c,
                n[1] ^= _,
                n[2] ^= l,
                n[3] ^= u,
                n[4] ^= c,
                n[5] ^= _,
                n[6] ^= l,
                n[7] ^= u,
                s = 0;
                s < 4;
                s++
              ) a.call(this)
            }
          },
          Pt: function (t, i) {
            var s = this.Di;
            a.call(this),
            n[0] = s[0] ^ s[5] >>> 16 ^ s[3] << 16,
            n[1] = s[2] ^ s[7] >>> 16 ^ s[5] << 16,
            n[2] = s[4] ^ s[1] >>> 16 ^ s[7] << 16,
            n[3] = s[6] ^ s[3] >>> 16 ^ s[1] << 16;
            for (var e = 0; e < 4; e++) n[e] = 16711935 & (n[e] << 8 | n[e] >>> 24) | 4278255360 & (n[e] << 24 | n[e] >>> 8),
            t[i + e] ^= n[e]
          },
          blockSize: 4,
          rt: 2
        });
        function a() {
          for (var t = this.Di, i = this.Ti, s = 0; s < 8; s++) o[s] = i[s];
          for (
            i[0] = i[0] + 1295307597 + this.bi | 0,
            i[1] = i[1] + 3545052371 + (i[0] >>> 0 < o[0] >>> 0 ? 1 : 0) | 0,
            i[2] = i[2] + 886263092 + (i[1] >>> 0 < o[1] >>> 0 ? 1 : 0) | 0,
            i[3] = i[3] + 1295307597 + (i[2] >>> 0 < o[2] >>> 0 ? 1 : 0) | 0,
            i[4] = i[4] + 3545052371 + (i[3] >>> 0 < o[3] >>> 0 ? 1 : 0) | 0,
            i[5] = i[5] + 886263092 + (i[4] >>> 0 < o[4] >>> 0 ? 1 : 0) | 0,
            i[6] = i[6] + 1295307597 + (i[5] >>> 0 < o[5] >>> 0 ? 1 : 0) | 0,
            i[7] = i[7] + 3545052371 + (i[6] >>> 0 < o[6] >>> 0 ? 1 : 0) | 0,
            this.bi = i[7] >>> 0 < o[7] >>> 0 ? 1 : 0,
            s = 0;
            s < 8;
            s++
          ) {
            var e = t[s] + i[s],
            n = 65535 & e,
            h = e >>> 16,
            a = ((n * n >>> 17) + n * h >>> 15) + h * h,
            c = ((4294901760 & e) * e | 0) + ((65535 & e) * e | 0);
            r[s] = a ^ c
          }
          t[0] = r[0] + (r[7] << 16 | r[7] >>> 16) + (r[6] << 16 | r[6] >>> 16) | 0,
          t[1] = r[1] + (r[0] << 8 | r[0] >>> 24) + r[7] | 0,
          t[2] = r[2] + (r[1] << 16 | r[1] >>> 16) + (r[0] << 16 | r[0] >>> 16) | 0,
          t[3] = r[3] + (r[2] << 8 | r[2] >>> 24) + r[1] | 0,
          t[4] = r[4] + (r[3] << 16 | r[3] >>> 16) + (r[2] << 16 | r[2] >>> 16) | 0,
          t[5] = r[5] + (r[4] << 8 | r[4] >>> 24) + r[3] | 0,
          t[6] = r[6] + (r[5] << 16 | r[5] >>> 16) + (r[4] << 16 | r[4] >>> 16) | 0,
          t[7] = r[7] + (r[6] << 8 | r[6] >>> 24) + r[5] | 0
        }
        t.yi = i.V(h)
      }(),
      e.yi
    )
  },
  1857: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      s(8269),
      s(8214),
      s(888),
      s(5109),
      function () {
        var t = e,
        i = t.R.ht,
        s = t.I,
        n = s.Li = i.extend({
          O: function () {
            for (var t = this.T, i = t.L, s = t.A, e = this.Ai = [], n = 0; n < 256; n++) e[n] = n;
            n = 0;
            for (var o = 0; n < 256; n++) {
              var r = n % s,
              h = i[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              o = (o + e[n] + h) % 256;
              var a = e[n];
              e[n] = e[o],
              e[o] = a
            }
            this.Ci = this.ki = 0
          },
          Pt: function (t, i) {
            t[i] ^= o.call(this)
          },
          G: 8,
          rt: 0
        });
        function o() {
          for (var t = this.Ai, i = this.Ci, s = this.ki, e = 0, n = 0; n < 4; n++) {
            s = (s + t[i = (i + 1) % 256]) % 256;
            var o = t[i];
            t[i] = t[s],
            t[s] = o,
            e |= t[(t[i] + t[s]) % 256] << 24 - 8 * n
          }
          return this.Ci = i,
          this.ki = s,
          e
        }
        t.Li = i.V(n);
        var r = s.Bi = n.extend({
          q: n.q.extend({
            Si: 192
          }),
          O: function () {
            n.O.call(this);
            for (var t = this.q.Si; t > 0; t--) o.call(this)
          }
        });
        t.Bi = i.V(r)
      }(),
      e.Li
    )
  },
  706: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      function (t) {
        var i = e,
        s = i.R,
        n = s.K,
        o = s.Xt,
        r = i.I,
        h = n.create(
          [0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13]
        ),
        a = n.create(
          [5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11]
        ),
        c = n.create(
          [11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6]
        ),
        l = n.create(
          [8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11]
        ),
        _ = n.create([0,
        1518500249,
        1859775393,
        2400959708,
        2840853838]),
        u = n.create([1352829926,
        1548603684,
        1836072691,
        2053994217,
        0]),
        d = r.Ni = o.extend({
          O: function () {
            this.hi = n.create([1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520])
          },
          Pt: function (t, i) {
            for (var s = 0; s < 16; s++) {
              var e = i + s,
              n = t[e];
              t[e] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8)
            }
            var o,
            r,
            d,
            w,
            p,
            m,
            v,
            P,
            D,
            T,
            b,
            y = this.hi.L,
            L = _.L,
            A = u.L,
            C = h.L,
            k = a.L,
            B = c.L,
            S = l.L;
            for (m = o = y[0], v = r = y[1], P = d = y[2], D = w = y[3], T = p = y[4], s = 0; s < 80; s += 1) b = o + t[i + C[s]] | 0,
            b += s < 16 ? f(r, d, w) + L[0] : s < 32 ? E(r, d, w) + L[1] : s < 48 ? R(r, d, w) + L[2] : s < 64 ? I(r, d, w) + L[3] : g(r, d, w) + L[4],
            b = (b = O(b |= 0, B[s])) + p | 0,
            o = p,
            p = w,
            w = O(d, 10),
            d = r,
            r = b,
            b = m + t[i + k[s]] | 0,
            b += s < 16 ? g(v, P, D) + A[0] : s < 32 ? I(v, P, D) + A[1] : s < 48 ? R(v, P, D) + A[2] : s < 64 ? E(v, P, D) + A[3] : f(v, P, D) + A[4],
            b = (b = O(b |= 0, S[s])) + T | 0,
            m = T,
            T = D,
            D = O(P, 10),
            P = v,
            v = b;
            b = y[1] + d + D | 0,
            y[1] = y[2] + w + T | 0,
            y[2] = y[3] + p + m | 0,
            y[3] = y[4] + o + v | 0,
            y[4] = y[0] + r + P | 0,
            y[0] = b
          },
          ot: function () {
            var t = this.Dt,
            i = t.L,
            s = 8 * this.Ft,
            e = 8 * t.A;
            i[e >>> 5] |= 128 << 24 - e % 32,
            i[14 + (e + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
            t.A = 4 * (i.length + 1),
            this.et();
            for (var n = this.hi, o = n.L, r = 0; r < 5; r++) {
              var h = o[r];
              o[r] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8)
            }
            return n
          },
          clone: function () {
            var t = o.clone.call(this);
            return t.hi = this.hi.clone(),
            t
          }
        });
        function f(t, i, s) {
          return t ^ i ^ s
        }
        function E(t, i, s) {
          return t & i | ~t & s
        }
        function R(t, i, s) {
          return (t | ~i) ^ s
        }
        function I(t, i, s) {
          return t & s | i & ~s
        }
        function g(t, i, s) {
          return t ^ (i | ~s)
        }
        function O(t, i) {
          return t << i | t >>> 32 - i
        }
        i.Ni = o.V(d),
        i.Mi = o.zt(d)
      }(Math),
      e.Ni
    )
  },
  2783: function (t, i, s) {
    var e,
    n,
    o,
    r,
    h,
    a,
    c,
    l;
    t.exports = (
      n = (e = l = s(8249)).R,
      o = n.K,
      r = n.Xt,
      h = e.I,
      a = [],
      c = h.mi = r.extend({
        O: function () {
          this.hi = new o.init([1732584193,
          4023233417,
          2562383102,
          271733878,
          3285377520])
        },
        Pt: function (t, i) {
          for (
            var s = this.hi.L,
            e = s[0],
            n = s[1],
            o = s[2],
            r = s[3],
            h = s[4],
            c = 0;
            c < 80;
            c++
          ) {
            if (c < 16) a[c] = 0 | t[i + c];
             else {
              var l = a[c - 3] ^ a[c - 8] ^ a[c - 14] ^ a[c - 16];
              a[c] = l << 1 | l >>> 31
            }
            var _ = (e << 5 | e >>> 27) + h + a[c];
            _ += c < 20 ? 1518500249 + (n & o | ~n & r) : c < 40 ? 1859775393 + (n ^ o ^ r) : c < 60 ? (n & o | n & r | o & r) - 1894007588 : (n ^ o ^ r) - 899497514,
            h = r,
            r = o,
            o = n << 30 | n >>> 2,
            n = e,
            e = _
          }
          s[0] = s[0] + e | 0,
          s[1] = s[1] + n | 0,
          s[2] = s[2] + o | 0,
          s[3] = s[3] + r | 0,
          s[4] = s[4] + h | 0
        },
        ot: function () {
          var t = this.Dt,
          i = t.L,
          s = 8 * this.Ft,
          e = 8 * t.A;
          return i[e >>> 5] |= 128 << 24 - e % 32,
          i[14 + (e + 64 >>> 9 << 4)] = Math.floor(s / 4294967296),
          i[15 + (e + 64 >>> 9 << 4)] = s,
          t.A = 4 * i.length,
          this.et(),
          this.hi
        },
        clone: function () {
          var t = r.clone.call(this);
          return t.hi = this.hi.clone(),
          t
        }
      }),
      e.mi = r.V(c),
      e.xi = r.zt(c),
      l.mi
    )
  },
  7792: function (t, i, s) {
    var e,
    n,
    o,
    r,
    h,
    a;
    t.exports = (
      a = s(8249),
      s(2153),
      n = (e = a).R.K,
      o = e.I,
      r = o.Gi,
      h = o.Vi = r.extend({
        O: function () {
          this.hi = new n.init(
            [3238371032,
            914150663,
            812702999,
            4144912697,
            4290775857,
            1750603025,
            1694076839,
            3204075428]
          )
        },
        ot: function () {
          var t = r.ot.call(this);
          return t.A -= 4,
          t
        }
      }),
      e.Vi = r.V(h),
      e.Wi = r.zt(h),
      a.Vi
    )
  },
  2153: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      function (t) {
        var i = e,
        s = i.R,
        n = s.K,
        o = s.Xt,
        r = i.I,
        h = [],
        a = [];
        !function () {
          function i(i) {
            for (var s = t.sqrt(i), e = 2; e <= s; e++) if (!(i % e)) return !1;
            return !0
          }
          function s(t) {
            return 4294967296 * (t - (0 | t)) | 0
          }
          for (var e = 2, n = 0; n < 64; ) i(e) &&
          (n < 8 && (h[n] = s(t.pow(e, 0.5))), a[n] = s(t.pow(e, 1 / 3)), n++),
          e++
        }();
        var c = [],
        l = r.Gi = o.extend({
          O: function () {
            this.hi = new n.init(h.slice(0))
          },
          Pt: function (t, i) {
            for (
              var s = this.hi.L,
              e = s[0],
              n = s[1],
              o = s[2],
              r = s[3],
              h = s[4],
              l = s[5],
              _ = s[6],
              u = s[7],
              d = 0;
              d < 64;
              d++
            ) {
              if (d < 16) c[d] = 0 | t[i + d];
               else {
                var f = c[d - 15],
                E = (f << 25 | f >>> 7) ^ (f << 14 | f >>> 18) ^ f >>> 3,
                R = c[d - 2],
                I = (R << 15 | R >>> 17) ^ (R << 13 | R >>> 19) ^ R >>> 10;
                c[d] = E + c[d - 7] + I + c[d - 16]
              }
              var g = e & n ^ e & o ^ n & o,
              O = (e << 30 | e >>> 2) ^ (e << 19 | e >>> 13) ^ (e << 10 | e >>> 22),
              w = u + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & l ^ ~h & _) + a[d] + c[d];
              u = _,
              _ = l,
              l = h,
              h = r + w | 0,
              r = o,
              o = n,
              n = e,
              e = w + (O + g) | 0
            }
            s[0] = s[0] + e | 0,
            s[1] = s[1] + n | 0,
            s[2] = s[2] + o | 0,
            s[3] = s[3] + r | 0,
            s[4] = s[4] + h | 0,
            s[5] = s[5] + l | 0,
            s[6] = s[6] + _ | 0,
            s[7] = s[7] + u | 0
          },
          ot: function () {
            var i = this.Dt,
            s = i.L,
            e = 8 * this.Ft,
            n = 8 * i.A;
            return s[n >>> 5] |= 128 << 24 - n % 32,
            s[14 + (n + 64 >>> 9 << 4)] = t.floor(e / 4294967296),
            s[15 + (n + 64 >>> 9 << 4)] = e,
            i.A = 4 * s.length,
            this.et(),
            this.hi
          },
          clone: function () {
            var t = o.clone.call(this);
            return t.hi = this.hi.clone(),
            t
          }
        });
        i.Gi = o.V(l),
        i.$i = o.zt(l)
      }(Math),
      e.Gi
    )
  },
  3327: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      s(4938),
      function (t) {
        var i = e,
        s = i.R,
        n = s.K,
        o = s.Xt,
        r = i.Ui.Ki,
        h = i.I,
        a = [],
        c = [],
        l = [];
        !function () {
          for (var t = 1, i = 0, s = 0; s < 24; s++) {
            a[t + 5 * i] = (s + 1) * (s + 2) / 2 % 64;
            var e = (2 * t + 3 * i) % 5;
            t = i % 5,
            i = e
          }
          for (t = 0; t < 5; t++) for (i = 0; i < 5; i++) c[t + 5 * i] = i + (2 * t + 3 * i) % 5 * 5;
          for (var n = 1, o = 0; o < 24; o++) {
            for (var h = 0, _ = 0, u = 0; u < 7; u++) {
              if (1 & n) {
                var d = (1 << u) - 1;
                d < 32 ? _ ^= 1 << d : h ^= 1 << d - 32
              }
              128 & n ? n = n << 1 ^ 113 : n <<= 1
            }
            l[o] = r.create(h, _)
          }
        }();
        var _ = [];
        !function () {
          for (var t = 0; t < 25; t++) _[t] = r.create()
        }();
        var u = h.Fi = o.extend({
          q: o.q.extend({
            Xi: 512
          }),
          O: function () {
            for (var t = this.zi = [], i = 0; i < 25; i++) t[i] = new r.init;
            this.blockSize = (1600 - 2 * this.q.Xi) / 32
          },
          Pt: function (t, i) {
            for (var s = this.zi, e = this.blockSize / 2, n = 0; n < e; n++) {
              var o = t[i + 2 * n],
              r = t[i + 2 * n + 1];
              o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
              r = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8),
              (y = s[n]).high ^= r,
              y.low ^= o
            }
            for (var h = 0; h < 24; h++) {
              for (var u = 0; u < 5; u++) {
                for (var d = 0, f = 0, E = 0; E < 5; E++) d ^= (y = s[u + 5 * E]).high,
                f ^= y.low;
                var R = _[u];
                R.high = d,
                R.low = f
              }
              for (u = 0; u < 5; u++) {
                var I = _[(u + 4) % 5],
                g = _[(u + 1) % 5],
                O = g.high,
                w = g.low;
                for (d = I.high ^ (O << 1 | w >>> 31), f = I.low ^ (w << 1 | O >>> 31), E = 0; E < 5; E++) (y = s[u + 5 * E]).high ^= d,
                y.low ^= f
              }
              for (var p = 1; p < 25; p++) {
                var m = (y = s[p]).high,
                v = y.low,
                P = a[p];
                P < 32 ? (d = m << P | v >>> 32 - P, f = v << P | m >>> 32 - P) : (d = v << P - 32 | m >>> 64 - P, f = m << P - 32 | v >>> 64 - P);
                var D = _[c[p]];
                D.high = d,
                D.low = f
              }
              var T = _[0],
              b = s[0];
              for (T.high = b.high, T.low = b.low, u = 0; u < 5; u++) for (E = 0; E < 5; E++) {
                var y = s[p = u + 5 * E],
                L = _[p],
                A = _[(u + 1) % 5 + 5 * E],
                C = _[(u + 2) % 5 + 5 * E];
                y.high = L.high ^ ~A.high & C.high,
                y.low = L.low ^ ~A.low & C.low
              }
              y = s[0];
              var k = l[h];
              y.high ^= k.high,
              y.low ^= k.low
            }
          },
          ot: function () {
            var i = this.Dt,
            s = i.L,
            e = (this.Ft, 8 * i.A),
            o = 32 * this.blockSize;
            s[e >>> 5] |= 1 << 24 - e % 32,
            s[(t.ceil((e + 1) / o) * o >>> 5) - 1] |= 128,
            i.A = 4 * s.length,
            this.et();
            for (var r = this.zi, h = this.q.Xi / 8, a = h / 8, c = [], l = 0; l < a; l++) {
              var _ = r[l],
              u = _.high,
              d = _.low;
              u = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8),
              d = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8),
              c.push(d),
              c.push(u)
            }
            return new n.init(c, h)
          },
          clone: function () {
            for (var t = o.clone.call(this), i = t.zi = this.zi.slice(0), s = 0; s < 25; s++) i[s] = i[s].clone();
            return t
          }
        });
        i.Fi = o.V(u),
        i.Hi = o.zt(u)
      }(Math),
      e.Fi
    )
  },
  7460: function (t, i, s) {
    var e,
    n,
    o,
    r,
    h,
    a,
    c,
    l;
    t.exports = (
      l = s(8249),
      s(4938),
      s(34),
      n = (e = l).Ui,
      o = n.Ki,
      r = n.K,
      h = e.I,
      a = h.ji,
      c = h.qi = a.extend({
        O: function () {
          this.hi = new r.init(
            [new o.init(3418070365, 3238371032),
            new o.init(1654270250, 914150663),
            new o.init(2438529370, 812702999),
            new o.init(355462360, 4144912697),
            new o.init(1731405415, 4290775857),
            new o.init(2394180231, 1750603025),
            new o.init(3675008525, 1694076839),
            new o.init(1203062813, 3204075428)]
          )
        },
        ot: function () {
          var t = a.ot.call(this);
          return t.A -= 16,
          t
        }
      }),
      e.qi = a.V(c),
      e.Ji = a.zt(c),
      l.qi
    )
  },
  34: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      s(4938),
      function () {
        var t = e,
        i = t.R.Xt,
        s = t.Ui,
        n = s.Ki,
        o = s.K,
        r = t.I;
        function h() {
          return n.create.apply(n, arguments)
        }
        var a = [
          h(1116352408, 3609767458),
          h(1899447441, 602891725),
          h(3049323471, 3964484399),
          h(3921009573, 2173295548),
          h(961987163, 4081628472),
          h(1508970993, 3053834265),
          h(2453635748, 2937671579),
          h(2870763221, 3664609560),
          h(3624381080, 2734883394),
          h(310598401, 1164996542),
          h(607225278, 1323610764),
          h(1426881987, 3590304994),
          h(1925078388, 4068182383),
          h(2162078206, 991336113),
          h(2614888103, 633803317),
          h(3248222580, 3479774868),
          h(3835390401, 2666613458),
          h(4022224774, 944711139),
          h(264347078, 2341262773),
          h(604807628, 2007800933),
          h(770255983, 1495990901),
          h(1249150122, 1856431235),
          h(1555081692, 3175218132),
          h(1996064986, 2198950837),
          h(2554220882, 3999719339),
          h(2821834349, 766784016),
          h(2952996808, 2566594879),
          h(3210313671, 3203337956),
          h(3336571891, 1034457026),
          h(3584528711, 2466948901),
          h(113926993, 3758326383),
          h(338241895, 168717936),
          h(666307205, 1188179964),
          h(773529912, 1546045734),
          h(1294757372, 1522805485),
          h(1396182291, 2643833823),
          h(1695183700, 2343527390),
          h(1986661051, 1014477480),
          h(2177026350, 1206759142),
          h(2456956037, 344077627),
          h(2730485921, 1290863460),
          h(2820302411, 3158454273),
          h(3259730800, 3505952657),
          h(3345764771, 106217008),
          h(3516065817, 3606008344),
          h(3600352804, 1432725776),
          h(4094571909, 1467031594),
          h(275423344, 851169720),
          h(430227734, 3100823752),
          h(506948616, 1363258195),
          h(659060556, 3750685593),
          h(883997877, 3785050280),
          h(958139571, 3318307427),
          h(1322822218, 3812723403),
          h(1537002063, 2003034995),
          h(1747873779, 3602036899),
          h(1955562222, 1575990012),
          h(2024104815, 1125592928),
          h(2227730452, 2716904306),
          h(2361852424, 442776044),
          h(2428436474, 593698344),
          h(2756734187, 3733110249),
          h(3204031479, 2999351573),
          h(3329325298, 3815920427),
          h(3391569614, 3928383900),
          h(3515267271, 566280711),
          h(3940187606, 3454069534),
          h(4118630271, 4000239992),
          h(116418474, 1914138554),
          h(174292421, 2731055270),
          h(289380356, 3203993006),
          h(460393269, 320620315),
          h(685471733, 587496836),
          h(852142971, 1086792851),
          h(1017036298, 365543100),
          h(1126000580, 2618297676),
          h(1288033470, 3409855158),
          h(1501505948, 4234509866),
          h(1607167915, 987167468),
          h(1816402316, 1246189591)
        ],
        c = [];
        !function () {
          for (var t = 0; t < 80; t++) c[t] = h()
        }();
        var l = r.ji = i.extend({
          O: function () {
            this.hi = new o.init(
              [new n.init(1779033703, 4089235720),
              new n.init(3144134277, 2227873595),
              new n.init(1013904242, 4271175723),
              new n.init(2773480762, 1595750129),
              new n.init(1359893119, 2917565137),
              new n.init(2600822924, 725511199),
              new n.init(528734635, 4215389547),
              new n.init(1541459225, 327033209)]
            )
          },
          Pt: function (t, i) {
            for (
              var s = this.hi.L,
              e = s[0],
              n = s[1],
              o = s[2],
              r = s[3],
              h = s[4],
              l = s[5],
              _ = s[6],
              u = s[7],
              d = e.high,
              f = e.low,
              E = n.high,
              R = n.low,
              I = o.high,
              g = o.low,
              O = r.high,
              w = r.low,
              p = h.high,
              m = h.low,
              v = l.high,
              P = l.low,
              D = _.high,
              T = _.low,
              b = u.high,
              y = u.low,
              L = d,
              A = f,
              C = E,
              k = R,
              B = I,
              S = g,
              N = O,
              M = w,
              x = p,
              G = m,
              V = v,
              W = P,
              $ = D,
              K = T,
              U = b,
              F = y,
              X = 0;
              X < 80;
              X++
            ) {
              var z,
              H,
              j = c[X];
              if (X < 16) H = j.high = 0 | t[i + 2 * X],
              z = j.low = 0 | t[i + 2 * X + 1];
               else {
                var q = c[X - 15],
                J = q.high,
                Y = q.low,
                Z = (J >>> 1 | Y << 31) ^ (J >>> 8 | Y << 24) ^ J >>> 7,
                Q = (Y >>> 1 | J << 31) ^ (Y >>> 8 | J << 24) ^ (Y >>> 7 | J << 25),
                tt = c[X - 2],
                it = tt.high,
                st = tt.low,
                et = (it >>> 19 | st << 13) ^ (it << 3 | st >>> 29) ^ it >>> 6,
                nt = (st >>> 19 | it << 13) ^ (st << 3 | it >>> 29) ^ (st >>> 6 | it << 26),
                ot = c[X - 7],
                rt = ot.high,
                ht = ot.low,
                at = c[X - 16],
                ct = at.high,
                lt = at.low;
                H = (
                  H = (H = Z + rt + ((z = Q + ht) >>> 0 < Q >>> 0 ? 1 : 0)) + et + ((z += nt) >>> 0 < nt >>> 0 ? 1 : 0)
                ) + ct + ((z += lt) >>> 0 < lt >>> 0 ? 1 : 0),
                j.high = H,
                j.low = z
              }
              var _t,
              ut = x & V ^ ~x & $,
              dt = G & W ^ ~G & K,
              ft = L & C ^ L & B ^ C & B,
              Et = A & k ^ A & S ^ k & S,
              Rt = (L >>> 28 | A << 4) ^ (L << 30 | A >>> 2) ^ (L << 25 | A >>> 7),
              It = (A >>> 28 | L << 4) ^ (A << 30 | L >>> 2) ^ (A << 25 | L >>> 7),
              gt = (x >>> 14 | G << 18) ^ (x >>> 18 | G << 14) ^ (x << 23 | G >>> 9),
              Ot = (G >>> 14 | x << 18) ^ (G >>> 18 | x << 14) ^ (G << 23 | x >>> 9),
              wt = a[X],
              pt = wt.high,
              mt = wt.low,
              vt = U + gt + ((_t = F + Ot) >>> 0 < F >>> 0 ? 1 : 0),
              Pt = It + Et;
              U = $,
              F = K,
              $ = V,
              K = W,
              V = x,
              W = G,
              x = N + (
                vt = (
                  vt = (vt = vt + ut + ((_t += dt) >>> 0 < dt >>> 0 ? 1 : 0)) + pt + ((_t += mt) >>> 0 < mt >>> 0 ? 1 : 0)
                ) + H + ((_t += z) >>> 0 < z >>> 0 ? 1 : 0)
              ) + ((G = M + _t | 0) >>> 0 < M >>> 0 ? 1 : 0) | 0,
              N = B,
              M = S,
              B = C,
              S = k,
              C = L,
              k = A,
              L = vt + (Rt + ft + (Pt >>> 0 < It >>> 0 ? 1 : 0)) + ((A = _t + Pt | 0) >>> 0 < _t >>> 0 ? 1 : 0) | 0
            }
            f = e.low = f + A,
            e.high = d + L + (f >>> 0 < A >>> 0 ? 1 : 0),
            R = n.low = R + k,
            n.high = E + C + (R >>> 0 < k >>> 0 ? 1 : 0),
            g = o.low = g + S,
            o.high = I + B + (g >>> 0 < S >>> 0 ? 1 : 0),
            w = r.low = w + M,
            r.high = O + N + (w >>> 0 < M >>> 0 ? 1 : 0),
            m = h.low = m + G,
            h.high = p + x + (m >>> 0 < G >>> 0 ? 1 : 0),
            P = l.low = P + W,
            l.high = v + V + (P >>> 0 < W >>> 0 ? 1 : 0),
            T = _.low = T + K,
            _.high = D + $ + (T >>> 0 < K >>> 0 ? 1 : 0),
            y = u.low = y + F,
            u.high = b + U + (y >>> 0 < F >>> 0 ? 1 : 0)
          },
          ot: function () {
            var t = this.Dt,
            i = t.L,
            s = 8 * this.Ft,
            e = 8 * t.A;
            return i[e >>> 5] |= 128 << 24 - e % 32,
            i[30 + (e + 128 >>> 10 << 5)] = Math.floor(s / 4294967296),
            i[31 + (e + 128 >>> 10 << 5)] = s,
            t.A = 4 * i.length,
            this.et(),
            this.hi.Yi()
          },
          clone: function () {
            var t = i.clone.call(this);
            return t.hi = this.hi.clone(),
            t
          },
          blockSize: 32
        });
        t.ji = i.V(l),
        t.Zi = i.zt(l)
      }(),
      e.ji
    )
  },
  4253: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      s(8269),
      s(8214),
      s(888),
      s(5109),
      function () {
        var t = e,
        i = t.R,
        s = i.K,
        n = i._,
        o = t.I,
        r = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ],
        h = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ],
        a = [
          1,
          2,
          4,
          6,
          8,
          10,
          12,
          14,
          15,
          17,
          19,
          21,
          23,
          25,
          27,
          28
        ],
        c = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ],
        l = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ],
        _ = o.Qi = n.extend({
          O: function () {
            for (var t = this.T.L, i = [], s = 0; s < 56; s++) {
              var e = r[s] - 1;
              i[s] = t[e >>> 5] >>> 31 - e % 32 & 1
            }
            for (var n = this.ts = [], o = 0; o < 16; o++) {
              var c = n[o] = [],
              l = a[o];
              for (s = 0; s < 24; s++) c[s / 6 | 0] |= i[(h[s] - 1 + l) % 28] << 31 - s % 6,
              c[4 + (s / 6 | 0)] |= i[28 + (h[s + 24] - 1 + l) % 28] << 31 - s % 6;
              for (c[0] = c[0] << 1 | c[0] >>> 31, s = 1; s < 7; s++) c[s] = c[s] >>> 4 * (s - 1) + 3;
              c[7] = c[7] << 5 | c[7] >>> 27
            }
            var _ = this.ss = [];
            for (s = 0; s < 16; s++) _[s] = n[15 - s]
          },
          S: function (t, i) {
            this.N(t, i, this.ts)
          },
          M: function (t, i) {
            this.N(t, i, this.ss)
          },
          N: function (t, i, s) {
            this.es = t[i],
            this.ns = t[i + 1],
            u.call(this, 4, 252645135),
            u.call(this, 16, 65535),
            d.call(this, 2, 858993459),
            d.call(this, 8, 16711935),
            u.call(this, 1, 1431655765);
            for (var e = 0; e < 16; e++) {
              for (var n = s[e], o = this.es, r = this.ns, h = 0, a = 0; a < 8; a++) h |= c[a][((r ^ n[a]) & l[a]) >>> 0];
              this.es = r,
              this.ns = o ^ h
            }
            var _ = this.es;
            this.es = this.ns,
            this.ns = _,
            u.call(this, 1, 1431655765),
            d.call(this, 8, 16711935),
            d.call(this, 2, 858993459),
            u.call(this, 16, 65535),
            u.call(this, 4, 252645135),
            t[i] = this.es,
            t[i + 1] = this.ns
          },
          G: 2,
          rt: 2,
          blockSize: 2
        });
        function u(t, i) {
          var s = (this.es >>> t ^ this.ns) & i;
          this.ns ^= s,
          this.es ^= s << t
        }
        function d(t, i) {
          var s = (this.ns >>> t ^ this.es) & i;
          this.es ^= s,
          this.ns ^= s << t
        }
        t.Qi = n.V(_);
        var f = o.os = n.extend({
          O: function () {
            var t = this.T.L;
            if (2 !== t.length && 4 !== t.length && t.length < 6) throw new Error(
              'Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.'
            );
            var i = t.slice(0, 2),
            e = t.length < 4 ? t.slice(0, 2) : t.slice(2, 4),
            n = t.length < 6 ? t.slice(0, 2) : t.slice(4, 6);
            this.rs = _.J(s.create(i)),
            this.hs = _.J(s.create(e)),
            this.cs = _.J(s.create(n))
          },
          S: function (t, i) {
            this.rs.S(t, i),
            this.hs.M(t, i),
            this.cs.S(t, i)
          },
          M: function (t, i) {
            this.cs.M(t, i),
            this.hs.S(t, i),
            this.rs.M(t, i)
          },
          G: 6,
          rt: 2,
          blockSize: 2
        });
        t.os = n.V(f)
      }(),
      e.os
    )
  },
  4938: function (t, i, s) {
    var e;
    t.exports = (
      e = s(8249),
      function (t) {
        var i = e,
        s = i.R,
        n = s.$,
        o = s.K,
        r = i.Ui = {};
        r.Ki = n.extend({
          init: function (t, i) {
            this.high = t,
            this.low = i
          }
        }),
        r.K = n.extend({
          init: function (i, s) {
            i = this.L = i ||
            [],
            this.A = s != t ? s : 8 * i.length
          },
          Yi: function () {
            for (var t = this.L, i = t.length, s = [], e = 0; e < i; e++) {
              var n = t[e];
              s.push(n.high),
              s.push(n.low)
            }
            return o.create(s, this.A)
          },
          clone: function () {
            for (
              var t = n.clone.call(this),
              i = t.L = this.L.slice(0),
              s = i.length,
              e = 0;
              e < s;
              e++
            ) i[e] = i[e].clone();
            return t
          }
        })
      }(),
      e
    )
  },
  6451: (t, i, s) => {
    s.d(i, {
      ls: () => n
    });
    var e = s(1538);
    class n {
      static _s(t) {
        if (null == t.draw_info || t.us) return;
        const i = [];
        let s = null;
        for (let n = 0; n < t.draw_info.length; n++) {
          const o = t.draw_info[n];
          if (null == o.k ? o.k = s : s = o.k, o.k == e.ds.fs.ds && null != o.d && null != o.u) {
            const t = o.d.split('.');
            let s = 0,
            e = null,
            n = null;
            for (let r = 0; r < t.length; r++) {
              const h = {};
              for (const t in o) 'd' != t &&
              'u' != t &&
              (h[t] = o[t]);
              null == e ? (e = parseInt(t[r]), h.x = e) : (0 < t[r].length && (n = parseInt(t[r])), e += n, h.x = e),
              h.u = o.u.slice(s, s + 4);
              const a = parseInt(h.u, 16);
              55296 <= a &&
              a <= 56319 ? (h.u = h.u.concat(',', o.u.slice(s + 4, s + 8)), s += 8) : s += 4,
              i.push(h)
            }
          } else if (o.k == e.ds.fs.ds && null != o.e && null != o.u) {
            const t = o.e.split('.');
            let s = 0,
            e = null,
            n = null;
            for (let r = 0; r < t.length; r++) {
              const h = {};
              for (const t in o) 'e' != t &&
              'u' != t &&
              (h[t] = o[t]);
              null == e ? (e = parseInt(t[r]), h.y = e) : (0 < t[r].length && (n = parseInt(t[r])), e += n, h.y = e),
              h.u = o.u.slice(s, s + 4);
              const a = parseInt(h.u, 16);
              55296 <= a &&
              a <= 56319 ? (h.u = h.u.concat(',', o.u.slice(s + 4, s + 8)), s += 8) : s += 4,
              i.push(h)
            }
          } else i.push(o)
        }
        t.draw_info = i,
        t.us = !0
      }
    }
  },
  9701: (t, i, s) => {
    s.d(i, {
      Es: () => o
    });
    var e = s(2614),
    n = s(1538);
    class o {
      static Rs(t, i) {
        const s = i.draw_info.k == n.ds.fs.Is,
        r = s ? t.Os.gs : t.Os.ws,
        h = t.vs();
        if (h.Ps()) return void o.Ds(t, i);
        const a = i.draw_info,
        c = {
          Ts: s,
          mimeType: a.t,
          bs: t.bookInfo.layout_url,
          path: a.i,
          ys: a.ih,
          Ls: a.iv,
          As: h.Cs().getItem(a.m)
        },
        l = r.ks(c),
        _ = l.Bs();
        if (_) {
          const s = {
            x: Math.floor(i.dx + a.x * i.Ss),
            y: Math.floor(i.dy + a.y * i.Ns),
            width: ~~(a.w * i.Ss),
            height: ~~(a.h * i.Ns)
          };
          return 1 == t.isDispLock ||
          t.xs.Ms(s, l, i.draw_info.k),
          e.Vs.Gs(i.context, _, s),
          !0
        }
        return r.Ws(i),
        !1
      }
      static Ds(t, i) {
        const s = i.draw_info.k == n.ds.fs.Is,
        o = s ? t.Os.gs : t.Os.ws,
        r = t.vs(),
        h = i.draw_info,
        a = {
          Ts: s,
          mimeType: h.t,
          bs: t.bookInfo.layout_url,
          path: h.i,
          ys: h.ih,
          Ls: h.iv,
          $s: h.i,
          As: r.Cs().getItem(h.m),
          Ks: '#000000' == h.f ? i.Ks : h.f,
          Us: i.Us
        },
        c = o.ks(a),
        l = c.Bs();
        if (l) {
          const s = {
            x: Math.floor(i.dx + h.x * i.Ss),
            y: Math.floor(i.dy + h.y * i.Ns),
            width: ~~(h.w * i.Ss),
            height: ~~(h.h * i.Ns)
          };
          1 == t.isDispLock ||
          t.xs.Ms(s, c, h.k);
          const n = r.Ps();
          return e.Vs.Fs(t.context, l, s, n),
          !0
        }
        return o.Ws(i),
        !1
      }
    }
  },
  5184: (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    __webpack_require__.d(__webpack_exports__, {
      Es: () => ReflowRenderer
    });
    var _errorHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4776),
    _consts_viewerConsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9807),
    _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2539),
    _utils_static_viewerUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6749),
    _domMgr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(374),
    _objectPool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1821),
    _drawInfoHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6451),
    _viewerRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2614),
    _image_reflowImageRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9701),
    _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1538),
    _userConfData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8978);
    class ReflowRenderer {
      static Xs(t, i, s, e, n, o, r) {
        const h = globalThis.BV.bookViewer;
        try {
          const a = h.currentLayoutData.page_info[r - 1].pd;
          if (!t) return void _errorHandler__WEBPACK_IMPORTED_MODULE_10__.zs.onError(
            _consts_viewerConsts__WEBPACK_IMPORTED_MODULE_0__.js.errorCode.Hs,
            'drawLine : argument[context] is illegal',
            void 0
          );
          t.beginPath(),
          1 == a ? (
            t.moveTo((i + e) / 2, s),
            t.bezierCurveTo(e, s - (s - n) / 2, i, n + (s - n) / 2, (i + e) / 2, n)
          ) : (
            t.moveTo(i, (s + n) / 2),
            t.bezierCurveTo(i - (i - e) / 2, n, e + (i - e) / 2, s, e, (s + n) / 2)
          ),
          t.strokeStyle = o,
          t.stroke()
        } catch (t) {
          _errorHandler__WEBPACK_IMPORTED_MODULE_10__.zs.onError(
            _consts_viewerConsts__WEBPACK_IMPORTED_MODULE_0__.js.errorCode.qs,
            'drawLine : ' + _utils_static_viewerUtil__WEBPACK_IMPORTED_MODULE_2__.Ys.Js(t),
            void 0
          )
        }
      }
      static Zs(t) {
        let i = ReflowRenderer.Qs;
        try {
          i = 0 <= t.indexOf('Alfios') ? _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.te() ? ReflowRenderer.ie : ReflowRenderer.Qs : 0 <= t.indexOf('Open Sans') ? _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.te() ? ReflowRenderer.ie : ReflowRenderer.se : _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.ee() ||
          _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.te() ? ReflowRenderer.Qs : _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.ne() ? ReflowRenderer.se : ReflowRenderer.Qs
        } catch (t) {
          _errorHandler__WEBPACK_IMPORTED_MODULE_10__.zs.onError(
            _consts_viewerConsts__WEBPACK_IMPORTED_MODULE_0__.js.errorCode.oe,
            'getBaselineForRotatedChar',
            _utils_static_viewerUtil__WEBPACK_IMPORTED_MODULE_2__.Ys.Js(t)
          )
        }
        return i
      }
      static re(t, i, s) {
        let e = t;
        return _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.he() &&
        (
          _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.ee() ? 'U' == s ? e = t - 0.35 * i : 'R' == s &&
          (e = t - 0.25 * i) : _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.te() &&
          ('U' == s ? e = t + 0.1 * i : 'R' == s && (e = t + 0.2 * i))
        ),
        _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.ae() &&
        (
          _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.ee() ? 'U' == s ? e = t + 0.05 * i : 'R' == s &&
          (e = t + 0.13 * i) : 'R' == s &&
          (e = t + 0.1 * i)
        ),
        e
      }
      static ce(t, i, s, e) {
        let n = !1,
        o = !1,
        r = '',
        h = !1;
        if ('' != i) {
          const t = i.split(','),
          s = t.length;
          for (let i = 0; i < s; i++) 'y' == t[i] ? n = !0 : 't' == t[i] &&
          (o = !0)
        }
        return s &&
        !n &&
        'R' != e &&
        (h = !0),
        r = 0 <= t.indexOf('明朝') ? 'BV游明朝' : 'BV游ゴシック',
        1 == o &&
        (r += 'R'),
        1 == h &&
        (r += 'V'),
        r
      }
      static le(t, i, s, e) {
        let n = !1,
        o = 0;
        if ('' != i) {
          const t = i.split(','),
          s = t.length;
          for (let i = 0; i < s; i++) 'y' == t[i] &&
          (n = !0)
        }
        return o = s &&
        0 == n &&
        'R' != e ? 0.9 * t : 0.82 * t,
        o
      }
      static _e(t, i, s, e, n, o, r, h, a, c, l) {
        const _ = globalThis.BV.bookViewer,
        u = 0.25;
        if (!i) return void _errorHandler__WEBPACK_IMPORTED_MODULE_10__.zs.onError(
          _consts_viewerConsts__WEBPACK_IMPORTED_MODULE_0__.js.errorCode.ue,
          'drawCharacter : argument[cord] is illegal',
          void 0
        );
        if (!t) return void _errorHandler__WEBPACK_IMPORTED_MODULE_10__.zs.onError(
          _consts_viewerConsts__WEBPACK_IMPORTED_MODULE_0__.js.errorCode.de,
          'drawCharacter : argument[context] is illegal',
          void 0
        );
        let d,
        f,
        E,
        R = !1,
        I = !1,
        g = !1,
        O = !1,
        w = !1,
        p = 0,
        m = !1,
        v = '';
        const P = i.split(','),
        D = parseInt(P[0], 16);
        if (null != P[1]) {
          const t = parseInt(P[1], 16);
          v = String.fromCharCode(D, t)
        } else v = String.fromCharCode(D);
        '' != r &&
        (d = r),
        E = '' != a ? a : 'serif';
        let T,
        b,
        y,
        L,
        A,
        C = E;
        {
          if (
            0 == _userConfData__WEBPACK_IMPORTED_MODULE_9__.Ee.fe &&
            _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.Re() &&
            (
              0 <= C.indexOf('sans-serif') ? C += ',HiraKakuProN-W3' : (C.indexOf('serif'), C += ',HiraMinProN-W3')
            ),
            A = !1,
            'U' != c &&
            1 == _.Os.ge.Ie &&
            1 == _.Os.ge.Oe &&
            (
              0 <= ReflowRenderer.we.indexOf('0x' + D.toString(16)) ||
              0 <= D &&
              D <= 767
            ) &&
            (
              0 <= ReflowRenderer.we.indexOf('0x' + D.toString(16)) &&
              (A = !0),
              _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.ae() &&
              0 == _.Os.ge.me ? C = 0 <= C.indexOf('Alfios') ? 'Open Sans,IPAexゴシック,sans-serif"' : 'v-sans-serif' : 0 <= C.indexOf('Alfios') ||
              0 <= C.indexOf('Open Sans') ||
              (
                C = 0 <= C.indexOf('sans') ||
                0 <= C.indexOf('gothic') ||
                0 <= C.indexOf('ゴシック') ? 'v-sans-serif' : 'v-serif'
              )
            ),
            'U' == c &&
            1 == _.Os.ge.Oe &&
            _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.ae() &&
            0 == _.Os.ge.me &&
            0 <= C.indexOf('Alfios') &&
            (C = 'Open Sans,IPAexゴシック,sans-serif"'),
            !A
          ) {
            const t = C.split(',');
            if (1 == t.length) 0 <= C.indexOf('gothic') ||
            0 <= C.indexOf('ゴシック') ? C += ',ＭＳ Ｐゴシック' : C += ',ＭＳ Ｐ明朝';
             else {
              for (let i = 0; i < t.length; i++) - 1 < t[i].indexOf('sans') ? t[i] += ',ＭＳ Ｐゴシック' : - 1 < t[i].indexOf('serif') &&
              (t[i] += ',ＭＳ Ｐ明朝');
              C = t.toString()
            }
          }(0 <= C.indexOf('Alfios') || 0 <= C.indexOf('Open Sans')) &&
          (m = !0),
          T = !0 !== A ||
          'R' != c &&
          'SYM45' != c ? o : n;
          const t = '0x' + P[0];
          1 == l &&
          t == ReflowRenderer.ve ? T *= 1.2 : 1 != l ||
          t != ReflowRenderer.Pe &&
          t != ReflowRenderer.De ? 0 <= ReflowRenderer.Te.indexOf(t) ? _.bookInfo.writing_mode == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.ye.be &&
          (0 <= C.indexOf('sans-serif') ? T *= 0.97 : T *= 0.87) : T *= 0.92 : T += ReflowRenderer.Le,
          0 <= C.indexOf('Open Sans') &&
          (T *= 0.88)
        }
        if (
          1 == _userConfData__WEBPACK_IMPORTED_MODULE_9__.Ee.fe &&
          _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.he() &&
          0 == m &&
          (0 <= C.indexOf('sans-serif') || 0 <= C.indexOf('serif') && (w = !0)),
          f = '',
          '' != h
        ) {
          const t = h.split(',');
          let i = '';
          const s = t.length;
          for (let e = 0; e < s; e++) 'b' == t[e] ? (
            I = !0,
            1 == _.Os.ge.me &&
            _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.Re() &&
            0 == m &&
            (O = !0),
            _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.ae() &&
            !_utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.ee() &&
            0 == m &&
            (w = !0),
            (0 == O && 0 == w && 0 == m || 1 == w && 40 <= T) &&
            (i += 'bold ')
          ) : 'i' == t[e] ? (g = !0, 0 == m && _.Os.Ae() && (i += 'italic ')) : 'u' == t[e] ? i += 'underline ' : 'y' == t[e] &&
          (R = !0);
          f = i.substring(0, i.length - 1)
        }
        '' == f &&
        (f = 'normal');
        let k = '';
        1 == m &&
        (
          0 <= C.indexOf('Alfios') ? 1 == I &&
          1 == g ? k = 'Alfios-BI,' : 0 == I &&
          1 == g ? k = 'Alfios-I,' : 1 == I &&
          0 == g &&
          (k = 'Alfios-B,') : 0 <= C.indexOf('Open Sans') &&
          (
            1 == I &&
            1 == g ? k = 'Open Sans-BI,' : 0 == I &&
            1 == g ? k = 'Open Sans-I,' : 1 == I &&
            0 == g &&
            (k = 'Open Sans-B,')
          ),
          C = k + C
        ),
        t.textBaseline = 'top',
        t.fillStyle = d;
        let B = `${ f } ${ T }px ${ C }`;
        B += ', serif',
        t.font = B,
        b = s,
        y = e;
        const S = t.measureText(v);
        if (
          L = 0,
          L = 'R' == c ? (o - T) / 2 : (n - S.width) / 2,
          D == parseInt('0x301c', 16) &&
          'R' == c &&
          (A || (c = 'SYM45')),
          !0 === A
        ) switch (c) {
          case _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.ke.Ce:
          case _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.ke.Be:
            b += (o - S.width) / 2
        } else if (
          c == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.ke.Ce
        ) {
          switch (ReflowRenderer.Zs(C)) {
            case ReflowRenderer.Qs:
              t.textBaseline = 'top',
              t.translate(~~(b + o), y);
              break;
            case ReflowRenderer.se:
              t.textBaseline = 'middle',
              t.translate(~~(b + o / 2), y);
              break;
            case ReflowRenderer.ie:
              t.textBaseline = 'bottom',
              t.translate(~~b, y)
          }
          t.rotate(Math.PI / 2),
          D == parseInt('0xff08', 16) ||
          D == parseInt('0xff09', 16) ||
          D == parseInt('0x300c', 16) ||
          D == parseInt('0x300d', 16) ||
          D == parseInt('0x300e', 16) ||
          D == parseInt('0x300f', 16) ||
          D == parseInt('0x2015', 16) ? (b = 0.14 * - T, y = 0.14 * - T) : (b = 0, y = 0)
        } else c == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.ke.Se ? (t.translate(b + L, y), b = T / 12, y = - T / 16) : c == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.ke.Ne ? (t.translate(b - L, y), b = 0.5 * T, y = 0.6 * - o) : c == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.ke.Me ? (t.translate(b, y), b = n - S.width, y = o / 2) : c == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.ke.xe ? (t.translate(b, y), t.rotate(Math.PI), b = - S.width, y = - o / 2) : c == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.ke.Be ? (
          t.translate(b - L, y - 2),
          t.scale( - 1, 1),
          t.rotate(Math.PI / 2 + 0.05),
          t.scale(1, 1.3),
          b = - T / 30,
          y = 0.127 * - T
        ) : (
          D == parseInt('0x2019', 16) ? b += 0.75 * L : b += L,
          0 <= C.indexOf('Alfios') ? (
            t.textBaseline = 'top',
            _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.he() &&
            _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.ee() &&
            (y += 0.05 * o)
          ) : 0 <= C.indexOf('Open Sans') &&
          (
            t.textBaseline = 'bottom',
            _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.ee() ? y += 1.05 * o : _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.ne() ? y += o : _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.te() ? y += 0.95 * o : y += 1.05 * o
          )
        );
        if (
          1 == O &&
          (
            p = T / 50,
            0.1 > p &&
            (p = 0.1),
            t.save(),
            t.shadowBlur = 1,
            t.shadowOffsetX = p,
            t.shadowOffsetY = p,
            t.shadowColor = d
          ),
          R &&
          D != parseInt('0x2019', 16) &&
          (b = s),
          l &&
          (
            D == parseInt(ReflowRenderer.ve, 16) ? _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.te() ? y -= 0.08 * T : y -= 0.12 * T : D != parseInt(ReflowRenderer.Pe, 16) &&
            D != parseInt(ReflowRenderer.De, 16) ||
            _utils_uaInfo__WEBPACK_IMPORTED_MODULE_1__.E.te() ||
            (y -= ReflowRenderer.Le / 2)
          ),
          1 != g ||
          0 != m ||
          _.Os.Ae() ? R ? t.fillText(v, b, y, n) : t.fillText(v, b, y) : (
            t.save(),
            t.transform(1, 0, - 0.25, 1, b + T * u, y),
            R ? t.fillText(v, 0, 0, n) : t.fillText(v, 0, 0),
            t.restore()
          ),
          1 == O &&
          t.restore(),
          1 == w &&
          40 > T
        ) {
          let i = 0;
          i = 1 == I ? T / 40 : T / 100,
          0.1 > i &&
          (i = 0.1),
          t.save(),
          t.lineWidth = i,
          t.strokeStyle = d,
          1 != g ||
          0 != m ||
          _.Os.Ae() ? R ? t.strokeText(v, b, y, n) : t.strokeText(v, b, y) : (
            t.save(),
            t.transform(1, 0, - 0.25, 1, b + T * u, y),
            R ? t.strokeText(v, 0, 0, n) : t.strokeText(v, 0, 0),
            t.restore()
          ),
          t.restore()
        }
        t.setTransform(1, 0, 0, 1, 0, 0)
      }
      static Ge(context, o, dPos, scale) {
        let script = '';
        const list = o.split(';'),
        size = list.length;
        for (let t = 0; t < size; t++) {
          if (0 != list[t].indexOf('context.')) continue;
          const i = list[t].substring('context.'.length);
          if (i.indexOf('arc(') < 0) script += `context.${ i };`;
           else {
            const t = i.replace(/^arc\( */, '').replace(/ *\)/, '').split(/ *, */);
            6 != t.length ? script += `context.${ i };` : 'true' == t[5] ? script += `context.arc(${ t[0] },${ t[1] },${ t[2] },${ t[4] },${ t[3] },true);` : script += `context.arc(${ t[0] },${ t[1] },${ t[2] },${ t[3] },${ t[4] },false);`
          }
        }
        context.setTransform(scale.width, 0, 0, scale.height, dPos.x, dPos.y),
        eval(script),
        context.setTransform(1, 0, 0, 1, 0, 0)
      }
      static Ve(t, i, s, e, n, o, r) {
        const h = globalThis.BV.bookViewer;
        if (!i) return void _errorHandler__WEBPACK_IMPORTED_MODULE_10__.zs.onError(
          _consts_viewerConsts__WEBPACK_IMPORTED_MODULE_0__.js.errorCode.We,
          'drawText : argument[draw_info] is illegal',
          void 0
        );
        const a = _domMgr__WEBPACK_IMPORTED_MODULE_3__.Ue.Screen.Ke.$e(),
        c = _domMgr__WEBPACK_IMPORTED_MODULE_3__.Ue.ze.Xe.Fe(),
        l = c.options.item(c.selectedIndex).value;
        let _,
        u;
        if (
          'normal' == l ? (_ = '#000000', u = '#FFFFFF') : 'soft' == l ? (_ = '#000000', u = '#EBE8DE') : 'night' == l &&
          (_ = '#FFFFFF', u = '#303030'),
          r &&
          _viewerRenderer__WEBPACK_IMPORTED_MODULE_6__.Vs.He(
            t,
            {
              x: 0,
              y: 0,
              width: a.width,
              height: a.height
            },
            {
              r: parseInt(u.slice(1, 3), 16),
              xt: parseInt(u.slice(3, 5), 16),
              b: parseInt(u.slice(5, 7), 16)
            }
          ),
          !(i > h.currentLayoutData.end)
        ) if (h.lookAheadTextImage[i - 1]) {
          const r = h.lookAheadTextImage[i - 1];
          let a = r.naturalWidth ||
          r.width;
          a > n &&
          (a = n);
          let c = r.naturalHeight ||
          r.height;
          c > o &&
          (c = o),
          _viewerRenderer__WEBPACK_IMPORTED_MODULE_6__.Vs.je(t, r, {
            x: 0,
            y: 0,
            width: a,
            height: c
          }, {
            x: s,
            y: e,
            width: n,
            height: o
          });
          const {
            Ss: l,
            Ns: d
          }
          = h.Je.qe(i),
          f = h.currentLayoutData.page_info[i - 1].draw_info;
          if (!f) return;
          const E = f.length;
          for (let i = 0; i < E; i++) {
            const n = f[i].k;
            if (
              n == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.Is
            ) {
              const n = {
                context: t,
                draw_info: f[i],
                index: i,
                dx: s,
                dy: e,
                Ss: l,
                Ns: d,
                Ks: _,
                Us: u
              };
              _image_reflowImageRenderer__WEBPACK_IMPORTED_MODULE_7__.Es.Rs(h, n)
            } else if (
              n == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.Ye
            ) {
              const n = {
                context: t,
                draw_info: f[i],
                index: i,
                dx: s,
                dy: e,
                Ss: l,
                Ns: d
              };
              _image_reflowImageRenderer__WEBPACK_IMPORTED_MODULE_7__.Es.Rs(h, n)
            }
          }
        } else {
          const n = [],
          o = [];
          if (!h.Je.Ze(i)) return;
          const {
            Ss: r,
            Ns: a
          }
          = h.Je.qe(i);
          _drawInfoHelper__WEBPACK_IMPORTED_MODULE_5__.ls._s(h.currentLayoutData.page_info[i - 1]);
          const c = h.currentLayoutData.page_info[i - 1].draw_info;
          if (!c) return;
          const l = c.length;
          for (let d = 0; d < l; d++) {
            const l = c[d];
            if (
              l.k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.ds
            ) {
              if (
                d > 0 &&
                c[d - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.ds ||
                c[d - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.Is
              ) {
                const t = c[d - 1];
                l.x = l.x ? l.x : t.x,
                l.y = l.y ? l.y : t.y,
                l.w = l.w ? l.w : t.w,
                l.h = l.h ? l.h : t.h,
                l.f = null != l.f ? l.f : t.f,
                l.b = null != l.b ? l.b : t.b,
                l.o = l.o ? l.o : t.o,
                c[d - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.ds ||
                c[d - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.Is ? (l.u = l.u ? l.u : t.u, l.s = null != l.s ? l.s : t.s, l.n = null != l.n ? l.n : t.n) : null == l.s &&
                (l.s = '')
              }
              const n = l.u,
              o = s + ~~(l.x * r),
              u = e + ~~(l.y * a),
              f = ~~(l.w * r),
              E = ~~(l.h * a),
              R = '#000000' == l.f ? _ : l.f,
              I = l.s,
              g = l.n;
              let O,
              w = !1;
              2 == h.currentLayoutData.page_info[i - 1].pd ? O = 'U' : (O = l.o, w = !0),
              ReflowRenderer._e(t, n, o, u, f, E, R, I, g, O, w)
            } else if (
              l.k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.Is
            ) {
              if (
                d > 0 &&
                c[d - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.ds ||
                c[d - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.Is
              ) {
                const t = c[d - 1];
                l.x = l.x ? l.x : t.x,
                l.y = l.y ? l.y : t.y,
                l.w = l.w ? l.w : t.w,
                l.h = l.h ? l.h : t.h,
                l.f = null != l.f ? l.f : t.f,
                l.b = null != l.b ? l.b : t.b,
                l.o = l.o ? l.o : t.o,
                c[d - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.ds ||
                c[d - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.Is ? l.s = null != l.s ? l.s : t.s : null == l.s &&
                (l.s = '')
              }
              o[d] = l
            } else if (
              l.k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.Ye
            ) {
              if (
                d > 0 &&
                c[d - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.Ye
              ) {
                const t = c[d - 1];
                l.x = l.x ? l.x : t.x,
                l.y = l.y ? l.y : t.y,
                l.w = l.w ? l.w : t.w,
                l.h = l.h ? l.h : t.h
              }
              n[d] = l
            } else if (
              l.k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.Qe
            ) {
              if (
                d > 0 &&
                c[d - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.Qe
              ) {
                const t = c[d - 1];
                l.x = l.x ? l.x : t.x,
                l.y = l.y ? l.y : t.y,
                l.z = l.z ? l.z : t.z,
                l.w = l.w ? l.w : t.w,
                l.c = l.c ? l.c : t.c
              }
              let n,
              o,
              _,
              u;
              2 == h.currentLayoutData.page_info[i - 1].pd ? (
                n = s + Math.floor(l.x * r),
                o = e + ~~(l.y * a),
                _ = s + Math.ceil(l.z * r),
                u = e + ~~(l.w * a)
              ) : 1 == h.currentLayoutData.page_info[i - 1].pd &&
              (
                n = s + ~~(l.x * r),
                o = e + Math.ceil(l.y * a),
                _ = s + ~~(l.z * r),
                u = e + Math.floor(l.w * a)
              );
              const f = l.c;
              ReflowRenderer.Xs(t, n, o, _, u, f, i)
            } else if (
              l.k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.tn
            ) {
              if (
                d > 0 &&
                c[d - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.tn
              ) {
                const t = c[d - 1];
                l.x = l.x ? l.x : t.x,
                l.y = l.y ? l.y : t.y,
                l.w = l.w ? l.w : t.w,
                l.h = l.h ? l.h : t.h,
                l.c = l.c ? l.c : t.c
              }
              const i = s + ~~(l.x * r),
              n = e + ~~(l.y * a),
              o = ~~(l.w * r),
              h = ~~(l.h * a),
              _ = l.c.toUpperCase(),
              f = '#FFFFFF' == _ ? u : _;
              _viewerRenderer__WEBPACK_IMPORTED_MODULE_6__.Vs.He(
                t,
                {
                  x: i,
                  y: n,
                  width: o,
                  height: h
                },
                {
                  r: parseInt(f.slice(1, 3), 16),
                  xt: parseInt(f.slice(3, 5), 16),
                  b: parseInt(f.slice(5, 7), 16)
                }
              )
            } else if (
              l.k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.sn
            ) {
              const i = l.o;
              ReflowRenderer.Ge(t, i, {
                x: s,
                y: e
              }, {
                width: r,
                height: a
              })
            }
          }
          h.currentLayoutData.page_info[i - 1].draw_info = c;
          for (let i = o.length, n = 0; n < i; n++) {
            const i = o[n];
            if (i) {
              const o = {
                context: t,
                draw_info: i,
                index: n,
                dx: s,
                dy: e,
                Ss: r,
                Ns: a,
                Ks: _,
                Us: u
              };
              _image_reflowImageRenderer__WEBPACK_IMPORTED_MODULE_7__.Es.Rs(h, o)
            }
          }
          for (let i = n.length, o = 0; o < i; o++) {
            const i = n[o];
            if (i) {
              const n = {
                context: t,
                draw_info: i,
                index: o,
                dx: s,
                dy: e,
                Ss: r,
                Ns: a
              };
              _image_reflowImageRenderer__WEBPACK_IMPORTED_MODULE_7__.Es.Rs(h, n)
            }
          }
        }
      }
      static en(t, i) {
        const s = globalThis.BV.bookViewer;
        if (!t) return void _errorHandler__WEBPACK_IMPORTED_MODULE_10__.zs.onError(
          _consts_viewerConsts__WEBPACK_IMPORTED_MODULE_0__.js.errorCode.nn,
          'drawText : argument[draw_info] is illegal',
          void 0
        );
        if (s.lookAheadTextImage[t - 1]) return;
        const e = _domMgr__WEBPACK_IMPORTED_MODULE_3__.Ue.Screen.Ke.$e();
        let n = _objectPool__WEBPACK_IMPORTED_MODULE_4__.rn.on();
        n.width = e.width,
        n.height = e.height;
        let o = n.getContext('2d');
        _viewerRenderer__WEBPACK_IMPORTED_MODULE_6__.Vs.hn(o);
        const r = _domMgr__WEBPACK_IMPORTED_MODULE_3__.Ue.ze.Xe.Fe(),
        h = r.options.item(r.selectedIndex).value;
        let a,
        c;
        if (
          'normal' == h ? (a = '#000000', c = '#FFFFFF') : 'soft' == h ? (a = '#000000', c = '#EBE8DE') : 'night' == h &&
          (a = '#FFFFFF', c = '#303030'),
          !s.Je.Ze(t)
        ) return o = void 0,
        _objectPool__WEBPACK_IMPORTED_MODULE_4__.rn.release(n),
        void (n = void 0);
        const {
          Ss: l,
          Ns: _
        }
        = s.Je.qe(t),
        u = s.currentLayoutData.page_info[t - 1];
        _drawInfoHelper__WEBPACK_IMPORTED_MODULE_5__.ls._s(u);
        const d = u.draw_info;
        if (!d) return o = void 0,
        _objectPool__WEBPACK_IMPORTED_MODULE_4__.rn.release(n),
        void (n = void 0);
        const f = d.length;
        for (let s = 0; s < f; s++) {
          const e = d[s].k;
          if (
            e == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.ds
          ) {
            const t = d[s];
            if (
              s > 0 &&
              d[s - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.ds ||
              d[s - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.Is
            ) {
              const i = d[s - 1];
              if (
                t.x = t.x ? t.x : i.x,
                t.y = t.y ? t.y : i.y,
                t.w = t.w ? t.w : i.w,
                t.h = t.h ? t.h : i.h,
                t.f = null != t.f ? t.f : i.f,
                t.b = null != t.b ? t.b : i.b,
                t.o = t.o ? t.o : i.o,
                d[s - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.ds ||
                d[s - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.Is
              ) {
                const i = d[s - 1];
                t.u = t.u ? t.u : i.u,
                t.s = null != t.s ? t.s : i.s,
                t.n = null != t.n ? t.n : i.n
              } else null == t.s &&
              (t.s = '')
            }
            const e = t.u,
            n = i.x + ~~(t.x * l),
            r = i.y + ~~(t.y * _),
            h = ~~(t.w * l),
            c = ~~(t.h * _),
            f = '#000000' == t.f ? a : t.f,
            E = t.s,
            R = t.n;
            let I,
            g = !1;
            2 == u.pd ? I = 'U' : (I = t.o, g = !0),
            ReflowRenderer._e(o, e, n, r, h, c, f, E, R, I, g)
          } else if (
            e == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.Is
          ) {
            const t = d[s];
            if (
              s > 0 &&
              d[s - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.ds ||
              d[s - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.Is
            ) {
              const i = d[s - 1];
              if (
                t.x = t.x ? t.x : i.x,
                t.y = t.y ? t.y : i.y,
                t.w = t.w ? t.w : i.w,
                t.h = t.h ? t.h : i.h,
                t.f = null != t.f ? t.f : i.f,
                t.b = null != t.b ? t.b : i.b,
                t.o = t.o ? t.o : i.o,
                d[s - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.ds ||
                d[s - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.Is
              ) {
                const i = d[s - 1];
                t.s = null != t.s ? t.s : i.s
              } else null == t.s &&
              (t.s = '')
            }
          } else if (
            e == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.Ye
          ) {
            const t = d[s];
            if (
              s > 0 &&
              d[s - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.Ye
            ) {
              const i = d[s - 1];
              t.x = t.x ? t.x : i.x,
              t.y = t.y ? t.y : i.y,
              t.w = t.w ? t.w : i.w,
              t.h = t.h ? t.h : i.h
            }
          } else if (
            e == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.Qe
          ) {
            const e = d[s];
            if (
              s > 0 &&
              d[s - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.Qe
            ) {
              const t = d[s - 1];
              e.x = e.x ? e.x : t.x,
              e.y = e.y ? e.y : t.y,
              e.z = e.z ? e.z : t.z,
              e.w = e.w ? e.w : t.w,
              e.c = e.c ? e.c : t.c
            }
            let n,
            r,
            h,
            a;
            2 == u.pd ? (
              n = i.x + Math.floor(e.x * l),
              r = i.y + ~~(e.y * _),
              h = i.x + Math.ceil(e.z * l),
              a = i.y + ~~(e.w * _)
            ) : 1 == u.pd &&
            (
              n = i.x + ~~(e.x * l),
              r = i.y + Math.ceil(e.y * _),
              h = i.x + ~~(e.z * l),
              a = i.y + Math.floor(e.w * _)
            );
            const c = e.c;
            ReflowRenderer.Xs(o, n, r, h, a, c, t)
          } else if (
            e == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.tn
          ) {
            const t = d[s];
            if (
              s > 0 &&
              d[s - 1].k == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.tn
            ) {
              const i = d[s - 1];
              t.x = t.x ? t.x : i.x,
              t.y = t.y ? t.y : i.y,
              t.w = t.w ? t.w : i.w,
              t.h = t.h ? t.h : i.h,
              t.c = t.c ? t.c : i.c
            }
            const e = i.x + ~~(t.x * l),
            n = i.y + ~~(t.y * _),
            r = ~~(t.w * l),
            h = ~~(t.h * _),
            a = t.c.toUpperCase(),
            u = '#FFFFFF' == a ? c : a;
            _viewerRenderer__WEBPACK_IMPORTED_MODULE_6__.Vs.He(
              o,
              {
                x: e,
                y: n,
                width: r,
                height: h
              },
              {
                r: parseInt(u.slice(1, 3), 16),
                xt: parseInt(u.slice(3, 5), 16),
                b: parseInt(u.slice(5, 7), 16)
              }
            )
          } else if (
            e == _consts_layoutConsts__WEBPACK_IMPORTED_MODULE_8__.ds.fs.sn
          ) {
            const t = d[s].o;
            ReflowRenderer.Ge(o, t, i, {
              width: l,
              height: _
            })
          }
        }
        s.currentLayoutData.page_info[t - 1].draw_info = d,
        o = void 0,
        s.lookAheadTextImage[t - 1] = n
      }
    }
    ReflowRenderer.Qs = '1',
    ReflowRenderer.se = '2',
    ReflowRenderer.ie = '3',
    ReflowRenderer.we = [
      '0x2010',
      '0x2015',
      '0x2025',
      '0x2026',
      '0x2190',
      '0x2191',
      '0x2192',
      '0x2193',
      '0x2500',
      '0x2501',
      '0x2502',
      '0x2503',
      '0x250c',
      '0x250f',
      '0x2510',
      '0x2513',
      '0x2514',
      '0x2517',
      '0x2518',
      '0x251b',
      '0x251c',
      '0x251d',
      '0x2520',
      '0x2523',
      '0x2524',
      '0x2525',
      '0x2528',
      '0x252b',
      '0x252c',
      '0x252f',
      '0x2530',
      '0x2533',
      '0x2534',
      '0x2537',
      '0x2538',
      '0x253b',
      '0x253c',
      '0x253f',
      '0x2542',
      '0x254b',
      '0x3001',
      '0x3002',
      '0x3008',
      '0x3009',
      '0x300a',
      '0x300b',
      '0x300c',
      '0x300d',
      '0x300e',
      '0x300f',
      '0x3010',
      '0x3011',
      '0x3014',
      '0x3015',
      '0x3041',
      '0x3043',
      '0x3045',
      '0x3047',
      '0x3049',
      '0x3063',
      '0x3083',
      '0x3085',
      '0x3087',
      '0x308e',
      '0x30a1',
      '0x30a3',
      '0x30a5',
      '0x30a7',
      '0x30a9',
      '0x30c3',
      '0x30e3',
      '0x30e5',
      '0x30e7',
      '0x30ee',
      '0x30f5',
      '0x30f6',
      '0x30fc',
      '0xff08',
      '0xff09',
      '0xff0c',
      '0xff0e',
      '0xff1d',
      '0xff3b',
      '0xff3d',
      '0xff3f',
      '0xff5b',
      '0xff5c',
      '0xff5d',
      '0xff5e',
      '0xffe3'
    ],
    ReflowRenderer.Te = [
      '0x2026',
      '0x2500',
      '0x2501',
      '0x2502',
      '0x2503',
      '0x250c',
      '0x250f',
      '0x2510',
      '0x2513',
      '0x2514',
      '0x2517',
      '0x2518',
      '0x251B',
      '0x251C',
      '0x251D',
      '0x2520',
      '0x2523',
      '0x2524',
      '0x2525',
      '0x2528',
      '0x252b',
      '0x252c',
      '0x252f',
      '0x2530',
      '0x2533',
      '0x2534',
      '0x2537',
      '0x2538',
      '0x253b',
      '0x253c',
      '0x253f',
      '0x2542',
      '0x254b'
    ],
    ReflowRenderer.ve = '0x2015',
    ReflowRenderer.Pe = '0x2500',
    ReflowRenderer.De = '0x2501',
    ReflowRenderer.Le = 2
  },
  1538: (t, i, s) => {
    s.d(i, {
      ds: () => e
    });
    class e {
    }
    e.an = {
      cn: 0,
      ln: 1,
      _n: 2,
      NONE: 3
    },
    e.un = {
      dn: 'reflowable',
      fn: 'fixedtext',
      En: 'fixedimage'
    },
    e.Rn = {
      In: 'XMDF',
      gn: 'BigImage',
      On: 'OMF',
      wn: 'Hybrid'
    },
    e.pn = {
      mn: 1,
      be: 2
    },
    e.fs = {
      ds: 'c',
      Is: 'g',
      Ye: 'i',
      Qe: 'l',
      tn: 'f',
      sn: 's'
    },
    e.ke = {
      vn: 'U',
      Ce: 'R',
      Se: 'SH1',
      Ne: 'SH2',
      Me: 'SH3',
      Pn: 'SH4',
      xe: 'SH4_R180',
      Be: 'SYM45',
      Dn: 'HFLIP',
      Tn: 'R180'
    },
    e.bn = {
      yn: 'j',
      Ln: 'p',
      An: 'd'
    },
    e.Cn = {
      kn: 1,
      Bn: 2
    },
    e.Sn = {
      Nn: '0',
      Mn: '1'
    },
    e.xn = {
      Gn: 'create',
      Vn: 'update'
    },
    e.Wn = {
      $n: 'on',
      Kn: 'off'
    },
    e.ye = {
      be: 'horizontal_tb',
      mn: 'vertical_rl'
    },
    e.Un = {
      cn: 0,
      ln: 1,
      NONE: 2,
      VERTICAL: 3
    }
  },
  9807: (t, i, s) => {
    var e;
    s.d(i, {
      js: () => n,
      Fn: () => r,
      Xn: () => o
    });
    class n {
    }
    e = n,
    n.zn = {
      Hn: 'PORTRAIT',
      jn: 'LANDSCAPE'
    },
    n.qn = {
      Jn: 'SINGLE_FIT_SCREEN',
      Yn: 'SINGLE_FIT_WIDTH',
      Zn: 'SPREAD_FIT_SCREEN',
      VERTICAL: 'VERTICAL'
    },
    n.Qn = {
      NEXT: 1,
      io: 0,
      so: - 1
    },
    n.eo = 'arrow1',
    n.no = 40,
    n.oo = 45,
    n.ro = 10,
    n.ho = 48,
    n.ao = 8,
    n.co = 32,
    n.lo = 40,
    n._o = {
      HORIZONTAL: 0,
      VERTICAL: 1,
      uo: 2
    },
    n.do = {
      NEXT: 'NEXT',
      so: 'PREVIOUS'
    },
    n.fo = {
      Eo: 'copy',
      Ro: 'source-over'
    },
    n.Io = {
      Oo: 'behind',
      NONE: 'none'
    },
    n.wo = {
      po: 6,
      mo: 2
    },
    n.vo = 2,
    n.Po = 3,
    n.Do = 7,
    n.To = 8,
    n.bo = 128,
    n.yo = 1024,
    n.Lo = 33,
    n.Ao = 4,
    n.Co = 2,
    n.ko = 1,
    n.Bo = 11,
    n.So = 200,
    n.No = 10,
    n.Mo = 255,
    n.xo = 153,
    n.Go = 0,
    n.Vo = 6,
    n.Wo = 1,
    n.$o = 2,
    n.Ko = 3,
    n.Uo = e.$o,
    n.errorCode = {
      Fo: 60011,
      Xo: 60021,
      zo: 60031,
      Ho: 60041,
      jo: 60051,
      qo: 60061,
      Jo: 60071,
      Yo: 60081,
      Zo: 60091,
      Qo: 60101,
      tr: 60111,
      ir: 60121,
      sr: 60131,
      er: 60141,
      nr: 60151,
      rr: 60161,
      hr: 60171,
      ar: 60181,
      cr: 60191,
      lr: 60201,
      _r: 60211,
      ur: 60221,
      dr: 60231,
      Er: 60241,
      Rr: 60251,
      Ir: 60261,
      gr: 60013,
      Or: 60023,
      wr: 60033,
      pr: 60043,
      mr: 60053,
      vr: 60063,
      Pr: 60073,
      Dr: 60083,
      Tr: 60093,
      br: 60103,
      yr: 60113,
      Lr: 60123,
      Ar: 60133,
      Cr: 60143,
      kr: 60153,
      Br: 70011,
      Sr: 70021,
      Nr: 70031,
      Mr: 70041,
      Gr: 70051,
      Vr: 70061,
      Wr: 70071,
      $r: 70081,
      Kr: 70091,
      Ur: 70101,
      Fr: 70111,
      Xr: 70121,
      zr: 70131,
      Hr: 70141,
      jr: 70151,
      qr: 70161,
      Jr: 70171,
      Yr: 70181,
      Zr: 70191,
      Qr: 70201,
      th: 70211,
      sh: 70221,
      eh: 70231,
      nh: 70241,
      oh: 70251,
      rh: 70261,
      hh: 70271,
      ah: 70281,
      lh: 70291,
      _h: 70301,
      uh: 70311,
      dh: 70321,
      fh: 70331,
      Eh: 70341,
      Rh: 70351,
      Ih: 70361,
      gh: 70371,
      Oh: 70381,
      wh: 70391,
      ph: 70401,
      mh: 70411,
      Ph: 70421,
      Dh: 70431,
      Th: 70441,
      bh: 70451,
      yh: 70461,
      Lh: 70471,
      Ah: 70481,
      Ch: 70491,
      kh: 70501,
      Hs: 70511,
      ue: 70521,
      de: 70531,
      We: 70541,
      Bh: 70551,
      Sh: 70561,
      Nh: 70571,
      nn: 70581,
      Mh: 70591,
      xh: 70601,
      Gh: 70611,
      Vh: 70621,
      Wh: 70631,
      $h: 70641,
      Kh: 70651,
      Uh: 70661,
      Fh: 70671,
      Xh: 70681,
      zh: 70691,
      Hh: 70701,
      jh: 70711,
      qh: 70721,
      Jh: 70013,
      Yh: 70023,
      Zh: 70033,
      Qh: 70043,
      ta: 70053,
      ia: 70063,
      sa: 70073,
      ea: 70083,
      na: 70093,
      oa: 70103,
      ra: 70113,
      ha: 70123,
      aa: 70133,
      ca: 70143,
      la: 70153,
      qs: 70163,
      oe: 70173,
      _a: 70183,
      ua: 70193,
      da: 70203,
      fa: 70213,
      Ea: 70223,
      Ra: 70233,
      Ia: 70243,
      ga: 40401,
      Oa: 40402,
      wa: 80013,
      pa: 80023,
      ma: 80033,
      va: 80043,
      Pa: 80053,
      Da: 80063,
      Ta: 90000,
      ba: 90011,
      ya: 90021,
      La: 90031,
      Aa: 90041,
      Ca: 90051,
      ka: 90061,
      Ba: 90071,
      Sa: 90081,
      Na: 90091,
      Ma: 90101,
      xa: 90111,
      Ga: 90121,
      Va: 90131,
      Wa: 90141,
      $a: 90151,
      Ka: 90161,
      Ua: 90171,
      Fa: 90181,
      Xa: 90191,
      za: 90201,
      Ha: 90211,
      ja: 90221,
      qa: 90231,
      Ja: 90241,
      Ya: 90251,
      Za: 90261,
      Qa: 90271,
      tc: 90281,
      ic: 90291,
      sc: 90301,
      ec: 90311,
      nc: 90321,
      oc: 90331,
      rc: 90341,
      hc: 90351,
      ac: 90361,
      cc: 90371,
      lc: 90381,
      _c: 90391,
      uc: 90401,
      dc: 90012,
      fc: 90022,
      Ec: 90032,
      Rc: 90042,
      Ic: 90052,
      gc: 90062,
      Oc: 90072,
      wc: 90082,
      mc: 90092,
      vc: 90102,
      Pc: 90112,
      Dc: 90122,
      Tc: 90132,
      bc: 90142,
      yc: 90152,
      Lc: 90162,
      Ac: 90172,
      Cc: 90013,
      kc: 90023,
      Bc: 90033,
      Sc: 90043,
      Nc: 90053,
      Mc: 90063,
      xc: 90073,
      Gc: 90083,
      Vc: 90093,
      Wc: 90103,
      $c: 90113,
      Kc: 90123,
      Uc: 90133,
      Fc: 90143,
      Xc: 90153,
      zc: 90163,
      Hc: 90173,
      jc: 90183,
      qc: 90193,
      Jc: 90203,
      Yc: 90213,
      Zc: 90223,
      Qc: 90233,
      tl: 90243,
      il: 90253,
      sl: 90263,
      el: 90273,
      nl: 90283,
      ol: 90293,
      rl: 90303,
      hl: 90313,
      al: 90323,
      cl: 90333,
      ll: 90343,
      _l: 90353,
      ul: 90363,
      dl: 90373,
      fl: 90383,
      El: 90393,
      Rl: 90403,
      Il: 90413,
      gl: 90423,
      Ol: 90433,
      wl: 90443,
      pl: 90453,
      ml: 90463,
      vl: 90473,
      Pl: 90483,
      Dl: 90493,
      Tl: 90503,
      bl: 90513,
      yl: 90523,
      Ll: 90533,
      Al: 90543,
      Cl: 90553,
      kl: 90563,
      Bl: 90573,
      Sl: 90583,
      Nl: 90593,
      Ml: 90603,
      xl: 90613,
      Gl: 90623,
      Vl: 90633,
      Wl: 90643,
      $l: 90653,
      Kl: 90663,
      Ul: 90673,
      Fl: 90683,
      Xl: 90693,
      zl: 90703,
      Hl: 90713,
      jl: 90723,
      ql: 90733,
      Jl: 90743,
      Yl: 90753,
      Zl: 90763,
      Ql: 90773,
      t_: 90783,
      i_: 90793,
      s_: 90803,
      e_: 90813,
      n_: 90823,
      o_: 90833,
      r_: 90843,
      h_: 90853,
      a_: 90863,
      c_: 90873,
      l_: 90883,
      __: 90893,
      u_: 90903,
      d_: 90913,
      f_: 90923,
      E_: 90933,
      R_: 90943,
      I_: 90953,
      g_: 90963,
      O_: 90973,
      w_: 90983,
      p_: 90993,
      m_: 91003,
      v_: 91013,
      P_: 91023,
      D_: 91033,
      T_: 91043,
      b_: 91053,
      y_: 91063,
      L_: 91073,
      A_: 91083,
      C_: 91093,
      k_: 91103,
      B_: 91113,
      S_: 91123,
      N_: 91133,
      M_: 91143,
      x_: 91153,
      G_: 91163,
      V_: 91173,
      W_: 91183,
      K_: 91193,
      U_: 90014,
      F_: 90024,
      X_: 90034,
      z_: 90044,
      H_: 90054,
      j_: 90064,
      q_: 90074,
      J_: 90084,
      Y_: 20001,
      Z_: 20002,
      Q_: 20003,
      tu: 20004,
      iu: 40301,
      su: 40302,
      eu: 50001,
      nu: 50002,
      ou: 50003,
      ru: 50004,
      hu: 50005,
      au: 50006,
      cu: 50007,
      lu: 99901
    },
    n._u = 3,
    n.uu = e._u - 1,
    n.du = {
      fu: '0',
      Eu: '1',
      Ru: '2',
      Iu: '3',
      gu: '4'
    },
    n.Ou = {
      fu: '0',
      wu: '1',
      pu: '2',
      mu: '3',
      vu: '4',
      Pu: '5'
    },
    n.Du = {
      fu: '0',
      Tu: '1',
      bu: '2',
      yu: '3'
    };
    const o = {
      cn: 'right',
      ln: 'left',
      NONE: 'none'
    },
    r = {
      Lu: 'default',
      Au: 'url(\'./image/menu.cur\'),text',
      Cu: 'url(\'./image/arrowLeft.cur\'),text',
      ku: 'url(\'./image/arrowRight.cur\'),text'
    }
  },
  374: (t, i, s) => {
    s.d(i, {
      Ue: () => g
    });
    var e,
    n,
    o,
    r,
    h,
    a,
    c,
    l,
    _,
    u,
    d,
    f,
    E = s(2496),
    R = s(4994),
    I = s(6367);
    class g {
      static Bu(t) {
        return document.getElementById(t)
      }
      static Su(t) {
        return document.getElementById(t)
      }
      static Nu(t) {
        return document.getElementById(t)
      }
      static Mu(t) {
        return document.getElementById(t)
      }
      static xu(t) {
        return document.getElementById(t)
      }
      static Gu(t) {
        return document.getElementById(t)
      }
      static Vu(t) {
        return document.getElementById(t)
      }
      static Wu(t) {
        return document.getElementById(t)
      }
      static $u(t) {
        return document.getElementById(t)
      }
      static Ku(t) {
        return document.getElementById(t)
      }
    }
    g.Uu = I.Fu.Uu,
    g.Screen = (
      (
        e = class {
          static zu() {
            return g.Su(I.Fu.ju.Hu)
          }
          static $e() {
            const t = this.zu();
            return {
              width: t.clientWidth,
              height: t.clientHeight
            }
          }
          static qu(t) {
            this.zu().style.cursor = t,
            this.Ju.qu(t)
          }
          static Yu() {
            const t = this.zu();
            return {
              left: t.scrollLeft,
              top: t.scrollTop
            }
          }
          static Zu(t) {
            const i = this.zu();
            i.scrollLeft = t.left,
            i.scrollTop = t.top
          }
        }
      ).Xu = class {
        static zu() {
          return g.Nu(I.Fu.ju.td.Qu)
        }
        static sd() {
          return null != this.zu()
        }
        static ed(t) {
          const i = t ? 'inline' : 'none';
          this.zu().style.display = i
        }
        static qu(t) {
          this.zu().style.cursor = t
        }
        static nd(t) {
          const i = this.zu();
          i.style.width = t.width,
          i.style.height = t.height
        }
        static od(t) {
          const i = this.zu();
          i.style.position = 'absolute',
          i.style.left = `${ t.left }px`,
          i.style.top = `${ t.top }px`
        }
        static rd(t) {
          this.zu().useMap = t
        }
      },
      e.Ju = class {
        static zu() {
          return g.Su(I.Fu.ju.hd)
        }
        static ed(t) {
          const i = t ? 'visible' : 'hidden';
          this.zu().style.visibility = i
        }
        static ad() {
          return 'visible' === this.zu().style.visibility
        }
        static qu(t) {
          this.zu().style.cursor = t
        }
        static ld(t) {
          const i = t ? 'rgba(0, 0, 0, 0)' : 'rgba(238, 238, 238, 1)';
          this.zu().style.background = i
        }
      },
      e.Ke = class {
        static zu() {
          return g.Bu(I.Fu.ju.td._d)
        }
        static $e() {
          const t = this.zu();
          return {
            width: t.width,
            height: t.height
          }
        }
        static od(t) {
          const i = this.zu();
          i.style.position = 'absolute',
          i.style.left = `${ t.left }px`,
          i.style.top = `${ t.top }px`
        }
        static ud() {
          const t = this.zu();
          return {
            left: t.offsetLeft,
            top: t.offsetTop
          }
        }
      },
      e
    ),
    g.dd = class {
      static zu() {
        return g.Su(I.Fu.ju.fd)
      }
      static ed(t) {
        const i = t ? 'block' : 'none';
        this.zu().style.display = i
      }
    },
    g.Ed = class {
      static zu() {
        return g.Bu(I.Fu.ju.td.Rd)
      }
      static od(t) {
        const i = this.zu();
        i.style.position = 'absolute',
        i.style.left = `${ t.left }px`,
        i.style.top = `${ t.top }px`
      }
    },
    g.Id = class {
      static gd() {
        return g.Su(I.Fu.ju.Od)
      }
      static wd() {
        return g.Su(I.Fu.ju.md)
      }
      static vd() {
        return g.Su(I.Fu.ju.Pd)
      }
      static Dd() {
        return g.Su(I.Fu.ju.Td)
      }
      static bd(t) {
        const i = this.wd(),
        s = this.gd(),
        e = t ? {
          forward: s,
          yd: i
        }
         : {
          forward: i,
          yd: s
        };
        if (
          e.yd.style.display = 'none',
          e.forward.style.display = 'block',
          null == e.forward.animate
        ) return e.yd.classList.remove('fadeout'),
        e.forward.classList.remove('fadeout'),
        e.forward.style.opacity = '1',
        void window.setTimeout(
          () => {
            e.forward.classList.add('fadeout'),
            window.setTimeout(
              () => {
                e.forward.style.opacity = '0',
                e.forward.style.display = 'none',
                e.forward.classList.remove('fadeout')
              },
              1000
            )
          },
          1500
        );
        e.forward.style.opacity = '1',
        e.forward.animate(
          [{
            opacity: 1
          },
          {
            opacity: 0
          }
          ],
          {
            delay: 1500,
            duration: 1000,
            easing: 'ease'
          }
        ).addEventListener(
          'finish',
          () => {
            e.forward.style.opacity = '0',
            e.forward.style.display = 'none'
          }
        )
      }
      static Ld() {
        const t = {
          Ad: this.vd(),
          Cd: this.Dd()
        };
        t.Cd.style.display = 'block',
        t.Ad.style.display = 'block';
        const i = 1000,
        s = 1500;
        if (null == t.Ad.animate) return t.Cd.classList.remove('fadeout'),
        t.Ad.classList.remove('fadeout'),
        t.Ad.style.opacity = '1',
        t.Cd.style.opacity = '1',
        void window.setTimeout(
          () => {
            t.Ad.classList.add('fadeout'),
            t.Cd.classList.add('fadeout'),
            window.setTimeout(
              () => {
                t.Ad.style.opacity = '0',
                t.Cd.style.opacity = '0',
                t.Ad.style.display = 'none',
                t.Cd.style.display = 'none',
                t.Ad.classList.remove('fadeout'),
                t.Cd.classList.remove('fadeout')
              },
              i
            )
          },
          s
        );
        t.Ad.style.opacity = '1',
        t.Cd.style.opacity = '1';
        const e = t.Ad.animate([{
          opacity: 1
        },
        {
          opacity: 0
        }
        ], {
          delay: s,
          duration: i,
          easing: 'ease'
        }),
        n = t.Cd.animate([{
          opacity: 1
        },
        {
          opacity: 0
        }
        ], {
          delay: s,
          duration: i,
          easing: 'ease'
        });
        e.addEventListener(
          'finish',
          () => {
            t.Ad.style.opacity = '0',
            t.Ad.style.display = 'none'
          }
        ),
        n.addEventListener(
          'finish',
          () => {
            t.Cd.style.opacity = '0',
            t.Cd.style.display = 'none'
          }
        )
      }
    },
    g.kd = class {
      static ed(t) {
        const i = this.Bd();
        i.style.display = t ? 'block' : 'none'
      }
      static Bd() {
        return g.Su(I.Fu.ju.Sd)
      }
    },
    g.Nd = (
      (n = class {
        static zu() {
          return g.Su(I.Fu.ju.xd)
        }
      }).Md = class {
        static zu() {
          return g.Su(I.Fu.ju.Vd.Gd)
        }
        static Wd() {
          return I.Fu.ju.Vd.Gd
        }
        static $d() {
          return document.querySelectorAll(`#${ this.Wd() } div canvas`)
        }
        static Kd(t) {
          return document.querySelector(`#${ this.Wd() } div#page_${ t } canvas`)
        }
      },
      n
    ),
    g.Ud = class {
      static zu() {
        return g.Su(I.Fu.ju.Fd)
      }
      static ed(t) {
        const i = t ? 'block' : 'none';
        this.zu().style.display = i
      }
    },
    g.Xd = class {
      static zu() {
        return g.Su(I.Fu.ju.zd)
      }
      static Hd() {
        return I.Fu.ju.zd
      }
    },
    g.jd = (
      (o = class {
      }).qd = (
        (
          r = class {
            static Yd() {
              return g.Su(I.Fu.ju.Zd)
            }
            static Qd(t, i) {
              const s = g.Xd.zu(),
              e = this.Yd();
              switch (null != i && this.tf(i), t) {
                case this.Jd.if:
                  s.classList.add('page-menu'),
                  e.style.background = E.sf.SETTING_HEADER_BACKGROUND_COLOR,
                  this.ef.ed(!1),
                  this.nf.ed(!1);
                  break;
                case this.Jd.rf:
                  s.classList.add('page-menu'),
                  e.style.background = E.sf.MOKUJI_HEADER_BACKGROUND_COLOR,
                  this.ef.ed(!1),
                  this.nf.ed(!1);
                  break;
                case this.Jd.hf:
                  this.af.ed(null, !1),
                  this.ef.ed(null, !1),
                  this.nf.ed(null, !1),
                  this.cf.ed(!0),
                  this.lf.ed(!0);
                  break;
                case this.Jd.Lu:
                  s.classList.remove('page-menu'),
                  e.style.visibility = 'visible',
                  e.style.background = E.sf.MENU_HEADER_BACKGROUND_COLOR,
                  this.af.ed(!0),
                  this.nf.ed(!0),
                  this.cf.ed(!1),
                  this.lf.ed(!1);
                  break;
                case this.Jd._f:
                  e.style.visibility = 'hidden',
                  this.af.ed(!1),
                  this.nf.ed(!1);
                  break;
                case this.Jd.uf:
                  e.style.visibility = 'hidden',
                  this.af.ed(!1),
                  this.nf.ed(!1),
                  this.cf.ed(!1),
                  this.lf.ed(!1);
                  break;
                case this.Jd.HIDDEN:
                  e.style.visibility = 'hidden',
                  this.af.ed(!1, !0),
                  this.ef.ed(!1, !0),
                  this.nf.ed(!1, !0),
                  this.cf.ed(!1),
                  this.lf.ed(!1)
              }
            }
            static df() {
              return g.Su(I.Fu.ju.Rf.Ef.ff)
            }
            static tf(t) {
              this.df().innerHTML = t
            }
          }
        ).Jd = {
          Lu: 'default',
          if : 'setting',
          rf: 'toc',
          hf: 'search',
          _f: 'dragging',
          uf: 'zoom_dragging',
          HIDDEN: 'hidden'
        },
        r.If = class {
          static zu() {
            return g.Mu(I.Fu.ju.Rf.Ef.mf.wf.Of.gf)
          }
          static vf() {
            return this.zu().value
          }
          static Pf() {
            return this.zu().value = ''
          }
        },
        r.af = class {
          static zu() {
            return g.Nu(I.Fu.ju.Rf.Ef.Tf.Df)
          }
          static ed(t, i) {
            const s = this.zu();
            if (null != t) {
              const i = t ? 'visible' : 'hidden';
              s.style.visibility = i
            }
            if (null != i) {
              const t = i ? 'inline' : 'none';
              s.style.display = t
            }
          }
          static bf(t) {
            const i = this.zu();
            t == R.w.yf ? (i.title = '戻る', i.src = './image/btnBack.png') : t == R.w.Lf &&
            (i.title = 'ビューア終了', i.src = './image/btn_close.png')
          }
        },
        r.ef = class {
          static zu() {
            return g.Nu(I.Fu.ju.Rf.Ef.Tf.Af)
          }
          static ed(t, i) {
            const s = this.zu();
            if (null != t) {
              const i = t ? 'visible' : 'hidden';
              s.style.visibility = i;
              const e = t ? '80px' : '',
              n = g.jd.qd.df();
              n.style.left = e,
              n.style.right = e
            }
            if (null != i) {
              const t = i ? 'inline' : 'none';
              s.style.display = t
            }
          }
        },
        r.nf = class {
          static zu() {
            return g.Nu(I.Fu.ju.Rf.Ef.kf.Cf)
          }
          static ed(t, i) {
            const s = this.zu();
            if (null != t) {
              const i = t ? 'visible' : 'hidden';
              s.style.visibility = i
            }
            if (null != i) {
              const t = i ? 'inline' : 'none';
              s.style.display = t
            }
          }
        },
        r.cf = class {
          static zu() {
            return g.Nu(I.Fu.ju.Rf.Ef.Tf.Bf)
          }
          static ed(t) {
            const i = t ? 'visible' : 'hidden';
            this.zu().style.visibility = i
          }
        },
        r.lf = class {
          static zu() {
            return g.Nu(I.Fu.ju.Rf.Ef.kf.Sf)
          }
          static ed(t) {
            const i = t ? 'visible' : 'hidden';
            this.zu().style.visibility = i
          }
        },
        r
      ),
      o.Nf = (
        (
          h = class {
            static xf() {
              return g.Su(I.Fu.ju.Vf.Gf)
            }
            static Wf(t) {
              this.xf().style.top = t
            }
            static ed(t, i) {
              if (null != t) {
                const i = t ? 'visible' : 'hidden';
                this.xf().style.visibility = i
              }
              if (null != i) {
                const t = i ? 'inline' : 'none';
                this.xf().style.display = t
              }
            }
          }
        ).Mf = (
          (
            a = class {
              static Kf(t, i, s) {
                const e = this.Uf.zu(),
                n = this.Ff.zu(),
                o = this.$f.zu();
                if (t <= 600) e.style.width = '100%',
                n.style.width = '100%',
                o.style.width = '100%';
                 else {
                  const t = s ? 300 : 218,
                  r = i - t - 40;
                  e.style.width = `${ t }px`,
                  n.style.width = `${ r }px`,
                  o.style.width = `${ r }px`
                }
              }
            }
          ).$f = class {
            static zu() {
              return g.Su(I.Fu.ju.Vf.zf.Xf)
            }
            static set(t) {
              this.zu().innerHTML = t
            }
          },
          a.Uf = (
            (
              c = class {
                static zu() {
                  return g.Su(I.Fu.ju.Vf.zf.jf)
                }
                static qf() {
                  g.jd.Nf.Mf.Uf.Hf.Jf().style.width = '25%',
                  g.jd.Nf.Mf.Uf.Yf.Jf().style.width = '25%',
                  g.jd.Nf.Mf.Uf.Zf.Jf().style.width = '25%',
                  g.jd.Nf.Mf.Uf.Qf.Jf().style.width = '25%'
                }
              }
            ).Hf = class {
              static Jf() {
                return g.Su(I.Fu.ju.Vf.zf.sE.iE.tE)
              }
              static eE() {
                return g.Nu(I.Fu.ju.Vf.zf.sE.iE.oE.nE)
              }
            },
            c.rE = class {
              static Jf() {
                return g.Su(I.Fu.ju.Vf.zf.sE.iE.hE)
              }
              static eE() {
                return g.Nu(I.Fu.ju.Vf.zf.sE.iE.cE.aE)
              }
              static remove() {
                this.Jf().style.display = 'none'
              }
            },
            c.Yf = class {
              static Jf() {
                return g.Su(I.Fu.ju.Vf.zf.sE.iE.lE)
              }
              static remove() {
                this.Jf().style.display = 'none'
              }
              static _E() {
                this.Jf().style.display = 'block'
              }
              static eE() {
                return g.Nu(I.Fu.ju.Vf.zf.sE.iE.dE.uE)
              }
              static ed(t) {
              }
              static fE() {
                this.eE().onclick = ''
              }
              static EE(t) {
                let i;
                i = t ? './image/btnZoom.png' : './image/btnZoomImage.png',
                this.eE().src = i
              }
            },
            c.Zf = class {
              static Jf() {
                return g.Su(I.Fu.ju.Vf.zf.sE.iE.RE)
              }
              static eE() {
                return g.Nu(I.Fu.ju.Vf.zf.sE.iE.gE.IE)
              }
            },
            c.OE = class {
              static Jf() {
                return g.Su(I.Fu.ju.Vf.zf.sE.iE.wE)
              }
              static eE() {
                return g.Nu(I.Fu.ju.Vf.zf.sE.iE.mE.pE)
              }
              static ed(t) {
                const i = t ? 'block' : 'none';
                this.Jf().style.display = i
              }
            },
            c.Qf = class {
              static Jf() {
                return g.Su(I.Fu.ju.Vf.zf.sE.iE.vE)
              }
              static eE() {
                return g.Nu(I.Fu.ju.Vf.zf.sE.iE.DE.PE)
              }
              static remove() {
                this.Jf().style.display = 'none'
              }
            },
            c.TE = class {
              static Jf() {
                return g.Su(I.Fu.ju.Vf.zf.sE.iE.bE)
              }
              static remove() {
                this.Jf().style.display = 'none'
              }
              static eE() {
                return g.Nu(I.Fu.ju.Vf.zf.sE.iE.LE.yE)
              }
              static AE(t) {
                const i = this.eE();
                t ? (i.src = './image/btnFullExit.png', i.title = '全画面表示解除') : (i.src = './image/btnFull.png', i.title = '全画面表示')
              }
            },
            c.CE = class {
              static Jf() {
                return g.Su(I.Fu.ju.Vf.zf.sE.iE.kE)
              }
              static remove() {
                this.Jf().style.display = 'none'
              }
              static eE() {
                return g.Nu(I.Fu.ju.Vf.zf.sE.iE.SE.BE)
              }
              static AE(t) {
                const i = this.eE();
                t ? (
                  i.src = './image/btnDirection.png',
                  i.style.transform = 'rotate(90deg)',
                  i.title = '横読みに切替'
                ) : (
                  i.src = './image/btnDirection.png',
                  i.style.transform = 'rotate(0deg)',
                  i.title = '縦読みに切替'
                )
              }
            },
            c
          ),
          a.Ff = (
            (l = class {
              static zu() {
                return g.Su(I.Fu.ju.Vf.zf.ME)
              }
            }).NE = class {
              static zu() {
                return document.getElementById(I.Fu.ju.Vf.zf.GE.xE)
              }
              static VE(t) {
                const i = this.zu().classList;
                t ? i.remove(I.Fu.ju.Vf.zf.GE.WE) : i.add(I.Fu.ju.Vf.zf.GE.WE)
              }
              static $E(t) {
                this.zu().disabled = t
              }
            },
            l
          ),
          a
        ),
        h.KE = class {
          static zu() {
            return g.Su(I.Fu.ju.Vf.UE)
          }
          static FE() {
            return g.Nu(I.Fu.ju.Vf.HE.zE.XE)
          }
          static jE() {
            return g.Nu(I.Fu.ju.Vf.HE.JE.qE)
          }
          static ed(t) {
            const i = t ? 'visible' : 'hidden';
            this.zu().style.visibility = i
          }
          static YE(t) {
            this.zu().style.bottom = t
          }
        },
        h
      ),
      o
    ),
    g.ZE = (
      (_ = class {
      }).QE = class {
        static zu() {
          return g.Su(I.Fu.ju.tR)
        }
        static ad() {
          return 'visible' === this.zu().style.visibility
        }
      },
      _.iR = class {
        static zu() {
          return g.Su(I.Fu.ju.sR)
        }
        static ad() {
          return 'visible' === this.zu().style.visibility
        }
        static eR() {
          return g.Ku(I.Fu.ju.oR.nR)
        }
        static rR() {
          return g.Ku(I.Fu.ju.oR.hR)
        }
        static aR() {
          return g.Ku(I.Fu.ju.oR.cR)
        }
      },
      _
    ),
    g.ze = (
      (
        u = class {
          static _R() {
            return g.Su(I.Fu.ju.uR)
          }
          static zu() {
            return g.Su(I.Fu.ju.fR.dR)
          }
          static Yu() {
            const t = this._R();
            return {
              left: t.scrollLeft,
              top: t.scrollTop
            }
          }
          static Zu(t) {
            const i = this._R();
            i.scrollLeft = t.left,
            i.scrollTop = t.top
          }
          static ed(t, i) {
            const s = t ? 'visible' : 'hidden';
            if (this.zu().style.visibility = s, t) {
              const t = g.ze._R();
              t.style.visibility = 'visible',
              t.style.overflow = 'auto'
            } else if (null != i && !i) {
              const t = g.ze._R();
              t.style.visibility = 'hidden',
              t.style.overflow = 'hidden'
            }
          }
        }
      ).lR = './image/radioSelect.png',
      u.ER = './image/radioUnSelect.png',
      u.RR = class {
        static Fe() {
          return g.Wu(I.Fu.ju.fR.OR.gR.IR)
        }
        static wR() {
          return I.Fu.ju.fR.OR.gR.pR.Lu
        }
        static mR() {
          return g.Su(I.Fu.ju.fR.OR.gR.vR)
        }
        static PR() {
          return g.Su(I.Fu.ju.fR.OR.gR.DR)
        }
        static TR() {
          this.Fe().disabled = !0,
          this.PR().className = 'inner_disabled',
          this.mR().className = 'setting_label_disable'
        }
        static bR(t) {
          switch (t) {
            case 0:
              return g.Vu(I.Fu.ju.fR.OR.gR.pR.yR);
            case 1:
              return g.Vu(I.Fu.ju.fR.OR.gR.pR.LR);
            case 2:
              return g.Vu(I.Fu.ju.fR.OR.gR.pR.AR);
            case 3:
              return g.Vu(I.Fu.ju.fR.OR.gR.pR.CR);
            case 4:
              return g.Vu(I.Fu.ju.fR.OR.gR.pR.kR)
          }
        }
      },
      u.Xe = class {
        static Fe() {
          return g.Wu(I.Fu.ju.fR.OR.SR.BR)
        }
        static wR() {
          return I.Fu.ju.fR.OR.SR.NR.Lu
        }
        static mR() {
          return g.Su(I.Fu.ju.fR.OR.SR.MR)
        }
        static xR() {
          return g.Su(I.Fu.ju.fR.OR.SR.GR)
        }
        static TR() {
          this.Fe().disabled = !0,
          this.xR().className = 'inner_disabled',
          this.mR().className = 'setting_label_disable'
        }
      },
      u.VR = class {
        static Fe() {
          return g.Wu(I.Fu.ju.fR.OR.$R.WR)
        }
        static wR() {
          return I.Fu.ju.fR.OR.$R.KR.Lu
        }
        static mR() {
          return g.Su(I.Fu.ju.fR.OR.$R.UR)
        }
        static FR() {
          return g.Su(I.Fu.ju.fR.OR.$R.XR)
        }
        static TR() {
          const t = this.FR();
          t.querySelectorAll('span').forEach(t => {
            t.textContent = ''
          }),
          this.Fe().disabled = !0,
          t.className = 'inner_disabled',
          this.mR().className = 'setting_label_disable'
        }
        static isDisabled() {
          return this.Fe().disabled
        }
      },
      u.zR = class {
        static mR() {
          return g.Su(I.Fu.ju.fR.OR.jR.HR)
        }
        static qR(t) {
          switch (t) {
            case 0:
              return g.Mu(I.Fu.ju.fR.OR.jR.YR.JR);
            case 1:
              return g.Mu(I.Fu.ju.fR.OR.jR.QR.ZR)
          }
        }
        static tI(t) {
          switch (t) {
            case 0:
              return I.Fu.ju.fR.OR.jR.YR.JR;
            case 1:
              return I.Fu.ju.fR.OR.jR.QR.ZR
          }
        }
        static iI(t) {
          switch (t) {
            case 0:
              return g.Nu(I.Fu.ju.fR.OR.jR.YR.sI);
            case 1:
              return g.Nu(I.Fu.ju.fR.OR.jR.QR.eI)
          }
        }
        static nI(t) {
          return this.qR(t).checked
        }
        static isDisabled(t) {
          return this.qR(t).disabled
        }
        static oI(t, i) {
          const s = this.qR(0),
          e = this.qR(1);
          switch (t) {
            case 0:
              s.checked = !0,
              i &&
              (e.checked = !1);
              break;
            case 1:
              e.checked = !0,
              i &&
              (s.checked = !1)
          }
        }
        static TR() {
          this.qR(0).disabled = !0,
          this.qR(1).disabled = !0;
          const t = document.getElementsByTagName('label'),
          i = g.ze.zR.mR();
          t[0].className = 'radio_label_disabled',
          t[1].className = 'radio_label_disabled',
          i.className = 'setting_label_disable'
        }
        static rI(t) {
          const i = this.iI(0),
          s = this.iI(1);
          switch (t) {
            case - 1:
              i.src = g.ze.ER,
              s.src = g.ze.ER;
              break;
            case 0:
              i.src = g.ze.lR,
              s.src = g.ze.ER;
              break;
            case 1:
              s.src = g.ze.lR,
              i.src = g.ze.ER
          }
        }
        static hI(t) {
          t == this.tI(0) ? this.rI(0) : t == this.tI(1) &&
          this.rI(1)
        }
      },
      u.aI = class {
        static zu() {
          return g.Su(I.Fu.ju.fR.OR.cI)
        }
        static mR() {
          return g.Su(I.Fu.ju.fR.OR._I.lI)
        }
        static uI(t) {
          switch (t) {
            case 0:
              return g.xu(I.Fu.ju.fR.OR._I.dI);
            case 1:
              return g.xu(I.Fu.ju.fR.OR._I.fI)
          }
        }
        static remove() {
          this.zu().style.display = 'none'
        }
        static TR() {
          this.qR(0).disabled = !0,
          this.qR(1).disabled = !0,
          this.mR().className = 'setting_label_disable',
          this.uI(0).className = 'radio_label_disabled',
          this.uI(1).className = 'radio_label_disabled',
          this.rI( - 1)
        }
        static qR(t) {
          switch (t) {
            case 0:
              return g.Mu(I.Fu.ju.fR.OR._I.RI.EI);
            case 1:
              return g.Mu(I.Fu.ju.fR.OR._I.gI.II)
          }
        }
        static tI(t) {
          switch (t) {
            case 0:
              return I.Fu.ju.fR.OR._I.RI.EI;
            case 1:
              return I.Fu.ju.fR.OR._I.gI.II
          }
        }
        static iI(t) {
          switch (t) {
            case 0:
              return g.Nu(I.Fu.ju.fR.OR._I.RI.OI);
            case 1:
              return g.Nu(I.Fu.ju.fR.OR._I.gI.wI)
          }
        }
        static nI(t) {
          return this.qR(t).checked
        }
        static pI(t) {
          return - 1 == this.iI(t).src.indexOf('radioSelect.png')
        }
        static oI(t, i) {
          const s = this.qR(0),
          e = this.qR(1);
          switch (t) {
            case 0:
              s.checked = !0,
              i &&
              (e.checked = !1);
              break;
            case 1:
              e.checked = !0,
              i &&
              (s.checked = !1)
          }
        }
        static rI(t) {
          const i = this.iI(0),
          s = this.iI(1);
          switch (t) {
            case - 1:
              i.src = g.ze.ER,
              s.src = g.ze.ER;
              break;
            case 0:
              i.src = g.ze.lR,
              s.src = g.ze.ER;
              break;
            case 1:
              s.src = g.ze.lR,
              i.src = g.ze.ER
          }
        }
      },
      u.mI = class {
        static zu() {
          return g.Su(I.Fu.ju.fR.OR.vI)
        }
        static mR() {
          return g.Su(I.Fu.ju.fR.OR.TI.DI)
        }
        static qR(t) {
          switch (t) {
            case 0:
              return g.Mu(I.Fu.ju.fR.OR.TI.yI.bI);
            case 1:
              return g.Mu(I.Fu.ju.fR.OR.TI.AI.LI)
          }
        }
        static tI(t) {
          switch (t) {
            case 0:
              return I.Fu.ju.fR.OR.TI.yI.bI;
            case 1:
              return I.Fu.ju.fR.OR.TI.AI.LI
          }
        }
        static CI() {
          return g.Mu(I.Fu.ju.fR.OR.TI.kI)
        }
        static iI(t) {
          switch (t) {
            case 0:
              return g.Nu(I.Fu.ju.fR.OR.TI.yI.BI);
            case 1:
              return g.Nu(I.Fu.ju.fR.OR.TI.AI.SI)
          }
        }
        static uI(t) {
          switch (t) {
            case 0:
              return g.xu(I.Fu.ju.fR.OR.TI.NI);
            case 1:
              return g.xu(I.Fu.ju.fR.OR.TI.MI)
          }
        }
        static nI(t) {
          return this.qR(t).checked
        }
        static isDisabled(t) {
          return this.qR(t).disabled
        }
        static remove() {
          this.zu().style.display = 'none'
        }
        static TR() {
          this.qR(0).disabled = !0,
          this.qR(1).disabled = !0,
          this.mR().className = 'setting_label_disable',
          this.uI(0).className = 'radio_label_disabled',
          this.uI(1).className = 'radio_label_disabled',
          this.rI( - 1)
        }
        static oI(t, i) {
          const s = this.qR(0),
          e = this.qR(1);
          switch (t) {
            case 0:
              s.checked = !0,
              i &&
              (e.checked = !1);
              break;
            case 1:
              e.checked = !0,
              i &&
              (s.checked = !1)
          }
        }
        static rI(t) {
          const i = this.iI(0),
          s = this.iI(1);
          switch (t) {
            case - 1:
              i.src = g.ze.ER,
              s.src = g.ze.ER;
              break;
            case 0:
              i.src = g.ze.lR,
              s.src = g.ze.ER;
              break;
            case 1:
              s.src = g.ze.lR,
              i.src = g.ze.ER
          }
        }
      },
      u.xI = class {
        static zu() {
          return g.Su(I.Fu.ju.fR.OR.GI)
        }
        static mR() {
          return g.Su(I.Fu.ju.fR.OR.WI.VI)
        }
        static qR(t) {
          switch (t) {
            case 0:
              return g.Mu(I.Fu.ju.fR.OR.WI.KI.$I);
            case 1:
              return g.Mu(I.Fu.ju.fR.OR.WI.FI.UI)
          }
        }
        static tI(t) {
          switch (t) {
            case 0:
              return I.Fu.ju.fR.OR.WI.KI.$I;
            case 1:
              return I.Fu.ju.fR.OR.WI.FI.UI
          }
        }
        static CI() {
          return g.Mu(I.Fu.ju.fR.OR.WI.kI)
        }
        static iI(t) {
          switch (t) {
            case 0:
              return g.Nu(I.Fu.ju.fR.OR.WI.KI.XI);
            case 1:
              return g.Nu(I.Fu.ju.fR.OR.WI.FI.zI)
          }
        }
        static uI(t) {
          switch (t) {
            case 0:
              return g.xu(I.Fu.ju.fR.OR.WI.HI);
            case 1:
              return g.xu(I.Fu.ju.fR.OR.WI.jI)
          }
        }
        static nI(t) {
          return this.qR(t).checked
        }
        static isDisabled(t) {
          return this.qR(t).disabled
        }
        static remove() {
          this.zu().style.display = 'none'
        }
        static TR() {
          this.qR(0).disabled = !0,
          this.qR(1).disabled = !0,
          this.mR().className = 'setting_label_disable',
          this.uI(0).className = 'radio_label_disabled',
          this.uI(1).className = 'radio_label_disabled',
          this.rI( - 1)
        }
        static qI(t) {
          this.qR(0).disabled = !1,
          this.qR(1).disabled = !1,
          this.mR().className = 'setting_label_enable',
          this.uI(0).className = 'radio_label_enabled',
          this.uI(1).className = 'radio_label_enabled',
          this.rI(t)
        }
        static oI(t, i) {
          const s = this.qR(0),
          e = this.qR(1);
          switch (t) {
            case 0:
              s.checked = !0,
              i &&
              (e.checked = !1);
              break;
            case 1:
              e.checked = !0,
              i &&
              (s.checked = !1)
          }
        }
        static JI() {
          const t = this.qR(0),
          i = this.qR(1);
          return t.checked ? 0 : i.checked ? 1 : - 1
        }
        static rI(t) {
          const i = this.iI(0),
          s = this.iI(1);
          switch (t) {
            case - 1:
              i.src = g.ze.ER,
              s.src = g.ze.ER;
              break;
            case 0:
              i.src = g.ze.lR,
              s.src = g.ze.ER;
              break;
            case 1:
              s.src = g.ze.lR,
              i.src = g.ze.ER
          }
        }
      },
      u.YI = class {
        static mR() {
          return g.Su(I.Fu.ju.fR.OR.QI.ZI)
        }
        static qR(t) {
          switch (t) {
            case 0:
              return g.Mu(I.Fu.ju.fR.OR.QI.ig.tg);
            case 1:
              return g.Mu(I.Fu.ju.fR.OR.QI.eg.sg)
          }
        }
        static tI(t) {
          switch (t) {
            case 0:
              return I.Fu.ju.fR.OR.QI.ig.tg;
            case 1:
              return I.Fu.ju.fR.OR.QI.eg.sg
          }
        }
        static iI(t) {
          switch (t) {
            case 0:
              return g.Nu(I.Fu.ju.fR.OR.QI.ig.ng);
            case 1:
              return g.Nu(I.Fu.ju.fR.OR.QI.eg.og)
          }
        }
        static uI(t) {
          switch (t) {
            case 0:
              return g.xu(I.Fu.ju.fR.OR.QI.rg);
            case 1:
              return g.xu(I.Fu.ju.fR.OR.QI.hg)
          }
        }
        static isDisabled(t) {
          return this.qR(t).disabled
        }
        static TR() {
          this.qR(0).disabled = !0,
          this.qR(1).disabled = !0,
          this.mR().className = 'setting_label_disable',
          this.uI(0).className = 'radio_label_disabled',
          this.uI(1).className = 'radio_label_disabled',
          this.rI( - 1)
        }
        static qI(t) {
          this.qR(0).disabled = !1,
          this.qR(1).disabled = !1,
          this.mR().className = 'setting_label_enable',
          this.uI(0).className = 'radio_label_enabled',
          this.uI(1).className = 'radio_label_enabled',
          this.rI(t)
        }
        static oI(t, i) {
          const s = this.qR(0),
          e = this.qR(1);
          switch (t) {
            case 0:
              s.checked = !0,
              i &&
              (e.checked = !1);
              break;
            case 1:
              e.checked = !0,
              i &&
              (s.checked = !1)
          }
        }
        static JI() {
          const t = this.qR(0),
          i = this.qR(1);
          return t.checked ? 0 : i.checked ? 1 : - 1
        }
        static rI(t) {
          const i = this.iI(0),
          s = this.iI(1);
          switch (t) {
            case - 1:
              i.src = g.ze.ER,
              s.src = g.ze.ER;
              break;
            case 0:
              i.src = g.ze.lR,
              s.src = g.ze.ER;
              break;
            case 1:
              s.src = g.ze.lR,
              i.src = g.ze.ER
          }
        }
      },
      u.ag = (
        (d = class {
        }).cg = class {
          static zu() {
            return g.Ku(I.Fu.ju.fR.OR.lg)
          }
        },
        d.Qf = class {
          static zu() {
            return g.Ku(I.Fu.ju.fR.OR._g)
          }
        },
        d
      ),
      u.ug = class {
        static dg() {
          return g.$u(I.Fu.ju.fR.OR.Rg.Eg.fg)
        }
        static Ig(t) {
          this.dg().textContent = t
        }
        static gg() {
          return g.$u(I.Fu.ju.fR.OR.Rg.Eg.Og)
        }
        static wg(t) {
          this.gg().textContent = t
        }
      },
      u
    ),
    g.Hf = class {
      static _R() {
        return g.Su(I.Fu.ju.pg)
      }
      static zu() {
        return g.Su(I.Fu.ju.vg.mg)
      }
      static ed(t) {
        if (t) {
          const t = this._R();
          t.style.visibility = 'visible',
          t.style.overflow = 'auto',
          this.zu().style.visibility = 'visible'
        } else {
          this.zu().style.visibility = 'hidden';
          const t = this._R();
          t.style.visibility = 'hidden',
          t.style.overflow = 'hidden'
        }
      }
    },
    g.Pg = (
      (
        f = class {
          static Tg(t, i) {
            return $(`#${ t }`).dialog(i)
          }
          static bg(t, i) {
            const s = i ? 'open' : 'close';
            return $(`#${ t }`).dialog(s)
          }
        }
      ).Dg = class {
        static zu() {
          return g.Su(I.Fu.ju.yg)
        }
        static create(t) {
          return g.Pg.Tg(I.Fu.ju.yg, t)
        }
        static Lg(t) {
          return g.Pg.Tg(I.Fu.ju.yg, t)
        }
        static ed(t) {
          const i = g.Pg.bg(I.Fu.ju.yg, t);
          return t &&
          (this.zu().style.visibility = 'visible'),
          i
        }
        static eR() {
          return g.Ku(I.Fu.ju.Cg.Ag)
        }
        static kg() {
          return g.Ku(I.Fu.ju.Cg.Bg)
        }
        static aR() {
          return g.Ku(I.Fu.ju.Cg.Sg)
        }
      },
      f.Ng = class {
        static zu() {
          return g.Su(I.Fu.ju.Mg)
        }
        static create(t) {
          return g.Pg.Tg(I.Fu.ju.Mg, t)
        }
        static Lg(t) {
          return g.Pg.Tg(I.Fu.ju.Mg, t)
        }
        static ed(t) {
          const i = g.Pg.bg(I.Fu.ju.Mg, t);
          return t &&
          (this.zu().style.visibility = 'visible'),
          i
        }
        static xg() {
          return g.Ku(I.Fu.ju.Vg.Gg)
        }
      },
      f
    )
  },
  6367: (t, i, s) => {
    var e,
    n,
    o,
    r,
    h,
    a,
    c,
    l,
    _,
    u,
    d,
    f,
    E,
    R,
    I,
    g,
    O,
    w,
    p,
    m,
    v,
    P,
    D,
    T,
    b,
    y,
    L,
    A,
    C,
    k,
    B,
    S,
    N,
    M,
    x,
    G,
    V,
    W,
    $,
    K,
    U,
    F,
    X,
    z,
    H,
    j,
    q,
    J,
    Y,
    Z,
    Q,
    tt,
    it,
    st,
    et,
    nt,
    ot,
    rt,
    ht,
    at,
    ct,
    lt,
    _t,
    ut,
    dt,
    ft,
    Et;
    s.d(i, {
      Fu: () => Rt
    });
    class Rt {
    }
    Rt.Uu = ((e = class {
    }).Wg = 'toast', e.message = 'message', e),
    Rt.ju = (
      (n = class {
      }).$g = 'initLoadingWrap',
      n.fd = 'loader',
      n.Kg = ((o = class {
      }).Ug = void 0, o),
      n.Hu = 'screen',
      n.td = ((r = class {
      })._d = 'canvas', r.Rd = 'searchLayer', r.Qu = 'dummymap', r),
      n.Od = 'pageLeft',
      n.Fg = ((h = class {
      }).Ug = void 0, h),
      n.md = 'pageRight',
      n.Xg = ((a = class {
      }).Ug = void 0, a),
      n.Pd = 'pageUp',
      n.zg = ((c = class {
      }).Ug = void 0, c),
      n.Td = 'pageDown',
      n.Hg = ((l = class {
      }).Ug = void 0, l),
      n.Sd = 'imageZoomingFlame',
      n.xd = 'newScreen',
      n.Vd = ((_ = class {
      }).Gd = 'verticalPageLayer', _),
      n.hd = 'dummyLayer',
      n.zd = 'menuLayer',
      n.Zd = 'menu_header',
      n.Rf = (
        (u = class {
        }).div = void 0,
        u.Ef = (
          (d = class {
          }).ff = 'title',
          d.mf = (
            (f = class {
            }).wf = ((E = class {
            }).Of = ((R = class {
            }).gf = 'searchText', R), E),
            f
          ),
          d.jg = 'leftBtn',
          d.Tf = (
            (I = class {
            }).Df = 'backBtn',
            I.Af = 'linkJumpBtn',
            I.Bf = 'leftSearch',
            I
          ),
          d.qg = 'rightBtn',
          d.kf = ((g = class {
          }).Cf = 'multiBtn', g.Sf = 'rightSearch', g),
          d
        ),
        u
      ),
      n.Jg = 'all_footer',
      n.Vf = (
        (O = class {
        }).UE = 'trial_footer',
        O.HE = (
          (w = class {
          }).Yg = 'area_trialBuy',
          w.zE = ((p = class {
          }).XE = 'trialBuy', p),
          w.Zg = 'area_trialClose',
          w.JE = ((m = class {
          }).qE = 'trialClose', m),
          w
        ),
        O.Gf = 'menu_footer',
        O.zf = (
          (v = class {
          }).Xf = 'pagenum',
          v.jf = 'footer_btn',
          v.sE = (
            (P = class {
            }).Qg = 'area_btn',
            P.iE = (
              (D = class {
              }).tE = 'area_mokuji',
              D.oE = ((T = class {
              }).nE = 'mokuji', T),
              D.hE = 'area_search',
              D.cE = ((b = class {
              }).aE = 'search', b),
              D.lE = 'area_zoom',
              D.dE = ((y = class {
              }).uE = 'zoom', y),
              D.RE = 'area_setting',
              D.gE = ((L = class {
              }).IE = 'setting', L),
              D.wE = 'area_tts',
              D.mE = ((A = class {
              }).pE = 'tts', A),
              D.vE = 'area_help',
              D.DE = ((C = class {
              }).PE = 'help', C),
              D.bE = 'area_fullscreen',
              D.LE = ((k = class {
              }).yE = 'fullscreen', k),
              D.kE = 'area_direction',
              D.SE = ((B = class {
              }).BE = 'direction', B),
              D
            ),
            P
          ),
          v.ME = 'movebar',
          v.GE = ((S = class {
          }).xE = 'moveSlider', S.WE = 'right_binding', S),
          v
        ),
        O
      ),
      n.uR = 'scroll_setting',
      n.fR = (
        (N = class {
        }).dR = 'settings',
        N.OR = (
          (M = class {
          }).tO = 'textSize',
          M.gR = (
            (x = class {
            }).vR = 'text_size_label',
            x.DR = 'innerSize',
            x.IR = 'text_size',
            x.pR = (
              (G = class {
              }).Lu = '13',
              G.yR = '11',
              G.LR = '12',
              G.AR = '13',
              G.CR = '14',
              G.kR = '15',
              G
            ),
            x
          ),
          M.iO = 'bookColor',
          M.SR = (
            (V = class {
            }).MR = 'book_color_label',
            V.GR = 'innerColor',
            V.BR = 'book_color',
            V.NR = ((W = class {
            }).Lu = '21', W.sO = '21', W.eO = '22', W.nO = '23', W),
            V
          ),
          M.oO = 'ttsSpeed',
          M.$R = (
            ($ = class {
            }).UR = 'tts_speed_label',
            $.XR = 'innerTtsSpeed',
            $.WR = 'tts_speed',
            $.KR = (
              (K = class {
              }).Lu = '2',
              K.rO = '1',
              K.hO = '2',
              K.aO = '3',
              K.cO = '4',
              K.lO = '5',
              K._O = '6',
              K
            ),
            $
          ),
          M.uO = 'setting_item',
          M.jR = (
            (U = class {
            }).HR = 'write_mode_label',
            U.dO = 'write_mode_1',
            U.YR = ((F = class {
            }).JR = '31', F.sI = 'img31', F),
            U.fO = 'write_mode_2',
            U.QR = ((X = class {
            }).ZR = '32', X.eI = 'img32', X),
            U
          ),
          M.cI = 'web_font_setting_item',
          M._I = (
            (z = class {
            }).lI = 'web_font_label',
            z.dI = 'web_font_1',
            z.RI = ((H = class {
            }).EI = '61', H.OI = 'img61', H),
            z.fI = 'web_font_2',
            z.gI = ((j = class {
            }).II = '62', j.wI = 'img62', j),
            z
          ),
          M.vI = 'is_verticalui',
          M.TI = (
            (q = class {
            }).DI = 'is_verticalui_label',
            q.NI = 'is_verticalui_1',
            q.kI = '72',
            q.yI = ((J = class {
            }).bI = '71', J.BI = 'img71', J),
            q.MI = 'is_verticalui_2',
            q.AI = ((Y = class {
            }).LI = '72', Y.SI = 'img72', Y),
            q
          ),
          M.GI = 'fit_zoom',
          M.WI = (
            (Z = class {
            }).VI = 'fit_zoom_label',
            Z.HI = 'fit_zoom_1',
            Z.kI = '42',
            Z.KI = ((Q = class {
            }).$I = '41', Q.XI = 'img41', Q),
            Z.jI = 'fit_zoom_2',
            Z.FI = ((tt = class {
            }).UI = '42', tt.zI = 'img42', tt),
            Z
          ),
          M.EO = 'page_anime',
          M.QI = (
            (it = class {
            }).ZI = 'anime_label',
            it.rg = 'page_anime_1',
            it.ig = ((st = class {
            }).tg = '51', st.ng = 'img51', st),
            it.hg = 'page_anime_2',
            it.eg = ((et = class {
            }).sg = '52', et.og = 'img52', et),
            it
          ),
          M.lg = 'settings_reset_btn',
          M._g = 'settings_help_btn',
          M.RO = 'verbuild_area',
          M.Rg = (
            (nt = class {
            }).IO = 'verbuild_label',
            nt.Eg = ((ot = class {
            }).fg = 'app_version', ot.Og = 'app_build', ot),
            nt
          ),
          M
        ),
        N
      ),
      n.pg = 'scroll_mokuji',
      n.vg = ((rt = class {
      }).mg = 'mokujiPage', rt),
      n.tR = 'finishDialog',
      n.sR = 'errorDialog',
      n.oR = (
        (ht = class {
        }).gO = 'error_msgHeader',
        ht.OO = 'error_msgMain',
        ht.wO = 'error_msgFooter',
        ht.nR = 'error_topBtn',
        ht.pO = ((at = class {
        }).mO = 'imgTop', at),
        ht.hR = 'error_reloadBtn',
        ht.vO = ((ct = class {
        }).PO = 'imgReload', ct),
        ht.cR = 'error_finishBtn',
        ht.DO = ((lt = class {
        }).TO = 'imgFinish', lt),
        ht
      ),
      n.yg = 'trialDialog',
      n.Cg = (
        (_t = class {
        }).Ag = 'trial_topBtn',
        _t.bO = ((ut = class {
        }).mO = 'imgTop', ut),
        _t.Bg = 'trial_storeBtn',
        _t.yO = ((dt = class {
        }).LO = 'imgStore', dt),
        _t.Sg = 'trial_finishBtn',
        _t.AO = ((ft = class {
        }).TO = 'imgFinish', ft),
        _t
      ),
      n.Mg = 'webfontDialog',
      n.Vg = ((Et = class {
      }).p = void 0, Et.Gg = 'webfont_okBtn', Et),
      n.Fd = 'ttsWrap',
      n
    )
  },
  1821: (t, i, s) => {
    s.d(i, {
      rn: () => e
    });
    const e = new class {
      constructor() {
        this.CO = [],
        this.kO = [],
        this.BO = null,
        this.userAgent = navigator.userAgent.toLowerCase(),
        0 <= this.userAgent.indexOf('chrome') ? this.BO = t => {
          t.onload = () => {
            t.onload = null,
            t.width = 0,
            t.height = 0,
            this.CO.push(t)
          },
          t.onerror = null,
          t.src &&
          t.src.match(/^blob:/) &&
          URL.revokeObjectURL(t.src),
          t.src = './image/nop.png'
        }
         : 0 <= this.userAgent.indexOf('msie') ||
        0 <= this.userAgent.indexOf('trident') ? this.BO = t => {
          t.onload = null,
          t.onerror = null,
          t.src &&
          t.src.match(/^blob:/) &&
          URL.revokeObjectURL(t.src),
          t.src = ''
        }
         : this.BO = t => {
          t.onload = null,
          t.onerror = null,
          t.src &&
          t.src.match(/^blob:/) &&
          URL.revokeObjectURL(t.src),
          t.src = '',
          t.width = 0,
          t.height = 0,
          this.CO.push(t)
        }
      }
      SO() {
        return 0 < this.CO.length ? this.CO.pop() : new Image
      }
      on() {
        return 0 < this.kO.length ? this.kO.pop() : document.createElement('canvas')
      }
      release(t) {
        t instanceof Image ? this.BO(t) : t instanceof HTMLCanvasElement &&
        (t.width = 0, t.height = 0, this.kO.push(t))
      }
    }
  },
  8978: (t, i, s) => {
    s.d(i, {
      Ee: () => e
    });
    const e = new class {
      constructor() {
        this.fe = !1,
        this.NO = void 0,
        this.MO = !0
      }
    }
  },
  6749: (t, i, s) => {
    s.d(i, {
      Ys: () => h
    });
    var e = s(4776);
    const n = {
      r: 255,
      xt: 255,
      b: 255
    };
    var o = s(9807),
    r = s(2614);
    class h {
      static unique(t) {
        const i = {},
        s = [];
        for (let e = 0; e < t.length; e++) {
          const n = t[e];
          n in i ||
          (i[n] = !0, s.push(n))
        }
        return s
      }
      static xO(t) {
        let i = 0;
        const s = [];
        if (t.length % 4 == 0 && t.match(/^[A-Za-z0-9+/]+=?=?$/)) {
          let e,
          n;
          for (e = 0; e < t.length - 4; e += 4) n = this.GO[t.charCodeAt(e) - 32] << 18,
          n |= this.GO[t.charCodeAt(e + 1) - 32] << 12,
          n |= this.GO[t.charCodeAt(e + 2) - 32] << 6,
          n |= this.GO[t.charCodeAt(e + 3) - 32],
          s[i++] = n >> 16 & 255,
          s[i++] = n >> 8 & 255,
          s[i++] = 255 & n;
          n = this.GO[t.charCodeAt(e) - 32] << 18,
          n |= this.GO[t.charCodeAt(e + 1) - 32] << 12,
          n |= this.GO[t.charCodeAt(e + 2) - 32] << 6,
          n |= this.GO[t.charCodeAt(e + 3) - 32],
          s[i++] = n >> 16 & 255,
          '=' != t[e + 2] &&
          (s[i++] = n >> 8 & 255, '=' != t[e + 3] && (s[i++] = 255 & n))
        }
        return new Uint8Array(s)
      }
      static VO(t) {
        let i = '';
        for (let s = 0; s < t.length; s++) {
          let e = t[s];
          if (t[s] <= 127);
           else {
            if (t[s] <= 191) return '';
            if (t[s] <= 223) e = (31 & t[s]) << 6,
            e |= 63 & t[++s];
             else if (t[s] <= 239) e = (15 & t[s]) << 12,
            e |= (63 & t[++s]) << 6,
            e |= 63 & t[++s];
             else {
              if (!(t[s] <= 247)) return '';
              e = (7 & t[s]) << 18,
              e |= (63 & t[++s]) << 12,
              e |= (63 & t[++s]) << 6,
              e |= 63 & t[++s]
            }
          }
          i += String.fromCharCode(e)
        }
        return i
      }
      static WO(t) {
        const i = [],
        s = [];
        if (4 != t.length / 2) return !1;
        for (let e = 1, n = 0; e <= 4; e++, n += 2) i[e] = t[n],
        s[e] = t[n + 1];
        const e = i[1],
        n = s[1],
        o = i[2],
        r = s[2],
        h = i[3],
        a = s[3],
        c = i[4],
        l = s[4];
        return e == c &&
        o == h &&
        n == r &&
        a == l
      }
      static $O(t, i, s, e) {
        return Math.pow(t - i, 2) + Math.pow(s - e, 2)
      }
      static KO() {
        try {
          const t = document.defaultView.getComputedStyle(document.body, null).backgroundColor;
          if (!t.indexOf('rgba')) return n;
          if (12 <= t.length && 18 >= t.length) {
            const i = t.split(', ');
            return {
              r: parseInt(i[0].substr(4, i[0].length - 4)),
              xt: parseInt(i[1]),
              b: parseInt(i[2].substr(0, i[2].length - 1))
            }
          }
          return n
        } catch (t) {
          e.zs.onError(
            o.js.errorCode.D_,
            'BookViewer.prototype.getBackGroundColor',
            h.Js(t)
          )
        }
        return n
      }
      static UO(t, i) {
        let s = !0;
        try {
          if (s = !(!t && 0 !== t || isNaN(t)), s && null != i) {
            if (!i && 0 !== i || isNaN(i)) return e.zs.onError(
              o.js.errorCode.yc,
              'BookViewer.prototype.isNumber',
              'argument[min] is illegal'
            ),
            s;
            s = i < t
          }
        } catch (t) {
          e.zs.onError(o.js.errorCode.T_, 'BookViewer.prototype.isNumber', h.Js(t))
        }
        return s
      }
      static Js(t) {
        let i = '';
        try {
          t ? i = t.name + ' : ' + t.message : e.zs.onError(
            o.js.errorCode.Lc,
            'BookViewer.prototype.getErrorMessage',
            'argument[error] is illegal'
          )
        } catch (t) {
          e.zs.onError(
            o.js.errorCode.b_,
            'BookViewer.prototype.getErrorMessage',
            t.name + ' : ' + t.message
          )
        }
        return i
      }
      static FO(t, i) {
        try {
          o.js.Uo <= t &&
          (
            t == o.js.Wo ? console.log(i) : t == o.js.$o ? console.warn(i) : t == o.js.Ko &&
            console.error(i)
          )
        } catch (t) {
          e.zs.onError(
            o.js.errorCode.y_,
            'BookViewer.prototype.outPutDebugLog',
            h.Js(t)
          )
        }
      }
      static XO(t) {
        if (null == t) return null;
        let i,
        s = '';
        for (; i = t.shift(); ) if (i <= 127) s += String.fromCharCode(i);
         else if (i <= 223) {
          let e = (31 & i) << 6;
          e += 63 & t.shift(),
          s += String.fromCharCode(e)
        } else if (i <= 224) {
          let i = (31 & t.shift()) << 6 | 2048;
          i += 63 & t.shift(),
          s += String.fromCharCode(i)
        } else {
          let e = (15 & i) << 12;
          e += (63 & t.shift()) << 6,
          e += 63 & t.shift(),
          s += String.fromCharCode(e)
        }
        return s
      }
      static zO(t, i) {
        const s = [];
        let e,
        n = 0;
        const o = [];
        for (let t = 0; t < 256; t++) s[t] = t;
        for (let i = 0; i < 256; i++) n = (n + s[i] + t.charCodeAt(i % t.length)) % 256,
        e = s[i],
        s[i] = s[n],
        s[n] = e;
        let r = 0;
        n = 0;
        for (let t = 0; t < i.length; t++) r = (r + 1) % 256,
        n = (n + s[r]) % 256,
        e = s[r],
        s[r] = s[n],
        s[n] = e,
        o.push(i[t] ^ s[(s[r] + s[n]) % 256]);
        return o
      }
      static HO() {
        const t = r.Vs.jO(),
        i = document.documentElement.clientWidth;
        document.documentElement.clientHeight;
        let s = document.getElementById('dummy_pos');
        return null == s &&
        (
          s = document.createElement('div'),
          s.id = 'dummy_pos',
          s.style.width = '1px',
          s.style.height = '1px',
          s.style.position = 'fixed',
          s.style.left = '0',
          s.style.top = '0',
          s.style.visibility = 'hidden',
          document.body.appendChild(s)
        ),
        {
          width: t.width,
          height: t.height,
          scale: i / t.width,
          pageLeft: window.scrollX,
          pageTop: window.scrollY,
          offsetLeft: 0 - s.getBoundingClientRect().x,
          offsetTop: 0 - s.getBoundingClientRect().y
        }
      }
      static qO() {
        return null == window.visualViewport ? this.HO() : {
          width: window.visualViewport.width,
          height: window.visualViewport.height,
          scale: window.visualViewport.scale,
          pageLeft: window.visualViewport.pageLeft,
          pageTop: window.visualViewport.pageTop,
          offsetLeft: window.visualViewport.offsetLeft,
          offsetTop: window.visualViewport.offsetTop
        }
      }
    }
    h.GO = [
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      62,
      - 1,
      - 1,
      - 1,
      63,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      - 1,
      - 1,
      - 1,
      0,
      - 1,
      - 1,
      - 1,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      - 1,
      - 1,
      - 1,
      - 1,
      - 1
    ]
  },
  2539: (t, i, s) => {
    s.d(i, {
      E: () => n
    });
    var e = s(9807);
    const n = new class {
      constructor() {
        this.userAgent = navigator.userAgent.toLowerCase(),
        this.init(this.userAgent)
      }
      get JO() {
        return this.YO
      }
      get ZO() {
        return this.QO
      }
      tw() {
        return this.iw
      }
      get sw() {
        return this.ew
      }
      get nw() {
        return this.ow
      }
      get rw() {
        return this.hw
      }
      aw() {
        if (this.QO = null, 0 <= this.userAgent.indexOf('windows')) this.cw = e.js.du.Eu;
         else if (0 <= this.userAgent.indexOf('macintosh')) 'ontouchend' in document ? this.cw = e.js.du.Iu : this.cw = e.js.du.Ru;
         else if (
          0 <= this.userAgent.indexOf('iphone') ||
          0 <= this.userAgent.indexOf('ipad') ||
          0 <= this.userAgent.indexOf('ipod')
        ) {
          let t;
          this.cw = e.js.du.Iu,
          t = this.userAgent.match(/os (\d+)_(\d+)_?(\d+)?/),
          null != t &&
          (this.YO = t[1])
        } else if (0 <= this.userAgent.indexOf('android')) {
          this.cw = e.js.du.gu;
          const t = this.userAgent.match(/android (\d+).(\d+).?(\d+)?/);
          null != t &&
          (this.YO = t[1], this.QO = t[2])
        } else this.cw = e.js.du.fu
      }
      lw() {
        null == this.cw &&
        this.aw(),
        this._w = e.js.Du.fu,
        this.Re() &&
        (
          this.userAgent.indexOf('ipod') > - 1 ? this._w = e.js.Du.Tu : this.userAgent.indexOf('ipad') > - 1 ? this._w = e.js.Du.bu : this.userAgent.indexOf('iphone') > - 1 &&
          (this._w = e.js.Du.yu)
        )
      }
      uw() {
        null == this.cw &&
        this.aw(),
        e.js.du.Eu == this.cw ? 0 <= this.userAgent.indexOf('msie') ||
        0 <= this.userAgent.indexOf('trident') ? this.dw = e.js.Ou.wu : 0 <= this.userAgent.indexOf('chrome') ? this.dw = e.js.Ou.mu : 0 <= this.userAgent.indexOf('firefox') ? this.dw = e.js.Ou.vu : this.dw = e.js.Ou.fu : e.js.du.Ru == this.cw ? 0 <= this.userAgent.indexOf('safari') ? this.dw = e.js.Ou.pu : 0 <= this.userAgent.indexOf('chrome') ? this.dw = e.js.Ou.mu : 0 <= this.userAgent.indexOf('firefox') ? this.dw = e.js.Ou.vu : this.dw = e.js.Ou.fu : e.js.du.Iu == this.cw ? 0 <= this.userAgent.indexOf('crios') ? this.dw = e.js.Ou.mu : 0 <= this.userAgent.indexOf('safari') ? this.dw = e.js.Ou.pu : 0 <= this.userAgent.indexOf('firefox') ? this.dw = e.js.Ou.vu : this.dw = e.js.Ou.fu : e.js.du.gu == this.cw &&
        (
          0 <= this.userAgent.indexOf('chrome') ? this.dw = e.js.Ou.mu : 0 <= this.userAgent.indexOf('firefox') ? this.dw = e.js.Ou.vu : this.dw = e.js.Ou.fu
        ),
        this.ew = !0,
        this.dw == e.js.Ou.wu &&
        (this.ew = !1)
      }
      fw() {
        if ('number' == typeof window.devicePixelRatio) 1 < window.devicePixelRatio ? (this.ow = !0, this.hw = window.devicePixelRatio) : (this.ow = !1, this.hw = 1);
         else if ('string' == typeof window.devicePixelRatio) {
          const t = window.devicePixelRatio;
          if ( - 1 != t.indexOf(',')) {
            const i = t.replace(/,/g, '.');
            this.ow = !0,
            this.hw = parseInt(i, 10)
          } else this.ow = !1,
          this.hw = 1
        } else this.ow = !1,
        this.hw = 1
      }
      init(t) {
        this.userAgent = t,
        this.aw(),
        this.lw(),
        this.uw(),
        this.fw()
      }
      he() {
        return e.js.du.Eu === this.cw
      }
      Ew() {
        return e.js.du.Ru === this.cw
      }
      ae() {
        return e.js.du.gu === this.cw
      }
      Re() {
        return e.js.du.Iu === this.cw
      }
      Rw() {
        return this.Re() ||
        this.ae()
      }
      Iw() {
        return e.js.du.fu === this.cw
      }
      ne() {
        return e.js.Ou.pu === this.dw
      }
      ee() {
        return e.js.Ou.mu === this.dw
      }
      te() {
        return e.js.Ou.vu === this.dw
      }
      gw() {
        return e.js.Ou.Pu === this.dw
      }
      Ow() {
        return e.js.Ou.fu === this.dw
      }
      ww() {
        return this.Re() &&
        this.ne()
      }
      pw() {
        return this.ae() &&
        this.Ow()
      }
    }
  },
  2614: (t, i, s) => {
    s.d(i, {
      Vs: () => c
    });
    var e = s(4776),
    n = s(9807),
    o = s(2539),
    r = s(6749),
    h = s(374),
    a = s(1821);
    class c {
      static jO() {
        return {
          width: window.innerWidth,
          height: window.innerHeight
        }
      }
      static mw() {
        const t = c.jO();
        return t.width > t.height ? n.js.zn.jn : n.js.zn.Hn
      }
      static Pw(t) {
        r.Ys.FO(n.js.Wo, `onImageLoaded decodeStatus=${ t }`),
        r.Ys.UO(t) ||
        e.zs.onError(
          n.js.errorCode.Nr,
          'onImageLoaded',
          'argument[decodeStatus] is illegal'
        )
      }
      static Dw() {
        if (o.E.nw) {
          const t = h.Ue.Screen.Ke.zu();
          h.Ue.Screen.Xu.nd({
            width: t.style.width,
            height: t.style.height
          })
        } else {
          const t = h.Ue.Screen.Ke.$e();
          h.Ue.Screen.Xu.nd({
            width: `${ t.width }px`,
            height: `${ t.height }px`
          })
        }
      }
      static Tw() {
        h.Ue.Screen.Xu.ed(!1)
      }
      static bw(t) {
        try {
          if (
            r.Ys.FO(
              n.js.Wo,
              `updateCanvasPosSize: ${ t.x },${ t.y },${ t.width },${ t.height }`
            ),
            !r.Ys.UO(t.x)
          ) return void e.zs.onError(
            n.js.errorCode.$r,
            'updateCanvasPosSize',
            'argument[left] is illegal'
          );
          if (!r.Ys.UO(t.y)) return void e.zs.onError(
            n.js.errorCode.Kr,
            'updateCanvasPosSize',
            'argument[top] is illegal'
          );
          if (!r.Ys.UO(t.width)) return void e.zs.onError(
            n.js.errorCode.Ur,
            'updateCanvasPosSize',
            'argument[width] is illegal'
          );
          if (!r.Ys.UO(t.height)) return void e.zs.onError(
            n.js.errorCode.Fr,
            'updateCanvasPosSize',
            'argument[height] is illegal'
          );
          h.Ue.Screen.Ke.od({
            left: t.x,
            top: t.y
          });
          const i = h.Ue.Screen.Ke.zu();
          if (o.E.nw) {
            const s = ~~(t.width * o.E.rw);
            i.width != s &&
            (i.width = s, i.style.width = `${ t.width }px`);
            const e = ~~(t.height * o.E.rw);
            i.height != e &&
            (i.height = e, i.style.height = `${ t.height }px`)
          } else i.width != t.width &&
          (i.width = t.width),
          i.height != t.height &&
          (i.height = t.height);
          h.Ue.Ed.od({
            left: t.x,
            top: t.y
          });
          const s = h.Ue.Ed.zu();
          o.E.nw ? (s.style.width = `${ t.width }px`, s.style.height = `${ t.height }px`) : (
            s.style.width = t.width.toFixed(),
            s.style.height = t.height.toFixed()
          ),
          s.width != i.width &&
          (s.width = i.width),
          s.height != i.height &&
          (s.height = i.height),
          h.Ue.Screen.Xu.od({
            left: t.x,
            top: t.y
          }),
          c.Dw()
        } catch (t) {
          e.zs.onError(n.js.errorCode.na, 'updateCanvasPosSize', r.Ys.Js(t))
        }
      }
      static yw() {
        const t = c.jO();
        c.bw(Object.assign({
          x: 0,
          y: 0
        }, t))
      }
      static Lw(t, i) {
        try {
          if (r.Ys.FO(n.js.Wo, 'setGlobalCompositeOperation: ' + i), !i) return void e.zs.onError(
            n.js.errorCode.Xr,
            'setGlobalCompositeOperation',
            'argument[operation] is illegal'
          );
          if (!t) return void e.zs.onError(
            n.js.errorCode.zr,
            'setGlobalCompositeOperation',
            'argument[context] is illegal'
          );
          t.globalCompositeOperation = i
        } catch (t) {
          e.zs.onError(n.js.errorCode.oa, 'setGlobalCompositeOperation', r.Ys.Js(t))
        }
      }
      static Aw(t, i) {
        try {
          if (!t) return void e.zs.onError(
            n.js.errorCode.Jr,
            'setFillStyle',
            'argument[context] is illegal'
          );
          i.a ? t.fillStyle = `rgba(${ i.r },${ i.xt },${ i.b },${ i.a })` : t.fillStyle = `rgb(${ i.r },${ i.xt },${ i.b })`
        } catch (t) {
          e.zs.onError(n.js.errorCode.ra, 'setFillStyle', r.Ys.Js(t))
        }
      }
      static Cw(t, i, s, o) {
        return new Promise(
          r => {
            t ? (
              t.onload = () => {
                r(0)
              },
              t.onerror = () => {
                r( - 2)
              },
              t.src = 'about:blank',
              t.src = i,
              o &&
              (t.width = s.width, t.height = s.height),
              t = null
            ) : e.zs.onError(n.js.errorCode.sh, 'setImageSrc', 'argument[image] is illegal')
          }
        )
      }
      static kw(t, i, s, o) {
        try {
          if (!i) return;
          if (o && o.fillRect) {
            const i = r.Ys.KO();
            c.Bw(t, i)
          }
          if (i.complete || i.toDataURL) {
            if (!t) return void e.zs.onError(
              n.js.errorCode.ah,
              'drawImageObject',
              'argument[context] is illegal'
            );
            if (!i) return void e.zs.onError(
              n.js.errorCode.lh,
              'drawImageObject',
              'argument[image] is illegal'
            );
            c.Gs(t, i, s, o)
          }
        } catch (t) {
          'NS_ERROR_NOT_AVAILABLE' == t.name ||
          e.zs.onError(n.js.errorCode.aa, 'drawImageObject', r.Ys.Js(t))
        }
      }
      static Fs(t, i, s, o, h) {
        let l,
        _,
        u,
        d,
        f,
        E;
        t.imageSmoothingEnabled = !0;
        try {
          if (h && h.fillRect) {
            const i = r.Ys.KO();
            c.Bw(t, i)
          }
          if (!t) return void e.zs.onError(
            n.js.errorCode.gh,
            'drawImageList',
            'argument[context] is illegal'
          );
          if (!i) return void e.zs.onError(
            n.js.errorCode.Oh,
            'drawImageList',
            'argument[loadedList] is illegal'
          );
          for (l = s.y, f = 0; f < i.Sw.length; f++) E = i.Sw[f],
          _ = s.y + i.Nw[f] * s.height / i.Mw.height,
          u = Math.floor(E.height * s.height / i.Mw.height),
          d = 0 === f ? s.y : ~~((l + _) / 2),
          o &&
          1 == i.Ts &&
          (
            E = c.xw(E, {
              width: E.width,
              height: E.height
            }, {
              width: s.width,
              height: u
            })
          ),
          t.save(),
          t.beginPath(),
          t.rect(s.x, d, s.width, u + d - _),
          t.clip(),
          c.Gs(t, E, {
            x: s.x,
            y: _,
            width: s.width,
            height: u
          }, h),
          t.restore(),
          l = _ + u,
          E !== i.Sw[f] &&
          a.rn.release(E),
          E = void 0;
          t = void 0
        } catch (t) {
          'NS_ERROR_NOT_AVAILABLE' == t.name ||
          e.zs.onError(n.js.errorCode.ca, 'drawImageObject', r.Ys.Js(t))
        }
      }
      static xw(t, i, s) {
        if (i.width <= s.width || i.height <= s.height) return t;
        let e = t.getContext('2d');
        const n = e.getImageData(0, 0, i.width, i.height),
        o = a.rn.on();
        o.width = s.width,
        o.height = s.height;
        let r = o.getContext('2d');
        r.globalCompositeOperation = t.globalCompositeOperation,
        r.imageSmoothingEnabled = t.imageSmoothingEnabled;
        const h = r.createImageData(s.width, s.height),
        c = n.data,
        l = h.data;
        let _,
        u,
        d,
        f,
        E,
        R,
        I,
        g,
        O,
        w,
        p,
        m;
        const v = new Array(s.width + 1),
        P = Math.floor(i.width / s.width),
        D = Math.floor(i.height / s.height),
        T = i.width - P * s.width,
        b = i.height - D * s.height;
        v[0] = 0,
        d = 0;
        for (let t = 1; t < s.width; t++) v[t] = v[t - 1] + P,
        d += T,
        d >= s.width &&
        (v[t]++, d -= s.width);
        v[s.width] = i.width,
        w = 0,
        p = 0,
        m = 0,
        f = 0,
        u = 0;
        for (let t = 0; t < s.height; t++) {
          _ = u,
          u += D,
          f += b,
          f >= s.height &&
          (u++, f -= s.height);
          for (let t = 0; t < s.width; t++) {
            E = 0,
            R = 0,
            I = 0,
            g = 0,
            O = 0,
            m = w;
            for (let s = _; s < u; s++) {
              for (let i = v[t]; i < v[t + 1]; i++) R += c[m + 4 * i + 0],
              I += c[m + 4 * i + 1],
              g += c[m + 4 * i + 2],
              O += c[m + 4 * i + 3],
              E++;
              m += 4 * i.width
            }
            R = (R + E / 2) / E,
            I = (I + E / 2) / E,
            g = (g + E / 2) / E,
            O = (O + E / 2) / E,
            l[p + 4 * t + 0] = R,
            l[p + 4 * t + 1] = I,
            l[p + 4 * t + 2] = g,
            l[p + 4 * t + 3] = O
          }
          p += 4 * s.width,
          w += i.width * (u - _) * 4
        }
        return r.putImageData(h, 0, 0),
        r = void 0,
        e = void 0,
        o
      }
      static je(t, i, s, e, n) {
        let o,
        r,
        h = !1,
        c = i.naturalWidth ||
        i.width,
        l = i.naturalHeight ||
        i.height;
        if (h = !!n && n.Gw, h || 3 * s.height <= 4 * e.height) t.drawImage(i, s.x, s.y, s.width, s.height, e.x, e.y, e.width, e.height);
         else if (e.height / s.height > 0.5) l = Math.floor((e.height + s.height) / 2),
        c = Math.floor(l * s.width / s.height),
        o = a.rn.on(),
        o.width = c,
        o.height = l,
        r = o.getContext('2d'),
        r.drawImage(i, s.x, s.y, s.width, s.height, 0, 0, c, l),
        r = void 0,
        t.drawImage(o, e.x, e.y, e.width, e.height),
        a.rn.release(o),
        o = void 0;
         else {
          let n,
          h,
          _ = c,
          u = l;
          l = Math.floor(2.25 * (e.height + s.height) / 3),
          c = Math.floor(l * s.width / s.height),
          o = a.rn.on(),
          o.width = c,
          o.height = l,
          r = o.getContext('2d'),
          r.drawImage(i, s.x, s.y, s.width, s.height, 0, 0, c, l),
          r = void 0,
          u = Math.floor(1.15 * (e.height + s.height) / 3),
          _ = Math.floor(u * s.width / s.height),
          n = a.rn.on(),
          n.width = _,
          n.height = u,
          h = n.getContext('2d'),
          h.drawImage(o, 0, 0, c, l, 0, 0, _, u),
          h = void 0,
          t.drawImage(n, e.x, e.y, e.width, e.height),
          a.rn.release(n),
          n = void 0,
          a.rn.release(o),
          o = void 0
        }
      }
      static Gs(t, i, s, e) {
        const n = {
          x: 0,
          y: 0,
          width: i.naturalWidth ||
          i.width,
          height: i.naturalHeight ||
          i.height
        };
        return c.je(t, i, n, s, e)
      }
      static Vw(t, i, s, o, h) {
        try {
          if (h) {
            const i = r.Ys.KO();
            c.Bw(t, i)
          }
          if (i.complete) {
            if (!t) return void e.zs.onError(
              n.js.errorCode.Ah,
              'drawImage2',
              'argument[context] is illegal'
            );
            if (!i) return void e.zs.onError(n.js.errorCode.Ch, 'drawImage2', 'argument[image] is illegal');
            c.je(t, i, s, o)
          }
        } catch (t) {
          e.zs.onError(n.js.errorCode.la, 'drawImage2', r.Ys.Js(t))
        }
      }
      static Ww(t, i) {
        try {
          if (!i) return void e.zs.onError(
            n.js.errorCode.Vh,
            'deleteImage',
            'argument[imageIdName] is illegal'
          );
          t &&
          (t = null)
        } catch (t) {
          e.zs.onError(n.js.errorCode.fa, 'deleteImage', r.Ys.Js(t))
        }
      }
      static He(t, i, s) {
        if (null != t && null != s && c.Aw(t, s), t) if (o.E.ae()) {
          i.x = ~~i.x,
          i.y = ~~i.y,
          i.width = ~~i.width,
          i.height = ~~i.height;
          const s = 256;
          for (let e = i.y; e < i.y + i.height; e += s) {
            const n = e + s <= i.y + i.height ? s : i.y + i.height - e;
            for (let o = i.x; o < i.x + i.width; o += s) {
              const r = o + s <= i.x + i.width ? s : i.x + i.width - o;
              t.fillRect(o, e, r, n)
            }
          }
        } else t.fillRect(i.x, i.y, i.width, i.height);
         else e.zs.onError(
          n.js.errorCode.Fh,
          'fillRectToContext',
          'argument[context] is illegal'
        )
      }
      static Bw(t, i) {
        if (null != t) {
          const s = h.Ue.Screen.Ke.$e();
          return c.He(t, {
            x: 0,
            y: 0,
            width: s.width,
            height: s.height
          }, i)
        }
      }
      static $w(t, i) {
        try {
          if (!t) return void e.zs.onError(
            n.js.errorCode.qh,
            'clearRectToContext',
            'argument[context] is illegal'
          );
          if (o.E.ae()) {
            i.x = ~~i.x,
            i.y = ~~i.y,
            i.width = ~~i.width,
            i.height = ~~i.height;
            const s = 256;
            for (let e = i.y; e < i.y + i.height; e += s) {
              const n = e + s <= i.y + i.height ? s : i.y + i.height - e;
              for (let o = i.x; o < i.x + i.width; o += s) {
                const r = o + s <= i.x + i.width ? s : i.x + i.width - o;
                t.clearRect(o, e, r, n)
              }
            }
          } else t.clearRect(i.x, i.y, i.width, i.height)
        } catch (t) {
          e.zs.onError(n.js.errorCode.Ra, 'clearRectuToContext', r.Ys.Js(t))
        }
      }
      static hn(t) {
        if (null != t) return c.$w(t, {
          x: 0,
          y: 0,
          width: t.canvas.width,
          height: t.canvas.height
        })
      }
      static Kw(t, i) {
        if (null != t) {
          t.globalAlpha = 0.5;
          const s = {
            r: 255,
            xt: 255,
            b: 0
          };
          c.He(t, i, s)
        }
      }
    }
  },
  2496: (t, i, s) => {
    s.d(i, {
      Uw: () => r,
      sf: () => n,
      OK: () => o
    });
    const e = (t => {
      var i = {};
      return s.d(i, t),
      i
    }) ({
    default:
      () => __WEBPACK_EXTERNAL_MODULE__customize_js_4be904b8__.default
    }),
    n = e.default,
    o = n.GCustomizeInfo,
    r = n.app
  },
  4776: (t, i, s) => {
    s.d(i, {
      zs: () => e
    });
    class e {
      static onError(t, i, s) {
        return globalThis.BV.EmitEvents.onError(t, i, s)
      }
    }
  },
  4994: (t, i, s) => {
    s.d(i, {
      w: () => e
    });
    const e = {
      Fw: '0',
      Lf: '1',
      Xw: '2',
      yf: '3',
      zw: '4'
    }
  },
  1287: function () {
    (
      function () {
        var t = void 0,
        i = this;
        function s(s, e) {
          var n,
          o = s.split('.'),
          r = i;
          !(o[0] in r) &&
          r.execScript &&
          r.execScript('var ' + o[0]);
          for (; o.length && (n = o.shift()); ) o.length ||
          e === t ? r = r[n] ? r[n] : r[n] = {}
           : r[n] = e
        }
        var e = 'undefined' != typeof Uint8Array &&
        'undefined' != typeof Uint16Array &&
        'undefined' != typeof Uint32Array &&
        'undefined' != typeof DataView;
        function n(t) {
          var i,
          s,
          n,
          o,
          r,
          h,
          a,
          c,
          l,
          _,
          u = t.length,
          d = 0,
          f = Number.POSITIVE_INFINITY;
          for (c = 0; c < u; ++c) t[c] > d &&
          (d = t[c]),
          t[c] < f &&
          (f = t[c]);
          for (i = 1 << d, s = new (e ? Uint32Array : Array) (i), n = 1, o = 0, r = 2; n <= d; ) {
            for (c = 0; c < u; ++c) if (t[c] === n) {
              for (h = 0, a = o, l = 0; l < n; ++l) h = h << 1 | 1 & a,
              a >>= 1;
              for (_ = n << 16 | c, l = h; l < i; l += r) s[l] = _;
              ++o
            }
            ++n,
            o <<= 1,
            r <<= 1
          }
          return [s,
          d,
          f]
        }
        function o(t, i) {
          switch (
              this.xt = [],
              this.h = 32768,
              this.d = this.f = this.a = this.l = 0,
              this.input = e ? new Uint8Array(t) : t,
              this.m = !1,
              this.i = h,
              this.r = !1,
              !i &&
              (i = {}) ||
              (
                i.index &&
                (this.a = i.index),
                i.bufferSize &&
                (this.h = i.bufferSize),
                i.Hw &&
                (this.i = i.Hw),
                i.resize &&
                (this.r = i.resize)
              ),
              this.i
            ) {
            case r:
              this.b = 32768,
              this.c = new (e ? Uint8Array : Array) (32768 + this.h + 258);
              break;
            case h:
              this.b = 0,
              this.c = new (e ? Uint8Array : Array) (this.h),
              this.e = this.z,
              this.n = this.v,
              this.jw = this.w;
              break;
            default:
              throw Error('invalid inflate mode')
          }
        }
        var r = 0,
        h = 1,
        a = {
          t: r,
          s: h
        };
        o.prototype.k = function () {
          for (; !this.m; ) {
            var i = b(this, 3);
            switch (1 & i && (this.m = !0), i >>>= 1) {
              case 0:
                var s = this.input,
                o = this.a,
                a = this.c,
                c = this.b,
                l = s.length,
                _ = t,
                d = a.length,
                f = t;
                if (this.d = this.f = 0, o + 1 >= l) throw Error('invalid uncompressed block header: LEN');
                if (_ = s[o++] | s[o++] << 8, o + 1 >= l) throw Error('invalid uncompressed block header: NLEN');
                if (_ === ~(s[o++] | s[o++] << 8)) throw Error('invalid uncompressed block header: length verify');
                if (o + _ > s.length) throw Error('input buffer is broken');
                switch (this.i) {
                  case r:
                    for (; c + _ > a.length; ) {
                      if (_ -= f = d - c, e) a.set(s.subarray(o, o + f), c),
                      c += f,
                      o += f;
                       else for (; f--; ) a[c++] = s[o++];
                      this.b = c,
                      a = this.e(),
                      c = this.b
                    }
                    break;
                  case h:
                    for (; c + _ > a.length; ) a = this.e({
                      p: 2
                    });
                    break;
                  default:
                    throw Error('invalid inflate mode')
                }
                if (e) a.set(s.subarray(o, o + _), c),
                c += _,
                o += _;
                 else for (; _--; ) a[c++] = s[o++];
                this.a = o,
                this.b = c,
                this.c = a;
                break;
              case 1:
                this.jw(P, T);
                break;
              case 2:
                var E,
                R,
                I,
                g,
                O = b(this, 5) + 257,
                w = b(this, 5) + 1,
                p = b(this, 4) + 4,
                m = new (e ? Uint8Array : Array) (u.length),
                v = t,
                D = t,
                L = t,
                A = t,
                C = t;
                for (C = 0; C < p; ++C) m[u[C]] = b(this, 3);
                if (!e) for (C = p, p = m.length; C < p; ++C) m[u[C]] = 0;
                for (E = n(m), v = new (e ? Uint8Array : Array) (O + w), C = 0, g = O + w; C < g; ) switch (D = y(this, E), D) {
                  case 16:
                    for (A = 3 + b(this, 2); A--; ) v[C++] = L;
                    break;
                  case 17:
                    for (A = 3 + b(this, 3); A--; ) v[C++] = 0;
                    L = 0;
                    break;
                  case 18:
                    for (A = 11 + b(this, 7); A--; ) v[C++] = 0;
                    L = 0;
                    break;
                  default:
                    L = v[C++] = D
                }
                R = n(e ? v.subarray(0, O) : v.slice(0, O)),
                I = n(e ? v.subarray(O) : v.slice(O)),
                this.jw(R, I);
                break;
              default:
                throw Error('unknown BTYPE: ' + i)
            }
          }
          return this.n()
        };
        var c,
        l,
        _ = [
          16,
          17,
          18,
          0,
          8,
          7,
          9,
          6,
          10,
          5,
          11,
          4,
          12,
          3,
          13,
          2,
          14,
          1,
          15
        ],
        u = e ? new Uint16Array(_) : _,
        d = [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          13,
          15,
          17,
          19,
          23,
          27,
          31,
          35,
          43,
          51,
          59,
          67,
          83,
          99,
          115,
          131,
          163,
          195,
          227,
          258,
          258,
          258
        ],
        f = e ? new Uint16Array(d) : d,
        E = [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1,
          2,
          2,
          2,
          2,
          3,
          3,
          3,
          3,
          4,
          4,
          4,
          4,
          5,
          5,
          5,
          5,
          0,
          0,
          0
        ],
        R = e ? new Uint8Array(E) : E,
        I = [
          1,
          2,
          3,
          4,
          5,
          7,
          9,
          13,
          17,
          25,
          33,
          49,
          65,
          97,
          129,
          193,
          257,
          385,
          513,
          769,
          1025,
          1537,
          2049,
          3073,
          4097,
          6145,
          8193,
          12289,
          16385,
          24577
        ],
        g = e ? new Uint16Array(I) : I,
        O = [
          0,
          0,
          0,
          0,
          1,
          1,
          2,
          2,
          3,
          3,
          4,
          4,
          5,
          5,
          6,
          6,
          7,
          7,
          8,
          8,
          9,
          9,
          10,
          10,
          11,
          11,
          12,
          12,
          13,
          13
        ],
        w = e ? new Uint8Array(O) : O,
        p = new (e ? Uint8Array : Array) (288);
        for (c = 0, l = p.length; c < l; ++c) p[c] = 143 >= c ? 8 : 255 >= c ? 9 : 279 >= c ? 7 : 8;
        var m,
        v,
        P = n(p),
        D = new (e ? Uint8Array : Array) (30);
        for (m = 0, v = D.length; m < v; ++m) D[m] = 5;
        var T = n(D);
        function b(t, i) {
          for (var s, e = t.f, n = t.d, o = t.input, r = t.a, h = o.length; n < i; ) {
            if (r >= h) throw Error('input buffer is broken');
            e |= o[r++] << n,
            n += 8
          }
          return s = e & (1 << i) - 1,
          t.f = e >>> i,
          t.d = n - i,
          t.a = r,
          s
        }
        function y(t, i) {
          for (
            var s,
            e,
            n = t.f,
            o = t.d,
            r = t.input,
            h = t.a,
            a = r.length,
            c = i[0],
            l = i[1];
            o < l &&
            !(h >= a);
          ) n |= r[h++] << o,
          o += 8;
          if ((e = (s = c[n & (1 << l) - 1]) >>> 16) > o) throw Error('invalid code length: ' + e);
          return t.f = n >> e,
          t.d = o - e,
          t.a = h,
          65535 & s
        }
        function L(t, i) {
          var s,
          e;
          if (
            this.input = t,
            this.a = 0,
            !i &&
            (i = {}) ||
            (i.index && (this.a = i.index), i.verify && (this.qw = i.verify)),
            s = t[this.a++],
            e = t[this.a++],
            (15 & s) !== A
          ) throw Error('unsupported compression method');
          if (this.method = A, 0 != ((s << 8) + e) % 31) throw Error('invalid fcheck flag:' + ((s << 8) + e) % 31);
          if (32 & e) throw Error('fdict flag is not supported');
          this.zs = new o(
            t,
            {
              index: this.a,
              bufferSize: i.bufferSize,
              Hw: i.Hw,
              resize: i.resize
            }
          )
        }
        o.prototype.jw = function (t, i) {
          var s = this.c,
          e = this.b;
          this.o = t;
          for (var n, o, r, h, a = s.length - 258; 256 !== (n = y(this, t)); ) if (256 > n) e >= a &&
          (this.b = e, s = this.e(), e = this.b),
          s[e++] = n;
           else for (
            h = f[o = n - 257],
            0 < R[o] &&
            (h += b(this, R[o])),
            n = y(this, i),
            r = g[n],
            0 < w[n] &&
            (r += b(this, w[n])),
            e >= a &&
            (this.b = e, s = this.e(), e = this.b);
            h--;
          ) s[e] = s[e++ - r];
          for (; 8 <= this.d; ) this.d -= 8,
          this.a--;
          this.b = e
        },
        o.prototype.w = function (t, i) {
          var s = this.c,
          e = this.b;
          this.o = t;
          for (var n, o, r, h, a = s.length; 256 !== (n = y(this, t)); ) if (256 > n) e >= a &&
          (a = (s = this.e()).length),
          s[e++] = n;
           else for (
            h = f[o = n - 257],
            0 < R[o] &&
            (h += b(this, R[o])),
            n = y(this, i),
            r = g[n],
            0 < w[n] &&
            (r += b(this, w[n])),
            e + h > a &&
            (a = (s = this.e()).length);
            h--;
          ) s[e] = s[e++ - r];
          for (; 8 <= this.d; ) this.d -= 8,
          this.a--;
          this.b = e
        },
        o.prototype.e = function () {
          var t,
          i,
          s = new (e ? Uint8Array : Array) (this.b - 32768),
          n = this.b - 32768,
          o = this.c;
          if (e) s.set(o.subarray(32768, s.length));
           else for (t = 0, i = s.length; t < i; ++t) s[t] = o[t + 32768];
          if (this.xt.push(s), this.l += s.length, e) o.set(o.subarray(n, n + 32768));
           else for (t = 0; 32768 > t; ++t) o[t] = o[n + t];
          return this.b = 32768,
          o
        },
        o.prototype.z = function (t) {
          var i,
          s,
          n,
          o = this.input.length / this.a + 1 | 0,
          r = this.input,
          h = this.c;
          return t &&
          ('number' == typeof t.p && (o = t.p), 'number' == typeof t.u && (o += t.u)),
          s = 2 > o ? (n = (r.length - this.a) / this.o[2] / 2 * 258 | 0) < h.length ? h.length + n : h.length << 1 : h.length * o,
          e ? (i = new Uint8Array(s)).set(h) : i = h,
          this.c = i
        },
        o.prototype.n = function () {
          var t,
          i,
          s,
          n,
          o,
          r = 0,
          h = this.c,
          a = this.xt,
          c = new (e ? Uint8Array : Array) (this.l + (this.b - 32768));
          if (0 === a.length) return e ? this.c.subarray(32768, this.b) : this.c.slice(32768, this.b);
          for (i = 0, s = a.length; i < s; ++i) for (n = 0, o = (t = a[i]).length; n < o; ++n) c[r++] = t[n];
          for (i = 32768, s = this.b; i < s; ++i) c[r++] = h[i];
          return this.xt = [],
          this.buffer = c
        },
        o.prototype.v = function () {
          var t,
          i = this.b;
          return e ? this.r ? (t = new Uint8Array(i)).set(this.c.subarray(0, i)) : t = this.c.subarray(0, i) : (this.c.length > i && (this.c.length = i), t = this.c),
          this.buffer = t
        },
        L.prototype.k = function () {
          var t,
          i,
          s = this.input;
          if (t = this.zs.k(), this.a = this.zs.a, this.qw) {
            i = (s[this.a++] << 24 | s[this.a++] << 16 | s[this.a++] << 8 | s[this.a++]) >>> 0;
            var e = t;
            if ('string' == typeof e) {
              var n,
              o,
              r = e.split('');
              for (n = 0, o = r.length; n < o; n++) r[n] = (255 & r[n].charCodeAt(0)) >>> 0;
              e = r
            }
            for (var h, a = 1, c = 0, l = e.length, _ = 0; 0 < l; ) {
              l -= h = 1024 < l ? 1024 : l;
              do {
                c += a += e[_++]
              } while (--h);
              a %= 65521,
              c %= 65521
            }
            if (i !== (c << 16 | a) >>> 0) throw Error('invalid adler-32 checksum')
          }
          return t
        };
        var A = 8;
        s('Zlib.Inflate', L),
        s('Zlib.Inflate.prototype.decompress', L.prototype.k);
        var C,
        k,
        B,
        S,
        N = {
          Jw: a.s,
          Yw: a.t
        };
        if (Object.keys) C = Object.keys(N);
         else for (k in C = [], B = 0, N) C[B++] = k;
        for (B = 0, S = C.length; B < S; ++B) s('Zlib.Inflate.BufferType.' + (k = C[B]), N[k])
      }
    ).call(this)
  },
  2480: () => {
  }
},
__webpack_module_cache__ = {};
function __webpack_require__(t) {
  var i = __webpack_module_cache__[t];
  if (void 0 !== i) return i.exports;
  var s = __webpack_module_cache__[t] = {
    exports: {
    }
  };
  return __webpack_modules__[t].call(s.exports, s, s.exports, __webpack_require__),
  s.exports
}
__webpack_require__.n = t => {
  var i = t &&
  t.Zw ? () => t.default : () => t;
  return __webpack_require__.d(i, {
    a: i
  }),
  i
},
__webpack_require__.d = (t, i) => {
  for (var s in i) __webpack_require__.o(i, s) &&
  !__webpack_require__.o(t, s) &&
  Object.defineProperty(t, s, {
    Qw: !0,
    get: i[s]
  })
},
__webpack_require__.xt = function () {
  if ('object' == typeof globalThis) return globalThis;
  try {
    return this ||
    new Function('return this') ()
  } catch (t) {
    if ('object' == typeof window) return window
  }
}(),
__webpack_require__.o = (t, i) => Object.prototype.hasOwnProperty.call(t, i);
var __webpack_exports__ = {};
(
  () => {
    class t {
    }
    t.tp = '230620A',
    t.ip = '3.0.8';
    var i = __webpack_require__(2496),
    s = __webpack_require__(4776),
    e = __webpack_require__(9807),
    n = __webpack_require__(2539),
    o = __webpack_require__(6749),
    r = __webpack_require__(374),
    h = __webpack_require__(4994),
    a = __webpack_require__(2614),
    c = __webpack_require__(8978);
    const l = new class {
      constructor() {
        this.sp = !1,
        this.ep = !1,
        this.np = !1,
        this.rp = !1,
        this.hp = 0,
        this.ap = 0,
        this.cp = 0,
        this.lp = 0,
        this._p = [],
        this.up = !0,
        this.dp = !0,
        this.fp = t => {
          const i = this.Ep();
          this.Rp() &&
          (
            n.E.Rw() ||
            (
              this.np = !0,
              - 1 == i.pinchMgr.pinchCnt &&
              (i.pinchMgr.pinchCnt = 0),
              this.sp = !1,
              this.ep = !1,
              this.hp = this.cp = t.pageX,
              this.ap = this.lp = t.pageY,
              this.Ip(this.hp, this.ap)
            )
          )
        },
        this.gp = t => {
          this.Rp() &&
          (
            n.E.Rw() ||
            (
              this.cp = t.pageX,
              this.lp = t.pageY,
              this.Op(t.pageX, t.pageY, t.pageX, t.pageY)
            )
          )
        },
        this.wp = t => {
          const s = this.Ep().get_currentLayoutMode();
          if (!this.Rp()) return;
          if (n.E.Rw()) return;
          const o = Math.abs(this.hp - this.cp),
          h = Math.abs(this.ap - this.lp);
          let a,
          c;
          const l = r.Ue.Screen.Ke.$e();
          o < 10 &&
          h < 10 ? (a = t.pageX, c = t.pageY) : s == e.js.qn.Yn ? h > e.js.So ? (a = 0, c = 0) : (c = this.ap, a = o > e.js.Bo ? this.hp - this.cp > 0 ? l.width - 1 : 0 : t.pageX) : (
            a = this.hp - this.cp > 0 ? l.width - 1 : 0,
            c = this.ap - this.lp > 0 ? l.height - 1 : 0
          ),
          this._p.push(
            window.setTimeout(() => {
              this.pp(a, c)
            }, i.sf.SINGLE_CLICK_TIMER_VALUE)
          )
        },
        this.mp = t => {
          const i = this.Ep();
          if (this.Rp() && !n.E.Rw()) {
            if (this.np && i.status == h.w.Fw) {
              const i = Math.abs(this.hp - this.cp),
              s = Math.abs(this.ap - this.lp);
              (i > 10 || s > 10) &&
              this.wp(t)
            }
            this.vp(t.pageX, t.pageY),
            i.pinchMgr.pinching = !1
          }
        },
        this.Pp = t => {
          const i = this.Ep();
          if (!this.Rp()) return;
          if (!1 === i.dragMgr.pageDragging) return;
          const s = r.Ue.Screen.Yu();
          if (
            i.dragMgr.setDraggingAmount({
              x: s.left,
              y: s.top
            }),
            i.status == h.w.Fw ||
            i.status == h.w.zw
          ) {
            i.dragMgr.pageDragging = !1;
            const t = document.createEvent('MouseEvents');
            t.initEvent('mouseup', !1, !0),
            window.dispatchEvent(t)
          }
        },
        this.Dp = t => this.wp(t),
        this.Tp = t => {
          const i = this.Ep();
          if (this.Rp() && !n.E.Rw() && i.isPageUIEventValid()) {
            for (; this._p.length > 0; ) {
              const t = this._p.shift();
              window.clearTimeout(t)
            }
            this.rp = !1,
            i.pinchMgr.pinchCnt = 0,
            i.pinchModeEnd(!0),
            i.pinchMgr.pinchEndFlg = !1,
            i.oldScaleInfo.init(),
            this.dummyLayerClick(),
            this.onDoubleTap(this.hp, this.ap),
            i.pinchMgr.resetPinchOffsetY()
          }
        },
        this.bp = t => {
          const i = this.Ep().isDispLock;
          if (!this.Rp()) return;
          if (n.E.Rw()) return;
          if (i) return;
          const s = a.Vs.jO();
          let e = 0;
          const o = s.height / 2;
          37 == t.keyCode ? (this.Ip(e, o), this.vp(e, o), this.yp(e, o)) : 39 == t.keyCode &&
          (e = s.width - 20, this.Ip(e, o), this.vp(e, o), this.yp(e, o))
        },
        this.Lp = t => {
          t.touches.length > 1 &&
          t.preventDefault()
        },
        this.Ap = t => this.Cp(t),
        this.kp = t => this.Bp(t)
      }
      setViewer(t) {
        this.bookViewer = t
      }
      Ep() {
        return this.bookViewer
      }
      dummyLayerClick() {
        return globalThis.BV.EmitEvents.dummyLayerClick()
      }
      Rp() {
        const t = this.Ep();
        return void 0 !== t &&
        !!t &&
        !t.isEventLock &&
        null != t.currentLayoutData &&
        null != t.currentLayoutData.page_info
      }
      pp(t, i) {
        this.yp(t, i)
      }
      Sp(t) {
        this.Ep().enableTouch &&
        (
          t.addEventListener('touchstart', t => t.stopPropagation()),
          t.addEventListener('touchmove', t => t.stopPropagation()),
          t.addEventListener('touchend', t => t.stopPropagation()),
          t.addEventListener('doubletap', t => t.stopPropagation())
        ),
        t.addEventListener('click', t => t.stopPropagation())
      }
      Cp(t) {
        this.Np(t, (t, i) => this.Mp(t, i))
      }
      Np(t, s) {
        const o = this.Ep();
        if (!this.Rp()) return;
        if (o.status == h.w.yf) return;
        r.Ue.ZE.QE.ad() ||
        r.Ue.ZE.iR.ad() ||
        r.Ue.jd.Nf.KE.FE() === t.target ||
        t.preventDefault();
        const l = window.innerWidth,
        _ = window.innerHeight;
        switch (t.type) {
          case 'touchstart':
            {
              const i = t;
              if (
                this.up = o.canMoveNext(),
                this.dp = o.canMovePrevious(),
                1 == i.touches.length
              ) {
                - 1 == o.pinchMgr.pinchCnt &&
                (o.pinchMgr.pinchCnt = 0),
                this.sp = !1,
                this.ep = !1,
                this.hp = this.cp = i.touches[0].pageX,
                this.ap = this.lp = i.touches[0].pageY,
                this.Ip(this.hp, this.ap);
                break
              }
              if (i.touches.length > 1) {
                if (o.is_reflowable_page() && o.status != h.w.zw) return void (this.sp = !0);
                if (o.get_currentLayoutMode() == e.js.qn.Yn) return void (this.ep = !0);
                if ( - 1 != o.pinchMgr.pinchCnt) {
                  if (
                    o.status == h.w.Lf &&
                    this.dummyLayerClick(),
                    o.pinchMgr.pinchPaused = !0,
                    !o.oldScaleInfo.isSet()
                  ) {
                    o.oldScaleInfo.setIndex(o.zoomScaleInfo.index);
                    const t = o.getImageSize(o.get_currentLayoutMode(), o.get_currentPageNum(), 1);
                    o.beginSize.width = ~~t.width,
                    o.beginSize.height = ~~t.height
                  }
                  this.xp(this.hp, this.ap)
                }
              }
              break
            }
          case 'touchmove':
            {
              const i = t;
              if (i.preventDefault(), - 1 == o.pinchMgr.pinchCnt || this.sp || this.ep) return;
              if (1 == i.touches.length) {
                this.cp = i.touches[0].pageX,
                this.lp = i.touches[0].pageY,
                o.status != h.w.Lf &&
                o.status != h.w.Xw ||
                (
                  o.setEventValidState(!0),
                  r.Ue.Screen.Ju.ed(!1),
                  r.Ue.jd.qd.Qd(r.Ue.jd.qd.Jd._f, this.Gp),
                  r.Ue.jd.Nf.ed(!1),
                  o.status = h.w.Lf
                ),
                1 == o.pinchMgr.pinchCnt ? (
                  o.status == h.w.Lf &&
                  this.dummyLayerClick(),
                  o.pinchMgr.pinching = !0,
                  o.dragMgr.pageDragging = !1,
                  o.setPinchModeDragRange(),
                  o.onDragMove(this.cp, this.lp)
                ) : !o.isScrollLock &&
                !o.pinchMgr.pinching &&
                o.zoomScaleInfo.isScaled() ||
                o.get_currentLayoutMode() == e.js.qn.Yn ? 2 != o.pinchMgr.pinchCnt &&
                (
                  o.pinchMgr.pinching = !1,
                  o.dragMgr.pageDragging = !0,
                  o.setScaleModeDragRange(),
                  o.onDragMove(this.cp, this.lp)
                ) : c.Ee.MO &&
                2 != o.pinchMgr.pinchCnt &&
                this.up &&
                this.dp &&
                o.onDragMove(this.cp, this.lp),
                0 == o.pinchMgr.pinchRateInitTop &&
                2 == o.pinchMgr.pinchCnt &&
                (
                  o.pinchModeEnd(!0),
                  o.pinchMgr.pinching = !1,
                  o.pinchMgr.onPinchModeEnd()
                );
                break
              }
              if (i.touches.length > 1) {
                if (o.is_reflowable_page() && o.status != h.w.zw) return;
                if (o.get_currentLayoutMode() == e.js.qn.Yn) return;
                o.pinchMgr.pinching = !0,
                o.pinchMgr.pinchCnt = 3;
                const t = i.touches[0],
                s = i.touches[1];
                o.pinchMgr.pinchEndFlg ? (
                  o.pinchMgr.distance = o.pinchMgr.oldDistance + Math.sqrt(Math.pow(t.pageX - s.pageX, 2) + Math.pow(t.pageY - s.pageY, 2)),
                  o.pinchMgr.centerX = o.pinchMgr.oldCenterX + (t.pageX + s.pageX) / 2,
                  o.pinchMgr.centerY = o.pinchMgr.oldCenterY + (t.pageY + s.pageY) / 2
                ) : (
                  o.pinchMgr.oldDistance = o.pinchMgr.distance = Math.sqrt(Math.pow(t.pageX - s.pageX, 2) + Math.pow(t.pageY - s.pageY, 2)),
                  o.pinchMgr.oldCenterX = o.pinchMgr.centerX = (t.pageX + s.pageX) / 2,
                  o.pinchMgr.oldCenterY = o.pinchMgr.centerY = (t.pageY + s.pageY) / 2
                );
                const r = n.E.rw;
                this.onPinch(
                  o.pinchMgr.distance * r,
                  o.pinchMgr.centerX * r,
                  o.pinchMgr.centerY * r
                )
              }
              break
            }
          case 'touchend':
            if (this.up = !0, this.dp = !0, this.sp || this.ep) return;
            if (this.hp < 0) return;
            if ( - 1 == o.pinchMgr.pinchCnt) return;
            if (o.get_currentLayoutMode() == e.js.qn.Yn) {
              const t = Math.abs(this.hp - this.cp),
              n = Math.abs(this.ap - this.lp),
              a = this.cp,
              c = this.lp;
              if (n > e.js.So) this.cp = 0,
              this.lp = 0,
              this.vp(this.cp, this.lp),
              o.pinchMgr.pinching = !1,
              o.status == h.w.Lf &&
              (
                l <= 600 &&
                c < _ - 55 ||
                601 < l &&
                c < _ - 57 &&
                (10 >= a || a >= l - 290) ? this.dummyLayerClick() : o.status = h.w.Lf,
                this.pp(this.cp, this.lp)
              );
               else if (t > e.js.Bo) {
                this.vp(this.cp, this.lp);
                const t = r.Ue.Screen.Ke.$e();
                this.hp - this.cp > 0 ? this.cp = t.width - 1 : this.cp = 0,
                o.pinchMgr.pinching = !1,
                this.dummyLayerClick(),
                this.pp(this.cp, this.lp)
              } else this.rp ? document.dispatchEvent(new Event('doubletap')) : (
                this.rp = !0,
                this._p.push(
                  window.setTimeout(() => {
                    s(this.hp, this.ap)
                  }, i.sf.SINGLE_TAP_TIMER_VALUE)
                )
              )
            } else if (0 == o.pinchMgr.pinchCnt) {
              const t = Math.abs(this.hp - this.cp),
              n = Math.abs(this.ap - this.lp),
              a = this.cp,
              c = this.lp;
              if (n > e.js.So) this.cp = 0,
              this.lp = 0,
              this.vp(this.cp, this.lp),
              o.pinchMgr.pinching = !1,
              o.status == h.w.Lf &&
              (
                l <= 600 &&
                c < _ - 55 ||
                601 < l &&
                c < _ - 57 &&
                (10 >= a || a >= l - 290) ? this.dummyLayerClick() : o.status = h.w.Lf,
                this.pp(this.cp, this.lp)
              );
               else if (t > e.js.Bo) {
                this.vp(this.cp, this.lp);
                const t = r.Ue.Screen.Ke.$e();
                if (
                  this.hp - this.cp > 0 ? this.cp = t.width - 1 : this.cp = 0,
                  this.ap - this.lp > 0 ? this.lp = t.height - 1 : this.lp = 0,
                  o.pinchMgr.pinching = !1,
                  o.status == h.w.zw
                ) return;
                l <= 600 &&
                c < _ - 55 ||
                601 < l &&
                c < _ - 57 &&
                (10 >= a || a >= l - 290) ? this.dummyLayerClick() : o.status = h.w.Lf,
                this.pp(this.cp, this.lp)
              } else {
                if (o.status == h.w.yf) return;
                this.rp ? document.dispatchEvent(new Event('doubletap')) : (
                  this.rp = !0,
                  this._p.push(
                    window.setTimeout(() => {
                      s(this.hp, this.ap)
                    }, i.sf.SINGLE_TAP_TIMER_VALUE)
                  )
                )
              }
            } else if (2 == o.pinchMgr.pinchCnt || 3 == o.pinchMgr.pinchCnt) o.pinchMgr.pinchEndFlg = !0,
            o.pinchMgr.pinchPaused = !1,
            this.dummyLayerClick(),
            0 == o.pinchMgr.pinchRateInitTop &&
            3 == o.pinchMgr.pinchCnt ? (o.pinchModeEnd(!0), o.pinchMgr.onPinchModeEnd()) : (
              o.pinchMgr.pinchCnt = o.pinchMgr.pinchCnt - 1,
              this.vp(this.cp, this.lp)
            );
             else if (1 == o.pinchMgr.pinchCnt) {
              const t = Math.abs(this.hp - this.cp),
              e = Math.abs(this.ap - this.lp);
              if (o.status == h.w.yf) return;
              if (t <= 5 && e <= 5) if (this.rp) document.dispatchEvent(new Event('doubletap'));
               else {
                const t = a.Vs.jO();
                o.status != h.w.zw &&
                (this.hp < t.width / 3 || this.hp > t.width - t.width / 3) &&
                this._p.push(window.setTimeout(() => {
                  o.pinchModeEnd(!1)
                }, 300)),
                this.rp = !0,
                this._p.push(
                  window.setTimeout(() => {
                    s(this.hp, this.ap)
                  }, i.sf.SINGLE_TAP_TIMER_VALUE)
                )
              } else this.dummyLayerClick()
            }
            break;
          case 'doubletap':
            for (; this._p.length > 0; ) {
              const t = this._p.shift();
              window.clearTimeout(t)
            }
            this.rp = !1,
            o.pinchMgr.pinchCnt = 0,
            o.pinchModeEnd(!0),
            o.pinchMgr.pinchEndFlg = !1,
            o.oldScaleInfo.init(),
            this.dummyLayerClick(),
            this.onDoubleTap(this.hp, this.ap),
            o.pinchMgr.resetPinchOffsetY()
        }
      }
      cancelTapEvent() {
        if (this.Ep().enableTouch) {
          for (; this._p.length > 0; ) {
            const t = this._p.shift();
            window.clearTimeout(t)
          }
          this.rp = !1,
          this.hp = - 1
        }
      }
      Mp(t, i) {
        const s = this.Ep();
        for (this.rp = !1, s.pinchMgr.pinching = !1; this._p.length > 0; ) {
          const t = this._p.shift();
          window.clearTimeout(t)
        }
        s.isEventLock ||
        (
          s.onTap(t, i),
          1 == s.pinchMgr.pinchCnt &&
          (s.pinchMgr.pinching = !0)
        )
      }
      doubleClickBefore(t) {
        for (; this._p.length > 0; ) {
          const t = this._p.shift();
          window.clearTimeout(t)
        }
      }
      Bp(t) {
        const i = this.Ep();
        if (!i.isPageUIEventValid()) return;
        i.mouseWheel = !0;
        let s = 0;
        if (t && (s = t.deltaY / 120), s) {
          const i = r.Ue.Screen.Yu();
          s < 0 ? (i.top = i.top + 50, r.Ue.Screen.Zu(i)) : (i.top = i.top - 50, r.Ue.Screen.Zu(i)),
          t.preventDefault()
        }
        i.zoomScaleInfo.isScaled() &&
        i.status != h.w.zw &&
        (i.clearDisplay(), i.redraw(), i.drawPinchingFrame())
      }
      yp(t, i) {
        const s = this.Ep();
        s.isEventLock ||
        s.onTap(t, i)
      }
      onDoubleTap(t, i) {
        const n = this.Ep();
        try {
          n.lookAheadTextImage.length = 0,
          n.onDoubleTap(t, i)
        } catch (t) {
          s.zs.onError(e.js.errorCode.vr, 'onDoubleTap_FromApp', o.Ys.Js(t))
        }
      }
      Ip(t, i) {
        const n = this.Ep();
        try {
          n.onDragStart(t, i),
          this.np = !0
        } catch (t) {
          s.zs.onError(e.js.errorCode.Dr, 'onMouseDown_FromApp', o.Ys.Js(t))
        }
      }
      Op(t, i, n, r) {
        const a = this.Ep();
        try {
          if (!this.np) return void o.Ys.FO(e.js.Wo, 'not drag mode: mousemove ignored');
          1 == a.pinchMgr.pinchCnt ? (
            a.status == h.w.Lf &&
            this.dummyLayerClick(),
            a.pinchMgr.pinching = !0,
            a.dragMgr.pageDragging = !1,
            a.setPinchModeDragRange(),
            a.onDragMove(t, i)
          ) : !a.isScrollLock &&
          !a.pinchMgr.pinching &&
          a.zoomScaleInfo.isScaled() ||
          a.get_currentLayoutMode() == e.js.qn.Yn ? (
            a.pinchMgr.pinching = !1,
            a.dragMgr.pageDragging = !0,
            a.setScaleModeDragRange(),
            a.onDragMove(t, i)
          ) : c.Ee.MO &&
          a.onDragMove(t, i)
        } catch (t) {
          s.zs.onError(e.js.errorCode.Tr, 'onMouseMove_FromApp', o.Ys.Js(t))
        }
      }
      vp(t, i) {
        const n = this.Ep();
        try {
          this.np = !1,
          n.onDragEnd(t, i),
          n.isCloseMenu &&
          (globalThis.BV.EmitEvents.closeMenu(void 0), n.isCloseMenu = !1)
        } catch (t) {
          s.zs.onError(e.js.errorCode.br, 'onMouseUp_FromApp', o.Ys.Js(t))
        }
      }
      xp(t, i) {
        const n = this.Ep();
        try {
          this.np &&
          (n.onDragEnd(t, i), this.np = !1),
          n.pinchMgr.pinching = !0
        } catch (t) {
          s.zs.onError(e.js.errorCode.Lr, 'onPinchModeStart_FromApp', o.Ys.Js(t))
        }
      }
      onPinch(t, i, n) {
        const r = this.Ep();
        try {
          r.onPinch(i, n, t)
        } catch (t) {
          s.zs.onError(e.js.errorCode.Cr, 'onPinchIn_FromApp', o.Ys.Js(t))
        }
      }
      Vp(t, i) {
        return this.vp(t, i)
      }
      Wp() {
        window.addEventListener('mousedown', this.fp),
        window.addEventListener('mousemove', this.gp),
        window.addEventListener('mouseup', this.mp),
        window.addEventListener('mouseout', this.Pp),
        window.addEventListener('click', this.Dp),
        window.addEventListener('dblclick', this.Tp),
        window.addEventListener('keyup', this.bp),
        document.addEventListener('touchstart', this.Lp, {
          capture: !0,
          passive: !1
        }),
        document.addEventListener('touchstart', this.Ap),
        document.addEventListener('touchmove', this.Ap),
        document.addEventListener('touchend', this.Ap),
        document.addEventListener('doubletap', this.Ap),
        window.addEventListener('wheel', this.kp, !1)
      }
      $p() {
        window.removeEventListener('mousedown', this.fp),
        window.removeEventListener('mousemove', this.gp),
        window.removeEventListener('mouseup', this.mp),
        window.removeEventListener('mouseout', this.Pp),
        window.removeEventListener('click', this.Dp),
        window.removeEventListener('dblclick', this.Tp),
        window.removeEventListener('keyup', this.bp),
        document.removeEventListener('touchstart', this.Lp, {
          capture: !0
        }),
        document.removeEventListener('touchstart', this.Ap),
        document.removeEventListener('touchmove', this.Ap),
        document.removeEventListener('touchend', this.Ap),
        document.removeEventListener('doubletap', this.Ap),
        window.removeEventListener('wheel', this.kp)
      }
    };
    class _ {
      static Kp(t, i) {
        let s = i;
        if (navigator.cookieEnabled) {
          const e = document.cookie;
          if (e.length > 0) {
            const n = e.indexOf(t + '=');
            if ( - 1 != n) {
              let i = e.indexOf(';', n);
              - 1 == i &&
              (i = e.length),
              s = unescape(e.substring(n + t.length + 1, i))
            }
            '' != s &&
            'undefined' != s ||
            (s = i)
          }
        }
        return s ||
        null
      }
      static Up() {
        return i.OK.Fp ? '; ' + i.OK.Fp : ''
      }
      static Xp(t, i, s) {
        if (navigator.cookieEnabled) {
          let e;
          if (null == s || s < 1) e = new Date('Thu, 01 Jan 2030 00:00:00 GMT');
           else {
            const t = (new Date).getTime();
            e = new Date(t + 86400000 * s)
          }
          const n = e.toUTCString();
          document.cookie = t + '=' + escape(i) + '; expires=' + n + this.Up()
        }
      }
      static zp() {
        const t = new Date(0).toUTCString(),
        i = this.Up();
        document.cookie = 'sheet=; expires=' + t + i,
        document.cookie = 'size=; expires=' + t + i,
        document.cookie = 'ruby=; expires=' + t + i,
        document.cookie = 'enlarge=; expires=' + t + i,
        document.cookie = 'color=; expires=' + t + i,
        document.cookie = 'tts=; expires=' + t + i,
        document.cookie = 'writing=; expires=' + t + i,
        document.cookie = 'webfont=; expires=' + t + i,
        document.cookie = 'currentViewMode=; expires=' + t + i,
        document.cookie = 'fitMode=; expires=' + t + i,
        document.cookie = 'animation=; expires=' + t + i
      }
      static Hp(t, i) {
        if (!window.localStorage) return i;
        let s = window.localStorage.getItem(t);
        return s ||
        (s = i),
        s
      }
      static jp(t, i) {
        window.localStorage &&
        window.localStorage.setItem(t, i)
      }
      static qp() {
        window.localStorage.removeItem('size'),
        window.localStorage.removeItem('ruby'),
        window.localStorage.removeItem('enlarge'),
        window.localStorage.removeItem('color'),
        window.localStorage.removeItem('writing')
      }
    }
    var u = __webpack_require__(1354),
    d = __webpack_require__.n(u),
    f,
    E = __webpack_require__(1538);
    class R {
      static Jp() {
        return new Promise(
          t => {
            const s = new XMLHttpRequest;
            s.onreadystatechange = () => {
              if (s.readyState == this.Yp) {
                const i = {};
                switch (s.status) {
                  case this.Qp.Zp:
                    {
                      {
                        const t = s.getResponseHeader('date');
                        if (!t) {
                          i.error = {
                            errorCode: e.js.errorCode.Y_,
                            tm: 'サーバー時刻取得',
                            im: 'Error'
                          };
                          break
                        }
                        const n = Date.now() - Date.parse(t);
                        if (n < - 3600000 || 3600000 < n) {
                          i.error = {
                            errorCode: e.js.errorCode.Z_,
                            tm: 'サーバー時刻取得',
                            im: 'Error'
                          };
                          break
                        }
                      }
                      if (null == document.cookie) {
                        i.error = {
                          errorCode: e.js.errorCode.Q_,
                          tm: 'セッションCookie取得',
                          im: 'Error'
                        };
                        break
                      }
                      const t = document.cookie.split(/ *; */);
                      for (let s = 0; s < t.length; s++) {
                        const e = t[s].split('=');
                        if ('__bvscid__' == e[0]) {
                          const t = decodeURIComponent(e[1]);
                          i.value = t;
                          break
                        }
                      }
                      break
                    }
                  default:
                    i.error = {
                      errorCode: e.js.errorCode.U_,
                      tm: 'セッションCookie取得',
                      im: 'Error'
                    }
                }
                t(i)
              }
            },
            s.onabort = () => {
              const i = {
                errorCode: e.js.errorCode.eu,
                tm: 'セッションCookie取得',
                im: 'Error'
              };
              t({
                error: i
              })
            },
            window.setTimeout(
              () => {
                s.readyState < this.Yp &&
                s.abort()
              },
              i.sf.CONNECTION_TIMEOUT_TIME
            ),
            s.open('GET', i.sf.API_BVPAGELIST, !0),
            s.setRequestHeader('Content-Type', 'text/plain;charset=utf-8'),
            s.setRequestHeader('Pragma', 'no-cache'),
            s.setRequestHeader('Cache-Control', 'no-cache'),
            s.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
            try {
              s.send()
            } catch (i) {
              if ('NetworkError' == i.name) {
                const i = {
                  errorCode: e.js.errorCode.ga,
                  tm: 'セッションCookie取得',
                  im: 'NetworkError'
                };
                t({
                  error: i
                })
              }
            }
          }
        )
      }
      static sm(t, s) {
        return new Promise(
          t => {
            let n;
            n = {
              contents_id: s.contents_id,
              a001: s.nm
            };
            const o = new XMLHttpRequest;
            o.onreadystatechange = () => {
              let i,
              n;
              if (o.readyState == this.Yp) {
                const r = {};
                switch (o.status) {
                  case this.Qp.Zp:
                    try {
                      if (i = JSON.parse(o.responseText), i.sckb) {
                        const t = class {
                          static rm() {
                            return '6276686D'
                          }
                          static hm() {
                            return '6276696E697469616C766563746F6C76'
                          }
                          static om(t, i, s) {
                            let e = null;
                            const n = d().F.Ut.stringify(d().F.Kt.parse(this.rm()));
                            if (e = d().F.Ut.parse(t + n + i), null == e) return null;
                            const o = d().F.Ut.stringify(e),
                            r = d().ii(o).toString(d().F.Ut);
                            e = d().F.Ut.parse(r);
                            const h = d().F.X.parse(d().F.Ut.stringify(d().F.Kt.parse(this.hm())));
                            if (null == h) return null;
                            let a = null;
                            for (let t = 0; t < 100; t++) try {
                              return this.am(s, e, h)
                            } catch (t) {
                              a = t
                            }
                            throw a
                          }
                          static am(t, i, s) {
                            const e = d().F.H.parse(t),
                            n = d().R.Tt.create({
                              ciphertext: e,
                              key: i,
                              iv: s
                            }),
                            o = d().g.decrypt(n, i, {
                              iv: s
                            });
                            return d().F.X.stringify(o)
                          }
                        }.om(s.nm, i.sckb, i.data);
                        n = JSON.parse(t)
                      } else n = i;
                      r.value = n
                    } catch (t) {
                      r.error = {
                        errorCode: e.js.errorCode.tu,
                        im: '取得データが壊れてます'
                      }
                    }
                    break;
                  case this.Qp.lm:
                    {
                      let t;
                      t = o.responseText == this.Qp._m.toString(10) ? 'POSTされたURLデータが不正です' : o.responseText == this.Qp.um.toString(10) ? '認証クッキーから顧客IDが取得できません' : o.responseText == this.Qp.dm.toString(10) ? '入力値が取得できません' : o.responseText == this.Qp.fm.toString(10) ? 'コンテンツIDが存在しません' : o.responseText == this.Qp.Em.toString(10) ? '要求メソッドが不正です' : '通信エラー',
                      r.error = {
                        errorCode: e.js.errorCode.su,
                        im: t
                      };
                      break
                    }
                  case this.Qp.Rm:
                    r.error = {
                      errorCode: e.js.errorCode.nu,
                      im: 'システム例外が発生しました'
                    };
                    break;
                  default:
                    r.error = {
                      errorCode: e.js.errorCode.F_,
                      im: 'その他例外が発生しました'
                    }
                }
                t(r)
              }
            },
            o.onabort = () => {
              const i = {
                errorCode: e.js.errorCode.ou,
                im: 'Connection timed out...'
              };
              t({
                error: i
              })
            },
            window.setTimeout(
              () => {
                o.readyState < this.Yp &&
                o.abort()
              },
              i.sf.CONNECTION_TIMEOUT_TIME
            ),
            o.open('POST', i.sf.API_BVPAGELIST, !0);
            const r = (new Date).toUTCString();
            o.setRequestHeader('Content-Type', 'text/plain;charset=utf-8'),
            o.setRequestHeader('X-Date', r);
            try {
              o.send(JSON.stringify(n))
            } catch (i) {
              if ('NetworkError' == i.name) {
                const i = {
                  errorCode: e.js.errorCode.Oa,
                  im: 'NetworkError'
                };
                t({
                  error: i
                })
              }
            }
          }
        )
      }
      static Im(t) {
        if (i.sf.MTI_PAGEDATA_JSONP_URL_PREFIX) {
          const s = document.createElement('a');
          s.href = t;
          const e = 0 == s.pathname.indexOf('/') ? s.pathname : '/' + s.pathname;
          return i.sf.MTI_PAGEDATA_JSONP_URL_PREFIX + e + s.search + s.hash
        }
        return t
      }
      static gm(t, s, n) {
        return new Promise(
          o => {
            this.lock.Om(
              'page_data_callback',
              o => {
                const r = i.sf.CONNECTION_TIMEOUT_TIME > 0,
                h = new AbortController,
                a = r ? window.setTimeout(() => h.abort(), i.sf.CONNECTION_TIMEOUT_TIME) : null,
                c = {
                  method: 'GET',
                  cache: n ? 'default' : 'no-store',
                  signal: r ? h.signal : void 0
                };
                fetch(this.Im(t), c).then(
                  t => {
                    if (!t.ok) throw new Error(`${ t.status } ${ t.statusText }`);
                    t.text().then(
                      t => {
                        window.clearTimeout(a);
                        const i = t.match(/^page_data_callback\((.+)\);?$/) [1].replace(/\\"/g, '"').match(/^"?(.+?)"?$/) [1],
                        s = JSON.parse(i);
                        o(void 0, {
                          value: s
                        })
                      }
                    ).catch(i => {
                      if (200 != t.status || !s) throw i;
                      o(void 0, null)
                    })
                  }
                ).catch(
                  t => {
                    const i = {};
                    'AbortError' == t.name ? i.error = {
                      errorCode: e.js.errorCode.hu,
                      im: 'Connection timed out...'
                    }
                     : i.error = {
                      errorCode: e.js.errorCode.z_,
                      im: t.message
                    },
                    o(void 0, i)
                  }
                )
              }
            ).then(t => {
              o(t)
            }).catch(
              t => {
                const i = {
                  error: {
                    errorCode: e.js.errorCode.z_,
                    im: t.message
                  }
                };
                o(i)
              }
            )
          }
        )
      }
      static wm(t, s, n) {
        return new Promise(
          o => {
            this.lock.Om(
              'page_data_callback',
              o => {
                const r = i.sf.CONNECTION_TIMEOUT_TIME > 0,
                h = new AbortController,
                a = r ? window.setTimeout(() => h.abort(), i.sf.CONNECTION_TIMEOUT_TIME) : null,
                c = {
                  method: 'GET',
                  cache: n ? 'default' : 'no-store',
                  signal: r ? h.signal : void 0
                };
                fetch(this.Im(t), c).then(
                  t => {
                    if (!t.ok) throw new Error(`${ t.status } ${ t.statusText }`);
                    t.text().then(
                      t => {
                        window.clearTimeout(a);
                        const i = t.match(/^page_data_callback\((.+)\);?$/) [1].replace(/\\"/g, '"').match(/^"?(.+?)"?$/) [1];
                        let s;
                        try {
                          s = JSON.parse(i)
                        } catch (t) {
                          s = i
                        }
                        o(void 0, {
                          value: s
                        })
                      }
                    ).catch(i => {
                      if (200 != t.status || !s) throw i;
                      o(void 0, null)
                    })
                  }
                ).catch(
                  t => {
                    const i = {};
                    'AbortError' == t.name ? i.error = {
                      errorCode: e.js.errorCode.hu,
                      im: 'Connection timed out...'
                    }
                     : i.error = {
                      errorCode: e.js.errorCode.z_,
                      im: t.message
                    },
                    o(void 0, i)
                  }
                )
              }
            ).then(t => {
              o(t)
            }).catch(
              t => {
                const i = {};
                'AbortError' == t.name ? i.error = {
                  errorCode: e.js.errorCode.hu,
                  im: 'Connection timed out...'
                }
                 : i.error = {
                  errorCode: e.js.errorCode.z_,
                  im: t.message
                },
                o(i)
              }
            )
          }
        )
      }
      static pm(t) {
        return new Promise(
          s => {
            const e = JSON.stringify(t),
            n = new XMLHttpRequest;
            if (
              n.onreadystatechange = () => {
                if (n.readyState == this.Yp) {
                  const t = {};
                  switch (n.status) {
                    case this.Qp.Zp:
                      {
                        const i = JSON.parse(n.responseText);
                        t.value = i;
                        break
                      }
                    case this.Qp.lm:
                    case this.Qp.vm:
                      {
                        let i;
                        i = n.responseText == this.Qp._m.toString(10) ? 'POSTされたURLデータが不正です' : n.responseText == this.Qp.um.toString(10) ? '認証クッキーから顧客IDが取得できません' : n.responseText == this.Qp.dm.toString(10) ? '入力値が取得できません' : n.responseText == this.Qp.fm.toString(10) ? 'コンテンツIDが存在しません' : n.responseText == this.Qp.Em.toString(10) ? '要求メソッドが不正です' : '通信エラー',
                        t.error = {
                          errorCode: null,
                          im: ''
                        };
                        break
                      }
                    case this.Qp.Rm:
                    default:
                      t.error = {
                        errorCode: null,
                        im: ''
                      }
                  }
                  s(t)
                }
              },
              n.onabort = () => {
                s({
                  error: {
                    errorCode: null,
                    im: ''
                  }
                })
              },
              window.setTimeout(
                () => {
                  n.readyState < this.Yp &&
                  n.abort()
                },
                i.sf.CONNECTION_TIMEOUT_TIME
              ),
              '' != i.sf.API_SETBOOKMARK
            ) {
              n.open('POST', i.sf.API_SETBOOKMARK, !1),
              n.setRequestHeader('Content-Type', 'text/plain;charset=utf-8');
              try {
                n.send(e)
              } catch (t) {
                t.name,
                s({
                  error: {
                    errorCode: null,
                    im: ''
                  }
                })
              }
            } else s({
              error: {
                errorCode: null,
                im: ''
              }
            })
          }
        )
      }
      static Pm(t, s) {
        return new Promise(
          n => {
            this.lock.Om(
              'image_read_callback',
              o => {
                const r = i.sf.CONNECTION_TIMEOUT_TIME > 0,
                h = new AbortController,
                a = r ? window.setTimeout(() => h.abort(), i.sf.CONNECTION_TIMEOUT_TIME) : null,
                c = {
                  method: 'GET',
                  cache: 'no-store',
                  signal: r ? h.signal : void 0
                };
                fetch(this.Im(t), c).then(
                  t => {
                    if (!t.ok) throw new Error(`${ t.status } ${ t.statusText }`);
                    t.text().then(
                      i => {
                        window.clearTimeout(a);
                        const s = i.match(/^image_read_callback\((.+)\);?$/) [1].replace(/\\"/g, '"').match(/^"?(.+?)"?$/) [1];
                        try {
                          const t = JSON.parse(s);
                          o(void 0, {
                            value: t
                          })
                        } catch (i) {
                          const s = {};
                          s.error = {
                            errorCode: t.status,
                            tm: '画像データ取得',
                            im: i.message
                          },
                          o(void 0, s)
                        }
                      }
                    )
                  }
                ).catch(
                  i => {
                    const r = {};
                    'AbortError' == i.name ? 0 === s ? (
                      r.error = {
                        errorCode: e.js.errorCode.au,
                        tm: '画像データ取得',
                        im: 'Connection timed out...'
                      },
                      o(void 0, r)
                    ) : this.Pm(t, s - 1).then(t => n(t)) : 0 === s ? (
                      r.error = {
                        errorCode: e.js.errorCode.H_,
                        tm: '画像データ取得',
                        im: i.message
                      },
                      o(void 0, r)
                    ) : this.Pm(t, s - 1).then(t => {
                      o(void 0, t)
                    })
                  }
                )
              }
            ).then(t => {
              n(t)
            }).catch(
              t => {
                const i = {};
                'AbortError' == t.name ? i.error = {
                  errorCode: e.js.errorCode.au,
                  tm: '画像データ取得',
                  im: 'Connection timed out...'
                }
                 : i.error = {
                  errorCode: e.js.errorCode.H_,
                  tm: '画像データ取得',
                  im: t.message
                },
                n(i)
              }
            )
          }
        )
      }
      static Dm(t, s, n) {
        return new Promise(
          o => {
            this.lock.Om(
              'page_data_callback',
              o => {
                const r = i.sf.CONNECTION_TIMEOUT_TIME > 0,
                h = new AbortController,
                a = r ? window.setTimeout(() => h.abort(), i.sf.CONNECTION_TIMEOUT_TIME) : null,
                c = {
                  method: 'GET',
                  cache: n ? 'default' : 'no-store',
                  signal: r ? h.signal : void 0
                };
                fetch(this.Im(t), c).then(
                  t => {
                    if (!t.ok) throw new Error(`${ t.status } ${ t.statusText }`);
                    t.text().then(
                      t => {
                        window.clearTimeout(a);
                        const i = t.match(/^page_data_callback\((.+)\);?$/) [1].replace(/\\"/g, '"').match(/^"?(.+?)"?$/) [1],
                        s = JSON.parse(i);
                        o(void 0, {
                          value: s
                        })
                      }
                    ).catch(i => {
                      if (200 != t.status || !s) throw i;
                      o(void 0, null)
                    })
                  }
                ).catch(
                  t => {
                    const i = {};
                    'AbortError' == t.name ? i.error = {
                      errorCode: e.js.errorCode.cu,
                      im: 'Connection timed out...'
                    }
                     : i.error = {
                      errorCode: e.js.errorCode.j_,
                      im: t.message
                    },
                    o(void 0, i)
                  }
                )
              }
            ).then(t => {
              o(t)
            }).catch(
              t => {
                const i = {
                  error: {
                    errorCode: e.js.errorCode.j_,
                    im: t.message
                  }
                };
                o(i)
              }
            )
          }
        )
      }
      static Tm(t, s, n, o) {
        return new Promise(
          r => {
            const h = n == E.ds.ye.mn ? 'h' : 'v',
            a = i.sf.CONNECTION_TIMEOUT_TIME > 0,
            c = new AbortController,
            l = a ? window.setTimeout(() => c.abort(), i.sf.CONNECTION_TIMEOUT_TIME) : null,
            _ = {
              method: 'POST',
              cache: o ? 'default' : 'no-store',
              signal: a ? c.signal : void 0,
              body: JSON.stringify({
                bookID: t,
                serchWord: s,
                positionFlg: h
              })
            };
            fetch('http://118.22.43.89/brsh/api/getSearchCodeTable', _).then(t => {
              t.text().then(t => {
                window.clearTimeout(l),
                r({
                  value: t
                })
              })
            }).catch(
              t => {
                const i = {};
                'AbortError' == t.name ? i.error = {
                  errorCode: e.js.errorCode.hu,
                  im: 'Connection timed out...'
                }
                 : i.error = {
                  errorCode: e.js.errorCode.q_,
                  im: t
                },
                r(i)
              }
            )
          }
        )
      }
      static bm(t, i, s, n) {
        return new Promise(
          o => {
            const r = s ? '&user=' + s : '';
            i ? fetch(`${ t }?token=${ i }${ r }&cid=${ n }`).then(
              t => {
                if (403 == t.status) {
                  const t = {
                    error: {
                      errorCode: e.js.errorCode.kc,
                      im: '複数のビューア利用を検出しました。先頭に戻るか再読込で再開できます。'
                    }
                  };
                  o(t)
                }
              }
            ) : fetch(`${ t }?start${ r }&cid=${ n }`).then(t => {
              200 == t.status &&
              t.text().then(t => {
                o({
                  value: t
                })
              })
            })
          }
        )
      }
    }
    f = R,
    R.Om = (t, i) => new Promise((t, s) => {
      i((i, e) => {
        null != i ? s(i) : t(e)
      })
    }),
    R.lock = {
      Om: f.Om
    },
    R.Yp = 4,
    R.ym = 'image_read_callback',
    R.Lm = 'page_data_callback',
    R.Qp = {
      Zp: 200,
      lm: 403,
      vm: 404,
      Rm: 500,
      _m: 40330,
      um: 40301,
      dm: 40331,
      fm: 40332,
      Em: 40333
    };
    var I = function (t, i, s, e) {
      return new (s || (s = Promise)) (
        (
          function (n, o) {
            function r(t) {
              try {
                a(e.next(t))
              } catch (t) {
                o(t)
              }
            }
            function h(t) {
              try {
                a(e.throw(t))
              } catch (t) {
                o(t)
              }
            }
            function a(t) {
              var i;
              t.done ? n(t.value) : (i = t.value, i instanceof s ? i : new s((function (t) {
                t(i)
              }))).then(r, h)
            }
            a((e = e.apply(t, i || [])).next())
          }
        )
      )
    };
    class g {
      constructor() {
        this.Am = 'autoBookmark',
        this.Cm = void 0,
        this.km = '',
        this.init()
      }
      init() {
        this.Bm = !0
      }
      Sm(t, i, s) {
        return I(
          this,
          void 0,
          void 0,
          (
            function * () {
              const e = {
                user_info: {
                  user_id: t
                },
                contents_info: {
                  contents_id: i
                },
                op: E.ds.Sn.Mn
              },
              n = yield R.pm(e);
              if (null == n.error && n.value.auto_bookmark_info) {
                const t = n.value,
                e = this.Nm(i);
                let o = !1;
                if (e && null != e.auto_bookmark_info.time) {
                  const i = new Date(e.auto_bookmark_info.time),
                  s = new Date(t.auto_bookmark_info.time);
                  i.getTime() >= s.getTime() &&
                  (o = !0)
                }
                return o ? this.Mm(e, i, !0) : this.Mm(t, i, !1),
                g.xm(this.auto_bookmark_info.Gm, this.Bm, s)
              }
              {
                const t = this.Nm(i);
                return null != t &&
                0 != t &&
                t.auto_bookmark_info.Gm.length > 0 ? (this.Mm(t, i, !0), g.xm(this.auto_bookmark_info.Gm, this.Bm, s)) : null
              }
            }
          )
        )
      }
      Mm(t, i, s) {
        i == t.contents_info.contents_id &&
        (this.auto_bookmark_info = t.auto_bookmark_info, this.Bm = s)
      }
      static xm(t, i, s) {
        if (!t) return;
        const e = t.split(':');
        let n,
        o;
        const r = {
          Vm: void 0,
          Wm: void 0,
          $m: void 0
        };
        if ( - 1 != t.indexOf('IDX')) if (n = e[3].substring(3, e[3].length), o = e[2].split('#'), n) r.Wm = parseInt(n, 10),
        r.$m = parseInt(o[1], 10);
         else if (s.Km()) {
          const t = s.Um(o[0]);
          - 1 !== t ? (r.Wm = t, r.$m = parseInt(o[1], 10)) : r.Vm = 1
        } else r.Vm = 1;
         else if (0 === e[2].search(/^PG....#[0-9][0-9]*$/) && 1 == i) o = e[2].split('#'),
        n = o[0].substring(2, o[0].length),
        r.Wm = parseInt(n, 10),
        r.$m = parseInt(o[1], 10);
         else if (0 === e[2].search(/^PG....#[0-9][0-9]*$/) && 0 == i) if (s.Km()) {
          o = e[2].split('#');
          const t = s.Um(o[0]);
          - 1 !== t ? (r.Wm = t, r.$m = parseInt(o[1], 10)) : r.Vm = 1
        } else r.Vm = 1;
         else if (0 === e[2].search(/^[0-9][0-9]*$/)) {
          const t = parseInt(e[2], 10);
          r.Vm = t
        } else {
          if (0 !== e[2].search(/^content:\/\//)) return;
          {
            const i = t.split('#') [1].split('&');
            let s;
            const e = i.length;
            for (let t = 0; t < e; t++) if ( - 1 != i[t].indexOf('pg=')) {
              const e = i[t].substring(3, i[t].length);
              s = parseInt(e, 10)
            }
            r.Vm = s
          }
        }
        return r
      }
      Fm(t, i, s, e, n) {
        return I(
          this,
          void 0,
          void 0,
          (
            function * () {
              n.note = '';
              const o = {
                user_info: {
                  user_id: t
                },
                contents_info: {
                  contents_id: i
                },
                auto_bookmark_info: n,
                op: E.ds.Sn.Nn
              };
              yield R.pm(o),
              this.Xm(i, s, e)
            }
          )
        )
      }
      static zm(t, i) {
        const s = t.sourcetype,
        e = t.vid ||
        '';
        let n = '';
        if (s == E.ds.Rn.In) {
          const i = t;
          n = `XMDF:${ e }:`;
          let s = '';
          s = void 0 === i.fid ? 'NO_FID' : i.fid,
          n += `${ s }#${ t.ps }:IDX${ i.idx ||
          '' }`
        } else s == E.ds.Rn.gn ? n = `BI:${ e }:${ i }` : s == E.ds.Rn.On ? n = `OMF:${ e }:${ i }` : s == E.ds.Rn.wn &&
        (n = `HV:${ e }:`);
        return n
      }
      Hm(t, i, s) {
        if (null == t || t.length < 1) return !1;
        if (null == i || i.length < 1) return !1;
        let e;
        return null == s ||
        s.length < 1 ? e = new Date('Thu, 01 Jan 2030 00:00:00 GMT') : (e = new Date, e.setTime(e.getTime() + 86400000 * parseInt(s, 10))),
        document.cookie = t + '=' + escape(i) + '; expires=' + e.toUTCString() + _.Up(),
        !0
      }
      jm(t) {
        if (null == t || t.length < 1) return !1;
        const i = document.cookie + ';';
        t += '=';
        let s = i.indexOf(t);
        if ( - 1 == s) return !1;
        s += t.length;
        const e = i.indexOf(';', s);
        return - 1 != e &&
        unescape(i.substring(s, e))
      }
      qm(t) {
        if (null == t || t.length < 1) return !1;
        const i = new Date(0);
        return document.cookie = t + '=; expires=' + i.toUTCString() + _.Up(),
        !0
      }
      Xm(t, s, e) {
        if (i.sf.BOOKMARK_CONTENTS_MAX < 1) return this.qm(this.Am),
        !0;
        if (null == t || t.length < 1) return !1;
        if (null == s) return !1;
        let n = `${ t },${ g.zm(s, e) },${ (new Date).toISOString().replace(/(\.[0-9]*)/g, '') }`;
        if (null != this.km && this.km.length > 0) {
          const s = this.km.split('/');
          for (let e = 0; e < s.length && !(e + 1 >= i.sf.BOOKMARK_CONTENTS_MAX); e++) t != s[e].split(',') [0] &&
          (n += '/', n += s[e])
        }
        return this.km = n,
        this.Hm(this.Am, n, this.Cm)
      }
      Nm(t) {
        if (i.sf.BOOKMARK_CONTENTS_MAX < 1) return !1;
        const s = this.jm(this.Am);
        if (0 == s) return !1;
        if (this.km = s, null != s && s.length > 0) {
          const i = s.split('/');
          for (let s = 0; s < i.length; s++) {
            const e = i[s].split(',');
            if (t == e[0]) return e[2] ? {
              contents_info: {
                contents_id: e[0]
              },
              auto_bookmark_info: {
                Gm: e[1],
                time: e[2]
              }
            }
             : {
              contents_info: {
                contents_id: e[0]
              },
              auto_bookmark_info: {
                Gm: e[1],
                time: null
              }
            }
          }
        }
        return !1
      }
      Jm(t) {
        if (i.sf.BOOKMARK_CONTENTS_MAX < 1) return this.qm(this.Am),
        !0;
        let s = this.Nm(t);
        if (0 == s) return !0;
        const e = this.km.split('/');
        let n = '',
        o = 1;
        for (let s = 0; s < e.length && !(s >= i.sf.BOOKMARK_CONTENTS_MAX); s++) t != e[s].split(',') [0] &&
        (0 == o && (n += '/'), n += e[s], o = 0);
        return this.km = n,
        s = this.Hm(this.Am, n, this.Cm),
        s
      }
    }
    const O = new class {
      init() {
        this.Ym(),
        this.Zm()
      }
      Ym() {
        try {
          $('#finishDialog').dialog({
            Qm: `#${ r.Ue.Xd.Hd() }`,
            autoOpen: !1,
            dialogClass: 'jquery-ui-dialog-finish',
            title: '作品終了',
            closeOnEscape: !1,
            modal: !0,
            draggable: !1,
            tv: !1,
            closeText: '',
            open: (t, i) => {
              window.setTimeout(
                () => {
                  const t = r.Ue.Xd.zu(),
                  i = r.Ue.ZE.QE.zu().parentElement,
                  s = t.clientWidth,
                  e = t.clientHeight;
                  i.clientWidth,
                  i.clientHeight
                },
                0
              );
              const s = r.Ue.ZE.QE.zu().parentElement,
              e = document.createElement('div');
              e.id = 'alt-close',
              e.style.position = 'absolute',
              e.style.top = '1px',
              e.style.right = '1px',
              e.style.width = '38px',
              e.style.height = '38px',
              e.style.zIndex = '100',
              null == document.getElementById('alt-close') &&
              (
                null != s &&
                s.append(e),
                e.addEventListener('click', () => ($('#finishDialog').dialog('close'), !1))
              )
            },
            position: {
              my: 'center',
              at: 'center',
              of : window,
              within: window
            },
            close: t => {
              l.cancelTapEvent();
              const i = r.Ue.Screen.Ju.zu();
              i.style.visibility = 'hidden',
              i.style.background = 'rgba(0, 0, 0, 0)',
              window.event ? window.event.cancelBubble = !0 : t.originalEvent &&
              (t.originalEvent.originalEvent.cancelBubble = !0),
              globalThis.BV.EmitEvents.disablePageUIEventMoment(),
              globalThis.BV.EmitEvents.setEventLockFlg(!1),
              globalThis.BV.EmitEvents.sv(!1)
            }
          }),
          $('#finishDialog').dialog('close')
        } catch (t) {
          s.zs.onError(e.js.errorCode.G_, 'finishDialog.js#CreateDialog', o.Ys.Js(t))
        }
      }
      Zm() {
        i.sf.onResizeCustomizePopDialog(),
        window.addEventListener('resize', () => {
          i.sf.onResizeCustomizePopDialog()
        })
      }
      ev(t) {
        window.location = i.sf.COLOPHON_PAGE_URL
      }
      ov(t) {
        const i = globalThis.BV.bookViewer;
        if (
          l.cancelTapEvent(),
          i.get_currentLayoutMode() == e.js.qn.VERTICAL
        ) i.rv(1);
         else if (i.Je.Ze(1)) i.movePage(1);
         else {
          i.hv(1),
          globalThis.BV.EmitEvents.showLoader();
          const t = i.av(1);
          i.cv(t).then(t => {
            null != t &&
            i.lv(t)
          })
        }
        this._v(t)
      }
      uv(t) {
        l.cancelTapEvent(),
        null != i.Uw.purchase_url ? location.href = i.Uw.purchase_url : globalThis.BV.EmitEvents.btnBuyEvent(void 0),
        window.event ? window.event.cancelBubble = !0 : t.cancelBubble = !0
      }
      dv(t) {
        const s = globalThis.BV.bookViewer;
        let e;
        l.cancelTapEvent(),
        e = null != i.Uw.series_url ? i.Uw.series_url : s.seriesSearch.getUrl(),
        null != e &&
        e.length > 0 &&
        (location.href = e),
        window.event ? window.event.cancelBubble = !0 : t.cancelBubble = !0
      }
      fv(t) {
        const i = globalThis.BV.bookViewer,
        s = (new Date).toISOString().replace(/(\.[0-9]*)/g, ''),
        e = i.get_currentPageNum();
        i.userOperationDataMgr.auto_bookmark_info ? i.userOperationDataMgr.auto_bookmark_info.op = E.ds.xn.Vn : (
          i.userOperationDataMgr.auto_bookmark_info = {
            id: void 0,
            Gm: '',
            time: '',
            note: void 0,
            op: void 0
          },
          i.userOperationDataMgr.auto_bookmark_info.op = E.ds.xn.Gn,
          i.userOperationDataMgr.auto_bookmark_info.id = ''
        ),
        i.userOperationDataMgr.auto_bookmark_info.Gm = g.zm(i.currentLayoutData.page_info[e - 1], e),
        i.userOperationDataMgr.auto_bookmark_info.time = s,
        i.userOperationDataMgr.Fm(
          i.Ev,
          i.contents_id,
          i.currentLayoutData.page_info[e - 1],
          e,
          i.userOperationDataMgr.auto_bookmark_info
        ),
        i.finish()
      }
      _v(t) {
        l.cancelTapEvent(),
        window.event ||
        (t.cancelBubble = !0),
        $('#finishDialog').dialog('close')
      }
      nv() {
        document.querySelectorAll('.ui-widget-overlay').forEach(
          t => {
            t.addEventListener('click', () => ($('#finishDialog').dialog('close'), !1))
          }
        )
      }
      Rv() {
        l.cancelTapEvent(),
        location.href = i.sf.FINISHPAGEMENU_POP_LINK_URL
      }
      Iv(t) {
        const i = t,
        s = r.Ue.ZE.QE.zu();
        for (; s.firstChild; ) s.removeChild(s.firstChild);
        s.insertAdjacentHTML('beforeend', i),
        s.querySelectorAll('.trigger-to-finish').forEach(
          t => t.addEventListener(
            'click',
            t => {
              const i = t.target.dataset.gv;
              null != i &&
              DoTrackerEventPush(i),
              onClick_finish_Button(t)
            }
          )
        ),
        s.querySelectorAll('.trigger-to-top').forEach(
          t => t.addEventListener(
            'click',
            t => {
              const i = t.target.dataset.gv;
              null != i &&
              DoTrackerEventPush(i),
              onClick_top_Button(t)
            }
          )
        ),
        s.querySelectorAll('.trigger-to-store').forEach(
          t => t.addEventListener(
            'click',
            t => {
              const i = t.target.dataset.gv;
              null != i &&
              DoTrackerEventPush(i),
              onClick_store_Button(t)
            }
          )
        )
      }
      Ov(t) {
        const i = window.document,
        s = i.createElement('style'),
        e = i.createTextNode(t);
        s.media = 'screen',
        s.appendChild(e),
        i.head.appendChild(s)
      }
      wv() {
        const t = globalThis.BV.bookViewer;
        return null != i.Uw.purchase_url ||
        !!t.bookInfo.hasPurchaseUrl()
      }
      pv() {
        const t = globalThis.BV.bookViewer;
        if (null != i.Uw.series_url) return !0;
        const s = t.seriesSearch.getUrl();
        return null != s &&
        s.length > 0
      }
      mv() {
        const t = document.getElementById('area_FinishPopImage');
        if ('' == i.sf.FINISHPAGEMENU_POP_LINK_URL) t.style.display = 'none';
         else if (t.style.display = 'block', $('#finishDialog').dialog('isOpen')) {
          const t = document.getElementById('finishPopImage');
          t.style.width = '',
          t.style.height = ''
        } else {
          $('#finishDialog').dialog('open');
          const t = document.getElementById('finishPopImage');
          t.style.width = '',
          t.style.height = '',
          $('#finishDialog').dialog('close')
        }
        window.dispatchEvent(new Event('resize'))
      }
    };
    document.addEventListener('DOMContentLoaded', () => {
      O.init()
    }),
    i.Uw.onClick_top_Button = t => O.ov(t),
    i.Uw.onClick_store_Button = t => O.uv(t),
    i.Uw.onClick_series_SearchButton = t => O.dv(t),
    i.Uw.onClick_finish_Button = t => O.fv(t),
    i.Uw.onClick_btn_PopEvent = () => O.Rv(),
    i.Uw.set_ContentInfo = t => O.Iv(t),
    i.Uw.add_Style = t => O.Ov(t),
    i.Uw.exist_BuyURL = () => O.wv(),
    i.Uw.exist_SeriesURL = () => O.pv(),
    i.Uw.onload_FinishPopImage = () => O.mv();
    var w = __webpack_require__(6367);
    class p {
      static vv() {
        window.innerWidth <= 600 ? r.Ue.Pg.Ng.Lg({
          width: '300px'
        }) : r.Ue.Pg.Ng.Lg({
          width: '500px'
        })
      }
      static Pv() {
        r.Ue.Pg.Ng.create({
          Qm: `#${ r.Ue.Xd.Hd() }`,
          autoOpen: !1,
          title: 'メッセージ',
          closeText: '',
          closeOnEscape: !1,
          modal: !0,
          draggable: !1,
          tv: !1,
          open: (t, i) => {
            window.setTimeout(
              () => {
                const t = r.Ue.Xd.zu(),
                i = r.Ue.Pg.Ng.zu().parentElement,
                s = t.clientWidth,
                e = t.clientHeight,
                n = '' + (s - i.clientWidth) / 2,
                o = '' + (e - i.clientHeight) / 2;
                i.style.left = `${ n }px`,
                i.style.top = `${ o }px`
              },
              0
            )
          },
          close: t => {
            globalThis.BV.EmitEvents.setEventLockFlg(!1)
          }
        }),
        this.vv(),
        r.Ue.Pg.Ng.ed(!1),
        this.Dv()
      }
      static Dv() {
        window.addEventListener('resize', () => {
          this.vv()
        })
      }
      static Tv() {
        globalThis.BV.EmitEvents.setEventLockFlg(!0),
        r.Ue.Pg.Ng.ed(!0)
      }
      static bv(t) {
        r.Ue.Pg.Ng.ed(!1)
      }
    }
    var m = __webpack_require__(6451),
    v = function (t, i, s, e) {
      return new (s || (s = Promise)) (
        (
          function (n, o) {
            function r(t) {
              try {
                a(e.next(t))
              } catch (t) {
                o(t)
              }
            }
            function h(t) {
              try {
                a(e.throw(t))
              } catch (t) {
                o(t)
              }
            }
            function a(t) {
              var i;
              t.done ? n(t.value) : (i = t.value, i instanceof s ? i : new s((function (t) {
                t(i)
              }))).then(r, h)
            }
            a((e = e.apply(t, i || [])).next())
          }
        )
      )
    };
    class P {
      constructor() {
        this.yv = [],
        this.Lv = null,
        this.Av = new D
      }
      Cv(t, i) {
        const s = i.replace(/(。)/g, '$1@^_|').replace(/(　| )/g, '@^_|$1').split('@^_|');
        for (let i = 0; i < s.length; i++) if ('。' !== s[i] && '　' !== s[i] && ' ' !== s[i] && '' !== s[i]) if (0 === i) if (this.kv() >= 1) {
          const e = this.Bv(),
          n = e.text[e.text.length - 1];
          '。' !== n &&
          '　' !== n &&
          ' ' !== n &&
          '　' !== s[i][0] &&
          ' ' !== s[i][0] ? this.Sv({
            page: e.page,
            text: e.text + s[i]
          }) : this.Nv({
            page: t,
            text: s[i]
          })
        } else this.Nv({
          page: t,
          text: s[i]
        });
         else this.Nv({
          page: t,
          text: s[i]
        })
      }
      Mv() {
        return this.xv()
      }
      Gv() {
        return this.Bv()
      }
      Vv() {
        this.Wv()
      }
      Nv(t) {
        this.yv.push(this.Av.$v(t)),
        this.Lv = t
      }
      Sv(t) {
        0 === this.yv.length ? this.Nv(t) : (this.yv[this.yv.length - 1] = this.Av.$v(t), this.Lv = t)
      }
      xv() {
        return this.Av.Kv(this.yv.shift())
      }
      Bv() {
        return this.Lv
      }
      kv() {
        return this.yv.length
      }
      Wv() {
        this.yv = [],
        this.Lv = null
      }
    }
    class D {
      constructor() {
        this.Uv = 256,
        this.Fv = null
      }
      Xv() {
        this.Fv = new Uint16Array(this.Uv),
        window.crypto.getRandomValues(this.Fv)
      }
      $v(t) {
        return null == t ? null : (null === this.Fv && this.Xv(), this.zv(JSON.stringify(t)))
      }
      Kv(t) {
        return null == t ||
        null === this.Fv ? null : JSON.parse(this.Hv(t))
      }
      zv(t) {
        if (null == t) return null;
        let i = 0;
        return new Uint16Array(
          [].map.call(t, t => {
            const s = t.charCodeAt(0) ^ this.Fv[i % this.Uv];
            return i++,
            s
          })
        ).buffer
      }
      jv(t, i) {
        const s = new Uint16Array(t);
        for (let t = 0; t < s.length; t++) s[t] = s[t] ^ this.Fv[i % this.Uv],
        i++;
        return {
          qv: String.fromCharCode.apply('', Array.from(s)),
          offset: i
        }
      }
      Hv(t) {
        if (null == t) return null;
        let i = 0;
        const s = [];
        for (let e = 0; e < t.byteLength; e += 1024) {
          const n = this.jv(t.slice(e, e + 1024), i);
          s.push(n.qv),
          i = n.offset
        }
        return s.join('')
      }
    }
    class T {
      constructor() {
        this.Jv = !0,
        this.Yv = 1,
        this.Zv = null,
        this.Qv = !1,
        this.Jv = !0,
        this.Yv = 1,
        this.tP = null,
        this.iP = null,
        this.sP = 100,
        this.eP = null,
        this.nP = null
      }
      oP() {
        'speechSynthesis' in window ? this.Zv = new SpeechSynthesisUtterance : this.Zv = {},
        this.Zv.lang = 'ja-JP',
        this.Zv.rate = this.Yv,
        this.Zv.pitch = 1,
        this.volume = 0.7,
        this.Zv.text = '　',
        speechSynthesis.speak(this.Zv),
        this.Zv.onstart = () => {
        },
        this.Zv.onpause = () => {
        },
        this.Zv.onresume = () => {
        },
        this.Zv.onerror = t => {
        },
        this.tP = new P,
        window.addEventListener('beforeunload', () => {
          this.cancel()
        }),
        document.addEventListener(
          'visibilitychange',
          () => {
            !1 === document.hidden &&
            this.rP() &&
            this.hP()
          }
        )
      }
      rP() {
        return this.Qv
      }
      aP(t) {
        t &&
        (
          this.Zv.text = t.text,
          this.Zv.rate = this.Yv,
          speechSynthesis.speak(this.Zv),
          document.hidden ||
          this.cP(t.page),
          this.eP = t.page
        )
      }
      lP() {
        return v(this, void 0, void 0, (function * () {
          globalThis.BV.bookViewer
        }))
      }
      _P(t, i) {
        return v(
          this,
          void 0,
          void 0,
          (
            function * () {
              const s = globalThis.BV.bookViewer;
              yield s.uP(t, i);
              for (let s = 0; s < i; s++) this.dP(t + s)
            }
          )
        )
      }
      dP(t) {
        const i = globalThis.BV.bookViewer.currentLayoutData.page_info[t - 1];
        if (!i) return !1;
        m.ls._s(i);
        let s = this.fP(i);
        return void 0 !== s &&
        ('' === s && (s = ' '), this.tP.Cv(t, s), !0)
      }
      fP(t) {
        if (null == t) return;
        const i = t.draw_info,
        s = i.length;
        let e = '';
        for (let t = 0; t < s; t++) {
          const s = i[t];
          let n = '';
          if (!s.s || s.s.indexOf('t') < 0) {
            let t = s.u;
            if (t) {
              t = t.split(',');
              const i = parseInt(t[0], 16);
              if (null != t[1]) {
                const s = parseInt(t[1], 16);
                n = String.fromCharCode(i, s)
              } else n = String.fromCharCode(i);
              e += n
            }
          }
        }
        return e
      }
      cancel() {
        this.Zv.onend = void 0,
        this.Qv = !1,
        speechSynthesis.cancel(),
        this.tP.Vv(),
        this.hP(),
        this.eP = null
      }
      hP() {
        this.eP &&
        this.cP(this.eP)
      }
      cP(t) {
        const i = globalThis.BV.bookViewer;
        this.nP != t &&
        (i.movePage(t), this.nP = t)
      }
      EP() {
        const t = this.tP.Mv();
        t ? (this.Zv.onend = () => this.EP(), this.Qv = !0, this.aP(t)) : (this.cancel(), this.iP && this.iP())
      }
      RP(t) {
        this.iP = t
      }
      IP(t) {
        this.Jv = t
      }
      gP() {
        return this.Jv
      }
      OP(t) {
        this.Yv = t
      }
    }
    const b = new class {
      constructor() {
        this.wP = new T,
        this.wP.RP(() => {
          const t = globalThis.BV.bookViewer;
          this.pP(),
          t.mP()
        }),
        this.vP = !1,
        this.PP = null,
        this.DP = !1,
        this.TP = 100,
        this.bP = null
      }
      yP() {
        this.wP.IP(!0)
      }
      LP() {
        this.wP.IP(!1)
      }
      AP(t) {
        this.vP ||
        (this.CP(), this.vP = !0)
      }
      kP(t) {
        let i;
        const s = [
          0.8,
          1,
          1.25,
          1.5,
          2,
          3
        ],
        e = [
          0.8,
          1,
          1.47,
          1.98,
          3.03,
          4.63
        ],
        o = [
          0.8,
          1,
          1.1,
          1.2,
          1.4,
          1.7
        ],
        r = [
          0.35,
          0.59,
          0.65,
          0.8,
          1.5,
          2
        ],
        h = [
          0.8,
          1,
          1.25,
          1.5,
          2.03,
          3.09
        ],
        a = [
          0.7,
          1,
          1.53,
          1.9,
          4,
          10
        ];
        n.E.ae() ? i = e : n.E.Re() ? i = '8' == n.E.JO ? r : o : n.E.Ew() ? i = h : n.E.he() ? i = a : n.E.Iw() &&
        (i = s);
        const c = i[t - 1];
        this.wP.OP(c)
      }
      BP() {
      }
      stopTts() {
        if (!this.DP) return;
        const t = (new Date).getTime();
        this.bP &&
        t - this.bP < this.TP ||
        (
          this.bP = t,
          this.DP = !1,
          this.wP.rP() &&
          this.wP.cancel(),
          this.pP()
        )
      }
      CP() {
        this.LP(),
        r.Ue.jd.Nf.Mf.Uf.OE.ed(!1),
        r.Ue.ze.VR.TR(),
        this.vP = !0
      }
      SP() {
        globalThis.BV.EmitEvents.closeAllMenu(),
        r.Ue.Ud.ed(!0),
        window.addEventListener('keyup', () => this.stopTts()),
        this.NP()
      }
      pP() {
        r.Ue.Ud.ed(!1),
        window.removeEventListener('keyup', () => this.stopTts(), !1),
        this.MP()
      }
      xP() {
        this.PP = new Audio('image/tts.mp3'),
        this.PP.loop = !0,
        this.PP.addEventListener('play', t => {
          this.BP()
        }),
        this.PP.addEventListener('pause', t => {
          this.stopTts()
        })
      }
      NP() {
        null == this.PP &&
        this.xP(),
        this.PP.paused &&
        this.PP.play()
      }
      MP() {
        this.PP.paused ||
        this.PP.pause()
      }
    };
    var y = function (t, i, s, e) {
      return new (s || (s = Promise)) (
        (
          function (n, o) {
            function r(t) {
              try {
                a(e.next(t))
              } catch (t) {
                o(t)
              }
            }
            function h(t) {
              try {
                a(e.throw(t))
              } catch (t) {
                o(t)
              }
            }
            function a(t) {
              var i;
              t.done ? n(t.value) : (i = t.value, i instanceof s ? i : new s((function (t) {
                t(i)
              }))).then(r, h)
            }
            a((e = e.apply(t, i || [])).next())
          }
        )
      )
    };
    class L {
      static GP(t, i, s, e, n) {
        return y(
          this,
          void 0,
          void 0,
          (
            function * () {
              const o = i.length,
              r = new Array(o);
              for (let t = 0; t < o; t++) r[t] = i.charCodeAt(t).toString(16).toUpperCase();
              let h = 0,
              a = !1,
              c = 0;
              s ||
              0 === s ||
              (s = t.VP);
              const l = t.av(t.VP);
              null != e &&
              (c = e),
              null != n &&
              (h = n, n > 0 && (a = !0));
              for (let e = s - 1; e <= t.currentLayoutData.end - 1; e++) {
                if (null == t.currentLayoutData.page_info[e]) return M.showLoader(),
                yield t.WP(e + 1, l),
                void L.GP(t, i, e + 1, c, h);
                if (
                  e < t.currentLayoutData.end - 1 &&
                  null == t.currentLayoutData.page_info[e + 1]
                ) return M.showLoader(),
                yield t.WP(e + 2, l),
                void L.GP(t, i, e + 1, c, h);
                {
                  const s = t.currentLayoutData.page_info[e];
                  m.ls._s(s);
                  const n = s.draw_info.length;
                  for (let l = t.$P; l < n; l++) {
                    const n = s.draw_info[l];
                    if (!n.k) for (let t = l - 1; t > - 1; t--) if (s.draw_info[t].k) {
                      n.k = s.draw_info[t].k;
                      break
                    }
                    if (n.k && n.k == E.ds.fs.ds) {
                      if (!n.u) for (let t = l - 1; t > - 1; t--) {
                        const i = s.draw_info[t];
                        if (i.k == E.ds.fs.ds && i.u) {
                          n.u = i.u;
                          break
                        }
                      }
                      if (!n.s || n.s.indexOf('t') < 0) if (n.u.toUpperCase() != r[h] || t.KP) h > 0 &&
                      (h = 0, l--, a = !1, c = 0);
                       else {
                        if (0 == h && (c = l), !n.x) for (let t = l - 1; t > - 1; t--) if (s.draw_info[t].k == E.ds.fs.ds || s.draw_info[t].k == E.ds.fs.Is) {
                          const i = s.draw_info[t];
                          if (i.x) {
                            n.x = i.x;
                            break
                          }
                        }
                        if (!n.y) for (let t = l - 1; t > - 1; t--) if (s.draw_info[t].k == E.ds.fs.ds || s.draw_info[t].k == E.ds.fs.Is) {
                          const i = s.draw_info[t];
                          if (i.y) {
                            n.y = i.y;
                            break
                          }
                        }
                        if (!n.w) for (let t = l - 1; t > - 1; t--) if (s.draw_info[t].k == E.ds.fs.ds || s.draw_info[t].k == E.ds.fs.Is) {
                          const i = s.draw_info[t];
                          if (i.w) {
                            n.w = i.w;
                            break
                          }
                        }
                        if (!n.h) for (let t = l - 1; t > - 1; t--) if (s.draw_info[t].k == E.ds.fs.ds || s.draw_info[t].k == E.ds.fs.Is) {
                          const i = s.draw_info[t];
                          if (i.h) {
                            n.h = i.h;
                            break
                          }
                        }
                        if (!n.o) for (let t = l - 1; t > - 1; t--) if (s.draw_info[t].k == E.ds.fs.ds || s.draw_info[t].k == E.ds.fs.Is) {
                          const i = s.draw_info[t];
                          if (i.o) {
                            n.o = i.o;
                            break
                          }
                        }
                        if (h++, h == o) return M.hiddenLoader(),
                        t.VP = a ? e : e + 1,
                        t.$P = c,
                        this.UP(t, i, t.VP, t.$P, !0),
                        void (1 == a && (t.$P = 0))
                      }
                    }
                  }
                  a = h > 0,
                  e + 2 <= t.currentLayoutData.end &&
                  (t.$P = 0, a || (t.$P = 0, a = !1))
                }
              }
              M.hiddenLoader();
              let _ = '';
              M.FP.length > 0 &&
              (_ = M.FP.substring(0, i.length)),
              i != _ &&
              M.Wg('次方向には見つかりませんでした。')
            }
          )
        )
      }
      static XP(t, i, s) {
        return y(
          this,
          void 0,
          void 0,
          (
            function * () {
              const e = i.length,
              n = new Array(e);
              for (let t = 0; t < e; t++) n[t] = i.charCodeAt(t).toString(16).toUpperCase();
              let o = 0,
              r = !1,
              h = 0;
              s ||
              0 === s ||
              (s = t.VP);
              const a = t.av(t.VP);
              o = n.length;
              for (let e = s - 1; e >= t.currentLayoutData.start - 1; e--) {
                if (null == t.currentLayoutData.page_info[e]) return M.showLoader(),
                yield t.WP(e + 1, a),
                void L.XP(t, i, e + 1);
                if (
                  e > t.currentLayoutData.start - 1 &&
                  null == t.currentLayoutData.page_info[e - 1]
                ) return M.showLoader(),
                yield t.WP(e, a),
                void L.XP(t, i, e + 1);
                {
                  const s = t.currentLayoutData.page_info[e];
                  m.ls._s(s);
                  for (let a = t.$P; a > - 1; a--) {
                    const c = s.draw_info[a];
                    if (!c.k) for (let t = a - 1; t > - 1; t--) if (s.draw_info[t].k) {
                      c.k = s.draw_info[t].k;
                      break
                    }
                    if (c.k && c.k == E.ds.fs.ds && !c.u) for (let t = a - 1; t > - 1; t--) {
                      const i = s.draw_info[t];
                      if (i.k == E.ds.fs.ds && i.u) {
                        c.u = i.u;
                        break
                      }
                    }
                    if (c.k && c.k == E.ds.fs.ds && c.u && (!c.s || c.s.indexOf('t') < 0)) if (c.u.toUpperCase() != n[o - 1] || t.KP) o < n.length &&
                    (o = n.length, a++, r = !1);
                     else {
                      if (o == n.length && (h = a), !c.x) for (let t = a - 1; t > - 1; t--) if (s.draw_info[t].k == E.ds.fs.ds || s.draw_info[t].k == E.ds.fs.Is) {
                        const i = s.draw_info[t];
                        if (i.x) {
                          c.x = i.x;
                          break
                        }
                      }
                      if (!c.y) for (let t = a - 1; t > - 1; t--) if (s.draw_info[t].k == E.ds.fs.ds || s.draw_info[t].k == E.ds.fs.Is) {
                        const i = s.draw_info[t];
                        if (i.y) {
                          c.y = i.y;
                          break
                        }
                      }
                      if (!c.w) for (let t = a - 1; t > - 1; t--) if (s.draw_info[t].k == E.ds.fs.ds || s.draw_info[t].k == E.ds.fs.Is) {
                        const i = s.draw_info[t];
                        if (i.w) {
                          c.w = i.w;
                          break
                        }
                      }
                      if (!c.h) for (let t = a - 1; t > - 1; t--) if (s.draw_info[t].k == E.ds.fs.ds || s.draw_info[t].k == E.ds.fs.Is) {
                        const i = s.draw_info[t];
                        if (i.h) {
                          c.h = i.h;
                          break
                        }
                      }
                      if (!c.o) for (let t = a - 1; t > - 1; t--) if (s.draw_info[t].k == E.ds.fs.ds || s.draw_info[t].k == E.ds.fs.Is) {
                        const i = s.draw_info[t];
                        if (i.o) {
                          c.o = i.o;
                          break
                        }
                      }
                      if (o--, 0 == o) return M.hiddenLoader(),
                      t.VP = r ? e + 2 : e + 1,
                      t.$P = r ? n.length : h,
                      this.UP(t, i, t.VP, t.$P, !1),
                      void (
                        1 == r &&
                        (
                          t.$P = t.currentLayoutData.page_info[t.VP - 1].draw_info.length - 1
                        )
                      )
                    }
                  }
                  r = o < n.length,
                  e + 1 > t.currentLayoutData.start &&
                  (
                    m.ls._s(t.currentLayoutData.page_info[e - 1]),
                    t.$P = t.currentLayoutData.page_info[e - 1].draw_info.length - 1,
                    r ||
                    (t.$P = t.currentLayoutData.page_info[e - 1].draw_info.length - 1)
                  )
                }
              }
              M.hiddenLoader();
              let c = '';
              M.FP.length > 0 &&
              (c = M.FP.substring(0, i.length)),
              i != c &&
              M.Wg('前方向には見つかりませんでした。')
            }
          )
        )
      }
      static UP(t, i, s, e, n) {
        let o = t.zP();
        (!o[1] && o[0] != s || o[0] != s && o[1] != s) &&
        (t.movePage(s), o = t.zP()),
        t.HP();
        const h = i.length,
        c = new Array(h);
        for (let t = 0; t < h; t++) c[t] = i.charCodeAt(t).toString(16).toUpperCase();
        let l = 0,
        _ = r.Ue.Ed.zu(),
        u = _.getContext('2d'),
        d = 0,
        f = 0,
        R = 0,
        I = 0;
        if (a.Vs.hn(u), n) {
          l = 0;
          for (let i = s - 1; i < t.currentLayoutData.page_info.length; i++) {
            const s = t.Je.jP(i + 1),
            n = s.qP,
            r = n.Bs(),
            h = n.Gm,
            _ = r.width / s.width,
            g = r.height / s.height,
            O = t.currentLayoutData.page_info[i],
            w = O.draw_info.length;
            m.ls._s(O);
            for (let s = e; s < w; s++) {
              const e = O.draw_info[s];
              if (e.k && e.k == E.ds.fs.ds && e.u && (!e.s || e.s.indexOf('t') < 0)) if (e.u.toUpperCase() == c[l]) {
                if (
                  0 == l &&
                  a.Vs.hn(u),
                  o[0] != i + 1 &&
                  o[1] != i + 1 ||
                  (
                    d = h.x + ~~(e.x * _),
                    f = h.y + ~~(e.y * g),
                    !e.o ||
                    e.o != E.ds.ke.Ce &&
                    e.o != E.ds.ke.Be ? (R = ~~(e.w * _), I = ~~(e.h * g)) : (I = ~~(e.w * _), R = ~~(e.h * g)),
                    a.Vs.Kw(u, {
                      x: d,
                      y: f,
                      width: R,
                      height: I
                    })
                  ),
                  l == c.length - 1
                ) return void (t.VP = i + 1);
                l++
              } else l > 0 &&
              (l = 0, s++, a.Vs.hn(u))
            }
            e = 0
          }
        } else {
          l = c.length;
          for (let i = s - 1; i > - 1; i--) {
            const s = t.Je.jP(i + 1),
            n = s.qP,
            r = n.Bs();
            if (null == r && l < c.length) return void (t.VP = i + 1);
            const h = r.width / s.width,
            _ = r.height / s.height;
            for (let s = e; s > - 1; s--) {
              const e = t.currentLayoutData.page_info[i].draw_info[s];
              if (e && e.k && e.k == E.ds.fs.ds && e.u && (!e.s || e.s.indexOf('t') < 0)) if (e.u.toUpperCase() == c[l - 1]) {
                if (
                  l == c.length &&
                  a.Vs.hn(u),
                  o[0] != i + 1 &&
                  o[1] != i + 1 ||
                  (
                    d = n.JP + ~~(e.x * h),
                    f = n.YP + ~~(e.y * _),
                    !e.o ||
                    e.o != E.ds.ke.Ce &&
                    e.o != E.ds.ke.Be ? (R = ~~(e.w * h), I = ~~(e.h * _)) : (I = ~~(e.w * h), R = ~~(e.h * _)),
                    a.Vs.Kw(u, {
                      x: d,
                      y: f,
                      width: R,
                      height: I
                    })
                  ),
                  l--,
                  0 == l
                ) return void (t.VP = i + 1)
              } else l < c.length &&
              (l = c.length, s++, a.Vs.hn(u))
            }
            e = t.currentLayoutData.page_info[i - 1].draw_info.length
          }
        }
        u = void 0,
        _ = void 0
      }
      static ZP(t, i, e, n) {
        return y(
          this,
          void 0,
          void 0,
          (
            function * () {
              M.showLoader();
              const r = yield R.Tm(i, e, n, !0);
              if (M.hiddenLoader(), null == r.error) {
                const s = r.value;
                if ('' != s) {
                  t.QP = e;
                  const n = L.tD(i),
                  r = o.Ys.xO(s),
                  h = o.Ys.zO(n, r);
                  return t.iD = o.Ys.XO(h),
                  {
                    sD: t.iD
                  }
                }
                return t.QP = '',
                {
                  sD: e,
                  eD: !0
                }
              }
              return s.zs.onError(
                r.error.errorCode,
                'BookViewer.prototype.scrambledSearchText',
                r.error.im
              ),
              null
            }
          )
        )
      }
      static tD(t) {
        const i = t + 'ebij2014';
        return d().ii(i).toString(d().F.Kt).split('').reverse().join('')
      }
    }
    const A = new class {
      constructor() {
        this.nD()
      }
      nD() {
        $('#errorDialog').dialog({
          Qm: `#${ r.Ue.Xd.Hd() }`,
          autoOpen: !1,
          title: i.OK.errdialog_title ? i.OK.errdialog_title : '表示できません',
          closeText: '',
          closeOnEscape: !1,
          modal: !0,
          draggable: !1,
          tv: !1,
          open: (t, i) => {
            const s = document.querySelector('.ui-dialog-titlebar-close');
            s &&
            (s.style.display = 'none'),
            window.setTimeout(
              () => {
                const t = r.Ue.Xd.zu(),
                i = r.Ue.ZE.iR.zu().parentElement,
                s = t.clientWidth,
                e = t.clientHeight,
                n = '' + (s - i.clientWidth) / 2,
                o = '' + (e - i.clientHeight) / 2;
                i.style.left = `${ n }px`,
                i.style.top = `${ o }px`
              },
              0
            )
          },
          close: t => {
            l.cancelTapEvent(),
            r.Ue.Screen.Ju.zu().style.visibility = 'hidden',
            r.Ue.ZE.iR.zu().style.visibility = 'hidden',
            window.event ? window.event.cancelBubble = !0 : t.originalEvent &&
            (t.originalEvent.originalEvent.cancelBubble = !0),
            globalThis.BV.EmitEvents.disablePageUIEventMoment(),
            globalThis.BV.EmitEvents.setEventLockFlg(!1)
          }
        }),
        this.oD(),
        $('#errorDialog').dialog('close'),
        this.oD(),
        window.addEventListener('resize', () => {
          $('#errorDialog').dialog({
          }),
          this.oD()
        })
      }
      oD() {
        window.innerWidth <= 600 ? $('#errorDialog').dialog({
          width: '300px'
        }) : $('#errorDialog').dialog({
          width: '500px'
        }),
        window.innerHeight <= 420 ? $('#errorDialog').dialog({
          height: 260
        }) : $('#errorDialog').dialog({
          height: 400
        })
      }
      rD(t, s, e) {
        globalThis.BV.EmitEvents.setEventLockFlg(!0),
        globalThis.BV.EmitEvents.setEventInvalid();
        const n = document.getElementById('error_topBtn'),
        o = document.getElementById('error_reloadBtn'),
        h = document.getElementById('error_finishBtn');
        1 == i.OK.hD ? (
          n.style.display = 'none',
          o.style.display = 'none',
          h.style.display = 'none'
        ) : (
          n.style.display = 'block',
          o.style.display = 'block',
          h.style.display = 'block'
        );
        const a = r.Ue.Screen.Ju.zu();
        a.style.visibility = 'visible',
        a.style.visibility = 'visible',
        $('#errorDialog').dialog('open');
        const c = r.Ue.ZE.iR.zu();
        c.style.visibility = 'visible',
        c.style.minHeight = '0px',
        document.getElementById('error_msgHeader').innerHTML = t,
        document.getElementById('error_msgMain').innerHTML = s,
        document.getElementById('error_msgFooter').innerHTML = e
      }
      aD(t) {
        const i = globalThis.BV.bookViewer;
        l.cancelTapEvent();
        const s = sessionStorage;
        s &&
        s.setItem('backupBookShelfUrl', globalThis.BV.bookShelfUrl),
        i.userOperationDataMgr.Jm(i.contents_id),
        location.reload(),
        window.event ||
        (t.cancelBubble = !0),
        $('#errorDialog').dialog('close')
      }
      cD(t) {
        l.cancelTapEvent(),
        this.lD();
        const i = sessionStorage;
        i &&
        i.setItem('backupBookShelfUrl', globalThis.BV.bookShelfUrl),
        location.reload(),
        window.event ||
        (t.cancelBubble = !0),
        $('#errorDialog').dialog('close')
      }
      _D(t) {
        const i = globalThis.BV.bookViewer;
        this.lD(),
        i.finish()
      }
      lD() {
        const t = globalThis.BV.bookViewer,
        i = (new Date).toISOString().replace(/(\.[0-9]*)/g, '');
        let s = t.get_currentPageNum();
        null != t.currentLayoutData &&
        null != t.currentLayoutData.page_info &&
        (
          null == t.currentLayoutData.page_info[s - 1] &&
          (s = t.uD()),
          t.userOperationDataMgr.auto_bookmark_info ? t.userOperationDataMgr.auto_bookmark_info.op = E.ds.xn.Vn : (
            t.userOperationDataMgr.auto_bookmark_info = {
              id: void 0,
              Gm: '',
              time: '',
              note: void 0,
              op: void 0
            },
            t.userOperationDataMgr.auto_bookmark_info.op = E.ds.xn.Gn,
            t.userOperationDataMgr.auto_bookmark_info.id = ''
          ),
          t.userOperationDataMgr.auto_bookmark_info.Gm = g.zm(t.currentLayoutData.page_info[s - 1], s),
          t.userOperationDataMgr.auto_bookmark_info.time = i,
          t.userOperationDataMgr.Xm(t.contents_id, t.currentLayoutData.page_info[s - 1], s)
        )
      }
    };
    class C {
      static dD() {
        window.innerWidth <= 600 ? r.Ue.Pg.Dg.Lg({
          width: '300px'
        }) : r.Ue.Pg.Dg.Lg({
          width: '500px'
        })
      }
      static fD() {
        r.Ue.Pg.Dg.create({
          Qm: `#${ r.Ue.Xd.Hd() }`,
          autoOpen: !1,
          title: 'リンク先は製品版でお楽しみいただけます',
          closeOnEscape: !1,
          modal: !0,
          draggable: !1,
          tv: !1,
          open: (t, i) => {
            window.setTimeout(
              () => {
                const t = r.Ue.Xd.zu(),
                i = r.Ue.Pg.Dg.zu().parentElement,
                s = t.clientWidth,
                e = t.clientHeight,
                n = '' + (s - i.clientWidth) / 2,
                o = '' + (e - i.clientHeight) / 2;
                i.style.left = `${ n }px`,
                i.style.top = `${ o }px`
              },
              0
            )
          },
          close: t => {
            l.cancelTapEvent(),
            r.Ue.Screen.Ju.ed(!1),
            window.event ? window.event.cancelBubble = !0 : t.originalEvent &&
            (t.originalEvent.cancelBubble = !0),
            globalThis.BV.EmitEvents.disablePageUIEventMoment(),
            globalThis.BV.EmitEvents.setEventLockFlg(!1)
          }
        }),
        this.dD(),
        r.Ue.Pg.Dg.ed(!1),
        this.ED()
      }
      static ED() {
        window.addEventListener('resize', () => {
          this.dD()
        })
      }
      static showTrialDialog() {
        globalThis.BV.EmitEvents.setEventLockFlg(!0),
        globalThis.BV.EmitEvents.setEventInvalid(),
        r.Ue.Screen.Ju.ed(!0),
        r.Ue.Pg.Dg.ed(!0)
      }
      static RD(t) {
        globalThis.BV.EmitEvents.movePage(1),
        this.ID(t)
      }
      static gD(t) {
        globalThis.BV.EmitEvents.btnBuyEvent(void 0),
        window.event ? window.event.cancelBubble = !0 : t.cancelBubble = !0
      }
      static OD(t) {
        globalThis.BV.EmitEvents.finish()
      }
      static ID(t) {
        window.event ||
        (t.cancelBubble = !0),
        r.Ue.Pg.Dg.ed(!1)
      }
    }
    class k {
      static onTap(t, i) {
        const s = globalThis.BV.bookViewer;
        if (!s.isEventLock) return s.onTap(t, i)
      }
      static mouseMoveHandler(t) {
        const i = globalThis.BV.bookViewer;
        if (void 0 !== i && i) return i.wD(t)
      }
      static scrollEvent() {
        return globalThis.BV.bookViewer.pD()
      }
      static selectPageFromMokuji(t, i) {
        return globalThis.BV.bookViewer.selectPageFromMokuji(t, i)
      }
    }
    const B = new class {
      onTap(t) {
        return k.onTap(t.x, t.y)
      }
      mouseMoveHandler(t) {
        return k.mouseMoveHandler(t)
      }
      scrollEvent() {
        return k.scrollEvent()
      }
      selectPageFromMokuji(t, i) {
        return k.selectPageFromMokuji(t, i)
      }
      finishBtnEvent(t) {
        return M.mD(t)
      }
      backBtnEvent(t) {
        return M.vD(t)
      }
      searchLeft() {
        return M.PD()
      }
      searchRight() {
        return M.DD()
      }
      focusTextArea() {
        return M.focusTextArea()
      }
      clearText() {
        return M.clearText()
      }
      onloadOpeningPopImage() {
        return M.TD()
      }
      openStoreButton(t) {
        return M.bD(t)
      }
      closeTrialFooter(t) {
        return M.yD(t)
      }
      openMokuji(t) {
        return M.LD(t)
      }
      openSearch(t) {
        return M.AD(t)
      }
      openZoomBar(t) {
        return M.CD(t)
      }
      openSettings(t) {
        return M.kD(t)
      }
      btnStartTts(t) {
        return M.BD(t)
      }
      openHelp(t) {
        return M.SD(t)
      }
      btnFullscreen(t) {
        return M.ND(t)
      }
      MD(t) {
        return M.xD(t)
      }
      changeWriting(t) {
        return M.GD(t)
      }
      changeWebFont(t) {
        return M.VD(t)
      }
      changeIsVertical(t) {
        return M.WD(t)
      }
      changeSheet(t) {
        return M.$D(t)
      }
      changeAnimation(t) {
        return M.KD(t)
      }
      resetButton() {
        return M.UD()
      }
      changeSize(t) {
        return M.changeSize(t)
      }
      changeColor(t) {
        return M.changeColor(t)
      }
      changeTtsSpeed(t) {
        return M.changeTtsSpeed(t)
      }
      doDisableTts() {
        return M.doDisableTts()
      }
      errorTopButton(t) {
        return A.aD(t)
      }
      errorReloadButton(t) {
        return A.cD(t)
      }
      errorFinishButton(t) {
        return A._D(t)
      }
      trialTopButton(t) {
        return C.RD(t)
      }
      trialStoreButton(t) {
        return C.gD(t)
      }
      trialFinishButton(t) {
        return C.OD(t)
      }
      webfontOkButton(t) {
        return p.bv(t)
      }
      doubleClickBefore(t) {
        return l.doubleClickBefore(t)
      }
      cancelTapEvent() {
        return l.cancelTapEvent()
      }
      stopTts() {
        return b.stopTts()
      }
      onClick_finish_Button(t) {
        return i.Uw.onClick_finish_Button(t)
      }
      onClick_top_Button(t) {
        return i.Uw.onClick_top_Button(t)
      }
      onClick_store_Button(t) {
        return i.Uw.onClick_store_Button(t)
      }
      DoTrackerEventPush(t) {
        return i.sf.DoTrackerEventPush(t)
      }
    };
    var S;
    class N {
    }
    S = N,
    N.FD = [
      0,
      1,
      2,
      4
    ],
    N.XD = 0,
    N.zD = 1,
    N.HD = N.FD.length - 1,
    N.jD = ~~((S.HD + N.zD) / 2);
    const M = new class {
      constructor() {
        this.qD = 'buy',
        this.JD = 'dl',
        this.YD = '',
        this.ZD = '',
        this.QD = '',
        this.tT = 0,
        this.iT = 0,
        this.sT = !0,
        this.eT = !1,
        this.nT = t => {
          const i = o.Ys.qO();
          this.oT(i)
        },
        this.rT = t => {
          t.preventDefault()
        },
        this.hT = t => {
          [
            'Space',
            'ArrowUp',
            'ArrowDown',
            'ArrowLeft',
            'ArrowRight'
          ].indexOf(t.code) > - 1 &&
          t.preventDefault()
        },
        this.aT = t => {
          'INPUT' != t.target.nodeName &&
          (t.preventDefault(), t.stopPropagation())
        }
      }
      init() {
        this.cT(),
        this.lT(),
        this._T(),
        this.uT(),
        this.dT()
      }
      setViewer(t) {
        this.bookViewer = t
      }
      oT(t) {
        const i = r.Ue.Xd.zu();
        i.style.left = `${ t.offsetLeft }px`,
        i.style.top = `${ t.offsetTop }px`,
        i.style.transformOrigin = 'left top';
        const s = document.documentElement.clientWidth / t.width;
        i.style.transform = `scale( ${ 1 / s })`,
        i.style.height = `${ (t.height * s).toFixed(2) }px`
      }
      cT() {
        this.fT(),
        null == window.visualViewport ? (
          window.addEventListener('scroll', this.nT),
          window.addEventListener('resize', this.nT)
        ) : (
          window.visualViewport.addEventListener('scroll', this.nT),
          window.visualViewport.addEventListener('resize', this.nT)
        )
      }
      fT() {
        null == window.visualViewport ? (
          window.removeEventListener('scroll', this.nT),
          window.removeEventListener('resize', this.nT)
        ) : (
          window.visualViewport.removeEventListener('scroll', this.nT),
          window.visualViewport.removeEventListener('resize', this.nT)
        )
      }
      lT() {
        const t = r.Ue.jd.Nf.Mf.Ff.NE.zu();
        t.min = '1',
        t.max = '100',
        t.step = '1',
        t.value = '1',
        t.addEventListener(
          'change',
          t => {
            this.bookViewer.isScrollLock = !0;
            const i = parseInt(t.target.value);
            this.ET(i),
            this.bookViewer.xs.RT(),
            this.bookViewer.IT(),
            this.bookViewer.HP();
            const s = this.bookViewer.Je.jP(i);
            this.bookViewer.get_currentLayoutMode() == e.js.qn.Zn ? s ? this.bookViewer.bookInfo.gT() ? s.OT == e.Xn.cn &&
            (this.wT(i - 1), this.ET(i - 1)) : s.OT == e.Xn.ln &&
            (this.wT(i - 1), this.ET(i - 1)) : (
              this.bookViewer.hv(i),
              this.showLoader(),
              this.bookViewer.cv(this.bookViewer.av(i)).then(t => {
                null != t &&
                this.bookViewer.lv(t)
              })
            ) : s ||
            (
              this.bookViewer.hv(i),
              this.showLoader(),
              this.bookViewer.cv(this.bookViewer.av(i)).then(t => {
                null != t &&
                this.bookViewer.lv(t)
              })
            ),
            this.bookViewer.get_currentLayoutMode() == e.js.qn.VERTICAL ? this.bookViewer.rv(i) : this.bookViewer.movePage(i),
            l.Vp(0, 0),
            this.bookViewer.isScrollLock = !1
          }
        ),
        t.addEventListener('input', t => {
          const i = parseInt(t.target.value);
          this.ET(i)
        }),
        n.E.ww() &&
        parseInt(n.E.JO) <= 12 &&
        r.Ue.jd.Nf.Mf.Ff.zu().addEventListener(
          'touchend',
          (
            function (i) {
              const s = t.getBoundingClientRect(),
              n = i.changedTouches[0].pageX;
              if (n < s.left || s.right < n) return;
              let r = (n - s.left) / (s.right - s.left);
              t.classList.contains('right_binding') &&
              (r = 1 - r);
              const h = (parseInt(t.max, 10) - 1) * r + 1;
              t.value = `${ h.toFixed(0) }`,
              o.Ys.FO(e.js.Wo, `newValue = ${ h.toFixed(0) }`);
              const a = new Event('change');
              t.dispatchEvent(a)
            }
          ),
          {
            passive: !0
          }
        )
      }
      pT(t, i) {
        const s = t => {
          const s = t.querySelector('option:checked').innerHTML;
          t.parentElement.querySelector(i).querySelector('span').innerHTML = s
        },
        e = t => {
          s(t.target)
        };
        document.querySelectorAll(t).forEach(t => {
          s(t),
          t.addEventListener('change', e)
        })
      }
      _T() {
        this.pT('#textSize select', '#innerSize'),
        this.pT('#bookColor select', '#innerColor'),
        this.pT('#ttsSpeed select', '#innerTtsSpeed')
      }
      uT() {
        const t = r.Ue.ze._R();
        let i,
        s,
        e,
        n;
        function o(t) {
          const o = t.touches[0];
          if ('touchstart' == t.type) {
            i = o.pageX,
            s = o.pageY;
            const t = r.Ue.ze.Yu();
            e = t.left,
            n = t.top
          }
          if ('touchmove' == t.type) {
            t.preventDefault();
            const h = o.pageX,
            a = o.pageY,
            c = e + (i - h),
            l = n + (s - a);
            r.Ue.ze.Zu({
              left: c,
              top: l
            })
          }
        }
        t.addEventListener('touchstart', o, !1),
        t.addEventListener('touchmove', o, !1)
      }
      dT() {
        const t = r.Ue.Hf._R();
        let i,
        s,
        e,
        n;
        function o(t) {
          const o = t.touches[0],
          h = r.Ue.Hf._R();
          if (
            'touchstart' == t.type &&
            (i = o.pageX, s = o.pageY, e = h.scrollLeft, n = h.scrollTop),
            'touchmove' == t.type
          ) {
            t.preventDefault();
            const r = o.pageX,
            a = o.pageY,
            c = e + (i - r),
            l = n + (s - a);
            h.scrollLeft = c,
            h.scrollTop = l
          }
        }
        t.addEventListener('touchstart', o, !1),
        t.addEventListener('touchmove', o, !1)
      }
      showLoader() {
        r.Ue.dd.ed(!0)
      }
      hiddenLoader() {
        r.Ue.dd.ed(!1),
        !1 === this.bookViewer.mT &&
        (this.bookViewer.mT = !0, i.OK.vT && i.OK.vT())
      }
      PT(t) {
        t ? c.Ee.NO &&
        (
          document.body.addEventListener('touchmove', this.aT, {
            passive: !1
          }),
          r.Ue.jd.qd.Yd().addEventListener('touchmove', this.aT, {
            passive: !1
          }),
          r.Ue.jd.Nf.xf().addEventListener('touchmove', this.aT, {
            passive: !1
          })
        ) : (
          document.body.removeEventListener('touchmove', this.aT),
          r.Ue.jd.qd.Yd().removeEventListener('touchmove', this.aT),
          r.Ue.jd.Nf.xf().removeEventListener('touchmove', this.aT)
        )
      }
      sv(t) {
        const i = document.createElement('div');
        i.style.cssText = 'touch-action: none';
        const s = 'none' != i.style.touchAction;
        t ? c.Ee.NO &&
        (
          document.body.classList.add('disable-touch-page-on-verticalui'),
          s &&
          this.PT(t),
          document.addEventListener('mousewheel', this.rT, {
            passive: !1
          }),
          document.addEventListener('keydown', this.hT, {
            passive: !1
          })
        ) : (
          document.body.classList.remove('disable-touch-page-on-verticalui'),
          s &&
          this.PT(t),
          c.Ee.NO ? document.body.style.overflowY = 'scroll' : document.body.style.overflowY = 'hidden',
          document.removeEventListener('mousewheel', this.rT),
          document.removeEventListener('keydown', this.hT)
        )
      }
      DT() {
        c.Ee.NO &&
        (
          document.body.style.overflowY = 'hidden',
          document.removeEventListener('mousewheel', this.rT),
          document.removeEventListener('keydown', this.hT)
        )
      }
      TT() {
        if (c.Ee.NO && this.sv(!0), this.bookViewer.isEventLock) return;
        let t;
        l.cancelTapEvent(),
        this.bookViewer.setEventLockFlg(!0),
        this.bookViewer.status = h.w.Lf,
        this.bookViewer.setEventValidState(!1),
        t = this.bookViewer.bookInfo.bT(),
        window.setTimeout(
          () => {
            this.bookViewer.setEventLockFlg(!1),
            r.Ue.Screen.Ju.ed(!0)
          },
          200
        ),
        r.Ue.jd.qd.Qd(r.Ue.jd.qd.Jd.Lu, t),
        n.E.ww() &&
        3 == n.E.rw &&
        337 == window.innerHeight ? r.Ue.jd.Nf.Wf(window.innerHeight - 55 + 'px') : r.Ue.jd.Nf.Wf(''),
        r.Ue.jd.Nf.ed(!0, !0),
        this.bookViewer.yT() ? r.Ue.jd.qd.ef.ed(!0) : r.Ue.jd.qd.ef.ed(!1),
        this.adjustTrialFooter(),
        this.bookViewer.bookInfo.LT() ? (this.AT(this.JD), r.Ue.jd.qd.nf.ed(!1)) : this.AT(this.qD),
        this.updateMoveBar(),
        this.CT()
      }
      closeMenu(t, i) {
        this.bookViewer.setEventValidState(!0),
        r.Ue.Screen.Ju.ed(!1),
        r.Ue.jd.qd.Qd(r.Ue.jd.qd.Jd.HIDDEN, this.bookViewer.bookInfo.bT()),
        r.Ue.jd.Nf.ed(!1),
        r.Ue.ze.ed(!1, !1),
        r.Ue.Hf.ed(!1),
        r.Ue.Screen.Ju.ld(!0),
        this.bookViewer.bookInfo.LT() ? (this.AT(this.JD), r.Ue.jd.qd.nf.ed(!1)) : (this.AT(this.qD), r.Ue.jd.Nf.ed(null, !1));
        const s = document.getElementsByName('deleteButton'),
        e = s.length;
        for (let t = 0; t < e; t++) s[t].style.visibility = 'hidden';
        this.bookViewer.status == h.w.yf &&
        (window.event ? window.event.cancelBubble = !0 : t.cancelBubble = !0);
        const n = this.bookViewer.zP();
        n[0] >= this.bookViewer.currentLayoutData.end ||
        n[1] >= this.bookViewer.currentLayoutData.end ||
        this.bookViewer.disablePageUIEventMoment(),
        this.bookViewer.status = h.w.Fw,
        this.adjustTrialFooter();
        const o = r.Ue.Ed.zu().getContext('2d');
        a.Vs.hn(o),
        this.bookViewer.VP = this.bookViewer.get_currentPageNum(),
        this.bookViewer.$P = 0,
        i ||
        this.sv(!1)
      }
      kT() {
        r.Ue.jd.qd.tf(this.bookViewer.bookInfo.bT()),
        r.Ue.jd.Nf.ed(!0),
        this.bookViewer.status = h.w.Lf
      }
      closeAllMenu() {
        this.kT(),
        this.closeMenu(void 0)
      }
      kD(t) {
        this.bookViewer.isEventLock ||
        (
          l.cancelTapEvent(),
          this.kT(),
          this.DT(),
          r.Ue.jd.qd.Qd(r.Ue.jd.qd.Jd.if, '設定'),
          r.Ue.jd.Nf.ed(!1),
          (this.bookViewer.BT() || this.bookViewer.getType() == E.ds.un.En) &&
          r.Ue.ze.aI.TR(),
          r.Ue.ze.ed(!0),
          r.Ue.Screen.Ju.ld(!1),
          this.bookViewer.status = h.w.yf,
          this.CT(),
          this.bookViewer.ST(),
          t &&
          t.stopPropagation()
        )
      }
      mD(t) {
        if (!this.bookViewer.isEventLock) switch (l.cancelTapEvent(), this.bookViewer.status) {
          case h.w.Lf:
            if (
              this.closeMenu(t, !0),
              this.bookViewer.NT(),
              i.OK.MT &&
              !0 !== i.OK.MT()
            ) return;
            O.ev();
            break;
          case h.w.Xw:
            this.kT();
            break;
          case h.w.yf:
            this.closeMenu(t),
            c.Ee.NO &&
            !this.eT ||
            (
              this.eT = !1,
              this.bookViewer.xT = null,
              this.bookViewer.GT = null,
              this.bookViewer.VT(!1, !0)
            )
        }
      }
      vD(t) {
        if (!this.bookViewer.isEventLock) if (
          l.cancelTapEvent(),
          this.closeMenu(t),
          this.bookViewer.NT(),
          this.bookViewer.is_reflowable_page()
        ) {
          const t = this.bookViewer.Os.WT(),
          i = this.bookViewer.Os.$T();
          this.bookViewer.KT(t, i) ? this.bookViewer.UT(t, i) : (
            this.bookViewer.FT = t,
            this.bookViewer.XT = i,
            this.showLoader(),
            this.bookViewer.cv(this.bookViewer.av(null)).then(t => {
              null != t &&
              this.bookViewer.lv(t)
            })
          )
        } else this.bookViewer.movePage(this.bookViewer.zT())
      }
      dummyLayerClick() {
        this.bookViewer.isEventLock ||
        this.bookViewer.status != h.w.Lf &&
        this.bookViewer.status != h.w.Xw ||
        (
          this.closeAllMenu(),
          r.Ue.jd.Nf.ed(null, !1),
          r.Ue.jd.Nf.KE.YE('10px')
        )
      }
      AT(t) {
        const s = r.Ue.jd.qd.nf.zu();
        t == this.qD &&
        (
          s.title = '購入',
          s.src = './image/btnBuy.png',
          s.onclick = () => {
            i.sf.DoTrackerEventPush('BuyViaMenu'),
            this.btnBuyEvent(!0)
          }
        )
      }
      btnBuyEvent(t) {
        l.cancelTapEvent(),
        void 0 !== i.sf.ALLOW_DOMAIN ? this.bookViewer.purchase_url &&
        (
          void 0 === t ||
          null == t ||
          !t ||
          (
            (t, i) => {
              const s = /https?:\/\/([^/]*)/.exec(t);
              return s &&
              2 === s.length &&
              s[1] === i
            }
          ) (this.bookViewer.purchase_url, i.sf.ALLOW_DOMAIN) ? location.href = this.bookViewer.purchase_url : s.zs.onError(
            e.js.errorCode.L_,
            'menu.js#btnBuyEvent',
            '許可されていないサイトへのアクセスです。 ' + this.bookViewer.purchase_url
          )
        ) : location.href = this.bookViewer.bookInfo.hasPurchaseUrl() ? this.bookViewer.bookInfo.HT() : this.bookViewer.purchase_url
      }
      jT() {
        this.bookViewer.isEventLock ||
        (l.cancelTapEvent(), i.sf.openAppScheme())
      }
      CT() {
        r.Ue.jd.qd.af.bf(this.bookViewer.status)
      }
      qT(t) {
        if (this.bookViewer.JT) {
          const i = window.innerWidth,
          s = document.body.clientWidth;
          this.bookViewer.currentLayoutData.YT(t + 1) ? (r.Ue.jd.Nf.Mf.Uf.Yf.EE(!0), r.Ue.jd.Nf.Mf.Kf(i, s, !0)) : this.bookViewer.get_currentLayoutMode() == e.js.qn.VERTICAL ? (
            r.Ue.jd.Nf.Mf.Uf.Yf.EE(!1),
            n.E.Rw() &&
            r.Ue.jd.Nf.Mf.Uf.Yf.remove(),
            r.Ue.jd.Nf.Mf.Uf.rE.remove(),
            this.bookViewer &&
            n.E.pw() &&
            r.Ue.jd.Nf.Mf.Uf.qf(),
            r.Ue.jd.Nf.Mf.Kf(i, s, !1)
          ) : (
            r.Ue.jd.Nf.Mf.Uf.Yf.EE(!1),
            r.Ue.jd.Nf.Mf.Uf.rE.remove(),
            this.bookViewer &&
            n.E.pw() &&
            r.Ue.jd.Nf.Mf.Uf.qf(),
            r.Ue.jd.Nf.Mf.Kf(i, s, !1)
          ),
          this.ZT(),
          this.QT()
        }
        this.tb(this.bookViewer.currentLayoutData.end),
        this.ib(1);
        const i = this.bookViewer.bookInfo.gT();
        r.Ue.jd.Nf.Mf.Ff.NE.VE(i),
        this.bookViewer.JT ? (
          this.wT(this.bookViewer.currentLayoutData.start),
          this.bookViewer.get_currentLayoutMode() != e.js.qn.VERTICAL ? r.Ue.Id.bd(!i) : r.Ue.Id.Ld()
        ) : this.updateMoveBar(),
        this.ET(this.bookViewer.get_currentPageNum()),
        this.bookViewer.JT = !1
      }
      sb() {
        const t = this.bookViewer.bookInfo.gT();
        this.bookViewer.get_currentLayoutMode() != e.js.qn.VERTICAL ? r.Ue.Id.bd(!t) : r.Ue.Id.Ld()
      }
      tb(t) {
        r.Ue.jd.Nf.Mf.Ff.NE.zu().max = `${ t }`
      }
      ib(t) {
        r.Ue.jd.Nf.Mf.Ff.NE.zu().min = `${ t }`
      }
      wT(t) {
        r.Ue.jd.Nf.Mf.Ff.NE.zu().value = `${ t }`
      }
      updateMoveBar() {
        const t = this.bookViewer.zP(),
        i = r.Ue.jd.Nf.Mf.Ff.NE.zu(),
        s = parseInt(i.value);
        t[0] != s &&
        (this.wT(t[0]), this.ET(t[0]))
      }
      ET(t) {
        const i = r.Ue.jd.Nf.Mf.Ff.NE.zu(),
        s = parseInt(i.min, 10) ||
        0,
        e = parseInt(i.max, 10) ||
        100,
        n = (parseInt(i.value, 10) - s) / (e - s) * 100;
        i.style.setProperty('--background-size', `${ n }%`);
        const o = `<span class='pagenum_background'>${ t }/${ this.bookViewer.currentLayoutData.end }</span>`;
        r.Ue.jd.Nf.Mf.$f.set(o)
      }
      CD(t) {
        if (!this.bookViewer.isEventLock) {
          if (l.cancelTapEvent(), c.Ee.NO && !n.E.Rw()) {
            const t = this.bookViewer.zoomScaleInfo.eb();
            this.bookViewer.zoomScaleInfo.toggle();
            const i = this.bookViewer.zoomScaleInfo.index;
            i == N.XD ? this.bookViewer.zoomScaleInfo.setIndex(N.zD) : this.bookViewer.zoomScaleInfo.setIndex(i);
            const s = this.bookViewer.zoomScaleInfo.eb(),
            n = window.scrollX,
            h = window.scrollY,
            a = document.documentElement.clientWidth / 2,
            c = document.documentElement.clientHeight / 2,
            l = (n + a) * (s / t) - a,
            _ = (h + c) * (s / t) - c;
            o.Ys.FO(e.js.Wo, `scroll to (${ l }, ${ _ })`),
            1 == s ? (
              window.scroll({
                left: Math.max(0, l),
                top: Math.max(0, _)
              }),
              window.setTimeout(() => {
                r.Ue.Nd.zu().style.transform = ''
              }, 0)
            ) : s >= t ? (
              r.Ue.Nd.zu().style.transform = `scale(${ s })`,
              window.scroll({
                left: Math.max(0, l),
                top: Math.max(0, _)
              })
            ) : (
              window.scroll({
                left: Math.max(0, l),
                top: Math.max(0, _)
              }),
              window.setTimeout(() => {
                r.Ue.Nd.zu().style.transform = `scale(${ s })`
              }, 0)
            ),
            this.bookViewer.pinchMgr.init(),
            this.bookViewer.nb()
          } else {
            this.bookViewer.enableTouch &&
            (
              this.bookViewer.pinchModeEnd(!0),
              this.bookViewer.pinchMgr.pinchCnt = 0,
              this.bookViewer.pinchMgr.pinchEndFlg = !1,
              this.bookViewer.oldScaleInfo.init(),
              this.bookViewer.pinchMgr.resetPinchOffsetY()
            );
            const t = a.Vs.jO();
            this.bookViewer.ob(t.width / 2, t.height / 2, !1)
          }
          t &&
          t.stopPropagation()
        }
      }
      rb(t) {
        if (1 == r.Ue.ze.RR.Fe().length) return;
        let i = t.toFixed(),
        s = !1;
        const e = r.Ue.ze.RR.bR(0),
        n = r.Ue.ze.RR.bR(1),
        o = r.Ue.ze.RR.bR(2),
        h = r.Ue.ze.RR.bR(3),
        a = r.Ue.ze.RR.bR(4);
        if (
          e &&
          e.value == t &&
          (
            n ? (i = n.id, s = !0) : o ? (i = o.id, s = !0) : h ? (i = h.id, s = !0) : a &&
            (i = a.id, s = !0)
          ),
          n &&
          n.value == t &&
          (
            o ? (i = o.id, s = !0) : h ? (i = h.id, s = !0) : a ? (i = a.id, s = !0) : e &&
            (i = e.id, s = !0)
          ),
          o &&
          o.value == t &&
          (
            h ? (i = h.id, s = !0) : a ? (i = a.id, s = !0) : e ? (i = e.id, s = !0) : n &&
            (i = n.id, s = !0)
          ),
          h &&
          h.value == t &&
          (
            a ? (i = a.id, s = !0) : e ? (i = e.id, s = !0) : n ? (i = n.id, s = !0) : o &&
            (i = o.id, s = !0)
          ),
          a &&
          a.value == t &&
          (
            e ? (i = e.id, s = !0) : n ? (i = n.id, s = !0) : o ? (i = o.id, s = !0) : h &&
            (i = h.id, s = !0)
          ),
          s
        ) {
          const t = i,
          s = r.Ue.Vu(t);
          s.selected = !0,
          this.pT('#textSize select', '#innerSize'),
          this.changeSize(s.parentElement)
        }
        return s
      }
      hb() {
        r.Ue.ze.ug.Ig(t.ip),
        r.Ue.ze.ug.wg(t.tp);
        const i = n.E.ae() ||
        n.E.he() ? w.Fu.ju.fR.OR._I.RI.EI : w.Fu.ju.fR.OR._I.gI.II,
        s = {
          size: _.Kp('size', r.Ue.ze.RR.wR()),
          color: _.Kp('color', r.Ue.ze.Xe.wR()),
          tts: _.Kp('tts', r.Ue.ze.VR.wR()),
          ab: _.Kp('writing', r.Ue.ze.zR.tI(0)),
          cb: _.Kp('vertical', r.Ue.ze.mI.tI(1)),
          sheet: _.Kp('sheet', r.Ue.ze.xI.tI(1)),
          animation: _.Kp('animation', r.Ue.ze.YI.tI(0)),
          lb: _.Kp('webfont', i)
        },
        e = s.size,
        o = r.Ue.ze.RR.Fe();
        for (let t = 0; t < o.length; t++) if (o.options[t].id == e) {
          o.options[t].selected = !0,
          this.pT('#textSize select', '#innerSize');
          break
        }
        this.YD = e;
        const h = s.color,
        a = r.Ue.ze.Xe.Fe();
        for (let t = 0; t < a.length; t++) if (a.options[t].id == h) {
          a.options[t].selected = !0,
          this.pT('#bookColor select', '#innerColor');
          break
        }
        this.ZD = h;
        const l = s.tts,
        u = r.Ue.ze.VR.Fe();
        for (let t = 0; t < u.length; t++) if (u.options[t].id == l) {
          u.options[t].selected = !0,
          this.pT('#ttsSpeed select', '#innerTtsSpeed');
          break
        }
        this.QD = l,
        b.kP(parseInt(l, 10));
        const d = s.ab;
        r.Ue.Mu(d).checked = !0,
        d == r.Ue.ze.zR.tI(1) &&
        r.Ue.ze.zR.rI(1);
        const f = s.lb;
        r.Ue.Mu(f).checked = !0,
        f == w.Fu.ju.fR.OR._I.RI.EI ? (r.Ue.ze.aI.rI(0), c.Ee.fe = !0) : c.Ee.fe = !1;
        const E = s.cb;
        r.Ue.Mu(E).checked = !0;
        const R = E == r.Ue.ze.mI.tI(0);
        R &&
        (r.Ue.ze.mI.rI(0), this.WD(r.Ue.ze.mI.qR(0)));
        const I = s.sheet;
        r.Ue.Mu(I).checked = !0,
        I == r.Ue.ze.xI.tI(0) &&
        (R || r.Ue.ze.xI.rI(0));
        const g = s.animation;
        r.Ue.Mu(g).checked = !0,
        g == r.Ue.ze.YI.tI(1) &&
        (R || r.Ue.ze.YI.rI(1), c.Ee.MO = !1)
      }
      changeSize(t) {
        _.Xp('size', t.options[t.selectedIndex].id, 30),
        this.YD = t.options[t.selectedIndex].id
      }
      changeColor(t) {
        _.Xp('color', t.options[t.selectedIndex].id, 30),
        this.ZD = t.options[t.selectedIndex].id
      }
      changeTtsSpeed(t) {
        this.QD = t.options[t.selectedIndex].id,
        b.kP(parseInt(this.QD)),
        _.Xp('tts', this.QD, 30)
      }
      GD(t) {
        _.Xp('writing', t.id, 30);
        const i = t.id;
        i == r.Ue.ze.zR.tI(0) ? r.Ue.ze.zR.rI(0) : i == r.Ue.ze.zR.tI(1) &&
        r.Ue.ze.zR.rI(1)
      }
      VD(t) {
        _.Xp('webfont', t.id, 30);
        const i = t.id;
        i == r.Ue.ze.aI.tI(0) ? (r.Ue.ze.aI.pI(0) && p.Tv(), r.Ue.ze.aI.rI(0)) : i == r.Ue.ze.aI.tI(1) &&
        r.Ue.ze.aI.rI(1)
      }
      WD(t) {
        if (_.Xp('vertical', t.id, 30), r.Ue.ze.mI.isDisabled(1)) return;
        const i = t.id;
        if ('71' == i) r.Ue.ze.mI.rI(0),
        r.Ue.ze.xI.TR(),
        r.Ue.ze.YI.TR(),
        r.Ue.Screen.qu(e.Fn.Lu);
         else if ('72' == i) {
          r.Ue.ze.mI.rI(1);
          const t = r.Ue.ze.xI.JI();
          0 != t &&
          1 != t ||
          r.Ue.ze.xI.qI(t);
          const i = r.Ue.ze.YI.JI();
          0 != i &&
          1 != i ||
          r.Ue.ze.YI.qI(i)
        }
      }
      $D(t) {
        for (
          _.Xp('sheet', t.id, 30),
          this.bookViewer.lookAheadTextImage.length = 0;
          l._p.length > 0;
        ) {
          const t = l._p.shift();
          window.clearTimeout(t)
        }
        const i = this.bookViewer._b;
        let s;
        if (
          s = this.bookViewer.ub ? e.js.qn.VERTICAL : i == e.js.zn.Hn ? e.js.qn.Jn : this.bookViewer.fb() ? e.js.qn.Yn : e.js.qn.Zn,
          this.bookViewer.Eb(s),
          a.Vs.Dw(),
          !r.Ue.ze.xI.isDisabled(0)
        ) {
          const i = t.id;
          '41' == i ? r.Ue.ze.xI.rI(0) : '42' == i &&
          r.Ue.ze.xI.rI(1)
        }
      }
      KD(t) {
        _.Xp('animation', t.id, 30);
        const i = t.id;
        '51' == i ? (r.Ue.ze.YI.rI(0), c.Ee.MO = !0) : '52' == i &&
        (r.Ue.ze.YI.rI(1), c.Ee.MO = !1)
      }
      UD() {
        l.cancelTapEvent(),
        _.zp(),
        this.Rb.selected = !0,
        this.Ib.selected = !0;
        const t = !r.Ue.ze.VR.isDisabled();
        t &&
        (this.gb.selected = !0),
        r.Ue.ze.zR.isDisabled(0) ||
        (r.Ue.ze.zR.oI(0), r.Ue.ze.zR.rI(0)),
        r.Ue.ze.mI.oI(1),
        r.Ue.ze.mI.isDisabled(1) ||
        r.Ue.ze.mI.rI(1),
        r.Ue.ze.xI.oI(1),
        r.Ue.ze.xI.isDisabled(0) ||
        r.Ue.ze.xI.rI(1),
        r.Ue.ze.YI.oI(0),
        r.Ue.ze.YI.isDisabled(0) ||
        r.Ue.ze.YI.rI(0),
        c.Ee.MO = !0,
        n.E.ae() ||
        n.E.he() ? (r.Ue.ze.aI.oI(0), r.Ue.ze.aI.rI(0)) : (r.Ue.ze.aI.oI(1), r.Ue.ze.aI.rI(1)),
        (this.bookViewer.BT() || this.bookViewer.getType() == E.ds.un.En) &&
        r.Ue.ze.aI.TR(),
        this.WD(r.Ue.ze.mI.CI()),
        r.Ue.jd.Nf.Mf.Uf.CE.AE(!1),
        this.bookViewer.BT() ||
        (this.eT = !0),
        this.$D(r.Ue.ze.xI.CI()),
        this.pT('#textSize select', '#innerSize'),
        this.pT('#bookColor select', '#innerColor'),
        t &&
        this.pT('#ttsSpeed select', '#innerTtsSpeed'),
        b.kP(parseInt('2'))
      }
      Ob(t) {
        const i = [
          '最小　',
          '小　　',
          '中　　',
          '大　　',
          '最大　'
        ],
        s = r.Ue.ze.RR.Fe();
        s.length = 0;
        let e = t;
        e.sort((t, i) => t < i ? - 1 : t > i ? 1 : 0),
        e = o.Ys.unique(e);
        const n = e.length;
        if (n <= 2) for (let t = 0; t < n; t++) s.length++,
        s.options[t].id = (13 + t).toFixed(),
        s.options[t].text = i[2 + t],
        s.options[t].value = e[t];
         else if (n <= 4) for (let t = 0; t < n; t++) s.length++,
        s.options[t].id = (12 + t).toFixed(),
        s.options[t].text = i[1 + t],
        s.options[t].value = e[t];
         else for (let t = 0; t < 5; t++) s.length++,
        s.options[t].id = (15 - t).toFixed(),
        s.options[t].text = i[4 - t],
        s.options[t].value = e[n - t - 1];
        let h = 0;
        for (let t = 0; t < s.length; t++) s.options[t].id == this.YD &&
        (s.options[t].selected = !0, h = 1);
        for (let t = 0; t < s.length; t++) if ('13' == s.options[t].id) {
          0 == h &&
          (s.options[t].selected = !0),
          this.Rb = s.options[t];
          break
        }
        1 == n &&
        (s.options[0].text = '', r.Ue.ze.RR.TR()),
        this.pT('#textSize select', '#innerSize')
      }
      wb(t) {
        const i = [
          'ノーマル　',
          'ソフト　　',
          'ナイト　　'
        ],
        s = [
          'normal',
          'soft',
          'night'
        ],
        e = r.Ue.ze.Xe.Fe();
        e.length = 0;
        const n = t.length;
        let o = 0;
        for (let r = 0; r < n; r++) t[r] &&
        (
          e.length++,
          e.options[o].id = (20 + r + 1).toFixed(),
          e.options[o].value = s[r],
          e.options[o].text = i[r],
          o++
        );
        1 == e.length &&
        (e.options[0].text = '', r.Ue.ze.Xe.TR());
        let h = 0;
        for (let t = 0; t < e.length; t++) e.options[t].id == this.ZD &&
        (e.options[t].selected = !0, h = 1);
        0 == h &&
        (e.options[0].selected = !0),
        this.Ib = e.options[0],
        this.pT('#bookColor select', '#innerColor')
      }
      mb() {
        const t = r.Ue.ze.VR.Fe();
        this.gb = t.options[1]
      }
      vb(t) {
        t[0] &&
        !t[1] &&
        (r.Ue.ze.zR.oI(0), r.Ue.ze.zR.rI( - 1), r.Ue.ze.zR.TR()),
        !t[0] &&
        t[1] &&
        (r.Ue.ze.zR.oI(1), r.Ue.ze.zR.rI( - 1), r.Ue.ze.zR.TR())
      }
      Pb(t, i) {
        const s = r.Ue.Hf.zu();
        for (; s.firstChild; ) s.removeChild(s.firstChild);
        const e = document.createElement('button');
        e.type = 'button';
        const n = document.createElement('img');
        n.src = './image/btnPagejump.png';
        for (let o = 0; o < t.length && parseInt(t[o].page) <= i; o++) {
          let r = '';
          r = 0 == o ? 'topList' : o == t.length - 1 ||
          i < parseInt(t[o + 1].page) ? 'finishList' : `middleList${ o }`;
          const h = e.cloneNode();
          h.id = r,
          h.addEventListener(
            'click',
            i => (
              B.cancelTapEvent(),
              B.selectPageFromMokuji(i, parseInt(t[o].page, 10)),
              !1
            )
          );
          const a = n.cloneNode();
          a.id = `imgList${ o }`,
          h.append(t[o].title, a),
          s.append(h)
        }
      }
      LD(t) {
        this.bookViewer.isEventLock ||
        (
          l.cancelTapEvent(),
          this.kT(),
          this.DT(),
          r.Ue.jd.qd.Qd(r.Ue.jd.qd.Jd.rf, '目次'),
          r.Ue.jd.Nf.ed(!1),
          r.Ue.ze.ed(!1),
          r.Ue.Screen.Ju.ld(!1),
          r.Ue.Hf.ed(!0),
          this.bookViewer.status = h.w.yf,
          this.CT(),
          t &&
          t.stopPropagation()
        )
      }
      AD(t) {
        this.bookViewer.isEventLock ||
        (
          l.cancelTapEvent(),
          this.bookViewer.Db = a.Vs.jO(),
          r.Ue.jd.qd.Qd(
            r.Ue.jd.qd.Jd.hf,
            '<div id=\'searchArea\'><input type=\'image\' id=\'searchBtn\' src=\'./image/btnSearchText.png\' onclick=\'searchLeft()\'/><div id=\'searchChangeWidth\'><input type=\'text\' id=\'searchText\' value=\'\' maxlength=\'128\' onfocus=\'focusTextArea()\'/></div><input type=\'image\' id=\'clearBtn\' src=\'./image/btnClearText.png\' onclick=\'clearText()\'/></div>'
          ),
          this.bookViewer.status = h.w.Xw,
          r.Ue.jd.Nf.ed(null, !1),
          r.Ue.jd.Nf.KE.YE('10px'),
          this.FP = '',
          this.bookViewer.VP = this.bookViewer.get_currentPageNum(),
          this.bookViewer.$P = 0,
          t &&
          t.stopPropagation()
        )
      }
      focusTextArea() {
        this.bookViewer.hasFocus = !0
      }
      clearText() {
        if (this.bookViewer.isEventLock) return;
        r.Ue.jd.qd.If.Pf();
        const t = r.Ue.Ed.zu().getContext('2d');
        a.Vs.hn(t),
        this.bookViewer.VP = this.bookViewer.get_currentPageNum(),
        this.bookViewer.$P = 0,
        this.FP = ''
      }
      PD() {
        if (this.bookViewer.isEventLock) return;
        const t = r.Ue.jd.qd.If.vf();
        this.Tb(t)
      }
      Tb(t, i) {
        i &&
        (this.bookViewer.KP = !0),
        this.bookViewer.VP ||
        (this.bookViewer.VP = this.bookViewer.get_currentPageNum()),
        this.bookViewer.bookInfo.gT() ? (this.bookViewer.$P -= 1, L.XP(this.bookViewer, t, void 0)) : (
          this.bookViewer.$P += 1,
          L.GP(this.bookViewer, t, void 0, void 0, void 0)
        ),
        i &&
        (this.bookViewer.KP = !1)
      }
      DD() {
        if (this.bookViewer.isEventLock) return;
        const t = r.Ue.jd.qd.If.vf();
        this.bb(t)
      }
      bb(t, i) {
        i &&
        (this.bookViewer.KP = !0),
        this.bookViewer.VP ||
        (this.bookViewer.VP = this.bookViewer.get_currentPageNum()),
        this.bookViewer.bookInfo.gT() ? (
          this.bookViewer.$P += 1,
          L.GP(this.bookViewer, t, void 0, void 0, void 0)
        ) : (this.bookViewer.$P -= 1, L.XP(this.bookViewer, t, void 0)),
        i &&
        (this.bookViewer.KP = !1)
      }
      Wg(t) {
        const i = document.createElement('div');
        i.classList.add(`${ r.Ue.Uu.Wg }`),
        i.style.opacity = '0';
        const s = document.createElement('div');
        s.classList.add(`${ r.Ue.Uu.message }`),
        s.textContent = t,
        i.appendChild(s),
        document.body.appendChild(i),
        i.style.display = 'inline-block',
        i.style.position = 'fixed',
        i.style.zIndex = '99999',
        i.style.width = '100%',
        i.style.bottom = '2em',
        i.style.top = '50%',
        i.style.left = '50%',
        s.style.display = 'inline-block',
        s.style.position = 'absolute',
        s.style.marginLeft = '-120px',
        s.style.paddingLeft = '15px',
        s.style.paddingRight = '15px',
        s.style.paddingTop = '7px',
        s.style.paddingBottom = '7px',
        s.style.borderRadius = '5px',
        s.style.background = '#E6E6E6';
        const e = 'ease',
        n = 3200;
        i.animate(
          [{
            easing: e,
            opacity: 0
          },
          {
            easing: e,
            opacity: 1,
            offset: 0.1875
          },
          {
            easing: e,
            opacity: 1,
            offset: 0.8125
          },
          {
            easing: e,
            opacity: 0
          }
          ],
          {
            delay: 100,
            duration: n
          }
        ).addEventListener('finish', () => {
          i.remove()
        })
      }
      SD(t) {
        this.bookViewer.isEventLock ||
        (
          l.cancelTapEvent(),
          window.open(i.sf.MENU_HELP_URL),
          t &&
          t.stopPropagation()
        )
      }
      BD(t) {
        this.bookViewer.isEventLock ||
        (l.cancelTapEvent(), b.BP(), t && t.stopPropagation())
      }
      doDisableTts() {
        b.CP()
      }
      ND(t) {
        this.bookViewer.isEventLock ||
        (l.cancelTapEvent(), this.yb(), t && t.stopPropagation())
      }
      ZT() {
        this.Lb() ? (
          i.OK.Ab ||
          r.Ue.jd.Nf.Mf.Uf.Qf.remove(),
          document.addEventListener('fullscreenchange', () => this.Cb(), !1),
          document.addEventListener(
            'visibilitychange',
            () => {
              !1 === document.hidden &&
              document.fullscreenElement &&
              this.Cb()
            }
          )
        ) : r.Ue.jd.Nf.Mf.Uf.TE.remove()
      }
      Lb() {
        return !!document.documentElement.requestFullscreen
      }
      yb() {
        document.fullscreenElement ? this.exitFullscreen() : this.kb()
      }
      Cb() {
        if (
          1 == $('#finishDialog').dialog('isOpen') &&
          $('#finishDialog').dialog('close'),
          this.Lb()
        ) {
          let t;
          t = !!document.fullscreenElement,
          r.Ue.jd.Nf.Mf.Uf.TE.AE(t),
          window.setTimeout(() => {
            a.Vs.yw(),
            this.bookViewer.Bb()
          }, 600)
        }
      }
      kb() {
        const t = document.documentElement;
        t.requestFullscreen &&
        t.requestFullscreen()
      }
      exitFullscreen() {
        document.exitFullscreen &&
        document.exitFullscreen()
      }
      QT() {
        this.bookViewer.BT() ||
        this.bookViewer.getType() != E.ds.un.En ? r.Ue.jd.Nf.Mf.Uf.CE.remove() : this.bookViewer.get_currentLayoutMode() == e.js.qn.VERTICAL ? r.Ue.jd.Nf.Mf.Uf.CE.AE(!0) : r.Ue.jd.Nf.Mf.Uf.CE.AE(!1)
      }
      xD(t) {
        if (this.bookViewer.isEventLock) return;
        l.cancelTapEvent(),
        _.Kp('vertical', r.Ue.ze.mI.tI(1)) == r.Ue.ze.mI.tI(0) ? (
          r.Ue.Mu(r.Ue.ze.mI.tI(0)).checked = !1,
          r.Ue.Mu(r.Ue.ze.mI.tI(1)).checked = !0,
          r.Ue.ze.mI.rI(1),
          this.WD(r.Ue.ze.mI.qR(1)),
          r.Ue.jd.Nf.Mf.Uf.CE.AE(!1)
        ) : (
          r.Ue.Mu(r.Ue.ze.mI.tI(0)).checked = !0,
          r.Ue.Mu(r.Ue.ze.mI.tI(1)).checked = !1,
          r.Ue.ze.mI.rI(0),
          this.WD(r.Ue.ze.mI.qR(0)),
          r.Ue.jd.Nf.Mf.Uf.CE.AE(!0)
        ),
        this.bookViewer.xT = null,
        this.bookViewer.GT = null;
        let i = this;
        this.bookViewer.VT(!1).then(t => {
          i.sb(),
          this.bookViewer.Bb()
        }),
        this.closeAllMenu(),
        t &&
        t.stopPropagation()
      }
      adjustTrialFooter() {
        if (this.sT) return;
        const t = window.innerWidth,
        i = window.innerHeight;
        t < 320 ? r.Ue.jd.Nf.KE.ed(!1) : r.Ue.jd.Nf.KE.ed(!0);
        let s = this.tT,
        e = this.iT,
        n = 10,
        o = 10;
        this.bookViewer.status == h.w.Lf &&
        (n = 60, o = t <= 600 ? 110 : 57);
        const a = r.Ue.jd.Nf.KE.jE().clientWidth + 20 + 25,
        c = 10 + n + o,
        l = (t - a) / s,
        _ = (i - c) / e,
        u = r.Ue.jd.Nf.KE.FE();
        l <= _ ? (
          l < 1 &&
          (s = t - a, e *= l),
          u.style.width = `${ s }px`,
          u.style.height = `${ e }px`
        ) : (
          _ < 1 &&
          (s *= _, e = i - c),
          u.style.width = `${ s }px`,
          u.style.height = `${ e }px`
        );
        const d = s + a - 25,
        f = e + c - n - o,
        E = t - d - 25,
        R = r.Ue.jd.Nf.KE.zu();
        R.style.width = `${ d }px`,
        R.style.height = `${ f }px`,
        R.style.bottom = `${ o }px`,
        R.style.left = `${ E }px`
      }
      yD(t) {
        this.bookViewer.isEventLock ||
        (
          l.cancelTapEvent(),
          r.Ue.jd.Nf.KE.ed(!1),
          this.sT = !0,
          window.event ? window.event.cancelBubble = !0 : t.cancelBubble = !0
        )
      }
      bD(t) {
        this.bookViewer.isEventLock ||
        (
          l.cancelTapEvent(),
          i.sf.DoTrackerEventPush('FirstPop'),
          location.href = i.sf.OPENING_POP_LINK_URL,
          window.event ? window.event.cancelBubble = !0 : t.cancelBubble = !0
        )
      }
      TD() {
        if ('' == i.sf.OPENING_POP_LINK_URL) r.Ue.jd.Nf.KE.ed(!1),
        this.sT = !0;
         else {
          this.sT = !1,
          r.Ue.jd.Nf.KE.ed(!0);
          const t = r.Ue.jd.Nf.KE.FE();
          t.style.width = '',
          t.style.height = '',
          this.tT = t.clientWidth,
          this.iT = t.clientHeight,
          this.adjustTrialFooter()
        }
      }
    };
    document.addEventListener('DOMContentLoaded', () => {
      M.init()
    }),
    i.Uw.onClick_btn_BuyEvent = t => M.btnBuyEvent(t),
    i.Uw.get_Cookie1 = (t, i) => _.Kp(t, i),
    i.Uw.onload_OpeningPopImage = () => M.TD();
    var x = __webpack_require__(1821);
    class G {
      constructor() {
        this.init()
      }
      init() {
        this.Mw = {
          height: 0,
          width: 0
        },
        this.Nw = [],
        this.Sw = [],
        this.Ts = !1
      }
      clear() {
        for (let t = this.Sw.length, i = 0; i < t; i++) this.Sw[i] &&
        x.rn.release(this.Sw[i]);
        this.init()
      }
      Sb(t, i, s) {
        let e,
        n,
        o,
        r;
        const h = this.Nb(t, i);
        e = ~~(parseInt('1000000', 10) / h.Mb.height);
        const a = parseInt('16', 10),
        c = 1 + ~~((h.Mb.height - a - 1) / (e - a));
        e = ~~(e / a) * a;
        for (let s = 0; s < c; s++) {
          n = s * (e - a),
          o = x.rn.on(),
          o.width = h.Mb.width,
          o.height = s == c - 1 ? h.Mb.height - n : e,
          r = o.getContext('2d');
          for (let s = 0; s < i; s++) {
            if (h.xb[s] + h.Gb[s] <= n) continue;
            if (n + o.height <= h.xb[s]) continue;
            const e = h.xb[s],
            a = e + h.Gb[s];
            if (a <= n) continue;
            if (n + o.height <= e) continue;
            let c,
            l;
            e < n ? (c = n - e, l = 0) : (c = 0, l = e - n);
            const _ = Math.min(a - n, o.height) - l;
            for (let e = s * i, n = 0; n < i; e++, n++) r.drawImage(t[e], 0, c, h.Vb[n], _, h.Wb[n], l, h.Vb[n], _)
          }
          r = void 0,
          this.Sw.push(o),
          this.Nw.push(n)
        }
        this.Mw = {
          height: h.Mb.height,
          width: h.Mb.width
        },
        this.Ts = s
      }
      Nb(t, i) {
        const s = [],
        e = [],
        n = [],
        o = [],
        r = {
          width: 0,
          height: 0
        };
        for (let n = 0; n < i; n++) s[n] = t[n].naturalWidth ||
        t[n].width,
        e[n] = r.width,
        r.width += s[n];
        for (let s = t.length, e = 0, h = 0; h < s; e++, h += i) n[e] = t[h].naturalHeight ||
        t[h].height,
        o[e] = r.height,
        r.height += n[e];
        return {
          Mb: r,
          Vb: s,
          Wb: e,
          Gb: n,
          xb: o
        }
      }
      changeColor(t, i) {
        if (t && i) {
          const s = parseInt('0x' + t.substr(1, 2), 16),
          e = parseInt('0x' + t.substr(3, 2), 16),
          n = parseInt('0x' + t.substr(5, 2), 16),
          o = parseInt('0x' + i.substr(1, 2), 16),
          r = parseInt('0x' + i.substr(3, 2), 16),
          h = parseInt('0x' + i.substr(5, 2), 16);
          for (let t = this.Sw.length, i = 0; i < t; i++) {
            let t = this.Sw[i],
            a = t.getContext('2d');
            const c = a.getImageData(0, 0, t.width, t.height),
            l = c.data,
            _ = a.createImageData(c),
            u = _.data;
            let d = !1;
            for (let t = c.data.length, i = 0; i < t; i += 4) {
              if (l[i + 1] !== l[i] || l[i + 2] !== l[i]) {
                d = !0;
                break
              }
              switch (l[i]) {
                case 0:
                  u[i] = o,
                  u[i + 1] = r,
                  u[i + 2] = h;
                  break;
                case 255:
                  u[i] = s,
                  u[i + 1] = e,
                  u[i + 2] = n;
                  break;
                default:
                  u[i] = Math.floor((o * (255 - l[i]) + s * l[i]) / 255),
                  u[i + 1] = Math.floor((r * (255 - l[i]) + e * l[i]) / 255),
                  u[i + 2] = Math.floor((h * (255 - l[i]) + n * l[i]) / 255)
              }
              u[i + 3] = l[i + 3]
            }
            !1 === d &&
            a.putImageData(_, 0, 0),
            a = void 0,
            t = void 0
          }
        }
      }
    }
    var V = __webpack_require__(5184);
    class W {
      constructor(t) {
        this.id = t,
        this.url = null
      }
      $b() {
        this.url = null
      }
      Hd() {
        return this.id
      }
      Kb(t) {
        return null != t &&
        (this.url = t, !0)
      }
      getUrl() {
        return this.url
      }
    }
    class K {
    }
    K.Ub = 0,
    K.Fb = 1,
    K.Xb = 0,
    K.zb = 1,
    K.Hb = 2,
    K.jb = 3,
    K.qb = 4,
    K.Jb = 5,
    K.Yb = 0,
    K.Zb = 5,
    K.Qb = [
      !1,
      !0,
      !0,
      !0,
      !0,
      !0
    ],
    K.ty = [
      !1,
      !1,
      !1,
      !1,
      !0,
      !1
    ],
    K.iy = [
      !1,
      !1,
      !1,
      !1,
      !1,
      !0
    ];
    class U {
      constructor(t, i, s) {
        this.sy = i,
        this.ey = t[i],
        this.ny = t.p ? t.p : null,
        this.oy = s,
        this.hy = null,
        this.ly = null,
        this._y = null
      }
      uy() {
        const t = this.ey.split(','),
        i = t.length,
        s = new Array(i);
        s[0] = parseInt(t[0], 10),
        s[1] = parseInt(t[1], 10);
        for (let e = 2; e < i; e++) s[e] = parseInt(t[e], 10) + s[e - 1] - s[e - 2];
        switch (this.sy) {
          case 's':
            this.ly = s.pop(),
            this._y = s.pop();
            break;
          case 'i':
            this._y = s.length;
            break;
          default:
            throw new TypeError('Invalid kind "' + this.sy + '"')
        }
        this.hy = new Array(this._y);
        for (let t = 1, i = 0; i < this._y; t += 2, i += 1) this._y <= t &&
        (t = 0),
        this.hy[s[i] - 1] = t
      }
      Ey() {
        return this.ey
      }
      Ry() {
        return this.ny
      }
      Iy(t) {
        switch (this.sy) {
          case 's':
            return this.gy(t, t => t.ly).replace(/\t/g, '},{').replace(/([{,])([a-z_]+):/g, '$1"$2":');
          case 'i':
            return this.gy(t, i => Math.floor(t.length / i._y));
          default:
            throw new TypeError('Invalid kind "' + this.sy + '"')
        }
      }
      gy(t, i) {
        if (!this.oy.Oy()) return t;
        this.hy ||
        this.uy();
        const s = i(this);
        let e = '';
        for (let i = 0; i < this._y; i++) e += t.substr(s * this.hy[i], s);
        return e += t.substring(s * this._y, t.length),
        e
      }
    }
    class F {
      constructor(t) {
        if (this.wy = '0' === t || 0 === t ? 0 : ~~t || - 1, this.wy < K.Yb || K.Zb < this.wy) throw new TypeError(`Invalid version number ${ t }`)
      }
      py() {
        return this.wy
      }
      Oy() {
        return K.Qb[this.wy]
      }
      vy() {
        return K.ty[this.wy]
      }
      Py() {
        return K.iy[this.wy]
      }
      Ps() {
        return this.vy() ||
        this.Py()
      }
    }
    class X {
      constructor(t, i, s, e) {
        if (t) {
          this.oy = new F(s),
          this.Dy = ~~e,
          this.Ty = t.length,
          this.by = new Array(this.Ty);
          for (let s = 0; s < this.Ty; s++) this.by[s] = new U(t[s], i, this.oy)
        } else this.oy = new F(K.Xb),
        this.Dy = K.Ub,
        this.Ty = 0,
        this.by = []
      }
      yy() {
        return this.oy
      }
      Ly() {
        return this.Dy
      }
      Ay() {
        return this.Ty
      }
      getItem(t) {
        return 'number' == typeof t ? this.by[t] : null
      }
      Cy(t) {
        if (this.by) for (let i = 0; i < this.Ty; i++) if (t <= this.by[i].Ry()) return this.by[i];
        return null
      }
    }
    class z {
      constructor(t) {
        this.ky = new X(t.h, 's', t.l, t.c),
        this.By = new X(t.a, 'i', t.v, K.Ub)
      }
      Sy() {
        return this.ky
      }
      Cs() {
        return this.By
      }
      Ps() {
        return this.By.yy().Ps()
      }
    }
    class H {
      constructor(t) {
        this.contents_info = t.contents_info,
        this.Ny = t.display_setting_info,
        this.My(),
        this.contents_info.contents_id.startsWith('Webtoon') &&
        this.Ny.forEach(t => {
          t.direction = E.ds.Un.VERTICAL
        })
      }
      My() {
        for (let t = 0; t < this.display_setting_info.length; t++) {
          const i = this.display_setting_info[t];
          null != i.contents_info_id &&
          isNaN(i.contents_info_id) &&
          (i.contents_info_id = parseInt(i.contents_info_id, 10)),
          null != i.char_size &&
          isNaN(i.char_size) &&
          (i.char_size = parseInt(i.char_size, 10)),
          null != i.i_height &&
          isNaN(i.i_height) &&
          (i.i_height = parseInt(i.i_height, 10)),
          null != i.i_width &&
          isNaN(i.i_width) &&
          (i.i_width = parseInt(i.i_width, 10)),
          null != i.direction &&
          isNaN(i.direction) &&
          (i.direction = parseInt(i.direction, 10)),
          i.d &&
          (i.d = new z(i.d))
        }
      }
      get display_setting_info() {
        return this.Ny
      }
      get xy() {
        return this.Ny[this.Gy]
      }
      Vy() {
        return this.xy
      }
      gT() {
        return this.xy.direction == E.ds.Un.ln
      }
      Wy() {
        return this.xy.direction == E.ds.Un.cn
      }
      BT() {
        return this.xy.direction == E.ds.Un.VERTICAL
      }
      get writing_mode() {
        return this.xy.writing_mode
      }
      get layout_url() {
        return this.xy.layout_url
      }
      get char_size() {
        return this.xy.char_size
      }
      get i_width() {
        return this.xy.i_width
      }
      get i_height() {
        return this.xy.i_height
      }
      get sample_ratio() {
        return this.xy.sample_ratio
      }
      get d() {
        return this.xy.d
      }
      $y() {
        return this.contents_info.option_info
      }
      hasPurchaseUrl() {
        return void 0 !== this.contents_info.purchase_url
      }
      HT() {
        return this.contents_info.purchase_url
      }
      bT() {
        return this.contents_info.title
      }
      get scheme() {
        return this.contents_info.scheme
      }
      LT() {
        return this.contents_info.possession
      }
      Ky() {
        return this.contents_info.tts === E.ds.Wn.$n
      }
      Uy(t, i) {
        let s;
        const e = this.display_setting_info.length,
        n = [];
        let o;
        if (0 == e) return - 1;
        if ('0' == t || 'undefined' == t) {
          for (s = 0; s < e; s++) {
            const t = this.display_setting_info[s].i_height * this.display_setting_info[s].i_width;
            n.push({
              index: s,
              Fy: t
            })
          }
          n.sort((t, i) => {
            const s = t.Fy,
            e = i.Fy;
            return s == e ? 0 : s > e ? - 1 : 1
          });
          const t = 1960000;
          for (o = n[e - 1].index, s = 0; s < e; s++) if (t >= n[s].Fy) {
            o = n[s].index;
            break
          }
          if (this.LT()) {
            if (
              - 1 == this.display_setting_info[o].sample_ratio.indexOf(':sample')
            ) return o
          } else if ('0%' != this.display_setting_info[o].sample_ratio) return o
        } else for (s = 0; s < e; s++) if (
          this.display_setting_info[s].char_size == parseInt(t, 10) &&
          this.display_setting_info[s].writing_mode == i
        ) if (this.LT()) {
          if (
            - 1 == this.display_setting_info[s].sample_ratio.indexOf(':sample')
          ) return s
        } else if ('0%' != this.display_setting_info[s].sample_ratio) return s;
        return - 1
      }
      VT(t, i) {
        this.Gy = this.Uy(t, i),
        - 1 == this.Gy &&
        (this.Gy = this.Uy('2', E.ds.ye.mn), - 1 == this.Gy && (this.Gy = 0))
      }
    }
    var j = function (t, i, s, e) {
      return new (s || (s = Promise)) (
        (
          function (n, o) {
            function r(t) {
              try {
                a(e.next(t))
              } catch (t) {
                o(t)
              }
            }
            function h(t) {
              try {
                a(e.throw(t))
              } catch (t) {
                o(t)
              }
            }
            function a(t) {
              var i;
              t.done ? n(t.value) : (i = t.value, i instanceof s ? i : new s((function (t) {
                t(i)
              }))).then(r, h)
            }
            a((e = e.apply(t, i || [])).next())
          }
        )
      )
    };
    class q {
      constructor(t) {
        this.Xy = t
      }
      decode() {
        return new Promise(
          t => {
            const i = this.Xy.zy.length;
            this.Xy.images = new Array(i),
            void 0 === this.Xy.retry &&
            (this.Xy.retry = 10);
            const s = [];
            for (let t = 0; t < i; t++) s.push(this.Hy(t, this.Xy.retry));
            Promise.all(s).then(() => {
              this.jy(10).then(i => {
                t(i)
              })
            })
          }
        )
      }
      Hy(t, i) {
        return new Promise(
          s => {
            let e = this.Xy.zy[t];
            const n = x.rn.SO();
            n.onload = () => j(this, void 0, void 0, (function * () {
              yield this.qy(n, t),
              s()
            })),
            n.onerror = () => j(this, void 0, void 0, (function * () {
              yield this.Jy(n, t, i),
              s()
            }));
            const o = window.URL ||
            window.webkitURL ||
            null;
            if (o && o.createObjectURL) {
              const t = e.match(/^data:(image\/[a-z]*);base64,(.*)$/);
              if (t) {
                const i = atob(t[2]),
                s = i.length,
                n = new Uint8Array(s);
                for (let t = 0; t < s; t++) n[t] = i.charCodeAt(t);
                const r = n.buffer;
                e = o.createObjectURL(new Blob([r], {
                  type: t[1]
                }))
              }
            }
            n.src = e
          }
        )
      }
      qy(t, i) {
        return new Promise(
          s => {
            t instanceof Image ||
            o.Ys.FO(e.js.$o, 'onLoadImage: type mismatch.'),
            t.onload = void 0,
            t.onerror = void 0,
            this.Xy.images[i] = t,
            s()
          }
        )
      }
      jy(t) {
        return new Promise(
          i => {
            for (let n = this.Xy.images.length, o = 0; o < n; o++) if (
              0 === this.Xy.images[o].naturalWidth ||
              0 === this.Xy.images[o].naturalHeight
            ) return void (
              0 < (t -= 1) ? window.setTimeout(
                () => {
                  (
                    () => {
                      j(this, void 0, void 0, (function * () {
                        const s = yield this.jy(t);
                        i(s)
                      }))
                    }
                  ) ()
                },
                100
              ) : s.zs.onError(e.js.errorCode.Da, 'onImageComplete', 'timeout')
            );
            const n = new G;
            n.Sb(this.Xy.images, this.Xy.Yy, this.Xy.Ts);
            let o = window.URL ||
            window.webkitURL ||
            null;
            o &&
            !o.revokeObjectURL &&
            (o = null);
            for (let t = this.Xy.images.length, i = 0; i < t; i++) x.rn.release(this.Xy.images[i]);
            this.Xy.images = void 0,
            this.Xy.zy = void 0,
            i(n)
          }
        )
      }
      Jy(t, i, n) {
        return new Promise(
          o => {
            if (!(t instanceof Image)) return void s.zs.onError(e.js.errorCode.va, 'onErrorImage', 'type mismatch');
            let r = window.URL ||
            window.webkitURL ||
            null;
            r &&
            !r.revokeObjectURL &&
            (r = null),
            x.rn.release(t),
            0 < (n -= 1) ? window.setTimeout(
              () => {
                (
                  () => {
                    j(this, void 0, void 0, (function * () {
                      yield this.Hy(i, n),
                      o()
                    }))
                  }
                ) ()
              },
              0
            ) : s.zs.onError(e.js.errorCode.Pa, 'onLoadImage', 'Image decode error')
          }
        )
      }
    }
    class J {
      static Zy(t, i, s) {
        return {
          Qy: ~~(t.naturalWidth / i) + (t.naturalWidth % i > 0 ? 1 : 0),
          tL: ~~(t.naturalHeight / s) + (t.naturalHeight % s > 0 ? 1 : 0),
          iL: i,
          sL: s,
          eL: i,
          nL: s
        }
      }
      static oL(t, i, s) {
        const e = J.rL(t.naturalWidth, i, 16),
        n = J.rL(t.naturalHeight, s, 16);
        return {
          Qy: i,
          tL: s,
          iL: J.hL(t.naturalWidth - e * (i - 2), 16),
          sL: J.hL(t.naturalHeight - n * (s - 2), 16),
          eL: e,
          nL: n
        }
      }
      static aL(t, i, s, e) {
        switch (t) {
          case 0:
          default:
            return null;
          case 1:
          case 2:
            return J.Zy(i, s, e);
          case 3:
            return J.oL(i, s, e)
        }
      }
      static cL(t, i, s, e, n) {
        const o = x.rn.on();
        o.width = t.naturalWidth,
        o.height = t.naturalHeight;
        let r = o.getContext('2d');
        r.globalCompositeOperation = 'copy',
        r.imageSmoothingEnabled = !0;
        const h = i.split(','),
        a = h.length,
        c = new Array(a);
        c[0] = parseInt(h[0], 10),
        c[1] = parseInt(h[1], 10);
        for (let t = 2; t < a; t++) c[t] = parseInt(h[t], 10) + c[t - 1] - c[t - 2];
        const l = J.aL(s, t, c[a - 2], c[a - 1]);
        if (!l) return;
        const _ = [],
        u = [],
        d = l.Qy - 1;
        for (let i = 0; i <= d; i++) _[i] = 0 === i ? 0 : _[i - 1] + u[i - 1],
        u[i] = 0 === i ? l.iL : i < d ? l.eL : t.naturalWidth - _[i];
        const f = [],
        E = [],
        R = l.tL - 1;
        for (let i = 0; i <= R; i++) f[i] = 0 === i ? 0 : f[i - 1] + E[i - 1],
        E[i] = 0 === i ? l.sL : i < R ? l.nL : t.naturalHeight - f[i];
        const I = ~~((a - 2) / 2);
        for (let i = 0; i < a - 2; i++) {
          const s = i < I ? 2 * (i + 1) : 2 * (i - I) + 1,
          e = (s - 1) % l.Qy,
          n = ~~((s - 1) / l.Qy),
          o = c[i],
          h = (o - 1) % l.Qy,
          a = ~~((o - 1) / l.Qy);
          r.save(),
          r.beginPath(),
          r.rect(_[h], f[a], u[h], E[a]),
          r.clip(),
          r.drawImage(t, _[e], f[n], u[e], E[n], _[h], f[a], u[h], E[a]),
          r.restore()
        }
        let g = 0,
        O = 0;
        if (e) {
          g = ~~(e.naturalHeight / (l.tL + l.tL - 2));
          for (let t = 1; t < l.tL; t++) r.save(),
          r.beginPath(),
          r.rect(0, f[t] - g, o.width, 2 * g),
          r.clip(),
          r.drawImage(e, 0, (t + t - 2) * g, o.width, 2 * g, 0, f[t] - g, o.width, 2 * g),
          r.restore()
        }
        if (n) {
          O = ~~(n.naturalWidth / (l.Qy + l.Qy - 2));
          let t = 0,
          i = 0;
          for (let s = 0; s < l.tL; s++) {
            i += t;
            const e = 0 === s ? 0 : f[s] + g;
            t = E[s] - (0 === s || s == l.tL - 1 ? 1 : 2) * g;
            for (let s = 1; s < l.Qy; s++) r.save(),
            r.beginPath(),
            r.rect(_[s] - O, e, 2 * O, t),
            r.clip(),
            r.drawImage(n, (s + s - 2) * O, i, 2 * O, t, _[s] - O, e, 2 * O, t),
            r.restore()
          }
        }
        return r = void 0,
        o
      }
      static rL(t, i, s) {
        const e = ~~((t - s - 1) / ((i - 2) * s)) * s,
        n = ~~(J.lL(~~(t * (i - 2) / i), s * (i - 2)) / (i - 2));
        return n <= e ? n : e
      }
      static hL(t, i) {
        const s = ~~(t / 2);
        return J.lL(s, i)
      }
      static lL(t, i) {
        const s = ~~(t / i);
        return 0 == s ? i : t % i > ~~(i / 2) ? (s + 1) * i : s * i
      }
      static _L(t, i) {
        const s = [],
        e = i.Ey().split(','),
        n = e.length,
        o = new Array(n);
        o[0] = parseInt(e[0], 10),
        o[1] = parseInt(e[1], 10);
        for (let t = 2; t < n; t++) o[t] = parseInt(e[t], 10) + o[t - 1] - o[t - 2];
        const r = ~~((n - 2) / 2);
        for (let i = 0; i < n - 2; i++) {
          const e = i < r ? 2 * (i + 1) : 2 * (i - r) + 1;
          s[o[i] - 1] = t[e - 1]
        }
        return s
      }
    }
    var Y = function (t, i, s, e) {
      return new (s || (s = Promise)) (
        (
          function (n, o) {
            function r(t) {
              try {
                a(e.next(t))
              } catch (t) {
                o(t)
              }
            }
            function h(t) {
              try {
                a(e.throw(t))
              } catch (t) {
                o(t)
              }
            }
            function a(t) {
              var i;
              t.done ? n(t.value) : (i = t.value, i instanceof s ? i : new s((function (t) {
                t(i)
              }))).then(r, h)
            }
            a((e = e.apply(t, i || [])).next())
          }
        )
      )
    };
    class Z {
      init() {
        this.uL = {},
        this.dL = {}
      }
      fL(t) {
        let i = this.uL[t.fileName];
        i ? i.page.indexOf(t.Vm) < 0 &&
        i.page.push(t.Vm) : (
          i = {
            fileName: t.fileName,
            bs: t.bs,
            EL: t.EL,
            RL: t.RL,
            IL: t.IL,
            page: [
              t.Vm
            ]
          },
          this.uL[t.fileName] = i
        )
      }
      gL(t) {
        let i;
        const s = [],
        e = t.h ||
        '';
        for (let n = 0; n < t.d.length; n++) i = e + t.d[n],
        s.push(i);
        return s
      }
      OL(t, i) {
        return Y(
          this,
          void 0,
          void 0,
          (
            function * () {
              const n = this.uL[i];
              if (!n) return void s.zs.onError(e.js.errorCode.mc, 'pushRequest', 'request is illegal');
              if (this.dL[i]) return;
              this.dL[i] = i;
              const o = n,
              r = t.wL;
              let h;
              h = 0 <= o.fileName.indexOf('#') ? o.bs + '/' + encodeURIComponent(o.fileName) : o.bs + '/' + o.fileName,
              h = t.pL(h);
              const a = yield R.Pm(h, r);
              if (null == a.error) {
                const i = a.value;
                let s,
                e;
                const n = t.vs().Cs();
                let r;
                o.EL ? (
                  r = o.IL ? n.getItem(o.IL.m) : n.Cy(o.page[0]),
                  e = JSON.parse(r.Iy(i))
                ) : e = i,
                o.RL ? (
                  r = o.IL ? n.getItem(o.IL.m) : n.Cy(o.page[0]),
                  s = r ? J._L(this.gL(e), r) : this.gL(e)
                ) : s = this.gL(e);
                const h = e.c;
                return delete this.dL[o.fileName],
                {
                  mL: s,
                  Yy: h
                }
              }
              'parsererror' != a.error.im ? s.zs.onError(a.error.errorCode, a.error.tm, a.error.im) : console.log(a.error.errorCode, '画像データ取得', a.error.im)
            }
          )
        )
      }
      static vL(t) {
        return new q(t).decode()
      }
    }
    var Q = function (t, i, s, e) {
      return new (s || (s = Promise)) (
        (
          function (n, o) {
            function r(t) {
              try {
                a(e.next(t))
              } catch (t) {
                o(t)
              }
            }
            function h(t) {
              try {
                a(e.throw(t))
              } catch (t) {
                o(t)
              }
            }
            function a(t) {
              var i;
              t.done ? n(t.value) : (i = t.value, i instanceof s ? i : new s((function (t) {
                t(i)
              }))).then(r, h)
            }
            a((e = e.apply(t, i || [])).next())
          }
        )
      )
    };
    class tt {
      constructor(t) {
        this.PL = t.name,
        this.DL = t.fontdata,
        this.TL = t.formats ||
        tt.bL,
        this.yL = this.TL.length,
        this.LL = t.id,
        this.AL = t.testString ||
        'BESbswyI',
        this.CL = t.interval ||
        100,
        this.kL = t.maxtimes ||
        50,
        this.BL = 'AdobeBlank' === t.name,
        this.SL = !1,
        this.NL = !1,
        this.ML = !1
      }
      xL() {
        if (this.SL) return !1;
        const t = `fontcss-${ this.LL }`;
        let i = document.getElementById(t);
        if (
          this.NL &&
          i &&
          (
            document.getElementsByTagName('head') [0].removeChild(i),
            i = null
          ),
          i
        ) return !0;
        this.SL = !0;
        let s = `@font-face{font-family: "${ this.PL }"; `;
        if (this.DL) {
          const t = [];
          let i = 'embedded-opentype';
          this.DL[i] &&
          (s += `url('${ this.DL[i] }'); `);
          for (let s = 0; s < this.yL; s++) i = this.TL[s],
          this.DL[i] &&
          t.push(`url('${ this.DL[i] }${ tt.GL[i] ||
          '' }') format('${ i }')`);
          s += 'src: ' + t.join(', ') + ';'
        }
        s += ' font-weight: normal; font-style: normal; }';
        const e = document.createElement('style');
        e.id = t;
        const n = document.createTextNode(s);
        return e.appendChild(n),
        document.head.appendChild(e),
        !0
      }
      VL() {
        let t = !0;
        const i = `testcanvas-${ this.LL }`;
        let s = document.getElementById(i);
        s ||
        (
          s = x.rn.on(),
          s.id = i,
          s.width = 64,
          s.height = 16,
          s.style.visibility = 'hidden',
          s.style.width = '64px',
          s.style.height = '16px',
          document.body.appendChild(s)
        );
        let e = s.getContext('2d');
        const n = '16px ' + (this.BL ? '' : '"' + this.PL + '",') + '"AdobeBlank"';
        e.font = n,
        e.fillStyle = 'rgb(0,0,0)',
        e.fillRect(0, 0, 64, 16),
        e.fillStyle = 'rgb(255,255,255)',
        e.fillText(this.AL, 0, 0, 64);
        const o = e.getImageData(0, 0, 64, 16);
        for (let i = 0; i < 4096; i += 4) if (0 !== o.data[i] || 0 !== o.data[i + 1] || 0 !== o.data[i + 2]) {
          t = !1;
          break
        }
        return e = void 0,
        {
          element: s,
          WL: t
        }
      }
      $L() {
        if (!this.ML) {
          const t = this.VL();
          (this.BL && t.WL || !this.BL && !t.WL) &&
          (document.body.removeChild(t.element), this.ML = !0, this.NL = !1)
        }
        return this.ML
      }
      KL() {
        return this.SL
      }
      UL() {
        return this.NL
      }
      FL(t) {
        return Q(
          this,
          void 0,
          void 0,
          (
            function * () {
              return new Promise(
                i => {
                  this.$L() ? (this.SL = !1, i(!0)) : t < this.kL ? (
                    t += 1,
                    window.setTimeout(() => {
                      this.FL(t).then(t => {
                        i(t)
                      })
                    }, this.CL)
                  ) : (this.SL = !1, this.NL = !0, i(!1))
                }
              )
            }
          )
        )
      }
      load() {
        return Q(
          this,
          void 0,
          void 0,
          (
            function * () {
              return this.xL() ? (yield this.FL(0)) ? {
                XL: !1,
                zL: !0
              }
               : {
                XL: !1,
                zL: !1
              }
               : {
                XL: !0
              }
            }
          )
        )
      }
    }
    tt.bL = [
      'embedded-opentype',
      'woff2',
      'woff',
      'opentype',
      'truetype',
      'svg'
    ],
    tt.GL = {
      HL: '?#iefix',
      jL: '#webfont'
    };
    class it {
      constructor(t) {
        this.qL = 1,
        this.JL = 0,
        this.YL = 0,
        this.SL = !1,
        this.ML = !1,
        this.ZL = {},
        this.QL = [],
        this.TL = t ||
        tt.bL,
        this.tA = new tt({
          name: 'AdobeBlank',
          fontdata: {
            woff: './font/AdobeBlank.woff',
            iA: './font/AdobeBlank.otf'
          },
          formats: [
            'woff',
            'opentype'
          ],
          interval: 400,
          maxtimes: 50,
          id: 0
        })
      }
      add(t) {
        const i = {};
        if (!this.ZL[t.name]) {
          Object.assign(i, t),
          i.formats = this.TL,
          i.id = this.qL;
          const s = new tt(i);
          this.ZL[t.name] = s,
          this.QL.push(s),
          this.qL += 1,
          this.ML = !1
        }
        return this
      }
      sA() {
        return !this.SL &&
        0 < this.QL.length
      }
      $L(t) {
        return t ? !!this.ZL[t] &&
        this.ZL[t].$L() : this.ML &&
        0 === this.YL
      }
      load() {
        return Q(
          this,
          void 0,
          void 0,
          (
            function * () {
              if (this.SL || this.ML) return {
                eA: !1
              };
              this.SL = !0;
              const t = yield this.tA.load();
              if (t.XL) return {
                eA: !1
              };
              if (t.zL) {
                const t = [];
                return this.QL.forEach(i => {
                  t.push(i.load())
                }),
                this.QL = [],
                (yield Promise.all(t)).forEach(t => {
                  t.XL ||
                  (t.zL ? this.JL += 1 : this.YL += 1)
                }),
                this.SL = !1,
                this.ML = !0,
                {
                  eA: !0,
                  nA: 0 === this.YL
                }
              }
              return {
                eA: !1
              }
            }
          )
        )
      }
    }
    class st {
      init(t, i) {
        this.count = 0,
        this.oA = t,
        this.rA = '',
        this.hA = i
      }
      aA(t) {
        let i = '',
        s = [],
        e = '';
        for (let n = 0; n < t.length; n++) {
          const o = t[n];
          if ('c' === o.k) {
            if (o.n && (e = o.n), !(o.u && 0 <= e.indexOf(this.hA))) continue;
            if (i = o.u, this.cA()) break;
            s = this.lA(i),
            this._A(s)
          }
        }
      }
      lA(t) {
        let i = 0,
        s = '';
        const e = [];
        for (let n = 0; n < ~~(t.length / 4); n++) {
          s = t.slice(i, i + 4);
          const n = parseInt(s, 16);
          55296 <= n &&
          n <= 56319 ? (s.concat(',', t.slice(i + 4, i + 8)), i += 8) : i += 4,
          e.push(s)
        }
        return e
      }
      _A(t) {
        for (let i = 0; i < t.length; i++) {
          const s = t[i].split(','),
          e = parseInt(s[0], 16);
          let n = '';
          if (null != s[1]) {
            const t = parseInt(s[1], 16);
            n = String.fromCharCode(e, t)
          } else n = String.fromCharCode(e);
          n &&
          !this.cA() &&
          (this.rA = this.rA + n, this.count++)
        }
      }
      uA() {
        return this.rA
      }
      cA() {
        return !(this.count < this.oA)
      }
    }
    class et {
      constructor() {
        this.dA = new it(void 0),
        this.Ie = !1,
        this.Oe = !1,
        this.fA = !1,
        this.EA = !1,
        this.me = !1,
        this.RA = !0,
        this.IA = {},
        this.gA = {}
      }
      OA(t, i, s) {
        const e = `@font-face{font-family: "${ t }"; src: url("${ i }"); src: url("${ i }") format("${ s }");}`,
        n = document.createElement('style');
        n.id = 'fontcss';
        const o = document.createTextNode(e);
        n.appendChild(o),
        document.head.appendChild(n)
      }
      wA() {
        for (const t in this.IA) this.pA(this.IA[t].fontdata, t)
      }
      pA(t, i) {
        let s = 'woff';
        n.E.ae() &&
        (s = 'opentype'),
        this.OA(i, t, s),
        this.mA(i)
      }
      vA(t) {
        const i = t.offsetWidth;
        return i > 0 ? (
          t.parentNode.removeChild(t),
          o.Ys.FO(e.js.Wo, `checkWidth : ScrambleFont LoadEnd! width = ${ i }`),
          !0
        ) : (
          o.Ys.FO(e.js.Wo, `checkWidth : ScrambleFont Loading... width = ${ i }`),
          !1
        )
      }
      mA(t) {
        const i = document.createElement('span'),
        s = this.IA[t].PA.uA();
        '' != s ? (
          i.style.fontFamily = '"' + t + '", "AdobeBlank"',
          i.style.position = 'absolute',
          i.style.top = '-100px',
          i.appendChild(document.createTextNode(s)),
          document.body.appendChild(i),
          (
            () => {
              let s = 0;
              const e = window.setInterval(
                () => {
                  s++,
                  this.vA(i) ? (window.clearInterval(e), this.gA[t] = !0) : 50 == s &&
                  window.clearInterval(e)
                },
                200
              )
            }
          ) ()
        ) : this.gA[t] = !0
      }
      DA() {
        for (const t in this.gA) if (0 == this.gA[t]) return o.Ys.FO(
          e.js.Wo,
          `BookViewer.prototype.checkAllFontDownloaded : All ScrambleFont Loading... ${ JSON.stringify(this.gA, null, 0) }`
        ),
        !1;
        return o.Ys.FO(
          e.js.Wo,
          `BookViewer.prototype.checkAllFontDownloaded : All ScrambleFont Loaded! ${ JSON.stringify(this.gA, null, 0) }`
        ),
        !0
      }
      TA() {
        for (const t in this.IA) if (!this.IA[t].PA.cA()) return !1;
        return !0
      }
      bA(t) {
        for (const i in this.IA) this.IA[i].PA.cA() ||
        this.IA[i].PA.aA(t)
      }
      yA(t) {
        let i;
        i = t + '/../Font/YuMinPr6N-M.ebwfont',
        n.E.ae() &&
        (i = t + '/../Font/YuMinPr6N-M.ebfont'),
        this.gA.LA = !1;
        const s = new st;
        s.init(this.AA, 'BV游明朝'),
        this.IA.LA = {
          PA: s,
          fontdata: i
        }
      }
      CA(t) {
        let i;
        i = t + '/../Font/YuGoPr6N-M.ebwfont',
        n.E.ae() &&
        (i = t + '/../Font/YuGoPr6N-M.ebfont'),
        this.gA.kA = !1;
        const s = new st;
        s.init(this.AA, 'BV游ゴシック'),
        this.IA.kA = {
          PA: s,
          fontdata: i
        }
      }
      BA() {
        this.dA.add({
          name: 'v-serif',
          fontdata: {
            woff: './font/bvm_tate_min.woff',
            truetype: './font/bvm_tate_min.ttf'
          }
        }).add({
          name: 'v-sans-serif',
          fontdata: {
            woff: './font/bvg_tate_min.woff',
            truetype: './font/bvg_tate_min.ttf'
          }
        }),
        this.dA.add({
          name: 'Alfios',
          fontdata: {
            woff: './font/Alfios_R.woff',
            iA: './font/Alfios_R.otf'
          }
        }).add({
          name: 'Alfios-B',
          fontdata: {
            woff: './font/Alfios_B.woff',
            iA: './font/Alfios_B.otf'
          }
        }).add({
          name: 'Alfios-I',
          fontdata: {
            woff: './font/Alfios_I.woff',
            iA: './font/Alfios_I.otf'
          }
        }).add({
          name: 'Alfios-BI',
          fontdata: {
            woff: './font/Alfios_J.woff',
            iA: './font/Alfios_J.otf'
          }
        }).add({
          name: 'Open Sans',
          fontdata: {
            woff: './font/OpenSans-Regular.woff',
            truetype: './font/OpenSans-Regular.ttf'
          }
        }).add({
          name: 'Open Sans-B',
          fontdata: {
            woff: './font/OpenSans-Bold.woff',
            truetype: './font/OpenSans-Bold.ttf'
          }
        }).add({
          name: 'Open Sans-I',
          fontdata: {
            woff: './font/OpenSans-Italic.woff',
            truetype: './font/OpenSans-Italic.ttf'
          }
        }).add({
          name: 'Open Sans-BI',
          fontdata: {
            woff: './font/OpenSans-BoldItalic.woff',
            truetype: './font/OpenSans-BoldItalic.ttf'
          }
        }),
        r.Ue.ze.aI.nI(0) &&
        this.dA.add({
          name: 'IPAex明朝',
          fontdata: {
            woff: './font/ipaexm.woff',
            truetype: './font/ipaexm.ttf'
          },
          interval: 500,
          maxtimes: 240
        }).add({
          name: 'IPAexゴシック',
          fontdata: {
            woff: './font/ipaexg.woff',
            truetype: './font/ipaexg.ttf'
          },
          interval: 500,
          maxtimes: 240
        })
      }
      SA() {
        this.dA.$L('IPAex明朝') &&
        this.dA.$L('IPAexゴシック') &&
        (this.me = !0),
        this.dA.$L('v-serif') &&
        this.dA.$L('v-sans-serif') &&
        (this.Ie = !0),
        this.dA.$L('Alfios') &&
        this.dA.$L('Alfios-B') &&
        this.dA.$L('Alfios-I') &&
        this.dA.$L('Alfios-BI') &&
        this.dA.$L('Open Sans') &&
        this.dA.$L('Open Sans-B') &&
        this.dA.$L('Open Sans-I') &&
        this.dA.$L('Open Sans-BI') &&
        (this.Oe = !0)
      }
      load() {
        return this.dA.load()
      }
      sA() {
        return this.dA.sA()
      }
      Ae() {
        return !(!n.E.ne() && !n.E.ee())
      }
    }
    var nt = function (t, i, s, e) {
      return new (s || (s = Promise)) (
        (
          function (n, o) {
            function r(t) {
              try {
                a(e.next(t))
              } catch (t) {
                o(t)
              }
            }
            function h(t) {
              try {
                a(e.throw(t))
              } catch (t) {
                o(t)
              }
            }
            function a(t) {
              var i;
              t.done ? n(t.value) : (i = t.value, i instanceof s ? i : new s((function (t) {
                t(i)
              }))).then(r, h)
            }
            a((e = e.apply(t, i || [])).next())
          }
        )
      )
    };
    class ot {
      constructor(t) {
        this.NA = t,
        this.MA = 5
      }
      init() {
        this.set({
          Ts: !1,
          mimeType: null,
          bs: null,
          path: null,
          ys: null,
          Ls: null,
          As: null
        })
      }
      clear() {
        this.xA &&
        this.xA.clear &&
        this.xA.clear(),
        this.GA &&
        this.GA.clear &&
        this.GA.clear();
        for (const t in this) delete this[t]
      }
      set(t) {
        return nt(
          this,
          void 0,
          void 0,
          (
            function * () {
              return this.Ts = t.Ts,
              this.mimeType = t.mimeType,
              this.bs = t.bs,
              this.path = t.path,
              this.ys = t.ys,
              this.Ls = t.Ls,
              this.As = t.As,
              this.VA = null,
              this.WA = null,
              this.$A = null,
              this.xA = null,
              this.$A = null,
              this.KA = this.MA,
              this.mL = t.mL,
              this.Yy = t.Yy,
              this.GA = null,
              t.mL &&
              t.Yy ? (
                this.Ts ? yield this.UA(this.mL, t.Us, t.Ks) : yield this.UA(this.mL, null, null),
                !0
              ) : !!t.path &&
              (yield this.FA(), !0)
            }
          )
        )
      }
      FA() {
        return nt(
          this,
          void 0,
          void 0,
          (
            function * () {
              const t = [];
              this.ys &&
              !this.VA &&
              t.push(this.XA(10)),
              this.Ls &&
              !this.WA &&
              t.push(this.zA(10)),
              t.push(this.HA()),
              yield Promise.all(t)
            }
          )
        )
      }
      XA(t) {
        return new Promise(
          i => {
            this.VA = x.rn.SO(),
            this.VA.onload = () => {
              i()
            },
            this.VA.onerror = () => {
              x.rn.release(this.VA),
              this.VA = null,
              0 < t ? (--t, this.XA(t).then(() => i())) : (this.ys = null, i())
            },
            this.VA.src = (this.bs ? this.bs + '/' : '') + this.ys
          }
        )
      }
      zA(t) {
        return new Promise(
          i => {
            this.WA = x.rn.SO(),
            this.WA.onload = () => {
              i()
            },
            this.WA.onerror = () => {
              x.rn.release(this.WA),
              this.WA = null,
              0 < t ? (--t, this.zA(t).then(() => i())) : (this.Ls = null, i())
            },
            this.WA.src = (this.bs ? this.bs + '/' : '') + this.Ls
          }
        )
      }
      HA() {
        return new Promise(
          t => {
            let i = x.rn.SO();
            i.id = this.path,
            i.onload = () => {
              this.As &&
              (
                i = J.cL(
                  this.$A,
                  this.As.Ey(),
                  this.NA.vs().Cs().yy().py(),
                  this.VA,
                  this.WA
                )
              ),
              this.xA = i,
              t()
            },
            i.src = (this.bs ? this.bs + '/' : '') + this.path,
            this.$A = i
          }
        )
      }
      UA(t, i, s) {
        return nt(
          this,
          void 0,
          void 0,
          (
            function * () {
              const e = yield Z.vL({
                zy: t,
                Yy: this.Yy,
                Ts: this.Ts,
                images: []
              });
              i &&
              s &&
              e.changeColor(i, s),
              this.GA = e,
              this.xA = e
            }
          )
        )
      }
      Bs() {
        return this.xA
      }
      KL() {
        return this.$A &&
        !this.xA
      }
    }
    var rt = __webpack_require__(9701);
    class ht {
      constructor(t) {
        this.NA = t
      }
      init() {
        this.jA = new Object,
        this.qA = new Object,
        this.JA = 0
      }
      ks(t) {
        const i = t.path;
        let s = this.jA[i];
        return s ? s.KA = s.MA : (
          s = new ot(this.NA),
          s.init(),
          t.$s ? this.NA.YA.OL(this.NA, t.$s).then(i => {
            t.mL = i.mL,
            t.Yy = i.Yy,
            s.set(t).then(t => {
              t &&
              this.ZA()
            })
          }) : s.set(t).then(t => {
            t &&
            this.ZA()
          }),
          this.jA[i] = s
        ),
        s
      }
      QA(t) {
        t = t ||
        [];
        const i = Object.keys(this.jA);
        for (let s = i.length, e = 0; e < s; e++) {
          const s = i[e],
          n = this.jA[s];
          let o = !1;
          for (let i = t.length, s = 0; s < i; s++) if (t[s].tC === n) {
            o = !0;
            break
          }
          !1 === o &&
          (
            n.KA -= 1,
            n.KA <= 0 &&
            !n.KL() &&
            (this.jA[s].clear(), delete this.jA[s])
          )
        }
      }
      iC() {
        const t = Object.keys(this.jA);
        for (let i = t.length, s = 0; s < i; s++) {
          const i = t[s];
          this.jA[i].KL() ||
          delete this.jA[i]
        }
      }
      sC() {
        this.qA = new Object,
        this.JA = 0
      }
      Ws(t) {
        const i = t.draw_info.i;
        let s = this.qA[i];
        s ||
        (this.JA += 1, s = [], this.qA[i] = s);
        for (let i = s.length, e = 0; e < i; e++) if (s[e].index == t.index) return void (s[e] = t);
        s.push(t)
      }
      ZA() {
        if (this.JA -= 1, 0 < this.JA) return;
        const t = Object.keys(this.qA);
        for (let i = t.length, s = 0; s < i; s++) {
          const i = t[s],
          e = this.qA[i],
          n = this.jA[i];
          if (e && n && n.Bs()) for (let t = e.length, i = 0; i < t; i++) {
            const t = e[i];
            t &&
            rt.Es.Rs(this.NA, t)
          }
        }
        this.sC()
      }
    }
    class at {
      eC(t) {
        this.nC = t
      }
      Km() {
        return 0 !== this.nC.length
      }
      init(t) {
        this.oC = [],
        this.rC = [],
        this.ws = new ht(t),
        this.ws.init(),
        this.gs = new ht(t),
        this.gs.init(),
        this.ge = new et,
        this.nC = [],
        this.hC = []
      }
      aC(t, i, s) {
        const e = t.length;
        for (let n = 0; n < e; n++) if (null != t[n] && t[n].idx == i) return t[n].ps <= s &&
        t[n].pe >= s;
        return !1
      }
      cC(t, i, s) {
        const e = t.length;
        for (let n = 0; n < e; n++) if (null != t[n] && t[n].idx == i && t[n].ps <= s && t[n].pe >= s) return t[n].n;
        return null
      }
      Um(t) {
        if (0 === this.nC.length) return - 1;
        for (let i = 0; i < this.nC.length; i++) if (this.nC[i] === t) return i;
        return - 1
      }
      Ae() {
        return this.ge.Ae()
      }
      WT() {
        return 0 != this.oC.length ? this.oC.pop() : - 1
      }
      $T() {
        return 0 != this.rC.length ? this.rC.pop() : - 1
      }
      lC() {
        return 0 != this.oC.length
      }
      _C(t) {
        this.oC.push(t)
      }
      uC(t) {
        this.rC.push(t)
      }
    }
    var ct = function (t, i, s, e) {
      return new (s || (s = Promise)) (
        (
          function (n, o) {
            function r(t) {
              try {
                a(e.next(t))
              } catch (t) {
                o(t)
              }
            }
            function h(t) {
              try {
                a(e.throw(t))
              } catch (t) {
                o(t)
              }
            }
            function a(t) {
              var i;
              t.done ? n(t.value) : (i = t.value, i instanceof s ? i : new s((function (t) {
                t(i)
              }))).then(r, h)
            }
            a((e = e.apply(t, i || [])).next())
          }
        )
      )
    };
    class lt {
      constructor() {
        this.init()
      }
      get Vm() {
        return this.dC
      }
      init() {
        try {
          this.fC = null,
          this.EC = !1,
          this.RC = null,
          this.IC = null,
          this.$s = null,
          this.mL = null,
          this.Yy = null,
          this.GA = null,
          this.gC = {
            x: 0,
            y: 0
          },
          this.OC = {
            width: 0,
            height: 0
          },
          this.wC = null,
          this.src = '',
          this.pC = null,
          this.mC = null,
          this.dC = - 1,
          this.vC = '',
          this.PC = !1,
          this.DC = !1,
          this.TC = !1,
          this.bC = !1,
          this.yC = !1
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.wa,
            'BookViewer.PageImage.prototype.init',
            `${ t.name } : ${ t.message }`
          )
        }
      }
      LC() {
        return {
          src: this.src,
          pC: this.pC,
          mC: this.mC,
          $s: this.$s,
          position: this.gC,
          size: this.OC,
          AC: void 0,
          Vm: this.Vm,
          CC: void 0,
          bC: void 0,
          yC: void 0
        }
      }
      kC() {
        return new Promise(
          t => {
            if (!this.fC) return void s.zs.onError(e.js.errorCode.sh, 'setImageSrc', 'argument[image] is illegal');
            let i = this.fC;
            i.onload = () => {
              t(0)
            },
            i.onerror = () => {
              t( - 2)
            },
            i.src = 'about:blank',
            i.src = this.src,
            this.bC &&
            (i.width = this.OC.width, i.height = this.OC.height),
            i = null
          }
        )
      }
      BC(t) {
        this.gC = t.position,
        this.OC = t.size
      }
      SC(t, i) {
        return ct(
          this,
          void 0,
          void 0,
          (
            function * () {
              o.Ys.FO(
                e.js.Wo,
                `BookViewer.image.invoke: src = ${ i.src } width = ${ i.size.width } height = ${ i.size.height } pageNum = ${ i.Vm } lookAheadFlag = ${ String(i.CC) } scaleFlag = ${ String(i.bC) } skipfill = ${ String(i.yC) }`
              ),
              o.Ys.FO(
                e.js.Wo,
                `BookViewer.image.invoke: positionX = ${ i.position.x } positionY= ${ i.position.y }`
              ),
              this.gC = i.position,
              this.OC = i.size,
              this.src = i.src,
              this.pC = i.pC,
              this.mC = i.mC,
              this.$s ||
              this.mL ||
              this.Yy ||
              (this.$s = i.$s, this.mL = i.mL, this.Yy = i.Yy),
              this.dC = i.Vm,
              this.vC = `page${ i.Vm }`,
              this.bC = i.bC,
              this.yC = i.yC,
              i.CC ? this.TC = !0 : this.TC = !1,
              this.DC = !0,
              t.MC.NC(this.vC, this);
              let s = 0;
              if (this.PC) o.Ys.FO(e.js.Wo, 'already decoded!');
               else if (this.mL) {
                const i = yield this.xC();
                this.PC = !0,
                this.GA = i;
                const s = t.Je.jP(this.Vm);
                s.width = i.Mw.width,
                s.height = i.Mw.height
              } else s = yield this.GC();
              return s
            }
          )
        )
      }
      GC() {
        return ct(this, void 0, void 0, (function * () {
          return yield this.VC(10)
        }))
      }
      VC(t) {
        return new Promise(
          i => {
            this.pC &&
            !this.RC ? (
              this.RC = x.rn.SO(),
              this.RC.onload = () => {
                this.RC.onerror = () => {
                },
                this.GC().then(t => {
                  i(t)
                })
              },
              this.RC.onerror = () => {
                x.rn.release(this.RC),
                this.RC = null,
                0 < t ? (t -= 1, this.VC(t).then(t => {
                  i(t)
                })) : (this.pC = null, this.GC().then(t => {
                  i(t)
                }))
              },
              this.RC.src = this.pC
            ) : this.mC &&
            !this.IC ? (
              this.IC = x.rn.SO(),
              this.IC.onload = () => {
                this.IC.onerror = () => {
                },
                this.GC().then(t => {
                  i(t)
                })
              },
              this.IC.onerror = () => {
                x.rn.release(this.IC),
                this.IC = null,
                0 < t ? (t -= 1, this.VC(t).then(t => {
                  i(t)
                })) : (this.mC = null, this.GC().then(t => {
                  i(t)
                }))
              },
              this.IC.src = this.mC
            ) : this.vC &&
            (
              this.fC = null,
              this.EC = !1,
              this.fC = x.rn.SO(),
              this.kC().then(t => {
                i(t)
              })
            )
          }
        )
      }
      xC() {
        return ct(
          this,
          void 0,
          void 0,
          (
            function * () {
              return Z.vL({
                zy: this.mL,
                Yy: this.Yy,
                Ts: !1,
                images: []
              })
            }
          )
        )
      }
      WC(t) {
        if (this.EC) return;
        if (this.GA) return void (this.EC = !0);
        if (!this.fC || !this.fC.complete) return;
        let i = null;
        const n = t &&
        t.Cs().yy();
        if (n && n.Oy()) {
          const o = this.vC.substring(4, this.vC.length).split('_'),
          r = parseInt(o[0], 10);
          switch (n.py()) {
            case K.zb:
              {
                const s = t.Cs().getItem(r - 1);
                s &&
                (i = s);
                break
              }
            case K.Hb:
            case K.jb:
              for (let s = t.Cs().Ay(), e = 0; e < s; e++) {
                const s = t.Cs().getItem(e);
                if (s.Ry() >= r) {
                  i = s;
                  break
                }
              }
          }
          if (i) {
            let t = this.fC;
            this.fC = J.cL(t, i.Ey(), n.py(), this.RC, this.IC),
            this.fC !== t &&
            x.rn.release(t),
            t = null,
            this.EC = !0,
            this.RC &&
            (x.rn.release(this.RC), delete this.RC),
            this.IC &&
            (x.rn.release(this.IC), delete this.IC)
          } else s.zs.onError(e.js.errorCode.Ac, 'image describe info not found', void 0)
        } else this.EC = !0
      }
      $C() {
        return this.GA
      }
      KC() {
        return this.Yy
      }
      Bs() {
        return this.fC
      }
      UC(t, i, s) {
        this.fC = t,
        this.OC = i,
        this.gC = s
      }
      clearData() {
        this.GA &&
        (this.GA.clear(), this.GA = null),
        this.fC &&
        (x.rn.release(this.fC), delete this.fC, this.fC = null),
        this.RC &&
        (x.rn.release(this.RC), delete this.RC, this.RC = null),
        this.IC &&
        (x.rn.release(this.IC), delete this.IC, this.IC = null),
        this.$s &&
        (
          this.$s = null,
          this.Yy = null,
          this.mL &&
          (delete this.mL, this.mL = null)
        ),
        this.vC = ''
      }
      FC() {
        return this.EC
      }
      get JP() {
        return this.gC.x
      }
      get YP() {
        return this.gC.y
      }
      get Gm() {
        return {
          x: this.gC.x,
          y: this.gC.y
        }
      }
      get width() {
        return this.OC.width
      }
      get height() {
        return this.OC.height
      }
      XC() {
        return this.OC
      }
      zC(t) {
        this.gC = t
      }
      HC(t) {
        this.wC = requestAnimationFrame(t)
      }
      jC() {
        this.wC &&
        (cancelAnimationFrame(this.wC), this.wC = null)
      }
    }
    class _t {
      init() {
        this.qC = []
      }
      JC() {
      }
      jP(t) {
        return this.qC[t]
      }
      Ze(t) {
        return null != this.jP(t)
      }
      Ay() {
        return this.qC.length
      }
      qe(t) {
        const i = this.jP(t);
        if (null == i) return null;
        const s = i.qP;
        return null == s ? null : {
          Ss: s.width / i.width,
          Ns: s.height / i.height
        }
      }
      YC(t, i) {
        try {
          if (!o.Ys.UO(t, 0)) return void s.zs.onError(
            e.js.errorCode.Ya,
            'BookViewer.prototype.addPageConfig',
            'arg.pageNum is illegal'
          );
          if (!i.fC) return void s.zs.onError(
            e.js.errorCode.Za,
            'BookViewer.prototype.addPageConfig',
            'arg.image is illegal'
          );
          if (!o.Ys.UO(i.width, 0)) return void s.zs.onError(
            e.js.errorCode.Qa,
            'BookViewer.prototype.addPageConfig',
            'arg.width is illegal'
          );
          if (!o.Ys.UO(i.height, 0)) return void s.zs.onError(
            e.js.errorCode.tc,
            'BookViewer.prototype.addPageConfig',
            'arg.height is illegal'
          );
          if (!i.OT || e.Xn.ln != i.OT && e.Xn.cn != i.OT && e.Xn.NONE != i.OT) return void s.zs.onError(
            e.js.errorCode.ic,
            'BookViewer.prototype.addPageConfig',
            'arg.spread is illegal'
          );
          this.ZC(t, i)
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Il,
            'BookViewer.prototype.addPageConfig',
            o.Ys.Js(t)
          )
        }
      }
      QC(t, i) {
        try {
          if (!o.Ys.UO(t, 0)) return void s.zs.onError(
            e.js.errorCode.sc,
            'BookViewer.prototype.addPageConfig',
            'arg.pageNum is illegal'
          );
          if (!i.$s) return void s.zs.onError(
            e.js.errorCode.ec,
            'BookViewer.prototype.addPageConfig',
            'arg.jsonFileName is illegal'
          );
          if (!o.Ys.UO(i.width, 0)) return void s.zs.onError(
            e.js.errorCode.nc,
            'BookViewer.prototype.addPageConfig',
            'arg.width is illegal'
          );
          if (!o.Ys.UO(i.height, 0)) return void s.zs.onError(
            e.js.errorCode.oc,
            'BookViewer.prototype.addPageConfig',
            'arg.height is illegal'
          );
          if (!i.OT || e.Xn.ln != i.OT && e.Xn.cn != i.OT && e.Xn.NONE != i.OT) return void s.zs.onError(
            e.js.errorCode.rc,
            'BookViewer.prototype.addPageConfig',
            'arg.spread is illegal'
          );
          this.tk(t, i)
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.gl,
            'BookViewer.prototype.addPageConfigForList',
            o.Ys.Js(t)
          )
        }
      }
      ZC(t, i) {
        null == this.qC[t] &&
        (this.qC[t] = {}),
        this.qC[t] = Object.assign(
          Object.assign({
          }, this.qC[t]),
          {
            fC: i.fC,
            RC: i.RC,
            IC: i.IC,
            qP: new lt,
            width: i.width,
            height: i.height,
            OT: i.OT
          }
        )
      }
      tk(t, i) {
        null == this.qC[t] &&
        (this.qC[t] = {}),
        this.qC[t] = Object.assign(
          Object.assign({
          }, this.qC[t]),
          {
            $s: i.$s,
            qP: new lt,
            width: i.width,
            height: i.height,
            OT: i.OT
          }
        )
      }
      ik(t) {
        this.qC[t] &&
        null != this.qC[t].KA &&
        --this.qC[t].KA
      }
      sk() {
        this.qC = []
      }
      ek(t) {
        delete this.qC[t]
      }
      nk() {
        let t = 0;
        try {
          t = this.Ay() - 1
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.h_,
            'BookViewer.prototype.getTotalPageNum',
            o.Ys.Js(t)
          )
        }
        return t
      }
    }
    class ut {
      constructor() {
        this.rk = {},
        this.rk = {}
      }
      NC(t, i) {
        o.Ys.FO(e.js.Wo, `addPageImage ${ t }`),
        this.rk[t] = i;
        const s = Object.keys(this.rk);
        o.Ys.FO(e.js.Wo, `pageImage:  ${ JSON.stringify(s) }`)
      }
      hk(t) {
        return this.rk[t]
      }
      ak(t) {
        delete this.rk[t];
        const i = Object.keys(this.rk);
        o.Ys.FO(e.js.Wo, `pageImage:  ${ JSON.stringify(i) }`)
      }
      ck() {
        try {
          for (const t in this.rk) this.rk[t].DC = !1
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.vl,
            'BookViewer.prototype.downUseFlag_AllImage',
            o.Ys.Js(t)
          )
        }
      }
      lk(t) {
        for (const i in this.rk) this.rk[i].DC ||
        (o.Ys.FO(e.js.Wo, `deleteUnusedImage: ${ i }`), t._k(this.rk[i]))
      }
      uk(t) {
        o.Ys.FO(e.js.Wo, 'deleteAllImage');
        try {
          for (const i in this.rk) o.Ys.FO(e.js.Wo, `deleteAllImage: ${ i }`),
          t._k(this.rk[i])
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Tl,
            'BookViewer.prototype.deleteAllImage',
            o.Ys.Js(t)
          )
        }
      }
      dk() {
        try {
          o.Ys.FO(e.js.$o, '★★Dump Start');
          for (const t in this.rk) o.Ys.FO(
            e.js.$o,
            `★MangaImageArray[${ t }]: ${ this.rk[t].vC }: ${ String(this.rk[t].DC) }`
          );
          o.Ys.FO(e.js.$o, '★★Dump End')
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.yl,
            'BookViewer.prototype.dumpMangaImageArray',
            o.Ys.Js(t)
          )
        }
      }
    }
    var dt = __webpack_require__(1287),
    ft = function (t, i, s, e) {
      return new (s || (s = Promise)) (
        (
          function (n, o) {
            function r(t) {
              try {
                a(e.next(t))
              } catch (t) {
                o(t)
              }
            }
            function h(t) {
              try {
                a(e.throw(t))
              } catch (t) {
                o(t)
              }
            }
            function a(t) {
              var i;
              t.done ? n(t.value) : (i = t.value, i instanceof s ? i : new s((function (t) {
                t(i)
              }))).then(r, h)
            }
            a((e = e.apply(t, i || [])).next())
          }
        )
      )
    };
    class Et {
      init() {
        this.pageDragging = !1,
        this.fk = {
          x: 0,
          y: 0
        },
        this.Ek = - 1,
        this.Rk = {
          x: 0,
          y: 0
        }
      }
      setDraggingAmount(t) {
        this.Rk = t
      }
      Ik() {
        return this.Rk
      }
      gk(t) {
        this.fk = t
      }
      Ok() {
        return this.fk
      }
      wk(t) {
        this.Ek = t
      }
      pk() {
        window.clearTimeout(this.Ek)
      }
    }
    class Rt {
      init() {
        this.pinchEndFlg = !1,
        this.pinchCnt = 0,
        this.pinching = !1,
        this.pinchPaused = !1,
        this.mk = {
          x: 0,
          y: 0
        },
        this.vk = 0,
        this.pinchRateInitTop = 0,
        this.Pk = this.Dk = 0,
        this.Tk = 0
      }
      onPinchModeEnd() {
        this.pinchEndFlg = !1,
        this.pinchCnt = - 1,
        this.oldDistance = 0,
        this.oldCenterX = 0,
        this.oldCenterY = 0
      }
      bk(t) {
        this.mk = t
      }
      yk() {
        return this.mk
      }
      resetPinchOffsetY() {
        this.Tk = 0
      }
      get Lk() {
        return this.Tk
      }
      Ak(t) {
        this.Tk = t
      }
    }
    class It {
      constructor() {
        this.Ck = [],
        this.kk = []
      }
      Bk(t) {
        return t > this.end
      }
      Sk(t) {
        let i = this.page_info[t - 1];
        if (!i) for (let t = 0; t < this.page_info.length && (i = this.page_info[t], !i); t++);
        return i ? i.type : null
      }
      Nk(t) {
        let i = this.page_info[t - 1];
        if (!i) for (let t = 0; t < this.page_info.length && (i = this.page_info[t], !i); t++);
        return i ? i.sourcetype : null
      }
      YT(t) {
        const i = this.page_info[t - 1];
        return null != i &&
        i.type == E.ds.un.dn
      }
      Mk(t) {
        switch (t) {
          case E.ds.an.cn:
            return e.Xn.cn;
          case E.ds.an.ln:
            return e.Xn.ln;
          case E.ds.an._n:
          case E.ds.an.NONE:
          default:
            return e.Xn.NONE
        }
      }
      xk(t, i) {
        const s = i.length,
        e = t.bookInfo;
        for (let n = 0; n < s; n++) {
          const s = Object.assign({
            us: !1
          }, i[n]),
          o = s,
          r = s,
          h = this.Mk(s.spr),
          a = e.layout_url;
          let c,
          l = null,
          _ = null;
          s.type == E.ds.un.dn ? (s.i_p = './image/arrowLeft.png', c = s.i_p) : o.draw_info ? (
            m.ls._s(o),
            s.i_p = './image/arrowLeft.png',
            s.type = E.ds.un.dn,
            c = s.i_p
          ) : (c = a + '/' + r.i_p, r.ih && (l = a + '/' + r.ih), r.iv && (_ = a + '/' + r.iv));
          let u = e.i_width,
          d = e.i_height;
          void 0 !== r.i_w &&
          (u = r.i_w),
          void 0 !== r.i_h &&
          (d = r.i_h);
          let f = !1,
          R = !1;
          const I = e.Vy(),
          g = I.d ? I.d.Cs().yy() : null;
          if (g && g.Ps()) if (null != o.draw_info) {
            const i = o.draw_info.length;
            for (let e = 0; e < i; e++) {
              const i = o.draw_info[e];
              e > 0 &&
              !i.k &&
              (i.k = o.draw_info[e - 1].k),
              i.k != E.ds.fs.Ye &&
              i.k != E.ds.fs.Is ||
              (
                'number' == typeof i.m &&
                (g.vy() && (f = !0), g.Py() && (R = !0)),
                t.YA.fL({
                  bs: I.layout_url,
                  fileName: i.i,
                  Vm: s.n,
                  IL: i,
                  RL: f,
                  EL: R
                })
              )
            }
            t.Je.YC(s.n, {
              fC: c,
              RC: l,
              IC: _,
              width: u,
              height: d,
              OT: h
            })
          } else g.vy() &&
          (f = !0),
          g.Py() &&
          (R = !0),
          t.YA.fL({
            bs: I.layout_url,
            fileName: s.i_p,
            Vm: s.n,
            RL: f,
            EL: R,
            Gy: e.Gy
          }),
          t.Je.QC(s.n, {
            $s: s.i_p,
            width: u,
            height: d,
            OT: h
          });
           else t.Je.YC(s.n, {
            fC: c,
            RC: l,
            IC: _,
            width: u,
            height: d,
            OT: h
          })
        }
      }
      Gk(t, i) {
        isNaN(this.start) &&
        (this.start = i.start),
        isNaN(this.end) &&
        (this.end = i.end),
        this.display_setting = i.display_setting,
        this.toc_info = i.toc_info;
        const n = i.page_info.length;
        null == this.page_info &&
        (this.page_info = []);
        for (let t = 0; t < n; t++) this.page_info[i.page_info[t].n - 1] = Object.assign({
          us: !1
        }, i.page_info[t]);
        const o = t.bookInfo.sample_ratio;
        if (!t.bookInfo.LT() && o) {
          if ( - 1 != o.indexOf(':sample')) {
            const t = o.substring(0, o.indexOf(':sample'));
            if ( - 1 != t.search('%')) this.end = Math.floor(this.Vk * parseInt(t.substring(0, t.indexOf('%'))) / 100);
             else {
              const t = o.split('-');
              t[1] &&
              (this.end = parseInt(t[1]))
            }
          } else if ( - 1 != o.search('%')) this.end = Math.floor(this.Vk * parseInt(o.substring(0, o.indexOf('%'))) / 100);
           else {
            const t = o.split('-');
            t[1] &&
            (this.end = parseInt(t[1]))
          }
          if (isNaN(this.end)) return void s.zs.onError(
            e.js.errorCode.wc,
            'BookViewer.prototype.setPageData',
            'sample_ratio is illegal'
          )
        }
        this.xk(t, i.page_info)
      }
      Wk(t) {
        const i = t.split(':');
        return 1 == i.length ? {
          $s: t
        }
         : {
          $s: i[0],
          $k: parseInt(i[1], 10),
          Kk: parseInt(i[3], 10),
          startOffset: parseInt(i[4], 10),
          Uk: parseInt(i[5], 10),
          Fk: parseInt(i[6], 10),
          endOffset: parseInt(i[7], 10)
        }
      }
      Xk(t) {
        const i = t.split(',');
        this.Ck = [],
        this.kk = [],
        i.forEach(
          t => {
            const i = this.Wk(t);
            this.Ck.push(i),
            this.kk.push({
              $k: i.$k,
              Uk: i.Uk
            })
          }
        ),
        null != this.Ck[0].$k ? (
          this.start = this.Ck[0].$k,
          this.end = this.Ck[this.Ck.length - 1].Uk
        ) : (delete this.start, delete this.end)
      }
      av(t, i) {
        const n = this.Ck.length;
        let o = 0;
        if (2 <= n || 1 == n && null != this.Ck[0].$k) {
          let r = !1;
          this.end = 0,
          this.Vk = 0;
          for (let s = 0; s < n; s++) {
            const e = this.Ck[s];
            0 == r &&
            t.zk(i, e) &&
            (r = !0, o = s),
            this.end = e.Uk < this.end ? this.end : e.Uk,
            this.Vk = this.end
          }
          const h = t.bookInfo.sample_ratio;
          if (!t.bookInfo.LT() && null != h) {
            if ( - 1 != h.indexOf(':sample')) {
              const t = h.substring(0, h.indexOf(':sample'));
              if ( - 1 != t.search('%')) this.end = Math.floor(this.Vk * parseInt(t.substring(0, t.indexOf('%'))) / 100);
               else {
                const t = h.split('-');
                t[1] &&
                (this.end = parseInt(t[1]))
              }
            } else if ( - 1 != h.search('%')) this.end = Math.floor(this.Vk * parseInt(h.substring(0, h.indexOf('%'))) / 100);
             else {
              const t = h.split('-');
              t[1] &&
              (this.end = parseInt(t[1]))
            }
            if (isNaN(this.end)) return s.zs.onError(
              e.js.errorCode.Oc,
              'BookViewer.prototype.getRelUrlIndex',
              'sample_ratio is illegal'
            ),
            - 1
          }
        }
        return o
      }
    }
    class gt {
      constructor(t, i) {
        this.Hk = t,
        this.jk = i
      }
      get gT() {
        return this.jk
      }
      jP(t) {
        return this.Hk.jP(t)
      }
    }
    class Ot extends gt {
      qk(t, i) {
        const s = r.Ue.Screen.Ke.$e(),
        e = s.width,
        n = s.height;
        return 1000 * e / i.width < 1000 * n / i.height ? ~~(t * e / i.width) : ~~(t * n / i.height)
      }
      Jk(t, i) {
        try {
          const s = r.Ue.Screen.Ke.$e(),
          e = this.getImageSize(t, 1);
          return {
            x: ~~((s.width - e.width * i) / 2),
            y: ~~((s.height - 1 * e.height) / 2)
          }
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.zl,
            'BookViewer.prototype.getInitPosition',
            o.Ys.Js(t)
          )
        }
      }
      getImageSize(t, i) {
        try {
          const s = this.jP(t);
          return {
            width: this.qk(s.width, {
              width: s.width,
              height: s.height
            }) * i,
            height: ~~(this.Yk(t) + 0.5) * i
          }
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.ql,
            'BookViewer.prototype.getImageSize',
            o.Ys.Js(t)
          )
        }
      }
      Yk(t) {
        const i = this.jP(t);
        return this.qk(i.height, {
          width: i.width,
          height: i.height
        })
      }
    }
    class wt extends gt {
      Zk(t, i, s) {
        return ~~(s * t / i)
      }
      Qk() {
        try {
          return 0
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.zl,
            'BookViewer.prototype.getInitPositionX',
            o.Ys.Js(t)
          )
        }
      }
      tB() {
        try {
          return 0
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.jl,
            'BookViewer.prototype.getInitPositionY',
            o.Ys.Js(t)
          )
        }
      }
      Jk(t, i) {
        return {
          x: this.Qk(),
          y: this.tB()
        }
      }
      getImageSize(t, i) {
        try {
          const s = r.Ue.Screen.Ke.$e(),
          e = this.jP(t);
          return {
            width: this.Zk(s.width, e.width, e.width) * i,
            height: this.Zk(s.width, e.width, e.height) * i
          }
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.ql,
            'BookViewer.prototype.getImageWidthBeforeScaling',
            o.Ys.Js(t)
          )
        }
      }
    }
    class pt extends gt {
      iB(t) {
        try {
          const i = this.jP(t);
          let s = - 1,
          n = - 1;
          if (!i) return {
            left: s,
            right: n
          };
          if (i.OT == e.Xn.NONE) s = t;
           else if (i.OT == e.Xn.ln) {
            s = t;
            const i = this.gT ? t + 1 : t - 1,
            o = this.jP(i);
            o &&
            o.OT == e.Xn.cn &&
            (n = i)
          } else {
            n = t;
            const i = this.gT ? t - 1 : t + 1,
            o = this.jP(i);
            o &&
            o.OT == e.Xn.ln &&
            (s = i)
          }
          return {
            left: s,
            right: n
          }
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.o_,
            'BookViewer.prototype.getLeftPageNum',
            o.Ys.Js(t)
          )
        }
      }
      sB(t) {
        const i = this.jP(t),
        s = this.jP(t + 1);
        if (i && s) if (this.gT) {
          if (i.OT == e.Xn.ln && s.OT == e.Xn.cn) return !0
        } else if (i.OT == e.Xn.cn && s.OT == e.Xn.ln) return !0;
        return !1
      }
      eB(t) {
        const i = this.jP(t),
        s = this.jP(t - 1);
        if (i && s) if (this.gT) {
          if (i.OT == e.Xn.cn && s.OT == e.Xn.ln) return !0
        } else if (i.OT == e.Xn.ln && s.OT == e.Xn.cn) return !0;
        return !1
      }
      nB(t) {
        let i = null,
        s = null;
        const e = this.iB(t),
        n = e.left,
        o = e.right,
        r = this.jP(n),
        h = this.jP(o);
        return this.gT ? - 1 != n &&
        - 1 != o ? null != h &&
        null != r &&
        (i = h.qP, s = r.qP) : - 1 != o ? null != h &&
        (i = h.qP) : null != r &&
        (i = r.qP) : - 1 != n &&
        - 1 != o ? null != h &&
        null != r &&
        (i = r.qP, s = h.qP) : - 1 != n ? null != r &&
        (i = r.qP) : null != h &&
        (i = h.qP),
        {
          oB: i,
          sub: s
        }
      }
      qk(t, i) {
        const s = r.Ue.Screen.Ke.$e(),
        e = s.width / 2,
        n = s.height;
        return 1000 * e / i.width < 1000 * n / i.height ? ~~(t * e / i.width) : ~~(t * n / i.height)
      }
      rB(t, i) {
        const s = this.jP(i),
        e = s.width * t / s.height;
        return e < 1 ? 1 : e
      }
      Jk(t, i, n) {
        try {
          const s = r.Ue.Screen.Ke.$e(),
          e = this.hB(t),
          o = this.getImageSize(t, i),
          h = ~~((s.height - o.height) / 2);
          return null != n &&
          n.aB ? n.cB ? {
            x: ~~(s.width / 2 - o.width / 2),
            y: h
          }
           : {
            x: ~~(e - o.width),
            y: h
          }
           : {
            x: e,
            y: h
          }
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.zl,
            'BookViewer.prototype.getInitPositionX',
            o.Ys.Js(t)
          )
        }
      }
      getImageSize(t, i) {
        try {
          const s = this.jP(t),
          e = this.Yk(t),
          n = ~~(e + 0.5) * i;
          let o = 0;
          const r = this.iB(t);
          return o = - 1 != r.left &&
          - 1 != r.right ? ~~(this.rB(e, t) + 0.5) * i : this.qk(s.width, s) * i,
          {
            width: o,
            height: n
          }
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.ql,
            'BookViewer.prototype.getImageWidthBeforeScaling',
            o.Ys.Js(t)
          )
        }
      }
      hB(t) {
        const i = r.Ue.Screen.Ke.$e(),
        s = this.iB(t),
        e = s.left,
        n = s.right;
        if ( - 1 != e && - 1 != n) {
          const s = this.Yk(t),
          o = this.rB(s, e),
          r = this.rB(s, n);
          let h = ~~(o + (i.width - (o + r)) / 2 + 0.5);
          return h < 1 ? h = 1 : i.width - 1 < h &&
          (h = i.width - 1),
          h
        }
        return ~~(i.width / 2)
      }
      Yk(t) {
        const i = this.iB(t),
        s = i.left,
        e = i.right;
        if ( - 1 != s && - 1 != e) {
          const t = r.Ue.Screen.Ke.$e();
          let i,
          n;
          const o = this.jP(s),
          h = o.width,
          a = o.height,
          c = this.jP(e),
          l = c.width,
          _ = c.height;
          let u = ~~t.height;
          return a < _ ? (i = _, n = l + h * _ / a) : (i = a, n = h + l * a / _),
          i / n < t.height / t.width &&
          (u = i * t.width / n),
          u < 1 &&
          (u = 1),
          u
        }
        const n = this.jP(t);
        return this.qk(n.height, {
          width: n.width,
          height: n.height
        })
      }
    }
    class mt extends gt {
      qk(t, i) {
        const s = r.Ue.Screen.Ke.$e(),
        e = s.width,
        n = s.height;
        return 1000 * e / i.width < 1000 * n / i.height ? ~~(t * e / i.width) : ~~(t * n / i.height)
      }
      Jk(t, i) {
        try {
          return {
            x: 0,
            y: 0
          }
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.zl,
            'BookViewer.prototype.getInitPosition',
            o.Ys.Js(t)
          )
        }
      }
      getImageSize(t, i) {
        try {
          const i = this.jP(t);
          return {
            width: i.width,
            height: i.height
          }
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.ql,
            'BookViewer.prototype.getImageSize',
            o.Ys.Js(t)
          )
        }
      }
      Yk(t) {
        const i = this.jP(t);
        return this.qk(i.height, {
          width: i.width,
          height: i.height
        })
      }
    }
    class vt {
      init() {
        this.FD = vt.lB,
        this.HD = this.FD.length - 1,
        this.jD = ~~((this.HD + vt.zD) / 2),
        this.index = vt.zD
      }
      eb() {
        return this.FD[this.index]
      }
      setIndex(t) {
        0 <= t ||
        t <= this.HD ? this.index = t : this.index = vt.XD
      }
      _B() {
        return this.index
      }
      toggle() {
        this.index += 1,
        (this.index < vt.XD || this.HD < this.index) &&
        (this.index = vt.XD)
      }
    }
    vt.lB = [
      0,
      1,
      2,
      4
    ],
    vt.XD = void 0,
    vt.zD = 1;
    class Pt {
      constructor(t, i) {
        this.rect = Object.assign({
        }, t),
        this.tC = i
      }
      get size() {
        return {
          width: this.rect.width,
          height: this.rect.height
        }
      }
      uB(t) {
        let i = Object.assign({
        }, this.rect);
        return n.E.nw &&
        (
          i = {
            x: this.rect.x / n.E.rw,
            y: this.rect.y / n.E.rw,
            width: this.rect.width / n.E.rw,
            height: this.rect.height / n.E.rw
          }
        ),
        t.x > i.x &&
        t.x < i.x + i.width &&
        t.y > i.y &&
        t.y < i.y + i.height
      }
    }
    class Dt {
      init() {
        this.dB = [];
        const t = new vt;
        t.init(),
        this.fB = {
          EB: null,
          zoomScaleInfo: t,
          RB: null,
          size: {
            width: 0,
            height: 0
          },
          position: {
            x: 0,
            y: 0
          },
          IB: {
            width: 0,
            height: 0
          }
        }
      }
      RT() {
        this.dB = []
      }
      gB(t, i, s) {
        this.fB.size.width = this.fB.EB.rect.width * this.fB.zoomScaleInfo.eb(),
        this.fB.size.height = this.fB.EB.rect.height * this.fB.zoomScaleInfo.eb();
        let e = this.fB.size.width,
        n = this.fB.size.height;
        return i ? (
          e = Math.floor(this.fB.size.width / s),
          n = Math.floor(this.fB.size.height / s),
          this.fB.position.x = Math.floor((t.width - this.fB.size.width / s) / 2),
          this.fB.position.y = Math.floor((t.height - this.fB.size.height / s) / 2)
        ) : (
          this.fB.position.x = Math.floor((t.width - this.fB.size.width) / 2),
          this.fB.position.y = Math.floor((t.height - this.fB.size.height) / 2)
        ),
        this.fB.position.x < 0 &&
        (this.fB.position.x = 0),
        this.fB.position.y < 0 &&
        (this.fB.position.y = 0),
        this.fB.RB = this.fB.EB.tC.Bs(),
        {
          OB: e,
          wB: n
        }
      }
      Ms(t, i, s) {
        if (s != E.ds.fs.Ye) return;
        const e = a.Vs.jO();
        let o;
        if (
          o = n.E.nw ? {
            x: t.x / n.E.rw,
            y: t.y / n.E.rw
          }
           : {
            x: t.x,
            y: t.y
          },
          o.x < 0 ||
          o.x > e.width ||
          o.y < 0 ||
          o.y > e.height
        ) return;
        let r = this.dB.length;
        this.dB[r] = new Pt(t, i);
        for (let t = 0; t < r; t++) if (
          this.dB[t].rect.x == this.dB[r].rect.x &&
          this.dB[t].rect.y == this.dB[r].rect.y
        ) {
          this.dB.splice(t, 1),
          r--,
          t--;
          break
        }
      }
    }
    class Tt {
      init() {
        this.index = N.XD
      }
      isSet() {
        return N.zD <= this.index &&
        this.index <= N.HD
      }
      isScaled() {
        return N.zD < this.index &&
        this.index <= N.HD
      }
      eb() {
        return N.FD[this.index]
      }
      setIndex(t) {
        0 <= t ||
        t <= N.HD ? this.index = t : this.index = N.XD
      }
      toggle() {
        this.index += 1,
        (this.index < N.XD || N.HD < this.index) &&
        (this.index = N.XD)
      }
    }
    class bt {
      static pB(t) {
        return html_sanitize(t, t => t, t => t)
      }
      static mB(t) {
        const i = {};
        return (t => t.substring(1)) (t).split('&').forEach(
          t => {
            const s = t.split('=');
            i[s[0]] = bt.pB(decodeURIComponent(s[1])).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
          }
        ),
        i
      }
      static validate(t, i) {
        i.forEach(
          i => {
            t[i] ||
            s.zs.onError(e.js.errorCode.iu, 'window.onload', i + ' パラメータが必要です。')
          }
        )
      }
    }
    var yt = function (t, i, s, e) {
      return new (s || (s = Promise)) (
        (
          function (n, o) {
            function r(t) {
              try {
                a(e.next(t))
              } catch (t) {
                o(t)
              }
            }
            function h(t) {
              try {
                a(e.throw(t))
              } catch (t) {
                o(t)
              }
            }
            function a(t) {
              var i;
              t.done ? n(t.value) : (i = t.value, i instanceof s ? i : new s((function (t) {
                t(i)
              }))).then(r, h)
            }
            a((e = e.apply(t, i || [])).next())
          }
        )
      )
    };
    class Lt {
      static vB() {
        n.E.Re() ? document.body.classList.add('device-iOS') : n.E.Rw() ||
        document.body.classList.add('device-pc'),
        this.PB(),
        this.DB(),
        this.TB(),
        C.fD(),
        p.Pv()
      }
      static PB() {
        CanvasRenderingContext2D.prototype.lineDash = function (t, i, n, r) {
          try {
            const s = this;
            if (s.fillStyle = s.strokeStyle, t == n && i < r) if (s.setLineDash) s.setLineDash([1,
            1]),
            s.moveTo(t, i),
            s.lineTo(n, r),
            s.stroke();
             else {
              s.lineWidth = 0.1;
              for (let e = 0; e < r - i; e += 2) s.fillRect(t, i + e, 1, 1)
            } else if (t < n && i == r) if (s.setLineDash) s.setLineDash([1,
            1]),
            s.moveTo(t, i),
            s.lineTo(n, r),
            s.stroke();
             else {
              s.lineWidth = 0.1;
              for (let e = 0; e < n - t; e += 2) s.fillRect(t + e, i, 1, 1)
            }
          } catch (t) {
            s.zs.onError(e.js.errorCode.da, 'lineDash : ', o.Ys.Js(t))
          }
        }
      }
      static DB() {
        window.addEventListener('load', () => {
          this.bB()
        }),
        window.addEventListener('unload', () => {
          this.yB()
        }),
        n.E.Rw() ? (
          window.addEventListener(
            'orientationchange',
            () => {
              o.Ys.FO(e.js.Wo, 'onOrientationChange'),
              this.LB()
            }
          ),
          window.addEventListener(
            'resize',
            t => {
              o.Ys.FO(e.js.Wo, 'onResize'),
              this.AB(t)
            },
            {
              once: !0,
              capture: !1
            }
          )
        ) : window.addEventListener('resize', t => {
          this.AB(t)
        }, !1)
      }
      static bB() {
        return yt(
          this,
          void 0,
          void 0,
          (
            function * () {
              const t = globalThis.BV.bookViewer;
              let r = globalThis.BV.params;
              if (0 != n.E.sw) try {
                r = n.E.te() ? window.location.hash.length > 1 ? bt.mB('#' + window.location.href.split('#') [1]) : bt.mB(window.location.search) : bt.mB(window.location.hash || window.location.search),
                t.contents_id = r.cid,
                i.Uw.contentsID = r.cid,
                i.Uw.on_Error = (t, i, e) => s.zs.onError(t, i, e),
                i.Uw.get_ErrorMessage = t => o.Ys.Js(t),
                i.sf.customizePopDialog();
                let e = {
                  contentsID: i.Uw.contentsID
                };
                if (i.sf.initTracker(e), e = null, null == globalThis.BV.bookShelfUrl) {
                  const t = sessionStorage;
                  null != t &&
                  t.getItem('backupBookShelfUrl') ? (
                    globalThis.BV.bookShelfUrl = t.getItem('backupBookShelfUrl'),
                    t.removeItem('backupBookShelfUrl')
                  ) : globalThis.BV.bookShelfUrl = document.referrer
                }
                if (t.contents_id) {
                  {
                    t.nm = d().ii((new Date).toUTCString()).toString(d().F.H).substr(0, 6),
                    document.cookie = `__bvscid__=; expires=${ new Date(0).toUTCString() }`;
                    const i = (new Date).getTime(),
                    s = new Date(i + 86400000);
                    document.cookie = `__bvscid__=${ t.nm }; expires=${ s.toUTCString() }; Path=/`
                  }
                  t.CB(t.contents_id).then(i => {
                    t.kB(i)
                  })
                }
                t.BB()
              } catch (t) {
                s.zs.onError(e.js.errorCode.Bc, 'window.onload', o.Ys.Js(t))
              } else s.zs.onError(e.js.errorCode.lu, 'window.onload', 'お使いのブラウザではご利用できません。')
            }
          )
        )
      }
      static AB(t) {
        this.SB &&
        window.clearTimeout(this.SB),
        this.SB = window.setTimeout(
          () => {
            const t = globalThis.BV.bookViewer;
            try {
              if (
                this.SB &&
                (window.clearTimeout(this.SB), this.SB = null),
                null == t.currentLayoutData ||
                null == t.currentLayoutData.page_info ||
                null == t.currentLayoutData.page_info[t.NB - 1]
              ) return;
              t.status == h.w.zw &&
              (
                t.enableTouch &&
                (t.pinchMgr.pinchEndFlg = !1, t.pinchMgr.pinchCnt = 0),
                t.MB()
              ),
              t.is_reflowable_page() ||
              t.xB(N.zD),
              t.lookAheadTextImage.length = 0,
              t.GB = !1;
              const i = a.Vs.jO(),
              s = document.body.getBoundingClientRect();
              if (t.VB && t.VB.width == s.width && (n.E.Rw() || t.VB.height == s.height)) return;
              if (t.hasFocus) {
                t.setEventLockFlg(!0);
                const i = r.Ue.jd.qd.If.zu();
                null != i &&
                i.blur(),
                t.hasFocus = !1,
                window.setTimeout(() => {
                  t.VB.width = 0,
                  this.AB(void 0)
                }, 1000)
              } else a.Vs.yw(),
              t.lookAheadTextImage.length = 0,
              t.VB = i,
              window.setTimeout(
                () => {
                  if (
                    n.E.ww() &&
                    3 == n.E.rw &&
                    window.innerHeight != document.documentElement.clientHeight ? (
                      document.body.style.height = `${ window.innerHeight }px`,
                      c.Ee.NO ||
                      window.scroll(0, 0)
                    ) : r.Ue.jd.Nf.Wf(''),
                    t.Bb(),
                    a.Vs.Dw(),
                    r.Ue.ZE.QE.ad() ||
                    t.setEventLockFlg(!1),
                    c.Ee.NO
                  ) {
                    const i = t.get_currentPageNum();
                    t.WB(),
                    0 == $('#finishDialog').dialog('isOpen') &&
                    t.rv(i, !0)
                  }
                },
                200
              );
              const e = window.innerWidth;
              globalThis.BV.EmitEvents.adjustTrialFooter(),
              t.status == h.w.Fw ||
              t.status == h.w.Xw ? r.Ue.jd.Nf.KE.YE('10px') : e <= 600 ? r.Ue.jd.Nf.KE.YE('110px') : r.Ue.jd.Nf.KE.YE('57px');
              let o = r.Ue.Ed.zu(),
              l = o.getContext('2d');
              a.Vs.hn(l),
              t.$P = 0,
              l = void 0,
              o = void 0;
              const _ = document.body.clientWidth;
              t.$B() ? r.Ue.jd.Nf.Mf.Kf(e, _, !0) : (t && n.E.pw() && r.Ue.jd.Nf.Mf.Uf.qf(), r.Ue.jd.Nf.Mf.Kf(e, _, !1))
            } catch (t) {
              s.zs.onError(e.js.errorCode.Sc, 'window.onresize', o.Ys.Js(t))
            }
          },
          200
        )
      }
      static LB() {
        globalThis.BV.bookViewer.LB(),
        this.AB(void 0)
      }
      static yB() {
        const t = globalThis.BV.bookViewer;
        try {
          t.uk(),
          t.get_currentLayoutMode() == e.js.qn.VERTICAL &&
          t.KB()
        } catch (t) {
          s.zs.onError(e.js.errorCode.Nc, 'window.onunload', o.Ys.Js(t))
        }
      }
      static UB(t) {
        let i = '';
        if (t) window.setTimeout(() => {
          window.addEventListener('scroll', this.FB)
        }, 500),
        document.body.classList.add('vertical_ui'),
        i = 'width=device-width, minimum-scale=1, maximum-scale=4, initial-scale=1, user-scalable=yes',
        document.querySelector('meta[name=\'viewport\']').setAttribute('content', i),
        r.Ue.Nd.zu().addEventListener('click', this.XB),
        r.Ue.Screen.Ju.zu().addEventListener('click', this.XB),
        document.querySelector('#dummymap').addEventListener('click', this.XB);
         else {
          document.body.classList.remove('vertical_ui'),
          i = 'width=device-width, minimum-scale=1, maximum-scale=1, initial-scale=1, user-scalable=no',
          document.querySelector('meta[name=\'viewport\']').setAttribute('content', i),
          r.Ue.Screen.Ju.zu().addEventListener('mousemove', this.zB);
          const t = r.Ue.Screen.zu();
          t.addEventListener('mousemove', this.zB),
          t.addEventListener('scroll', this.HB),
          t.addEventListener('dblclick', this.jB),
          r.Ue.Screen.Xu.zu().addEventListener('mousedown', this.qB)
        }
      }
      static JB() {
        window.removeEventListener('scroll', this.FB),
        r.Ue.Nd.zu().removeEventListener('click', this.XB),
        r.Ue.Screen.Ju.zu().removeEventListener('click', this.XB),
        document.querySelector('#dummymap').removeEventListener('click', this.XB);
        {
          r.Ue.Screen.Ju.zu().removeEventListener('mousemove', this.zB);
          const t = r.Ue.Screen.zu();
          t.addEventListener('mousemove', this.zB),
          t.addEventListener('scroll', this.HB),
          t.addEventListener('dblclick', this.jB),
          r.Ue.Screen.Xu.zu().addEventListener('mousedown', this.qB)
        }
      }
      static TB() {
        {
          const t = r.Ue.jd.qd.af.zu(),
          i = r.Ue.jd.qd.ef.zu(),
          s = r.Ue.jd.qd.cf.zu(),
          e = r.Ue.jd.qd.lf.zu();
          t.addEventListener('click', t => B.finishBtnEvent(t)),
          i.addEventListener('click', t => B.backBtnEvent(t)),
          s.addEventListener('click', () => B.searchLeft()),
          e.addEventListener('click', () => B.searchRight())
        }
        {
          const t = r.Ue.jd.Nf.KE.FE(),
          i = r.Ue.jd.Nf.KE.jE();
          t.addEventListener('click', t => B.openStoreButton(t)),
          t.addEventListener('load', () => B.onloadOpeningPopImage()),
          i.addEventListener('click', t => B.closeTrialFooter(t))
        }
        {
          const t = r.Ue.jd.Nf.Mf.Uf.Hf.eE(),
          i = r.Ue.jd.Nf.Mf.Uf.rE.eE(),
          s = r.Ue.jd.Nf.Mf.Uf.Yf.eE(),
          e = r.Ue.jd.Nf.Mf.Uf.Zf.eE(),
          n = r.Ue.jd.Nf.Mf.Uf.OE.eE(),
          o = r.Ue.jd.Nf.Mf.Uf.Qf.eE(),
          h = r.Ue.jd.Nf.Mf.Uf.TE.eE(),
          a = r.Ue.jd.Nf.Mf.Uf.CE.eE();
          t.addEventListener('click', t => B.openMokuji(t)),
          i.addEventListener('click', t => B.openSearch(t)),
          s.addEventListener('click', t => B.openZoomBar(t)),
          e.addEventListener('click', t => B.openSettings(t)),
          n.addEventListener('click', t => B.btnStartTts(t)),
          o.addEventListener('click', t => B.openHelp(t)),
          h.addEventListener('click', t => B.btnFullscreen(t)),
          a.addEventListener('click', t => B.MD(t))
        }
        {
          const t = r.Ue.ze.RR.Fe(),
          i = r.Ue.ze.Xe.Fe(),
          s = r.Ue.ze.VR.Fe(),
          e = r.Ue.ze.zR.qR(0),
          n = r.Ue.ze.zR.qR(1),
          o = r.Ue.ze.aI.qR(0),
          h = r.Ue.ze.aI.qR(1),
          a = r.Ue.ze.mI.qR(0),
          c = r.Ue.ze.mI.qR(1),
          l = r.Ue.ze.xI.qR(0),
          _ = r.Ue.ze.xI.qR(1),
          u = r.Ue.ze.YI.qR(0),
          d = r.Ue.ze.YI.qR(1),
          f = r.Ue.ze.ag.cg.zu(),
          E = r.Ue.ze.ag.Qf.zu();
          t.addEventListener('change', t => {
            B.changeSize(t.currentTarget)
          }),
          i.addEventListener('change', t => {
            B.changeColor(t.currentTarget)
          }),
          s.addEventListener('change', t => {
            B.changeTtsSpeed(t.currentTarget)
          }),
          e.addEventListener('click', t => {
            B.changeWriting(t.currentTarget)
          }),
          n.addEventListener('click', t => {
            B.changeWriting(t.currentTarget)
          }),
          o.addEventListener('click', t => {
            B.changeWebFont(t.currentTarget)
          }),
          h.addEventListener('click', t => {
            B.changeWebFont(t.currentTarget)
          }),
          a.addEventListener('click', t => {
            B.changeIsVertical(t.currentTarget)
          }),
          c.addEventListener('click', t => {
            B.changeIsVertical(t.currentTarget)
          }),
          l.addEventListener('click', t => {
            B.changeSheet(t.currentTarget)
          }),
          _.addEventListener('click', t => {
            B.changeSheet(t.currentTarget)
          }),
          u.addEventListener('click', t => {
            B.changeAnimation(t.currentTarget)
          }),
          d.addEventListener('click', t => {
            B.changeAnimation(t.currentTarget)
          }),
          f.addEventListener('click', () => B.resetButton()),
          E.addEventListener('click', t => B.openHelp(t))
        }
        {
          const t = r.Ue.ZE.iR.eR(),
          i = r.Ue.ZE.iR.rR(),
          s = r.Ue.ZE.iR.aR();
          t.addEventListener('click', t => B.errorTopButton(t)),
          i.addEventListener('click', t => B.errorReloadButton(t)),
          s.addEventListener('click', t => B.errorFinishButton(t))
        }
        {
          const t = r.Ue.Pg.Dg.eR(),
          i = r.Ue.Pg.Dg.kg(),
          s = r.Ue.Pg.Dg.aR();
          t.addEventListener('click', t => B.trialTopButton(t)),
          i.addEventListener('click', t => B.trialStoreButton(t)),
          s.addEventListener('click', t => B.trialFinishButton(t))
        }
        r.Ue.Pg.Ng.xg().addEventListener('click', t => B.webfontOkButton(t));
        {
          const t = r.Ue.Ud.zu();
          t.addEventListener('touchstart', () => B.stopTts()),
          t.addEventListener('click', () => B.stopTts())
        }
      }
    }
    Lt.SB = null,
    Lt.XB = t => B.onTap(t),
    Lt.zB = t => B.mouseMoveHandler(t),
    Lt.HB = () => B.scrollEvent(),
    Lt.jB = t => B.doubleClickBefore(t),
    Lt.qB = t => t.preventDefault(),
    Lt.FB = () => {
      globalThis.BV.bookViewer.nb()
    };
    var At = function (t, i, s, e) {
      return new (s || (s = Promise)) (
        (
          function (n, o) {
            function r(t) {
              try {
                a(e.next(t))
              } catch (t) {
                o(t)
              }
            }
            function h(t) {
              try {
                a(e.throw(t))
              } catch (t) {
                o(t)
              }
            }
            function a(t) {
              var i;
              t.done ? n(t.value) : (i = t.value, i instanceof s ? i : new s((function (t) {
                t(i)
              }))).then(r, h)
            }
            a((e = e.apply(t, i || [])).next())
          }
        )
      )
    };
    Lt.vB(),
    M.hb();
    const Ct = new class extends class {
      init(t) {
        try {
          this.JT = !0,
          this.ub = t,
          this.Je = new _t,
          this.Je.init();
          const i = navigator.userAgent.toLowerCase();
          n.E.init(i),
          this.YB(1),
          this.ZB = [],
          this.hv(1);
          const s = this.QB();
          this.tS(s),
          this.MC = new ut,
          this.Je.JC();
          const e = sessionStorage;
          null != e &&
          e.length > 0 ? this.Ev = e.getItem('viewerUserId') : this.Ev = 'viewerUserId',
          this.contents_id = '0',
          this.nm = null,
          this.Os = new at,
          this.Os.init(this),
          this.YA = new Z,
          this.YA.init(),
          this.userOperationDataMgr = new g,
          this.seriesSearch = new W('series_search'),
          this.wL = 2
        } catch (t) {
          s.zs.onError(e.js.errorCode.Cc, 'BookViewer.prototype.init', o.Ys.Js(t))
        }
      }
      fb() {
        return !1
      }
      QB() {
        return this._b = a.Vs.mw(),
        this.ub ? e.js.qn.VERTICAL : this._b == e.js.zn.Hn ? e.js.qn.Jn : this.fb() ? e.js.qn.Yn : e.js.qn.Zn
      }
      zP() {
        let t = null;
        try {
          if (
            t = ~~this.get_currentPageNum(),
            this.get_currentLayoutMode() == e.js.qn.Zn &&
            this.iS.sB(t)
          ) return [t,
          t + 1]
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Yc,
            'BookViewer.prototype.getCurrentPageNum',
            o.Ys.Js(t)
          )
        }
        return [t]
      }
      canMovePrevious() {
        const t = this.get_currentPageNum();
        if (
          null == this.currentLayoutData ||
          null == this.currentLayoutData.page_info ||
          t > this.currentLayoutData.page_info.length
        ) return !1;
        try {
          if (!this.Je.Ze(t)) return !1;
          if (t <= 1) return !1;
          switch (this.get_currentLayoutMode()) {
            case e.js.qn.VERTICAL:
            case e.js.qn.Jn:
            case e.js.qn.Yn:
              if (!this.currentLayoutData.page_info[t - 1].pf) return !1;
              if (!this.Je.Ze(t - 1)) return 1 <= t - 1;
              break;
            case e.js.qn.Zn:
              {
                const i = this.zP();
                if (!this.currentLayoutData.page_info[i[0] - 1].pf) return !1;
                if (!this.Je.Ze(t - 1)) return 1 <= t - 1;
                break
              }
            default:
              return s.zs.onError(
                e.js.errorCode.fc,
                'BookViewer.prototype.canMovePrevious',
                'return value is illegal'
              ),
              !1
          }
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.sl,
            'BookViewer.prototype.canMovePrevious',
            o.Ys.Js(t)
          )
        }
        return !0
      }
      canMoveNext() {
        if (
          null == this.currentLayoutData ||
          null == this.currentLayoutData.page_info ||
          this.get_currentPageNum() > this.currentLayoutData.page_info.length
        ) return !1;
        try {
          const t = this.get_currentPageNum();
          if (!this.Je.Ze(t)) return !1;
          switch (this.get_currentLayoutMode()) {
            case e.js.qn.VERTICAL:
            case e.js.qn.Jn:
            case e.js.qn.Yn:
              if (this.currentLayoutData.Bk(t + 1)) return !1;
              if (!this.Je.Ze(t + 1)) return !0;
              if (!this.currentLayoutData.page_info[t - 1].pb) return !1;
              break;
            case e.js.qn.Zn:
              {
                const i = this.iS.sB(t) ? 2 : 1;
                if (this.currentLayoutData.Bk(t + i)) return !1;
                if (!this.Je.Ze(t + i)) return !0;
                const s = this.zP();
                if (s[1] && s[1] <= this.currentLayoutData.page_info.length) {
                  if (!this.currentLayoutData.page_info[s[1] - 1].pb) return !1
                } else if (!this.currentLayoutData.page_info[s[0] - 1].pb) return !1;
                break
              }
            default:
              return s.zs.onError(
                e.js.errorCode.Ec,
                'BookViewer.prototype.canMoveNext',
                'return value is illegal'
              ),
              !1
          }
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.el,
            'BookViewer.prototype.canMoveNext',
            o.Ys.Js(t)
          )
        }
        return !0
      }
      KT(t, i) {
        return this.Os.aC(this.currentLayoutData.page_info, t, i)
      }
      sS(t, i) {
        const s = this.Os.cC(this.currentLayoutData.page_info, t, i);
        null != s &&
        this.hv(s)
      }
      getType() {
        const t = this.get_currentPageNum();
        return this.currentLayoutData.Sk(t)
      }
      $B() {
        return this.getType() == E.ds.un.dn
      }
      Nk() {
        const t = this.get_currentPageNum();
        return this.currentLayoutData.Nk(t)
      }
      eS() {
        return ft(
          this,
          void 0,
          void 0,
          (
            function * () {
              const t = yield R.Jp();
              null != t.error ? s.zs.onError(t.error.errorCode, t.error.tm, t.error.im) : this.nm = t.value
            }
          )
        )
      }
      nS(t) {
        this.oS(t),
        this.rS(this.seriesSearch)
      }
      CB(t) {
        return ft(
          this,
          void 0,
          void 0,
          (
            function * () {
              this.Ev = '';
              const e = yield R.sm(
                t,
                {
                  contents_id: this.contents_id,
                  nm: this.nm,
                  store_code: i.sf.STORE_CODE,
                  provider_id: this.provider_id
                }
              );
              if (null == e.error) return e.value;
              s.zs.onError(e.error.errorCode, 'ページリスト取得', e.error.im)
            }
          )
        )
      }
      rS(t) {
        if (null == t) return !1;
        const i = this.bookInfo.$y();
        if (null != i) {
          const s = i.length;
          for (let e = 0; e < s; e++) if (null != i[e].id && i[e].id.length > 0) {
            const s = t.Hd();
            if (i[e].id == s && null != i[e].url) return t.Kb(i[e].url),
            !0
          }
        }
        return t.$b(),
        !1
      }
      oS(t) {
        this.bookInfo = new H(t),
        this.bookInfo.Ky() &&
        b.yP(),
        i.Uw.title = this.bookInfo.bT(),
        i.Uw.scheme = this.bookInfo.scheme
      }
      hS() {
        const t = this.bookInfo.display_setting_info.length,
        i = new Array(3),
        s = new Array(2),
        e = [];
        for (let i = 0; i < t; i++) {
          const t = this.bookInfo.display_setting_info[i].char_size;
          e.push(t ? t.toString(10) : void 0)
        }
        M.Ob(e);
        for (let e = 0; e < t; e++) i[0] = !0,
        i[1] = !0,
        i[2] = !0,
        this.bookInfo.display_setting_info[e].writing_mode == E.ds.ye.mn ? s[0] = !0 : this.bookInfo.display_setting_info[e].writing_mode == E.ds.ye.be &&
        (s[1] = !0);
        M.wb(i),
        M.mb(),
        M.vb(s)
      }
      zk(t, i) {
        if (t) return i.$k <= t &&
        t <= i.Uk;
        if (i.Kk < this.FT && this.FT < i.Fk) return !0;
        if (this.FT == i.Kk && i.startOffset <= this.XT) {
          if (this.FT < i.Fk) return !0;
          if (this.FT == i.Fk && this.XT <= i.endOffset) return !0
        } else if (this.FT == i.Fk && this.XT <= i.endOffset) {
          if (i.Kk < this.FT) return !0;
          if (this.FT == i.Kk && i.startOffset <= this.aS) return !0
        }
        return !1
      }
      av(t) {
        const i = this.currentLayoutData.Ck.length;
        return 2 <= i ||
        1 == i &&
        null != this.currentLayoutData.Ck[0].$k ? (
          t &&
          (this.FT = void 0, this.XT = void 0),
          this.currentLayoutData.av(this, t)
        ) : 0
      }
      pL(t) {
        return t
      }
      cS(t) {
        return ft(
          this,
          void 0,
          void 0,
          (
            function * () {
              let i = t.url + '/' + t.rel_url.split(':') [0];
              return i = this.pL(i),
              yield R.gm(i, null != this.currentLayoutData.Ck, !0)
            }
          )
        )
      }
      cv(t) {
        return ft(
          this,
          void 0,
          void 0,
          (
            function * () {
              const i = this.bookInfo.layout_url + '/' + this.currentLayoutData.Ck[t].$s,
              e = this.pL(i),
              n = yield R.wm(
                e,
                null != this.currentLayoutData &&
                null != this.currentLayoutData.page_info,
                !0
              );
              if (null == n.error) {
                const i = n.value;
                if (null == i) return;
                let s;
                return s = 'string' == typeof i ? this.lS(i, t) : i,
                {
                  _S: s,
                  index: t
                }
              }
              s.zs.onError(n.error.errorCode, 'レイアウトデータ取得', n.error.im)
            }
          )
        )
      }
      lS(t, i) {
        let s = t;
        const e = this.vs().Sy();
        if (e.Ly() === K.Fb) {
          const i = o.Ys.xO(t),
          e = new dt.Zlib.Inflate(i).decompress();
          s = o.Ys.VO(e)
        }
        const n = e.getItem(i);
        return n &&
        (s = n.Iy(s)),
        JSON.parse(s)
      }
      uS() {
        return 1
      }
      dS(t) {
        null != t &&
        (null != t.Vm && this.hv(t.Vm), this.FT = t.Wm, this.XT = t.$m)
      }
      fS(t) {
        return ft(
          this,
          void 0,
          void 0,
          (
            function * () {
              this.Je.sk();
              const i = this.bookInfo.Vy();
              if (t) {
                const t = yield this.userOperationDataMgr.Sm(this.Ev, this.contents_id, this.Os);
                null != t &&
                this.dS(t)
              }
              if (
                null != this.currentLayoutData &&
                null != this.currentLayoutData.page_info
              ) {
                const t = this.get_currentPageNum();
                this.userOperationDataMgr.auto_bookmark_info &&
                (
                  this.userOperationDataMgr.auto_bookmark_info.Gm = g.zm(this.currentLayoutData.page_info[t - 1], t)
                )
              }
              const e = i.rel_url.match(/:/g);
              if (null != e && 1 == e.length) {
                const t = {
                  rel_url: i.rel_url,
                  url: i.layout_url
                },
                e = yield this.cS(t);
                if (null != e.error) return void s.zs.onError(e.error.errorCode, 'レイアウト情報取得', e.error.im);
                {
                  const t = e.value;
                  if (null == t) return;
                  if (
                    this.currentLayoutData.Xk(t.layoutinfo),
                    void 0 !== t.fid &&
                    this.Os.eC(t.fid),
                    this.userOperationDataMgr.auto_bookmark_info
                  ) {
                    const t = g.xm(
                      this.userOperationDataMgr.auto_bookmark_info.Gm,
                      this.userOperationDataMgr.Bm,
                      this.Os
                    );
                    this.dS(t)
                  }
                }
              } else {
                const t = globalThis.BV.params;
                t.page &&
                t.page.match(/^[1-9][0-9]*$/) &&
                this.hv(parseInt(t.page, 10)),
                t.ES &&
                t.ES.match(/^[1-9][0-9]*$/) &&
                this.hv(parseInt(t.ES, 10)),
                this.currentLayoutData.Xk(i.rel_url)
              }
              const n = void 0 !== this.FT ? null : this.get_currentPageNum(),
              o = this.av(n);
              return yield this.cv(o)
            }
          )
        )
      }
      vs() {
        return this.bookInfo.d
      }
      RS() {
        try {
          const t = this.get_currentLayoutMode();
          if (this._b = a.Vs.mw(), this.ub) {
            const t = e.js.qn.VERTICAL;
            return void this.tS(t)
          }
          if (t != e.js.qn.Jn && t != e.js.qn.Yn && t != e.js.qn.Zn) {
            let i;
            o.Ys.FO(e.js.$o, `get_currentViewMode ignore viewmode = ${ t }`),
            i = this._b == e.js.zn.Hn ? e.js.qn.Jn : this.fb() ? e.js.qn.Yn : e.js.qn.Zn,
            this.tS(i)
          } else this._b == e.js.zn.Hn ? this.get_currentLayoutMode() != e.js.qn.Jn &&
          this.tS(e.js.qn.Jn) : this.fb() &&
          this.get_currentLayoutMode() != e.js.qn.Yn ? this.tS(e.js.qn.Yn) : this.fb() ||
          this.get_currentLayoutMode() == e.js.qn.Zn ||
          this.tS(e.js.qn.Zn)
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Yl,
            'BookViewer.prototype.checkMode',
            o.Ys.Js(t)
          )
        }
      }
      IS() {
        let t = this.iS.iB(this.get_currentPageNum()).left;
        return this.currentLayoutData.Bk(t) &&
        (t = - 1),
        t
      }
      gS() {
        let t = this.iS.iB(this.get_currentPageNum()).right;
        return this.currentLayoutData.Bk(t) &&
        (t = - 1),
        t
      }
      nk() {
        return this.Je.nk()
      }
      OS(t, i) {
        return ft(
          this,
          void 0,
          void 0,
          (
            function * () {
              for (let i = 0; i < t.length && !this.Os.ge.TA(); i++) t[i].draw_info &&
              this.Os.ge.bA(t[i].draw_info);
              this.Os.ge.TA() ||
              this.currentLayoutData.Ck.length > i &&
              (yield this.wS({
                url: this.bookInfo.layout_url,
                index: i
              }))
            }
          )
        )
      }
      wS(t) {
        return ft(
          this,
          void 0,
          void 0,
          (
            function * () {
              let i;
              i = t.url + '/' + this.currentLayoutData.Ck[t.index].$s,
              i = this.pL(i);
              const e = yield R.Dm(
                i,
                null != this.currentLayoutData &&
                null != this.currentLayoutData.page_info,
                !0
              ),
              n = e.error;
              if (null == n) {
                if (null == e.value) return;
                const i = e.value;
                let s;
                s = 'string' == typeof i ? this.lS(i, t.index) : i;
                const n = t.index + 1;
                yield this.OS(s.page_data.page_info, n)
              } else s.zs.onError(n.errorCode, 'レイアウトデータ取得', n.im)
            }
          )
        )
      }
      get_currentLayoutMode() {
        return this.pS
      }
      tS(t) {
        this.pS = t
      }
      mS() {
        return this.pS == e.js.qn.Zn
      }
      uD() {
        return this.vS
      }
      get_currentPageNum() {
        return this.NB
      }
      zT() {
        return 0 != this.ZB.length ? this.ZB.pop() : - 1
      }
      PS() {
        return 0 != this.ZB.length
      }
      yT() {
        return this.is_reflowable_page() ? this.Os.lC() : this.PS()
      }
      is_reflowable_page() {
        return !!this.currentLayoutData.YT(this.NB)
      }
      YB(t) {
        this.vS = t
      }
      hv(t) {
        let i = this.get_currentPageNum();
        i ||
        (i = t),
        this.YB(i),
        this.NB = t
      }
      DS(t) {
        this.ZB.push(t)
      }
      ST() {
        const t = this.get_currentPageNum() - 1,
        i = this.currentLayoutData.page_info[t];
        this.FT = i.idx,
        this.XT = i.ps
      }
      TS() {
        if (this.get_currentLayoutMode() == e.js.qn.Zn) {
          const t = this.get_currentPageNum();
          let i;
          i = this.bookInfo.Wy() ? this.currentLayoutData.page_info[t - 1] : this.currentLayoutData.page_info[t],
          this.FT = i.idx,
          this.XT = i.ps
        } else this.ST()
      }
    }
    {
      constructor() {
        super (...arguments),
        this.dragMgr = new Et,
        this.pinchMgr = new Rt,
        this.bS = !1,
        this.yS = null,
        this.LS = null,
        this.AS = null,
        this.CS = {
          x: 0,
          y: 0
        },
        this.kS = 1,
        this.BS = 0,
        this.SS = 0,
        this.NS = 4,
        this.MS = 3,
        this.xS = 3,
        this.GS = 2,
        this.VS = 3,
        this.WS = i.sf.PAGE_PER_CONFIRM,
        this.$S = i.sf.PAGE_PER_SETBOOKMARK,
        this.KS = null,
        this.US = null,
        this.FS = null,
        this.XS = - 1,
        this.zS = - 1,
        this.HS = 500,
        this.jS = 500,
        this.qS = 6,
        this.JS = !1
      }
      init() {
        try {
          super.init(),
          this.isEventLock = !1,
          this.isScrollLock = !1,
          r.Ue.Screen.Ke.zu().getContext &&
          (this.context = r.Ue.Screen.Ke.zu().getContext('2d')),
          this.lookAheadTextImage = [],
          this.isDispLock = !1,
          this.YS = - 1,
          this.ZS = !0,
          this.QS = !1,
          this.tN = !1,
          this.status = h.w.Fw,
          this.mT = !1,
          this.iN = [],
          this.enableTouch = !0,
          this.sN = !0,
          this.hasFocus = !1,
          this.zoomScaleInfo = new Tt,
          this.zoomScaleInfo.init(),
          this.eN(1),
          this.oldScaleInfo = new Tt,
          this.oldScaleInfo.init(),
          this.nN = e.js.Io.NONE,
          this.xT = null,
          this.GT = null,
          this.oN = null,
          this.rN = null,
          this.hN = null,
          this.aN = null,
          this.cN = {
            x: 0,
            y: 0
          },
          this.dragMgr.init(),
          this.isCloseMenu = !1,
          this.mouseWheel = !1,
          this.lN = !1,
          this.GB = !1,
          this.pinchMgr.init(),
          this.beginSize = {
            width: 0,
            height: 0
          },
          this._N = this.uN = null,
          this.dN = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          },
          this.fN = r.Ue.Screen.Ke.$e(),
          this.EN = !1,
          a.Vs.yw(),
          this.RN = e.js._o.HORIZONTAL,
          this.IN = {
            x: e.js.yo,
            y: e.js.yo
          },
          this.YA = new Z,
          this.YA.init(),
          this.xs = new Dt,
          this.xs.init(),
          this.gN = !1,
          this.ON = null,
          this.wN = null,
          this.VP = 0,
          this.$P = 0,
          this.QP = null,
          this.iD = null,
          this.KP = !1,
          this.pN = 0,
          l.Sp(r.Ue.jd.Nf.KE.jE()),
          n.E.Re() &&
          l.Sp(r.Ue.jd.Nf.KE.FE()),
          l.Sp(r.Ue.jd.qd.Yd()),
          l.Sp(r.Ue.jd.Nf.xf()),
          this.mN(),
          this.ub ? this.tS(e.js.qn.VERTICAL) : this.tS(e.js.qn.Jn),
          this.seriesSearch = new W('series_search'),
          this.RS(),
          this.wL = 2,
          this.vN()
        } catch (t) {
          s.zs.onError(e.js.errorCode.Cc, 'BookViewer.prototype.init', o.Ys.Js(t))
        }
      }
      IT() {
        void 0 !== i.sf.CONFIRM_URL &&
        (
          this.WS = this.WS - 1,
          0 !== this.WS &&
          !0 !== this.bS ||
          (
            fetch(i.sf.CONFIRM_URL).then(
              t => {
                403 == t.status &&
                s.zs.onError(e.js.errorCode.kc, 'window.onload', '同時に閲覧できる端末数の上限を超えました。')
              }
            ).catch(t => {
            }),
            this.WS = i.sf.PAGE_PER_CONFIRM
          )
        ),
        window.setTimeout(
          () => {
            const t = this.get_currentPageNum();
            this.userOperationDataMgr.Xm(this.contents_id, this.currentLayoutData.page_info[t - 1], t)
          },
          500
        )
      }
      HP() {
        void 0 !== i.sf.PAGE_PER_SETBOOKMARK &&
        i.sf.PAGE_PER_SETBOOKMARK > 0 &&
        (
          this.$S = this.$S - 1,
          0 === this.$S &&
          (
            window.setTimeout(
              () => {
                const t = (new Date).toISOString().replace(/(\.[0-9]*)/g, ''),
                i = this.get_currentPageNum();
                this.userOperationDataMgr.auto_bookmark_info ? this.userOperationDataMgr.auto_bookmark_info.op = E.ds.xn.Vn : (
                  this.userOperationDataMgr.auto_bookmark_info = {
                    id: null,
                    Gm: null,
                    time: null,
                    note: null,
                    op: null
                  },
                  this.userOperationDataMgr.auto_bookmark_info.op = E.ds.xn.Gn,
                  this.userOperationDataMgr.auto_bookmark_info.id = ''
                ),
                this.userOperationDataMgr.auto_bookmark_info.Gm = g.zm(this.currentLayoutData.page_info[i - 1], i),
                this.userOperationDataMgr.auto_bookmark_info.time = t,
                this.userOperationDataMgr.Fm(
                  this.Ev,
                  this.contents_id,
                  this.currentLayoutData.page_info[i - 1],
                  i,
                  this.userOperationDataMgr.auto_bookmark_info
                )
              },
              100
            ),
            this.$S = i.sf.PAGE_PER_SETBOOKMARK
          )
        )
      }
      mN() {
        this.PN = [];
        for (let t = 0; t < 10; t++) this.PN[t] = x.rn.SO();
        a.Vs.Cw(
          this.PN[0],
          'image/shadow/shadowSingleTop.png',
          {
            width: 768,
            height: 4
          },
          !1
        ).then(t => {
          a.Vs.Pw(t)
        }),
        a.Vs.Cw(
          this.PN[1],
          'image/shadow/shadowSingleBottom.png',
          {
            width: 768,
            height: 4
          },
          !1
        ).then(t => {
          a.Vs.Pw(t)
        }),
        a.Vs.Cw(
          this.PN[2],
          'image/shadow/shadowSingleLeft.png',
          {
            width: 4,
            height: 1208
          },
          !1
        ).then(t => {
          a.Vs.Pw(t)
        }),
        a.Vs.Cw(
          this.PN[3],
          'image/shadow/shadowSingleRight.png',
          {
            width: 4,
            height: 1208
          },
          !1
        ).then(t => {
          a.Vs.Pw(t)
        }),
        a.Vs.Cw(
          this.PN[4],
          'image/shadow/shadowDoubleLeftTop.png',
          {
            width: 764,
            height: 4
          },
          !1
        ).then(t => {
          a.Vs.Pw(t)
        }),
        a.Vs.Cw(
          this.PN[5],
          'image/shadow/shadowDoubleLeftBottom.png',
          {
            width: 764,
            height: 4
          },
          !1
        ).then(t => {
          a.Vs.Pw(t)
        }),
        a.Vs.Cw(
          this.PN[6],
          'image/shadow/shadowDoubleLeftLeft.png',
          {
            width: 4,
            height: 1208
          },
          !1
        ).then(t => {
          a.Vs.Pw(t)
        }),
        a.Vs.Cw(
          this.PN[7],
          'image/shadow/shadowDoubleRightTop.png',
          {
            width: 764,
            height: 4
          },
          !1
        ).then(t => {
          a.Vs.Pw(t)
        }),
        a.Vs.Cw(
          this.PN[8],
          'image/shadow/shadowDoubleRightBottom.png',
          {
            width: 764,
            height: 4
          },
          !1
        ).then(t => {
          a.Vs.Pw(t)
        }),
        a.Vs.Cw(
          this.PN[9],
          'image/shadow/shadowDoubleRightRight.png',
          {
            width: 4,
            height: 1208
          },
          !1
        ).then(t => {
          a.Vs.Pw(t)
        })
      }
      BB() {
        try {
          o.Ys.FO(e.js.Wo, 'setDispModeOnLoad'),
          this._b = a.Vs.mw();
          const t = this.QB();
          this.Eb(t)
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Mc,
            'BookViewer.prototype.setDispModeOnLoad',
            o.Ys.Js(t)
          )
        }
      }
      fb() {
        return r.Ue.ze.xI.nI(0)
      }
      Bb() {
        try {
          this._b = a.Vs.mw(),
          this.DN(!1),
          this.pinchModeEnd(!1),
          this.isDispLock = !1;
          const t = this.get_currentLayoutMode();
          this.ub ? (
            this.Eb(e.js.qn.VERTICAL),
            n.E.Re() &&
            (
              o.Ys.FO(e.js.Wo, 'iOS shrinkUnsedCanvasForVerticalMode'),
              this.TN()
            )
          ) : this._b == e.js.zn.jn ? this.fb() ? this.Eb(e.js.qn.Yn) : (e.js.qn.Jn, this.Eb(e.js.qn.Zn)) : (this.fb() || t == e.js.qn.Yn || e.js.qn.Zn, this.Eb(e.js.qn.Jn))
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.xc,
            'BookViewer.prototype.screenSizeChanged',
            o.Ys.Js(t)
          )
        }
      }
      wD(t) {
        if (!this.bookInfo || !this.bookInfo.display_setting_info) return;
        if (this.isEventLock) return;
        if (t || (t = window.event), this.status == h.w.yf) return void r.Ue.Screen.qu(e.Fn.Lu);
        const i = r.Ue.Screen.Yu();
        let s;
        s = document.all ? t.offsetX - i.left : t.layerX - i.left;
        const n = a.Vs.jO(),
        o = r.Ue.Screen.$e();
        let c = e.Fn.Lu;
        n.width > o.width &&
        t.clientX > o.width ||
        n.height > o.height &&
        t.clientY > o.height ||
        (
          s < n.width / 3 ||
          s > n.width - n.width / 3 ? this.bookInfo.gT() ? s < n.width / 3 ? this.canMovePrevious() &&
          (c = e.Fn.Cu) : this.canMoveNext() &&
          (c = e.Fn.ku) : s < n.width / 3 ? this.canMoveNext() &&
          (c = e.Fn.Cu) : this.canMovePrevious() &&
          (c = e.Fn.ku) : c = e.Fn.Au
        ),
        r.Ue.Screen.qu(c)
      }
      uP(t, i) {
        return At(
          this,
          void 0,
          void 0,
          (
            function * () {
              const s = [];
              let n,
              r;
              const h = t + i < this.currentLayoutData.end ? i : this.currentLayoutData.end - t + 1;
              for (let i = 0; i < h; i++) r = this.av(t + i),
              r !== n &&
              (n = r, s.push(n));
              o.Ys.FO(e.js.Wo, `doFetchPages ${ JSON.stringify(s) }`),
              yield this.bN(s)
            }
          )
        )
      }
      yN() {
        const t = this.get_currentPageNum();
        switch (this.get_currentLayoutMode()) {
          case e.js.qn.VERTICAL:
          case e.js.qn.Jn:
          case e.js.qn.Yn:
            this.Je.Ze(t + 1) ? (this.LN(!0, !0), this.moveNext()) : (
              this.hv(t + 1),
              M.showLoader(),
              this.cv(this.av(t)).then(t => {
                null != t &&
                this.lv(t)
              })
            );
            break;
          case e.js.qn.Zn:
            {
              let i = null;
              2 + ~~t <= this.currentLayoutData.end &&
              !this.Je.Ze(t + 2) ? i = 2 + ~~t : 3 + ~~t <= this.currentLayoutData.end &&
              !this.Je.Ze(t + 3) &&
              (i = 3 + ~~t),
              i ? (
                this.hv(i),
                M.showLoader(),
                this.cv(this.av(i)).then(t => {
                  null != t &&
                  this.lv(t)
                })
              ) : (this.LN(!0, !0), this.moveNext());
              break
            }
        }
        this.zoomScaleInfo.isScaled() ? this.pinchMgr.pinchPaused = !0 : this.pinchMgr.pinchPaused = !1
      }
      mP() {
        const t = this.zP();
        this.bookInfo.gT() &&
        (t[0] = t[0] + 1),
        (
          t[0] >= this.currentLayoutData.end ||
          t[1] >= this.currentLayoutData.end
        ) &&
        O.ev('EndOfContent')
      }
      onTap(t, i) {
        if (this.dragMgr.pk(), this.isDispLock) return void o.Ys.FO(e.js.Wo, 'NOW ANIMATION: tap ignored');
        if (this.pinchMgr.pinching) return void this.pinchModeEnd(!0);
        if (this.DN(!1), this.status == h.w.zw) return;
        this.AN();
        const s = a.Vs.jO(),
        n = r.Ue.Screen.Ke.ud();
        let _ = !1;
        const u = this.get_currentPageNum(),
        d = r.Ue.Screen.Ju.ad();
        switch (this.status) {
          case h.w.Fw:
            if (d) return;
            if (
              this.get_currentLayoutMode() == e.js.qn.VERTICAL ||
              !(t < s.width / 3 || t > s.width - s.width / 3)
            ) return void M.TT();
            this.xs.RT();
            break;
          case h.w.Lf:
          case h.w.Xw:
            if (
              M.closeAllMenu(),
              this.status = h.w.Fw,
              this.get_currentLayoutMode() == e.js.qn.VERTICAL ||
              !(t < s.width / 3 || t > s.width - s.width / 3)
            ) return;
            this.xs.RT();
            break;
          case h.w.yf:
            return
        }
        if (this.get_currentLayoutMode() == e.js.qn.VERTICAL) return;
        const f = this.dragMgr.Ok(),
        E = Math.abs(f.x - t),
        R = Math.abs(f.y - i),
        I = this.bookInfo.gT();
        if (E < 5 && R < 5) {
          if (!(f.x < s.width / 3 || f.x > s.width - s.width / 3)) return M.TT(),
          void (this.status = h.w.Lf);
          const i = t - n.left < s.width / 2;
          _ = I ? !i : i
        } else {
          if (this.zoomScaleInfo.isScaled()) return;
          if (this.get_currentLayoutMode() == e.js.qn.Yn && R > 100) return;
          {
            const i = t - n.left < s.width / 2;
            _ = I ? !i : i
          }
        }
        if (!this.Os.ge.EA) {
          if (this.IN.x = e.js.bo, this.IN.y = e.js.bo, 0 == c.Ee.MO) for (this.xT = null, this.GT = null; l._p.length > 0; ) {
            const t = l._p.shift();
            window.clearTimeout(t)
          }
          if (
            this.pinchMgr.pinchEndFlg &&
            this.xB(N.zD),
            this.pinchMgr.pinchPaused = !1,
            this.pinchModeEnd(!1),
            this.pinchMgr.pinchEndFlg = !1,
            this.pinchMgr.pinchCnt = 0,
            _
          ) this.canMoveNext() ? this.yN() : this.mP();
           else if (this.canMovePrevious()) {
            let t = null;
            0 < ~~u - 1 &&
            !this.Je.Ze(u - 1) ? t = ~~u - 1 : 0 < ~~u - 2 &&
            !this.Je.Ze(u - 2) &&
            (t = ~~u - 2),
            t ? (
              this.hv(t),
              M.showLoader(),
              this.cv(this.av(t)).then(t => {
                null != t &&
                this.lv(t)
              })
            ) : (this.LN(!1, !0), this.CN()),
            this.zoomScaleInfo.isScaled() ? this.pinchMgr.pinchPaused = !0 : this.pinchMgr.pinchPaused = !1
          }
          r.Ue.Screen.Zu({
            left: 0,
            top: 0
          }),
          this.dragMgr.setDraggingAmount({
            x: 0,
            y: 0
          })
        }
      }
      onDoubleTap(t, i) {
        this.ob(t, i, !0)
      }
      ob(t, i, a) {
        try {
          if (
            this.pinchMgr.pinchPaused = !1,
            this.dragMgr.pk(),
            this.QS = !0,
            this.isDispLock
          ) return void o.Ys.FO(e.js.Wo, 'NOW ANIMATION: doubletap ignored');
          if (this.tN && this.pinchMgr.pinching) return void this.pinchModeEnd(!0);
          if (this.DN(!1), this.status == h.w.zw) return this.xs.fB.zoomScaleInfo.index == this.xs.fB.zoomScaleInfo.HD ? void this.MB() : (
            this.pinchModeEnd(!1),
            this.pinchMgr.pinchEndFlg = !1,
            this.pinchMgr.pinchCnt = 0,
            this.xs.fB.zoomScaleInfo.toggle(),
            void this.kN()
          );
          if (this.is_reflowable_page() && 1 == a) {
            if (this.zoomScaleInfo.index <= 1) for (let s = 0; s < this.xs.dB.length; ++s) if (this.xs.dB[s].uB({
              x: t,
              y: i
            })) return this.xs.fB.EB = this.xs.dB[s],
            this.xs.fB.zoomScaleInfo.toggle(),
            void this.kN();
            this.zoomScaleInfo.init(),
            this.xs.RT()
          } else this.zoomScaleInfo.toggle();
          if (this.Os.gs.sC(), !this.is_reflowable_page()) {
            const s = this.get_currentPageNum(),
            e = this.currentLayoutData.page_info[s - 1],
            o = r.Ue.Screen.Ke.$e(),
            h = this.zoomScaleInfo.eb() ||
            N.zD,
            a = this.get_currentLayoutMode(),
            c = {
              x: null,
              y: null
            };
            let l = this.Je.jP(s).qP;
            const _ = this.getImageSize(a, s, 1);
            let u = _.width,
            d = _.height,
            f = !1;
            if (this.mS() && s + 1 < this.Je.Ay()) {
              const r = this.Je.jP(s + 1),
              a = this.currentLayoutData.page_info[s];
              let _,
              R,
              I,
              g,
              O,
              w;
              if (e.spr == E.ds.an.ln && a.spr == E.ds.an.cn) {
                f = !0,
                _ = l,
                R = u,
                I = d,
                g = r.qP;
                const t = this.iS.getImageSize(s + 1, 1);
                O = t.width,
                w = t.height
              } else if (e.spr == E.ds.an.cn && a.spr == E.ds.an.ln) {
                f = !0,
                g = l,
                O = u,
                w = d,
                _ = r.qP;
                const t = this.iS.getImageSize(s + 1, 1);
                R = t.width,
                I = t.height
              }
              f &&
              (
                l = _,
                u = R + O,
                d = I < w ? w : I,
                c.x = (1 - h) * t * n.E.rw + (o.width - u) * h / 2,
                c.y = (1 - h) * i * n.E.rw + (o.height - d) * h / 2,
                _.zC({
                  x: c.x,
                  y: (1 - h) * i * n.E.rw + (o.height - I) * h / 2
                }),
                g.zC({
                  x: c.x + h * R,
                  y: (1 - h) * i * n.E.rw + (o.height - w) * h / 2
                })
              )
            }
            if (0 == f) {
              if (c.x = null, this.mS() && 1 == h) switch (e.spr) {
                case E.ds.an.ln:
                  c.x = o.width / 2 - u;
                  break;
                case E.ds.an.cn:
                  c.x = o.width / 2
              }
              null == c.x &&
              (c.x = (1 - h) * t * n.E.rw + (o.width - u) * h / 2),
              c.y = (1 - h) * i * n.E.rw + (o.height - d) * h / 2,
              l.zC(c)
            }
          }
          if (
            this.xB(this.zoomScaleInfo.index),
            null == this.currentLayoutData ||
            null == this.currentLayoutData.page_info ||
            null == this.currentLayoutData.page_info[this.get_currentPageNum() - 1]
          ) return;
          if (this.is_reflowable_page()) 1 < this.bookInfo.display_setting_info.length &&
          (this.currentLayoutData.page_info = void 0);
           else if (this.zoomScaleInfo.isScaled()) {
            const t = r.Ue.Screen.Yu();
            this.CS.x < 0 &&
            (t.left = - this.CS.x, r.Ue.Screen.Zu(t)),
            this.CS.y < 0 &&
            (t.top = - this.CS.y, r.Ue.Screen.Zu(t)),
            this.dragMgr.setDraggingAmount({
              x: t.left,
              y: t.top
            }),
            this.drawPinchingFrame()
          }
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Vc,
            'BookViewer.prototype.onMagnifyPage',
            o.Ys.Js(t)
          )
        }
      }
      onDragStart(t, i) {
        this.status != h.w.yf &&
        (
          this.lN = !1,
          this.QS = !1,
          this.pinchMgr.pinching ? this.BN(t, i) : (
            this.dragMgr.gk({
              x: t,
              y: i
            }),
            this.AN(),
            this.SN(),
            this.xT &&
            (
              this.status == h.w.zw ? this.cN = {
                x: 0,
                y: 0
              }
               : this.cN = this.xT.Gm,
              this.NN(),
              this.dragMgr.pageDragging = !0,
              this.MN(this.cN, !1)
            )
          )
        )
      }
      onDragMove(t, i) {
        const s = window.innerHeight;
        if (!this.isPageUIEventValid()) {
          const e = this.dragMgr.Ok(),
          n = Math.abs(e.x - t),
          o = Math.abs(e.y - i);
          if (
            this.zoomScaleInfo.isScaled() &&
            this.status == h.w.Lf &&
            (i < 50 || i > s - 52)
          ) return this.dragMgr.pageDragging = !1,
          void this.onDragEnd(t, i);
          if (
            !(
              this.zoomScaleInfo.isScaled() &&
              this.status != h.w.yf &&
              i > 50 &&
              i < s - 52 &&
              (n > 5 || o > 5)
            )
          ) return;
          this.setEventValidState(!0),
          r.Ue.jd.qd.Qd(r.Ue.jd.qd.Jd.uf, this.bookInfo.bT()),
          r.Ue.Screen.Ju.ed(!1),
          r.Ue.jd.Nf.ed(null, !1),
          r.Ue.jd.Nf.KE.YE('10px'),
          this.isCloseMenu = !0
        }
        if (this.isDispLock) o.Ys.FO(e.js.Wo, 'NOW ANIMATION: onDragMove ignored');
         else if (this.xT) {
          if (
            this.status == h.w.zw ||
            !(
              this.xT &&
              !this.xT.PC ||
              this.GT &&
              !this.GT.PC ||
              this.oN &&
              !this.oN.PC ||
              this.rN &&
              !this.rN.PC ||
              this.hN &&
              !this.hN.PC ||
              this.aN &&
              !this.aN.PC
            )
          ) if (this.lN = !1, this.status != h.w.zw) {
            if (this.pinchMgr.pinching) this.xN(t, i);
             else if (this.dragMgr.pageDragging) {
              const s = this.dragMgr.Ok();
              this.MN({
                x: ~~(this.cN.x + (t - s.x) * n.E.rw),
                y: ~~(this.cN.y + (i - s.y) * n.E.rw)
              }, !0)
            }
            this.disablePageUIEventMoment()
          } else {
            if (this.pinchMgr.pinching) return void this.xN(t, i);
            const s = a.Vs.jO();
            if (t < 0 || t > s.width || i < 0 || i > s.height) return;
            const e = this.dragMgr.Ik(),
            n = this.dragMgr.Ok(),
            o = e.x + (n.x - t),
            h = e.y + (n.y - i);
            r.Ue.Screen.Zu({
              left: o,
              top: h
            })
          }
        } else this.onDragStart(t, i)
      }
      pD() {
        if (this.mouseWheel) {
          const t = r.Ue.Screen.Yu();
          this.dragMgr.setDraggingAmount({
            x: t.left,
            y: t.top
          }),
          this.mouseWheel = !1
        } else {
          if (!this.dragMgr.pageDragging && !this.enableTouch) {
            const t = this.dragMgr.Ik();
            r.Ue.Screen.Zu({
              left: t.x,
              top: t.y
            })
          }
          this.dragMgr.pageDragging &&
          this.zoomScaleInfo.isScaled() &&
          (this.redraw(), this.drawPinchingFrame())
        }
      }
      onDragEnd(t, i) {
        try {
          if (this.QS) return void (this.QS = !1);
          const s = t,
          e = i,
          n = r.Ue.Screen.Yu();
          this.dragMgr.setDraggingAmount({
            x: n.left,
            y: n.top
          });
          const o = window.setTimeout(() => {
            this.GN(s, e, !1)
          }, 50);
          this.dragMgr.wk(o)
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Uc,
            'BookViewer.prototype.onDragEnd',
            o.Ys.Js(t)
          )
        }
      }
      onPinch(t, i, n) {
        try {
          if (!this.pinchMgr.pinching) return;
          this.VN(t, i, n)
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Fc,
            'BookViewer.prototype.onPinchIn',
            o.Ys.Js(t)
          )
        }
      }
      VN(t, i, n) {
        try {
          if (this.dragMgr.pk(), !this.isPageUIEventValid()) return;
          if (this.isDispLock) return void o.Ys.FO(e.js.Wo, 'NOW ANIMATION: pinch ignored');
          if (!this.pinchMgr.pinching || this.pinchMgr.pinchPaused) return this.pinchMgr.pinchEndFlg ? this.pinchMgr.pinching = !0 : this.pinchMgr.pinching = !1,
          this.WN(n, t, i),
          void this.disablePageUIEventMoment();
          const s = this.pinchMgr.Pk;
          if (
            this.pinchMgr.Pk = ~~(this.pinchMgr.pinchRateInitTop * (n / this.pinchMgr.vk)),
            !this.xT
          ) return;
          this.Os.gs.sC();
          const r = this.$N(this.xT.XC()),
          a = r.width,
          c = r.height,
          l = a > c ? a : c,
          _ = a < c ? a : c;
          let u = 0,
          d = 0;
          if (this.GT) {
            const t = this.$N(this.GT.XC()),
            i = t.width,
            s = t.height;
            u = i > s ? i : s,
            d = i < s ? i : s
          }
          if (this.GT) {
            if (
              l <= this.beginSize.width ||
              _ <= this.beginSize.width ||
              u <= this.beginSize.width ||
              d <= this.beginSize.width
            ) return this.pinchModeEnd(!0),
            this.xB(N.zD),
            this.oldScaleInfo.init(),
            void this.disablePageUIEventMoment()
          } else if (l <= this.beginSize.width || _ <= this.beginSize.width) return this.status == h.w.zw ? (this.pinchModeEnd(!1), this.MB()) : this.pinchModeEnd(!0),
          this.oldScaleInfo.init(),
          void this.disablePageUIEventMoment();
          this.KN(s),
          this.pinchMgr.Pk == s &&
          (
            this.pinchMgr.vk = n,
            this.pinchMgr.pinchRateInitTop = ~~(this.pinchMgr.Pk * n / this.pinchMgr.Dk),
            this.pinchMgr.Pk = ~~(this.pinchMgr.pinchRateInitTop * (n / this.pinchMgr.vk)),
            this.pinchMgr.Dk = n,
            this.cN = this.xT.Gm
          ),
          o.Ys.FO(
            e.js.Wo,
            `Pinch pinchRateInitTop = ${ this.pinchMgr.pinchRateInitTop } pinchInitDistance = ${ this.pinchMgr.vk }`
          ),
          o.Ys.FO(
            e.js.Wo,
            `Pinch pinchRate=${ this.pinchMgr.Pk },${ this.pinchMgr.Dk }`
          ),
          this.setPinchModeDragRange();
          const f = this.pinchMgr.yk(),
          E = f.x - ~~(
            (f.x - this.cN.x) * this.pinchMgr.Pk / this.pinchMgr.pinchRateInitTop
          ),
          R = f.y - ~~(
            (f.y - this.cN.y) * this.pinchMgr.Pk / this.pinchMgr.pinchRateInitTop
          );
          this.UN({
            x: E,
            y: R
          }),
          this.disablePageUIEventMoment()
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Xc,
            'BookViewer.prototype.onPinchOut',
            o.Ys.Js(t)
          )
        }
      }
      setEventValidState(t) {
        this.ZS = t
      }
      isPageUIEventValid() {
        return this.ZS
      }
      NT() {
        try {
          window.clearTimeout(this.YS),
          this.setEventValidState(!0)
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.zc,
            'BookViewer.prototype.enableEvent',
            o.Ys.Js(t)
          )
        }
      }
      disablePageUIEventMoment() {
        try {
          this.YS = window.setTimeout(() => {
            this.NT()
          }, 0),
          this.setEventValidState(!1)
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Hc,
            'BookViewer.prototype.disableEvent',
            o.Ys.Js(t)
          )
        }
      }
      setEventLockFlg(t) {
        this.isEventLock = t
      }
      FN() {
        M.showLoader(),
        this.setEventLockFlg(!0),
        r.Ue.jd.Nf.Mf.Ff.NE.$E(!0),
        r.Ue.jd.Nf.Mf.Uf.Yf.ed(!1)
      }
      XN() {
        M.hiddenLoader(),
        r.Ue.ZE.QE.ad() ||
        this.setEventLockFlg(!1),
        r.Ue.jd.Nf.Mf.Ff.NE.$E(!1),
        r.Ue.jd.Nf.Mf.Uf.Yf.ed(!0)
      }
      zN() {
        try {
          this.DN(!1),
          this.xT = null,
          this.GT = null
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.jc,
            'BookViewer.prototype.changeViewMode',
            o.Ys.Js(t)
          )
        }
      }
      HN(t) {
        if (
          o.Ys.FO(
            e.js.Wo,
            `BookViewer.disp ${ this.get_currentPageNum() }, ${ this.uD() }`
          ),
          this.MC.ck(),
          null != this.currentLayoutData &&
          null != this.currentLayoutData.page_info
        ) {
          switch (this.get_currentLayoutMode()) {
            case e.js.qn.VERTICAL:
              {
                const i = null != t ? t : this.get_currentPageNum();
                this.jN(i);
                break
              }
            case e.js.qn.Jn:
            case e.js.qn.Yn:
              this.jN();
              break;
            case e.js.qn.Zn:
              if (this.qN(this.IS(), this.gS())) return;
              this.JN();
              break;
            default:
              return void s.zs.onError(
                e.js.errorCode.dc,
                'BookViewer.prototype.disp',
                'return value is illegal'
              )
          }
          if (this.get_currentLayoutMode() != e.js.qn.VERTICAL) {
            this.MC.lk(this);
            const t = this.av(this.get_currentPageNum());
            if (t != this.av(this.uD())) {
              this.YN(t, 1 + e.js._u);
              const i = [
                t + 1,
                t - 1
              ];
              this.bN(i)
            }
          }
        }
      }
      qN(t, i) {
        try {
          const s = this.Je.jP(t),
          n = this.Je.jP(i);
          if (this.bookInfo.gT()) {
            const o = t + 1;
            if (1 <= t && - 1 == i && !this.currentLayoutData.Bk(o) && s.OT == e.Xn.ln) {
              const i = this.Je.jP(o);
              return (null == i || i.OT == e.Xn.cn) &&
              (
                this.hv(t),
                this.cv(this.av(o)).then(t => {
                  null != t &&
                  this.lv(t)
                }),
                !0
              )
            }
            if (2 <= i && - 1 == t && !this.currentLayoutData.Bk(i) && n.OT == e.Xn.cn) {
              const t = i - 1,
              s = this.Je.jP(t);
              return (null == s || s.OT == e.Xn.ln) &&
              (
                this.hv(i),
                this.cv(this.av(t)).then(t => {
                  null != t &&
                  this.lv(t)
                }),
                !0
              )
            }
          } else {
            const o = i + 1;
            if (1 <= i && - 1 == t && !this.currentLayoutData.Bk(o) && n.OT == e.Xn.cn) {
              const t = this.Je.jP(o);
              return (null == t || t.OT == e.Xn.ln) &&
              (
                this.hv(i),
                this.cv(this.av(i + 1)).then(t => {
                  null != t &&
                  this.lv(t)
                }),
                !0
              )
            }
            if (2 <= t && - 1 == i && t <= this.currentLayoutData.end && s.OT == e.Xn.ln) {
              const i = t - 1,
              s = this.Je.jP(i);
              return (null == s || s.OT == e.Xn.cn) &&
              (
                this.hv(t),
                this.cv(this.av(i)).then(t => {
                  null != t &&
                  this.lv(t)
                }),
                !0
              )
            }
          }
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Jc,
            'BookViewer.prototype.readDoublePage',
            o.Ys.Js(t)
          )
        }
        return !1
      }
      ZN() {
        o.Ys.FO(e.js.Wo, 'resizeVerticalPages');
        let t = document.getElementsByClassName('vertical-page');
        window.innerHeight;
        const i = this.QN(this.Je.jP(1).width),
        s = this.QN(document.body.clientWidth),
        n = this.QN(s > i ? i : s);
        let r = t.length;
        document.getElementById('newScreen').style.display = 'none';
        for (let i = 0; i < r; i++) {
          let s = t[i];
          s.style.width = n + 'px';
          let e = this.QN(parseInt(s.dataset.h) * (n / parseInt(s.dataset.w)));
          s.style.height = `${ e }px`
        }
        document.getElementById('newScreen').style.display = 'flex'
      }
      WB() {
        const t = r.Ue.Nd.zu(),
        i = r.Ue.Nd.Md.zu(),
        s = document.querySelector('.appendix-container'),
        e = (parseInt(i.dataset.h, 10), this.QN(document.body.clientWidth));
        t.style.overflowX = 'hidden',
        t.style.width = `${ document.body.clientWidth }px`;
        const n = this.QN(this.Je.jP(1).width);
        this.kS = Math.min(1, e / n),
        this.SS = this.QN(e > n ? n : e),
        i.style.width = `${ this.SS }px`,
        i.style.height = 'auto',
        this.tM();
        let o = this.QN(e > n ? n : e);
        if (i.style.width = `${ o }px`, this.ZN(), this.SS = o, this.kS < 1) {
          let t = 0;
          null != s &&
          (
            s.style.fontSize = `calc(1.5rem / ${ this.kS })`,
            t = 0 / this.kS,
            s.style.height = `${ t }px`,
            s.style.lineHeight = `${ t }px`
          )
        } else i.style.transform = '',
        null != s &&
        (
          s.style.fontSize = '1.5rem',
          s.style.height = '0px',
          s.style.lineHeight = '0px'
        )
      }
      iM() {
        for (let t = 0; t < this.currentLayoutData.Ck.length; t++) {
          const i = this.currentLayoutData.Ck[t],
          s = i.$k,
          e = i.Uk;
          for (let t = s; t <= e; t++) {
            const i = this.Je.jP(t);
            if (
              i &&
              (
                this.Je.ik(t),
                i.KA <= 0 &&
                (
                  this.Je.ek(t),
                  null != this.currentLayoutData.page_info[t - 1] &&
                  this.currentLayoutData.page_info[t - 1].n == t &&
                  (
                    delete this.currentLayoutData.page_info[t - 1],
                    this.YA &&
                    this.YA.uL
                  )
                )
              )
            ) for (const i in this.YA.uL) {
              const s = this.YA.uL[i],
              e = s.page.indexOf(t);
              0 <= e &&
              (1 == s.page.length ? delete this.YA.uL[i] : s.page.splice(e, 1))
            }
          }
        }
      }
      YN(t, i) {
        let s = !0;
        const e = this.currentLayoutData.Ck[t];
        let n = 0,
        o = this.Je.Ay() - 1;
        null != e.Uk &&
        (n = e.$k, o = e.Uk);
        for (let t = n; t <= o; t++) {
          const e = this.Je.jP(t);
          e ? e.KA = i : s = !1
        }
        return s
      }
      bN(t) {
        return At(
          this,
          void 0,
          void 0,
          (
            function * () {
              const i = [];
              t.forEach(
                t => {
                  if (
                    0 <= t &&
                    t < this.currentLayoutData.Ck.length &&
                    !this.YN(t, 1 + e.js.uu)
                  ) {
                    const s = this.cv(t).then(t => {
                      null != t &&
                      this.sM(t)
                    });
                    i.push(s)
                  }
                }
              ),
              yield Promise.all(i),
              this.iM()
            }
          )
        )
      }
      WP(t, i) {
        return At(
          this,
          void 0,
          void 0,
          (function * () {
            yield this.bN([this.av(t)]),
            this.YN(i, e.js._u)
          })
        )
      }
      eM(t) {
        try {
          switch (
              this.pinchMgr.pinching &&
              this.pinchModeEnd(!1),
              this.DN(!1),
              this.xT = null,
              this.GT = null,
              t
            ) {
            case e.js.do.NEXT:
              this.moveNext();
              break;
            case e.js.do.so:
              this.CN();
              break;
            default:
              return void s.zs.onError(
                e.js.errorCode.ja,
                'BookViewer.prototype.moveCurrentView',
                'return value is illegal'
              )
          }
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Qc,
            'BookViewer.prototype.moveCurrentView',
            o.Ys.Js(t)
          )
        }
      }
      movePage(t) {
        try {
          if (!o.Ys.UO(t, 0)) return void s.zs.onError(
            e.js.errorCode.qa,
            'BookViewer.prototype.movePage',
            'argument[pageNum] is illegal'
          );
          if (!this.Je.Ze(t)) return;
          this.isDispLock &&
          (this.isDispLock = !1),
          this.pinchMgr.pinching &&
          this.pinchModeEnd(!1),
          this.DN(!1),
          this.uk(),
          this.vs().Ps() &&
          this.Os.gs.iC(),
          this.xT = null,
          this.GT = null,
          this.hv(t),
          M.updateMoveBar(),
          this.HN(),
          this.userOperationDataMgr.Xm(this.contents_id, this.currentLayoutData.page_info[t - 1], t)
        } catch (t) {
          s.zs.onError(e.js.errorCode.tl, 'BookViewer.prototype.movePage', o.Ys.Js(t))
        }
      }
      nM(t, i) {
        if (this.enableTouch) {
          for (; l._p.length > 0; ) {
            const t = l._p.shift();
            window.clearTimeout(t)
          }
          l.rp = !1
        }
        globalThis.BV.EmitEvents.closeAllMenu(),
        !this.bookInfo.LT() &&
        this.currentLayoutData.Bk(i) ? globalThis.BV.EmitEvents.showTrialDialog() : (
          this.HP(),
          this.Je.Ze(i) ? (this.movePage(i), c.Ee.NO && this.rv(i)) : (
            this.hv(i),
            globalThis.BV.EmitEvents.showLoader(),
            this.cv(this.av(this.NB)).then(t => {
              null != t &&
              this.lv(t)
            })
          )
        ),
        globalThis.BV.EmitEvents.updateMoveBar(),
        window.event ? window.event.cancelBubble = !0 : t.cancelBubble = !0
      }
      selectPageFromMokuji(t, i) {
        this.nM(t, i)
      }
      oM(t) {
        try {
          if (!t) return void s.zs.onError(
            e.js.errorCode.Ja,
            'BookViewer.prototype.movePosString',
            'argument[posString] is illegal'
          );
          this.isDispLock &&
          (this.isDispLock = !1),
          this.pinchMgr.pinching &&
          this.pinchModeEnd(!1),
          this.DN(!1),
          this.xT = null,
          this.GT = null,
          window.location.href = t,
          (
            window.location.hash.length > 1 ||
            window.location.search.length > 1
          ) &&
          (
            this.get_currentLayoutMode() == e.js.qn.Yn &&
            this.tS(e.js.qn.Jn),
            this.RS(),
            this.uk(),
            this.HN()
          )
        } catch (t) {
          s.zs.onError(e.js.errorCode.il, 'BookViewer.prototype.movePage', o.Ys.Js(t))
        }
      }
      UT(t, i) {
        const s = this.currentLayoutData.page_info.length;
        for (let e = 0; e < s; e++) {
          const s = this.currentLayoutData.page_info[e];
          if (s && s.idx == t && s.ps <= i && s.pe >= i) return void (
            this.currentLayoutData.Bk(s.n) ? (this.hv(1), this.movePage(1)) : (this.hv(s.n), this.movePage(s.n))
          )
        }
        this.Je.Ze(1) ? this.movePage(1) : (
          this.hv(1),
          M.showLoader(),
          this.cv(this.av(1)).then(t => {
            null != t &&
            this.lv(t)
          })
        )
      }
      rM(t, i) {
        let n = e.js.Qn.io;
        try {
          const s = r.Ue.Screen.Ke.$e();
          if (this.get_currentLayoutMode() == e.js.qn.Yn) {
            if (Math.abs(t) < Math.abs(i) && this.xT) {
              const t = this.xT.YP;
              i < 0 &&
              t <= s.height - this.xT.height + this.xT.height / e.js.ro ? n = e.js.Qn.NEXT : i > 0 &&
              t >= this.xT.height / e.js.ro * - 1 &&
              (n = e.js.Qn.so)
            }
          } else Math.abs(t) > Math.abs(i) &&
          (n = t < 0 ? e.js.Qn.so : e.js.Qn.NEXT)
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.ol,
            'BookViewer.prototype.setFlingDir',
            o.Ys.Js(t)
          )
        }
        return n
      }
      hM(t, i) {
        try {
          t.zC(i)
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.rl,
            'BookViewer.prototype.setImgPos',
            o.Ys.Js(t)
          )
        }
      }
      NN() {
        try {
          const t = r.Ue.Screen.Ke.$e();
          this.dN = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          },
          this.RN = e.js._o.HORIZONTAL;
          const i = this.get_currentLayoutMode();
          i == e.js.qn.Zn &&
          this.GT ? (
            this.dN.left = 0 - this.xT.width - this.GT.width + e.js.ho,
            this.dN.right = t.width - e.js.ho,
            this.dN.top = Math.min(this.xT.YP, this.GT.YP),
            this.dN.bottom = Math.max(this.xT.YP, this.GT.YP)
          ) : i != e.js.qn.Yn ||
          this.tN ? (
            this.dN.left = 0 - this.xT.width + e.js.ho,
            this.dN.right = t.width - e.js.ho,
            this.status == h.w.zw ? (this.dN.top = 0, this.dN.bottom = 0) : (this.dN.top = this.xT.YP, this.dN.bottom = this.xT.YP)
          ) : (
            this.RN = e.js._o.VERTICAL,
            this.dN.left = 0,
            this.dN.right = 0,
            this.dN.top = 0 - this.xT.height + e.js.ao,
            this.dN.bottom = t.height - e.js.ao
          )
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.hl,
            'BookViewer.prototype.setDragRange',
            o.Ys.Js(t)
          )
        }
      }
      setScaleModeDragRange() {
        try {
          const t = r.Ue.Screen.Ke.$e(),
          i = this.get_currentPageNum(),
          s = this.Je.jP(i).qP;
          let e = s.width,
          n = s.height;
          if (this.mS() && i + 1 < this.Je.Ay()) {
            const t = this.currentLayoutData.page_info[i - 1],
            s = this.currentLayoutData.page_info[i];
            if (
              t.spr == E.ds.an.ln &&
              s.spr == E.ds.an.cn ||
              t.spr == E.ds.an.cn &&
              s.spr == E.ds.an.ln
            ) {
              const t = this.Je.jP(i + 1).qP;
              e += t.width;
              const s = t.height;
              n < s &&
              (n = s)
            }
          }
          if (
            t.width < e ? (this.dN.left = t.width - e, this.dN.right = 0) : (this.dN.left = 0, this.dN.right = t.width - e),
            t.height < n ? (this.dN.top = t.height - n, this.dN.bottom = 0) : (this.dN.top = 0, this.dN.bottom = t.height - n),
            this.mS()
          ) {
            const t = this.IS(),
            i = this.gS();
            - 1 != t &&
            - 1 != i &&
            this.bookInfo.gT() &&
            (this.dN.left += s.width, this.dN.right += s.width)
          }
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.al,
            'BookViewer.prototype.setScaleModeDragRange',
            o.Ys.Js(t)
          )
        }
      }
      aM(t, i, s, n, h) {
        let a,
        c = null;
        const l = r.Ue.Screen.Ke.$e(),
        _ = this.get_currentPageNum(),
        u = this.IS(),
        d = this.gS(),
        f = this.bookInfo.gT(),
        E = f ? i < 0 : i > 0,
        R = f ? i > 0 : i < 0;
        if (this.mS()) {
          a = R ? - 1 != d ? d + i : u + i : - 1 != u ? u + i : d + i;
          const t = this.Je.jP(a);
          if (2 == i) {
            const i = this.Je.jP(a - 1);
            if (
              f ||
              this.zoomScaleInfo.isScaled() &&
              this.drawPinchingFrame(),
              null == t ||
              null == i
            ) return null;
            if (f && t.OT == e.Xn.cn && i.OT == e.Xn.ln);
             else if (f || t.OT != e.Xn.ln || i.OT != e.Xn.cn) return null;
            if (this.currentLayoutData.Bk(a)) return null
          } else if ( - 2 == i) {
            const i = this.Je.jP(a + 1);
            if (null == t || null == i) return null;
            if (f && t.OT == e.Xn.ln && i.OT == e.Xn.cn);
             else if (f || t.OT != e.Xn.cn || i.OT != e.Xn.ln) return null
          }
        } else a = _ + i;
        const I = this.Je.jP(a);
        if (null == I) return null;
        c = I.qP;
        const g = this.Je.jP(_);
        let O,
        w,
        p = this.cM(e.js.lo);
        switch (this.get_currentLayoutMode()) {
          case e.js.qn.Zn:
            w = this.iS,
            O = w.getImageSize(a, s),
            g.OT == e.Xn.NONE &&
            (p += ~~((l.width - t.width) / 2)),
            I.OT == e.Xn.NONE &&
            (p += ~~((l.width - O.width) / 2)),
            i % 2 == 0 &&
            (p = 0);
            break;
          case e.js.qn.Yn:
            w = this.lM,
            O = w.getImageSize(a, s),
            p *= 2;
            break;
          case e.js.qn.VERTICAL:
            w = this._M,
            O = w.getImageSize(a, s),
            p *= 2;
            break;
          case e.js.qn.Jn:
          default:
            w = this.uM,
            O = w.getImageSize(a, s),
            l.width > t.width &&
            (p += ~~((l.width - t.width) / 2)),
            l.width > O.width &&
            (p += ~~((l.width - O.width) / 2))
        }
        const m = w.Jk(a, 1);
        if (m.x = E ? t.JP - O.width - p : t.JP + t.width + p, this.hM(c, m), n) {
          const t = {
            src: I.fC,
            pC: I.RC,
            mC: I.IC,
            $s: I.$s,
            position: m,
            size: O,
            AC: this,
            Vm: a,
            CC: !(i > 0) ||
            h,
            bC: !0,
            yC: !0
          };
          o.Ys.FO(e.js.Wo, `setNextPrevPagePos page-${ a }`),
          this.dM(c, t)
        }
        return c
      }
      fM(t, i, s, n) {
        return o.Ys.FO(
          e.js.Wo,
          `getNextPrevImageObj from: ${ t.vC }  + (${ i }) ${ n ? 'true' : 'false' }`
        ),
        this.aM(t, i, s, !0, n)
      }
      EM(t) {
        try {
          if (this.mS()) for (let i = 1; i <= e.js.Vo; i++) o.Ys.FO(e.js.Wo, `lookAhead from: ${ t.vC } + (${ i })`),
          this.fM(t, i, this.zoomScaleInfo.eb(), !0);
           else {
            for (let i = 1; i <= e.js.Vo - 1; i++) o.Ys.FO(e.js.Wo, `lookAhead from: ${ t.vC } + (${ i })`),
            this.fM(t, i, this.zoomScaleInfo.eb(), !0);
            o.Ys.FO(e.js.Wo, `lookAhead from: ${ t.vC } + (-1)`),
            this.fM(t, - 1, this.zoomScaleInfo.eb(), !0)
          }
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.ul,
            'BookViewer.prototype.startLookAheadImage',
            o.Ys.Js(t)
          )
        }
      }
      RM(t) {
        this.Os.ws.sC(),
        this.Os.ws.QA(this.xs.dB),
        this.Os.gs.sC(),
        t ? this.Os.gs.iC() : this.Os.gs.QA()
      }
      LN(t, i) {
        if (
          o.Ys.FO(e.js.Wo, `drawNextPrevImage: ${ String(t) },${ String(i) }`),
          o.Ys.FO(e.js.Wo, `drawNextPrevImage: ${ String(t) },${ String(i) }`),
          null == this.xT
        ) return;
        i &&
        this.RM();
        const n = this.zoomScaleInfo.isScaled();
        switch (this.get_currentLayoutMode()) {
          case e.js.qn.Zn:
            if (t) this.GT &&
            (
              this.hN = this.aM(this.GT, - 1, this.zoomScaleInfo.eb(), !1),
              this.hN &&
              this._k(this.hN),
              this.aN = this.aM(this.GT, - 2, this.zoomScaleInfo.eb(), !1),
              this.aN &&
              this._k(this.aN),
              this.hN = null,
              this.aN = null
            ),
            this.oN ? (
              this.aM(this.xT, 1, this.zoomScaleInfo.eb(), !1),
              i &&
              !n &&
              this.IM(this.oN)
            ) : this.oN = this.fM(this.xT, 1, this.zoomScaleInfo.eb(), n),
            this.oN &&
            (
              this.rN ? (
                this.aM(this.oN, 2, this.zoomScaleInfo.eb(), !1),
                i &&
                !n &&
                this.IM(this.rN)
              ) : this.rN = this.fM(this.oN, 2, this.zoomScaleInfo.eb(), n)
            );
             else {
              this.xT ? (
                this.oN = this.aM(this.xT, 1, this.zoomScaleInfo.eb(), !1),
                this.oN &&
                this._k(this.oN),
                this.rN = this.aM(this.xT, 2, this.zoomScaleInfo.eb(), !1),
                this.rN &&
                this._k(this.rN),
                this.oN = null,
                this.rN = null
              ) : o.Ys.FO(e.js.Wo, 'drawNextPrevImage: curMainPageImage null!!');
              const t = this.GT ? this.GT : this.xT;
              this.hN ? (
                this.aM(t, - 1, this.zoomScaleInfo.eb(), !1),
                i &&
                !n &&
                this.IM(this.hN)
              ) : this.hN = this.fM(t, - 1, this.zoomScaleInfo.eb(), n),
              this.hN &&
              (
                this.aN ? (
                  this.aM(this.hN, - 2, this.zoomScaleInfo.eb(), !1),
                  i &&
                  !n &&
                  this.IM(this.aN)
                ) : this.aN = this.fM(this.hN, - 2, this.zoomScaleInfo.eb(), n)
              )
            }
            break;
          case e.js.qn.Yn:
            t ? (
              this.hN = this.aM(this.xT, - 1, this.zoomScaleInfo.eb(), !1),
              this.hN &&
              (this._k(this.hN), this.hN = null)
            ) : (
              this.oN = this.aM(this.xT, 1, this.zoomScaleInfo.eb(), !1),
              this.oN &&
              (this._k(this.oN), this.oN = null)
            );
          case e.js.qn.VERTICAL:
          case e.js.qn.Jn:
            t ? this.oN ? (
              this.aM(this.xT, 1, this.zoomScaleInfo.eb(), !1),
              i &&
              !n &&
              this.IM(this.oN)
            ) : this.oN = this.fM(this.xT, 1, this.zoomScaleInfo.eb(), n) : this.hN ? (
              this.aM(this.xT, - 1, this.zoomScaleInfo.eb(), !1),
              i &&
              !n &&
              this.IM(this.hN)
            ) : this.hN = this.fM(this.xT, - 1, this.zoomScaleInfo.eb(), n);
            break;
          default:
            s.zs.onError(
              e.js.errorCode.Ic,
              'BookViewer.prototype.drawNextPrevImage',
              'return value is illegal'
            )
        }
      }
      AN() {
        try {
          if (this.status == h.w.zw) return;
          const t = this.Je.jP(this.get_currentPageNum());
          switch (this.get_currentLayoutMode()) {
            case e.js.qn.Zn:
              {
                const t = this.iS.nB(this.get_currentPageNum());
                this.xT = t.oB,
                this.GT = t.sub;
                break
              }
            case e.js.qn.VERTICAL:
            case e.js.qn.Jn:
            case e.js.qn.Yn:
              null != t &&
              (this.xT = t.qP, this.GT = null);
              break;
            default:
              s.zs.onError(
                e.js.errorCode.gc,
                'BookViewer.prototype.setDragImage',
                'return value is illegal'
              )
          }
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.fl,
            'BookViewer.prototype.setDragImage',
            o.Ys.Js(t)
          )
        }
      }
      gM(t, i) {
        try {
          if (o.Ys.FO(e.js.Wo, `moveToNearAnchor: ${ String(i) }`), null == t) return void o.Ys.FO(e.js.$o, 'moveToNearAnchor ignored.');
          const s = this.get_currentPageNum();
          i &&
          this.OM(s, void 0, void 0)
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.El,
            'BookViewer.prototype.moveToNearAnchor',
            o.Ys.Js(t)
          )
        }
      }
      MN(t, i) {
        if (
          this.RN != e.js._o.uo &&
          (
            t.x = Math.min(this.dN.right, Math.max(this.dN.left, t.x)),
            t.y = Math.min(this.dN.bottom, Math.max(this.dN.top, t.y))
          ),
          o.Ys.FO(e.js.Wo, `dragDraw (${ t.x }, ${ t.y })`),
          i &&
          this.RM(),
          this.status != h.w.zw
        ) {
          const s = this.bookInfo.gT();
          if (this.mS()) {
            const n = this.iS.hB(this.get_currentPageNum()),
            o = this.zoomScaleInfo.isScaled() ? t.y : this.xT.YP;
            if (this.hM(this.xT, {
              x: t.x,
              y: o
            }), this.GT) {
              const i = this.zoomScaleInfo.isScaled() ? t.y : this.GT.YP,
              e = s ? - 1 : 1;
              this.hM(this.GT, {
                x: t.x + e * this.xT.width,
                y: i
              })
            }
            i &&
            (
              this.IM(this.xT, {
                fillRect: !0
              }),
              this.GT &&
              this.IM(this.GT),
              1 == this.zoomScaleInfo.eb() ? this.GT ? this.GT.JP < this.xT.JP ? this.wM(this.GT.Vm, this.xT.Vm) : this.wM(this.xT.Vm, this.GT.Vm) : this.wM(this.xT.Vm, 0) : a.Vs.Tw()
            );
            let r = !1,
            h = !1;
            const c = this.IS(),
            l = this.Je.jP(c);
            if (s) {
              if ( - 1 != this.gS()) this.xT.JP < n ? r = !0 : this.GT ? this.GT.JP + this.GT.width > n &&
              (r = !0, h = !0) : this.xT.JP + this.xT.width > n &&
              (r = !0, h = !0);
               else if (l && l.OT == e.Xn.NONE) {
                const t = this.xT.JP + this.xT.width / 2 - n;
                0 != t &&
                (r = !0, t > 0 && (h = !0))
              }
            } else if ( - 1 != c) if (l && l.OT == e.Xn.NONE) {
              const t = this.xT.JP + this.xT.width / 2 - n;
              0 != t &&
              (r = !0, t < 0 && (h = !0))
            } else {
              const t = this.xT.JP + this.xT.width - n;
              t > 0 ? r = !0 : this.GT ? this.GT.JP < n &&
              (r = !0, h = !0) : t < 0 &&
              (r = !0, h = !0)
            } else {
              const t = this.xT.JP - n;
              0 != t &&
              (r = !0, t < 0 && (h = !0))
            }
            this.lN &&
            (r = !1, this.lN = !1),
            r &&
            (
              h ||
              this.canMoveNext() ? h &&
              !this.canMovePrevious() &&
              (r = !1, this.lN = !1) : (r = !1, this.lN = !1)
            ),
            this.tN &&
            (r = !1, this.lN = !1),
            r &&
            this.LN(!h, i)
          } else {
            this.hM(this.xT, t),
            i &&
            (
              this.IM(this.xT, {
                fillRect: !0
              }),
              1 == this.zoomScaleInfo.eb() ? this.wM(this.xT.Vm, 0) : a.Vs.Tw()
            );
            const n = r.Ue.Screen.Ke.$e();
            let o = !1,
            h = !1;
            if (this.get_currentLayoutMode() == e.js.qn.Yn) {
              const t = this.xT.YP;
              0 != t &&
              (o = !0, t > 0 && (h = !0))
            } else {
              const t = n.width / 2,
              i = this.xT.JP + this.xT.width / 2 - t;
              0 != i &&
              (o = !0, (s && i > 0 || !s && i < 0) && (h = !0))
            }
            o &&
            (
              h ||
              this.canMoveNext() ? h &&
              !this.canMovePrevious() &&
              (o = !1, this.lN = !1) : (o = !1, this.lN = !1)
            ),
            o &&
            this.LN(!h, i)
          }
        }
        this.zoomScaleInfo.isScaled() &&
        this.drawPinchingFrame()
      }
      BT() {
        return this.bookInfo.BT()
      }
      kB(t) {
        this.nS(t),
        0 != this.JT &&
        this.hS(),
        this.VT(!0)
      }
      QN(t) {
        if (Number.isInteger(t)) return t % 2 == 0 ? t : t + 1;
        {
          let i = ~~t;
          return i % 2 == 0 ? i : Math.ceil(t)
        }
      }
      VT(t, i) {
        return At(
          this,
          void 0,
          void 0,
          (
            function * () {
              const s = r.Ue.ze.RR.Fe(),
              h = s.options.item(s.selectedIndex).value,
              a = r.Ue.ze.zR.nI(0) ? E.ds.ye.mn : E.ds.ye.be,
              _ = this.bookInfo.Gy;
              this.bookInfo.VT(h, a);
              let u = !1,
              d = !1,
              f = !0;
              if (null != this.currentLayoutData && null != this.getType()) {
                const t = r.Ue.ze.mI.nI(0),
                i = this.$B();
                c.Ee.NO !== (t && !i) &&
                (f = void 0 === c.Ee.NO, c.Ee.NO = t && !i, d = !0, u = !0)
              }
              const R = r.Ue.ze.aI.nI(0);
              if (c.Ee.fe != R && (c.Ee.fe = R, u = !0), _ != this.bookInfo.Gy || u) {
                const s = r.Ue.Nd.zu();
                for (; s.firstChild; ) s.removeChild(s.firstChild);
                this.iS = new pt(this.Je, this.bookInfo.gT()),
                this.uM = new Ot(this.Je, this.bookInfo.gT()),
                this.lM = new wt(this.Je, this.bookInfo.gT()),
                this._M = new mt(this.Je, this.bookInfo.gT()),
                this.lookAheadTextImage.length = 0,
                this.FN(),
                null == this.currentLayoutData ? this.currentLayoutData = new It : i &&
                (this.currentLayoutData.page_info = void 0);
                const h = yield this.fS(t);
                if (null != h) {
                  o.Ys.FO(
                    e.js.Wo,
                    `sourcetype = "${ h._S.page_data.page_info[0].sourcetype }"`
                  ),
                  o.Ys.FO(e.js.Wo, `type = "${ h._S.page_data.page_info[0].type }"`);
                  const t = r.Ue.ze.mI.nI(0),
                  i = h._S.page_data.page_info[0].type == E.ds.un.dn,
                  s = this.bookInfo.BT() ||
                  t &&
                  !i;
                  if ((c.Ee.NO !== s || d) && (f = void 0 === c.Ee.NO, c.Ee.NO = s, d = !0), d) {
                    Lt.JB(),
                    Lt.UB(s),
                    this.ub = s;
                    const t = this.QB();
                    this.tS(t),
                    s ? (l.$p(), n.E.Rw() && r.Ue.jd.Nf.Mf.Uf.Yf.remove()) : (l.Wp(), r.Ue.jd.Nf.Mf.Uf.Yf._E()),
                    window.dispatchEvent(new Event('resize'))
                  }
                  this.get_currentLayoutMode() != e.js.qn.VERTICAL ? yield this.lv(h) : (
                    r.Ue.dd.ed(!1),
                    this.uP(this.currentLayoutData.start, this.currentLayoutData.end).then(
                      () => {
                        this.Je.Ay();
                        const t = r.Ue.Nd.zu(),
                        i = document.createElement('div');
                        i.id = r.Ue.Nd.Md.Wd(),
                        this.bookInfo.BT() ||
                        i.classList.add('regacy'),
                        t.appendChild(i);
                        const s = document.createElement('img');
                        s.src = './image/loader.gif',
                        s.classList.add('page-loading'),
                        this.WB();
                        let e = 0;
                        const o = this.$B() &&
                        n.E.nw ? n.E.rw : 1,
                        a = this.Je.jP(1).width,
                        c = document.body.clientWidth,
                        l = this.QN(c > a ? a : c);
                        let _;
                        i.style.width = `${ l }px`,
                        i.dataset.w = `${ a }`,
                        this.iN = [];
                        const u = this.currentLayoutData.kk,
                        d = u.length;
                        i.style.height = 'auto';
                        for (let t = 0; t < d; t++) {
                          const n = u[t];
                          n.pM = [],
                          _ = document.createElement('div'),
                          _.classList.add('chunk'),
                          _.dataset.n = `${ n.$k }`,
                          _.dataset.o = `${ e }`,
                          _.dataset.w = `${ a }`,
                          n.offsetTop = e,
                          n.width = a,
                          n.height = 0;
                          for (let t = n.$k; t <= n.Uk; t++) {
                            const i = this.Je.jP(t),
                            o = a / i.width,
                            r = ~~(i.height * o);
                            this.iN[t] = {
                              Vm: t,
                              width: a,
                              height: r,
                              scale: o,
                              offsetTop: null
                            },
                            n.pM.push(this.iN[t]),
                            n.height += r;
                            const h = document.createElement('div');
                            h.classList.add('vertical-page'),
                            h.id = `page_${ t }`,
                            h.style.width = `${ l }px`;
                            let c = this.QN(this.iN[t].height * (l / this.iN[t].width));
                            h.style.height = `${ c }px`,
                            h.dataset.n = `${ t }`,
                            h.dataset.w = `${ i.width }`,
                            h.dataset.h = `${ i.height }`,
                            this.iN[t].offsetTop = e,
                            h.dataset.o = `${ e }`,
                            e += i.height,
                            h.appendChild(s.cloneNode(!0)),
                            _.appendChild(h)
                          }
                          _.dataset.h = `${ n.height }`,
                          _.style.width = '100%',
                          _.style.height = 'auto',
                          i.appendChild(_)
                        }
                        const f = document.createElement('div');
                        f.classList.add('appendix-area'),
                        f.style.maxWidth = ~~(this.iN[1].width / o) + 'px',
                        i.appendChild(f),
                        i.dataset.h = `${ e }`,
                        this.rv(this.zP() [0]),
                        this.lv(h)
                      }
                    )
                  )
                }
                return !0
              }
              if (this.$B()) {
                const t = this.get_currentPageNum();
                r.Ue.Nd.Md.$d().forEach(
                  i => {
                    const s = i.parentElement,
                    e = parseInt(s.dataset.n, 10);
                    Math.abs(e - t) > 0 &&
                    s.removeChild(i)
                  }
                ),
                this.clearDisplay(),
                this.RM(this.vs().Ps()),
                this.AN(),
                this.IM(this.xT),
                this.GT &&
                this.IM(this.GT)
              }
              return !1
            }
          )
        )
      }
      mM() {
        const t = this.getType();
        if (this.$B() || t == E.ds.un.fn) {
          const t = r.Ue.ze.RR.Fe();
          1 == t.length &&
          (
            r.Ue.jd.Nf.Mf.Uf.Yf.ed(!1),
            r.Ue.jd.Nf.Mf.Uf.Yf.fE(),
            t.disabled = !0,
            document.getElementsByName('innerSize') [0].className = 'inner_disabled'
          )
        }
      }
      vM() {
        if (this.mM(), 0 != this.JT && !this.$B()) {
          const t = [
            !0
          ];
          M.wb(t)
        }
        null != this.currentLayoutData.toc_info &&
        M.Pb(this.currentLayoutData.toc_info, this.currentLayoutData.end)
      }
      sM(t) {
        this.currentLayoutData.Gk(this, t._S.page_data),
        this.vM()
      }
      lv(t) {
        return At(
          this,
          void 0,
          void 0,
          (
            function * () {
              if (
                this.sM(t),
                this.xT = null,
                this.xs.RT(),
                o.Ys.FO(e.js.Wo, `contenttype = "${ this.getType() }"`),
                this.bookInfo.BT()
              ) r.Ue.ze.mI.TR(),
              r.Ue.ze.xI.TR(),
              r.Ue.ze.YI.TR();
               else if (this.getType() != E.ds.un.En) {
                let t;
                r.Ue.ze.mI.rI( - 1),
                r.Ue.ze.xI.rI( - 1),
                r.Ue.ze.mI.oI(1, !0),
                r.Ue.ze.xI.oI(1, !0),
                a.Vs.yw(),
                this._b = a.Vs.mw(),
                t = this.ub ? e.js.qn.VERTICAL : this._b == e.js.zn.Hn ? e.js.qn.Jn : e.js.qn.Zn,
                this.tS(t),
                r.Ue.ze.mI.TR(),
                r.Ue.ze.xI.TR()
              }
              if (
                this.YN(t.index, 1 + e.js._u),
                this.status == h.w.Fw &&
                r.Ue.jd.qd.tf(this.bookInfo.bT()),
                M.qT(t._S.page_data.start - 1),
                void 0 !== this.FT &&
                void 0 !== this.XT
              ) this.UT(this.FT, this.XT),
              b.AP(this.is_reflowable_page());
               else {
                const i = this.get_currentPageNum();
                this.currentLayoutData.Bk(i) &&
                this.hv(1),
                this.get_currentLayoutMode() == e.js.qn.Yn ? this.Eb(e.js.qn.Yn) : this.HN(),
                b.AP(this.is_reflowable_page());
                const s = this.av(this.uD());
                if (t.index == s) {
                  const i = [
                    t.index + 1,
                    t.index - 1
                  ];
                  yield this.bN(i)
                }
              }
            }
          )
        )
      }
      wM(t, i) {
        if (
          null == this.currentLayoutData ||
          null == this.currentLayoutData.page_info
        ) return;
        let s,
        e;
        t > 0 &&
        t <= this.currentLayoutData.page_info.length &&
        (s = this.currentLayoutData.page_info[t - 1].map_info),
        i > 0 &&
        i <= this.currentLayoutData.page_info.length &&
        (e = this.currentLayoutData.page_info[i - 1].map_info);
        const n = r.Ue.Gu(`clickablemap${ this.pN }`);
        if (n) {
          const t = n.parentNode;
          t &&
          t.removeChild(n)
        }
        this.pN += 1;
        const o = document.createElement('map');
        if (
          o.id = `clickablemap${ this.pN }`,
          o.name = `clickablemap${ this.pN }`,
          s ||
          e
        ) {
          let n;
          if (s) {
            n = s.length;
            for (let i = 0; i < n; i++) {
              const e = this.PM(t, s[i]);
              o.appendChild(e)
            }
          }
          if (e) {
            n = e.length;
            for (let t = 0; t < n; t++) {
              const s = this.PM(i, e[t]);
              o.appendChild(s)
            }
          }
        }
        document.body.appendChild(o),
        r.Ue.Screen.Xu.sd() &&
        (r.Ue.Screen.Xu.rd('#' + o.id), r.Ue.Screen.Xu.ed(!0))
      }
      PM(t, i) {
        const s = document.createElement('area');
        let e = '';
        const r = i.poly.split(','),
        h = this.Je.jP(t),
        a = h.qP,
        c = a.Gm;
        let _ = a.width / h.width,
        u = a.height / h.height;
        n.E.nw &&
        (_ /= n.E.rw, u /= n.E.rw, c.x /= n.E.rw, c.y /= n.E.rw);
        for (let t = 0; t < r.length; t += 2) {
          if (isNaN(parseInt(r[t], 10))) {
            const i = r[t].substring(1, r[t].length);
            e += ~~(parseInt(i, 10) * _ + c.x) + ','
          } else e += ~~(parseInt(r[t], 10) * _ + c.x) + ',';
          if (isNaN(parseInt(r[t + 1], 10))) {
            const i = r[t + 1].substring(0, r[t + 1].length - 1);
            e += ~~(parseInt(i, 10) * u + c.y) + ','
          } else e += ~~(parseInt(r[t + 1], 10) * u + c.y) + ','
        }
        const d = e.split(',');
        d[d.length - 1] ||
        d.pop();
        const f = d.length;
        if (o.Ys.WO(d)) {
          const t = d[0],
          i = d[1],
          s = d[2],
          o = d[7],
          r = parseInt(s, 10) - parseInt(t, 10),
          h = parseInt(o, 10) - parseInt(i, 10),
          a = r > h ? h : r,
          c = ~~(a / 8 * n.E.rw),
          l = ~~(a / 8 * n.E.rw);
          e = '';
          for (let t = 0; t < f; t++) d[t] = 0 == ~~(t % 2) ? 0 === t ||
          t > ~~(f / 2) ? (~~d[t] - c).toString(10) : (~~d[t] + c).toString(10) : t < ~~(f / 2) ? (~~d[t] - l).toString(10) : (~~d[t] + l).toString(10),
          e += d[t] + ','
        }
        if (l.Sp(s), 2 != i.t) s.href = i.link;
         else {
          const t = t => {
            t.preventDefault(),
            this.is_reflowable_page() ? (this.TS(), this.Os._C(this.FT), this.Os.uC(this.XT)) : this.DS(this.NB),
            this.nM(t, parseInt(i.link, 10))
          };
          if (this.enableTouch) {
            const i = i => {
              l.Np(i, (s, e) => {
                t(i)
              })
            };
            s.addEventListener('touchstart', i, !1),
            s.addEventListener('touchmove', i, !1),
            s.addEventListener('touchend', i, !1)
          }
          s.addEventListener(
            'click',
            i => {
              const s = Math.abs(l.hp - l.cp),
              e = Math.abs(l.ap - l.lp);
              s < 10 &&
              e < 10 &&
              t(i)
            },
            !1
          ),
          s.href = '#cid=' + this.contents_id
        }
        return s.shape = 'poly',
        s.coords = e.substring(0, e.length - 1),
        this.enableTouch &&
        (s.style.cursor = 'pointer'),
        s
      }
      DM(t, i) {
        if (0 == i) if (null == t) o.Ys.FO(e.js.Wo, 'onImageLoaded : imgObj NOT FOUND!!');
         else {
          o.Ys.FO(e.js.Wo, 'imgObj imageName = ' + t.vC),
          t.PC = !0,
          t.yC ||
          this.clearDisplay();
          const i = this.IM(t);
          this.pinchMgr.pinchPaused &&
          (
            o.Ys.FO(e.js.Wo, 'pinchPaused onloadfunc'),
            this.pinchMgr.pinching ||
            this.GB ? (this.drawPinchingFrame(), this.GB = !1) : this.GB = !0
          ),
          i &&
          (t.TC = !1)
        }
      }
      dM(t, i) {
        return At(
          this,
          void 0,
          void 0,
          (
            function * () {
              if (o.Ys.FO(e.js.Wo, `fireInvoke page-${ i.Vm }`), i.$s && !t.mL) {
                t.BC(i);
                const s = yield this.YA.OL(this, i.$s);
                if (null != s) {
                  i.mL = s.mL,
                  i.Yy = s.Yy;
                  const e = yield t.SC(this, i);
                  this.DM(t, e)
                }
              } else {
                const s = yield t.SC(this, i);
                this.DM(t, s)
              }
            }
          )
        )
      }
      _k(t) {
        o.Ys.FO(e.js.Wo, `deleteOneImage: ${ t.vC }`);
        const i = t.vC,
        s = this.MC.hk(i);
        if (null == s) return void o.Ys.FO(e.js.Wo, 'deleteOneImage: imgObj NOT FOUND!!');
        const n = s.Vm;
        this.isDispLock &&
        (
          s !== this.yS &&
          s !== this.LS &&
          s !== this.AS ||
          (
            o.Ys.FO(
              e.js.Wo,
              'deleteOneImage: animation use imgObj delete imagename = ' + i
            ),
            this.isDispLock = !1
          )
        ),
        s.PC = !1,
        s.DC = !1,
        o.Ys.FO(
          e.js.Wo,
          `DeleteOneImage! MangaImageArray[${ i }]: ${ s.vC }: ${ String(s.DC) }`
        ),
        a.Vs.Ww(s.Bs(), s.vC),
        this.MC.ak(i),
        t.clearData(),
        this.lookAheadTextImage &&
        this.lookAheadTextImage[n - 1] &&
        (
          x.rn.release(this.lookAheadTextImage[n - 1]),
          delete this.lookAheadTextImage[n - 1]
        )
      }
      uk() {
        try {
          this.MC.uk(this),
          this.xs.RT(),
          this.xT = null,
          this.GT = null,
          this.SN()
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Tl,
            'BookViewer.prototype.deleteAllImage',
            o.Ys.Js(t)
          )
        }
      }
      TM(t) {
        o.Ys.FO(e.js.Wo, 'release canvas'),
        t.width = 0,
        t.height = 0,
        t.remove()
      }
      bM(t) {
        o.Ys.FO(e.js.Wo, 'shrink canvas'),
        t.width = 0,
        t.height = 0
      }
      KB() {
        Array.from(document.getElementsByTagName('canvas')).forEach(t => {
          this.TM(t)
        })
      }
      TN() {
        this.bM(r.Ue.Screen.Ke.zu()),
        this.bM(r.Ue.Ed.zu())
      }
      DN(t) {
        try {
          this.dragMgr.pageDragging &&
          (this.yM(this, t), this.dragMgr.pageDragging = !1)
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Ll,
            'BookViewer.prototype.stopDragMode',
            o.Ys.Js(t)
          )
        }
      }
      GN(t, i, n) {
        try {
          if (this.status == h.w.zw) return;
          if (this.pinchMgr.pinching) {
            if (this.pinchMgr.pinchPaused = !0, !this._N) {
              o.Ys.FO(e.js.Wo, 'pinchModeImage invoke start'),
              this._N = new lt;
              const t = Object.assign(Object.assign({
              }, this.xT.LC()), {
                AC: this,
                CC: !1,
                bC: !1,
                yC: !0
              });
              if (this.dM(this._N, t), this.GT) {
                this.uN = new lt;
                const t = Object.assign(Object.assign({
                }, this.GT.LC()), {
                  AC: this,
                  CC: !1,
                  bC: !1,
                  yC: !0
                });
                this.dM(this.uN, t)
              }
            }
            return
          }
          this.DN(!0),
          this.SN(),
          this.IN.x = e.js.yo,
          this.IN.y = e.js.yo,
          this.xT &&
          this.gM(this.xT, n),
          this.xT = null,
          this.GT = null
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Al,
            'BookViewer.prototype.dragEndSub',
            o.Ys.Js(t)
          )
        }
      }
      LM(t, i, n) {
        try {
          if (n) this.IN.x = t,
          this.IN.y = i;
           else {
            const s = Math.abs(t),
            n = Math.abs(i);
            this.IN.x = s < e.js.bo ? e.js.bo : s,
            this.IN.y = n < e.js.bo ? e.js.bo : n,
            t < 0 &&
            (this.IN.x *= - 1),
            i < 0 &&
            (this.IN.y *= - 1)
          }
          o.Ys.FO(e.js.Wo, `setSpeed ADJUST (${ this.IN.x }, ${ this.IN.y })`)
        } catch (t) {
          s.zs.onError(e.js.errorCode.Cl, 'BookViewer.prototype.setSpeed', o.Ys.Js(t))
        }
      }
      AM(t, i, n) {
        try {
          if (t.HC(() => {
            this.AM(t, i, n)
          }), !this.isDispLock) return void t.jC();
          if (Math.abs(this.IN.y) <= e.js.To && Math.abs(this.IN.x) <= e.js.To) return t.jC(),
          this.isDispLock = !1,
          this.IN.x = e.js.yo,
          void (this.IN.y = e.js.yo);
          t.zC({
            x: t.JP + this.IN.x,
            y: t.YP + this.IN.y
          }),
          this.IN.x = ~~(this.IN.x * e.js.Do / e.js.To),
          this.IN.y = ~~(this.IN.y * e.js.Do / e.js.To),
          this.UN(t.Gm)
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.kl,
            'BookViewer.prototype.drawPinchAnimation',
            o.Ys.Js(t)
          )
        }
      }
      CM() {
        return this.zoomScaleInfo ? N.FD[N.HD] : e.js.Ao
      }
      kM() {
        return this.zoomScaleInfo ? N.FD[N.jD] : e.js.Co
      }
      BM(t) {
        let i = null;
        try {
          i = ~~(t * this.pinchMgr.Pk / this.pinchMgr.Dk)
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Bl,
            'BookViewer.prototype.getScaledVal_PinchMode',
            o.Ys.Js(t)
          )
        }
        return i
      }
      $N(t) {
        let i = null,
        n = null;
        try {
          i = ~~(t.width * this.pinchMgr.Pk / this.pinchMgr.Dk),
          n = ~~(t.height * this.pinchMgr.Pk / this.pinchMgr.Dk)
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Bl,
            'BookViewer.prototype.getScaledVal_PinchMode',
            o.Ys.Js(t)
          )
        }
        return {
          width: i,
          height: n
        }
      }
      KN(t) {
        try {
          const i = a.Vs.jO(),
          s = i.width > i.height ? i.width : i.height,
          r = i.width < i.height ? i.width : i.height,
          c = this.$N(this.xT.XC()),
          l = c.width,
          _ = c.height;
          let u,
          d,
          f,
          E,
          R = l > _ ? l : _,
          I = l < _ ? l : _,
          g = 0,
          O = 0;
          if (this.GT) {
            const t = this.$N(this.GT.XC()),
            i = t.width,
            s = t.height;
            g = i > s ? i : s,
            O = i < s ? i : s
          }
          1 == n.E.nw ? (
            u = s * this.CM() * n.E.rw,
            d = r * this.CM() * n.E.rw,
            f = s * this.kM() * n.E.rw,
            E = r * this.kM() * n.E.rw
          ) : (u = s * this.CM(), d = r * this.CM(), f = s * this.kM(), E = r * this.kM()),
          o.Ys.FO(
            e.js.Wo,
            `limitPinchModeScale long(long2), short(short2)=${ R },${ g },${ I },${ O },max(long, short)=${ u },${ d }`
          ),
          i.width < i.height ? (
            this.status == h.w.zw &&
            l > _ &&
            (R = _, I = l),
            (R > u || g > u || I > d || O > d) &&
            (
              this.pinchMgr.Pk = t,
              o.Ys.FO(e.js.Wo, 'limitPinchModeScale set OLD')
            ),
            this.pinchMgr.pinching &&
            (
              R >= u - 10 ||
              g >= u - 10 ||
              I >= d - 10 ||
              O >= d - 10 ? this.zoomScaleInfo.setIndex(N.HD) : (R >= f || g >= f || I >= E || O >= E) &&
              (R < f || g < f || I < E || O < E) ? this.zoomScaleInfo.setIndex(N.jD) : !(R <= f || g <= f || I <= E || O <= E) ||
              this.xT.width == I &&
              this.xT.height == R &&
              this.xT.width == O &&
              this.xT.height == g ||
              this.status != h.w.zw &&
              this.zoomScaleInfo.setIndex(N.zD),
              this.tN = !1
            )
          ) : (
            this.status == h.w.zw &&
            l < _ &&
            (R = l, I = _),
            (R > d || g > d || I > u || O > u) &&
            (
              this.pinchMgr.Pk = t,
              o.Ys.FO(e.js.Wo, 'limitPinchModeScale set OLD')
            ),
            this.pinchMgr.pinching &&
            (
              R >= d - 10 ||
              g >= d - 10 ||
              I >= u - 10 ||
              O >= u - 10 ? this.zoomScaleInfo.setIndex(N.HD) : (R >= E || g >= E || I >= f || O >= f) &&
              (R < E || g < E || I < f || O < f) ? this.zoomScaleInfo.setIndex(N.jD) : !(R <= E || g <= E || I <= f || O <= f) ||
              this.xT.width == I &&
              this.xT.height == R &&
              this.xT.width == O &&
              this.xT.height == g ||
              this.status != h.w.zw &&
              this.zoomScaleInfo.setIndex(N.zD),
              this.tN = !1
            )
          )
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Sl,
            'BookViewer.prototype.limitPinchModeScale',
            o.Ys.Js(t)
          )
        }
      }
      WN(t, i, n) {
        try {
          const s = this.IS(),
          r = this.gS();
          let h = !1;
          if (this.SM(t, {
            x: i,
            y: n
          }), this.pinchMgr.pinching) {
            this.pinchMgr.pinchRateInitTop = ~~(this.pinchMgr.Pk * t / this.pinchMgr.Dk);
            const i = this.pinchMgr.Pk,
            n = this.pinchMgr.Dk;
            this.pinchMgr.Pk = ~~(this.pinchMgr.pinchRateInitTop * (t / this.pinchMgr.vk)),
            this.pinchMgr.Dk = t,
            this.KN(i),
            this.pinchMgr.Pk == i &&
            (this.pinchMgr.Pk = i * this.pinchMgr.Dk / n),
            o.Ys.FO(e.js.Wo, 'pinchMode already started.');
            let h = this.xT;
            this.mS() &&
            this.bookInfo.gT() &&
            - 1 != s &&
            - 1 != r &&
            this.GT &&
            (h = this.GT),
            this.cN = h.Gm
          } else this.NM(t, s, r),
          h = !0;
          this.setPinchModeDragRange(),
          h &&
          this.MM()
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Nl,
            'BookViewer.prototype.pinchModeStart',
            o.Ys.Js(t)
          )
        }
      }
      pinchModeEnd(t) {
        try {
          if (!this.pinchMgr.pinching) return void o.Ys.FO(e.js.Wo, 'already end.');
          if (
            this.pinchMgr.pinching = !1,
            this.pinchMgr.pinchPaused = !1,
            this.pinchMgr.vk = 0,
            this.pinchMgr.pinchRateInitTop = 0,
            this.pinchMgr.bk({
              x: 0,
              y: 0
            }),
            this.pinchMgr.Pk = 0,
            this.pinchMgr.Dk = 0,
            this.pinchMgr.resetPinchOffsetY(),
            this.status == h.w.zw
          ) return;
          if (
            this.isDispLock = !1,
            this._N &&
            this._k(this._N),
            this.uN &&
            this._k(this.uN),
            this._N = null,
            this.uN = null,
            this.gM(this.xT, !1),
            this.xT = null,
            this.GT = null,
            t
          ) switch (this.get_currentLayoutMode()) {
            case e.js.qn.Zn:
              this.JN();
              break;
            case e.js.qn.VERTICAL:
            case e.js.qn.Jn:
            case e.js.qn.Yn:
              this.jN();
              break;
            default:
              return void s.zs.onError(
                e.js.errorCode.vc,
                'BookViewer.prototype.pinchModeEnd',
                'return value is illegal'
              )
          }
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Ml,
            'BookViewer.prototype.pinchModeEnd',
            o.Ys.Js(t)
          )
        }
      }
      setPinchModeDragRange() {
        try {
          const t = r.Ue.Screen.Ke.$e(),
          i = this.$N(this.xT.XC());
          let s = i.width,
          o = i.height;
          if (this.GT) {
            const t = this.$N(this.GT.XC());
            s += t.width;
            const i = t.height;
            o = this.xT.height > this.GT.height ? o : i
          }
          const a = r.Ue.Screen.Yu();
          t.width / this.oldScaleInfo.eb() - 2 * e.js.co > s ? (
            this.dN.left = this.dN.right = ~~((t.width - s) / 2),
            this.oldScaleInfo.isScaled() ? (
              this.dN.left = t.width / this.oldScaleInfo.eb() - s - e.js.co,
              this.dN.right = e.js.co / 2
            ) : this.marginLeft = this.dN.left
          ) : this.status != h.w.zw ? (
            this.dN.left = t.width / this.oldScaleInfo.eb() - s - e.js.co + a.left,
            this.dN.right = e.js.co + a.left
          ) : n.E.nw ? 3 == this.xs.fB.zoomScaleInfo.index ? (
            this.dN.left = t.width / this.oldScaleInfo.eb() / this.oldScaleInfo.eb() - s - e.js.co + a.left * n.E.rw,
            this.dN.right = e.js.co + a.left * n.E.rw
          ) : (
            this.dN.left = t.width / this.oldScaleInfo.eb() - s - e.js.co + a.left * n.E.rw,
            this.dN.right = e.js.co + a.left * n.E.rw
          ) : (
            this.dN.left = t.width / this.oldScaleInfo.eb() - s - e.js.co + a.left,
            this.dN.right = e.js.co + a.left
          ),
          t.height / this.oldScaleInfo.eb() - 2 * e.js.co > o ? (
            this.dN.top = this.dN.bottom = ~~((t.height - o) / 2),
            this.oldScaleInfo.isScaled() ? (
              this.dN.top = t.height / this.oldScaleInfo.eb() - o - e.js.co,
              this.dN.bottom = e.js.co / 2
            ) : this.marginTop = this.dN.left
          ) : this.status != h.w.zw ? (
            this.dN.top = t.height / this.oldScaleInfo.eb() - o - e.js.co + a.top,
            this.dN.bottom = e.js.co + a.top
          ) : n.E.nw ? 3 == this.xs.fB.zoomScaleInfo.index ? (
            this.dN.top = t.height / this.oldScaleInfo.eb() / this.oldScaleInfo.eb() - o - e.js.co + a.top * n.E.rw,
            this.dN.bottom = e.js.co + a.top * n.E.rw
          ) : (
            this.dN.top = t.height / this.oldScaleInfo.eb() - o - e.js.co + a.top * n.E.rw,
            this.dN.bottom = e.js.co + a.top * n.E.rw
          ) : (
            this.dN.top = t.height / this.oldScaleInfo.eb() - o - e.js.co + a.top,
            this.dN.bottom = e.js.co + a.top
          ),
          this.RN = e.js._o.uo
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.xl,
            'BookViewer.prototype.setPinchModeDragRange',
            o.Ys.Js(t)
          )
        }
      }
      BN(t, i) {
        try {
          const s = this.IS(),
          e = this.gS();
          if (!this.xT) return;
          let n = !1;
          this.mS() &&
          this.bookInfo.gT() &&
          - 1 != s &&
          - 1 != e &&
          this.GT &&
          (n = !0),
          this.cN = n ? this.GT.Gm : this.xT.Gm,
          this.dragMgr.gk({
            x: t,
            y: i
          })
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Gl,
            'BookViewer.prototype.pinchModeDragStart',
            o.Ys.Js(t)
          )
        }
      }
      xN(t, i) {
        try {
          const s = this.dragMgr.Ok(),
          e = ~~(this.cN.x + (t - s.x) * n.E.rw),
          o = ~~(this.cN.y + (i - s.y) * n.E.rw);
          this.UN({
            x: e,
            y: o
          }) &&
          this.BN(t, i)
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Vl,
            'BookViewer.prototype.pinchModeDragMove',
            o.Ys.Js(t)
          )
        }
      }
      drawPinchingFrame() {
        try {
          r.Ue.kd.ed(!0)
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Wl,
            'BookViewer.prototype.drawPinchingFrame',
            o.Ys.Js(t)
          )
        }
      }
      UN(t) {
        let i = !1;
        try {
          const s = this.IS(),
          n = this.gS(),
          r = this.$N(this.xT.XC()).width;
          if (
            t.x < this.dN.left &&
            (t.x = this.dN.left, i = !0),
            t.x > this.dN.right &&
            (t.x = this.dN.right, i = !0),
            this.pinchMgr.Ak(t.y),
            this.GT &&
            this.status != h.w.zw
          ) {
            const h = this.xT.height == this.GT.height ? 0 : (this.xT.height - this.GT.height) / 2,
            a = this.BM(h);
            this.xT.height >= this.GT.height ? (
              t.y < this.dN.top &&
              (t.y = this.dN.top, i = !0),
              t.y > this.dN.bottom &&
              (t.y = this.dN.bottom, i = !0)
            ) : (
              t.y < this.dN.top - a &&
              (t.y = this.dN.top - a, i = !0),
              t.y > this.dN.bottom - a &&
              (t.y = this.dN.bottom - a, i = !0)
            );
            const c = this.bookInfo.gT();
            c ? - 1 != s &&
            - 1 != n &&
            (this.hM(this.GT, t), this.hM(this.xT, {
              x: t.x + r,
              y: t.y + a
            })) : (this.hM(this.xT, t), this.hM(this.GT, {
              x: t.x + r,
              y: t.y + a
            })),
            this.pinchMgr.pinchPaused &&
            this._N &&
            this.uN ? (
              c ? - 1 != s &&
              - 1 != n &&
              (this.hM(this.uN, t), this.hM(this._N, {
                x: t.x + r,
                y: t.y + a
              })) : (this.hM(this._N, t), this.hM(this.uN, {
                x: t.x + r,
                y: t.y + a
              })),
              this._N.PC &&
              this.uN.PC &&
              (
                o.Ys.FO(e.js.Wo, 'pinchModeImage1&2 drawn'),
                this.RM(),
                this.IM(this._N, {
                  fillRect: !0
                }),
                this.IM(this.uN)
              )
            ) : c ? - 1 != s &&
            - 1 != n &&
            (this.RM(), this.IM(this.GT, {
              fillRect: !0
            }), this.IM(this.xT)) : (this.RM(), this.IM(this.xT, {
              fillRect: !0
            }), this.IM(this.GT))
          } else t.y < this.dN.top &&
          (t.y = this.dN.top, i = !0),
          t.y > this.dN.bottom &&
          (t.y = this.dN.bottom, i = !0),
          this.hM(this.xT, t),
          this.pinchMgr.pinchPaused &&
          this._N ? (
            this.hM(this._N, t),
            this._N.PC &&
            (
              o.Ys.FO(e.js.Wo, 'pinchModeImage drawn'),
              this.RM(),
              this.status == h.w.zw ? this.IM(this.xT, {
                fillRect: !0
              }) : this.IM(this._N, {
                fillRect: !0
              })
            )
          ) : (this.RM(), this.IM(this.xT, {
            fillRect: !0
          }));
          a.Vs.Tw(),
          this.drawPinchingFrame()
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.$l,
            'BookViewer.prototype.pinchModeDraw',
            o.Ys.Js(t)
          )
        }
        return i
      }
      Eb(t) {
        try {
          o.Ys.FO(e.js.Wo, `setFitModeAndDisp ${ t }`),
          this.uk();
          const i = this.get_currentLayoutMode();
          (i == e.js.qn.Zn && t != e.js.qn.Zn || i != e.js.qn.Zn && t == e.js.qn.Zn) &&
          this.zN(),
          this.tS(t),
          a.Vs.yw(),
          this.HN()
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.Kl,
            'BookViewer.prototype.setFitModeAndDisp',
            o.Ys.Js(t)
          )
        }
      }
      cM(t) {
        const i = r.Ue.Screen.Ke.$e(),
        s = this.Je.jP(this.get_currentPageNum());
        if (s) switch (this.get_currentLayoutMode()) {
          case e.js.qn.Zn:
            return this.uM.qk(t, {
              width: s.width,
              height: s.height
            });
          case e.js.qn.Yn:
            return this.lM.Zk(i.width, s.width, t);
          case e.js.qn.VERTICAL:
            return this._M.qk(t, {
              width: s.width,
              height: s.height
            });
          case e.js.qn.Jn:
          default:
            return this.uM.qk(t, {
              width: s.width,
              height: s.height
            })
        }
      }
      getImageSize(t, i, n) {
        let r = 0;
        try {
          switch (t) {
            case e.js.qn.Zn:
              return this.iS.getImageSize(i, n);
            case e.js.qn.Yn:
              return this.lM.getImageSize(i, n);
            case e.js.qn.VERTICAL:
              return this._M.getImageSize(i, n);
            case e.js.qn.Jn:
              return this.uM.getImageSize(i, n);
            default:
              {
                const t = this.Je.jP(i);
                r = this.uM.qk(t.width, {
                  width: t.width,
                  height: t.height
                })
              }
          }
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.ql,
            'BookViewer.prototype.getImageWidthBeforeScaling',
            o.Ys.Js(t)
          )
        }
        return {
          width: r,
          height: 0
        }
      }
      moveNext() {
        if (
          this.IT(),
          this.isDispLock &&
          (this.isDispLock = !1),
          !this.canMoveNext()
        ) return;
        this.HP();
        const t = this.get_currentPageNum();
        switch (this.get_currentLayoutMode()) {
          case e.js.qn.Zn:
            {
              const i = this.iS.sB(t) ? 2 : 1;
              this.hv(t + i),
              this.HN();
              break
            }
          case e.js.qn.VERTICAL:
          case e.js.qn.Jn:
          case e.js.qn.Yn:
            this.hv(t + 1),
            this.HN();
            break;
          default:
            s.zs.onError(
              e.js.errorCode.Pc,
              'BookViewer.prototype.moveNext',
              'return value is illegal'
            )
        }
      }
      CN() {
        this.IT();
        try {
          if (
            this.isDispLock &&
            (this.isDispLock = !1),
            !this.canMovePrevious()
          ) return;
          this.HP();
          const t = this.get_currentPageNum();
          switch (this.get_currentLayoutMode()) {
            case e.js.qn.Zn:
            case e.js.qn.VERTICAL:
            case e.js.qn.Jn:
            case e.js.qn.Yn:
              this.hv(t - 1),
              this.HN();
              break;
            default:
              s.zs.onError(
                e.js.errorCode.Dc,
                'BookViewer.prototype.movePrevious',
                'return value is illegal'
              )
          }
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.n_,
            'BookViewer.prototype.movePrevious',
            o.Ys.Js(t)
          )
        }
      }
      redraw() {
        const t = this.Je.jP(this.get_currentPageNum());
        if (t) if (this.dragMgr.pageDragging && this.xT) this.status == h.w.zw ? this.MN({
          x: 0,
          y: 0
        }, !0) : this.MN(this.xT.Gm, !0);
         else if (this.pinchMgr.pinching && this.xT) this.UN(this.xT.Gm);
         else switch (this.get_currentLayoutMode()) {
          case e.js.qn.Zn:
            {
              const t = this.IS(),
              i = this.gS();
              - 1 != t &&
              (
                o.Ys.FO(e.js.Wo, `leftPage redraw: pageNum=${ t }`),
                this.IM(this.Je.jP(t).qP, {
                  fillRect: !0
                })
              ),
              - 1 != i &&
              (
                o.Ys.FO(e.js.Wo, `rightPage redraw: pageNum=${ t }`),
                this.IM(this.Je.jP(i).qP, {
                  fillRect: - 1 == t
                })
              );
              break
            }
          case e.js.qn.VERTICAL:
          case e.js.qn.Jn:
          case e.js.qn.Yn:
            this.IM(t.qP, {
              fillRect: !0
            });
            break;
          default:
            s.zs.onError(
              e.js.errorCode.Tc,
              'BookViewer.prototype.redraw',
              'return value is illegal'
            )
        }
      }
      yM(t, i) {
        try {
          i &&
          t.redraw()
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.l_,
            'BookViewer.prototype.arrowDismiss',
            o.Ys.Js(t)
          )
        }
      }
      JN() {
        try {
          const t = this.IS(),
          s = this.gS(),
          n = this.zoomScaleInfo.eb(),
          r = this.get_currentPageNum();
          let h = r;
          if (
            this.bookInfo.gT() ? - 1 != t ? h = t : - 1 != s &&
            (h = s) : - 1 != s ? h = s : - 1 != t &&
            (h = t),
            h != r &&
            this.hv(h),
            this.xT
          ) return this.xM = this.get_currentPageNum(),
          void this.OM(this.get_currentPageNum(), this.xT, this.GT);
          a.Vs.Lw(this.context, e.js.fo.Ro),
          this.clearDisplay();
          const c = this.Je.jP(s),
          l = this.Je.jP(t),
          _ = this.bookInfo.gT(),
          u = this.Je.jP(this.get_currentPageNum()).OT == e.Xn.NONE,
          d = [];
          if (_) {
            if ( - 1 != s) {
              const t = this.iS.Jk(s, n, {
                cB: u,
                aB: !1
              }),
              i = this.iS.getImageSize(s, n),
              r = {
                src: c.fC,
                pC: c.RC,
                mC: c.IC,
                $s: c.$s,
                position: t,
                size: i,
                AC: this,
                Vm: s,
                CC: !1,
                bC: !0,
                yC: !0
              };
              o.Ys.FO(e.js.Wo, `dispDoublePage page-${ s }`);
              const h = this.dM(c.qP, r);
              d.push(h)
            }
            if ( - 1 != t) {
              const i = this.iS.Jk(t, n, {
                cB: u,
                aB: !0
              }),
              s = this.iS.getImageSize(t, n);
              this.pinchMgr.pinchPaused = n > 1;
              const r = {
                src: l.fC,
                pC: l.RC,
                mC: l.IC,
                $s: l.$s,
                position: i,
                size: s,
                AC: this,
                Vm: t,
                CC: !1,
                bC: !0,
                yC: !0
              };
              o.Ys.FO(e.js.Wo, `dispDoublePage page-${ t }`);
              const h = this.dM(l.qP, r);
              d.push(h)
            }
          } else {
            if ( - 1 != t) {
              const i = this.iS.Jk(t, n, {
                cB: u,
                aB: !0
              }),
              s = this.iS.getImageSize(t, n),
              r = {
                src: l.fC,
                pC: l.RC,
                mC: l.IC,
                $s: l.$s,
                position: i,
                size: s,
                AC: this,
                Vm: t,
                CC: !1,
                bC: !0,
                yC: !0
              };
              o.Ys.FO(e.js.Wo, `dispDoublePage page-${ t }`);
              const h = this.dM(l.qP, r);
              d.push(h)
            }
            if ( - 1 != s) {
              const t = this.iS.Jk(s, n, {
                cB: u,
                aB: !1
              }),
              i = this.iS.getImageSize(s, n);
              this.pinchMgr.pinchPaused = n > 1;
              const r = {
                src: c.fC,
                pC: c.RC,
                mC: c.IC,
                $s: c.$s,
                position: t,
                size: i,
                AC: this,
                Vm: s,
                CC: !1,
                bC: !0,
                yC: !0
              };
              o.Ys.FO(e.js.Wo, `dispDoublePage page-${ s }`);
              const h = this.dM(c.qP, r);
              d.push(h)
            }
          }
          if ( - 1 == s && - 1 == t);
           else {
            let i;
            i = _ ? - 1 != s ? c : l : - 1 != t ? l : c,
            Promise.all(d).then(() => {
              this.EM(i.qP)
            })
          }
          1 == n ? this.wM(t, s) : a.Vs.Tw(),
          i.OK.GM &&
          i.OK.GM(this.get_currentPageNum())
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.__,
            'BookViewer.prototype.dispDoublePage',
            o.Ys.Js(t)
          )
        }
      }
      jN(t) {
        try {
          const s = null != t ? t : this.get_currentPageNum(),
          n = this.zoomScaleInfo.eb();
          o.Ys.FO(
            e.js.Wo,
            `BookViewer.dispSinglePage(${ s }) layoutMode=${ this.pS }`
          );
          const r = this.Je.jP(s);
          if (r) {
            if (this.xT) return this.xM = s,
            void this.OM(this.get_currentPageNum(), this.xT, void 0);
            let t,
            h;
            switch (
                a.Vs.Lw(this.context, e.js.fo.Ro),
                this.get_currentLayoutMode()
              ) {
              case e.js.qn.Yn:
                t = this.lM.Jk(s, n),
                h = this.lM.getImageSize(s, n);
                break;
              case e.js.qn.VERTICAL:
                t = this._M.Jk(s, 1),
                h = this._M.getImageSize(s, 1);
                break;
              case e.js.qn.Jn:
              default:
                t = this.uM.Jk(s, n),
                h = this.uM.getImageSize(s, n)
            }
            const c = {
              src: r.fC,
              pC: r.RC,
              mC: r.IC,
              $s: r.$s,
              position: t,
              size: h,
              AC: this,
              Vm: s,
              CC: !1,
              bC: !0,
              yC: !1
            };
            o.Ys.FO(e.js.Wo, `dispSinglePage page-${ s }`),
            this.dM(r.qP, c).then(
              () => {
                this.get_currentLayoutMode() != e.js.qn.VERTICAL &&
                this.EM(r.qP)
              }
            ),
            1 == n ? this.wM(s, 0) : a.Vs.Tw(),
            i.OK.GM &&
            i.OK.GM(s)
          }
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.u_,
            'BookViewer.prototype.dispSinglePage',
            o.Ys.Js(t)
          )
        }
      }
      VM() {
        try {
          o.Ys.FO(e.js.Wo, 'dispDoublePageZoom');
          const t = this.IS(),
          i = this.gS(),
          s = this.zoomScaleInfo.eb();
          if (
            this.tN = 1 != s,
            a.Vs.yw(),
            a.Vs.Lw(this.context, e.js.fo.Ro),
            this.clearDisplay(),
            - 1 != t
          ) {
            const i = this.iS.getImageSize(t, s),
            e = this.Je.jP(t);
            this.pinchMgr.pinchPaused = s > 1;
            const n = {
              src: e.fC,
              pC: e.RC,
              mC: e.IC,
              $s: e.$s,
              position: e.qP.Gm,
              size: i,
              AC: this,
              Vm: t,
              CC: !1,
              bC: !0,
              yC: !0
            };
            this.dM(e.qP, n)
          }
          if ( - 1 != i) {
            const t = this.iS.getImageSize(i, s),
            e = this.Je.jP(i);
            this.pinchMgr.pinchPaused = s > 1;
            const n = {
              src: e.fC,
              pC: e.RC,
              mC: e.IC,
              $s: e.$s,
              position: e.qP.Gm,
              size: t,
              AC: this,
              Vm: i,
              CC: !1,
              bC: !0,
              yC: !0
            };
            this.dM(e.qP, n)
          }
          1 == s ? this.wM(t, i) : a.Vs.Tw()
        } catch (t) {
          s.zs.onError(e.js.errorCode.d_, 'zoomDialog.dispDoublePage', o.Ys.Js(t))
        }
      }
      WM() {
        try {
          const t = this.get_currentPageNum(),
          i = this.zoomScaleInfo.eb();
          1 != i ? (this.tN = !0, this.lN = !1) : this.tN = !1;
          const s = this.Je.jP(t);
          if (a.Vs.yw(), s) {
            let n;
            switch (
                a.Vs.Lw(this.context, e.js.fo.Ro),
                this.clearDisplay(),
                this.get_currentLayoutMode()
              ) {
              case e.js.qn.Yn:
                n = this.lM.getImageSize(t, i);
                break;
              case e.js.qn.VERTICAL:
                n = this._M.getImageSize(t, i);
                break;
              case e.js.qn.Jn:
              default:
                n = this.uM.getImageSize(t, i)
            }
            const o = {
              src: s.fC,
              pC: s.RC,
              mC: s.IC,
              $s: s.$s,
              position: s.qP.Gm,
              size: n,
              AC: this,
              Vm: t,
              CC: !1,
              bC: !0,
              yC: !0
            };
            this.dM(s.qP, o),
            1 == i ? this.wM(t, 0) : a.Vs.Tw(),
            this.pinchMgr.pinchPaused = i > 1
          }
        } catch (t) {
          s.zs.onError(e.js.errorCode.f_, 'zoomDialog.dispSinglePage', o.Ys.Js(t))
        }
      }
      OM(t, i, n) {
        o.Ys.FO(
          e.js.Wo,
          `BookViewer.dispToCurPage(${ t }, ${ JSON.stringify(i, null, 0) }, ${ JSON.stringify(n, null, 0) })`
        );
        const h = r.Ue.Screen.Ke.$e();
        let a = null;
        this.yS = null,
        this.LS = null,
        this.AS = null,
        this.CS = {
          x: 0,
          y: 0
        };
        let c = {
          x: 0,
          y: 0
        },
        l = {
          x: 0,
          y: 0
        },
        _ = {
          x: 0,
          y: 0
        },
        u = {
          x: 0,
          y: 0
        };
        const d = this.Je.jP(t),
        f = this.get_currentLayoutMode(),
        E = this.zoomScaleInfo.eb();
        switch (f) {
          case e.js.qn.Zn:
            {
              const t = this.IS(),
              o = this.gS();
              t <= 0 &&
              o <= 0 &&
              s.zs.onError(
                e.js.errorCode.bc,
                'BookViewer.prototype.dispToCurPage',
                'leftPage and rightPage is illegal'
              );
              const r = this.Je.jP(this.get_currentPageNum()).OT == e.Xn.NONE;
              if (t > 0 && o > 0) a = this.Je.jP(t).qP,
              _ = a.Gm,
              u = this.iS.Jk(t, E, {
                cB: r,
                aB: !0
              }),
              this.yS = this.Je.jP(o).qP,
              this.CS.x = this.yS.JP - _.x,
              this.CS.y = this.yS.YP - _.y;
               else {
                const i = t > 0 ? t : o,
                s = t > 0;
                a = this.Je.jP(i).qP,
                _ = a.Gm,
                u = this.iS.Jk(i, E, {
                  cB: r,
                  aB: s
                })
              }
              i &&
              (c = {
                x: i.JP - _.x,
                y: i.YP - _.y - this.pinchMgr.Lk
              }, this.LS = i),
              n &&
              (l = {
                x: n.JP - _.x,
                y: n.YP - _.y - this.pinchMgr.Lk
              }, this.AS = n);
              break
            }
          case e.js.qn.VERTICAL:
          case e.js.qn.Yn:
          case e.js.qn.Jn:
            switch (a = d.qP, _ = a.Gm, f) {
              case e.js.qn.Yn:
                {
                  const i = this.lM.getImageSize(t, 1).height;
                  u = {
                    x: 0,
                    y: 0
                  },
                  h.height < i &&
                  (
                    this.IN.y < 0 ? u.y = _.y > i / e.js.ro ? 0 : h.height - i : u.y = _.y < h.height - i - i / e.js.ro ? h.height - i : 0
                  );
                  break
                }
              case e.js.qn.VERTICAL:
                u = this._M.Jk(t, E);
                break;
              case e.js.qn.Jn:
              default:
                u = this.uM.Jk(t, E)
            }
            i &&
            (this.CS = {
              x: i.JP - _.x,
              y: i.YP - _.y - this.pinchMgr.Lk
            }, this.yS = i)
        }
        if (
          a &&
          (a.DC = !0),
          this.yS &&
          (this.yS.DC = !0),
          this.LS &&
          (this.LS.DC = !0),
          this.AS &&
          (this.AS.DC = !0),
          a.jC(),
          _.x == u.x &&
          _.y == u.y
        ) return o.Ys.FO(e.js.Wo, 'NO ANIMATION!'),
        void this.wM(a.Vm, this.yS.Vm);
        this.isDispLock = !0,
        a.HC(() => {
          this.$M(a, this.yS, this.LS, this.AS, _, u, this.CS, c, l)
        })
      }
      KM(t, i, n) {
        try {
          let s;
          const o = {
            x: i.x,
            y: i.y
          };
          i.x < n.x ? (s = Math.abs(this.IN.x), n.x - t.JP >= s ? o.x = t.JP + s : o.x = n.x) : i.x > n.x &&
          (s = Math.abs(this.IN.x), t.JP - n.x >= s ? o.x = t.JP - s : o.x = n.x),
          i.y < n.y ? (s = Math.abs(this.IN.y), n.y - t.YP >= s ? o.y = t.YP + s : o.y = n.y) : i.y > n.y &&
          (s = Math.abs(this.IN.y), t.YP - n.y >= s ? o.y = t.YP - s : o.y = n.y),
          o.x == i.x &&
          o.y == i.y ||
          t.zC(o),
          Math.abs(t.JP - i.x) < Math.abs(n.x - i.x) / 2 ? this.IN.x = ~~(this.IN.x * e.js.Po / e.js.vo) : this.IN.x = ~~(this.IN.x * e.js.vo / e.js.Po),
          Math.abs(t.YP - i.y) < Math.abs(n.y - i.y) / 2 ? this.IN.y = ~~(this.IN.y * e.js.Po / e.js.vo) : this.IN.y = ~~(this.IN.y * e.js.vo / e.js.Po),
          Math.abs(this.IN.x) < e.js.bo &&
          (this.IN.x = (this.IN.x < 0 ? - 1 : 1) * e.js.bo),
          Math.abs(this.IN.x) > e.js.yo &&
          (this.IN.x = (this.IN.x < 0 ? - 1 : 1) * e.js.yo),
          Math.abs(this.IN.y) < e.js.bo &&
          (this.IN.y = (this.IN.y < 0 ? - 1 : 1) * e.js.bo),
          Math.abs(this.IN.y) > e.js.yo &&
          (this.IN.y = (this.IN.y < 0 ? - 1 : 1) * e.js.yo)
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.g_,
            'BookViewer.prototype.calcAnimPosAndSpeed',
            o.Ys.Js(t)
          )
        }
      }
      $M(t, n, r, h, c, l, _, u, d) {
        if (
          t.HC(() => {
            this.$M(t, n, r, h, c, l, _, u, d)
          }),
          o.Ys.FO(
            e.js.Wo,
            `BookViewer.drawAnimation(${ c.x }, ${ c.y }, ${ l.x }, ${ l.y })`
          ),
          o.Ys.FO(e.js.Wo, `speedX,Y:${ this.IN.x },${ this.IN.y }`),
          t
        ) {
          if (!this.isDispLock) return t.jC(),
          void this.EM(t);
          if (!(!t.PC || n && !n.PC || r && !r.PC || h && !h.PC)) {
            if (t.JP == l.x && t.YP == l.y) return t.jC(),
            1 == this.zoomScaleInfo.eb() ? this.mS() &&
            n ? n.JP < t.JP ? this.wM(n.Vm, t.Vm) : this.wM(t.Vm, n.Vm) : this.wM(t.Vm, 0) : a.Vs.Tw(),
            this.isDispLock = !1,
            this.redraw(),
            this.EM(t),
            void (i.OK.GM && this.xM && (i.OK.GM(this.xM), this.xM = null));
            this.RM(),
            this.KM(t, c, l),
            this.IM(t, {
              fillRect: !0,
              Gw: !0
            }),
            n &&
            (n.zC({
              x: t.JP + _.x,
              y: t.YP + _.y
            }), this.IM(n, {
              fillRect: !1,
              Gw: !0
            })),
            r &&
            (r.zC({
              x: t.JP + u.x,
              y: t.YP + u.y
            }), this.IM(r, {
              fillRect: !1,
              Gw: !0
            })),
            h &&
            (h.zC({
              x: t.JP + d.x,
              y: t.YP + d.y
            }), this.IM(h, {
              fillRect: !1,
              Gw: !0
            }))
          }
        } else s.zs.onError(
          e.js.errorCode.uc,
          'BookViewer.prototype.drawAnimation',
          'argument[imgObj] is illegal'
        )
      }
      UM(t, i) {
        if (this.pinchMgr.pinching) return void o.Ys.FO(e.js.Wo, 'drawShadow ignored.');
        let s = this.cM(e.js.wo.po);
        const n = this.Je.jP(t);
        if (!n) return;
        s = s > 0 ? s : 1;
        const h = r.Ue.Screen.Ke.$e();
        let c = h.width < h.height ? h.width : h.height;
        c = ~~(c / 4),
        s = s > c ? c : s;
        let l = !0;
        this.mS() &&
        (this.iS.sB(t) || this.iS.eB(t)) &&
        (l = !1),
        l ? (
          a.Vs.kw(
            this.context,
            this.PN[0],
            {
              x: i.x - s,
              y: i.y - s,
              width: i.width + 2 * s,
              height: s
            },
            {
              Gw: !0
            }
          ),
          a.Vs.kw(
            this.context,
            this.PN[1],
            {
              x: i.x - s,
              y: i.y + i.height,
              width: i.width + 2 * s,
              height: s
            },
            {
              Gw: !0
            }
          ),
          a.Vs.kw(
            this.context,
            this.PN[2],
            {
              x: i.x - s,
              y: i.y - s,
              width: s,
              height: i.height + 2 * s
            },
            {
              Gw: !0
            }
          ),
          a.Vs.kw(
            this.context,
            this.PN[3],
            {
              x: i.x + i.width,
              y: i.y - s,
              width: s,
              height: i.height + 2 * s
            },
            {
              Gw: !0
            }
          )
        ) : n.OT == e.Xn.ln ? (
          a.Vs.kw(
            this.context,
            this.PN[4],
            {
              x: i.x - s,
              y: i.y - s,
              width: i.width + s,
              height: s
            },
            {
              Gw: !0
            }
          ),
          a.Vs.kw(
            this.context,
            this.PN[5],
            {
              x: i.x - s,
              y: i.y + i.height,
              width: i.width + s,
              height: s
            },
            {
              Gw: !0
            }
          ),
          a.Vs.kw(
            this.context,
            this.PN[6],
            {
              x: i.x - s,
              y: i.y - s,
              width: s,
              height: i.height + 2 * s
            },
            {
              Gw: !0
            }
          )
        ) : n.OT == e.Xn.cn &&
        (
          a.Vs.kw(
            this.context,
            this.PN[7],
            {
              x: i.x,
              y: i.y - s,
              width: i.width + s,
              height: s
            },
            {
              Gw: !0
            }
          ),
          a.Vs.kw(
            this.context,
            this.PN[8],
            {
              x: i.x,
              y: i.y + i.height,
              width: i.width + s,
              height: s
            },
            {
              Gw: !0
            }
          ),
          a.Vs.kw(
            this.context,
            this.PN[9],
            {
              x: i.x + i.width,
              y: i.y - s,
              width: s,
              height: i.height + 2 * s
            },
            {
              Gw: !0
            }
          )
        )
      }
      FM(t, i) {
        const s = r.Ue.Nd.Md.$d();
        let n = 0;
        s.forEach(
          s => {
            const e = s.parentElement,
            o = parseInt(e.dataset.n, 10);
            (o < t || i < o) &&
            (s.width = 0, s.height = 0, e.removeChild(s), n++)
          }
        ),
        o.Ys.FO(
          e.js.Wo,
          `verticalRemoveOutOfRangeCanvas()  canvases:${ s.length },  delCount:${ n },  range:${ t }-${ i } (${ i - t })`
        )
      }
      XM(t) {
        this.FM(t - this.MS, t + this.VS + this.NS)
      }
      tM() {
        const t = this.Je.jP(1),
        i = t.height * (this.SS / t.width);
        this.VS = Math.ceil(document.documentElement.clientHeight / i),
        o.Ys.FO(e.js.Wo, `verticalCalcNumOfVisiblePages: ${ this.VS }`)
      }
      zM(t) {
        null == r.Ue.Nd.Md.Kd(t) ? (o.Ys.FO(e.js.Wo, `disp ${ t }`), this.HN(t)) : o.Ys.FO(e.js.Wo, `already drawn ${ t }`)
      }
      IM(t, i) {
        let s = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
        const n = {
          fillRect: !1,
          Gw: !1
        };
        if (
          i &&
          (i.fillRect && (n.fillRect = !0), i.Gw && (n.Gw = !0)),
          this.status == h.w.zw &&
          0 == this.pinchMgr.pinching
        ) s = {
          x: 0,
          y: 0,
          width: t.width,
          height: t.height
        };
         else {
          if (
            o.Ys.FO(
              e.js.Wo,
              `BookViewer.drawBvImage(${ t.LC().src }, ${ t.JP }, ${ t.YP }, ${ t.width }, ${ t.height })`
            ),
            o.Ys.FO(
              e.js.Wo,
              `BookViewer.drawBvImage fillRect=${ String(n.fillRect) }`
            ),
            s = {
              x: t.JP,
              y: t.YP,
              width: t.width,
              height: t.height
            },
            null == this.currentLayoutData ||
            null == this.currentLayoutData.page_info ||
            t.Vm > this.currentLayoutData.page_info.length ||
            t.Vm < 0
          ) return !0;
          if (this.pinchMgr.pinching) {
            const t = this.$N({
              width: s.width,
              height: s.height
            });
            s.width = t.width,
            s.height = t.height
          }
          if (t.DC = !0, t.TC) {
            if (this.currentLayoutData.YT(t.Vm)) return this.HM(t, n.fillRect)
          } else {
            const i = this.vs(),
            r = i.Ps();
            if (
              this.currentLayoutData.YT(t.Vm) &&
              this.currentLayoutData.page_info[t.Vm - 1].draw_info &&
              this.status != h.w.zw
            ) return this.HM(t, n.fillRect);
            if (this.status != h.w.zw) {
              if (this.XN(), t.WC(i), t.FC()) {
                let i = this.context;
                if (this.get_currentLayoutMode() == e.js.qn.VERTICAL) {
                  const s = document.getElementById(`page_${ t.Vm }`);
                  let e = s.querySelector('canvas');
                  null == e &&
                  (
                    this.XM(this.get_currentPageNum()),
                    e = document.createElement('canvas'),
                    e.width = parseInt(s.dataset.w, 10),
                    e.height = parseInt(s.dataset.h, 10),
                    e.style.width = '100%',
                    e.style.height = '100%',
                    e.style.position = 'absolute',
                    e.style.top = '0',
                    e.style.bottom = '0',
                    s.appendChild(e)
                  ),
                  i = e.getContext('2d')
                }
                this.currentLayoutData.Bk(t.Vm) ? n.fillRect &&
                a.Vs.He(i, s) : t.$C() ? a.Vs.Fs(i, t.$C(), s, r, n) : a.Vs.kw(i, t.Bs(), s, n)
              }
              if (
                this.UM(t.Vm, s),
                this.get_currentLayoutMode() == e.js.qn.VERTICAL
              ) {
                const i = this.get_currentPageNum();
                if (t.Vm == i) {
                  let t = i - this.MS,
                  s = i,
                  n = i + this.VS,
                  r = i + this.VS + this.NS;
                  o.Ys.FO(
                    e.js.Wo,
                    `try prefetch    prefetch_top:${ t },  top:${ s },  bottom:${ n },  prefetch_bottom:${ r }`
                  );
                  for (let t = n; t >= s; t--) t > 0 &&
                  !this.currentLayoutData.Bk(t) &&
                  this.zM(t);
                  for (let t = r; t > n; t--) t > 0 &&
                  !this.currentLayoutData.Bk(t) &&
                  this.zM(t);
                  for (let i = t; i < s; i++) i > 0 &&
                  !this.currentLayoutData.Bk(i) &&
                  this.zM(i)
                }
              }
              return !0
            }
            this.XN(),
            this.xs.fB.RB instanceof G ? (n.fillRect = !0, a.Vs.Fs(this.context, this.xs.fB.RB, s, r, n)) : (
              n.fillRect &&
              this.clearDisplay(),
              a.Vs.Gs(this.context, this.xs.fB.RB, s, n)
            )
          }
        }
        return !0
      }
      jM(t, i, s) {
        let n = this.context;
        if (this.get_currentLayoutMode() == e.js.qn.VERTICAL) {
          const e = document.getElementById(`page_${ t.Vm }`);
          let o = e.querySelector('canvas');
          null == o &&
          (
            o = document.createElement('canvas'),
            o.width = parseInt(e.dataset.w, 10),
            o.height = parseInt(e.dataset.h, 10),
            o.style.width = '100%',
            o.style.height = '100%',
            o.style.position = 'absolute',
            o.style.top = '0',
            o.style.bottom = '0',
            e.appendChild(o)
          ),
          n = o.getContext('2d'),
          V.Es.Ve(n, t.Vm, s.x, s.y, t.width, t.height, i)
        } else t.TC ? V.Es.en(t.Vm, {
          x: 0,
          y: 0
        }) : (
          V.Es.Ve(n, t.Vm, s.x, s.y, t.width, t.height, i),
          this.UM(t.Vm, {
            x: s.x,
            y: s.y,
            width: t.width,
            height: t.height
          })
        )
      }
      qM() {
        return At(
          this,
          void 0,
          void 0,
          (
            function * () {
              this.Os.ge.yA(this.bookInfo.display_setting_info[0].layout_url),
              this.Os.ge.CA(this.bookInfo.display_setting_info[0].layout_url),
              yield this.OS(this.currentLayoutData.page_info, 0)
            }
          )
        )
      }
      JM() {
        let t = 0;
        const i = window.setInterval(
          () => {
            t++,
            this.Os.ge.DA() ? (
              window.clearInterval(i),
              this.Os.ge.EA = !1,
              this.XN(),
              M.hiddenLoader(),
              this.redraw()
            ) : 50 == t &&
            (
              window.clearInterval(i),
              M.hiddenLoader(),
              s.zs.onError(
                e.js.errorCode.k_,
                'BookViewer.prototype.getWebFontJson',
                'フォントデータが読み込めませんでした'
              )
            )
          },
          200
        )
      }
      YM() {
        return At(
          this,
          void 0,
          void 0,
          (
            function * () {
              this.Os.ge.fA = !0,
              M.showLoader(),
              this.Os.ge.EA = !0;
              const t = yield this.Os.ge.load();
              t.eA &&
              (
                t.nA ? (yield this.qM(), this.Os.ge.wA(), this.JM()) : (
                  M.hiddenLoader(),
                  s.zs.onError(
                    e.js.errorCode.M_,
                    'BookViewer.prototype.loadWebfont',
                    'フォントデータが読み込めませんでした'
                  )
                )
              )
            }
          )
        )
      }
      ZM(t, i) {
        return this.Os.ge.fA ? this.Os.ge.EA ? (this.Os.hC.push(t), !1) : (this.jM(t, i, t.Gm), M.hiddenLoader(), this.XN(), !0) : (this.YM(), !1)
      }
      QM(t, i, s) {
        let e;
        for (
          t ? this.Os.ge.SA() : this.Os.ge.RA = !1,
          this.Os.ge.EA = !1;
          e = this.Os.hC.shift();
        ) this.jM(i, s, e.Gm);
        this.redraw(),
        this.Os.hC.length = 0,
        (() => {
          this.Bb()
        }) (),
        M.hiddenLoader(),
        this.XN()
      }
      HM(t, i) {
        return this.Os.ge.BA(),
        this.Os.ge.sA() ? (
          this.Os.ge.EA = !0,
          M.showLoader(),
          this.Os.hC.push(t),
          this.Os.ge.load().then(s => {
            if (!s.eA) {
              const e = s.nA;
              this.QM(e, t, i)
            }
          }),
          n.E.pw() ||
          (
            this.QM(!1, t, i),
            document.fonts &&
            document.fonts.addEventListener('loadingdone', () => {
              this.QM(!0, t, i)
            })
          ),
          !1
        ) : (
          this.jM(t, i, t.Gm),
          n.E.pw() &&
          this.Os.ge.EA ||
          (M.hiddenLoader(), this.XN()),
          !0
        )
      }
      SN() {
        try {
          this.oN = null,
          this.rN = null,
          this.hN = null,
          this.aN = null
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.v_,
            'BookViewer.prototype.setContiguityImageIsNull',
            o.Ys.Js(t)
          )
        }
      }
      clearDisplay() {
        try {
          r.Ue.kd.ed(!1);
          const t = r.Ue.ze.Xe.Fe(),
          i = t.options.item(t.selectedIndex).value;
          let s;
          s = 'normal' == i ? '#FFFFFF' : 'soft' == i ? '#EBE8DE' : 'night' == i ? '#303030' : '#FFFFFF',
          o.Ys.FO(e.js.Wo, 'BookViewer.prototype.clearDisplay : ' + s),
          a.Vs.Bw(
            this.context,
            {
              r: parseInt(s.slice(1, 3), 16),
              xt: parseInt(s.slice(3, 5), 16),
              b: parseInt(s.slice(5, 7), 16)
            }
          ),
          this.lookAheadTextImage.length = 0
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.P_,
            'BookViewer.prototype.clearDisplay',
            o.Ys.Js(t)
          )
        }
      }
      finish() {
        const t = window.top;
        t != window ? t.document.activeElement.parentElement.nextSibling.click() : window.history.length > 1 ? (window.history.back(), setTimeout(() => {
          top.close()
        }, 100)) : (
          navigator.userAgent.indexOf('Gecko') >= 0 &&
          (top.name = 'CLOSE_WINDOW'),
          top.close()
        )
      }
      eN(t) {
        t == N.XD ? this.zoomScaleInfo.setIndex(N.zD) : this.zoomScaleInfo.setIndex(t)
      }
      tx() {
        if (!this.isEventLock) if (this.ST(), this.is_reflowable_page()) {
          this.zoomScaleInfo.setIndex(N.zD);
          const t = this.bookInfo.char_size;
          M.rb(t) &&
          (this.xT = null, this.GT = null, this.VT(!1))
        } else {
          switch (this.get_currentLayoutMode()) {
            case e.js.qn.Zn:
              this.VM();
              break;
            case e.js.qn.VERTICAL:
            case e.js.qn.Jn:
            case e.js.qn.Yn:
              this.WM()
          }
          a.Vs.Dw()
        }
      }
      xB(t) {
        this.eN(t),
        this.tx();
        const i = this.dragMgr.Ok();
        l.Vp(i.x, i.y)
      }
      ix() {
        if (!this.xT) {
          const t = this.IS(),
          i = this.gS();
          if (0 < t) {
            const i = this.Je.jP(t);
            this.xT = i.qP,
            i.qP.DC = !0
          } else {
            const t = this.Je.jP(i);
            this.xT = t.qP,
            t.qP.DC = !0
          }
        }
        this.xT.UC(this.xs.fB.RB, this.xs.fB.size, this.xs.fB.position),
        this.GT = null
      }
      MB() {
        this.zoomScaleInfo.setIndex(N.zD),
        this.clearDisplay(),
        this.status = h.w.Fw,
        this.xs.fB.zoomScaleInfo.init(),
        this.xs.fB.RB = null,
        null != this.xT &&
        (this.xT.PC = !1, this.xT = null),
        a.Vs.yw(),
        this.HN()
      }
      kN() {
        this.zoomScaleInfo.setIndex(this.xs.fB.zoomScaleInfo.index),
        this.status = h.w.zw;
        const t = a.Vs.jO(),
        {
          OB: i,
          wB: s
        }
        = this.xs.gB(t, n.E.nw, n.E.rw);
        if (
          this.clearDisplay(),
          this.oldScaleInfo.setIndex(N.zD),
          this.enableTouch ? (
            this.pinchMgr.pinching = !0,
            this.sx = !0,
            this.pinchMgr.pinchCnt = 1,
            a.Vs.yw()
          ) : a.Vs.bw(
            Object.assign(Object.assign({
            }, this.xs.fB.position), {
              width: i,
              height: s
            })
          ),
          this.xs.fB.RB instanceof G
        ) {
          this.xs.fB.IB = this.xs.fB.EB.size,
          this.beginSize = this.xs.fB.IB;
          const t = this.vs().Ps();
          a.Vs.Fs(
            this.context,
            this.xs.fB.RB,
            Object.assign({
              x: 0,
              y: 0
            }, this.xs.fB.size),
            t
          )
        } else this.beginSize = this.xs.fB.EB.size,
        a.Vs.Gs(
          this.context,
          this.xs.fB.RB,
          Object.assign({
            x: 0,
            y: 0
          }, this.xs.fB.size)
        );
        this.pinchMgr.distance = 1,
        this.pinchMgr.centerX = 0,
        this.pinchMgr.centerY = 0,
        this.nx(1, {
          x: 0,
          y: 0
        }),
        r.Ue.Screen.Zu({
          left: 0,
          top: 0
        }),
        this.dragMgr.setDraggingAmount({
          x: 0,
          y: 0
        })
      }
      nx(t, i) {
        try {
          const s = this.IS(),
          e = this.gS();
          this.SM(t, i),
          this.NM(t, s, e),
          this.setPinchModeDragRange(),
          this.MM()
        } catch (t) {
          s.zs.onError(
            e.js.errorCode.K_,
            'BookViewer.prototype.drawIllustrationExpansion',
            o.Ys.Js(t)
          )
        }
      }
      SM(t, i) {
        this.pinchMgr.pinchPaused = !1,
        this.pinchMgr.vk = t,
        this.pinchMgr.bk(i),
        this._N &&
        this._k(this._N),
        this.uN &&
        this._k(this.uN),
        this._N = null,
        this.uN = null
      }
      NM(t, i, s) {
        this.pinchMgr.pinching = !0,
        this.pinchMgr.pinchRateInitTop = t,
        this.pinchMgr.Pk = t,
        this.pinchMgr.Dk = t,
        this.status == h.w.zw ? this.ix() : (
          this.AN(),
          this.MC.ck(),
          this.xT.DC = !0,
          this.GT &&
          (this.GT.DC = !0),
          this.MC.lk(this)
        ),
        this.SN();
        let e = this.xT.Gm;
        this.mS() &&
        this.bookInfo.gT() &&
        - 1 != i &&
        - 1 != s &&
        this.GT &&
        (e = this.GT.Gm),
        this.cN = e
      }
      ox() {
        return At(
          this,
          void 0,
          void 0,
          (
            function * () {
              const t = globalThis.BV.params,
              e = yield R.bm(i.sf.CONFIRM_URL, this.hx, t.lx, this.contents_id);
              if (null != e.error) this.bS = !0,
              s.zs.onError(e.error.errorCode, 'window.onload', e.error.im);
               else {
                const t = e.value;
                this.bS = !1,
                this.hx = t.replace(/\n/g, '')
              }
            }
          )
        )
      }
      MM() {
        this.KN(this.pinchMgr.Pk);
        const t = this.pinchMgr.yk(),
        i = t.x - ~~(
          (t.x - this.cN.x) * this.pinchMgr.Pk / this.pinchMgr.pinchRateInitTop
        ),
        s = t.y - ~~(
          (t.y - this.cN.y) * this.pinchMgr.Pk / this.pinchMgr.pinchRateInitTop
        );
        this.UN({
          x: i,
          y: s
        })
      }
      _x() {
        let t = document.getElementsByClassName('vertical-page'),
        i = window.innerHeight / 2,
        s = t.length;
        for (let e = 0; e < s; e++) {
          let s = t[e],
          n = s.getBoundingClientRect(),
          o = n.bottom;
          if (n.top <= i && i < o) return parseInt(s.dataset.n)
        }
        return - 1
      }
      ux() {
        const t = window.scrollY;
        if (this.iN.length > 0) {
          const i = this.zoomScaleInfo.eb(),
          s = this._x(),
          n = Math.ceil(t / this.kS / i) - this.iN[s].offsetTop;
          this.BS = n,
          this.get_currentPageNum() != s &&
          (
            o.Ys.FO(e.js.Wo, `onScroll, scrollTop=${ t }, to Page ${ s }`),
            0 == $('#finishDialog').dialog('isOpen') &&
            (this.HP(), this.movePage(s))
          )
        }
      }
      vN() {
        n.E.Re() &&
        (this.qS = 2, this.NS = this.xS, this.MS = this.GS)
      }
      Ex() {
        this.XS = window.scrollY,
        this.zS = performance.now()
      }
      LB() {
        this.JS = !0,
        window.setTimeout(() => {
          this.JS = !1
        }, 500)
      }
      nb() {
        window.clearTimeout(this.KS);
        let t = window.scrollY,
        i = Math.abs(window.scrollY - this.XS),
        s = Math.abs(performance.now() - this.zS),
        h = i / s;
        if (
          i > this.HS &&
          s > this.jS &&
          h < this.qS ? (
            o.Ys.FO(e.js.Wo, `onScrollVertical()  scroll speed: ${ h }`),
            window.clearTimeout(this.FS),
            this.FS = window.setTimeout(
              () => {
                o.Ys.FO(
                  e.js.Wo,
                  `onScrollVertical()  in-scrolling myScrollY:${ t },   Ydiff: ${ i },   TimeDiff: ${ s }`
                ),
                this.ux()
              },
              100
            ),
            this.Ex()
          ) : this.KS = window.setTimeout(
            () => {
              o.Ys.FO(
                e.js.Wo,
                `onScrollVertical()  end-scrolling myScrollY:${ t },  Ydiff: ${ i },   TimeDiff: ${ s }`
              ),
              this.ux(),
              this.Ex()
            },
            100
          ),
          !this.JS &&
          c.Ee.NO
        ) if (n.E.Re()) {
          const t = - 4,
          i = - 300,
          s = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.body.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight,
            document.documentElement.clientHeight
          ) - window.innerHeight,
          e = window.scrollY ||
          document.documentElement.scrollTop;
          s - e < t / o.Ys.qO().scale &&
          s - e > i &&
          (
            r.Ue.Screen.Ju.ad() ||
            (
              window.clearTimeout(this.US),
              this.US = window.setTimeout(() => {
                O.ev('EndOfContent')
              }, 200)
            )
          )
        } else window.clearTimeout(this.US),
        this.US = window.setTimeout(
          () => {
            Math.max(
              document.body.scrollHeight,
              document.body.offsetHeight,
              document.body.clientHeight,
              document.documentElement.scrollHeight,
              document.documentElement.offsetHeight,
              document.documentElement.clientHeight
            ) - window.innerHeight - (window.scrollY || document.documentElement.scrollTop) < 1 &&
            (
              r.Ue.Screen.Ju.ad() ||
              window.setTimeout(
                () => {
                  r.Ue.Screen.Ju.ad() ||
                  (
                    O.ev('EndOfContent'),
                    window.setTimeout(() => {
                      window.scroll({
                        top: window.scrollY - 2
                      })
                    }, 100)
                  )
                },
                100
              )
            )
          },
          400
        )
      }
      rv(t, i) {
        if (i || (this.BS = 0), null == this.iN || null == this.iN[t]) return void window.setTimeout(() => {
          this.rv(t, i)
        }, 200);
        const s = this.zoomScaleInfo.eb();
        window.setTimeout(
          () => {
            1 != s &&
            (
              this.zoomScaleInfo.setIndex(N.zD),
              r.Ue.Nd.zu().style.transform = ''
            );
            const i = document.getElementById(`page_${ t }`);
            i ? (
              i.scrollIntoView(),
              Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.body.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight,
                document.documentElement.clientHeight
              ) - window.innerHeight - (window.scrollY || document.documentElement.scrollTop) < 1 &&
              window.scroll({
                top: window.scrollY - 2
              })
            ) : console.error(`page div element not found: page_${ t }`)
          },
          200
        )
      }
    };
    l.setViewer(Ct),
    l.Wp(),
    globalThis.BV = {
      params: {
      },
      bookShelfUrl: void 0,
      bookViewer: Ct,
      methods: B,
      EmitEvents: {
        onError: (t, s, r) => class {
          static rD(t, s, r) {
            try {
              let h,
              a;
              o.Ys.UO(t) ||
              (t = e.js.errorCode.Ta);
              const c = i.OK.errdialog_header ? i.OK.errdialog_header : 'コンテンツを表示できません';
              h = t < 10 ? `${ c }<br/>(エラーコード:0000${ t })` : t < 100 ? `${ c }<br/>(エラーコード:000${ t })` : t < 1000 ? `${ c }<br/>(エラーコード:00${ t })` : t < 10000 ? `${ c }<br/>(エラーコード:0${ t })` : `${ c }<br/>(エラーコード:${ t })`,
              a = 0 == t ||
              40330 <= t &&
              t <= 40333 ? 'お手数をおかけしますが、書店ページから改めてコンテンツを開いてください。' : 40400 < t &&
              t < 40500 ||
              50000 < t &&
              t < 50100 ? 'お手数をおかけしますが、インターネットへの接続を確認して、書店ページから改めてコンテンツを開いてください。' : 50300 < t &&
              t < 50400 ? '現在サービスが一時的に停止しております。ご迷惑をおかけしますが、しばらくお待ちいただいた後に、書店ページから改めてコンテンツを開いてください。' : `${ t }: ${ s }: ${ r }`,
              i.OK.Rx &&
              (a = i.OK.Rx(t, a));
              const l = i.OK.Ix ? i.OK.Ix : '　';
              n.E.sw &&
              console &&
              console.error(`Error : ${ t } : ${ s } : ${ r }`),
              A.rD(h, a, l)
            } catch (t) {
              n.E.sw &&
              console &&
              console.error(e.js.errorCode.ta, 'Error : ' + o.Ys.Js(t))
            }
          }
        }.rD(t, s, r),
        setEventLockFlg: t => Ct.setEventLockFlg(t),
        setEventInvalid: () => Ct.setEventValidState(!1),
        disablePageUIEventMoment: () => Ct.disablePageUIEventMoment(),
        sv: t => M.sv(t),
        dummyLayerClick: () => M.dummyLayerClick(),
        closeMenu: t => M.closeMenu(t),
        showLoader: () => M.showLoader(),
        hiddenLoader: () => M.hiddenLoader(),
        closeAllMenu: () => M.closeAllMenu(),
        updateMoveBar: () => M.updateMoveBar(),
        btnBuyEvent: t => M.btnBuyEvent(t),
        adjustTrialFooter: () => M.adjustTrialFooter(),
        showTrialDialog: () => C.showTrialDialog(),
        finish: () => Ct.finish(),
        movePage: t => Ct.movePage(t)
      }
    },
    Ct.init(),
    M.setViewer(Ct)
  }
) ();
