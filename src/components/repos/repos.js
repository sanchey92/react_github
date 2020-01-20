import React, {Fragment} from "react";

const Repos = ({repos}) => {

  return (
    <Fragment>
      {
        repos.map((repo) => {
          return (
            <div className='card mb-3' key={repo.id}>
              <div className="card-body">
                <h4>
                  <a
                    href={repo.html_url}
                    rel='noopener noferrer'
                    target='_blank'
                  >{repo.name}</a>
                </h4>
              </div>
            </div>
          )
        })
      }
    </Fragment>
  )
};

export default Repos;