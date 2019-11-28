import { createAction, props } from '@ngrx/store';
export const increment = createAction(
    '[counter page] incremnet',
    props<{ operator: string; action: string }>()
);
export const decrement = createAction(
    '[counter page] decremnet',
    props<{ operator: string; action: string }>()
);
export const reset = createAction(
    '[counter page] reset',
    props<{ operator: string; action: string }>()
);
