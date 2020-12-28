export interface PagosGenerales {
    op_cur_pagos_generales: PagosGeneralesItems[]
}

export interface PagosGeneralesItems {

    RNUM: Number,
    IDPAGO: Number,
    PAGOESTADO: String,
    NOMBRECONJUNTO: String,
    IDRESIDENCIA: Number,
    IDENTIFICACION: Number,
    NOMBRE: String,
    APELLIDO: String,
    IDFACTURA: Number,
    FECHFACTURA: Date,
    FECHAPAGO: Date,
    VALORADMIN: Number,
    CUOTAEXTRA: Number,
    PORCENTAJEDESCUENTO: Number,
    PORCENTAJERECARGO: Number,
    VALORTOTAL: Number
}