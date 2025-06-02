import { __ } from "@wordpress/i18n";
import { dateI18n, getSettings } from "@wordpress/date";

export default function PostList(props) {
	const { posts } = props;

	if (!posts) return null;

	return (
		<>
			<h2>{__("Latest posts", "capitainewp-blocks")}</h2>
			<ul className="wp-block-capitainewp-entityrecords__list">
				{posts.map((post) => (
					<li
						key={post.id}
						className="wp-block-capitainewp-entityrecords__post"
					>
						<img
							src={post._embedded["wp:featuredmedia"][0].source_url}
							alt={post._embedded["wp:featuredmedia"][0].alt}
						/>
						<h3>{post.title.raw}</h3>
						<div
							className="wp-block-capitainewp-entityrecords__excerpt"
							dangerouslySetInnerHTML={{
								__html: post.excerpt.rendered,
							}}
						/>
						<p className="wp-block-capitainewp-entityrecords__meta">
							{__("Published on", "capitainewp-blocks")}{" "}
							{dateI18n(getSettings().formats.date, post.date)}{" "}
							{__("by", "capitainewp-blocks")} {post._embedded.author[0].name}
						</p>
					</li>
				))}
			</ul>
		</>
	);
}
