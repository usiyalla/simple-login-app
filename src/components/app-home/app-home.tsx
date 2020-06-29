import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <p>Home Page</p>

        <stencil-route-link url='/user/adil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
        <stencil-route-link url='/adil/gallery'>
          <button>
            Gallery page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
