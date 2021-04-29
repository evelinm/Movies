import React,{useState} from 'react'
import styled from 'styled-components';


function SearchBar ({movieHandler}) {

    const [search, setSearch] = useState("");
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};

    const onSubmit = (e) => {
        e.preventDefault(); //resets all data and loose your state
        movieHandler(search);
    }
    const onSearchChange = (e) => {
        setSearch(e.target.value);
    }
    return (
    <SearchBarContainer>
   <form action="/" method="get" onSubmit={(e)=> onSubmit(e)}>
        <label htmlFor="header-search">
        <span className="visually-hidden">Search Movie Poster</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Movies poster"
            name="s" 
            onChange={(e)=> onSearchChange(e)}
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