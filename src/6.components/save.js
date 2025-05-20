import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save(props) {
	const { attributes } = props;
	const {
		title,
		description,
		hasTag,
		tag,
		emoji,
		tagColor,
		tagTextColor,
		tagRadius,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="wp-block-capitainewp-components__icon">{emoji}</div>
			<div className="wp-block-capitainewp-components__content">
				{hasTag && (
					<RichText.Content
						tagName="div"
						value={tag}
						className="wp-block-capitainewp-components__tag"
						style={{
							backgroundColor: tagColor,
							color: tagTextColor,
							borderRadius: `${tagRadius}px`,
						}}
					/>
				)}
				<RichText.Content
					tagName="h2"
					value={title}
					className="wp-block-capitainewp-components__title"
				/>
				<RichText.Content
					tagName="p"
					value={description}
					className="wp-block-capitainewp-components__description"
				/>
			</div>
		</div>
	);
}
