import React from 'react'
import Context from '../Context'

export default class Filter extends React.Component {
    static contextType = Context

    handleSelectFilter = e => {
        const { handleFilter } = this.context
        handleFilter(e)
    }

    render() {

        return (
            <select className='filtercontainer' onChange={e => this.handleSelectFilter(e.currentTarget.value)}>
                <option  name='filter' id='planets' value='planets'>Planet</option>
                <option  name='filter' id='starships' value='starships'>Spaceship</option>
                <option  name='filter' id='vehicles' value='vehicles'>Vehicle</option>
                <option  name='filter' id='people' value='people'>Character</option>
                <option  name='filter' id='species' value='species'>Species</option>
                <option  name='filter' id='films' value='films'>Film</option>
            </select>
        )
    }
}
