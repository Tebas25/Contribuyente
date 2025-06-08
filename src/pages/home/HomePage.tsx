import { InputText } from "../../components/input-text.component";
import { ButtonComponent } from "../../components/button-component";
import { useTaxPayer } from "../../hooks/contribuyente/use-contribuyente";
import { useTaxPayerInformation } from "../../hooks/contribuyente/use-informacion-contribuyente";
import { useForm } from "react-hook-form";
import TableWrapper from "../../components/table-wrapped.component";
import { Column } from "primereact/column";
import { useCarInformation } from "../../hooks/matriculaANT/use-car-information";
import { useLicensePoints } from "../../hooks/matriculaANT/use-licence-points";
import { useEffect } from "react";

interface FormData {
  cedula: string;
  email: string;
  matricula?: string;
}

export const HomePage = () => {
  const { register, formState: { errors }, getValues, setValue } = useForm<FormData>();
  const { loadingTaxPayer, getTaxPayerStatus } = useTaxPayer();
  const { mutateAsync: getInfo, data: info, reset: resetInfo } = useTaxPayerInformation();
  const { mutateAsync: getCarInfo, data: carInfo, reset: resetCarInfo } = useCarInformation();
  const { mutateAsync: getLicensePoints, data: puntosData, reset: resetPuntos } = useLicensePoints();

  // Limpiar puntos cuando cambia la matrícula o la cédula
  useEffect(() => { resetPuntos(); }, [getValues, info, resetPuntos]);
  
  // Limpiar tabla, matrícula y puntos pero NO cédula/email
  const limpiarTodo = () => {
    setValue("matricula", "");
    resetInfo();
    resetCarInfo();
    resetPuntos();
  };

  // Buscar contribuyente
  const onBuscarContribuyente = async () => {
    const data = getValues();
    const isContribuyente = await getTaxPayerStatus(data.cedula);
    if (isContribuyente) {
      await getInfo(data.cedula);
    } else {
      limpiarTodo();
    }
  };

  // Consultar matrícula y puntos
  const onConsultarMatricula = async () => {
    const data = getValues();
    if (data.matricula && data.cedula) {
      await getCarInfo(data.matricula);
      // Extraer solo los primeros 10 dígitos de la cédula para la ANT
      const cedulaAnt = data.cedula.substring(0, 10);
      await getLicensePoints({ cedula: cedulaAnt, placa: data.matricula });
    }
  };

  const style = { padding: '10px' };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <form className="mb-4" autoComplete="off" onSubmit={e => e.preventDefault()}>
        <div
          style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "2rem",
          flexWrap: "wrap"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <InputText
              nameStrong="Cédula"
              field="cedula"
              register={register("cedula", { required: true })}
              typeError={errors.cedula}
              required
              style={{ maxWidth: "220px" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <InputText
            nameStrong="Correo electrónico"
            field="email"
            register={register("email", { required: true })}
            typeError={errors.email}
            required
            style={{ maxWidth: "320px" }}
            />
          </div>
          {info && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <InputText
                nameStrong="Matrícula"
                field="matricula"
                register={register("matricula", { required: true })}
                typeError={errors.matricula}
                required
                style={{ maxWidth: "180px" }}
              />
            </div>
          )}
          {puntosData && (
            <div style={{ display: "flex", flexDirection: "column", minWidth: 170 }}>
              <label
                style={{
                fontWeight: 600,
                marginBottom: 6,
                fontSize: 15,
                color: "#222"
                }}
              >
                Puntos de licencia:
              </label>
              <span
                style={{
                fontSize: 22,
                color: "#2563eb",
                fontWeight: 700,
                lineHeight: "2.1rem"
                }}
              >
                {puntosData.puntos}
              </span>
            </div>
          )}
        </div>
        <div style={{ display: "flex", gap: "1.5rem", marginTop: 22 }}>
          <ButtonComponent
            type="button"
            text="Buscar contribuyente"
            loading={loadingTaxPayer}
            onClick={onBuscarContribuyente}
            style={{ minWidth: 180 }}
          />
          {info && (
            <ButtonComponent
              type="button"
              text="Consultar Matrícula"
              onClick={onConsultarMatricula}
              style={{ minWidth: 180 }}
            />
          )}
        </div>
      </form>

      {/* ...Tus tablas igual */}
      {info && (
        <div className="tabla-container mt-10 p-4 rounded-lg shadow bg-white">
          <TableWrapper
            value={info ? [info] : []}
            meta={{ page: 0, total: 0, pageSize: 0 }}
            onChangePage={() => {}}
          >
            <Column header="Número de identificación" field="numeroRuc" style={style} />
            <Column header="Nombre del contribuyente" field="razonSocial" style={style} />
            <Column header="Estado del contribuyente" field="estadoContribuyenteRuc" style={style} />
            <Column header="Actividad económica principal" field="actividadEconomicaPrincipal" />
            <Column header="Tipo de Contribuyente" field="tipoContribuyente" style={style} />
            <Column header="Régimen" field="regimen" style={style} />
            <Column header="Cotribuyente Especial" field="contribuyenteEspecial" style={style} />
          </TableWrapper>
        </div>
      )}
      {carInfo && (
        <div className="tabla-container mt-10 p-4 rounded-lg shadow bg-white">
          <TableWrapper
            value={[carInfo]}
            meta={{ page: 0, total: 0, pageSize: 0 }}
            onChangePage={() => {}}
          >
            <Column header="Placa" field="numeroPlaca" style={style} />
            <Column header="Marca" field="descripcionMarca" style={style} />
            <Column header="Modelo" field="descripcionModelo" style={style} />
            <Column header="Año" field="anioAuto" style={style} />
            <Column header="País" field="descripcionPais" style={style} />
            <Column header="Último año pagado" field="ultimoAnioPagado" style={style} />
            <Column header="Estado Exoneración" field="estadoExoneracion" style={style} />
          </TableWrapper>
        </div>
      )}
    </div>
  );
};
