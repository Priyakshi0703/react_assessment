import React, { Component } from 'react';
import AllPost from './AllPost';
import Comments from './Comments';


export default class Layout extends Component {
  render() {
      console.log(this.props)
    return (
     <div> <h1>Facebook / React</h1>
      <AllPost comments={this.props.children} />
      </div>
    );
  }
}

 
