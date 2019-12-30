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

* node version 10
* npm version 6

## Install

```shell script
npm install @rocklab/validators
```

## Usage

```javascript
import { isEmail } from '@rocklab/validation';

if (!isEmail(value)) {
  alert('Please enter a valid email address');
}
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
