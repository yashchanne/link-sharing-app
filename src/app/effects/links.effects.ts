import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HomeService } from '../services/home.service';
import * as linksActions from '../actions/links.actions';


@Injectable()
export class LinksEffects {

  addLink$ = createEffect(() => this.actions$.pipe(
    ofType(linksActions.addLink),
    mergeMap((data) => this.homeService.addLink(data.link)
      .pipe(
        map(link => (linksActions.addLinkSuccess({ link }))),
        catchError(() => EMPTY)
      ))
    )
  );

  loadLinks$ = createEffect(() => this.actions$.pipe(
    ofType(linksActions.getLinks),
    mergeMap((data) => this.homeService.getLinks(data.user)
      .pipe(
        map(links => (linksActions.getLinksSuccess({ links }))),
        catchError(() => EMPTY)
      ))
    )
  );

  editLink$ = createEffect(() => this.actions$.pipe(
    ofType(linksActions.editLink),
    mergeMap((data) => this.homeService.editLink(data.link, data.id)
      .pipe(
        map(link => (linksActions.editLinkSuccess({ link }))),
        catchError(() => EMPTY)
      ))
    )
  );

  deleteLink$ = createEffect(() => this.actions$.pipe(
    ofType(linksActions.deleteLink),
    mergeMap((data) => this.homeService.deleteLink(data.id)
      .pipe(
        map(() => (linksActions.deleteLinkSuccess({ id: data.id }))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private homeService: HomeService
  ) {}

}
