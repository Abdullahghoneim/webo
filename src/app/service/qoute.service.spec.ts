import { TestBed } from '@angular/core/testing';

import { QouteService } from './qoute.service';

describe('QouteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QouteService = TestBed.get(QouteService);
    expect(service).toBeTruthy();
  });
});
