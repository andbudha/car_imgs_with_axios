import React from 'react';
import ImageList from "./components/ImageList";
import ImageShow from "./components/ImageShow";
import {SearchBar} from "./components/SearchBar";

const App = () => {
    return (
        <div>
            <ImageList/>
            <ImageShow/>
            <SearchBar/>
        </div>
    );
};

export default App;