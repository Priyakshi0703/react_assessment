import React from 'react';

export default class Comments extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        comments: [0]
      };
    }
  
    componentDidMount() {
         const {number} = this.props.location.state;
        console.log(number);
        
      fetch("https://api.github.com/repos/facebook/react/pulls/"+number+"/comments?access_token=a61da5ec341aa56434869b0e82cad407449d5947")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              comments: result
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
        console.log(this.props);
        const comments =this.state.comments.map((comment, index) =>
        <li key={index}>
        {comment.body}</li>
      );
        return( <div>{comments} </div>)

    
    }
  }
