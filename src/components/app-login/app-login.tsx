import { Component, ComponentInterface, Host, h,Prop, State, Event, EventEmitter } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
@Component({
  tag: 'app-login',
  styleUrl: 'app-login.css',
  shadow: true,
})
export class AppLogin implements ComponentInterface {
  @Event({eventName: 'authentication',}) authentication: EventEmitter<boolean>;
  @Prop() history: RouterHistory;
  @State() username: string;
  @State() password: string;
  @State() showError: boolean = false;
  @State() isLoading: boolean = false;

  constructor() {
   
  }

  componentWillLoad() {
    if(localStorage.getItem('authenticated') === 'yes') {
      debugger;
      this.history.replace('/');
    }
  }

  authenticate(e) {
    this.isLoading = true;
    this.showError = false;

    setTimeout(() => {
      if(this.username === 'admin' && this.password === 'admin') {
        localStorage.setItem('authenticated','yes');
        this.history.replace('/');
      } else {
        this.showError = true;
      }
      this.isLoading = false;
    },3000)
  }

  onNameChange(event) {
    this.username = event.target.value;
  }

  onPasswordChange(event) {
    this.password = event.target.value;
  }

  render() {
    if(!localStorage.getItem('authenticated')) {
      return (
        <Host>
          <div class="container">
            <div class="card">
                <input class="login-field" type="text" value={this.username} placeholder="Username" onInput={(event) => this.onNameChange(event)}/>
                <input class="login-field" type="password" value={this.password} placeholder="Password" onInput={(event) => this.onPasswordChange(event)}/>
                <button class="login-btn" onClick={(e) => this.authenticate(e)}>
                  Log In{this.isLoading ? <div class="loader"></div> : <span/>}
                </button>
                {this.showError ? <div class="error">Username or password is wrong!</div> : <span></span>}
            </div>
          </div>
        </Host>
      );
    } else {
      return (
        <slot></slot>
      );
    }
    
  }

}
