import React from 'react';

export default class App extends React.Component {
    constructor() {
        
        //Call the constructor
        super();
        
        //State is an object one one key-value pair: data, which has more objects
        this.state = {
            data:
            [
                {
                    "id":1,
                    "name":"Foo",
                    "age":20
                },
                
                {
                    "id":2,
                    "name":"Bar",
                    "age":30
                },
                
                {
                    "id":3,
                    "name":"Baz",
                    "age":40
                }
            ]
        }
    }
    
    //Create a method called render, which is called by the React DOM
    render() {
        return (
            <div>
                <Header/>
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}