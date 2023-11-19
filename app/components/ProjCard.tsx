import React from 'react'

type ProjCardProp = {
  key: number,
  title: string,
  img: string,
  description?: string
}

const ProjCard = async ({title, img, description}: ProjCardProp) => {
console.log("thing:", img)
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={'img'} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  )
}

export default ProjCard