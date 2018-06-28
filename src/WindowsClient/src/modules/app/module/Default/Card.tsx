import * as React from "react";


interface ICardProps{
    title: string;
    width?: {
        size: number;
        measurement: "px" | "%"
    }
}

export class Card extends React.Component<ICardProps> {
    public render() {
        return(
            <div className="panel panel-default" style={{borderRadius: "0", borderColor: "#3d3d3d", width: (this.props.width ? this.props.width.size : 200) + (this.props.width ? this.props.width.measurement : "px")}}>
                <div className="panel-heading" style={{backgroundColor: "#2E2E2E", borderRadius: "0", color: "#ddd"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        {this.props.title}
                    </div>
                </div>
                <div className="panel-body profileColor" style={{height: "100%"}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}