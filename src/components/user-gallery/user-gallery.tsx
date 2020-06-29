import { Component, ComponentInterface, State, Host, h } from '@stencil/core';
// import { MatchResults } from '@stencil/router';
import {Image} from '../../models/image'; 
import { imageListStore } from '../image-list.store';
import {autorun} from 'mobx';

@Component({
  tag: 'user-gallery',
  styleUrl: 'user-gallery.css',
  shadow: true,
})
export class UserGallery implements ComponentInterface {

  @State()
  public images: Image[];

  

  constructor() {
    autorun(() => {
      this.images = [...imageListStore.images];
  })
  }

  componentWillLoad() {
    return imageListStore.fetchImages();
  }

 

  private renderImages() {
    return this.images.map((i) => {
      console.log(i.url);
      return (<app-image url={i.url}/>);
    });
  }

  render() {
    return (
      <Host>
        <slot>Gallery</slot>
        <stencil-route-link url='/adil/gallery/1'>
          <button>
            Image 1
          </button>
        </stencil-route-link>
        <stencil-route-link url='/adil/gallery/2'>
          <button>
            Image 2
          </button>
        </stencil-route-link>
        <div>{this.renderImages()}</div>
      </Host>
    );
  }

}
