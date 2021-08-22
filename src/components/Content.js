import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Aboutme from './Aboutme';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const Content = () => {
    const [currentPage, setCurrentPage] = useState('Aboutme');

    const renderPage = () => {
        if (currentPage === 'Aboutme') {
            return <Aboutme />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return ( 
        <div>
            <header>
                <Header handlePageChange={handlePageChange}/>
            </header>
            <main>
                {renderPage()}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
     );
}
 
export default Content;