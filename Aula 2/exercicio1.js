 const idade = 16

    if (idade <16) {
        console.log ("não tem idade para votar")
    }

    else if (idade >18) {
        console.log ("obrigatório o voto")
    }

    else if (idade >70) {
        console.log ("voto opcional")
    }

    else {
        console.log ("voto opcional")
    }

    switch (idade) {
        case 16:
            console.log ("voto opcional")
            break

        case 17:
            console.log ("voto opcional")
            break
    
        case 18:
            console.log ("voto obrigatório")
            break

        default:
            console.log ("não tem idade para votar")
    }
