import * as React from 'react'

export const clearToken = () => localStorage.removeItem('ACCESS-TOKEN')
export const getToken = () => localStorage.getItem('ACCESS-TOKEN')
export const setToken = (token: string) => localStorage.setItem('ACCESS-TOKEN', token)

// export const useToken = () => {
//   const [token, setToken] = React.useState<string>(undefined)

//   const clearToken = clearToken
// }