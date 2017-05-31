import React from 'react';
import FontAwesome from 'react-fontawesome';

class Name extends React.Component {
  constructor(){
    super();

};
  render() {
    return(
      <h1 className='name'>by Craig Scott&nbsp;
      <a href="https://github.com/craigtscott/mockina">
        <i className="fa fa-github" aria-hidden="true"></i>
      </a> &nbsp;
      <a href="https://www.linkedin.com/in/craigtscott">
        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
      </a>
      </h1>
    );
  };
}

export default Name;
