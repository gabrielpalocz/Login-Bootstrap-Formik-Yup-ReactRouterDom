import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import App from './App';
import LoginPage from './components/authentication/views/login'
import RegisterPage from './components/authentication/views/register'
import ForgotPassPage from './components/authentication/views/forgotPass'
import { Card } from './components/authentication/ui-components/card'
import { LoginValidationSchema } from './components/authentication/forms/loginForm'
import { RegisterValidationSchema } from './components/authentication/forms/registerForm'
import { ForgotPassValidationSchema } from './components/authentication/forms/forgotPassForm'


describe('REACT - Components test', () => {
  test('Card Body render ok', () => {
    const view = render(<Router><Card /></Router>);
    expect(view).toBeDefined();
  })
  test('login Form render ok', () => {
    const view = render(<Router><LoginValidationSchema /></Router>);
    expect(view).toBeDefined();
  })
  test('Login Page render ok', () => {
    const view = render(<Router><LoginPage /></Router>);
    expect(view).toBeDefined();
  })
  test('register Form render ok', () => {
    const view = render(<Router><RegisterValidationSchema /></Router>);
    expect(view).toBeDefined();
  })
  test('Register Page render ok', () => {
    const view = render(<Router><RegisterPage /></Router>);
    expect(view).toBeDefined();
  })
  test('forgot password Form render ok', () => {
    const view = render(<Router><ForgotPassValidationSchema /></Router>);
    expect(view).toBeDefined();
  })
  test('forgot password Page render ok', () => {
    const view = render(<Router><ForgotPassPage /></Router>);
    expect(view).toBeDefined();
  })
});

describe('REACT - Integration test', () => {
  test('App render', () => {
    const view = render(<Router><App /></Router>)
    expect(view).toBeDefined();
  })
  test('Email Input render', () => {
    const placeholdertext = "Email";
    render(<Router><LoginPage /></Router>)
    const input = screen.getByPlaceholderText(placeholdertext);
    expect(input).toBeDefined();
  })
  test('Password Input render', () => {
    const placeholdertext = "Password";
    render(<Router><LoginPage /></Router>)
    const input = screen.getByPlaceholderText(placeholdertext);
    expect(input).toBeDefined();
  })
  test('First Name Input render', () => {
    const placeholdertext = "firstName";
    render(<Router><RegisterPage /></Router>)
    const input = screen.getByPlaceholderText(placeholdertext);
    expect(input).toBeDefined();
  })
  test('Last Name Input render', () => {
    const placeholdertext = "lastName";
    render(<Router><RegisterPage /></Router>)
    const input = screen.getByPlaceholderText(placeholdertext);
    expect(input).toBeDefined();
  })
  test('Email register Input render', () => {
    const placeholdertext = "Email";
    render(<Router><RegisterPage /></Router>)
    const input = screen.getByPlaceholderText(placeholdertext);
    expect(input).toBeDefined();
  })
  test('Password register Input render', () => {
    const placeholdertext = "Password";
    render(<Router><RegisterPage /></Router>)
    const input = screen.getByPlaceholderText(placeholdertext);
    expect(input).toBeDefined();
  })
  test('Email forgot password Input render', () => {
    const placeholdertext = "Email";
    render(<Router><ForgotPassPage /></Router>)
    const input = screen.getByPlaceholderText(placeholdertext);
    expect(input).toBeDefined();
  })
});

describe('REACT - Routing Test', () => {
  test('landing on login page', () => {
    const loginRoute = '/login'

    render(
      <Router initialEntries={[loginRoute]}>
        <App />
      </Router>,
    )

    // verify navigation to "login" route
    expect(screen.getByText(/login/i)).toBeInTheDocument()
  })
  test('landing on register page', () => {
    const registerRoute = '/register'

    render(
      <Router initialEntries={[registerRoute]}>
        <App />
      </Router>,
    )

    // verify navigation to "register" route
    expect(screen.getByText(/register/i)).toBeInTheDocument()
  })
  test('landing on forgot password page', () => {
    const forgotPassRoute = '/forgotpass'

    render(
      <Router initialEntries={[forgotPassRoute]}>
        <App />
      </Router>,
    )

    // verify navigation to "forgot password" route
    expect(screen.getByText(/Reset Password/i)).toBeInTheDocument()
  })
});





