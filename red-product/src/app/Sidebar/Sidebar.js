"use client"
import React from 'react';
import styled from 'styled-components';
import { MdDashboard } from "react-icons/md"
import { FaHotel } from "react-icons/fa"


const SidebarContainer = styled.div`
  width: 17%;
  height: 100vh;
  background-color: #55595C;
  color: #fff;
  padding: 20px;
  position: fixed;
  opacity: 50%;
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  padding-top: 30px;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
`;


const Sidebar = () => {
  return (
  
      <SidebarContainer>
        <h2>RED-PRODUCT</h2>
          <hr />
        <div>
          <SidebarItem>
              <IconWrapper>
                <MdDashboard />
              </IconWrapper>
              Dashboard
          </SidebarItem>

          <SidebarItem>
              <IconWrapper>
                <FaHotel />
              </IconWrapper>
              Liste des Hôtels
          </SidebarItem>
        </div>
      </SidebarContainer>
   
  );
};

export default Sidebar;
