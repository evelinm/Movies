import React, {useState,useEffect} from 'react';
import SearchBar from '../Components/SearchBar';
import Api from '../API/Api';

const apiKey = "a26a19d8891d64b1fe4c5d91e5e5ffff";
function Body() {
    const [poster, setPoster] = useState([])

    useEffect(async () => {
        const result = await Api.get('movie/upcoming?api_key=' + apiKey+ '&language=en-US&page=1');
        console.log(result.data.results);
        setPoster(result.data.results);
      }, []);
   return (
       <div>
       <SearchBar/>
        <ul>
        {poster.map(item => (
            <li key={item.id}><p>{item.title}</p></li>
            
        ))}
        </ul>

       </div>
   ) 
}
export default Body;