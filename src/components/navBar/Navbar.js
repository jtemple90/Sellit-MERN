import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink
} from 'reactstrap';

class NavBar extends Component {
  state = {
    isOpen: false
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <Navbar color='dark' dark expand='sm' className='mb-5 navbar'>
        <Container>
          <NavbarBrand href='/'>Sell It</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar/>
            <Nav className='ml-auto'>
              <NavItem>
                <NavLink href='/'>Home</NavLink>
              </NavItem>
            </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar; 