import "./messagesCounter.css"
import { useFetch } from "../../../hooks/useFetch";


export function MessagesCounter({room}) {
  console.log(room)
  const {data} = useFetch(`/messages/${room}`)

  if(data) {
    console.log(data)
  }
  if(!data) {
      return (
          <h6>Carregando</h6>
      )
  }
  
    return (
      <div className="couterMessages">
      {data?.length}                                                    
  </div>
    )
}