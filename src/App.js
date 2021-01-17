import './App.css';
import { Redirect, Route } from "react-router";
import { HashRouter } from "react-router-dom";
import {Provider, useSelector} from 'react-redux';
import store from './redux/index.js';



// пример как получить даііне из селектора

// const exampleVariable = useSelector(selectorName);
function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
          <Provider store={store}>
              пример написания компонеты с роутером
              {/*<Redirect form='/' to='some-important-form' />*/}
              {/*<Route path='/result-page'  render= { ()=> {*/}
              {/*    return  (*/}
              {/*        <>*/}
              {/*            <div>*/}
              {/*                <ResultLool3 />*/}
              {/*            </div>*/}
              {/*        </>*/}
              {/*    )*/}
              {/*}} />*/}

        </Provider>
      </HashRouter>
    </div>
  );
}

export default App;
