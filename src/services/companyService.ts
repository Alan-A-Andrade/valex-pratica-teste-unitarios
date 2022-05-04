import * as companyRepository from "../repositories/companyRepository.js";

async function validateApiKeyOrFail(apiKey: string) {
  console.log("não deveria chegar aqui!")
  const company = await companyRepository.findByApiKey(apiKey);
  if (!company) {
    throw { type: "unauthorized" };
  }
}



const companyService = {
  validateApiKeyOrFail
}

export default companyService
