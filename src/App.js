import React,{lazy,Suspense} from 'react'
import './App.css'
// import  NewLazyComp from './NewLazyComp.js'
const NewLazyComp =lazy(()=>import('./NewLazyComp'))


const App =()=>{
  return(
    <div className='App'>
      <h2>Welcome to Lazy Loading</h2>
      <Suspense fallback={<div>Loading....</div>}>
       <NewLazyComp/>
      </Suspense>
    </div>

  )
}

export default App