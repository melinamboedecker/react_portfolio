import Navigation from './Navigation'

export default function Header({ handlePageChange }) {
    
  
  
  
    return (
  
    <div>
        <header>
            <h1> Melina Boedecker</h1>
            <Navigation handlePageChange={handlePageChange} />
        </header>
    </div>
    );
  }