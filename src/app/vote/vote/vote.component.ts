import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { VoteService } from '../../vote.service';
import { VoteOption } from '../../vote-option';


@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule
  ],
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.css'
})
export class VoteComponent {

  constructor(
    private voteService: VoteService,
    private snackBar: MatSnackBar
  ){

  }

  voteCat(){
    console.log("cat");
    this.voteService.sendVote(VoteOption.CAT).subscribe({
      next: response =>{
        console.log("ok - votou em cat")
      }, complete: () =>{
        this.snackBar.open("Votou em gato")
      }
    })
  }
  
  voteDog(){
    this.voteService.sendVote(VoteOption.DOG).subscribe({
      next: response =>{
        console.log("ok - votou em dog")
      }, complete: () =>{
        this.snackBar.open("Votou em cachorro")
      }
    })
  }

}
