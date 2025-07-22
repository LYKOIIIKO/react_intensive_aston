import type { FC } from "react"

type ComponentWithLoadingProps = {
	isLoading: boolean
	props?: {}
}

type ComponentProps = {
	props?: {}
}
function withLoading(Component: FC<ComponentProps>) {
	return function ComponentWithLoading({ isLoading, ...props }: ComponentWithLoadingProps) {
		return isLoading ? (
			<div className="loading-component">Загрузка...</div>
		) : (
			<Component {...props} />
		)
	}
}
export default withLoading
