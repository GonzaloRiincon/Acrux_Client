import React from 'react'
import { Modal } from 'react-bootstrap'

const DetailsModal = ({ setShowModal, showModal, concert }) => {
    return (
        <>
            {
                concert &&
                <Modal
                    size="lg"
                    scrollable={true}
                    show={showModal}
                    onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton >
                        <Modal.Title>{concert.artist}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <h3 className='text-center'>
                            This event will be done in {concert.city}.
                            It will happens on date {concert.date} at {concert.time}.
                            Go and enjoy for this event by just {concert.price}€!
                        </h3>

                    </Modal.Body>
                </Modal>
            }


        </>
    )
}

export default DetailsModal