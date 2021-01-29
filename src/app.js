import "@static/scss/app.scss";
import {render} from "react-dom";
//redux
import combine from "@redux/combine";
import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
//app component
import Loader from "@comp/loader/Loader";
const App = React.lazy(()=>import( /* webpackChunkName: "core" */ "@comp/App"));
//saga
import createSagaMiddleware from "redux-saga"
import {sagaPostsWatcher} from "@middleware/sagaPosts";
import {sagaPostWatcher} from "@middleware/sagaPost";

//connect data to store (reducers, saga)
const saga = createSagaMiddleware();
const store = createStore(combine,compose(
    applyMiddleware(saga)
));

// run saga for posts list and single post
saga.run(sagaPostsWatcher)
saga.run(sagaPostWatcher)

if(document.getElementById("app")!=null) {
    render(<Provider store={store}>
                <React.Suspense fallback={Loader}>
                    <App />
                </React.Suspense>
            </Provider>,document.getElementById("app"))
}else {
    console.error("Can not find root element to render application")
}
