import {
	store as blockEditorStore,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import { createBlock } from "@wordpress/blocks";
import { useDispatch, useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import CheckIcon from "./CheckIcon";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;
	const { content } = attributes;

	// On verra ça plus tard lorsqu'on abordera useSelect, ignorez pour l'instant
	const { getBlockParents, getBlockIndex } = useSelect((select) => {
		return {
			getBlockParents: select(blockEditorStore).getBlockParents,
			getBlockIndex: select(blockEditorStore).getBlockIndex,
		};
	});
	const { insertBlock } = useDispatch(blockEditorStore);

	const handleKeyDown = (event) => {
		if (event.key === "Enter" && !event.shiftKey) {
			event.preventDefault();

			// Create a new item block
			const newBlock = createBlock("capitainewp/item", {
				content: "",
			});

			// Get parent block
			const parentBlock = getBlockParents(clientId, "capitainewp/repeater")[0];

			// Insert the new block after the current one
			insertBlock(newBlock, getBlockIndex(clientId) + 1, parentBlock);
		}
	};
	// Fin de la partie à ignorer

	return (
		<li {...useBlockProps()}>
			<CheckIcon />
			<RichText
				tagName="p"
				placeholder={__("Your text here", "capitainewp-blocks")}
				value={content}
				onChange={(content) => setAttributes({ content })}
				onKeyDown={handleKeyDown}
			/>
		</li>
	);
}
