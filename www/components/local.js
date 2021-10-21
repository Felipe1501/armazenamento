// This is a JavaScript file
var valor = 0;

$(document).on("click", "#salvar", function(){
  localStorage.setItem(valor, $("#nome").val());
  valor++;
});

$(document).on("click", "#buscar", function(){
  var pessoa = localStorage.getItem($("#identificador").val());
  $("#nmBusca").val(pessoa);
});

$(document).on("click", "#limpar", function(){
  localStorage.clear();
  limparCampos();
});

$(document).on("click", "#remover", function(){
  var pessoa = localStorage.removeItem()
  limparCampos();
});

function limparCampos(){
  $("#nome").val("");
  $("#identificador").val("");
  $("#nmBusca").val("");
}