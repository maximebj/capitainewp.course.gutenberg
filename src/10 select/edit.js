import {
	store as blockEditorStore,
	useBlockProps,
} from "@wordpress/block-editor";
import { store as coreDataStore } from "@wordpress/core-data";
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

	return (
		<>
			<div {...useBlockProps()}>
				<p>Ouvrez la console pour afficher les données</p>
			</div>
		</>
	);
}
