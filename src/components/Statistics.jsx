import { styled } from "styled-components";

const StyledUl = styled.ul`
list-style: none;
padding-left: 0;
& li {
    margin-bottom: 5px;
}
`

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <StyledUl>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback: { positivePercentage  || 0 }%</li>
            </StyledUl>
        </div>
    )
}
