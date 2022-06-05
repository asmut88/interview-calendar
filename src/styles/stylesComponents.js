import styled from 'styled-components'

export const SHeaderCalendar = styled.div`
    display: grid;
    grid-template-columns: 9fr 1fr; 
    background-color: white;
`
export const SPeriodManagment = styled.div`
    display: grid;  
    grid-template-rows: repeat(7, 1fr);  
`
export const SDayHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 30px);
    justify-content: center;
    //grid-template-columns: repeat(7, 1fr);
`
