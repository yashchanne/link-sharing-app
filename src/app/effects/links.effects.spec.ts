import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LinksEffects } from './links.effects';

describe('LinksEffects', () => {
  let actions$: Observable<any>;
  let effects: LinksEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LinksEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(LinksEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
