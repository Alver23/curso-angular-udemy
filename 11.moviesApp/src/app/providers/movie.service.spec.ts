import { TestBed, inject } from '@angular/core/testing';

import { Movies.ServiceService } from './movies.service.service';

describe('Movies.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Movies.ServiceService]
    });
  });

  it('should be created', inject([Movies.ServiceService], (service: Movies.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
