import { Component } from '@angular/core';
import { QueryService } from '../query.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent {

  loading: boolean = false;

  constructor(
    private queryService: QueryService,
    private router: Router
  ) { }

 vote(choose: string){
   this.loading = true;
   this.queryService.putVote(choose).subscribe(
     result => {
      this.router.navigate(['/results']);
      this.loading = false;
     }
   );
 }

}
