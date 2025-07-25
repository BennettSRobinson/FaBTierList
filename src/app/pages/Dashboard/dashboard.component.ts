import { Component, ViewEncapsulation } from "@angular/core";
import { MaterialModule } from '../../material.module';
import { CommonModule, Location } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from "@angular/router";
import { TimePeriodService } from "src/app/services/timePeriod.service";
import { HeroService } from "src/app/services/hero.service";
import { MatTooltipModule } from "@angular/material/tooltip";


@Component({
  imports: [
    MaterialModule,
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule
  ],
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None
})

export class DashboardComponent {
  date: Date = new Date()
  isCurrentMonth: Boolean = false;
  displayedColumns1: string[] = ['tier', 'heroes'];

  // Fixed tiers
  allTiers: string[] = ['S', 'A', 'B', 'C', 'D'];


  dataSource1: any[] = [];

  constructor (
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tpService: TimePeriodService,
    private heroService: HeroService){}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const month = params.get('month') || ''
      const year = params.get('year') || ''
      const currentYear = this.date.getFullYear().toString();
      const currentMonth = this.date.toLocaleString('default', { month: 'long' });
      if(year === ''){
        this.router.navigate(['/tierlist', currentYear, currentMonth])
      } else {
        this.getIsCurrentMonth(currentMonth, currentYear, month, year)
      }
      this.tpService.getTimePeriodId(+year, month).subscribe(timePeriodId => {
        const id = timePeriodId.data['time_period'].id
        this.heroService.getHeroTierList(+id).subscribe((heroes: any) => {
          const heroList = heroes.data.heroes;
          this.dataSource1 = this.allTiers.map(tier => ({
            tier,
            heroes: heroList[tier]
          }));
        })

      });
    })
  }
  getTierClass(tier: string): string {
    return `tier-${tier.toLowerCase()}`; // e.g., tier-s, tier-a, etc.
  }

  getIsCurrentMonth(currentMonth: string, currentYear: string, month: string, year:string): void {
    this.isCurrentMonth = currentYear == year && currentMonth == month;
    if (this.isCurrentMonth && !this.displayedColumns1.includes("actions")){
      this.displayedColumns1.push("actions")
    }
    if (this.displayedColumns1.includes('actions') && !this.isCurrentMonth){
      this.displayedColumns1 = this.displayedColumns1.filter(item => item !== 'actions')
    }
  }
}
