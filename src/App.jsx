import SignUp from "./services/auth/forms/SignUp"
import { BrowserRouter, Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*  public routes  */}
        {/*  private routes  */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App