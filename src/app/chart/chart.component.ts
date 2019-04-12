import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() oldBmwVotes: number;
  @Input() newBmwVotes: number;

  chart;

  constructor() { }

  ngOnInit() {
    this.formChart();
  }

  formChart(){
    console.log('old', this.oldBmwVotes, 'new', this.newBmwVotes);

    Chart.defaults.global.defaultFontSize = 18;

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Stare', 'Nowe'],
        datasets: [{
          label: 'Ilość głosów',
          data: [this.oldBmwVotes, this.newBmwVotes],
          backgroundColor: ['rgba(147,56,56,0.85)', 'rgba(42,176,237,0.85)'],
          borderWidth: 3,
          borderColor: 'gray',
          hoverBorderColor: '#CFD1D2'
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Stare BMW vs nowe',
          fontSize: '22'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              min: 0
            }
          }]
        }
      }
    });
    // this.loading = false;
  }

}
