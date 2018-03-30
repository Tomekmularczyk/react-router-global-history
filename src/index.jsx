import React from 'react';
import { withRouter } from 'react-router';

let globalHistory = null;

class Spy extends React.Component {
  constructor(props) {
    super(props);
    globalHistory = props.history;
  }

  render() {
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
