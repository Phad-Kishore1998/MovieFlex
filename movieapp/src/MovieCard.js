import React from "react";  

class MovieCard extends React.Component{

    //creating state for moviecard

    render() {
        //We can destructure instead of directly using the this.state.propertyName
        console.log(this.props);
        const {movies, addStars, decStars} = this.props;

        //we can remane the props object as well.
        const {movies: data} = this.props;
        console.log(data);
        
        const {title, plot, poster, price, rating, stars, fav, isInCart} = this.props.movies;
        return (
            <div className ="main">
                <div className ="movie-card">
                    <div className ="left">
                        <img alt="Poster" src={poster}/>
                    </div>
                    <div className ="right">
                        <div className="title">{title}</div>
                        <div className="plot"> {plot} </div>
                        <div className="price">Rs. {price}</div>
                        
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="stars-dis">
                                <img 
                                className="str-btn"
                                alt ="decrease"
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png"
                                onClick={()=>{decStars(movies)}}
                                />
                                <img 
                                alt="star" 
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                                className="stars"
                                />
                                <img 
                                className="str-btn"
                                alt ="increase"
                                src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                                onClick={() => {addStars(movies)}}
                                />
                                <span className="starCount">
                                    {stars}
                                </span>
                            </div>
                            {/* {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button>:
                            <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} 
                            
                            Second way to the toggle is:
                            conditional rendering on class name and then on button
                            */}
                            {<button className= {fav? "unfavourite-btn":"favourite-btn"}
                            onClick={this.handleFav}> {fav? "Un-Favourite":"Favourite"} </button>}

                            {<button className= {isInCart? "removeCart-btn":"cart-btn"}
                            onClick={this.handleCart}> {isInCart? "Remove From Cart":"Add to Cart"} </button>}
                            {/* <button className="cart-btn">Add to cart</button> */}
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default MovieCard;

/** 
 * Notes related to Movie Card
We can mingle functional component with class component thats ok.
App.js is functional component and MovieCard is Class component

Also, for importing we can use 
import {Component} from "react";
class MovieCard extends Component{

}
 

State in React

The state is mutatble in React. You can change the state using this.setState()
in the class components or using th useState hook in functioncal components.

However, its important to note that we should not directly mutate the state object.
Instead, we should create a new object to update the state.



Binding this:

class cars{
    constructor() {
        this.car = "BMW"
    }
    display() {
        console.log("This: ", this);
    }
}

var c = new cars();
//Over here we have lost the this object
var func = c.diplay();

func();
:=> This: undefined

var func = c.display.bind(c);
func();
:=> This: reference of cars.


Binding can be done in two ways:
using the function bind()

or in the class constructor.
this.addStars = this.addStars.bind(this);

Note:=> if we want to skip the binding we can use arrow function

addStarts = () => {
    console.log("This ", this);
}


Note2 :=> 
    We can use handler function without binding them to the component
but they will lose reference to the current component instance
when triggered once.
The ES concise method syntac does not bind the handler to the component.
This can be using the arrow funtions.


setState()
We can use setState instead of re-rendering the component.
This will be updating the state and re-rendering the component.

There are two forms of setState() to use.
//Form-1
        this.setState({
            stars: this.state.stars + 0.5,
        })


//Form-2 using callback
        this.setState((prevState) => {
            return {
                stars: prevState.stars + 0.5
            }
        });


When we care about the previousState and just want to update
its better to use form2
and Form1 when we dont care about previousState.



setState : 

1. Asynchronous Nature: Just like js have promises, async function React has setState
which is also asynchronous in nature.
When the call get complete we have no idea on that.

After React16, no flaw in the setState it stays as async. Earlier it 
use to become synchronous during AJAX call or promises.

in the both form of setState()
we can use currentValue for console.log(it will give the current status).

## Test1:

this.setState({
    stars: this.state.stars + 0.5
}, () => console.log("Stars inside callback ", this.state.stars)
);

console.log("stars: ", this.state.stars);

we get output: After clicking on the add image.

stars: 0
Stars inside callback: 0.5

when we are using callback in the setState. 
Callback gets executed only when the first part is completed.

but for console.log outside setState() it gets executed without waiting for
setState() to be completed as setState() is async 

2. Batching: 

When i click on the add button one time click give me 4 times 0.5

setState({
stars: this.state.star + 0.5
})
setState({
stars: this.state.star + 1
})
setState({
stars: this.state.star + 2
})
setState({
stars: this.state.star + 3
})


this will be reduce to one setState call that is the last one 
which is executed as react do only one setState call.

All the calls will be batched together to one.
This is for the first Form


-------------IMP--------------------------------------------------
and in the second form.
it will create a queue and since we are using the prevstate.

All the calls will be considered.
But re-rendering is only done once because of batching.




constructor() {
        super() //calling the extended class details
        //as state is a build in object
        this.state = 
            {
                title: "Justice League",
                plot: "Super natural powers shown in the movie.",
                poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jRMZi3YlWRw3sjaBCE1itxz8cY9Q2P9W8A&s',
                rating: 8.9,
                price: 199,
                stars: 0,
                fav: false,
                isInCart: false,
            }
        //State is said to be single source of truth
        
        //binding the function for this class
        this.addStars = this.addStars.bind(this);
        this.subtractStars = this.subtractStars.bind(this);

    }

    //Creating eventHandler for the button
    //since we are inside the class we dont require the function keyword
    addStars() {
        console.log("This: ", this); //binding is important read in the comments.
        if(this.state.stars >= 5){
            return;
        }
        // this.state.stars +=0.5;
        // console.log("Stars are added.");
        // console.log("this.state.stars : ", this.state.stars);
        // //re-rendering the component is required update the UI.
        // //otherwise no stars update shown.
        // //But actual render function is in the App.js :=> Solution: use of setState()

        //Form-1 using object
        // this.setState({
        //     stars: this.state.stars + 0.5,
        // })

        //Form-2 using callback
        this.setState((prevState) => {
            return {
                stars: prevState.stars + 0.5
            }
        });

    }

    //using arrow to directly bind the function
    subtractStars() {
        console.log("This: ", this);
        if(this.state.stars <= 0){
            return;
        }
        //using form1 just for practice correct is form2
        this.setState({
            stars: this.state.stars - 0.5,
        })
    }

    //if we want to skip the binding we can use arrow function

    //handling toggling of favourite button
    handleFav = () =>{
        console.log("In handleFav Function: ", this.state.fav);
        this.setState({
            fav: !this.state.fav,
        }, ()=>{console.log(this.state.fav);
        })
    }

    handleCart = () => {
        this.setState({
            isInCart: !this.state.isInCart,
        })
    }

 */