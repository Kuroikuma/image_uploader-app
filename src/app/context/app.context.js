import React, { useState, createContext } from 'react'

const Context = createContext()

export const AppProvider = ({ children }) => {
  const [file, setFile] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)
  return (
    <Context.Provider
      value={{
        file,
        setFile,
        isLoading,
        setIsLoading,
        isUploaded,
        setIsUploaded,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
