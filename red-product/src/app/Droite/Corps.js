import React from 'react';
import styled from 'styled-components';

const CorpsContainer = styled.div`
  
  background-color: #f0f0f0;
  color: #55595C;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Corps = () => {
  return (
    <CorpsContainer>
      <h2>Corps</h2>
    </CorpsContainer>
  );
};

export default Corps;
