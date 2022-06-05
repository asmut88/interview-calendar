import { SHeaderCalendar, SDayHeader } from "../../styles/stylesComponents"
import { SPeriodManagment } from "../../styles/stylesComponents"

export const Calendar = () => {

    return (
        <div>
            <HeaderCalendar />
            <PeriodManagement />
        </div>
    )
}

const HeaderCalendar = () => {

    return (
        <SHeaderCalendar>
            <div>Interview Calendar</div>
            <div>+</div>
        </SHeaderCalendar>
    )
}

const PeriodManagement = () => {

    const currentDate = new Date()

    const arrDate = []
    for (var i = 1; i < 8; i++) {
        currentDate.setDate(currentDate.getDate() + 1)
        arrDate.push(<div> {currentDate.getDate()} </div>)
    }

    return (

        <SPeriodManagment>
            <SDayHeader>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
            </SDayHeader>
            <SDayHeader>
                {arrDate}
            </SDayHeader>

        </SPeriodManagment>

    )
}

