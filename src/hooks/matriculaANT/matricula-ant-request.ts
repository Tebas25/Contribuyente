import axios from "axios"
import type { LicensePointRequest, LicesePointResponse, ResponseCarInformation } from "./matricula"

export const fetchCarInformation = async(matricula: string): Promise<ResponseCarInformation> => {
    const url = `http://localhost:8080/api/sri/obtener/matricula/${matricula}`
    const { data } = await axios.get(url);
    return data;
}

export const fetchLicensePoints = async (body: LicensePointRequest): Promise<LicesePointResponse> => {
  const url = "http://localhost:8080/api/v1/ant/puntos";
  const { data } = await axios.post(url, body);
  return data;
};