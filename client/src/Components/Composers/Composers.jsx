import React, { Component } from 'react'
import { graphql } from "react-apollo"
import gql from "graphql-tag"

function Composers({ data }) {
  if (data.loading) {
    return <div>Loading ...</div>
  }

  return (
    <ul>
      {data.composers.map(composer => (<li>{composer.name}</li>))}
    </ul>
  )
}

const composersQuery = gql`
  query {
    composers: allComposers {
      id
      name
    }
  }
`

export default graphql(composersQuery)(Composers)
