

import React, { useContext, createContext } from 'react';
import { ChildNodeProps, theme } from '../../theme';

export const ThemeContext = createContext(theme);

export const ThemeProvider: React.FC<any> = ({children}) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext);


