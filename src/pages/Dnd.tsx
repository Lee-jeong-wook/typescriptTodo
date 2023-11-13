import styled from "styled-components"

interface DndLists{
    id: number,
    text: string
}

export const Dnd = () => {
    const texts = ["안", "녕", "하", "세", "요"]
    return(
        <>
            {
                texts.map((text:string) => {
                    <StyledList>
                        <span>{text}</span>
                    </StyledList>
                })
            }
        </>
    )
}

const StyledList = styled.div`
    width: 500px;
    height: 100px;
    background-color: #fff;
    border: 1px solid #000;
    margin : 10px 0px;
`