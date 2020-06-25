var numero = []

function adicionar() {
    var numtxt = document.getElementById("numtxt")
    var num = Number(numtxt.value)
    var selectTxt = document.getElementById("select")
    var res = document.getElementById("res")
    res.innerHTML = ""

    if(numtxt.value.length == 0 || num < 1 || num > 100){
        alert("ERRO! Verifique se o número digitado está dentro do permitido.")

    } else{
        numero.push(num)
        var option = document.createElement('option')
        option.text = `Valor ${num} foi adicionado.`
        selectTxt.appendChild(option)
   
}
    numtxt.value = ''
    numtxt.focus()
}
function finalizar(){
    if(numero.length == 0){
        alert("Erro. Verifique se adicionou algum número no campo anterior !")
    }else{
        numero.sort(function(a,b){
        return a - b
        })
    
        var soma = 0
        for(let i in numero){
        
        soma += numero[i]
        }
        var media = soma/numero.length
    
        res.innerHTML = `<p>
        Ao todo, temos ${numero.length} números cadastrados.<br><br>
        O menor número é ${numero[0]}.<br><br>
        O maior número é ${numero[numero.length-1]}.<br><br>
        Somando todos os valores, temos: ${soma}.<br><br>
        A média dos números cadastradoe é: ${media}.</p>`
    }
    
    
}