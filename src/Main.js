import React, { useEffect } from 'react';
import { fetchdata } from './Slice';
import { useDispatch, useSelector } from 'react-redux';

function Main() {

  const dispatch = useDispatch()
  const data = useSelector((state)=>{
    return state.shoppingcart
  })

  useEffect(()=>{
    dispatch(fetchdata())
  },[dispatch])

  if(data.isLoading){
    return "....is Loading"
  }

  if(data.isError){
    return "...is Error"
  }


  return (
    <>
      {
        data.products && data.products.map((item , index)=>{
          return(
            <div key={index}>
              <img src={item.image} alt='img'></img>
              <h1>{item.title}</h1>
            </div>
          )
        })
      }
    </>
  )
}

export default Main