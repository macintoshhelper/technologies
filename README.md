# technologies
List of useful[\*](#disclaimers) technologies. Find pros, cons and use cases for the technologies. There are READMEs on getting started (setup) with the technologies too

## INDEX
- [Front-end](#front-end)
  - __JavaScript__
    - [React](#react)
      - [Redux](#redux)
    - [AngularJS](#angular)
    - [Polymer](#polymer)
    - [Web Components](#web-components)
  - __HTML__
  - __CSS__
    - [SASS](#sass)
    - [LESS](#less)
- [Back-end](#back-end)
  - __Languages__
    - [NodeJS](#nodejs)
      - [Express](#express)
      - [Hapi](#hapi)
    - [PHP](#php)
    - [Java](#java)
    - [C#](#.NET)
    - [C++](#C)
    - [Python](#python)
    - [Go](#go)
  - __Servers__
    - [Apache](#apache)
    - [Nginx](#nginx)

## FRONT-END
Technologies that help with displaying things in the browser

### JavaScript

#### React
JavaScript library for building user interfaces. 
Includes a virtual DOM which optimises DOM actions and is useful for Single Page Apps.

Pros
- Used by many companies and people.
- Virtual DOM is highly performant

Cons
- Some element of framework lock-in.
- Virtual DOM 
- Slightly restrictive license according to some people. Shouldn't be an issue, the second revision of the license gives Facebook the right to revoke the React license if someone chooses to bring a patent lawsuit against Facebook, which appears to be purely a defensive thing. Original license was a bit controversial due to the vague interpretation.

> **Sub Technologies**
##### Redux


#### Angular
JavaScript framework developed by Google.

Pros

Cons

#### Polymer
JavaScript library for building web apps using Web Components giving some syntactic sugar and polyfills (webcomponentsjs). 
Covers Material Design + Core and Paper elements

Pros
- Should be compatible with other frameworks, and since Web Components is part of the web standards now, there shouldn't be much framework lock-in.

Cons
- No virtual DOM. Made from the perspective that the DOM should be embraced and speed will improve over time
- Requires polyfills for Web Components which may be bad for performance in non-compliant browsers

#### Web Components
Part of the web standard.

Pros

Cons
- Limited browser support, so polyfills are required for some browsers with potentially reduced performance.
- Shadow DOM polyfill for non-compliant browsers is limited - (lookup Shadow DOM vs Shady DOM)

### HTML

### CSS

[Getting Started with CSS](https://github.com/macintoshhelper/learn-css)

#### SASS

[Getting Started with SASS](https://github.com/macintoshhelper/learn-css/sass)

#### LESS

## BACK-END
Server-related technologies

#### NodeJS

Pros

Cons

---

> **Frameworks**

##### Express

##### Hapi
Server framework for NodeJS.

[Getting Started](https://github.com/macintoshhelper/learn-hapi/)
- [Code Skeleton](https://github.com/macintoshhelper/learn-hapi/tree/master/servers)

Pros

Cons

---

#### PHP

#### Java

#### .NET

#### C++
Very solid and fast language.

#### Python
Good language - maybe useful for prototyping.

#### Go
Language developed by Google

---

#### Apache
Most popular web server. 

Pros
- Existed for a long time

Cons

#### Nginx
Fast web server often used for reverse proxies.

[Getting Started](https://github.com/besarthoxhaj/learn-nginx)
- [Code Skeletons/Examples](https://github.com/besarthoxhaj/learn-nginx/tree/master/configs)

Pros
- Can use Lua to write full-featured web servers
- Can create C modules for high performance

Cons



## DATABASES
Storing permanent data. 

### USE CASES
- Adding and storing users + user data in a social media site

### Relational

[Getting started with SQL](https://github.com/macintoshhelper/learn-sql/)

#### PostgreSQL

[Getting started with PostgreSQL](https://github.com/macintoshhelper/learn-sql/postgresql/)

Pros
- JSON as a datatype, and it is indexable [Using JSON in PostgreSQL](https://blog.codeship.com/unleash-the-power-of-storing-json-in-postgres/)
- More SQL compliant, might have more features

Cons
- SQL compliancy may make it slightly slower
- Missing some useful MySQL things like `ON DUPLICATE KEY UPDATE` - there are alternatives though

#### MySQL
Pros
- Widely used
- Proven to scale well
- MySQL 5.7 introduced a JSON data type

Cons
- Semi-dead as an open source project? Development seems to happen at MariaDB, but it has to be MySQL compatible

### NoSQL

#### MongoDB
JSON-like database storage system. 

Pros
- Simple to use
- No need to set a schema in advance

Cons
- Default security config allows anyone access to the database (use iptables firewall + secure before production goes live!)
- Has had issues with writes being acknowledged but being rollbacked.

#### CouchDB


## TEMPLATING

## Handlebars

Pros

Cons


##### Disclaimers
\* web for now
