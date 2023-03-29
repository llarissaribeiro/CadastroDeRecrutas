const firstName = prompt("Insira seu primeiro nome:")
const lastName = prompt("Insira seu sobrenome")
const estudo = prompt("Qual o seu campo de estudo?")
const birthdayDate = prompt("Insira seu ano de nascimento")

alert(
  "Recruta cadastrado com sucesso!\n" +
  "\nNome Completo: " + firstName + " " + lastName +
  "\nCampo de Estudo: " + estudo + " " +
  "\nIdade: " + (2023 - birthdayDate)
)