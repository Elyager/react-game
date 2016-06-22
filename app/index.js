var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
  name: 'Erik Elyager',
  username: 'elyager',
  image: 'http://1.gravatar.com/avatar/a537c2ded076652a74a87985012e2a39'
};

var ProfilePic = React.createClass({
  render: function() {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div>{this.props.name}</div>
    )
  }
});

var Link = React.createClass({
  changeURL: function() {
      window.location.replace(this.props.href);
  },

  render: function() {
    return (
      <span
        style={{color:'blue', cursor:'pointer'}}
        onClick={this.changeURL}>
          {this.props.children}
      </span>
    )
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <Link href={'https://github.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});
ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));
