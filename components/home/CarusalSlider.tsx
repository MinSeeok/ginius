"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useDebounceBoolean } from "./../../func/usedebounce";

const Container = styled.div`
    position: relative;
    width: 100%;
    min-height: 380px;
    cursor: pointer;
    overflow: hidden;
    border-radius: 14px;
    overflow: hidden;
    background-color: #E9E9E9;
    
    .content-container {
        width: 100%;
        height: 100%;
    }
    .content-box {
        width: 100%;
        min-height: 380px;
        display: flex;
        justify-content: center;
        align-items: center;

        .bg-image {
            width: 100%;
            height: 100%;
            min-height: 380px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                filter: blur(2px) brightness(.7);
            }
        }
    }
    .dark-box {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,0,0,0), #141414);
    }
    .content-box2 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        min-height: 380px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: end;
        padding: 14px 20px;

        .conetnet-image {
            width: 190px;
            height: 250px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            border-radius: 8px;
            background-color: #CDCDCD;
        }
        .text-box {
            width: 100%;
            padding-left: 4px;
            margin-top: 40px;
            h1 {
                font-size: 28px;
                color: white;
                font-weight: 600;
            }
            h2 {
                font-size: 20px;
                color: #CDCDCD;
                font-weight: 600;
                margin-top: 4px;
            }
            .title-image {
                position: absolute;
                left: 0px;
                top: -114px;
                width: 100px;
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 6px;
                overflow: hidden;
            }
        }
    }
    .left-button {
        position: absolute;
        padding: 10px 4px;
        background-color: rgb(0 0 0 / 0.4);
        color: white;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 50;
        display: none;
    }
    .right-button {
        position: absolute;
        padding: 10px 4px;
        background-color: rgb(0 0 0 / 0.4);
        color: white;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 50;
        display: none;
    }
    .sequence {
        position: absolute;
        padding: 4px 14px;
        border-radius: 14px;
        background-color: rgb(0 0 0 / 0.4);
        color: white;
        right: 30px;
        bottom: 20px;
    }

    .button-svg {
        width: 20px;
        height: 20px;
    }

    &:hover{
        .left-button , .right-button {
            display: block;
        }
    }

`
function PrevArrow(props:any){
    const {onClick } = props;
    return (
        <div onClick={onClick} className="left-button">
            <IoChevronBackOutline className="button-svg"/>
        </div>
    )
}

function NextArrow(props:any){
    const {onClick } = props;
    return (
        <div onClick={onClick} className="right-button">
            <IoChevronForwardOutline className="button-svg"/>
        </div>
    )
}

const GiniusHomeCarusal = (prop:any) => {
    // const router = useRouter();
    const [dragging, setDragging] = useState(false);
    const debouncedDragging = useDebounceBoolean(dragging, 500);

    useEffect(() => {
        if(debouncedDragging) {
            setDragging(false);
        } else {
        }
    },[debouncedDragging]);

    function dragHandler(){
        setTimeout(()=>{
            if(dragging){
                setDragging(false);
            }
        },500)
    }
    const handleBeforeChange = useCallback(() => {
        setDragging(true);
        dragHandler();
    }, []);

    const handleAfterChange = useCallback(() => {
        setDragging(false);
    }, []);
    useMemo(()=>{
        if(dragging){
            setTimeout(()=>{
                setDragging(false);
            },500)
        }
    },[dragging])

    // const onClickCard = (event:any, content:any) => {
    //     if (dragging) {
    //         event.stopPropagation();
    //         return;
    //     }
    //     content.landing_url ? 
    //     content.landing_yn === 'N' ? 
    //     window.open(content.landing_url) : 
    //     window.open(content.landing_url) : 
    //     alert('현재 준비중인 서비스입니다');
    // }
    const settings = {
        dots: false,
        infinite: true,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        touchThreshold: 500,
        beforeChange: handleBeforeChange,
        afterChange: handleAfterChange
    };
    // useEffect(()=>{
    //     prop.step(1);
    // },[prop.data]);
    return (
        <Container className={``}>
            {/* <Slider {...settings}>
                {
                    SwaiperData.productList[0] && SwaiperData.productList?.map((content:any, index:any) => (
                        <div 
                            key={index} 
                            className={`content-container ${dragging === true && '!pointer-events-none'}`} 
                            onClick={(event:any) => onClickCard(event, content)}
                        >
                            <div className="content-box">
                                <div className="bg-image">
                                    <Image
                                        src={content?.width_images[0]?.image_url}
                                        layout="fill"
                                        objectFit="cover"
                                        alt="..."
                                        loading="eager"
                                        quality={50}
                                        placeholder="blur"
                                        blurDataURL={content?.width_images[0]?.image_url}
                                        priority
                                    />
                                    
                                </div>
                            </div>
                            <div className="dark-box"/>
                            <div className="content-box2">
                                <div className="conetnet-image">
                                    <Image
                                        src={content?.height_images[0]?.image_url}
                                        layout="fill"
                                        objectFit="cover"
                                        alt="..."
                                        loading="eager"
                                        quality={50}
                                        placeholder="blur"
                                        blurDataURL={content?.height_images[0]?.image_url}
                                        priority
                                    />
                                </div>
                                <div className="text-box">
                                    <div className="title-image">
                                        <Image
                                            src={content?.title_images[0]?.image_url}
                                            layout="fill"
                                            objectFit="cover"
                                            alt="..."
                                            loading="eager"
                                            placeholder="blur"
                                            blurDataURL={content?.title_images[0]?.image_url}
                                            priority
                                        />
                                    </div>
                                    <h1>{content?.title_main}</h1>
                                    <h2>{content?.title_sub}</h2>
                                </div>
                            </div>
                            <div className="sequence">
                                <span>{index+1} / {prop.data.length}</span>
                            </div>
                        </div>
                    ))
                }
            </Slider> */}
            <Slider {...settings}>
                <div 
                    className={`content-box bg-red-400 ${dragging === true && '!pointer-events-none'}`}
                >
                    <h3>1111</h3>
                </div>
                <div>
                    <h3>2222</h3>
                </div>
                <div>
                    <h3>3333</h3>
                </div>
                <div>
                    <h3>444</h3>
                </div>
                <div>
                    <h3>555</h3>
                </div>
                <div>
                    <h3>666</h3>
                </div>
            </Slider>
            {
                !!prop.data === null &&
                (
                    <div className="skeleton-item"/>
                )
            }
        </Container>
    )
}

export default GiniusHomeCarusal;