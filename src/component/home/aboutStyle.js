import styled from "styled-components";
export const Abouts = styled.div ` 
  position:relative;
  height:100vh
  @media screen and (max-width: 700px) {
    height: auto;
  }
`
export const ImgAbout = styled.div `
  width: 50%;
  float: left;
  
@media screen and (max-width: 700px) {
    width: 100%;
    float: none;
    clear: both;
    position:relative;
  }
}
`

export const Img = styled.img `
  width: 100%;
  
@media screen and (max-width: 700px) {
    width: 100%;

}
`

export const Content = styled.div `
    width: 70%;
    float: right;
    margin: 10px 0px;
    position: relative;
    background: #fff;
    padding: 5%;
    top: -136px !important;
    right: 0%;
@media screen and (max-width: 700px) {
    width: 100%;
    float: none;
    clear: both;
    position:relative;
    top: auto; 
     right: auto;
}
`
export const Paragraph = styled.p `
    line-height: 23px;
    padding: 5%;
  `

