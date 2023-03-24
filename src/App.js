import React from 'react';
import ImageList from "./components/ImageList";
import ImageShow from "./components/ImageShow";
import {SearchBar} from "./components/SearchBar";
import {searchImages} from "./api";

const App = () => {

    const handleSubmit = (term) => {
        searchImages(term).then(data=>data).catch(err=>err);
    }

    return (
        <div>
            <ImageList/>
            <ImageShow/>
            <SearchBar onSubmit={handleSubmit}/>
        </div>
    );
};

export default App;