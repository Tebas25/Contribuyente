import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { fetchTaxPayerStatus } from './contribuyentes-request';
import { Notifications } from '../../components/notification.component';

export const useTaxPayer = (): {
  isTaxPayer: boolean | undefined;
  loadingTaxPayer: boolean;
  getTaxPayerStatus: (cedula: string) => Promise<boolean>;
} => {
  const {
    data: isTaxPayer,
    isPending: loadingTaxPayer,
    mutateAsync: getTaxPayerStatus,
  }: UseMutationResult<boolean, Error, string> = useMutation({
    mutationKey: ['getIsTaxPayerStatus'],
    mutationFn: fetchTaxPayerStatus,
    onSuccess: (data) => {
      console.log('onSuccess', data);
      if (data === false) {
        Notifications.getError('Esta persona no es contribuyente');
      } else if (data === true) {
        Notifications.getSuccess('¡Esta persona SÍ es contribuyente!');
      }
    },
  });

  return {
    isTaxPayer,
    loadingTaxPayer,
    getTaxPayerStatus,
  };
};
