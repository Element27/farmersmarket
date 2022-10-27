
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ResetPassword from './Pages/ResetPassword';
import SignUp from './Pages/SignUp';
import PasswordConfirmation from './Pages/PasswordConfirmation';
import LogIn from './Pages/LogIn';
import LandingPage from './Pages/LandingPage';
import Registration from './Pages/Registration';
import BuyerRegistration from './Pages/Buyers/BuyerRegistration';
import ShoppingList from './Pages/ShoppingList/ShoppingList';
import ForYou from './Pages/ForYou/ForYou';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/passwordConfirmation" element={<PasswordConfirmation />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/buyerregistration" element={<BuyerRegistration />} />
        <Route path="/shoppinglist" element={<ShoppingList />} />
        <Route path="/foryou" element={<ForYou />} />
      </Routes>
    </div>
  );
}

export default App;
