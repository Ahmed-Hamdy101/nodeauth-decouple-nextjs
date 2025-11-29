import React, { ReactNode } from 'react'
import FormInputs from '@/components/auth/FormInputs'
interface Props {
  children: ReactNode
}
const LoginLayout = ({ children }: Props) => {
  return <div className="min-h-screen bgc-panel flex items-center justify-center ">{children}</div>
}

export default LoginLayout
