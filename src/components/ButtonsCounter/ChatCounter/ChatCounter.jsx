import "./chatCounter.css"
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import ReactTooltip from 'react-tooltip';

export function ChatCounter() {
    function HandleOpenLink(data) {
        window.open(`${data}`, "_self")
      }
    return (
       <div className="buttonCounter">
       <div className="counter">
        17
       </div>
          <button className='iconUnic' onClick={() => HandleOpenLink("/mensagens")} data-tip data-for='Chat'><IoChatboxEllipsesOutline /></button>
            <ReactTooltip id='Chat' place="bottom" type="dark" effect="solid">
                <span>Chat</span>
            </ReactTooltip>
            </div>
    )
}