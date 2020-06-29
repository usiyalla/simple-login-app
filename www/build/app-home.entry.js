import { r as registerInstance, h } from './index-6de32e7e.js';

const appHomeCss = ".app-home{padding:10px}button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;transition:all .15s ease;cursor:pointer}button:hover{box-shadow:0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);transform:translateY(1px)}";

const AppHome = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: 'app-home' }, h("p", null, "Home Page"), h("stencil-route-link", { url: '/user/adil' }, h("button", null, "Profile page")), h("stencil-route-link", { url: '/adil/gallery' }, h("button", null, "Gallery page"))));
    }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };