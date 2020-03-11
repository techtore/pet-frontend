import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDogs } from '../../actions/dogs'

class Dogs extends Component {
    componentDidMount(){
        this.props.getDogs()
    }
    render() {
        const dogs = this.props.dogs.map((dog, i) => <li key={i}>{dog.name}</li>

        )
        return(
            <div>
                <h2>Your Dogs</h2>
                <ul>{this.props.loading ? <h3>...loading dogs</h3> : dogs} </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        dogs: state.dogReducer.dogs,
        loading: state.dogReducer.loading
    }
}

export default connect(mapStateToProps, {getDogs})(Dogs);