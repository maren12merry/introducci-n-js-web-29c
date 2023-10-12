function cajero() {     
    let x,y;

    x = document.getElementById("user").value;
    y = document.getElementById("password").value;   
    let cuentas = [
        { name: `Karina`, password: 1234, saldo: 800 },
        { name: `Pedro`, password: 5678, saldo: 680 },
        { name: `Gregorio`, password: 9012, saldo: 430 },
    ];
    
    const userInput = x;    
    const passwordInput = y;
    console.log(x = y);
    
    let userSelected = cuentas.find( (element) => element.name === userInput);

    const passwordSelected = userSelected.password;
    console.log(passwordInput === passwordSelected);
  

    
    if (passwordInput === passwordSelected) {
        console.log(`iniciaste sesión`);
    } else {
        console.log(`Datos incorrectos`);
        alert (`Intentalo de nuevo`);
    }
    console.log(userInput,passwordInput);
    
}

    

/*const userInput = [`Karina`, `Pedro`, `Gregorio`];    
    const passwordInput = [1234, 5678, 9012];
    console.log( userInput [0] = passwordInput [0]);
    /*const password = 1234;

/*function mifuction() {

let cuentas = [
    { name: `Karina`, password: 1234, saldo: 800 },
    { name: `Pedro`, password: 5678, saldo: 680 },
    { name: `Gregorio`, password: 9012, saldo: 430 },
];

const name1 = `Karina`;
const num1 = 1234;

lo de arriba seria lo de abajo



let userSelected = cuentas.find((element) => element.name === userInput);

const passwordSelected = userSelected.password;
console.log(passwordInput === passwordSelected);

if (passwordInput === passwordSelected) {
    console.log(`iniciaste sesión`);
} else {
    console.log(`Datos incorrectos`);
    alert (`Intentalo de nuevo`);
}

document.getElementById
}*/




/*const retirar = Number (prompt(`¿Cuánto deseas retirar?`));

/*console.log (retirar - 10000);
if (retirar > 10000){
    alert(`no cuenta con la cantidad establecida`);
} else if (retiro <= 10000) {
    console.log(`retiro - 10000`);
    
}

/*let saldo = 1000
switch (saldo actual) {
    case `1000`
    console.log(`Su saldo actual es de 1000`);
    breake;

    case 
}



/*const David = {
    userName: `David``,
    password: ``,
    

}*/

/* var cuentas = [
    { nombre: “David”, saldo: 200 }
    { nombre: “Pedro”, saldo: 290 }
    { nombre: “José”, saldo: 67 }
  ];*/

