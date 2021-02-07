import  styled from "styled-components";
export const FooterContainer  = styled.footer`
padding:5%;
margin:5% 0% 0% 0% ;
background:#222222;
color:#fff;
ul{
display: grid;
grid-template-columns: auto auto auto;
list-style: none;
@media screen and (max-width:700px){
    grid-template-columns: auto auto;

}@media screen and (max-width:400px){
    grid-template-columns: auto;
}
    li{
        a{
            text-decoration:none;
            color:#fff;
        }
    }
}
` 
export const Shopping = styled.div`
border-bottom:1px solid #fff;
margin:0% 0% 2% 0%;
padding:0% 0% 2% 0%;
& > i{
    margin:5px 0px 0px 5px  ;
}
`
export const CopyWrite = styled.div`
background:#222222;
text-transform:uppercase;
text-align:center;
color:#706c61;
& > i{
color:red;
}
`