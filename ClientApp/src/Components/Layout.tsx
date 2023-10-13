import React, { Component, PropsWithChildren } from 'react';
import { Container } from 'reactstrap';
import Nav from './Nav/Nav';

export default function Layout(props : PropsWithChildren) {
  const displayName = Layout.name;

    return (
      <div>
        <Nav />
        <Container tag="main">
          {props.children}
        </Container>
      </div>
    );
}
