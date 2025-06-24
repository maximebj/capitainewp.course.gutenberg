import Block from "./components/block";
import Inspector from "./components/inspector";

import "./editor.scss";

export default function Edit(props) {
	return (
		<>
			<Block {...props} />
			<Inspector {...props} />
		</>
	);
}
