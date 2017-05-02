# technologies
List of useful* technologies. Find pros, cons and use cases for the technologies. There are READMEs on getting started (setup) with the technologies too

## FRONT-END
Technologies that help with displaying things in the browser

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

#### Angular

#### Polymer
JavaScript library for building web apps using Web Components giving some syntactic sugar and polyfills (webcomponentsjs). 
Covers Material Design + Core and Paper elements

Pros
- Should be compatible with other frameworks, and since Web Components is part of the web standards now, there shouldn't be much framework lock-in.

Cons
- No virtual DOM. Made from the perspective that the DOM should be embraced and speed will improve over time

#### Web Components



## BACK-END
Server-related technologies

#### NodeJS

Pros

Cons

> Frameworks

##### Express

##### Hapi


#### PHP

#### Java

#### .NET

#### C++
Very solid and fast language.

#### Python

#### Go


## DATABASES
Storing permanent data. 

### USE CASES
- Adding and storing users + user data in a social media site

### Relational

#### PostgreSQL

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

Cons
- Semi-dead as an open source project? Development seems to happen at MariaDB, but it has to be MySQL compatible

### NoSQL

#### MongoDB
JSON-like database storage system. 

Pros

Cons
- Default security config allows anyone access to the database (use iptables firewall! + secure before goes live)
- Has had issues with writes being acknowledged but being rollbacked.

#### CouchDB

\* web for now
