import CssBaseline from "@mui/material/CssBaseline"
import { Outlet } from "react-router"
import LayoutFooter from "../../widgets/LayoutFooter/LayoutFooter"
import LayoutHeader from "../../widgets/LayoutHeader/LayoutHeader"
import { useTheme } from "../lib/theme/useTheme"
import s from "./MainLayout.module.css"

function MainLayout() {
	const { theme } = useTheme()

	return (
		<div className={`app-theme-${theme}`}>
			<CssBaseline />
			<LayoutHeader />
			<main className={s.container}>
				<Outlet />
			</main>
			<LayoutFooter />
		</div>
	)
}
export default MainLayout
