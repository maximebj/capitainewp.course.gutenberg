import { Spinner } from "@wordpress/components";

export default function Loading(props) {
	const { show, label } = props;

	if (!show) return null;

	return (
		<div className="capitainewp-loader">
			<Spinner />
			{label}
			<style jsx>{`
				.capitainewp-loader {
					display: flex;
					justify-content: center;
					gap: 10px;
					background-color: #f8f8f8;
					padding: 20px;
					border-radius: 5px;
					font-size: 15px;
				}
			`}</style>
		</div>
	);
}
