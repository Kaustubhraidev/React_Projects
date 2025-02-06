import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("")
  const passwordRef = useRef(null)
// this passwordref is useful in adding other ui functionalities 

  const passwordGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!~@#$%^&*()"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);

    }
    setpassword(pass);

  }, [length, numberAllowed, charAllowed, setpassword]);

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)}, [password])

  useEffect(() => {
    passwordGen()
  }, [length, numberAllowed, charAllowed, passwordGen])

  return (
    <>
      <div className='w-full p-5 max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-rose-300 bg-slate-800'>
        <h1 className='text-white text-center my-5'> Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref = {passwordRef}
          />
          <button onClick={copyPasswordtoClipboard} className='bg-slate-900 p-5 hover:bg-black'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='CharacterInput'
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
