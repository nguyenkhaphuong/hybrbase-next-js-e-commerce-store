'use client'

import React from 'react'
import { primaryButtonColor, primaryButtonTextColor } from '../constants'

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  React.useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <div className='px-6 max-md:px-4 py-8 flex flex-col h-screen items-center gap-y-6'>
      <h2>Something went wrong!</h2>
      <button
        className={`${primaryButtonColor} ${primaryButtonTextColor} text-lg hover:bg-blue-900 font-medium rounded-xl px-6 py-4`}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }>
        Try again
      </button>
    </div>
  )
}

export default Error
