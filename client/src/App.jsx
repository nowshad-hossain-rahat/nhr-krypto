import { Navbar, Welcome, Services, Footer, Loader, Transactions } from './components'
import './App.css'

function App() {
    return <div className="min-h-screen">
        <div className="gradient-bg-welcome">
            <Navbar />
            <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
    </div>
}

export default App
