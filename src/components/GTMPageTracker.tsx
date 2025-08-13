'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { sendGTMEvent } from '@next/third-parties/google'

export default function GTMPageTracker() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')

        sendGTMEvent({
            event: 'page_view',
            page_path: url,
            page_title: document.title,
            page_location: window.location.href
        })
    }, [pathname, searchParams])

    return null
}