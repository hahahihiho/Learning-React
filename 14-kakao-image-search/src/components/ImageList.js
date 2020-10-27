import React from 'react';
import ImageItem from './ImageItem'

const ImageList = ({documents}) => {
    return (
        <div className="row">
            {documents.map( (item,index) => (
                <ImageItem item={item} key={index}/>
            ) )}
        </div>
    );
};

ImageList.defaultProps = {
    documents: []
}

export default ImageList;