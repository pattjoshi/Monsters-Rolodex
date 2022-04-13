import React, { Component } from 'react';

import { CardList } from './components/card-list/Card-list.component'
import { SearchBox } from "./components/search-box/Search"

import './App.css';


class App extends Component {
    // This calass component
    constructor() {
        super();

        this.state = {
            monster: [
                // Their is somaney moster in my Project so, i create  a Ayyay of monsters
            ],
            searchField: '',
            // searchField hear store what i typed.


        };
        this.hendelChang = this.hendelChang.bind(this);

    }

    componentDidMount() {
        // componentDidMount() is invoked immediately after a component is mounted
        // componentDidMount is a lifecycle method
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>
                // fetch return us a promis
                response.json()
                // This is a response of json url
            )
            // I want responce in json format
            .then(users => this.setState({ monster: users }))
    }
    hendelChang = (e) => {
        this.setState({ searchField: e.target.value })

    }

    render() {

        // Destructoring
        const { monster, searchField } = this.state;
        const filteredMonsters = monster.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        )


        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>

                <SearchBox
                    placeholder='Search Mosnsters'
                    hendelChang={this.hendelChang}
                />

                <CardList monsters={filteredMonsters} >
                    {/* pass in mosster as a prop from a app compone nt  */}

                </CardList>

            </div>
        );
    }
}

export default App;

// new react React use functional component

 // onClick :- onClick is method or property it's call when ever The elemennt is clicked

 // setState take object All of the property you want to change

//  The map() method create a new array with the results of calling a function from every array element.

// if i updated somthing only Updated part is rerndering again . rast is not

 // let [top1, top2, top3] = this.state.monster;
        // console.log(top1)
        // This array Destructuring
 // •	Server less application k data ansi through URL.

// What is json ?
//  JSON is often used when data is sent from a server to a web page

// componentDidMount () :-  first render hela apre kichi event heba 

// setState() allows you to change state in a React class component 

// id shood be unik

// Contome component good to Capatilize 

// Good folder Scructure 


// onchange():-  The onchange event occurs when the value of an element has been changed

// Setstate is an asynchronous . 

// includes() :-The includes() method returns true if a string contains a specified string 

//The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
