import { contadorComponent } from './contador/contador.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';




@NgModule({
    declarations:[
        contadorComponent
    ],
    exports: [
        contadorComponent
    ],
    imports: [
        CommonModule
    ]
})

export class ContadorModule{}