import {NavBar, Container} from 'react-bootstrap';

export default function NavBarComponent() {
    return (
        <NavBar bg="dark" variant="dark">
            <Container>
                <NavBar.Brand href="#home">Lipsa's Portfolio</NavBar.Brand>
            </Container>
        </NavBar>
    );
}