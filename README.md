# Rocklab validators

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

* node version 12
* npm version 6

## Install

```shell script
npm install @rocklab/validation
```

## Usage
Validate input:
```javascript
import { isEmail } from '@rocklab/validation';

if (!isEmail(value)) {
  alert('Please enter a valid email address');
}
```

Apply multiple validators:
```javascript
import { validate } from '@rocklab/validation';

const errors = validate(value, [
  ['notEmpty', 'Input required'],
  ['isEmail', 'email required'],
  ['hasMinLength', 'Min 10 chars', 10]
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
