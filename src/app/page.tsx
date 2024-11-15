import GiniusHomeCarusal from "../../components/home/CarusalSlider";
import { MdHomeFilled, MdStar } from "react-icons/md";
import { RiFileTextFill } from "react-icons/ri";
import { SiGitbook } from "react-icons/si";
import Gini4uSlider from "../../components/home/Gini4usSlider";

export default function Home() {
    return (
        <div className="flex w-full max-w-[1024px] flex-col justify-start items-center my-[40px]">
            <GiniusHomeCarusal/>
            <div className="w-full flex justify-center items-center mt-[20px]">
                <div className="w-full max-w-[360px] p-[14px] bg-[#F7F7F7] rounded-[8px] flex justify-between items-start">
                    <div className="w-[70px] flex flex-col justify-start items-center">
                        <div className="bg-white flex justify-center items-center w-[54px] h-[54px] rounded-full shadow-md">
                            <MdHomeFilled className="w-[40px] h-[40px]" />
                        </div>
                        <p className="t14 w600 mt-[8px]">캠페인</p>
                    </div>
                    <div className="w-[70px] flex flex-col justify-start items-center">
                        <div className="bg-white flex justify-center items-center w-[54px] h-[54px] rounded-full shadow-md">
                            <RiFileTextFill className="w-[40px] h-[40px]" />
                        </div>
                        <p className="t14 w600 mt-[8px]">캠페인 보고</p>
                    </div>
                    <div className="w-[70px] flex flex-col justify-start items-center">
                        <div className="bg-white flex justify-center items-center w-[54px] h-[54px] rounded-full shadow-md">
                            <SiGitbook className="w-[40px] h-[40px]" />
                        </div>
                        <p className="t14 w600 mt-[8px]">기부스토리</p>
                    </div>
                    <div className="w-[70px] flex flex-col justify-start items-center">
                        <div className="bg-white flex justify-center items-center w-[54px] h-[54px] rounded-full shadow-md">
                            <MdStar className="w-[40px] h-[40px]" />
                        </div>
                        <p className="t14 w600 mt-[8px]">기부랭킹</p>
                    </div>
                </div>
            </div>
            <Gini4uSlider type={'main'}/>
        </div>
    );
}
