let usuario1 = 'Matheus';
let usuario2 = 'João Pedro';
let senha1 = 'Matheus@123';
let senha2 = 'JOJO@123';
let resultado
let resultado2

const Y = document.getElementById('mensagem')
const w = document.getElementById('resultado')

switch (true) {
    case usuario1 === 'Matheus' && senha1 === 'Matheus@123':
        resultado = 'Usuario cadastrado'
        break
    case usuario1 === '' && senha1 === 'Matheus@123':
        resultado = 'Usuario não cadastrado'
        break
    case usuario1 === 'Matheus' && senha1 === '':
        resultado = 'Senha errada'
        break
        //segundo usuario
    
}
switch(true){
    case usuario2 === 'João Pedro' && senha2 === 'JOJO@123':
        resultado2 = 'Usuario cadastrado'
        break
    case usuario2 === '' && senha2 === 'JOJO@123':
        resultado2 = 'Usuario não cadastrado'
        break
    case usuario2 === 'João Pedro' && senha2 === '':
        resultado2 = 'Senha errada'
        break
}

Y.innerHTML = resultado
w.innerHTML = resultado2