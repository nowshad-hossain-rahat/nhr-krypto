import { Navbar, Welcome, Services, Footer, Loader, Transactions } from './components'
import './App.css'
import 'fontawesome'

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
