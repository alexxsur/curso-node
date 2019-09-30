let empleados = [{
        id: 1,
        nombre: 'Alex'
    },
    {
        id: 2,
        nombre: 'Fernando'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${ id }`);
    } else {
        callback(null, empleadoDB);
    }
};

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(`No existe un salario para el empleado con con el ID ${ empleado.id }`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }
};

getSalario(4, (err, salario) => {
    if (err) {
        return console.log(err);
    }

    console.log(salario);
});

getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    console.log(empleado);

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }

        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }`);
    });
});