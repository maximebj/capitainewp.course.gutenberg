import { __ } from "@wordpress/i18n";
import { Placeholder, Spinner } from "@wordpress/components";
import { useEntityRecords } from "@wordpress/core-data";

export default function Block(props) {
	const { postID, showImage, showCategory, showAuthor } = props;

	// Récupérer la publication à partir de l'ID
	const { hasResolved, records } = useEntityRecords("postType", "post", {
		include: [postID],
		_embed: true,
		per_page: 1,
	});

	// Isoler le seul résultat de la requête
	const post = records?.[0];

	// Display placeholder while loading
	if (!hasResolved) {
		return (
			<Placeholder>
				<Spinner /> {__("Loading…", "capitainewp-blocks")}
			</Placeholder>
		);
	}

	// Afficher le bloc
	return (
		<>
			{post.featured_media && showImage && (
				<a
					className="wp-block-capitainewp-post__image"
					style={{
						backgroundImage: `url(${post._embedded["wp:featuredmedia"][0].source_url})`,
					}}
				/>
			)}
			<div className="wp-block-capitainewp-post__content">
				<p className="wp-block-capitainewp-post__title">
					<a>{post.title.rendered}</a>
				</p>
				<p className="wp-block-capitainewp-post__metas">
					<em>
						{post.categories.length > 0 && showCategory && (
							<span>
								{" "}
								{__("In", "capitainewp-blocks") +
									" " +
									post._embedded["wp:term"][0][0]?.name}{" "}
							</span>
						)}
						{post.author && showAuthor && (
							<span>
								{" "}
								{__("By", "capitainewp-blocks")} {post._embedded.author[0].name}
							</span>
						)}
					</em>
				</p>
				<div
					className="wp-block-capitainewp-post__excerpt"
					dangerouslySetInnerHTML={{
						__html: post.excerpt.rendered,
					}}
				/>
				<p className="wp-block-capitainewp-post__actions">
					<a className="wp-block-capitainewp-post__button">
						{__("Read more", "capitainewp-blocks")}
					</a>
				</p>
			</div>
		</>
	);
}
