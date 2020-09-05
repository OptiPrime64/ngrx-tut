import { Action } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';

const initialState: Tutorial = {
  name: 'Google',
  url: 'http://google.com'
}

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];

    // case TutorialActions.REMOVE_TUTORIAL:
    //   const newState: Tutorial[] = state;
    //   newState.splice(action.payload, 1);
    //   return newState;

    case TutorialActions.REMOVE_TUTORIAL:
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;

    default:
      return state;
  }
}
