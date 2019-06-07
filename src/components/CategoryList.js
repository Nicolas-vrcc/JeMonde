import React from 'react'
import { Link } from 'react-router-dom'

export default class CategoryList extends React.Component {
    constructor(){
        super()
        this.state = {
            categories: []
        }
    }

    async componentDidMount(){
        const response = await fetch('http://localhost:1337/categories')
        const json = await response.json()
        this.setState({categories: json})
        console.log(this.state.categories)
    }

    get displayCategoryList(){
        if(this.state.categories.length === 0){
            return(
                <p>Chargement</p>
            )
        }else{
        return this.state.categories.map((cat) =>{
            return(
                <Link to={`/portrait/${cat.url_cat}`} className="flexitemcategory  col-6">
                    <div className="imgcontainer" style={{
                        backgroundImage: `url(http://localhost:1337${cat.image.url})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    <p className="labelimg">{cat.cat}</p>
                </div>
                </Link>
            )
        })
        }
    }

    render() {
        return (
            <div>
                <h2>Aujourd’ hui vous vous-sentez plutôt... ?</h2>
                <div className="row justify-content-center align-items-center">
                {this.displayCategoryList}
                </div>
            </div>
        );
    }
}