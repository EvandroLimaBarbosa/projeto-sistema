import { createContext, useEffect, useState } from "react";

// type Tema = 'dark' | ''

interface AppContextProps {
  tema?: string
  alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: any) {
  const [tema, setTema] = useState('')
  
  const alternarTema = () => {
    const novoTema = tema === ''  ? 'dark' : ''
    setTema(tema === '' ? 'dark' : '')
    localStorage.setItem('tema', String(novoTema));
  }

  useEffect(() => {
    const temaSalvo = localStorage.getItem('tema');
    setTema(String(temaSalvo));
  }, []);

  return (
    <AppContext.Provider value={{
      tema,
      alternarTema
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext