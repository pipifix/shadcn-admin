import { createBrowserRouter } from 'react-router-dom'
import GeneralError from './pages/errors/general-error'
import NotFoundError from './pages/errors/not-found-error'
import MaintenanceError from './pages/errors/maintenance-error'
import UnauthorisedError from './pages/errors/unauthorised-error.tsx'

const router = createBrowserRouter([
  // Auth routes
  {
    path: '/sign-in',
    lazy: async () => ({
      Component: (await import('./pages/auth/sign-in')).default,
    }),
  },
  {
    path: '/sign-in-2',
    lazy: async () => ({
      Component: (await import('./pages/auth/sign-in-2')).default,
    }),
  },
  {
    path: '/sign-up',
    lazy: async () => ({
      Component: (await import('./pages/auth/sign-up')).default,
    }),
  },
  {
    path: '/forgot-password',
    lazy: async () => ({
      Component: (await import('./pages/auth/forgot-password')).default,
    }),
  },
  {
    path: '/otp',
    lazy: async () => ({
      Component: (await import('./pages/auth/otp')).default,
    }),
  },

  // Main routes
  {
    path: '/',
    lazy: async () => {
      const AppShell = await import('@/components/app-shell')
      return { Component: AppShell.default }
    },
    errorElement: <GeneralError />,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('@/pages/dashboard')).default,
        }),
      },
      {
        path: 'tasks',
        lazy: async () => ({
          Component: (await import('@/pages/profile/tasks')).default,
        }),
      },
      {
        path: 'addressbook',
        lazy: async () => ({
          Component: (await import('@/pages/module-addressbook/contacts'))
            .default,
        }),
      },
      {
        path: '/demo/chats',
        lazy: async () => ({
          Component: (await import('@/pages/demo/chats/index.tsx')).default,
        }),
      },
      {
        path: '/demo/apps',
        lazy: async () => ({
          Component: (await import('@/pages/demo/apps/index.tsx')).default,
        }),
      },
      {
        path: '/crypto/encryption',
        lazy: async () => ({
          Component: (await import('@/pages/module-crypto/encryption')).default,
        }),
      },
      {
        path: '/crypto/decryption',
        lazy: async () => ({
          Component: (await import('@/pages/module-crypto/decryption')).default,
        }),
      },

      {
        path: '/demo/extra-components',
        lazy: async () => ({
          Component: (await import('@/pages/demo/extra-components/index.tsx'))
            .default,
        }),
      },
      {
        path: 'profile',
        lazy: async () => ({
          Component: (await import('./pages/profile')).default,
        }),
        errorElement: <GeneralError />,
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (await import('./pages/profile/profilesettings'))
                .default,
            }),
          },
          {
            path: '/profile/account',
            lazy: async () => ({
              Component: (await import('./pages/profile/account')).default,
            }),
          },
          {
            path: '/profile/appearance',
            lazy: async () => ({
              Component: (await import('./pages/profile/appearance')).default,
            }),
          },
          {
            path: '/profile/notifications',
            lazy: async () => ({
              Component: (await import('./pages/profile/notifications'))
                .default,
            }),
          },
          {
            path: '/profile/display',
            lazy: async () => ({
              Component: (await import('./pages/profile/display')).default,
            }),
          },
          {
            path: '/profile/error-example',
            lazy: async () => ({
              Component: (await import('./pages/profile/error-example'))
                .default,
            }),
            errorElement: <GeneralError className='h-[50svh]' minimal />,
          },
        ],
      },
    ],
  },

  // Error routes
  { path: '/500', Component: GeneralError },
  { path: '/404', Component: NotFoundError },
  { path: '/503', Component: MaintenanceError },
  { path: '/401', Component: UnauthorisedError },

  // Fallback 404 route
  { path: '*', Component: NotFoundError },
])

export default router
