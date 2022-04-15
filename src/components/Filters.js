import React, {useState, useContext, useEffect} from 'react';
import {Context} from '../store/store'

export default function Filters() {
    const [state, dispatch] = useContext(Context)

    const updateFilters = (e) => {

        // dispatch ({type: 'UPDATE_TAGS', payload: updatedTags})
    }


    return(
        <div className="filter-row">
            <select name="fonts" className="dropdown-filters" id="fonts" onChange={(e) => updateFilters(e)}>
                <option value="all">All</option>

            </select>
        </div>

    )
}