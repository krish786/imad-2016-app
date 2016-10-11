var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
 'article-one' : {
    tital: 'Article one|krish',
    heading: 'Article one',
    date: 'sep 25,2016',
    content:`
         <p>
             this is my content for my first article one.this is my content for my first article one
             this is my content for my first article onethis is my content for my first article one
             this is my 
         </p>
         <p>
             this is my content for my first article one.this is my content for my first article one
             this is my content for my first article onethis is my content for my first article one
             this is my content
         </p>
         <p>
             this is my content for my first article one.this is my content for my first article one
             this is my content for my first article onethis is my content for my first article one
             this is my conten
         </p> `
},
 'article-two' : {
     tital: 'Article two|krish',
    heading: 'Article two',
    date: 'sep 25,2016',
    content:`
         <p>
             this is my content for my second article one.
            
         </p> `
 },
 'article-three' : {
     tital: 'Article three|krish',
    heading: 'Article three',
    date: 'sep 10,2016',
    content:`
        <p>
             this is my content for my third article one.
        </p>`
},
};


function createtemplate (data) {
    
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
var htmltemplate = `  
      <title>
     ${title}
     </title>
     <meta name="viewport" content="width=device-width, initial-scale=1" />
     <link href="/ui/style.css" rel="stylesheet" />
 </head>    
 <body>
     <div class="container">
     <div>
         <a href="/">Home</a>
     </div>
     <hr/>
     <h3>
         ${heading}
     </h3>
     <div>
         ${date}
     </div>
     <div>
         ${content}
     </div>
 </div>
 </body>
    
    
</html>



`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function(req, res) {
        counter = counter + 1;
        res.send(counter.toString());
});

var names = [];

app.get('/submit-name', function (req, res){ //URL:/submit-name?name=xxxx
    //get the name from request
    var name = req.query.name;
    names.push(name);
    //JSON: javascript object notation
    res.send(JSON.stringify(names));

});

app.get('/:articleName', function (req, res){
    // articleName= artcle-one
    // articles[artcleName]={} content object of artcle one
    var articleName = req.params.articleName;
 res.send(createtemplate(articles[articleName]));  
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
