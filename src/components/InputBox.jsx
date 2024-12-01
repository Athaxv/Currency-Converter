import React from 'react'

function InputBox() {
  function InputBox({
    label,
    className = "",
  })
    return (
    <div className={`bg-white p-3 rounded-lg text-sm flex`}>
        <div className='w-1/2'>
            <label className='text-black/40 mb-2 inline-block'>
            label
            </label>
            <input 
            type="number"
            className='outline-none w-full bg-transparent py-1.5'
            placeholder='Amount'
            />
        </div>
    </div>
  )
}

export default InputBox
