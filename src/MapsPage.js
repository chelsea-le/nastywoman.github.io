// Component to render content on "Find Events" Page of App
import React from 'react';

var MapsPage = React.createClass({
    render() {
      return (
        <div className="container">
          <h3> Google Map Section </h3>
        </div>
      )
    },

    getInitialState() {
      return ({
        hello: "world!"
      })
    },

    componentDidMount() {
      // Do something cool
    }
});

export default MapsPage;