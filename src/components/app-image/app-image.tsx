import { Component, ComponentInterface,Prop, Host, h, Element } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-image',
  styleUrl: 'app-image.css',
  shadow: true,
})
export class AppImage implements ComponentInterface {
  @Prop() match: MatchResults;
  @Prop() url: string;

  @Element() el: HTMLElement;

  private observer: IntersectionObserver;

  componentDidLoad() {
    const img: HTMLImageElement = this.el.shadowRoot.querySelector('img');
    if (img) {
      this.observer = new IntersectionObserver(this.onIntersection, {threshold: 1});
      this.observer.observe(img);
    }
  }

  private onIntersection = async (entries) => {
    // debugger;
    for (const entry of entries) {
      if (entry.isIntersecting) {
        if (this.observer) {
           this.observer.disconnect();
        }
        if (entry.target.getAttribute('data-src')) {
          entry.target.setAttribute('src',entry.target.getAttribute('data-src'));
          entry.target.removeAttribute('data-src');
        }
      }
    }
  };
  render() {
    console.log(this.url);
    return (<img data-src={this.url}/>);
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

}
