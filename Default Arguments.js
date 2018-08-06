/**
 * Default Arguments
 * 闭包！！！重要，返回一个函数
 */

Function.prototype.getParamNames = function () {
    var fnStr = this.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, '');
    return fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(/([^\s,]+)/g) || [];
}

function defaultArguments(func, params) {
    if (!params) return func;
    var paramNames = func.getParamNames();
    var f = function () {
        var args = [].slice.call(arguments);
        return func.apply(null, args.concat(paramNames.map(function (p) {
            return params[p];
        }).slice(args.length)));
    };
    f.getParamNames = function () {
        return paramNames;
    };
    return f;
}


function defaultArguments(func, params) {
    var names = func.names || func.toString()
        .replace(/\/\/.*$|\/\*.*?\*\/|\s/gm, '')
        .match(/(?:[\w]+(?:,[\w]+)*)?(?=\))/m)[0].split(',');

    var detour = function () {
        var input = arguments;
        return func.apply(this, names.map(function (val, i) {
            return i < input.length ? input[i] : params[names[i]];
        }));
    };

    detour.names = names;
    return detour;
}