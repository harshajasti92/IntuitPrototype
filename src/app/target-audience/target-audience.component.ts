import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

export interface PeriodicElement {
  age_group: number;
  consumer: string;
  comparison: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {age_group: 1, consumer: 'Hydrogen', comparison: 1.0079},
  {age_group: 2, consumer: 'Helium', comparison: 4.0026},
  {age_group: 3, consumer: 'Lithium', comparison: 6.941},
  {age_group: 4, consumer: 'Beryllium', comparison: 9.0122},
  {age_group: 5, consumer: 'Boron', comparison: 10.811},
  {age_group: 6, consumer: 'Carbon', comparison: 12.0107},
  {age_group: 7, consumer: 'Nitrogen', comparison: 14.0067},
];



@Component({
  selector: 'app-target-audience',
  templateUrl: './target-audience.component.html',
  styleUrls: ['./target-audience.component.css']
})
export class TargetAudienceComponent implements OnInit {

  displayedColumns: string[] = ['age_group', 'consumer', 'comparison'];
  dataSource = ELEMENT_DATA;

  public barChartOptions: ChartOptions = {
    scales : {
      xAxes: [{
       ticks: {
         min: 0,
          max : 100,
        }
      }]
    },
    responsive: true,
    maintainAspectRatio: false,
    // scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Women', 'Men'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [24.5, 75.3], label: 'Selected Segment' },
    { data: [32.2, 67.2], label: 'Population' }
  ];

  public barChartData2: ChartDataSets[] = [
    { data: [14.5, 85.3], label: 'Selected Segment' },
    { data: [42.2, 57.2], label: 'Population' }
  ];

  public barChartData3: ChartDataSets[] = [
    { data: [34.5, 65.3], label: 'Selected Segment' },
    { data: [22.2, 77.2], label: 'Population' }
  ];

  public barChartData4: ChartDataSets[] = [
    { data: [44.5, 55.3], label: 'Selected Segment' },
    { data: [46.2, 54.2], label: 'Population' }
  ];

  public barChartOptions1: ChartOptions = {
    scales : {
      xAxes: [{
       ticks: {
          max : 100,
        }
      }]
    },
    responsive: true,
    maintainAspectRatio: false,
    // scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels1: Label[] = ['18+', '25-34', '35-44', '45-54', '55-64', '65+'];
  public barChartType1: ChartType = 'horizontalBar';
  public barChartLegend1 = true;
  public barChartPlugins1 = [pluginDataLabels];
  public barChartColors = [
    { backgroundColor: '#0074C0' },
    { backgroundColor: '#33B9F8' },
  ];

  public barChart1Data: ChartDataSets[] = [
    { data: [1, 9, 35, 38, 14, 2], label: 'Selected Segment' },
    { data: [3, 20, 38, 27, 11, 2], label: 'Population' }
  ];

  public barChart1Data2: ChartDataSets[] = [
    { data: [2, 11, 27, 18, 24, 2], label: 'Selected Segment' },
    { data: [6, 25, 34, 27, 19, 4], label: 'Population' }
  ];

  public barChart1Data3: ChartDataSets[] = [
    { data: [3, 19, 25, 25, 17, 4], label: 'Selected Segment' },
    { data: [5, 29, 36, 24, 10, 7], label: 'Population' }
  ];

  public barChart1Data4: ChartDataSets[] = [
    { data: [1, 8, 29, 29, 13, 3], label: 'Selected Segment' },
    { data: [4, 22, 35, 37, 9, 4], label: 'Population' }
  ];

  public consumer_data = [{'metric':'Purchase Freq','total':'4.4','footwear':'3.6','apparel':'3.0','equipment':'1.9'},
                          {'metric':'Buyers','total':'19.1k','footwear':'15.7k','apparel':'10.8k','equipment':'4.7k'},
                          {'metric':'Orders','total':'84.9k','footwear':'56.6k','apparel':'32.7k','equipment':'8.7k'},
                          {'metric':'Units','total':'147.2k','footwear':'68.2k','apparel':'65.6k','equipment':'13.1k'},
                          {'metric':'Demand','total':'11.2M','footwear':'7.9M','apparel':'2.9M','equipment':'397.3k'},
                          {'metric':'AOV','total':'132','footwear':'139','apparel':'89','equipment':'46'},
                          {'metric':'UPT','total':'1.7','footwear':'1.2','apparel':'2.0','equipment':'1.5'}]

  public consumer_data1 = [{'metric':'Purchase Freq','total':'3.1','footwear':'2.7','apparel':'2.3','equipment':'1.6'},
                          {'metric':'Buyers','total':'367.8k','footwear':'293.8k','apparel':'166.0k','equipment':'62.1k'},
                          {'metric':'Orders','total':'1.1M','footwear':'802.7k','apparel':'388.9k','equipment':'99.4k'},
                          {'metric':'Units','total':'1.9M','footwear':'982.3k','apparel':'795.5k','equipment':'149.1k'},
                          {'metric':'Demand','total':'147.5M','footwear':'107.6M','apparel':'34.8M','equipment':'4.8M'},
                          {'metric':'AOV','total':'129','footwear':'134','apparel':'90','equipment':'48'},
                          {'metric':'UPT','total':'1.7','footwear':'1.2','apparel':'2.0','equipment':'1.5'}];


  purchaseFreq_first = 110;
  purchaseFreq_second = 236;
  aov_first = 117;
  aov_second = 248;
  preDefined=false;
  custom=false;
  buyers=true;
  activeNonBuyers=false;
  nonActive=false;
  graphOneHeading = "Buyers";
  graphTwoHeading = "Buyers";

  public form = {
    checkbox: {
      one: true,
      two: true,
      three: true,
      four: true,
      five: true,
      six: true,
    },
    gender:{
      male: true,
      female: true,
    }
  };
  radioSelected;
  data1=[];
  data2=[];

  constructor() { }

  ngOnInit() {
    this.radioSelected = 1;
  }

  onItemChange(event){
    this.radioSelected = event;
    console.log(event);
  }

  preDefinedClick(){
    this.preDefined = !this.preDefined;
    this.custom = false;
  }

  customClick(){
    this.preDefined = false;
    this.custom = !this.custom;
    this.graphOneHeading = "CUSTOM SPECS";
    this.graphTwoHeading = "CUSTOM SPECS";
    console.log(this.form);
    console.log(this.radioSelected);
    this.purchaseFreq_first = Math.floor(Math.random() * (150 - 100 + 1) + 100);
    this.purchaseFreq_second = Math.floor(Math.random() * (300 - 200 + 1) + 200);
    this.aov_first = Math.floor(Math.random() * (180 - 100 + 1) + 100);
    this.aov_second = Math.floor(Math.random() * (350 - 300 + 1) + 300);

    if(this.form.gender.male && this.form.gender.female){
      this.barChartLabels = ['Women', 'Men'];
      this.barChartData = [
        { data: [Math.floor(Math.random() * (45 - 15 + 1) + 15), Math.floor(Math.random() * (45 - 15 + 1) + 15)], label: 'Selected Segment' },
        { data: [Math.floor(Math.random() * (75 - 45 + 1) + 45), Math.floor(Math.random() * (75 - 45 + 1) + 45)], label: 'Population' }
      ];
    }
    if(this.form.gender.male && !this.form.gender.female){
      this.barChartLabels = ['Men'];
      this.barChartData = [
        { data: [Math.floor(Math.random() * (45 - 15 + 1) + 15)], label: 'Selected Segment' },
        { data: [Math.floor(Math.random() * (65 - 45 + 1) + 45)], label: 'Population' }
      ];
    }
    if(this.form.gender.female && !this.form.gender.male){
      this.barChartLabels = ['Women'];
      this.barChartData = [
        { data: [Math.floor(Math.random() * (45 - 15 + 1) + 15)], label: 'Selected Segment' },
        { data: [Math.floor(Math.random() * (65 - 45 + 1) + 45)], label: 'Population' }
      ];
    }
    if(!this.form.gender.female && !this.form.gender.male){
      this.barChartLabels = [];
      this.barChartData = [];
    }

    // public barChartLabels1: Label[] = ['18+', '25-34', '35-44', '45-54', '55-64', '65+'];
    this.barChartLabels1 = ['18+', '25-34', '35-44', '45-54', '55-64', '65+'];
    this.data1=[];
    this.data2=[];

    if(!this.form.checkbox.one){
      for(var i in this.barChartLabels1){
        if(this.barChartLabels1[i]=='18+'){
          this.barChartLabels1.splice(+i,1);
          break;
        }
      }
    }
    if(!this.form.checkbox.two){
      for(var i in this.barChartLabels1){
        if(this.barChartLabels1[i]=='25-34'){
          this.barChartLabels1.splice(+i,1);
          break;
        }
      }
    }
    if(!this.form.checkbox.three){
      for(var i in this.barChartLabels1){
        if(this.barChartLabels1[i]=='35-44'){
          this.barChartLabels1.splice(+i,1);
          break;
        }
      }
    }
    if(!this.form.checkbox.four){
      for(var i in this.barChartLabels1){
        if(this.barChartLabels1[i]=='45-54'){
          this.barChartLabels1.splice(+i,1);
          break;
        }
      }
    }
    if(!this.form.checkbox.five){
      for(var i in this.barChartLabels1){
        if(this.barChartLabels1[i]=='55-64'){
          this.barChartLabels1.splice(+i,1);
          break;
        }
      }
    }
    if(!this.form.checkbox.six){
      for(var i in this.barChartLabels1){
        if(this.barChartLabels1[i]=='65+'){
          this.barChartLabels1.splice(+i,1);
          break;
        }
      }
    }
    console.log(this.barChartLabels1.length);
    for (var j = 0; j < this.barChartLabels1.length; j++) {
      if(j<4){
        this.data1.push(Math.floor(Math.random() * (10*j - 2 + 1) + 2));
        this.data2.push(Math.floor(Math.random() * (20*j - 4 + 1) + 4));
      }
      else{
        this.data1.push(Math.floor(Math.random() * (20*j - 4 + 1) + 4));
        this.data2.push(Math.floor(Math.random() * (10*j - 2 + 1) + 2));
      }
    }
    this.barChart1Data = [
      { data: this.data1, label: 'Selected Segment' },
      { data: this.data2, label: 'Population' }
    ];
    console.log(this.data1);
    console.log(this.data2);
    // public barChart1Data3: ChartDataSets[] = [
    //   { data: [3, 19, 25, 25, 17, 4], label: 'Selected Segment' },
    //   { data: [5, 29, 36, 24, 10, 7], label: 'Population' }
    // ];


    // this.barChartData = ['Women', 'Men'];
    // this.barChartData = [
    //   { data: [44.5, 55.3], label: 'Selected Segment' },
    //   { data: [46.2, 54.2], label: 'Population' }
    // ];

  }

  buyersClick(){
    this.buyers = true;
    this.activeNonBuyers = false;
    this.nonActive = false;
    this.barChartData = this.barChartData2;
    this.barChart1Data = this.barChart1Data2;
    this.graphOneHeading = "BUYERS";
    this.graphTwoHeading = "BUYERS";
    this.purchaseFreq_first = 110;
    this.purchaseFreq_second = 236;
    this.aov_first = 117;
    this.aov_second = 248;
  }

  activeNonBuyersClick(){
    this.buyers = false;
    this.activeNonBuyers = true;
    this.nonActive = false;
    this.barChartData = this.barChartData3;
    this.barChart1Data = this.barChart1Data3;
    this.graphOneHeading = "ACTIVE NON BUYERS";
    this.graphTwoHeading = "ACTIVE NON BUYERS";
    this.purchaseFreq_first = 170;
    this.purchaseFreq_second = 336;
    this.aov_first = 167;
    this.aov_second = 348;
  }

  nonActiveClick(){
    this.buyers = false;
    this.activeNonBuyers = false;
    this.nonActive = true;
    this.barChartData = this.barChartData4;
    this.barChart1Data = this.barChart1Data4;
    this.graphOneHeading = "NON ACTIVE USERS";
    this.graphTwoHeading = "NON ACTIVE USERS";
    this.purchaseFreq_first = 212;
    this.purchaseFreq_second = 448;
    this.aov_first = 214;
    this.aov_second = 349;
  }

}
