import React, { useReducer, useContext } from 'react'
import { Action, KeyValuePayload } from '../../model'
  
const NotifierContext = React.createContext<any>(null)

const NotifierReducer = (state: any, action: Action<KeyValuePayload>) => {
    switch(action.type){
        case "set-visibility": 
            return { ...state, [action.payload.key]: action.payload.value }
    }
}

export const NotifierProvider = (props: any) => {
    const [state, dispatch] = useReducer(NotifierReducer, {
        notification: {
            status: false, 
            message: '', 
            title: '', 
            type: 'success'
        }
    })

    const notifier = {
        show: async function (message: string, title = null, type?: string) {
            const messageType = type ? type.toLowerCase() : 'error'
            const messageTitle = title ? title : title === null ? (messageType === 'success' ? 'Success Response' : 'Error Response') : ''
            await dispatch({
                type: "set-visibility", 
                payload: {
                    key: 'notification', 
                    value: {status: message ? true : false, message, type: messageType, title: messageTitle}
                }
            })
        },
        hide: async function () {
            await dispatch({
                type: "set-visibility", 
                payload: {
                    key: 'notification', 
                    value: {status: false, message: state.notification.message, type: state.notification.type, title: state.notification.title}
                }
            })
        }
    }
   
    const stateActions = {
        notifier
    }

    return (
        <NotifierContext.Provider value={{notifData: state, ...stateActions}} >
            {props.children}
        </NotifierContext.Provider>
    )
}

export const useNotifier = () => {
    const context = useContext(NotifierContext);
    if (!context) {
      throw new Error('useNotifier must be used within a NotiferProvider');
    }
    return context;
};