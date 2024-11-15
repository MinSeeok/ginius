import styled from "styled-components";

const ContentBox = styled.div`
    min-width: 140px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    cursor: pointer;
    .image {
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        overflow: hidden;
        background-color: #e9e9e9;
        img {
            transition: all ease-in-out .2s;
        }
    }
    .title {
        max-width: 140px;
        margin-top: 4px;
        font-size: 14px;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .label {
        margin-top: 4px;
        font-size: 12px;
        padding: 3px 6px;
        color: white;
        border-radius: 2px;
        &.copyright {
            background-color: #34495e;
        }
        &.propertyright {
            background-color: #e67e22;
        }
    }
    .price {
        margin-top: 2px;
        font-weight: 600;
        color: #e74c3c;
    }
    .period {
        margin-top: 4px;
        color: #777777;
    }
    &:hover{
        img {
            transform: scale(1.1);
        }
    }
`

const SliderContentBox = (prop:any) => {
    return (
        <ContentBox>
            <div className="image">
                
            </div>
            {/* <p className="title">{prop && prop.content && prop.content.content_name}</p>
            <span className={`label ${prop && prop.content && prop.content.event_content_type_name === '저작권' ? 'copyright' : 'propertyright'}`}>
                {prop && prop.content && prop.content.event_content_type_name}
            </span> */}
        </ContentBox>
    )
}

export default SliderContentBox;