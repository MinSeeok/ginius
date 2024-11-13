"use client";

import { useState } from "react";
import ImageUploadComp from "../../../../components/upload/ImageUpload";
import { IoChevronDownOutline } from "react-icons/io5";
import { GrSort } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import CampaignCard from "../../../../components/campaign/CampaignCard";

const CompaignList = () => {
    // sort
    const [sort, setSort] = useState<any>('최신순');
    const [focusSort, setFocuSort] = useState(false);

    const selectMission = (event:any, number:any) => {
        event.stopPropagation();
        setSort(number);
        setFocuSort(false);
    }
    return (
        <div className="w-full max-w-[1024px] min-h-screen flex flex-col justify-start items-start p-[14px]">
            <div className="w-full flex justify-between items-center">
                <div className={`w-full max-w-[140px] h-[40px] !m-0 rounded-[4px] border-solid border-[1.8px] border-[#e9e9e9] p-[14px] py-[10px] outline-none flex justify-start items-center cursor-pointer ${(focusSort === true || sort === null || (focusSort === false && sort === null)) && '!text-[#9E9E9E]'}`} onClick={()=> setFocuSort(!focusSort)}>
                    <GrSort className="w-[20px] h-[20px] mr-[8px]"/>
                    {focusSort === true && sort}
                    {focusSort === false && sort === null && '미션을 선택해주세요'}
                    {focusSort === false && sort !== null && `${sort}`}
                    {/* <IoChevronDownOutline className="absolute w-[28px] h-[28px] right-[14px] top-[50%] translate-y-[-50%] text-black z-10" /> */}
                    
                    <div className={`absolute top-[46px] left-[-2px] w-[calc(100%+4px)] rounded-[4px] mt-[8px] bg-[#F7F7F7] border-solid border-[1.8px] border-[#e9e9e9] h-auto overflow-hidden z-50 ${focusSort === false && '!border-none !h-0'} text-black`}>
                        <div className="p-[14px] w-full" onClick={(event)=>selectMission(event, '이름순')}>이름순</div>
                        <div className="p-[14px] w-full" onClick={(event)=>selectMission(event, '최신순')}>최신순</div>
                        <div className="p-[14px] w-full" onClick={(event)=>selectMission(event, '날짜순')}>날짜순</div>
                    </div>
                </div>
                <div className="w-[calc(100%-154px)] max-w-[400px] rounded-[4px] border-solid border-[1.8px] border-[#e9e9e9] p-[14px] py-[10px] outline-none flex justify-start items-center cursor-pointer">
                    <GoSearch className="z-10"/>
                    <input type="text" className="absolute w-full h-full left-0 top-0 p-[8px] pl-[38px] outline-none" placeholder="캠페인 제목 검색" />
                </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-[8px] mt-[20px]">
                {
                    ['CAMPAIN1','CAMPAIN2','CAMPAIN3','CAMPAIN4','CAMPAIN5','CAMPAIN6','CAMPAIN7','CAMPAIN8','CAMPAIN9','CAMPAIN10'].map((content:any, index:number) => (
                        <CampaignCard content={content} index={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default CompaignList;