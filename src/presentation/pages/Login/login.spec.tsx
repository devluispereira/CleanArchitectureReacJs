import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Login from './login'

type SutTypes={
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Login/>)
  return {
    sut
  }
}

describe('Login Component', () => {
  test('should start with initial state', () => {
    const { sut } = makeSut()
    const spinner = sut.getByTestId('errorWrap')
    expect(spinner.childElementCount).toBe(0)

    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)

    const emailStatusInput = sut.getByTestId('email-status')
    expect(emailStatusInput.title).toBe('Campo Obrigatório')
    expect(emailStatusInput.textContent).toBe('ok')

    const passwordStatusInput = sut.getByTestId('password-status')
    expect(passwordStatusInput.title).toBe('Campo Obrigatório')
    expect(passwordStatusInput.textContent).toBe('ok')
  });
});
