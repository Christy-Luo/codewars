/**
 * Breadcrumb Generator
 */

function generateBC(url, separator) {
    var arr = url.replace(/((\/index)?\.(html?|(ph|as)p))|(\?.+|#.+|https?:\/\/|\/$)/g, '').split('/'),
        link = '';
    return arr.map(function (v, i, a) {
        if (a.length === 1) {
            return '<span class="active">HOME</span>'
        } else if (i === a.length - 1) {
            return '<span class="active">' + acronymize(v) + '</span>';
        } else if (i === 0) {
            return '<a href="/">HOME</a>';
        } else {
            link = link ? link + '/' + v : v;
            return '<a href="/' + link + '/">' + acronymize(v) + '</a>';
        }
    }).join(separator);
}

function acronymize(str) {
    var removeList = ["the", "of", "in", "from", "by", "with", "and", "or", "for", "to", "at", "a"],
        re = new RegExp("^(" + removeList.join('|') + ")$"),
        newStr = '';
    if (str.length > 30) {
        str.split('-').forEach(v => !re.test(v) ? newStr += v[0] : undefined);
        return newStr.toUpperCase();
    } else {
        return str.replace(/-/g, ' ').toUpperCase();;
    }
}

function generateBC(url, separator) {
    var ignore = ["THE", "OF", "IN", "FROM", "BY", "WITH", "AND", "OR", "FOR", "TO", "AT", "A"],
        ref = ['<a href="', '">', '</a>', '<span class="active">', '</span>'];
    var arr = url.split("/"),
        crumbs = []
    arr[arr.length - 1].includes("index") ? arr.pop() : arr;
    arr[0].includes("http") ? arr.shift() : arr;
    arr = arr.filter(function (item) {
        return (item.length > 0);
    })
    var ans = arr.map(function (array, index) {
        if (array.includes("?")) {
            array = array.slice(0, array.lastIndexOf("?"));
        }
        if (array.includes("#")) {
            array = array.slice(0, array.lastIndexOf("#"));
        }
        if (array.includes(".")) {
            array = array.slice(0, array.lastIndexOf("."));
        }
        var name = (index === 0) ? "HOME" : array.toUpperCase();
        if (index === 0) {
            str = "/"
        } else {
            crumbs.push(array);
            str = "/" + crumbs.join("/") + "/"
        }

        if (name.length > 30 && name.includes("-")) {
            name = name.split("-").map(function (string) {
                if (ignore.indexOf(string) < 0) return string[0]
            }).join("")
        } else if (name.length <= 30 && name.includes("-")) {
            name = name.split("-").join(" ")
        }

        if (index == arr.length - 1) {
            return (ref[3] + name + ref[4]);
        } else {
            return (ref[0] + str + ref[1] + name + ref[2]);
        }
    });

    return ans.join(separator);
}