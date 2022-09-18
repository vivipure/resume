import React, {useState} from 'react';

import '@/assets/styles/init.scss'
import OneYearResume from './views/oneYear/index'
import Loading from './components/loading/index'

function App() {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 1500);
    return (
             <div className="resume-wrapper">
                 {
                     loading ? <Loading /> : <OneYearResume />
                 }
                
            </div>
    )
}

export default App