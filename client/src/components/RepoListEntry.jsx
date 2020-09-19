import React from 'react';


const RepoListEntry = (props) => {

  return (
    <div>
      <div>{props.repo.owner.login}</div> <br></br>
      <div>{props.repo.created_at}</div> <br></br>
      <div>{props.repo.full_name}</div> <br></br>
      <div>ID: {props.repo.id}</div> <br></br>
      <div>Watchers: {props.repo.watchers}</div> <br></br>
    </div>
  )
}

export default RepoListEntry;