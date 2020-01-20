import React, {Fragment, useContext} from "react";
import Search from "../../components/search";
import PersonCard from "../../components/person-card";
import {GithubContext} from "../../context/github/github-context";

const HomePage = () => {

  const {loading, users} = useContext(GithubContext);

  return (
    <Fragment>
      <Search/>
      <div className="row">
        {
          loading
            ? <p className='text-center'>Загрузка...</p>
            : users.map((user) => {
              return (
                <div className='col-sm-4 mb-4' key={user.id}>
                  <PersonCard user={user}/>
                </div>
              )
            })
        }
      </div>
    </Fragment>
  )
};

export default HomePage;