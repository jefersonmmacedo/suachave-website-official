import "./notificationCounter.css"
import { IoNotificationsOutline } from 'react-icons/io5';
import ReactTooltip from 'react-tooltip';

export function NotificationCounter() {
    function HandleOpenLink(data) {
        window.open(`${data}`, "_self")
      }
    return (
       <div className="buttonCounter">
       <div className="counter">
        17
       </div>
       <button className='iconUnic' onClick={() => HandleOpenLink("/notificacoes")} data-tip data-for='Notificações'><IoNotificationsOutline /></button>
                <ReactTooltip id='Notificações' place="bottom" type="dark" effect="solid">
                     <span>Notificações</span>
                </ReactTooltip>
            </div>
    )
}