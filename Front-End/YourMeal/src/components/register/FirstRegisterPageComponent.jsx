import { useDispatch, useSelector } from "react-redux";
import NextButton from "../NextButton";
import { useState, useEffect } from "react";
import { setPersonalInfo } from "../../features/firstRegisterPageSlice";
import { setPersonalInfoForRegisteration } from "../../features/registrationSlice";

const FirstRegisterPageComponent = ({ onNext }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNext = () => {
    dispatch(setPersonalInfoForRegisteration(formData));
    dispatch(setPersonalInfo(formData));

    if (onNext) onNext();
  };

  return (
    <div>
      <div className="first-form-container">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthDate">Birth Date:</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password-confirm">Password:</label>
          <input
            type="password"
            id="password-confirm"
            name="password-confirm"
            onChange={handleChange}
            required
          />
        </div>
        <NextButton onNext={handleNext} />
      </div>
    </div>
  );
};

export default FirstRegisterPageComponent;
