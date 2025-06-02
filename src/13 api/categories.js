import { __ } from "@wordpress/i18n";

export default function CatList(props) {
	const { categories, showCount } = props;

	if (!categories) return null;

	return (
		<div>
			<h2>{__("Categories", "capitainewp-blocks")}</h2>
			<ul>
				{categories.map((category) => (
					<li key={category.id}>
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
