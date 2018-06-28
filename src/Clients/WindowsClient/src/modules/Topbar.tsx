import * as React from "react";
import * as electron from "electron";
const ipc = electron.ipcRenderer;

export class Topbar extends React.Component{
    public onQuit () {
		ipc.send("quit-app");
    }
    
    public onMinimize() {
        electron.remote.BrowserWindow.getFocusedWindow().minimize();
    }
    public render() {
        return(
            <div id="title-bar">
                <div style={{userSelect: "none", color: "#dddd"}} id="title"><img src="https://cdn.discordapp.com/avatars/386931928097488897/93e6c01e3a7fcdfbda433f4e55dfc0f3.png?size=16" style={{paddingRight:"5px"}}/>Client</div>
                <div id="title-bar-btns">
                    <span onClick={this.onMinimize} className="manamiTbBtn" style={{padding: "6px 18px", color: "white"}} id="min-btn"><i className="fas fa-minus"/></span>
                    <span onClick={this.onQuit} className="manamiTbBtnExit" style={{padding: "6px 18px", color: "white"}} id="close-btn"><i className="fas fa-times"/></span>
                </div>
            </div>
        )
    }
}