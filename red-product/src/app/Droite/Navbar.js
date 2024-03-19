import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const NavbarContainer = styled.div`
  height: 60px;
  background: #FFFFFF;
  border-bottom: 2px solide blue;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

// const SearchInput = styled.input`
  
//   background-color: transparent;
//   color: #333;
//   font-size: 14px;
//   padding: 5px;
//   border-radius: 8px;
// `;

const SearchInput = styled.input`
  color: #333;
  font-size: 16px;
  padding: 8px 12px 8px 40px; 
  border-radius: 20px; 
  width: 220px; 
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 10px 50%; 
  background-size: 20px 20px;
`;

// const SearchIcon = styled.div`
//   color: #333;
//   margin-right: 8px;
// `;

const Navbar = () => {
  return (
    <NavbarContainer>
      <h2>Dashboard</h2>
      <SearchContainer>
        {/* <SearchIcon>
          <FaSearch />
        </SearchIcon> */}
        <SearchInput type="text" placeholder="Recherche..." />
      </SearchContainer>
    </NavbarContainer>
  );
};

export default Navbar;
