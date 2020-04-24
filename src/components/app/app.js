import React, {Component} from 'react';
import Header from '../header';
import RandomChar from '../randomChar';

import './app.css';
import ErrorMessage from '../errorMessage';

import {CharacterPage, HousePage, BookPage, BookItem} from '../pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';


export default class App extends Component {

    state = {
        viewRandomChar: true,
    }

    toggleRandomChar = () => {

        this.setState((state) => {
            return {
                viewRandomChar: !state.viewRandomChar,
                selectedItem: 130
            }
        })
    }

    componentDidCatch() {
        this.setState({
          error: true
        })
    }

    

    render() {
        const {viewRandomChar, error} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        const randomChar = viewRandomChar ? <RandomChar/> : null;

        return (
            <Router>
                <div className="app"> 
                    <div className="container">
                        <Header />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-offset-0">
                                {randomChar}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 col-offset-0">
                                <button 
                                    className="btn btn-primary toggle-btn"
                                    onClick={this.toggleRandomChar}>Toggle random character</button>
                            </div>
                        </div>
                        <Route path="/characters" exact component={CharacterPage}/>
                        <Route path="/books" exact component={BookPage}/>
                        <Route path="/houses" exact component={HousePage}/>
                        <Route path="/books/:id" render={
                            ({match}) => {
                                const {id} = match.params;

                                return <BookItem selectedPath={id}/>;
                            }
                        }/>



                    </div>
                </div>
            </Router>
        );
    }
    
};
