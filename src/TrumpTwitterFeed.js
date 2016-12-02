// Tweets component
import React from 'react';
import './css/Trump.css';
import $ from 'jquery'
import '../node_modules/font-awesome/css/font-awesome.css'

var TrumpTwitterFeed = React.createClass({
    
    render:function() {   
      return (
        <div>
          <h3>@realDonaldTrump Twitter Feed</h3>
          <div className="trumpFeed">
            <a className="twitter-timeline" target='_blank' data-link-color="#E95F28" href="https://twitter.com/realDonaldTrump">
              Tweets by @realDonaldTrump
            </a> 
            <script>
              {!function(d,s,id){
                var js
                var fjs=d.getElementsByTagName(s)[0]
                var p=/^http:/.test(d.location)?'http':'https'
                if(!d.getElementById(id)) {
                  js = d.createElement(s)
                  js.id=id
                  js.src=p+"://platform.twitter.com/widgets.js"
                  fjs.parentNode.insertBefore(js,fjs)
                }
              }
              (document,"script","twitter-wjs")}
            </script>            
          </div>
        </div>
      )
    }
});

export default TrumpTwitterFeed;


