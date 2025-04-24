import React from 'react'

const MealDetails = ({ params }) => {
  console.log("===-->", params?.slug);

  return (
    <div>MealDetails=={params?.slug}</div>
  )
}

export default MealDetails