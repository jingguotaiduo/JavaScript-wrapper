// 第一种写法
(function() {
    'use strict';
    // Here can write class
    // Here can write usual function
    "use strict"; 
    function n(t) {
        this.length = t.length,
        this.topRadius = t.topRadius,
        this.bottomRadius = t.bottomRadius,
        this.slices = t.slices ? t.slices : 64,
        this.zReverse = t.zReverse
    }
    Object.defineProperty(Cesium, "__esModule", {
        value: !0
    }),
    Cesium.CylinderGeometry = void 0;
    Object.defineProperties(n.prototype, {
        trackedEntity: {
            get: function () {
                return this._trackedEntity
            },
            set: function (t) {
                this._trackedEntity = t
            }
        },
        color: {
            get: function () {
                return this.defaultColor
            },
            set: function (t) {
                this.defaultColor = t
            }
        },
        lineColor: {
            get: function () {
                return this.defaultLineColor
            },
            set: function (t) {
                this.defaultLineColor = t
            }
        },
        show: {
            get: function () {
                return this._show
            },
            set: function (t) {
                this._show = t
            }
        },
        outline: {
            get: function () {
                return this._outline
            },
            set: function (t) {
                this._outline = t, this.updateGeometry()
            }
        },
        top: {
            get: function () {
                return this._topShow
            },
            set: function (t) {
                this._topShow = t, this.updateGeometry()
            }
        },
        topOutline: {
            get: function () {
                return this._topOutline
            },
            set: function (t) {
                this._topOutline = t, this.updateGeometry()
            }
        },
        groundArea: {
            get: function () {
                return this._groundArea
            },
            set: function (t) {
                this._groundArea = t, this.addGroundAreaEntity(this._groundArea)
            }
        },
        angle: {
            get: function () {
                return this._angle
            },
            set: function (t) {
                this._angle = t, this.updateGroundCircleRadius(), this.updateGeometry()
            }
        },
        radius: {
            get: function () {
                return this._radius
            },
            set: function (t) {
                this._radius = t, this.updateGroundCircleRadius(), this.updateGeometry()
            }
        },
        heading: {
            get: function () {
                return this._rotation.heading
            },
            set: function (t) {
                this._rotation.heading = t
            }
        },
        pitch: {
            get: function () {
                return this._rotation.pitch
            },
            set: function (t) {
                this._rotation.pitch = t
            }
        },
        roll: {
            get: function () {
                return this._rotation.roll
            },
            set: function (t) {
                this._rotation.roll = t
            }
        },
        position: {
            get: function () {
                return this._position
            }, set: function (t) {
                this._position = t
            }
        }
    }),
    n.fromAngleAndLength = function (t, e, i) {
        return t = Cesium.Math.toRadians(t),
            new n({
                topRadius: Math.tan(t) * e / 2,
                bottomRadius: 0,
                length: e,
                zReverse: i
            })
    },
    n.prototype.remove = function () {
        this.viewer.scene.primitives.remove(this), this.groundAreaEntity && this.viewer.entities.remove(this.groundAreaEntity)
    },
    Cesium.CylinderGeometry = n
})()

// var El = Object.freeze({
//     __proto__: null,
//     BoxGeometry: $i,
//     CapsuleGeometry: Co,
// });

// 第二种写法
var CommonJJG =(()=>{
    this.M = 6400;
    this.N = 3500;

    //方法一
    var e = {};
    e.a = function() {

    },
    e.b = function() {

    }
    return e;
    // 方法二 比较推荐，性价比高
    function _() {
    }
    _.GetDeltaDegree = function () {
        return DeltaDegree;
    }
    _.GetDeltaRadian = function () {
        return DeltaRadian;
    }
    _.prototype.updateCartesianPositionColor = function (cartesians, colors) {
    }
    return _;
})();


(function (){
    function a(e,t){
        return n(e,Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromQuaternion(t,h),e,f))
    }
    function n(e,t){
        var i=Cesium.Transforms.eastNorthUpToFixedFrame(e,Cesium.Ellipsoid.WGS84,new Cesium.Matrix4),
        a=Cesium.Matrix4.multiply(Cesium.Matrix4.inverse(i,new Cesium.Matrix4),t,new Cesium.Matrix4),
        n=Cesium.Matrix4.getRotation(a,new Cesium.Matrix3),
        r=Cesium.Quaternion.fromRotationMatrix(n);
        return Cesium.HeadingPitchRoll.fromQuaternion(r)
    }
    Cesium.Matrix4.getHeadingPitchRollByOrientation=a;
})()