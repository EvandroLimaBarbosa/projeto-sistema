import { createContext } from "react";

const AppContext = createContext({
  nome: null as string | null
})

export function AppProvider(props: any) {
  return (
    <AppContext.Provider value={{
      nome: 'Teste Context Api'
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext