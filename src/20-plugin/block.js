import { Placeholder, Spinner } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import { getPlugin } from "./wp-org-api-utils";

export default function Block(props) {
	const { slug } = props;
	const [plugin, setPlugin] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (!slug) return;

		setLoading(true);
		setError(false);

		// Search plugin via WordPress.org API
		getPlugin(slug).then((plugin) => {
			setLoading(false);
			if (plugin) {
				setPlugin(plugin);
			} else {
				setError(true);
			}
		});
	}, [slug]);

	if (loading) {
		return (
			<Placeholder
				icon={<Spinner />}
				label={__("Loading plugin…", "capitainewp-blocks")}
			/>
		);
	}

	if (error) {
		return (
			<Placeholder
				icon="warning"
				label={__("Unable to connect to WP.org", "capitainewp-blocks")}
			/>
		);
	}

	if (!plugin) {
		return (
			<Placeholder
				icon="warning"
				label={__("Plugin not found", "capitainewp-blocks")}
			/>
		);
	}

	return (
		<>
			<div className="wp-block-capitainewp-plugin__content">
				<a className="wp-block-capitainewp-plugin__picture">
					<img src={plugin.icon} alt={plugin.name} />
				</a>

				<div className="wp-block-capitainewp-plugin__main">
					<p className="wp-block-capitainewp-plugin__title">
						<a>{plugin.name}</a>
					</p>
					<p className="wp-block-capitainewp-plugin__desc">
						{plugin.description}
					</p>
					<p className="wp-block-capitainewp-plugin__author">
						{__("by", "capitainewp-blocks")}{" "}
						<span dangerouslySetInnerHTML={{ __html: plugin.author }}></span>
					</p>
				</div>
			</div>

			<footer className="wp-block-capitainewp-plugin__footer">
				<div className="wp-block-capitainewp-plugin__meta">
					<p className="wp-block-capitainewp-plugin__rating">
						<span className="wp-block-capitainewp-plugin__stars">
							{plugin.stars}
						</span>
						&nbsp;
						<span className="wp-block-capitainewp-plugin__num-rating">
							{plugin.numRatings}
						</span>
					</p>
					<p className="wp-block-capitainewp-plugin__active">
						<span>{plugin.activeInstalls}</span>{" "}
						{__("active installs", "capitainewp-blocks")}
					</p>
				</div>
				<div className="wp-block-capitainewp-plugin__download">
					<a className="wp-block-capitainewp-plugin__button">
						{__("Official page", "capitainewp-blocks")}
					</a>
				</div>
			</footer>
		</>
	);
}
