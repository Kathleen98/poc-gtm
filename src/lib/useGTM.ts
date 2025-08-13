import { sendGTMEvent } from '@next/third-parties/google'

export const useGTM = () => {
    /* eslint-disable */
    const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
        sendGTMEvent({
            event: eventName,
            ...parameters
        })
    }

    const trackPageView = (pagePath: string) => {
        sendGTMEvent({
            event: 'page_view',
            page_path: pagePath
        })
    }

    const trackPurchase = (transactionId: string, value: number, currency: string = 'BRL') => {
        sendGTMEvent({
            event: 'purchase',
            transaction_id: transactionId,
            value: value,
            currency: currency
        })
    }

    const trackAddToCart = (itemId: string, itemName: string, value: number) => {
        sendGTMEvent({
            event: 'add_to_cart',
            currency: 'BRL',
            value: value,
            items: [{
                item_id: itemId,
                item_name: itemName,
                price: value,
                quantity: 1
            }]
        })
    }

    return {
        trackEvent,
        trackPageView,
        trackPurchase,
        trackAddToCart
    }
}