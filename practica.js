function asAmirror(frase) {
    // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
    // La diferencia es que cada palabra estará escrita al inverso.
    // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
    // Tu código:
    var arr = frase.split("")
    var mirror = ""
    for (var i = 0; i < arr.length; i++) {
        var palabra = arr[i]
        var palabraEspejo = ""
        for (var j = palabra.length -1; j >= 0; j--) {
            palabraEspejo = palabraEspejo + palabra[j]
        }
        mirror = mirror + palabraEspejo + " "
    }
    return mirror.trim()
}