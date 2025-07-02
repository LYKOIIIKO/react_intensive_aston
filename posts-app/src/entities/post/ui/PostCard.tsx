import type { FC } from "react";

type Props = {
	post: {
		userId: number;
		id: number;
		title: string;
		body: string;
	};
};

const PostCard: FC<Props> = ({ post }) => {
	return (
		<div>
			<h5>{post.title}</h5>
			<p>{post.body}</p>
		</div>
	);
};
export default PostCard;
