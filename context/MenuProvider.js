import { createContext, useContext } from "react";

// Create Context object.
const MenuContext = createContext();

// Export Provider.
export function MenuProvider(props) {
  const { logo, nav, children } = props;
  return (
    <MenuContext.Provider value={{ logo, nav }}>
      {children}
    </MenuContext.Provider>
  );
}

// Export useContext Hook.
export function useMenuContext() {
  return useContext(MenuContext);
}
