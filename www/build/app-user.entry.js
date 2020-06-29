import { r as registerInstance, h } from './index-6de32e7e.js';

const appUserCss = ".app-user{padding:10px}";

const AppProfile = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    normalize(name) {
        if (name) {
            return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
        }
        return '';
    }
    render() {
        if (this.match && this.match.params.name) {
            return (h("div", { class: "app-user" }, h("p", null, "Hello! My name is ", this.normalize(this.match.params.name), ". My name was passed in through a route param!")));
        }
    }
};
AppProfile.style = appUserCss;

export { AppProfile as app_user };
