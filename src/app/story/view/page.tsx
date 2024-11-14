"use client";

import styled from "styled-components";

const ChatBubble = styled.div`
    padding: 14px;
    width: 100%;
    background-color: #F5D95F;
    border-radius: 8px;
    max-width: 300px;
    font-weight: 500;
    div {
        width: 32px;
        height: 32px;
        position: absolute;
        bottom: -26px;
        left: 50%;
        transform: translateX(calc(-50% - 6px));
        rotate: 45deg;
        border-bottom-right-radius: 8px;
        background-color: #F5D95F;
    }
    p {
        font-size: 16px;
        line-height: 20px;
    }
`

const StoryView = () => {
    return (
        <>
            <div className="w-full max-w-[1024px]  flex flex-col justify-start items-start p-[14px] border-solid border-[1px] border-[#9E9E9E] mt-[24px] rounded-[6px]">
                <div className="flex justify-start items-start">
                    <div className="w-[90px] h-[120px] bg-[#D9D9D9] rounded-[6px]">

                    </div>
                    <h2 className="h2 max-w-[calc(100%-104px)] t24 w600 ml-[14px]">골수암 12세 딸 아이의 치료비를 기부해 주세요</h2>
                </div>
                <div className="flex flex-col justify-start items-start mt-[14px] gap-[6px]">
                    <p className="flex justify-start items-center t16 w600">
                        <span className="w-[100px]">국가</span>
                        <span className="text-[#555555]">한국</span>
                    </p>
                    <p className="flex justify-start items-center t16 w600">
                        <span className="w-[100px]">등록일</span>
                        <span className="text-[#555555]">2024.10.22</span>
                    </p>
                    <p className="flex justify-start items-center t16 w600">
                        <span className="w-[100px]">게시자</span>
                        <span className="text-[#555555]">김자선</span>
                    </p>
                </div>

                <div className="w-full py-[1px] rounded-full bg-[#E7E7E7] mt-[20px]"/>

                <div className="w-full flex flex-col justify-start items-center my-[24px] w500">
                    <p className="">
                        저는 3아이를 기르고 있는 30대  과부입니다. 
                        얼마 전 둘째 아이 건강 검진을 받으러 갔다가 청천벽력과도
                        같은 결과를 보고 놀랐습니다.<br/><br/>
                        아이는 이제 12살 5학년인데 골수암 진단을 받게 되었습니다.<br/><br/>
                        아이들 아빠와 4년 전 사별 후 홀로 마트에서 일하며 아이들을 키워 왔습니다. 막내를 유치원에 맡기고, 첫째를 등교 시킨 후 매일 가는 병원은 이제는 익숙한 학교 가는 길 못지 않게 되었습니다. <br/><br/>
                        막막한 저에게 살길을 주실 수 있을지요? 
                    </p>
                </div>
            </div>

            <div className={`w-full max-w-[1024px] flex flex-col lg:flex-row justify-start items-start mt-[14px] gap-[14px]`}>
                <div className="w-full max-w-[505px] sm:!max-w-full sm:h-[220px] p-[14px] border-solid border-[1px] border-[#9E9E9E] rounded-[6px]">
                    <h4 className="t18 w600">기부 희망금액</h4>
                    <p className="mt-[14px] t16"><span className="text-[#555555]">15,000</span> USDT / <span className="text-[#555555]">매월</span></p>

                    <h4 className="t18 w600 mt-[14px]">기부할 사연자의 지갑 주소</h4>
                    <div className="w-full max-sm:flex-col mt-[16px] t16 flex justify-start items-start relative"><p className="text-[#555555] w-[140px]">테더 네트워크 종류</p> <p className="ml-[20px] max-sm:ml-0 w-full max-w-[calc(100%-140px)] max-sm:max-w-max">TRC-20</p></div>
                    <div className="w-full max-sm:flex-col mt-[4px] t16 flex justify-start items-start relative"><p className="text-[#555555] w-[140px]">테더 지갑 주소</p> <p className="ml-[20px] max-sm:ml-0 w-full !max-w-[calc(100%-140px)] max-sm:max-w-max">TR7NHkorMAxGTCi8q93Y4pL8otPzgjLj6t</p></div>
                </div>
                <div className="w-full max-w-[505px] sm:!max-w-full sm:h-[220px] p-[14px] border-solid border-[1px] border-[#9E9E9E] rounded-[6px] flex flex-col justify-start items-center">
                    <ChatBubble>
                        <div />
                        <p>이 사연에 기부 한 후 기부를 인증하세요. 나의 기부를 인증하고 랭킹에 들어 보세요!</p>
                    </ChatBubble>
                    <button className="mt-[40px] p-[6px] px-[14px] bg-black text-white rounded-[6px]">기부 인증하기</button>
                </div>
            </div>
            <div className="w-full flex justify-center items-center mt-[60px]">
                <div className="w-full max-w-[400px] gap-[14px] flex justify-between items-center mt-[24px] w600 text-white">
                    <button className="bg-[#555555] w-full py-[7px] rounded-full">뒤로</button>
                    <button className="bg-[#000000] w-full py-[7px] rounded-full">목록</button>
                </div>
            </div>
        </>
    )
}

export default StoryView;