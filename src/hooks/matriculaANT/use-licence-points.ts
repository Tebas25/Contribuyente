// hooks/matriculaANT/use-license-points.ts
import { useMutation } from "@tanstack/react-query";
import { fetchLicensePoints } from "./matricula-ant-request";

export const useLicensePoints = () => {
  return useMutation({
    mutationFn: fetchLicensePoints,
  });
};
