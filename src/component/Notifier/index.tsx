import React, { useEffect, useState } from 'react'
import { NotifierContainer } from './style'
import {useNotifier} from '../../provider/stateManager/notifierProvider'
import { AppText, CustomContainer, FlexRow, Circle, AppSpan, Button } from '../../style'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { RiCloseFill } from 'react-icons/ri'
import { INotifierProps } from '../../model'

const Notifier: React.FC<INotifierProps> = ({
    bgColor, titleColor, contentColor, closeBtnColor, 
    closeBtnHoverColor, closeBtnBgColor, 
    closeBtnHoverBgColor, showDismissText = true, 
    dismissText, dismissTextColor, 
    dismissTextHoverColor, displayDuration,
    showTypeIcon = true
}) => {
    const { notifData: {notification}, notifier }: any = useNotifier()

    var [time] = useState<any>(null)

    useEffect(() => {
        if(notification.status) {
          time =  setTimeout(() => {
            notifier.hide()
            }, (displayDuration || 5000))
        }

        return () => { clearTimeout(time) }
    }, [notification.status])

    function handleCloseNotifier () {
        notifier.hide()
        clearTimeout(time)
    }
    
    return (
        <>
            <NotifierContainer
                isNotifier={notification.status}
                type={notification.type}
                bgColor={bgColor}
                className="notifier-container"
            >
                <FlexRow justifyContent='space-between' alignItems='flex-start'>
                    {  showTypeIcon &&
                        <>
                            {
                                notification.type === 'success' ?
                                <Circle 
                                    bgColor='#B4E3E1' size='5' 
                                    borderWidth='6' borderColor='#F0FDF9' 
                                    topMargin='-0.5' rightMargin='-0.5'
                                    style={{flexBasis: 'auto', flexShrink: '0', flexGrow: '0'}}
                                >
                                    <AiOutlineCheckCircle 
                                        style={{color: '#15B79E', fontSize: '2.5rem'}} 
                                    /> 
                                </Circle>
                                : 
                                <Circle 
                                    bgColor='#FEF3F2' size='4'
                                    style={{flexBasis: 'auto', flexShrink: '0', flexGrow: '0'}}
                                >
                                    <AiOutlineCloseCircle 
                                        style={{color: '#B42318', fontSize: '2.5rem'}} 
                                    /> 
                                </Circle>
                            }
                        </>
                    }
                    <CustomContainer 
                        width='27.6' leftMargin='1.5' rightMargin='1.5'
                    >
                        <AppText 
                            fontWeight='600' 
                            color={titleColor || '#101828'}
                        >
                            {notification.title}
                        </AppText>
                        <AppText 
                            textSize='1.4' 
                            color={contentColor || '#667085'} bottomMargin='2' 
                        >
                            {notification.message}
                        </AppText>
                        { showDismissText &&
                            <AppSpan 
                                color={dismissTextColor || (notification.type === 'success' ? '#0A756F' : '#B42318')} 
                                fontWeight='600' cursor='pointer'
                                hoverColor={dismissTextHoverColor || '#B42318'}
                                onClick={handleCloseNotifier}
                            >
                                {dismissText || 'Dismiss'}
                            </AppSpan>
                        }
                    </CustomContainer>
                    <Button 
                        titleSize="2" fontWeight="500"
                        width='3.4' shadow='none'
                        height='3.4'
                        radius='0.4'
                        bgColor={closeBtnBgColor || '#ffffff'}
                        hoverBgColor={closeBtnHoverBgColor || '#FEF3F2'}
                        borderColor='none'
                        color={closeBtnColor || '#000000'}
                        hoverColor={closeBtnHoverColor || '#B42318'}
                        onClick={handleCloseNotifier}
                    >
                        <RiCloseFill />
                    </Button> 
                </FlexRow>
            </NotifierContainer>
        </>
    )
}

export default Notifier