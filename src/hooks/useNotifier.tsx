import { useContext } from "react";
import { NotifierContext } from "../provider/stateManager/notifierProvider";

export const useNotifier = () => {
    const context = useContext(NotifierContext);
    if (!context) {
      throw new Error('useNotifier must be used within a NotiferProvider');
    }
    return context;
};

export default useNotifier