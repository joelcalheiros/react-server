import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class HomePage extends Component {
  clickMethod() {
    console.log('JS is running');
  }

  head() {
    return (
      <Helmet>
        <title>My home page title</title>
        <meta name="description" content="Some description." />
        <meta property="og:title" content="MyApp" />
        <meta property="og:image" content="https://whitelabel-frontend.s3-eu-west-1.amazonaws.com/assets/esolidar-powered-white.png" />
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.head()}
        <h1>
          Home page
        </h1>
        <p>
          Some content here
        </p>
        <button onClick={() => this.clickMethod()}>Console log text</button>
      </div>
    )
  }
}

export default HomePage;
