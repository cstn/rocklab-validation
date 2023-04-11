# Rocklab validators

![Node CI](https://github.com/cstn/rocklab-validation/workflows/Node%20CI/badge.svg)

_A library for input validation_

* Credit card (number, cvc, expiration date)
* BIC (Bank Identifier Code)
* E-mail address
* IBAN (International Bank Account Number)
* non empty
* length
* password
* username

## Requirements

* node version 18
* npm version 9

## Install

```shell script
npm install @rocklab/validation
```

## Usage
Validate input:
```javascript
import { isEmail, hasLength } from '@rocklab/validation';

if (!isEmail(value)) {
  alert('Please enter a valid email address');
}

if (!hasLength(value, { min: 3, max: 10 })) {
  alert('3-8 chars required');
}
```

Apply multiple validators:
```javascript
import { validate, Validators } from '@rocklab/validation';

const errors = validate(value, [
	{ validator: Validator.NotEmpty, message: 'Input required'},
  { validator: Validator.Email, message: 'email required'},
]);
```

## Development

### Setup

```shell script
git clone https://github.com/cstn/rocklab-validation.git
npm install
```

### Commands

Build

```shell script
npm run build
```

Check code conventions

```shell script
npm run lint
npm run lint:fix
```

Auto format code

```shell script
npm run prettier
```

Run tests

```shell script
npm test
npm run watch
```

WITHOUT WARRANTY OF ANY KIND
