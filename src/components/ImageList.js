import React from 'react';

export const ImageList = ({images}) => {

    console.log(images)
    return (
        <div>
            Image List: {images.length}
        </div>
    );
};

export default ImageList;