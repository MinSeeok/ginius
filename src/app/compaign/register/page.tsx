import { MdUpload } from "react-icons/md";

const CompaignRegister = () => {
    return (
        <div className="w-full max-w-[1024px] min-h-screen flex flex-col justify-start items-start p-[14px]">
            <h1 className="t24 w900">캠페인 등록</h1>
            <p className="text-[#9E9E9E]">당신의 자선 활동을 펼쳐보세요.</p>
            <input type="text" className="input_1 my-[10px]" placeholder="캠페인 제목 입력" />
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
            </div>
        </div>
    )
}

export default CompaignRegister;