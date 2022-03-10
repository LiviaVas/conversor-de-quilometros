function Converter() { 
  var velocidadeEmQuilomento = document.getElementById("valor")
  
  var valor = velocidadeEmQuilomento.value
    var valorEmQuilometroNumerico = parseFloat(valor)
    
    var tempo = valorEmQuilometroNumerico / 300000000 * 1000
  console.log(tempo)
  var elementoValorConvertido = document.getElementById("valorConvertido") 
  var ValorConvertido = "Voce levaria aproximandamente " + tempo + " s"
  elementoValorConvertido.innerHTML = ValorConvertido
}