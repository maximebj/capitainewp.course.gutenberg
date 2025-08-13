import apiFetch from "@wordpress/api-fetch";
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { TextControl } from "@wordpress/components";
import { debounce } from "throttle-debounce";
import { useState } from "react";

import "./style.scss";

export default function SearchPost(props) {
	const { postType, placeholder, onChange } = props;
	const [results, setResults] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const search = debounce(300, (search) => {
		if (search.length < 3) {
			return;
		}

		setIsLoading(true);

		apiFetch({
			path: `/wp/v2/${postType}/?search=${encodeURI(search)}&per_page=20`,
		}).then((posts) => {
			if (posts.length == 0) {
				posts = __("Aucun résultat", "capitainewp-gut-bases");
			}
			setResults(posts);
			setIsLoading(false);
		});
	});

	return (
		<Fragment>
			<TextControl
				type="search"
				placeholder={placeholder}
				onChange={(value) => search(value)}
			/>

			<div className="capitainewp-results">
				{results && Array.isArray(results) && (
					<ul>
						{results.map((result) => {
							return (
								<li key={result.id} onClick={() => onChange(result.id)}>
									{result.title.rendered}
								</li>
							);
						})}
					</ul>
				)}
				{isLoading && <p>{__("Chargement…", "capitainewp-gut-bases")}</p>}
			</div>
		</Fragment>
	);
}
