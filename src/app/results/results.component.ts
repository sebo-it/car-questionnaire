import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';
import { Vote } from '../vote';
import { Router } from '@angular/router';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  loading: boolean = true;

  oldBmwObj: Vote;
  newBmwObj: Vote;

  constructor(
    private _queryService: QueryService,
    private router: Router
  ) { }

  ngOnInit() {
    this._queryService.getVotes().subscribe(
      result => {
        console.log('RESULTS: ', result);

        this.oldBmwObj = result[0];
        this.newBmwObj = result[1];
        console.log('stare bmw', this.oldBmwObj.count);
        console.log('nowe bmw', this.newBmwObj.count);
        this.loading = false;
      }
    );
  }


  goBack(){
    this.router.navigate(['/query']);
  }

}
