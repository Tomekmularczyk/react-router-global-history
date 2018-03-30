import React from 'react';
import { withRouter } from 'react-router';

let globalHistory = null;

class Spy extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    if (globalHistory !== nextProps.history) {
      globalHistory = nextProps.history;
    }
    return null;
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
