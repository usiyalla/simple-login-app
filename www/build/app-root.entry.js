import { r as registerInstance, h } from './index-6de32e7e.js';

const appRootCss = "header{background:#5851ff;color:white;height:56px;display:flex;align-items:center;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26)}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}.container{height:100%}.routes-container{height:100%}";

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const AppRoot = class {
    // @Listen('authentication')
    // authenticationHandler(event){
    //   localStorage.setItem('auth', 'yes');
    //   this.history.replace('/adfdsfs', {});
    // }
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const PrivateRoute = (_a) => {
            var { component } = _a, props = __rest(_a, ["component"]);
            const Component = component;
            const redirectUrl = '/login';
            return (h("stencil-route", Object.assign({}, props, { routeRender: (props) => {
                    console.log(props.failureRedirect);
                    if (localStorage.getItem('authenticated') === 'yes') {
                        return h(Component, Object.assign({}, props, props.componentProps));
                    }
                    return h("stencil-router-redirect", { url: redirectUrl });
                } })));
        };
        return (h("div", { class: "container" }, h("main", { class: "routes-container" }, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h(PrivateRoute, { url: '/:name/gallery/:id', component: 'app-image', exact: true }), h(PrivateRoute, { url: '/:name/gallery', component: 'user-gallery', exact: true }), h(PrivateRoute, { url: '/user/:name', component: 'app-user', exact: true }), h("stencil-route", { url: '/login', component: 'app-login', exact: true }), h(PrivateRoute, { url: '/', component: 'app-home' }))))));
    }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
