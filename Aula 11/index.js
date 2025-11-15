function calcular(){
    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')
    let soma = Number(num1.value) + Number(num2.value)
    document.getElementById('resultado').innerText = `A soma é ${soma}`
}