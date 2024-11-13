import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import styled from "styled-components";

const CampaignContainer = styled.div`
    width: 100%;
    padding: 10.5px;
    display: flex;
    justify-content: start;
    align-items: start;
    border: 1.4px solid #9E9E9E;
    border-radius: 4px;

    .image-box {
        width: 90px;
        height: 120px;
        background-color: #D9D9D9;
        border-radius: 6px;
    }
    .text-box {
        width: calc(100% - 130px);
        padding-left: 14px;
        font-size: 22px;
        font-weight: 700;
        line-height: 24px;
        height: 120px;
        
        .state-text {
            font-size: 16px;
            font-weight: 400;
            color: #E4515B;
            margin: 0;
            line-height: 20px;
        }
        .data-text-box {
            position: absolute;
            bottom: 0;
            left: 14px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
            font-size: 16px;
            font-weight: 400;

            span {
                position: absolute;
                right: 0;
                color: #555555;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                svg {
                    width: 24px;
                    height: 24px;
                    margin-left: 0px;
                    transition: all ease-in-out .15s;
                }
            }
            span.more {
                svg {
                    transform: rotate(180deg);
                }
            }
        }
    }
`

const MoreContainer = styled.div`
    width: calc(100% - 40px);
    height: 110px;
    padding: 10.5px;
    display: flex;
    justify-content: start;
    align-items: start;
    border: 1.4px solid #9E9E9E;
    border-radius: 4px;
    margin-left: 40px;

    .line-left {
        width: 3px;
        height: 110px;
        background-color: #9E9E9E;
        position: absolute;
        top: 0px;
        left: -22px;
    }
    .line-circle {
        width: 14px;
        height: 14px;
        background-color: #9E9E9E;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -28px;
        border-radius: 9999px;
    }

    h2 {
        font-size: 20px;
        font-weight: 600;
    }
    .data-text-box {
        position: absolute;
        bottom: 10px;
        left: 14px;
        width: calc(100% - 30px);
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        font-size: 16px;
        font-weight: 400;

        span {
            position: absolute;
            right: 0;
            color: #555555;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            svg {
                width: 24px;
                height: 24px;
                margin-left: 0px;
                transition: all ease-in-out .15s;
            }
        }
        span.more {
            svg {
                transform: rotate(180deg);
            }
        }
    }
`

const CampaignCard = (prop:any) => {
    const [more, setMore] = useState<any>(false);
    return (
        <>
            <CampaignContainer className="w-full p-[8px] flex justify-start items-center border-[2px] border-solid border-[#9E9E9E]">
                <div className="image-box">
                </div>
                <div className="text-box">
                    <h2>{prop.content}</h2>
                    <p className="state-text">캠페인 등재 완료</p>
                    <div className="data-text-box">
                        <p className="w-full flex justify-between items-center">
                            등록일
                            <span>2024.11.23</span>
                        </p>
                        <p className="w-full flex justify-between items-center">
                            게시자
                            <span>김자선</span>
                        </p>
                        <p className="w-full flex justify-between items-center">
                            관련 미션
                            <span className={`${more && 'more'}`} onClick={()=> setMore(!more)}>{more ? '접어보기' : '펼쳐보기'}<IoChevronDownOutline/></span>
                        </p>
                    </div>
                </div>
            </CampaignContainer>
            {
                more && (
                    <MoreContainer>
                        <div className="line-left"/>
                        <div className="line-circle"/>
                        <h2>미션 제목</h2>
                        <div className="data-text-box">
                            <p className="w-full flex justify-between items-center">
                                등록일
                                <span>2024.11.23</span>
                            </p>
                            <p className="w-full flex justify-between items-center">
                                캠페인명
                                <span>지니포어스</span>
                            </p>
                        </div>
                    </MoreContainer>
                )
            }
        </>
    )
}

export default CampaignCard;