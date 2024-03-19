"use client"
import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Droite from './Droite/Droite';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
`;


export default function Home() {
  return (
    <PageContainer>
      <Sidebar />
      <Droite />
    </PageContainer>
  );
}
