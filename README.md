# Plataforma de Consulta Ciudadana

Aplicación web para la consulta unificada de **contribuyentes**, **vehículos** y **puntos de licencia** en Ecuador, construida con **React + Vite + TypeScript**.

---

## 🚀 Requisitos previos

- [Node.js y npm](https://nodejs.org/) (recomendado Node 18+)
- Tener el backend (API) corriendo en `localhost:8080`  
  (Si usas otro puerto o endpoint, ajusta las URLs en los hooks)

---

## 📦 Instalación

Clona este repositorio y entra al directorio:

```bash
git clone https://github.com/Tebas25/Contribuyente
cd tu-repo
```

## Instalar las dependencias
```
npm install
```

## Script útiles en desarollo
```
npm run dev: Levanta el servidor
npn run build: Compila la app para producción
npm run preview: Sirve la build localmente para probarla.
npm run lint: Linting de código
```
El frontend estará disponible en http://localhost:5173

## Configuración
Si tu backend NO está en localhost:8080, modifica las URLs de los hooks:

src/hooks/contribuyente/contribuyentes-request.ts

src/hooks/matriculaANT/matricula-ant-request.ts

src/hooks/matriculaANT/use-licence-points.ts

