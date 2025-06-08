import { useMutation } from '@tanstack/react-query';
import { fetchTaxPayerInformation } from './contribuyentes-request';

export const useTaxPayerInformation = () => {
  return useMutation({
    mutationFn: fetchTaxPayerInformation,
  });
};
