import React from 'react'
import { Breadcrumb } from './Breadcrumb/Breadcrumb'
import { Summary } from './Summary/Summary'

export const RestaurantDetails = ({details}) => {
  return (
    <>
    <Breadcrumb name={details.name} />
    <Summary details={details} />
    </>
  )
}

