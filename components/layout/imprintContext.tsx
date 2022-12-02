import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

const ImprintContext = createContext<{
  isVisible: boolean;
  openDialog(): void;
  closeDialog(): void;
}>({ isVisible: false, openDialog: () => {}, closeDialog: () => {} });

export const ImprintContextProvider = ({ children }: PropsWithChildren) => {
  const [isVisible, setIsVisible] = useState(false);

  const openDialog = useCallback(() => {
    setIsVisible(true);
  }, []);

  const closeDialog = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <ImprintContext.Provider value={{ isVisible, openDialog, closeDialog }}>
      {children}
    </ImprintContext.Provider>
  );
};

export const useImprint = () => {
  const { isVisible, openDialog, closeDialog } = useContext(ImprintContext);

  return {
    isVisible,
    openDialog,
    closeDialog,
  };
};
