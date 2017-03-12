
# Introduction

I'll try to show you my approach in development by redux way.
I guess it's pretty boring to check just a folder structure,so 
I would like to demonstrate my `redux-app-skeleton` by example.
>This example is a poor,
>it's just a logic for a draft app ,but I hope that it'll be enough for understanding how I work with `redux`
>and why I choose this structure.

# RESULT?
[CHECK IT](http://osmanov.github.io/pentameter.html)

# HOW TO INSTALL
1. npm i 
2. it depends on your environment
   * PRODUCTION: <br /> 
   a) npm run build <br /> 
   b) open index.html in a browser through your static server   <br /> 
   * DEV: <br /> 
   node devServer.js and after that- open `http://localhost:3000` 


     
# Specification
This is my test-SPA-logic for `Pentameter` interview.

The app contains 3 pages:

* Welcome page
* Select author
* Author card

     
# Implementation    
 Check `src/containers` folder.
 App,Selection,Author are containers,so for my redux-SPA-logic a container is a page.
### Welcome page
The container for this page is `<App/>`.
It contains just a single component `<Welcome/>`(the components location is  `src/components`)
This component shows users the main info about app and when the user clicks the button _Select author,read and enjoy_ in `<Welcome/>`,
it will jump to `Select author` page.
### Select author
The container for this page is a `<Selection/>`.
It contains component:`<AuthorsList>`
This component build a list with authors names.For authors names our app has another component `<AuthorItem>`,- when the user clicks by this component,
the app will jump to `Author` page by clicked id from `<AuthorItem>`.
Surely, the container can store another components too,- like:`<Paginator/>` for  `<AuthorsList>` or `<SearchBar/>` for a searching  author.... 
### Author card
The container for this page is a `<Author/>`.
This page will show the all poems from author and also it might contain his profile.
I don't write code for this container cause it uses the same logic concept like  `<Selection/>`


**So far so good, the structure and relations between the components and containers look like this:**   
```xml
<App>
   <Welcome />
</App>
<Selection>
   <AuthorsList>
         <AuthorItem/>
         <AuthorItem/>
      ...
   </AuthorsList>
</Selection>
<Author>
    <PoemsList>
      <PoemItem/>
      <PoemItem/>
      ...
    </PoemsList>
</Author>
```

## Details for `select author page`  
I would like to explain a bit more about this page cause it seems the container `<Selection/>` makes a lot of redux job.
The app don't have an initial default state in `src/store/configureStore`,it might be don't clear for understanding how  `<Selection/>` props.list to get
a not empty collection for `<AuthorsList>`,the answer is `componentDidMount`.
When  `mapStateToProps` call the first time- `authors.list` from `state` is empty array,
then  `componentDidMount` call `this.props.actions.fetchAuthors`(`this.props.actions` comes from `mapDispatchToProps`),
then  action `authors.fetchAuthors` interects with api and brings to reducer the next state by `RECEIVE_AUTHORS` type, after that `reducer` to change
`state` and finally `mapStateToProps` call the second time and voila props.list with data from api.      

## Test
npm test

# Benefits of this file structure
* Clear file structure
* Reusable components
* The components and containers have his own uniq-local css

# Some interesting dependencies:
I don't use the all features from sass,for my needs
[postcss-nested](https://github.com/postcss/postcss-nested) and [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars) are enough.
The Postcss plugin way is handy 


