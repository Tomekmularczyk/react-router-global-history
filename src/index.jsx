import React from 'react';
import { withRouter } from 'react-router';

let globalHistory = null;

class Spy extends React.Component {
  componentWillMount() {
    const { history } = this.props;
    globalHistory = history;
  }

  componentWillReceiveProps(nextProps) {
    globalHistory = nextProps.history;
  }

  render(){
    return null;
  }
}

export const ReactRouterGlobalHistory = withRouter(Spy);

export default function getHistory() {
  if (!globalHistory) {
    throw new Error('No history Object. You probably forgot to mount ReactRouterGlobalHistory from this package.');
  }

  return globalHistory;
}
