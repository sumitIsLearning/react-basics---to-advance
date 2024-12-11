import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

const Post = () => {

  const dice = 2;
  const sides = 6;
  const query = `query RollDice($dice: Int!, $sides: Int) {
  rollDice(numDice: $dice, numSides: $sides){
    total
    rolls
  }
  }`
  const variables = {
    dice ,
    sides
  }

  const {data , loading , error} = useFetch(
    "http://localhost:4444/graphql",
    "post",
    query,
    variables
  )
  return (
    <div>
      {loading ?  "loading..." : <div><h2>{data.rollDice.rolls}</h2></div>}
    </div>
  )
}

export default Post