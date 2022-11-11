import "./signUpProfessional.css";
import Logo from "../../assets/images/Logo.png";
import { useState } from "react";
import { FiUpload } from 'react-icons/fi';
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import buscaDistrito from "../../services/api-buscaDistrito";
import { toast } from 'react-toastify';
import {IoEyeOutline, IoEyeOffOutline} from 'react-icons/io5';
import { mask as masker, unMask } from "remask";
import { storage } from '../../services/firebaseConnection';
import { ref, getDownloadURL, uploadBytes} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

export function SignUpProfessional() {
    const {createAccountCompany} = useContext(AuthContext);
    const [account, setAccount] = useState("imobiliária")
    const [data, setData] = useState("1");
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState('');
    const profile = "https://firebasestorage.googleapis.com/v0/b/foursome4-b925c.appspot.com/o/avatar.png?alt=media&token=f3b1f0bc-3885-4296-8363-ec1c3d43e240"

    const [passwordView, setPasswordView] = useState(false)
    const [districtAll, setDistrictAll] = useState([]);

    const [type, setType] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [socialReason, setSocialReason] = useState("");
    const [fantasyName, setFantasyName] = useState("");
    const [creci, setCreci] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [password, setPassword] = useState("");

    const [responsibleName, setResponsibleName] = useState("");
    const [emailResponsible, setEmailResponsible] = useState("");
    const [whatsappResponsible, setWhatsappResponsible] = useState("");

    const [cep, setCep] = useState("");
    const [number, setNumber] = useState("");
    const [road, setRoad] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");
    const [website, setWebsite] = useState("");
    const [instagram, setInstagram] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [youtube, setYoutube] = useState("");
    const [facebook, setFacebook] = useState("");



    function handleFile(e) {
        // console.log(e.target.files[0])
        if(e.target.files[0]){
            const image = e.target.files[0];
            if(image.type === 'image/jpeg' || image.type === 'image/jpg' || image.type === 'image/png') {
                setImageAvatar(image);
                setAvatarUrl(URL.createObjectURL(e.target.files[0]));
                console.log(avatarUrl);
             } else {
                 console.log('Tipo dearquivo não aceito. Envie uma imagem dos tipos: .jpg, .jpeg, .png');
                 setImageAvatar(null);
                 return null;
             }
         }
     }

    function handleSelectStepe(number) {
        setData(number)
    }

    function handleSelectAccount(e) {
        setAccount(e.target.value)
    }

    async function handleSearchDistrict(ufSelect) {
        console.log(ufSelect)
        try {
          const res = await buscaDistrito.get(`${ufSelect}/distritos`) 
            console.log(res.data)
            setDistrictAll(res.data)
            console.log(res.data[0].municipio.nome);
            return;
          }catch{
            console.log("error")
            toast.error("Escolha um estado e clica em buscar cidades")
        }
        return
    }

    if(districtAll) {
        districtAll.sort(function(a,b) {
            if(a.nome < b.nome ) {
                return -1
            } else {
                return true
            }
        })
        }
 
    function handleSetectCity(e) {
        console.log(e.target.value)
        setCity(e.target.value)
      }
      function handleSetectUf(e) {
          console.log(e.target.value)
          handleSearchDistrict(e.target.value)
          setUf(e.target.value)
      }

      async function handleNewAccount(e) {
        e.preventDefault();
        toast.info("Criando conta. Aguarde...")
                //Avatar
        const uuid = uuidv4();

        let newAvatarUrlFirebase = ref(storage, `images/avatarCompany/${uuid}`);
        let uploadAvatar = await uploadBytes(newAvatarUrlFirebase, imageAvatar);
        let photoUrlAvatar = await getDownloadURL(uploadAvatar.ref);
            
        console.log(uploadAvatar.ref.name, photoUrlAvatar);
        continueNewAccount(photoUrlAvatar)
      }

    function continueNewAccount(photoUrlAvatar) {
        const verified = false;
        const status = "Ativo";
        const nameSlug = fantasyName;
        createAccountCompany({type,verified, status, cnpj, nameSlug, socialReason, fantasyName, creci, email, phone, whatsapp, password, responsibleName,
            emailResponsible, whatsappResponsible, logo:photoUrlAvatar, cep, road, number, district, city, uf, website, facebook})
    }

    function ChangeMaskPhone(e) {
        const originalValue = unMask(e.target.value);
        const maskedValue = masker(originalValue, [
          "(99)99999-9999",
          "(99)99999-999",
        ]);
    
        setPhone(maskedValue)
      }
    function ChangeMaskWhatsapp(e) {
        const originalValue = unMask(e.target.value);
        const maskedValue = masker(originalValue, [
          "(99)99999-9999",
          "(99)99999-999",
        ]);
    
        setWhatsapp(maskedValue)
      }

      function handlePasswordView() {
        if(passwordView === false) {
          setPasswordView(true)
        } else {
          setPasswordView(false)
        }
      }



    return (
        <div className="SignUpProfessional">
            <div className="professional">
                <div className="block">
                </div>
            </div>
            <div className="login">
                <form action="">
                <img src={Logo} alt="Logo GPS Buscador" />
                    <div className="data">
                        {data === "1" ?
                        <>
                        <select value={account} onChange={handleSelectAccount}>
                            <option value="imobiliária">Sou Imobiliária</option>
                            <option value="corretor">Sou Corretor</option>
                        </select>
                        {account === "imobiliária" ?
                        <>
                        <input type="text" placeholder="CNPJ" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                        <input type="text" placeholder="Razão Social" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                        <input type="text" placeholder="Nome Fantasia" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                        </>
                        : 
                        <>
                        <input type="text" placeholder="CPF" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                        <input type="text" placeholder="Nome Completo" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                        <input type="text" placeholder="Nome Profissional" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                        </>

                        }
                        <input type="text" placeholder="CRECI" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder="Telefone" value={phone} onChange={ChangeMaskPhone} />
                        <input type="text" placeholder="Whatsapp" value={whatsapp} onChange={ChangeMaskWhatsapp} />
                        <div className="dataInputs">
                        <input type={passwordView === false ? "password" : "text"}  placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className="icon" onClick={handlePasswordView}>{passwordView === false ? <IoEyeOutline /> : <IoEyeOffOutline /> }
                        </div>
                        </div>
                        <div className="dataInputs">
                        <input type={passwordView === false ? "password" : "text"} placeholder="Confirmar senha" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                        <div className="icon"onClick={handlePasswordView}>{passwordView === false ? <IoEyeOutline /> : <IoEyeOffOutline /> }
                            </div>
                        </div>
                        <button className="btn" onClick={() => handleSelectStepe("2")}>Avançar</button>
                        </>
                        : data === "2" ?
                        <>
                         <input type="text" placeholder="Nome Responsável" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                        <input type="email" placeholder="E-mail" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                        <input type="text" placeholder="Whatsapp" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                        <button className="btn3" onClick={() => handleSelectStepe("1")}>Voltar</button>
                        <button className="btn" onClick={() => handleSelectStepe("3")}>Avançar</button>
                        </>
                        : data === "3" ?
                        <>
                        <input type="text" placeholder="Website" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                        <input type="text" placeholder="Facebook" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                        <input type="text" placeholder="Instagram" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                        <input type="text" placeholder="LinkedIn" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                        <input type="text" placeholder="Youtube" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                        <button className="btn3" onClick={() => handleSelectStepe("2")}>Voltar</button>
                        <button className="btn" onClick={() => handleSelectStepe("4")}>Avançar</button>
                        </>
                        : data === "4" ?
                         <>
                        <label className="label-avatar">
                            <span><FiUpload color="#f65" size={25} /></span>
                            <input type="file" accept="image/*" onChange={handleFile} required/><br />
                            <img src={avatarUrl === null ? profile : avatarUrl} alt="Avatar" height={100} width={100}/>
                        </label>

                        <select value={uf} onChange={handleSetectUf}> 
                            <option value="">Escolha seu estado</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                            <option value="EX">Estrangeiro</option>     
                    </select>
                    <select value={city} onChange={handleSetectCity}> 
                    {districtAll.length === 0 ?
                    <option value={city}>{city}</option>
                    :
                    <>
                    <option value="">Escolha sua cidade</option>
                    {districtAll?.map((district) => {
                            return (
                                <option autocomplete="off" key={district.id} value={district.nome}>{district.nome}</option>
                            )
                        })}
                    </>
                    }     
                    </select>
                         <input type="text" placeholder="Bairro" />
                         <input type="text" placeholder="Número" />
                         <input type="text" placeholder="Rua" />


                        <button className="btn3" onClick={() => handleSelectStepe("3")}>Voltar</button>
                        <button className="btn1" onClick={handleNewAccount}>Cadastrar</button>
                         </>
                         :""}
                        {/* <div className="links">
                            <p>Recuperar senha</p>
                        </div>
                        <button onClick={() => handleSelectStepe()}>Cadastrar</button> */}
                    </div>
                </form>

            </div>
        </div>
    )
}