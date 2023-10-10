import './InputComponent.scss'
import { useState } from 'react'
interface Props {
    label: string,
    handleOnChange: React.ChangeEventHandler<HTMLInputElement>
}

const InputComponent: React.FC<Props> = ({ label, handleOnChange }) => {
    const [isload, setisload] = useState<string>("")
    return (
        <div className="item__">
            <div className="box before">
                <input type="text" required={true} className='input'
                    onChange={event => handleOnChange(event)} />
                <span >
                    {label}
                </span>
            </div>
        </div>
    )


}

export default InputComponent