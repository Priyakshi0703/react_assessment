import React from 'react';
import { Link }from 'react-router';



export default class AllPost extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        postList: []
      };
    }
  
    componentDidMount() {
      fetch("https://api.github.com/repos/facebook/react/pulls?access_token=e4ed75825d2ad3ffbe2bc88e403b6ed9dcdc62e0")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              postList: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
        
       
    }
  
    render() {
        var display;
        var comments = this.props.comments;
        const listItems =this.state.postList.map((post_list) =>
        <li key={post_list.id.toString()}>
            <Link to={{ pathname: '/comments', state: { number: post_list.number} }} >
        {post_list.title}
        </Link> <br/>by {post_list.user.login}
        </li>
      );
      if(comments!=null){
        display = comments;
      }
      else{
          display = listItems;
      }
        return( <div>
        {display} </div>)

    
    }
  }

 
