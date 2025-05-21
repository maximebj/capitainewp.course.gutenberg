import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";

import "./editor.scss";

export default function Edit() {
	const data = useSelect((select) => {
		return {
			postType: select("core").getPostType("post"),
			site: select("core").getSite(),
			theme: select("core").getCurrentTheme(),
			user: select("core").getCurrentUser(),
			posts: select("core").getEntityRecords("postType", "post"),
			settings: select("core/block-editor").getSettings(),
			blocks: select("core/block-editor").getBlocks(),
			plugins: select("core").getPlugins(),
		};
	}, []);

	console.log(data);

	return (
		<>
			<div {...useBlockProps()}>
				<p>Regardez la console pour voir les données</p>
			</div>
		</>
	);
}
