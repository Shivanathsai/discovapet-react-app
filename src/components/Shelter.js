import React from 'react'
import {Redirect} from 'react-router-dom'
import PetsContainer from '../containers/PetsContainer'
import img1 from '../assets/petpoplogo.jpg'

const Shelter = ({match, shelters}) => {
  // console.log(props)

  // const shelter = props.shelters[props.match.params.id - 1]
  // eslint-disable-next-line
  // const shelter = props.shelters.filter(shelter => shelter.id == props.match.params.id)[0]
  const shelter = shelters[match.params.id - 1]
  if (shelter) {
    return(
      <React.Fragment>
      <div className="row">
        <div className="col-md-4">
          <img src={img1} className='card-img-top'/>
        </div>
        <div className="col-md-8">
          <h3>{shelter.name}</h3>
          <p>{shelter.street_address}<br />
          {shelter.city}, {shelter.state} {shelter.zipcode}</p>
          <h4>Our Mission:</h4>
          <p>blabhhblalbkjlfka;;flkjdlkjflkajdlfjldmaidojfaije;lkjra;lkjd;klfajldkjflk</p>
          <p><strong>Contact Us</strong></p>
            <em>email:</em> {shelter.email} <br />
            <em>number:</em> {shelter.number}
        </div>
        <div className="container-fluid d-flex justify-content-center">
          <div className="col-md-offset-3">
            <PetsContainer shelter={shelter} />
          </div>
        </div>


      </div>

      </React.Fragment>
    )
  } else {
    return (
      <p></p>

    )
  }
}
  // return (
  //   <div>
  //     {shelter ? return shelter.name}
  //     {/*shelter ? null : <Redirect to='/shelters' /> */}
  //     <h2>{shelter.name}</h2>
  //     <p>{shelter ? shelter.street_address : null}</p>
  //     <p>{shelter ? shelter.city : null}, {shelter ? shelter.state : null} {shelter ? shelter.zipcode : null}</p>
//   //     {/*<p>Animals: {shelter ? shelter.pets.length : null}</p><br />*/}
//   //     <h4>Pets:</h4>
//   //     <PetsContainer shelter={shelter}/>
//   //   </div>
//   // )
// }
//       {/*}<Redirect to='/shelters'/>*/}
//
export default Shelter
