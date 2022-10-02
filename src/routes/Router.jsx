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
import Example, { Property } from '../pages/Property/Property';

function Router () {
const Local = localStorage.getItem("gpsbuscador");
const userLocal = JSON.parse(Local)

function PrivateRoute({children} ) {
    return userLocal !== null ? children : <Navigate to="/"/>
}

    return (
            <Routes>
            {/* Rotas abertas */}
            <Route path="/" element={<Home />}/>
            <Route path="/entrar" element={<SignIn />}/>
            <Route path="/cadastrar" element={<ChooseYourAccount />}/>
            <Route path="/cadastro-profissional" element={<SignUpProfessional />}/>
            <Route path="/cadastro-cliente" element={<SignUpClient />}/>
            <Route path="/imoveis/:status" element={<Properties />}/>
            <Route path="/minhas-propostas" element={<MyProposals />}/>
            <Route path="/favoritos" element={<Favorites />}/>
            <Route path="/orcamentos" element={<Budgets />}/>
            <Route path="/notificacoes" element={<Notifications />}/>
            <Route path="/profissionais" element={<Profesisonals />}/>
            <Route path="/planos" element={<Pricing />}/>
            <Route path="/privacidade" element={<PrivacyPolicy />}/>
            <Route path="/termos" element={<TermsOfUse />}/>
            <Route path="/proposta" element={<ProposalPage />}/>
            <Route path="/orcamento" element={<BudgetPage />}/>
            <Route path="/novo-orcamento" element={<BudgetNew />}/>
            <Route path="/mensagens" element={<Message />}/>
            <Route path="/imovel" element={<Property />}/>
            
            {/* Rotas fechadas/login */}
            {/* <Route path="/activeplain"
                    element={ <PrivateRoute> <ActivePlain /> </PrivateRoute>} /> */}
            </Routes>
           
    )
}

export {Router}