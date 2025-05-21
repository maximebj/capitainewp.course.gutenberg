import { __ } from "@wordpress/i18n";

export default function CatList(props) {
	const { categories, showCount } = props;

	if (!categories) return null;

	return (
		<div className="wp-block-capitainewp-api__list">
			<h2>{__("Categories", "capitainewp")}</h2>
			<ul>
				{categories.map((category) => (
					<li key={category.id} className="wp-block-capitainewp-api__post">
						<a href={category.link}>
							{category.name}
							{showCount && ` (${category.count})`}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
