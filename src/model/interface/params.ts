export interface Action<T> {
    type: string,
    payload: T
}

export interface KeyValuePayload {
    key: string,
    value: any
}

export interface INotifierProps {
    $bgColor?: string, 
    titleColor?: string, 
    contentColor?: string, 
    closeBtnColor?: string, 
    closeBtnHoverColor?: string, 
    closeBtnBgColor?: string, 
    closeBtnHoverBgColor?: string, 
    showDismissText?: boolean, 
    dismissText?: string, 
    dismissTextColor?: string, 
    dismissTextHoverColor?: string, 
    displayDuration?: number,
    showTypeIcon?: boolean
}