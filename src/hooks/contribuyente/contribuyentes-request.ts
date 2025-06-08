import axios from "axios";
import type { ResponseTaxPayerInformation } from "./contribuyente";

export const fetchTaxPayerStatus = async(cedula: string): Promise<boolean> => { 
    const url = `http://localhost:8080/api/sri/validar-contribuyente/${cedula}`;
    const response = await axios.get(url)
    return response.data as boolean;
}

export const fetchTaxPayerInformation = async(ruc: string): Promise<ResponseTaxPayerInformation | null> => {
    const url = `http://localhost:8080/api/sri/obtener-informacion/contribuyente/${ruc}`
    const { data } = await axios.get(url);
    return Array.isArray(data) && data.length > 0 ? data[0]: null;
}