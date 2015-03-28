var React = require('react');

module.exports =
Heading = React.createClass({
  getInitialState: function() {
    return { name: 'React' };
  },
  nameChanged: function(event) {
    this.setState({ name: event.target.value });
  },
  render: function() {
    return (
      <div>
        <h1>Hello You Beautiful World of {this.state.name}</h1>
        <input value={this.state.name} onChange={this.nameChanged} />
      </div>
    );
  }
});
