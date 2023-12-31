import React, { useState, useEffect } from 'react';
import './CustomerSupport.scss';
import axios from 'axios';
import { useFormik } from 'formik'
import { SelectOption } from '../../types/SelectOption';
import SelectComponent from '../../components/SelectComponent/SelectComponent';
import { URL } from '../../routes/Url';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';


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

const options = [
    { name: "Loại yêu cầu", id: 0 },
    { name: "Hủy đơn hàng", id: 1 },
    { name: "Đổi/trả sản phẩm lỗi", id: 2 },
    { name: "Xuất hóa đơn", id: 3 },
    { name: "Hỗ trợ bảo hành", id: 4 },
    { name: "Khác", id: 5 },
]
interface Props {
    handleLoading: React.Dispatch<React.SetStateAction<boolean>>
}
const CustomerSupport: React.FC<Props> = ({ handleLoading }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [id, setId] = useState<typeof options[0] | undefined>(options[0]);
    const [brands, setBrands] = useState<SelectOption[]>([])
    const [brandSelectedValue, setBrandSelectedValue] = useState<SelectOption | undefined>({ name: "Select Brand", id: 0 });
    const handleOnChangeBrand = (o: SelectOption | undefined) => {
        setBrandSelectedValue(o)
        setNewItem({
            ...newItem,
            brand: o?.name,
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
    useEffect(() => {
        handleLoading(isLoading)
    }, [isLoading])
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
    const formik = useFormik({
        initialValues: {
            name: "",
            contact: "",
            invoiceCode: "",
            image: null,
            description: "",
        },
        onSubmit: async (values) => {
            try {
                const submitItem = {
                    name: formik.values.name,
                    contact: formik.values.contact,
                    invoiceCode: formik.values.invoiceCode,
                    description: formik.values.description,
                    image: newItem.image,

                }
                const supportURL = "http://localhost:8080/request-support"
                const res = await axios.post(supportURL, submitItem,)
            } catch (error) {
                console.log(error)
            }
        },
    });
    useEffect(() => {
        const getDefaultData = async () => {
            try {
                const res = await axios.get(URL.GET_DEFAULT_DATA,)
                if (res && res.data && res.data.data) {
                    setBrands(res.data.data.brands)
                }

            } catch (error) {
                console.log(error)
            }
        }

        getDefaultData()

    }, [])
    return (
        <div className="customer-support-container">
            <div className="title">
                Gửi yêu cầu
            </div>
            <div className="sub-title">
                Chúng tôi luôn sẵn sàng trợ giúp cho mọi vấn đề bạn gặp phải!
                Gửi yêu cầu hỗ trợ! Chúng tôi sẽ sớm hỗ trợ bạn.
            </div>
            <div className="detail">
                Chi tiết
            </div>
            <div className="form-add-item">
                <div className="input-form ">
                    <label htmlFor="name">Họ & tên</label>
                    <input type="text"
                        className="form-control "
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        placeholder='Họ và tên' />
                </div>
                <div className="input-form ">
                    <label htmlFor="contact">Liên hệ</label>
                    <input type="text"
                        className="form-control "
                        id="contact"
                        value={formik.values.contact}
                        onChange={formik.handleChange}
                        placeholder='Email hoặc SĐT' />
                </div>
                <div className="input-form support-required ">
                    <label htmlFor="brand">Yêu cầu</label>
                    <SelectComponent options={options} id={id}
                        selectOnChange={(o) => setId(o)} />

                </div>
                <div className="input-form ">
                    <label htmlFor="invoiceCode">Mã đơn hàng</label>
                    <input type="text"
                        className="form-control "
                        id="invoiceCode"
                        value={formik.values.invoiceCode}
                        onChange={formik.handleChange}
                        placeholder='VD: INV-20231010-00001' />
                </div>
                <div className="input-form ">
                    <label htmlFor="description">Mô tả yêu cầu hỗ trợ</label>
                    <textarea
                        className="form-control description "
                        id="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        placeholder='Nội dung yêu cầu' />
                </div>
                <div className="input-form ">
                    <label htmlFor="image">Hình ảnh đính kèm</label>
                    <input type="file"
                        className="form-control "
                        id="image"
                        onChange={(event) => handleChangeImage(event)} />
                </div>

                <div className="end-form">
                    <button className='button-custom'
                        type='submit'
                        onClick={() => formik.handleSubmit()}>
                        Gửi yêu cầu
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CustomerSupport;
