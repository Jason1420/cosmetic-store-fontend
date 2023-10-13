import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import './Modal.scss'
import axios from 'axios';
import { URL } from '../../routes/Url';
interface Props {
    title: string,
    content: string,
    invoiceCode: string
    handleUpdate: (update: boolean) => void
}

const ModalCustom: React.FC<Props> = ({ title, content, invoiceCode, handleUpdate }) => {

    /*------------Declare state of modal--------*/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [update, setUpdate] = useState<boolean>(false);
    const handleCancelInvoice = async () => {
        try {
            const cancelInvoiceURL = `${URL.CANCEL_INVOICE_BY_CODE}/${invoiceCode}`;
            const res = await axios.put(cancelInvoiceURL,)
            console.log("cancel invoice --------", res.data)
            setUpdate(!update)
            handleUpdate(update)
            handleClose()
        } catch (error) {
            console.log(error)
        }
    }

    /*------------Render---------*/
    return (
        <div>
            <div className='button' onClick={handleShow}>
                {title}
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {content}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                        onClick={() => handleCancelInvoice()}
                    >
                        Xác nhận
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}
export default ModalCustom;