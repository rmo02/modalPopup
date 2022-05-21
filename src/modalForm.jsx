import React, { useState } from 'react'
import {Col, Modal, ModalBody, ModalHeader, Row} from 'reactstrap';


function Profile() {
    const [modal, setModal] = useState(false)
    return (
        <div
        style={{display: 'flex', textAling: 'center', justifyContent: 'center', marginTop: '150px'}}>
            <Modal
            size='lg'
            isOpen={modal}
            toggle={()=> setModal(!modal)}>
                <ModalHeader
                toggle={()=> setModal(!modal)}>
                    Popup
                </ModalHeader>
                <ModalBody>
                    <form style={{marginBottom: '10px'}}>
                        <Row style={{marginBotton: '10px'}}>
                            <Col lg={12}>
                                <div>
                                    <label htmlFor='name'>
                                        Name
                                    </label>
                                    <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Digite seu nome'
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div>
                                    <label htmlFor='email'>
                                        Email
                                    </label>
                                    <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Digite seu email'
                                    />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div>
                                    <label htmlFor='tel'>
                                        Tel
                                    </label>
                                    <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Digite seu numero'
                                    />
                                </div>
                            </Col>
                        </Row>
                    </form>
                    <button className='btnMt-3' style={{marginTop: '10px', backgroundColor: "#0B70B8", color: "white"}}
                    >
                    Enviar
                    </button>
                </ModalBody>
            </Modal>

            <button className='btnMt-3' style={{ backgroundColor: "#0B70B8", color: "white"}}
            onClick={()=> setModal(true)}>
                Open Modal
            </button>

        </div>
    )
}

export default Profile;