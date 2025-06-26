import { ChangeDetectionStrategy, Component, effect, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarModel, InfoCarsService } from '../../services/info-cars.service';
import { switchMap, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-form-example2',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './form-example2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormExample2Component {

  fb = inject(FormBuilder);

  infoCarsService = inject(InfoCarsService);

  brands$ = this.infoCarsService.getBrands();

  models = signal<CarModel[]>([]);

  loadingModels = signal(false);

  formExample2 = this.fb.group({
    brand: [null as number | null, [Validators.required]],
    model: [null as number | null, [Validators.required]],
  });

  onFormChange = effect((onCleanup) => {
    const brandSubscription = this.formExample2.get('brand')?.valueChanges
      .pipe(
        tap(() => {
          this.formExample2.get('model')?.reset()
          this.loadingModels.set(true);
        }),
        switchMap(brandId =>
          this.infoCarsService.getModelsByBrand(brandId ?? 0)
        )
      ).subscribe(models => {
        this.models.set(models);
        this.loadingModels.set(false);
      });
    onCleanup(() => {
      brandSubscription!.unsubscribe();
    });
  });


  onSubmit() {
    if (this.formExample2.valid) {
      console.log('Form Submitted!', this.formExample2.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
