export interface PagosHistoricoResidente {
    op_cur_pagos : PagosHistoricoItems[]
}

export interface PagosHistoricoItems {

    IDPAGO: Number,
    PAGOESTADO: String,
    IDRESIDENCIA: Number,
    FECHFACTURA: Date,
    FECHAPAGO: Date,
    VALORADMIN: Number,
    CUOTAEXTRA: Number,
    PORCENTAJEDESCUENTO: Number,
    PORCENTAJERECARGO: Number,
    VALORTOTAL: Number    
}

export interface RangeDates {
    start: String,
    end: String
}