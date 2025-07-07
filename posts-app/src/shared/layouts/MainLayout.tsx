import CssBaseline from "@mui/material/CssBaseline"
import type { ReactNode } from "react"
import LayoutFooter from "../../widgets/LayoutFooter/LayoutFooter"
import LayoutHeader from "../../widgets/LayoutHeader/LayoutHeader"
import { useTheme } from "../lib/theme/useTheme"
import * as s from "./MainLayout.module.css"

type MainLayoutProps = {
	children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
	const { theme } = useTheme()
	return (
		<div className={`app-theme-${theme}`}>
			<CssBaseline />
			<LayoutHeader />
			<main className={s.container}>{children}</main>
			<LayoutFooter />
		</div>
	)
}
export default MainLayout
