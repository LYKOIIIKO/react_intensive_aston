import type { PropsWithChildren } from "react"

type ComponentWithLoadingProps = {
	isLoading: boolean
	props: PropsWithChildren
}
function withLoading(Component: React.ReactElement) {
	return function ComponentWithLoading({ isLoading, ...props }: ComponentWithLoadingProps) {
		return isLoading ? <div>Загрузка...</div> : <Component {...props} />
	}
}
export default withLoading
