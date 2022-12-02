import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.interface';
import { getPost } from 'src/app/service/cards.service';

@Component({
    selector: 'app-active-post',
    templateUrl: './active-post.component.html',
    styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent implements OnInit {

    posts!: Card[]

    constructor() {
    }

    ngOnInit(): void {
        getPost().then(posts => {
            console.log(posts)
            this.posts = posts.lista;
            this.activePosts()
            console.log(this.posts)
        })
    }

    activePosts() {
        this.posts = this.posts.filter(post => post.active)
    }

    onInactivePost(id: number) {
        console.log(this.posts);
        fetch('http://localhost:3000/lista' + '/' + id, {
            method: 'PATCH',
            body: JSON.stringify({
                active: false,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        location.reload();
    }

    cancella(id: number) {
        console.log(this.posts);
        fetch('http://localhost:3000/lista' + '/' + id, {
            method: 'DELETE',
            body: JSON.stringify({
                active: false,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        location.reload();
    }
}
