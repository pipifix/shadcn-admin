import { Icons } from '@/components/svg/icons'

import {
  IconApps,
  IconBarrierBlock,
  IconBoxSeam,
  IconChartHistogram,
  IconChecklist,
  IconComponents,
  IconError404,
  IconExclamationCircle,
  IconHexagonNumber1,
  IconHexagonNumber2,
  IconHexagonNumber3,
  IconHexagonNumber4,
  IconHexagonNumber5,
  IconLayoutDashboard,
  IconMessages,
  IconRouteAltLeft,
  IconServerOff,
  IconSettings,
  IconTruck,
  IconUserShield,
  IconUsers,
  IconLock,
} from '@tabler/icons-react'

export interface NavLink {
  isHeadline?: boolean
  title: string
  title_en?: string
  label?: string
  href: string
  app?: string
  right?: string[]
  icon?: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}
export const internalFunctions: NavLink[] = [
  {
    title: 'Dein Konto und Profil',
    title_en: 'Your Account and Profile',
    href: 'headline',
  },
  {
    title_en: 'Your Profile',
    title: 'Dein Profil',
    icon: <Icons.User className='h-4 w-4' />,
    href: '/dashboard/profile',
  },

  {
    title: 'Adressbuch',
    title_en: 'Addressbook',
    icon: <Icons.BookUser className='h-4 w-4' />,
    href: '/dashboard/adressbook/privatecontacts',
  },

  {
    title: 'Deine Organisation',
    title_en: 'Your Organization',
    icon: <Icons.Factory className='h-4 w-4' />,
    href: '/dashboard/profile/organization',
  },

  {
    title: 'Deine Aufgaben',
    title_en: 'Your Tasks',
    icon: <Icons.ClipboardCheck className='h-4 w-4' />,
    href: '/dashboard/profile/tasks',
    label: '17',
  },
  {
    isHeadline: true,
    title_en: 'Secure File Exchange',
    title: 'Secure File Exchange',
    href: '#',
  },
  {
    title: 'Cloud Dokumente',
    title_en: 'Cloud Documents',
    icon: <Icons.Files className='h-4 w-4' />,
    href: '/dashboard/sfix/',
  },
  {
    title: 'Freigegebene Dokumente',
    title_en: 'Share Documents',
    icon: <Icons.Files className='h-4 w-4' />,
    href: '/dashboard/sfix/',
  },
  {
    isHeadline: true,
    title_en: 'Other Products+Application',
    title: 'Weitere Produkte+Anwendungen',
    href: '#',
  },
  {
    title: 'Shop',
    title_en: 'Shop',
    icon: <Icons.ShoppingCart className='h-4 w-4' />,
    href: '/shop',
  },
]

export const applicationmodules: SideLink[] = [
  {
    isHeadline: true,
    title: 'Dein Konto und Profil',
    title_en: 'Your Account and Profile',
    href: '#',
  },
  {
    title_en: 'Cryptography',
    title: 'Kryptografie',
    app: 'crypto',
    href: 'dashboard/crypto/',
    icon: <Icons.FileKey2 className='h-4 w-4' />,
    sub: [
      {
        title: 'Verschlüsselung',
        title_en: 'Encrpytion',
        icon: <Icons.FileLock2 className='h-4 w-4' />,
        href: '/dashboard/crypto/encryption',
      },
      {
        title: 'Entschlüsselung',
        title_en: 'Decryption',
        icon: <Icons.FileLock className='h-4 w-4' />,
        href: '/dashboard/crypto/decryption',
      },
    ],
  },
  {
    title: 'Signatures',
    title_en: 'Signaturanwendungen',
    icon: <Icons.FileSignature className='h-4 w-4' />,
    href: '/signing/overview',
    app: 'signing',
    sub: [
      {
        title: 'Unterschreiben',
        title_en: 'Annotation',
        href: '/dashboard/signing/annotation',
        icon: <Icons.PenLine className='h-4 w-4' />,
        right: ['basic , annotation'],
      },
      {
        title: 'Fortgeschritten signieren',
        title_en: 'Advanced Signature',
        href: '/dashboard/signing/aes',
        icon: <Icons.FileSignature className='h-4 w-4' />,
        right: ['aes'],
      },
      {
        title: 'Qualifiziert signieren',
        title_en: 'Qualified Siganture',
        href: '/dashboard/signing/qes',
        icon: <Icons.FileSignature className='h-4 w-4' />,
        right: ['qes-swiss,qes-german'],
      },
      {
        title: 'Mehrpersonen Signatur',
        title_en: 'Multiperson Signature',
        href: '/dashboard/signing/chainsign',
        icon: <Icons.UsersRound className='h-4 w-4' />,
        right: ['s-chain'],
      },
    ],
  },
  {
    title: 'ERV eBO-Postfach',
    title_en: 'ERV eBO-Mailbox',
    app: 'ebo',
    icon: <Icons.Scale className='h-4 w-4' />,
    href: '/dashbord/erv/',
    sub: [
      {
        title: 'SAFE-Indentität',
        title_en: 'SAFE-Indenty',
        icon: <Icons.Contact2 className='h-4 w-4' />,
        href: '/dashboard/erv/safe-identity',
        right: ['safe-ident'],
      },
      /* {
        title_en: 'Nutzerkonten',
        title: 'UserAccounts',
        icon: <Icons.UsersRound className='h-4 w-4' />,
        href: '/dashboard/erv/ebo-users',
        right: ['safe-ident'],
      }, */
      {
        title_en: 'Mailbox settings',
        title: 'Postfach Einstellungen',
        icon: <Icons.MailboxCorrect className='h-4 w-4' />,
        href: '/dashboard/erv/ebo-settings/',
      },
      {
        title: 'Outlook ERV Add-in',
        title_en: 'Outlook ERV Add-in',
        icon: <Icons.ToyBrick className='h-4 w-4' />,
        href: '/dashboard/erv/ebo-addin',
      },
      {
        title: 'SAFE-Registration',
        title_en: 'SAFE-Registration',
        icon: <Icons.WandSparkles className='h-4 w-4' />,
        href: '/dashboard/erv/registration',
      },
    ],
  },
  {
    title: 'AS4',
    title_en: 'AS4',
    app: 'as4',
    icon: <Icons.Zap className='h-4 w-4' />,
    href: 'as4',
    sub: [
      {
        title: 'Übersicht',
        title_en: 'Overview',
        icon: <Icons.ScanEye className='h-4 w-4' />,
        href: '/dashboard/as4/overview',
      },
      {
        title: 'Marktpartner-DB',
        title_en: 'Marketpartner-DB',
        icon: <Icons.DatabaseZap className='h-4 w-4' />,
        href: '/dashboard/as4/mpdb',
      },
      {
        title: 'Metriken',
        title_en: 'Metriken',
        icon: <Icons.BarChart3 className='h-4 w-4' />,
        href: '/dashboard/as4/metrics',
      },
      {
        title: 'AS4 Antrag',
        title_en: 'AS4 Application',
        icon: <Icons.ScanEye className='h-4 w-4' />,
        href: '/dashboard/as4/registration',
      },
    ],
  },
]

export const sidelinks: SideLink[] = [
  {
    title: 'Dashboard',
    label: '',
    href: '/',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Tasks',
    label: '3',
    href: '/tasks',
    icon: <IconChecklist size={18} />,
  },
  {
    title: 'Chats',
    label: '9',
    href: '/chats',
    icon: <IconMessages size={18} />,
  },
  {
    title: 'Apps',
    label: '',
    href: '/apps',
    icon: <IconApps size={18} />,
  },
  {
    title: 'Authentication',
    label: '',
    href: '',
    icon: <IconUserShield size={18} />,
    sub: [
      {
        title: 'Sign In (email + password)',
        label: '',
        href: '/sign-in',
        icon: <IconHexagonNumber1 size={18} />,
      },
      {
        title: 'Sign In (Box)',
        label: '',
        href: '/sign-in-2',
        icon: <IconHexagonNumber2 size={18} />,
      },
      {
        title: 'Sign Up',
        label: '',
        href: '/sign-up',
        icon: <IconHexagonNumber3 size={18} />,
      },
      {
        title: 'Forgot Password',
        label: '',
        href: '/forgot-password',
        icon: <IconHexagonNumber4 size={18} />,
      },
      {
        title: 'OTP',
        label: '',
        href: '/otp',
        icon: <IconHexagonNumber5 size={18} />,
      },
    ],
  },
  {
    title: 'Users',
    label: '',
    href: '/users',
    icon: <IconUsers size={18} />,
  },
  {
    title: 'Requests',
    label: '10',
    href: '/requests',
    icon: <IconRouteAltLeft size={18} />,
    sub: [
      {
        title: 'Trucks',
        label: '9',
        href: '/trucks',
        icon: <IconTruck size={18} />,
      },
      {
        title: 'Cargos',
        label: '',
        href: '/cargos',
        icon: <IconBoxSeam size={18} />,
      },
    ],
  },
  {
    title: 'Analysis',
    label: '',
    href: '/analysis',
    icon: <IconChartHistogram size={18} />,
  },
  {
    title: 'Extra Components',
    label: '',
    href: '/extra-components',
    icon: <IconComponents size={18} />,
  },
  {
    title: 'Error Pages',
    label: '',
    href: '',
    icon: <IconExclamationCircle size={18} />,
    sub: [
      {
        title: 'Not Found',
        label: '',
        href: '/404',
        icon: <IconError404 size={18} />,
      },
      {
        title: 'Internal Server Error',
        label: '',
        href: '/500',
        icon: <IconServerOff size={18} />,
      },
      {
        title: 'Maintenance Error',
        label: '',
        href: '/503',
        icon: <IconBarrierBlock size={18} />,
      },
      {
        title: 'Unauthorised Error',
        label: '',
        href: '/401',
        icon: <IconLock size={18} />,
      },
    ],
  },
  {
    title: 'Settings',
    label: '',
    href: '/settings',
    icon: <IconSettings size={18} />,
  },
]
