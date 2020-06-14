import React from 'react'
import { render } from '@testing-library/react'
import Login from './login'

describe('Login Component', () => {
  test('should start with initial state', () => {
    const { getByTestId } = render(<Login/>)
    const spinner = getByTestId('errorWrap')
    expect(spinner.childElementCount).toBe(0)

    const submitButton = getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)

    const emailStatusInput = getByTestId('email-status')
    expect(emailStatusInput.title).toBe('Campo Obrigatório')
    expect(emailStatusInput.textContent).toBe('ok')

    const passwordStatusInput = getByTestId('password-status')
    expect(passwordStatusInput.title).toBe('Campo Obrigatório')
    expect(passwordStatusInput.textContent).toBe('ok')
  });
});
