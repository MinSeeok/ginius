"use client";

import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import ImageUploadComp from "../../../../../components/upload/ImageUpload";
import { BiSolidFilm, BiSolidImageAlt } from "react-icons/bi";
import { LuFilePlus2 } from "react-icons/lu";
import { MdInsertLink } from "react-icons/md";

const CampaignMissionRegister = () => {
    // mission
    const [mission, setMission] = useState<any>(null);
    const [focusMission, setFocusMission] = useState(false);

    // nation
    const [nation, setNation] = useState<any>(null);
    const [focusNation, setFocusNation] = useState(false);

    const selectMission = (event:any, number:any) => {
        event.stopPropagation();
        setMission(number);
        setFocusMission(false);
    }

    const selectNation = (event:any, nation:String) => {
        event.stopPropagation();
        setNation(nation);
        setFocusNation(false);
    }
    return (
        <div className="w-full max-w-[1024px] min-h-screen flex flex-col justify-start items-start p-[14px]">
            <h1 className="t24 w900">미션 만들기</h1>
            <p className="text-[#9E9E9E]">미션을 게시해 캠페인을 활성화시키세요. </p>
            <div className={`w-full rounded-[4px] mt-[8px] border-solid border-[1.8px] border-[#e9e9e9] p-[14px] py-[10px] outline-none flex justify-between items-center cursor-pointer ${(focusMission === true || mission === null || (focusMission === false && mission === null)) && '!text-[#9E9E9E]'}`} onClick={()=> setFocusMission(!focusMission)}>
                {focusMission === true && '미션을 선택중입니다'}
                {focusMission === false && mission === null && '미션을 선택해주세요'}
                {focusMission === false && mission !== null && `미션 ${mission}`}
                <IoChevronDownOutline className="absolute w-[28px] h-[28px] right-[14px] top-[50%] translate-y-[-50%] text-black z-10" />
                
                <div className={`absolute top-[46px] left-[-2px] w-[calc(100%+4px)] rounded-[4px] mt-[8px] bg-[#F7F7F7] border-solid border-[1.8px] border-[#e9e9e9] h-auto overflow-hidden z-50 ${focusMission === false && '!border-none !h-0'} text-black`}>
                    <div className="p-[14px] w-full" onClick={(event)=>selectMission(event, 1)}>미션1</div>
                    <div className="p-[14px] w-full" onClick={(event)=>selectMission(event, 2)}>미션2</div>
                    <div className="p-[14px] w-full" onClick={(event)=>selectMission(event, 3)}>미션3</div>
                </div>
            </div>


            <input type="text" className="input_1 my-[10px]" placeholder="미션 제목 입력" />

            {/* nation */}
            <h4 className="mt-[20px] w600 t20">국가</h4>
            <div className={`w-full rounded-[4px] mt-[8px] border-solid border-[1.8px] border-[#e9e9e9] p-[14px] py-[10px] outline-none flex justify-between items-center cursor-pointer ${(focusNation === true || nation === null || (focusNation === false && nation === null)) && 'text-[#9E9E9E]'}`} onClick={()=> setFocusNation(!focusNation)}>
                {focusNation === true && '국가를 선택중입니다'}
                {focusNation === false && nation === null && '나의 거주 국가 선택'}
                {focusNation === false && nation !== null && `${nation}`}
                <IoChevronDownOutline className="absolute w-[28px] h-[28px] right-[14px] top-[50%] translate-y-[-50%] text-black z-10" />
                
                <div className={`absolute top-[46px] left-[-2px] w-[calc(100%+4px)] rounded-[4px] mt-[8px] bg-[#F7F7F7] border-solid border-[1.8px] border-[#e9e9e9] h-auto overflow-hidden z-10 ${focusNation === false && '!border-none !h-0'} text-black`}>
                    <div className="p-[14px] w-full" onClick={(event)=>selectNation(event, '한국')}>한국</div>
                    <div className="p-[14px] w-full" onClick={(event)=>selectNation(event, '일본')}>일본</div>
                    <div className="p-[14px] w-full" onClick={(event)=>selectNation(event, '미국')}>미국</div>
                </div>
            </div>

            {/* image-upload */}
            <ImageUploadComp
                title={'미션 썸네일 등록'}
                subtitle={'권장 규격: 최대 480 X 600 권장'}
                subtitle2={'최소 규격 : 최소 160 x 200'}
                subtitle3={'(썸네일은 필수 사항이 아닙니다)'}
            />

            <div className="w-full flex justify-center items-center mt-[20px]">
                <div className="w-full max-w-[360px] p-[14px] bg-[#F7F7F7] rounded-[8px] flex justify-between items-start">
                    <div className="w-[54px] flex flex-col justify-start items-center">
                        <div className="bg-white flex justify-center items-center w-[54px] h-[54px] rounded-full shadow-md">
                            <BiSolidImageAlt className="w-[40px] h-[40px]" />
                        </div>
                        <p className="t16 w600 mt-[8px]">이미지</p>
                    </div>
                    <div className="w-[54px] flex flex-col justify-start items-center">
                        <div className="bg-white flex justify-center items-center w-[54px] h-[54px] rounded-full shadow-md">
                            <BiSolidFilm className="w-[40px] h-[40px]" />
                        </div>
                        <p className="t16 w600 mt-[8px]">동영상</p>
                    </div>
                    <div className="w-[54px] flex flex-col justify-start items-center">
                        <div className="bg-white flex justify-center items-center w-[54px] h-[54px] rounded-full shadow-md">
                            <LuFilePlus2 className="w-[40px] h-[40px]" />
                        </div>
                        <p className="t16 w600 mt-[8px]">파일</p>
                    </div>
                    <div className="w-[54px] flex flex-col justify-start items-center">
                        <div className="bg-white flex justify-center items-center w-[54px] h-[54px] rounded-full shadow-md">
                            <MdInsertLink className="w-[40px] h-[40px]" />
                        </div>
                        <p className="t16 w600 mt-[8px]">링크</p>
                    </div>
                </div>
            </div>
            <textarea className="w-full border-solid border-[1.8px] border-[#9E9E9E] mt-[20px] rounded-[10px] placeholder:text-[#9E9E9E] p-[14px]" placeholder="미션 사항 및 보상입력 *해당 항목은 저장 후 수정이 불가합니다*">

            </textarea>


            {/* plan-card */}
            <h4 className="mt-[20px] w600 t20 flex items-end">홍보 플랜카드 & 핸드폰 이미지 업로드 <span className="w400 t18 text-[#FE8383] ml-[20px] hidden sm:block">가이드 파일 내려받기</span></h4>


            {/* image-upload */}
            <ImageUploadComp
                title={''}
                subtitle={'플랜카드 포멧 : JPG 규격 :700mm x 200mm'}
            />
            <ImageUploadComp
                title={''}
                subtitle={'핸드폰 포멧 : JPG 권장 규격 : 2796 x 1290px'}
                subtitle3={'(아이폰 15 프로 맥스 기준)'}
            />
            <div className="w-full flex justify-center items-center">
                <div className="w-full max-w-[400px] gap-[14px] flex justify-between items-center mt-[24px] w600 text-white">
                    <button className="bg-[#555555] w-full py-[7px] rounded-full">뒤로</button>
                    <button className="bg-[#555555] w-full py-[7px] rounded-full">임시저장</button>
                    <button className="bg-[#000000] w-full py-[7px] rounded-full">등록</button>
                </div>
            </div>
            {/* <input type="text" className="input_1 my-[10px]" placeholder="캠페인 제목 입력" />
            <div className="w-full rounded-[4px] mt-[8px] bg-[#F7F7F7] p-[14px]  flex justify-between items-center">
                <div className="w-[calc(100%-100px)] flex flex-col justify-start items-start ml-[4px]">
                    <h4 className="w600">캠페인 썸네일 등록</h4>
                    <p className="mt-[4px] t16">권장 포멧: PNG, JPG, GIF</p>
                    <p className="t16">권장 규격 : 최대 480 x 600 권장</p>
                    <p className="t16">최소 규격 : 최소 160 x 200</p>
                    <p className="t14">(썸네일은 필수 사항이 아닙니다.)</p>
                </div>
                <div className="w-[80px] h-[110px] bg-white border-dashed border-[1.8px] border-[#9E9E9E] rounded-[8px] flex justify-center items-center cursor-pointer">
                    <MdUpload className="w-[60px] h-[80px]"/>
                </div>
            </div>

            <h4 className="w600 mt-[40px]">캠페인 소개 등록</h4>
            <textarea className="input_1 resize-none h-[330px]" placeholder="캠페인 소개 입력"/>
            <input type="text" className="input_1 my-[10px]" placeholder="태그 입력은 #(해시)로 구분해야 인식됩니다." />
            <div className="w-full flex justify-center items-center">
                <div className="w-full max-w-[400px] gap-[14px] flex justify-between items-center mt-[24px] w600 text-white">
                    <button className="bg-[#555555] w-full py-[7px] rounded-full">뒤로</button>
                    <button className="bg-[#555555] w-full py-[7px] rounded-full">임시저장</button>
                    <button className="bg-[#000000] w-full py-[7px] rounded-full">등록</button>
                </div>
            </div> */}
        </div>
    )
}

export default CampaignMissionRegister;