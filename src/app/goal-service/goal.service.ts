import { Injectable } from '@angular/core';
import { Goal } from '../goals';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return Goal
  }

  constructor() { }
}
