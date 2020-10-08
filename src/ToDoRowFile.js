import React, {Component} from 'react';

export class ToDoRow extends Component {
    // one Mappped item below is the mapping nof my filtered todo items array, the filter is for items that are done or not done
    render = () =>
        <tr>
            <td>
                {this.props.oneMappedItem.action}
            </td>
            <td>
                <input type="checkbox" checked={this.props.oneMappedItem.done} onChange={() => this.props.callback(this.props.oneMappedItem)}/>
            </td>
        </tr>
}