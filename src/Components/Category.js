import React, {Component} from 'react';
import beehive from '../Images/beehive.png';
import '../App.css';

class Category extends Component {
  render() {
    return(
        <div className="category">
          <img className="categoryBG" src={this.props.bg} alt="categoryBG" />
          <img src={beehive} id="beehive" alt="beehive" />
          <img src={this.props.src} id="categoryTitle" alt="categoryTitle" />
        </div>
    );
  }
}
export default Category;
