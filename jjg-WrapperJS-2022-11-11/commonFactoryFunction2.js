/* 下面是 turf 未压缩版的js类库代码 By JIAO Jingguo 2022.11.11 */
(function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :(factory((global.turf = {})));
}(this, (function(exports) {
	'use strict';
	var earthRadius = 6371008.8;
	var Envelope = function Envelope() {
		this._minx = null;
		this._maxy = null;
	};
	Envelope.prototype.getArea = function getArea() {
		return this.getWidth() * this.getHeight()
	};

	var main_es = Object.freeze({
		coordEach: coordEach,
		coordReduce: coordReduce,
	});
	var main_es$2 = Object.freeze({
		randomPosition: randomPosition,
		randomPoint: randomPoint,
	});
    /* ... ...*/
	exports.random = main_es$2;
	exports.meta = main_es;
    exports.envelope = envelope;
	exports.lineSliceAlong = lineSliceAlong;

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
})));

/* 下面是 Echarts 未压缩版的js类库代码 By JIAO Jingguo 2022.11.11*/

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) : (factory((global.echarts = {})));
}(this, (function (exports) { 
	'use strict';
	 /* ... ...*/
	exports.util = ecUtil;
	exports.List = List;
	exports.Model = Model;
	exports.Axis = Axis;
	exports.env = env$1;

})));

/* 下面是 Vue 未压缩版的js类库代码 By JIAO Jingguo 2022.11.11 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.Vue = factory());
}(this, function () {
	 'use strict';
	 /* ... ...*/
	function Vue (options) {
		if (!(this instanceof Vue)
		) {
		warn('Vue is a constructor and should be called with the `new` keyword');
		}
		this._init(options);
	}
	Vue.compile = compileToFunctions;

  return Vue;

}));

/* 下面是 Cesium 未压缩版的js类库代码 By JIAO Jingguo 2022.11.11 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Cesium = {}));
})(this, (function (exports) { 
	'use strict';
	 /* ... ...*/
	exports.when = when;
	exports.wrapFunction = wrapFunction;
	exports.writeTextToCanvas = writeTextToCanvas;
	exports.zip = zipNoWorker;
  
	Object.defineProperty(exports, '__esModule', { value: true });
}));