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

interface IProps {
  isInitiallyVisible?: boolean;
}

export const ImprintContextProvider = ({
  children,
  isInitiallyVisible = false,
}: PropsWithChildren<IProps>) => {
  const [isVisible, setIsVisible] = useState(isInitiallyVisible);

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
