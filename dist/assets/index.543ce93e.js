const Nc = function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const r of document.querySelectorAll('link[rel="modulepreload"]')) u(r);
	new MutationObserver((r) => {
		for (const o of r)
			if (o.type === "childList")
				for (const i of o.addedNodes)
					i.tagName === "LINK" && i.rel === "modulepreload" && u(i);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(r) {
		const o = {};
		return (
			r.integrity && (o.integrity = r.integrity),
			r.referrerpolicy && (o.referrerPolicy = r.referrerpolicy),
			r.crossorigin === "use-credentials"
				? (o.credentials = "include")
				: r.crossorigin === "anonymous"
					? (o.credentials = "omit")
					: (o.credentials = "same-origin"),
			o
		);
	}
	function u(r) {
		if (r.ep) return;
		r.ep = !0;
		const o = n(r);
		fetch(r.href, o);
	}
};
Nc();
function Pc(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e;
}
var z = { exports: {} },
	L = {}; /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nu = Symbol.for("react.element"),
	jc = Symbol.for("react.portal"),
	Lc = Symbol.for("react.fragment"),
	Tc = Symbol.for("react.strict_mode"),
	Rc = Symbol.for("react.profiler"),
	Oc = Symbol.for("react.provider"),
	Ic = Symbol.for("react.context"),
	Mc = Symbol.for("react.forward_ref"),
	$c = Symbol.for("react.suspense"),
	Uc = Symbol.for("react.memo"),
	Vc = Symbol.for("react.lazy"),
	bi = Symbol.iterator;
function Wc(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (bi && e[bi]) || e["@@iterator"]),
			typeof e == "function" ? e : null);
}
var da = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	ma = Object.assign,
	ha = {};
function mn(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = ha),
		(this.updater = n || da);
}
mn.prototype.isReactComponent = {};
mn.prototype.setState = function (e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
		);
	this.updater.enqueueSetState(this, e, t, "setState");
};
mn.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function va() {}
va.prototype = mn.prototype;
function ti(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = ha),
		(this.updater = n || da);
}
var ni = (ti.prototype = new va());
ni.constructor = ti;
ma(ni, mn.prototype);
ni.isPureReactComponent = !0;
var el = Array.isArray,
	Ea = Object.prototype.hasOwnProperty,
	ui = { current: null },
	ga = { key: !0, ref: !0, __self: !0, __source: !0 };
function ya(e, t, n) {
	var u,
		r = {},
		o = null,
		i = null;
	if (t != null)
		for (u in (t.ref !== void 0 && (i = t.ref),
		t.key !== void 0 && (o = "" + t.key),
		t))
			Ea.call(t, u) && !ga.hasOwnProperty(u) && (r[u] = t[u]);
	var l = arguments.length - 2;
	if (l === 1) r.children = n;
	else if (1 < l) {
		for (var a = Array(l), s = 0; s < l; s++) a[s] = arguments[s + 2];
		r.children = a;
	}
	if (e && e.defaultProps)
		for (u in ((l = e.defaultProps), l)) r[u] === void 0 && (r[u] = l[u]);
	return {
		$$typeof: nu,
		type: e,
		key: o,
		ref: i,
		props: r,
		_owner: ui.current,
	};
}
function Qc(e, t) {
	return {
		$$typeof: nu,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function ri(e) {
	return typeof e == "object" && e !== null && e.$$typeof === nu;
}
function Hc(e) {
	var t = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var tl = /\/+/g;
function Pr(e, t) {
	return typeof e == "object" && e !== null && e.key != null
		? Hc("" + e.key)
		: t.toString(36);
}
function zu(e, t, n, u, r) {
	var o = typeof e;
	(o === "undefined" || o === "boolean") && (e = null);
	var i = !1;
	if (e === null) i = !0;
	else
		switch (o) {
			case "string":
			case "number":
				i = !0;
				break;
			case "object":
				switch (e.$$typeof) {
					case nu:
					case jc:
						i = !0;
				}
		}
	if (i)
		return (
			(i = e),
			(r = r(i)),
			(e = u === "" ? "." + Pr(i, 0) : u),
			el(r)
				? ((n = ""),
					e != null && (n = e.replace(tl, "$&/") + "/"),
					zu(r, t, n, "", function (s) {
						return s;
					}))
				: r != null &&
					(ri(r) &&
						(r = Qc(
							r,
							n +
								(!r.key || (i && i.key === r.key)
									? ""
									: ("" + r.key).replace(tl, "$&/") + "/") +
								e,
						)),
					t.push(r)),
			1
		);
	if (((i = 0), (u = u === "" ? "." : u + ":"), el(e)))
		for (var l = 0; l < e.length; l++) {
			o = e[l];
			var a = u + Pr(o, l);
			i += zu(o, t, n, a, r);
		}
	else if (((a = Wc(e)), typeof a == "function"))
		for (e = a.call(e), l = 0; !(o = e.next()).done; )
			(o = o.value), (a = u + Pr(o, l++)), (i += zu(o, t, n, a, r));
	else if (o === "object")
		throw (
			((t = String(e)),
			Error(
				"Objects are not valid as a React child (found: " +
					(t === "[object Object]"
						? "object with keys {" + Object.keys(e).join(", ") + "}"
						: t) +
					"). If you meant to render a collection of children, use an array instead.",
			))
		);
	return i;
}
function pu(e, t, n) {
	if (e == null) return e;
	var u = [],
		r = 0;
	return (
		zu(e, u, "", "", function (o) {
			return t.call(n, o, r++);
		}),
		u
	);
}
function Gc(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				},
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var ce = { current: null },
	Au = { transition: null },
	Kc = {
		ReactCurrentDispatcher: ce,
		ReactCurrentBatchConfig: Au,
		ReactCurrentOwner: ui,
	};
L.Children = {
	map: pu,
	forEach: function (e, t, n) {
		pu(
			e,
			function () {
				t.apply(this, arguments);
			},
			n,
		);
	},
	count: function (e) {
		var t = 0;
		return (
			pu(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			pu(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!ri(e))
			throw Error(
				"React.Children.only expected to receive a single React element child.",
			);
		return e;
	},
};
L.Component = mn;
L.Fragment = Lc;
L.Profiler = Rc;
L.PureComponent = ti;
L.StrictMode = Tc;
L.Suspense = $c;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kc;
L.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				e +
				".",
		);
	var u = ma({}, e.props),
		r = e.key,
		o = e.ref,
		i = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((o = t.ref), (i = ui.current)),
			t.key !== void 0 && (r = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var l = e.type.defaultProps;
		for (a in t)
			Ea.call(t, a) &&
				!ga.hasOwnProperty(a) &&
				(u[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
	}
	var a = arguments.length - 2;
	if (a === 1) u.children = n;
	else if (1 < a) {
		l = Array(a);
		for (var s = 0; s < a; s++) l[s] = arguments[s + 2];
		u.children = l;
	}
	return { $$typeof: nu, type: e.type, key: r, ref: o, props: u, _owner: i };
};
L.createContext = function (e) {
	return (
		(e = {
			$$typeof: Ic,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: Oc, _context: e }),
		(e.Consumer = e)
	);
};
L.createElement = ya;
L.createFactory = function (e) {
	var t = ya.bind(null, e);
	return (t.type = e), t;
};
L.createRef = function () {
	return { current: null };
};
L.forwardRef = function (e) {
	return { $$typeof: Mc, render: e };
};
L.isValidElement = ri;
L.lazy = function (e) {
	return { $$typeof: Vc, _payload: { _status: -1, _result: e }, _init: Gc };
};
L.memo = function (e, t) {
	return { $$typeof: Uc, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
	var t = Au.transition;
	Au.transition = {};
	try {
		e();
	} finally {
		Au.transition = t;
	}
};
L.unstable_act = function () {
	throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, t) {
	return ce.current.useCallback(e, t);
};
L.useContext = function (e) {
	return ce.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
	return ce.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
	return ce.current.useEffect(e, t);
};
L.useId = function () {
	return ce.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
	return ce.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
	return ce.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
	return ce.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
	return ce.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
	return ce.current.useReducer(e, t, n);
};
L.useRef = function (e) {
	return ce.current.useRef(e);
};
L.useState = function (e) {
	return ce.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
	return ce.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
	return ce.current.useTransition();
};
L.version = "18.2.0";
(function (e) {
	e.exports = L;
})(z);
const Yc = Pc(z.exports);
var oo = {},
	xa = { exports: {} },
	Ce = {},
	Ca = { exports: {} },
	Fa = {}; /**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
	function t(D, _) {
		var N = D.length;
		D.push(_);
		e: for (; 0 < N; ) {
			var K = (N - 1) >>> 1,
				q = D[K];
			if (0 < r(q, _)) (D[K] = _), (D[N] = q), (N = K);
			else break e;
		}
	}
	function n(D) {
		return D.length === 0 ? null : D[0];
	}
	function u(D) {
		if (D.length === 0) return null;
		var _ = D[0],
			N = D.pop();
		if (N !== _) {
			D[0] = N;
			e: for (var K = 0, q = D.length, su = q >>> 1; K < su; ) {
				var wt = 2 * (K + 1) - 1,
					Nr = D[wt],
					kt = wt + 1,
					cu = D[kt];
				if (0 > r(Nr, N))
					kt < q && 0 > r(cu, Nr)
						? ((D[K] = cu), (D[kt] = N), (K = kt))
						: ((D[K] = Nr), (D[wt] = N), (K = wt));
				else if (kt < q && 0 > r(cu, N)) (D[K] = cu), (D[kt] = N), (K = kt);
				else break e;
			}
		}
		return _;
	}
	function r(D, _) {
		var N = D.sortIndex - _.sortIndex;
		return N !== 0 ? N : D.id - _.id;
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var o = performance;
		e.unstable_now = function () {
			return o.now();
		};
	} else {
		var i = Date,
			l = i.now();
		e.unstable_now = function () {
			return i.now() - l;
		};
	}
	var a = [],
		s = [],
		d = 1,
		h = null,
		m = 3,
		E = !1,
		C = !1,
		w = !1,
		O = typeof setTimeout == "function" ? setTimeout : null,
		p = typeof clearTimeout == "function" ? clearTimeout : null,
		c = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function f(D) {
		for (var _ = n(s); _ !== null; ) {
			if (_.callback === null) u(s);
			else if (_.startTime <= D)
				u(s), (_.sortIndex = _.expirationTime), t(a, _);
			else break;
			_ = n(s);
		}
	}
	function g(D) {
		if (((w = !1), f(D), !C))
			if (n(a) !== null) (C = !0), Ar(k);
			else {
				var _ = n(s);
				_ !== null && _r(g, _.startTime - D);
			}
	}
	function k(D, _) {
		(C = !1), w && ((w = !1), p(F), (F = -1)), (E = !0);
		var N = m;
		try {
			for (
				f(_), h = n(a);
				h !== null && (!(h.expirationTime > _) || (D && !V()));
			) {
				var K = h.callback;
				if (typeof K == "function") {
					(h.callback = null), (m = h.priorityLevel);
					var q = K(h.expirationTime <= _);
					(_ = e.unstable_now()),
						typeof q == "function" ? (h.callback = q) : h === n(a) && u(a),
						f(_);
				} else u(a);
				h = n(a);
			}
			if (h !== null) var su = !0;
			else {
				var wt = n(s);
				wt !== null && _r(g, wt.startTime - _), (su = !1);
			}
			return su;
		} finally {
			(h = null), (m = N), (E = !1);
		}
	}
	var S = !1,
		x = null,
		F = -1,
		P = 5,
		A = -1;
	function V() {
		return !(e.unstable_now() - A < P);
	}
	function we() {
		if (x !== null) {
			var D = e.unstable_now();
			A = D;
			var _ = !0;
			try {
				_ = x(!0, D);
			} finally {
				_ ? We() : ((S = !1), (x = null));
			}
		} else S = !1;
	}
	var We;
	if (typeof c == "function")
		We = function () {
			c(we);
		};
	else if (typeof MessageChannel < "u") {
		var Ft = new MessageChannel(),
			qi = Ft.port2;
		(Ft.port1.onmessage = we),
			(We = function () {
				qi.postMessage(null);
			});
	} else
		We = function () {
			O(we, 0);
		};
	function Ar(D) {
		(x = D), S || ((S = !0), We());
	}
	function _r(D, _) {
		F = O(function () {
			D(e.unstable_now());
		}, _);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (D) {
			D.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			C || E || ((C = !0), Ar(k));
		}),
		(e.unstable_forceFrameRate = function (D) {
			0 > D || 125 < D
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
					)
				: (P = 0 < D ? Math.floor(1e3 / D) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return m;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(a);
		}),
		(e.unstable_next = function (D) {
			switch (m) {
				case 1:
				case 2:
				case 3:
					var _ = 3;
					break;
				default:
					_ = m;
			}
			var N = m;
			m = _;
			try {
				return D();
			} finally {
				m = N;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (D, _) {
			switch (D) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					D = 3;
			}
			var N = m;
			m = D;
			try {
				return _();
			} finally {
				m = N;
			}
		}),
		(e.unstable_scheduleCallback = function (D, _, N) {
			var K = e.unstable_now();
			switch (
				(typeof N == "object" && N !== null
					? ((N = N.delay), (N = typeof N == "number" && 0 < N ? K + N : K))
					: (N = K),
				D)
			) {
				case 1:
					var q = -1;
					break;
				case 2:
					q = 250;
					break;
				case 5:
					q = 1073741823;
					break;
				case 4:
					q = 1e4;
					break;
				default:
					q = 5e3;
			}
			return (
				(q = N + q),
				(D = {
					id: d++,
					callback: _,
					priorityLevel: D,
					startTime: N,
					expirationTime: q,
					sortIndex: -1,
				}),
				N > K
					? ((D.sortIndex = N),
						t(s, D),
						n(a) === null &&
							D === n(s) &&
							(w ? (p(F), (F = -1)) : (w = !0), _r(g, N - K)))
					: ((D.sortIndex = q), t(a, D), C || E || ((C = !0), Ar(k))),
				D
			);
		}),
		(e.unstable_shouldYield = V),
		(e.unstable_wrapCallback = function (D) {
			var _ = m;
			return function () {
				var N = m;
				m = _;
				try {
					return D.apply(this, arguments);
				} finally {
					m = N;
				}
			};
		});
})(Fa);
(function (e) {
	e.exports = Fa;
})(Ca); /**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wa = z.exports,
	xe = Ca.exports;
function y(e) {
	for (
		var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
		n < arguments.length;
		n++
	)
		t += "&args[]=" + encodeURIComponent(arguments[n]);
	return (
		"Minified React error #" +
		e +
		"; visit " +
		t +
		" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	);
}
var ka = new Set(),
	Mn = {};
function It(e, t) {
	ln(e, t), ln(e + "Capture", t);
}
function ln(e, t) {
	for (Mn[e] = t, e = 0; e < t.length; e++) ka.add(t[e]);
}
var Xe = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	io = Object.prototype.hasOwnProperty,
	Xc =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	nl = {},
	ul = {};
function Jc(e) {
	return io.call(ul, e)
		? !0
		: io.call(nl, e)
			? !1
			: Xc.test(e)
				? (ul[e] = !0)
				: ((nl[e] = !0), !1);
}
function Zc(e, t, n, u) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return u
				? !1
				: n !== null
					? !n.acceptsBooleans
					: ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
		default:
			return !1;
	}
}
function qc(e, t, n, u) {
	if (t === null || typeof t > "u" || Zc(e, t, n, u)) return !0;
	if (u) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function pe(e, t, n, u, r, o, i) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = u),
		(this.attributeNamespace = r),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = o),
		(this.removeEmptyString = i);
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (e) {
		ue[e] = new pe(e, 0, !1, e, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"],
].forEach(function (e) {
	var t = e[0];
	ue[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
	ue[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	"autoReverse",
	"externalResourcesRequired",
	"focusable",
	"preserveAlpha",
].forEach(function (e) {
	ue[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (e) {
		ue[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
	ue[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
	ue[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
	ue[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
	ue[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var oi = /[\-:]([a-z])/g;
function ii(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(oi, ii);
		ue[t] = new pe(t, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(oi, ii);
		ue[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(oi, ii);
	ue[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
	ue[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new pe(
	"xlinkHref",
	1,
	!1,
	"xlink:href",
	"http://www.w3.org/1999/xlink",
	!0,
	!1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
	ue[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function li(e, t, n, u) {
	var r = ue.hasOwnProperty(t) ? ue[t] : null;
	(r !== null
		? r.type !== 0
		: u ||
			!(2 < t.length) ||
			(t[0] !== "o" && t[0] !== "O") ||
			(t[1] !== "n" && t[1] !== "N")) &&
		(qc(t, n, r, u) && (n = null),
		u || r === null
			? Jc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
			: r.mustUseProperty
				? (e[r.propertyName] = n === null ? (r.type === 3 ? !1 : "") : n)
				: ((t = r.attributeName),
					(u = r.attributeNamespace),
					n === null
						? e.removeAttribute(t)
						: ((r = r.type),
							(n = r === 3 || (r === 4 && n === !0) ? "" : "" + n),
							u ? e.setAttributeNS(u, t, n) : e.setAttribute(t, n))));
}
var be = wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	fu = Symbol.for("react.element"),
	Vt = Symbol.for("react.portal"),
	Wt = Symbol.for("react.fragment"),
	ai = Symbol.for("react.strict_mode"),
	lo = Symbol.for("react.profiler"),
	Ba = Symbol.for("react.provider"),
	Da = Symbol.for("react.context"),
	si = Symbol.for("react.forward_ref"),
	ao = Symbol.for("react.suspense"),
	so = Symbol.for("react.suspense_list"),
	ci = Symbol.for("react.memo"),
	tt = Symbol.for("react.lazy"),
	Sa = Symbol.for("react.offscreen"),
	rl = Symbol.iterator;
function En(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (rl && e[rl]) || e["@@iterator"]),
			typeof e == "function" ? e : null);
}
var H = Object.assign,
	jr;
function Bn(e) {
	if (jr === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			jr = (t && t[1]) || "";
		}
	return (
		`
` +
		jr +
		e
	);
}
var Lr = !1;
function Tr(e, t) {
	if (!e || Lr) return "";
	Lr = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, "props", {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == "object" && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (s) {
					var u = s;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (s) {
					u = s;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (s) {
				u = s;
			}
			e();
		}
	} catch (s) {
		if (s && u && typeof s.stack == "string") {
			for (
				var r = s.stack.split(`
`),
					o = u.stack.split(`
`),
					i = r.length - 1,
					l = o.length - 1;
				1 <= i && 0 <= l && r[i] !== o[l];
			)
				l--;
			for (; 1 <= i && 0 <= l; i--, l--)
				if (r[i] !== o[l]) {
					if (i !== 1 || l !== 1)
						do
							if ((i--, l--, 0 > l || r[i] !== o[l])) {
								var a =
									`
` + r[i].replace(" at new ", " at ");
								return (
									e.displayName &&
										a.includes("<anonymous>") &&
										(a = a.replace("<anonymous>", e.displayName)),
									a
								);
							}
						while (1 <= i && 0 <= l);
					break;
				}
		}
	} finally {
		(Lr = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : "") ? Bn(e) : "";
}
function bc(e) {
	switch (e.tag) {
		case 5:
			return Bn(e.type);
		case 16:
			return Bn("Lazy");
		case 13:
			return Bn("Suspense");
		case 19:
			return Bn("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (e = Tr(e.type, !1)), e;
		case 11:
			return (e = Tr(e.type.render, !1)), e;
		case 1:
			return (e = Tr(e.type, !0)), e;
		default:
			return "";
	}
}
function co(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case Wt:
			return "Fragment";
		case Vt:
			return "Portal";
		case lo:
			return "Profiler";
		case ai:
			return "StrictMode";
		case ao:
			return "Suspense";
		case so:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case Da:
				return (e.displayName || "Context") + ".Consumer";
			case Ba:
				return (e._context.displayName || "Context") + ".Provider";
			case si:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
					e
				);
			case ci:
				return (
					(t = e.displayName || null), t !== null ? t : co(e.type) || "Memo"
				);
			case tt:
				(t = e._payload), (e = e._init);
				try {
					return co(e(t));
				} catch {}
		}
	return null;
}
function ep(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ""),
				t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
			);
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return co(t);
		case 8:
			return t === ai ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t;
	}
	return null;
}
function vt(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return "";
	}
}
function za(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === "input" &&
		(t === "checkbox" || t === "radio")
	);
}
function tp(e) {
	var t = za(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		u = "" + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < "u" &&
		typeof n.get == "function" &&
		typeof n.set == "function"
	) {
		var r = n.get,
			o = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return r.call(this);
				},
				set: function (i) {
					(u = "" + i), o.call(this, i);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return u;
				},
				setValue: function (i) {
					u = "" + i;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function du(e) {
	e._valueTracker || (e._valueTracker = tp(e));
}
function Aa(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		u = "";
	return (
		e && (u = za(e) ? (e.checked ? "true" : "false") : e.value),
		(e = u),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function $u(e) {
	if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function po(e, t) {
	var n = t.checked;
	return H({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n != null ? n : e._wrapperState.initialChecked,
	});
}
function ol(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		u = t.checked != null ? t.checked : t.defaultChecked;
	(n = vt(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: u,
			initialValue: n,
			controlled:
				t.type === "checkbox" || t.type === "radio"
					? t.checked != null
					: t.value != null,
		});
}
function _a(e, t) {
	(t = t.checked), t != null && li(e, "checked", t, !1);
}
function fo(e, t) {
	_a(e, t);
	var n = vt(t.value),
		u = t.type;
	if (n != null)
		u === "number"
			? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
			: e.value !== "" + n && (e.value = "" + n);
	else if (u === "submit" || u === "reset") {
		e.removeAttribute("value");
		return;
	}
	t.hasOwnProperty("value")
		? mo(e, t.type, n)
		: t.hasOwnProperty("defaultValue") && mo(e, t.type, vt(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function il(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var u = t.type;
		if (
			!(
				(u !== "submit" && u !== "reset") ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = "" + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== "" && (e.name = ""),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== "" && (e.name = n);
}
function mo(e, t, n) {
	(t !== "number" || $u(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Dn = Array.isArray;
function en(e, t, n, u) {
	if (((e = e.options), t)) {
		t = {};
		for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
		for (n = 0; n < e.length; n++)
			(r = t.hasOwnProperty("$" + e[n].value)),
				e[n].selected !== r && (e[n].selected = r),
				r && u && (e[n].defaultSelected = !0);
	} else {
		for (n = "" + vt(n), t = null, r = 0; r < e.length; r++) {
			if (e[r].value === n) {
				(e[r].selected = !0), u && (e[r].defaultSelected = !0);
				return;
			}
			t !== null || e[r].disabled || (t = e[r]);
		}
		t !== null && (t.selected = !0);
	}
}
function ho(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
	return H({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue,
	});
}
function ll(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(y(92));
			if (Dn(n)) {
				if (1 < n.length) throw Error(y(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ""), (n = t);
	}
	e._wrapperState = { initialValue: vt(n) };
}
function Na(e, t) {
	var n = vt(t.value),
		u = vt(t.defaultValue);
	n != null &&
		((n = "" + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		u != null && (e.defaultValue = "" + u);
}
function al(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Pa(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function vo(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? Pa(t)
		: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
			? "http://www.w3.org/1999/xhtml"
			: e;
}
var mu,
	ja = (function (e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
			? function (t, n, u, r) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, u, r);
					});
				}
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
			e.innerHTML = t;
		else {
			for (
				mu = mu || document.createElement("div"),
					mu.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
					t = mu.firstChild;
				e.firstChild;
			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function $n(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var _n = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	np = ["Webkit", "ms", "Moz", "O"];
Object.keys(_n).forEach(function (e) {
	np.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_n[t] = _n[e]);
	});
});
function La(e, t, n) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: n || typeof t != "number" || t === 0 || (_n.hasOwnProperty(e) && _n[e])
			? ("" + t).trim()
			: t + "px";
}
function Ta(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var u = n.indexOf("--") === 0,
				r = La(n, t[n], u);
			n === "float" && (n = "cssFloat"), u ? e.setProperty(n, r) : (e[n] = r);
		}
}
var up = H(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	},
);
function Eo(e, t) {
	if (t) {
		if (up[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(y(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(y(60));
			if (
				typeof t.dangerouslySetInnerHTML != "object" ||
				!("__html" in t.dangerouslySetInnerHTML)
			)
				throw Error(y(61));
		}
		if (t.style != null && typeof t.style != "object") throw Error(y(62));
	}
}
function go(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0;
	}
}
var yo = null;
function pi(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var xo = null,
	tn = null,
	nn = null;
function sl(e) {
	if ((e = ou(e))) {
		if (typeof xo != "function") throw Error(y(280));
		var t = e.stateNode;
		t && ((t = hr(t)), xo(e.stateNode, e.type, t));
	}
}
function Ra(e) {
	tn ? (nn ? nn.push(e) : (nn = [e])) : (tn = e);
}
function Oa() {
	if (tn) {
		var e = tn,
			t = nn;
		if (((nn = tn = null), sl(e), t)) for (e = 0; e < t.length; e++) sl(t[e]);
	}
}
function Ia(e, t) {
	return e(t);
}
function Ma() {}
var Rr = !1;
function $a(e, t, n) {
	if (Rr) return e(t, n);
	Rr = !0;
	try {
		return Ia(e, t, n);
	} finally {
		(Rr = !1), (tn !== null || nn !== null) && (Ma(), Oa());
	}
}
function Un(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var u = hr(n);
	if (u === null) return null;
	n = u[t];
	e: switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(u = !u.disabled) ||
				((e = e.type),
				(u = !(
					e === "button" ||
					e === "input" ||
					e === "select" ||
					e === "textarea"
				))),
				(e = !u);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(y(231, t, typeof n));
	return n;
}
var Co = !1;
if (Xe)
	try {
		var gn = {};
		Object.defineProperty(gn, "passive", {
			get: function () {
				Co = !0;
			},
		}),
			window.addEventListener("test", gn, gn),
			window.removeEventListener("test", gn, gn);
	} catch {
		Co = !1;
	}
function rp(e, t, n, u, r, o, i, l, a) {
	var s = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, s);
	} catch (d) {
		this.onError(d);
	}
}
var Nn = !1,
	Uu = null,
	Vu = !1,
	Fo = null,
	op = {
		onError: function (e) {
			(Nn = !0), (Uu = e);
		},
	};
function ip(e, t, n, u, r, o, i, l, a) {
	(Nn = !1), (Uu = null), rp.apply(op, arguments);
}
function lp(e, t, n, u, r, o, i, l, a) {
	if ((ip.apply(this, arguments), Nn)) {
		if (Nn) {
			var s = Uu;
			(Nn = !1), (Uu = null);
		} else throw Error(y(198));
		Vu || ((Vu = !0), (Fo = s));
	}
}
function Mt(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function Ua(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function cl(e) {
	if (Mt(e) !== e) throw Error(y(188));
}
function ap(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = Mt(e)), t === null)) throw Error(y(188));
		return t !== e ? null : e;
	}
	for (var n = e, u = t; ; ) {
		var r = n.return;
		if (r === null) break;
		var o = r.alternate;
		if (o === null) {
			if (((u = r.return), u !== null)) {
				n = u;
				continue;
			}
			break;
		}
		if (r.child === o.child) {
			for (o = r.child; o; ) {
				if (o === n) return cl(r), e;
				if (o === u) return cl(r), t;
				o = o.sibling;
			}
			throw Error(y(188));
		}
		if (n.return !== u.return) (n = r), (u = o);
		else {
			for (var i = !1, l = r.child; l; ) {
				if (l === n) {
					(i = !0), (n = r), (u = o);
					break;
				}
				if (l === u) {
					(i = !0), (u = r), (n = o);
					break;
				}
				l = l.sibling;
			}
			if (!i) {
				for (l = o.child; l; ) {
					if (l === n) {
						(i = !0), (n = o), (u = r);
						break;
					}
					if (l === u) {
						(i = !0), (u = o), (n = r);
						break;
					}
					l = l.sibling;
				}
				if (!i) throw Error(y(189));
			}
		}
		if (n.alternate !== u) throw Error(y(190));
	}
	if (n.tag !== 3) throw Error(y(188));
	return n.stateNode.current === n ? e : t;
}
function Va(e) {
	return (e = ap(e)), e !== null ? Wa(e) : null;
}
function Wa(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = Wa(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var Qa = xe.unstable_scheduleCallback,
	pl = xe.unstable_cancelCallback,
	sp = xe.unstable_shouldYield,
	cp = xe.unstable_requestPaint,
	Y = xe.unstable_now,
	pp = xe.unstable_getCurrentPriorityLevel,
	fi = xe.unstable_ImmediatePriority,
	Ha = xe.unstable_UserBlockingPriority,
	Wu = xe.unstable_NormalPriority,
	fp = xe.unstable_LowPriority,
	Ga = xe.unstable_IdlePriority,
	pr = null,
	Ue = null;
function dp(e) {
	if (Ue && typeof Ue.onCommitFiberRoot == "function")
		try {
			Ue.onCommitFiberRoot(pr, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var Te = Math.clz32 ? Math.clz32 : vp,
	mp = Math.log,
	hp = Math.LN2;
function vp(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((mp(e) / hp) | 0)) | 0;
}
var hu = 64,
	vu = 4194304;
function Sn(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function Qu(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var u = 0,
		r = e.suspendedLanes,
		o = e.pingedLanes,
		i = n & 268435455;
	if (i !== 0) {
		var l = i & ~r;
		l !== 0 ? (u = Sn(l)) : ((o &= i), o !== 0 && (u = Sn(o)));
	} else (i = n & ~r), i !== 0 ? (u = Sn(i)) : o !== 0 && (u = Sn(o));
	if (u === 0) return 0;
	if (
		t !== 0 &&
		t !== u &&
		(t & r) === 0 &&
		((r = u & -u), (o = t & -t), r >= o || (r === 16 && (o & 4194240) !== 0))
	)
		return t;
	if (((u & 4) !== 0 && (u |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= u; 0 < t; )
			(n = 31 - Te(t)), (r = 1 << n), (u |= e[n]), (t &= ~r);
	return u;
}
function Ep(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function gp(e, t) {
	for (
		var n = e.suspendedLanes,
			u = e.pingedLanes,
			r = e.expirationTimes,
			o = e.pendingLanes;
		0 < o;
	) {
		var i = 31 - Te(o),
			l = 1 << i,
			a = r[i];
		a === -1
			? ((l & n) === 0 || (l & u) !== 0) && (r[i] = Ep(l, t))
			: a <= t && (e.expiredLanes |= l),
			(o &= ~l);
	}
}
function wo(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function Ka() {
	var e = hu;
	return (hu <<= 1), (hu & 4194240) === 0 && (hu = 64), e;
}
function Or(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function uu(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Te(t)),
		(e[t] = n);
}
function yp(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var u = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var r = 31 - Te(n),
			o = 1 << r;
		(t[r] = 0), (u[r] = -1), (e[r] = -1), (n &= ~o);
	}
}
function di(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var u = 31 - Te(n),
			r = 1 << u;
		(r & t) | (e[u] & t) && (e[u] |= t), (n &= ~r);
	}
}
var R = 0;
function Ya(e) {
	return (
		(e &= -e),
		1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
	);
}
var Xa,
	mi,
	Ja,
	Za,
	qa,
	ko = !1,
	Eu = [],
	lt = null,
	at = null,
	st = null,
	Vn = new Map(),
	Wn = new Map(),
	ut = [],
	xp =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" ",
		);
function fl(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			lt = null;
			break;
		case "dragenter":
		case "dragleave":
			at = null;
			break;
		case "mouseover":
		case "mouseout":
			st = null;
			break;
		case "pointerover":
		case "pointerout":
			Vn.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Wn.delete(t.pointerId);
	}
}
function yn(e, t, n, u, r, o) {
	return e === null || e.nativeEvent !== o
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: u,
				nativeEvent: o,
				targetContainers: [r],
			}),
			t !== null && ((t = ou(t)), t !== null && mi(t)),
			e)
		: ((e.eventSystemFlags |= u),
			(t = e.targetContainers),
			r !== null && t.indexOf(r) === -1 && t.push(r),
			e);
}
function Cp(e, t, n, u, r) {
	switch (t) {
		case "focusin":
			return (lt = yn(lt, e, t, n, u, r)), !0;
		case "dragenter":
			return (at = yn(at, e, t, n, u, r)), !0;
		case "mouseover":
			return (st = yn(st, e, t, n, u, r)), !0;
		case "pointerover":
			var o = r.pointerId;
			return Vn.set(o, yn(Vn.get(o) || null, e, t, n, u, r)), !0;
		case "gotpointercapture":
			return (
				(o = r.pointerId), Wn.set(o, yn(Wn.get(o) || null, e, t, n, u, r)), !0
			);
	}
	return !1;
}
function ba(e) {
	var t = St(e.target);
	if (t !== null) {
		var n = Mt(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = Ua(n)), t !== null)) {
					(e.blockedOn = t),
						qa(e.priority, function () {
							Ja(n);
						});
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function _u(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = Bo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var u = new n.constructor(n.type, n);
			(yo = u), n.target.dispatchEvent(u), (yo = null);
		} else return (t = ou(n)), t !== null && mi(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function dl(e, t, n) {
	_u(e) && n.delete(t);
}
function Fp() {
	(ko = !1),
		lt !== null && _u(lt) && (lt = null),
		at !== null && _u(at) && (at = null),
		st !== null && _u(st) && (st = null),
		Vn.forEach(dl),
		Wn.forEach(dl);
}
function xn(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		ko ||
			((ko = !0),
			xe.unstable_scheduleCallback(xe.unstable_NormalPriority, Fp)));
}
function Qn(e) {
	function t(r) {
		return xn(r, e);
	}
	if (0 < Eu.length) {
		xn(Eu[0], e);
		for (var n = 1; n < Eu.length; n++) {
			var u = Eu[n];
			u.blockedOn === e && (u.blockedOn = null);
		}
	}
	for (
		lt !== null && xn(lt, e),
			at !== null && xn(at, e),
			st !== null && xn(st, e),
			Vn.forEach(t),
			Wn.forEach(t),
			n = 0;
		n < ut.length;
		n++
	)
		(u = ut[n]), u.blockedOn === e && (u.blockedOn = null);
	for (; 0 < ut.length && ((n = ut[0]), n.blockedOn === null); )
		ba(n), n.blockedOn === null && ut.shift();
}
var un = be.ReactCurrentBatchConfig,
	Hu = !0;
function wp(e, t, n, u) {
	var r = R,
		o = un.transition;
	un.transition = null;
	try {
		(R = 1), hi(e, t, n, u);
	} finally {
		(R = r), (un.transition = o);
	}
}
function kp(e, t, n, u) {
	var r = R,
		o = un.transition;
	un.transition = null;
	try {
		(R = 4), hi(e, t, n, u);
	} finally {
		(R = r), (un.transition = o);
	}
}
function hi(e, t, n, u) {
	if (Hu) {
		var r = Bo(e, t, n, u);
		if (r === null) Kr(e, t, u, Gu, n), fl(e, u);
		else if (Cp(r, e, t, n, u)) u.stopPropagation();
		else if ((fl(e, u), t & 4 && -1 < xp.indexOf(e))) {
			for (; r !== null; ) {
				var o = ou(r);
				if (
					(o !== null && Xa(o),
					(o = Bo(e, t, n, u)),
					o === null && Kr(e, t, u, Gu, n),
					o === r)
				)
					break;
				r = o;
			}
			r !== null && u.stopPropagation();
		} else Kr(e, t, u, null, n);
	}
}
var Gu = null;
function Bo(e, t, n, u) {
	if (((Gu = null), (e = pi(u)), (e = St(e)), e !== null))
		if (((t = Mt(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = Ua(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (Gu = e), null;
}
function es(e) {
	switch (e) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (pp()) {
				case fi:
					return 1;
				case Ha:
					return 4;
				case Wu:
				case fp:
					return 16;
				case Ga:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var ot = null,
	vi = null,
	Nu = null;
function ts() {
	if (Nu) return Nu;
	var e,
		t = vi,
		n = t.length,
		u,
		r = "value" in ot ? ot.value : ot.textContent,
		o = r.length;
	for (e = 0; e < n && t[e] === r[e]; e++);
	var i = n - e;
	for (u = 1; u <= i && t[n - u] === r[o - u]; u++);
	return (Nu = r.slice(e, 1 < u ? 1 - u : void 0));
}
function Pu(e) {
	var t = e.keyCode;
	return (
		"charCode" in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function gu() {
	return !0;
}
function ml() {
	return !1;
}
function Fe(e) {
	function t(n, u, r, o, i) {
		(this._reactName = n),
			(this._targetInst = r),
			(this.type = u),
			(this.nativeEvent = o),
			(this.target = i),
			(this.currentTarget = null);
		for (var l in e)
			e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
		return (
			(this.isDefaultPrevented = (
				o.defaultPrevented != null
					? o.defaultPrevented
					: o.returnValue === !1
			)
				? gu
				: ml),
			(this.isPropagationStopped = ml),
			this
		);
	}
	return (
		H(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != "unknown" && (n.returnValue = !1),
					(this.isDefaultPrevented = gu));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
					(this.isPropagationStopped = gu));
			},
			persist: function () {},
			isPersistent: gu,
		}),
		t
	);
}
var hn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	Ei = Fe(hn),
	ru = H({}, hn, { view: 0, detail: 0 }),
	Bp = Fe(ru),
	Ir,
	Mr,
	Cn,
	fr = H({}, ru, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: gi,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return "movementX" in e
				? e.movementX
				: (e !== Cn &&
						(Cn && e.type === "mousemove"
							? ((Ir = e.screenX - Cn.screenX), (Mr = e.screenY - Cn.screenY))
							: (Mr = Ir = 0),
						(Cn = e)),
					Ir);
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : Mr;
		},
	}),
	hl = Fe(fr),
	Dp = H({}, fr, { dataTransfer: 0 }),
	Sp = Fe(Dp),
	zp = H({}, ru, { relatedTarget: 0 }),
	$r = Fe(zp),
	Ap = H({}, hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	_p = Fe(Ap),
	Np = H({}, hn, {
		clipboardData: function (e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData;
		},
	}),
	Pp = Fe(Np),
	jp = H({}, hn, { data: 0 }),
	vl = Fe(jp),
	Lp = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified",
	},
	Tp = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta",
	},
	Rp = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey",
	};
function Op(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Rp[e]) ? !!t[e] : !1;
}
function gi() {
	return Op;
}
var Ip = H({}, ru, {
		key: function (e) {
			if (e.key) {
				var t = Lp[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress"
				? ((e = Pu(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
					? Tp[e.keyCode] || "Unidentified"
					: "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: gi,
		charCode: function (e) {
			return e.type === "keypress" ? Pu(e) : 0;
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === "keypress"
				? Pu(e)
				: e.type === "keydown" || e.type === "keyup"
					? e.keyCode
					: 0;
		},
	}),
	Mp = Fe(Ip),
	$p = H({}, fr, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	El = Fe($p),
	Up = H({}, ru, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: gi,
	}),
	Vp = Fe(Up),
	Wp = H({}, hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Qp = Fe(Wp),
	Hp = H({}, fr, {
		deltaX: function (e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return "deltaY" in e
				? e.deltaY
				: "wheelDeltaY" in e
					? -e.wheelDeltaY
					: "wheelDelta" in e
						? -e.wheelDelta
						: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	Gp = Fe(Hp),
	Kp = [9, 13, 27, 32],
	yi = Xe && "CompositionEvent" in window,
	Pn = null;
Xe && "documentMode" in document && (Pn = document.documentMode);
var Yp = Xe && "TextEvent" in window && !Pn,
	ns = Xe && (!yi || (Pn && 8 < Pn && 11 >= Pn)),
	gl = String.fromCharCode(32),
	yl = !1;
function us(e, t) {
	switch (e) {
		case "keyup":
			return Kp.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1;
	}
}
function rs(e) {
	return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Qt = !1;
function Xp(e, t) {
	switch (e) {
		case "compositionend":
			return rs(t);
		case "keypress":
			return t.which !== 32 ? null : ((yl = !0), gl);
		case "textInput":
			return (e = t.data), e === gl && yl ? null : e;
		default:
			return null;
	}
}
function Jp(e, t) {
	if (Qt)
		return e === "compositionend" || (!yi && us(e, t))
			? ((e = ts()), (Nu = vi = ot = null), (Qt = !1), e)
			: null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case "compositionend":
			return ns && t.locale !== "ko" ? null : t.data;
		default:
			return null;
	}
}
var Zp = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function xl(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!Zp[e.type] : t === "textarea";
}
function os(e, t, n, u) {
	Ra(u),
		(t = Ku(t, "onChange")),
		0 < t.length &&
			((n = new Ei("onChange", "change", null, n, u)),
			e.push({ event: n, listeners: t }));
}
var jn = null,
	Hn = null;
function qp(e) {
	vs(e, 0);
}
function dr(e) {
	var t = Kt(e);
	if (Aa(t)) return e;
}
function bp(e, t) {
	if (e === "change") return t;
}
var is = !1;
if (Xe) {
	var Ur;
	if (Xe) {
		var Vr = "oninput" in document;
		if (!Vr) {
			var Cl = document.createElement("div");
			Cl.setAttribute("oninput", "return;"),
				(Vr = typeof Cl.oninput == "function");
		}
		Ur = Vr;
	} else Ur = !1;
	is = Ur && (!document.documentMode || 9 < document.documentMode);
}
function Fl() {
	jn && (jn.detachEvent("onpropertychange", ls), (Hn = jn = null));
}
function ls(e) {
	if (e.propertyName === "value" && dr(Hn)) {
		var t = [];
		os(t, Hn, e, pi(e)), $a(qp, t);
	}
}
function ef(e, t, n) {
	e === "focusin"
		? (Fl(), (jn = t), (Hn = n), jn.attachEvent("onpropertychange", ls))
		: e === "focusout" && Fl();
}
function tf(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown")
		return dr(Hn);
}
function nf(e, t) {
	if (e === "click") return dr(t);
}
function uf(e, t) {
	if (e === "input" || e === "change") return dr(t);
}
function rf(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Oe = typeof Object.is == "function" ? Object.is : rf;
function Gn(e, t) {
	if (Oe(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null)
		return !1;
	var n = Object.keys(e),
		u = Object.keys(t);
	if (n.length !== u.length) return !1;
	for (u = 0; u < n.length; u++) {
		var r = n[u];
		if (!io.call(t, r) || !Oe(e[r], t[r])) return !1;
	}
	return !0;
}
function wl(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function kl(e, t) {
	var n = wl(e);
	e = 0;
	for (var u; n; ) {
		if (n.nodeType === 3) {
			if (((u = e + n.textContent.length), e <= t && u >= t))
				return { node: n, offset: t - e };
			e = u;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = wl(n);
	}
}
function as(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
				? !1
				: t && t.nodeType === 3
					? as(e, t.parentNode)
					: "contains" in e
						? e.contains(t)
						: e.compareDocumentPosition
							? !!(e.compareDocumentPosition(t) & 16)
							: !1
		: !1;
}
function ss() {
	for (var e = window, t = $u(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == "string";
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = $u(e.document);
	}
	return t;
}
function xi(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === "input" &&
			(e.type === "text" ||
				e.type === "search" ||
				e.type === "tel" ||
				e.type === "url" ||
				e.type === "password")) ||
			t === "textarea" ||
			e.contentEditable === "true")
	);
}
function of(e) {
	var t = ss(),
		n = e.focusedElem,
		u = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		as(n.ownerDocument.documentElement, n)
	) {
		if (u !== null && xi(n)) {
			if (
				((t = u.start),
				(e = u.end),
				e === void 0 && (e = t),
				"selectionStart" in n)
			)
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var r = n.textContent.length,
					o = Math.min(u.start, r);
				(u = u.end === void 0 ? o : Math.min(u.end, r)),
					!e.extend && o > u && ((r = u), (u = o), (o = r)),
					(r = kl(n, o));
				var i = kl(n, u);
				r &&
					i &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== r.node ||
						e.anchorOffset !== r.offset ||
						e.focusNode !== i.node ||
						e.focusOffset !== i.offset) &&
					((t = t.createRange()),
					t.setStart(r.node, r.offset),
					e.removeAllRanges(),
					o > u
						? (e.addRange(t), e.extend(i.node, i.offset))
						: (t.setEnd(i.node, i.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var lf = Xe && "documentMode" in document && 11 >= document.documentMode,
	Ht = null,
	Do = null,
	Ln = null,
	So = !1;
function Bl(e, t, n) {
	var u = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	So ||
		Ht == null ||
		Ht !== $u(u) ||
		((u = Ht),
		"selectionStart" in u && xi(u)
			? (u = { start: u.selectionStart, end: u.selectionEnd })
			: ((u = (
					(u.ownerDocument && u.ownerDocument.defaultView) ||
					window
				).getSelection()),
				(u = {
					anchorNode: u.anchorNode,
					anchorOffset: u.anchorOffset,
					focusNode: u.focusNode,
					focusOffset: u.focusOffset,
				})),
		(Ln && Gn(Ln, u)) ||
			((Ln = u),
			(u = Ku(Do, "onSelect")),
			0 < u.length &&
				((t = new Ei("onSelect", "select", null, t, n)),
				e.push({ event: t, listeners: u }),
				(t.target = Ht))));
}
function yu(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n["Webkit" + e] = "webkit" + t),
		(n["Moz" + e] = "moz" + t),
		n
	);
}
var Gt = {
		animationend: yu("Animation", "AnimationEnd"),
		animationiteration: yu("Animation", "AnimationIteration"),
		animationstart: yu("Animation", "AnimationStart"),
		transitionend: yu("Transition", "TransitionEnd"),
	},
	Wr = {},
	cs = {};
Xe &&
	((cs = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete Gt.animationend.animation,
		delete Gt.animationiteration.animation,
		delete Gt.animationstart.animation),
	"TransitionEvent" in window || delete Gt.transitionend.transition);
function mr(e) {
	if (Wr[e]) return Wr[e];
	if (!Gt[e]) return e;
	var t = Gt[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in cs) return (Wr[e] = t[n]);
	return e;
}
var ps = mr("animationend"),
	fs = mr("animationiteration"),
	ds = mr("animationstart"),
	ms = mr("transitionend"),
	hs = new Map(),
	Dl =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" ",
		);
function yt(e, t) {
	hs.set(e, t), It(t, [e]);
}
for (var Qr = 0; Qr < Dl.length; Qr++) {
	var Hr = Dl[Qr],
		af = Hr.toLowerCase(),
		sf = Hr[0].toUpperCase() + Hr.slice(1);
	yt(af, "on" + sf);
}
yt(ps, "onAnimationEnd");
yt(fs, "onAnimationIteration");
yt(ds, "onAnimationStart");
yt("dblclick", "onDoubleClick");
yt("focusin", "onFocus");
yt("focusout", "onBlur");
yt(ms, "onTransitionEnd");
ln("onMouseEnter", ["mouseout", "mouseover"]);
ln("onMouseLeave", ["mouseout", "mouseover"]);
ln("onPointerEnter", ["pointerout", "pointerover"]);
ln("onPointerLeave", ["pointerout", "pointerover"]);
It(
	"onChange",
	"change click focusin focusout input keydown keyup selectionchange".split(
		" ",
	),
);
It(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" ",
	),
);
It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
It(
	"onCompositionEnd",
	"compositionend focusout keydown keypress keyup mousedown".split(" "),
);
It(
	"onCompositionStart",
	"compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
It(
	"onCompositionUpdate",
	"compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var zn =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" ",
		),
	cf = new Set("cancel close invalid load scroll toggle".split(" ").concat(zn));
function Sl(e, t, n) {
	var u = e.type || "unknown-event";
	(e.currentTarget = n), lp(u, t, void 0, e), (e.currentTarget = null);
}
function vs(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var u = e[n],
			r = u.event;
		u = u.listeners;
		e: {
			var o = void 0;
			if (t)
				for (var i = u.length - 1; 0 <= i; i--) {
					var l = u[i],
						a = l.instance,
						s = l.currentTarget;
					if (((l = l.listener), a !== o && r.isPropagationStopped())) break e;
					Sl(r, l, s), (o = a);
				}
			else
				for (i = 0; i < u.length; i++) {
					if (
						((l = u[i]),
						(a = l.instance),
						(s = l.currentTarget),
						(l = l.listener),
						a !== o && r.isPropagationStopped())
					)
						break e;
					Sl(r, l, s), (o = a);
				}
		}
	}
	if (Vu) throw ((e = Fo), (Vu = !1), (Fo = null), e);
}
function M(e, t) {
	var n = t[Po];
	n === void 0 && (n = t[Po] = new Set());
	var u = e + "__bubble";
	n.has(u) || (Es(t, e, 2, !1), n.add(u));
}
function Gr(e, t, n) {
	var u = 0;
	t && (u |= 4), Es(n, e, u, t);
}
var xu = "_reactListening" + Math.random().toString(36).slice(2);
function Kn(e) {
	if (!e[xu]) {
		(e[xu] = !0),
			ka.forEach(function (n) {
				n !== "selectionchange" && (cf.has(n) || Gr(n, !1, e), Gr(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[xu] || ((t[xu] = !0), Gr("selectionchange", !1, t));
	}
}
function Es(e, t, n, u) {
	switch (es(t)) {
		case 1:
			var r = wp;
			break;
		case 4:
			r = kp;
			break;
		default:
			r = hi;
	}
	(n = r.bind(null, t, n, e)),
		(r = void 0),
		!Co ||
			(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
			(r = !0),
		u
			? r !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: r })
				: e.addEventListener(t, n, !0)
			: r !== void 0
				? e.addEventListener(t, n, { passive: r })
				: e.addEventListener(t, n, !1);
}
function Kr(e, t, n, u, r) {
	var o = u;
	if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
		e: for (;;) {
			if (u === null) return;
			var i = u.tag;
			if (i === 3 || i === 4) {
				var l = u.stateNode.containerInfo;
				if (l === r || (l.nodeType === 8 && l.parentNode === r)) break;
				if (i === 4)
					for (i = u.return; i !== null; ) {
						var a = i.tag;
						if (
							(a === 3 || a === 4) &&
							((a = i.stateNode.containerInfo),
							a === r || (a.nodeType === 8 && a.parentNode === r))
						)
							return;
						i = i.return;
					}
				for (; l !== null; ) {
					if (((i = St(l)), i === null)) return;
					if (((a = i.tag), a === 5 || a === 6)) {
						u = o = i;
						continue e;
					}
					l = l.parentNode;
				}
			}
			u = u.return;
		}
	$a(function () {
		var s = o,
			d = pi(n),
			h = [];
		e: {
			var m = hs.get(e);
			if (m !== void 0) {
				var E = Ei,
					C = e;
				switch (e) {
					case "keypress":
						if (Pu(n) === 0) break e;
					case "keydown":
					case "keyup":
						E = Mp;
						break;
					case "focusin":
						(C = "focus"), (E = $r);
						break;
					case "focusout":
						(C = "blur"), (E = $r);
						break;
					case "beforeblur":
					case "afterblur":
						E = $r;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						E = hl;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						E = Sp;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						E = Vp;
						break;
					case ps:
					case fs:
					case ds:
						E = _p;
						break;
					case ms:
						E = Qp;
						break;
					case "scroll":
						E = Bp;
						break;
					case "wheel":
						E = Gp;
						break;
					case "copy":
					case "cut":
					case "paste":
						E = Pp;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						E = El;
				}
				var w = (t & 4) !== 0,
					O = !w && e === "scroll",
					p = w ? (m !== null ? m + "Capture" : null) : m;
				w = [];
				for (var c = s, f; c !== null; ) {
					f = c;
					var g = f.stateNode;
					if (
						(f.tag === 5 &&
							g !== null &&
							((f = g),
							p !== null && ((g = Un(c, p)), g != null && w.push(Yn(c, g, f)))),
						O)
					)
						break;
					c = c.return;
				}
				0 < w.length &&
					((m = new E(m, C, null, n, d)), h.push({ event: m, listeners: w }));
			}
		}
		if ((t & 7) === 0) {
			e: {
				if (
					((m = e === "mouseover" || e === "pointerover"),
					(E = e === "mouseout" || e === "pointerout"),
					m &&
						n !== yo &&
						(C = n.relatedTarget || n.fromElement) &&
						(St(C) || C[Je]))
				)
					break e;
				if (
					(E || m) &&
					((m =
						d.window === d
							? d
							: (m = d.ownerDocument)
								? m.defaultView || m.parentWindow
								: window),
					E
						? ((C = n.relatedTarget || n.toElement),
							(E = s),
							(C = C ? St(C) : null),
							C !== null &&
								((O = Mt(C)), C !== O || (C.tag !== 5 && C.tag !== 6)) &&
								(C = null))
						: ((E = null), (C = s)),
					E !== C)
				) {
					if (
						((w = hl),
						(g = "onMouseLeave"),
						(p = "onMouseEnter"),
						(c = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((w = El),
							(g = "onPointerLeave"),
							(p = "onPointerEnter"),
							(c = "pointer")),
						(O = E == null ? m : Kt(E)),
						(f = C == null ? m : Kt(C)),
						(m = new w(g, c + "leave", E, n, d)),
						(m.target = O),
						(m.relatedTarget = f),
						(g = null),
						St(d) === s &&
							((w = new w(p, c + "enter", C, n, d)),
							(w.target = f),
							(w.relatedTarget = O),
							(g = w)),
						(O = g),
						E && C)
					)
						t: {
							for (w = E, p = C, c = 0, f = w; f; f = Ut(f)) c++;
							for (f = 0, g = p; g; g = Ut(g)) f++;
							for (; 0 < c - f; ) (w = Ut(w)), c--;
							for (; 0 < f - c; ) (p = Ut(p)), f--;
							for (; c--; ) {
								if (w === p || (p !== null && w === p.alternate)) break t;
								(w = Ut(w)), (p = Ut(p));
							}
							w = null;
						}
					else w = null;
					E !== null && zl(h, m, E, w, !1),
						C !== null && O !== null && zl(h, O, C, w, !0);
				}
			}
			e: {
				if (
					((m = s ? Kt(s) : window),
					(E = m.nodeName && m.nodeName.toLowerCase()),
					E === "select" || (E === "input" && m.type === "file"))
				)
					var k = bp;
				else if (xl(m))
					if (is) k = uf;
					else {
						k = tf;
						var S = ef;
					}
				else
					(E = m.nodeName) &&
						E.toLowerCase() === "input" &&
						(m.type === "checkbox" || m.type === "radio") &&
						(k = nf);
				if (k && (k = k(e, s))) {
					os(h, k, n, d);
					break e;
				}
				S && S(e, m, s),
					e === "focusout" &&
						(S = m._wrapperState) &&
						S.controlled &&
						m.type === "number" &&
						mo(m, "number", m.value);
			}
			switch (((S = s ? Kt(s) : window), e)) {
				case "focusin":
					(xl(S) || S.contentEditable === "true") &&
						((Ht = S), (Do = s), (Ln = null));
					break;
				case "focusout":
					Ln = Do = Ht = null;
					break;
				case "mousedown":
					So = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(So = !1), Bl(h, n, d);
					break;
				case "selectionchange":
					if (lf) break;
				case "keydown":
				case "keyup":
					Bl(h, n, d);
			}
			var x;
			if (yi)
				e: {
					switch (e) {
						case "compositionstart":
							var F = "onCompositionStart";
							break e;
						case "compositionend":
							F = "onCompositionEnd";
							break e;
						case "compositionupdate":
							F = "onCompositionUpdate";
							break e;
					}
					F = void 0;
				}
			else
				Qt
					? us(e, n) && (F = "onCompositionEnd")
					: e === "keydown" && n.keyCode === 229 && (F = "onCompositionStart");
			F &&
				(ns &&
					n.locale !== "ko" &&
					(Qt || F !== "onCompositionStart"
						? F === "onCompositionEnd" && Qt && (x = ts())
						: ((ot = d),
							(vi = "value" in ot ? ot.value : ot.textContent),
							(Qt = !0))),
				(S = Ku(s, F)),
				0 < S.length &&
					((F = new vl(F, e, null, n, d)),
					h.push({ event: F, listeners: S }),
					x ? (F.data = x) : ((x = rs(n)), x !== null && (F.data = x)))),
				(x = Yp ? Xp(e, n) : Jp(e, n)) &&
					((s = Ku(s, "onBeforeInput")),
					0 < s.length &&
						((d = new vl("onBeforeInput", "beforeinput", null, n, d)),
						h.push({ event: d, listeners: s }),
						(d.data = x)));
		}
		vs(h, t);
	});
}
function Yn(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function Ku(e, t) {
	for (var n = t + "Capture", u = []; e !== null; ) {
		var r = e,
			o = r.stateNode;
		r.tag === 5 &&
			o !== null &&
			((r = o),
			(o = Un(e, n)),
			o != null && u.unshift(Yn(e, o, r)),
			(o = Un(e, t)),
			o != null && u.push(Yn(e, o, r))),
			(e = e.return);
	}
	return u;
}
function Ut(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function zl(e, t, n, u, r) {
	for (var o = t._reactName, i = []; n !== null && n !== u; ) {
		var l = n,
			a = l.alternate,
			s = l.stateNode;
		if (a !== null && a === u) break;
		l.tag === 5 &&
			s !== null &&
			((l = s),
			r
				? ((a = Un(n, o)), a != null && i.unshift(Yn(n, a, l)))
				: r || ((a = Un(n, o)), a != null && i.push(Yn(n, a, l)))),
			(n = n.return);
	}
	i.length !== 0 && e.push({ event: t, listeners: i });
}
var pf = /\r\n?/g,
	ff = /\u0000|\uFFFD/g;
function Al(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(
			pf,
			`
`,
		)
		.replace(ff, "");
}
function Cu(e, t, n) {
	if (((t = Al(t)), Al(e) !== t && n)) throw Error(y(425));
}
function Yu() {}
var zo = null,
	Ao = null;
function _o(e, t) {
	return (
		e === "textarea" ||
		e === "noscript" ||
		typeof t.children == "string" ||
		typeof t.children == "number" ||
		(typeof t.dangerouslySetInnerHTML == "object" &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var No = typeof setTimeout == "function" ? setTimeout : void 0,
	df = typeof clearTimeout == "function" ? clearTimeout : void 0,
	_l = typeof Promise == "function" ? Promise : void 0,
	mf =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof _l < "u"
				? function (e) {
						return _l.resolve(null).then(e).catch(hf);
					}
				: No;
function hf(e) {
	setTimeout(function () {
		throw e;
	});
}
function Yr(e, t) {
	var n = t,
		u = 0;
	do {
		var r = n.nextSibling;
		if ((e.removeChild(n), r && r.nodeType === 8))
			if (((n = r.data), n === "/$")) {
				if (u === 0) {
					e.removeChild(r), Qn(t);
					return;
				}
				u--;
			} else (n !== "$" && n !== "$?" && n !== "$!") || u++;
		n = r;
	} while (n);
	Qn(t);
}
function ct(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
			if (t === "/$") return null;
		}
	}
	return e;
}
function Nl(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--;
			} else n === "/$" && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var vn = Math.random().toString(36).slice(2),
	$e = "__reactFiber$" + vn,
	Xn = "__reactProps$" + vn,
	Je = "__reactContainer$" + vn,
	Po = "__reactEvents$" + vn,
	vf = "__reactListeners$" + vn,
	Ef = "__reactHandles$" + vn;
function St(e) {
	var t = e[$e];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[Je] || n[$e])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = Nl(e); e !== null; ) {
					if ((n = e[$e])) return n;
					e = Nl(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function ou(e) {
	return (
		(e = e[$e] || e[Je]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function Kt(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(y(33));
}
function hr(e) {
	return e[Xn] || null;
}
var jo = [],
	Yt = -1;
function xt(e) {
	return { current: e };
}
function $(e) {
	0 > Yt || ((e.current = jo[Yt]), (jo[Yt] = null), Yt--);
}
function I(e, t) {
	Yt++, (jo[Yt] = e.current), (e.current = t);
}
var Et = {},
	le = xt(Et),
	me = xt(!1),
	jt = Et;
function an(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Et;
	var u = e.stateNode;
	if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
		return u.__reactInternalMemoizedMaskedChildContext;
	var r = {},
		o;
	for (o in n) r[o] = t[o];
	return (
		u &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = r)),
		r
	);
}
function he(e) {
	return (e = e.childContextTypes), e != null;
}
function Xu() {
	$(me), $(le);
}
function Pl(e, t, n) {
	if (le.current !== Et) throw Error(y(168));
	I(le, t), I(me, n);
}
function gs(e, t, n) {
	var u = e.stateNode;
	if (((t = t.childContextTypes), typeof u.getChildContext != "function"))
		return n;
	u = u.getChildContext();
	for (var r in u) if (!(r in t)) throw Error(y(108, ep(e) || "Unknown", r));
	return H({}, n, u);
}
function Ju(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Et),
		(jt = le.current),
		I(le, e),
		I(me, me.current),
		!0
	);
}
function jl(e, t, n) {
	var u = e.stateNode;
	if (!u) throw Error(y(169));
	n
		? ((e = gs(e, t, jt)),
			(u.__reactInternalMemoizedMergedChildContext = e),
			$(me),
			$(le),
			I(le, e))
		: $(me),
		I(me, n);
}
var He = null,
	vr = !1,
	Xr = !1;
function ys(e) {
	He === null ? (He = [e]) : He.push(e);
}
function gf(e) {
	(vr = !0), ys(e);
}
function Ct() {
	if (!Xr && He !== null) {
		Xr = !0;
		var e = 0,
			t = R;
		try {
			var n = He;
			for (R = 1; e < n.length; e++) {
				var u = n[e];
				do u = u(!0);
				while (u !== null);
			}
			(He = null), (vr = !1);
		} catch (r) {
			throw (He !== null && (He = He.slice(e + 1)), Qa(fi, Ct), r);
		} finally {
			(R = t), (Xr = !1);
		}
	}
	return null;
}
var Xt = [],
	Jt = 0,
	Zu = null,
	qu = 0,
	ke = [],
	Be = 0,
	Lt = null,
	Ge = 1,
	Ke = "";
function Bt(e, t) {
	(Xt[Jt++] = qu), (Xt[Jt++] = Zu), (Zu = e), (qu = t);
}
function xs(e, t, n) {
	(ke[Be++] = Ge), (ke[Be++] = Ke), (ke[Be++] = Lt), (Lt = e);
	var u = Ge;
	e = Ke;
	var r = 32 - Te(u) - 1;
	(u &= ~(1 << r)), (n += 1);
	var o = 32 - Te(t) + r;
	if (30 < o) {
		var i = r - (r % 5);
		(o = (u & ((1 << i) - 1)).toString(32)),
			(u >>= i),
			(r -= i),
			(Ge = (1 << (32 - Te(t) + r)) | (n << r) | u),
			(Ke = o + e);
	} else (Ge = (1 << o) | (n << r) | u), (Ke = e);
}
function Ci(e) {
	e.return !== null && (Bt(e, 1), xs(e, 1, 0));
}
function Fi(e) {
	for (; e === Zu; )
		(Zu = Xt[--Jt]), (Xt[Jt] = null), (qu = Xt[--Jt]), (Xt[Jt] = null);
	for (; e === Lt; )
		(Lt = ke[--Be]),
			(ke[Be] = null),
			(Ke = ke[--Be]),
			(ke[Be] = null),
			(Ge = ke[--Be]),
			(ke[Be] = null);
}
var ye = null,
	ge = null,
	U = !1,
	Le = null;
function Cs(e, t) {
	var n = Se(5, null, null, 0);
	(n.elementType = "DELETED"),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ll(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (ye = e), (ge = ct(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (ye = e), (ge = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = Lt !== null ? { id: Ge, overflow: Ke } : null),
						(e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
						}),
						(n = Se(18, null, null, 0)),
						(n.stateNode = t),
						(n.return = e),
						(e.child = n),
						(ye = e),
						(ge = null),
						!0)
					: !1
			);
		default:
			return !1;
	}
}
function Lo(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function To(e) {
	if (U) {
		var t = ge;
		if (t) {
			var n = t;
			if (!Ll(e, t)) {
				if (Lo(e)) throw Error(y(418));
				t = ct(n.nextSibling);
				var u = ye;
				t && Ll(e, t)
					? Cs(u, n)
					: ((e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e));
			}
		} else {
			if (Lo(e)) throw Error(y(418));
			(e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e);
		}
	}
}
function Tl(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	ye = e;
}
function Fu(e) {
	if (e !== ye) return !1;
	if (!U) return Tl(e), (U = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== "head" && t !== "body" && !_o(e.type, e.memoizedProps))),
		t && (t = ge))
	) {
		if (Lo(e)) throw (Fs(), Error(y(418)));
		for (; t; ) Cs(e, t), (t = ct(t.nextSibling));
	}
	if ((Tl(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(y(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							ge = ct(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== "$" && n !== "$!" && n !== "$?") || t++;
				}
				e = e.nextSibling;
			}
			ge = null;
		}
	} else ge = ye ? ct(e.stateNode.nextSibling) : null;
	return !0;
}
function Fs() {
	for (var e = ge; e; ) e = ct(e.nextSibling);
}
function sn() {
	(ge = ye = null), (U = !1);
}
function wi(e) {
	Le === null ? (Le = [e]) : Le.push(e);
}
var yf = be.ReactCurrentBatchConfig;
function Pe(e, t) {
	if (e && e.defaultProps) {
		(t = H({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var bu = xt(null),
	er = null,
	Zt = null,
	ki = null;
function Bi() {
	ki = Zt = er = null;
}
function Di(e) {
	var t = bu.current;
	$(bu), (e._currentValue = t);
}
function Ro(e, t, n) {
	for (; e !== null; ) {
		var u = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), u !== null && (u.childLanes |= t))
				: u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function rn(e, t) {
	(er = e),
		(ki = Zt = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			((e.lanes & t) !== 0 && (de = !0), (e.firstContext = null));
}
function Ae(e) {
	var t = e._currentValue;
	if (ki !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Zt === null)) {
			if (er === null) throw Error(y(308));
			(Zt = e), (er.dependencies = { lanes: 0, firstContext: e });
		} else Zt = Zt.next = e;
	return t;
}
var zt = null;
function Si(e) {
	zt === null ? (zt = [e]) : zt.push(e);
}
function ws(e, t, n, u) {
	var r = t.interleaved;
	return (
		r === null ? ((n.next = n), Si(t)) : ((n.next = r.next), (r.next = n)),
		(t.interleaved = n),
		Ze(e, u)
	);
}
function Ze(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var nt = !1;
function zi(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function ks(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function Ye(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function pt(e, t, n) {
	var u = e.updateQueue;
	if (u === null) return null;
	if (((u = u.shared), (T & 2) !== 0)) {
		var r = u.pending;
		return (
			r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
			(u.pending = t),
			Ze(e, n)
		);
	}
	return (
		(r = u.interleaved),
		r === null ? ((t.next = t), Si(u)) : ((t.next = r.next), (r.next = t)),
		(u.interleaved = t),
		Ze(e, n)
	);
}
function ju(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var u = t.lanes;
		(u &= e.pendingLanes), (n |= u), (t.lanes = n), di(e, n);
	}
}
function Rl(e, t) {
	var n = e.updateQueue,
		u = e.alternate;
	if (u !== null && ((u = u.updateQueue), n === u)) {
		var r = null,
			o = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var i = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				o === null ? (r = o = i) : (o = o.next = i), (n = n.next);
			} while (n !== null);
			o === null ? (r = o = t) : (o = o.next = t);
		} else r = o = t;
		(n = {
			baseState: u.baseState,
			firstBaseUpdate: r,
			lastBaseUpdate: o,
			shared: u.shared,
			effects: u.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function tr(e, t, n, u) {
	var r = e.updateQueue;
	nt = !1;
	var o = r.firstBaseUpdate,
		i = r.lastBaseUpdate,
		l = r.shared.pending;
	if (l !== null) {
		r.shared.pending = null;
		var a = l,
			s = a.next;
		(a.next = null), i === null ? (o = s) : (i.next = s), (i = a);
		var d = e.alternate;
		d !== null &&
			((d = d.updateQueue),
			(l = d.lastBaseUpdate),
			l !== i &&
				(l === null ? (d.firstBaseUpdate = s) : (l.next = s),
				(d.lastBaseUpdate = a)));
	}
	if (o !== null) {
		var h = r.baseState;
		(i = 0), (d = s = a = null), (l = o);
		do {
			var m = l.lane,
				E = l.eventTime;
			if ((u & m) === m) {
				d !== null &&
					(d = d.next =
						{
							eventTime: E,
							lane: 0,
							tag: l.tag,
							payload: l.payload,
							callback: l.callback,
							next: null,
						});
				e: {
					var C = e,
						w = l;
					switch (((m = t), (E = n), w.tag)) {
						case 1:
							if (((C = w.payload), typeof C == "function")) {
								h = C.call(E, h, m);
								break e;
							}
							h = C;
							break e;
						case 3:
							C.flags = (C.flags & -65537) | 128;
						case 0:
							if (
								((C = w.payload),
								(m = typeof C == "function" ? C.call(E, h, m) : C),
								m == null)
							)
								break e;
							h = H({}, h, m);
							break e;
						case 2:
							nt = !0;
					}
				}
				l.callback !== null &&
					l.lane !== 0 &&
					((e.flags |= 64),
					(m = r.effects),
					m === null ? (r.effects = [l]) : m.push(l));
			} else
				(E = {
					eventTime: E,
					lane: m,
					tag: l.tag,
					payload: l.payload,
					callback: l.callback,
					next: null,
				}),
					d === null ? ((s = d = E), (a = h)) : (d = d.next = E),
					(i |= m);
			if (((l = l.next), l === null)) {
				if (((l = r.shared.pending), l === null)) break;
				(m = l),
					(l = m.next),
					(m.next = null),
					(r.lastBaseUpdate = m),
					(r.shared.pending = null);
			}
		} while (1);
		if (
			(d === null && (a = h),
			(r.baseState = a),
			(r.firstBaseUpdate = s),
			(r.lastBaseUpdate = d),
			(t = r.shared.interleaved),
			t !== null)
		) {
			r = t;
			do (i |= r.lane), (r = r.next);
			while (r !== t);
		} else o === null && (r.shared.lanes = 0);
		(Rt |= i), (e.lanes = i), (e.memoizedState = h);
	}
}
function Ol(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var u = e[t],
				r = u.callback;
			if (r !== null) {
				if (((u.callback = null), (u = n), typeof r != "function"))
					throw Error(y(191, r));
				r.call(u);
			}
		}
}
var Bs = new wa.Component().refs;
function Oo(e, t, n, u) {
	(t = e.memoizedState),
		(n = n(u, t)),
		(n = n == null ? t : H({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Er = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? Mt(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var u = se(),
			r = dt(e),
			o = Ye(u, r);
		(o.payload = t),
			n != null && (o.callback = n),
			(t = pt(e, o, r)),
			t !== null && (Re(t, e, r, u), ju(t, e, r));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var u = se(),
			r = dt(e),
			o = Ye(u, r);
		(o.tag = 1),
			(o.payload = t),
			n != null && (o.callback = n),
			(t = pt(e, o, r)),
			t !== null && (Re(t, e, r, u), ju(t, e, r));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = se(),
			u = dt(e),
			r = Ye(n, u);
		(r.tag = 2),
			t != null && (r.callback = t),
			(t = pt(e, r, u)),
			t !== null && (Re(t, e, u, n), ju(t, e, u));
	},
};
function Il(e, t, n, u, r, o, i) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(u, o, i)
			: t.prototype && t.prototype.isPureReactComponent
				? !Gn(n, u) || !Gn(r, o)
				: !0
	);
}
function Ds(e, t, n) {
	var u = !1,
		r = Et,
		o = t.contextType;
	return (
		typeof o == "object" && o !== null
			? (o = Ae(o))
			: ((r = he(t) ? jt : le.current),
				(u = t.contextTypes),
				(o = (u = u != null) ? an(e, r) : Et)),
		(t = new t(n, o)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = Er),
		(e.stateNode = t),
		(t._reactInternals = e),
		u &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = r),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		t
	);
}
function Ml(e, t, n, u) {
	(e = t.state),
		typeof t.componentWillReceiveProps == "function" &&
			t.componentWillReceiveProps(n, u),
		typeof t.UNSAFE_componentWillReceiveProps == "function" &&
			t.UNSAFE_componentWillReceiveProps(n, u),
		t.state !== e && Er.enqueueReplaceState(t, t.state, null);
}
function Io(e, t, n, u) {
	var r = e.stateNode;
	(r.props = n), (r.state = e.memoizedState), (r.refs = Bs), zi(e);
	var o = t.contextType;
	typeof o == "object" && o !== null
		? (r.context = Ae(o))
		: ((o = he(t) ? jt : le.current), (r.context = an(e, o))),
		(r.state = e.memoizedState),
		(o = t.getDerivedStateFromProps),
		typeof o == "function" && (Oo(e, t, o, n), (r.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof r.getSnapshotBeforeUpdate == "function" ||
			(typeof r.UNSAFE_componentWillMount != "function" &&
				typeof r.componentWillMount != "function") ||
			((t = r.state),
			typeof r.componentWillMount == "function" && r.componentWillMount(),
			typeof r.UNSAFE_componentWillMount == "function" &&
				r.UNSAFE_componentWillMount(),
			t !== r.state && Er.enqueueReplaceState(r, r.state, null),
			tr(e, n, r, u),
			(r.state = e.memoizedState)),
		typeof r.componentDidMount == "function" && (e.flags |= 4194308);
}
function Fn(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(y(309));
				var u = n.stateNode;
			}
			if (!u) throw Error(y(147, e));
			var r = u,
				o = "" + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == "function" &&
				t.ref._stringRef === o
				? t.ref
				: ((t = function (i) {
						var l = r.refs;
						l === Bs && (l = r.refs = {}),
							i === null ? delete l[o] : (l[o] = i);
					}),
					(t._stringRef = o),
					t);
		}
		if (typeof e != "string") throw Error(y(284));
		if (!n._owner) throw Error(y(290, e));
	}
	return e;
}
function wu(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			y(
				31,
				e === "[object Object]"
					? "object with keys {" + Object.keys(t).join(", ") + "}"
					: e,
			),
		))
	);
}
function $l(e) {
	var t = e._init;
	return t(e._payload);
}
function Ss(e) {
	function t(p, c) {
		if (e) {
			var f = p.deletions;
			f === null ? ((p.deletions = [c]), (p.flags |= 16)) : f.push(c);
		}
	}
	function n(p, c) {
		if (!e) return null;
		for (; c !== null; ) t(p, c), (c = c.sibling);
		return null;
	}
	function u(p, c) {
		for (p = new Map(); c !== null; )
			c.key !== null ? p.set(c.key, c) : p.set(c.index, c), (c = c.sibling);
		return p;
	}
	function r(p, c) {
		return (p = mt(p, c)), (p.index = 0), (p.sibling = null), p;
	}
	function o(p, c, f) {
		return (
			(p.index = f),
			e
				? ((f = p.alternate),
					f !== null
						? ((f = f.index), f < c ? ((p.flags |= 2), c) : f)
						: ((p.flags |= 2), c))
				: ((p.flags |= 1048576), c)
		);
	}
	function i(p) {
		return e && p.alternate === null && (p.flags |= 2), p;
	}
	function l(p, c, f, g) {
		return c === null || c.tag !== 6
			? ((c = no(f, p.mode, g)), (c.return = p), c)
			: ((c = r(c, f)), (c.return = p), c);
	}
	function a(p, c, f, g) {
		var k = f.type;
		return k === Wt
			? d(p, c, f.props.children, g, f.key)
			: c !== null &&
					(c.elementType === k ||
						(typeof k == "object" &&
							k !== null &&
							k.$$typeof === tt &&
							$l(k) === c.type))
				? ((g = r(c, f.props)), (g.ref = Fn(p, c, f)), (g.return = p), g)
				: ((g = Mu(f.type, f.key, f.props, null, p.mode, g)),
					(g.ref = Fn(p, c, f)),
					(g.return = p),
					g);
	}
	function s(p, c, f, g) {
		return c === null ||
			c.tag !== 4 ||
			c.stateNode.containerInfo !== f.containerInfo ||
			c.stateNode.implementation !== f.implementation
			? ((c = uo(f, p.mode, g)), (c.return = p), c)
			: ((c = r(c, f.children || [])), (c.return = p), c);
	}
	function d(p, c, f, g, k) {
		return c === null || c.tag !== 7
			? ((c = Pt(f, p.mode, g, k)), (c.return = p), c)
			: ((c = r(c, f)), (c.return = p), c);
	}
	function h(p, c, f) {
		if ((typeof c == "string" && c !== "") || typeof c == "number")
			return (c = no("" + c, p.mode, f)), (c.return = p), c;
		if (typeof c == "object" && c !== null) {
			switch (c.$$typeof) {
				case fu:
					return (
						(f = Mu(c.type, c.key, c.props, null, p.mode, f)),
						(f.ref = Fn(p, null, c)),
						(f.return = p),
						f
					);
				case Vt:
					return (c = uo(c, p.mode, f)), (c.return = p), c;
				case tt:
					var g = c._init;
					return h(p, g(c._payload), f);
			}
			if (Dn(c) || En(c))
				return (c = Pt(c, p.mode, f, null)), (c.return = p), c;
			wu(p, c);
		}
		return null;
	}
	function m(p, c, f, g) {
		var k = c !== null ? c.key : null;
		if ((typeof f == "string" && f !== "") || typeof f == "number")
			return k !== null ? null : l(p, c, "" + f, g);
		if (typeof f == "object" && f !== null) {
			switch (f.$$typeof) {
				case fu:
					return f.key === k ? a(p, c, f, g) : null;
				case Vt:
					return f.key === k ? s(p, c, f, g) : null;
				case tt:
					return (k = f._init), m(p, c, k(f._payload), g);
			}
			if (Dn(f) || En(f)) return k !== null ? null : d(p, c, f, g, null);
			wu(p, f);
		}
		return null;
	}
	function E(p, c, f, g, k) {
		if ((typeof g == "string" && g !== "") || typeof g == "number")
			return (p = p.get(f) || null), l(c, p, "" + g, k);
		if (typeof g == "object" && g !== null) {
			switch (g.$$typeof) {
				case fu:
					return (p = p.get(g.key === null ? f : g.key) || null), a(c, p, g, k);
				case Vt:
					return (p = p.get(g.key === null ? f : g.key) || null), s(c, p, g, k);
				case tt:
					var S = g._init;
					return E(p, c, f, S(g._payload), k);
			}
			if (Dn(g) || En(g)) return (p = p.get(f) || null), d(c, p, g, k, null);
			wu(c, g);
		}
		return null;
	}
	function C(p, c, f, g) {
		for (
			var k = null, S = null, x = c, F = (c = 0), P = null;
			x !== null && F < f.length;
			F++
		) {
			x.index > F ? ((P = x), (x = null)) : (P = x.sibling);
			var A = m(p, x, f[F], g);
			if (A === null) {
				x === null && (x = P);
				break;
			}
			e && x && A.alternate === null && t(p, x),
				(c = o(A, c, F)),
				S === null ? (k = A) : (S.sibling = A),
				(S = A),
				(x = P);
		}
		if (F === f.length) return n(p, x), U && Bt(p, F), k;
		if (x === null) {
			for (; F < f.length; F++)
				(x = h(p, f[F], g)),
					x !== null &&
						((c = o(x, c, F)), S === null ? (k = x) : (S.sibling = x), (S = x));
			return U && Bt(p, F), k;
		}
		for (x = u(p, x); F < f.length; F++)
			(P = E(x, p, F, f[F], g)),
				P !== null &&
					(e && P.alternate !== null && x.delete(P.key === null ? F : P.key),
					(c = o(P, c, F)),
					S === null ? (k = P) : (S.sibling = P),
					(S = P));
		return (
			e &&
				x.forEach(function (V) {
					return t(p, V);
				}),
			U && Bt(p, F),
			k
		);
	}
	function w(p, c, f, g) {
		var k = En(f);
		if (typeof k != "function") throw Error(y(150));
		if (((f = k.call(f)), f == null)) throw Error(y(151));
		for (
			var S = (k = null), x = c, F = (c = 0), P = null, A = f.next();
			x !== null && !A.done;
			F++, A = f.next()
		) {
			x.index > F ? ((P = x), (x = null)) : (P = x.sibling);
			var V = m(p, x, A.value, g);
			if (V === null) {
				x === null && (x = P);
				break;
			}
			e && x && V.alternate === null && t(p, x),
				(c = o(V, c, F)),
				S === null ? (k = V) : (S.sibling = V),
				(S = V),
				(x = P);
		}
		if (A.done) return n(p, x), U && Bt(p, F), k;
		if (x === null) {
			for (; !A.done; F++, A = f.next())
				(A = h(p, A.value, g)),
					A !== null &&
						((c = o(A, c, F)), S === null ? (k = A) : (S.sibling = A), (S = A));
			return U && Bt(p, F), k;
		}
		for (x = u(p, x); !A.done; F++, A = f.next())
			(A = E(x, p, F, A.value, g)),
				A !== null &&
					(e && A.alternate !== null && x.delete(A.key === null ? F : A.key),
					(c = o(A, c, F)),
					S === null ? (k = A) : (S.sibling = A),
					(S = A));
		return (
			e &&
				x.forEach(function (we) {
					return t(p, we);
				}),
			U && Bt(p, F),
			k
		);
	}
	function O(p, c, f, g) {
		if (
			(typeof f == "object" &&
				f !== null &&
				f.type === Wt &&
				f.key === null &&
				(f = f.props.children),
			typeof f == "object" && f !== null)
		) {
			switch (f.$$typeof) {
				case fu:
					e: {
						for (var k = f.key, S = c; S !== null; ) {
							if (S.key === k) {
								if (((k = f.type), k === Wt)) {
									if (S.tag === 7) {
										n(p, S.sibling),
											(c = r(S, f.props.children)),
											(c.return = p),
											(p = c);
										break e;
									}
								} else if (
									S.elementType === k ||
									(typeof k == "object" &&
										k !== null &&
										k.$$typeof === tt &&
										$l(k) === S.type)
								) {
									n(p, S.sibling),
										(c = r(S, f.props)),
										(c.ref = Fn(p, S, f)),
										(c.return = p),
										(p = c);
									break e;
								}
								n(p, S);
								break;
							} else t(p, S);
							S = S.sibling;
						}
						f.type === Wt
							? ((c = Pt(f.props.children, p.mode, g, f.key)),
								(c.return = p),
								(p = c))
							: ((g = Mu(f.type, f.key, f.props, null, p.mode, g)),
								(g.ref = Fn(p, c, f)),
								(g.return = p),
								(p = g));
					}
					return i(p);
				case Vt:
					e: {
						for (S = f.key; c !== null; ) {
							if (c.key === S)
								if (
									c.tag === 4 &&
									c.stateNode.containerInfo === f.containerInfo &&
									c.stateNode.implementation === f.implementation
								) {
									n(p, c.sibling),
										(c = r(c, f.children || [])),
										(c.return = p),
										(p = c);
									break e;
								} else {
									n(p, c);
									break;
								}
							else t(p, c);
							c = c.sibling;
						}
						(c = uo(f, p.mode, g)), (c.return = p), (p = c);
					}
					return i(p);
				case tt:
					return (S = f._init), O(p, c, S(f._payload), g);
			}
			if (Dn(f)) return C(p, c, f, g);
			if (En(f)) return w(p, c, f, g);
			wu(p, f);
		}
		return (typeof f == "string" && f !== "") || typeof f == "number"
			? ((f = "" + f),
				c !== null && c.tag === 6
					? (n(p, c.sibling), (c = r(c, f)), (c.return = p), (p = c))
					: (n(p, c), (c = no(f, p.mode, g)), (c.return = p), (p = c)),
				i(p))
			: n(p, c);
	}
	return O;
}
var cn = Ss(!0),
	zs = Ss(!1),
	iu = {},
	Ve = xt(iu),
	Jn = xt(iu),
	Zn = xt(iu);
function At(e) {
	if (e === iu) throw Error(y(174));
	return e;
}
function Ai(e, t) {
	switch ((I(Zn, t), I(Jn, e), I(Ve, iu), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : vo(null, "");
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = vo(t, e));
	}
	$(Ve), I(Ve, t);
}
function pn() {
	$(Ve), $(Jn), $(Zn);
}
function As(e) {
	At(Zn.current);
	var t = At(Ve.current),
		n = vo(t, e.type);
	t !== n && (I(Jn, e), I(Ve, n));
}
function _i(e) {
	Jn.current === e && ($(Ve), $(Jn));
}
var W = xt(0);
function nr(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if ((t.flags & 128) !== 0) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var Jr = [];
function Ni() {
	for (var e = 0; e < Jr.length; e++)
		Jr[e]._workInProgressVersionPrimary = null;
	Jr.length = 0;
}
var Lu = be.ReactCurrentDispatcher,
	Zr = be.ReactCurrentBatchConfig,
	Tt = 0,
	Q = null,
	J = null,
	b = null,
	ur = !1,
	Tn = !1,
	qn = 0,
	xf = 0;
function re() {
	throw Error(y(321));
}
function Pi(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!Oe(e[n], t[n])) return !1;
	return !0;
}
function ji(e, t, n, u, r, o) {
	if (
		((Tt = o),
		(Q = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Lu.current = e === null || e.memoizedState === null ? kf : Bf),
		(e = n(u, r)),
		Tn)
	) {
		o = 0;
		do {
			if (((Tn = !1), (qn = 0), 25 <= o)) throw Error(y(301));
			(o += 1),
				(b = J = null),
				(t.updateQueue = null),
				(Lu.current = Df),
				(e = n(u, r));
		} while (Tn);
	}
	if (
		((Lu.current = rr),
		(t = J !== null && J.next !== null),
		(Tt = 0),
		(b = J = Q = null),
		(ur = !1),
		t)
	)
		throw Error(y(300));
	return e;
}
function Li() {
	var e = qn !== 0;
	return (qn = 0), e;
}
function Me() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return b === null ? (Q.memoizedState = b = e) : (b = b.next = e), b;
}
function _e() {
	if (J === null) {
		var e = Q.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = J.next;
	var t = b === null ? Q.memoizedState : b.next;
	if (t !== null) (b = t), (J = e);
	else {
		if (e === null) throw Error(y(310));
		(J = e),
			(e = {
				memoizedState: J.memoizedState,
				baseState: J.baseState,
				baseQueue: J.baseQueue,
				queue: J.queue,
				next: null,
			}),
			b === null ? (Q.memoizedState = b = e) : (b = b.next = e);
	}
	return b;
}
function bn(e, t) {
	return typeof t == "function" ? t(e) : t;
}
function qr(e) {
	var t = _e(),
		n = t.queue;
	if (n === null) throw Error(y(311));
	n.lastRenderedReducer = e;
	var u = J,
		r = u.baseQueue,
		o = n.pending;
	if (o !== null) {
		if (r !== null) {
			var i = r.next;
			(r.next = o.next), (o.next = i);
		}
		(u.baseQueue = r = o), (n.pending = null);
	}
	if (r !== null) {
		(o = r.next), (u = u.baseState);
		var l = (i = null),
			a = null,
			s = o;
		do {
			var d = s.lane;
			if ((Tt & d) === d)
				a !== null &&
					(a = a.next =
						{
							lane: 0,
							action: s.action,
							hasEagerState: s.hasEagerState,
							eagerState: s.eagerState,
							next: null,
						}),
					(u = s.hasEagerState ? s.eagerState : e(u, s.action));
			else {
				var h = {
					lane: d,
					action: s.action,
					hasEagerState: s.hasEagerState,
					eagerState: s.eagerState,
					next: null,
				};
				a === null ? ((l = a = h), (i = u)) : (a = a.next = h),
					(Q.lanes |= d),
					(Rt |= d);
			}
			s = s.next;
		} while (s !== null && s !== o);
		a === null ? (i = u) : (a.next = l),
			Oe(u, t.memoizedState) || (de = !0),
			(t.memoizedState = u),
			(t.baseState = i),
			(t.baseQueue = a),
			(n.lastRenderedState = u);
	}
	if (((e = n.interleaved), e !== null)) {
		r = e;
		do (o = r.lane), (Q.lanes |= o), (Rt |= o), (r = r.next);
		while (r !== e);
	} else r === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function br(e) {
	var t = _e(),
		n = t.queue;
	if (n === null) throw Error(y(311));
	n.lastRenderedReducer = e;
	var u = n.dispatch,
		r = n.pending,
		o = t.memoizedState;
	if (r !== null) {
		n.pending = null;
		var i = (r = r.next);
		do (o = e(o, i.action)), (i = i.next);
		while (i !== r);
		Oe(o, t.memoizedState) || (de = !0),
			(t.memoizedState = o),
			t.baseQueue === null && (t.baseState = o),
			(n.lastRenderedState = o);
	}
	return [o, u];
}
function _s() {}
function Ns(e, t) {
	var n = Q,
		u = _e(),
		r = t(),
		o = !Oe(u.memoizedState, r);
	if (
		(o && ((u.memoizedState = r), (de = !0)),
		(u = u.queue),
		Ti(Ls.bind(null, n, u, e), [e]),
		u.getSnapshot !== t || o || (b !== null && b.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			eu(9, js.bind(null, n, u, r, t), void 0, null),
			ee === null)
		)
			throw Error(y(349));
		(Tt & 30) !== 0 || Ps(n, t, r);
	}
	return r;
}
function Ps(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = Q.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
				(Q.updateQueue = t),
				(t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function js(e, t, n, u) {
	(t.value = n), (t.getSnapshot = u), Ts(t) && Rs(e);
}
function Ls(e, t, n) {
	return n(function () {
		Ts(t) && Rs(e);
	});
}
function Ts(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Oe(e, n);
	} catch {
		return !0;
	}
}
function Rs(e) {
	var t = Ze(e, 1);
	t !== null && Re(t, e, 1, -1);
}
function Ul(e) {
	var t = Me();
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: bn,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = wf.bind(null, Q, e)),
		[t.memoizedState, e]
	);
}
function eu(e, t, n, u) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: u, next: null }),
		(t = Q.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
				(Q.updateQueue = t),
				(t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
				n === null
					? (t.lastEffect = e.next = e)
					: ((u = n.next), (n.next = e), (e.next = u), (t.lastEffect = e))),
		e
	);
}
function Os() {
	return _e().memoizedState;
}
function Tu(e, t, n, u) {
	var r = Me();
	(Q.flags |= e),
		(r.memoizedState = eu(1 | t, n, void 0, u === void 0 ? null : u));
}
function gr(e, t, n, u) {
	var r = _e();
	u = u === void 0 ? null : u;
	var o = void 0;
	if (J !== null) {
		var i = J.memoizedState;
		if (((o = i.destroy), u !== null && Pi(u, i.deps))) {
			r.memoizedState = eu(t, n, o, u);
			return;
		}
	}
	(Q.flags |= e), (r.memoizedState = eu(1 | t, n, o, u));
}
function Vl(e, t) {
	return Tu(8390656, 8, e, t);
}
function Ti(e, t) {
	return gr(2048, 8, e, t);
}
function Is(e, t) {
	return gr(4, 2, e, t);
}
function Ms(e, t) {
	return gr(4, 4, e, t);
}
function $s(e, t) {
	if (typeof t == "function")
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function Us(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), gr(4, 4, $s.bind(null, t, e), n)
	);
}
function Ri() {}
function Vs(e, t) {
	var n = _e();
	t = t === void 0 ? null : t;
	var u = n.memoizedState;
	return u !== null && t !== null && Pi(t, u[1])
		? u[0]
		: ((n.memoizedState = [e, t]), e);
}
function Ws(e, t) {
	var n = _e();
	t = t === void 0 ? null : t;
	var u = n.memoizedState;
	return u !== null && t !== null && Pi(t, u[1])
		? u[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function Qs(e, t, n) {
	return (Tt & 21) === 0
		? (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n))
		: (Oe(n, t) || ((n = Ka()), (Q.lanes |= n), (Rt |= n), (e.baseState = !0)),
			t);
}
function Cf(e, t) {
	var n = R;
	(R = n !== 0 && 4 > n ? n : 4), e(!0);
	var u = Zr.transition;
	Zr.transition = {};
	try {
		e(!1), t();
	} finally {
		(R = n), (Zr.transition = u);
	}
}
function Hs() {
	return _e().memoizedState;
}
function Ff(e, t, n) {
	var u = dt(e);
	if (
		((n = {
			lane: u,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		Gs(e))
	)
		Ks(t, n);
	else if (((n = ws(e, t, n, u)), n !== null)) {
		var r = se();
		Re(n, e, u, r), Ys(n, t, u);
	}
}
function wf(e, t, n) {
	var u = dt(e),
		r = { lane: u, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (Gs(e)) Ks(t, r);
	else {
		var o = e.alternate;
		if (
			e.lanes === 0 &&
			(o === null || o.lanes === 0) &&
			((o = t.lastRenderedReducer), o !== null)
		)
			try {
				var i = t.lastRenderedState,
					l = o(i, n);
				if (((r.hasEagerState = !0), (r.eagerState = l), Oe(l, i))) {
					var a = t.interleaved;
					a === null
						? ((r.next = r), Si(t))
						: ((r.next = a.next), (a.next = r)),
						(t.interleaved = r);
					return;
				}
			} catch {
			} finally {
			}
		(n = ws(e, t, r, u)),
			n !== null && ((r = se()), Re(n, e, u, r), Ys(n, t, u));
	}
}
function Gs(e) {
	var t = e.alternate;
	return e === Q || (t !== null && t === Q);
}
function Ks(e, t) {
	Tn = ur = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function Ys(e, t, n) {
	if ((n & 4194240) !== 0) {
		var u = t.lanes;
		(u &= e.pendingLanes), (n |= u), (t.lanes = n), di(e, n);
	}
}
var rr = {
		readContext: Ae,
		useCallback: re,
		useContext: re,
		useEffect: re,
		useImperativeHandle: re,
		useInsertionEffect: re,
		useLayoutEffect: re,
		useMemo: re,
		useReducer: re,
		useRef: re,
		useState: re,
		useDebugValue: re,
		useDeferredValue: re,
		useTransition: re,
		useMutableSource: re,
		useSyncExternalStore: re,
		useId: re,
		unstable_isNewReconciler: !1,
	},
	kf = {
		readContext: Ae,
		useCallback: function (e, t) {
			return (Me().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: Ae,
		useEffect: Vl,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				Tu(4194308, 4, $s.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return Tu(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Tu(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = Me();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, n) {
			var u = Me();
			return (
				(t = n !== void 0 ? n(t) : t),
				(u.memoizedState = u.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(u.queue = e),
				(e = e.dispatch = Ff.bind(null, Q, e)),
				[u.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = Me();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: Ul,
		useDebugValue: Ri,
		useDeferredValue: function (e) {
			return (Me().memoizedState = e);
		},
		useTransition: function () {
			var e = Ul(!1),
				t = e[0];
			return (e = Cf.bind(null, e[1])), (Me().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var u = Q,
				r = Me();
			if (U) {
				if (n === void 0) throw Error(y(407));
				n = n();
			} else {
				if (((n = t()), ee === null)) throw Error(y(349));
				(Tt & 30) !== 0 || Ps(u, t, n);
			}
			r.memoizedState = n;
			var o = { value: n, getSnapshot: t };
			return (
				(r.queue = o),
				Vl(Ls.bind(null, u, o, e), [e]),
				(u.flags |= 2048),
				eu(9, js.bind(null, u, o, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = Me(),
				t = ee.identifierPrefix;
			if (U) {
				var n = Ke,
					u = Ge;
				(n = (u & ~(1 << (32 - Te(u) - 1))).toString(32) + n),
					(t = ":" + t + "R" + n),
					(n = qn++),
					0 < n && (t += "H" + n.toString(32)),
					(t += ":");
			} else (n = xf++), (t = ":" + t + "r" + n.toString(32) + ":");
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	Bf = {
		readContext: Ae,
		useCallback: Vs,
		useContext: Ae,
		useEffect: Ti,
		useImperativeHandle: Us,
		useInsertionEffect: Is,
		useLayoutEffect: Ms,
		useMemo: Ws,
		useReducer: qr,
		useRef: Os,
		useState: function () {
			return qr(bn);
		},
		useDebugValue: Ri,
		useDeferredValue: function (e) {
			var t = _e();
			return Qs(t, J.memoizedState, e);
		},
		useTransition: function () {
			var e = qr(bn)[0],
				t = _e().memoizedState;
			return [e, t];
		},
		useMutableSource: _s,
		useSyncExternalStore: Ns,
		useId: Hs,
		unstable_isNewReconciler: !1,
	},
	Df = {
		readContext: Ae,
		useCallback: Vs,
		useContext: Ae,
		useEffect: Ti,
		useImperativeHandle: Us,
		useInsertionEffect: Is,
		useLayoutEffect: Ms,
		useMemo: Ws,
		useReducer: br,
		useRef: Os,
		useState: function () {
			return br(bn);
		},
		useDebugValue: Ri,
		useDeferredValue: function (e) {
			var t = _e();
			return J === null ? (t.memoizedState = e) : Qs(t, J.memoizedState, e);
		},
		useTransition: function () {
			var e = br(bn)[0],
				t = _e().memoizedState;
			return [e, t];
		},
		useMutableSource: _s,
		useSyncExternalStore: Ns,
		useId: Hs,
		unstable_isNewReconciler: !1,
	};
function fn(e, t) {
	try {
		var n = "",
			u = t;
		do (n += bc(u)), (u = u.return);
		while (u);
		var r = n;
	} catch (o) {
		r =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack;
	}
	return { value: e, source: t, stack: r, digest: null };
}
function eo(e, t, n) {
	return {
		value: e,
		source: null,
		stack: n != null ? n : null,
		digest: t != null ? t : null,
	};
}
function Mo(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var Sf = typeof WeakMap == "function" ? WeakMap : Map;
function Xs(e, t, n) {
	(n = Ye(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var u = t.value;
	return (
		(n.callback = function () {
			ir || ((ir = !0), (Xo = u)), Mo(e, t);
		}),
		n
	);
}
function Js(e, t, n) {
	(n = Ye(-1, n)), (n.tag = 3);
	var u = e.type.getDerivedStateFromError;
	if (typeof u == "function") {
		var r = t.value;
		(n.payload = function () {
			return u(r);
		}),
			(n.callback = function () {
				Mo(e, t);
			});
	}
	var o = e.stateNode;
	return (
		o !== null &&
			typeof o.componentDidCatch == "function" &&
			(n.callback = function () {
				Mo(e, t),
					typeof u != "function" &&
						(ft === null ? (ft = new Set([this])) : ft.add(this));
				var i = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: i !== null ? i : "",
				});
			}),
		n
	);
}
function Wl(e, t, n) {
	var u = e.pingCache;
	if (u === null) {
		u = e.pingCache = new Sf();
		var r = new Set();
		u.set(t, r);
	} else (r = u.get(t)), r === void 0 && ((r = new Set()), u.set(t, r));
	r.has(n) || (r.add(n), (e = Uf.bind(null, e, t, n)), t.then(e, e));
}
function Ql(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function Hl(e, t, n, u, r) {
	return (e.mode & 1) === 0
		? (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
					(n.flags |= 131072),
					(n.flags &= -52805),
					n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = Ye(-1, 1)), (t.tag = 2), pt(n, t, 1))),
					(n.lanes |= 1)),
			e)
		: ((e.flags |= 65536), (e.lanes = r), e);
}
var zf = be.ReactCurrentOwner,
	de = !1;
function ae(e, t, n, u) {
	t.child = e === null ? zs(t, null, n, u) : cn(t, e.child, n, u);
}
function Gl(e, t, n, u, r) {
	n = n.render;
	var o = t.ref;
	return (
		rn(t, r),
		(u = ji(e, t, n, u, o, r)),
		(n = Li()),
		e !== null && !de
			? ((t.updateQueue = e.updateQueue),
				(t.flags &= -2053),
				(e.lanes &= ~r),
				qe(e, t, r))
			: (U && n && Ci(t), (t.flags |= 1), ae(e, t, u, r), t.child)
	);
}
function Kl(e, t, n, u, r) {
	if (e === null) {
		var o = n.type;
		return typeof o == "function" &&
			!Qi(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = o), Zs(e, t, o, u, r))
			: ((e = Mu(n.type, null, u, t, t.mode, r)),
				(e.ref = t.ref),
				(e.return = t),
				(t.child = e));
	}
	if (((o = e.child), (e.lanes & r) === 0)) {
		var i = o.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : Gn), n(i, u) && e.ref === t.ref)
		)
			return qe(e, t, r);
	}
	return (
		(t.flags |= 1),
		(e = mt(o, u)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function Zs(e, t, n, u, r) {
	if (e !== null) {
		var o = e.memoizedProps;
		if (Gn(o, u) && e.ref === t.ref)
			if (((de = !1), (t.pendingProps = u = o), (e.lanes & r) !== 0))
				(e.flags & 131072) !== 0 && (de = !0);
			else return (t.lanes = e.lanes), qe(e, t, r);
	}
	return $o(e, t, n, u, r);
}
function qs(e, t, n) {
	var u = t.pendingProps,
		r = u.children,
		o = e !== null ? e.memoizedState : null;
	if (u.mode === "hidden")
		if ((t.mode & 1) === 0)
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				I(bt, Ee),
				(Ee |= n);
		else {
			if ((n & 1073741824) === 0)
				return (
					(e = o !== null ? o.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					I(bt, Ee),
					(Ee |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(u = o !== null ? o.baseLanes : n),
				I(bt, Ee),
				(Ee |= u);
		}
	else
		o !== null ? ((u = o.baseLanes | n), (t.memoizedState = null)) : (u = n),
			I(bt, Ee),
			(Ee |= u);
	return ae(e, t, r, n), t.child;
}
function bs(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function $o(e, t, n, u, r) {
	var o = he(n) ? jt : le.current;
	return (
		(o = an(t, o)),
		rn(t, r),
		(n = ji(e, t, n, u, o, r)),
		(u = Li()),
		e !== null && !de
			? ((t.updateQueue = e.updateQueue),
				(t.flags &= -2053),
				(e.lanes &= ~r),
				qe(e, t, r))
			: (U && u && Ci(t), (t.flags |= 1), ae(e, t, n, r), t.child)
	);
}
function Yl(e, t, n, u, r) {
	if (he(n)) {
		var o = !0;
		Ju(t);
	} else o = !1;
	if ((rn(t, r), t.stateNode === null))
		Ru(e, t), Ds(t, n, u), Io(t, n, u, r), (u = !0);
	else if (e === null) {
		var i = t.stateNode,
			l = t.memoizedProps;
		i.props = l;
		var a = i.context,
			s = n.contextType;
		typeof s == "object" && s !== null
			? (s = Ae(s))
			: ((s = he(n) ? jt : le.current), (s = an(t, s)));
		var d = n.getDerivedStateFromProps,
			h =
				typeof d == "function" ||
				typeof i.getSnapshotBeforeUpdate == "function";
		h ||
			(typeof i.UNSAFE_componentWillReceiveProps != "function" &&
				typeof i.componentWillReceiveProps != "function") ||
			((l !== u || a !== s) && Ml(t, i, u, s)),
			(nt = !1);
		var m = t.memoizedState;
		(i.state = m),
			tr(t, u, i, r),
			(a = t.memoizedState),
			l !== u || m !== a || me.current || nt
				? (typeof d == "function" && (Oo(t, n, d, u), (a = t.memoizedState)),
					(l = nt || Il(t, n, l, u, m, a, s))
						? (h ||
								(typeof i.UNSAFE_componentWillMount != "function" &&
									typeof i.componentWillMount != "function") ||
								(typeof i.componentWillMount == "function" &&
									i.componentWillMount(),
								typeof i.UNSAFE_componentWillMount == "function" &&
									i.UNSAFE_componentWillMount()),
							typeof i.componentDidMount == "function" && (t.flags |= 4194308))
						: (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
							(t.memoizedProps = u),
							(t.memoizedState = a)),
					(i.props = u),
					(i.state = a),
					(i.context = s),
					(u = l))
				: (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
					(u = !1));
	} else {
		(i = t.stateNode),
			ks(e, t),
			(l = t.memoizedProps),
			(s = t.type === t.elementType ? l : Pe(t.type, l)),
			(i.props = s),
			(h = t.pendingProps),
			(m = i.context),
			(a = n.contextType),
			typeof a == "object" && a !== null
				? (a = Ae(a))
				: ((a = he(n) ? jt : le.current), (a = an(t, a)));
		var E = n.getDerivedStateFromProps;
		(d =
			typeof E == "function" ||
			typeof i.getSnapshotBeforeUpdate == "function") ||
			(typeof i.UNSAFE_componentWillReceiveProps != "function" &&
				typeof i.componentWillReceiveProps != "function") ||
			((l !== h || m !== a) && Ml(t, i, u, a)),
			(nt = !1),
			(m = t.memoizedState),
			(i.state = m),
			tr(t, u, i, r);
		var C = t.memoizedState;
		l !== h || m !== C || me.current || nt
			? (typeof E == "function" && (Oo(t, n, E, u), (C = t.memoizedState)),
				(s = nt || Il(t, n, s, u, m, C, a) || !1)
					? (d ||
							(typeof i.UNSAFE_componentWillUpdate != "function" &&
								typeof i.componentWillUpdate != "function") ||
							(typeof i.componentWillUpdate == "function" &&
								i.componentWillUpdate(u, C, a),
							typeof i.UNSAFE_componentWillUpdate == "function" &&
								i.UNSAFE_componentWillUpdate(u, C, a)),
						typeof i.componentDidUpdate == "function" && (t.flags |= 4),
						typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
					: (typeof i.componentDidUpdate != "function" ||
							(l === e.memoizedProps && m === e.memoizedState) ||
							(t.flags |= 4),
						typeof i.getSnapshotBeforeUpdate != "function" ||
							(l === e.memoizedProps && m === e.memoizedState) ||
							(t.flags |= 1024),
						(t.memoizedProps = u),
						(t.memoizedState = C)),
				(i.props = u),
				(i.state = C),
				(i.context = a),
				(u = s))
			: (typeof i.componentDidUpdate != "function" ||
					(l === e.memoizedProps && m === e.memoizedState) ||
					(t.flags |= 4),
				typeof i.getSnapshotBeforeUpdate != "function" ||
					(l === e.memoizedProps && m === e.memoizedState) ||
					(t.flags |= 1024),
				(u = !1));
	}
	return Uo(e, t, n, u, o, r);
}
function Uo(e, t, n, u, r, o) {
	bs(e, t);
	var i = (t.flags & 128) !== 0;
	if (!u && !i) return r && jl(t, n, !1), qe(e, t, o);
	(u = t.stateNode), (zf.current = t);
	var l =
		i && typeof n.getDerivedStateFromError != "function" ? null : u.render();
	return (
		(t.flags |= 1),
		e !== null && i
			? ((t.child = cn(t, e.child, null, o)), (t.child = cn(t, null, l, o)))
			: ae(e, t, l, o),
		(t.memoizedState = u.state),
		r && jl(t, n, !0),
		t.child
	);
}
function ec(e) {
	var t = e.stateNode;
	t.pendingContext
		? Pl(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && Pl(e, t.context, !1),
		Ai(e, t.containerInfo);
}
function Xl(e, t, n, u, r) {
	return sn(), wi(r), (t.flags |= 256), ae(e, t, n, u), t.child;
}
var Vo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wo(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function tc(e, t, n) {
	var u = t.pendingProps,
		r = W.current,
		o = !1,
		i = (t.flags & 128) !== 0,
		l;
	if (
		((l = i) ||
			(l = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
		l
			? ((o = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (r |= 1),
		I(W, r & 1),
		e === null)
	)
		return (
			To(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? ((t.mode & 1) === 0
						? (t.lanes = 1)
						: e.data === "$!"
							? (t.lanes = 8)
							: (t.lanes = 1073741824),
					null)
				: ((i = u.children),
					(e = u.fallback),
					o
						? ((u = t.mode),
							(o = t.child),
							(i = { mode: "hidden", children: i }),
							(u & 1) === 0 && o !== null
								? ((o.childLanes = 0), (o.pendingProps = i))
								: (o = Cr(i, u, 0, null)),
							(e = Pt(e, u, n, null)),
							(o.return = t),
							(e.return = t),
							(o.sibling = e),
							(t.child = o),
							(t.child.memoizedState = Wo(n)),
							(t.memoizedState = Vo),
							e)
						: Oi(t, i))
		);
	if (((r = e.memoizedState), r !== null && ((l = r.dehydrated), l !== null)))
		return Af(e, t, i, u, l, r, n);
	if (o) {
		(o = u.fallback), (i = t.mode), (r = e.child), (l = r.sibling);
		var a = { mode: "hidden", children: u.children };
		return (
			(i & 1) === 0 && t.child !== r
				? ((u = t.child),
					(u.childLanes = 0),
					(u.pendingProps = a),
					(t.deletions = null))
				: ((u = mt(r, a)), (u.subtreeFlags = r.subtreeFlags & 14680064)),
			l !== null ? (o = mt(l, o)) : ((o = Pt(o, i, n, null)), (o.flags |= 2)),
			(o.return = t),
			(u.return = t),
			(u.sibling = o),
			(t.child = u),
			(u = o),
			(o = t.child),
			(i = e.child.memoizedState),
			(i =
				i === null
					? Wo(n)
					: {
							baseLanes: i.baseLanes | n,
							cachePool: null,
							transitions: i.transitions,
						}),
			(o.memoizedState = i),
			(o.childLanes = e.childLanes & ~n),
			(t.memoizedState = Vo),
			u
		);
	}
	return (
		(o = e.child),
		(e = o.sibling),
		(u = mt(o, { mode: "visible", children: u.children })),
		(t.mode & 1) === 0 && (u.lanes = n),
		(u.return = t),
		(u.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = u),
		(t.memoizedState = null),
		u
	);
}
function Oi(e, t) {
	return (
		(t = Cr({ mode: "visible", children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function ku(e, t, n, u) {
	return (
		u !== null && wi(u),
		cn(t, e.child, null, n),
		(e = Oi(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function Af(e, t, n, u, r, o, i) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (u = eo(Error(y(422)))), ku(e, t, i, u))
			: t.memoizedState !== null
				? ((t.child = e.child), (t.flags |= 128), null)
				: ((o = u.fallback),
					(r = t.mode),
					(u = Cr({ mode: "visible", children: u.children }, r, 0, null)),
					(o = Pt(o, r, i, null)),
					(o.flags |= 2),
					(u.return = t),
					(o.return = t),
					(u.sibling = o),
					(t.child = u),
					(t.mode & 1) !== 0 && cn(t, e.child, null, i),
					(t.child.memoizedState = Wo(i)),
					(t.memoizedState = Vo),
					o);
	if ((t.mode & 1) === 0) return ku(e, t, i, null);
	if (r.data === "$!") {
		if (((u = r.nextSibling && r.nextSibling.dataset), u)) var l = u.dgst;
		return (u = l), (o = Error(y(419))), (u = eo(o, u, void 0)), ku(e, t, i, u);
	}
	if (((l = (i & e.childLanes) !== 0), de || l)) {
		if (((u = ee), u !== null)) {
			switch (i & -i) {
				case 4:
					r = 2;
					break;
				case 16:
					r = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					r = 32;
					break;
				case 536870912:
					r = 268435456;
					break;
				default:
					r = 0;
			}
			(r = (r & (u.suspendedLanes | i)) !== 0 ? 0 : r),
				r !== 0 &&
					r !== o.retryLane &&
					((o.retryLane = r), Ze(e, r), Re(u, e, r, -1));
		}
		return Wi(), (u = eo(Error(y(421)))), ku(e, t, i, u);
	}
	return r.data === "$?"
		? ((t.flags |= 128),
			(t.child = e.child),
			(t = Vf.bind(null, e)),
			(r._reactRetry = t),
			null)
		: ((e = o.treeContext),
			(ge = ct(r.nextSibling)),
			(ye = t),
			(U = !0),
			(Le = null),
			e !== null &&
				((ke[Be++] = Ge),
				(ke[Be++] = Ke),
				(ke[Be++] = Lt),
				(Ge = e.id),
				(Ke = e.overflow),
				(Lt = t)),
			(t = Oi(t, u.children)),
			(t.flags |= 4096),
			t);
}
function Jl(e, t, n) {
	e.lanes |= t;
	var u = e.alternate;
	u !== null && (u.lanes |= t), Ro(e.return, t, n);
}
function to(e, t, n, u, r) {
	var o = e.memoizedState;
	o === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: u,
				tail: n,
				tailMode: r,
			})
		: ((o.isBackwards = t),
			(o.rendering = null),
			(o.renderingStartTime = 0),
			(o.last = u),
			(o.tail = n),
			(o.tailMode = r));
}
function nc(e, t, n) {
	var u = t.pendingProps,
		r = u.revealOrder,
		o = u.tail;
	if ((ae(e, t, u.children, n), (u = W.current), (u & 2) !== 0))
		(u = (u & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && (e.flags & 128) !== 0)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Jl(e, n, t);
				else if (e.tag === 19) Jl(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		u &= 1;
	}
	if ((I(W, u), (t.mode & 1) === 0)) t.memoizedState = null;
	else
		switch (r) {
			case "forwards":
				for (n = t.child, r = null; n !== null; )
					(e = n.alternate),
						e !== null && nr(e) === null && (r = n),
						(n = n.sibling);
				(n = r),
					n === null
						? ((r = t.child), (t.child = null))
						: ((r = n.sibling), (n.sibling = null)),
					to(t, !1, r, n, o);
				break;
			case "backwards":
				for (n = null, r = t.child, t.child = null; r !== null; ) {
					if (((e = r.alternate), e !== null && nr(e) === null)) {
						t.child = r;
						break;
					}
					(e = r.sibling), (r.sibling = n), (n = r), (r = e);
				}
				to(t, !0, n, null, o);
				break;
			case "together":
				to(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Ru(e, t) {
	(t.mode & 1) === 0 &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function qe(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(Rt |= t.lanes),
		(n & t.childLanes) === 0)
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(y(153));
	if (t.child !== null) {
		for (
			e = t.child, n = mt(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;
		)
			(e = e.sibling), (n = n.sibling = mt(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function _f(e, t, n) {
	switch (t.tag) {
		case 3:
			ec(t), sn();
			break;
		case 5:
			As(t);
			break;
		case 1:
			he(t.type) && Ju(t);
			break;
		case 4:
			Ai(t, t.stateNode.containerInfo);
			break;
		case 10:
			var u = t.type._context,
				r = t.memoizedProps.value;
			I(bu, u._currentValue), (u._currentValue = r);
			break;
		case 13:
			if (((u = t.memoizedState), u !== null))
				return u.dehydrated !== null
					? (I(W, W.current & 1), (t.flags |= 128), null)
					: (n & t.child.childLanes) !== 0
						? tc(e, t, n)
						: (I(W, W.current & 1),
							(e = qe(e, t, n)),
							e !== null ? e.sibling : null);
			I(W, W.current & 1);
			break;
		case 19:
			if (((u = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
				if (u) return nc(e, t, n);
				t.flags |= 128;
			}
			if (
				((r = t.memoizedState),
				r !== null &&
					((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
				I(W, W.current),
				u)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), qs(e, t, n);
	}
	return qe(e, t, n);
}
var uc, Qo, rc, oc;
uc = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
Qo = function () {};
rc = function (e, t, n, u) {
	var r = e.memoizedProps;
	if (r !== u) {
		(e = t.stateNode), At(Ve.current);
		var o = null;
		switch (n) {
			case "input":
				(r = po(e, r)), (u = po(e, u)), (o = []);
				break;
			case "select":
				(r = H({}, r, { value: void 0 })),
					(u = H({}, u, { value: void 0 })),
					(o = []);
				break;
			case "textarea":
				(r = ho(e, r)), (u = ho(e, u)), (o = []);
				break;
			default:
				typeof r.onClick != "function" &&
					typeof u.onClick == "function" &&
					(e.onclick = Yu);
		}
		Eo(n, u);
		var i;
		n = null;
		for (s in r)
			if (!u.hasOwnProperty(s) && r.hasOwnProperty(s) && r[s] != null)
				if (s === "style") {
					var l = r[s];
					for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
				} else
					s !== "dangerouslySetInnerHTML" &&
						s !== "children" &&
						s !== "suppressContentEditableWarning" &&
						s !== "suppressHydrationWarning" &&
						s !== "autoFocus" &&
						(Mn.hasOwnProperty(s)
							? o || (o = [])
							: (o = o || []).push(s, null));
		for (s in u) {
			var a = u[s];
			if (
				((l = r != null ? r[s] : void 0),
				u.hasOwnProperty(s) && a !== l && (a != null || l != null))
			)
				if (s === "style")
					if (l) {
						for (i in l)
							!l.hasOwnProperty(i) ||
								(a && a.hasOwnProperty(i)) ||
								(n || (n = {}), (n[i] = ""));
						for (i in a)
							a.hasOwnProperty(i) &&
								l[i] !== a[i] &&
								(n || (n = {}), (n[i] = a[i]));
					} else n || (o || (o = []), o.push(s, n)), (n = a);
				else
					s === "dangerouslySetInnerHTML"
						? ((a = a ? a.__html : void 0),
							(l = l ? l.__html : void 0),
							a != null && l !== a && (o = o || []).push(s, a))
						: s === "children"
							? (typeof a != "string" && typeof a != "number") ||
								(o = o || []).push(s, "" + a)
							: s !== "suppressContentEditableWarning" &&
								s !== "suppressHydrationWarning" &&
								(Mn.hasOwnProperty(s)
									? (a != null && s === "onScroll" && M("scroll", e),
										o || l === a || (o = []))
									: (o = o || []).push(s, a));
		}
		n && (o = o || []).push("style", n);
		var s = o;
		(t.updateQueue = s) && (t.flags |= 4);
	}
};
oc = function (e, t, n, u) {
	n !== u && (t.flags |= 4);
};
function wn(e, t) {
	if (!U)
		switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case "collapsed":
				n = e.tail;
				for (var u = null; n !== null; )
					n.alternate !== null && (u = n), (n = n.sibling);
				u === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (u.sibling = null);
		}
}
function oe(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		u = 0;
	if (t)
		for (var r = e.child; r !== null; )
			(n |= r.lanes | r.childLanes),
				(u |= r.subtreeFlags & 14680064),
				(u |= r.flags & 14680064),
				(r.return = e),
				(r = r.sibling);
	else
		for (r = e.child; r !== null; )
			(n |= r.lanes | r.childLanes),
				(u |= r.subtreeFlags),
				(u |= r.flags),
				(r.return = e),
				(r = r.sibling);
	return (e.subtreeFlags |= u), (e.childLanes = n), t;
}
function Nf(e, t, n) {
	var u = t.pendingProps;
	switch ((Fi(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return oe(t), null;
		case 1:
			return he(t.type) && Xu(), oe(t), null;
		case 3:
			return (
				(u = t.stateNode),
				pn(),
				$(me),
				$(le),
				Ni(),
				u.pendingContext &&
					((u.context = u.pendingContext), (u.pendingContext = null)),
				(e === null || e.child === null) &&
					(Fu(t)
						? (t.flags |= 4)
						: e === null ||
							(e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
							((t.flags |= 1024), Le !== null && (qo(Le), (Le = null)))),
				Qo(e, t),
				oe(t),
				null
			);
		case 5:
			_i(t);
			var r = At(Zn.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				rc(e, t, n, u, r),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!u) {
					if (t.stateNode === null) throw Error(y(166));
					return oe(t), null;
				}
				if (((e = At(Ve.current)), Fu(t))) {
					(u = t.stateNode), (n = t.type);
					var o = t.memoizedProps;
					switch (((u[$e] = t), (u[Xn] = o), (e = (t.mode & 1) !== 0), n)) {
						case "dialog":
							M("cancel", u), M("close", u);
							break;
						case "iframe":
						case "object":
						case "embed":
							M("load", u);
							break;
						case "video":
						case "audio":
							for (r = 0; r < zn.length; r++) M(zn[r], u);
							break;
						case "source":
							M("error", u);
							break;
						case "img":
						case "image":
						case "link":
							M("error", u), M("load", u);
							break;
						case "details":
							M("toggle", u);
							break;
						case "input":
							ol(u, o), M("invalid", u);
							break;
						case "select":
							(u._wrapperState = { wasMultiple: !!o.multiple }),
								M("invalid", u);
							break;
						case "textarea":
							ll(u, o), M("invalid", u);
					}
					Eo(n, o), (r = null);
					for (var i in o)
						if (o.hasOwnProperty(i)) {
							var l = o[i];
							i === "children"
								? typeof l == "string"
									? u.textContent !== l &&
										(o.suppressHydrationWarning !== !0 &&
											Cu(u.textContent, l, e),
										(r = ["children", l]))
									: typeof l == "number" &&
										u.textContent !== "" + l &&
										(o.suppressHydrationWarning !== !0 &&
											Cu(u.textContent, l, e),
										(r = ["children", "" + l]))
								: Mn.hasOwnProperty(i) &&
									l != null &&
									i === "onScroll" &&
									M("scroll", u);
						}
					switch (n) {
						case "input":
							du(u), il(u, o, !0);
							break;
						case "textarea":
							du(u), al(u);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof o.onClick == "function" && (u.onclick = Yu);
					}
					(u = r), (t.updateQueue = u), u !== null && (t.flags |= 4);
				} else {
					(i = r.nodeType === 9 ? r : r.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" && (e = Pa(n)),
						e === "http://www.w3.org/1999/xhtml"
							? n === "script"
								? ((e = i.createElement("div")),
									(e.innerHTML = "<script><\/script>"),
									(e = e.removeChild(e.firstChild)))
								: typeof u.is == "string"
									? (e = i.createElement(n, { is: u.is }))
									: ((e = i.createElement(n)),
										n === "select" &&
											((i = e),
											u.multiple
												? (i.multiple = !0)
												: u.size && (i.size = u.size)))
							: (e = i.createElementNS(e, n)),
						(e[$e] = t),
						(e[Xn] = u),
						uc(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((i = go(n, u)), n)) {
							case "dialog":
								M("cancel", e), M("close", e), (r = u);
								break;
							case "iframe":
							case "object":
							case "embed":
								M("load", e), (r = u);
								break;
							case "video":
							case "audio":
								for (r = 0; r < zn.length; r++) M(zn[r], e);
								r = u;
								break;
							case "source":
								M("error", e), (r = u);
								break;
							case "img":
							case "image":
							case "link":
								M("error", e), M("load", e), (r = u);
								break;
							case "details":
								M("toggle", e), (r = u);
								break;
							case "input":
								ol(e, u), (r = po(e, u)), M("invalid", e);
								break;
							case "option":
								r = u;
								break;
							case "select":
								(e._wrapperState = { wasMultiple: !!u.multiple }),
									(r = H({}, u, { value: void 0 })),
									M("invalid", e);
								break;
							case "textarea":
								ll(e, u), (r = ho(e, u)), M("invalid", e);
								break;
							default:
								r = u;
						}
						Eo(n, r), (l = r);
						for (o in l)
							if (l.hasOwnProperty(o)) {
								var a = l[o];
								o === "style"
									? Ta(e, a)
									: o === "dangerouslySetInnerHTML"
										? ((a = a ? a.__html : void 0), a != null && ja(e, a))
										: o === "children"
											? typeof a == "string"
												? (n !== "textarea" || a !== "") && $n(e, a)
												: typeof a == "number" && $n(e, "" + a)
											: o !== "suppressContentEditableWarning" &&
												o !== "suppressHydrationWarning" &&
												o !== "autoFocus" &&
												(Mn.hasOwnProperty(o)
													? a != null && o === "onScroll" && M("scroll", e)
													: a != null && li(e, o, a, i));
							}
						switch (n) {
							case "input":
								du(e), il(e, u, !1);
								break;
							case "textarea":
								du(e), al(e);
								break;
							case "option":
								u.value != null && e.setAttribute("value", "" + vt(u.value));
								break;
							case "select":
								(e.multiple = !!u.multiple),
									(o = u.value),
									o != null
										? en(e, !!u.multiple, o, !1)
										: u.defaultValue != null &&
											en(e, !!u.multiple, u.defaultValue, !0);
								break;
							default:
								typeof r.onClick == "function" && (e.onclick = Yu);
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								u = !!u.autoFocus;
								break e;
							case "img":
								u = !0;
								break e;
							default:
								u = !1;
						}
					}
					u && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return oe(t), null;
		case 6:
			if (e && t.stateNode != null) oc(e, t, e.memoizedProps, u);
			else {
				if (typeof u != "string" && t.stateNode === null) throw Error(y(166));
				if (((n = At(Zn.current)), At(Ve.current), Fu(t))) {
					if (
						((u = t.stateNode),
						(n = t.memoizedProps),
						(u[$e] = t),
						(o = u.nodeValue !== n) && ((e = ye), e !== null))
					)
						switch (e.tag) {
							case 3:
								Cu(u.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									Cu(u.nodeValue, n, (e.mode & 1) !== 0);
						}
					o && (t.flags |= 4);
				} else
					(u = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(u)),
						(u[$e] = t),
						(t.stateNode = u);
			}
			return oe(t), null;
		case 13:
			if (
				($(W),
				(u = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (U && ge !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
					Fs(), sn(), (t.flags |= 98560), (o = !1);
				else if (((o = Fu(t)), u !== null && u.dehydrated !== null)) {
					if (e === null) {
						if (!o) throw Error(y(318));
						if (
							((o = t.memoizedState),
							(o = o !== null ? o.dehydrated : null),
							!o)
						)
							throw Error(y(317));
						o[$e] = t;
					} else
						sn(),
							(t.flags & 128) === 0 && (t.memoizedState = null),
							(t.flags |= 4);
					oe(t), (o = !1);
				} else Le !== null && (qo(Le), (Le = null)), (o = !0);
				if (!o) return t.flags & 65536 ? t : null;
			}
			return (t.flags & 128) !== 0
				? ((t.lanes = n), t)
				: ((u = u !== null),
					u !== (e !== null && e.memoizedState !== null) &&
						u &&
						((t.child.flags |= 8192),
						(t.mode & 1) !== 0 &&
							(e === null || (W.current & 1) !== 0
								? Z === 0 && (Z = 3)
								: Wi())),
					t.updateQueue !== null && (t.flags |= 4),
					oe(t),
					null);
		case 4:
			return (
				pn(), Qo(e, t), e === null && Kn(t.stateNode.containerInfo), oe(t), null
			);
		case 10:
			return Di(t.type._context), oe(t), null;
		case 17:
			return he(t.type) && Xu(), oe(t), null;
		case 19:
			if (($(W), (o = t.memoizedState), o === null)) return oe(t), null;
			if (((u = (t.flags & 128) !== 0), (i = o.rendering), i === null))
				if (u) wn(o, !1);
				else {
					if (Z !== 0 || (e !== null && (e.flags & 128) !== 0))
						for (e = t.child; e !== null; ) {
							if (((i = nr(e)), i !== null)) {
								for (
									t.flags |= 128,
										wn(o, !1),
										u = i.updateQueue,
										u !== null && ((t.updateQueue = u), (t.flags |= 4)),
										t.subtreeFlags = 0,
										u = n,
										n = t.child;
									n !== null;
								)
									(o = n),
										(e = u),
										(o.flags &= 14680066),
										(i = o.alternate),
										i === null
											? ((o.childLanes = 0),
												(o.lanes = e),
												(o.child = null),
												(o.subtreeFlags = 0),
												(o.memoizedProps = null),
												(o.memoizedState = null),
												(o.updateQueue = null),
												(o.dependencies = null),
												(o.stateNode = null))
											: ((o.childLanes = i.childLanes),
												(o.lanes = i.lanes),
												(o.child = i.child),
												(o.subtreeFlags = 0),
												(o.deletions = null),
												(o.memoizedProps = i.memoizedProps),
												(o.memoizedState = i.memoizedState),
												(o.updateQueue = i.updateQueue),
												(o.type = i.type),
												(e = i.dependencies),
												(o.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
															})),
										(n = n.sibling);
								return I(W, (W.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					o.tail !== null &&
						Y() > dn &&
						((t.flags |= 128), (u = !0), wn(o, !1), (t.lanes = 4194304));
				}
			else {
				if (!u)
					if (((e = nr(i)), e !== null)) {
						if (
							((t.flags |= 128),
							(u = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							wn(o, !0),
							o.tail === null && o.tailMode === "hidden" && !i.alternate && !U)
						)
							return oe(t), null;
					} else
						2 * Y() - o.renderingStartTime > dn &&
							n !== 1073741824 &&
							((t.flags |= 128), (u = !0), wn(o, !1), (t.lanes = 4194304));
				o.isBackwards
					? ((i.sibling = t.child), (t.child = i))
					: ((n = o.last),
						n !== null ? (n.sibling = i) : (t.child = i),
						(o.last = i));
			}
			return o.tail !== null
				? ((t = o.tail),
					(o.rendering = t),
					(o.tail = t.sibling),
					(o.renderingStartTime = Y()),
					(t.sibling = null),
					(n = W.current),
					I(W, u ? (n & 1) | 2 : n & 1),
					t)
				: (oe(t), null);
		case 22:
		case 23:
			return (
				Vi(),
				(u = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== u && (t.flags |= 8192),
				u && (t.mode & 1) !== 0
					? (Ee & 1073741824) !== 0 &&
						(oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: oe(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(y(156, t.tag));
}
function Pf(e, t) {
	switch ((Fi(t), t.tag)) {
		case 1:
			return (
				he(t.type) && Xu(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				pn(),
				$(me),
				$(le),
				Ni(),
				(e = t.flags),
				(e & 65536) !== 0 && (e & 128) === 0
					? ((t.flags = (e & -65537) | 128), t)
					: null
			);
		case 5:
			return _i(t), null;
		case 13:
			if (($(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(y(340));
				sn();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return $(W), null;
		case 4:
			return pn(), null;
		case 10:
			return Di(t.type._context), null;
		case 22:
		case 23:
			return Vi(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Bu = !1,
	ie = !1,
	jf = typeof WeakSet == "function" ? WeakSet : Set,
	B = null;
function qt(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null);
			} catch (u) {
				G(e, t, u);
			}
		else n.current = null;
}
function Ho(e, t, n) {
	try {
		n();
	} catch (u) {
		G(e, t, u);
	}
}
var Zl = !1;
function Lf(e, t) {
	if (((zo = Hu), (e = ss()), xi(e))) {
		if ("selectionStart" in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var u = n.getSelection && n.getSelection();
				if (u && u.rangeCount !== 0) {
					n = u.anchorNode;
					var r = u.anchorOffset,
						o = u.focusNode;
					u = u.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break e;
					}
					var i = 0,
						l = -1,
						a = -1,
						s = 0,
						d = 0,
						h = e,
						m = null;
					t: for (;;) {
						for (
							var E;
							h !== n || (r !== 0 && h.nodeType !== 3) || (l = i + r),
								h !== o || (u !== 0 && h.nodeType !== 3) || (a = i + u),
								h.nodeType === 3 && (i += h.nodeValue.length),
								(E = h.firstChild) !== null;
						)
							(m = h), (h = E);
						for (;;) {
							if (h === e) break t;
							if (
								(m === n && ++s === r && (l = i),
								m === o && ++d === u && (a = i),
								(E = h.nextSibling) !== null)
							)
								break;
							(h = m), (m = h.parentNode);
						}
						h = E;
					}
					n = l === -1 || a === -1 ? null : { start: l, end: a };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (Ao = { focusedElem: e, selectionRange: n }, Hu = !1, B = t; B !== null; )
		if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (B = e);
		else
			for (; B !== null; ) {
				t = B;
				try {
					var C = t.alternate;
					if ((t.flags & 1024) !== 0)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (C !== null) {
									var w = C.memoizedProps,
										O = C.memoizedState,
										p = t.stateNode,
										c = p.getSnapshotBeforeUpdate(
											t.elementType === t.type ? w : Pe(t.type, w),
											O,
										);
									p.__reactInternalSnapshotBeforeUpdate = c;
								}
								break;
							case 3:
								var f = t.stateNode.containerInfo;
								f.nodeType === 1
									? (f.textContent = "")
									: f.nodeType === 9 &&
										f.documentElement &&
										f.removeChild(f.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(y(163));
						}
				} catch (g) {
					G(t, t.return, g);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (B = e);
					break;
				}
				B = t.return;
			}
	return (C = Zl), (Zl = !1), C;
}
function Rn(e, t, n) {
	var u = t.updateQueue;
	if (((u = u !== null ? u.lastEffect : null), u !== null)) {
		var r = (u = u.next);
		do {
			if ((r.tag & e) === e) {
				var o = r.destroy;
				(r.destroy = void 0), o !== void 0 && Ho(t, n, o);
			}
			r = r.next;
		} while (r !== u);
	}
}
function yr(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var u = n.create;
				n.destroy = u();
			}
			n = n.next;
		} while (n !== t);
	}
}
function Go(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == "function" ? t(e) : (t.current = e);
	}
}
function ic(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), ic(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[$e], delete t[Xn], delete t[Po], delete t[vf], delete t[Ef])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function lc(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ql(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || lc(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function Ko(e, t, n) {
	var u = e.tag;
	if (u === 5 || u === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
					(n = n._reactRootContainer),
					n != null || t.onclick !== null || (t.onclick = Yu));
	else if (u !== 4 && ((e = e.child), e !== null))
		for (Ko(e, t, n), e = e.sibling; e !== null; ) Ko(e, t, n), (e = e.sibling);
}
function Yo(e, t, n) {
	var u = e.tag;
	if (u === 5 || u === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (u !== 4 && ((e = e.child), e !== null))
		for (Yo(e, t, n), e = e.sibling; e !== null; ) Yo(e, t, n), (e = e.sibling);
}
var te = null,
	je = !1;
function et(e, t, n) {
	for (n = n.child; n !== null; ) ac(e, t, n), (n = n.sibling);
}
function ac(e, t, n) {
	if (Ue && typeof Ue.onCommitFiberUnmount == "function")
		try {
			Ue.onCommitFiberUnmount(pr, n);
		} catch {}
	switch (n.tag) {
		case 5:
			ie || qt(n, t);
		case 6:
			var u = te,
				r = je;
			(te = null),
				et(e, t, n),
				(te = u),
				(je = r),
				te !== null &&
					(je
						? ((e = te),
							(n = n.stateNode),
							e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: te.removeChild(n.stateNode));
			break;
		case 18:
			te !== null &&
				(je
					? ((e = te),
						(n = n.stateNode),
						e.nodeType === 8
							? Yr(e.parentNode, n)
							: e.nodeType === 1 && Yr(e, n),
						Qn(e))
					: Yr(te, n.stateNode));
			break;
		case 4:
			(u = te),
				(r = je),
				(te = n.stateNode.containerInfo),
				(je = !0),
				et(e, t, n),
				(te = u),
				(je = r);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!ie &&
				((u = n.updateQueue), u !== null && ((u = u.lastEffect), u !== null))
			) {
				r = u = u.next;
				do {
					var o = r,
						i = o.destroy;
					(o = o.tag),
						i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Ho(n, t, i),
						(r = r.next);
				} while (r !== u);
			}
			et(e, t, n);
			break;
		case 1:
			if (
				!ie &&
				(qt(n, t),
				(u = n.stateNode),
				typeof u.componentWillUnmount == "function")
			)
				try {
					(u.props = n.memoizedProps),
						(u.state = n.memoizedState),
						u.componentWillUnmount();
				} catch (l) {
					G(n, t, l);
				}
			et(e, t, n);
			break;
		case 21:
			et(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((ie = (u = ie) || n.memoizedState !== null), et(e, t, n), (ie = u))
				: et(e, t, n);
			break;
		default:
			et(e, t, n);
	}
}
function bl(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new jf()),
			t.forEach(function (u) {
				var r = Wf.bind(null, e, u);
				n.has(u) || (n.add(u), u.then(r, r));
			});
	}
}
function Ne(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var u = 0; u < n.length; u++) {
			var r = n[u];
			try {
				var o = e,
					i = t,
					l = i;
				e: for (; l !== null; ) {
					switch (l.tag) {
						case 5:
							(te = l.stateNode), (je = !1);
							break e;
						case 3:
							(te = l.stateNode.containerInfo), (je = !0);
							break e;
						case 4:
							(te = l.stateNode.containerInfo), (je = !0);
							break e;
					}
					l = l.return;
				}
				if (te === null) throw Error(y(160));
				ac(o, i, r), (te = null), (je = !1);
				var a = r.alternate;
				a !== null && (a.return = null), (r.return = null);
			} catch (s) {
				G(r, t, s);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) sc(t, e), (t = t.sibling);
}
function sc(e, t) {
	var n = e.alternate,
		u = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((Ne(t, e), Ie(e), u & 4)) {
				try {
					Rn(3, e, e.return), yr(3, e);
				} catch (w) {
					G(e, e.return, w);
				}
				try {
					Rn(5, e, e.return);
				} catch (w) {
					G(e, e.return, w);
				}
			}
			break;
		case 1:
			Ne(t, e), Ie(e), u & 512 && n !== null && qt(n, n.return);
			break;
		case 5:
			if (
				(Ne(t, e),
				Ie(e),
				u & 512 && n !== null && qt(n, n.return),
				e.flags & 32)
			) {
				var r = e.stateNode;
				try {
					$n(r, "");
				} catch (w) {
					G(e, e.return, w);
				}
			}
			if (u & 4 && ((r = e.stateNode), r != null)) {
				var o = e.memoizedProps,
					i = n !== null ? n.memoizedProps : o,
					l = e.type,
					a = e.updateQueue;
				if (((e.updateQueue = null), a !== null))
					try {
						l === "input" && o.type === "radio" && o.name != null && _a(r, o),
							go(l, i);
						var s = go(l, o);
						for (i = 0; i < a.length; i += 2) {
							var d = a[i],
								h = a[i + 1];
							d === "style"
								? Ta(r, h)
								: d === "dangerouslySetInnerHTML"
									? ja(r, h)
									: d === "children"
										? $n(r, h)
										: li(r, d, h, s);
						}
						switch (l) {
							case "input":
								fo(r, o);
								break;
							case "textarea":
								Na(r, o);
								break;
							case "select":
								var m = r._wrapperState.wasMultiple;
								r._wrapperState.wasMultiple = !!o.multiple;
								var E = o.value;
								E != null
									? en(r, !!o.multiple, E, !1)
									: m !== !!o.multiple &&
										(o.defaultValue != null
											? en(r, !!o.multiple, o.defaultValue, !0)
											: en(r, !!o.multiple, o.multiple ? [] : "", !1));
						}
						r[Xn] = o;
					} catch (w) {
						G(e, e.return, w);
					}
			}
			break;
		case 6:
			if ((Ne(t, e), Ie(e), u & 4)) {
				if (e.stateNode === null) throw Error(y(162));
				(r = e.stateNode), (o = e.memoizedProps);
				try {
					r.nodeValue = o;
				} catch (w) {
					G(e, e.return, w);
				}
			}
			break;
		case 3:
			if (
				(Ne(t, e), Ie(e), u & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					Qn(t.containerInfo);
				} catch (w) {
					G(e, e.return, w);
				}
			break;
		case 4:
			Ne(t, e), Ie(e);
			break;
		case 13:
			Ne(t, e),
				Ie(e),
				(r = e.child),
				r.flags & 8192 &&
					((o = r.memoizedState !== null),
					(r.stateNode.isHidden = o),
					!o ||
						(r.alternate !== null && r.alternate.memoizedState !== null) ||
						($i = Y())),
				u & 4 && bl(e);
			break;
		case 22:
			if (
				((d = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((ie = (s = ie) || d), Ne(t, e), (ie = s)) : Ne(t, e),
				Ie(e),
				u & 8192)
			) {
				if (
					((s = e.memoizedState !== null),
					(e.stateNode.isHidden = s) && !d && (e.mode & 1) !== 0)
				)
					for (B = e, d = e.child; d !== null; ) {
						for (h = B = d; B !== null; ) {
							switch (((m = B), (E = m.child), m.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Rn(4, m, m.return);
									break;
								case 1:
									qt(m, m.return);
									var C = m.stateNode;
									if (typeof C.componentWillUnmount == "function") {
										(u = m), (n = m.return);
										try {
											(t = u),
												(C.props = t.memoizedProps),
												(C.state = t.memoizedState),
												C.componentWillUnmount();
										} catch (w) {
											G(u, n, w);
										}
									}
									break;
								case 5:
									qt(m, m.return);
									break;
								case 22:
									if (m.memoizedState !== null) {
										ta(h);
										continue;
									}
							}
							E !== null ? ((E.return = m), (B = E)) : ta(h);
						}
						d = d.sibling;
					}
				e: for (d = null, h = e; ; ) {
					if (h.tag === 5) {
						if (d === null) {
							d = h;
							try {
								(r = h.stateNode),
									s
										? ((o = r.style),
											typeof o.setProperty == "function"
												? o.setProperty("display", "none", "important")
												: (o.display = "none"))
										: ((l = h.stateNode),
											(a = h.memoizedProps.style),
											(i =
												a != null && a.hasOwnProperty("display")
													? a.display
													: null),
											(l.style.display = La("display", i)));
							} catch (w) {
								G(e, e.return, w);
							}
						}
					} else if (h.tag === 6) {
						if (d === null)
							try {
								h.stateNode.nodeValue = s ? "" : h.memoizedProps;
							} catch (w) {
								G(e, e.return, w);
							}
					} else if (
						((h.tag !== 22 && h.tag !== 23) ||
							h.memoizedState === null ||
							h === e) &&
						h.child !== null
					) {
						(h.child.return = h), (h = h.child);
						continue;
					}
					if (h === e) break e;
					for (; h.sibling === null; ) {
						if (h.return === null || h.return === e) break e;
						d === h && (d = null), (h = h.return);
					}
					d === h && (d = null), (h.sibling.return = h.return), (h = h.sibling);
				}
			}
			break;
		case 19:
			Ne(t, e), Ie(e), u & 4 && bl(e);
			break;
		case 21:
			break;
		default:
			Ne(t, e), Ie(e);
	}
}
function Ie(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (lc(n)) {
						var u = n;
						break e;
					}
					n = n.return;
				}
				throw Error(y(160));
			}
			switch (u.tag) {
				case 5:
					var r = u.stateNode;
					u.flags & 32 && ($n(r, ""), (u.flags &= -33));
					var o = ql(e);
					Yo(e, o, r);
					break;
				case 3:
				case 4:
					var i = u.stateNode.containerInfo,
						l = ql(e);
					Ko(e, l, i);
					break;
				default:
					throw Error(y(161));
			}
		} catch (a) {
			G(e, e.return, a);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function Tf(e, t, n) {
	(B = e), cc(e);
}
function cc(e, t, n) {
	for (var u = (e.mode & 1) !== 0; B !== null; ) {
		var r = B,
			o = r.child;
		if (r.tag === 22 && u) {
			var i = r.memoizedState !== null || Bu;
			if (!i) {
				var l = r.alternate,
					a = (l !== null && l.memoizedState !== null) || ie;
				l = Bu;
				var s = ie;
				if (((Bu = i), (ie = a) && !s))
					for (B = r; B !== null; )
						(i = B),
							(a = i.child),
							i.tag === 22 && i.memoizedState !== null
								? na(r)
								: a !== null
									? ((a.return = i), (B = a))
									: na(r);
				for (; o !== null; ) (B = o), cc(o), (o = o.sibling);
				(B = r), (Bu = l), (ie = s);
			}
			ea(e);
		} else
			(r.subtreeFlags & 8772) !== 0 && o !== null
				? ((o.return = r), (B = o))
				: ea(e);
	}
}
function ea(e) {
	for (; B !== null; ) {
		var t = B;
		if ((t.flags & 8772) !== 0) {
			var n = t.alternate;
			try {
				if ((t.flags & 8772) !== 0)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							ie || yr(5, t);
							break;
						case 1:
							var u = t.stateNode;
							if (t.flags & 4 && !ie)
								if (n === null) u.componentDidMount();
								else {
									var r =
										t.elementType === t.type
											? n.memoizedProps
											: Pe(t.type, n.memoizedProps);
									u.componentDidUpdate(
										r,
										n.memoizedState,
										u.__reactInternalSnapshotBeforeUpdate,
									);
								}
							var o = t.updateQueue;
							o !== null && Ol(t, o, u);
							break;
						case 3:
							var i = t.updateQueue;
							if (i !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								Ol(t, i, n);
							}
							break;
						case 5:
							var l = t.stateNode;
							if (n === null && t.flags & 4) {
								n = l;
								var a = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										a.autoFocus && n.focus();
										break;
									case "img":
										a.src && (n.src = a.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var s = t.alternate;
								if (s !== null) {
									var d = s.memoizedState;
									if (d !== null) {
										var h = d.dehydrated;
										h !== null && Qn(h);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(y(163));
					}
				ie || (t.flags & 512 && Go(t));
			} catch (m) {
				G(t, t.return, m);
			}
		}
		if (t === e) {
			B = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (B = n);
			break;
		}
		B = t.return;
	}
}
function ta(e) {
	for (; B !== null; ) {
		var t = B;
		if (t === e) {
			B = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (B = n);
			break;
		}
		B = t.return;
	}
}
function na(e) {
	for (; B !== null; ) {
		var t = B;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						yr(4, t);
					} catch (a) {
						G(t, n, a);
					}
					break;
				case 1:
					var u = t.stateNode;
					if (typeof u.componentDidMount == "function") {
						var r = t.return;
						try {
							u.componentDidMount();
						} catch (a) {
							G(t, r, a);
						}
					}
					var o = t.return;
					try {
						Go(t);
					} catch (a) {
						G(t, o, a);
					}
					break;
				case 5:
					var i = t.return;
					try {
						Go(t);
					} catch (a) {
						G(t, i, a);
					}
			}
		} catch (a) {
			G(t, t.return, a);
		}
		if (t === e) {
			B = null;
			break;
		}
		var l = t.sibling;
		if (l !== null) {
			(l.return = t.return), (B = l);
			break;
		}
		B = t.return;
	}
}
var Rf = Math.ceil,
	or = be.ReactCurrentDispatcher,
	Ii = be.ReactCurrentOwner,
	ze = be.ReactCurrentBatchConfig,
	T = 0,
	ee = null,
	X = null,
	ne = 0,
	Ee = 0,
	bt = xt(0),
	Z = 0,
	tu = null,
	Rt = 0,
	xr = 0,
	Mi = 0,
	On = null,
	fe = null,
	$i = 0,
	dn = 1 / 0,
	Qe = null,
	ir = !1,
	Xo = null,
	ft = null,
	Du = !1,
	it = null,
	lr = 0,
	In = 0,
	Jo = null,
	Ou = -1,
	Iu = 0;
function se() {
	return (T & 6) !== 0 ? Y() : Ou !== -1 ? Ou : (Ou = Y());
}
function dt(e) {
	return (e.mode & 1) === 0
		? 1
		: (T & 2) !== 0 && ne !== 0
			? ne & -ne
			: yf.transition !== null
				? (Iu === 0 && (Iu = Ka()), Iu)
				: ((e = R),
					e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : es(e.type))),
					e);
}
function Re(e, t, n, u) {
	if (50 < In) throw ((In = 0), (Jo = null), Error(y(185)));
	uu(e, n, u),
		((T & 2) === 0 || e !== ee) &&
			(e === ee && ((T & 2) === 0 && (xr |= n), Z === 4 && rt(e, ne)),
			ve(e, u),
			n === 1 &&
				T === 0 &&
				(t.mode & 1) === 0 &&
				((dn = Y() + 500), vr && Ct()));
}
function ve(e, t) {
	var n = e.callbackNode;
	gp(e, t);
	var u = Qu(e, e === ee ? ne : 0);
	if (u === 0)
		n !== null && pl(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = u & -u), e.callbackPriority !== t)) {
		if ((n != null && pl(n), t === 1))
			e.tag === 0 ? gf(ua.bind(null, e)) : ys(ua.bind(null, e)),
				mf(function () {
					(T & 6) === 0 && Ct();
				}),
				(n = null);
		else {
			switch (Ya(u)) {
				case 1:
					n = fi;
					break;
				case 4:
					n = Ha;
					break;
				case 16:
					n = Wu;
					break;
				case 536870912:
					n = Ga;
					break;
				default:
					n = Wu;
			}
			n = gc(n, pc.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function pc(e, t) {
	if (((Ou = -1), (Iu = 0), (T & 6) !== 0)) throw Error(y(327));
	var n = e.callbackNode;
	if (on() && e.callbackNode !== n) return null;
	var u = Qu(e, e === ee ? ne : 0);
	if (u === 0) return null;
	if ((u & 30) !== 0 || (u & e.expiredLanes) !== 0 || t) t = ar(e, u);
	else {
		t = u;
		var r = T;
		T |= 2;
		var o = dc();
		(ee !== e || ne !== t) && ((Qe = null), (dn = Y() + 500), Nt(e, t));
		do
			try {
				Mf();
				break;
			} catch (l) {
				fc(e, l);
			}
		while (1);
		Bi(),
			(or.current = o),
			(T = r),
			X !== null ? (t = 0) : ((ee = null), (ne = 0), (t = Z));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((r = wo(e)), r !== 0 && ((u = r), (t = Zo(e, r)))), t === 1)
		)
			throw ((n = tu), Nt(e, 0), rt(e, u), ve(e, Y()), n);
		if (t === 6) rt(e, u);
		else {
			if (
				((r = e.current.alternate),
				(u & 30) === 0 &&
					!Of(r) &&
					((t = ar(e, u)),
					t === 2 && ((o = wo(e)), o !== 0 && ((u = o), (t = Zo(e, o)))),
					t === 1))
			)
				throw ((n = tu), Nt(e, 0), rt(e, u), ve(e, Y()), n);
			switch (((e.finishedWork = r), (e.finishedLanes = u), t)) {
				case 0:
				case 1:
					throw Error(y(345));
				case 2:
					Dt(e, fe, Qe);
					break;
				case 3:
					if (
						(rt(e, u), (u & 130023424) === u && ((t = $i + 500 - Y()), 10 < t))
					) {
						if (Qu(e, 0) !== 0) break;
						if (((r = e.suspendedLanes), (r & u) !== u)) {
							se(), (e.pingedLanes |= e.suspendedLanes & r);
							break;
						}
						e.timeoutHandle = No(Dt.bind(null, e, fe, Qe), t);
						break;
					}
					Dt(e, fe, Qe);
					break;
				case 4:
					if ((rt(e, u), (u & 4194240) === u)) break;
					for (t = e.eventTimes, r = -1; 0 < u; ) {
						var i = 31 - Te(u);
						(o = 1 << i), (i = t[i]), i > r && (r = i), (u &= ~o);
					}
					if (
						((u = r),
						(u = Y() - u),
						(u =
							(120 > u
								? 120
								: 480 > u
									? 480
									: 1080 > u
										? 1080
										: 1920 > u
											? 1920
											: 3e3 > u
												? 3e3
												: 4320 > u
													? 4320
													: 1960 * Rf(u / 1960)) - u),
						10 < u)
					) {
						e.timeoutHandle = No(Dt.bind(null, e, fe, Qe), u);
						break;
					}
					Dt(e, fe, Qe);
					break;
				case 5:
					Dt(e, fe, Qe);
					break;
				default:
					throw Error(y(329));
			}
		}
	}
	return ve(e, Y()), e.callbackNode === n ? pc.bind(null, e) : null;
}
function Zo(e, t) {
	var n = On;
	return (
		e.current.memoizedState.isDehydrated && (Nt(e, t).flags |= 256),
		(e = ar(e, t)),
		e !== 2 && ((t = fe), (fe = n), t !== null && qo(t)),
		e
	);
}
function qo(e) {
	fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function Of(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var u = 0; u < n.length; u++) {
					var r = n[u],
						o = r.getSnapshot;
					r = r.value;
					try {
						if (!Oe(o(), r)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function rt(e, t) {
	for (
		t &= ~Mi,
			t &= ~xr,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;
	) {
		var n = 31 - Te(t),
			u = 1 << n;
		(e[n] = -1), (t &= ~u);
	}
}
function ua(e) {
	if ((T & 6) !== 0) throw Error(y(327));
	on();
	var t = Qu(e, 0);
	if ((t & 1) === 0) return ve(e, Y()), null;
	var n = ar(e, t);
	if (e.tag !== 0 && n === 2) {
		var u = wo(e);
		u !== 0 && ((t = u), (n = Zo(e, u)));
	}
	if (n === 1) throw ((n = tu), Nt(e, 0), rt(e, t), ve(e, Y()), n);
	if (n === 6) throw Error(y(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		Dt(e, fe, Qe),
		ve(e, Y()),
		null
	);
}
function Ui(e, t) {
	var n = T;
	T |= 1;
	try {
		return e(t);
	} finally {
		(T = n), T === 0 && ((dn = Y() + 500), vr && Ct());
	}
}
function Ot(e) {
	it !== null && it.tag === 0 && (T & 6) === 0 && on();
	var t = T;
	T |= 1;
	var n = ze.transition,
		u = R;
	try {
		if (((ze.transition = null), (R = 1), e)) return e();
	} finally {
		(R = u), (ze.transition = n), (T = t), (T & 6) === 0 && Ct();
	}
}
function Vi() {
	(Ee = bt.current), $(bt);
}
function Nt(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), df(n)), X !== null))
		for (n = X.return; n !== null; ) {
			var u = n;
			switch ((Fi(u), u.tag)) {
				case 1:
					(u = u.type.childContextTypes), u != null && Xu();
					break;
				case 3:
					pn(), $(me), $(le), Ni();
					break;
				case 5:
					_i(u);
					break;
				case 4:
					pn();
					break;
				case 13:
					$(W);
					break;
				case 19:
					$(W);
					break;
				case 10:
					Di(u.type._context);
					break;
				case 22:
				case 23:
					Vi();
			}
			n = n.return;
		}
	if (
		((ee = e),
		(X = e = mt(e.current, null)),
		(ne = Ee = t),
		(Z = 0),
		(tu = null),
		(Mi = xr = Rt = 0),
		(fe = On = null),
		zt !== null)
	) {
		for (t = 0; t < zt.length; t++)
			if (((n = zt[t]), (u = n.interleaved), u !== null)) {
				n.interleaved = null;
				var r = u.next,
					o = n.pending;
				if (o !== null) {
					var i = o.next;
					(o.next = r), (u.next = i);
				}
				n.pending = u;
			}
		zt = null;
	}
	return e;
}
function fc(e, t) {
	do {
		var n = X;
		try {
			if ((Bi(), (Lu.current = rr), ur)) {
				for (var u = Q.memoizedState; u !== null; ) {
					var r = u.queue;
					r !== null && (r.pending = null), (u = u.next);
				}
				ur = !1;
			}
			if (
				((Tt = 0),
				(b = J = Q = null),
				(Tn = !1),
				(qn = 0),
				(Ii.current = null),
				n === null || n.return === null)
			) {
				(Z = 1), (tu = t), (X = null);
				break;
			}
			e: {
				var o = e,
					i = n.return,
					l = n,
					a = t;
				if (
					((t = ne),
					(l.flags |= 32768),
					a !== null && typeof a == "object" && typeof a.then == "function")
				) {
					var s = a,
						d = l,
						h = d.tag;
					if ((d.mode & 1) === 0 && (h === 0 || h === 11 || h === 15)) {
						var m = d.alternate;
						m
							? ((d.updateQueue = m.updateQueue),
								(d.memoizedState = m.memoizedState),
								(d.lanes = m.lanes))
							: ((d.updateQueue = null), (d.memoizedState = null));
					}
					var E = Ql(i);
					if (E !== null) {
						(E.flags &= -257),
							Hl(E, i, l, o, t),
							E.mode & 1 && Wl(o, s, t),
							(t = E),
							(a = s);
						var C = t.updateQueue;
						if (C === null) {
							var w = new Set();
							w.add(a), (t.updateQueue = w);
						} else C.add(a);
						break e;
					} else {
						if ((t & 1) === 0) {
							Wl(o, s, t), Wi();
							break e;
						}
						a = Error(y(426));
					}
				} else if (U && l.mode & 1) {
					var O = Ql(i);
					if (O !== null) {
						(O.flags & 65536) === 0 && (O.flags |= 256),
							Hl(O, i, l, o, t),
							wi(fn(a, l));
						break e;
					}
				}
				(o = a = fn(a, l)),
					Z !== 4 && (Z = 2),
					On === null ? (On = [o]) : On.push(o),
					(o = i);
				do {
					switch (o.tag) {
						case 3:
							(o.flags |= 65536), (t &= -t), (o.lanes |= t);
							var p = Xs(o, a, t);
							Rl(o, p);
							break e;
						case 1:
							l = a;
							var c = o.type,
								f = o.stateNode;
							if (
								(o.flags & 128) === 0 &&
								(typeof c.getDerivedStateFromError == "function" ||
									(f !== null &&
										typeof f.componentDidCatch == "function" &&
										(ft === null || !ft.has(f))))
							) {
								(o.flags |= 65536), (t &= -t), (o.lanes |= t);
								var g = Js(o, l, t);
								Rl(o, g);
								break e;
							}
					}
					o = o.return;
				} while (o !== null);
			}
			hc(n);
		} catch (k) {
			(t = k), X === n && n !== null && (X = n = n.return);
			continue;
		}
		break;
	} while (1);
}
function dc() {
	var e = or.current;
	return (or.current = rr), e === null ? rr : e;
}
function Wi() {
	(Z === 0 || Z === 3 || Z === 2) && (Z = 4),
		ee === null ||
			((Rt & 268435455) === 0 && (xr & 268435455) === 0) ||
			rt(ee, ne);
}
function ar(e, t) {
	var n = T;
	T |= 2;
	var u = dc();
	(ee !== e || ne !== t) && ((Qe = null), Nt(e, t));
	do
		try {
			If();
			break;
		} catch (r) {
			fc(e, r);
		}
	while (1);
	if ((Bi(), (T = n), (or.current = u), X !== null)) throw Error(y(261));
	return (ee = null), (ne = 0), Z;
}
function If() {
	for (; X !== null; ) mc(X);
}
function Mf() {
	for (; X !== null && !sp(); ) mc(X);
}
function mc(e) {
	var t = Ec(e.alternate, e, Ee);
	(e.memoizedProps = e.pendingProps),
		t === null ? hc(e) : (X = t),
		(Ii.current = null);
}
function hc(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), (t.flags & 32768) === 0)) {
			if (((n = Nf(n, t, Ee)), n !== null)) {
				X = n;
				return;
			}
		} else {
			if (((n = Pf(n, t)), n !== null)) {
				(n.flags &= 32767), (X = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(Z = 6), (X = null);
				return;
			}
		}
		if (((t = t.sibling), t !== null)) {
			X = t;
			return;
		}
		X = t = e;
	} while (t !== null);
	Z === 0 && (Z = 5);
}
function Dt(e, t, n) {
	var u = R,
		r = ze.transition;
	try {
		(ze.transition = null), (R = 1), $f(e, t, n, u);
	} finally {
		(ze.transition = r), (R = u);
	}
	return null;
}
function $f(e, t, n, u) {
	do on();
	while (it !== null);
	if ((T & 6) !== 0) throw Error(y(327));
	n = e.finishedWork;
	var r = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(y(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var o = n.lanes | n.childLanes;
	if (
		(yp(e, o),
		e === ee && ((X = ee = null), (ne = 0)),
		((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
			Du ||
			((Du = !0),
			gc(Wu, function () {
				return on(), null;
			})),
		(o = (n.flags & 15990) !== 0),
		(n.subtreeFlags & 15990) !== 0 || o)
	) {
		(o = ze.transition), (ze.transition = null);
		var i = R;
		R = 1;
		var l = T;
		(T |= 4),
			(Ii.current = null),
			Lf(e, n),
			sc(n, e),
			of(Ao),
			(Hu = !!zo),
			(Ao = zo = null),
			(e.current = n),
			Tf(n),
			cp(),
			(T = l),
			(R = i),
			(ze.transition = o);
	} else e.current = n;
	if (
		(Du && ((Du = !1), (it = e), (lr = r)),
		(o = e.pendingLanes),
		o === 0 && (ft = null),
		dp(n.stateNode),
		ve(e, Y()),
		t !== null)
	)
		for (u = e.onRecoverableError, n = 0; n < t.length; n++)
			(r = t[n]), u(r.value, { componentStack: r.stack, digest: r.digest });
	if (ir) throw ((ir = !1), (e = Xo), (Xo = null), e);
	return (
		(lr & 1) !== 0 && e.tag !== 0 && on(),
		(o = e.pendingLanes),
		(o & 1) !== 0 ? (e === Jo ? In++ : ((In = 0), (Jo = e))) : (In = 0),
		Ct(),
		null
	);
}
function on() {
	if (it !== null) {
		var e = Ya(lr),
			t = ze.transition,
			n = R;
		try {
			if (((ze.transition = null), (R = 16 > e ? 16 : e), it === null))
				var u = !1;
			else {
				if (((e = it), (it = null), (lr = 0), (T & 6) !== 0))
					throw Error(y(331));
				var r = T;
				for (T |= 4, B = e.current; B !== null; ) {
					var o = B,
						i = o.child;
					if ((B.flags & 16) !== 0) {
						var l = o.deletions;
						if (l !== null) {
							for (var a = 0; a < l.length; a++) {
								var s = l[a];
								for (B = s; B !== null; ) {
									var d = B;
									switch (d.tag) {
										case 0:
										case 11:
										case 15:
											Rn(8, d, o);
									}
									var h = d.child;
									if (h !== null) (h.return = d), (B = h);
									else
										for (; B !== null; ) {
											d = B;
											var m = d.sibling,
												E = d.return;
											if ((ic(d), d === s)) {
												B = null;
												break;
											}
											if (m !== null) {
												(m.return = E), (B = m);
												break;
											}
											B = E;
										}
								}
							}
							var C = o.alternate;
							if (C !== null) {
								var w = C.child;
								if (w !== null) {
									C.child = null;
									do {
										var O = w.sibling;
										(w.sibling = null), (w = O);
									} while (w !== null);
								}
							}
							B = o;
						}
					}
					if ((o.subtreeFlags & 2064) !== 0 && i !== null)
						(i.return = o), (B = i);
					else
						e: for (; B !== null; ) {
							if (((o = B), (o.flags & 2048) !== 0))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										Rn(9, o, o.return);
								}
							var p = o.sibling;
							if (p !== null) {
								(p.return = o.return), (B = p);
								break e;
							}
							B = o.return;
						}
				}
				var c = e.current;
				for (B = c; B !== null; ) {
					i = B;
					var f = i.child;
					if ((i.subtreeFlags & 2064) !== 0 && f !== null)
						(f.return = i), (B = f);
					else
						e: for (i = c; B !== null; ) {
							if (((l = B), (l.flags & 2048) !== 0))
								try {
									switch (l.tag) {
										case 0:
										case 11:
										case 15:
											yr(9, l);
									}
								} catch (k) {
									G(l, l.return, k);
								}
							if (l === i) {
								B = null;
								break e;
							}
							var g = l.sibling;
							if (g !== null) {
								(g.return = l.return), (B = g);
								break e;
							}
							B = l.return;
						}
				}
				if (
					((T = r), Ct(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
				)
					try {
						Ue.onPostCommitFiberRoot(pr, e);
					} catch {}
				u = !0;
			}
			return u;
		} finally {
			(R = n), (ze.transition = t);
		}
	}
	return !1;
}
function ra(e, t, n) {
	(t = fn(n, t)),
		(t = Xs(e, t, 1)),
		(e = pt(e, t, 1)),
		(t = se()),
		e !== null && (uu(e, 1, t), ve(e, t));
}
function G(e, t, n) {
	if (e.tag === 3) ra(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				ra(t, e, n);
				break;
			} else if (t.tag === 1) {
				var u = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof u.componentDidCatch == "function" &&
						(ft === null || !ft.has(u)))
				) {
					(e = fn(n, e)),
						(e = Js(t, e, 1)),
						(t = pt(t, e, 1)),
						(e = se()),
						t !== null && (uu(t, 1, e), ve(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function Uf(e, t, n) {
	var u = e.pingCache;
	u !== null && u.delete(t),
		(t = se()),
		(e.pingedLanes |= e.suspendedLanes & n),
		ee === e &&
			(ne & n) === n &&
			(Z === 4 || (Z === 3 && (ne & 130023424) === ne && 500 > Y() - $i)
				? Nt(e, 0)
				: (Mi |= n)),
		ve(e, t);
}
function vc(e, t) {
	t === 0 &&
		((e.mode & 1) === 0
			? (t = 1)
			: ((t = vu), (vu <<= 1), (vu & 130023424) === 0 && (vu = 4194304)));
	var n = se();
	(e = Ze(e, t)), e !== null && (uu(e, t, n), ve(e, n));
}
function Vf(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), vc(e, n);
}
function Wf(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var u = e.stateNode,
				r = e.memoizedState;
			r !== null && (n = r.retryLane);
			break;
		case 19:
			u = e.stateNode;
			break;
		default:
			throw Error(y(314));
	}
	u !== null && u.delete(t), vc(e, n);
}
var Ec;
Ec = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || me.current) de = !0;
		else {
			if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
				return (de = !1), _f(e, t, n);
			de = (e.flags & 131072) !== 0;
		}
	else (de = !1), U && (t.flags & 1048576) !== 0 && xs(t, qu, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var u = t.type;
			Ru(e, t), (e = t.pendingProps);
			var r = an(t, le.current);
			rn(t, n), (r = ji(null, t, u, e, r, n));
			var o = Li();
			return (
				(t.flags |= 1),
				typeof r == "object" &&
				r !== null &&
				typeof r.render == "function" &&
				r.$$typeof === void 0
					? ((t.tag = 1),
						(t.memoizedState = null),
						(t.updateQueue = null),
						he(u) ? ((o = !0), Ju(t)) : (o = !1),
						(t.memoizedState =
							r.state !== null && r.state !== void 0 ? r.state : null),
						zi(t),
						(r.updater = Er),
						(t.stateNode = r),
						(r._reactInternals = t),
						Io(t, u, e, n),
						(t = Uo(null, t, u, !0, o, n)))
					: ((t.tag = 0), U && o && Ci(t), ae(null, t, r, n), (t = t.child)),
				t
			);
		case 16:
			u = t.elementType;
			e: {
				switch (
					(Ru(e, t),
					(e = t.pendingProps),
					(r = u._init),
					(u = r(u._payload)),
					(t.type = u),
					(r = t.tag = Hf(u)),
					(e = Pe(u, e)),
					r)
				) {
					case 0:
						t = $o(null, t, u, e, n);
						break e;
					case 1:
						t = Yl(null, t, u, e, n);
						break e;
					case 11:
						t = Gl(null, t, u, e, n);
						break e;
					case 14:
						t = Kl(null, t, u, Pe(u.type, e), n);
						break e;
				}
				throw Error(y(306, u, ""));
			}
			return t;
		case 0:
			return (
				(u = t.type),
				(r = t.pendingProps),
				(r = t.elementType === u ? r : Pe(u, r)),
				$o(e, t, u, r, n)
			);
		case 1:
			return (
				(u = t.type),
				(r = t.pendingProps),
				(r = t.elementType === u ? r : Pe(u, r)),
				Yl(e, t, u, r, n)
			);
		case 3:
			e: {
				if ((ec(t), e === null)) throw Error(y(387));
				(u = t.pendingProps),
					(o = t.memoizedState),
					(r = o.element),
					ks(e, t),
					tr(t, u, null, n);
				var i = t.memoizedState;
				if (((u = i.element), o.isDehydrated))
					if (
						((o = {
							element: u,
							isDehydrated: !1,
							cache: i.cache,
							pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
							transitions: i.transitions,
						}),
						(t.updateQueue.baseState = o),
						(t.memoizedState = o),
						t.flags & 256)
					) {
						(r = fn(Error(y(423)), t)), (t = Xl(e, t, u, n, r));
						break e;
					} else if (u !== r) {
						(r = fn(Error(y(424)), t)), (t = Xl(e, t, u, n, r));
						break e;
					} else
						for (
							ge = ct(t.stateNode.containerInfo.firstChild),
								ye = t,
								U = !0,
								Le = null,
								n = zs(t, null, u, n),
								t.child = n;
							n;
						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((sn(), u === r)) {
						t = qe(e, t, n);
						break e;
					}
					ae(e, t, u, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				As(t),
				e === null && To(t),
				(u = t.type),
				(r = t.pendingProps),
				(o = e !== null ? e.memoizedProps : null),
				(i = r.children),
				_o(u, r) ? (i = null) : o !== null && _o(u, o) && (t.flags |= 32),
				bs(e, t),
				ae(e, t, i, n),
				t.child
			);
		case 6:
			return e === null && To(t), null;
		case 13:
			return tc(e, t, n);
		case 4:
			return (
				Ai(t, t.stateNode.containerInfo),
				(u = t.pendingProps),
				e === null ? (t.child = cn(t, null, u, n)) : ae(e, t, u, n),
				t.child
			);
		case 11:
			return (
				(u = t.type),
				(r = t.pendingProps),
				(r = t.elementType === u ? r : Pe(u, r)),
				Gl(e, t, u, r, n)
			);
		case 7:
			return ae(e, t, t.pendingProps, n), t.child;
		case 8:
			return ae(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return ae(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((u = t.type._context),
					(r = t.pendingProps),
					(o = t.memoizedProps),
					(i = r.value),
					I(bu, u._currentValue),
					(u._currentValue = i),
					o !== null)
				)
					if (Oe(o.value, i)) {
						if (o.children === r.children && !me.current) {
							t = qe(e, t, n);
							break e;
						}
					} else
						for (o = t.child, o !== null && (o.return = t); o !== null; ) {
							var l = o.dependencies;
							if (l !== null) {
								i = o.child;
								for (var a = l.firstContext; a !== null; ) {
									if (a.context === u) {
										if (o.tag === 1) {
											(a = Ye(-1, n & -n)), (a.tag = 2);
											var s = o.updateQueue;
											if (s !== null) {
												s = s.shared;
												var d = s.pending;
												d === null
													? (a.next = a)
													: ((a.next = d.next), (d.next = a)),
													(s.pending = a);
											}
										}
										(o.lanes |= n),
											(a = o.alternate),
											a !== null && (a.lanes |= n),
											Ro(o.return, n, t),
											(l.lanes |= n);
										break;
									}
									a = a.next;
								}
							} else if (o.tag === 10) i = o.type === t.type ? null : o.child;
							else if (o.tag === 18) {
								if (((i = o.return), i === null)) throw Error(y(341));
								(i.lanes |= n),
									(l = i.alternate),
									l !== null && (l.lanes |= n),
									Ro(i, n, t),
									(i = o.sibling);
							} else i = o.child;
							if (i !== null) i.return = o;
							else
								for (i = o; i !== null; ) {
									if (i === t) {
										i = null;
										break;
									}
									if (((o = i.sibling), o !== null)) {
										(o.return = i.return), (i = o);
										break;
									}
									i = i.return;
								}
							o = i;
						}
				ae(e, t, r.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(r = t.type),
				(u = t.pendingProps.children),
				rn(t, n),
				(r = Ae(r)),
				(u = u(r)),
				(t.flags |= 1),
				ae(e, t, u, n),
				t.child
			);
		case 14:
			return (
				(u = t.type),
				(r = Pe(u, t.pendingProps)),
				(r = Pe(u.type, r)),
				Kl(e, t, u, r, n)
			);
		case 15:
			return Zs(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(u = t.type),
				(r = t.pendingProps),
				(r = t.elementType === u ? r : Pe(u, r)),
				Ru(e, t),
				(t.tag = 1),
				he(u) ? ((e = !0), Ju(t)) : (e = !1),
				rn(t, n),
				Ds(t, u, r),
				Io(t, u, r, n),
				Uo(null, t, u, !0, e, n)
			);
		case 19:
			return nc(e, t, n);
		case 22:
			return qs(e, t, n);
	}
	throw Error(y(156, t.tag));
};
function gc(e, t) {
	return Qa(e, t);
}
function Qf(e, t, n, u) {
	(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = u),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function Se(e, t, n, u) {
	return new Qf(e, t, n, u);
}
function Qi(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Hf(e) {
	if (typeof e == "function") return Qi(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === si)) return 11;
		if (e === ci) return 14;
	}
	return 2;
}
function mt(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = Se(e.tag, t, e.key, e.mode)),
				(n.elementType = e.elementType),
				(n.type = e.type),
				(n.stateNode = e.stateNode),
				(n.alternate = e),
				(e.alternate = n))
			: ((n.pendingProps = t),
				(n.type = e.type),
				(n.flags = 0),
				(n.subtreeFlags = 0),
				(n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function Mu(e, t, n, u, r, o) {
	var i = 2;
	if (((u = e), typeof e == "function")) Qi(e) && (i = 1);
	else if (typeof e == "string") i = 5;
	else
		e: switch (e) {
			case Wt:
				return Pt(n.children, r, o, t);
			case ai:
				(i = 8), (r |= 8);
				break;
			case lo:
				return (
					(e = Se(12, n, t, r | 2)), (e.elementType = lo), (e.lanes = o), e
				);
			case ao:
				return (e = Se(13, n, t, r)), (e.elementType = ao), (e.lanes = o), e;
			case so:
				return (e = Se(19, n, t, r)), (e.elementType = so), (e.lanes = o), e;
			case Sa:
				return Cr(n, r, o, t);
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case Ba:
							i = 10;
							break e;
						case Da:
							i = 9;
							break e;
						case si:
							i = 11;
							break e;
						case ci:
							i = 14;
							break e;
						case tt:
							(i = 16), (u = null);
							break e;
					}
				throw Error(y(130, e == null ? e : typeof e, ""));
		}
	return (
		(t = Se(i, n, t, r)), (t.elementType = e), (t.type = u), (t.lanes = o), t
	);
}
function Pt(e, t, n, u) {
	return (e = Se(7, e, u, t)), (e.lanes = n), e;
}
function Cr(e, t, n, u) {
	return (
		(e = Se(22, e, u, t)),
		(e.elementType = Sa),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function no(e, t, n) {
	return (e = Se(6, e, null, t)), (e.lanes = n), e;
}
function uo(e, t, n) {
	return (
		(t = Se(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function Gf(e, t, n, u, r) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = Or(0)),
		(this.expirationTimes = Or(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = Or(0)),
		(this.identifierPrefix = u),
		(this.onRecoverableError = r),
		(this.mutableSourceEagerHydrationData = null);
}
function Hi(e, t, n, u, r, o, i, l, a) {
	return (
		(e = new Gf(e, t, n, l, a)),
		t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
		(o = Se(3, null, null, t)),
		(e.current = o),
		(o.stateNode = e),
		(o.memoizedState = {
			element: u,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		zi(o),
		e
	);
}
function Kf(e, t, n) {
	var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Vt,
		key: u == null ? null : "" + u,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function yc(e) {
	if (!e) return Et;
	e = e._reactInternals;
	e: {
		if (Mt(e) !== e || e.tag !== 1) throw Error(y(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (he(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(y(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (he(n)) return gs(e, n, t);
	}
	return t;
}
function xc(e, t, n, u, r, o, i, l, a) {
	return (
		(e = Hi(n, u, !0, e, r, o, i, l, a)),
		(e.context = yc(null)),
		(n = e.current),
		(u = se()),
		(r = dt(n)),
		(o = Ye(u, r)),
		(o.callback = t != null ? t : null),
		pt(n, o, r),
		(e.current.lanes = r),
		uu(e, r, u),
		ve(e, u),
		e
	);
}
function Fr(e, t, n, u) {
	var r = t.current,
		o = se(),
		i = dt(r);
	return (
		(n = yc(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = Ye(o, i)),
		(t.payload = { element: e }),
		(u = u === void 0 ? null : u),
		u !== null && (t.callback = u),
		(e = pt(r, t, i)),
		e !== null && (Re(e, r, i, o), ju(e, r, i)),
		i
	);
}
function sr(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function oa(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Gi(e, t) {
	oa(e, t), (e = e.alternate) && oa(e, t);
}
function Yf() {
	return null;
}
var Cc =
	typeof reportError == "function"
		? reportError
		: function (e) {
				console.error(e);
			};
function Ki(e) {
	this._internalRoot = e;
}
wr.prototype.render = Ki.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(y(409));
	Fr(e, t, null, null);
};
wr.prototype.unmount = Ki.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		Ot(function () {
			Fr(null, e, null, null);
		}),
			(t[Je] = null);
	}
};
function wr(e) {
	this._internalRoot = e;
}
wr.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = Za();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++);
		ut.splice(n, 0, e), n === 0 && ba(e);
	}
};
function Yi(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function kr(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
	);
}
function ia() {}
function Xf(e, t, n, u, r) {
	if (r) {
		if (typeof u == "function") {
			var o = u;
			u = function () {
				var s = sr(i);
				o.call(s);
			};
		}
		var i = xc(t, u, e, 0, null, !1, !1, "", ia);
		return (
			(e._reactRootContainer = i),
			(e[Je] = i.current),
			Kn(e.nodeType === 8 ? e.parentNode : e),
			Ot(),
			i
		);
	}
	for (; (r = e.lastChild); ) e.removeChild(r);
	if (typeof u == "function") {
		var l = u;
		u = function () {
			var s = sr(a);
			l.call(s);
		};
	}
	var a = Hi(e, 0, !1, null, null, !1, !1, "", ia);
	return (
		(e._reactRootContainer = a),
		(e[Je] = a.current),
		Kn(e.nodeType === 8 ? e.parentNode : e),
		Ot(function () {
			Fr(t, a, n, u);
		}),
		a
	);
}
function Br(e, t, n, u, r) {
	var o = n._reactRootContainer;
	if (o) {
		var i = o;
		if (typeof r == "function") {
			var l = r;
			r = function () {
				var a = sr(i);
				l.call(a);
			};
		}
		Fr(t, i, e, r);
	} else i = Xf(n, t, e, r, u);
	return sr(i);
}
Xa = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = Sn(t.pendingLanes);
				n !== 0 &&
					(di(t, n | 1), ve(t, Y()), (T & 6) === 0 && ((dn = Y() + 500), Ct()));
			}
			break;
		case 13:
			Ot(function () {
				var u = Ze(e, 1);
				if (u !== null) {
					var r = se();
					Re(u, e, 1, r);
				}
			}),
				Gi(e, 1);
	}
};
mi = function (e) {
	if (e.tag === 13) {
		var t = Ze(e, 134217728);
		if (t !== null) {
			var n = se();
			Re(t, e, 134217728, n);
		}
		Gi(e, 134217728);
	}
};
Ja = function (e) {
	if (e.tag === 13) {
		var t = dt(e),
			n = Ze(e, t);
		if (n !== null) {
			var u = se();
			Re(n, e, t, u);
		}
		Gi(e, t);
	}
};
Za = function () {
	return R;
};
qa = function (e, t) {
	var n = R;
	try {
		return (R = e), t();
	} finally {
		R = n;
	}
};
xo = function (e, t, n) {
	switch (t) {
		case "input":
			if ((fo(e, n), (t = n.name), n.type === "radio" && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						"input[name=" + JSON.stringify("" + t) + '][type="radio"]',
					),
						t = 0;
					t < n.length;
					t++
				) {
					var u = n[t];
					if (u !== e && u.form === e.form) {
						var r = hr(u);
						if (!r) throw Error(y(90));
						Aa(u), fo(u, r);
					}
				}
			}
			break;
		case "textarea":
			Na(e, n);
			break;
		case "select":
			(t = n.value), t != null && en(e, !!n.multiple, t, !1);
	}
};
Ia = Ui;
Ma = Ot;
var Jf = { usingClientEntryPoint: !1, Events: [ou, Kt, hr, Ra, Oa, Ui] },
	kn = {
		findFiberByHostInstance: St,
		bundleType: 0,
		version: "18.2.0",
		rendererPackageName: "react-dom",
	},
	Zf = {
		bundleType: kn.bundleType,
		version: kn.version,
		rendererPackageName: kn.rendererPackageName,
		rendererConfig: kn.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: be.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = Va(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: kn.findFiberByHostInstance || Yf,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var Su = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Su.isDisabled && Su.supportsFiber)
		try {
			(pr = Su.inject(Zf)), (Ue = Su);
		} catch {}
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jf;
Ce.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Yi(t)) throw Error(y(200));
	return Kf(e, t, null, n);
};
Ce.createRoot = function (e, t) {
	if (!Yi(e)) throw Error(y(299));
	var n = !1,
		u = "",
		r = Cc;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
		(t = Hi(e, 1, !1, null, null, n, !1, u, r)),
		(e[Je] = t.current),
		Kn(e.nodeType === 8 ? e.parentNode : e),
		new Ki(t)
	);
};
Ce.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(y(188))
			: ((e = Object.keys(e).join(",")), Error(y(268, e)));
	return (e = Va(t)), (e = e === null ? null : e.stateNode), e;
};
Ce.flushSync = function (e) {
	return Ot(e);
};
Ce.hydrate = function (e, t, n) {
	if (!kr(t)) throw Error(y(200));
	return Br(null, e, t, !0, n);
};
Ce.hydrateRoot = function (e, t, n) {
	if (!Yi(e)) throw Error(y(405));
	var u = (n != null && n.hydratedSources) || null,
		r = !1,
		o = "",
		i = Cc;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (r = !0),
			n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
		(t = xc(t, null, e, 1, n != null ? n : null, r, !1, o, i)),
		(e[Je] = t.current),
		Kn(e),
		u)
	)
		for (e = 0; e < u.length; e++)
			(n = u[e]),
				(r = n._getVersion),
				(r = r(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, r])
					: t.mutableSourceEagerHydrationData.push(n, r);
	return new wr(t);
};
Ce.render = function (e, t, n) {
	if (!kr(t)) throw Error(y(200));
	return Br(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function (e) {
	if (!kr(e)) throw Error(y(40));
	return e._reactRootContainer
		? (Ot(function () {
				Br(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[Je] = null);
				});
			}),
			!0)
		: !1;
};
Ce.unstable_batchedUpdates = Ui;
Ce.unstable_renderSubtreeIntoContainer = function (e, t, n, u) {
	if (!kr(n)) throw Error(y(200));
	if (e == null || e._reactInternals === void 0) throw Error(y(38));
	return Br(e, t, n, !1, u);
};
Ce.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
	function t() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
			} catch (n) {
				console.error(n);
			}
	}
	t(), (e.exports = Ce);
})(xa);
var la = xa.exports;
(oo.createRoot = la.createRoot), (oo.hydrateRoot = la.hydrateRoot);
function cr() {
	return (
		(cr = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var u in n)
							Object.prototype.hasOwnProperty.call(n, u) && (e[u] = n[u]);
					}
					return e;
				}),
		cr.apply(this, arguments)
	);
}
var _t;
(function (e) {
	(e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(_t || (_t = {}));
var aa = function (e) {
		return e;
	},
	sa = "beforeunload",
	qf = "popstate";
function bf(e) {
	e === void 0 && (e = {});
	var t = e,
		n = t.window,
		u = n === void 0 ? document.defaultView : n,
		r = u.history;
	function o() {
		var x = u.location,
			F = x.pathname,
			P = x.search,
			A = x.hash,
			V = r.state || {};
		return [
			V.idx,
			aa({
				pathname: F,
				search: P,
				hash: A,
				state: V.usr || null,
				key: V.key || "default",
			}),
		];
	}
	var i = null;
	function l() {
		if (i) E.call(i), (i = null);
		else {
			var x = _t.Pop,
				F = o(),
				P = F[0],
				A = F[1];
			if (E.length) {
				if (P != null) {
					var V = d - P;
					V &&
						((i = {
							action: x,
							location: A,
							retry: function () {
								k(V * -1);
							},
						}),
						k(V));
				}
			} else c(x);
		}
	}
	u.addEventListener(qf, l);
	var a = _t.Pop,
		s = o(),
		d = s[0],
		h = s[1],
		m = pa(),
		E = pa();
	d == null && ((d = 0), r.replaceState(cr({}, r.state, { idx: d }), ""));
	function C(x) {
		return typeof x == "string" ? x : bo(x);
	}
	function w(x, F) {
		return (
			F === void 0 && (F = null),
			aa(
				cr(
					{ pathname: h.pathname, hash: "", search: "" },
					typeof x == "string" ? $t(x) : x,
					{ state: F, key: ed() },
				),
			)
		);
	}
	function O(x, F) {
		return [{ usr: x.state, key: x.key, idx: F }, C(x)];
	}
	function p(x, F, P) {
		return !E.length || (E.call({ action: x, location: F, retry: P }), !1);
	}
	function c(x) {
		a = x;
		var F = o();
		(d = F[0]), (h = F[1]), m.call({ action: a, location: h });
	}
	function f(x, F) {
		var P = _t.Push,
			A = w(x, F);
		function V() {
			f(x, F);
		}
		if (p(P, A, V)) {
			var we = O(A, d + 1),
				We = we[0],
				Ft = we[1];
			try {
				r.pushState(We, "", Ft);
			} catch {
				u.location.assign(Ft);
			}
			c(P);
		}
	}
	function g(x, F) {
		var P = _t.Replace,
			A = w(x, F);
		function V() {
			g(x, F);
		}
		if (p(P, A, V)) {
			var we = O(A, d),
				We = we[0],
				Ft = we[1];
			r.replaceState(We, "", Ft), c(P);
		}
	}
	function k(x) {
		r.go(x);
	}
	var S = {
		get action() {
			return a;
		},
		get location() {
			return h;
		},
		createHref: C,
		push: f,
		replace: g,
		go: k,
		back: function () {
			k(-1);
		},
		forward: function () {
			k(1);
		},
		listen: function (F) {
			return m.push(F);
		},
		block: function (F) {
			var P = E.push(F);
			return (
				E.length === 1 && u.addEventListener(sa, ca),
				function () {
					P(), E.length || u.removeEventListener(sa, ca);
				}
			);
		},
	};
	return S;
}
function ca(e) {
	e.preventDefault(), (e.returnValue = "");
}
function pa() {
	var e = [];
	return {
		get length() {
			return e.length;
		},
		push: function (n) {
			return (
				e.push(n),
				function () {
					e = e.filter(function (u) {
						return u !== n;
					});
				}
			);
		},
		call: function (n) {
			e.forEach(function (u) {
				return u && u(n);
			});
		},
	};
}
function ed() {
	return Math.random().toString(36).substr(2, 8);
}
function bo(e) {
	var t = e.pathname,
		n = t === void 0 ? "/" : t,
		u = e.search,
		r = u === void 0 ? "" : u,
		o = e.hash,
		i = o === void 0 ? "" : o;
	return (
		r && r !== "?" && (n += r.charAt(0) === "?" ? r : "?" + r),
		i && i !== "#" && (n += i.charAt(0) === "#" ? i : "#" + i),
		n
	);
}
function $t(e) {
	var t = {};
	if (e) {
		var n = e.indexOf("#");
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
		var u = e.indexOf("?");
		u >= 0 && ((t.search = e.substr(u)), (e = e.substr(0, u))),
			e && (t.pathname = e);
	}
	return t;
} /**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Xi = z.exports.createContext(null),
	Ji = z.exports.createContext(null),
	lu = z.exports.createContext({ outlet: null, matches: [] });
function gt(e, t) {
	if (!e) throw new Error(t);
}
function td(e, t, n) {
	n === void 0 && (n = "/");
	let u = typeof t == "string" ? $t(t) : t,
		r = kc(u.pathname || "/", n);
	if (r == null) return null;
	let o = Fc(e);
	nd(o);
	let i = null;
	for (let l = 0; i == null && l < o.length; ++l) i = pd(o[l], r);
	return i;
}
function Fc(e, t, n, u) {
	return (
		t === void 0 && (t = []),
		n === void 0 && (n = []),
		u === void 0 && (u = ""),
		e.forEach((r, o) => {
			let i = {
				relativePath: r.path || "",
				caseSensitive: r.caseSensitive === !0,
				childrenIndex: o,
				route: r,
			};
			i.relativePath.startsWith("/") &&
				(i.relativePath.startsWith(u) || gt(!1),
				(i.relativePath = i.relativePath.slice(u.length)));
			let l = ht([u, i.relativePath]),
				a = n.concat(i);
			r.children &&
				r.children.length > 0 &&
				(r.index === !0 && gt(!1), Fc(r.children, t, a, l)),
				!(r.path == null && !r.index) &&
					t.push({ path: l, score: sd(l, r.index), routesMeta: a });
		}),
		t
	);
}
function nd(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: cd(
					t.routesMeta.map((u) => u.childrenIndex),
					n.routesMeta.map((u) => u.childrenIndex),
				),
	);
}
const ud = /^:\w+$/,
	rd = 3,
	od = 2,
	id = 1,
	ld = 10,
	ad = -2,
	fa = (e) => e === "*";
function sd(e, t) {
	let n = e.split("/"),
		u = n.length;
	return (
		n.some(fa) && (u += ad),
		t && (u += od),
		n
			.filter((r) => !fa(r))
			.reduce((r, o) => r + (ud.test(o) ? rd : o === "" ? id : ld), u)
	);
}
function cd(e, t) {
	return e.length === t.length && e.slice(0, -1).every((u, r) => u === t[r])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function pd(e, t) {
	let { routesMeta: n } = e,
		u = {},
		r = "/",
		o = [];
	for (let i = 0; i < n.length; ++i) {
		let l = n[i],
			a = i === n.length - 1,
			s = r === "/" ? t : t.slice(r.length) || "/",
			d = fd(
				{ path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
				s,
			);
		if (!d) return null;
		Object.assign(u, d.params);
		let h = l.route;
		o.push({
			params: u,
			pathname: ht([r, d.pathname]),
			pathnameBase: Bc(ht([r, d.pathnameBase])),
			route: h,
		}),
			d.pathnameBase !== "/" && (r = ht([r, d.pathnameBase]));
	}
	return o;
}
function fd(e, t) {
	typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, u] = dd(e.path, e.caseSensitive, e.end),
		r = t.match(n);
	if (!r) return null;
	let o = r[0],
		i = o.replace(/(.)\/+$/, "$1"),
		l = r.slice(1);
	return {
		params: u.reduce((s, d, h) => {
			if (d === "*") {
				let m = l[h] || "";
				i = o.slice(0, o.length - m.length).replace(/(.)\/+$/, "$1");
			}
			return (s[d] = md(l[h] || "")), s;
		}, {}),
		pathname: o,
		pathnameBase: i,
		pattern: e,
	};
}
function dd(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !0);
	let u = [],
		r =
			"^" +
			e
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
				.replace(/:(\w+)/g, (i, l) => (u.push(l), "([^\\/]+)"));
	return (
		e.endsWith("*")
			? (u.push("*"),
				(r += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: (r += n ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)"),
		[new RegExp(r, t ? void 0 : "i"), u]
	);
}
function md(e, t) {
	try {
		return decodeURIComponent(e);
	} catch {
		return e;
	}
}
function hd(e, t) {
	t === void 0 && (t = "/");
	let {
		pathname: n,
		search: u = "",
		hash: r = "",
	} = typeof e == "string" ? $t(e) : e;
	return {
		pathname: n ? (n.startsWith("/") ? n : vd(n, t)) : t,
		search: gd(u),
		hash: yd(r),
	};
}
function vd(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return (
		e.split("/").forEach((r) => {
			r === ".." ? n.length > 1 && n.pop() : r !== "." && n.push(r);
		}),
		n.length > 1 ? n.join("/") : "/"
	);
}
function wc(e, t, n) {
	let u = typeof e == "string" ? $t(e) : e,
		r = e === "" || u.pathname === "" ? "/" : u.pathname,
		o;
	if (r == null) o = n;
	else {
		let l = t.length - 1;
		if (r.startsWith("..")) {
			let a = r.split("/");
			for (; a[0] === ".."; ) a.shift(), (l -= 1);
			u.pathname = a.join("/");
		}
		o = l >= 0 ? t[l] : "/";
	}
	let i = hd(u, o);
	return (
		r &&
			r !== "/" &&
			r.endsWith("/") &&
			!i.pathname.endsWith("/") &&
			(i.pathname += "/"),
		i
	);
}
function Ed(e) {
	return e === "" || e.pathname === ""
		? "/"
		: typeof e == "string"
			? $t(e).pathname
			: e.pathname;
}
function kc(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = e.charAt(t.length);
	return n && n !== "/" ? null : e.slice(t.length) || "/";
}
const ht = (e) => e.join("/").replace(/\/\/+/g, "/"),
	Bc = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	gd = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
	yd = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function xd(e) {
	au() || gt(!1);
	let { basename: t, navigator: n } = z.exports.useContext(Xi),
		{ hash: u, pathname: r, search: o } = Dc(e),
		i = r;
	if (t !== "/") {
		let l = Ed(e),
			a = l != null && l.endsWith("/");
		i = r === "/" ? t + (a ? "/" : "") : ht([t, r]);
	}
	return n.createHref({ pathname: i, search: o, hash: u });
}
function au() {
	return z.exports.useContext(Ji) != null;
}
function Dr() {
	return au() || gt(!1), z.exports.useContext(Ji).location;
}
function Cd() {
	au() || gt(!1);
	let { basename: e, navigator: t } = z.exports.useContext(Xi),
		{ matches: n } = z.exports.useContext(lu),
		{ pathname: u } = Dr(),
		r = JSON.stringify(n.map((l) => l.pathnameBase)),
		o = z.exports.useRef(!1);
	return (
		z.exports.useEffect(() => {
			o.current = !0;
		}),
		z.exports.useCallback(
			function (l, a) {
				if ((a === void 0 && (a = {}), !o.current)) return;
				if (typeof l == "number") {
					t.go(l);
					return;
				}
				let s = wc(l, JSON.parse(r), u);
				e !== "/" && (s.pathname = ht([e, s.pathname])),
					(a.replace ? t.replace : t.push)(s, a.state);
			},
			[e, t, r, u],
		)
	);
}
const Fd = z.exports.createContext(null);
function wd(e) {
	let t = z.exports.useContext(lu).outlet;
	return t && z.exports.createElement(Fd.Provider, { value: e }, t);
}
function Dc(e) {
	let { matches: t } = z.exports.useContext(lu),
		{ pathname: n } = Dr(),
		u = JSON.stringify(t.map((r) => r.pathnameBase));
	return z.exports.useMemo(() => wc(e, JSON.parse(u), n), [e, u, n]);
}
function kd(e, t) {
	au() || gt(!1);
	let { matches: n } = z.exports.useContext(lu),
		u = n[n.length - 1],
		r = u ? u.params : {};
	u && u.pathname;
	let o = u ? u.pathnameBase : "/";
	u && u.route;
	let i = Dr(),
		l;
	if (t) {
		var a;
		let m = typeof t == "string" ? $t(t) : t;
		o === "/" ||
			((a = m.pathname) == null ? void 0 : a.startsWith(o)) ||
			gt(!1),
			(l = m);
	} else l = i;
	let s = l.pathname || "/",
		d = o === "/" ? s : s.slice(o.length) || "/",
		h = td(e, { pathname: d });
	return Bd(
		h &&
			h.map((m) =>
				Object.assign({}, m, {
					params: Object.assign({}, r, m.params),
					pathname: ht([o, m.pathname]),
					pathnameBase: m.pathnameBase === "/" ? o : ht([o, m.pathnameBase]),
				}),
			),
		n,
	);
}
function Bd(e, t) {
	return (
		t === void 0 && (t = []),
		e == null
			? null
			: e.reduceRight(
					(n, u, r) =>
						z.exports.createElement(lu.Provider, {
							children: u.route.element !== void 0 ? u.route.element : n,
							value: { outlet: n, matches: t.concat(e.slice(0, r + 1)) },
						}),
					null,
				)
	);
}
function Dd(e) {
	return wd(e.context);
}
function Sd(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: u,
		navigationType: r = _t.Pop,
		navigator: o,
		static: i = !1,
	} = e;
	au() && gt(!1);
	let l = Bc(t),
		a = z.exports.useMemo(
			() => ({ basename: l, navigator: o, static: i }),
			[l, o, i],
		);
	typeof u == "string" && (u = $t(u));
	let {
			pathname: s = "/",
			search: d = "",
			hash: h = "",
			state: m = null,
			key: E = "default",
		} = u,
		C = z.exports.useMemo(() => {
			let w = kc(s, l);
			return w == null
				? null
				: { pathname: w, search: d, hash: h, state: m, key: E };
		}, [l, s, d, h, m, E]);
	return C == null
		? null
		: z.exports.createElement(
				Xi.Provider,
				{ value: a },
				z.exports.createElement(Ji.Provider, {
					children: n,
					value: { location: C, navigationType: r },
				}),
			);
} /**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ei() {
	return (
		(ei =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var u in n)
						Object.prototype.hasOwnProperty.call(n, u) && (e[u] = n[u]);
				}
				return e;
			}),
		ei.apply(this, arguments)
	);
}
function zd(e, t) {
	if (e == null) return {};
	var n = {},
		u = Object.keys(e),
		r,
		o;
	for (o = 0; o < u.length; o++)
		(r = u[o]), !(t.indexOf(r) >= 0) && (n[r] = e[r]);
	return n;
}
const Ad = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
function _d(e) {
	let { basename: t, children: n, window: u } = e,
		r = z.exports.useRef();
	r.current == null && (r.current = bf({ window: u }));
	let o = r.current,
		[i, l] = z.exports.useState({ action: o.action, location: o.location });
	return (
		z.exports.useLayoutEffect(() => o.listen(l), [o]),
		z.exports.createElement(Sd, {
			basename: t,
			children: n,
			location: i.location,
			navigationType: i.action,
			navigator: o,
		})
	);
}
function Nd(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const Sc = z.exports.forwardRef(function (t, n) {
	let {
			onClick: u,
			reloadDocument: r,
			replace: o = !1,
			state: i,
			target: l,
			to: a,
		} = t,
		s = zd(t, Ad),
		d = xd(a),
		h = Pd(a, { replace: o, state: i, target: l });
	function m(E) {
		u && u(E), !E.defaultPrevented && !r && h(E);
	}
	return z.exports.createElement(
		"a",
		ei({}, s, { href: d, onClick: m, ref: n, target: l }),
	);
});
function Pd(e, t) {
	let { target: n, replace: u, state: r } = t === void 0 ? {} : t,
		o = Cd(),
		i = Dr(),
		l = Dc(e);
	return z.exports.useCallback(
		(a) => {
			if (a.button === 0 && (!n || n === "_self") && !Nd(a)) {
				a.preventDefault();
				let s = !!u || bo(i) === bo(l);
				o(e, { replace: s, state: r });
			}
		},
		[i, o, l, u, r, n, e],
	);
}
var Zi = { exports: {} },
	Sr = {}; /**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jd = z.exports,
	Ld = Symbol.for("react.element"),
	Td = Symbol.for("react.fragment"),
	Rd = Object.prototype.hasOwnProperty,
	Od = jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Id = { key: !0, ref: !0, __self: !0, __source: !0 };
function zc(e, t, n) {
	var u,
		r = {},
		o = null,
		i = null;
	n !== void 0 && (o = "" + n),
		t.key !== void 0 && (o = "" + t.key),
		t.ref !== void 0 && (i = t.ref);
	for (u in t) Rd.call(t, u) && !Id.hasOwnProperty(u) && (r[u] = t[u]);
	if (e && e.defaultProps)
		for (u in ((t = e.defaultProps), t)) r[u] === void 0 && (r[u] = t[u]);
	return {
		$$typeof: Ld,
		type: e,
		key: o,
		ref: i,
		props: r,
		_owner: Od.current,
	};
}
Sr.Fragment = Td;
Sr.jsx = zc;
Sr.jsxs = zc;
(function (e) {
	e.exports = Sr;
})(Zi);
const v = Zi.exports.jsx,
	j = Zi.exports.jsxs;
function Md() {
	return j("div", {
		className: "first",
		children: [
			v("div", { className: "first-center-words", children: " " }),
			j("div", {
				className: "first-center-trees-containner",
				children: [
					v("div", { className: "first-center-gray-trees" }),
					v("div", { className: "first-center-green-trees" }),
					v("div", { className: "first-bottom-prond" }),
				],
			}),
			j("div", {
				className: "first-cloud-cantainner",
				children: [
					v("div", { className: "first-left-cloud" }),
					v("div", { className: "first-right-cloud" }),
				],
			}),
			j("div", {
				className: "first-others",
				children: [
					v("div", { className: "first-top-cloud" }),
					v("div", { className: "first-top-stars" }),
					v("div", { className: "first-border" }),
				],
			}),
			j("div", {
				className: "first-button",
				children: [
					v(Sc, {
						to: "intro",
						children: j("button", {
							className: "blob-btn",
							children: [
								"\u8FDB\xA0\u5165\xA0\u5B98\xA0\u7F51",
								v("span", {
									className: "blob-btn__inner",
									children: j("span", {
										className: "blob-btn__blobs",
										children: [
											v("span", { className: "blob-btn__blob" }),
											v("span", { className: "blob-btn__blob" }),
											v("span", { className: "blob-btn__blob" }),
											v("span", { className: "blob-btn__blob" }),
										],
									}),
								}),
							],
						}),
					}),
					v("br", {}),
					v("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						version: "1.1",
						children: v("defs", {
							children: j("filter", {
								id: "goo",
								children: [
									v("feGaussianBlur", {
										in: "SourceGraphic",
										result: "blur",
										stdDeviation: "10",
									}),
									v("feColorMatrix", {
										in: "blur",
										mode: "matrix",
										values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7",
										result: "goo",
									}),
									v("feBlend", {
										in2: "goo",
										in: "SourceGraphic",
										result: "mix",
									}),
								],
							}),
						}),
					}),
				],
			}),
		],
	});
}
const An = [
		{
			name: "\u540E\u7AEF",
			intro:
				"\u5B9E\u73B0 Web \u5E94\u7528\u7684\u540E\u7AEF\u670D\u52A1\uFF0C\u8D1F\u8D23\u540E\u7AEF\u5F00\u53D1\uFF0C\u670D\u52A1\u5668\u8FD0\u7EF4\uFF0C\u4FDD\u8BC1\u6728\u7280\u4EA7\u54C1\u7684\u957F\u6CBB\u4E45\u5B89\u3002",
			learn: "Go, SQL, Docker, Kubernetes\u2026",
			img: "http://static.muxixyz.com/index_site/backend.png",
		},
		{
			name: "\u524D\u7AEF",
			intro:
				"\u57FA\u4E8E\u6D4F\u89C8\u5668\u5185\u6838\u5F00\u53D1\u8DE8\u5E73\u53F0\u3001\u8DE8\u7EC8\u7AEF\u7684\u5E94\u7528\u8F6F\u4EF6",
			learn: "HTML, CSS, JavaScript, React\u2026",
			img: "http://static.muxixyz.com/index_site/frontend.png",
		},
		{
			name: "\u8BBE\u8BA1",
			intro:
				"\u68A6\u60F3\u662F\u6210\u4E3A\u7F8E\u672F\u8BBE\u8BA1\u5927\u5E08,\u8E0F\u4E0AUI\u8BBE\u8BA1\u5C01\u795E\u4E4B\u65C5",
			learn: "PS, AI, XD, Sketch\u2026",
			img: "http://static.muxixyz.com/index_site/design.png",
		},
		{
			name: "\u5B89\u5353",
			intro:
				"\u5F00\u53D1 Android \u5E94\u7528\uFF0C\u7EF4\u62A4\u56E2\u961F\u7684 APP\u3002",
			learn: "Java, Kotlin, Groovy, C++\u2026",
			img: "http://static.muxixyz.com/index_site/android.png",
		},
		{
			name: "\u4EA7\u54C1",
			intro:
				"\u5934\u8111\u98CE\u66B4 get \u70B9\u5B50\uFF0C\u534F\u8C03\u5F00\u53D1\u4E0E\u8BBE\u8BA1\u3002\u4ECE 0 \u5230 1 \u5236\u4F5C\u4EA7\u54C1\u3002",
			learn:
				"\u9700\u6C42\u5206\u6790, \u7528\u6237\u8C03\u7814, \u5236\u4F5C\u4EA7\u54C1\u539F\u578B\u56FE\u2026",
			img: "http://static.muxixyz.com/index_site/product.png",
		},
		{
			name: "\u8FD0\u8425",
			intro: "todo",
			learn: "todo",
			img: "http://static.muxixyz.com/index_site/product.png",
		},
	],
	ro = 6;
function $d({ initGroup: e, selectGroup: t }) {
	const [n, u] = z.exports.useState(e),
		[r, o] = z.exports.useState(e * (360 / ro)),
		i = (a) => {
			t(a), u(a), o(l(r, a * (360 / ro)));
		};
	function l(a, s) {
		let d = s - a;
		return d > 180 ? (d -= 360) : d < -180 && (d += 360), d + a;
	}
	return v("div", {
		className: "group-controller-box",
		children: v("div", {
			className: "group-controller",
			children: j("div", {
				className: "circle-menu",
				children: [
					v("div", {
						className: "circle-menu-round",
						style: {
							transitionDuration: ".8s",
							transform: `rotate(${r}deg)rotateY(${r * ro}deg)`,
						},
						children: v("div", { className: "circle-menu-dot" }),
					}),
					v("ul", {
						className: "group-list",
						children: An.map((a, s) =>
							v(
								"li",
								{
									className: "group-item",
									children: v("a", {
										className: `circle-menu-${s} ${n == s ? "onGroup" : "notOnGroup"}`,
										onClick: () => i(s),
										children: a.name,
									}),
								},
								s,
							),
						),
					}),
				],
			}),
		}),
	});
}
const Ud = () => Math.floor(Math.random() * 361);
function Vd() {
	return v("div", {
		className: "staticLeaves",
		children: [
			{ left: "15%", top: "15%", size: "100%" },
			{ left: "20%", top: "10%", size: "50%" },
			{ left: "18%", top: "35%", size: "30%" },
			{ left: "35%", top: "25%", size: "50%" },
			{ left: "17%", top: "65%", size: "65%" },
			{ left: "45%", top: "17%", size: "71%" },
			{ left: "32%", top: "38%", size: "50%" },
			{ left: "27%", top: "45%", size: "65%" },
			{ left: "67%", top: "27%", size: "44%" },
			{ left: "85%", top: "17%", size: "50%" },
			{ left: "37%", top: "63%", size: "100%" },
			{ left: "61%", top: "25%", size: "72%" },
			{ left: "51%", top: "61%", size: "30%" },
			{ left: "43%", top: "41%", size: "61%" },
			{ left: "57%", top: "63%", size: "78%" },
			{ left: "77%", top: "9%", size: "40%" },
			{ left: "72%", top: "50%", size: "61%" },
			{ left: "80%", top: "73%", size: "78%" },
		].map((t, n) =>
			v(
				"span",
				{
					style: {
						position: "absolute",
						left: t.left,
						top: t.top,
						backgroundSize: t.size,
						transform: `rotate(${Ud()}deg)`,
					},
				},
				n,
			),
		),
	});
}
function Wd() {
	const [e, t] = z.exports.useState(0);
	return j("div", {
		className: "wrapper",
		children: [
			v(Vd, {}),
			v("div", {
				className: "group-content-box",
				children: j("div", {
					className: "group-content",
					children: [
						v("div", {
							className: "group-left",
							children: j("div", {
								className: "group-left-content",
								children: [
									v("h1", { className: "group-name", children: An[e].name }),
									v("div", { className: "group-intro", children: An[e].intro }),
									v("br", {}),
									j("div", {
										className: "group-learn",
										children: [
											v("p", { children: "\u5B66\u4E60\u6280\u80FD:" }),
											An[e].learn,
										],
									}),
								],
							}),
						}),
						v($d, { selectGroup: t, initGroup: e }),
						v("div", {
							className: "group-right",
							children: v("img", { src: An[e].img, alt: "" }),
						}),
					],
				}),
			}),
		],
	});
}
const zr = () => {
	const e = [
			{
				name: "\u7EC4\u522B\u4ECB\u7ECD",
				style: "header-primary",
				route: "/intro",
			},
			{
				name: "\u4EA7\u54C1\u5C55\u793A",
				style: "header-primary",
				route: "/product",
			},
			{ name: "\u6728\u7280\u56E2\u961F", style: "header-center", route: "/" },
			{
				name: "\u6210\u5458\u4ECB\u7ECD",
				style: "header-primary",
				route: "/member",
			},
			{
				name: "\u52A0\u5165\u6211\u4EEC",
				style: "header-primary",
				route: "/join",
			},
		],
		[t, n] = z.exports.useState(e),
		[u, r] = z.exports.useState(-1);
	return (
		z.exports.useEffect(() => {
			let o = window.location.pathname,
				i = t.find((l) => l.route === o);
			if (!!i && i.style === "header-primary") {
				let l = t.indexOf(i);
				(t[l].style += " header-active"), r(l);
			}
		}, []),
		v("header", {
			children: v("div", {
				className: "header-wrap",
				children: t.map((o, i) =>
					v(
						"div",
						{
							className: o.style,
							children: v(Sc, {
								className: `${i === 2 ? "header-word team-name" : "header-word"}`,
								to: o.route === "/" ? "" : o.route,
								children: o.name,
							}),
						},
						i,
					),
				),
			}),
		})
	);
};
function Qd() {
	return j("div", { children: [v(zr, {}), v(Wd, {})] });
}
const Ac = () =>
	j("div", {
		className: "fallingLeaves",
		children: [
			v("span", {}),
			v("span", {}),
			v("span", {}),
			v("span", {}),
			v("span", {}),
			v("span", {}),
			v("span", {}),
			v("span", {}),
			v("span", {}),
			v("span", {}),
		],
	});
function Hd() {
	function e() {
		window.location.href = "http://fresh.muxixyz.com/";
	}
	return j("div", {
		children: [
			v(Ac, {}),
			j("div", {
				className: "join-web",
				children: [
					v("div", {
						className: "background-img-container",
						children: v("img", {
							src: "http://static.muxixyz.com/index_site/join2.png",
							className: "background-star",
						}),
					}),
					v("div", {
						className: "background-button-container",
						children: v("img", {
							src: "http://static.muxixyz.com/index_site/join_button.png",
							className: "background-button-inner",
							onClick: () => e(),
						}),
					}),
				],
			}),
		],
	});
}
function Gd() {
	return j("div", { children: [v(zr, {}), v(Hd, {})] });
}
const De = [
		{
			product: "\u534E\u5E08\u5323\u5B50",
			type: "iOS\u5E94\u7528 \u5B89\u5353\u5E94\u7528",
			intro:
				"\u534E\u5E08\u5B66\u751F\u4E13\u5C5E\u5229\u5668\uFF0C\u5B9E\u65F6\u770B\u8BFE\u8868\uFF0C\u4FBF\u6377\u67E5\u6210\u7EE9\uFF0C\u8F7B\u677E\u626B\u9664\u5728\u6821\u7591\u96BE\u6742\u75C7\u3002",
			href: "http://ccnubox.muxixyz.com",
			img: "http://static.muxixyz.com/index_site/product-xiazi-new.png",
			icon: "http://static.muxixyz.com/index_site/icon_xiazi.png",
		},
		{
			product: "\u5B66\u800C",
			type: "Web\u5E94\u7528",
			intro:
				"\u8BE6\u7EC6\u7684\u8BFE\u7A0B\u5206\u7C7B\u4E0E\u8BC4\u4EF7\uFF0C\u52A9\u4F60\u8F7B\u677E\u7A81\u7834\u9009\u8BFE\u5927\u5173\u3002",
			href: "http://xueer.muxixyz.com",
			img: "http://static.muxixyz.com/index_site/product-xuer-new.png",
			icon: "http://static.muxixyz.com/index_site/icon_xuer.png",
		},
		{
			product: "\u6728\u5C0F\u7280",
			type: "Web\u5E94\u7528",
			intro:
				"\u5F53Siri\u6765\u5230\u534E\u5E08\uFF0C\u5B83\u4FBF\u662F\u6728\u5C0F\u7280\u3002\u65E0\u8BBA\u4F60\u662F\u9047\u5230\u4E86\u96BE\u9898\u8FD8\u662F\u7A7A\u95F2\u65E0\u804A\uFF0C\u6728\u5C0F\u7280\u90FD\u80FD\u4E00\u547C\u5373\u5230\u3002",
			href: "http://robot.muxixyz.com",
			img: "http://static.muxixyz.com/index_site/product-muxiaoxi-new.png",
			icon: "http://static.muxixyz.com/index_site/icon_robot.png",
		},
		{
			product: "\u60F3\u6CD5\u6C60",
			type: "Web\u5E94\u7528",
			intro:
				"\u5728\u8FD9\u91CC\uFF0C\u4F60\u4EEC\u8D1F\u8D23\u5929\u9A6C\u884C\u7A7A\uFF0C\u6211\u4EEC\u8D1F\u8D23\u811A\u8E0F\u5B9E\u5730\uFF0C\u586B\u4E0B\u4F60\u7684\u60F3\u6CD5\uFF0C\u6211\u4EEC\u5E2E\u4F60\u5B9E\u73B0\u3002\u5DF2\u6709233\u4EBA\u5728\u6B64\u63D0\u51FA\u60F3\u6CD5\uFF0C\u4F60\u5462\uFF1F",
			href: "http://cn.mikecrm.com/eZ3MyWA",
			img: "http://static.muxixyz.com/index_site/product-thinking-copy.png",
			icon: "http://static.muxixyz.com/index_site/icon_thinking.png",
		},
	],
	Kd = (e) => {
		const { key1: t, count: n } = e,
			[u, r] = z.exports.useState(De[t].product),
			[o, i] = z.exports.useState(De[t].type),
			[l, a] = z.exports.useState(De[t].intro),
			[s, d] = z.exports.useState(De[t].href),
			[h, m] = z.exports.useState(De[t].img),
			E = () => {
				window.location.href = s;
			};
		z.exports.useEffect(
			() => () => {
				r(u), i(o), a(l), d(s);
			},
			[],
		);
		let C = 100 / n + "%";
		return v("div", {
			className: "products-intro",
			style: { width: C },
			children: j("div", {
				className: "products-content products-on",
				children: [
					v("div", {
						className: "products-introduction",
						children: j("div", {
							className: "products-introduction-content",
							children: [
								v("h1", { children: u }),
								j("div", {
									className: "products-des",
									children: [
										v("div", { className: "products-des-icon" }),
										v("span", { className: "products-des-txt", children: o }),
									],
								}),
								v("div", { className: "products-description", children: l }),
								v("button", {
									className: "products-btn",
									onClick: E.bind(void 0),
									children:
										t == 0
											? "\u4E0B\u8F7D\u5730\u5740"
											: "\u8FDB\u5165\u94FE\u63A5",
								}),
							],
						}),
					}),
					v("div", {
						className: "products-img",
						style: { backgroundImage: `url(${h})` },
					}),
				],
			}),
		});
	},
	Yd = (e) => {
		const { count: t, update: n, choose: u } = e,
			[r, o] = z.exports.useState(e.current),
			[i, l] = z.exports.useState(null);
		z.exports.useEffect(() => {
			let E = [];
			De.forEach((C) => {
				E.push(C.product);
			}),
				l(E);
		}, []);
		const a = () => {
				n(-1), r !== 0 && o(r - 1);
			},
			s = () => {
				n(1), r !== De.length - 1 && o(r + 1);
			},
			d = (E) => {
				u(E), o(E);
			};
		let h = "products-item products-center",
			m = "products-item";
		return j("div", {
			className: "products-bottom",
			children: [
				j("div", {
					className: "products-controller",
					children: [
						v("div", { className: "controller-btn btn-left", onClick: a }),
						j("div", {
							className: "products-cnt-text",
							children: [
								j("div", {
									className: "products-camera-bgr",
									children: [
										v("div", {
											className: "products-camera-bgr-inner",
											children: " ",
										}),
										v("div", { className: "products-camera-bgr-inner2" }),
									],
								}),
								v("div", {
									className: "text",
									style: {
										transitionDuration: ".8s",
										width: `${184 * t}px`,
										left: `calc(50vw - 122px - ${e.current * 184}px)`,
									},
									children:
										i == null
											? void 0
											: i.map((E, C) =>
													v(
														"div",
														{
															className: `${r === C ? h : m}`,
															onClick: d.bind(void 0, C),
															children: E,
														},
														C,
													),
												),
								}),
							],
						}),
						v("div", { className: "controller-btn btn-right", onClick: s }),
					],
				}),
				j("div", {
					className: "products-camera-containner",
					children: [
						v("div", { className: "products-camera", children: " " }),
						v("div", {
							className: "prodcuts-icon",
							style: { backgroundImage: `url(${De[r].icon})` },
						}),
					],
				}),
			],
		});
	},
	Xd = () => {
		const e = De.length,
			[t, n] = z.exports.useState(0),
			[u, r] = z.exports.useState(De[0].icon),
			o = (s) => {
				(t <= 0 && s == -1) ||
					(t >= e - 1 && s == 1) ||
					(n(t + s), r(De[t + s].icon));
			},
			i = (s) => {
				n(s), r(De[t].icon);
			};
		let l = e * 100 + "%",
			a = Array.from(new Array(e), (s, d) => d);
		return j("div", {
			className: "products-wrap",
			children: [
				v("div", {
					className: "products-banner",
					style: { width: l, transitionDuration: ".8s", left: -100 * t + "%" },
					children: a.map((s, d) => v(Kd, { key1: s, count: e }, d)),
				}),
				v(Yd, { update: o, current: t, count: e, choose: i }),
			],
		});
	};
function Jd() {
	return j("div", { children: [v(zr, {}), v(Xd, {})] });
}
const _c = [
		{
			tag: "\u540E\u7AEF",
			people: [
				{
					position: "\u4E8C\u4EE3\u76EE \u7EC4\u957F",
					name: "\u5218\u806A",
					photo: "https://static.muxixyz.com/muxisite/avartar/lc.png",
					intro: "\u4ECA\u5929\u4E0D\u63A5\u4EFB\u4F55\u9700\u6C42= =",
				},
				{
					position: "\u9996\u5E2D\u6559\u80B2\u5B98",
					name: "\u4F59\u4F9D\u857E",
					photo: "https://static.muxixyz.com/muxisite/avartar/yyl.jpeg",
					intro: "\u4ECB\u7ECD\u52A0\u8F7D\u5931\u8D25...",
				},
				{
					position: "\u4E09\u4EE3\u76EE \u7EC4\u957F \u4E3B\u7BA1",
					name: "\u5F20\u53EF",
					photo: "https://static.muxixyz.com/muxisite/avartar/zk.jpeg",
					intro: "DON'T PANIC",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u533A\u8BD7\u67D4",
					photo: "https://static.muxixyz.com/muxisite/avartar/osr.jpeg",
					intro: "\u534E\u5357\u98DF\u4EBA\u65CF",
				},
				{
					position: "\u7EC4\u5458",
					name: "Andrew-pqc",
					photo: "https://muxi-avatar.muxixyz.com//backend/pengqianchao.jpg",
					intro:
						"\u81EA\u7531\u5E26\u6765\u6050\u614C\uFF0C\u6050\u614C\u50AC\u4EBA\u594B\u8FDB",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u6881\u79CB\u5B9E",
					photo: "https://static.muxixyz.com/muxisite/avartar/lqs.jpeg",
					intro: "Carpe diem.",
				},
				{
					position: "\u56DB\u4EE3\u76EE \u7EC4\u957F \u4E3B\u7BA1",
					name: "\u5B8B\u6C5D\u9633",
					photo: "https://muxi-avatar.muxixyz.com//backend/songruyang.jpg",
					intro:
						"\u65E5\u79EF\u4EE3\u7801\u5343\u884C\uFF0C\u5219\u65E0\u5F80\u800C\u4E0D\u5229\u4E5F@\u5B66\u4E1A\u8FDB\u884C\u4E2D",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5510\u7231\u6C11",
					photo: "https://muxi-avatar.muxixyz.com//backend/tangaimin.png",
					intro:
						"\u6B32\u671B\u4EE5\u63D0\u5347\u70ED\u5FF1\uFF0C\u6BC5\u529B\u4EE5\u78E8\u5E73\u9AD8\u5C71\u3002",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9648\u51A0\u534E",
					photo: "https://muxi-avatar.muxixyz.com//backend/chengguanhua.jpg",
					intro: "\u8FD8\u5728\u4E0D\u65AD\u5B66\u4E60\u63D0\u5347\u4E2D",
				},
				{
					position: "\u4E94\u4EE3\u76EE \u7EC4\u957F",
					name: "\u7AE0\u8317\u8D85",
					photo: "https://muxi-avatar.muxixyz.com//backend/zhangmingchao.jpg",
					intro:
						"\u672A\u6765\u4E0D\u8DB3\u60E7\uFF0C\u8FC7\u5F80\u4E0D\u8DB3\u6CE3",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u4F59\u9E3F\u5947",
					photo: "https://muxi-avatar.muxixyz.com//backend/yuhongqi.jpg",
					intro: "\u7F8E\u4E3D\u7684\u5357\u65B9",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u848B\u5FD7\u6210",
					photo: "https://muxi-avatar.muxixyz.com//backend/jiangzhicheng.jpg",
					intro: "hello",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u80E1\u5609\u65FB",
					photo: "https://muxi-avatar.muxixyz.com//backend/hujiamin.jpg",
					intro:
						"\u8FD9\u4E2A\u4EBA\u6CA1\u6709\u7559\u4E0B\u4EFB\u4F55\u7B80\u4ECB~~~",
				},
				{
					position: "\u516D\u4EE3\u76EE \u7EC4\u957F",
					name: "\u5F20\u7AE3\u6DC7",
					photo: "https://muxi-avatar.muxixyz.com//backend/zhangjunqi.jpg",
					intro: "\u7ED9\u963F\u59E8\u5012\u4E00\u676F\u5361\u5E03\u5947\u8BFA",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5F20\u519B\u6D01",
					photo: "https://muxi-avatar.muxixyz.com//backend/zhangjunjie.jpg",
					intro: "We Choose to Go to the Moon",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9EC4\u51CC\u4E91",
					photo: "https://muxi-avatar.muxixyz.com//backend/huanglingyun.jpg",
					intro: "\u53EA\u6709\u4E2A\u6027 \u6CA1\u6709\u7B7E\u540D",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u738B\u96EF\u575A",
					photo: "https://muxi-avatar.muxixyz.com//backend/wangwenjian.jpg",
					intro:
						"\u8FD9\u4E2A\u4EBA\u6CA1\u6709\u7559\u4E0B\u4EFB\u4F55\u7B80\u4ECB~~~",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u6D2A\u6B23\u7136",
					photo: "https://muxi-avatar.muxixyz.com//backend/hongxinran.jpg",
					intro: "\u5F00\u5FC3\u5C31\u597D\u5566",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9093\u6C38\u9A8F",
					photo: "https://muxi-avatar.muxixyz.com//backend/dengyongjun.jpg",
					intro: "45\u5C81,\u79BB\u8FC7\u5A5A,\u4FE9\u5B69\u5B50",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u80E1\u7FD4\u745E",
					photo: "https://static.muxixyz.com/workbench/avatar/14.png",
					intro:
						"\u540E\u7AEF\u7EC4\uFF0C\u6570\u5B57\u5A92\u4F53\u6280\u672F\u4E13\u4E1A",
				},
				{
					position: "\u4E03\u4EE3\u76EE \u7EC4\u957F",
					name: "\u6881\u5E08\u6ED4",
					photo:
						"https://workbench-static.muxixyz.com/1606115265.462684.1606115143580.png",
					intro: "Go Go Go",
				},
				{
					position: "\u4E03\u4EE3\u76EE \u4E3B\u7BA1",
					name: "\u674E\u52B2\u54F2",
					photo:
						"https://workbench-static.muxixyz.com/1626186028.1289434.-11598051e23ef040.jpg",
					intro: "\u6211\u771F\u7684\u4E0D\u4F1A\u518D\u6446\u70C2\u4E86",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5F20\u65F7",
					photo:
						"https://workbench-static.muxixyz.com/1620714736.8429399.QQ20200828-2.jpeg",
					intro: "\u6C14\u8D2F\u4E5D\u5DDE \u5929\u4E0B\u8D4F",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9F9A\u5A1C",
					photo: "https://muxi-avatar.muxixyz.com/gn_avatar.png",
					intro: "\u65E0",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5F20\u5FC3\u96E8",
					photo:
						"https://workbench-static.muxixyz.com/1602430137.4298692.Screenshot_20201011_232848.jpg",
					intro:
						"\u534E\u4E2D\u5E08\u8303\u5927\u5B662020\u7EA7\u8BA1\u7B97\u673A\u5B66\u9662\u5B66\u751F",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u738B\u5B50\u5FF1",
					photo:
						"https://workbench-static.muxixyz.com/1636991111.3310592.QQ20211115234304.jpg",
					intro: "(\u0E51\u0298\u0305 \u0434 \u0298\u0305\u0E51)!!!",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u65B9\u745C\u8BDA",
					photo:
						"https://workbench-static.muxixyz.com/1635263000.1486888.2.JPG",
					intro: "\u6478\u9C7C\u4E2D",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u6613\u82F1\u6770",
					photo: "https://static.muxixyz.com/workbench/avatar/1.png",
					intro: "\u666E\u901A\u7684\u83DC\u72D7",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5434\u662D",
					photo:
						"https://workbench-static.muxixyz.com/1644678276.3510077.2021-12-11_001044.png",
					intro: "\u5317\u98CE\u77E5\u4E0D\u77E5",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u90DD\u9526\u6770",
					photo:
						"https://workbench-static.muxixyz.com/1642949489.8741019.11.jpg",
					intro:
						"\u4EBA\u53EF\u4EE5\u88AB\u6BC1\u706D\uFF0C\u4F46\u4E0D\u80FD\u88AB\u6253\u8D25",
				},
				{
					position: "\u516B\u4EE3\u76EE \u7EC4\u957F \u4E3B\u7BA1",
					name: "\u5434\u5B87\u8D24",
					photo:
						"https://workbench-static.muxixyz.com/1642602521.2263212.AC034787AB1B508D8520B6F3EDDD7088.jpg",
					intro: "YOLO",
				},
				{
					position: "\u4E5D\u4EE3\u76EE \u7EC4\u957F",
					name: "\u6768\u5E0C\u5C71",
					photo:
						"https://workbench-static.muxixyz.com/1667271723.9067113.2022-11-01_11-01-51.png",
					intro: "\u8131\u79BB\u4E86\u9AD8\u7EA7\u8DA3\u5473\u7684\u4EBA",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5B59\u827A\u6853",
					photo:
						"https://workbench-static.muxixyz.com/1677071906.3237529.641.jpg",
					intro:
						"\u6211\u662F\u540E\u7AEF\u8336\u5012\u6C34\u7684\u9DB8\uFF0C\u597D\u5403\u61D2\u505A\u4E0D\u6C42\u4E0A\u8FDB\u7684ddl\u6218\u58EB\u3002",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5F20\u8018\u7855",
					photo:
						"https://workbench-static.muxixyz.com/1665824560.4114592.24655716651404032.png",
					intro: "\u4F60\u662F\uFF1F\u6211\u662F\uFF1F\u4ED6\u662F\uFF1F",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5F20\u4E66\u9887",
					photo: "https://static.muxixyz.com/workbench/avatar/11.png",
					intro: `\uFF5B"code": 418, "msg": "I'm a teapot"\uFF5D`,
				},
				{
					position: "\u7EC4\u5458",
					name: "\u4E25\u5C55\u7FD4",
					photo: "https://static.muxixyz.com/workbench/avatar/10.png",
					intro: "\u5199\u4E0Berr\uFF01=nil\u7684\u4EBA",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u738B\u4E25\u598D",
					photo:
						"https://workbench-static.muxixyz.com/1666084449.6859758.20221018171352.jpg",
					intro:
						"\u53BB\u53BB\u91CD\u53BB\u53BB\uFF0C\u6765\u65F6\u662F\u6765\u65F6\u3002",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u738B\u8587 ",
					photo: "https://static.muxixyz.com/workbench/avatar/3.png ",
					intro: "\u5927\u767D\u83DC\u5927\u5B66\u751F\u3002",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9648\u8BDA",
					photo: "https://muxi-avatar.muxixyz.com/backend%3Achencheng.png",
					intro: "\u5B66\u5C31\u5BF9\u4E86",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u59DC\u9AD8\u5CF0",
					photo: "https://muxi-avatar.muxixyz.com/backend%3Ajianggaofeng.jpg",
					intro: "Hello World",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u6881\u96C5\u680B",
					photo: "https://muxi-avatar.muxixyz.com/backend%3Aliangyadong.jpg",
					intro:
						"\u540E\u7AEF\u5C0F\u900F\u660E\uFF0C\u773C\u795E\u6E05\u6F88\u5927\u5B66\u751F",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5218\u9547\u4E1C",
					photo: "https://muxi-avatar.muxixyz.com/backend%3Aliuzhendong.jpg",
					intro: "\u540E\u7AEF\u64E6\u73BB\u7483\u7684",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5B59\u4FCA\u6960",
					photo: "https://muxi-avatar.muxixyz.com/backend%3Asunjunnan.jpg",
					intro:
						"\u524D\u7AEF\u8F6C\u524D\u53F0\uFF0C\u540E\u7AEF\u8F6C\u540E\u53A8\u3002\u6211\u4EEC\u90FD\u6709\u5149\u660E\u7684\u672A\u6765",
				},
			],
		},
		{
			tag: "\u524D\u7AEF",
			people: [
				{
					position: "\u6253\u6742\u7684",
					name: "\u8D75\u946B\u6656",
					photo: "https://static.muxixyz.com/69273635a63c6b80.jpg",
					intro: "\u5168\u5E72\u5DE5\u7A0B\u5E08",
				},
				{
					position: "\u4E8C\u4EE3\u76EE \u7EC4\u957F",
					name: "\u5409\u5A49\u9896",
					photo: "https://muxi-avatar.muxixyz.com//frontend/jiwanying.jpeg",
					intro:
						"\u559C\u6B22\u5403\u70E7\u5356\uFF0C\u867E\u997A\uFF0C\u7172\u4ED4\u996D!",
				},
				{
					position: "\u540E\u52E4",
					name: "\u5218\u5C27\u5B97",
					photo: "https://muxi-avatar.muxixyz.com//frontend/liuyaozong.gif",
					intro: "\u8C1C\u4E00\u6837\u7684\u7537\u5B50",
				},
				{
					position: "\u540E\u52E4",
					name: "\u5F90\u96C5\u9759",
					photo: "https://muxi-avatar.muxixyz.com//frontend/xuyajing.JPG",
					intro: "\u524D\u7AEF\u7EC4\u5458\u4E00\u679A",
				},
				{
					position: "\u4E09\u4EE3\u76EE \u7EC4\u957F",
					name: "\u8521\u8339\u82B8",
					photo: "https://muxi-avatar.muxixyz.com//frontend/cairuyun.jpg",
					intro: "\u6B63\u5728\u6E32\u67D3\u4E2D...",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u738B\u7696\u83B9",
					photo: "https://muxi-avatar.muxixyz.com//frontend:wangwanying.jpg",
					intro: "\u300C\u597D\u8036\uFF0C\u662F\u5343\u5343\u300D",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u7BA1\u4E91\u51E4",
					photo: "https://muxi-avatar.muxixyz.com//frontend/guanyunfeng.jpg",
					intro: "\u4E00\u4E2A\u4EBA\u7684\u65F6\u4EE3",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u66FE\u5FB7\u52E4",
					photo: "https://muxi-avatar.muxixyz.com//frontend/zengdeqin.jpg",
					intro: "\u6C42\u77E5\u82E5\u6E34\uFF0C\u6C42\u8D24\u82E5\u611A",
				},
				{
					position: "\u56DB\u4EE3\u76EE \u7EC4\u957F",
					name: "\u5305\u6B23\u96E8",
					photo: "https://muxi-avatar.muxixyz.com//frontend/baoxinyu.jpg",
					intro: "When your dreams come alive, you are unstoppable",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5B63\u5353\u7426",
					photo: "https://muxi-avatar.muxixyz.com//frontend/jizhuoqi.jpg",
					intro:
						"\u4E00\u53EA\u68A6\u60F3\u6210\u4E3A\u5927\u4F6C\u7684\u54B8\u9C7C",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u738B\u7389\u98DE",
					photo: "https://muxi-avatar.muxixyz.com//frontend/wangyufei.jpg",
					intro: "\u837C\u9761\u6613\u901D\uFF0C\u82E6\u86CA\u7518\u9974",
				},
				{
					position: "\u4E94\u4EE3\u76EE \u7EC4\u957F",
					name: "\u674E\u96EA\u83B2",
					photo: "https://muxi-avatar.muxixyz.com//frontend/lixuelian.jpg",
					intro: "Good good study, day day up!",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u4E01\u9732\u6D01",
					photo: "https://muxi-avatar.muxixyz.com//frontend/dinglujie.jpg",
					intro: "\u4E00\u53EA\u9884\u5907\u5F79\u7A0B\u5E8F\u72D7",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5218\u86DF",
					photo: "https://muxi-avatar.muxixyz.com//frontend/liujiao.jpg",
					intro: "\u83AB\u5F97\u611F\u60C5\u7684\u5C0Fp",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5F20\u6587\u9526",
					photo: "https://muxi-avatar.muxixyz.com//frontend/zhangwenjin.jpg",
					intro: "\u597D\u597D\u5B66\u4E60\uFF0C\u5929\u5929\u5411\u4E0A\u3002",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5F20\u654F\u8DC3",
					photo: "https://muxi-avatar.muxixyz.com//frontend/zhangminyue.jpg",
					intro: "\u79EF\u6781\u5E9F\u4EBA",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9EC4\u8DEF\u9065",
					photo: "https://muxi-avatar.muxixyz.com//frontend/huangluyao.jpg",
					intro: "\u5FC3\u6709\u731B\u864E\uFF0C\u7EC6\u55C5\u8537\u8587",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u82CF\u4E9A\u9E4F",
					photo:
						"https://workbench-static.muxixyz.com/1618965024.3584971.srchttp___c-ssl.duitang.com_uploads_item_202004_16_20200416225709_hlldb.thumb.400_0.jpgreferhttp___c-ssl.duitang.jpeg",
					intro: "\u65E0",
				},
				{
					position: "\u516D\u4EE3\u76EE \u7EC4\u957F \u4E3B\u7BA1",
					name: "\u97E9\u6668\u9F99",
					photo: "https://muxi-avatar.muxixyz.com//frontend/hanchenlong.jpg",
					intro: "win\u{1F430}",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5ED6\u745C\u7490",
					photo: "https://muxi-avatar.muxixyz.com//frontend/liaoyulu.jpg",
					intro: "\u8BA8\u538C\u7761\u89C9.",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5218\u5B89",
					photo: "https://muxi-avatar.muxixyz.com//frontend/liuan.jpg",
					intro:
						"\u307E\u305F\u3099\u3000\u30C8\u3099\u30AD\u30C8\u3099\u30AD\u306E\u611F\u3057\u3099\u53D6\u308A\u623B\u3057\u305F\u3044",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u6C88\u4F73\u7476",
					photo: "https://muxi-avatar.muxixyz.com//frontend/shenjiayao.png",
					intro:
						"Nothing is impossible. \u559C\u6B22\u5C31\u53BB\u505A\u5427\u3002",
				},
				{
					position: "\u4E03\u4EE3\u76EE \u7EC4\u957F",
					name: "\u5218\u5B87\u4E50",
					photo:
						"https://workbench-static.muxixyz.com/1648692265.5580018.d959b5bbeba7a68bbde0796b880a9f388bc727da.jpg160w_160h_1c_1s.webp",
					intro: "\u52B3\u52A8\u6700\u5149\u8363",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u738B\u660E\u4EAE",
					photo:
						"https://workbench-static.muxixyz.com/1602240102.6119254.tx.jpg",
					intro:
						"\u7CBE\u901AC/C++,Java,Python,Golang\u548CJavascript,Shell,PHP\u7B49\u8BED\u8A00\u7684hello world\uFF0CTSX\u5FE0\u5B9E\u7C89\u4E1D\uFF0C\u5B9E\u4E60\u79EF\u6781\u5206\u5B50",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5468\u79D1\u5B87",
					photo: "https://workbench-static.muxixyz.com/1604924654.3901448.jpg",
					intro: "\u65E0",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9648\u5B87\u7FD4",
					photo:
						"https://workbench-static.muxixyz.com/1630938235.8424513.2019-08-08225241.jpg",
					intro:
						"20\u5C81\uFF0C\u662F\u524D\u7AEF\u3002\u4F46\u662F\uFF0C\u8D8A\u662F\u4E86\u89E3\u524D\u7AEF\uFF0C\u5C31\u8D8A\u4F1A\u53D1\u73B0\u524D\u7AEF\u7684\u80FD\u529B\u662F\u6709\u6781\u9650\u7684\u3002\u6240\u4EE5\uFF0C\u4E0D\u8981\u505C\u4E0B\u6765\u554A\u3002",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u738B\u96E8\u6668",
					photo:
						"https://workbench-static.muxixyz.com/1604850742.3459523.personal.jpg",
					intro: "\u6D6A\u6F2B\u81F3\u6B7B\u4E0D\u6E1D",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u738B\u6DD1\u82F1",
					photo: "https://static.muxixyz.com/workbench/avatar/12.png",
					intro: "\u65E0",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u970D\u4E1C\u7389",
					photo:
						"https://workbench-static.muxixyz.com/1634172978.8671744.387e8c9c229c028.jpg",
					intro: "Do not go gentle into that good night",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9EC4\u627F\u8F69",
					photo:
						"https://workbench-static.muxixyz.com/1659231596.9500036.Dana.jpg",
					intro: "Life is short, you need Python.",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5218\u6631\u5A34",
					photo:
						"https://workbench-static.muxixyz.com/1648725160.9864357.1.png",
					intro: "\u6162\u6162\u8D70\u554A\u6B23\u8D4F",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5434\u6893\u714C",
					photo:
						"https://workbench-static.muxixyz.com/1646803030.22379.null-5531b86df7e0108a.jpg",
					intro: "...CODING...",
				},
				{
					position: "\u516B\u4EE3\u76EE \u7EC4\u957F",
					name: "\u90ED\u7433\u7433",
					photo:
						"https://workbench-static.muxixyz.com/1634136026.2697997.IMG_011120210811-162643.JPG",
					intro: "\u5F00\u5FC3\u5C31\u597D\u554A",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5434\u5B87\u4F73",
					photo:
						"https://workbench-static.muxixyz.com/1633952588.5333083.3.jpg",
					intro: "\u4E50\u89C2\u7684\u641E\u7B11\u5973",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u82CF\u8283\u5B50\u65F8",
					photo:
						"https://workbench-static.muxixyz.com/1665395652.820678.25e4771b6d922863716ebb4091ffe645.jpg",
					intro: 'JS === "\u5973\u5B50\u5C0F\u5B66\u751F"',
				},
				{
					position: "\u7EC4\u5458",
					name: "\u738B\u80FD\u5E05",
					photo:
						"https://workbench-static.muxixyz.com/1666092922.4968514.profile-pic.png ",
					intro: "\u65E9\u7761\u65E9\u8D77",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u7C73\u6D69\u777F",
					photo:
						"https://workbench-static.muxixyz.com/1667871187.3702953.CBB50843-EE00-4200-A5FC-DBDF393C1BA4.jpeg",
					intro:
						"\u4E0D\u9A70\u4E8E\u7A7A\u60F3\uFF0C\u4E0D\u9A9B\u4E8E\u865A\u58F0",
				},
				{
					position: "\u4E5D\u4EE3\u76EE \u7EC4\u957F",
					name: "\u5218\u607A\u537F",
					photo:
						"https://workbench-static.muxixyz.com/1665756357.33686.ef2800ff837f6d3b56d47364b1112062.jpg",
					intro: "\u534E\u5E08GGBond",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5355\u79B9\u5609",
					photo: "https://muxi-avatar.muxixyz.com/frontend%3Ashanyujia.jpg",
					intro:
						"\u7E41\u82B1\u4F3C\u9526\u5BFB\u5B89\u5B81 \u6DE1\u6C34\u6D41\u4E91\u6E21\u6B64\u751F",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u590F\u96EF\u6590",
					photo: "https://muxi-avatar.muxixyz.com/frontend%3Axiaowenfei.jpg",
					intro: "\u68A6\u60F3\u6210\u771F\uFF01\uFF01",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u90B5\u9E36\u4E91",
					photo: "https://muxi-avatar.muxixyz.com/frontend%3Ashaosiyun.jpg",
					intro:
						"\u60F3\u6CD5\u8D85\u591A\uFF0C\u6267\u884C\u4E3A0.1\u7684\u5FAE\u6B7B\u4EBA",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5F20\u51B0\u8273",
					photo: "https://muxi-avatar.muxixyz.com/frontend%3Azhangbingyan.png",
					intro:
						"\u6BCF\u5929\u7761\u524D\u7948\u7977\u660E\u5929\u6CA1\u6709\u5C0F\u7EC4\u4F5C\u4E1A",
				},
			],
		},
		{
			tag: "\u8BBE\u8BA1",
			people: [
				{
					position: "\u96F6\u4EE3\u76EE \u7EC4\u957F",
					name: "\u738B\u5955\u6609",
					intro: "OS\u52A8\u6548\u8BBE\u8BA1\u5E08",
					photo: "https://muxi-avatar.muxixyz.com//design/wangyifang.png",
				},
				{
					position: "\u540E\u52E4\u603B\u7BA1 \u7EC4\u957F",
					name: "\u80E1\u8587",
					intro:
						"\u5E76\u4E0D\u70ED\u7231\u52A0\u73ED\uFF0C\u5F88\u7FA1\u6155\u56E2\u961F\u91CC\u8FD8\u6709\u4E66\u8BFB\u7684\u5C0F\u670B\u53CB",
					photo: "https://muxi-avatar.muxixyz.com//design/huwei.png",
				},
				{
					position: "\u9694\u58C1\u8001\u738B \u7EC4\u957F",
					name: "\u738B\u4F73\u59AE",
					intro:
						"\u793E\u969C\uFF0C\u751C\u515A\uFF0CINFJ\uFF0C\u989C\u72D7\uFF0C\u6DF7\u4E71\u90AA\u6076\uFF0C\u53EA\u4F1A\u753B\u753B",
					photo: "https://muxi-avatar.muxixyz.com//design/wangjiani.png",
				},
				{
					position: "\u8001\u4EBA",
					name: "\u9EC4\u7231\u73E0",
					intro: "\u4E0D\u4ECB\u7ECD",
					photo: "https://muxi-avatar.muxixyz.com//design/huangaizhu.png",
				},
				{
					position: "\u8001\u4EBA",
					name: "\u738B\u9732\u6668",
					intro:
						"\u5728\u661F\u671F\u5929\u7684\u65E9\u6668 \u548CCG\u7ED3\u5A5A",
					photo: "https://muxi-avatar.muxixyz.com//design/wangluchen.jpg",
				},
				{
					position: "\u540E\u52E4\u52A1\u5DE5 \u7EC4\u957F",
					name: "\u5F20\u8D1D\u8D1D",
					intro:
						"\u9ED8\u9ED8\u5543\u5C0F\u9C7C\u5E72\u7684\u4E2D\u5E74\u5F20\u80D6\u80D6\u3002",
					photo: "https://muxi-avatar.muxixyz.com//design/zhangbeibei.png",
				},
				{
					position: "\u6CD5\u5E08",
					name: "\u5468\u59DD\u9896",
					intro: "\u7231\u8BBE\u8BA1\uFF0C\u7231\u751F\u6D3B",
					photo: "https://muxi-avatar.muxixyz.com//design/zhoushuying.png",
				},
				{
					position: "\u5317\u6781\u661F\u4E00\u53F7",
					name: "\u9F9A\u6708\u5A74",
					intro: "\u4E00\u76F4\u6025\u9700\u91CD\u5851\u7684\u5C0F\u50BB",
					photo: "https://muxi-avatar.muxixyz.com//design/gongyueying.png",
				},
				{
					position: "\u56DB\u4EE3\u76EE \u7EC4\u957F",
					name: "\u5434\u5F6C",
					photo: "https://muxi-avatar.muxixyz.com//design/wubing.png",
					intro:
						"\u8FD9\u4E2A\u4EBA\u5F88\u61D2\uFF0C\u8FD9\u91CC\u4EC0\u4E48\u90FD\u6CA1\u6709",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u536B\u8BD7\u742A",
					photo: "https://muxi-avatar.muxixyz.com//design/weishiqi.png",
					intro: "\u53EF\u80FD\u662F\u4E2A\u597D\u4EBA",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9EC4\u5B89\u59AE",
					photo: "https://muxi-avatar.muxixyz.com//design/huanganni.jpg",
					intro:
						"\u6625\u56F0\u79CB\u4E4F\u590F\u6253\u76F9\uFF0C\u51AC\u5929\u8FD8\u8981\u7761\u4E00\u4F1A\u513F",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5E9E\u5B89\u797A",
					photo: "https://muxi-avatar.muxixyz.com//design/panganqi.png",
					intro: "starry",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u674E\u5B50\u741B",
					photo: "https://muxi-avatar.muxixyz.com//design/lizichen.png",
					intro: "\u6CA1\u6709\u6280\u672F\u7684\u6280\u672F\u5B85..",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9F99\u661F\u6654",
					photo: "https://muxi-avatar.muxixyz.com//design/longxingye.jpg",
					intro: "\u6BCF\u5929\u90FD\u8981\u5F00\u5FC3\u7684\u5C0F\u9F99",
				},
				{
					position: "\u4E94\u4EE3\u76EE \u7EC4\u957F",
					name: "\u8C2D\u822A",
					photo: "https://muxi-avatar.muxixyz.com//design/tanhang.png",
					intro:
						"\u545C\u5566\u5566\u5566\u706B\u8F66\u7B1B\uFF0C\u968F\u7740\u5954\u817E\u7684\u9A6C\u8E44~",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9648\u4E00\u9E23",
					photo: "https://muxi-avatar.muxixyz.com//design/chenyiming.jpg",
					intro:
						"\u8BBE\u8BA1\u7EC4\u5C0F\u767D\u3002\u76EE\u6807\u662F\u6BCF\u5929\u90FD\u5F00\u5F00\u5FC3\u5FC3\u7684\uFF1B\u8BBE\u8BA1\u8BA9\u6211\u5F00\u5FC3\u3002",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5411\u8212\u4F9D\u83E1",
					photo: "https://muxi-avatar.muxixyz.com//design/xiangshuyihan.jpg",
					intro: "\u52AA\u529B\u505A\u4E00\u53EA\u4E0D\u5495\u9E1F",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5F20\u529B\u4E39",
					photo: "https://muxi-avatar.muxixyz.com//design/rai.jpg",
					intro: "\u52AA\u529B\u4E0D\u9E3D",
				},
				{
					position: "\u516D\u4EE3\u76EE \u7EC4\u957F",
					name: "\u6234\u7EA4\u840D",
					photo: "https://muxi-avatar.muxixyz.com//design/daixianping.png",
					intro: "\u597D\u597D\u5411\u4E0A\u5929\u5929\u5B66\u4E60",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u66F9\u8212\u777F",
					photo: "https://muxi-avatar.muxixyz.com//design/caoshurui.png",
					intro: "\u4ECA\u5929\u5B66\u4E60\u4E86\u5417",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u891A\u4E88\u6C50",
					photo: "https://muxi-avatar.muxixyz.com//design/chuyuxi.png",
					intro: "Be Better",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5B5F\u51E1\u7476",
					photo: "https://muxi-avatar.muxixyz.com//design/mengfanyao.png",
					intro:
						"\u5FEB\u4E50\u4E0D\u9700\u8981\u7B49\u5230\u660E\u5929\uFF0C\u4E0B\u4E00\u79D2\u90FD\u89C9\u5F97\u9065\u8FDC\uFF5E",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5B59\u70E8\u7433",
					photo: "https://muxi-avatar.muxixyz.com//design/sunyelin.png",
					intro: "Little  Foliage",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5F90\u6B22",
					photo: "https://muxi-avatar.muxixyz.com//design/xuhuan.png",
					intro: "\u60F3\u4E0A\u5B66\u4E86",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5468\u5723\u5F6C",
					photo: "https://muxi-avatar.muxixyz.com//design/zhoushengbin.png",
					intro: "\u53C9\u51FA\u53BB",
				},
				{
					position: "\u4E03\u4EE3\u76EE \u7EC4\u957F",
					name: "\u5168\u6B63",
					intro: "\u4E0D\u4F1A\u753B\u753B\u7684\u5C51\u8BBE\u8BA1",
					photo: "https://workbench-static.muxixyz.com/1635301043.4406018.jpg",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u987E\u6D77\u5B81",
					intro: ":p",
					photo:
						"https://workbench-static.muxixyz.com/1603074041.2965686.EC18F19B-7E4D-4A8C-B00C-ECA0BB6DADE0.jpeg",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u83AB\u7A0B\u6CFD",
					intro:
						"\u8BBE\u8BA1\u5C0F\u767D\uFF0C\u6C42\u5404\u4F4D\u5927\u4F6C\u5E26\u98DE\xA6\u2022'-'\u2022)\u0648\u2727",
					photo: "https://static.muxixyz.com/workbench/avatar/4.png",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u8881\u6615\u6021",
					intro: "\u4F60\u597D",
					photo: "https://static.muxixyz.com/workbench/avatar/5.png",
				},
				{
					position: "\u516B\u4EE3\u76EE \u7EC4\u957F",
					name: "\u5218\u6668\u8431",
					intro:
						"\u8981\u95EE\u6211\u559C\u6B22\u4EC0\u4E48\uFF0C\u559C\u6B22\u4EBA\u5C11\u7684\u5730\u65B9\u3002",
					photo: "https://static.muxixyz.com/workbench/avatar/9.png",
				},
				{
					position: "\u4E5D\u4EE3\u76EE \u7EC4\u957F",
					name: "\u5F20\u742A",
					intro:
						"\u76EE\u6807\u662F\u6210\u4E3A\u5168\u6808\u2014\u2014\uFF1F\uFF01",
					photo:
						"https://workbench-static.muxixyz.com/1679245329.5890565.DB71F9512A79177FDF139F968632F78F.jpg",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u53F6\u6653\u82B8",
					intro: "\u4E8C\u523A\u733F",
					photo:
						"https://workbench-static.muxixyz.com/1665375444.7576077.QQ20221010121703.jpg",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9648\u777F",
					intro: "\u5403\u597D\u559D\u597D\uFF0C\u957F\u751F\u4E0D\u8001",
					photo:
						"https://workbench-static.muxixyz.com/1665930326.42843.86257174-371D-46A7-86CD-4DFF7F165489.jpeg",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9648\u6276\u519C",
					intro: "woc\uFF0C\u519C\uFF01",
					photo: "https://static.muxixyz.com/workbench/avatar/5.png",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u6765\u5B87\u822A",
					intro: "\u597D\u7684\uFF0C\u6CA1\u95EE\u9898\uFF0C\u9A6C\u4E0A\u6539",
					photo: "https://workbench-static.muxixyz.com/1665802252.3330014.png",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u8D75\u73C2\u6167",
					intro:
						"\u5B66\u5F1F\u5B66\u59B9\u5FEB\u6765\uFF01\u8BA9\u6211\u5543\u5543\uFF01",
					photo:
						"https://workbench-static.muxixyz.com/1666185891.647377.20C450EB47F928BC68542118B3FC3F5E.png",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u8BB8\u84DD\u83C1",
					intro:
						"\u52AA\u529B\u8DDF\u8FDB\u524D\u8F88\u811A\u6B65\u7684\u5927\u5B66\u751F",
					photo: "https://static.muxixyz.com/workbench/avatar/13.png",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9648\u745C\u4F26",
					intro:
						"\u4E00\u4E2A\u6C89\u9ED8\u7684\u90CE\uFF0C\u6BD4\u8F83\u968F\u5FC3\u6240\u6B32",
					photo: "https://muxi-avatar.muxixyz.com/design%3Achenyulun.jpg",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u4E01\u9F0E\u5CF0",
					intro:
						"\u6211\u53EB\u4E01\u9F0E\u5CF0\uFF0C\u70ED\u7231UI\u8BBE\u8BA1",
					photo: "https://muxi-avatar.muxixyz.com/design%3Adingdingfeng.jpg",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u674E\u7545\u9F99",
					intro: "\u559C\u6B22\u6392\u7403\u7684\u8BBE\u8BA1\u5C11\u5E74.....",
					photo: "https://muxi-avatar.muxixyz.com/design%3Alichanglong.jpg",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5218\u7FE0\u8776",
					intro: "\u52AA\u529B\u6210\u4E3A\u597D\u8BBE\u8BA1ing\uFF5E",
					photo: "https://muxi-avatar.muxixyz.com/design%3Aliucuidie.jpg",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9A6C\u4E3D\u654F",
					intro: "better",
					photo: "https://muxi-avatar.muxixyz.com/design%3Amalimin.jpg",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u65F6\u4E3D\u9759",
					intro: "\u6700\u597D\u7684\u72B6\u6001\u662F\u4FDD\u6301\u8FDB\u6B65",
					photo: "https://muxi-avatar.muxixyz.com/design%3Ashilijing.jpg",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u4F59\u4F73\u9896",
					intro:
						"\u6211\u6765\u81EA\u6570\u5B57\u5A92\u4F53\u6280\u672F\u4E13\u4E1A~",
					photo: "https://muxi-avatar.muxixyz.com/design%3Ayujiaying.jpg",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u8D75\u5B87\u8F69",
					intro: "\u6B63\u5728\u52AA\u529B\u5411\u6280\u672F\u6808\u8FDB\u53D1",
					photo: "https://muxi-avatar.muxixyz.com/design%3Azhaoyuxuan.jpg",
				},
			],
		},
		{
			tag: "\u4EA7\u54C1",
			people: [
				{
					position: "\u5323\u5B50\u5143\u8001 \u7EC4\u957F",
					name: "\u6797\u6587\u96C5",
					photo: "https://muxi-avatar.muxixyz.com//product/linwenya.png",
					intro:
						"\u597D\u7684\u4EA7\u54C1\u5E94\u662F\u8FDE\u63A5\u4EBA\u5E76\u8BA9\u5176\u4EA7\u751F\u66F4\u591A\u53EF\u80FD",
				},
				{
					position: "\u4E8C\u4EE3\u76EE \u7EC4\u957F",
					name: "\u6768\u54F2\u76C8",
					photo: "https://muxi-avatar.muxixyz.com//product/yangzheying.jpg",
					intro:
						"\u81EA\u6211\u5DEE\u522B\u5316  \u968F\u5FC3\u4E0D\u9010\u6D41",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u67E5\u601D\u7FBD",
					photo: "https://static.muxixyz.com/workbench/avatar/3.png",
					intro: "\u521A\u597D\u5B66\u4E60\u4E0D\u98DF\u4EBA\u95F4\u70DF\u706B",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u738B\u6DB5",
					photo: "https://muxi-avatar.muxixyz.com//product/wanghan.jpg",
					intro: "\u660E\u65E5\u6C60\u5858\u662F\u7EFF\u8335",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9648\u96C5\u6F9C",
					photo: "https://muxi-avatar.muxixyz.com//product/chenyalan.jpg",
					intro: "Only the paraniod survived. ",
				},
				{
					position: "\u4E09\u4EE3\u76EE \u7EC4\u957F",
					name: "\u8305\u5FC3\u96E8",
					photo: "https://muxi-avatar.muxixyz.com//product/maoxinyu.jpg",
					intro: "Just be happy.",
				},
				{
					position: "\u4E94\u4EE3\u76EE \u4E3B\u7BA1 \u7EC4\u957F",
					name: "\u8D75\u601D\u6377",
					photo: "https://muxi-avatar.muxixyz.com//product/zhaosijie.jpg",
					intro:
						"\u4E0D\u60F3\u5B66\u6280\u672F\u7684\u4EA7\u54C1\u4E0D\u662F\u597D\u54B8\u9C7C\u3002",
				},
				{
					position: "\u56DB\u4EE3\u76EE \u7EC4\u957F",
					name: "\u891A\u5B87\u98DE",
					photo: "https://muxi-avatar.muxixyz.com//product/chuyufei.jpg",
					intro: "\u559C\u6B22\u6253\u7BEE\u7403\u7684\u6C99\u96D5",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u674E\u7EAA\u6B23",
					photo: "https://muxi-avatar.muxixyz.com//product/lijixin.png",
					intro: "\u53BB\u5F80\u5927\u897F\u5317",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u674E\u6797\u6C9B",
					photo: "https://muxi-avatar.muxixyz.com//product/lilinpei.png",
					intro: "\u6211\u6C38\u8FDC\u559C\u6B22\u9AD8\u7B49\u6570\u5B66",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5B5F\u9555\u5A9B",
					photo: "https://muxi-avatar.muxixyz.com//product/mengrongyuan.jpg",
					intro: "\u9A84\u50B2\u4E14\u987D\u56FA\u7684\u5C0F\u5B5F",
				},
				{
					position: "\u516D\u4EE3\u76EE \u7EC4\u957F",
					name: "\u5B59\u5965",
					photo: "https://muxi-avatar.muxixyz.com//product/sunao.jpg",
					intro: "\u7EDE\u5C3D\u8111\u6C41\uFF0C\u539F\u5730\u7206\u70B8",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u738B\u96E8\u6B23",
					photo: "https://muxi-avatar.muxixyz.com//product/wangyuxin.jpg",
					intro: "\u5929\u5929\u5F00\u5FC3",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9093\u8FDC\u661F",
					photo:
						"https://workbench-static.muxixyz.com/1626163225.3726187.69b4-ixkvvuc3151576.jpg",
					intro: "\u81EA\u5F8B\u5373\u9AD8\u7EA7",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u6731\u529B\u4EE4",
					photo: "https://workbench-static.muxixyz.com/1612792884.067052.png",
					intro: "\u6D3B\u7740",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u90ED\u5B50\u4EAE",
					photo:
						"https://workbench-static.muxixyz.com/1610870983.8439746.img-8b0107c3c7a97c74b537eaebb3f76ab0_2.jpg",
					intro: "\u767D\u656C\u4EAD\u516B\u62AC\u5927\u8F7F\u7684\u592B\u4EBA",
				},
				{
					position: "\u4E03\u4EE3\u76EE \u7EC4\u957F",
					name: "\u7A0B\u6587\u7487",
					photo: "https://static.muxixyz.com/workbench/avatar/6.png",
					intro: "\u5B8C\u6210\u597D\u8FC7\u5B8C\u7F8E",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u738B\u5BB6\u73FA",
					photo: "https://static.muxixyz.com/workbench/avatar/3.png",
					intro: "\u6B64\u4EBA\u6765\u8FC7",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u6797\u9091\u591A",
					photo:
						"https://workbench-static.muxixyz.com/1634571021.3779593.QQ20171003151221.jpg",
					intro:
						"\u8D5E\u7F8E\u5E72\u996D\uFF0C\u4F60\u662F\u5728\u5929\u4E0A\u7684\uFF0C\u4F60\u662F\u81EA\u6709\u6C38\u6709",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9A86\u7D2B\u76C8",
					photo: "https://static.muxixyz.com/workbench/avatar/12.png",
					intro:
						"\u591A\u601D\u8003\uFF0C\u591A\u6269\u5C55\u81EA\u6211\u8FB9\u754C\u3002",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u97E9\u91D1\u5A1C",
					photo:
						"https://workbench-static.muxixyz.com/1643212743.6831107.20220125203027.jpg",
					intro: "\u55E8\u5BB3\u55E8!",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u803F\u96C5\u67D4",
					photo:
						"https://workbench-static.muxixyz.com/1637409994.5615695.heieh1.jpg",
					intro: "\u5DF4\u62C9\u5DF4\u62C9",
				},
				{
					position: "\u516B\u4EE3\u76EE \u7EC4\u957F",
					name: "\u674E\u5FE0\u6849",
					photo:
						"https://workbench-static.muxixyz.com/1633877041.2810264.IMG_20210912_003750.jpg",
					intro:
						"\u8BD5\u56FE\u5C06\u751F\u6D3B\u8FC7\u5F97\u591A\u59FF\u591A\u5F69~(\uFF5E\uFFE3\u25BD\uFFE3)\uFF5E",
				},
				{
					position: "\u4E5D\u4EE3\u76EE \u7EC4\u957F",
					name: "\u5F20\u96C5",
					photo:
						"https://workbench-static.muxixyz.com/1669470225.246666.365AAB60-BF4E-4A23-AF17-80D6C3E56F13.jpeg ",
					intro: "\u5077\u5F97\u6D6E\u751F\u534A\u65E5\u95F2",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5F20\u8212\u6DB5",
					photo: "https://static.muxixyz.com/workbench/avatar/9.png",
					intro: "\u5C2C\u804A\u5C0F\u80FD\u624B",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u674E\u66C8\u66C8",
					photo:
						"https://workbench-static.muxixyz.com/1673625460.0780535.QQ20230113235659.jpg",
					intro:
						"\u6211\u6709\u4E00\u4E2A\u7EDD\u5999\u7684\u70B9\u5B50\uFF01\u9700\u8981\u8FC7\u5BA1\u6838\uFF1F\u5443\uFF0C\u90A3\u6CA1\u6709\u4E86",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u6881\u7545",
					photo:
						"https://workbench-static.muxixyz.com/1665289311.3582513.165A9FEA-E901-4053-946D-A67E1413DA56.jpeg",
					intro: "\u9690\u85CF\u91CE\u5FC3 \u6084\u6084\u53D1\u5149",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5510\u6B46\u96C5",
					photo:
						"https://workbench-static.muxixyz.com/1665883263.22128.DA3BA84B-EB2C-4C4A-A71E-47BAA3CEA9C9.jpeg",
					intro: "\u8111\u6D1E\u5168\u5B87\u5B99\u6F02\u79FB",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u67CF\u4F73\u6167",
					photo: "https://muxi-avatar.muxixyz.com/product%3Abaijiahui.jpg",
					intro:
						"\u620F\u79F0\u201C\u6478\u9C7C\u5F00\u67CF\u201D\uFF08\u4F46\u662F\u5F88\u5C11\u80FD\u6478\u5230\u9C7C\u2026\uFF09\u3002\u559C\u6B22\u7684\u683C\u8A00\u662F\u201C\u4EBA\u751F\u5373\u4EA7\u54C1\u201D\u3002\u91CE\u5FC3\u52C3\u52C3\uFF0C\u594B\u53D1\u5411\u4E0A\uFF01",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u6C60\u82E5\u8431",
					photo: "https://muxi-avatar.muxixyz.com/product%3Achiruoxuan.jpg",
					intro: "\u6781\u9650\u52A0\u73ED\u7684\u4EA7\u54C1",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u7FC1\u4F1F\u6069",
					photo: "https://muxi-avatar.muxixyz.com/product%3Awweien.jpg",
					intro: "\u5B66\u4E60\u505A\u51FA\u4E00\u6B3E\u597D\u4EA7\u54C1",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u8BB8\u6708\u7EA2",
					photo: "https://muxi-avatar.muxixyz.com/product%3Axuyuehong.jpg",
					intro:
						"\u201C\u5E78\u798F\u7684\u751F\u6D3B\uFF0C\u5C31\u662F\u6BCF\u5929\u6709\u4E8B\u505A\uFF0C\u6709\u4EBA\u7231\uFF0C\u6709\u671F\u5F85\u3002\u201D",
				},
			],
		},
		{
			tag: "\u8FD0\u8425",
			people: [
				{
					position: "todo",
					name: "todo",
					photo: "https://muxi-avatar.muxixyz.com//android/fengminchao.jpg",
					intro: "todo",
				},
			],
		},
		{
			tag: "\u5B89\u5353",
			people: [
				{
					position: "\u4E00\u4EE3\u76EE \u7EC4\u957F",
					name: "\u51AF\u654F\u8D85",
					photo: "https://muxi-avatar.muxixyz.com//android/fengminchao.jpg",
					intro:
						"\u6211\u7684\u819C\u6CD5\u5C06\u4F1A\u628A\u4F60\u6495\u6210\u788E\u7247",
				},
				{
					position: "\u5E55\u540E\u9ED1\u624B",
					name: "2BAB",
					photo: "https://muxi-avatar.muxixyz.com//android/2bab.png",
					intro: "Android Developer",
				},
				{
					position: "\u4E8C\u4EE3\u76EE \u7EC4\u957F",
					name: "\u5E95\u886B\u4E0D\u4E8C",
					photo: "https://static.muxixyz.com/muxisite/avartar/xy.jpeg",
					intro:
						"\u6211\u5DF2\u7ECF\u51B3\u5B9A\u5403\u81EA\u5DF1\u559C\u6B22\u7684\u4E1C\u897F,\u8FC7\u77ED\u547D\u7684\u4EBA\u751F\u4E86",
				},
				{
					position: "\u4E09\u4EE3\u76EE \u7EC4\u957F",
					name: "\u77F3\u6CFD\u8FDC",
					photo: "https://muxi-avatar.muxixyz.com//android/shizeyuan.jpg",
					intro: "YOU ARE NOT BRAVE, MAN ARE BRAVE",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u590F\u73AE\u851A",
					photo: "https://muxi-avatar.muxixyz.com//android/xiaweiwei.jpg",
					intro:
						"\u8FD9\u4E2A\u4EBA\u5F88\u61D2\uFF0C\u8FD8\u6CA1\u6709\u81EA\u5DF1\u7684\u7B80\u4ECB\u54E6\uFF5E",
				},
				{
					position: "\u56DB\u4EE3\u76EE \u7EC4\u957F",
					name: "\u8D75\u5F1F\u53D1",
					photo: "https://muxi-avatar.muxixyz.com//android/zhaodifa.png",
					intro: "I am a slow walker , but i never walk backwards .",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5F6D\u654F\u60A6",
					photo: "https://muxi-avatar.muxixyz.com//android/pengminyuejpg",
					intro:
						"\u505A\u4EFB\u4F55\u81EA\u5DF1\u89C9\u5F97\u6709\u610F\u4E49\u7684\u4E8B",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u738B\u9E4F\u5B87",
					photo: "https://muxi-avatar.muxixyz.com//android/wangpengyu.jpeg",
					intro:
						"\u6211\u662F\u8981\u52B1\u5FD7\u6210\u4E3A\u7F16\u7A0B\u754C\u7684\u6885\u897F\u7684\u7537\u4EBA",
				},
				{
					position: "\u4E94\u4EE3\u76EE \u7EC4\u957F",
					name: "\u949F\u4F0A\u51E1",
					photo: "https://muxi-avatar.muxixyz.com//android/zhongyifan.jpg",
					intro: "\u6572\u4EE3\u7801\u6162\u534A\u62CD\u7684\u602A\u5496",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5218\u7ADE\u6797",
					photo: "https://muxi-avatar.muxixyz.com//android/liujinglin.jpg",
					intro:
						"\u8FD9\u4E2A\u4EBA\u5F88\u61D2\uFF0C\u4EC0\u4E48\u90FD\u6CA1\u7559\u4E0B",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u6E29\u946B",
					photo: "https://muxi-avatar.muxixyz.com//android/wenxin.jpg",
					intro: "\u7CCA\u6D82\u4E16\u754C\u660E\u767D\u4EBA",
				},
				{
					position: "\u516D\u4EE3\u76EE \u7EC4\u957F",
					name: "\u8521\u52A0\u660E",
					photo: "https://muxi-avatar.muxixyz.com//android/caijiaming.jpg",
					intro: "\u56FD\u9645\u77E5\u540D\u9000\u5802\u9F13\u9F13\u624B",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u6210\u827E",
					photo: "https://muxi-avatar.muxixyz.com//android/chengai.jpg",
					intro: "rp++",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u53F2\u9896",
					photo: "https://muxi-avatar.muxixyz.com//android/shiying.jpg",
					intro: "\u4F46\u884C\u597D\u4E8B\uFF0C\u83AB\u95EE\u524D\u7A0B",
				},
				{
					position: "\u4E03\u4EE3\u76EE \u7EC4\u957F",
					name: "\u9093\u7B56\u6E1D",
					photo: "https://static.muxixyz.com/workbench/avatar/6.png",
					intro: "\u5B89\u5353\u51B2\u9E2D!",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u6731\u73C2\u8499",
					photo:
						"https://workbench-static.muxixyz.com/1626050790.0901809.QQ20210712084552.jpg",
					intro: "\u4E00\u4E2A\u6709\u7406\u60F3\u7684\u5E9F\u7269",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9EC4\u6B23",
					photo:
						"https://workbench-static.muxixyz.com/1618149602.7430627.01aadf5f60bb2311013e458453abbb.jpg1280w_1l_2o_100sh.jpg",
					intro: "\u73B0\u5728\u60F3\u5F00\u53D1\u6E38\u620F",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9EC4\u96C5\u8389",
					photo:
						"https://workbench-static.muxixyz.com/1619794486.041106.QQ20210430224853.jpg",
					intro: "\u6478\u9C7C\u5927\u738B(\uFF61\xEC _ \xED\uFF61)",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u90B1\u4E91\u8C6A",
					photo:
						"https://workbench-static.muxixyz.com/1602346419.857695.1602346319933.jpg",
					intro: "\u6211\u4E0D\u77E5\u9053QwQ",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5218\u6631\u6B23",
					photo:
						"https://workbench-static.muxixyz.com/1601896411.917259.IMG_20201005_191246.jpg",
					intro: "\u65E0",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u64CD\u8F89\u751F",
					photo: "https://static.muxixyz.com/workbench/avatar/3.png",
					intro:
						"\u4EBA\u95F4\u9A84\u9633\u6B63\u597D\uFF0C\u98CE\u8FC7\u6797\u68A2\uFF0C\u5F7C\u65F6\u4ED6\u4EEC\u6B63\u5F53\u5E74\u5C11\u3002",
				},
				{
					position: "\u516B\u4EE3\u76EE \u7EC4\u957F",
					name: "\u949F\u5B87",
					photo:
						"https://workbench-static.muxixyz.com/1633969486.2371376.olhjhwwtw4c7llf67mu6o652.jpg",
					intro: "\u65E0",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u63ED\u4FCA\u5955",
					photo:
						"https://workbench-static.muxixyz.com/1635258686.1368716.QQ20211026223040.jpg",
					intro: "\u5B89\u5353\uFF01\u5B89\u5353\uFF01",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5415\u4E91\u5FD7",
					photo: "https://workbench-static.muxixyz.com/1636556548.195078.jpg",
					intro: "\u503C\u5F97\u6709\u6240\u671F\u5F85\uFF01",
				},
				{
					position: "\u4E5D\u4EE3\u76EE \u4E3B\u7BA1",
					name: "\u5415\u6D35",
					photo:
						"https://workbench-static.muxixyz.com/1666787333.0614903.20220908201159.jpg",
					intro: "\u4E00\u952E\u67E5\u8BE2\u7CBE\u795E\u72B6\u6001",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u738B\u794E\u535A",
					photo:
						"https://workbench-static.muxixyz.com/1684942968.6471434.DM_20230524231009_001.jpg",
					intro: "2022\u6570\u5B57\u5A92\u4F53\u6280\u672F",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u6797\u709C\u660A",
					photo:
						"https://workbench-static.muxixyz.com/1665441665.2291903.93048000.jpg ",
					intro:
						"\u4E8B\u5B89\u5353\u7EC4\uFF0C\u559C\u6B22\u97F3\u6E38\uFF0C\u5174\u8DA3\u52A0\u5165\u6B64\u5730XD",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u9648\u656C\u6587",
					photo:
						"https://workbench-static.muxixyz.com/1665928150.6903372.QQ20221004224608.png",
					intro: "\u65E0",
				},
				{
					position: "\u4E5D\u4EE3\u76EE \u7EC4\u957F",
					name: "\u674E\u6CFD\u7FA4",
					photo:
						"https://workbench-static.muxixyz.com/1665677678.1391776.srchttp___inews.gtimg.com_newsapp_bt_0_13895187735_1000referhttp___inews.gtimg.webp",
					intro: "\u4E3E\u4E16\u7F55\u89C1\u7684\u6446\u5B50",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5468\u9526",
					photo: "https://static.muxixyz.com/workbench/avatar/5.png",
					intro: "\u6446\u70C2\u4EBA\u7684\u6446\u70C2\u81EA\u6211\u4ECB\u7ECD",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u7126\u65B0\u4EA8",
					photo: "https://muxi-avatar.muxixyz.com/android%3Ajiaoxinheng.png",
					intro:
						"\u5E7F\u544A\u4F4D\u62DB\u79DF\u55F7\uFF0C\u522B\u4E0D\u8BC6\u62AC\u4E3E\u55F7",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u5B54\u5609\u4E50",
					photo: "https://muxi-avatar.muxixyz.com/android%3Akongjiale.png",
					intro: "\u7537\u7684",
				},
				{
					position: "\u7EC4\u5458",
					name: "\u90D1\u58F9\u817E",
					photo: "https://muxi-avatar.muxixyz.com/android%3Azhengyiteng.jpg",
					intro: "\u5B89\u5353\u7EC4\u6210\u5458",
				},
			],
		},
	],
	Zd = (e) => {
		const [t, n] = z.exports.useState(!0),
			u = "http://static.muxixyz.com/workbench/avatar/14.png",
			r = (i) => {
				t && (n(!1), (i.target.src = u));
			};
		let o = "rgb(170, 170, 170)";
		return (
			e.info.position === "\u7EC4\u957F"
				? (o = "rgb(253, 172, 31)")
				: e.info.position !== "\u7EC4\u5458" &&
					(o = "linear-gradient(to right, rgb(29,99,158), rgb(57,179,161))"),
			v("div", {
				className: "intro-card-father",
				children: j("div", {
					className: "intro-card",
					children: [
						v("div", {
							className: "intro-photo",
							children: v("img", {
								src: e.info.photo,
								ref: (i) => {},
								onError: r,
							}),
						}),
						v("div", {
							className: "intro-position",
							style: { background: o },
							children: e.info.position,
						}),
						j("div", {
							className: "intro-name",
							children: ["\u59D3\u540D\uFF1A", e.info.name],
						}),
						j("div", {
							className: "intro-tag",
							children: ["\u7EC4\u522B\uFF1A", e.tag],
						}),
						v("div", {
							className: "intro-content",
							children: j("div", {
								className: "intro-words-container",
								children: [
									v("div", {
										className: "intro-words",
										children: "\u4ECB\u7ECD",
									}),
									e.info.intro,
								],
							}),
						}),
					],
				}),
			})
		);
	},
	qd = (e) => {
		const t = _c,
			[n, u] = z.exports.useState(e.current),
			r = (o) => {
				e.select(o), u(o);
			};
		return v("div", {
			className: "intro-controller",
			children: v("div", {
				className: "controller-containner",
				children: v("ul", {
					className: "intro-tags",
					children: t.map((o, i) =>
						v(
							"li",
							{
								children: j("a", {
									className: `${n == i ? "onTag" : "notOnTag"}`,
									onClick: r.bind(void 0, i),
									children: [o.tag, "\u7EC4"],
								}),
							},
							i,
						),
					),
				}),
			}),
		});
	},
	bd = () => {
		const e = _c,
			[t, n] = z.exports.useState("\u540E\u7AEF"),
			[u, r] = z.exports.useState(0),
			o = (i) => {
				r(i), n(e[i].tag);
			};
		return j("div", {
			children: [
				v(Ac, {}),
				v("div", {
					className: "intro-card-containner",
					children: e[u].people.map((i, l) => v(Zd, { info: i, tag: t }, l)),
				}),
				v(qd, { select: o, current: u }),
			],
		});
	};
function em() {
	return j("div", { children: [v(zr, {}), v(bd, {})] });
}
const tm = [
	{ path: "/", element: v(Md, {}) },
	{ path: "/intro", element: v(Qd, {}) },
	{ path: "/product", element: v(Jd, {}) },
	{ path: "/member", element: v(em, {}) },
	{ path: "/join", element: v(Gd, {}) },
];
function nm() {
	const e = kd(tm);
	return j("div", {
		className: "App",
		children: [
			e,
			v(Dd, {}),
			v("div", {
				className: "beian",
				children: v("a", {
					href: "http://www.beian.miit.gov.cn/",
					children: "\u9102ICP\u590719024133\u53F7",
				}),
			}),
		],
	});
}
oo.createRoot(document.getElementById("root")).render(
	v(Yc.StrictMode, { children: v(_d, { children: v(nm, {}) }) }),
);
