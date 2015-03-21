"use strict";

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var mui = require('material-ui');
var AppBar = mui.AppBar;
var AppCanvas = mui.AppCanvas;
var IconButton = mui.IconButton;
var LeftNav = require('../mixins/left-nav.jsx');

require('./assets/styles/material-ui/Material-ui.less');

var MaterialUI = React.createClass({
  mixins: [Router.State],

  render: function() {

    var title =
      this.isActive('get-started') ? 'Get Started' :
      this.isActive('css-framework') ? 'Css Framework' :
      this.isActive('components') ? 'Components' : '';

    var githubButton = (
      <IconButton
        className="github-icon-button"
        icon="mui-icon-github"
        href="https://github.com/callemall/material-ui"
        linkButton={true} />
    );

    return (
      <AppCanvas predefinedLayout={1}>

        <AppBar
          className="mui-dark-theme"
          onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
          title={title}
          zDepth={0}>
          {githubButton}
        </AppBar>

        <LeftNav ref="leftNav" />

        <RouteHandler />

        <div className="footer full-width-section mui-dark-theme">
          <p>
            Hand crafted with love by the engineers at <a href="http://call-em-all.com">Call-Em-All</a> and our
            awesome <a href="https://github.com/callemall/material-ui/graphs/contributors">contributors</a>.
          </p>
          {githubButton}
        </div>

      </AppCanvas>
    );
  },

  _onMenuIconButtonTouchTap: function() {
    this.refs.leftNav.toggle();
  }
});

module.exports = MaterialUI;
