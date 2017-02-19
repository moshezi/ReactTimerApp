var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {             //stateless components
  return (
    <div>
      <div>
        <div>
          <Navigation/>
          <p>Main.jsx rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
