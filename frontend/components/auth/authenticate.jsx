import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

export default function(ComposedComponent, configProps) {
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
      return <ComposedComponent config={configProps} {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { loggedIn: state.user.loggedIn };
  }

  return connect(mapStateToProps)(Authentication);
}
