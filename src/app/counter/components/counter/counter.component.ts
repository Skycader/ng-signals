import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  public counter = signal(0);
  public changes = signal(-1);
  public doubled = computed(() => this.counter() * this.counter());
  public effect = effect(
    () => {
      this.counter();
      this.changes.update((changes) => changes + 1);
    },
    { allowSignalWrites: true }
  );
  public increment() {
    this.counter.update((value) => value + 1);
  }

  public decrement() {
    this.counter.update((value) => value - 1);
  }

  counter2 = 0;
}
