import React from 'react';


export interface ChildNodeProps  {
    children: React.ReactNode
}

export const theme = {
    primary: {
      main: '#FFCF48', 
      text: '#263238', 
      stroke: '#27AE60',
    },
    secondary: {
      main: '#F9F9F9', 
      text: '#65624C', 
      stroke: '#27AE60',
    },
    text: {
      main: '#263238', 
      secondary: '#65624C',
    },
    background: {
        main: '#F9FAFF'
    },
    white: {
        main: '#fff'
    },
    black: {
        main: '#000'
    },
    grey: {
      grey1: '#333333',
      grey2: '#4F4F4F',
      grey3: '#B2B2B2',
      grey4: '#B7B6B6',
      grey5: '#E0E0E0',
      grey6: '#263238'
    },
    typography: {
      heading1: { fontSize: '58px', lineHeight: '63.8px' },
      heading2: { fontSize: '36px', lineHeight: '39.6px' },
      heading3: { fontSize: '24px', lineHeight: '26.4px' },
      heading4: { fontSize: '20px', lineHeight: '22px' },
      heading5: { fontSize: '18px', lineHeight: '19.8px' },
      heading6: { fontSize: '16px', lineHeight: '17.6px' },
    },
  } as const;