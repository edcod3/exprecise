const {ApolloServer} = require("apollo-server");

const typeDefs = require("./typeDefs")
 
//Data 

let workouts = [
    {id: "workout-0", title: "push-ups", desc: "Do some push-ups" ,reps: "30", kg: null},
    {id: "workout-1", title: "pull-ups", desc: "Do some pull-ups" ,reps: "21", kg: null}
]
let woID = workouts.length


const resolvers = {
  Query: {
    workouts: () => workouts,
  },
  Mutation: {
    add: (parent, args) => {
        const newWo = {
            id: `workout-${woID++}`,
            title: args.title,
            desc: args.desc,
            reps: Number(args.reps) || null,
            weight: Number(args.weight) || null
        }
        workouts.push(newWo)
        return newWo
    }
  },
  Workout: {
    id: (parent) => parent.id,
    title: (parent) => parent.title,
    desc: (parent) => parent.desc,
    reps: (parent) => parent.reps,
    weight: (parent) => parent.weight
  }
};
 
const server = new ApolloServer({ typeDefs, resolvers });
 
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
