'use client'

import '../src/i18n'
import LanguageSwitcher from '../src/components/LanguageSwitcher'
import useRegisterSW from '../src/hooks/useRegisterSW'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useRegisterSW()
  
  return (
    <>
      <header className="bg-white border-b p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">Intern-Setu</h1>
        <LanguageSwitcher />
      </header>
      <main className="min-h-screen bg-gray-50">
        {children}
      </main>
    </>
  )
}
