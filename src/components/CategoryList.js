import React from 'react'

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
                <div>
                    <p>{cat.cat}</p>
                    <img src={`http://localhost:1337${cat.image.url}`} alt={cat.cat}/>
                </div>
            )
        })
        }
    }

    render() {
        return (
            <div>
                <h2>Catégories :</h2>
                {this.displayCategoryList}
            </div>
        );
    }
}