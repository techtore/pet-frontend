import React from 'react'
import { connect } from 'react-redux'
import { addDog } from '../../actions/dogs'
import DogsContainer from '../../containers/DogsContainer'

class DogInput extends React.Component {
    state={
       name: '',
       weight: '',
       age: '',
       breed: '',
       loading: false
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.PreventDefault();
        this.props.addDog(this.state)
        this.setState({
            name: '',
            weight: '',
            age: '',
            breed: '',
        })
    }


    render() {
        return (
            <div>
                <h2>Add a Dog</h2>
                <form onSubmit={this.handleSubmit}>
                    <label for="name">Dog's Name:</label>
                    <input>
                        type="text"
                        value={this.state.name}
                        name="name"
                        onChange={this.handleOnChange}
                    </input>
                    <label for="age">Age:</label>
                    <input>
                        type="text"
                        value={this.state.age}
                        name="age"
                        onChange={this.handleOnChange}
                    </input>
                    <label for="weight">Weight:</label>
                    <input>
                        type="text"
                        value={this.state.weight}
                        name="weight"
                        onChange={this.handleOnChange}
                    </input>
                    <label for="breed">Breed:</label>
                    <input>
                        type="text"
                        value={this.state.breed}
                        name="breed"
                        onChange={this.handleOnChange}
                    </input>
                    <button type="submit">Add Dog</button>
                </form>
            </div>
        )
    }
}

export default DogInput;