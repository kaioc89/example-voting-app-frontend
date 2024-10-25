import { Component, OnInit } from '@angular/core';
import { VoteService } from '../../vote.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit{

  response:String = ""

  constructor(
    private voteService: VoteService
  ){

  }

  ngOnInit(): void {
      this.voteService.getResult().subscribe({
        next: response =>{
          console.log(response);
          this.response = response;
        }
      })
  }


}
