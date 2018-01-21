#react-router-global-history

This is a simple helper library to live alongside `react-router` to help you access history object which you can access
from the wherever file in your application (like in `redux` actions).

You need to simply import component which should be mounted on top of your application like:
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
This will initialize internal `history` variable (on `componentWillReceiveProps` hook) with the one provided by `withRouter` HOC. 
Which means you can import it wherever in the app like:

```javascript

import getHistory from 'react-router-global-history'; 

getHistory().push('/dashboard');

```

That's it!