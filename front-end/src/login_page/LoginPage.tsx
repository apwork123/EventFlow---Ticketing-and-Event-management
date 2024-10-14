import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="h2-style">Welcome back</h2>
        <p style={{textAlign: 'center',
          color: '#e2effd',
          marginBottom: '1.5rem'
        }}>Please sign in to your account</p>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot your password?</a>
          </div>
          <button type="submit" className="submit-btn">Sign in</button>
        </form>
        <p className="signup-link">
          <span style={{ color: 'white' }}>Don't have an account?</span> <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;