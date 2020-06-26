import React from "react";
import {
  render,
  RenderResult,
  fireEvent,
  cleanup
} from "@testing-library/react";
import Login from "./login";
import faker from "faker";

import { ValidationStub } from "@/presentation/test/";

type SutTypes = {
  sut: RenderResult
  validationStrub: ValidationStub
};

const makeSut = (): SutTypes => {
  const validationStrub = new ValidationStub();
  validationStrub.errorMessage = faker.random.words();

  const sut = render(<Login validation={validationStrub} />);
  return {
    sut,
    validationStrub
  };
};

describe("Login Component", () => {
  afterEach(cleanup);
  test("should start with initial state", () => {
    const { sut, validationStrub } = makeSut();
    const spinner = sut.getByTestId("errorWrap");
    expect(spinner.childElementCount).toBe(0);

    const submitButton = sut.getByTestId("submit") as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);

    const emailStatusInput = sut.getByTestId("email-status");
    expect(emailStatusInput.title).toBe(validationStrub.errorMessage);
    expect(emailStatusInput.textContent).toBe("ok");

    const passwordStatusInput = sut.getByTestId("password-status");
    expect(passwordStatusInput.title).toBe(validationStrub.errorMessage);
    expect(passwordStatusInput.textContent).toBe("ok");
  });

  test("should error if Validation with corret email value", () => {
    const { sut, validationStrub } = makeSut();

    const email = faker.internet.email();
    const emailInput = sut.getByTestId("email");
    fireEvent.input(emailInput, { target: { value: email } });
    const emailStatus = sut.getByTestId("email-status");
    expect(emailStatus.title).toBe(validationStrub.errorMessage);
    expect(emailStatus.textContent).toBe("ok");
  });
  test("should error if Validation with corret password value", () => {
    const { sut, validationStrub } = makeSut();

    const password = faker.internet.password();
    const passwordInput = sut.getByTestId("password");
    fireEvent.input(passwordInput, { target: { value: password } });
    const emailStatus = sut.getByTestId("password-status");
    expect(emailStatus.title).toBe(validationStrub.errorMessage);
    expect(emailStatus.textContent).toBe("ok");
  });

  test("should show valid password if Validation success", () => {
    const { sut, validationStrub } = makeSut();
    validationStrub.errorMessage = ''

    const passwordInput = sut.getByTestId("password");
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } });
    const emailStatus = sut.getByTestId("password-status");
    expect(emailStatus.title).toBe('Tudo Certo');
    expect(emailStatus.textContent).toBe("X");
  });

  test("should show valid email if Validation success", () => {
    const { sut, validationStrub } = makeSut();
    validationStrub.errorMessage = null

    const emailInput = sut.getByTestId("email");
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } });
    const emailStatus = sut.getByTestId("email-status");
    expect(emailStatus.title).toBe('Tudo Certo');
    expect(emailStatus.textContent).toBe("X");
  });
});
