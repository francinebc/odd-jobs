export const clearToken = () => localStorage.removeItem('ACCESS-TOKEN')
export const getToken = () => localStorage.getItem('ACCESS-TOKEN')
export const setToken = (token: string) => localStorage.setItem('ACCESS-TOKEN', token)