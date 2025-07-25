import List from "@mui/material/List"
import type React from "react"

type ItemListProps<T> = {
	items: T[]
	renderItem: (item: T) => React.ReactNode
}

const ItemList = <T extends unknown>(props: ItemListProps<T>): React.JSX.Element => {
	const { items, renderItem } = props
	return <List>{items.map((item) => renderItem(item))}</List>
}

export default ItemList
