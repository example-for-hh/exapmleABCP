
import { FC } from 'react'

interface ILayoutProps {
    children: React.ReactNode,
}

const AppLayout: FC<ILayoutProps> = ({ children }) => {

    return (
        <>
            {children}
        </>
    )
}

export default AppLayout
