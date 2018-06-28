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
                <div style={{userSelect: "none", color: "#dddd"}} id="title"><img src="https://cdn.discordapp.com/emojis/461817849623740416.png?size=16" style={{paddingRight:"5px"}}/>IDK - Client</div>
                <div id="title-bar-btns">
                    <span onClick={this.onMinimize} className="manamiTbBtn" style={{padding: "6px 18px", color: "white"}} id="min-btn"><i className="fas fa-minus"/></span>
                    <span onClick={this.onQuit} className="manamiTbBtnExit" style={{padding: "6px 18px", color: "white"}} id="close-btn"><i className="fas fa-times"/></span>
                </div>
            </div>
        )
    }
}