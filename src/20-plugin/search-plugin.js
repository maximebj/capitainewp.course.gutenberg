import { TextControl } from "@wordpress/components";
import { debounce } from "throttle-debounce";
import { useState } from "react";
import { __ } from "@wordpress/i18n";
import { searchPlugin } from "./wp-org-api-utils";

import "./style.scss";

export default function SearchPlugin(props) {
	const { onChange } = props;
	const [results, setResults] = useState(null);

	const onSearch = debounce(300, (search) => {
		if (search.length < 3) {
			return;
		}

		setResults(__("Loading…", "capitainewp-blocks"));

		// Search plugin via WordPress.org API
		searchPlugin(search).then((plugins) => {
			if (plugins.length) {
				setResults(plugins);
			} else {
				setResults(__("No results", "capitainewp-blocks"));
			}
		});
	});

	return (
		<>
			<TextControl
				type="search"
				placeholder={__("Search for a plugin", "capitainewp-blocks")}
				onChange={(value) => onSearch(value)}
			/>

			<div className="capitainewp-results">
				{results && Array.isArray(results) ? (
					<ul>
						{results.map((plugin) => {
							return (
								<li key={plugin.slug} onClick={() => onChange(plugin)}>
									<img src={plugin.icon} alt={plugin.name} />
									<span>{plugin.name}</span>
								</li>
							);
						})}
					</ul>
				) : (
					<p>{results}</p>
				)}
			</div>
		</>
	);
}
