"use client"
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Corps from './Corps';

const DroiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  width: 83%;
`;

const Droite = () => {
  return (
    <DroiteContainer>
      <Navbar />
      <Corps />
    </DroiteContainer>
  );
};

export default Droite;
