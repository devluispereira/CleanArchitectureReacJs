import React from 'react'
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'
import Login from './login'
import { Validation } from '@/presentation/protocols/validation'

type SutTypes={
  sut: RenderResult
  validationSpy: ValidationSpy
}

class ValidationSpy implements Validation {
  errorMessage: string
  input: object
  validate (input: object): string {
    this.input = input
    return this.errorMessage
  }
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = render(<Login validation={validationSpy}/>)
  return {
    sut,
    validationSpy
  }
}

describe('Login Component', () => {
  afterEach(cleanup)
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

  test('should call Validation with corret email value', () => {
    const { sut, validationSpy } = makeSut()
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: 'any_email' } })

    expect(validationSpy.input).toEqual({
      email: 'any_email'

    })
  });

  test('should call Validation with corret password value', () => {
    const { sut, validationSpy } = makeSut()
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: '123456' } })

    expect(validationSpy.input).toEqual({
      password: '123456'

    })
  });
});
