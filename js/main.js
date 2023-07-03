$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')
    $('#cep').mask('00000-000')
    $('#cpf').mask('000.000.000-00')

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            },
            cpf:{
                required: true
            },
            endereco:{
                required: true
            },
            cep:{
                required: true
            },
        },
        messages:{
            nome: 'Por favor, insira seu nome completo',
            telefone: 'Por favor, insira seu telefone',
            email: 'Por favor, insira seu e-mail',
            cep: 'Por favor, insira seu CEP',
            cpf: 'Por favor, insira seu CPF',
            endereco: 'Por favor, insira seu endereço completo'
        },
        submitHandles: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos =validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incompletos`)
            }
        }
    })
})
