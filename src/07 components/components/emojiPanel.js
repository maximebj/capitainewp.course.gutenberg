import {
	PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function EmojiPanel({ emoji, setAttributes }) {
	const allowedEmojis = ["😃", "♥️", "✅", "⚠️", "🚀"];

	return (
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
	);
}
