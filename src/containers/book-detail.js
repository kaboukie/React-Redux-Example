import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return (
                <div className="card col-sm-6 pull-right">
                    <div className="card-body">
                        <div className="card-title">Select a book to get started.</div>
                    </div>
                </div>
            )
        }
        
        return (
            <div className="card col-sm-6 pull-right">
                <div className="card-body">
                    <h5 className="card-title">{ this.props.book.title }</h5>
                    <p className="card-text">Pages: { this.props.book.pages }</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);