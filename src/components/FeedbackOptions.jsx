import { styled } from "styled-components"

const Button = styled.button`
height: 30px;
padding-left: 20px;
padding-right: 20px;
margin-right: 10px;
border: 1px solid #eee;
border-radius: 5px;
box-shadow: 0px 2px 9px -4px rgba(0,0,0,0.42);
background-color: white;
cursor: pointer;
text-transform: capitalize;
transition: border 250ms linear, background-color 250ms linear;

&:hover {
    border: 1px solid #0088ff;
    background-color: #0088ff;
    color: white;

}
`

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(option => <Button key={option} onClick={()=>onLeaveFeedback(option)}>{option}</Button>)}
        </div>
    )
}
