import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import {CompA, CompB as B} from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponentesComFuncao'
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponenteClasse'
import Contador from './componentes/Contador'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Contador numeroInicial={100} />
        {/* <ComponenteClasse valor="Sou um componente de classe!"/> */}
        {/* <Pai /> */}
        {/* <ComponenteComFuncao /> */}
        {/* <Familia sobrenome="Pereira">
            <Membro nome="André" />
            <Membro nome="Mariana" sobrenome="Pereira" />
        </Familia> */}
        {/* <FamiliaSilva /> */}
        {/* <MultiElementos /> */}
        {/* <PrimeiroComponente valor="Bom dia!"/> */}         
        {/* <CompA valor="Olá eu sou o A" />
        <B valor="Olá eu sou o B" /> */}
    </div>
, elemento)












// const jsx = <h1>Olá React</h1>
// ReactDOM.render(jsx, elemento)