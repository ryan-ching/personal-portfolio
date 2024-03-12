import {createContext, useContext, useState} from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: 'success',
    // Message to be displayed, can be any string
    message: 'message submitted successfully!',
  });

    const onOpen = (type, message) => {
      setState({
        ...state,
        type,
        message,
        isOpen: true,
      });
    };

    const onClose = () => {
      setState({
        ...state,
        isOpen: false,
        type: "success",
        message: "Message submitted successfully!",
      });
    };

    const alertValue = {
      isOpen: state.isOpen,
      alertType: state.type,
      alertMessage: state.message,
      onOpen,
      onClose,
    }
  return (
    <AlertContext.Provider value={alertValue}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
