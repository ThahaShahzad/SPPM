'use client'
import { useState } from 'react'

export default function Home() {
  const [textInput, setTextInput] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [powerPointRes, setPowerPointRes] = useState()
  const getPowerPoint = async () => {
    setIsLoading(true)
    const res = await fetch(`/api/ppgen?topic=${textInput}`)
    setIsLoading(false)
    setPowerPointRes(await res.json())
  }
  return (
    <main className='flex min-h-screen flex-col items-center gap-8 p-24'>
      <h1 className='text-7xl'>SPMM</h1>
      <div className='form-control w-full max-w-xs mt-8'>
        <label className='label'>
          <span className='label-text'>Enter your topic:</span>
        </label>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered input-info w-full max-w-xs'
          onChange={(e) => setTextInput(e.target.value)}
        />
      </div>
      <button className={`btn ${isLoading && 'loading'}`} onClick={() => getPowerPoint()}>
        Generate PowerPoint
      </button>
      {/* {error && <p>Error</p>} */}
      {JSON.stringify(powerPointRes)}
    </main>
  )
}
