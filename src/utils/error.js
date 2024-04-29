export class GeneralError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
  getCode() {
    return 500;
  }
}

export class BadRequest extends GeneralError {
  constructor(message) {
    super(message);
    this.name = 'Bad Request';
  }
  getCode() {
    return 400;
  }
}

export class Forbidden extends GeneralError {
  constructor(message) {
    super(message);
    this.name = 'Forbidden';
  }
  getCode() {
    return 403;
  }
}

export class NotFound extends GeneralError {
  constructor(message) {
    super(message);
    this.name = 'Not found';
  }
  getCode() {
    return 404;
  }
}

export class NoData extends GeneralError {
  constructor(message) {
    super(message);
    this.name = 'No data found';
  }
  getCode() {
    return 200;
  }
}
