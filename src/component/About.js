import User from "./User";
import UserClass from "./UserClass";

import React from "react";

// const About = () => {
//   return (
//     <>
//       <div className="about-section">
//         <h1>About Us Page</h1>
//         <p>Some text about who we are and what we do.</p>
//         <p>
//           Resize the browser window to see that this page is responsive by the
//           way.
//         </p>
//       </div>
//       <div className="row">
//         {/* This is functional component */}
//         <User name="Utsav Oza" email="utsavoza2710@gmail.com" />

//         {/* This is class component */}
//         <UserClass name="Tyler Durden" email="tylerdurden@gmail.com" />
//       </div>
//     </>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <div className="about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the
            way.
          </p>
        </div>
        <div className="row">
          {/* This is functional component */}
          <User />

          {/* This is class component */}
          <UserClass />
        </div>
      </>
    );
  }
}

export default About;
