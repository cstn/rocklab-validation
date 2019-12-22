# Rocklab validators

_A library for input validation_

## Install

```shell script
npm install @rocklab/validators
```

## Usage

````javascript
import { isEmail } from '@rocklab/validation';

if (!isEmail(value)) {
  alert('Please enter a valid email address');
}
````

## Development

### Setup

```shell script
git clone https://github.com/cstn/rocklab-validation.git
npm install
````

### Commands

Check own code conventions

```shell script
npm run lint
````

Autoformat code

```shell script
npm run prettier
```
