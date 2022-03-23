import React from 'react'
import './RestuarantFilter.styles.scss'

export const RestuarantFilter = () => {
  return (
    <div className="restaurant-filter">
        <div className="res-number"><h1>1685 restaurants</h1></div>
        <div className="filter-items">
          <div className="item relevence">Relevance</div>
          <div className="item delivery">Delivery Time</div>
          <div className="item rating">Rating</div>
          <div className="item cost-l-t-h">Cost: Low To High</div>
          <div className="item cost-h-t-l">Cost: High To Low</div>
          <div className="item filters">Filters</div>
        </div>
    </div>
  )
}
