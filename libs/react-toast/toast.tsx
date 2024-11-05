import { toast } from "react-hot-toast";
import { ToastMessage } from "./toast-message";

export interface IMakeToastOptions {
  message: string;
  type: "success" | "error" | "info" | "warning";
  id: string;
}

export const makeToast = (options: IMakeToastOptions) => {
  const { message, type, id } = options;

  return toast.custom(
    <ToastMessage
      message={message}
      onClose={() => toast.remove(id)}
      type={type}
      id={id}
    />,
    {
      position: "top-right",
      duration: 3000,
      id,
    }
  );
};
