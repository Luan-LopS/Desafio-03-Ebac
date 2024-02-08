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

    if(contatoNome.includes(nome.value)){
        alert('ja tem')
    }else if(fone.length <= 9){
        Alert('Coloque o telefone Valido')

    }else{
        contatoNome.push(nome.value)

        let linha = `<tr> `
        linha += `<td> ${nome.value} </td>`
        linha += `<td> ${fone.value} </td>` 
        linha += `</tr>`
    
        linhas += linha
    }

    nome.value = ''
    fone.value = ''
}



function criaTabela(){
    const tbody = document.querySelector('tbody')
    tbody.innerHTML = linhas
}