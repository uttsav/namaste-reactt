import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   title: "Fight Club Manager",
    //   intro:
    //     "I am MMA athlete and I run Fight club, Do not buy things to impress people",
    // };

    this.state = {
      userInfo: {
        name: "",
        company: "",
        location: "",
      },
    };
  }

  async componentDidMount() {
    //api

    const data = await fetch("https://api.github.com/users/uttsav");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    // const { name, email } = this.props;

    const { name, company, location, bio, avatar_url } = this.state.userInfo;

    const changeTitle = () => {
      // Never update state variable direclty for class based component
      this.setState({
        title: "MMA Champion",
        intro:
          "If you don't know what you want, the doorman said, you end up with a lot you don't. I let go.",
      });
    };

    return (
      <div className="column">
        <div className="card">
          <div className="container">
            <img src={avatar_url}></img>
            <h2>{name}</h2>
            <p className="title">{company}</p>
            <p>{bio}</p>
            <p>{location}</p>
            <p>
              <button className="button" onClick={() => changeTitle()}>
                Contact
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
