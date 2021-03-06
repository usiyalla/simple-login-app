/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, RouterHistory, } from "@stencil/router";
export namespace Components {
    interface AppHome {
    }
    interface AppImage {
        "match": MatchResults;
        "url": string;
    }
    interface AppLogin {
        "history": RouterHistory;
    }
    interface AppRoot {
        "history": RouterHistory;
    }
    interface AppUser {
        "match": MatchResults;
    }
    interface UserGallery {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppImageElement extends Components.AppImage, HTMLStencilElement {
    }
    var HTMLAppImageElement: {
        prototype: HTMLAppImageElement;
        new (): HTMLAppImageElement;
    };
    interface HTMLAppLoginElement extends Components.AppLogin, HTMLStencilElement {
    }
    var HTMLAppLoginElement: {
        prototype: HTMLAppLoginElement;
        new (): HTMLAppLoginElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppUserElement extends Components.AppUser, HTMLStencilElement {
    }
    var HTMLAppUserElement: {
        prototype: HTMLAppUserElement;
        new (): HTMLAppUserElement;
    };
    interface HTMLUserGalleryElement extends Components.UserGallery, HTMLStencilElement {
    }
    var HTMLUserGalleryElement: {
        prototype: HTMLUserGalleryElement;
        new (): HTMLUserGalleryElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-image": HTMLAppImageElement;
        "app-login": HTMLAppLoginElement;
        "app-root": HTMLAppRootElement;
        "app-user": HTMLAppUserElement;
        "user-gallery": HTMLUserGalleryElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppImage {
        "match"?: MatchResults;
        "url"?: string;
    }
    interface AppLogin {
        "history"?: RouterHistory;
        "onAuthentication"?: (event: CustomEvent<boolean>) => void;
    }
    interface AppRoot {
        "history"?: RouterHistory;
    }
    interface AppUser {
        "match"?: MatchResults;
    }
    interface UserGallery {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-image": AppImage;
        "app-login": AppLogin;
        "app-root": AppRoot;
        "app-user": AppUser;
        "user-gallery": UserGallery;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-image": LocalJSX.AppImage & JSXBase.HTMLAttributes<HTMLAppImageElement>;
            "app-login": LocalJSX.AppLogin & JSXBase.HTMLAttributes<HTMLAppLoginElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-user": LocalJSX.AppUser & JSXBase.HTMLAttributes<HTMLAppUserElement>;
            "user-gallery": LocalJSX.UserGallery & JSXBase.HTMLAttributes<HTMLUserGalleryElement>;
        }
    }
}
