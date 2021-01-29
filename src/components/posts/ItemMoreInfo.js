import {connect} from "react-redux";
import {fetchSinglePost} from "@redux/actions";
import Loader from "@comp/loader/Loader";
import {NavLink} from "react-router-dom";
class ItemMoreInfo extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        let {post} = this.props;
        return <div className={"posts"}>
                    {post!=null ?
                        <div className={"row item"}>
                            <div className={"col-lg-12"}>
                                <h1>{post.name}</h1>
                            </div>
                            {
                                post.image!=undefined ?
                                <div className={"col-lg-4 img"}>
                                    <img src={post.image} alt={post.name}/>
                                </div> : null
                            }
                            <div className={"col-lg-8 info"}>
                                <div className={"row"}>
                                    <div className={"col-lg-8"}>
                                        #{post.id} <b>{post.name}</b>
                                    </div>
                                    <div className={"col-lg-4 text-right"}>
                                        <span className={post.status==="Alive" ? "badge badge-success" : "badge badge-danger"}>{post.status}</span>
                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-lg-12 description"}>
                                        <ul>
                                            {post.gender ? <li><span className={"badge badge-light"}>gender</span> {post.gender}</li> : null}
                                            {post.species ? <li><span className={"badge badge-light"}>species</span> {post.species}</li> : null}
                                            {post.created ? <li><span className={"badge badge-light"}>created</span> {(new Date(post.created)).toLocaleString()}</li> : null}
                                            {post.origin ? <li><span className={"badge badge-light"}>origin</span> {post.origin.name}</li> : null}
                                        </ul>
                                        <h3>episode</h3>
                                        <ul className={"episode"}>
                                            {
                                                post.episode!=undefined ? post.episode.map((url,i)=><li key={i}><a href={url} className={"badge badge-info"}>{i}</a></li>) : null
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-lg-12"}>
                                        <NavLink  to={`/`} className={"btn btn-success"}>back</NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>
                    : <Loader />}
                </div>
    }

    componentDidMount() {
        this.props.fetchSinglePost(this.props.match.params.id);
    }

}

const mapStateToProps = (store)=>{
    return {
        post:store.post
    }
}
const mapDispatchToProps = {
    fetchSinglePost
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemMoreInfo);


