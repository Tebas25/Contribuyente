import { useMutation } from "@tanstack/react-query";
import { fetchCarInformation } from "./matricula-ant-request";

export const useCarInformation = () => {
  return useMutation({
    mutationFn: fetchCarInformation,
  });
};