import React from 'react'
import { MoonLoader } from 'react-spinners'

const override = {
    display: 'block',
    margin: '100px auto',
}

const Spinner = ({ loading }) => {
  return (
    <div className='flex justify-center items-center'>
        <MoonLoader color='#4338ca' loading={loading} size={75} cssOverride={override} />
    </div>
  )
}

export default Spinner
