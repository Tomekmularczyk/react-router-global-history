# react-router-global-history [![npm version](https://badge.fury.io/js/react-router-global-history.svg)](https://badge.fury.io/js/react-router-global-history)

This is a simple helper library to live alongside `react-router-4` to help you access `history` object
from the wherever file in your application (like in `redux` actions).

You simply need to mount component on top of your application like:
```javascript
import { BrowserRouter } from 'react-router-dom';
import { ReactRouterGlobalHistory } from 'react-router-global-history';

function render() {
  ReactDOM.render(
    <BrowserRouter>
        <div>
            <ReactRouterGlobalHistory />
            //.....
        </div>
    </BrowserRouter>
    document.getElementById('app'),
  );
}
```
This will initialize internal `history` variable (on `componentWillMount` hook) with the one provided by `withRouter` HOC. 
Which means you can import it wherever in the app like:

```javascript
import getHistory from 'react-router-global-history'; 

export const goToPage = () => (dispatch) => {
  dispatch({ type: GO_TO_SUCCESS_PAGE });
  getHistory().push('/success');
};
```

That's it! But there's one catch. You need to call `getHistory()` after component has been mounted. For example initialization of redux happens before app renders so if you try to access `history` like: 
_reducer.js_:
```javascript
import getHistory from 'react-router-global-history'; 

const history = getHistory(); // error!
```
... you will get an error. So make sure you call it when the `ReactRouterGlobalHistory` component has already been mounted!
