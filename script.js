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
    totalContato()
})


function Verificar(){
    
    const p = document.querySelector('p')
    const nomeExistente = `Contato ja cadastrado`
    const foneInvalido = `Digite um telefone valido`
    const foneExistente = `Numero ja cadastrado`

    //Verifica se ja existe um nome de contato cadastrado e input esta valido
    if(contatoNome.includes(nome.value)){
        nome.classList.add('inputInvalido')
        p.innerHTML = nomeExistente


    // Verifica se o telefone tem o tamanho correto    
    }else if(fone.value.length !== 9){
        fone.classList.add('inputInvalido')
        p.innerHTML = foneInvalido


    // Verificar se o numero de contato ja existe
    }else if(numeroContato.includes(fone.value)){
        fone.classList.add('inputInvalido')
        p.innerHTML = foneExistente


    // add as linhas     
    } else{
        numeroContato.push(fone.value)
        contatoNome.push(nome.value)

        criaLinha()
    }
    nome.value = ''
    fone.value = ''
    fone.classList.remove('inputInvalido')
    nome.classList.remove ('inputInvalido')
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

function totalContato(){

    const total = document.getElementById('totalContato')
    let soma = 1
    for (let i = 0; i < contatoNome.length; i++) {
        soma += i
        
    }

    total.innerHTML = soma
}