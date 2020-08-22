import React, { Component } from 'react';
import { connect } from 'react-redux'


class Comments extends Component {
    render(){
        return(
            <>
            <h5>Any comments you want to leave?</h5>
            <input required type="text" placeholder="Enter comment here!"/>
            <button >Next</button>
            </>
        )
    }
}


const mapPropsToState = (reduxState) => {
    return{
        reduxState
    }
}

export default connect(mapPropsToState)(Comments);