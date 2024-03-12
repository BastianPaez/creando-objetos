// punto 1: crear funcion constructora para cada objeto
class Paciente {
    constructor(nombre, edad, rut, diagnostico){
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.diagnostico = diagnostico;
        if (!Paciente.listaDePacientes) {
            Paciente.listaDePacientes = [];
        }
        Paciente.listaDePacientes.push(this)
    }

    //punto 2: implementar getters y setters
    get getNombre(){
        this.nombre
    }
    get getEdad(){
        this.edad
    }
    get getRut(){
        this.rut
    }
    get getDiagnostico(){
        this.diagnostico
    }

    set setNombre(value){
        this.nombre = value;
    }
    set setEdad(value){
        this.edad = value;
    }
    set setRut(value){
        this.rut = value;
    }
    set setDiagnostico(value){
        this.diagnostico = value;
    }

    //Punto 3: prototype todos los pacientes registrados
    static todosLosPacientes(){
        return Paciente.listaDePacientes;
    }
}
class Consultorio {
    constructor(nombre){
        this.nombre = nombre;
        this.pacientes = [];
    }

    //punto 2: implementar getters y setters
    get getNombre(){
        this.nombre
    }
    get getPaciente(){
        this.pacientes
    }
    
    set setNombre(value){
        this.nombre = value;
    }
    set setPaciente(value){
        this.pacientes.push(value)
    }
    
    //punto 3: prototype buscar por nombre
    buscarPacientePorNombre(nombre){
        return this.pacientes.find( paciente => paciente.nombre === nombre)
    }
    
}




// punto 4: Instancias
const gonzalo = new Paciente('Gonzalo', 22, '22.452.213-3', 'migraña');
const bastian = new Paciente();
bastian.setNombre ='Bastián';
bastian.setEdad = 25;
bastian.setRut = '21.112.626-3';
bastian.setDiagnostico = 'tos';

console.log(bastian)
console.log(gonzalo)

const consultorio1 = new Consultorio();
consultorio1.setNombre = 'Cesfam Centenario'
consultorio1.setPaciente = bastian;
consultorio1.setPaciente = gonzalo;
console.log(consultorio1)

// buscar paciente por nombre
console.log(consultorio1.buscarPacientePorNombre('Bastián'))

// buscar todos los pacientes registrados
console.log(Paciente.todosLosPacientes())

