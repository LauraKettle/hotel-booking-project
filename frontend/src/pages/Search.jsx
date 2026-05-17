import { useState } from "react";
import Navbar from "../components/Navbar";



function Search() {
    const [searchText, setSearchText] = useState("");
    
    function handleSearch(e){
        e.preventDefault();

        if (searchText === ""){
            alert("Please enter a hotel or destination");
            return;
        }

        alert(`Searching for: ${searchText}`);
    }

return(
   <>
   <Navbar />

   <div className="search-page">
    <div className="search-card">
        <h1>Find your stay</h1>

        <p className="search-intro">
            Search by hotel name or destination
        </p>

        <form onSubmit={handleSearch}>
            <div className="search-field">
                <label>Hotel or Destination</label>

                <input 
                    type="text"
                    placeholder="Example: Rome, Paris, Standard Room"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                 />
            </div>
            <button type="submit" className="search-page-button">Search</button>
        </form>
    </div>
   </div>
   </>
);
}

export default Search;