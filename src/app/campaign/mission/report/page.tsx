"use client";

import { useState } from "react";
import { GrSort } from "react-icons/gr";
import { IoChevronDownOutline } from "react-icons/io5";

const CampaignReport = () => {
    // campaign
    const [campaign, setCampaign] = useState<any>('캠페인 선택');
    const [focusCampaign, setFocusCampaign] = useState(false);

    // mission
    const [mission, setMission] = useState<any>('미션 선택');
    const [focusMission, setFocusMission] = useState(false);

    // reward-info
    const [reward, setReward] = useState<Boolean>(false);

    // usdt-wallet
    const [usdt, setUsdt] = useState<any>('테더 네트워크 선택');
    const [focusUsdt, setFocusUsdt] = useState(false);

    // nation
    const [nation, setNation] = useState<any>('나의 거주 국가 선택');
    const [focusNation, setFocusNation] = useState(false);


    // agree
    const [agree, setAgree] = useState<Boolean>(false);

    const selectCampaign = (event:any, number:any) => {
        event.stopPropagation();
        setCampaign(number);
        setFocusCampaign(false);
    }

    const selectMission = (event:any, number:any) => {
        event.stopPropagation();
        setMission(number);
        setFocusMission(false);
    }

    const selectUsdt = (event:any, number:any) => {
        event.stopPropagation();
        setUsdt(number);
        setFocusUsdt(false);
    }

    const selectNation = (event:any, number:any) => {
        event.stopPropagation();
        setNation(number);
        setFocusNation(false);
    }
    return (
        <div className="w-full max-w-[1024px] min-h-screen flex flex-col justify-start items-start p-[14px]">
            <h1 className="t24 w900">미션 만들기</h1>
            <h4 className="t20 w700 mt-[14px]">캠페인 선택</h4>
            <div className={`w-full h-[40px] m-0 mt-[4px] rounded-[4px] border-solid border-[1.8px] border-[#e9e9e9] p-[14px] py-[10px] outline-none flex justify-start items-center cursor-pointer ${(focusCampaign === true || campaign === '캠페인 선택' || (focusCampaign === false && campaign === '캠페인 선택')) && '!text-[#9E9E9E]'}`} onClick={()=> setFocusCampaign(!focusCampaign)}>
                {focusCampaign === true && '-캠페인 선택-'}
                {focusCampaign === false && campaign === '캠페인 선택' && '-캠페인 선택-'}
                {focusCampaign === false && campaign !== '캠페인 선택' && `${campaign}`}
                <IoChevronDownOutline className="absolute w-[28px] h-[28px] right-[14px] top-[50%] translate-y-[-50%] text-black z-10" />
                
                <div className={`absolute top-[36px] left-[-2px] w-[calc(100%+4px)] rounded-[4px] mt-[8px] bg-[#F7F7F7] border-solid border-[1.8px] border-[#e9e9e9] h-auto overflow-hidden z-50 ${focusCampaign === false && '!border-none !h-0'} text-black`}>
                    <div className="p-[14px] w-full" onClick={(event)=>selectCampaign(event, '캠페인1')}>캠페인1</div>
                    <div className="p-[14px] w-full" onClick={(event)=>selectCampaign(event, '캠페인2')}>캠페인2</div>
                    <div className="p-[14px] w-full" onClick={(event)=>selectCampaign(event, '캠페인3')}>캠페인3</div>
                </div>
            </div>

            <h4 className="t20 w700 mt-[40px]">미션 선택</h4>
            <div className={`w-full h-[40px] m-0 mt-[4px] rounded-[4px] border-solid border-[1.8px] border-[#e9e9e9] p-[14px] py-[10px] outline-none flex justify-start items-center cursor-pointer ${(focusMission === true || mission === '미션 선택' || (focusMission === false && mission === '미션 선택')) && '!text-[#9E9E9E]'}`} onClick={()=> setFocusMission(!focusMission)}>
                {focusMission === true && '-미션 선택-'}
                {focusMission === false && mission === '미션 선택' && '-미션 선택-'}
                {focusMission === false && mission !== '미션 선택' && `${mission}`}
                <IoChevronDownOutline className="absolute w-[28px] h-[28px] right-[14px] top-[50%] translate-y-[-50%] text-black z-10" />
                
                <div className={`absolute top-[36px] left-[-2px] w-[calc(100%+4px)] rounded-[4px] mt-[8px] bg-[#F7F7F7] border-solid border-[1.8px] border-[#e9e9e9] h-auto overflow-hidden z-50 ${focusMission === false && '!border-none !h-0'} text-black`}>
                    <div className="p-[14px] w-full" onClick={(event)=>selectMission(event, '미션1')}>미션1</div> 
                    <div className="p-[14px] w-full" onClick={(event)=>selectMission(event, '미션2')}>미션2</div>
                    <div className="p-[14px] w-full" onClick={(event)=>selectMission(event, '미션3')}>미션3</div>
                </div>
            </div>

            <h4 className="t20 w700 mt-[40px]">미션 선택</h4>
            <p className="t16 text-[#9E9E9E] w600">캠페인 미션 인증하는 SNS URL 주소 붙여 넣기 </p>
            <input type="text" className="input_1 mb-[10px] mt-[4px] !border-[#e9e9e9]" placeholder="https://"/>

            {/* reward */}
            <h4 className="t20 w700 mt-[40px]">리워드 정보 입력 방식</h4>
            <div className="w-full flex justify-start items-center">
                <div className="w-auto flex justify-start items-center mt-[16px] cursor-pointer" onClick={()=> setReward(true)}>
                    <div className="w-[24px] h-[24px] border-[2px] border-solid border-black rounded-full flex justify-center items-center">
                        {
                            reward === true &&
                            (
                                <div className="w-[15px] h-[15px] bg-black rounded-full"/>
                            )
                        }
                    </div>
                    <span className={`ml-[6px] w500 ${reward === false && 'text-[#9E9E9E]'}`}>새로 입력</span>
                </div>

                <div className="w-auto flex justify-start items-center mt-[16px] cursor-pointer ml-[80px]"  onClick={()=> setReward(false)}>
                    <div className="w-[24px] h-[24px] border-[2px] border-solid border-black rounded-full flex justify-center items-center">
                        {
                            reward === false &&
                            (
                                <div className="w-[15px] h-[15px] bg-black rounded-full"/>
                            )
                        }
                    </div>
                    <span className={`ml-[6px] w500 ${reward === true && 'text-[#9E9E9E]'}`}>예전 정보 불러오기</span>
                </div>
            </div>

            {/* wallet-address */}
            <h4 className="t20 w700 mt-[40px]">리워드 수령 할 USDT 지갑 주소</h4>
            <div className={`w-full h-[40px] m-0 mt-[4px] rounded-[4px] border-solid border-[1.8px] border-[#e9e9e9] p-[14px] py-[10px] outline-none flex justify-start items-center cursor-pointer ${(focusUsdt === true || usdt === '캠페인 선택' || (focusUsdt === false && usdt === '캠페인 선택')) && '!text-[#9E9E9E]'}`} onClick={()=> setFocusUsdt(!focusUsdt)}>
                {focusUsdt === true && '-테더 네트워크 선택-'}
                {focusUsdt === false && usdt === '테더 네트워크 선택' && '-테더 네트워크 선택-'}
                {focusUsdt === false && usdt !== '테더 네트워크 선택' && `${usdt}`}
                <IoChevronDownOutline className="absolute w-[28px] h-[28px] right-[14px] top-[50%] translate-y-[-50%] text-black z-10" />
                
                <div className={`absolute top-[36px] left-[-2px] w-[calc(100%+4px)] rounded-[4px] mt-[8px] bg-[#F7F7F7] border-solid border-[1.8px] border-[#e9e9e9] h-auto overflow-hidden z-50 ${focusUsdt === false && '!border-none !h-0'} text-black`}>
                    <div className="p-[14px] w-full" onClick={(event)=>selectUsdt(event, '테더 네트워크 1')}>테더 네트워크 1</div>
                    <div className="p-[14px] w-full" onClick={(event)=>selectUsdt(event, '테더 네트워크 2')}>테더 네트워크 2</div>
                    <div className="p-[14px] w-full" onClick={(event)=>selectUsdt(event, '테더 네트워크 3')}>테더 네트워크 3</div>
                </div>
            </div>
            <input type="text" className="input_1 mb-[10px] mt-[4px] !border-[#e9e9e9]" placeholder="테더 지갑 주소 입력 (네트워크별 주소 형식 유의)"/>

            {/* nation */}
            <h4 className="t20 w700 mt-[40px]">국가</h4>
            <div className={`w-full h-[40px] m-0 mt-[4px] rounded-[4px] border-solid border-[1.8px] border-[#e9e9e9] p-[14px] py-[10px] outline-none flex justify-start items-center cursor-pointer ${(focusNation === true || nation === '나의 거주 국가 선택' || (focusNation === false && nation === '나의 거주 국가 선택')) && '!text-[#9E9E9E]'}`} onClick={()=> setFocusNation(!focusNation)}>
                {focusNation === true && '나의 거주 국가 선택'}
                {focusNation === false && nation === '나의 거주 국가 선택' && '나의 거주 국가 선택'}
                {focusNation === false && nation !== '나의 거주 국가 선택' && `${nation}`}
                <IoChevronDownOutline className="absolute w-[28px] h-[28px] right-[14px] top-[50%] translate-y-[-50%] text-black z-10" />
                
                <div className={`absolute top-[36px] left-[-2px] w-[calc(100%+4px)] rounded-[4px] mt-[8px] bg-[#F7F7F7] border-solid border-[1.8px] border-[#e9e9e9] h-auto overflow-hidden z-50 ${focusNation === false && '!border-none !h-0'} text-black`}>
                    <div className="p-[14px] w-full" onClick={(event)=>selectNation(event, '한국')}>한국</div>
                    <div className="p-[14px] w-full" onClick={(event)=>selectNation(event, '미국')}>미국</div>
                    <div className="p-[14px] w-full" onClick={(event)=>selectNation(event, '일본')}>일본</div>
                </div>
            </div>

            {/* name */}
            <h4 className="t20 w700 mt-[40px]">실명</h4>
            <input type="text" className="input_1 mb-[10px] mt-[4px] !border-[#e9e9e9]" placeholder="이름+성"/>

            {/* birth */}
            <h4 className="t20 w700 mt-[40px]">생년월일(YYYYMMDD)</h4>
            <input type="text" className="input_1 mb-[10px] mt-[4px] !border-[#e9e9e9]" placeholder="(ex.19990101)"/>
            
            {/* email */}
            <h4 className="t20 w700 mt-[40px]">이메일</h4>
            <input type="text" className="input_1 mb-[10px] mt-[4px] !border-[#e9e9e9]" placeholder="이메일"/>

            {/* phone */}
            <h4 className="t20 w700 mt-[40px]">핸드폰 번호</h4>
            <input type="text" className="input_1 mb-[10px] mt-[4px] !border-[#e9e9e9]" placeholder="핸드폰 번호"/>

            <p className="t14">위 개인 정보 및 URL 등은 캠페인 미션완료에 대한 보상을 받기 위한목적으로 이용합니다. 잘 못 입력된 지갑 주소로 인한 사고는 이용자 본인 책임입니다. 이에 동의 하십니까?</p>
            <div className="w-full flex justify-center items-center mt-[40px]">
                <div className="w-auto flex justify-start items-center mt-[16px] cursor-pointer" onClick={()=> setAgree(true)}>
                    <div className="w-[24px] h-[24px] border-[2px] border-solid border-black rounded-full flex justify-center items-center">
                        {
                            agree === true &&
                            (
                                <div className="w-[15px] h-[15px] bg-black rounded-full"/>
                            )
                        }
                    </div>
                    <span className={`ml-[6px] w500 ${agree === false && 'text-[#9E9E9E]'}`}>동의합니다</span>
                </div>

                <div className="w-auto flex justify-start items-center mt-[16px] cursor-pointer ml-[80px]"  onClick={()=> setAgree(false)}>
                    <div className="w-[24px] h-[24px] border-[2px] border-solid border-black rounded-full flex justify-center items-center">
                        {
                            agree === false &&
                            (
                                <div className="w-[15px] h-[15px] bg-black rounded-full"/>
                            )
                        }
                    </div>
                    <span className={`ml-[6px] w500 ${agree === true && 'text-[#9E9E9E]'}`}>동의하지 않습니다</span>
                </div>
            </div>

            <div className="w-full flex justify-center items-center mt-[60px]">
                <div className="w-full max-w-[400px] gap-[14px] flex justify-between items-center mt-[24px] w600 text-white">
                    <button className="bg-[#555555] w-full py-[7px] rounded-full">뒤로</button>
                    <button className="bg-[#555555] w-full py-[7px] rounded-full">임시저장</button>
                    <button className="bg-[#000000] w-full py-[7px] rounded-full">등록</button>
                </div>
            </div>
        </div>
    )
}

export default CampaignReport;