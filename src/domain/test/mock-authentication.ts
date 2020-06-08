import { AuthenticationPrams } from '../useCases/authentication'

import faker from 'faker'
export const mockAuthentication = (): AuthenticationPrams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
