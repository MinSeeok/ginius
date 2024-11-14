"use client";

import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import ImageUploadComp from "../../../../components/upload/ImageUpload";

const StoryRegister = () => {
    // nation
    const [nation, setNation] = useState<any>('나의 거주 국가 선택');
    const [focusNation, setFocusNation] = useState(false);

    // usdt-wallet
    const [usdt, setUsdt] = useState<any>('테더 네트워크 선택');
    const [focusUsdt, setFocusUsdt] = useState(false);

    // usdt-wallet
    const [cycle, setCycle] = useState<any>('주기 선택');
    const [focusCycle, setFocusCycle] = useState(false);

    const selectNation = (event:any, number:any) => {
        event.stopPropagation();
        setNation(number);
        setFocusNation(false);
    }

    const selectUsdt = (event:any, number:any) => {
        event.stopPropagation();
        setUsdt(number);
        setFocusUsdt(false);
    }
    const selectCycle = (event:any, number:any) => {
        event.stopPropagation();
        setCycle(number);
        setFocusCycle(false);
    }
    return (
        <div className="w-full max-w-[1024px] min-h-screen flex flex-col justify-start items-start p-[14px]">
            <h1 className="t24 w900">기부 받을 스토리 만들기</h1>
            <p className="text-[#9E9E9E]">나의 사연, 나의 봉사를 알리고 자선을 요청하세요.</p>
            <input type="text" className="input_1 my-[10px]" placeholder="기부받을 스토리 제목 입력" />

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

            {/* image-upload */}
            <ImageUploadComp
                title={'스토리 썸네일 등록'}
                subtitle={'권장 규격: 최대 480 X 600 권장'}
                subtitle2={'최소 규격 : 최소 160 x 200'}
                subtitle3={'(썸네일은 필수 사항이 아닙니다)'}
            />

            <h4 className="t20 w700 mt-[40px]">스토리 소개 본문</h4>
            <textarea className="w-full border-solid border-[1.8px] border-[#9E9E9E] mt-[4px] rounded-[10px] placeholder:text-[#9E9E9E] p-[14px]" placeholder="스토리 소개 입력 *해당 항목은 저장 후 수정이 불가합니다*">

            </textarea>

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

            {/* wallet-address */}
            <h4 className="t20 w700 mt-[40px]">기부 요청 금액</h4>
            <div className="w-full flex justify-start items-center">
                <input type="text" className="input_1 mb-[10px] mt-[4px] !border-[#e9e9e9] !w-[calc(100%-60px)]" placeholder="금액 입력"/>
                <span className="absolute right-[6px]">USDT</span>
            </div>

            {/* cycle */}
            <h4 className="t20 w700 mt-[40px]">어떤 주기별로 기부금 받길 희망하세요?</h4>
            <div className={`w-full h-[40px] m-0 mt-[4px] rounded-[4px] border-solid border-[1.8px] border-[#e9e9e9] p-[14px] py-[10px] outline-none flex justify-start items-center cursor-pointer ${(focusCycle === true || cycle === '주기 선택' || (focusCycle === false && cycle === '주기 선택')) && '!text-[#9E9E9E]'}`} onClick={()=> setFocusCycle(!focusCycle)}>
                {focusCycle === true && '-주기 선택-'}
                {focusCycle === false && cycle === '주기 선택' && '-주기 선택-'}
                {focusCycle === false && cycle !== '주기 선택' && `${cycle}`}
                <IoChevronDownOutline className="absolute w-[28px] h-[28px] right-[14px] top-[50%] translate-y-[-50%] text-black z-10" />
                
                <div className={`absolute top-[36px] left-[-2px] w-[calc(100%+4px)] rounded-[4px] mt-[8px] bg-[#F7F7F7] border-solid border-[1.8px] border-[#e9e9e9] h-auto overflow-hidden z-50 ${focusCycle === false && '!border-none !h-0'} text-black`}>
                    <div className="p-[14px] w-full" onClick={(event)=>selectCycle(event, '연')}>연</div>
                    <div className="p-[14px] w-full" onClick={(event)=>selectCycle(event, '분기')}>분기</div>
                    <div className="p-[14px] w-full" onClick={(event)=>selectCycle(event, '월')}>월</div>
                </div>
            </div>

            {/* tag */}
            <h4 className="t20 w700 mt-[40px]">태그 입력</h4>
            <div className="w-full flex justify-start items-center">
                <input type="text" className="input_1 mb-[10px] mt-[4px] !border-[#e9e9e9]" placeholder="태그 입력은 #(해시)로 구분해야 인식됩니다"/>
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

export default StoryRegister;