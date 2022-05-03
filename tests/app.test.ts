import { jest } from '@jest/globals';
import * as cardService from '../src/services/cardService.js';

describe('Create Card', () => {
  it.todo("should existing card return 409");
  it.todo("sholud valid body return 201");
});

describe('Activate Card', () => {
  it.todo("should activated card return 400");
  it.todo("should invalid password return 400");
  it.todo("should valid body return 200");
});

describe('Expiration Date Card', () => {
  it.todo("should expired card return 400");
});

describe('Search Card', () => {
  it.todo("should invalid card id return 404");
});

describe('CVV Card', () => {
  it.todo("should invalid card CVV return 401");
});

describe('Password Card', () => {
  it.todo("should invalid card password return 401");
});