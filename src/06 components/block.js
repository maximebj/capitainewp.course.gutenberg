import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Block(props) {
	const { attributes, setAttributes } = props;
	const {
		emoji,
		title,
		description,
		hasTag,
		tag,
		tagColor,
		tagTextColor,
		tagRadius,
	} = attributes;

	return (
		<div {...useBlockProps()}>
			<div className="wp-block-capitainewp-components__icon">{emoji}</div>
			<div className="wp-block-capitainewp-components__content">
				{hasTag && (
					<RichText
						tagName="div"
						className="wp-block-capitainewp-components__tag"
						style={{
							backgroundColor: tagColor,
							color: tagTextColor,
							borderRadius: `${tagRadius}px`,
						}}
						value={tag}
						onChange={(tag) => setAttributes({ tag })}
					/>
				)}
				<RichText
					tagName="h2"
					className="wp-block-capitainewp-components__title"
					placeholder={__("Your text here", "capitainewp-blocks")}
					value={title}
					onChange={(title) => setAttributes({ title })}
				/>
				<RichText
					tagName="p"
					className="wp-block-capitainewp-components__description"
					placeholder={__("Your text here", "capitainewp-blocks")}
					value={description}
					onChange={(description) => setAttributes({ description })}
				/>
			</div>
		</div>
	);
}
