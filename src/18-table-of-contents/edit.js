import {
	store as blockEditorStore,
	useBlockProps,
	RichText,
} from "@wordpress/block-editor";
import { useSelect, useDispatch } from "@wordpress/data";
import { useEffect } from "@wordpress/element";

import {
	getHeadingsFromContent,
	updateHeadingsAnchors,
	buildHeadingHierarchy,
} from "./utils";

import Toolbar from "./toolbar";
import List from "./list";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { title, ordered, headings } = attributes;

	// Récupérer tous les blocs de l'éditeur
	const blocks = useSelect((select) => {
		return select(blockEditorStore).getBlocks();
	});

	// Mettre à jour les attributs d'autres blocs
	const { updateBlockAttributes } = useDispatch(blockEditorStore);

	// Trouver et mettre à jour les ancres des titres
	useEffect(() => {
		// Extraire la liste des titres du contenu
		const newHeadingsList = getHeadingsFromContent(blocks);

		// Construire un tableau hiérarchique des titres
		const newHeadingTree = buildHeadingHierarchy(newHeadingsList);

		// Comparer la nouvelle hiérarchie à l'ancienne
		if (JSON.stringify(newHeadingTree) === JSON.stringify(headings)) {
			return;
		}

		// Mettre à jour les ancres des blocs titres
		updateHeadingsAnchors(newHeadingsList, updateBlockAttributes);

		// Stocker en attribut la hiérarchie pour l'affichage en HTML
		setAttributes({ headings: newHeadingTree });
	}, [blocks]);

	return (
		<>
			<Toolbar {...{ attributes, setAttributes }} />

			<div {...useBlockProps()}>
				<RichText
					tagName="p"
					value={title}
					className="wp-block-capitainewp-table-of-contents__title"
					onChange={(title) => setAttributes({ title })}
				/>
				<div className="wp-block-capitainewp-table-of-contents__fold">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-chevron-up"
					>
						<polyline points="18 15 12 9 6 15"></polyline>
					</svg>
				</div>

				{!headings.length && (
					<p className="wp-block-capitainewp-table-of-contents__none">
						Pas de titre pour le moment
					</p>
				)}

				<List
					headings={headings}
					ordered={ordered}
					className="wp-block-capitainewp-table-of-contents__list"
				/>
			</div>
		</>
	);
}
