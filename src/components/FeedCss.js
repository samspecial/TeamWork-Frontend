import styled from 'styled-components';

export const Wrapper = styled.div`
width:100%;


@media only screen and (min-width: 480px) and (max-width:768px) 
    width:90%;
    display:flex;
flex-flow: row wrap;
justify-content:center;
align-items: center;
margin:0 auto;
background-color: green;
align-items:center;
    
}

@media only screen and (min-width: 769px) {
    width:70%
    justify-content:center;
    align-items: center;
   
}
section{
width:95%;
margin:0 auto;
background:red;}

@media only screen and (min-width: 480px) and (max-width:768px) { section{
    width:320px;}
    
}

@media only screen and (min-width: 769px) {
    section{width:320px;}
   
}}
`;