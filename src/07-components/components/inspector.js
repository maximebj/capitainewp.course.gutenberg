import { InspectorControls } from "@wordpress/block-editor";

import EmojiPanel from "./emojiPanel";
import TagColorPanel from "./tagColorPanel";
import TagPanel from "./tagPanel";

export default function Inspector(props) {
	const { attributes, setAttributes } = props;
	const { hasTag, emoji, tagColor, tagTextColor, tagRadius } = attributes;

	return (
		<InspectorControls>
			<EmojiPanel emoji={emoji} setAttributes={setAttributes} />
			<TagPanel
				hasTag={hasTag}
				tagRadius={tagRadius}
				setAttributes={setAttributes}
			/>
			<TagColorPanel
				hasTag={hasTag}
				tagColor={tagColor}
				tagTextColor={tagTextColor}
				setAttributes={setAttributes}
			/>
		</InspectorControls>
	);
}
