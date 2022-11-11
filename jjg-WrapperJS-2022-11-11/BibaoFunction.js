var MathTool = (function () {
        var pi = Math.PI; //Cesium.Math.RADIANS_PER_DEGREE

        function isZero(value) {
            if (value === 0) {
                return true;
            }
            return false;
        }

        function _() {
        }
        _.d = function (val) {
            if(isZero(val))
                return pi;
            return val * 10;
        }
        _.e = function (val) {
            console.log('MathTool中的e方法：'+val);
        }

        _.f = function (t,r) {
            let s = t + r;
            console.log('MathTool中的f方法：'+ s);
        }

        return _;
    }
)();