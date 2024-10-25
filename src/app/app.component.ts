import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { VoteService } from './vote.service';
import { VoteOption } from './vote-option';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'example-voting-app-frontend';

  constructor(
    private voteService: VoteService
  ){}

  ngOnInit(): void {
      this.voteService.sendVote(VoteOption.CAT).subscribe({
        next: response =>{
          console.log(response)
        }
      })
  }
}
