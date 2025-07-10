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

	// ⚠️ Ignorez pour l'instant : on verra cette partie dans le prochain cours lorsqu'on abordera useSelect
	// On récupère les fonctions pour obtenir l'index du bloc et son parent
	const { getBlockParents, getBlockIndex } = useSelect((select) => {
		return {
			getBlockParents: select(blockEditorStore).getBlockParents,
			getBlockIndex: select(blockEditorStore).getBlockIndex,
		};
	});

	// On récupère la fonction permettant d'insérer un bloc
	const { insertBlock } = useDispatch(blockEditorStore);

	// On gère l'événement Keydown du RichText
	const handleKeyDown = (event) => {
		// On continue uniquement si la touche Entrée a été pressée
		if (event.key === "Enter" && !event.shiftKey) {
			// On empêche RichText de revenir à la ligne
			event.preventDefault();

			// On créé un nouveau bloc "capitainewp/item"
			const newBlock = createBlock("capitainewp/item", {
				content: "",
			});

			// On récupère l'index du bloc et le parent
			const parentBlock = getBlockParents(clientId, "capitainewp/repeater")[0];
			const blockIndex = getBlockIndex(clientId);

			// On insère le nouveau bloc après le bloc actuel
			insertBlock(newBlock, blockIndex + 1, parentBlock);
		}
	};
	//  ⚠️ Fin de la partie à ignorer

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
