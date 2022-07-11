//Exercício 5
//Invertendo uma string


function InvertendoString(str) {
    
    if (str === "")

      return "";

    else

      return InvertendoString(str.substr(1)) + str.charAt(0);
}


InvertendoString("Eu vou ser invertido");