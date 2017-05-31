import React from 'react';


class Name extends React.Component {
  constructor(){
    super();

};
  render() {
    return(
      <h1 class="name">by Craig Scott  &nbsp;
      <a href="https://github.com/craigtscott/mockina">
      <i class="fa fa-github" aria-hidden="true"></i>
      </a> &nbsp;
      <a href="https://www.linkedin.com/in/craigtscott">
      <i class="fa fa-linkedin-square" aria-hidden="true"></i>
      </a>
      </h1>
    );
  };
}

export default Name;
