import { Component, h, Listen, State, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  @Prop() history: RouterHistory;
  
  // @Listen('authentication')
  // authenticationHandler(event){
  //   localStorage.setItem('auth', 'yes');
  //   this.history.replace('/adfdsfs', {});
  // }

  constructor() {

  }


  render() {
    const PrivateRoute = ({ component, ...props}: { [key: string]: any}) => {
      const Component = component;
      const redirectUrl: any = '/login';
      return (
        <stencil-route {...props} routeRender={
          (props: { [key: string]: any}) => {
            console.log(props.failureRedirect)
            if (localStorage.getItem('authenticated') === 'yes') {
              return <Component {...props} {...props.componentProps}></Component>;
            }
            return <stencil-router-redirect url={redirectUrl}></stencil-router-redirect>
          }
        }/>
      );
    }

    return (
      <div class="container">
        <main class="routes-container">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <PrivateRoute url='/:name/gallery/:id' component='app-image' exact={true}/>
              <PrivateRoute url='/:name/gallery' component='user-gallery' exact={true}/>
              <PrivateRoute url='/user/:name' component='app-user' exact={true}/>
              <stencil-route url='/login' component='app-login' exact={true}/>
              <PrivateRoute url='/' component='app-home'/>
              {/* <stencil-route>
               <stencil-router-redirect url={'/login'}></stencil-router-redirect>
              </stencil-route> */}
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
