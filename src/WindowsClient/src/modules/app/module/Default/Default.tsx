import * as React from "react";
import { observer } from "mobx-react";
import { Card } from "./Card";
import { IContent, IAbteilungen } from "../../App";
import { Button } from "react-bootstrap";

interface ITableProps{
    content: IAbteilungen[];
    showAbteilung?: boolean;
}

@observer
export class IDKTable extends React.Component<ITableProps>{
    constructor(props){
        super(props);
    }
    public render() {
            return(
                <div className="panel panel-default" style={{height: "600px",backgroundColor: "#3d3d3d",margin: "5px", borderRadius: "0", borderColor: "#2E2E2E"}}>
                        <div className="panel-body" style={{overflow:"scroll", width: "100%", height: "50%", borderTop: "none", background: "#e8eaf6"}}>
                            <div>
                                <table className="table table-condensed table-hover" style={{color: "black"}}>
                                    <thead>
                                        <tr>
                                            <th> ID </th>
                                            <th> Name </th>
                                            <th> Preis </th>
                                            <th> Hersteller </th>
                                            {this.props.showAbteilung && <th> Abteilung </th>}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.props.content.map(e => {
                                                return(
                                                    <tr>
                                                        <td>{e.id}</td>
                                                        <td>{e.name}</td>
                                                        <td>{e.preis}</td>
                                                        <th> {e.hersteller} </th>
                                                        {this.props.showAbteilung && <td>{e.abteilung}</td>}

                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                                <Button style={{borderRadius: "0"}} bsStyle="primary" className="pull-right"><i className="fas fa-barcode"/></Button>
                            </div>
                    </div>
                </div>
            );
    }
}