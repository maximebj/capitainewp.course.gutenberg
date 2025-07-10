import { PanelColorSettings } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function tagColorPanel({
	hasTag,
	setAttributes,
	tagColor,
	tagTextColor,
}) {
	// On teste très tôt si hasTag est défini
	if (!hasTag) {
		return null;
	}

	return (
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
	);
}
