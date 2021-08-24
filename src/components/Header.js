// import './Header.css';
import Navigation from './Navigation'


export default function Header({ currentPage, handlePageChange }) {
    
  
  
  
    return (
  
    <div className="header">
       
            <h1 className="myname"> Melina Boedecker</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
       
    </div>
    );
  }