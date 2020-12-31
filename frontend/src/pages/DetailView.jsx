import React from "react"
import { useParams } from "react-router-dom"

const DetailView = () => {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { numero } = useParams()

  return <h1>{numero}</h1>
}

export default DetailView
