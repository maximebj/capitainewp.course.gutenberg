import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";

import "./editor.scss";

export default function Edit() {
	const data = useSelect((select) => {
		return {
			site: select("core").getSite(),
			plugins: select("core").getPlugins(),
			theme: select("core").getCurrentTheme(),
			postType: select("core").getPostType("post"),
			user: select("core").getCurrentUser(),
			posts: select("core").getEntityRecords("postType", "post"),
			settings: select("core/block-editor").getSettings(),
			blocks: select("core/block-editor").getBlocks(),
		};
	}, []);

	//console.log(data);

	return (
		<>
			<div {...useBlockProps()}>
				<p>Ouvrez la console pour afficher les données</p>
			</div>
		</>
	);
}
