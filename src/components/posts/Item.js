import {connect} from "react-redux";
import {NavLink}from "react-router-dom";
class Item extends React.Component{

    constructor(props) {
        super(props);
    }
    render() {
        let item= this.props.data;
        return <div className={"row item"}>
            {
                item.image!=undefined ?
                <div className={"col-lg-4 img"}>
                    <NavLink  to={`/post/${item.id}`}><img src={item.image} alt={item.name}/></NavLink >
                </div> : null

            }
            <div className={"col-lg-8 info"}>
                <div className={"row"}>
                    <div className={"col-lg-8"}>
                        #{item.id} <b>{item.name}</b>
                    </div>
                    <div className={"col-lg-4 text-right"}>
                        <span className={item.status==="Alive" ? "badge badge-success" : "badge badge-danger"}>{item.status}</span>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-lg-12 description"}>
                        <ul>
                            <li><span className={"badge badge-light"}>gender</span> {item.gender}</li>
                            <li><span className={"badge badge-light"}>species</span> {item.species}</li>
                            <li><span className={"badge badge-light"}>created</span> {(new Date(item.created)).toLocaleString()}</li>
                        </ul>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-lg-12"}>
                        <NavLink  to={`/post/${item.id}`} className={"btn btn-success"}>read more</NavLink>
                    </div>
                </div>

            </div>
        </div>
    }
}



export default connect(null,null)(Item);


