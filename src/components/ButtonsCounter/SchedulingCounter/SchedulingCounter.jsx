import "./schedulingCounter.css"
import { IoCalendarOutline } from 'react-icons/io5';
import ReactTooltip from 'react-tooltip';

export function SchedulingCounter() {
    function HandleOpenLink(data) {
        window.open(`${data}`, "_self")
      }
    return (
       <div className="buttonCounter">
       <div className="counter">
        3
       </div>
       <button className='iconUnic' onClick={() => HandleOpenLink("/agendamentos")} data-tip data-for='Agendamentos'><IoCalendarOutline/></button>
                <ReactTooltip id='Agendamentos' place="bottom" type="dark" effect="solid">
                     <span>Agendamentos</span>
                </ReactTooltip>
            </div>
    )
}