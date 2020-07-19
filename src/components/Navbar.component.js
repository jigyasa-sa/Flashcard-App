import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class Nbar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand>Flashcard App</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/flashcards">Flashcards</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Nbar;
// import React from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   Collapse,
//   NavbarToggler,
// } from "reactstrap";

// class Nbar extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isOpen: false,
//     };
//     this.toggle = this.toggle.bind(this);
//   }

//   toggle() {
//     this.setState({ isOpen: !this.state.isOpen });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="dark" dark expand="md">
//           <NavbarBrand>Flashcard App</NavbarBrand>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="mr-auto" navbar>
//               <NavItem>
//                 <NavLink href="/flashcards">Flashcards</NavLink>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }
// export default Nbar;
