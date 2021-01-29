import {connect} from "react-redux";
import Loader from "@comp/loader/Loader";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

//import components for posts
const List = React.lazy(()=>import(/* webpackChunkName: "post_list" */ "@comp/posts/List"));
const ItemMoreInfo = React.lazy(()=>import(/* webpackChunkName: "post_info_more" */ "@comp/posts/ItemMoreInfo"));
const Error = React.lazy(()=>import(/* webpackChunkName: "error" */ "@comp/error/error"));
// import List from "@comp/posts/List"
// import ItemMoreInfo from "@comp/posts/ItemMoreInfo";
//import Error from "@comp/error/Error";

class App extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return <div className={"container"}>
            <Router>
                <Switch>
                    <React.Suspense fallback={Loader}>
                        <Route exact path="/"  component={List} />
                        <Route exact path="/post/:id" component={ItemMoreInfo}/>
                    </React.Suspense>
                    <Route exact path="*" component={Error} />
                </Switch>
            </Router>
        </div>
    }

}

const mapStateToProps = (store)=>{
    return {
        posts:store.posts
    }
}

export default connect(mapStateToProps,null)(App);


