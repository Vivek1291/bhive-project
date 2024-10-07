

import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/themeContext';


const StyledHeading = styled.h1<{ level: number }>`
  font-size: ${({ level, theme }) => theme.typography[`heading${level}`].fontSize};
  line-height: ${({ level, theme }) => theme.typography[`heading${level}`].lineHeight};
  color: ${({ theme }) => theme.text.main};
  margin: 0;
`;

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6; // Heading levels
  children: React.ReactNode; // Content to display
}

const Heading: React.FC<HeadingProps> = ({ level, children }) => {
    const theme = useTheme();
  return (
    <StyledHeading as={`h${level}`} level={level} theme={theme}>
      {children}
    </StyledHeading>
  );
};

export default Heading;


