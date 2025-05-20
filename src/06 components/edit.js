import Block from "./block";
import Inspector from "./inspector";

import "./editor.scss";

export default function Edit(props) {
	return (
		<>
			<Block {...props} />
			<Inspector {...props} />
		</>
	);
}
