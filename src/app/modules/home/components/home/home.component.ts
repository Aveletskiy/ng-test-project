import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { untilDestroyed } from '@core';

import { QuoteService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {}

  ngOnDestroy(): void {}
}
