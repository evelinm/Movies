import React, {useState,useEffect} from 'react';
import SearchBar from '../Components/SearchBar';
import Api from '../API/Api';

import styled from 'styled-components';

const apiKey = "a26a19d8891d64b1fe4c5d91e5e5ffff";
const imageUrl = "https://image.tmdb.org/t/p/w185/";

function Body() {
    const [poster, setPoster] = useState({})
    const [isLoading, setIsLoading] =useState(true);

    
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const result = await Api.get('movie/upcoming?api_key=' + apiKey+ '&language=en-US&page=1');
            setPoster(result.data);
            setIsLoading(false)
            console.log(result.data);
          };
        
        fetchData();
      }, []);
   return (
       <div>
       <SearchBar/>
        {isLoading ?  <p> Loading...</p> : <MoviePosterContainer>
        {poster.results.map(item => (
            <MoviePoster key={item.id}>
            <MovieTitle>{item.title}</MovieTitle>
            <img src={`${imageUrl}${item.poster_path}`} alt="image"/>
            </MoviePoster>
            
        ))}
       </MoviePosterContainer>}

       </div> 
   ) 
}
export default Body;

const MoviePosterContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
padding-top: 30px;


`;

const MovieTitle = styled.div`
overflow-wrap: break-word;

`;

const MoviePoster = styled.div`
color: white;
background-color: black;
padding: 20px;

@media (max-width: 768px) {
    flex-direction: column;
    flex-wrap:no-wrap;
    padding:50px;
  }


`;