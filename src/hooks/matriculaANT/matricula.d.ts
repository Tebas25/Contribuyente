export type ResponseCarInformation = {
    codigoVehiculo: number;
    numeroPlaca: string;
    numeroCamvCpn: string;
    colorVehiculo1: string | null;
    coloVehiculo2: string | null;
    cilindraje: string | null;
    nombreClase: string | null;
    descripcionMarca: string;
    descripcionModelo: string;
    anioAuto: number;
    descripcionPais: string;
    mensajeMotivoAuto: string | null;
    aplicaCouta: boolean;
    fechaUltimaMatricula: string | null;
    fechaCompraRegistro: string | null;
    fechaRevision: string | null;
    ultimoAnioPagado: number;
    prohibidoEnajenar: string | null;
    observacion: string | null;
    estadoExoneracion: string;
}

export type LicensePointRequest = {
    cedula: string;
    placa: string;
}

export type LicesePointResponse = {
    puntos: string;
}