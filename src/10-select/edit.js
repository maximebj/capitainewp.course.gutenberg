import {
	store as blockEditorStore,
	useBlockProps,
	useSettings,
} from "@wordpress/block-editor";
import { store as coreDataStore, useEntityRecords } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";

import "./editor.scss";

export default function Edit() {
	const data = useSelect((select) => {
		return {
			site: select(coreDataStore).getSite(),
			plugins: select(coreDataStore).getPlugins(),
			theme: select(coreDataStore).getCurrentTheme(),
			postType: select(coreDataStore).getPostType("post"),
			user: select(coreDataStore).getCurrentUser(),
			posts: select(coreDataStore).getEntityRecords("postType", "post"),
			settings: select(blockEditorStore).getSettings(),
			blocks: select(blockEditorStore).getBlocks(),
		};
	}, []);

	console.log(data);

	// Raccourci pour les settings
	const colors = useSettings("color.palette");
	//console.log(colors);

	// Raccourci pour les posts (détaillé dans le prochain cours)
	const results = useEntityRecords("postType", "post");
	// console.log(results);

	return (
		<>
			<div {...useBlockProps()}>
				<p>Ouvrez la console pour afficher les données</p>
			</div>
		</>
	);
}
