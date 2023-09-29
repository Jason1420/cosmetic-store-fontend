import React, { useState, useEffect } from 'react';
import './ListItem.scss';
import axios from 'axios';
interface Item {
    id?: number,
    name: string,
    brand: string
    type: string
    price: number,
    image: string,
    description: string,
}

const ListItem = () => {

    const [allItem, setAllItem] = useState<Item[]>([])
    useEffect(() => {
        const getAllItem = async () => {
            const res = await axios.get("http://localhost:8080/api/v1/getAll",)
            console.log(res)
        }

        getAllItem()

    }, [])












    return (
        <div className="list-item-container">
            <div className="list-item__item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Velit nam numquam pariatur amet accusamus harum quaerat fugit, error dolor quas.
                -------------------------------------------------------------------
            </div>
            <div className="list-item__item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Velit nam numquam pariatur amet accusamus harum quaerat fugit, error dolor quas.
                -------------------------------------------------------------------
            </div>
            <div className="list-item__item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Velit nam numquam pariatur amet accusamus harum quaerat fugit, error dolor quas.
                -------------------------------------------------------------------
            </div>
            <div className="list-item__item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Velit nam numquam pariatur amet accusamus harum quaerat fugit, error dolor quas.
                -------------------------------------------------------------------
            </div>
            <div className="list-item__item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Velit nam numquam pariatur amet accusamus harum quaerat fugit, error dolor quas.
                -------------------------------------------------------------------
            </div>
            <div className="list-item__item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Velit nam numquam pariatur amet accusamus harum quaerat fugit, error dolor quas.
                -------------------------------------------------------------------
            </div>
            <div className="list-item__item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Velit nam numquam pariatur amet accusamus harum quaerat fugit, error dolor quas.
                -------------------------------------------------------------------
            </div>
            <div className="list-item__item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Velit nam numquam pariatur amet accusamus harum quaerat fugit, error dolor quas.
                -------------------------------------------------------------------
            </div>
            <div className="list-item__item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Velit nam numquam pariatur amet accusamus harum quaerat fugit, error dolor quas.
                -------------------------------------------------------------------
            </div>
            <div className="list-item__item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Velit nam numquam pariatur amet accusamus harum quaerat fugit, error dolor quas.
                -------------------------------------------------------------------
            </div>
            <div className="list-item__item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Velit nam numquam pariatur amet accusamus harum quaerat fugit, error dolor quas.
                -------------------------------------------------------------------
            </div>
            <div className="list-item__item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Velit nam numquam pariatur amet accusamus harum quaerat fugit, error dolor quas.
                -------------------------------------------------------------------
            </div>
            <div className="list-item__item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Velit nam numquam pariatur amet accusamus harum quaerat fugit, error dolor quas.
                -------------------------------------------------------------------
            </div>
            <div className="list-item__item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Velit nam numquam pariatur amet accusamus harum quaerat fugit, error dolor quas.
                -------------------------------------------------------------------
            </div>
            <div className="list-item__item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Velit nam numquam pariatur amet accusamus harum quaerat fugit, error dolor quas.
                -------------------------------------------------------------------
            </div>
            <div className="list-item__item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Velit nam numquam pariatur amet accusamus harum quaerat fugit, error dolor quas.
                -------------------------------------------------------------------
            </div>
            <div className="list-item__item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Velit nam numquam pariatur amet accusamus harum quaerat fugit, error dolor quas.
                -------------------------------------------------------------------
            </div>
            <div className="list-item__item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Velit nam numquam pariatur amet accusamus harum quaerat fugit, error dolor quas.
                -------------------------------------------------------------------
            </div>
        </div >
    );
}

export default ListItem;
