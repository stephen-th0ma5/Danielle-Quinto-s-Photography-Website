import React, {Component} from 'react';
import beehive from './beehive.png';
import '../App.css';

class Category extends Component {
  render() {
    return(
        <div className="category">
          <img className="categoryBG" src={this.props.bg}/>
          <img src={beehive} id="beehive"/>
          <img src={this.props.src} id="categoryTitle" />
        </div>
    );
  }
}
export default Category;
