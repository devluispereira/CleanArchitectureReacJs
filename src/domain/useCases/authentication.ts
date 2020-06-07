/* eslint-disable @typescript-eslint/member-delimiter-style */
// eslint-disable-next-line semi
import { AccountModel } from "../models/acocount-model";

type AuthenticationPrams = {
  email: string;
  password: string;
};

export interface Authentication {
  auth(params: AuthenticationPrams): Promise<AccountModel>;
}
