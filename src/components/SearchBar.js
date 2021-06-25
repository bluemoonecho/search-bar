import React, { useState } from "react";
import "./SearchBarStyles.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState('')

    const handleFilter = (event) =>{
        const wordSearch = event.target.value
        const filteredArray = data.filter((value) => {
            return value.title.toLowerCase().includes(wordSearch.toLowerCase())
        })
        if(wordSearch === ''){
            setFilteredData([])
        }else{
            setFilteredData(filteredArray)
        }
    }   

    const clearInput = () =>{
        setFilteredData([])
        setWordEntered('')
    }

return (
    <div className="search">
        <div className="searchInputs">
            <input
            type="text"
            placeholder={placeholder}
            onChange={handleFilter}
            // value={filteredData}
            />
            <div className="searchIcon">
                {filteredData.length === 0 ? 
                <SearchIcon />
                :
                <CloseIcon
                    id='clearBtn'
                    onClick={clearInput}
                />
                }
            </div>
        </div>
        {filteredData.length !== 0 && (
            <div className="dataResult">
            
                {filteredData.slice(0,15).map((value, key) => {
                return (
                    <a 
                        className="dataItem" 
                        href={value.link} 
                        target="_blank"
                        rel="noreferrer">
                        <p>{value.title}</p>
                    </a>
                );
            })}
            </div>
        )}
        </div>
    );
}

export default SearchBar;