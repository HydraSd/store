import React from 'react'
import MainSkeleton from './[id]/components/skeleton/MainSkeleton'

type Props = {}

function Loading({}: Props) {
  return (
    <center>
      <MainSkeleton />
    </center>
  )
}

export default Loading