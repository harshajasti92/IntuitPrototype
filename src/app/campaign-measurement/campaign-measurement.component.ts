import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
// import * as pluginAnnotations from 'chartjs-plugin-annotation';


@Component({
  selector: 'app-campaign-measurement',
  templateUrl: './campaign-measurement.component.html',
  styleUrls: ['./campaign-measurement.component.css']
})
export class CampaignMeasurementComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 77, null, null], lineTension: 0, label: 'Pre' },
    { data: [null,null,null, null, 77, 90, 95], lineTension: 0, label: 'Post' },
  ];
  public lineChart2Data: ChartDataSets[] = [
    { data: [45, 54, 49, 51, 67, 80, 85], lineTension: 0, label: 'Control' },
    { data: [65, 59, 80, 81, 77, 86, 94], lineTension: 0, label: 'Test' },
  ];
  public lineChartLabels: Label[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];
  public lineChartOptions = {
    plugins: {
      datalabels: {
        display: false,
        anchor: 'end',
        align: 'end',
      }
    },
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          ticks: {
             max : 100,
             min : 0,
           }
        },
      ]
    },
  };
public lineChartColors: Color[] = [
  { // grey
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: '#33B9F8',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#0074C0'
  },
  { // dark grey
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: '#0074C0',
    pointBackgroundColor: 'rgba(77,83,96,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#33B9F8'
  },
];

public lineChartColors2: Color[] = [
  { // grey
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: '#33B9F8',
    pointBackgroundColor: 'rgba(77,83,96,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#33B9F8'
  },
  { // dark grey
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: '#0074C0',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#0074C0'
  },
];

public lineChartLegend = true;
public lineChartType = 'line';
// public lineChartPlugins = [pluginAnnotations];

  total_campaigns = [{'campaign_name':'SuperBowl','clicks':'25%','visits':'1253','conversion':'81'},
                       {'campaign_name':'TurboTax','clicks':'34%','visits':'2765','conversion':'74'},
                       {'campaign_name':'QuickBooks','clicks':'43%','visits':'3246','conversion':'77'},
                       {'campaign_name':'Campaign 5','clicks':'86%','visits':'750','conversion':'85'},
                       {'campaign_name':'Campaign 8','clicks':'31%','visits':'2509','conversion':'68'},
                     ];

  public lineChartData1: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 77, null, null], lineTension: 0, label: 'Pre' },
    { data: [null,null,null, null, 77, 90, 95], lineTension: 0, label: 'Post' },
  ];

  public lineChartData2: ChartDataSets[] = [
    { data: [45, 59, 70, 81, 67, null, null], lineTension: 0, label: 'Pre' },
    { data: [null,null,null, null, 67, 79, 89], lineTension: 0, label: 'Post' },
  ];

  public lineChartData3: ChartDataSets[] = [
    { data: [55, 54, 60, 69, 67, null, null], lineTension: 0, label: 'Pre' },
    { data: [null,null,null, null, 67, 72, 87], lineTension: 0, label: 'Post' },
  ];

  public lineChartData4: ChartDataSets[] = [
    { data: [51, 59, 79, 81, 85, null, null], lineTension: 0, label: 'Pre' },
    { data: [null,null,null, null, 85, 90, 93], lineTension: 0, label: 'Post' },
  ];

  public lineChartData5: ChartDataSets[] = [
    { data: [69, 59, 70, 71, 81, null, null], lineTension: 0, label: 'Pre' },
    { data: [null,null,null, null, 81, 91, 97], lineTension: 0, label: 'Post' },
  ];

  public lineChart2Data1: ChartDataSets[] = [
    { data: [45, 54, 49, 51, 67, 80, 85], lineTension: 0, label: 'Control' },
    { data: [65, 59, 80, 81, 77, 86, 94], lineTension: 0, label: 'Test' },
  ];

  public lineChart2Data2: ChartDataSets[] = [
    { data: [45, 49, 60, 71, 77, 72, 74], lineTension: 0, label: 'Control' },
    { data: [55, 64, 69, 71, 87, 90, 95], lineTension: 0, label: 'Test' },
  ];

  public lineChart2Data3: ChartDataSets[] = [
    { data: [61, 59, 70, 71, 76, 76, 84], lineTension: 0, label: 'Control' },
    { data: [65, 71, 75, 74, 85, 91, 97], lineTension: 0, label: 'Test' },
  ];

  public lineChart2Data4: ChartDataSets[] = [
    { data: [35, 49, 50, 61, 67, 66, 64], lineTension: 0, label: 'Control' },
    { data: [75, 74, 79, 71, 77, 83, 85], lineTension: 0, label: 'Test' },
  ];

  public lineChart2Data5: ChartDataSets[] = [
    { data: [61, 69, 70, 71, 77, 76, 74], lineTension: 0, label: 'Control' },
    { data: [75, 74, 79, 81, 87, 88, 91], lineTension: 0, label: 'Test' },
  ];

  campaign_details="SuperBowl Campaign Details";
  currentCompany="SuperBowl";

  constructor() { }

  ngOnInit() {
  }

  changeData(campaign){
    // console.log(campaign);
    if(campaign.campaign_name == "SuperBowl"){
      this.campaign_details = "SuperBowl Campaign Details";
      this.currentCompany="SuperBowl";
      this.lineChartData = this.lineChartData1;
      this.lineChart2Data = this.lineChart2Data1;
    }
    if(campaign.campaign_name == "TurboTax"){
      this.campaign_details = "TurboTax Campaign Details";
      this.currentCompany="TurboTax";
      this.lineChartData = this.lineChartData2;
      this.lineChart2Data = this.lineChart2Data2;
    }
    if(campaign.campaign_name == "QuickBooks"){
      this.campaign_details = "QuickBooks Campaign Details";
      this.currentCompany="QuickBooks";
      this.lineChartData = this.lineChartData3;
      this.lineChart2Data = this.lineChart2Data3;
    }
    if(campaign.campaign_name == "Campaign 5"){
      this.campaign_details = "Campaign 5 Details";
      this.currentCompany="Campaign 5";
      this.lineChartData = this.lineChartData4;
      this.lineChart2Data = this.lineChart2Data4;
    }
    if(campaign.campaign_name == "Campaign 8"){
      this.campaign_details = "Campaign 8 Details";
      this.currentCompany="Campaign 8";
      this.lineChartData = this.lineChartData5;
      this.lineChart2Data = this.lineChart2Data5;
    }

  }

}
