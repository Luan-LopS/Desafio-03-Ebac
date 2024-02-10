const form = document.querySelector('form')
const contatoNome = []
const numeroContato = []
const nome = document.getElementById('nome')
const fone = document.getElementById('fone')
let linhas= ''


form.addEventListener('submit',function(e){
    e.preventDefault()

    Verificar()
    criaTabela()

})


function Verificar(){
    
    const p = document.querySelector('p')[0]
    const nomeExistente = `Contato ja cadastrado`
    const foneInvalido = `Digite um telefone valido`
    const foneExistente = `Numero ja cadastrado`


    
    //Verifica se ja existe um nome de contato cadastrado e input esta valido
    if(contatoNome.includes(nome.value) || nome.value === null){
        nome.classList.add('inputInvalido')
        alert('Contato ja cadastrado')



    // Verifica se o telefone tem o tamanho correto    
    }else if(fone.value.length !== 9){
        fone.classList.add('inputInvalido')
        alert('Coloque o telefone Valido')



    // Verificar se o numero de contato ja existe
    }else if(numeroContato.includes(fone.value)){
        fone.classList.add('inputInvalido')
        alert('Numero ja cadastrado')


    // add as linhas     
    } else{
        numeroContato.push(fone.value)
        contatoNome.push(nome.value)
        fone.classList.remove('inputInvalido')
        nome.classList.remove ('inputInvalido')

        criaLinha()
    }

    nome.value = ''
    fone.value = ''
}



function criaLinha(){
    let linha = `<tr> `
    linha += `<td> ${nome.value} </td>`
    linha += `<td> ${fone.value} </td>` 
    linha += `</tr>`

    linhas += linha
}

function criaTabela(){
    const tbody = document.querySelector('tbody')
    tbody.innerHTML = linhas
}


function Msg(){
    nome.classList('inputInvalido')
}

function totalContato(){

}