import { useEffect, useState } from 'react'
import './forms.scss'

export default function Forms() {

    const [dias, setDias] = useState([])
    const [horarios, setHorarios] = useState([])

    const [modalDiaHorario, setModalDiaHorario] = useState(true)

    const [horariosDisponiveis, setHorariosDisponiveis] = useState([
        {
            id: '0',
            valor: '7h-9h',
            texto: '7hrs - 9hrs'
        },
        {
            id: '1',
            valor: '9h-11h',
            texto: '9hrs - 11hrs'
        },
        {
            id: '2',
            valor: '11h-13h',
            texto: '11hrs - 13hrs'
        },
        {
            id: '3',
            valor: '13h-15h',
            texto: '13hrs - 15hrs'
        },
        {
            id: '4',
            valor: '15h-17h',
            texto: '15hrs - 17hrs'
        }
    ])

    const selecionarDia = (e) => {
        dias.length < 4 ? setDias(dias.concat(`${e.target.value.slice(8, 11)} / ${e.target.value.slice(5, 7)} / ${e.target.value.slice(0, 4)}`)) : ''
        setModalDiaHorario(false)
    }
    const selecionarHorario = (item) => {
        horarios.length < 4 ? setHorarios(horarios.concat(item.target.value)) : ''
        setModalDiaHorario(true)
    }



    return (
        <form action="">
            <article>
                <label htmlFor="nome">
                    <span className='numeracao'>1. &nbsp;</span> Nome Completo 
                </label>
                <div>
                    <input type="text" id="nome" placeholder='Nome' required autoFocus/>
                    <input type="text" id="sobrenome" placeholder='Sobrenome' required/>
                </div>
            </article>

            <article>
                <div>
                    <label htmlFor="data">
                        <span className='numeracao'>2. &nbsp;</span> Data(s)
                    </label>
                    <input type="date" id="data" placeholder='data' required onChange={selecionarDia} disabled={modalDiaHorario == false ? true : false}/>
                    <ul>
                        {dias.map((item) => (
                            <li>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>


                <div>
                    <label htmlFor="horario">
                        <span className='numeracao'>3. &nbsp;</span> Horário Disponível
                    </label>
                    <select name="horario" id="horario" required disabled={modalDiaHorario} onChange={selecionarHorario}>
                        <option value="" disabled selected>Selecione um Horário</option>
                        {horariosDisponiveis.map((item) => (
                            <option value={item.valor} key={item.id}>
                                {item.texto}
                            </option>
                        ))}
                    </select>
                    <ul>
                        {horarios.map((item) => (
                            <li>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
            
            <button>
                Enviar
            </button>
        </form>
    )
}