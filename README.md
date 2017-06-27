# technologies
Master reference for finding and learning any software technology. Find pros, cons, use cases for a technology and if you wish to learn said technology - check out the related Getting Started guide.

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
    
## WEB TECHNOLOGIES
---

## FRONT-END
> Technologies that help with displaying things in the browser

### JavaScript

#### React
> JavaScript library for building user interfaces. 
[Getting Started with React](https://github.com/macintoshhelper/learn-js/tree/master/react)
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
> JavaScript framework developed by Google.

Pros

Cons

#### Polymer
> JavaScript library for building web apps using Web Components giving some syntactic sugar and polyfills (webcomponentsjs). 
Covers Material Design + Core and Paper elements

[Getting Started with Polymer](https://github.com/macintoshhelper/learn-polymer)

Pros
- Should be compatible with other frameworks, and since Web Components is part of the web standards now, there shouldn't be much framework lock-in.

Cons
- No virtual DOM. Made from the perspective that the DOM should be embraced and speed will improve over time
- Requires polyfills for Web Components which may be bad for performance in non-compliant browsers

#### Web Components
> Part of the web standard.

[Getting Started with Web Components](https://www.youtube.com/playlist?list=PLOU2XLYxmsIJkA_W95NDrjdkk3dR6Jq4w) - Google Developers YouTube playlist

Pros

Cons
- Limited browser support, so polyfills are required for some browsers with potentially reduced performance.
- Shadow DOM polyfill for non-compliant browsers is limited - (lookup Shadow DOM vs Shady DOM)

### HTML

### CSS

[Getting Started with CSS](https://github.com/macintoshhelper/learn-css)

#### SASS

[Getting Started with SASS](https://github.com/macintoshhelper/learn-css/tree/master/sass)

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
> Server framework for NodeJS.

[Getting Started](https://github.com/macintoshhelper/learn-hapi/)
- [Code Skeleton](https://github.com/macintoshhelper/learn-hapi/tree/master/servers)

Pros

Cons

---

#### PHP

#### Java

#### .NET

#### C++
> Very solid and fast language.

#### Python
> Good language - maybe useful for prototyping.

#### Go
> Language developed by Google

---

#### Apache
> Most popular web server. 

Pros
- Existed for a long time

Cons

#### Nginx
> Fast web server often used for reverse proxies.

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
> JSON-like database storage system. 

Pros
- Simple to use
- No need to set a schema in advance

Cons
- Default security config allows anyone access to the database (use iptables firewall + secure before production goes live!)
- Has had issues with writes being acknowledged but being rollbacked.

#### CouchDB

#### Redis
> In-memory NoSQL key/value storage system.

Pros

Cons
- Default security is a bit weak (please use iptables firewall IP whitelist + enable password protection with a super long password which can't be brute forced (think 50 character minimum, 400 characters is good :) )) - anyone can connect and root a server by default...


## TEMPLATING

## Handlebars

Pros

Cons

## NATIVE APP TECHNOLOGIES
---

## UNIX

> Because Windows doesn't get a spot here ^\_^ :P
---

### Firewalls

#### iptables
> Good firewall included with Debian and other Linux systems

Pros
- Easy to use, especially with ufw
- Included with many Linux distros

Cons

#### bash
> Unix shell and command line language. 

[Getting Started with Bash](https://github.com/macintoshhelper/learn-bash)


## HARDWARE TECHNOLOGIES
---

##### Disclaimers
\* placeholder :)
