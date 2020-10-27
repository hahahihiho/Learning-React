import React from 'react';

import { Helmet } from 'react-helmet'

// import sample from '../assets/img/sample.png'

const Meta = (props) => {
    return (
        <Helmet>
            <meta charset='utf-8' />
            <title>{props.title}</title>
            <meta name='description' content={props.description} />
            <meta name='keywards' content={props.keywards} />
            <meta name='author' content={props.author} />
            {/* og = 검색할때 부가 검색 키워드 */}
            <meta property='og:type' content='website' />
            <meta property='og:title' content={props.title} />
            <meta property='og:description' content={props.description} />
            <meta property='og:image' content={props.image} />
            <meta property='og:url' content={props.url} />

            <link rel="shortcut icon" href={props.image} type="image/png" />
            <link rel="icon" href={props.image} type="image/png" />


            {/* jquery 나 bootstrap 등 cdn 추가 가능 */}
            <script src="//code.jquery.com/jquery-3.5.1.min.js"></script>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        </Helmet>
    );
};

Meta.defaultProps = {
    title: 'BoxOffice',
    description: '영화순위 대시보드',
    keywards: '영화순위,박스오피스',
    author: 'wisdom',
    // image: sample,
    image: window.location.protocol + "//" + window.location.hostname+":"+window.location.port+"/logo512.png",
    url: window.location.href
}

export default Meta;