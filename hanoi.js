let discos
let origen
let destino
let nuevodestino
let resultado=""
do{
    discos =Number(prompt("¿Cuantos discos quiere mover?"))
}while(isNaN(discos)|| discos<=0)
do{
    origen = Number(prompt("Torre de origen"))
}while(isNaN(origen)|| origen<=0 || origen>=3 )
do{
    destino = Number(prompt("Torre final"))
}while(isNaN(destino)|| destino<=0 || origen>=3)

function hanoi(discos, origen, destino) {
    if (discos==1) {
        resultado=resultado+ origen+ " → " +destino + "&nbsp" 
    } else {
        if (origen ==1 && destino== 2) {
            nuevodestino=3
        }if (origen ==2 && destino==3) {
            nuevodestino=1
        }if (origen == 3 && destino==1) {
            nuevodestino=2
        }if (origen == 2 && destino==1) {
            nuevodestino=3
        }if (origen == 3 && destino==2) {
            nuevodestino=1
        }if (origen == 1 && destino==3) {
            nuevodestino=2
        }
        hanoi(discos-1, origen, nuevodestino)
        hanoi(1, origen, destino)
        hanoi(discos-1, nuevodestino, destino)
    } 
}
hanoi(discos, origen, destino)
document.getElementById ("Respuesta").innerHTML= resultado