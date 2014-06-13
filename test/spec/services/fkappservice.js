'use strict';

describe('Service: Fkappservice', function () {

  // load the service's module
  beforeEach(module('fkIntranetAppApp'));

  // instantiate service
  var Fkappservice;
  beforeEach(inject(function (_Fkappservice_) {
    Fkappservice = _Fkappservice_;
  }));

  it('should do something', function () {
    expect(!!Fkappservice).toBe(true);
  });

});
