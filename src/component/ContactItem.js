import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const ContactItem = ({item}) => {
  const dispatch = useDispatch();  
  
  const removeContact = () => {
    dispatch({ type: 'REMOVE_CONTACT', payload: { id: item.id }, });
  };
  
  return (
    <Row className="contact-list">
        <Col lg={2} className="d-flex align-items-center justify-content-center ">
          <img width={50} src="data:image/jpeg;base64,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"/>
        </Col>
        <Col lg={8} className="d-flex  flex-column text-left">
          <div>{item.name}</div>
          <div>{item.phoneNumber}</div>
        </Col>
        <Col lg={2} className="d-flex align-items-center">
          <Button size="sm" variant="danger" onClick={removeContact} >제거</Button>
        </Col>
    </Row>
  )
}

export default ContactItem