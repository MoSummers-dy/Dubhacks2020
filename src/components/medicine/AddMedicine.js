import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Medicine.css';

class AddMedicine extends Component {
    render() {
        return (
            <div className='AddMedicine'>
                <input
                    type='text'
                    placeholder='Add a medicine...'
                    onKeyPress={this.onInputEnter.bind(this)}
                />
            </div>
        );
    }

    onInputEnter(e) {
        if (e.key === 'Enter') {
            let item = e.target.value;
            this.props.addNewItem(item);
            e.target.value = '';
        }
    }
}

AddMedicine.propTypes = {
    addNewItem: PropTypes.func
}

export default AddMedicine;
