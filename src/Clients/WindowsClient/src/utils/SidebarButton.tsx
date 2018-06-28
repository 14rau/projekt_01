import * as React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import autobind from "autobind-decorator";

interface ISidebarButtonProps{
    type: "button" | "dropdown" | "title";
    title: any;
    /**
     * something like "#/default"
     */
    href?: string;
}

/*
{} 
                {}
*/

@observer
export class SidebarButton extends React.Component<ISidebarButtonProps>{
    @observable showContent = false;
    @observable toggleClass = "";
    render(){
        let button;

        switch(this.props.type){
            case "button":
                button = <a style={{borderRadius: "0"}} className="manamiMenuBar" href={this.props.href}>{this.props.title}</a>
            break;
            case "dropdown":
                button = 
                <>
                    <a style={{borderRadius: "0", marginLeft: "-12px"}} className="manamiMenuBar" onClick={this.toggleShowContent}><i data-fa-transform="shrink-8" className="fas fa-chevron-down"/>{this.props.title}</a>
                    {
                        
                            <span className={this.toggleClass} style={{display: "flex", flexDirection: "column"}}>{this.showContent && this.props.children}</span>
                        
                    }
                </>
            break;
            case "title":
                button = <h5 className="manamuMenubar-muted">{this.props.title}</h5>;
            break;
        }
        return button;
    }

    @autobind
    private toggleShowContent(){
        this.showContent ? this.toggleClass = "showButton" : this.toggleClass = "hideSideButton"
        setTimeout(() => {
            this.showContent = !this.showContent;
        }, this.showContent ? 100 : 0)
    }
}