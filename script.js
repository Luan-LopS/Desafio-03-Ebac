const form = document.querySelector('form')
const contatoNome = []
const numeroContato = []

let linhas= ''


form.addEventListener('submit',function(e){
    e.preventDefault()

    addLinha()
    criaTabela()
})


function addLinha(){
    const nome = document.getElementById('nome')
    const fone = document.getElementById('fone')

    //Verifica se ja existe um nome de contato cadastrado e input esta valido
    if(contatoNome.includes(nome.value) || nome.value === null){
        alert('Contato ja cadastrado')

    // Verifica se o telefone tem o tamanho correto    
    }else if(fone.value.length !== 9){
        alert('Coloque o telefone Valido')
        fone.value = ''


    // Verificar se o numero de contato ja existe
    }else if(numeroContato.includes(fone.value)){
        alert('Numero ja cadastrado')

    // add as linhas     
    } else{
        contatoNome.push(nome.value)

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