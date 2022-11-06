import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Appbar = () => (
    <>
        <Navbar bg="dark" variant="dark" fixed>
        <Container>
          <Navbar.Brand href="/" style={{ background:"orange", paddingLeft:"6px", paddingRight:"6px", borderRadius:"5px", color:"black", fontWeight:"600"}}>
             IMDb
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
);

export default Appbar;