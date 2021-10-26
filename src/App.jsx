import React, {useState, useEffect,useRef, useCallback, useMemo} from 'react';
import Styled from 'styled-components';
const colorlist = ['#aaa','#f00', '#0f0', '#00f', '#000','#0ff', '#ff0', '#f0f' , '#555'];

const App = () => {
    const box = useRef(null);
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState('#000');

    const randomColor = useCallback(() => {
        let random = Math.round(Math.random() * 10);
        random = random == 10 ? 9 : random;
        setColor(colorlist[random]);

    },[]);

    useEffect(() => {
        console.log('랜더링 되었습니다.');
    }, []);


    const up = useCallback(() => {
        setNumber(number+2);
        randomColor();
    }, [number]);
    
    const down = useCallback(()=>{
        setNumber(number-2);
        randomColor();
    }, [number]);
    const allTag = useMemo(() => {

        return(
            <>
            {/* Hello! React!! */}
            <Btn onClick = {up}>up</Btn> 
            <NumTag>{number}</NumTag> 
            <Btn onClick = {down}>down</Btn>
            <Wrap num={number} color={color}>
                <div ref = {box}/>
            </Wrap>
            <br/>


        </>
    )
}, [number]);
return allTag;
}

export default App;

const NumTag = Styled.span`
    display : inline-block;
    margin : 0 10px;
`;
// JSSS

const Btn = Styled.button`
    border : none;
    background-color : black;
    color : #fff;
    padding : 10px 20px;
`;

const Wrap = Styled.section`
    width : 300px;
    height : 600px;
    border : red 1px solid;
    position : relative;
    & > div {
        position : absolute;
        left : 0;
        bottom : ${({num})=> num}%;
        width : 100%;
        height : 50px;
        background-color : ${({color}) => color};
    }
`;