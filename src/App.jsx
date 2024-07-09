import './App.css'
import NavBar from './components/NavBar'
import MainAd from './components/MainAd'
import SuggestionFood from './components/suggestionFood'
import Today from './components/today'
import Popular from './components/popular'
import Footer from './components/Footer'
function App() {

  return (
    <div className="bodyDiv">
     <NavBar></NavBar>
     <MainAd></MainAd>
     <SuggestionFood></SuggestionFood>
     <Today></Today>
     <Popular></Popular>
     <Footer></Footer>

    </div>
  )
}

export default App
