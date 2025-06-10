import DietType from "../components/register/DietType";
import FirstRegisterPageComponent from "../components/register/FirstRegisterPageComponent";
import "../css/registerPage.css";

const register = () => {
  return (
    <div className="register-page">
      <h1>Register Page</h1>
      <form method="POST" className="register-form">
        {/* <FirstRegisterPageComponent /> */}
        <DietType />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default register;
