import {
	PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const allowedEmojis = ["😃", "♥️", "✅", "⚠️", "🚀"];

export default function EmojiPanel({ emoji, setAttributes }) {
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
