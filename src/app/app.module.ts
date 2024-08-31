import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";

import { BrowserModule } from "@angular/platform-browser";


import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/task.module";

@NgModule( {
    imports: [BrowserModule, SharedModule, TasksModule],
    declarations: [AppComponent, HeaderComponent, UserComponent],
    providers: [],
    bootstrap: [AppComponent],
    exports: []
})

export class AppModule {}