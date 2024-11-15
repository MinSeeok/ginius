"use client";

import { useState } from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";
import { ImBook } from "react-icons/im";
import { IoMdHome } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";
import { MdStoreMallDirectory } from "react-icons/md";
import { RiStackFill } from "react-icons/ri";
import { TfiMoreAlt } from "react-icons/tfi";
import styled from "styled-components";
import NavigationMoveLink from "./moveLink";
import Link from "next/link";

const TopContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 52px;
    padding: 8px 8px 8px 12px;
    background-color: #000000;
    z-index: 999;
    justify-content: space-between;
    align-items: center;

    .left, .right{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .left {
        justify-content: flex-start;
        .logo {
            /* position: absolute;
            top: 50%;
            left: 0px; */
            width: 34px;
            height: 34px;
            /* transform: translateY(calc(-50% + 3px)); */
            cursor: pointer;
            @media screen and (max-width: 640px) {
                width: 24px;
                height: 24px;
            }

            svg {
                width: 100%;
                height: 100%;
                color: #e9e9e9;
            }
        }
        span {
            color: white;
            font-family: 'Paperlogy-8ExtraBold';
            font-size: 24px;
            margin-left: 10px;
        }
    }
`

const LeftContainer = styled.div`
    transition: all ease-in-out .2s;
    min-height: 100vh;
    width: 300px;
    position: fixed;
    left: 0;
    top: 0;
    padding-top: 60px;
    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    @media (max-width: 1280px) {
        width: 192px;
    }
    &.leftView {
        transform: translateX(-500px);
    }
    .menu-box{
        width: 100%;
        padding: 9.5px 12px 0 12px;
        border-radius: 8px;
        font-size: 16px;
        overflow: hidden;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        -webkit-box-pack: start;
        justify-content: flex-start;
        -webkit-box-align: start;
        align-items: center;

        .head {
            width: 100%;
            padding: 8px 4px;
            background-color: #303130;
            border-radius: 8px;
            display: flex;
            justify-content: start;
            align-items: center;
            svg {
                width: 22px;
                height: 22px;
                color: white;
                margin-left: 10px;
            }
            span {
                color: white;
                margin-left: 12px;
                font-weight: 600;
            }
            .chevron {
                position: absolute;
                right: 10px;
                width: 24px;
                height: 24px;
                transition: all ease-in-out .15s;
            }
            &.on .chevron {
                transform: rotate(180deg) !important;
            }
        }
        .moveLink {
            width: 100%;
            padding: 8px 14px 0 14px;
        }
    }
`

const Navigation = () => {
    const [leftView, setLeftView] = useState<boolean>(false);

    // left-focus
    const [campaign, setCampaign] = useState<boolean>(false);
    const [mission, setMission] = useState<boolean>(false);
    const [story, setStory] = useState<boolean>(false);
    const [gini, setGini] = useState<boolean>(false);
    const [more, setMore] = useState<boolean>(false);
    return (
        <>
            <LeftContainer className={`${leftView === true && 'leftView'}`}>
                <div className="menu-box">
                    <Link className="head" href={'/'}>
                        <IoMdHome/>
                        <span>대시보드</span>
                    </Link>
                </div>
                
                <div className="menu-box">
                    <div className={`head ${campaign && 'on'}`} onClick={()=> setCampaign(!campaign)}>
                        <ImBook />
                        <span>캠페인</span>
                        <IoChevronDownOutline className="chevron"/>
                    </div>
                    {
                        campaign && 
                        (
                            <div className="moveLink">
                                <NavigationMoveLink title={'캠페인 작성'} link={'/campaign/register'}/>
                                <NavigationMoveLink title={'캠페인 목록'} link={'/campaign/list'}/>
                            </div>
                        )
                    }
                </div>

                <div className="menu-box">
                    <div className={`head ${mission && 'on'}`} onClick={()=> setMission(!mission)}>
                        <RiStackFill />
                        <span>미션</span>
                        <IoChevronDownOutline className="chevron"/>
                    </div>
                    {
                        mission && 
                        (
                            <div className="moveLink">
                                <NavigationMoveLink title={'미션 만들기'} link={'/campaign/mission/register'}/>
                                <NavigationMoveLink title={'미션 목록'} link={'/campaign/mission/report'}/>
                            </div>
                        )
                    }
                </div>

                <div className="menu-box">
                    <div className={`head ${story && 'on'}`} onClick={()=> setStory(!story)}>
                        <FaBookOpen/>
                        <span>스토리</span>
                        <IoChevronDownOutline className="chevron"/>
                    </div>
                    {
                        story && 
                        (
                            <div className="moveLink">
                                <NavigationMoveLink title={'기부 받을 스토리 만들기'} link={'/story/register'}/>
                                <NavigationMoveLink title={'스토리 목록'} link={'/story/view'}/>
                            </div>
                        )
                    }
                </div>

                <div className="menu-box">
                    <div className={`head ${gini && 'on'}`} onClick={()=> setGini(!gini)}>
                        <MdStoreMallDirectory/>
                        <span>지니포어스 메뉴</span>
                        <IoChevronDownOutline className="chevron"/>
                    </div>
                    {
                        gini && 
                        (
                            <div className="moveLink">
                                <NavigationMoveLink title={'나의 기부 활동'} link={''}/>
                                <NavigationMoveLink title={'유저 기부 활동'} link={''}/>
                                <NavigationMoveLink title={'완료 기부 내역'} link={''}/>
                            </div>
                        )
                    }
                </div>

                <div className="menu-box">
                    <div className={`head ${more && 'on'}`} onClick={()=> setMore(!more)}>
                        <TfiMoreAlt />
                        <span>더보기</span>
                        <IoChevronDownOutline className="chevron"/>
                    </div>
                    {
                        more && 
                        (
                            <div className="moveLink">
                                <NavigationMoveLink title={'개인정보 관리'} link={''}/>
                                <NavigationMoveLink title={'서비스 소개'} link={''}/>
                            </div>
                        )
                    }
                </div>
            </LeftContainer>
            <TopContainer>
                <div className="left">
                    <div 
                        // ref={logoRef} 
                        className="logo z-[99999]"
                    >
                        <AiFillAppstore
                            className={`
                                w-[34px] sm:w-[38px] h-[34px] sm:h-[38px] text-[#979797] translate-y-[-9px] sm:translate-y-[-6px] transition-all
                                hover:text-[#e9e9e9]
                                ${leftView === true && 'text-[#e9e9e9]'}
                            `} 
                            onClick={() => {
                                // leftView === false && setSpaceView(false);
                                setLeftView(!leftView);
                                // seeNavigation();
                            }}
                        />
                    </div>
                    <span>GINI4US</span>
                </div>
                <div className="right">

                </div>
            </TopContainer>
        </>
    )
}

export default Navigation;