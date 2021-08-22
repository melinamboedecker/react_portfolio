import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Aboutme from './Aboutme';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const Content = () => {

    const [projects, setProjects] = useState([
        {
            title: 'CarboLoader',
            image: './assets/carboloaderscreenshot1.png',
            deployed: "https://carbohydratetracker.herokuapp.com/",
            github: "https://github.com/melinamboedecker/carb_counter",
            tech: 'Node.js Handlebars MySQL Express Sequelize',
            id: 1
        },
        {
            title: 'Activity Selector',
            image: './assets/ActivitySelectorScreenshot.JPG',
            deployed: "https://melinamboedecker.github.io/ActivitySelector/",
            github: "https://github.com/melinamboedecker/ActivitySelector",
            tech: 'HTML CSS JavaScript Node.js, Express, Handlebars',
            id: 2
        },
        {
            title: 'Technology Blog',
            image: './assets/techblogscreenshot3.png',
            deployed: "https://technologyblog.herokuapp.com/",
            github: "https://github.com/melinamboedecker/TechBlog",
            tech: 'HTML CSS JavaScript',
            id: 3
        },
        {
            title: 'Workout Tracker',
            image: './assets/WorkoutTrackerScreenshot3.png',
            deployed: "https://workoutlogbook.herokuapp.com/",
            github: "https://github.com/melinamboedecker/WorkoutTracker",
            tech: 'Node.js, Express, Mongoose',
            id: 4
        },
        {
            title: 'Note Taker',
            image: './assets/notestakerscreenshot2.png',
            deployed: "https://notenotenotes.herokuapp.com/",
            github: "https://github.com/melinamboedecker/notestaker",
            tech: "Node.js, Express",
            id: 5
        },
        {
            title: 'Work Day Scheduler',
            image: './assets/screenshot-5-DayPlanner.png',
            deployed: "https://melinamboedecker.github.io/5-3rdPartyAPIs-DayPlanner/",
            github: "https://github.com/melinamboedecker/5-3rdPartyAPIs-DayPlanner",
            tech: 'HTML CSS JavaScript',
            id: 6
        }
    ])

    const [currentPage, setCurrentPage] = useState('Aboutme');

    const renderPage = () => {
        if (currentPage === 'Aboutme') {
            return <Aboutme />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio projects={projects}/>
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