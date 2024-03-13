import { injectContentFiles } from '@analogjs/content';
import { Component } from '@angular/core';
import { PostAttributes } from './models';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterLink, NgFor],
  template: `
    <h2>Blog</h2>
    <ul>
      <li *ngFor="let post of posts">
        <a [routerLink]="post.slug"> {{ post.attributes.title }}</a>
      </li>
    </ul>
  `,
})
export default class BlogComponent {
  readonly posts = injectContentFiles<PostAttributes>((contentFile) => {
    return !contentFile.filename.includes('/archived/');
  });
}
