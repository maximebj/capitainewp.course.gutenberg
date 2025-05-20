import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
	PanelColorSettings,
} from "@wordpress/block-editor";
import {
	PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	ToggleControl,
	RangeControl,
} from "@wordpress/components";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
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

	const allowedEmojis = ["😃", "♥️", "✅", "⚠️", "🚀"];

	return (
		<>
			<div {...useBlockProps()}>
				<div className="wp-block-capitainewp-inspector__icon">{emoji}</div>
				<div className="wp-block-capitainewp-inspector__content">
					{hasTag && (
						<RichText
							tagName="div"
							className="wp-block-capitainewp-inspector__tag"
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
						className="wp-block-capitainewp-inspector__title"
						placeholder={__("Your text here", "capitainewp")}
						value={title}
						onChange={(title) => setAttributes({ title })}
					/>
					<RichText
						tagName="p"
						className="wp-block-capitainewp-inspector__description"
						placeholder={__("Your text here", "capitainewp")}
						value={description}
						onChange={(description) => setAttributes({ description })}
					/>
				</div>
			</div>

			<InspectorControls>
				<PanelBody title={__("Emoji", "capitainewp-gut-bases")}>
					<ToggleGroupControl
						onChange={(emoji) => setAttributes({ emoji })}
						value={emoji}
						isBlock
					>
						{allowedEmojis.map((option) => (
							<ToggleGroupControlOption label={option} value={option} />
						))}
					</ToggleGroupControl>
				</PanelBody>

				<PanelBody title={__("Tag", "capitainewp-gut-bases")}>
					<ToggleControl
						label={__("Show tag", "capitainewp-gut-bases")}
						checked={hasTag}
						onChange={() => setAttributes({ hasTag: !hasTag })}
					/>
					{hasTag && (
						<RangeControl
							label={__("Radius", "capitainewp-gut-bases")}
							value={tagRadius}
							onChange={(tagRadius) => setAttributes({ tagRadius })}
							min={0}
							max={50}
						/>
					)}
				</PanelBody>

				{hasTag && (
					<PanelColorSettings
						title={__("Tag colors", "capitainewp-gut-bases")}
						colorSettings={[
							{
								value: tagColor,
								onChange: (tagColor) => setAttributes({ tagColor }),
								label: __("Tag color", "capitainewp-gut-bases"),
							},
							{
								value: tagTextColor,
								onChange: (tagTextColor) => setAttributes({ tagTextColor }),
								label: __("Tag text color", "capitainewp-gut-bases"),
							},
						]}
					/>
				)}
			</InspectorControls>
		</>
	);
}
