import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Nav from './Nav/Nav';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <Nav />
        <Container tag="main">
          {this.props.children}
        </Container>
      </div>
    );
  }
}
