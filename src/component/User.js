import { useEffect, useState } from "react";

const User = (props) => {
  const [gitData, setGitData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/akshaymarch7");

    const json = await data.json();

    setGitData(json);

    console.log(gitData);
  };

  if (gitData?.name.length > 0)
    return (
      <div className="column">
        <div className="card">
          <div className="container">
            <img src={gitData.avatar_url}></img>
            <h2>{gitData.name}</h2>
            <p className="title">{gitData.company}</p>
            <p>{gitData.bio}</p>
            <p>{gitData.location}</p>
            <p>
              <button className="button">Contact</button>
            </p>
          </div>
        </div>
      </div>
    );
};

export default User;
