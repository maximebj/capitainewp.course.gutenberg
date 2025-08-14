import apiFetch from "@wordpress/api-fetch";
import { __ } from "@wordpress/i18n";
import { TextControl } from "@wordpress/components";
import { debounce } from "throttle-debounce";
import { useState } from "react";

export default function SearchPost(props) {
	const { postType, placeholder, onChange, resultsNumber = 20 } = props;
	const [results, setResults] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const search = debounce(300, (search) => {
		if (search.length < 3) {
			return;
		}

		setIsLoading(true);

		apiFetch({
			path: `/wp/v2/${postType}/?search=${encodeURI(
				search,
			)}&per_page=${resultsNumber}`,
		}).then((posts) => {
			setResults(posts);
			setIsLoading(false);
		});
	});

	return (
		<>
			<TextControl
				type="search"
				placeholder={placeholder}
				onChange={(value) => search(value)}
			/>

			<div className="capitainewp-results">
				{isLoading && <p>{__("Loading…", "capitainewp-blocks")}</p>}
				{results?.length === 0 && (
					<p>{__("No results", "capitainewp-blocks")}</p>
				)}
				{results?.length && (
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
			</div>
		</>
	);
}
