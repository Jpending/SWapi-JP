import React from 'react';
import DisplayListItem from './DisplayListItem';

export default class DisplayList extends React.Component {
  render() {
    const { results } = this.props;
    console.log('results', results);
    return (
      //console.log(props),
      <ul className='DisplayListUL'>
        {results.map((character, i) => (
          <DisplayListItem key={i} character={character} />
        ))}
      </ul>
    );
  }
}
