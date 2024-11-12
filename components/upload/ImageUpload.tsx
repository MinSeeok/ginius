import { MdUpload } from "react-icons/md";
import styled from "styled-components";

const ImageUploadContainer = styled.div`
    width: 100%;
    padding: 14px;
    border: 2px dashed #9E9E9E;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    .upload-svg {
        width: 92px;
        height: 92px;
        margin-top: 14px;
    }
    .subtitle3 {
        margin-top: 8px;
    }
`

const ImageUploadComp = (prop:any) => {
    return (
        <ImageUploadContainer>
            {
                prop.title !== '' &&
                (
                    <h4 className="w600 t20">{prop.title}</h4>
                )
            }
            <MdUpload className="upload-svg" />
            {
                prop.subtitle !== '' &&
                (
                    <h4 className="t18 text-[#9E9E9E]">{prop.subtitle}</h4>
                )
            }
            {
                prop.subtitle2 !== '' &&
                (
                    <h4 className="t18 text-[#9E9E9E]">{prop.subtitle2}</h4>
                )
            }
            {
                prop.subtitle3 !== '' &&
                (
                    <p className="t16 mt-[10px] subtitle3">{prop.subtitle3}</p>
                )
            }
        </ImageUploadContainer>
    )
}

export default ImageUploadComp;