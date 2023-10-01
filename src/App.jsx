import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Home, Contact, About, FAQ, ForCompanies, ForStudents, Terms, NotFound } from "./components/index"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="companies" element={<ForCompanies />} />
          <Route path="students" element={<ForStudents />} />
          <Route path="terms&condtions" element={<Terms />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
