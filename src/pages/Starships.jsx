import React from 'react'

const Starships = () => {
  return (
    <div>
    {starships.map(starship => (
      <div key={starship.name}>
        <p>{starship.name}</p>
        <p>{starship.model}</p>
        <hr />
      </div>
    ))}
  </div>
  )
}

export default Starships