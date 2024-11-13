"use client";

import ImageUploadComp from "../../../../components/upload/ImageUpload";

const CompaignRegister = () => {
    return (
        <div className="w-full max-w-[1024px] min-h-screen flex flex-col justify-start items-start p-[14px]">
            <h1 className="t24 w900">캠페인 등록</h1>
            <p className="text-[#9E9E9E]">당신의 자선 활동을 펼쳐보세요.</p>
            <input type="text" className="input_1 my-[10px]" placeholder="캠페인 제목 입력" />
            {/* image-upload */}
            <ImageUploadComp
                title={'캠페인 썸네일 등록'}
                subtitle={'권장 규격: 최대 480 X 600 권장'}
                subtitle2={'최소 규격 : 최소 160 x 200'}
                subtitle3={'(썸네일은 필수 사항이 아닙니다)'}
            />

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