import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/models/card.interface';

@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

    @Input() post!: Card

    constructor() { }

    ngOnInit(): void {
    }

}
