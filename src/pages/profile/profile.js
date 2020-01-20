import React, {Fragment, useContext, useEffect} from "react";
import {GithubContext} from "../../context/github/github-context";
import {Link} from "react-router-dom";
import Repos from "../../components/repos";

const Profile = ({match}) => {

  const {getUser, getRepos, loading, repos, user} = useContext(GithubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    following,
    followers,
    public_repos,
    public_gists
  } = user;

  if (loading) {
    return <p className='text-center'>Загрузка...</p>
  }

  return (
    <Fragment>
      <Link to="/" className='btn btn-link'>На Главую</Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={avatar_url}
                alt={name}
                style={{width: '150px'}}/>
              <h1>{name}</h1>
              {location && <p>Местоположение: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <Fragment>
                  <h3>Биография</h3>
                  <p>{bio}</p>
                </Fragment>
              }
              <a
                href={html_url}
                target='_blank'
                rel='noopener noferrer'
                className='btn btn-primary'
              >Открыть профиль</a>
              <ul>
                {login && <li>
                  <strong>Username:</strong> {login}
                </li>}
                {company && <li>
                  <strong>Компания:</strong> {company}
                </li>}
                {blog && <li>
                  <strong>Сайт:</strong> {blog}
                </li>}
              </ul>
              <div className='badge badge-primary'>Подписчики: {followers}</div>
              <div className='badge badge-success'>Подписан: {following}</div>
              <div className='badge badge-info'>Репозитории: {public_repos}</div>
              <div className='badge badge-dark'>Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos}/>
    </Fragment>
  )
};

export default Profile;