var React = require('react');
var ReactDOM = require('react-dom');

//render is a funciton that recieve some data and returns a view
//f(d) = v
var HelloWorld = React.createClass({
  render: function() {
    console.log(this.props);
    return <div> Hello World {this.props.name} </div>
  }
});

ReactDOM.render(<HelloWorld name="Erik" anyData={20} />, document.getElementById('app'));
