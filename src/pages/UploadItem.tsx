import React, { useState, useEffect } from 'react';
import './UploadItem.scss';
import axios from 'axios';
import { useFormik } from 'formik'


interface Item {
    id?: number,
    name: string,
    brand: string
    type: string
    price: number,
    image?: File,
    description: string,
}

const UploadItem = () => {

    const [newItem, setNewItem] = useState<Item>({
        name: "",
        brand: "",
        type: "",
        price: 0,
        description: "",
    })

    const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {

        let imgFiles = event.target.files;
        if (imgFiles) {

            setNewItem({
                ...newItem,
                image: imgFiles[0]
            })
        }
        console.log()

    }
    const formik = useFormik({
        initialValues: {
            name: "",
            brand: "",
            type: "",
            price: 0,
            description: "",
        },
        onSubmit: async (values) => {
            setNewItem({
                ...newItem,
                name: formik.values.name,
                brand: formik.values.brand,
                type: formik.values.type,
                price: formik.values.price,
                description: formik.values.description,
            })
            console.log(formik.values)
            try {
                const addNewItemURL = "http://localhost:8080/api/v1/item";
                const res = await axios.post(addNewItemURL, newItem,)
                console.log(res)
                console.log(formik.values)
            } catch (error) {
                console.log(error)
            }
        },
    });




    useEffect(() => {
        const getAllItem = async () => {
            const res = await axios.get("http://localhost:8080/api/v1/getAll",)
            console.log(res)
        }

        getAllItem()

    }, [])

    return (
        <div className="new-item-container">
            <div className="form-add-item">
                <div className="input-form ">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        className="form-control "
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange} />
                </div>

                <div className="input-form ">
                    <label htmlFor="brand">Brand</label>
                    <input type="text"
                        className="form-control "
                        id="brand"
                        value={formik.values.brand}
                        onChange={formik.handleChange} />
                </div>

                <div className="input-form ">
                    <label htmlFor="type">Type</label>
                    <input type="text"
                        className="form-control "
                        id="type"
                        value={formik.values.type}
                        onChange={formik.handleChange} />
                </div>

                <div className="input-form ">
                    <label htmlFor="price">Price</label>
                    <input type="text"
                        className="form-control "
                        id="price"
                        value={formik.values.price}
                        onChange={formik.handleChange} />
                </div>

                <div className="input-form ">
                    <label htmlFor="image">Image</label>
                    <input type="file"
                        className="form-control "
                        id="image"
                        onChange={(event) => handleChangeImage(event)} />
                </div>
                <div className="input-form ">
                    <label htmlFor="description">Description</label>
                    <input type="text"
                        className="form-control "
                        id="description"
                        value={formik.values.description}
                        onChange={formik.handleChange} />
                </div>
                <div className="end-form">
                    <button className='button-custom'
                        type='submit'
                        onClick={() => formik.handleSubmit()}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UploadItem;
