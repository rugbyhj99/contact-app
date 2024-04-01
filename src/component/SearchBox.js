import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';


const SearchBox = () => {
  const [searchBoxText, setSearchBoxText] = useState("");
  const dispatch = useDispatch(); 

  const searchBtn = (e) => {
    e.preventDefault();
    dispatch( {type: "SEARCH_NAME" , payload: { searchBoxText } } );
  }

  return (
    <Row className="search-box">
        <Col lg={10}>
            <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(e) => setSearchBoxText(e.target.value)} />      
        </Col>
        <Col lg={2}>
            <Button onClick={searchBtn}>찾기</Button>
        </Col>
    </Row>
  )
}

export default SearchBox