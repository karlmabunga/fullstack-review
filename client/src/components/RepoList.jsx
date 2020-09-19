import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = (props) => {
  var mappedRepos = props.repos.map((repo) => {
    return (<RepoListEntry repo={repo} key={repo._id}/> )
  })
  return (
    <div>
      <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <br></br>
    <br></br>

    {mappedRepos}
    </div>
  )
}

export default RepoList;