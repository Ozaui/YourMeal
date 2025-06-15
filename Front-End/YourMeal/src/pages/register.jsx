import { useState } from "react";
import Allergens from "../components/register/Allergens";
import DietType from "../components/register/DietType";
import DislikeIngredient from "../components/register/DislikeIngredient";
import FirstRegisterPageComponent from "../components/register/FirstRegisterPageComponent";
import "../css/registerPage.css";

const Register = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <FirstRegisterPageComponent onNext={nextStep} />;
      case 1:
        return <DietType onNext={nextStep} onBack={prevStep} />;
      case 2:
        return <Allergens onNext={nextStep} onBack={prevStep} />;
      case 3:
        return <DislikeIngredient onBack={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="register-page">
      <h1>Register Page</h1>
      <form method="POST" className="register-form">
        {renderStep()}
      </form>
    </div>
  );
};

export default Register;
