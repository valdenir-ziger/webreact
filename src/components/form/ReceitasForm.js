import Input from '../../components/form/Input'
import Submit from '../../components/form/Submit'
import { useState } from 'react'
import { Form } from 'react-bootstrap';

function ReceitasForm({ btnText, handleSubmit, receitaData }) {
    const [receita, setReceita] = useState(receitaData || [])

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(receita);
    }
    function handleChange(e) {
        setReceita({ ...receita, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <Form onSubmit={submit}>
                <Input
                    name="nome" text="Nome:"
                    tipo="text" placeholder="Digite o nome da receita"
                    handleChange={handleChange} 
                    value={receita.nome ? receita.nome : ''}/>
                <Input
                    name="ingredientes" text="Ingredientes:"
                    tipo="text" placeholder="Ingredientes da Receita"
                    handleChange={handleChange}
                    value={receita.ingredientes ? receita.ingredientes : ''}/>
                <Input
                    name="preparo" text="Modo de Preparo:"
                    tipo="text" placeholder="Informe o modo de preparo"
                    handleChange={handleChange} 
                    value={receita.preparo ? receita.preparo : ''}/>
                <Submit texto={btnText} />
            </Form>
        </div >
    );
}
export default ReceitasForm;