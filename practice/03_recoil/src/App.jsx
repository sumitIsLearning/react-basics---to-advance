import React from 'react'
import { nameAtom } from './store/atoms/nameAtom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useDebounce } from './hooks/useDebounce'

const App = () => {
  return (
    <div>
      <UserName />
      <ShowSignature />
    </div>
  )
}

function UserName() {
  const [name , setName] = useRecoilState(nameAtom);
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)}  type="text" placeholder='Enter your name' />
    </div>
  )
}

function ShowSignature() {
  const name = useRecoilValue(nameAtom);
  const debouncedValue = useDebounce(name);
  return (
    <div>
      your signature is:<div style={{fontFamily:"Dancing Script", fontWeight:500 , fontSize:60}}>{debouncedValue}</div>
    </div>
  )
}

export default App