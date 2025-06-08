export type ResponseTaxPayerInformation = {
    numeroRuc: string;
    razonSocial: string;
    estadoContribuyenteRuc: string;
    actividadEconomicaPrincipal: string;
    tipoContribuyente: string;
    regimen: string;
    categoria: string | null;
    obligadoLlevarContabilidad: string;
    agenteRetencion: string;
    contribuyenteEspecial: string;
    informacionFechasContribuyente: DatesInfo;
    representantesLegales: string | null;
    motivoCancelacionSuspencion: string | null;
    contribuyenteFantasma: string;
    transaccionesInexistentes: string;
}

export type DatesInfo = {
    fechaInicioActividades: string;
    fechaCese: string;
    fechaReinicioActividades: string;
    fechaActualizacion: string;
}