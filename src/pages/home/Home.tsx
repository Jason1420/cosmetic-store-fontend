import React, { useEffect, useState } from 'react'
import Banner from '../../containers/content/Banner'
import ListItem from '../../containers/content/ListItem'
import './Home.scss'

interface Props {
    handleLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Home: React.FC<Props> = ({ handleLoading }) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        handleLoading(isLoading)
    }, [isLoading])


    return (
        <div className='home-page'>
            <div className="home-page__banner">
                <Banner />
            </div>
            <div className="home-page__list-item">
                <ListItem />
            </div>

        </div>
    )
}

export default Home