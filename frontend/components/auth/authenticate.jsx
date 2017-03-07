import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.loggedIn) {
        hashHistory.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.loggedIn) {
        hashHistory.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { loggedIn: state.user.loggedIn };
  }

  return connect(mapStateToProps)(Authentication);
}
