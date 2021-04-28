import React from 'react'
import styled from 'styled-components';


function SearchBar () {
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};

    return (
    <SearchBarContainer>
   <form action="/" method="get">
        <label htmlFor="header-search">
        <span className="visually-hidden">Search Movie Poster</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
        </SearchBarContainer>

    )
}
export default SearchBar;


const SearchBarContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;

  padding-top: 50px;
  


`