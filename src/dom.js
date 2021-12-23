window.dom = {
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector);
    },

    style(node, name, val) {
        if (arguments.length === 3) {
            node.style[name] = val;
        }
        else if (arguments.length === 2) {
            if (typeof name === 'string') {
                return node.style[name];
            }
            else if (name instanceof Object) {
                let object = name;
                for (let key in object) {
                    node.style[key] = object[key];
                }
            }
        }
    },

    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i]);
        }
    }
}

