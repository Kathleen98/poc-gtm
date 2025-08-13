declare global {
    interface Window {
        /* eslint-disable */
        dataLayer: any[]
        gtag: (...args: any[]) => void
    }
}
export { }