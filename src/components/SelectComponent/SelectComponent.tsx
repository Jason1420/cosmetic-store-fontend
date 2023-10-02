import { useState } from 'react'
import './SelectComponent.scss'
import { SelectOption } from '../../types/SelectOption';



interface SelectProps {
    options: SelectOption[],
    id?: SelectOption,
    selectOnChange: (id: SelectOption | undefined) => void
}



const SelectComponent = ({ id, selectOnChange, options }: SelectProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [highlightIndex, setHighlightedIndex] = useState<number>()
    const selectOption = (option: SelectOption) => {
        if (option !== id) selectOnChange(option);
    }
    const isOptionSelected = (option: SelectOption) => {
        return option === id;
    }

    return (
        <div onBlur={() => setIsOpen(false)}
            onClick={() => setIsOpen(o => !o)} tabIndex={0} className="select-component-container">
            <span className="id">
                {id?.name}
            </span>
            <div className="divider">

            </div>
            <div className={isOpen ? "caret-open" : "caret"}>

            </div>
            <ul className={`options ${isOpen ? "show" : ""}`}>
                {options.map((option, index) => {
                    return (
                        <li onClick={e => {
                            e.stopPropagation()
                            selectOption(option)
                            setIsOpen(false)
                        }}
                            onMouseEnter={() => setHighlightedIndex(index)}
                            className={`option ${isOptionSelected(option) ? "selected" : ""}
                            ${index === highlightIndex ? "highlighted" : ""}
                            `}
                            key={option.id}>
                            {option.name}
                        </li>)
                })}
            </ul>
        </div>
    )


}

export default SelectComponent