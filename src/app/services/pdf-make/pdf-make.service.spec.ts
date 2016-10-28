/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PdfMakeService } from './pdf-make.service';

describe('Service: PdfMake', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PdfMakeService]
    });
  });

  it('should ...', inject([PdfMakeService], (service: PdfMakeService) => {
    expect(service).toBeTruthy();
  }));
});
