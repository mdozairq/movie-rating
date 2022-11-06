import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RateForm from '../Right/Form';
import LeftTabs from '../Left/LeftTabs';

const Content = () => {
    const [rating, setRating] = useState({ title: '', description: '', url: '', ratings: 2, language: 'English' });

    const lang = ["English", "Hindi", "Telgu", "Tamil"];
    const [data, setData] = useState([]);
    const addRating = (e) => {
        e.preventDefault();
        console.log(rating);
        setData([...data, rating]);
        clearForm();
    }

    useEffect(() => {
        if (data.length)
            localStorage.setItem('formValues', JSON.stringify(data));
    }, [data]);

    useEffect(() => {
        let getData = JSON.parse(localStorage.getItem('formValues'));
        console.log("ggd: ",getData);
        if (getData)
            setData(getData);
    }, [])


    const clearForm = () => {
        setRating({ title: '', description: '', url: '', ratings: 3, language: 'English' });
    }
    return (
        <Container fluid='md' style={{ background: '#fff' }}>
            <Row style={{ padding: '18px' }}>
                <Col sm={8} className="border-end" style={{ borderColor: "#000 2px" }}>
                    <h2>My Movies</h2>
                    <LeftTabs data={data} />
                </Col>
                <Col sm={4}>
                    <h2>Movie Form</h2>
                    <RateForm addRating={addRating} data={data} rating={rating} setRating={setRating} lang={lang} clearForm={clearForm} />
                </Col>
            </Row>
        </Container>
    );
}

export default Content;