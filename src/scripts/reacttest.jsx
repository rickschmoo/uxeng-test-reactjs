// var React = require('react');  // Browserify!

React.render(
  <h1>Hello, world 3!</h1>,
  document.getElementById('example')
);


var HelloMessage = React.createClass({  // Create a component, HelloMessage.
  render: function() {
    return <div>1 Hello {this.props.name}</div>;  // Display a property.
  }
});
React.renderComponent(  // Render HelloMessage component at #name.
  <HelloMessage name="John 2" />,
  document.getElementById('example2'));
