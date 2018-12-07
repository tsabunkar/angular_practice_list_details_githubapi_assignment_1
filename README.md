# Practice_GitHubApi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


-----------------------

Github Users list
•	Display Github users by the order of id using the following API doc
    o	https://api.github.com/users
    o	Display ‘Avatar’ {avatar_url} and ‘Login’ {login} from API response in a list.

Note - Refer https://developer.github.com/v3/users/#get-all-users for the API reference

•	On click of any of listed item, display the details as below,
    o	Data to be displayed mapping from JSON response
        	Avatar Image: {avatar_url}
        	Type: {type}
        	Repos: {public_repos}
        	Followers: {followers}
