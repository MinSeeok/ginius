import Link from "next/link";
import { GiPlainCircle } from "react-icons/gi";
import styled from "styled-components";

interface Props {
    title: string,
    link: string
}

const MoveLinkBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 6px 0;
    color: #9E9E9E;
    transition: all ease-in-out .15s;
    
    &:hover {
        color: black;
    }
    svg {
        width: 8px;
        height: 8px;
        border-radius: 9999px;
    }
    span {
        font-size: 18px;
        margin-left: 8px;
        font-weight: 600;
        letter-spacing: -.3px;
    }
`

const NavigationMoveLink = (prop:Props) => {
    return (
        <Link href={{
            pathname: prop.link
        }}>
            <MoveLinkBox>
                <GiPlainCircle/>
                <span>{prop?.title}</span>
            </MoveLinkBox>
        </Link>
    )
}

export default NavigationMoveLink;