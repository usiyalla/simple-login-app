import { r as registerInstance, c as createEvent, h, H as Host } from './index-6de32e7e.js';

const appLoginCss = ":host{display:block;background-color:var(--primary-color);height:100%}.card{width:300px;height:200px;display:flex;flex-direction:column;background-color:var(--secondary-color);justify-content:center;padding:var(--section-padding);box-shadow:var(--shadow);border-radius:var(--small-radius)}.login-field{width:100%;height:40px;margin-bottom:3px;font-size:18px}.login-btn{height:50px;width:103%;background-color:var(--primary-color);color:var(--light-color);border:0px;margin-top:30px;display:flex;align-items:center;justify-content:center}.container{display:flex;align-items:center;justify-content:center;height:400px}.error{text-align:center;font-size:12px;color:#ec1b1b;margin-top:17px}.loader{border:16px solid #f3f3f3;border-radius:50%;border-top:16px solid #3498db;width:6px;height:6px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;margin-left:10px}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";

const AppLogin = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.showError = false;
        this.isLoading = false;
        this.authentication = createEvent(this, "authentication", 7);
    }
    componentWillLoad() {
        if (localStorage.getItem('authenticated') === 'yes') {
            debugger;
            this.history.replace('/');
        }
    }
    authenticate(e) {
        this.isLoading = true;
        this.showError = false;
        setTimeout(() => {
            if (this.username === 'admin' && this.password === 'admin') {
                localStorage.setItem('authenticated', 'yes');
                this.history.replace('/');
            }
            else {
                this.showError = true;
            }
            this.isLoading = false;
        }, 3000);
    }
    onNameChange(event) {
        this.username = event.target.value;
    }
    onPasswordChange(event) {
        this.password = event.target.value;
    }
    render() {
        if (!localStorage.getItem('authenticated')) {
            return (h(Host, null, h("div", { class: "container" }, h("div", { class: "card" }, h("input", { class: "login-field", type: "text", value: this.username, placeholder: "Username", onInput: (event) => this.onNameChange(event) }), h("input", { class: "login-field", type: "password", value: this.password, placeholder: "Password", onInput: (event) => this.onPasswordChange(event) }), h("button", { class: "login-btn", onClick: (e) => this.authenticate(e) }, "Log In", this.isLoading ? h("div", { class: "loader" }) : h("span", null)), this.showError ? h("div", { class: "error" }, "Username or password is wrong!") : h("span", null)))));
        }
        else {
            return (h("slot", null));
        }
    }
};
AppLogin.style = appLoginCss;

export { AppLogin as app_login };
