const {gql} = require("apollo-server");

module.exports = gql`
  type Query {
    workouts: [Workout!]!
  }

  type Mutation {
      add(title: String!, desc: String!, reps: Int, weight: Int): Workout!
  }

  type Workout {
    id: ID!
    title: String!
    desc: String!
    reps: Int
    weight: Int
  }
`