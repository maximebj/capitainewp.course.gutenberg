import { __ } from "@wordpress/i18n";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import {
	PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	ToggleControl,
	RangeControl,
} from "@wordpress/components";

export default function Inspector(props) {
	const { attributes, setAttributes } = props;
	const { hasTag, emoji, tagColor, tagTextColor, tagRadius } = attributes;

	const allowedEmojis = ["😃", "♥️", "✅", "⚠️", "🚀"];

	return (
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
	);
}
