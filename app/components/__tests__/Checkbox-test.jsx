"use strict";

var expect = require('chai').expect;

describe('CheckboxWithLabel', function() {
  it('changes the text after click', function() {
    var React = require('react/addons');
    var CheckboxWithLabel = require('../checkbox/Checkbox.jsx');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var checkbox = TestUtils.renderIntoDocument(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
    );

    // Verify that it's Off by default
    var label = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'label');
    expect(label.getDOMNode().textContent).to.equal('Off');

    // Simulate a click and verify that it is now On
    var input = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input');
    TestUtils.Simulate.change(input);
    expect(label.getDOMNode().textContent).to.equal('On');
  });
});
