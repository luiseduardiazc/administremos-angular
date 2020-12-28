export  interface Usuario {
idUsuario: Number,
nombre: String,
apellido: String,
roles: Rol[]

}

export interface Rol {

    idRol: Number,
    nombre: String
}