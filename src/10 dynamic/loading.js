import { Spinner } from "@wordpress/components";

export default function Loading(props) {
	const { show, label } = props;

	if (!show) return null;

	return (
		<div className="capitaine-loader">
			<Spinner />
			{label}
		</div>
	);
}
