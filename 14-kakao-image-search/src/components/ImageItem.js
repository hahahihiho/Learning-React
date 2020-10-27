import React from 'react';
import moment from 'moment';

import styled, {css} from 'styled-components';

const TumbnailLink = styled.a`
    display: block;
    width: auto;
    height: 240px;
    background-size: cover;
    background-position: center center;
    margin-bottom: 15px;
`;

const ImageItem = ({item}) => {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="tumbnail">
                <TumbnailLink href={item.image_url} target="_black" style={{
                    backgroundImage: 'url("'+item.thumbnail_url+'")'}} />
                {/* <a href={item.image_url} target="_blank"><img src={item.thumbnail_url} /></a> */}
                <h4>
                    <a href={item.image_url} target="_blank">{item.display_sitename}</a>
                </h4>
                <p>
                    <span className='label label-primary'>
                        {item.collections}
                    </span>
                    &nbsp;
                    {item.width}x{item.height}
                </p>
                <p className="text-right">
                    {/* {item.datetime} */}
                    {moment(item.datetime).format('YY/mm/DD hh:mm')}
                </p>

            </div>
        </div>
    );
};

export default ImageItem;