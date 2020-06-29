import { r as registerInstance, h, g as getElement } from './index-6de32e7e.js';

const appImageCss = ":host{display:block}";

const AppImage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onIntersection = async (entries) => {
            // debugger;
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    if (this.observer) {
                        this.observer.disconnect();
                    }
                    if (entry.target.getAttribute('data-src')) {
                        entry.target.setAttribute('src', entry.target.getAttribute('data-src'));
                        entry.target.removeAttribute('data-src');
                    }
                }
            }
        };
    }
    componentDidLoad() {
        const img = this.el.shadowRoot.querySelector('img');
        if (img) {
            this.observer = new IntersectionObserver(this.onIntersection, { threshold: 1 });
            this.observer.observe(img);
        }
    }
    render() {
        console.log(this.url);
        return (h("img", { "data-src": this.url }));
        // return(<deckgo-lazy-img img-src={this.url} img-alt="Lorem ipsum" img-width="100" img-height="100"/>);
        // if (this.match && this.match.params.id && this.match.params.name) {
        // return (<slot>Image is {this.match.params.id + this.match.params.name}</slot>)
        // } else {
        //   return (
        //     <Host>
        //       <slot>Image Not Found</slot>
        //     </Host>
        //   );
        // }
    }
    get el() { return getElement(this); }
};
AppImage.style = appImageCss;

export { AppImage as app_image };
