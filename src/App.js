import React, {useState} from 'react';

import './app.scss'
import Resume from './views/resume/index'
import Loading from './components/loading/index'

function App() {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 1500);
    return (
             <div className="resume-wrapper">
                 {
                     loading ? <Loading /> : <Resume />
                 }
                
            </div>
    )
}

export default App