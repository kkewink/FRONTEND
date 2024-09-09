
const Main = () => {
    return (
        <main>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="container">
                <div className="quadrado">
                    <h3>CADASTRAR-SE E DIVIRTA-SE!</h3>
                        <div>
                            <form action="">
                            <label htmlFor="">Data de Nascimento</label>
                            <div>
                                <select name="DiadoNiver" id="DayDropDown">
                                    <option value ="">Dia</option>
                                    <option value ="01">01</option>
                                </select>
                            </div>
                            <div>
                                <select name="DiadoNiver" id="DayDropDown">
                                    <option value ="">Mês</option>
                                    <option value ="Janeiro">Janeiro</option>
                                </select>
                            </div>
                            <div>
                                <select name="ano" id="DayDropDown">
                                    <option value ="">Ano</option>
                                    <option value ="2024">2024</option>
                                </select>
                            </div>

                            <div>
                            <form action="">
                                <label htmlFor="">Usuário</label>
                                <input type="text" />
                            </form>
                                </div> 
                           
                            
                            </form>
                        </div>


                            <button id="cadastro">Cadastrar-se</button>
                </div>
            </div>
        </main>
    )
}

export default Main