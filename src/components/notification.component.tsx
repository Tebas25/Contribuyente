import { toast, type ToastOptions, type ToastContent } from 'react-toastify';

/* Setting the options for the toast. */
const options: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export class Notifications {
  /**
   * The function takes a string as an argument and launch the toast
   * @param {string} message 
   */
  static getInfo(message: string): void {
    toast.info(message, options);
  }

  /**
   * The function takes a string as an argument and launch the toast
   * @param {string} message - The message you want to display
   */
  static getSuccess(message: string): void {
    toast.success(message, options);
  }

  /**
   * The function takes a string as an argument and launch the toast
   * @param {string} message - The message you want to display
   */
  static getWarning(message: string): void {
    toast.warning(message, options);
  }

  /**
   * The function takes a string as an argument and launch the toast
   * @param {string} message - The message you want to display
   */
  static getError(message: string | ToastContent): void {
    toast.error(message, options);
  }
}
