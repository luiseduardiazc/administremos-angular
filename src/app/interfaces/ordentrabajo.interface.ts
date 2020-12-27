export interface OrdenTrabajo {
    op_cur_ordenes_pendientes : OrdenTrabajoItems[]
}

export interface OrdenTrabajoItems {

    IDPAGO : Number,
    IDORDENTRAB: Number,
    IDFACTURA: String,
    FECHAMESFACTURA: Date,
    IDENTIFICACION: Number,
    NOMBRE: String,
    ESTADO: String,
    VALADMINISTRACION: Number,
    CUOTAEXTRA: Number,
    PORCENTAJEDESCUENTO: Number,
    PORCENTAJERECARGO: Number,
    VALORTOTAL: Number,
    URL_CONSIGNACION: String
    
} 