import React, {Component} from 'react';
import {connect} from 'react-redux'
class Dashboard extends React.Component{
    render() {
        console.log(this.props);
        return (
            <div>
                DASHBOARD
            </div>
        );
    }
}

function mapStateToProps({tweets}) {
    return {
        tweetsIds: Object.keys(tweets).sort((a,b)=> tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard);
