"use strict";

var React = require('react'),
  PageWithNav = require('../../mixins/page-with-nav.jsx');

var CssFramework = React.createClass({

  render: function() {
    var menuItems = [
      { route: 'colors', text: 'Colors'},
      { route: 'typography', text: 'Typography'}
    ];

    return (
      <PageWithNav menuItems={menuItems} />
    );
  }

});

module.exports = CssFramework;
