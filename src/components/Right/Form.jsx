import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Rate } from 'antd';
import "antd/dist/antd.css";

const RateForm = ({ addRating, rating, setRating, lang, clearForm }) => {
    const [image, setImage] = useState("");
    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", process.env.CLOUD_PRESET)
        data.append("cloud_name", process.env.CLOUD_NAME)
        fetch(process.env.CLOUD_URL, {
            method: "post",
            body: data
        })
            .then(resp => resp.json())
            .then(data => {
                console.log("dt:", data)
                setRating({ ...rating, url: data.secure_url })
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        uploadImage();
        setImage("");
    }, [image])


    return (
        <Form onSubmit={addRating}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={3}>
                    Title:
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="text"
                        placeholder="Movie Title"
                        value={rating.title}
                        onChange={(e) => setRating({ ...rating, title: e.target.value })}
                    />
                </Col>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={rating.description}
                    onChange={(e) => setRating({ ...rating, description: e.target.value })}
                />
            </Form.Group>
            Images:
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    url:
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="text"
                        placeholder="Movie Image Url"
                        value={rating.url}
                        onChange={(e) => setRating({ ...rating, url: e.target.value })}
                    />
                </Col>
            </Form.Group>
            OR
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload:</Form.Label>
                <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
            </Form.Group>
            <div className='mb-3'>
                Rate:
                <Rate
                    value={rating.ratings}
                    onChange={(value) => setRating({ ...rating, ratings: value })}
                />
            </div>
            <Form.Select size="sm" className="mb-3"
                value={rating.language}
                onChange={(e) => setRating({ ...rating, language: e.target.value })}
            >{
                    lang && lang.map((alang, id) => <option key={id}>{alang}</option>)
                }
            </Form.Select>

            <Row>
                <Col>
                    <Button variant="primary" type="clear" onClick={clearForm}>
                        Clear
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Col>
            </Row>

        </Form>
    );
}

export default RateForm;