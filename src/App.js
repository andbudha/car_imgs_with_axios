import React, {useState} from 'react';
import ImageList from "./components/ImageList";
import ImageShow from "./components/ImageShow";
import {SearchBar} from "./components/SearchBar";
import {searchImages} from "./api";

const App = () => {

    const[imgArray, setImgArray]=useState([]);

    const handleSubmit = async (term) => {
        const response = await searchImages(term);
        setImgArray(response);
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={imgArray}/>
        </div>
    );
};

export default App;