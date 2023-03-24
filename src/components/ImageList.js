import React from 'react';
import ImageShow from "./ImageShow";

export const ImageList = ({images}) => {

    const renderedImages = images.map(image => {
        return  <ImageShow image={image} key={image.id}/>
    });


    return (
        <div>
            {renderedImages}
        </div>
    );
};

export default ImageList;