import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { MainComponent } from './main/main.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ArticlesTipsComponent } from './articles-tips/articles-tips.component';

@NgModule({
  declarations: [
    AppComponent,
    ListHeaderComponent,
    MainComponent,
    ArticleFormComponent,
    ListComponent,
    ListItemComponent,
    ArticlesTipsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
