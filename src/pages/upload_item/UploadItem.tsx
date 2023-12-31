import React, { useState, useEffect } from 'react';
import './UploadItem.scss';
import axios from 'axios';
import { useFormik } from 'formik'
import { SelectOption } from '../../types/SelectOption';
import SelectComponent from '../../components/SelectComponent/SelectComponent';
import { URL } from '../../routes/Url';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { AxiosInstance } from '../../store/AxiosInstance';
import { toast } from 'react-toastify';


interface NewItem {
    id?: number,
    name: string,
    brand: string | undefined,
    type: string | undefined,
    price: number,
    image?: string,
    description: string,
    status: string | undefined
}

interface Props {
    handleLoading: React.Dispatch<React.SetStateAction<boolean>>
}
const UploadItem: React.FC<Props> = ({ handleLoading }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [brands, setBrands] = useState<SelectOption[]>([])
    const [brandSelectedValue, setBrandSelectedValue] = useState<SelectOption | undefined>({ name: "Chọn nhãn hàng", id: 0 });
    const handleOnChangeBrand = (o: SelectOption | undefined) => {
        setBrandSelectedValue(o)
        setNewItem({
            ...newItem,
            brand: o?.name,
        })
    }

    const [status, setStatus] = useState<SelectOption[]>([])
    const [statusSelectedValue, setStatusSelectedValue] = useState<SelectOption | undefined>({ name: "Tình trạng sản phẩm", id: 0 });
    const handleOnChangeStatus = (o: SelectOption | undefined) => {
        setStatusSelectedValue(o)
        setNewItem({
            ...newItem,
            status: o?.name,
        })
    }
    const [types, setTypes] = useState<SelectOption[]>([])
    const [typeSelectedValue, setTypeSelectedValue] = useState<SelectOption | undefined>({ name: "Phân loại sản phẩm", id: 0 });
    const handleOnChangeType = (o: SelectOption | undefined) => {
        setTypeSelectedValue(o)
        setNewItem({
            ...newItem,
            type: o?.name,
        })
    }
    const [newItem, setNewItem] = useState<NewItem>({
        name: "",
        brand: "",
        type: "",
        price: 0,
        image: "",
        description: "",
        status: "",
    })
    const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {

        let imgFiles = event.target.files;
        if (imgFiles) {
            const file = imgFiles[0];
            readFile(file)

        }
    }
    const readFile = (file: File) => {
        const fileReader = new FileReader()
        if (file) {

            fileReader.readAsDataURL(file);

            fileReader.addEventListener('load', () => {
                const res = fileReader.result;
                setNewItem({ ...newItem, image: res?.toString() })
            })
        }
    }
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.auth)
    const headers = { Authorization: `Bearer ${user.accessToken}` }
    const jwtAxios = AxiosInstance(dispatch, user);
    const formik = useFormik({
        initialValues: {
            name: "",
            brand: "",
            type: "",
            price: 0,
            image: null,
            description: "",
        },
        onSubmit: async (values) => {
            try {
                const submitItem = {
                    name: formik.values.name,
                    price: formik.values.price,
                    description: formik.values.description,
                    brand: brandSelectedValue?.name,
                    type: typeSelectedValue?.name,
                    status: statusSelectedValue?.name,
                    image: newItem.image,

                }
                const addNewItemURL = URL.ADD_NEW_ITEM;
                const res = await axios.post(addNewItemURL, submitItem, { headers },)
                if (res.data.code === 200) {
                    toast.success("Đã thêm thành công sản phẩm", {
                        icon: "✔️"
                    });
                }
            } catch (error) {
                console.log(error)
                toast.error("Thêm sản phẩm thất bại", {
                    icon: "❌"
                });
            }
        },

    });
    useEffect(() => {
        const getDefaultData = async () => {
            try {
                const res = await axios.get(URL.GET_DEFAULT_DATA,)
                if (res && res.data && res.data.data) {
                    setBrands(res.data.data.brands)
                    setTypes(res.data.data.types)
                    setStatus(res.data.data.status)
                }

            } catch (error) {
                console.log(error)
            }
        }

        getDefaultData()

    }, [])
    useEffect(() => {
        handleLoading(isLoading)
    }, [isLoading])
    return (
        <div className="upload-item-container">
            <div className="title">
                Thêm mới sản phẩm
            </div>
            <div className="form-add-item">
                <div className="input-form ">
                    <label htmlFor="name">Tên sản phẩm</label>
                    <input type="text"
                        className="form-control "
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange} />
                </div>

                <div className="input-form ">
                    <label htmlFor="brand">Nhãn hàng</label>
                    <SelectComponent options={brands} id={brandSelectedValue}
                        selectOnChange={(o) => handleOnChangeBrand(o)} />
                </div>

                <div className="input-form ">
                    <label htmlFor="type">Loại</label>
                    <SelectComponent options={types} id={typeSelectedValue}
                        selectOnChange={(o) => handleOnChangeType(o)} />
                </div>
                <div className="input-form ">
                    <label htmlFor="type">Tình trạng</label>
                    <SelectComponent options={status} id={statusSelectedValue}
                        selectOnChange={(o) => handleOnChangeStatus(o)} />
                </div>

                <div className="input-form ">
                    <label htmlFor="price">Giá (vnđ)</label>
                    <input type="text"
                        className="form-control "
                        id="price"
                        value={formik.values.price}
                        onChange={formik.handleChange} />
                </div>

                <div className="input-form ">
                    <label htmlFor="image">Hình ảnh</label>
                    <input type="file"
                        className="form-control "
                        id="image"
                        onChange={(event) => handleChangeImage(event)} />
                </div>
                <div className="input-form ">
                    <label htmlFor="description">Mô tả</label>
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
                        Tạo mới sản phẩm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UploadItem;
