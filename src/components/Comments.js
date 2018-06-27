import React from 'react';

export default class Comments extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        comments: [0],
        reviewComments: []
      };
    }
  
    componentDidMount() {
         const {number} = this.props.location.state;
        console.log(number);
        
      fetch("https://api.github.com/repos/facebook/react/issues/"+number+"/comments?access_token=e4ed75825d2ad3ffbe2bc88e403b6ed9dcdc62e0")
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

        fetch("https://api.github.com/repos/facebook/react/pulls/"+number+"/comments?access_token=e4ed75825d2ad3ffbe2bc88e403b6ed9dcdc62e0")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              reviewComments: result
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
        console.log(this.state);
        const comments =this.state.comments.map((comment, index) =>
        <li key={index}>
        {comment.body}</li>
      );
      const reviewComments =this.state.reviewComments.map((comment, index) =>
      <li key={index}>
      {comment.body}</li>
    );
        return( <div>{comments}
        {reviewComments}
         </div>)

    
    }
  }
