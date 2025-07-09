import * as React from 'react'
import { NextAppProvider } from '@toolpad/core/nextjs'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import DashboardIcon from '@mui/icons-material/Dashboard'
import LinearProgress from '@mui/material/LinearProgress'
import type { Branding, Navigation } from '@toolpad/core/AppProvider'

import theme from '../theme'
import { Metadata } from 'next'
import Providers from './providers'

export const metadata: Metadata = {
    title: 'Toolpad App',
    description: 'A Next.js app template with Toolpad.',
}

const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'Menu',
    },
    {
        segment: '',
        title: 'Dashboard',
        icon: <DashboardIcon />,
    },
]

const BRANDING: Branding = {
    title: 'Toolpad App',
}

export default function RootLayout(props: { children: React.ReactNode }) {
    return (
        <html
            lang='en'
            data-toolpad-color-scheme='light'
            suppressHydrationWarning
        >
            <body>
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <React.Suspense fallback={<LinearProgress />}>
                        <NextAppProvider
                            navigation={NAVIGATION}
                            branding={BRANDING}
                            theme={theme}
                        >
                            <Providers>{props.children}</Providers>
                        </NextAppProvider>
                    </React.Suspense>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}
