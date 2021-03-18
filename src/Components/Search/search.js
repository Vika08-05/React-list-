import React from "react"
import "./search.css"

class Search extends React.Component {

    render() {
        const { filterList } = this.props;
        return (
            <div className="input-group" style={{ marginBottom: 10 }}>
                <input type="text" name="example-input1-group2" className="form-control" placeholder="Search" onChange={this.filterList} />
                <span className="input-group-btn" style={{ marginLeft: 5 }}>
                    <button type="button" className="btn btn-effect-ripple btn-primary"><i className="fa fa-search"></i></button>
                </span>
            </div>
        )
    }
}
export default Search;