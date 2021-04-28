import React from 'react';

import styled from 'styled-components';

function Header () {
return (
<MainHeader>Movies</MainHeader>
);

}
export default Header;

const MainHeader = styled.div`
  background-color: black;
  color: red;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 30px
`