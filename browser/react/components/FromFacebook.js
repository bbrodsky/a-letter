import React, { Component } from 'react';



export default class FromFacebook extends Component {
  // http://stackoverflow.com/questions/27717555/implement-facebook-api-login-with-reactjs
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1164019446977784',
        xfbml      : true,
        version    : 'v2.6'
      });


      FB.getLoginStatus(function(response) {
        this.statusChangeCallback(response);
      }.bind(this));
    }.bind(this);

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }


  render() {
    return (
      <div>
        <div className="fb-login-button" data-size="medium" data-auto-logout-link="false" data-onlogin="checkLoginState();"></div>

      </div>
    )
  }
}
