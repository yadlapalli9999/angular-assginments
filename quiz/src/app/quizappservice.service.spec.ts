import { TestBed } from '@angular/core/testing';

import { QuizappserviceService } from './quizappservice.service';

describe('QuizappserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizappserviceService = TestBed.get(QuizappserviceService);
    expect(service).toBeTruthy();
  });
});
