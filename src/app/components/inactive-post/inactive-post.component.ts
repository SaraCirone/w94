import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.interface';
import { getPost } from 'src/app/service/cards.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss']
})
export class InactivePostComponent implements OnInit {

  posts!: Card[]

    constructor() {
        getPost().then(posts => {
            console.log(posts)
            this.posts = posts.lista;
            this.inactivePosts()
            console.log(this.posts)
        })
    }

    ngOnInit(): void {
    }

    inactivePosts() {
        this.posts = this.posts.filter(post => !post.active)
    }

    onActivePost(id: number) {
        console.log(this.posts);
        fetch('http://localhost:3000/lista' + '/' + id, {
            method: 'PATCH',
            body: JSON.stringify({
                active: true,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        location.reload();
    }

    cancella(id: number) {
        console.log(this.posts);
        fetch('http://localhost:3000/lista' + '/' + id, {
            method: 'DELETE',
            body: JSON.stringify({
                active: true,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        location.reload();
    }
}
