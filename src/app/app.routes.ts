import { Routes } from '@angular/router';
import { ResultComponent } from './result/result/result.component';
import { VoteComponent } from './vote/vote/vote.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'vote',
        pathMatch: 'full'
      },
      {
        path: 'vote',
        component: VoteComponent
      },
      {
        path: 'result',
        component: ResultComponent
      },
        
    
];
