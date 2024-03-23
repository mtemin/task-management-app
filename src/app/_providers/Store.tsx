import { ReactNode } from 'react'
import { create } from 'zustand'


type Store = {
  loginForm: LoginForm,
  setLoginForm: (form: LoginForm) => void,
  registerForm: RegisterForm,
  setRegisterForm: (form: RegisterForm) => void,
  token: string,
  setToken: (token: string) => void,
  isActivitiesVisible: boolean,
  setIsActivitiesVisible: () => void,
  isProjectsVisible: boolean,
  setIsProjectsVisible: () => void,
  isDetailsModalVisible: boolean,
  toggleIsDetailsModalVisible: () => void,
  selectedTask: Task | null,
  setSelectedTask: (task: Task) => void,

}

export const useZustand = create<Store>((set) => ({
  loginForm: { email: '', password: '' },
  setLoginForm: (form: LoginForm) => set({ loginForm: form }),
  registerForm: { username: '', email: '', password: '' },
  setRegisterForm: (form: RegisterForm) => set({ registerForm: form }),
  token: '',
  setToken: (token) => set(() => ({ token: token })),
  isActivitiesVisible: true,
  setIsActivitiesVisible: () => set((state) => ({ isActivitiesVisible: !state.isActivitiesVisible })),
  isProjectsVisible: true,
  setIsProjectsVisible: () => set((state) => ({ isProjectsVisible: !state.isProjectsVisible })),
  isDetailsModalVisible: false,
  toggleIsDetailsModalVisible: () => set((state) => ({ isDetailsModalVisible: !state.isDetailsModalVisible })),
  selectedTask: null,
  setSelectedTask: (task: Task | null) => set({ selectedTask: task }),

}))


export default function Store({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}
