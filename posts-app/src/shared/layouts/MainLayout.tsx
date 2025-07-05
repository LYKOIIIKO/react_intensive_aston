import type { ReactNode } from "react"
import LayoutFooter from "../../widgets/LayoutFooter/LayoutFooter"
import LayoutHeader from "../../widgets/LayoutHeader/LayoutHeader"

type MainLayoutProps = {
	children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
	return (
		<>
			<LayoutHeader />
			<main>{children}</main>
			<LayoutFooter />
		</>
	)
}
export default MainLayout
