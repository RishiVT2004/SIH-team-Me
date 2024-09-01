/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar_buyer from '../Navbar/Navbar_buyer'
import Footer from '../Footer/Footer'
import History from '../../../../ayush/src/components/History'

const History_Buyers = () => {
    return (
        <section className='overflow-x-hidden'>
            <Navbar_buyer />
            <div className='container'>
                <History/>
            </div>
            <Footer />
        </section>
    )
}

export default History_Buyers
