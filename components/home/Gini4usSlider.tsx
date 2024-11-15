"use client";

import { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import styled from "styled-components";
import SliderContentBox from "./SliderContentBox";

const TodayContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 30px 0 30px 0;
    margin-top: 40px;
    h2 {
        width: 100%;
        margin-bottom: 10px;
        display: flex;
        justify-content: start;
        align-items: end;

        span {
            position: absolute;
            right: 0;
            color: #7B7B7B;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
        }
    }
    .title {
        font-size: 20px;
        font-weight: 600;
        line-height: 22px;
    }
    .content-box {
        width: 100%;
        min-height: 225px;
        display: flex;
        justify-content: start;
        align-items: start;
        overflow-x: scroll;
        ::-webkit-scrollbar {
            display: none;
        }

        .content-array {
            width: 100%;
            display: flex;
            justify-content: start;
            align-items: start;
            gap: 10px;
            transition: all ease-in-out .3s;
            -webkit-scrollbar{
                display:none;
            }
            &.focus {
                transform: translateX(-490px);
            }
        }
    }
    .left-button , .right-button{
        cursor: pointer;
        svg {
            width: 20px;
            height: 20px;
        }
    }
    .left-button {
        position: absolute;
        padding: 10px 4px;
        background-color: rgb(0 0 0 / 0.6);
        color: white;
        left: 0;
        top: 120px;
        display: none;
        &.main {
            top: 160px;
        }
    }
    .right-button {
        position: absolute;
        padding: 10px 4px;
        background-color: rgb(0 0 0 / 0.6);
        color: white;
        right: 0;
        top: 120px;
        display: none;
        &.main {
            top: 160px;
        }
    }
    &:hover{
        .left-button , .right-button {
            display: block;
        }
    }
`

const Gini4uSlider = (prop:any) => {
    const [focus, setFocus] = useState<boolean>(true);
    return (
        <TodayContainer>
            <h2 className="h2">
                {
                    prop.type !== 'storyView' &&
                    (
                        <div className="w-full flex flex-col justify-start items-start">
                            <h4 className="title">오늘의 스토리</h4>
                            <p className="t16 text-[#9E9E9E]">당신의 도움을 필요로 합니다.</p>
                        </div>
                    )
                }
                {
                    prop.type !== 'storyView' &&
                    (
                        <span className="dark:text-[#bbbbbb]">전체보기</span>
                    )
                }
            </h2>
            <div className={`content-box`}>
                <div className={`content-array ${focus === false && 'focus'}`}>
                    <SliderContentBox keyword={'load'}/>
                    <SliderContentBox keyword={'load'}/>
                    <SliderContentBox keyword={'load'}/>
                    <SliderContentBox keyword={'load'}/>
                    <SliderContentBox keyword={'load'}/>
                    <SliderContentBox keyword={'load'}/>
                    <SliderContentBox keyword={'load'}/>
                    <SliderContentBox keyword={'load'}/>
                    <SliderContentBox keyword={'load'}/>
                    <SliderContentBox keyword={'load'}/>
                </div>
            </div>
            <div className={`left-button ${prop.type === 'main' && 'main'} ${focus === true && '!hidden'}`} onClick={()=> setFocus(true)}>
                <IoChevronBackOutline className={`button-svg ${focus === true && '!text-[#777777]'}`}/>
            </div>
            <div className={`right-button ${prop.type === 'main' && 'main'} ${focus === false && '!hidden'}`} onClick={()=> setFocus(false)}>
                <IoChevronForwardOutline className={`button-svg ${focus === false && '!text-[#777777]'}`}/>
            </div> 
        </TodayContainer>
    )
}

export default Gini4uSlider;