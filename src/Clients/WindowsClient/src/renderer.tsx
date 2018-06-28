import * as ReactDOM from "react-dom";
import * as React from "react";
import { App } from "./modules/app/App";
import { Topbar } from "./modules/app/module/Topbar";
import { Api } from "./lib/api/api";

ReactDOM.render(
	<Topbar/>
, document.getElementById("react-topbar"));

ReactDOM.render(
		<App api={new Api("localhost", "8080")} startPage="default"/>
, document.getElementById("react-root"));
