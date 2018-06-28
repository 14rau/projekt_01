import * as React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { HashRouter, Switch } from "react-router-dom";
import { Route } from "react-router";
import * as electron from "electron";
import autobind from "autobind-decorator";
import Sidebar from "react-sidebar";
import { Side } from "./module/Sidebar";
import { IDKTable } from "./module/Default/Default";
const ipc = electron.ipcRenderer; // you may need this

interface IAppProps{
	api: any;
	startPage: string;	
}

export interface IContent{
	farben: IAbteilungen[];
	garten: IAbteilungen[];
	holz: IAbteilungen[];
	elektrik: IAbteilungen[];
}

export interface IAbteilungen{
	id: string;
	name: string;
	abteilung: string;
	preis: number;
	hersteller: string;
}

@observer
export class App extends React.Component<IAppProps, any> {
	@observable content : IContent = {
		farben: [{
			abteilung: "Farben",
			id: "0",
			name: "Gelb",
			preis: 2500,
			hersteller: "Musterfirma"
		},{
			abteilung: "Farben",
			id: "1",
			name: "Blau",
			preis: 2500,
			hersteller: "Musterfirma"
		},{
			abteilung: "Farben",
			id: "3",
			name: "Stufffarbe",
			preis: 2500,
			hersteller: "Musterfirma"
		},{
			abteilung: "Farben",
			id: "4",
			name: "Grün",
			preis: 2500,
			hersteller: "Musterfirma"
		}],
		garten: [{
			abteilung: "Garten",
			id: "5",
			name: "Gelbe Blume",
			preis: 2500,
			hersteller: "Musterfirma"
		},{
			abteilung: "Garten",
			id: "6",
			name: "Blaue Blume",
			preis: 2500,
			hersteller: "Musterfirma"
		},{
			abteilung: "Garten",
			id: "7",
			name: "Stuff Blume",
			preis: 2500,
			hersteller: "Musterfirma"
		},{
			abteilung: "Garten",
			id: "8",
			name: "Lila Blume",
			preis: 2500,
			hersteller: "Musterfirma"
		}],
		holz:[{
			abteilung: "Holz",
			id: "9",
			name: "Tolles Holz",
			preis: 2500,
			hersteller: "Musterfirma"
		},{
			abteilung: "Holz",
			id: "10",
			name: "Bestes Holz",
			preis: 2500,
			hersteller: "Musterfirma"
		},{
			abteilung: "Holz",
			id: "11",
			name: "Holz",
			preis: 2500,
			hersteller: "Musterfirma"
		},{
			abteilung: "Holz",
			id: "12",
			name: "Stabiles Holz",
			preis: 2500,
			hersteller: "Musterfirma"
		}],
		elektrik: [{
			abteilung: "Elektrik",
			id: "13",
			name: "Kabel (5m)",
			preis: 2500,
			hersteller: "Musterfirma"
		},{
			abteilung: "Elektrik",
			id: "14",
			name: "Verteiler",
			preis: 2500,
			hersteller: "Musterfirma"
		},{
			abteilung: "Elektrik",
			id: "15",
			name: "Lichtschalter",
			preis: 2500,
			hersteller: "Musterfirma"
		},{
			abteilung: "Elektrik",
			id: "16",
			name: "Kabelbinder",
			preis: 2500,
			hersteller: "Musterfirma"
		}]
	};
	@observable page = "";
	@observable showMenu = false;

	constructor(props) {
		super(props);
		global.sessionToken = localStorage.getItem("token") ? localStorage.getItem("token") : "";
		document.location.href = "#/"+this.props.startPage;
		global.api = this.props.api;
	}
	@autobind
    @action
	private logout() {
		//this.props.fleetplanApi.print.printer.unpair(this.props.ctx, this.token)
		localStorage.setItem("token", ""); 
		global.userid="";
		global.sessionToken="";
		document.location.href = "#/"+this.props.startPage;
		this.toggleSidebar(false);
	}

	@autobind
	@action
	private toggleSidebar(open) {
		this.showMenu = open
	}

	public render() {
		return (
			<div className="fixHead">
				<Sidebar sidebar={<Side/>}
					onSetOpen={this.toggleSidebar as any}
					docked={this.showMenu}
				>
					<div style={{display: "flex", flexDirection: "row", backgroundColor: "#2E2E2E", width: "100%", height: "40px", alignItems: "center"}}>
						{<span onClick={() => this.showMenu = !this.showMenu} style={{paddingLeft: "10px"}}>
							<span className="manamiButton notRound"><i style={{color: "#ddd"}} className="fas fa-bars"/></span>
						</span>}
						<span className="" style={{color: "white", paddingLeft: "10px"}}>{this.page}</span>
						<div style={{right: "0", position: "fixed", display: "flex", flexDirection: "row", alignItems: "baseline"}}>
							{/*When there is a session token, show logout button*/}
							{<span style={{color: "#ff4444"}} className="manamiButton notRound" onClick={() => this.logout()}><i className="fas fa-power-off"/></span>}
						</div>
					</div>

					<div>
						{/* Define here the pages */}
						<HashRouter>
							<Switch>
								<Route path="/lager" component={() => {this.page="Gesamtbestand"; return <IDKTable showAbteilung content={this.content.elektrik.concat(this.content.farben).concat(this.content.garten).concat(this.content.holz)}/>}}/>
								<Route path="/elektrik" component={() => {this.page="Elektronik"; return <IDKTable content={this.content.elektrik}/>}}/>
								<Route path="/farben" component={() => {this.page="Farben"; return <IDKTable content={this.content.farben}/>}}/>
								<Route path="/holz" component={() => {this.page="Holz"; return <IDKTable content={this.content.holz}/>}}/>
								<Route path="/garten" component={() => {this.page="Garten"; return <IDKTable content={this.content.garten}/>}}/>
							</Switch>
						</HashRouter>
					</div>
				</Sidebar>
			</div>
		);
	}
}