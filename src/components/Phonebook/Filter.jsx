import PropTypes from 'prop-types';
import styles from './Phonebook.module.css'

export function Filter({hendleFilter, filter}){

    function hendleFilterInput(event){
    const {value} = event.target
    hendleFilter(value)
}
        return (
            <label className={styles.find_label}>
          Find contacts by name
            <br/><input type="text" name="filter"
                value={filter}
                    onChange={hendleFilterInput}
                className={styles.find_input}/>
        </label>
        )
}

Filter.prototype = {
    value:PropTypes.string.isRequired
}