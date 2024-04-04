import { useCallback, useEffect, useState, useRef } from 'react'


function App() {
  const [Password, setPassword] = useState("");
  const [Length, setLength] = useState(8);
  const [NumAllowed, setNumAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null)

  const passGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (NumAllowed) str += '01234567890'
    if (CharAllowed) str += '!@#$%^&*()+?/'

    for (let i = 1; i <= Length; i++) {
      let Char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(Char);
    }
    setPassword(pass)

  }, [Length, NumAllowed, CharAllowed, setPassword])

  useEffect(() => {
    passGenerator()
  }, [passGenerator, NumAllowed, CharAllowed, Length])


  const copyPassword = useCallback( () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password)
  }, [Password])


  return (
    <>
      <div className='w-full max-w-md mx-auto bg-gray-800 text-orange-500 rounded px-4 py-3 mt-5'>
        <h1 className='text-3xl text-center text-white mb-3'> Password Generator </h1>
        <div className="flex shadow-md rounded-xl overflow-hidden mb-4">

          <input
            type="text"
            value={Password}
            className="outline-none w-full py-3 px-2 "
            placeholder="Password"
            readOnly
            ref={passwordRef}
          > </input>
          <button
            className="outline-none bg-blue-600 text-cyan-50 px-3 py-2 shrink-0"
            onClick={copyPassword}
          >Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              id="RangeInput"
              type="range"
              min={8}
              max={64}
              className="cursor-pointer"
              value={Length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            ></input>
            <label className='text-white' htmlFor='RangeInput'>
              Length : {Length}
            </label>
          </div>

          <div className='flex item-center gap-x-1'>
            <input
              type='checkbox'
              id='NumberInput'
              defaultChecked={NumAllowed}
              onChange={() => {
                setNumAllowed(prevRes => !prevRes)
              }}
            >
            </input>
            <label
              htmlFor='NumberInput'
              className='text-white'
            > Numbers
            </label>
          </div>

          <div className='flex item-center gap-x-2'>
            <input
              type='checkbox'
              id='CharcterInput'
              defaultChecked={CharAllowed}
              onChange={ () => {
                setCharAllowed(prev => !prev)
              }}
            >
            </input>
            <label
              htmlFor='CharcterInput'
              className='text-white'
            > Characters
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
