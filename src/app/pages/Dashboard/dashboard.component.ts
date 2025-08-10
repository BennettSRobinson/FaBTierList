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
import { HeroCreateDialogComponent } from "src/app/components/HeroModal/hero-dialog.component";
import { MatDialog } from "@angular/material/dialog";


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
  year: string = '';
  month: string = '';
  displayedColumns1: string[] = ['tier', 'heroes', 'actions'];

  // Fixed tiers
  allTiers: string[] = ['S', 'A', 'B', 'C', 'D'];


  dataSource1: any[] = [];

  constructor (
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tpService: TimePeriodService,
    private heroService: HeroService,
    private dialog: MatDialog){}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.month = params.get('month') || ''
      this.year = params.get('year') || ''
      const currentYear = this.date.getFullYear().toString();
      const currentMonth = this.date.toLocaleString('default', { month: 'long' });
      if(this.year === ''){
        this.router.navigate(['/tierlist', currentYear, currentMonth])
      } else {
        this.getIsCurrentMonth(currentMonth, currentYear, this.month, this.year)
      }
      this.loadHeros()
    })
  }

  loadHeros(): void {
    this.tpService.getTimePeriodId(+this.year, this.month).subscribe(timePeriodId => {
      const id = timePeriodId.data['time_period'].id
      this.heroService.getHeroTierList(+id).subscribe((heroes: any) => {
        const heroList = heroes.data.heroes;
        this.dataSource1 = this.allTiers.map(tier => ({
          tier,
          heroes: heroList[tier]
        }));
      })

    });
  }
  handleCRUDialog(data: any, crud: string): void {
    const dialogRef = this.dialog.open(HeroCreateDialogComponent, {
      data: {
        crud,
        id: data.id || null,
        name: data?.hero_details?.name || '',
        win_rate: data?.win_rate || null,
        total_talishar_plays: data?.total_talishar_plays || null,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        if (result?.crud === 'create'){
          this.heroService.createHero({
            password: result?.password,
            name: result?.name,
            url: result?.url,
            year: +this.year,
            month: this.month,
            win_rate: result?.win_rate,
            total_talishar_plays: result?.games_played
          }).subscribe({
            next: (createdHero) => {
              this.loadHeros()
            },
            error: (err) => {
              console.error("Something went wrong when creating a hero", err)
            }
          });
        } else if(result?.crud === "edit"){
          this.heroService.editHero({
            id: result?.id,
            password: result.password,
            win_rate: result?.win_rate,
            total_talishar_plays: result?.games_played
          }).subscribe({
            next: (editedHero) => {
              this.loadHeros()
            },
            error: (err) => {
              console.error("Something went wrong when editing a hero", err)
            }
          });
        } else {
          this.heroService.deleteHero(result?.id, result?.password).subscribe({
            next: (deleteHero) => {
              this.loadHeros()
            },
            error: (err) => {
              console.error("Something went wrong when deleting a hero", err)
            }
          })
        }
      }
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
    // if (this.displayedColumns1.includes('actions') && !this.isCurrentMonth){
    //   this.displayedColumns1 = this.displayedColumns1.filter(item => item !== 'actions')
    // }
  }
}
