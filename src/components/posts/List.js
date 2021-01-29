import {connect,useDispatch} from "react-redux";
import {fetchPosts} from "@redux/actions";
import Item from "@comp/posts/Item";

class List extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        let {data} = this.props.posts;

        return <div className={"posts"}>
            <h1>Posts Items</h1>
            {
                data.map(item=><Item key={item.id} data={item} />)
            }
        </div>
    }

    handleScroll = () => {
        if (Math.ceil(window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight)
        this.props.fetchPosts();
    }



    componentDidMount() {
        if(this.props.posts.load) {
            window.addEventListener('scroll', this.handleScroll);
            this.props.fetchPosts();
        }
    }



}

const mapStateToProps = (store)=>{
    return {
        posts:store.posts
    }
}

const mapDispatchToProps ={
    fetchPosts
}

export default connect(mapStateToProps,mapDispatchToProps)(List);


