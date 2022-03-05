import { TestBed } from '@angular/core/testing';

import { ConfigUrlService } from './config-url.service';

describe('ConfigUrlService', () => {
  let service: ConfigUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
