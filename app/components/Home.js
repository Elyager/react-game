var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContent = require('../components/MainContent');


var Home = React.createClass({
  render: function() {
    return (
      <MainContent>
        <h1>Github Battle</h1>
        <p className='lead'>Some fancy motto</p>
        <Link to='playerOne'>
          <button type='button' className='btn btn-lg btn-info'>Get Started</button>
        </Link>
      </MainContent>
    )
  }
});

module.exports = Home
