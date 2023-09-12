import { TestBed } from '@angular/core/testing';

import { EldenringapiserviceService } from './eldenringapiservice.service';

describe('EldenringapiserviceService', () => {
  let service: EldenringapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EldenringapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
