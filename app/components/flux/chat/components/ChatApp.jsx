
"use strict";

/**
 * This file is provided by Facebook for testing and evaluation purposes
 * only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var MessageSection = require('./MessageSection.jsx');
var React = require('react');
var ThreadSection = require('./ThreadSection.jsx');
var ChatExampleData = require('../ChatExampleData');
var ChatWebAPIUtils = require('../utils/ChatWebAPIUtils');

require("../assets/styles/app.css");

ChatExampleData.init(); // load example data into localstorage
ChatWebAPIUtils.getAllMessages();

var ChatApp = React.createClass({
  render: function() {
    return (
      <div className="chatapp">
        <ThreadSection />
        <MessageSection />
      </div>
    );
  }
});

module.exports = ChatApp;
