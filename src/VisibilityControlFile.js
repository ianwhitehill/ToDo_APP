import React, {Component} from 'react';

export class VisibilityControl extends Component {
    //feature 8 
    render = () =>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" checked={this.props.isChecked} onChange={(e) => this.props.callback(e.target.checked)}/>
            <label className="form-check-label" >Show {this.props.toggleVisibility}</label>
        </div>
}