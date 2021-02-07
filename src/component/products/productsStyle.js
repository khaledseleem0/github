import styled from 'styled-components';
import {Btn} from "./../cart/cardStyle";
export const GraidContainer = styled.div`
                display:grid;
                grid-template-columns: auto auto auto;
                @media screen and (max-width:700px){
                grid-template-columns:  auto auto;
                }
                
                @media screen and(max-width:400px){
                    grid-template-columns: auto ;
                }
` 
export const Pay = styled(Btn)`

`
export const Total = styled.div`
padding:1%;
margin:5%; 
`
export const TotalNumber  = styled.span`
padding:1%;
background:#ffc75f;
`
export const Empty  = styled.div`
text-align: center;
width: 90vw;
display: block;
text-transform: capitalize;
color: #242323;
`