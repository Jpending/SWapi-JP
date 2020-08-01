import React from 'react';
import DisplayList from './DisplayList';

export default class DisplayResults extends React.Component {
  //static defaultProps=[]

  // ulListMapped=()=>{return DummyStore.results.map(list=><ul className='DisplayListUL'><DisplayList  results={list}/></ul>)}
  render() {
    const { fullList } = this.props;

    return (
      <div className='displayContainer'>
        <DisplayList results={fullList} />
      </div>
    );
  }
}
