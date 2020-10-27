import React from 'react';

/**
 * 컴포넌트 코드에서 SCSS를 직접 정의
 * install styled-components
 * vscode 에서 vscode-styled-components -> css 글자 색깔 표시 
 */

// styled 내부에 html tag 가지고있음
import styled, { css } from 'styled-components'

const MyGridContainer = styled.ul`
    list-style: none;
    padding: 10px;
    margin: 0;
    width: 1024px;
    border: 5px solid #cc0;
    &:after {
        content: "";
        display: block;
        clear: both;
        float: none;
    }
`;

// width: ${function(props) {
//     return props.width;
// }};

const MyGridItem = styled.li`
    float:left;
    width: ${ (props) => props.width };
`;

const MyBox = styled.div`
    border: 3px dotted #000;
    background-color: #eee;
    height: 100px;
    text-align: center;
    font-size: 20px;
    line-height: 100px;
    cursor: pointer;
    transition: all 0.1s ease-in;
    margin: 5px;

    color: ${(props) => props.color || "black"};

    &:hover {
        transform: scale(1.05,1.05) rotate(-10deg);
        background-color: ${(props) => props.color || "#eeeeee" };
        color: #fff;
    }
    ${(props) => 
    props.number % 2 === 1 && 
    css`
        font-weight: bold;
        font-style: italic;
        text-decoration: underline;
    `}
`;

const StyledComponent = () => {
    const myColors = ['red','green','blue','purple','orange','yellow','pink']
    const myWidth = 100 / myColors.length + "%";
    return (
        <div>
            <MyGridContainer>
                <MyGridItem width={"20%"}>
                    <MyBox>Item1</MyBox>
                </MyGridItem>
                <MyGridItem width = {"10%"}>
                    <MyBox>Item2</MyBox>
                </MyGridItem>
                <MyGridItem>
                    <MyBox>Item3</MyBox>
                </MyGridItem>
                <MyGridItem>
                    <MyBox>Item3</MyBox>
                </MyGridItem>
            </MyGridContainer>

            <h3>use components with array</h3>
            <MyGridContainer>
                {myColors.map((item,index) => {
                    return (
                        <MyGridItem key={index} width={myWidth}>
                            <MyBox color={item} number={index}>
                                {item}
                            </MyBox>
                        </MyGridItem>
                    )
                })}
            </MyGridContainer>
            
        </div>
    );
};



export default StyledComponent;