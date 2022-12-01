import "./plains.css"
import {IoCheckmarkOutline} from "react-icons/io5";
import { useState } from "react";
import api from "../../services/api";
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";

export function Plains() {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    const [plains, setPlains] = useState([]);
    const [myPlain, setMyPlain] = useState([]);

    useEffect(() => {
        async function plainsLoad() {
            await api.get("/plains").then((res) => {
                setPlains(res.data);
            }).catch((error) => {
                console.log(error)
            })
        }

        plainsLoad()
        async function mYPlainsLoad() {
            await api.get(`/myplain/${user.id}`).then((res) => {
                setMyPlain(res.data[0]);
            }).catch((error) => {
                console.log(error)
            })
        }

        mYPlainsLoad()
    },[])


    return (
        <div className="Plains">

            {plains?.map((plain) => {
                return (
                    plain?.name === "Pro" ? "" :
                    <div className="plain">
                    <h3>{plain?.name}</h3>
                    <div className="title">
                    <h1>R$ {plain?.value}</h1>
                    <h4>/mês</h4>
                    </div>
                    <div className="text">
                    {plain?.infos.map((info) => {
                        return (
                            <p><IoCheckmarkOutline /> {info.info}</p>
                        )
                    })}
                    </div>
                    {myPlain?.idPlain === plain?.id ?
                    <a href="http://adm.suachave.com.br/planos" target="_blank">Seu plano atual</a>
                    :
                    <a href={user !== null && user?.type === "Imobiliária" || user !== null && user?.type === "Corretor" ? `/plano/${plain?.id}` : "/cadastro-profissional"}>Contratar plano</a>
                }
                    <p>{plain?.note}</p>
                </div>
                )
            })}

        </div>
    )
}