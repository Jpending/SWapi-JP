import React from 'react'
import Context from '../Context'

export default class QueryBox extends React.Component{
static contextType=Context;

handleQueryChange=e=>{
    const{ handleQuery }=this.context
    handleQuery(e);
}
    render(){
        return(
            <input type='text' placeholder='Type something here'
            onChange={e=>this.handleQueryChange(e.currentTarget.value)}>
            </input>
        )
    }
}
