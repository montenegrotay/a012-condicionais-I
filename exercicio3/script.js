//# Exercício 3

//Crie um código que receba um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.

//Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
//- brasileira;
//- argentina;
//- uruguaia;
//- chilena;
//- colombiana;

//Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhum dos valores.

//> 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 



let nacionalidade = prompt("Escreva aqui sua Nacionalidade.")


if(nacionalidade === "brasileira" && "chilena" && "uruguaia" && "argentina" && "colombiana"){
    /*Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades: brasileira, argentina, uruguaia, chilena, colombiana*/
    console.log("Nacionalidade Encontrada.")

} else if (nacionalidade !== "brasileira" || "chilena" || "uruguaia" || "argentina" || "colombiana"){ 
    console.log("Nacionalidade Não Encontrada")


} else{
    /*Caso o valor de nacionalidade não corresponda a nenhum dos valores.*/
    console.log(nacionalidade)
}