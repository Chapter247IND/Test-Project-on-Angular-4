import { Component } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './position.component.html',
  styleUrls: []
})
export class PositionComponent {
	private tabs: Array<any> = [];
  	private allData: Array<any> = [];
  	private dealData: Array<any> = [];
  	private dealDetails: Array<any> = [];
  	private dropDownValue: Array<any> = [];
  	private isDealSelected: boolean = false;
  	private selectedIndex: number;
  	private selectedDeal: string = '';

	constructor(){
		this.getDealData();
	}
	getDealData(){
		this.tabs = [
			{
				name: "By Master Account",
				data: [
					{
						name: 'By Master JPM Chase',
						value: 'jpm',
						data: [
							{
								deal:"By Master Priceline Co 2017/Term Loan A",
								share: "400,000.00",
								details:{
									data: [
										{
											activity:"By Master Primary Trade",
											postDate: "25/11/2016",
											effectiveDate:"25/11/2016",
											amount: "600,000.00"
										},
										{
											activity:"By Master CMT Decrease",
											postDate: "17/10/2017",
											effectiveDate:"17/10/2017",
											amount: "200,000.00"
										}
									]
								}
							},
							{
								deal:"By Master Expedia 2015/Revolver",
								share: "5,000,000.00",
								details:{
									data: [
										{
											activity:"By Master Primary Trade",
											postDate: "5/1/2015",
											effectiveDate:"5/1/2015",
											amount: "10,000,000.00"
										},
										{
											activity:"By Master CMT Decrease",
											postDate: "7/10/2017",
											effectiveDate:"7/10/2017",
											amount: "5,000,000.00"
										}
									]
								}
							},
							{
								deal:"By Master Home Deopt/Term C",
								share: "650,000.00",
								details:{
									data: [
										{
											activity:"By Master Primary Trade",
											postDate: "15/10/2016",
											effectiveDate:"15/10/2016",
											amount: "100,000.00"
										},
										{
											activity:"By Master CMT Decrease",
											postDate: "17/1/2017",
											effectiveDate:"17/1/2017",
											amount: "350,000.00"
										}
									]
								}
							}
						]
					},
					{
						name: 'By Master JPM Chase 1',
						value: 'jpm1',
						data: [
							{
								deal:"By Master Priceline Co 2017/Term Loan A",
								share: "400,000.00",
								details:{
									data: [
										{
											activity:"By Master Primary Trade",
											postDate: "25/11/2016",
											effectiveDate:"25/11/2016",
											amount: "600,000.00"
										},
										{
											activity:"By Master CMT Decrease",
											postDate: "17/10/2017",
											effectiveDate:"17/10/2017",
											amount: "200,000.00"
										}
									]
								}
							},
							{
								deal:"By Master Expedia 2015/Revolver",
								share: "5,000,000.00",
								details:{
									data: [
										{
											activity:"By Master Primary Trade",
											postDate: "5/1/2015",
											effectiveDate:"5/1/2015",
											amount: "10,000,000.00"
										},
										{
											activity:"By Master CMT Decrease",
											postDate: "7/10/2017",
											effectiveDate:"7/10/2017",
											amount: "5,000,000.00"
										}
									]
								}
							},
							{
								deal:"By Master Home Deopt/Term C",
								share: "650,000.00",
								details:{
									data: [
										{
											activity:"By Master Primary Trade",
											postDate: "15/10/2016",
											effectiveDate:"15/10/2016",
											amount: "100,000.00"
										},
										{
											activity:"By Master CMT Decrease",
											postDate: "17/1/2017",
											effectiveDate:"17/1/2017",
											amount: "350,000.00"
										}
									]
								}
							}
						]
					},
					{
						name: 'By Master JPM Chase 2',
						value: 'jpm2',
						data: [
							{
								deal:"By Master Priceline Co 2017/Term Loan A 2",
								share: "400,000.00",
								details:{
									data: [
										{
											activity:"By Master Primary Trade 2",
											postDate: "25/11/2016",
											effectiveDate:"25/11/2016",
											amount: "600,000.00"
										},
										{
											activity:"By Master CMT Decrease 2",
											postDate: "17/10/2017",
											effectiveDate:"17/10/2017",
											amount: "200,000.00"
										}
									]
								}
							},
							{
								deal:"By Master Expedia 2015/Revolver 2",
								share: "5,000,000.00",
								details:{
									data: [
										{
											activity:"By Master Primary Trade 2",
											postDate: "5/1/2015",
											effectiveDate:"5/1/2015",
											amount: "10,000,000.00"
										},
										{
											activity:"By Master CMT Decrease 2",
											postDate: "7/10/2017",
											effectiveDate:"7/10/2017",
											amount: "5,000,000.00"
										}
									]
								}
							},
							{
								deal:"By Master Home Deopt/Term C 2",
								share: "650,000.00",
								details:{
									data: [
										{
											activity:"By Master Primary Trade 2",
											postDate: "15/10/2016",
											effectiveDate:"15/10/2016",
											amount: "100,000.00"
										},
										{
											activity:"By Master CMT Decrease 2",
											postDate: "17/1/2017",
											effectiveDate:"17/1/2017",
											amount: "350,000.00"
										}
									]
								}
							}
						]
					},
					{
						name: 'By Master JPM Chase 3',
						value: 'jpm3',
						data: [
							{
								deal:"By Master Priceline Co 2017/Term Loan A 3",
								share: "400,000.00",
								details:{
									data: [
										{
											activity:"By Master Primary Trade 3",
											postDate: "25/11/2016",
											effectiveDate:"25/11/2016",
											amount: "600,000.00"
										},
										{
											activity:"By Master CMT Decrease 3",
											postDate: "17/10/2017",
											effectiveDate:"17/10/2017",
											amount: "200,000.00"
										}
									]
								}
							},
							{
								deal:"By Master Expedia 2015/Revolver 3",
								share: "5,000,000.00",
								details:{
									data: [
										{
											activity:"By Master Primary Trade 3",
											postDate: "5/1/2015",
											effectiveDate:"5/1/2015 3",
											amount: "10,000,000.00"
										},
										{
											activity:"By Master CMT Decrease 3",
											postDate: "7/10/2017",
											effectiveDate:"7/10/2017",
											amount: "5,000,000.00"
										}
									]
								}
							},
							{
								deal:"By Master Home Deopt/Term C 3",
								share: "650,000.00",
								details:{
									data: [
										{
											activity:"By Master Primary Trade 3",
											postDate: "15/10/2016",
											effectiveDate:"15/10/2016",
											amount: "100,000.00"
										},
										{
											activity:"By Master CMT Decrease 3",
											postDate: "17/1/2017",
											effectiveDate:"17/1/2017",
											amount: "350,000.00"
										}
									]
								}
							}
						]
					},
					{
						name: 'By Master JPM Chase 4',
						value: 'jpm 4',
						data: [
							{
								deal:"By Master Priceline Co 2017/Term Loan A 4",
								share: "400,000.00",
								details:{
									data: [
										{
											activity:"By Master Primary Trade 4",
											postDate: "25/11/2016",
											effectiveDate:"25/11/2016",
											amount: "600,000.00"
										},
										{
											activity:"By Master CMT Decrease 4",
											postDate: "17/10/2017",
											effectiveDate:"17/10/2017",
											amount: "200,000.00"
										}
									]
								}
							},
							{
								deal:"By Master Expedia 2015/Revolver 4",
								share: "5,000,000.00",
								details:{
									data: [
										{
											activity:"By Master Primary Trade 4",
											postDate: "5/1/2015",
											effectiveDate:"5/1/2015",
											amount: "10,000,000.00"
										},
										{
											activity:"By Master CMT Decrease 4",
											postDate: "7/10/2017",
											effectiveDate:"7/10/2017",
											amount: "5,000,000.00"
										}
									]
								}
							},
							{
								deal:"By Master Home Deopt/Term C 4",
								share: "650,000.00",
								details:{
									data: [
										{
											activity:"By Master Primary Trade 4",
											postDate: "15/10/2016",
											effectiveDate:"15/10/2016",
											amount: "100,000.00"
										},
										{
											activity:"By Master CMT Decrease",
											postDate: "17/1/2017",
											effectiveDate:"17/1/2017",
											amount: "350,000.00"
										}
									]
								}
							}
						]
					}
				]
			},
			{
				name: "By Sub Account",
				data: [
					{
						name: 'By Sub Account JPM Chase',
						value: 'jpm',
						data: [
							{
								deal:"By Sub Account Priceline Co 2017/Term Loan A",
								share: "400,000.00",
								details:{
									data: [
										{
											activity:"By Sub Account Primary Trade",
											postDate: "25/11/2016",
											effectiveDate:"25/11/2016",
											amount: "600,000.00"
										},
										{
											activity:"By Sub Account CMT Decrease",
											postDate: "17/10/2017",
											effectiveDate:"17/10/2017",
											amount: "200,000.00"
										}
									]
								}
							},
							{
								deal:"By Sub Account Expedia 2015/Revolver",
								share: "5,000,000.00",
								details:{
									data: [
										{
											activity:"By Sub Account Primary Trade",
											postDate: "5/1/2015",
											effectiveDate:"5/1/2015",
											amount: "10,000,000.00"
										},
										{
											activity:"By Sub Account CMT Decrease",
											postDate: "7/10/2017",
											effectiveDate:"7/10/2017",
											amount: "5,000,000.00"
										}
									]
								}
							},
							{
								deal:"By Sub Account Home Deopt/Term C",
								share: "650,000.00",
								details:{
									data: [
										{
											activity:"By Sub Account Primary Trade",
											postDate: "15/10/2016",
											effectiveDate:"15/10/2016",
											amount: "100,000.00"
										},
										{
											activity:"By Sub Account CMT Decrease",
											postDate: "17/1/2017",
											effectiveDate:"17/1/2017",
											amount: "350,000.00"
										}
									]
								}
							}
						]
					},
					{
						name: 'By Sub Account JPM Chase 1',
						value: 'jpm1',
						data: [
							{
								deal:"By Sub Account Priceline Co 2017/Term Loan A",
								share: "400,000.00",
								details:{
									data: [
										{
											activity:"By Sub Account Primary Trade",
											postDate: "25/11/2016",
											effectiveDate:"25/11/2016",
											amount: "600,000.00"
										},
										{
											activity:"By Sub Account CMT Decrease",
											postDate: "17/10/2017",
											effectiveDate:"17/10/2017",
											amount: "200,000.00"
										}
									]
								}
							},
							{
								deal:"By Sub Account Expedia 2015/Revolver",
								share: "5,000,000.00",
								details:{
									data: [
										{
											activity:"By Sub Account Primary Trade",
											postDate: "5/1/2015",
											effectiveDate:"5/1/2015",
											amount: "10,000,000.00"
										},
										{
											activity:"By Sub Account CMT Decrease",
											postDate: "7/10/2017",
											effectiveDate:"7/10/2017",
											amount: "5,000,000.00"
										}
									]
								}
							},
							{
								deal:"By Sub Account Home Deopt/Term C",
								share: "650,000.00",
								details:{
									data: [
										{
											activity:"By Sub Account Primary Trade",
											postDate: "15/10/2016",
											effectiveDate:"15/10/2016",
											amount: "100,000.00"
										},
										{
											activity:"By Sub Account CMT Decrease",
											postDate: "17/1/2017",
											effectiveDate:"17/1/2017",
											amount: "350,000.00"
										}
									]
								}
							}
						]
					},
					{
						name: 'By Sub Account JPM Chase 2',
						value: 'jpm2',
						data: [
							{
								deal:"By Sub Account Priceline Co 2017/Term Loan A 2",
								share: "400,000.00",
								details:{
									data: [
										{
											activity:"By Sub Account Primary Trade 2",
											postDate: "25/11/2016",
											effectiveDate:"25/11/2016",
											amount: "600,000.00"
										},
										{
											activity:"By Sub Account CMT Decrease 2",
											postDate: "17/10/2017",
											effectiveDate:"17/10/2017",
											amount: "200,000.00"
										}
									]
								}
							},
							{
								deal:"By Sub Account Expedia 2015/Revolver 2",
								share: "5,000,000.00",
								details:{
									data: [
										{
											activity:"By Sub Account Primary Trade 2",
											postDate: "5/1/2015",
											effectiveDate:"5/1/2015",
											amount: "10,000,000.00"
										},
										{
											activity:"By Sub Account CMT Decrease 2",
											postDate: "7/10/2017",
											effectiveDate:"7/10/2017",
											amount: "5,000,000.00"
										}
									]
								}
							},
							{
								deal:"By Sub Account Home Deopt/Term C 2",
								share: "650,000.00",
								details:{
									data: [
										{
											activity:"By Sub Account Primary Trade 2",
											postDate: "15/10/2016",
											effectiveDate:"15/10/2016",
											amount: "100,000.00"
										},
										{
											activity:"By Sub Account CMT Decrease 2",
											postDate: "17/1/2017",
											effectiveDate:"17/1/2017",
											amount: "350,000.00"
										}
									]
								}
							}
						]
					},
					{
						name: 'By Sub Account JPM Chase 3',
						value: 'jpm3',
						data: [
							{
								deal:"By Sub Account Priceline Co 2017/Term Loan A 3",
								share: "400,000.00",
								details:{
									data: [
										{
											activity:"By Sub Account Primary Trade 3",
											postDate: "25/11/2016",
											effectiveDate:"25/11/2016",
											amount: "600,000.00"
										},
										{
											activity:"By Sub Account CMT Decrease 3",
											postDate: "17/10/2017",
											effectiveDate:"17/10/2017",
											amount: "200,000.00"
										}
									]
								}
							},
							{
								deal:"By Sub Account Expedia 2015/Revolver 3",
								share: "5,000,000.00",
								details:{
									data: [
										{
											activity:"By Sub Account Primary Trade 3",
											postDate: "5/1/2015",
											effectiveDate:"5/1/2015 3",
											amount: "10,000,000.00"
										},
										{
											activity:"By Sub Account CMT Decrease 3",
											postDate: "7/10/2017",
											effectiveDate:"7/10/2017",
											amount: "5,000,000.00"
										}
									]
								}
							},
							{
								deal:"By Sub Account Home Deopt/Term C 3",
								share: "650,000.00",
								details:{
									data: [
										{
											activity:"By Sub Account Primary Trade 3",
											postDate: "15/10/2016",
											effectiveDate:"15/10/2016",
											amount: "100,000.00"
										},
										{
											activity:"By Sub Account CMT Decrease 3",
											postDate: "17/1/2017",
											effectiveDate:"17/1/2017",
											amount: "350,000.00"
										}
									]
								}
							}
						]
					},
					{
						name: 'By Sub Account JPM Chase 4',
						value: 'jpm 4',
						data: [
							{
								deal:"By Sub Account Priceline Co 2017/Term Loan A 4",
								share: "400,000.00",
								details:{
									data: [
										{
											activity:"By Sub Account Primary Trade 4",
											postDate: "25/11/2016",
											effectiveDate:"25/11/2016",
											amount: "600,000.00"
										},
										{
											activity:"By Sub Account CMT Decrease 4",
											postDate: "17/10/2017",
											effectiveDate:"17/10/2017",
											amount: "200,000.00"
										}
									]
								}
							},
							{
								deal:"By Sub Account Expedia 2015/Revolver 4",
								share: "5,000,000.00",
								details:{
									data: [
										{
											activity:"By Sub Account Primary Trade 4",
											postDate: "5/1/2015",
											effectiveDate:"5/1/2015",
											amount: "10,000,000.00"
										},
										{
											activity:"By Sub Account CMT Decrease 4",
											postDate: "7/10/2017",
											effectiveDate:"7/10/2017",
											amount: "5,000,000.00"
										}
									]
								}
							},
							{
								deal:"By Sub Account Home Deopt/Term C 4",
								share: "650,000.00",
								details:{
									data: [
										{
											activity:"By Sub Account Primary Trade 4",
											postDate: "15/10/2016",
											effectiveDate:"15/10/2016",
											amount: "100,000.00"
										},
										{
											activity:"By Sub Account CMT Decrease",
											postDate: "17/1/2017",
											effectiveDate:"17/1/2017",
											amount: "350,000.00"
										}
									]
								}
							}
						]
					}
				]
			},
			{
				name: "By Deal",
				data: [
					{
						name: 'By Deal JPM Chase',
						value: 'jpm',
						data: [
							{
								deal:"By Deal Priceline Co 2017/Term Loan A",
								share: "400,000.00",
								details:{
									data: [
										{
											activity:"By Deal Primary Trade",
											postDate: "25/11/2016",
											effectiveDate:"25/11/2016",
											amount: "600,000.00"
										},
										{
											activity:"By Deal CMT Decrease",
											postDate: "17/10/2017",
											effectiveDate:"17/10/2017",
											amount: "200,000.00"
										}
									]
								}
							},
							{
								deal:"By Deal Expedia 2015/Revolver",
								share: "5,000,000.00",
								details:{
									data: [
										{
											activity:"By Deal Primary Trade",
											postDate: "5/1/2015",
											effectiveDate:"5/1/2015",
											amount: "10,000,000.00"
										},
										{
											activity:"By Deal CMT Decrease",
											postDate: "7/10/2017",
											effectiveDate:"7/10/2017",
											amount: "5,000,000.00"
										}
									]
								}
							},
							{
								deal:"By Deal Home Deopt/Term C",
								share: "650,000.00",
								details:{
									data: [
										{
											activity:"By Deal Primary Trade",
											postDate: "15/10/2016",
											effectiveDate:"15/10/2016",
											amount: "100,000.00"
										},
										{
											activity:"By Deal CMT Decrease",
											postDate: "17/1/2017",
											effectiveDate:"17/1/2017",
											amount: "350,000.00"
										}
									]
								}
							}
						]
					},
					{
						name: 'By Deal JPM Chase 1',
						value: 'jpm1',
						data: [
							{
								deal:"By Deal Priceline Co 2017/Term Loan A",
								share: "400,000.00",
								details:{
									data: [
										{
											activity:"By Deal Primary Trade",
											postDate: "25/11/2016",
											effectiveDate:"25/11/2016",
											amount: "600,000.00"
										},
										{
											activity:"By Deal CMT Decrease",
											postDate: "17/10/2017",
											effectiveDate:"17/10/2017",
											amount: "200,000.00"
										}
									]
								}
							},
							{
								deal:"By Deal Expedia 2015/Revolver",
								share: "5,000,000.00",
								details:{
									data: [
										{
											activity:"By Deal Primary Trade",
											postDate: "5/1/2015",
											effectiveDate:"5/1/2015",
											amount: "10,000,000.00"
										},
										{
											activity:"By Deal CMT Decrease",
											postDate: "7/10/2017",
											effectiveDate:"7/10/2017",
											amount: "5,000,000.00"
										}
									]
								}
							},
							{
								deal:"By Deal Home Deopt/Term C",
								share: "650,000.00",
								details:{
									data: [
										{
											activity:"By Deal Primary Trade",
											postDate: "15/10/2016",
											effectiveDate:"15/10/2016",
											amount: "100,000.00"
										},
										{
											activity:"By Deal CMT Decrease",
											postDate: "17/1/2017",
											effectiveDate:"17/1/2017",
											amount: "350,000.00"
										}
									]
								}
							}
						]
					},
					{
						name: 'By Deal JPM Chase 2',
						value: 'jpm2',
						data: [
							{
								deal:"By Deal Priceline Co 2017/Term Loan A 2",
								share: "400,000.00",
								details:{
									data: [
										{
											activity:"By Deal Primary Trade 2",
											postDate: "25/11/2016",
											effectiveDate:"25/11/2016",
											amount: "600,000.00"
										},
										{
											activity:"By Deal CMT Decrease 2",
											postDate: "17/10/2017",
											effectiveDate:"17/10/2017",
											amount: "200,000.00"
										}
									]
								}
							},
							{
								deal:"By Deal Expedia 2015/Revolver 2",
								share: "5,000,000.00",
								details:{
									data: [
										{
											activity:"By Deal Primary Trade 2",
											postDate: "5/1/2015",
											effectiveDate:"5/1/2015",
											amount: "10,000,000.00"
										},
										{
											activity:"By Deal CMT Decrease 2",
											postDate: "7/10/2017",
											effectiveDate:"7/10/2017",
											amount: "5,000,000.00"
										}
									]
								}
							},
							{
								deal:"By Deal Home Deopt/Term C 2",
								share: "650,000.00",
								details:{
									data: [
										{
											activity:"By Deal Primary Trade 2",
											postDate: "15/10/2016",
											effectiveDate:"15/10/2016",
											amount: "100,000.00"
										},
										{
											activity:"By Deal CMT Decrease 2",
											postDate: "17/1/2017",
											effectiveDate:"17/1/2017",
											amount: "350,000.00"
										}
									]
								}
							}
						]
					},
					{
						name: 'By Deal JPM Chase 3',
						value: 'jpm3',
						data: [
							{
								deal:"By Deal Priceline Co 2017/Term Loan A 3",
								share: "400,000.00",
								details:{
									data: [
										{
											activity:"By Deal Primary Trade 3",
											postDate: "25/11/2016",
											effectiveDate:"25/11/2016",
											amount: "600,000.00"
										},
										{
											activity:"By Deal CMT Decrease 3",
											postDate: "17/10/2017",
											effectiveDate:"17/10/2017",
											amount: "200,000.00"
										}
									]
								}
							},
							{
								deal:"By Deal Expedia 2015/Revolver 3",
								share: "5,000,000.00",
								details:{
									data: [
										{
											activity:"By Deal Primary Trade 3",
											postDate: "5/1/2015",
											effectiveDate:"5/1/2015 3",
											amount: "10,000,000.00"
										},
										{
											activity:"By Deal CMT Decrease 3",
											postDate: "7/10/2017",
											effectiveDate:"7/10/2017",
											amount: "5,000,000.00"
										}
									]
								}
							},
							{
								deal:"By Deal Home Deopt/Term C 3",
								share: "650,000.00",
								details:{
									data: [
										{
											activity:"By Deal Primary Trade 3",
											postDate: "15/10/2016",
											effectiveDate:"15/10/2016",
											amount: "100,000.00"
										},
										{
											activity:"By Deal CMT Decrease 3",
											postDate: "17/1/2017",
											effectiveDate:"17/1/2017",
											amount: "350,000.00"
										}
									]
								}
							}
						]
					},
					{
						name: 'By Deal JPM Chase 4',
						value: 'jpm 4',
						data: [
							{
								deal:"By Deal Priceline Co 2017/Term Loan A 4",
								share: "400,000.00",
								details:{
									data: [
										{
											activity:"By Deal Primary Trade 4",
											postDate: "25/11/2016",
											effectiveDate:"25/11/2016",
											amount: "600,000.00"
										},
										{
											activity:"By Deal CMT Decrease 4",
											postDate: "17/10/2017",
											effectiveDate:"17/10/2017",
											amount: "200,000.00"
										}
									]
								}
							},
							{
								deal:"By Deal Expedia 2015/Revolver 4",
								share: "5,000,000.00",
								details:{
									data: [
										{
											activity:"By Deal Primary Trade 4",
											postDate: "5/1/2015",
											effectiveDate:"5/1/2015",
											amount: "10,000,000.00"
										},
										{
											activity:"By Deal CMT Decrease 4",
											postDate: "7/10/2017",
											effectiveDate:"7/10/2017",
											amount: "5,000,000.00"
										}
									]
								}
							},
							{
								deal:"By Deal Home Deopt/Term C 4",
								share: "650,000.00",
								details:{
									data: [
										{
											activity:"By Deal Primary Trade 4",
											postDate: "15/10/2016",
											effectiveDate:"15/10/2016",
											amount: "100,000.00"
										},
										{
											activity:"By Deal CMT Decrease",
											postDate: "17/1/2017",
											effectiveDate:"17/1/2017",
											amount: "350,000.00"
										}
									]
								}
							}
						]
					}
				]
			}
		];
		this.allData = (this.tabs[0] && this.tabs[0].data) ? this.tabs[0].data : [];
		for(let i in this.tabs){
			this.dropDownValue.push('')
		}
	}
	tabChanged(tabIndex){
		this.dropDownValue = [];
		for(let i in this.tabs){
			this.dropDownValue.push('')
		}
		this.selectedIndex = -1;
		this.isDealSelected = false;
		this.selectedDeal = '';
		this.allData = (this.tabs[tabIndex] && this.tabs[tabIndex].data) ? this.tabs[tabIndex].data : [];
	}
	dropDownValueChanged(ind){
		this.selectedDeal = '';
		this.selectedIndex = -1;
		this.isDealSelected = false;
		this.dealData = (this.allData[this.dropDownValue[ind]] && this.allData[this.dropDownValue[ind]].data) ? this.allData[this.dropDownValue[ind]].data : [];
	}
	dealClicked(index){
		this.selectedDeal = (this.dealData[index] && this.dealData[index].deal) ? this.dealData[index].deal : '';
		this.dealDetails = (this.dealData[index] && this.dealData[index].details && this.dealData[index].details.data) ? this.dealData[index].details.data : [];
		this.selectedIndex = index;
		this.isDealSelected = true;
	}
}
