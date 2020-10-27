import React from 'react';

import { useSelector,useDispatch } from 'react-redux';

import * as kakaoImageSearchReducer from '../reducers/KakaoImageSearchReducer';

import style from '../assets/css/style.module.css';

import Meta from '../components/Meta';
import Top from '../components/Top';
import ImageList from '../components/ImageList';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

// props.match.parmas.query
const ImageSearchPage = ({match}) => {
    const { result,loading, error } = useSelector((state) => {
        return {
            // 이값을 return 하면 useSelector로 상태값 추출
            ...state.kakaoImageSearchReducer,
        };
    })

    const dispatch = useDispatch();

    // match 값이 변경될때만 실행되는 hook
    React.useEffect(() => {
        const {query} = match.params;
        dispatch(kakaoImageSearchReducer.kakaoImageSearchAsync(query))
    },[match]);
    return (
        <div>
            <div className={style.containerTop}>
                {match.params.query && (
                    <Meta
                        title={['(',match.params.query,')검색!'].join('')}
                        description={['이미지 검색결과',match.params.query]}
                        keywards={['카카오',match.params.targetDt].join(',')}
                    />
                )}

                <Top />

            </div>
            <div>
                {loading ? (
                    <Loader type="Bars" color="#00BFFF" height={100} width={100}
                    style={{
                        position: 'absolute', left: "50%", top: "50%", marginLeft: "-50%", marginTop:"-50%",
                    }}
                    />
                    ) : (
                        result && <ImageList documents={result.documents}></ImageList>
                        )
                    }
            </div>
        </div>
    );
};

export default ImageSearchPage;