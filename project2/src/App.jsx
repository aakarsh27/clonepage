import Navigation from "./Components/Navigation/Navigation.jsx"
import ContactHeader from "./Components/ContactHeader/ContactHeader.jsx";
import ContactForm from "./Components/ContactForm/ContactForm.jsx";

function App() {
  return (
    <>
    <Navigation/>
    <main className="main_container">
    <ContactHeader/>
    <ContactForm/>
    </main>
    
    </>
  );
}

export default App
