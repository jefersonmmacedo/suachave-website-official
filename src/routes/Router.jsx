import {Route, Routes, Navigate} from 'react-router-dom';
import { Budgets } from '../pages/Budgets/Budgets';
import { Favorites } from '../pages/Favorites/Favorites';
import { Home } from '../pages/Home/Home';
import { MyProposals } from '../pages/MyProposals/MyProposals';
import { Notifications } from '../pages/Notifications/Notifications';
import { Pricing } from '../pages/Pricing/Pricing';
import { Profesisonals } from '../pages/Profesisonals/Profesisonals';
import { SignIn } from '../pages/SignIn/SignIn';
import { ChooseYourAccount } from '../pages/ChooseYourAccount/ChooseYourAccount';
import { SignUpClient } from '../pages/SignUpClient/SignUpClient';
import { SignUpProfessional } from '../pages/SignUpProfessional/SignUpProfessional';
import { PrivacyPolicy } from '../pages/PrivacyPolicy/PrivacyPolicy';
import { TermsOfUse } from '../pages/TermsOfUse/TermsOfUse';
import { ProposalPage } from '../pages/ProposalPage/ProposalPage';
import { BudgetPage } from '../pages/BudgetPage/BudgetPage';
import { Message } from '../pages/Message/Message';
import { BudgetNew } from '../pages/BudgetNew/BudgetNew';
import { Properties } from '../pages/Properties/Properties';
import { Property } from '../pages/Property/Property';
import { About } from '../pages/About/About';
import { Companies } from '../pages/Companies/Companies';
import { Brokers } from '../pages/Brokers/Brokers';
import { Company } from '../pages/Company/Company';
import { Schedules } from '../pages/Schedules/Schedules';
import { MessagesProperty } from '../pages/MessagesProperty/MessagesProperty';
import { Simulator } from '../pages/Simulator/Simulator';
import { SignInCompany } from '../pages/SignInCompany/SignInCompany';
import { Dashboard } from '../pages/Adm/Dashboard/Dashboard';
import { NewProperty } from '../pages/Adm/NewProperty/NewProperty';
import { MyAccount } from '../pages/MyAccount/MyAccount';

function Router () {
const Local = localStorage.getItem("suachave");
const userLocal = JSON.parse(Local)

function PrivateRoute({children} ) {
    return userLocal !== null ? children : <Navigate to="/entrar"/>
}

    return (
            <Routes>
            {/* Rotas abertas */}
            <Route path="/" element={<Home />}/>
            <Route path="/entrar" element={<SignIn />}/>
            <Route path="/entrar-empresa" element={<SignInCompany />}/>
            <Route path="/cadastrar" element={<ChooseYourAccount />}/>
            <Route path="/cadastro-profissional" element={<SignUpProfessional />}/>
            <Route path="/cadastro-cliente" element={<SignUpClient />}/>
            <Route path="/imoveis/:status" element={<Properties />}/>
            <Route path="/minhas-propostas" element={<MyProposals />}/>
            <Route path="/orcamentos" element={<Budgets />}/>
            <Route path="/profissionais" element={<Profesisonals />}/>
            <Route path="/privacidade" element={<PrivacyPolicy />}/>
            <Route path="/termos" element={<TermsOfUse />}/>
            <Route path="/proposta" element={<ProposalPage />}/>
            <Route path="/orcamento" element={<BudgetPage />}/>
            <Route path="/novo-orcamento" element={<BudgetNew />}/>
            <Route path="/imovel" element={<Property />}/>
            <Route path="/imobiliarias" element={<Companies />}/>
            <Route path="/imobiliaria" element={<Company />}/>
            <Route path="/corretores" element={<Brokers />}/>
            <Route path="/test" element={<About />}/>
            <Route path="/simulador" element={<Simulator />}/>


            {/* <Route path="/planos" element={<Pricing />}/>
            <Route path="/mensagens" element={<MessagesProperty />}/>
            <Route path="/favoritos" element={<Favorites />}/>
            <Route path="/notificacoes" element={<Notifications />}/>
            <Route path="/agendamentos" element={<Schedules />}/> */}

            {/* <Route path="/adm/dashboard" element={<Dashboard />}/> */}
            
            {/* Rotas fechadas/login */}
            <Route path="/planos"
                    element={ <PrivateRoute> <Pricing /> </PrivateRoute>} />
            <Route path="/minhaconta"
                    element={ <PrivateRoute> <MyAccount /> </PrivateRoute>} />
            <Route path="/mensagens"
                    element={ <PrivateRoute> <MessagesProperty /> </PrivateRoute>} />
            <Route path="/favoritos"
                    element={ <PrivateRoute> <Favorites /> </PrivateRoute>} />
            <Route path="/notificacoes"
                    element={ <PrivateRoute> <Notifications /> </PrivateRoute>} />
            <Route path="/agendamentos"
                    element={ <PrivateRoute> <Schedules /> </PrivateRoute>} />
            <Route path="/adm/painel"
                    element={ <PrivateRoute> <Dashboard /> </PrivateRoute>} />
            <Route path="/adm/painel/novoimovel"
                    element={ <PrivateRoute> <NewProperty /> </PrivateRoute>} />
            </Routes>
           
    )
}

export {Router}