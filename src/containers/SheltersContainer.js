import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchShelters} from '../actions/fetchShelters'
import ShelterInput from '../components/ShelterInput'
import Shelters from '../components/Shelters'

class SheltersContainer extends Component {

  componentDidMount(){

  }

  render() {
    return(
      <div>
        Shelters Container
        <ShelterInput />
        <Shelters />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // shelters: state.shelters
  }
}

export default connect(mapStateToProps, {fetchShelters})(SheltersContainer)