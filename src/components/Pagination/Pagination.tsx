import React, { useEffect, useState } from 'react'
import './Pagination.scss'

interface Props {
    totalPage: number
    handleCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FC<Props> = ({ totalPage, handleCurrentPage }) => {

    const [currentPage, setCurrentPage] = useState<number>(1)
    const list: number[] = []
    const [tempPage, setTempPage] = useState<number>(1)

    const handleSetCurrentPage = (currentPage: number) => {
        if (currentPage > totalPage) {
            setCurrentPage(totalPage)
        } else if (currentPage < 1) {
            setCurrentPage(1)
        } else {
            setCurrentPage(currentPage);
            handleCurrentPage(currentPage);
        }
        console.log(currentPage)
    }
    for (let i = 0; i < totalPage; i++) {
        list.push(i + 1)
    }

    const handleOnChangeTempPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        let numberTempPage = Number(event.target.value);
        if (numberTempPage < 1 || Number.isNaN(numberTempPage)) {
            setTempPage(1);
        } else if (numberTempPage > totalPage) {
            setTempPage(totalPage);
        } else {
            setTempPage(Number(event.target.value));
        }
    }
    useEffect(() => {
        handleSetCurrentPage(currentPage)
    }, [totalPage])
    return (
        <div className='pagination--container'>
            {totalPage > 1 &&
                <>
                    <div className="pagination--bar">{/**/}
                        {currentPage > 1 &&
                            <div className="page__item "
                                onClick={() => handleSetCurrentPage(currentPage - 1)}>
                                <a className="page--link" >&lt;
                                </a>
                            </div>
                        }

                        {totalPage <= 10 &&
                            list.map((item, index) => {
                                return (
                                    <div className={`page__item ${(item) === currentPage ? 'active' : ''}`} key={index}
                                        onClick={() => handleSetCurrentPage(item)}>
                                        <a className="page--link"
                                        >{item}
                                        </a>
                                    </div>
                                )
                            })
                        }

                        {totalPage > 10 && (currentPage <= 5 || currentPage >= totalPage - 4) &&
                            <>
                                {list.filter(item => {
                                    if (item <= 5) {
                                        return item
                                    }
                                }).map((item, index) => {
                                    return (
                                        <div className={`page__item ${(item) === currentPage ? 'active' : ''}`} key={index}
                                            onClick={() => handleSetCurrentPage(item)}>
                                            <a className="page--link"
                                            >{item}
                                            </a>
                                        </div>
                                    )
                                })}
                                <div className={`page__item `} onClick={() => handleSetCurrentPage(6)}>
                                    <a className="page--link"
                                    >...
                                    </a>
                                </div>
                                {list.filter(item => {
                                    if (item >= totalPage - 4) {
                                        return item
                                    }
                                }).map((item, index) => {
                                    return (
                                        <div className={`page__item ${(item) === currentPage ? 'active' : ''}`} key={index}
                                            onClick={() => handleSetCurrentPage(item)}>
                                            <a className="page--link"
                                            >{item}
                                            </a>
                                        </div>
                                    )
                                })}
                            </>
                        }
                        {totalPage > 10 && currentPage > 5 && currentPage < totalPage - 4 &&
                            <>
                                <div className={`page__item `} onClick={() => handleSetCurrentPage(currentPage - 5)}>
                                    <a className="page--link"
                                    >...
                                    </a>
                                </div>
                                {list.filter(item => {
                                    if (item <= currentPage + 4 && item >= currentPage - 4) {
                                        return item
                                    }
                                }).map((item, index) => {
                                    return (
                                        <div className={`page__item ${(item) === currentPage ? 'active' : ''}`} key={index}
                                            onClick={() => handleSetCurrentPage(item)}>
                                            <a className="page--link"
                                            >{item}
                                            </a>
                                        </div>
                                    )
                                })}
                                <div className={`page__item `} onClick={() => handleSetCurrentPage(currentPage + 5)}>
                                    <a className="page--link"
                                    >...
                                    </a>
                                </div>
                            </>
                        }


                        {currentPage < totalPage &&
                            <div className='page__item'
                                onClick={() => handleSetCurrentPage(currentPage + 1)}>
                                <a className="page--link"
                                >&gt;
                                </a>
                            </div>
                        }
                    </div>
                    <div className="input-jump-to">
                        <input type="text" placeholder="Page" aria-label="Page" className="page-to-jump" onChange={(event) => handleOnChangeTempPage(event)} />
                        <button type="button" id="jump-to-page" className="page-button"
                            onClick={() => handleSetCurrentPage(tempPage)}
                        >Go
                        </button>
                    </div>
                </>
            }
        </div>
    )
}

export default Pagination