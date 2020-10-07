import React, {Component} from 'react';

export class ToDoBanner extends Component{
    // Features 1 & 2 

    render = () => 
<h4 className='bg-primary text-white text-center p-2'>{this.props.userName}'s TO DO List ({this.props.todoItems.filter(x => !x.done).length} Items still not done)</h4>
}
