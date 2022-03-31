export enum ActionType  {
  ChangeCity = 'app/changeSity',
  SetOffersCount = 'app/setOffersCount',
}


export type ChangeCity = {
  type: ActionType;
  payload: string;
}

export type SetOffersCount = {
  type: ActionType;
  payload: number;
}


export type Actions = ChangeCity | SetOffersCount
