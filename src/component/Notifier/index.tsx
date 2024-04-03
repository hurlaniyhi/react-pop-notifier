import React, { useEffect, useState } from 'react'
import { NotifierContainer, GlobalStyle } from './style'
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
            <GlobalStyle />
            <NotifierContainer
                isNotifier={notification.status}
                type={notification.type}
                bgColor={bgColor}
            >
                <FlexRow justifyContent='space-between' alignItems='flex-start'>
                    {  showTypeIcon &&
                        <>
                            {
                                notification.type === 'success' ?
                                <Circle 
                                    bgColor='#B4E3E1' size='48' overflow='hidden'
                                    borderWidth='6' borderColor='#F0FDF9'
                                    topMargin='-5'
                                    style={{flexBasis: 'auto', flexShrink: '0', flexGrow: '0'}}
                                >
                                    <AppSpan textSize='25' color='#15B79E' topMargin='5'>
                                        <AiOutlineCheckCircle 
                                            //style={{color: '#15B79E', fontSize: '25px'}} 
                                        /> 
                                    </AppSpan>
                                </Circle>
                                : 
                                <Circle 
                                    bgColor='#FEF3F2' size='48'
                                    overflow='hidden' topMargin='-5'
                                    style={{flexBasis: 'auto', flexShrink: '0', flexGrow: '0'}}
                                >
                                    <AppSpan textSize='30' color='#B42318' topMargin='5'>
                                        <AiOutlineCloseCircle 
                                            //style={{color: '#B42318', fontSize: '25px'}} 
                                        /> 
                                    </AppSpan>
                                </Circle>
                            }
                        </>
                    }
                    <CustomContainer 
                        width='270' leftMargin='10' rightMargin='15'
                    >
                        { notification.title &&
                            <AppText 
                                fontWeight='600' bottomMargin='7' 
                                color={titleColor || '#101828'}
                            >
                                {notification.title}
                            </AppText>
                        }
                        <AppText  
                            color={contentColor || '#667085'} bottomMargin='20' 
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
                        titleSize="20" fontWeight="500"
                        width='34' shadow='none'
                        height='34'
                        radius='4'
                        bgColor={closeBtnBgColor || '#ffffff'}
                        hoverBgColor={closeBtnHoverBgColor || '#FEF3F2'}
                        borderColor='none'
                        color={closeBtnColor || '#000000'}
                        hoverColor={closeBtnHoverColor || '#B42318'}
                        onClick={handleCloseNotifier}
                    >
                        <RiCloseFill style={{marginTop: '5px'}} />
                    </Button> 
                </FlexRow>
            </NotifierContainer>
        </>
    )
}

export default Notifier