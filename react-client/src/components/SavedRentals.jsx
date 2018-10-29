import React from 'react';
import SavedRentalItem from './SavedRentalItem.jsx';


// const SavedRentals = (props) => (
//       <div>
//         <h1>Saved Rentals</h1>
//         <ul>
//           {props.saved.map( (item, index) => (
//             <li key={index}>
//               <SavedRentalItem rental={item}/>
//             </li>
//             ))
//           }
          
//         </ul>
//       </div>

// )
class SavedRentals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favs: []
    };
  }


  componentDidUpdate() {
    if (this.state.favs !== this.props.saved) {
      console.log('mounting yeahhh well updating')
      this.setState({
        favs: this.props.saved
      });
    }
  }

  render() {
    return (
          <div>
            <h1>Saved Rentals</h1>
            <ul>
              {
                this.state.favs.map( (item, index) => (
                <li key={index}>
                  <SavedRentalItem rental={item} details={this.props.details} delete={this.props.delete} index={index}/>
                </li>
                )) 
              }
            </ul>
          </div>
    
    )
  } 
} 
  
    
  


export default SavedRentals