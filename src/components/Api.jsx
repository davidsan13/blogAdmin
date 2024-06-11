import { useState, useEffect } from 'react'

export default function GetData(url, method, requestOptions) {
  // const navigate = useNavigate();

  return fetch(url, {
    credentials: 'include',
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: requestOptions
    
  }).catch(error => {
    console.log(error.response.status)
  })
}