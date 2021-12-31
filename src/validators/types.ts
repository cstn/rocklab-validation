enum Validator {
  CreditCard = 'CreditCard',
  IBAN = 'IBAN',
  BIC = 'BIC',
  Email = 'Email',
  Password = 'Password',
  Username = 'Username',
  NotEmpty = 'NotEmpty',
  Length = 'Length',
  ExactLength = 'ExactLength',
  MinLength = 'MinLength',
  MaxLength = 'MaxLength'
}

type ValidatorOptions = {
  [key: string]: number | string;
};

export { Validator, ValidatorOptions };
