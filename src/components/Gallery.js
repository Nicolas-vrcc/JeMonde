import React from 'react'
import CategoryList from './CategoryList'

export default class Gallery extends React.Component {
    render() {
        return (
            <div>
                <h1>JeMonde Gallery</h1>
                <CategoryList />
            </div>
        );
    }
}