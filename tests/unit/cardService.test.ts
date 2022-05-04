import { jest } from '@jest/globals';
import cardRepository from '../../src/repositories/cardRepository.js';
import cardService from '../../src/services/cardService.js';
import companyService from '../../src/services/companyService'
import employeeService from '../../src/services/employeeService'
import { Card } from '../../src/repositories/cardRepository.js';
import { create } from 'domain';
//create card
//Mock apiKey
//mock employee
//mock type

describe("unit test function create", () => {
  it("should throw erro if user is already in db", async () => {

    jest.spyOn(companyService, 'validateApiKeyOrFail').mockResolvedValue();

    jest.spyOn(employeeService, 'getById').mockResolvedValue({
      id: 1,
      fullName: "Fulaninho Beltrano",
      cpf: "12345678910",
      email: "fulano@mail.com",
      companyId: 1,
    });

    const card: Card = {
      id: 1,
      employeeId: 1,
      number: "string",
      cardholderName: "string",
      securityCode: "string",
      expirationDate: "string",
      password: "string",
      isVirtual: false,
      originalCardId: null,
      isBlocked: false,
      type: 'education',
    }

    jest.spyOn(cardRepository, 'findByTypeAndEmployeeId').mockResolvedValue(card);

    expect(async () => await cardService.create("nanaminha", 0, 'restaurant')).toThrowError

  });

  it("should create a card if everything work", async () => {

    jest.spyOn(companyService, 'validateApiKeyOrFail').mockResolvedValue();

    jest.spyOn(employeeService, 'getById').mockResolvedValue({
      id: 1,
      fullName: "Fulaninho Beltrano",
      cpf: "12345678910",
      email: "fulano@mail.com",
      companyId: 1,
    });

    jest.spyOn(cardRepository, 'findByTypeAndEmployeeId').mockResolvedValue(null);

    jest.spyOn(cardRepository, 'insert').mockResolvedValue();

    expect(async () => await cardService.create("nanaminha", 0, 'restaurant')).resolves
    expect(cardRepository.insert).toBeCalled
  });

});

//generateCardData

//getMiddleNameInicital

//filterTwoLetterMiddleName

//formatCardholderName

//getHashedSecurityCode

//activate

//validateExpirationDateOrFail

//getById

//validateCVCOrFail

//validatePasswordOrFail