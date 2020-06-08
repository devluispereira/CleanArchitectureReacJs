import { AuthenticationPrams } from '../useCases/authentication'

import faker from 'faker'
import { AccountModel } from '../models/acocount-model'
export const mockAuthentication = (): AuthenticationPrams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid()
}
)
