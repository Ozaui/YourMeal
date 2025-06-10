const FirstRegisterPageComponent = () => {
  return (
    <div>
      <div className="first-form-container">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="number" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="birthDate">Birth Date:</label>
          <input type="date" id="birthDate" name="birthDate" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="password-confirm">Password:</label>
          <input
            type="password"
            id="password-confirm"
            name="password-confirm"
            required
          />
        </div>
      </div>
      <button type="submit">Next</button>
    </div>
  );
};

export default FirstRegisterPageComponent;
