import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "components";
import { App } from "components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider>
			<App />
		</Provider>
	</React.StrictMode>
);
