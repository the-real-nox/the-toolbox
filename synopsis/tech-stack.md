# Tech-stack
After a long time of thinking which technologies would be best-suited for the project, I settled on the following:
- Vite-Express
- React
- PostgreSQL
- MongoDB

I've made an attempt to do this with NextJS, but it felt way to closed and unintuitive for me (personal preference), so
I decided to go for a more open and hands-on approach.

## Vite-Express
We all know that [Vite](https://vite.dev/) is awesome for React because of its speed and HMR.
Something that always bugged me since I started to get into the project was that with express,
you would server your frontend with one server and the express-backend through another. That makes
a few things more complicated (or near impossible), when you e.g. want to dynamically load modules (plugins), since
you are not on the same runtime. [Vite-Express](https://github.com/szymmis/vite-express) seems to tackle this challenge pretty well.

## React
There is not much to say about it on my site. It's the technology I'm interested in and the one I want to learn more about.  
Also, its just nice to use the [react-router](https://reactrouter.com/). When utilizing code splitting, initial load time also will not be such big of a bummer.

## PostgreSQL
It's fast and pretty much the industry standard ig, so I'm going to use it.

I will use [Mikro-ORM](https://mikro-orm.io/), since its simple and focused on performance.

## MongoDB
I will use [MongoDB](https://www.mongodb.com) with [mongoose](https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/) as my document-storage.